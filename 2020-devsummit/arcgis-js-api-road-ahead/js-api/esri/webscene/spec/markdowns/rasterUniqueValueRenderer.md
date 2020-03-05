# Raster UniqueValue Renderer

Defines the color of each raster cell based on an attribute. This is done by using unique colors to represent cells with equal attribute values.

**Referenced by:** [Raster Renderers](rasterRenderers.md)

### Properties

| Property | Details
| --- | ---
| [authoringInfo](authoringInfo.md) | An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.
| [colorUniqueValueInfos](colorUniqueValueInfo.md) | Unique value infos.
| [defaultColor](color.md) | The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.
| defaultLabel | Default label for the default symbol used to draw unspecified values.
| field | The name of the field that is used for the renderer.
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| type | Specifies the type of renderer used.<br>Value of this property must be `rasterUniqueValueRenderer`


### Example

```json
{
  "renderer": {
    "type": "rasterUniqueValueRenderer",
    "field": "ClassName",
    "colorUniqueValueInfos": [
      {
        "values": [
          "Open Water"
        ],
        "label": "Open Water",
        "description": "Open Water",
        "color": [
          71,
          107,
          161,
          255
        ]
      },
      {
        "values": [
          "Perennial Snow/Ice"
        ],
        "label": "Perennial Snow/Ice",
        "description": "Perennial Snow/Ice",
        "color": [
          209,
          222,
          250,
          255
        ]
      }
    ]
  }
}
```

