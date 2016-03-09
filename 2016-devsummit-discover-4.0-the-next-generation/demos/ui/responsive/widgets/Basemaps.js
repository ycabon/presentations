define([
  "./Basemaps/BasemapsViewModel",

  "dijit/_TemplatedMixin",

  "dojo/_base/array",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/on",

  "esri/core/watchUtils",

  "esri/widgets/Widget",

  "require",

  "dojo/text!./Basemaps/templates/Basemaps.html",

  "dojo/domReady!"
],
function(
  BasemapsViewModel,
  TemplatedMixin,
  array, dom, domClass, domConstruct, on,
  watchUtils,
  Widget,
  require,
  template
) {

  return Widget.createSubclass([TemplatedMixin], {

    templateString: template,

    declaredClass: "esri.widgets.Basemaps",

    css: {
      icon: "esri-icon",
      basemap: "esri-icon-basemap",
      thumbnail: "esri-basemaps-thumbnail",
      item: "esri-basemaps-item",
      container: "esri-basemaps-container",
      list: "esri-basemaps-list",
      title: "esri-basemaps-item-title",
      hidden: "esri-hidden"
    },

    baseClass: "esri-basemaps",

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    showList: function() {
      this.hidingHandle.resume();
      this.showingHandle.pause();
      domClass.remove(this.list, this.css.hidden);
      this._basemaps.scrollIntoView();
    },

    hideList: function() {
      domClass.add(this.list, this.css.hidden);
      this.hidingHandle.pause();
      this.showingHandle.resume();
    },

    postCreate: function () {
      this.inherited(arguments);

      this.list = domConstruct.create("div", {
        className: this.css.hidden + " " + this.css.container
      });

      watchUtils.once(this.viewModel, "loaded", function() {
        this._populateList();
        this.viewModel.view.ui.add(this.list);
      }.bind(this));

      on(this.list, on.selector("." + this.css.item, "click"), (function(widget) {
        return function() {
          var basemapId = this.id.replace(/.+galleryNode_/, "");
          widget.viewModel.select(basemapId);
          widget.hideList();
        };
      })(this));

      this.hidingHandle= on.pausable(document.body, "click", function(e) {
        if(!dom.isDescendant(e.target, this.list)) {
          this.hideList();
        }
      }.bind(this));
      this.hidingHandle.pause();

      this.showingHandle = on.pausable(this, "click", function(e) {
        e.stopPropagation();
        this.showList();
      }.bind(this));
    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    // Path to the folder containing the resources used by this dijit.
    // This can be used to refer to images in the template or other
    // resources
    //
    // require.toUrl does the same thing as dojo.moduleUrl
    // but doesn't add a trailing slash
    _basePath: require.toUrl(".") + "/",

    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  viewModel
    //----------------------------------

    _setViewModelAttr: function(value) {
      if (value && !value.declaredClass) {
        value = new BasemapsViewModel(value);
      }

      this._set("viewModel", value);
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _populateList: function () {
      var basemaps = domConstruct.create("ul", {
        className: this.css.list
      });

      array.forEach(this.viewModel.basemaps, function(basemap, i) {
        if (!basemap.id) {
          basemap.id = "basemap_" + i;
        }
        var card = this._createBasemapItem(basemap);
        basemaps.appendChild(card);
      }, this);

      this._basemaps = basemaps;
      this.list.appendChild(basemaps);
    },

    _createBasemapItem: function (basemap) {
      var css = this.css;
      var nodeId = this.id + "_galleryNode_" + basemap.id;
      var node = domConstruct.create("li", {
        id: nodeId,
        className: css.item
      });

      var labelText = basemap.title || "";
      var imgSrc = basemap.thumbnailUrl ?
                   basemap.thumbnailUrl :
                   this._basePath.toString() + "images/transparent.gif";

      domConstruct.create("img", {
        id: nodeId,
        className: css.thumbnail,
        src: imgSrc,
        title: labelText,
        alt: labelText
      }, node);

      domConstruct.create("div", {
        className: css.title,
        innerHTML: basemap.title
      }, node);

      return node;
    }

  });

});
