(function($, $$) {

const SELECTOR = ".markdown, [mv-markdown-options]";

Mavo.Plugins.register("markdownit", {
	ready: Promise.all([
		$.include(self.markdownit, "https://cdnjs.cloudflare.com/ajax/libs/markdown-it/8.4.2/markdown-it.min.js"),
		$.include(self.DOMPurify, "https://cdnjs.cloudflare.com/ajax/libs/dompurify/1.0.8/purify.min.js")
	]),
	init: function() {
		self.MarkdownIt = self.MarkdownIt || markdownit({
			html: true,
			highlight: function(str, lang) {
				if (lang) {
					if (self.Prism && Prism.languages[lang]) {
						try {
							return Prism.highlight(str, Prism.languages[lang], lang);
						} catch(err){
							console.log(err);
						}
					} else if (self.hljs && hljs.getLanguage(lang)) {
						try {
			        return hljs.highlight(lang, str).value;
			      } catch (err) {}
					}
				}
				return '';//skip highlighting
			},
		});
	},
	hooks: {
		"init-start": function() {
			// Disable expressions on Markdown properties, before expressions are parsed
			var selector = Mavo.selectors.and(Mavo.selectors.primitive, SELECTOR);

			for (var element of $$(selector, this.element)) {
				element.setAttribute("mv-expressions", element.getAttribute("mv-expressions") || "none");
			}
		}
	},
	render: function(element, markdown, mdInstance) {
		mdInstance = mdInstance || self.MarkdownIt;
		var env = {element, markdown};
		Mavo.hooks.run("markdown-render-before", env);
		env.markdown = env.markdown || '';
		try {
			env.rawHTML = mdInstance.render(env.markdown);
		} catch(e) {
			console.log(e);
			env.rawHTML = '';
		}

		env.html = DOMPurify.sanitize(env.rawHTML);
		Mavo.hooks.run("markdown-render-after", env);

		element.innerHTML = env.html;

		requestAnimationFrame(function() {
			$.fire(element, "mv-markdown-render");
		});
	}
});

Mavo.Elements.register("markdownit", {
	default: true,
	selector: SELECTOR,
	hasChildren: true,
	init: function() {
		var options = this.element.getAttribute("mv-markdown-options");

		if (options && !this.fromTemplate("mardownit")) {
			this.markdownit = new markdownit(Mavo.options(options));
		}
	},
	editor: function() {
		var env = {context: this};
		env.editor = $.create("textarea");
		env.editor.style.whiteSpace = "pre-wrap";

		var width = this.element.offsetWidth;

		if (width) {
			env.editor.width = width;
		}

		Mavo.hooks.run("markdown-editor-create", env);

		return env.editor;
	},
	done: function() {
		// Has it actually been edited?
		this.preEdit && this.preEdit.then(function() {
			Mavo.Plugins.loaded.markdownit.render(this.element, this.value, this.markdownit);
		}.bind(this));
	},
	setValue: function(element, value) {
		if (this.editor) {
			this.editor.value = value;
		}
		else {
			Mavo.Plugins.loaded.markdownit.render(this.element, value, this.markdownit);
		}
	},
	// We don't need an observer and it actually causes problems as it tries to feed HTML changes back to MD
	observer: false
});

Mavo.Formats.Markdown = $.Class({
	extends: Mavo.Formats.Base,
	constructor: function(backend) {
		this.property = this.mavo.root.getNames("Primitive")[0];
		var primitive = this.mavo.root.children[this.property];
		primitive.config = Mavo.Elements.markdownit;
	},

	static: {
		extensions: [".md", ".markdown"],
		parse: Mavo.Formats.Text.parse,
		stringify: Mavo.Formats.Text.stringify
	}
});

})(Bliss, Bliss.$);
