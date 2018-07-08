# TextSymbol3DLayer

Symbol layer for text and font definitions.

### Properties

| Property | Details
| --- | ---
| enable | Type:`Boolean`
| [font](font.md) | Font used for text symbols.
| [halo](halo.md) | Halo definition.
| [material](material.md) | The material used to shade the geometry.
| size | Font size in points, positive only
| text | Text content in the label. Typically this property is not set, as text content is read from labeling field.
| type | Specifies the type of symbol used.<br>Value of this property must be `Text`


### Example

```json
{
  "symbol": {
    "type": "LabelSymbol3D",
    "symbolLayers": [
      {
        "size": 12,
        "type": "Text",
        "material": {
          "color": [
            255,
            255,
            0
          ]
        }
      }
    ]
  }
}
```

