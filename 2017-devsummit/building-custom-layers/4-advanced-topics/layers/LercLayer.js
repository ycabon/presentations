define([
  "esri/request",

  "esri/layers/BaseTileLayer",

  "lerc/LercDecode"
],
function(
  esriRequest,
  BaseTileLayer,
  LercDecode
) {

  return BaseTileLayer.createSubclass({

    properties: {
      urlTemplate: null
    },

    getTileUrl: function(level, row, col) {
      return this.urlTemplate.replace("{z}", level).replace("{x}", col).replace("{y}", row);
    },

    fetchTile: function(level, row, col) {
      var url = this.getTileUrl(level, row, col);

      return esriRequest(url, {
        responseType: "array-buffer"
      })
      .then(function(response) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var width = this.tileInfo.size[0];
        var height = this.tileInfo.size[1];

        canvas.width = width;
        canvas.height = height;

        var lerc = LercDecode.decode(response.data, { noDataValue: 0 });
        var pixels = lerc.pixels[0];
        var stats = lerc.statistics[0];
        var min = 0;
        var max = 4000;
        var noDataValue = stats.noDataValue;

        var imageData = context.createImageData(width, height);
        var data = imageData.data;
        var f = 256 / (max - min);
        var pv = 0;
        var j;

        for (var i = 0; i < width * height; i++) {
          j = i + Math.floor(i / width);
          pv = (pixels[j] - min) * f;
          data[i * 4] = 0;
          data[i * 4 + 1] = 0;
          data[i * 4 + 2] = pv;
          data[i * 4 + 3] = pixels[i] === noDataValue ? 0 : pv;
        }

        context.putImageData(imageData, 0, 0);

        return canvas;
      }.bind(this));
    }

  });
});