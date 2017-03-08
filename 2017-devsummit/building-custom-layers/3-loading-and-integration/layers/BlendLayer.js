define([
  "dojo/Deferred",
  "dojo/promise/all",

  "esri/layers/BaseTileLayer"
],
function(
  Deferred, all,
  BaseTileLayer
) {

  var BlendLayer = BaseTileLayer.createSubclass({
    declaredClass: "BlendLayer",

    properties: {
      multiply: null
    },

    load: function() {
      this.multiply.forEach(function(layer) {
        var promise = layer.load();

        // The BlendLayer will be loaded when every promise is resolved
        this.addResolvingPromise(promise);
      }, this);

      var dfd = new Deferred();
      setTimeout(
        function() {
          this.copyright = "My BlendLayer";
          dfd.resolve();
        }.bind(this),
        2000
      );
      this.addResolvingPromise(dfd.promise);
    },

    fetchTile: function(level, row, col) {
      var tilePromises = this.multiply.map(function(layer) {
        return layer.fetchTile(level, row, col);
      });

      return all(tilePromises)
        .then(function(images) {
          var width = this.tileInfo.size[0];
          var height = this.tileInfo.size[0];
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");

          canvas.width = width;
          canvas.height = height;

          context.globalCompositeOperation = "multiply";
          images.forEach(function(image) {
            context.drawImage(image, 0, 0, width, height);
          });

          return canvas;
        }.bind(this));
    }

  });

  return BlendLayer;
});
