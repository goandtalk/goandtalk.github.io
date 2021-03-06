(function(){
  'use strict';
  /**
   * Parse the input string with options.
   *
   * @param {String} str The string to parse.
   * @param {Object?} opts
   *        @param {Boolean?} opts.loose Whether to tolerate ambiguous delimiters. Default: false
   *        @param {String?} opts.lang The name of the parser to use if opts.parsers is not a function. Default: 'yaml'
   *        @param {(String|Array)?} opts.delims Custom delimiter(s). Default: '---' or ['---', '---']
   *        @param {(Function|Object.<String, Function>)?} opts.parsers Custom parser(s). Default: {'yaml':yaml,'toml':toml}
   * @return {Object} result
   *         @param {String} result.src The original input string.
   *         @param {String} result.body The input string without front matter.
   *         @param {Mixed} result.data The data returned from the parsers. Default: null
   */
  function matter(str, opts) {

    str = formatString(str);
    opts = formatOptions(opts);
    var result = {src: str, data: null, body: str};
    if (!str) {
      return result;
    }

    var strict = !opts.loose;
    var header = opts.delims[0];
    var footer = opts.delims[1];
    var dataStart, dataEnd;
    // Front matter must start from the first byte.
    if (str.substr(0, header.length) !== header ||
        // Whether the delimiter is followed by a strange character.
        (!opts.loose && header.length < str.length &&
            str[header.length] !== '\n' &&
            str[header.length] === header[header.length-1]) ||
        // Metadata and delimiters should be separated with linefeeds.
        (dataStart = str.indexOf('\n', header.length)) < 0 ||
        (dataEnd = str.indexOf('\n' + footer, dataStart)) < 0) {
      return result;
    }
    var bodyStart = dataEnd + 1 + footer.length;
    // Whether the delimiter is followed by strange characters.
    if (strict && bodyStart < str.length) {
      if (str[bodyStart] !== '\n' && str[bodyStart] === footer[footer.length-1]) {
        return result;
      }
      while (bodyStart < str.length && str[bodyStart] !== '\n') {
        if (/^[^\s]$/.test(str[bodyStart])) {
          return result;
        }
        bodyStart++;
      }
    }  // else: Tolerate the case that a linefeed is missing: <end-delimiter><body>
    if (str[bodyStart] === '\r') { bodyStart++; }
    if (str[bodyStart] === '\n') { bodyStart++; }
    var data;
    if (dataStart < dataEnd &&
        (data = str.substr(dataStart, dataEnd - dataStart).trim())) {
      var lang = str.substr(header.length, dataStart - header.length)
                    .trim().toLowerCase() || opts.lang;
      var parse;
      if (typeof opts.parsers === 'function') {
        parse = opts.parsers;
      } else if (opts.parsers != null && opts.parsers[lang]) {
        parse = opts.parsers[lang];
      } else {
        parse = matter.parsers[lang];
      }
      if (typeof parse === 'function') {
        result.data = parse(data, {loose: opts.loose});
      } else {
        throw new Error(message('No parser found for the language: ' + lang));
      }
    }
    result.body = result.body.substr(bodyStart);

    return result;
  }


  /**
   * Test if the input string contains front matter.
   *
   * @param {String} str The input string.
   * @param {Options} opts
   *        @param {Boolean} opts.loose Whether to tolerate ambiguous delimiters.
   *        @param {(String|Array)?} opts.delims Custom delimiter(s). Default: '---' or ['---', '---']
   * @return {Boolean}
   */
  matter.test = function (str, opts) {
    if ((typeof str !== 'string') || !str) {
      return false;
    }
    opts = (opts != null ? opts : {});
    var delims = formatDelimiters(opts.delims, true);
    if (!delims) {
      return false;
    }
    var header = delims[0];
    var footer = delims[1];
    var strict = !opts.loose;
    var dataStart, dataEnd;
    // Front matter must start from the first byte.
    if (str.substr(0, header.length) !== header ||
        // Whether the delimiter is followed by a strange character.
        (strict && header.length < str.length &&
            str[header.length] !== '\n' &&
            str[header.length] === header[header.length-1]) ||
        // Metadata and delimiters should be separated with linefeeds.
        (dataStart = str.indexOf('\n', header.length)) < 0 ||
        (dataEnd = str.indexOf('\n' + footer, dataStart)) < 0) {
      return false;
    }
    var bodyStart = dataEnd + 1 + footer.length;
    // Whether the delimiter is followed by strange characters.
    if (strict && bodyStart < str.length) {
      if (str[bodyStart] !== '\n' && str[bodyStart] === footer[footer.length-1]) {
        return false;
      }
      while (bodyStart < str.length && str[bodyStart] !== '\n') {
        if (/^[^\s]$/.test(str[bodyStart])) {
          return false;
        }
        bodyStart++;
      }
    }  // else: Tolerate the case that a linefeed is missing: <end-delimiter><body>
    return true;
  };

  function formatString(str) {
    if (typeof str !== 'string') {
      throw new Error(message('The first argument of matter() must be of type String.'));
    }
    if (str.charCodeAt(0) === 0xFEFF) {
      // Remove the optional byte-order mark.
      return str.substr(1);
    }
    return str;
  }

  function formatDelimiters(delims, nothrow) {
    if (!Array.isArray(delims)) {
      delims = [delims];
    } else {
      delims = delims.slice(0);  // shallow-clone
    }
    delims[0] = delims[0] != null ?
        delims[0] : (delims[1] != null ? delims[1] : '---');
    delims[1] = delims[1] != null ?
        delims[1] : (delims[0] != null ? delims[0] : '---');
    if ((typeof delims[0] !== 'string') || (typeof delims[1] !== 'string')) {
      if (!nothrow) {
        throw new Error(message('The option "delims" is invalid.'));
      }
      return null;
    }
    return delims;
  }

  function formatOptions(opts) {
    if (opts == null) {
      return {
        loose: false,
        lang: 'yaml',
        delims: ['---', '---'],
        parsers: null
      };
    } else {  // shallow-clone
      opts = {
        loose: opts.loose,
        lang: opts.lang,
        delims: opts.delims,
        parsers: opts.parsers
      };
    }
    opts.lang = (opts.lang != null) ? opts.lang : 'yaml';
    if (typeof opts.lang !== 'string') {
      throw new Error(message('The option "lang" must be a string.'));
    }
    opts.lang = opts.lang.trim().toLowerCase();
    opts.delims = formatDelimiters(opts.delims);
    opts.parsers = (opts.parsers != null ? opts.parsers : null);
    opts.loose = Boolean(opts.loose);
    return opts;
  }


  function message(msg) {
    return '[matter]: ' + msg;
  }

  matter.parsers = {
    /**
     * @param {Object} opts
     *        @param {Boolean} opts.loose Whether to ignore errors.
     * @return {Mixed}
     */
    yaml: function (str, opts) {
      opts = (opts == null ? {} : opts);
      var parser = window.jsyaml;
      try {
        var data = parser.safeLoad(str);
        return data !== undefined ? data : {};
      } catch (err) {
        return null;
      }
    },
    /**
     * @param {Object} opts
     *        @param {Boolean} opts.loose Whether to ignore errors.
     * @return {Mixed}
     */
    toml: function (str, opts) {
      var parser = window.toml;
      try {
        return parser.parse(str);
      } catch (err) {
        return null;
      }
    },
    json: function (str, opts) {
      try {
        // the frontmatter str does not include opening or enclosing {}
        return JSON.parse('{' + str + '}');
      } catch (err) {
        return null;
      }
    }
  };
  window.frontMatter = matter;
  // module.exports = matter;

})();
