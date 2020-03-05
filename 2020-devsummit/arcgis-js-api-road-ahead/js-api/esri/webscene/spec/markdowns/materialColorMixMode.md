# Material

The material used to shade the geometry, including colorMixMode options.

**Referenced by:** [FillSymbol3DLayer](fillSymbol3DLayer.md)

### Properties

| Property | Details
| --- | ---
| [color](color.md) | Color is represented as a three or four-element array.
| colorMixMode | Controls how symbolLayer or visualVariable color is applied onto the underlying geometry color/texture. This property only applies to FillSymbol3DLayer within MeshSymbol3D.<br><ul><li>`tint`: the feature's appearance (in terms of color) should be altered to match the symbol / visual variable color.</li><li>`replace`: the feature's color is replaced with the symbol / visual variable color.</li><li>`multiply`: the feature's color is multiplied with the symbol color.</li></ul><br>If property is present, must be one of the following values: <ul><li>`multiply`</li><li>`replace`</li><li>`tint`</li></ul>
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
    "transparency": 20,
    "colorMixMode": "tint"
  }
}
```

