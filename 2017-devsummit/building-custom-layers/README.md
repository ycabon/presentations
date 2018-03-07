# Building Custom Layers

Presentation given at Esri DevSummit 2017 to give an overview, at that time, of the extensibility of the ArcGIS API for JavaScript 4.  
Each examples are based onto a development build API 4.4. They might break but will be updated for the 4.4 release.

## Demos

### Dynamic Layer

Example of layer that consumes a WMS service by extending `BaseDynamicLayer` class and its `getImageUrl()` method.
  
[![Example of layer that consumes a WMS service by extending BaseDynamicLayer class and its getImageUrl method](images/1-custom-dynamic-layer.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/1-custom-dynamic-layer/getImageUrl-2d.html)


### Tile Layer

Example of layer that consumes a WMS service by extending `BaseTileLayer` class and its `getTileUrl()` method.

[![Example of layer that consumes a WMS service by extending BaseTileLayer class and its getTileUrl method](images/2-custom-tile-layer-getTileUrl.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/2-custom-tile-layer/getTileUrl-2d.html)
[![Example of layer that consumes a WMS service by extending BaseTileLayer class and its getTileUrl method](images/2-custom-tile-layer-getTileUrl-2.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/2-custom-tile-layer/getTileUrl-2d.html)

Example of layer that fetches tile images and colorize them using HTML canvas.

[![Example of layer that fetches tile images and colorize them using HTML canvas](images/2-custom-tile-layer-fetchTile.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/2-custom-tile-layer/fetchTile-2d.html)

### Layer loading

Another use of HTML canvas to blend tiles fetched from 2 services. Demonstrate how to specify resources needed for the layer to be `loaded`.

[![Another use of HTML canvas to blend tiles fetched from 2 services. Demonstrate how to specify resources needed for the layer to be loaded.](images/3-layer-loading.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/3-loading-and-integration/tile-blending-2d.html)

### LERC and Worker

Example to decode and elevation tiles, in LERC format using HTML Canvas.

[![Example to decode and elevation tiles, in LERC format using HTML Canvas.](images/4-advanced-topics-lerc.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/4-advanced-topics/lerc-2d.html)

Example to generate one contour line from elevation tiles, implementing the algorithm described here http://blog.bruce-hill.com/meandering-triangles/

[![Example to generate contour lines from elevation tiles](images/4-advanced-topics-contour-line.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/4-advanced-topics/contour-lines-2d.html)

Example to generate **many more** contour lines from elevation tiles, using web workers

[![Example to generate contour lines from elevation tiles](images/4-advanced-topics-workers-contour-lines.png)](https://ycabon.github.io/presentations/2017-devsummit/building-custom-layers/4-advanced-topics/contour-lines-worker-2d.html)

## Licence

MIT