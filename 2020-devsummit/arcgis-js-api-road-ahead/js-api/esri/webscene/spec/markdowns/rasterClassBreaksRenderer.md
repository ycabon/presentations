# Raster ClassBreaks Renderer

Defines the color of each raster cell based on the value of a numeric attribute. Colors are assigned based on classed ranges of data.

**Referenced by:** [Raster Renderers](rasterRenderers.md)

### Properties

| Property | Details
| --- | ---
| [authoringInfo](authoringInfo.md) | An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.
| [colorClassBreakInfos](colorClassBreakInfo.md) | Each element in the array is an object that provides information about a class break associated with the renderer.
| [defaultColor](color.md) | The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.
| defaultLabel | Default label for the default symbol used to draw unspecified values.
| field | The name of the field that is used for the renderer.
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| normalizationField | Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized.
| normalizationTotal | Used when normalizationType is percent-of-total, this number property contains the total of all data values.
| normalizationType | Determine how the data was normalized.<br>If property is present, must be one of the following values: <ul><li>`esriNormalizeByField`</li><li>`esriNormalizeByLog`</li><li>`esriNormalizeByPercentOfTotal`</li></ul>
| type | Specifies the type of renderer used.<br>Value of this property must be `rasterClassBreaksRenderer`


### Example

```json
{
  "renderer": {
    "type": "rasterClassBreaksRenderer",
    "field": "Value",
    "colorClassBreakInfos": [
      {
        "classMinValue": 11,
        "classMaxValue": 27.8,
        "label": "11 - 27.8",
        "color": [
          245,
          245,
          19,
          255
        ]
      },
      {
        "classMinValue": 27.8,
        "classMaxValue": 44.6,
        "label": "27.6 - 44.6",
        "color": [
          250,
          201,
          18,
          255
        ]
      }
    ]
  }
}
```

