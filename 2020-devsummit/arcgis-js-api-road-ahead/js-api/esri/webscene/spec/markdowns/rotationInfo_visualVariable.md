# RotationInfo Visual Variable

The rotation visual variable defines how features rendered with marker symbols are rotated. The rotation value is determined by a value in a field or an Arcade expression calculating a value. Use either the `field` property or `valueExpression` when specifying rotation values.

**Referenced by:** [visualVariable](visualVariable.md)

### Properties

| Property | Details
| --- | ---
| axis | Defines the rotation axis the visual variable should be applied to when rendering features with an ObjectSymbol3DLayer. [Detailed description](static/objectSymbolLayerOrientation.md).<br>If property is present, must be one of the following values: <ul><li>`heading`</li><li>`roll`</li><li>`tilt`</li></ul>
| field | Attribute field used for setting the rotation of a symbol if no `valueExpression` is provided.
| legendOptions | Options available for the legend for visual variables.<br>See [legendOptions properties](#legendoptions-properties) table.
| rotationType | Defines the origin and direction of rotation depending on how the angle of rotation was measured. Possible values are `geographic` which rotates the symbol from the north in a clockwise direction and `arithmetic` which rotates the symbol from the east in a counter-clockwise direction.<br>If property is present, must be one of the following values: <ul><li>`arithmetic`</li><li>`geographic`</li></ul>
| type | A string value indicating the type of visual variable used for the renderer.<br>Value of this property must be `rotationInfo`
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.
| valueExpressionTitle | The title identifying and describing the associated [Arcade expression] (https://developers.arcgis.com/arcade/) as defined in the `valueExpression` property.


### legendOptions properties

| Property | Details
| --- | ---
| showLegend | Indicates whether to show the color/size/opacity ramp in the legend.
| title | The title of the legend.


### Example

Live sample web scene showing [use of the rotationInfo visual variable](https://www.arcgis.com/home/webscene/viewer.html?webscene=30973f38dc5f4e019bf7f4926abd1571).

```json
{
  "visualVariables": [
    {
      "type": "rotationInfo",
      "rotationType": "geographic",
      "field": "WIND_DIRECT"
    }
  ]
}
```

