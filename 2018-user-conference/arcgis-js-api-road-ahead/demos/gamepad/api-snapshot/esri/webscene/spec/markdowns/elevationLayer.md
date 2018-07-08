# elevationLayer

ElevationLayer is a tile layer used for rendering elevation in web scenes.

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type<br>Value of this property must be `ArcGISTiledElevationServiceLayer`
| listMode | To show or hide the elevation layer in the layer list<br>Must be one of the following values:<ul><li>`show`</li><li>`hide`</li></ul>
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.
| url | The URL to the layer.If the layer is not from a web service but rather a feature collection, then the url property is omitted
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### Example

Live sample web scene showing [elevationLayers](https://www.arcgis.com/home/webscene/viewer.html?webscene=a06aa4a2e4264b789686e66a75d863ca)

```json
{
  "baseMap": {
    "title": "elevation-only basemap",
    "baseMapLayers": [],
    "elevationLayers": [
      {
        "id": "globalElevation",
        "title": "Terrain3D",
        "url": "http://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
        "visibility": true,
        "layerType": "ArcGISTiledElevationServiceLayer"
      }
    ]
  }
}
```

