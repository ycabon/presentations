# Tiled Elevation Layer

Tiled Elevation Layer is a tile layer used for rendering elevation.

**Referenced by:** [elevationLayers](elevationLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type<br>Value of this property must be `ArcGISTiledElevationServiceLayer`
| listMode | To show or hide the elevation layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| path | For offline data, a path to a tile package containing elevation data. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/portland.tpk`.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.
| url | The URL to the layer.If the layer is not from a web service but rather a feature collection, then the url property is omitted
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### Example

Live sample web scene showing [elevationLayers](https://www.arcgis.com/home/webscene/viewer.html?webscene=a06aa4a2e4264b789686e66a75d863ca)

```json
{
  "ground": {
    "layers": [
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

