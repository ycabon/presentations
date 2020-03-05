# PointCloud UniqueValue Renderer

PointCloudUniqueValueRenderer allows you to colorize points in a PointCloudLayer based on an attribute. This is done by using unique colors to represent points with equal attribute values.

**Referenced by:** [PointCloud Renderers](pointCloudRenderers.md)

### Properties

| Property | Details
| --- | ---
| [colorModulation](colorModulationInfo.md) | 
| [colorUniqueValueInfos](colorUniqueValueInfo.md) | Unique value infos.
| field | The name of the field that is used for the renderer.
| fieldTransformType | A transform that is applied to the field value before evaluating the renderer.<br>If property is present, must be one of the following values: <ul><li>`absoluteValue`</li><li>`highFourBit`</li><li>`lowFourBit`</li><li>`moduloTen`</li><li>`none`</li></ul>
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| [pointSizeAlgorithm](pointSizeAlgorithm.md) | 
| pointsPerInch | Number of points to draw per display inch.
| type | Specifies the type of renderer used.<br>Value of this property must be `pointCloudUniqueValueRenderer`


### Example

```json
{
  "renderer": {
    "type": "pointCloudUniqueValueRenderer",
    "pointSizeAlgorithm": {
      "type": "pointCloudFixedSizeAlgorithm",
      "useRealWorldSymbolSizes": false,
      "size": 4
    },
    "pointsPerInch": 10.0,
    "field": "CLASS_CODE",
    "colorUniqueValueInfos": [
      {
        "values": [
          "1"
        ],
        "label": "1",
        "description": "Unassigned",
        "color": [
          79,
          112,
          181
        ]
      },
      {
        "values": [
          "2"
        ],
        "label": "2",
        "description": "Ground",
        "color": [
          170,
          183,
          189
        ]
      },
      {
        "values": [
          "3"
        ],
        "label": "3",
        "description": "Low vegetation",
        "color": [
          247,
          255,
          188
        ]
      },
      {
        "values": [
          "4"
        ],
        "label": "4",
        "description": "Medium vegetation",
        "color": [
          241,
          159,
          106
        ]
      },
      {
        "values": [
          "5"
        ],
        "label": "5",
        "description": "High vegetation",
        "color": [
          211,
          26,
          18
        ]
      }
    ]
  }
}
```

