# Tiled Image Service Layer (ArcGISTiledImageServiceLayer)

An ArcGIS Tiled Image Service layer displays content from an ArcGIS Server Image service that has been cached (tiled).

### Properties

| Property | Details
| --- | ---
| id | A string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| isReference | Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISTiledImageServiceLayer`
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | URL to the ArcGIS Server Image Service.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### operationalLayer Example

Live sample web scene showing the ArcGISTiledImageServiceLayer as an [operationalLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=9cb83d8c8cdb409f9dec93a4c0c9eeb6)

```json
{
  "operationalLayers": [
    {
      "id": "15987e18ba6-layer-1",
      "layerType": "ArcGISTiledImageServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Toronto/ImageServer",
      "visibility": true,
      "opacity": 1,
      "title": "Toronto"
    }
  ]
}
```
### basemapMapLayer Example

```json
{
  "baseMapLayers": [
    {
      "id": "Toronto_4412",
      "layerType": "ArcGISTiledImageServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Toronto/ImageServer",
      "visibility": true,
      "opacity": 1,
      "title": "Toronto",
      "showLegend": true
    }
  ],
  "title": "Tiled Imagery"
}
```

