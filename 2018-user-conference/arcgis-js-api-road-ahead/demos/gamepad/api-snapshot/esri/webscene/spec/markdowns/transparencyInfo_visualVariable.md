# TransparencyInfo Visual Variable

The transparencyInfo visual variable defines the transparency, or opacity, of each feature's symbol based on a numeric attribute field value.

### Properties

| Property | Details
| --- | ---
| field | Attribute field used for setting the transparency of a feature if no `valueExpression` is provided.
| [legendOptions](visualVariableLegendOptions.md) | Options available for the legend for visual variables.
| normalizationField | Attribute field used to normalize the data.
| [stops](transparencyStop.md) | An array of transparencyStop objects.
| type | Specifies the type of visual variable.<br>Value of this property must be `transparencyInfo`
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.
| valueExpressionTitle | The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.


### Example

Live sample web scene showing [use of the transparencyInfo visual variable](https://www.arcgis.com/home/webscene/viewer.html?webscene=593dc1e98a1d447fb09b09d486355ef0).

```json
{
  "visualVariables": [
    {
      "type": "transparencyInfo",
      "field": "strength",
      "stops": [
        {
          "value": 21,
          "transparency": 60
        },
        {
          "value": 39,
          "transparency": 10
        }
      ]
    }
  ]
}
```

