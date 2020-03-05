# Map Service Layer (ArcGISMapServiceLayer)

Map services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached map services.

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer.
| isReference | This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISMapServiceLayer`
| layers | An array of layer objects defining the styling, geometry, and attribute information for the features.<br>See [layers properties](#layers-properties) table.
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.
| visibleLayers | An array of sublayer ids that should appear visible. Used with map service layers that are not tiled.


### layers properties

| Property | Details
| --- | ---
| defaultVisibility | Default visibility of the layers in the map service.
| disablePopup | Indicates whether to allow a client to ignore the popups defined on the layer. The popupInfo object could be saved in the map or item.
| id | The layer id, as a numeric value.
| layerDefinition | Additional properties that define drawing information and other configurations for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| name | The name of the layer.
| parentLayerId | If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer.
| [popupInfo](popupInfo.md) | A popupInfo object defining the popup window content for the layer.
| showLabels | A Boolean indicating if the layer should display labels in client applications.
| showLegend | A Boolean indicating if the layer should be shown in the legend in client applications.
| subLayerIds | If the layer is a parent layer, it will have one or more sub layers included in an array.


### operationalLayer Example

Live sample web scene showing the ArcGISMapServiceLayer as an [operationalLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=3c04b5e8c19c42e490b0823d05cf7a9d)

```json
{
  "operationalLayers": [
    {
      "id": "15988a24a0e-layer-2",
      "layerType": "ArcGISMapServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
      "visibility": true,
      "opacity": 1,
      "title": "Census"
    }
  ]
}
```
### baseMapLayer Example

```json
{
  "baseMapLayers": [
    {
      "id": "defaultBasemap",
      "layerType": "ArcGISMapServiceLayer",
      "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
      "visibility": true,
      "opacity": 1,
      "title": "Topographic"
    },
    {
      "id": "Census_6367",
      "layerType": "ArcGISMapServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer",
      "visibility": true,
      "opacity": 1,
      "title": "Census",
      "showLegend": true
    }
  ],
  "title": "Topographic"
}
```

