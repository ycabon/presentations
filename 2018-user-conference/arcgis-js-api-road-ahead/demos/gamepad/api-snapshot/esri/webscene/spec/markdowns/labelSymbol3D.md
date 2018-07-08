# LabelSymbol3D

LabelSymbol3D is used to render labels for features from a FeatureLayer in a 3D SceneView.

### Properties

| Property | Details
| --- | ---
| [callout](callout.md) | Callout configuration for a symbol.
| symbolLayers | A Collection of Symbol3DLayer objects used to visualize the graphic or feature.<br>Array of items of the following types: <ul><li>[textSymbol3DLayer](textSymbol3DLayer.md)<br>Symbol layer for text and font definitions.</li></ul>
| type | Specifies the type of symbol used.<br>Value of this property must be `LabelSymbol3D`
| [verticalOffset](verticalOffset.md) | Shifts the symbol along the vertical world axis by a given length.


### Label Symbol 3D Example

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
### Label Symbol 3D with verticalOffset and leader line callout Example

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
    ],
    "callout": {
      "type": "line",
      "color": [
        255,
        255,
        255
      ],
      "size": 0.75,
      "border": {
        "color": [
          50,
          50,
          50
        ]
      }
    },
    "verticalOffset": {
      "screenLength": 100,
      "maxWorldLength": 600,
      "minWorldLength": 10
    }
  }
}
```

