# Raster Stretch Renderer

Displays continuous raster cell values across a gradual ramp of colors. Use this renderer to draw a single band of continuous data. This renderer works well when you have a large range of values to display, such as with imagery or scientific data.

**Referenced by:** [Raster Renderers](rasterRenderers.md)

### Properties

| Property | Details
| --- | ---
| [colorRamp](colorRamp.md) | A colorRamp object is used to specify a range of colors that are applied to a group of symbols.
| computeGamma | Indicates if gamma values should be computed by default.
| dra | Indicates if Dynamic Range Adjustment should be applied.
| gamma | The list of Gamma value(s).
| max | The current maximum output value.
| maxPercent | The current maximum percent value.
| min | The current minimum output value.
| minPercent | The current minimum percent value.
| numberOfStandardDeviations | The number of standard deviations for standard deviation stretch.
| sigmoidStrengthLevel | Set this from (1 to 6) to adjust the curvature of Sigmoid curve used in color stretch.
| statistics | The custom raster stretch statistics.
| stretchType | The stretch types for stretch raster function.<br>If property is present, must be one of the following values: <ul><li>`histogramEqualization`</li><li>`minMax`</li><li>`none`</li><li>`percentClip`</li><li>`sigmoid`</li><li>`standardDeviation`</li></ul>
| type | Specifies the type of renderer used.<br>If property is present, value of this property must be `rasterStretch`
| useGamma | Indicates if the renderer applies Gamma stretch.


### Additional information

For each `stretchType` there are specific sets of requirements that are as follows: <br>`none`: does not require other parameters.<br>`standardDeviation`: requires numberOfStandardDeviations, statistics, or dra.<br>`histogramEqualization`: requires the source dataset to have histograms or additional dra.<br>`minMax`: requires statistics or dra.<br>`percentClip`: requires minPercent, maxPercent, and dra.<br>`sigmoid`: does not require other parameters. Optionally, set the sigmoidStrengthLevel (1 to 6) to adjust the curvature of Sigmoid curve used in color stretch.

### Example

```json
{
  "renderer": {
    "type": "rasterStretch",
    "stretchType": "minMax",
    "statistics": [
      [
        -6.621397972106934,
        337.17144775390625,
        10.955521397698623,
        20.044026002479463
      ]
    ],
    "dra": false,
    "useGamma": true,
    "gamma": [
      1
    ],
    "computeGamma": false
  }
}
```

