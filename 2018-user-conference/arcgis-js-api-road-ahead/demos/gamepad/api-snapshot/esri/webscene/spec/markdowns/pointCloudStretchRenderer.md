# PointCloud Stretch Renderer

PointCloudStretchRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. They allow you to easily map continuous color ramps to minimum and maximum data values of one of the layer's numeric attribute fields.

### Properties

| Property | Details
| --- | ---
| [colorModulation](colorModulationInfo.md) | 
| field | The name of the field that is used for the renderer.
| fieldTransformType | A transform that is applied to the field value before evaluating the renderer.<br>Must be one of the following values:<ul><li>`none`</li><li>`lowFourBit`</li><li>`highFourBit`</li><li>`absoluteValue`</li><li>`moduloTen`</li></ul>
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| [pointSizeAlgorithm](pointSizeAlgorithm.md) | 
| pointsPerInch | Number of points to draw per display inch.
| [stops](colorStop.md) | An array of color value pairs.
| type | Specifies the type of renderer used.<br>Value of this property must be `pointCloudStretchRenderer`


### Example

```json
{
  "renderer": {
    "type": "pointCloudStretchRenderer",
    "pointSizeAlgorithm": {
      "type": "pointCloudSplatAlgorithm",
      "scaleFactor": 1,
      "minSize": 4
    },
    "pointsPerInch": 10,
    "field": "Elevation",
    "stops": [
      {
        "value": 406.59,
        "color": [
          87,
          0,
          252,
          255
        ]
      },
      {
        "value": 468.96999999999997,
        "color": [
          13,
          253,
          255,
          255
        ]
      },
      {
        "value": 531.35,
        "color": [
          242,
          254,
          23,
          255
        ]
      },
      {
        "value": 593.73,
        "color": [
          254,
          21,
          0,
          255
        ]
      }
    ]
  }
}
```

