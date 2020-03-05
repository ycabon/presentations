# LineSymbol3DLayer

LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.

**Referenced by:** [LineSymbol3D](lineSymbol3D.md), [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| cap | Shape of the beginning and the end of each line geometry.<br>If property is present, must be one of the following values: <ul><li>`butt`</li><li>`round`</li><li>`square`</li></ul>
| enable | Type:`Boolean`
| join | Shape of the intersection of two line segments.<br>If property is present, must be one of the following values: <ul><li>`bevel`</li><li>`miter`</li><li>`round`</li></ul>
| [material](material.md) | The material used to shade the geometry.
| size | Line width in points, positive only
| type | Specifies the type of symbol used.<br>Value of this property must be `Line`


### Example

```json
{
  "symbolLayers": [
    {
      "type": "Line",
      "material": {
        "color": [
          255,
          0,
          0
        ]
      },
      "size": 12,
      "cap": "round",
      "join": "round"
    }
  ]
}
```

