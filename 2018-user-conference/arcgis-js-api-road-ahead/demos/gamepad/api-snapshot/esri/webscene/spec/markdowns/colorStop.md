# colorStop

A colorStop object describes the renderer's color ramp with more specificity than just colors.

### Properties

| Property | Details
| --- | ---
| [color](color.md) | A CSS color string or an array of rbga values. The color to place at the stop indicated by either a ratio or value.
| label | Value if a label is needed on the legend for a stop.
| value | The pixel intensity value. Describes the pixel intensity value that the color should be associated with. Just like in colorInfo, using value will ignore `maxPixelIntensity` and `minPixelIntensity` properties. It will actually set those properties to maximum and minimum values you set in the colorStops array. The hard values are converted to ratios to create the color gradient that is used in the heatmap calculations. Setting `minPixelIntensity` or `maxPixelIntensity`, after setting colorStops with values, removes the hard link between the color ramp and the pixel intensity values that were used to create it.


### Example

```json
{
  "stop": {
    "value": 8035,
    "color": [
      255,
      252,
      212,
      255
    ],
    "label": "< 8,035"
  }
}
```

