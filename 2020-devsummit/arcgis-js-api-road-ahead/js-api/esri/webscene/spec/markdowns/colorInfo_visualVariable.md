# ColorInfo Visual Variable

The colorInfo visual variable defines how a continuous color ramp is applied to features based on the values of a numeric field attribute.

**Referenced by:** [visualVariable](visualVariable.md)

### Properties

| Property | Details
| --- | ---
| field | Attribute field used for color rendering if no valueExpression is provided.
| legendOptions | Options available for the legend for visual variables.<br>See [legendOptions properties](#legendoptions-properties) table.
| normalizationField | Attribute field used to normalize the data.
| [stops](colorStop.md) | An array of stop objects.
| type | Specifies the type of visual variable.<br>Value of this property must be `colorInfo`
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) that computes a value in lieu of a value provided by an attribute `field`.
| valueExpressionTitle | The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.


### legendOptions properties

| Property | Details
| --- | ---
| showLegend | Indicates whether to show the color/size/opacity ramp in the legend.
| title | The title of the legend.


### colorInfo Example

Live sample web scene showing [use of the colorInfo visual variable](https://www.arcgis.com/home/webscene/viewer.html?webscene=ed2892fef34b43b8a5cc61c8ff890c6f).

```json
{
  "visualVariables": [
    {
      "type": "colorInfo",
      "field": "M086_07",
      "stops": [
        {
          "value": -99,
          "color": [
            255,
            252,
            212,
            255
          ],
          "label": "< -99"
        },
        {
          "value": 705950,
          "color": [
            177,
            205,
            194,
            255
          ]
        },
        {
          "value": 1411999,
          "color": [
            98,
            158,
            176,
            255
          ],
          "label": "1,411,999"
        },
        {
          "value": 2578189,
          "color": [
            56,
            98,
            122,
            255
          ]
        },
        {
          "value": 3744380,
          "color": [
            13,
            38,
            68,
            255
          ],
          "label": "> 3,744,380"
        }
      ]
    }
  ]
}
```
### constant colorInfo Example

visual Variable with constant color

```json
{
  "visualVariables": [
    {
      "type": "colorInfo",
      "legendOptions": {
        "title": "color"
      },
      "stops": [
        {
          "color": [
            255,
            0,
            0,
            255
          ]
        }
      ]
    }
  ]
}
```

