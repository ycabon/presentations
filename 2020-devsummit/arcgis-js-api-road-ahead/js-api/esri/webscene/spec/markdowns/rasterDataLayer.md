# Raster Data Layer

A layer for displaying raster data. This layer only applies to offline data.

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| copyright | Attribution to the Raster Data Layer provider. It is displayed in the attribution on the scene. Input required by the user when the layer is added to the scene.
| id | A unique identifying string for the layer.
| layerType | String indicating the layer type.<br>Value of this property must be `RasterDataLayer`
| listMode | To show or hide the sublayer in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| path | For offline data, a path to a raster data file. A URI format is used, starting with `file:` followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| visibility | Boolean property determining whether the layer is initially visible in the scene.


### Example

```json
{
  "operationalLayers": [
    {
      "id": "0ed3520523734394b67a760e9f90c5dc",
      "layerType": "RasterDataLayer",
      "title": "Beijing",
      "opacity": 1.0,
      "visibility": true,
      "path": "file:../commondata/raster_data/beijing.tif"
    }
  ]
}
```

