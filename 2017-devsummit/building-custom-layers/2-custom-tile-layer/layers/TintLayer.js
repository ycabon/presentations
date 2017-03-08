define([
  "esri/request",
  "esri/Color",
  "esri/layers/BaseTileLayer"
],
function(
  esriRequest,
  Color,
  BaseTileLayer
) {

  var TintLayer = BaseTileLayer.createSubclass({

    properties: {
      urlTemplate: null,
      tint: {
        value: null,
        type: Color
      }
    },

    getTileUrl: function(level, row, col) {
      return this.urlTemplate.replace("{z}", level).replace("{x}", col).replace("{y}", row);
    },

    fetchTile: function(level, row, col) {
      var url = this.getTileUrl(level, row, col);

      return esriRequest(url, {
        responseType: "image"
      })
      .then(function(response) {
        var image = response.data;
        var width = this.tileInfo.size[0];
        var height = this.tileInfo.size[0];
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        // Apply the tint
        if (this.tint) {
          context.fillStyle = this.tint.toCss();
          context.fillRect(0, 0, width, height);
          context.globalCompositeOperation = "multiply";
        }

        context.drawImage(image, 0, 0, width, height);

        return canvas;
      }.bind(this));
    }

  });

  return TintLayer;

});