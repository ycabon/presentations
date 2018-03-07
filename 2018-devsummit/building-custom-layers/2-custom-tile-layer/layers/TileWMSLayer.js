define([
  "esri/layers/BaseTileLayer"
],
function(
  BaseTileLayer
) {
  
  var TileWMSLayer = BaseTileLayer.createSubclass({

    properties: {
      getMapUrl: null,
      getMapParameters: null
    },

    getTileUrl: function(level, row, col) {
      var bounds = this.getTileBounds(level, row, col);
      var urlVariables = this._prepareQuery(this.getMapParameters, bounds);
      var queryString = this._joinUrlVariables(urlVariables);
      return this.getMapUrl + "?" + queryString;
    },

    _prepareQuery: function(queryParameters, bounds) {
      var width = this.tileInfo.size[0];
      var height = this.tileInfo.size[1];
      var wkid = this.spatialReference.isWebMercator ? 3857 : this.spatialReference.wkid;
      var replacers = {
        width: width,
        height: height,
        wkid: wkid,
        xmin: bounds[0],
        ymin: bounds[1],
        xmax: bounds[2],
        ymax: bounds[3]
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

  return TileWMSLayer;

});
