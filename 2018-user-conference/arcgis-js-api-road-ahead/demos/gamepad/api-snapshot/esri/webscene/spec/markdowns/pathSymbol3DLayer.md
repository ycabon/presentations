# PathSymbol3DLayer

PathSymbol3DLayer renders Polyline geometries using a volumetric 3D tube with a LineSymbol3D in a SceneView.

### Properties

| Property | Details
| --- | ---
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| size | Path size (diameter) in meters, positive only
| type | Specifies the type of symbol used.<br>Value of this property must be `Path`
| width | Path width in meters


### Example

```json
{
  "symbolLayers": [
    {
      "type": "Path",
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

