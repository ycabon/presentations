# OpenStreetMap Layer (OpenStreetMap)

Allows use of OpenStreetMap data for use in basemaps only.

### Properties

| Property | Details
| --- | ---
| id | An identifying string for the layer, unique per scene.
| isReference | Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | String containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `OpenStreetMap`
| maxScale | A numeric property used to determine the maximum scale at which the layer is displayed.
| minScale | A numeric property used to determine the minimum scale at which the layer is displayed.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| title | String title for the basemap layer.
| type | <em>Deprecated, use layerType instead.</em>
| visibility | Boolean property determining whether the layer is initially visible.


### Example

Live sample web scene showing the OpenStreetMap as a [baseMapLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=45109af15da54a49ab41ba9a3ede92ec)

```json
{
  "baseMapLayers": [
    {
      "title": "Layer",
      "layerType": "OpenStreetMap",
      "opacity": 1,
      "visibility": true,
      "id": "OpenStreetMap"
    }
  ],
  "id": "15987d24c4b-basemap-11",
  "title": "OpenStreetMap"
}
```

