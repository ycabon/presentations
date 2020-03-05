# renderingRule

Specifies the rendering rule for how the requested image should be rendered.

**Referenced by:** [Image Service Layer (ArcGISImageServiceLayer)](imageServiceLayer.md), [mosaicRule](mosaicRule.md)

### Properties

| Property | Details
| --- | ---
| outputPixelType | the output pixel type defines the output image's pixel type.<br>If property is present, must be one of the following values: <ul><li>`C128`</li><li>`C64`</li><li>`F32`</li><li>`F64`</li><li>`S16`</li><li>`S32`</li><li>`S8`</li><li>`U1`</li><li>`U16`</li><li>`U2`</li><li>`U32`</li><li>`U4`</li><li>`U8`</li><li>`UNKNOWN`</li></ul>
| rasterFunction | The raster function name identifies the processing or rendering to be performed. For a list of possible types, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this.
| rasterFunctionArguments | The arguments for the referenced `rasterFunction`. For a description of arguments per raster function type, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this.
| variableName | Variable name for the raster function.


### Additional information

[Raster function objects](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000rv000000) in ArcGIS REST API

### renderingRule with Aspect rasterFunction Example

```json
{
  "renderingRule": {
    "rasterFunction": "Aspect"
  }
}
```
### rendering rule with ArgStatistics rasterFunction Example

```json
{
  "renderingRule": {
    "rasterFunction": "ArgStatistics",
    "rasterFunctionArguments": {
      "ArgStatisticsType": 3,
      "MinValue": 0.15,
      "MaxValue": 1,
      "UndefinedClass": 100,
      "Raster": "$$"
    },
    "outputPixelType": "U8",
    "variableName": "Raster"
  }
}
```

