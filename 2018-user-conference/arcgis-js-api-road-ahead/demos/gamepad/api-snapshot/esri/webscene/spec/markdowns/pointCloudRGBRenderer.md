# PointCloud RGB Renderer

PointCloudRGBRenderer defines the color of each point in a PointCloudLayer based on the value of a color attribute.

### Properties

| Property | Details
| --- | ---
| [colorModulation](colorModulationInfo.md) | 
| field | The name of the field that is used for the renderer.
| fieldTransformType | A transform that is applied to the field value before evaluating the renderer.<br>Must be one of the following values:<ul><li>`none`</li><li>`lowFourBit`</li><li>`highFourBit`</li><li>`absoluteValue`</li><li>`moduloTen`</li></ul>
| [pointSizeAlgorithm](pointSizeAlgorithm.md) | 
| pointsPerInch | Number of point to draw per display inch.
| type | Specifies the type of renderer used.<br>Value of this property must be `pointCloudRGBRenderer`


### Example

```json
{
  "renderer": {
    "type": "pointCloudRGBRenderer",
    "field": "RGB",
    "pointsPerInch": 10
  }
}
```

