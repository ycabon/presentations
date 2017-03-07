define([
  "esri/kernel",// sets esri.widgets._arcgisUrl
  "esri/request",

  "dojo/_base/array",

  "esri/core/Accessor"
],
function(
  esriKernel, esriRequest,
  array,
  Accessor
) {

  return Accessor.createSubclass({

    declaredClass: "demo.widgets.Basemaps.Basemap",

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    initialize: function () {
      if (!this.layers && !this.itemId) {
        console.error(this.declaredClass + ": unable to find the 'layers' property in parameters");
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    //  id
    //----------------------------------

    id: null,

    //----------------------------------
    //  title
    //----------------------------------
    title: "",

    //----------------------------------
    //  thumbnailUrl
    //----------------------------------
    thumbnailUrl: null,


    //----------------------------------
    //  layers
    //----------------------------------

    layers: null,

    //----------------------------------
    //  itemId
    //----------------------------------
    itemId: null,

    //----------------------------------
    //  basemapGallery
    //----------------------------------

    basemapGallery: null,

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    getLayers: function (arcgisUrl) {
      /* usage
       var returnValue = basemap.getLayers();
       if (dojo.isArray(returnValue)) {
       alert("Basemap has "+returnValue.length+" layers.");
       } else if (returnValue instanceof dojo.Deferred) {
       returnValue.addCallback(function(layers) {
       alert("Basemap has "+layers.length+" layers.");
       });
       }
       */

      if (this.layers) {

        // one of the user supplied basemaps or one the user requested before
        return this.layers;

      }
      else if (this.itemId) {

        // get web map config
        var url = (arcgisUrl || esriKernel.dijit._arcgisUrl) + "/content/items/" + this.itemId + "/data";
        var params = {
          f: "json"
        };

        return esriRequest({
          url: url,
          content: params,
          callbackParamName: "callback"
        }).then(function(response) {
            if (response.baseMap) {

              this.layers = array.map(response.baseMap.baseMapLayers,
                function(baseMapLayer) {
                  return new Accessor(baseMapLayer);
                });

              return this.layers;

            }
            else {
              var msg = this.declaredClass + ": could not access basemap item.";

              if (this.basemapGallery) {
                this.basemapGallery._emitError(msg);
              }
              else {
                console.error(msg);
              }

              return [];
            }
          }.bind(this),

          function() {
            var msg = this.declaredClass + ": could not access basemap item.";

            if (this.basemapGallery) {
              this.basemapGallery._emitError(msg);
            }
            else {
              console.error(msg);
            }
          }.bind(this)
        );

      }

    }

  });

});
