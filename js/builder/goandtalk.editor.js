/* Go and Talk Page Bbuilder
* (c) 2019 goandmake.app. All rights reserved.
* this computer program is proprietary.
* it is free for non-commercial use.
* commercial use and redistribution are prohibited.
* editor code for edge 12 and above, no support for ie
*/
"use strict";

(function(){
  if (!window.gtpb) {
    console.log("The variable gtpb must be defined before including this file.");
    return;
  }
  function getSiteID(){
    if(gtpb.current_site) return gtpb.current_site;
    var params = (new URL(window.location)).searchParams;
    gtpb.current_site = params.get('site') || localStorage.getItem("current_site") || gtpb.default.site_id;
    return gtpb.current_site;
  }
  function getDocID(){
    if(gtpb.current_doc) return gtpb.current_doc;
    var params = (new URL(window.location)).searchParams;
    //the filepath is the path relative to content folder.
    gtpb.current_doc = params.get('doc') || localStorage.getItem(window.location.pathname + "#current_doc") || (window.location.pathname === "/"? "content/_index.md" : ("content" + window.location.pathname.replace(/\/$/,"") + ".md"));
    return gtpb.current_doc.replace(/^_/, 'content/_'); //PouchDB reserves leading _ for internal use, so we will use /_index.md as id
  }
  //variables available in functions.
  var site_id = getSiteID();
  // a site has its own db.
  var db = new PouchDB(site_id, {auto_compaction: true});
  // the list of predefined css classes, solid_background includes overlay_background (with alpha )
  var dropdown_datalist = gtpb.dropdown_datalist = {
    link_color: ["link-yellow","link-gold","link-white","link-white-90","link-white-80","link-white-70","link-white-60","link-white-50","link-black","link-black-05","link-black-10","link-black-20","link-black-30","link-black-40","link-black-50"],

  	text_color: ["primary-color-first-letter-h3","black-90", "black-80", "black-70", "black-60", "black-50", "black-40", "black-30", "black-20", "black-10", "black-05", "white-90", "white-80", "white-70", "white-60", "white-50", "white-40", "white-30", "white-20", "white-10", "black", "near-black", "dark-gray", "mid-gray", "gray", "silver", "light-silver", "moon-gray", "light-gray", "near-white", "white", "dark-red", "red", "light-red", "orange", "gold", "yellow", "light-yellow", "purple", "light-purple", "dark-pink", "hot-pink", "pink", "light-pink", "dark-green", "green", "light-green", "navy", "dark-blue", "blue", "light-blue", "lightest-blue", "washed-blue", "washed-green", "washed-yellow", "washed-red", "primary-color", "primary-color-light", "primary-color-dark"],
  	overlay_background: ["bg-black-90", "bg-black-80", "bg-black-70", "bg-black-60", "bg-black-50", "bg-black-40", "bg-black-30", "bg-black-20", "bg-black-10", "bg-black-05", "bg-white-90", "bg-white-80", "bg-white-70", "bg-white-60", "bg-white-50", "bg-white-40", "bg-white-30", "bg-white-20", "bg-white-10", "bg-primary-color-dark-90"],
  	solid_background: ["bg-black","bg-near-black","bg-dark-gray","bg-mid-gray","bg-gray","bg-silver","bg-light-silver","bg-moon-gray","bg-light-gray","bg-near-white","bg-white","bg-transparent","bg-dark-red","bg-red","bg-light-red","bg-orange","bg-gold","bg-yellow","bg-light-yellow","bg-purple","bg-light-purple","bg-dark-pink","bg-hot-pink","bg-pink","bg-light-pink","bg-dark-green","bg-green","bg-light-green","bg-navy","bg-dark-blue","bg-blue","bg-light-blue","bg-lightest-blue","bg-washed-blue","bg-washed-green","bg-washed-yellow","bg-washed-red", "bg-primary-color", "bg-primary-color-dark", "bg-primary-color-light", "bg-black-90", "bg-black-80", "bg-black-70", "bg-black-60", "bg-black-50", "bg-black-40", "bg-black-30", "bg-black-20", "bg-black-10", "bg-black-05", "bg-white-90", "bg-white-80", "bg-white-70", "bg-white-60", "bg-white-50", "bg-white-40", "bg-white-30", "bg-white-20", "bg-white-10", "bg-primary-color-dark-90", "bg-primary-color-lighter","bg-accent-color","bg-accent-color-light"],
    border_color: ["b--black","b--near-black","b--dark-gray","b--mid-gray","b--gray","b--silver","b--light-silver","b--moon-gray","b--light-gray","b--near-white","b--white","b--transparent","b--dark-red","b--red","b--light-red","b--orange","b--gold","b--yellow","b--light-yellow","b--purple","b--light-purple","b--dark-pink","b--hot-pink","b--pink","b--light-pink","b--dark-green","b--green","b--light-green","b--navy","b--dark-blue","b--blue","b--light-blue","b--lightest-blue","b--washed-blue","b--washed-green","b--washed-yellow","b--washed-red", "b--primary-color", "b--primary-color-dark", "b--primary-color-light", "b--black-90", "b--black-80", "b--black-70", "b--black-60", "b--black-50", "b--black-40", "b--black-30", "b--black-20", "b--black-10", "b--black-05", "b--white-90", "b--white-80", "b--white-70", "b--white-60", "b--white-50", "b--white-40", "b--white-30", "b--white-20", "b--white-10", "b--primary-color-dark-90", "b--primary-color-lighter", "b--accent-color", "b--accent-color-light" ],
  	font_weight: ["normal","b","fw1","fw2","fw3","fw4","fw5","fw6","fw7","fw8","fw9"],
  	serif_font_family: ["athelas","georgia","times","bodoni",  "calisto",  "garamond",  "baskerville"],
    slow_motion: ["none","slowUp", "slowDown", "slowLeft", "slowRight", "slowZoomIn", "slowZoomOut","slowUpInfinite", "slowDownInfinite", "slowLeftInfinite", "slowRightInfinite", "slowZoomInInfinite", "slowZoomOutInfinite"],
    slide_animation: ["fadeIn", "fadeInUp", "zoomIn", "slideInLeft", "slideInRight"],
    fas_list: ["ad", "address-book", "address-card", "adjust", "air-freshener", "align-center", "align-justify", "align-left", "align-right", "allergies", "ambulance", "american-sign-language-interpreting", "anchor", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "angry", "ankh", "apple-alt", "archive", "archway", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows-alt", "arrows-alt-h", "arrows-alt-v", "assistive-listening-systems", "asterisk", "at", "atlas", "atom", "audio-description", "award", "backspace", "backward", "balance-scale", "ban", "band-aid", "barcode", "bars", "baseball-ball", "basketball-ball", "bath", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-slash", "bezier-curve", "bible", "bicycle", "binoculars", "birthday-cake", "blender", "blender-phone", "blind", "bold", "bolt", "bomb", "bone", "bong", "book", "book-dead", "book-open", "book-reader", "bookmark", "bowling-ball", "box", "box-open", "boxes", "braille", "brain", "briefcase", "briefcase-medical", "broadcast-tower", "broom", "brush", "bug", "building", "bullhorn", "bullseye", "burn", "bus", "bus-alt", "business-time", "calculator", "calendar", "calendar-alt", "calendar-check", "calendar-minus", "calendar-plus", "calendar-times", "camera", "camera-retro", "campground", "cannabis", "capsules", "car", "car-alt", "car-battery", "car-crash", "car-side", "caret-down", "caret-left", "caret-right", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "caret-up", "cart-arrow-down", "cart-plus", "cat", "certificate", "chair", "chalkboard", "chalkboard-teacher", "charging-station", "chart-area", "chart-bar", "chart-line", "chart-pie", "check", "check-circle", "check-double", "check-square", "chess", "chess-bishop", "chess-board", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "church", "circle", "circle-notch", "city", "clipboard", "clipboard-check", "clipboard-list", "clock", "clone", "closed-captioning", "cloud", "cloud-download-alt", "cloud-moon", "cloud-sun", "cloud-upload-alt", "cocktail", "code", "code-branch", "coffee", "cog", "cogs", "coins", "columns", "comment", "comment-alt", "comment-dollar", "comment-dots", "comment-slash", "comments", "comments-dollar", "compact-disc", "compass", "compress", "concierge-bell", "cookie", "cookie-bite", "copy", "copyright", "couch", "credit-card", "crop", "crop-alt", "cross", "crosshairs", "crow", "crown", "cube", "cubes", "cut", "database", "deaf", "desktop", "dharmachakra", "diagnoses", "dice", "dice-d20", "dice-d6", "dice-five", "dice-four", "dice-one", "dice-six", "dice-three", "dice-two", "digital-tachograph", "directions", "divide", "dizzy", "dna", "dog", "dollar-sign", "dolly", "dolly-flatbed", "donate", "door-closed", "door-open", "dot-circle", "dove", "download", "drafting-compass", "dragon", "draw-polygon", "drum", "drum-steelpan", "drumstick-bite", "dumbbell", "dungeon", "edit", "eject", "ellipsis-h", "ellipsis-v", "envelope", "envelope-open", "envelope-open-text", "envelope-square", "equals", "eraser", "euro-sign", "exchange-alt", "exclamation", "exclamation-circle", "exclamation-triangle", "expand", "expand-arrows-alt", "external-link-alt", "external-link-square-alt", "eye", "eye-dropper", "eye-slash", "fast-backward", "fast-forward", "fax", "feather", "feather-alt", "female", "fighter-jet", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-contract", "file-csv", "file-download", "file-excel", "file-export", "file-image", "file-import", "file-invoice", "file-invoice-dollar", "file-medical", "file-medical-alt", "file-pdf", "file-powerpoint", "file-prescription", "file-signature", "file-upload", "file-video", "file-word", "fill", "fill-drip", "film", "filter", "fingerprint", "fire", "fire-extinguisher", "first-aid", "fish", "fist-raised", "flag", "flag-checkered", "flask", "flushed", "folder", "folder-minus", "folder-open", "folder-plus", "font", "font-awesome-logo-full", "football-ball", "forward", "frog", "frown", "frown-open", "funnel-dollar", "futbol", "gamepad", "gas-pump", "gavel", "gem", "genderless", "ghost", "gift", "glass-martini", "glass-martini-alt", "glasses", "globe", "globe-africa", "globe-americas", "globe-asia", "golf-ball", "gopuram", "graduation-cap", "greater-than", "greater-than-equal", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "grip-horizontal", "grip-vertical", "h-square", "hammer", "hamsa", "hand-holding", "hand-holding-heart", "hand-holding-usd", "hand-lizard", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-spock", "hands", "hands-helping", "handshake", "hanukiah", "hashtag", "hat-wizard", "haykal", "hdd", "heading", "headphones", "headphones-alt", "headset", "heart", "heartbeat", "helicopter", "highlighter", "hiking", "hippo", "history", "hockey-puck", "home", "horse", "hospital", "hospital-alt", "hospital-symbol", "hot-tub", "hotel", "hourglass", "hourglass-end", "hourglass-half", "hourglass-start", "house-damage", "hryvnia", "i-cursor", "id-badge", "id-card", "id-card-alt", "image", "images", "inbox", "indent", "industry", "infinity", "info", "info-circle", "italic", "jedi", "joint", "journal-whills", "kaaba", "key", "keyboard", "khanda", "kiss", "kiss-beam", "kiss-wink-heart", "kiwi-bird", "landmark", "language", "laptop", "laptop-code", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "layer-group", "leaf", "lemon", "less-than", "less-than-equal", "level-down-alt", "level-up-alt", "life-ring", "lightbulb", "link", "lira-sign", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "lock-open", "long-arrow-alt-down", "long-arrow-alt-left", "long-arrow-alt-right", "long-arrow-alt-up", "low-vision", "luggage-cart", "magic", "magnet", "mail-bulk", "male", "map", "map-marked", "map-marked-alt", "map-marker", "map-marker-alt", "map-pin", "map-signs", "marker", "mars", "mars-double", "mars-stroke", "mars-stroke-h", "mars-stroke-v", "mask", "medal", "medkit", "meh", "meh-blank", "meh-rolling-eyes", "memory", "menorah", "mercury", "microchip", "microphone", "microphone-alt", "microphone-alt-slash", "microphone-slash", "microscope", "minus", "minus-circle", "minus-square", "mobile", "mobile-alt", "money-bill", "money-bill-alt", "money-bill-wave", "money-bill-wave-alt", "money-check", "money-check-alt", "monument", "moon", "mortar-pestle", "mosque", "motorcycle", "mountain", "mouse-pointer", "music", "network-wired", "neuter", "newspaper", "not-equal", "notes-medical", "object-group", "object-ungroup", "oil-can", "om", "otter", "outdent", "paint-brush", "paint-roller", "palette", "pallet", "paper-plane", "paperclip", "parachute-box", "paragraph", "parking", "passport", "pastafarianism", "paste", "pause", "pause-circle", "paw", "peace", "pen", "pen-alt", "pen-fancy", "pen-nib", "pen-square", "pencil-alt", "pencil-ruler", "people-carry", "percent", "percentage", "phone", "phone-slash", "phone-square", "phone-volume", "piggy-bank", "pills", "place-of-worship", "plane", "plane-arrival", "plane-departure", "play", "play-circle", "plug", "plus", "plus-circle", "plus-square", "podcast", "poll", "poll-h", "poo", "poop", "portrait", "pound-sign", "power-off", "pray", "praying-hands", "prescription", "prescription-bottle", "prescription-bottle-alt", "print", "procedures", "project-diagram", "puzzle-piece", "qrcode", "question", "question-circle", "quidditch", "quote-left", "quote-right", "quran", "random", "receipt", "recycle", "redo", "redo-alt", "registered", "reply", "reply-all", "retweet", "ribbon", "ring", "road", "robot", "rocket", "route", "rss", "rss-square", "ruble-sign", "ruler", "ruler-combined", "ruler-horizontal", "ruler-vertical", "running", "rupee-sign", "sad-cry", "sad-tear", "save", "school", "screwdriver", "scroll", "search", "search-dollar", "search-location", "search-minus", "search-plus", "seedling", "server", "shapes", "share", "share-alt", "share-alt-square", "share-square", "shekel-sign", "shield-alt", "ship", "shipping-fast", "shoe-prints", "shopping-bag", "shopping-basket", "shopping-cart", "shower", "shuttle-van", "sign", "sign-in-alt", "sign-language", "sign-out-alt", "signal", "signature", "sitemap", "skull", "skull-crossbones", "slash", "sliders-h", "smile", "smile-beam", "smile-wink", "smoking", "smoking-ban", "snowflake", "socks", "solar-panel", "sort", "sort-alpha-down", "sort-alpha-up", "sort-amount-down", "sort-amount-up", "sort-down", "sort-numeric-down", "sort-numeric-up", "sort-up", "spa", "space-shuttle", "spider", "spinner", "splotch", "spray-can", "square", "square-full", "square-root-alt", "stamp", "star", "star-and-crescent", "star-half", "star-half-alt", "star-of-david", "star-of-life", "step-backward", "step-forward", "stethoscope", "sticky-note", "stop", "stop-circle", "stopwatch", "store", "store-alt", "stream", "street-view", "strikethrough", "stroopwafel", "subscript", "subway", "suitcase", "suitcase-rolling", "sun", "superscript", "surprise", "swatchbook", "swimmer", "swimming-pool", "synagogue", "sync", "sync-alt", "syringe", "table", "table-tennis", "tablet", "tablet-alt", "tablets", "tachometer-alt", "tag", "tags", "tape", "tasks", "taxi", "teeth", "teeth-open", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "theater-masks", "thermometer", "thermometer-empty", "thermometer-full", "thermometer-half", "thermometer-quarter", "thermometer-three-quarters", "thumbs-down", "thumbs-up", "thumbtack", "ticket-alt", "times", "times-circle", "tint", "tint-slash", "tired", "toggle-off", "toggle-on", "toilet-paper", "toolbox", "tooth", "torah", "torii-gate", "tractor", "trademark", "traffic-light", "train", "transgender", "transgender-alt", "trash", "trash-alt", "tree", "trophy", "truck", "truck-loading", "truck-monster", "truck-moving", "truck-pickup", "tshirt", "tty", "tv", "umbrella", "umbrella-beach", "underline", "undo", "undo-alt", "universal-access", "university", "unlink", "unlock", "unlock-alt", "upload", "user", "user-alt", "user-alt-slash", "user-astronaut", "user-check", "user-circle", "user-clock", "user-cog", "user-edit", "user-friends", "user-graduate", "user-injured", "user-lock", "user-md", "user-minus", "user-ninja", "user-plus", "user-secret", "user-shield", "user-slash", "user-tag", "user-tie", "user-times", "users", "users-cog", "utensil-spoon", "utensils", "vector-square", "venus", "venus-double", "venus-mars", "vial", "vials", "video", "video-slash", "vihara", "volleyball-ball", "volume-down", "volume-mute", "volume-off", "volume-up", "walking", "wallet", "warehouse", "weight", "weight-hanging", "wheelchair", "wifi", "wind", "window-close", "window-maximize", "window-minimize", "window-restore", "wine-bottle", "wine-glass", "wine-glass-alt", "won-sign", "wrench", "x-ray", "yen-sign", "yin-yang"],
  };

/*
  Mavo.hooks.add({
    "render-end": function(env){
      //do something, this is set to mavo instance
    },

  });
*/
  //mavo.id is section identifier in page object
  Mavo.Backend.register($.Class({
    extends: Mavo.Backend,
    id: "IndexedDB_Array",
    constructor: function() {
      this.permissions.on(["read", "edit", "save"]);
      this.key = this.mavo.id;
    },

    get: function() {
      var sec = getSectionById(gtpb.page_app.gmgt_section, this.key);
      if(!sec) return Promise.resolve();
      var data;
      if (sec.is_global) {
        var data_key = sec.data_key || getGlobalSectionKey(sec.partial);
        data = __get(gtpb.site_app.params.global_section, data_key) || {};
      } else {
        data = sec.data || {};
      }

      //clone and inject site data to render in first section for editing
      // note header, content and footer sections should always be activated upon page load.
      if (sec.partial.indexOf('/cover/') > -1) {
        data.menu = gtpb.site_app.menu;
      } else if(sec.partial.indexOf('/content/') > -1) {
        data.title = gtpb.page_app.title;
        data.content = gtpb.page_app.content;
      }

      return Promise.resolve(data);
    },

    store: function(data, opt) {
      var docs = [gtpb.page_app];
      var sec = getSectionById(gtpb.page_app.gmgt_section, this.key);
      if(data.is_global) {
        //global section uses the initial partial as default partial.
        data.partial = data.partial || sec.partial;
        sec.is_global = true;
      } else {
        delete sec.is_global;
      }

      //remove sitewide data and save under separate doc
      if (sec.partial.indexOf('/cover/') > -1) {
        sec.data = data;
        gtpb.site_app.menu = data.menu;
        delete data.menu;
        docs[1] = gtpb.site_app;
      } else if(sec.partial.indexOf('/content/') > -1) {
        // the editor of main text block is in one of the sections,
        // so as to insert sections before or after main text block.
        // we keep the formatting data in section to avoid key clashes.
        gtpb.page_app.content = data.content;
        gtpb.page_app.title = data.title;
        delete data.content;
        delete data.title;
        sec.data = data;
      } else if ( sec.is_global ) {
        if(data.data_key) {
          sec.data_key = data.data_key;
        } else {
          delete sec.data_key;
        }
        __set(gtpb.site_app.params, 'global_section.' + (sec.data_key || getGlobalSectionKey(sec.partial)), data);
        delete sec.data;
        docs[1] = gtpb.site_app;
      } else {
        sec.data = data;
      }

      return this.put(docs);
    },
    // data is an array of objects to store in batch
    // upon a successful saving operation, _rev is updated, and used for following operation.
    put: function(data, path, opt) {
      return db.bulkDocs(data)
      .then(function(r){

        var has_error = false;
        for (var i = 0; i < r.length; i++ ){
          data[i]._rev = r[i].rev || data[i]._rev;
          if(r[i].error){
            has_error = true;
          }
        }
        if(has_error){
          console.log(r);
          throw new Error('bulk update failed');
        }
      });
    },
    //preview only with relative path to files under images folder
    upload: function(file, path) {
      var objURL  = URL.createObjectURL(file);
      setTimeout(function(){
        URL.revokeObjectURL(objURL);
      }, 5000);
      return Promise.resolve(objURL + '#/images/' + file.name);
    },

    static: {
      test: function(value) { return value == "idb_array"}
    }
  }));
  // mavo.id (current_site, $pathname#current_doc) is pointer to the site/page id in localstorage.
  Mavo.Backend.register($.Class({
    extends: Mavo.Backend,
    id: "IndexedDB_Local",
    constructor: function() {
      this.permissions.on(["read", "edit", "save", "add"]);
      this.key = getDocID();
      if(this.mavo.id == 'site_app') {
        this.key = getSiteID();
      }
    },
    //return page/site object already loaded in memory.
    get: function() {
      return Promise.resolve(gtpb[this.mavo.id]);
    },
    store: function(data, o){
      var _this = this;
      //changes to _rev is not updated in loaded data, and must be synced here
      // data loaded from remote source may not have _id
      data._id = gtpb[_this.mavo.id]._id;
      data._rev = gtpb[_this.mavo.id]._rev;
      gtpb[_this.mavo.id] = data;
      //skip serializing. PouchDB.put accepts object
      return Promise.resolve().then(function() {
       // wisdom from https://github.com/valterkraemer/mavo-couchdb mit license
       // this.mavo.unsavedChanges needed because of https://github.com/mavoweb/mavo/issues/256
       if (!_this.mavo.unsavedChanges || _this.storing) {
         return;
       }

       _this.storing = true;

       return _this.put(data).then(function() {
         _this.storing = false;
       });
     })
    },
    //called from src/elements.js, version 0.1.7 limited uploads to image/audio/video tag only
    // path is taken from mv-uploads attribute on property element, representing schema path
    upload: function(file, path){
      if(file.size > 512000) { //max file size 500Kb
        return Promise.reject("file too big");
      }
      var filename = file.name;
      // dot separated schema path of current image field
      var data_path = path.replace('/'+filename, "");
      var filepath = '/images/' + filename; //relative path to image file
      var objURL  = URL.createObjectURL(file);

      var data_path_ptn = new RegExp(':' + data_path + '$');
      var blobs = gtpb.uploads._attachments;
      //remove previous blob from memory. PouchDB will remove previous version automatically due to auto_compaction
      for (var k in blobs){
        if(data_path_ptn.test(k)){
          delete blobs[k];
          break;
        }
      }

      setTimeout(function(){
        URL.revokeObjectURL(objURL);
      }, 5000);

      gtpb.uploads._attachments[filepath + ':' + data_path ] = {
        data: file,
        content_type: file.type
        //extra keys here are ignored
      };

      return this.put(gtpb.uploads)
      .then(function(){
        if('page_app.logo_url' == data_path) {
          Bliss.$('img[data-role="logo"]').forEach(function (img){
            img.src = objURL + '#' + filepath;
          });
        } else if('site_app.params.logo_url' == data_path) {
          if(!gtpb.page_app.logo_url) {
            Bliss.$('img[data-role="logo"]').forEach(function (img){
              img.src = objURL + '#' + filepath;
            });
          }
        }
      })
      .then(function(){
        //indexedDB is not available for local browsing.
        // we store filename as hash, and can generate relative url during html export.
        return Promise.resolve(objURL + '#' + filepath);
      });
    },
    // changes in gtpb.site_app._rev are

    // put is called from store and upload.
    put: function(data) {
      var _this = this;
      return db.put(data).then(function(r){
        data._rev = r.rev;
      });
    },

    static: {
      test: function(value) { return value == "idb_local"}
    }
  }));

  function randomlc(n, prefix) {
		var out = prefix || '';
		var an = 'abcdefghijklmnopqrstuvwxyz0123456789';
		var index = an.length;

		for( var i=0; i < n; i++ ) {
			out += an.charAt( Math.floor(Math.random() * index) );
		}
		return out;
	}

  //helper. lightweight get, path seperated by . only. this is used by default in doT eval template.
  function __get (obj, path) {
    if(!obj || 'object' !== typeof obj || !path || 'string' !== typeof path ) return;
    var ks = path.split('.');
    var tempv = obj;
    var e = ks.length;
    for (var i = 0; i < e; i++) {
      tempv = tempv[ks[i]];
      if(i < e -1 && (!tempv || 'object' !== typeof tempv ) ) return;
    }
    return tempv;
  }
  function __set(obj, dotPath, value) {
		obj = (obj && 'object' === typeof obj)? obj : {};
		dotPath = dotPath + '';
		var parent = obj;
		var arr = dotPath.split('.');
		var endK = arr.pop();
		var numPtn = /^[0-9]+$/;
		for (var i = 0, j = arr.length; i < j; i++) {
			var k = arr[i];
			var nextK = arr[i+1] || endK;
			var expected = numPtn.test(nextK) ? [] : {};
			parent[k] = parent[k] || expected;
			parent = parent[k];
		}
		parent[endK] = value;
		return obj;
	}
  //helper in export mode. prepend project folder or relative path to  url. eg "/a/b/"=> "/project-m/a/b/"
  // or './../' in local browsing mode
  function _relurl(str){
    var url;
    // file path is stored as hash in blob url. blob is not
    if (/^blob:/.test(str)) {
      str = str.split('#')[1];
    }
    try {
      str = str.trim();
      url = new URL(str); //str is a valid absolute url
      return str;
    } catch(e) {
      var exp_link_format = __get(Mavo.all, 'page_app.root.children.exp_link_format.value');
      if ( 'local' === exp_link_format ) {
          var nesting = __get(Mavo.all, 'page_app.root.children.nesting_level.value') || 0;
          //a link ends in / will list the folder in local browsing mode, so we convert it to /index.html
          if(nesting) {
            return './' + '../'.repeat(nesting) + str.replace(/^\//,'') + (/\/$/.test(str)? 'index.html' : '');
          } else {
            // ./index.html is valid link, .index.html will not be found on local file system
            return './' + str.replace(/^\//,'') + (/\/$/.test(str)? 'index.html' : '');
          }
      } else {
        try {
          url = new URL(gtpb.site_app.baseurl);
          return url.pathname.replace(/\/$/,'') + '/' + str.replace(/^\//,'');
        }catch(err){
          return str;
        }
      }

    }
  }

  gtpb.cache = gtpb.cache || {};
  // note the iterate regex pattern is different from the rest.
  const tplSetting = {
    evaluate:    /\{ev\{([\s\S]+?)\}ev\}/g,
    interpolate: /\{v\{=([\s\S]+?)\}v\}/g,
    encode:      /\{enc\{!([\s\S]+?)\}enc\}/g,
    use:         /\{use\{#([\s\S]+?)\}use\}/g,
    define:      /\{def\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}def\}/g,
    conditional: /\{tf\{\?(\?)?\s*([\s\S]*?)\s*\}tf\}/g,
    iterate:     /\{loop\{~\s*(?:\}loop\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}loop\})/g,
    varname: 'it, o',
    strip: true,
    append: true,
    selfcontained: false
  };
  // restore block template from hash table(map) m, and restore single quotes
  function prepareTemplate(m, str){
    str = str || '';
    for (var h in m) {
      var rex = new RegExp(h, 'g');
      str = str.replace(rex, m[h]);
    }
    return str.replace(/\\u0027/g, "'");
  }
  function getGlobalSectionKey(str) {
    return str.slice(str.lastIndexOf('/')+1).replace(/-/g,'_');
  }

  // global section stores default partial in data.
  // {id: "", data :{}, partial: "" } external gtpb.default,
  function renderSection(o, p ) {
    var tplname = o.partial || o.data && o.data.partial;
    if (!tplname) return "";
    var tplFn, isDirty;
    var partialString = o.partialString;
    if(!partialString) {
      var customBlock = gtpb.site_app.params.js_partial[tplname];
      if(customBlock) {
        isDirty = true;
        partialString = prepareTemplate(gtpb.default.TemplateHash, customBlock);
      }
    }
    if(!partialString) {
      partialString = prepareTemplate(gtpb.default.TemplateHash, gtpb.partials[tplname]);
    }

    try {
      tplFn = gtpb.cache[tplname];
      if (!tplFn) {
        tplFn = gtpb.cache[tplname] = doT.template(partialString, tplSetting);
      }

    } catch(e){
      console.log(e, tplname);
      return "";
    }
    //var 'it' is referenced in doT template.
    var it;

    if(o.is_global) {
      var data_key = o.data_key || getGlobalSectionKey(o.partial);
      it = __get(gtpb.site_app.params.global_section, data_key) || {}
    } else {
      it = o.data || {};
    }

    var out = tplFn(it, {
      _relurl: _relurl,
      __get: __get,
      edit_mode: p.edit_mode,
      id: o.id || randomlc(6,'s'),
      site: gtpb.site_app,
      page: gtpb.page_app,
      export_local: p.export_local,

      logo_url: gtpb.page_app.logo_url || gtpb.site_app.params.logo_url,
      main_menu_align: gtpb.page_app.main_menu_align || gtpb.site_app.params.main_menu_align,
      header_class: gtpb.page_app.header_class || gtpb.site_app.params.header_class,

      styles: p.styles, //brand colors
      slidesHTML: p.slidesHTML,
      mobileNavHTML: p.mobileNavHTML,
      md: window.MarkdownIt || markdownit({html: true}),
      sanitizer: DOMPurify,
    } );
    return isDirty? DOMPurify.sanitize(out) : out;

  }
  /* @param {Array} sections, array of apps
  * @param {String} id, unique app id
  */
  function getSectionById(sections, id) {
    for (var i = 0; i < sections.length; i ++) {
      if (sections[i] && sections[i].id === id ) {
        return sections[i];
      }
    }
  }
  // array.prototype.find and array.prototype.findIndex are not available in ie.
  function getIndexValueById(sections, id) {
    for (var i = 0; i < sections.length; i ++) {
      if (sections[i] && sections[i].id === id ) {
        return {index: i, value: sections[i]};
      }
    }
  }

  // render sections from template strings, when loading page
  // {gmgt_section: [{}], edit_mode: true,}
  function renderApps(o) {
    var maxapp = o.maxapp || gtpb.maxapp; // activate apps manually if there are more sections.
    var sections = o.gmgt_section || gtpb.default.AllSections;
    if(!sections) return;
    var uid = {};
    var bigstr = '';
    var arrlen = sections.length;
    //var t0 = Date.now();
    //make sure first section is a cover to show nav and manage section buttons
    if(!sections[0] ||
      'object' !== typeof sections[0] ||
      'string' !== typeof sections[0].partial ||
      sections[0].partial.indexOf('/cover/') < 0
   ){
     sections.unshift(gtpb.default.AllSections[0]);
   }
    for (var i = 0; i < sections.length; i ++ ) {
      //make sure sections within page has unique id
      if(uid[sections[i].id]) { sections[i].id = randomlc(8,'s');  }
      bigstr += renderSection(sections[i], o);
      uid[sections[i].id] = true;
    }

    var docFrag = document.createDocumentFragment();
    // insertAdjacentHTML is a method of Element, not DocumentFragment. about 200ms/100 sections.
    var article = document.createElement("article");

    //for performance reasons, manually activate apps if there are many on the same page.
    if (arrlen < maxapp) {
      bigstr = bigstr.replace(/ gt-app/g, ' mv-app').replace(/gt-mv-off/g,'gt-mv-on');
    }

    article.insertAdjacentHTML('beforeend', bigstr);
    //console.log("time on insertAdjacentHTML concat: ", Date.now() - t0, 'ms');

    // transfer nodes to DocumentFragment to insert nodes in one go
    while (article.childNodes[0]) {
      docFrag.appendChild(article.childNodes[0]);
    }

    var wsholder = document.getElementById('webslides');
    if (wsholder) {
      wsholder.innerHTML = '';
      wsholder.appendChild(docFrag);

      gtClearTrigger.call(wsholder);
      gtRegisterSlideTrigger.call(wsholder);
      try {
        if (window.gmws) {
          window.gmws.destroy();
        }
        wsholder.parentNode.removeChild(document.getElementById('webslides-zoomed'));
      } catch(e){}
    }
  }

  function initBaseApps(){
    var globalHolder = Bliss('#site-page-settings');
    if (globalHolder) {
      //make sure site_app appear before page_app. Mavo process the apps by elements found, in sequence
      var str = renderSection({data: gtpb.site_app, partial: "goandtalk/settings/sitesetting-editor-holder", id: 'site_app'}, {edit_mode: true});
      str += renderSection({data: gtpb.page_app, partial: "goandtalk/settings/pagesetting-editor-holder", id: 'page_app'}, {edit_mode: true});
      str += renderSection({data: gtpb.site_app, partial: "goandtalk/settings/dialog-holder", id: 'confirm_dialog'}, {edit_mode: true});
      str += renderSection({data: gtpb.site_app, partial: "goandtalk/settings/insert-dialog-holder", id: 'insert_dialog'}, {edit_mode: true});

      //feedback should be the last element, to always show
      str += renderSection({data: gtpb.site_app, partial: "goandtalk/settings/feedback-holder", id: 'flash_feedback'}, {edit_mode: true});

      globalHolder.insertAdjacentHTML("afterbegin", str);
      registerGlobalToggle(globalHolder);

      var elemS = globalHolder.querySelector('[mv-app="site_app"]');
      if (elemS && window.Mavo && !Mavo.all.site_app) {
        new Mavo(elemS);
      }
      // important to activate page_app after site_app for dynamic styles to work
      var elemP = globalHolder.querySelector('[mv-app="page_app"]');
      if (elemP && window.Mavo && !Mavo.all.page_app) {
        new Mavo(elemP);
        new Mavo(globalHolder.querySelector('[mv-app="insert_dialog"]'));
      }
    }
  }

  /* @param {String} text, matched item text from defined list
  *  @param {String} input, search term entered by user
  *  @param {Number} item_id, index of matched item in defined list.
  */
  function previewFaIcon (text, input, item_id) {
    var html = '<i class="fas fa-fw fa-2x fa-' + text  + '"></i> <span class="ph3">' + text +'</span>';
    return $.create("li", {
      innerHTML: html,
      "aria-selected": "false",
      "id": "awesomplete_list_" + this.count + "_item_" + item_id
    });
  }
  function encodeHTML(raw) {

    if ('undefined' === typeof raw) return '';

    var HTML_ENTITIES =  {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#x27;',
//      '/': '&#x2f;',
    };

    return 'string' !== typeof raw ? raw : raw.replace(/[&<>"']/igm, function(k){
        return HTML_ENTITIES[k];
    });
  }
  // display image from cached list for selection.
  function previewRepoImage (text, input, item_id) {
    var prefix = '';
    if(gtpb.site_app.baseurl && gtpb.site_app.baseurl.replace(/\/$/,'') !== location.origin){
      prefix = gtpb.site_app.baseurl;
    }
    var html = '<div class="flex"><div class="w4 h4"><img class="of-scale-down" src="' + encodeURI(prefix + '/'  + text)  + '"> </div> <span class="ph3 flex-auto">' + encodeHTML(text) +'</span></div>';
    return $.create("li", {
      innerHTML: html,
      "aria-selected": "false",
      "id": "awesomplete_list_" + this.count + "_item_" + item_id
    });
  }
  // replace the dropdown input value with a full image source url
  function replaceRepoImageLink(text) {
    var prefix = '';
    if(gtpb.site_app.baseurl && gtpb.site_app.baseurl.replace(/\/$/,'') !== location.origin){
      prefix = gtpb.site_app.baseurl;
    }
	   this.input.value = encodeURI(prefix + '/' + text);
   }
  /* The dropdown icon must be the immediate next sibling of input element  */
  function initDropdownInput(elem) {

    var data_path = elem.getAttribute("data-path");

    var opt = {
      minChars: 0,
      container: function (input) {
      	return Bliss.create("div", {
      		className: "awesomplete flex-auto w-80 w-90-l fl cf",
      		around: input
      	});
      }
    }
    //data_path could be directory listing from github repo
    var datalist = data_path && (gtpb.site_app.params[data_path] || dropdown_datalist[data_path])||[];

    opt.list = datalist;

    if("fas_list" == data_path) {
      opt.item = previewFaIcon;
    } else if ("gh_repo_image" == data_path) {
      opt.item = previewRepoImage;
      opt.replace = replaceRepoImageLink;
    }

    var combo = new Awesomplete(elem, opt );
    if("site_list" == data_path) {
      gtpb.dropdownInputSiteList = combo;
    } else if("page_list" == data_path) {
      gtpb.dropdownInputPageList = gtpb.dropdownInputPageList || [];
      gtpb.dropdownInputPageList.push(combo);
    }
    return combo;

  };

  /* activate mavo app on demand
  */
  function toggleMvOn(elem) {
    // do not create duplicate instance for the same section
    var _id = elem.getAttribute('mv-app') || elem.getAttribute('gt-app');
    if(!Mavo.all[_id]) {
      //set class to show editor ui
      elem.classList.add('gt-mv-on');
      elem.setAttribute('mv-app', _id);
      new Mavo(elem);
    } else {
      console.log(elem);
      console.log('failed to activate app:', _id, 'Mavo.all[_id] is: ', Mavo.all[_id])
    }
  }

  /* deactivate mavo app to save resources.
  * mavo uses WeakMaps for GC, so the element must be completely destroyed
  * and replaced with new elements, in order for GC to work.
  */
  function toggleMvOff(elem) {
    var _id = elem.getAttribute('mv-app');
    if(Mavo.all[_id]) {
      var sec = getSectionById(gtpb.page_app.gmgt_section, _id);
      //get fresh data from app before destroying
      sec.data = Mavo.all[_id].getData();
      var secStr = renderSection(sec, {edit_mode: true});
      elem.insertAdjacentHTML('afterend', secStr);
      var newElem = elem.nextElementSibling;
      //the new element keeps the same id and position in array
      Bliss.bind(newElem.querySelector('.mv-bar'), 'click', manageSection, false);
      //slide triggers are on cover only
      if(sec.partial.indexOf('/cover/') > -1 ){
        //remove old listeners
        gtClearTrigger.call(elem);
        gtRegisterSlideTrigger.call(newElem);
      }
      //remove reference to old element so garbage collection can work.
      if(window.gmws) {
        var sectionId = elem.getAttribute('id');
        newElem.setAttribute('id', sectionId );
        newElem.className += 'gmws-slide current';
        gmws.slides[gmws.currentSlideI_].el = newElem;
        //update zoomed view
        var zoomedSec = document.querySelector('#zoomed-' + sectionId + ' > #' + sectionId );
        if (zoomedSec) {
          zoomedSec.insertAdjacentHTML('afterend', secStr);
          var newZoomedSec = zoomedSec.nextElementSibling;
          newZoomedSec.classList.add('gmws-slide');
          newZoomedSec.setAttribute('id', sectionId );
          //remove hidden forms and toolbars
          Bliss.$('.skip-zoom-clone', newZoomedSec).forEach(function(elem){
            elem.parentNode.removeChild(elem);
          });
          zoomedSec.parentNode.removeChild(zoomedSec);
        }
      }

      Mavo.all[_id].destroy();
      elem.parentNode.removeChild(elem);
    }
  }

  // convert property names to lower case and return a new object
  function go2js(obj){
    var out = {};
    for (var prop in obj){
      if ('string' == typeof prop){
        out[prop.toLowerCase()] = obj[prop];
      }
    }
    return out;
  }

  function flashFeedback(opt){
    opt = opt || {
      delay: 3000,
      message: "Success",
      bg: "bg-green"
    };
    var f = gtpb.flashFeedback = gtpb.flashFeedback || Bliss('.feedback-holder');
    f.textContent = opt.message;
    f.classList.add(opt.bg || 'bg-green');
    f.classList.add('active');
    setTimeout(function(){
      f.classList.remove('active');
      f.classList.remove(opt.bg || 'bg-green');
    }, opt.delay || 3000);
  }

  function cloneSection(elem) {
    if(window.gmws) return;
    var src_id = elem.getAttribute('mv-app') || elem.getAttribute('gt-app');
    var iv = getIndexValueById(gtpb.page_app.gmgt_section, src_id);
    var newSec = JSON.parse(JSON.stringify(iv.value));
    newSec.id = randomlc(8, 's');
    var sections = gtpb.page_app.gmgt_section;
    //insert object in array
    sections.splice(iv.index + 1, 0, newSec)

    var secStr = renderSection(newSec, {edit_mode: true});
    if(sections.length < gtpb.maxapp) {
      secStr = secStr.replace(/ gt-app/g, ' mv-app').replace(/gt-mv-off/g,'gt-mv-on');
    }
    elem.insertAdjacentHTML('afterend', secStr);
    var newElem = elem.nextElementSibling;

    Bliss.bind(newElem.querySelector('.mv-bar'), 'click', manageSection, false);
    //slide triggers are on cover only
    if(newSec.partial.indexOf('/cover/') > -1 ){
      gtRegisterSlideTrigger.call(newElem);
    }

    if(sections.length < gtpb.maxapp) {
      new Mavo(newElem);
    }
    newElem.scrollIntoView({behavior: "smooth"});

    db.put(gtpb.page_app)
    .then(function(r){
      gtpb.page_app._rev = r.rev;
      flashFeedback();
    })
    .catch(function(e){
      console.log(e);
      flashFeedback({
        message: 'Unable to save page: ' + e.message,
        bg: 'bg-red'
      });
    });
  }

  function moveSection(elem, isUp){
    if(window.gmws) return;
    var src_id = elem.getAttribute('mv-app') || elem.getAttribute('gt-app') ;

    var sections = gtpb.page_app.gmgt_section;
    var iv = getIndexValueById(sections, src_id);
    var tmp = iv.value;
    if(isUp && iv.index > 0) {
      sections[iv.index] = sections[iv.index - 1];
      sections[iv.index - 1] = tmp;
      elem.previousElementSibling.insertAdjacentElement('beforebegin', elem);
    } else if(iv.index < sections.length - 1){
      sections[iv.index] = sections[iv.index + 1];
      sections[iv.index + 1] = tmp;
      elem.nextElementSibling.insertAdjacentElement('afterend', elem);
    }
    elem.scrollIntoView({behavior: "smooth"});
    db.put(gtpb.page_app)
    .then(function(r){
      gtpb.page_app._rev = r.rev;
      flashFeedback();
    })
    .catch(function(e){
      console.log(e);
      flashFeedback({
        message: 'Unable to save page: ' + e.message,
        bg: 'bg-red'
      });
    });
  }
  function confirmDeleteSection(elem){
    if(window.gmws) return;
    gtpb.deleteTarget = elem;
    var d = gtpb.deleteDialog = gtpb.deleteDialog || document.querySelector('.dialog-holder');
    d.classList.add('active');
    var q = gtpb.confirmQuestion = gtpb.confirmQuestion || document.querySelector('.confirm-question');
    q.innerText = 'Are you sure to delete this section?';
    var closeBtn = gtpb.closeBtn = gtpb.closeBtn || document.querySelector('button.close-dialog');
    closeBtn.focus();
    var btn = gtpb.deleteBtn = gtpb.deleteBtn || document.querySelector('.confirm-delete');
    //clean up this listener when closing dialog
    btn.addEventListener('click', deleteSection, false);
  }
  function closeInsertDialog(e) {
    gtpb.insertDialog.classList.remove('active');
    Bliss.unbind(gtpb.insertSectionBtn);
  }

  function confirmInsertSection(elem){
    if(window.gmws) return;

    var d = gtpb.insertDialog = gtpb.insertDialog || document.querySelector('.insert-dialog');
    d.classList.add('active');

    var cancelInsertBtn = gtpb.cancelInsertBtn = gtpb.cancelInsertBtn || document.querySelector('button.cancel-insert');
    cancelInsertBtn.focus();

    var btn = gtpb.insertSectionBtn = gtpb.insertSectionBtn || document.querySelector('.confirm-insert');
    //clean up this listener when closing dialog
    Bliss.bind(btn, 'click', function(e){
      var partialName = Mavo.all.insert_dialog.root.children.partial.value.trim();
      var data_key = Mavo.all.insert_dialog.root.children.data_key.value.trim();
      var section_type = Mavo.all.insert_dialog.root.children.section_type.value;
      var globalSection;
      if(data_key && 'global' === section_type) {
        globalSection = __get(gtpb.site_app.params.global_section, data_key);
        partialName = globalSection && globalSection.partial;
      }

      if (!partialName || !gtpb.site_app.params.js_partial[partialName] && !gtpb.partials[partialName]) {
        flashFeedback({
          message: 'Template not found. Please select a section template from dropdown list.',
          bg: 'bg-red'
        });
        return;
      }
      var src_id = elem.getAttribute('mv-app') || elem.getAttribute('gt-app');
      var iv = getIndexValueById(gtpb.page_app.gmgt_section, src_id);
      var newSec = {
        id: randomlc(8, 's'),
        partial: partialName
      };
      if(globalSection) {
        newSec.is_global = true;
        newSec.data_key = data_key;
      } else {
        //somehow the empty string is required for Mavo to render textarea for content.
        // this might be a bug in Mavo.
        newSec.data = {
          title: "New",
          content: "",
        };
      }

      var secStr = renderSection(newSec, {edit_mode: true});
      if(!secStr) {
        flashFeedback({
          message: 'Error rendering this section. ',
          bg: 'bg-red'
        });
        return;
      }

      var sections = gtpb.page_app.gmgt_section;
      //insert object in array
      sections.splice(iv.index + 1, 0, newSec);

      var shouldBeOn = newSec.partial.indexOf('/cover/') > -1 ||
        newSec.partial.indexOf('/content/') > -1 ||
        newSec.partial.indexOf('/footer/') > -1;

      if(shouldBeOn || sections.length < gtpb.maxapp) {
        secStr = secStr.replace(/ gt-app/g, ' mv-app').replace(/gt-mv-off/g,'gt-mv-on');
      }
      elem.insertAdjacentHTML('afterend', secStr);
      var newElem = elem.nextElementSibling;

      Bliss.bind(newElem.querySelector('.mv-bar'), 'click', manageSection, false);
      //slide triggers are on cover only
      if(newSec.partial.indexOf('/cover/') > -1 ){
        gtRegisterSlideTrigger.call(newElem);
      }

      if(shouldBeOn || sections.length < gtpb.maxapp) {
        new Mavo(newElem);
      }
      newElem.scrollIntoView({behavior: "smooth"});
      flashFeedback();
      closeInsertDialog();
    });

  }

  function closeDialog(e){
    delete gtpb.deleteTarget;
    gtpb.deleteBtn.removeEventListener('click', deleteSection, false);
    gtpb.deleteBtn.removeEventListener('click', deletePage, false);
    gtpb.deleteBtn.removeEventListener('click', deleteSite, false);
    gtpb.deleteDialog.classList.remove('active');
  }
  function deleteSite(e) {
    Promise.resolve()
    .then(function(){
      if(gtpb.current_site !== 'gt'){
        var db_names = new PouchDB('db_names');
        return db_names.get(gtpb.current_site)
        .then(function(r){
          return db_names.remove(r);
        })
      }
    })
    .then(function(){
      return db.destroy();
    })
    .then(function(){
      var url = new URL(document.location);
      url.searchParams.delete('site');
      url.searchParams.delete('doc');
      url.searchParams.delete('site_app-source');
      url.searchParams.delete('page_app-source');
      var newurl = url.toString();
      if(newurl === document.location.href){
        document.location.reload();
      } else {
        document.location.href = url.toString();
      }

    })
    .catch(function(err){
      flashFeedback({
        message: err.message,
        bg: 'bg-red',
      });
      closeDialog();
    });
  }
  function deletePage(e) {
    //page has never been saved.
    if(!gtpb.page_app._rev){
      var url = new URL(document.location);
      url.searchParams.delete('doc');
      var newurl = url.toString();
      if(document.location.href === newurl){
        flashFeedback()
        closeDialog();
      } else {
        document.location.href = url.toString();
      }
      return;
    }
    db.remove(gtpb.page_app)
    .then(function(){
      flashFeedback();
      closeDialog();
      //reload page to clear dom and memory.
      var url = new URL(document.location);
      url.searchParams.delete('doc');
      var newurl = url.toString();
      if(newurl === document.location.href){
        document.location.reload();
      } else {
        document.location.href = url.toString();
      }
    })
    .catch(function(err){
      flashFeedback({
        message: err.message,
        bg: 'bg-red',
      });
      closeDialog();
    });
  }

  function deleteSection(e){
    if(window.gmws) return;
    var elem = gtpb.deleteTarget;
    delete gtpb.deleteTarget;
    var sections = gtpb.page_app.gmgt_section;
    var iv = getIndexValueById(sections, elem.getAttribute('mv-app')||elem.getAttribute('gt-app') );
    sections.splice(iv.index, 1);
    destroyMavo(elem);
    //elem.parentNode.removeChild(elem);
    closeDialog();
    flashFeedback();
  }
  function cleanupElement(el){
    Bliss.unbind(el);
    Bliss.listeners.delete(el);
  }

  function destroyMavo(elem){

    var _id = elem.getAttribute('mv-app') || elem.getAttribute('gt-app');
    var _mavo = Mavo.all[_id];
    if(!_mavo){
      //remove custom listeners
      Bliss.$('.slide-trigger',elem).forEach(cleanupElement);
      Bliss.$('.mv-bar',elem).forEach(cleanupElement);
      Bliss.$('button',elem).forEach(cleanupElement);
      cleanupElement(elem);
      return elem.parentNode.removeChild(elem);
    }

    Promise.resolve()
    .then(function(){

      //custom code, reference resolved.
      var DDInput = Awesomplete.all;
      for (var i = 0; i < DDInput.length; i ++){
        if(DDInput[i].mavoId === _mavo.id) {
          var ddi = DDInput.splice(i, 1);
          ddi[0].destroy();
          i --;
        }
      }
      _mavo.destroy();
      requestAnimationFrame(function(){
          elem.parentNode.removeChild(elem);
      });

    })
    .catch(console.error);
  }

  //permanent elements and listeners
  function registerGlobalToggle(elem){

    //delete section dialog. mv-app not required.
    Bliss.$('.close-dialog').forEach(function(btn){
      btn.addEventListener('click', closeDialog);
      btn.addEventListener('keyup', function(e){
        if (13 == e.which) {
          closeDialog(e);
        }
      });
    });

    Bliss.$('.cancel-insert').forEach(function(btn){
      btn.addEventListener('click', closeInsertDialog);
      btn.addEventListener('keyup',function(e){
        if (13 == e.which) { //enter key, some browser may also trigger a click event
          closeInsertDialog(e);
        }
      });
    });

    elem.querySelector('.download-site-data').addEventListener('mousedown',function(e){
      var _exp_format_node = Mavo.all.site_app.root.children.exp_data_format;
      var format = _exp_format_node.value;
      this.setAttribute("href", "data:application/" + format  + ";charset=UTF-8," + encodeURIComponent(stringifySite(_exp_format_node)));
    });

    elem.querySelector('.download-site-css').addEventListener('mousedown',function(e){
      this.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(gtpb.site_app.params.custom_css));
    });

    function expDelimChangeHandler(e) {
      gtpb.actions.exportPageData.call(Mavo.all.page_app.root.children.exp_data_format);
    };

    elem.querySelector('[property="exp_delim_before"]').addEventListener('change', expDelimChangeHandler);
    elem.querySelector('[property="exp_delim_after"]').addEventListener('change', expDelimChangeHandler);
    elem.querySelector('.download-page-data').addEventListener('mousedown',function(e){
      var _exp_format_node = Mavo.all.page_app.root.children.exp_data_format;
      var format = _exp_format_node.value;
      this.setAttribute("href", "data:application/" + format  + ";charset=UTF-8," + encodeURIComponent(stringifyPage(_exp_format_node)));

    });

    elem.querySelector('[property="nesting_level"]').addEventListener('change', function(e){
      gtpb.actions.exportPageHTML.call(Mavo.all.page_app.root.children.exp_link_format);
    });
    elem.querySelector('.download-page-html').addEventListener('mousedown',function(e){
        this.setAttribute("href", "data:text/html;charset=UTF-8," + encodeURIComponent(exportPageHTML()));
    });

    // hide download data url block on mobile device, even if the screen is wider than 60em(960px), eg ipad;
    if(/iPad|Android|BlackBerry|Opera Mini|IEMobile|Windows Phone/i.test(window.navigator.userAgent)) {
      Bliss.$('.download-data-holder').forEach(function(elem){
        elem.classList.remove('db-l');
      });
    }

    //import data file and render page
    var importFileInput = elem.querySelector('input[property="import_page_file"]');
    if (importFileInput) {
      importFileInput.addEventListener('change', function(evt){
          var file = evt.target.files[0];
          if (file) {
            importPageFromFile(file);
          }
        });
      //reset value in order to trigger change event when selecting the same file again
      // eg, after changing custom delimiter.
      importFileInput.addEventListener('click', function(evt){
        this.value = '';
      });
    }

    var importSiteFileInput = elem.querySelector('input[property="import_site_file"]');
    if (importSiteFileInput) {
      importSiteFileInput.addEventListener('change', function(evt){
          var file = evt.target.files[0];
          if (file) {
            importSiteFromFile(file);
          }
        });
      //reset value in order to trigger change event when selecting the same file again
      // eg, after changing custom delimiter.
      importSiteFileInput.addEventListener('click', function(evt){
        this.value = '';
      });
    }

  }

  function importSiteFromFile(file){
    var reader = new FileReader();
    reader.onload = function(evt){
      var siteData = parseSiteData(reader.result);
      if(!siteData ) {
        flashFeedback({
          message: 'Unable to parse data. Please ensure the data is in supported formats(toml, yaml, json).',
          bg: 'bg-red'
        });
        return;
      } else {
        loadSiteData(siteData);
      }
    };
    reader.onerror = function(evt) {
      flashFeedback({
        message: 'Unable to read file as text.',
        bg: 'bg-red'
      });
    }
    reader.readAsText(file);
  }


  function importPageFromFile(file){
    var reader = new FileReader();
    reader.onload = function(evt){
      var o = {
        custom_delim: Mavo.all.page_app.root.children.custom_imp_delim.value
      };
      if(o.custom_delim) {
        o.delims = [Mavo.all.page_app.root.children.imp_delim_before.value,
        Mavo.all.page_app.root.children.imp_delim_after.value];
      }

      var pageData = parseFrontMatter(reader.result, o);
      if(!pageData.data ) {
        flashFeedback({
          message: 'Unable to parse data. Please specify delimiters if the file uses custom delimiters.',
          bg: 'bg-red'
        });
        return;
      } else {
        renderPageFromData(pageData);
      }

    };
    reader.onerror = function(evt) {
      flashFeedback({
        message: 'Unable to read file as text.',
        bg: 'bg-red'
      });
    }
    reader.readAsText(file);
  }

  // render and replace sections with provided, which is the result of parsing page with frontmatter.
  function renderPageFromData(pageData){
    //destroy current apps
    var prevData = gtpb.page_app;
    var arr = prevData.gmgt_section;
    for (var i = 0; i < arr.length; i ++) {
      var app = Mavo.all[arr[i].id];
      if (app) {
        app.destroy();
      }
    }

    gtpb.page_app = pageData.data;
    // the data could be imported page, or current page data after loading site data.
    gtpb.page_app.content = pageData.data && pageData.data.content || pageData.body;
    gtpb.page_app._id = prevData._id;
    gtpb.page_app._rev = prevData._rev;
    //render page app in case data has changed.
    Mavo.all.page_app.render(gtpb.page_app);

    gtpb.page_app.gmgt_section = gtpb.page_app.gmgt_section || [];
    renderApps({
      gmgt_section: gtpb.page_app.gmgt_section,
      edit_mode: true,
    });
    activateApps();
    flashFeedback({
      message: "Data has been loaded. "
    });
  }

  function preloadPageList(){
    var page_list = dropdown_datalist.page_list = [];
    db.allDocs()
    .then(function(r){
      var internalPtn = /^:/;
      if(r.rows.length > 0){
        for(var i = 0; i < r.rows.length; i ++){
          if(internalPtn.test(r.rows[i].key)) {
            continue;
          }
          page_list[page_list.length] = {
            value: r.rows[i].key,
            label: r.rows[i].value.title || r.rows[i].key,
          };
        }
      }
      if(gtpb.dropdownInputPageList){
        gtpb.dropdownInputPageList.forEach(function(item){
          item.list = page_list
        });
      }
    })
    .catch(function(err){
      console.log(err);
    });
  }
  // "this" is set to a Proxy within invoke function.
  // for invoked function, "this" is set to the node
  Mavo.Actions.Functions.invoke = function(){
    var func = __get(gtpb.actions, arguments[0]);
    if('function' === typeof func){
      var _this = arguments[1] ? Mavo.Actions.getNode(arguments[1]) : null;
      func.apply(_this, arguments);
    }
  };


  //site data is simply encoded without delimiters.
  function stringifySite(_node) {
    if(!_node) return '';
    var format = _node.value;
    var rawData = Mavo.all.site_app.getData();
    var out = '';
    delete rawData._id;
    delete rawData._rev;
    switch (format) {
      case 'yaml':
        out = jsyaml.safeDump(rawData);
        break;
      case 'json':
        out = JSON.stringify(rawData, null, 2);
        break;
      default:
        out = tomlify.toToml(rawData, {space: 2});
    }
    return out;
  }
  function stringifyPage(_node) {
    if(!_node) return '';
    var format = _node.value;
    var custom_delim = __get(_node, 'mavo.root.children.custom_exp_delim.value');
    var delim_before, delim_after;
    if(custom_delim) {
      delim_before = __get(_node, 'mavo.root.children.exp_delim_before.value');
      delim_after = __get(_node, 'mavo.root.children.exp_delim_after.value');
    }
    var rawData = JSON.parse(JSON.stringify(gtpb.page_app));
    var pagebody = rawData.content;
    var out;
    delete rawData.content;
    delete rawData._id;
    delete rawData._rev;
    switch (format) {
      case 'yaml':
        out = (custom_delim ? delim_before : '---') + '\n';
        out += jsyaml.safeDump(rawData) + '\n';
        out += (custom_delim ? delim_after : '---') + '\n\n';
        break;
      case 'json':
        if (custom_delim) {
          out = (delim_before || '') + '\n';
          out += JSON.stringify(rawData, null, 2).replace(/^\{/,'').replace(/\}$/,'') + '\n';
          out += (delim_after || '') + '\n\n';
        } else {
          out = JSON.stringify(rawData, null, 2) + '\n\n'
        }
        break;
      default:
        out = (custom_delim ? delim_before : '+++') + '\n';
        out += tomlify.toToml(rawData, {space: 2}) + '\n';
        out += (custom_delim ? delim_after : '+++') + '\n\n';
    }
    out += pagebody;
    return out;
  }
  //@param {Node} node, node instance of custom import delimiter
  function parseFrontMatter(str, o) {
    str = str.trim();
    var result;
    var opt = {
      lang: 'toml',
      delims: o && o.custom_delim ? o.delims : ['+++', '+++']
    }
    if (!opt.delims[0]) {
      str = '\n' + str;
    }
    result = frontMatter(str, opt);
    if(result.data) return result;

    opt.lang = 'yaml';
    opt.delims = o && o.custom_delim ? o.delims : ['---', '---'];
    result = frontMatter(str, opt);
    if(result.data) return result;

    opt.lang = 'json';
    opt.delims = o && o.custom_delim ? o.delims : ['{', '}'];
    return frontMatter(str, opt);
  }

  function exportPageHTML() {
    var slidesHTML = '';
    var p = gtpb.page_app;
    var s = gtpb.site_app.params;
    var sections = p.gmgt_section;
    var hue = (p.primary_hue || s.primary_hue || 0) + ',';
    var sat = (p.saturation || s.saturation) + '%,';
    var l = (p.lightness || s.lightness) + '%';
    var l_light = (p.lightness_light || s.lightness_light) + '%';
    var l_lighter = (p.lightness_lighter || s.lightness_lighter) + '%';
    var l_dark = (p.lightness_dark || s.lightness_dark) + '%';
    var opt = {
      edit_mode: false,
      styles: {
        primary_color: 'hsl(' + hue + sat + l  + ')',
        primary_color_dark: 'hsl(' + hue + sat + l_dark  + ')',
        primary_color_dark_90: 'hsla(' + hue + sat + l_dark  + ',0.9)',
        primary_color_light: 'hsl(' + hue + sat + l_light  + ')',
        primary_color_lighter: 'hsl(' + hue + sat + l_lighter  + ')',
        accent_color: p.accent_color || s.accent_color,
        accent_color_light: p.accent_color_light || s.accent_color_light,
      },
    }
    for (var i = 0; i < sections.length; i ++) {
      slidesHTML += renderSection(sections[i], opt);
    }
    opt.slidesHTML = slidesHTML;
    opt.mobileNavHTML = renderSection({
      id: 'nav_mobile',
      data: {},
      partial: 'goandtalk/export/nav-mobile-js',
    },opt);
    opt.export_local = 'local' === Mavo.all.page_app.root.children.exp_link_format.value;
    var tplName = Mavo.all.page_app.root.children.js_exp_tpl.value.trim();
    // images selected from repo contain baseurl, and may cause issues when changing domain
    //remove baseurl from image links, just in case domain name will change.
    var baseurlptn = new RegExp(gtpb.site_app.baseurl + '/images','g');
    var out = renderSection({
      id: 'page_html',
      data: gtpb.page_app,
      partialString: s.js_export[tplName],
      partial:  tplName || 'goandtalk/export/base-js',
    },opt);
    return opt.export_local ? out : out.replace(baseurlptn,'/images');
  }

//mainly used to load theme data from remote source
//site config data may contain custom template and custom styles, and must be loaded from https://github.com/themedata/*
Mavo.Formats.Config = Bliss.Class({
	extends: Mavo.Formats.Base,
	static: {
		parse: serialized => {
      var url = new URL(document.location);
      var site = searchParams.get('site_app-source');
      if(!/^https:\/\/raw.githubusercontent.com\/themedata\//.test(site)) return Promise.resolve(null);
      return Promise.resolve(serialized? parseSiteData(serialized) : null)
    },
		stringify: data => Promise.resolve(tomlify.toToml(data, {space: 2})),
		extensions: [".toml", ".yaml", ".json"]
	}
});

Mavo.Formats.FrontMatter = Bliss.Class({
	extends: Mavo.Formats.Base,
	static: {
		parse: serialized => {
      var pageData = serialized? parseFrontMatter(serialized) : null;
      var out = null;
      // the meta data is under data key of the parsed results.
      if(pageData && (pageData.data || pageData.body)) {
        pageData.data = pageData.data || {};
        renderPageFromData(pageData);
        out = pageData.data;
        out.content = pageData.body;
      }

      return Promise.resolve(out);
    },
		stringify: data => Promise.resolve(stringifyPage(Mavo.all.page_app.root.children.exp_data_format)),
		extensions: [".md"]
	}
});

  gtpb.actions = gtpb.actions || {};

  function parseSiteData(str) {
    var siteData;
    try {
      siteData = window.toml.parse(str);
    } catch(e){}

    if (!siteData) {
      try {
        siteData = window.jsyaml.safeLoad(str);
      } catch(e){}
    }
    if (!siteData) {
      try {
        siteData = JSON.parse(str);
      } catch(e){}
    }
    return siteData;
  }

  function loadSiteData(siteData) {
    var prevSiteData = gtpb.site_app;
    gtpb.site_app = siteData;
    gtpb.site_app._id = prevSiteData._id;
    gtpb.site_app._rev = prevSiteData._rev;
    gtpb.site_app.params = gtpb.site_app.params || {};
    Mavo.all.site_app.render(gtpb.site_app);
    Mavo.all.site_app.unsavedChanges = true;
    Mavo.all.site_app.bar.save.click();
    renderPageFromData({data: Mavo.all.page_app.getData()});
  }

  // import pasted site config. this is set to data_input node
  gtpb.actions.importSiteData = function(){
    var siteData = parseSiteData(this.value);
    if (siteData) {
      loadSiteData(siteData);
    } else {
      flashFeedback({
        message: 'Unable to parse data. Please ensure the data is in supported format (toml, yaml, json).',
        bg: 'bg-red'
      });
    }
  };

  // parse pasted page data.
  // "this" is set to custom delim node
  gtpb.actions.importPageData = function(){
    var o = {
      custom_delim: this.value
    };

    if (o.custom_delim) {
      o.delims =[__get(this, 'mavo.root.children.imp_delim_before.value').trim(),
        __get(this, 'mavo.root.children.imp_delim_after.value').trim()
      ];
    }

    var pageData = parseFrontMatter(__get(this, 'mavo.root.children.data_input.value'), o);
    if (pageData && pageData.data){
      renderPageFromData(pageData);
    } else {
      flashFeedback({
        message: 'Unable to parse data. Please specify delimiters if the data uses custom delimiters.',
        bg: 'bg-red'
      });
    }
  };

  gtpb.actions.exportSiteData = function(){
    if(gtpb.exportingData) return;
    gtpb.exportingData = true;
    var _exp_format_node = this;
    // allow time for node to update value after clicking a radio button
    requestAnimationFrame(function(){
      delete gtpb.exportingData;
      Mavo.all.site_app.root.children.data_output.setValue(stringifySite(_exp_format_node));
    });
  };

  // object => encoded string as per spec (toml, yaml, or json)
  // "this" is set to the node of radio button.
  // clicking on label will trigger a click event on input and thus trigger a function twice.

  gtpb.actions.exportPageData = function(){
    if(gtpb.exportingData) return;
    gtpb.exportingData = true;
    var _exp_format_node = this;
    // allow time for node to update value after clicking a radio button
    requestAnimationFrame(function(){
      delete gtpb.exportingData;
      Mavo.all.page_app.root.children.data_output.setValue(stringifyPage(_exp_format_node));
    });
  };

  //export page as HTML file, for local browsing or web serving.
  //this is set to exp_link_format
  gtpb.actions.exportPageHTML = function(){
    if(gtpb.exportingPage) return;
    gtpb.exportingPage = true;
    // allow time for node to update value after clicking a radio button
    requestAnimationFrame(function(){
      delete gtpb.exportingPage;
      Mavo.all.page_app.root.children.html_output.setValue(exportPageHTML());
    });
  };

  //invoke('addClass', current_tab, '.off-canvas-dashboard', 'active', globalSearch)
  gtpb.actions.addClass = function(){
    if (this && this.mavo) {
      var classV = arguments[3];
      if(arguments[2]){
        Bliss.$(arguments[2], arguments[4]?document:this.mavo.element).forEach(function(elem){
          elem.classList.add(classV);
        });
      } else {
        this.element.classList.add(classV);
      }
    }
  };

  // look for elements within the app by selector, and toggle class
  // example: invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active', globalSearch)
  // current_tab is a property name always available in the app, to access this.mavo
  gtpb.actions.toggleClass = function(){
    if (this && this.mavo) {
      var classV = arguments[3];
      if(arguments[2]){
        if(arguments[2].indexOf('mavo.') > -1) {
          // access element by mavo path
          var elem = __get(this, arguments[2]);
          elem && elem.classList && elem.classList.toggle(classV);
        } else {
          // look for element in DOM.
          Bliss.$(arguments[2], arguments[4]?document:this.mavo.element).forEach(function(elem){
            elem.classList.toggle(classV);
          });
        }
      } else {
        this.element.classList.toggle(classV);
      }
    }
  };

  // remove the element class of target node by prefix, and set a new class with this.value
  // invoke('replaceNodeClass', input_range, targetElem, 'replaceByPrefix-', '-setValuePrefix', '-setValueSuffix', 'addbackClass' )
  // some class has to be applied to node element, eg opacity of image.
  // this is a workaround to modify node class, as using mv-value will make the node readonly
  gtpb.actions.replaceNodeClass = function() {
    if (this && this.mavo ) {
      if (this.value == this.previousValue) {
        return;
      }
      var elem = __get(this, arguments[2]);
      if (!elem) {
        return;
      }
      var namePtn;
      try {
        namePtn = new RegExp('^' + arguments[3]);
        this.previousValue = this.value;
        //classList is a live list
        for (var i=0; i< elem.classList.length; i++ ) {
          if(namePtn.test(elem.classList[i])){
            elem.classList.remove(elem.classList[i]);
            i--;
          }
        }
        //mv-action works synchronously, after set(), subsequent functions will have access to new value.
        if(this.value || 0 === this.value ) {
            elem.classList.add((arguments[4] || '') + this.value + (arguments[5]||'') );
            if(arguments[6]) {
              elem.classList.add(arguments[6]);
            }
        }

      } catch(e){console.log(e);}

    }
  };

  //temporarily increase the z-index of current section, to show cta editor
  // cta is often at the bottom of a section, to see effects while changes are made,
  // we need the editor to render on top of the next section.
  gtpb.actions.promoteSection = function() {
    var rootElem = this.mavo.root.element;
    Bliss.$('.z-9999').forEach(function(elem){
      if (elem !== rootElem) {
        elem.classList.remove('z-9999');
      }
    });
    rootElem.classList.toggle('z-9999');
  };

  gtpb.actions.logMe = function() {
    var _node = this;
    console.log('value on click: ', this.value, 'arguments:', arguments);
    requestAnimationFrame(function(){
      console.log('value on next frame update', _node.value);
    });
  }
  // invoke('fire', thisNode, 'elemPath', 'click')
  gtpb.actions.fire = function() {
    if (this && this.mavo) {
      var elem = __get(this.mavo, arguments[2]);
      if (elem) {
        Bliss.fire(elem, arguments[3]);
      }
    }
  };

  // hide and show element in a new position after resizing.
  // invoke('changeFadeIn', thisNode, 'path_to_element', skip_value_check )
  gtpb.actions.changeFadeIn = function() {

    var elem = __get(this.mavo, arguments[2]);
    if (!elem) {
      console.log('anim elem not found');
      return;
    }
    var oldValue = this.previousValue;
    var currentValue = this.value;
    if (oldValue === undefined ) {
      oldValue = this.initialValue;
    }
    if (!arguments[3] && currentValue === oldValue) {
      return;
    }

    this.previousValue = this.value;

    if (elem.classList.contains('w--ns') || elem.style.opacity == '0' ) {
      // 0 width column, display set to none.
      //elem.style.transition = 'opacity 0s ease-in-out';
      //elem.style.opacity = 1;
      //elem.classList.remove('w--ns');
      elem.style.transition = 'opacity .8s ease-in-out 0.3s';
      elem.style.opacity = 1;
    } else {
      // animate hiding from view, quick.
      elem.style.transition = 'opacity .04s ease-in-out';
      elem.style.opacity = 0;
      elem.addEventListener('transitionend',function(){
        //animate bringing into view
        elem.style.transition = 'opacity .8s ease-out 0.3s';
        elem.style.opacity = 1;
      });
    }

  };

  // replace target collection item class after clicking radio button
  // example: invoke('replaceItemsClass', radio_node, 'name_of_collection_node', 'selector')
  // this is set to a radio node with previous and new values
  // collection items do not support mv-value together with property
  // this is a workaround to replace old class with new class after clicking radio button
  // this function can not be used on dropdown input, as it requires previous value.
  gtpb.actions.replaceItemsClass = function() {
    if (gtpb.replacingItemsClass) return;
    var coll = __get(this.mavo, arguments[2] + '');
    if (!coll) {
      console.log( arguments[2] + ' not found');
      return;
    }
    if('Collection' === coll.nodeType && !coll.children.length) return;

    var _radio = this;
    gtpb.replacingItemsClass = true;
    var oldClass = this.value;
    var selector = arguments[3];
    requestAnimationFrame(function(){
      delete gtpb.replacingItemsClass;
      var newClass = _radio.value;
      if (newClass === oldClass) {
        // clicking on current selected value. abort updating ui.
        return;
      }
      if (selector) {
        // newly created collection element has no parentElement
        var scope = coll.element.parentElement || __get(coll, 'children.0.element.parentElement')||
        coll.element;

        Bliss.$(selector, scope).forEach(function(elem){
          elem.classList.remove(oldClass);
          elem.classList.add(newClass);
        });
      } else if ('Collection' === coll.nodeType ) { // replace class of column element
        coll.children.forEach(function(grp){
          grp.element.classList.remove(oldClass);
          grp.element.classList.add(newClass);

        });
      } else {
        coll.element.classList.remove(oldClass);
        coll.element.classList.add(newClass);
      }
      if ('Collection' === coll.nodeType )  {
        try {
          if(selector) {
            var t = coll.templateElement.querySelector(selector);
            t && t.classList.remove(oldClass);
            t && t.classList.add(newClass);
          } else {
            //update template so newly created items will have equal width
            coll.templateElement.classList.remove(oldClass);
            coll.templateElement.classList.add(newClass);
          }

        } catch(e){}
      }

    });
  }

  // extract iframe source from copied and pasted long embed code
  // invoke('extractAttr', paste_area, 'root.children.embed_source', 'src', '.optionalSelector')
  // the event listener can also delegate to dropdown input fields, as it does not require previous value.
  gtpb.actions.extractAttr = function() {
    var embedCode = this.value.trim();
    if (!embedCode) return;
    try {
      var holder = document.createElement('div');
      holder.insertAdjacentHTML('afterbegin', embedCode);
      var src = holder.querySelector(arguments[4] || 'iframe').getAttribute(arguments[3]|| 'src');
      //set rel=0 will not disable related video but rather display related video from same channel only.
      if(src.indexOf('youtube') > -1) {
        var url = new URL(src);
        url.searchParams.set('rel', 0);
        url.searchParams.set('modestbranding', 1);
        src = url.toString();
      }
      __get(this.mavo, arguments[2]).setValue(src);
    }catch(e){
      console.log(e);
      flashFeedback({
        message: 'Error parsing the code.',
        bg: 'bg-red'
      });
    }
  };

  // set attribute to collection or children of group
  // invoke('setItemsAttr', mask_class, 'root.children.column', 'data-fa-mask', '.optionalSelector')
  // the event listener can also delegate to dropdown input fields, as it does not require previous value.
  gtpb.actions.setItemsAttr = function() {

    var coll = __get(this.mavo, arguments[2] + '');
    if (!coll) {
      console.log( arguments[2] + ' not found');
      return;
    }
    if('Collection' == coll.nodeType && !coll.children.length || !arguments[3]) {
      console.log('empty collection or attribute ',  arguments[3] )
      return;
    }

    var _node = this;
    var _arg = arguments;
    if (gtpb.settingItemsAttr) return;
    gtpb.settingItemsAttr = true;
    requestAnimationFrame(function(){
      delete gtpb.settingItemsAttr;
      var newValue = 'data-fa-mask' == _arg[3] ? 'fas fa-' + _node.value : _node.value;
      Bliss.$((_arg[4] || 'i') + '[' + _arg[3] + ']', coll.element.parentElement).forEach(function(elem) {
        elem.setAttribute(_arg[3], newValue );
      });
      try {
        coll.templateElement.setAttribute(_arg[3], newValue );
      } catch(e) {}

    });
  }

  gtpb.actions.switchEditDoc = function(){
    var open_doc_id = __get(Mavo.all.page_app, "root.children.open_doc.value").trim();
    if(!open_doc_id || open_doc_id === gtpb.current_doc) return;
    var url = new URL(document.location);
    url.searchParams.set('doc', open_doc_id);
    url.searchParams.delete('site_app-source');
    url.searchParams.delete('page_app-source');
    window.location.href = url.toString();
  };

  gtpb.actions.clonePage = function(){
    var new_page_id = __get(Mavo.all.page_app, "root.children.new_page_id.value").trim();
    if(!new_page_id || new_page_id === gtpb.page_app._id) {
      flashFeedback({
        delay: 3000,
        message: "Please provide a new file path for the cloned document.",
        bg: "bg-red"
      });
      return;
    }

    if(/^_+/.test(new_page_id)){
      flashFeedback({
        delay: 3000,
        message: "Leading underscore is reserved for internal use only. Please prepend a slash. ",
        bg: "bg-red"
      });
      return;
    }
    var doc = Mavo.all.page_app.getData();
    doc.title = __get(Mavo.all.page_app, "root.children.clone_title.value") || ('copy of ' + gtpb.page_app.title);
    doc._id = new_page_id;
    delete doc._rev;

    db.allDocs({key: new_page_id})
    .then(function(r){
      if(r.rows.length > 0){
        var override = __get(Mavo.all.page_app, "root.children.override_doc_if_exists.value");
        if (override) {
          doc._rev = r.rows[0].value.rev;
        } else {
          throw new Error("The file path has been used.");
        }
      }
      return db.put(doc);
    })
    .then(function(r){
      doc._rev = r.rev;
      gtpb.page_app = doc;
      var url = new URL(document.location);
      url.searchParams.set('doc', new_page_id);
      history.pushState({}, doc.title, url.toString());
      //update view
      Mavo.all.page_app.root.children._id.element.value = new_page_id;
      Mavo.all.page_app.root.children.title.element.value = doc.title;
      flashFeedback();
    })
    .catch(function(err){
      flashFeedback({
        message: err.message,
        bg: "bg-red"
      });
    });
  };

  gtpb.actions.switchEditSite = function(){
    var open_site_id = __get(Mavo.all.site_app, "root.children.open_site.value").trim();
    if(!open_site_id){
      flashFeedback({
        message: 'Please provide site id.',
        bg: 'bg-red'
      });
      return
    } else if( open_site_id === gtpb.current_site){
      flashFeedback({
        message: 'You are already on this site.',
        bg: 'bg-blue'
      });
      return;
    }
    var url = new URL(document.location);
    url.pathname = '/edit/';
    url.searchParams.set('site', open_site_id);
    url.searchParams.delete('doc');
    url.searchParams.delete('site_app-source');
    url.searchParams.delete('page_app-source');

    window.location.href = url.toString();
  };
  // arguments: 0: "name of function", 1: "optional name of node", 2: "what to delete"
  gtpb.actions.confirmDelete = function(){
    var _todel = arguments[2] || 'page';

    var q = gtpb.confirmQuestion = gtpb.confirmQuestion || document.querySelector('.confirm-question');
    if('page' === _todel ){
        q.innerText = 'Are you sure to delete this page? This will restore to the default and reload the page. ';
    } else if('site' === _todel){
      var sr = Mavo.all.site_app.root.children;
      if (!sr.check_backup_config.value || !sr.check_backup_pages.value) {
        flashFeedback({
          bg: 'bg-red',
          message: 'Before deleting a site database, please tick the checkboxes to confirm you have backed up data.'
        });
        return;
      }

      q.innerText = 'Are you sure to delete this site? This will delete the database and all pages in this site. ';
    }

    var closeBtn = gtpb.closeBtn = gtpb.closeBtn || document.querySelector('button.close-dialog');
    closeBtn.focus();
    var btn = gtpb.deleteBtn = gtpb.deleteBtn || document.querySelector('.confirm-delete');
    if('page' === _todel){
      btn.addEventListener('click', deletePage, false);
    } else {
      btn.addEventListener('click', deleteSite, false);
    }

    var d = gtpb.deleteDialog = gtpb.deleteDialog || document.querySelector('.dialog-holder');
    d.classList.add('active');
  }

  // this is set to referenced Mavo.Node, arguments[0] = function name, arguments[1] = proxy
  // initialize and cache dropdowninput on the fly, upon clicking dropdown button.
  gtpb.actions.toggleDDInput = function(){
    var elem = this.element;
    var combo = Mavo.data(elem, "awesomplete");
    if(!combo) {
      combo = initDropdownInput(elem);
      Mavo.data(elem,  "awesomplete", combo);
    }

    if('data_key' === this.property) {
      var globals = gtpb.site_app.params.global_section;
      if (globals) {
        combo.list = Object.keys(globals);
      }
    } else if(this.property.indexOf('js_exp_') > -1) {
      var jsTpls = gtpb.site_app.params.js_export;
      if(jsTpls) {
        combo.list = Object.keys(jsTpls);
      }
    } else if(this.property.indexOf('js_partial_') > -1) {
      var tpls = gtpb.site_app.params.js_partial;
      if(tpls) {
        combo.list = Object.keys(tpls);
      }
    } else if('partial' === this.property ) {
      combo.list = Object.keys(gtpb.partials).filter(function(s){return s.indexOf('/settings/') == -1 && s.indexOf('/export/') == -1 }).concat(Object.keys(gtpb.site_app.params.js_partial));
    }
    //tracking, in order to destroy it when necessary.
    combo.mavoId = this.mavo.id;
    if (combo.ul.childNodes.length === 0) {
      combo.minChars = 0;
      combo.evaluate();
    }
    else if (combo.ul.hasAttribute('hidden')) {
      combo.open();
    }
    else {
      combo.close();
    }
  };
  // this is set to new template textarea
  gtpb.actions.cloneJsExportBase = function(){
    this.setValue(gtpb.partials["goandtalk/export/base-js"]);
  };

  //this is set to new template name
  gtpb.actions.createJsExportTpl = function(){
    var editNode = Mavo.all.site_app.root.children.params.children.new_js_exp_tpl;
    var tpl = editNode.value.trim();
    var tplName = this.value.trim();
    if(!tplName || !tpl) {
      flashFeedback({
        message: "Please provide code and name for this template",
        bg: "bg-red",
      });
      return;
    }
    var sp = gtpb.site_app.params;
    if(__get(sp.js_export, this.value)) {
      flashFeedback({
        message: "Template already exists, please provide a unique template name.",
        bg: "bg-red",
      });
      return;
    }
   sp.js_export = sp.js_export || {};
   sp.js_export[tplName] = tpl;

   Mavo.all.site_app.unsavedChanges = true;
   Mavo.all.site_app.save().then(()=> {
     flashFeedback({
       message: "Created. Please go to edit template tab to edit existing templates."
     });
     this.setValue("");
     editNode.setValue("");
   });
  };
  //this is set to template name node
  gtpb.actions.loadJsExportTpl = function(){
    var tplName = this.value.trim();
    var tpl = __get(gtpb.site_app.params.js_export, tplName);
    if(!tpl) {
      return;
    }
    Mavo.all.site_app.root.children.params.children.edit_js_exp_tpl.setValue(tpl);
  };
  //this is set to edit node
  gtpb.actions.saveJsExportTpl = function(){
    var tplName = Mavo.all.site_app.root.children.params.children.js_exp_open.value.trim();
    gtpb.site_app.params.js_export[tplName] = this.value;
    Mavo.all.site_app.unsavedChanges = true;
    Mavo.all.site_app.save().then(function(){
      flashFeedback({
        message: "Saved."
      });
    });
  };

  //this is set to new template name
  gtpb.actions.createJsPartial = function(){
    var editNode = Mavo.all.site_app.root.children.params.children.new_js_partial_tpl;
    var tpl = editNode.value.trim();
    var tplName = this.value.trim();
    if(!tplName || !tpl) {
      flashFeedback({
        message: "Please provide code and name for this template",
        bg: "bg-red",
      });
      return;
    }
    var sp = gtpb.site_app.params;
    if(__get(sp.js_partial, this.value)) {
      flashFeedback({
        message: "Template already exists, please provide a unique template name.",
        bg: "bg-red",
      });
      return;
    }
   sp.js_partial = sp.js_partial || {};
   sp.js_partial[tplName] = tpl;

   Mavo.all.site_app.unsavedChanges = true;
   Mavo.all.site_app.save().then(()=> {
     flashFeedback({
       message: "Created. Please go to edit template tab to edit existing templates."
     });
     this.setValue("");
     editNode.setValue("");
   });
  };
  //this is set to template name node
  gtpb.actions.loadJsPartial = function(){
    var tplName = this.value.trim();
    var tpl = __get(gtpb.site_app.params.js_partial, tplName);
    if(!tpl) {
      return;
    }
    Mavo.all.site_app.root.children.params.children.edit_js_partial_tpl.setValue(tpl);
  };
  //this is set to edit node
  gtpb.actions.saveJsPartial = function(){
    var tplName = Mavo.all.site_app.root.children.params.children.js_partial_open.value.trim();
    gtpb.site_app.params.js_partial[tplName] = this.value;
    Mavo.all.site_app.unsavedChanges = true;
    Mavo.all.site_app.save().then(function(){
      flashFeedback({
        message: "Saved."
      });
    });
  };

  gtpb.actions.fetchGithubImageList = function(){
    var sp = gtpb.site_app.params;
    var elem = this.element;
    if(sp.gh_repo_owner && sp.gh_repo_name) {
      Bliss.fetch(encodeURI('https://api.github.com/repos/' + sp.gh_repo_owner + '/' + sp.gh_repo_name + '/contents/' + (sp.gh_image_dir || 'images') + (sp.gh_repo_branch?'?ref=' + sp.gh_repo_branch :'') ), {responseType: "json"} )
      .then(function(xhr){
        if (Array.isArray(xhr.response) && xhr.response.length){
          var ptn = /jpg$|jpeg$|gif$|webp$|png$|svg$/i;
          var arr = gtpb.site_app.params.gh_repo_image = [];
           xhr.response.forEach(function(item){
            if(ptn.test(item.path)) {
              arr[arr.length] = item.path;
            }
          });
          var combo = Mavo.data(elem, "awesomplete");
          if(!combo) {
            combo = initDropdownInput(elem);
            Mavo.data(elem,  "awesomplete", combo);
          }

          combo.list = gtpb.site_app.params.gh_repo_image;

          flashFeedback({message: "Image list loaded"});
        } else {
          flashFeedback({message: "File not found", bg: "bg-red"});
        }
      })
      .catch(function(error){
	       console.error(error, "code: " + error.status);
         flashFeedback({message: "Error fetching file list. Message: " + encodeHTML(error.message), bg: "bg-red"});
       });
    } else {
      flashFeedback({message: "Please provide repo owner and repo name in site settings.", bg: "bg-red"});
    }
  };


  gtpb.actions.fetchGithubArticleList = function(){
    var articleDir = Mavo.all.page_app.root.children.ghdata_article_dir.value;
    var sp = gtpb.site_app;
    var elem = this.element;
    if(sp.ghdata_repo_owner && sp.ghdata_repo_name) {
      Bliss.fetch(encodeURI('https://api.github.com/repos/' + sp.ghdata_repo_owner + '/' + sp.ghdata_repo_name + '/contents/' + (articleDir || 'content') + (sp.ghdata_repo_ref ? '?ref=' + sp.ghdata_repo_ref : '') ), {responseType: "json"} )
      .then(function(xhr){
        if (Array.isArray(xhr.response) && xhr.response.length){
          var ptn = /\.md$/i;
          var arr = gtpb.site_app.params.gh_repo_article = [];
           xhr.response.forEach(function(item){
            if(ptn.test(item.path)) {
              arr[arr.length] = item.path;
            }
          });
          var combo = Mavo.data(elem, "awesomplete");
          if(!combo) {
            combo = initDropdownInput(elem);
            Mavo.data(elem,  "awesomplete", combo);
          }

          combo.list = gtpb.site_app.params.gh_repo_article;

          flashFeedback({message: "Article list loaded"});
        } else {
          flashFeedback({message: "File not found", bg: "bg-red"});
        }
      })
      .catch(function(error){
	       console.error(error, "code: " + error.status);
         flashFeedback({message: "Error fetching file list. Message: " + encodeHTML(error.message), bg: "bg-red"});
       });
    } else {
      flashFeedback({message: "Please provide data repo owner and repo name in site settings.", bg: "bg-red"});
    }
  };

  gtpb.actions.loadRemoteSiteData = function(){
    var sp = Mavo.all.site_app.getData();
    var owner = (sp.ghdata_repo_owner||'').trim();
    var repo = (sp.ghdata_repo_name || '').trim();
    if(!owner || !repo) {
      flashFeedback({
        bg: 'bg-red',
        message: 'Please provide the owner and name of data repository.'
      });
      return;
    }
    Bliss.fetch(encodeURI('https://raw.githubusercontent.com/' + owner + '/' + repo + '/' + (sp.ghdata_repo_ref || 'master') + '/config.toml'))
    .then(function(xhr){
      var siteData = parseSiteData(xhr.response);
      if (siteData){
        //site_id is the name of IndexedDB db.
        siteData.site_id = gtpb.current_site;
        loadSiteData(siteData);
      } else {
        flashFeedback({
          bg: 'bg-red',
          message: 'Unable to parse remote setting.'
        });
      }
    })
    .catch(function(err){
      flashFeedback({
        bg: 'bg-red',
        message: 'Unable to load remote data.'
      });
    });

  };

  gtpb.actions.loadRemotePageData = function(){
    var article = Mavo.all.page_app.root.children.ghdata_article.value.trim();
    if(!article) {
      return;
    }
    var sp = Mavo.all.site_app.getData();
    var owner = (sp.ghdata_repo_owner||'').trim();
    var repo = (sp.ghdata_repo_name || '').trim();
    if(!owner || !repo) {
      flashFeedback({
        bg: 'bg-red',
        message: 'Please provide the owner and name of data repository.'
      });
      return;
    }
    Bliss.fetch(encodeURI('https://raw.githubusercontent.com/' + owner + '/' + repo + '/' + (sp.ghdata_repo_ref || 'master') + '/' + article ))
    .then(function(xhr){
      var pageData = parseFrontMatter(xhr.response);
      if (pageData){
        renderPageFromData(pageData);
      } else {
        flashFeedback({
          bg: 'bg-red',
          message: 'Unable to parse remote page.'
        });
      }
    })
    .catch(function(err){
      flashFeedback({
        bg: 'bg-red',
        message: 'Unable to load remote data.'
      });
    });

  };

  function toggleBaseToolbar() {
    var isActive = Mavo.all.base_app_list.root.element.classList.toggle('active');
    if (isActive) {
      flashFeedback({
        message: 'Global setting toolbar has been enabled. Hover on the left side of the screen to access. '
      });
    } else {
      flashFeedback({
        message: 'Global setting toolbar has been disabled. Click this button again to enable. '
      });
    }
  }

  //handler registered on section > .mv-bar, e.target could be a button or icon within button,
  // e.currentTarget is always mv-bar, direct child of section app
  function manageSection(e){
    var btn = e.target.closest('button.manage-section');
    if(btn) {
      var _sec = e.currentTarget.parentElement;
      var action = btn.getAttribute('data-action');
      switch (action) {
        case 'move-up':
          moveSection(_sec, true);
          break;
        case 'move-down':
          moveSection(_sec);
          break;
        case 'clone-section':
          cloneSection(_sec);
          break;
        case 'insert-section':
          confirmInsertSection(_sec);
          break;
        case 'delete-section':
          confirmDeleteSection(_sec);
          break;
        case 'toggle-mv-on':
          toggleMvOn(_sec);
          break;
        case 'toggle-mv-off':
          toggleMvOff(_sec, e.currentTarget);
          break;
        case 'toggle-base-toolbar':
          toggleBaseToolbar();
          break;
        default:
          console.log('Unknown action', action, btn);
      }
    }
  }
  // remove event listeners to allow gc, "this" is set to the container of sections,
  // or the section to remove
  function gtClearTrigger () {
    Bliss.$('.slide-trigger', this).forEach(function(btn){
      btn.removeEventListener('click',gtActivateSlide);
    });
  }

  function activateApps(){
    const wsholder = Bliss('#webslides');
    if (wsholder){
      //manually init apps. indexedDB is async and may render apps after Mavo has initiated.
      const sections =  wsholder.querySelectorAll('[mv-app]');
      const sl = sections.length;
      for (var i = 0; i < sl; i++ ){
        var _sec = sections[i];
        var _id = _sec.getAttribute('mv-app');
        if (window.Mavo && !Mavo.all[_id]) {
          new Mavo(_sec);
        }
      }
      Bliss.$('.mv-bar').forEach(function(elem){
          Bliss.bind(elem, 'click', manageSection, false);
      });
    }
  }

  //note Bliss.delegate to click/touchstart does not work on iphone safari or chrome.
  Bliss.ready().then(function(){
    //trigger change event on input cell for Mavo to render selected value
    document.addEventListener("awesomplete-selectcomplete", function(evt) {
      Bliss.fire(evt.target, "change");
    }, false);

    //keep track of all dbs
    var db_names = new PouchDB('db_names', {auto_compaction: true});
    db_names.allDocs()
    .then(function(r){
      var site_ids = [];
      var site_id_saved = false;
      if(r.rows.length > 0){
        for(var i = 0; i < r.rows.length; i++){
          site_ids[site_ids.length] = r.rows[i].id;
          if(site_id == r.rows[i].id) {
            site_id_saved = true;
          }
        }
      }
      dropdown_datalist.site_list = site_ids;
      if(gtpb.dropdownInputSiteList){
        gtpb.dropdownInputSiteList.list = site_ids;
      }

      if(!site_id_saved) {
        return db_names.put({_id: site_id, created: new Date().toISOString()})
        .then(function(){
          site_ids[site_ids.length] = site_id;
        });
      }
    })
    .catch(function(err){
      console.log(err);
    });

    // init only in edit mode, this allows presenting from locally saved files.
    // eg click a button to remove gt-edit-mode class and save the web page as a local file with all assets.
    var edit_mode = document.documentElement.classList.contains("gt-edit-mode");
    if (edit_mode && window.Promise && window.indexedDB) {

      //activate base_app_list before anything else. it is referenced from other apps.
      var basePanel = document.querySelector('.gt-vbar');
      basePanel.setAttribute('mv-app', 'base_app_list');
      if(window.Mavo && !Mavo.all.base_app_list) {
        new Mavo(basePanel);
      }

      var opt = {edit_mode: true};

      //async preload page_list for admin ui
      setTimeout(preloadPageList, 2000);

      const doc_id = getDocID();
      //_ is reserved for local doc (_local). we use : here to filter out documents in search result.
      db.allDocs({
        keys: [':uploads', ':config', doc_id],
        include_docs: true,
        attachments: true,
        binary: true
      }).then(function(r){
        // returned rows in the same order as keys.
        // the doc 'uploads' holds all attachments
        gtpb.uploads = r.rows[0].doc;
        if(!gtpb.uploads){
          gtpb.uploads = {
            _id: ':uploads',
            _attachments: {}
          };
        }
        gtpb.site_app = r.rows[1].doc;
        if(!gtpb.site_app) {
          if(window.location.pathname == '/edit/') {
            gtpb.site_app = {
              _id: ':config',
              site_id: site_id,
              menu: {
                global: [],
                iconmenu: [],
              },
              params: {
                global_section: {},
              },
            }
          } else {
            gtpb.site_app = {
              _id: ':config',
              site_id: site_id,
              title: gtpb.default.SiteTitle,
              baseurl: gtpb.default.SiteBaseURL,
              copyright: gtpb.default.SiteCopyright,
              menu: gtpb.default.SiteMenu,
              params: gtpb.default.SiteParams
            };
            gtpb.site_app.params.global_section = gtpb.site_app.params.global_section || {
              default_footer: gtpb.default.SiteFooter,
            };
          }

          for (var k in gtpb.site_app.menu){
            var menu = gtpb.site_app.menu[k];
            for(var i = 0; i < menu.length; i ++) {
              if(menu[i]){
                 menu[i] = go2js(menu[i]);
              }
            }
          }
        }
        gtpb.site_app.params.js_export = gtpb.site_app.params.js_export || {};
        gtpb.site_app.params.js_partial = gtpb.site_app.params.js_partial || {};

        gtpb.page_app = r.rows[2].doc;
        if(!gtpb.page_app){
          gtpb.page_app = gtpb.default.Params || {};
          gtpb.page_app._id = doc_id;
          gtpb.page_app.gmgt_section = gtpb.default.AllSections ;
          gtpb.page_app.content = gtpb.default.content;
        }
        // recreate blob url from stored blobs, with filepath info as hash
        var blobs = gtpb.uploads._attachments;
        var blobPtn = /^blob:/;
        for (var k in blobs){
          var schemaArr = k.split(':');
          var schema_path = schemaArr[1];
          var url = __get(gtpb, schema_path);
          if(url && blobPtn.test(url)){
            var objURL = URL.createObjectURL(blobs[k].data);
            __set(gtpb, schema_path, objURL + '#' + schemaArr[0]);
            setTimeout(function(){
              URL.revokeObjectURL(objURL);
            }, 30000);
          }
        }

        opt.gmgt_section = gtpb.page_app.gmgt_section;
        // render and initialize base apps
        initBaseApps();
        return Promise.resolve(renderApps(opt));
      })
      .then(function(){

        new Clipboard('.copy-data')
        .on('success', function(e) {
          flashFeedback({message: 'Copied!'});
          e.clearSelection();
        });

        activateApps();
      })
      .catch(function(e){
        console.log(e);
      });

    } // end edit_mode
  });
})();
