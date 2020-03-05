# Multi-dimensional Definition

**Referenced by:** [mosaicRule](mosaicRule.md)

### Properties

| Property | Details
| --- | ---
| dimensionName | Type of dimension being used (ex. StdTime).
| isSlice | Is slice?
| values | Array where every element is either a single value, or an array of two values (lower and upper bound).<br>Array of items of the following types: <ul><li>`Number`</li><li>`Array`</li></ul>
| variableName | Name of the variable.


### Additional information

[Multidimensional Definition](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r300000290000000) in ArcGIS REST API

### Example

```json
{
  "multidimensionalDefinition": {
    "variableName": "AvgSalinity",
    "dimensionName": "StdZ",
    "values": [
      [
        1406181600000,
        1406182200000
      ],
      [
        1406224800000,
        1406225400000
      ]
    ],
    "isSlice": false
  }
}
```

