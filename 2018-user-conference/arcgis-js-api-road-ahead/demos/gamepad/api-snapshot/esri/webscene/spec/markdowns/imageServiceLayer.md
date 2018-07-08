# Image Service Layer (ArcGISImageServiceLayer)

An image service provides access to raster data through a web service. Multiple rasters can be served as one image service through mosaic dataset technology, dynamically processed and mosaicked on the fly. An image service supports accessing both the mosaicked image and its catalog, as well as individual rasters in the catalog. Also, image services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached image services.

### Properties

| Property | Details
| --- | ---
| bandIds | An array of bandIds that are visible, can specify bands to export or rearrange band order(from image service).
| compressionQuality | Controls how much loss the image will be subjected to by the compression algorithm (from image service).
| disablePopup | Boolean property indicating whether to ignore popups defined by the service item.
| format | String value representing image format.<br>Must be one of the following values:<ul><li>`jpgpng`</li><li>`png`</li><li>`png8`</li><li>`png24`</li><li>`jpg`</li><li>`bmp`</li><li>`gif`</li><li>`tiff`</li><li>`png32`</li></ul>
| id | A unique identifying string for the layer.
| interpolation | The algorithm used for interpolation.<br>Must be one of the following values:<ul><li>`RSP_BilinearInterpolation`</li><li>`RSP_CubicConvolution`</li><li>`RSP_Majority`</li><li>`RSP_NearestNeighbor`</li></ul>
| isReference | This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| [layerDefinition](layerDefinition.md) | A layerDefinition object defining the attribute schema and drawing information for the layer.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISImageServiceLayer`
| listMode | To show or hide layers in the layer list<br>Must be one of the following values:<ul><li>`show`</li><li>`hide`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| [mosaicRule](mosaicRule.md) | Specifies the mosaic rule when defining how individual images should be mosaicked.
| noData | The pixel value that represents no information.
| noDataInterpretation | A string value of interpretation of noData setting. Default is 'esriNoDataMatchAny' when noData is a number, and 'esriNoDataMatchAll' when noData is an array.<br>Must be one of the following values:<ul><li>`esriNoDataMatchAny`</li><li>`esriNoDataMatchAll`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| pixelType | Pertains to the type of values stored in the raster, such as signed integer, unsigned integer, or floating point.<br>Must be one of the following values:<ul><li>`C128`</li><li>`C64`</li><li>`F32`</li><li>`F64`</li><li>`S16`</li><li>`S32`</li><li>`S8`</li><li>`U1`</li><li>`U16`</li><li>`U2`</li><li>`U32`</li><li>`U4`</li><li>`U8`</li><li>`UNKNOWN`</li></ul>
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of popup windows when you click or query a feature.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| [renderingRule](renderingRule.md) | Specifies the rendering rule for how the requested image should be rendered.
| showLegend | Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend control.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible in the web map.


### Example

```json
{
  "operationalLayers": [
    {
      "id": "CharlotteLAS_88",
      "layerType": "ArcGISImageServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/CharlotteLAS/ImageServer",
      "visibility": true,
      "format": "jpgpng",
      "compressionQuality": 95,
      "opacity": 1,
      "title": "CharlotteLAS",
      "renderingRule": {
        "rasterFunction": "Stretch",
        "rasterFunctionArguments": {
          "StretchType": 5,
          "DRA": false,
          "Gamma": [
            1
          ],
          "UseGamma": true
        },
        "outputPixelType": "U8"
      },
      "mosaicRule": {
        "mosaicMethod": "esriMosaicSeamline",
        "mosaicOperation": "MT_BLEND"
      }
    }
  ]
}
```

