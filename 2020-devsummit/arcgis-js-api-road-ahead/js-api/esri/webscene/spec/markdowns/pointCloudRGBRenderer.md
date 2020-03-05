# PointCloud RGB Renderer

PointCloudRGBRenderer defines the color of each point in a PointCloudLayer based on the value of a color attribute.

**Referenced by:** [PointCloud Renderers](pointCloudRenderers.md)

### Properties

| Property | Details
| --- | ---
| [colorModulation](colorModulationInfo.md) | 
| field | The name of the field that is used for the renderer.
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

