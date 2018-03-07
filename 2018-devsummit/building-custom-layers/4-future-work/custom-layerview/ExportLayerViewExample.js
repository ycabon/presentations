define([
  "esri/layers/Layer",
  "esri/views/2d/layers/BaseLayerView2D"
],
function(
  Layer,
  BaseLayerView2D
) {

  let CustomLayerView = BaseLayerView2D.createSubclass({

    // When the layerview is attached to the view
    attach: function() {
      // Start a dynamic rendering
      let renderer = this.startExportRendering({

        // only supported type is canvas 2d.
        type: "canvas-2d",

        // function called every time an export is required
        createExport: function(extent, width, height, options) {

          // An export is an object with a render() function
          let exported = {
            width,
            height,

            // render() is called every time the image is required to render.
            render: function(ctx, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
              ctx.strokeRect(dx, dy, dWidth, dHeight);

              ctx.fillStyle = "red";

              ctx.fillRect(0, 0, 20, 20);
              ctx.fillRect(dWidth - 20, 0, 20, 20);
              ctx.fillRect(dWidth - 20, dHeight - 20, 20, 20);
              ctx.fillRect(0, dHeight - 20, 20, 20);

              ctx.fillText(JSON.stringify(extent.toJSON()), 20, 20);

              renderer.requestRender(this);
            }
          };

          return exported;
        },

        // will be called 
        disposeExport: function(imageSource) {

        }
      });
    },

    // View is detached from the view, stop everything
    detach: function() {
      this._renderer && this._renderer.stop();
      this._renderer = null;
    }
  });

  let CustomLayer = Layer.createSubclass({
    createLayerView(view) {
      if (view.type === "2d") {
        return new CustomLayerView({
          view: view,
          layer: this
        });
      }
    }
  });

  return CustomLayer;

});

