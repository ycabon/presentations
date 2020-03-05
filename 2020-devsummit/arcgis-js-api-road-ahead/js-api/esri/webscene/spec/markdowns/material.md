# Material

The material used to shade the geometry.

**Referenced by:** [ExtrudeSymbol3DLayer](extrudeSymbol3DLayer.md), [IconSymbol3DLayer](iconSymbol3DLayer.md), [LineSymbol3DLayer](lineSymbol3DLayer.md), [ObjectSymbol3DLayer](objectSymbol3DLayer.md), [PathSymbol3DLayer](pathSymbol3DLayer.md), [TextSymbol3DLayer](textSymbol3DLayer.md)

### Properties

| Property | Details
| --- | ---
| [color](color.md) | Color is represented as a three or four-element array.
| transparency | A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.


### Example

```json
{
  "material": {
    "color": [
      255,
      0,
      0
    ],
    "transparency": 20
  }
}
```

