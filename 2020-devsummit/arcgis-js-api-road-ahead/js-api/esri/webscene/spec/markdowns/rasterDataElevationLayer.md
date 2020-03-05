# Raster Data Elevation Layer

RasterDataElevationLayer is a single-band raster layer used for rendering elevation.

**Referenced by:** [elevationLayers](elevationLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer
| layerType | String indicating the layer type<br>Value of this property must be `RasterDataElevationLayer`
| listMode | To show or hide the elevation layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| path | For offline data, a path to an ArcGIS Runtime supported raster data file. A URI format is used, starting with file: followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### Example

```json
{
  "ground": {
    "layers": [
      {
        "id": "local_dem",
        "title": "Local DEM",
        "path": "file:../commondata/DEM.tif",
        "visibility": true,
        "layerType": "RasterDataElevationLayer"
      }
    ]
  }
}
```

