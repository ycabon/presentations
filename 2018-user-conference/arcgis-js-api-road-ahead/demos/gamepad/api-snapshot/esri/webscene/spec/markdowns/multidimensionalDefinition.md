# Multi-dimensional Definition

### Properties

| Property | Details
| --- | ---
| dimensionName | Type of dimension being used (ex. StdTime).
| isSlice | Is slice?
| values | Numerical array of associated values.
| variableName | Name of the variable.


### Additional information

[Multidimensional Definition](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r300000290000000) in ArcGIS REST API

### Example

```json
{
  "multidimensionalDefinition": {
    "variableName": "t",
    "dimensionName": "StdTime",
    "values": [
      1414303200000
    ],
    "isSlice": true
  }
}
```

