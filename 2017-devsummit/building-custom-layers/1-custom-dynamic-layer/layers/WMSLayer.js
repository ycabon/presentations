define([
  "esri/layers/BaseDynamicLayer"
],
function(
  BaseDynamicLayer
) {

  var CustomWMSLayer = BaseDynamicLayer.createSubclass({

    properties: {
      getMapUrl: null,
      getMapParameters: null
    },

    getImageUrl: function(extent, width, height) {
      var urlVariables = this._prepareQuery(this.getMapParameters, extent, width, height);
      var queryString = this._joinUrlVariables(urlVariables);
      return this.getMapUrl + "?" + queryString;
    },

    _prepareQuery: function(queryParameters, extent, width, height) {
      var wkid = extent.spatialReference.isWebMercator ? 3857 : extent.spatialReference.wkid;
      var replacers = {
        width: width,
        height: height,
        wkid: wkid,
        xmin: extent.xmin,
        xmax: extent.xmax,
        ymin: extent.ymin,
        ymax: extent.ymax
      };

      var urlVariables = this._replace({}, queryParameters, replacers);

      return urlVariables;
    },

    _replace(urlVariables, queryParameters, replacers) {
      Object.keys(queryParameters).forEach(function(key) {
        urlVariables[key] = Object.keys(replacers).reduce(function(previous, replacerKey) {
          return previous.replace("{" + replacerKey + "}", replacers[replacerKey]);
        }, queryParameters[key]);
      });

      return urlVariables;
    },

    _joinUrlVariables: function(urlVariables) {
      return Object.keys(urlVariables).reduce(function(previous, key) {
        return previous + (previous ? "&" : "") + key + "=" + urlVariables[key];
      }, "");
    }

  });

  return CustomWMSLayer;

})