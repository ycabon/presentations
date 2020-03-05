# Tiled Map Service Layer (ArcGISTiledMapServiceLayer)

An ArcGIS Tiled Map Service layer displays map content from an ArcGIS Server Map service that has been cached (tiled).

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer.
| isReference | This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISTiledMapServiceLayer`
| layers | An array of layer objects defining a URL for queries and the popup window content.<br>See [layers properties](#layers-properties) table.
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| path | For offline data, a path to a tile package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.tpk`.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.
| url | URL to the ArcGIS Server tiled Map Service
| visibility | Boolean property determining whether the layer is initially visible in the map.


### layers properties

| Property | Details
| --- | ---
| disablePopup | Indicates whether to allow a client to ignore the popups defined on the layer. The popupInfo object could be saved in the map or item.
| id | The layer id, as a numeric value.
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| [popupInfo](popupInfo.md) | A popupInfo object defining the popup window content for the layer.
| showLegend | A Boolean indicating if the layer should be shown in the legend in client applications.


### operationalLayer Example

Live sample web scene showing the ArcGISTiledMapServiceLayer as an [operationalLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=b7077db71c5743cb935151efda288835)

```json
{
  "operationalLayers": [
    {
      "id": "World_Imagery_6919",
      "layerType": "ArcGISTiledMapServiceLayer",
      "url": "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
      "visibility": true,
      "opacity": 0.34,
      "title": "World_Imagery",
      "minScale": 147914382,
      "maxScale": 70.5310735
    }
  ]
}
```
### baseMapLayer Example

Live sample web scene showing the ArcGISTiledMapServiceLayer as a [baseMapLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=2025161aa6db48f5a640381bbf2cdb93)

```json
{
  "baseMapLayers": [
    {
      "id": "World_Terrain_Base_3",
      "layerType": "ArcGISTiledMapServiceLayer",
      "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",
      "visibility": true,
      "opacity": 1,
      "title": "World Terrain Base"
    },
    {
      "id": "World_Reference_Overlay_5790",
      "layerType": "ArcGISTiledMapServiceLayer",
      "url": "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",
      "visibility": true,
      "opacity": 1,
      "title": "World Reference",
      "isReference": true
    }
  ],
  "title": "Terrain with Labels"
}
```

