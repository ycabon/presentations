# mosaicRule

The image service uses a mosaic rule to mosaick multiple rasters on the fly. The mosaic rule parameter is used by many image service operations, for example, export image and identify operations.

**Referenced by:** [Image Service Layer (ArcGISImageServiceLayer)](imageServiceLayer.md)

### Properties

| Property | Details
| --- | ---
| ascending | Indicate whether to use ascending or descending order.
| fids | A list that defines a subset of rasters used in the mosaic, be aware that the rasters may not be visible at all scales.
| [itemRenderingRule](renderingRule.md) | The rendering rule applies on items before mosaicking.
| lockRasterIds | Lock a few rasters in the image service. Used together with `esriMosaicLockRaster`.
| mosaicMethod | A string value that determines how the selected rasters are ordered.<br>Must be one of the following values:<ul><li>`esriMosaicAttribute`</li><li>`esriMosaicCenter`</li><li>`esriMosaicLockRaster`</li><li>`esriMosaicNadir`</li><li>`esriMosaicNone`</li><li>`esriMosaicNorthwest`</li><li>`esriMosaicSeamline`</li><li>`esriMosaicViewpoint`</li></ul>
| mosaicOperation | Use the mosaic operation to resolve overlap pixel values: from first or last raster, use the min, max or mean of the pixel values, or blend them.<br>If property is present, must be one of the following values: <ul><li>`MT_BLEND`</li><li>`MT_FIRST`</li><li>`MT_LAST`</li><li>`MT_MAX`</li><li>`MT_MEAN`</li><li>`MT_MIN`</li><li>`MT_SUM`</li></ul>
| [multidimensionalDefinition](multidimensionalDefinition.md) | Definition of multidimentional variables.
| sortField | The field name used together with `esriMosaicAttribute` method.
| sortValue | The base sort value used together with `esriMosaicAttribute` method and `sortField` parameter.
| [viewpoint](point_geometry.md) | Use a view point along with `esriMosaicViewpoint`.
| where | <em>Deprecated. Use `layerDefinition.definitionExpression` instead.</em>


### Additional information

[Mosaic rule](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000s4000000) in ArcGIS REST API

### mosaic rule `None` Example

```json
{
  "mosaicRule": {
    "mosaicMethod": "esriMosaicNone",
    "ascending": true,
    "fids": [
      1,
      2,
      3
    ],
    "mosaicOperation": "MT_FIRST"
  }
}
```
### mosaic rule `ByAttribute` Example

```json
{
  "mosaicRule": {
    "mosaicMethod": "esriMosaicAttribute",
    "sortField": "acquisitionDate",
    "sortValue": "2010/12/31"
  }
}
```
### mosaic rule `Viewpoint` Example

```json
{
  "mosaicRule": {
    "mosaicMethod": "esriMosaicViewpoint",
    "viewpoint": {
      "x": 100,
      "y": 90,
      "spatialReference": {
        "wkid": 4326
      }
    },
    "where": "ImageType='Landsat7'"
  }
}
```
### mosaic rule `LockRaster` Example

```json
{
  "mosaicRule": {
    "mosaicMethod": "esriMosaicLockRaster",
    "lockRasterIds": [
      1,
      2,
      3
    ]
  }
}
```

