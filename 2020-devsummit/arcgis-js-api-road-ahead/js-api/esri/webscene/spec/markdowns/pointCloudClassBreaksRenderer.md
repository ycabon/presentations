# PointCloud ClassBreaks Renderer

PointCloudClassBreaksRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. Colors are assigned based on classes or ranges of data. Each point is assigned a symbol based on the class break in which the value of the attribute falls.

**Referenced by:** [PointCloud Renderers](pointCloudRenderers.md)

### Properties

| Property | Details
| --- | ---
| [colorClassBreakInfos](colorClassBreakInfo.md) | Each element in the array is an object that provides information about a class break associated with the renderer.
| [colorModulation](colorModulationInfo.md) | Indicates whether modulation should be used to render the point.
| field |   The name of the field that is used for the renderer.
| fieldTransformType | A transform that is applied to the field value before evaluating the renderer.<br>If property is present, must be one of the following values: <ul><li>`absoluteValue`</li><li>`highFourBit`</li><li>`lowFourBit`</li><li>`moduloTen`</li><li>`none`</li></ul>
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| [pointSizeAlgorithm](pointSizeAlgorithm.md) | Size algorithms for point cloud performance.
| pointsPerInch | Number of point to draw per display inch.
| type | Specifies the type of renderer used.<br>Value of this property must be `pointCloudClassBreaksRenderer`


### pointSizeAlgorithm Example

```json
{
  "renderer": {
    "type": "pointCloudClassBreaksRenderer",
    "pointSizeAlgorithm": {
      "type": "pointCloudSplatAlgorithm",
      "scaleFactor": 1
    },
    "pointsPerInch": 10,
    "field": "ELEVATION",
    "colorClassBreakInfos": [
      {
        "classMinValue": 0,
        "classMaxValue": 422.87,
        "label": "406.59 - 422.87",
        "description": "",
        "color": [
          87,
          0,
          252
        ]
      },
      {
        "classMinValue": 422.87,
        "classMaxValue": 438.81,
        "label": "422.87 - 438.81",
        "description": "",
        "color": [
          89,
          168,
          253
        ]
      },
      {
        "classMinValue": 438.81,
        "classMaxValue": 466.8,
        "label": "438.81 - 466.8",
        "description": "",
        "color": [
          109,
          253,
          219
        ]
      },
      {
        "classMinValue": 466.8,
        "classMaxValue": 507.05,
        "label": "466.8 - 507.05",
        "description": "",
        "color": [
          221,
          254,
          96
        ]
      },
      {
        "classMinValue": 507.05,
        "classMaxValue": 593.73,
        "label": "507.05 - 593.73",
        "description": "",
        "color": [
          254,
          185,
          5
        ]
      }
    ]
  }
}
```
###  Example

```json
{
  "renderer": {
    "type": "pointCloudClassBreaksRenderer",
    "pointsPerInch": 10.0,
    "field": "",
    "colorClassBreakInfos": [
      {
        "classMinValue": 0,
        "classMaxValue": 422.87,
        "label": "406.59 - 422.87",
        "description": "",
        "color": [
          87.0,
          0.0,
          252.0
        ]
      },
      {
        "classMinValue": 422.87,
        "classMaxValue": 438.81,
        "label": "422.87 - 438.81",
        "description": "",
        "color": [
          89.0,
          168.0,
          253.0
        ]
      },
      {
        "classMinValue": 438.81,
        "classMaxValue": 466.8,
        "label": "438.81 - 466.8",
        "description": "",
        "color": [
          109.0,
          253.0,
          219.0
        ]
      },
      {
        "classMinValue": 466.8,
        "classMaxValue": 507.05,
        "label": "466.8 - 507.05",
        "description": "",
        "color": [
          221.0,
          254.0,
          96.0
        ]
      },
      {
        "classMinValue": 507.05,
        "classMaxValue": 593.73,
        "label": "507.05 - 593.73",
        "description": "",
        "color": [
          254.0,
          185.0,
          5.0
        ]
      }
    ]
  }
}
```

