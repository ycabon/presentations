# Simple Renderer

A simple renderer is a renderer that uses one symbol only.

### Properties

| Property | Details
| --- | ---
| [authoringInfo](authoringInfo.md) | An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.
| description | Description of the renderer.
| label | The text string that is displayed in the table of contents.
| [symbol](symbol3D.md) | An object that represents how all features will be drawn.
| type | Specifies the type of renderer used.<br>Value of this property must be `simple`
| [visualVariables](visualVariable.md) | An array of objects used to set rendering properties.


### Example

```json
{
  "renderer": {
    "type": "simple",
    "symbol": {
      "type": "PointSymbol3D",
      "symbolLayers": [
        {
          "type": "Icon",
          "resource": {
            "primitive": "circle"
          },
          "material": {
            "color": [
              255,
              255,
              255
            ]
          },
          "size": 12
        }
      ]
    }
  }
}
```

