# LineSymbol3DLayer

LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.

### Properties

| Property | Details
| --- | ---
| enable | Type:`Boolean`
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
      "size": 12
    }
  ]
}
```

