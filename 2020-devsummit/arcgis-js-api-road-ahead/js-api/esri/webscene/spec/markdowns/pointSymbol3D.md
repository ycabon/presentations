# PointSymbol3D

PointSymbol3D is used to render features with Point geometry in a 3D SceneView.

**Referenced by:** [Symbol3D](symbol3D.md)

### Properties

| Property | Details
| --- | ---
| [callout](callout.md) | Callout configuration for a symbol.
| [styleOrigin](styleOrigin.md) | The origin of the style from which the symbol was originally referenced.
| symbolLayers | A Collection of Symbol3DLayer objects used to visualize the graphic or feature.<br>Array of items of the following types: <ul><li>[iconSymbol3DLayer](iconSymbol3DLayer.md)<br>IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.</li><li>[objectSymbol3DLayer](objectSymbol3DLayer.md)<br>ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.</li></ul>
| type | Specifies the type of symbol used<br>Value of this property must be `PointSymbol3D`
| [verticalOffset](verticalOffset.md) | Shifts the symbol along the vertical world axis by a given length.


### Point Symbol 3D Example

```json
{
  "symbol": {
    "type": "PointSymbol3D",
    "symbolLayers": [
      {
        "width": 30000,
        "height": 160000,
        "resource": {
          "primitive": "cylinder"
        },
        "type": "Object",
        "material": {
          "color": [
            0,
            255,
            0
          ]
        }
      }
    ]
  }
}
```
### Icon Point Symbol with verticalOffset and leader line callout Example

```json
{
  "symbol": {
    "type": "PointSymbol3D",
    "symbolLayers": [
      {
        "size": 16,
        "resource": {
          "primitive": "circle"
        },
        "type": "Icon",
        "material": {
          "color": [
            0,
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

