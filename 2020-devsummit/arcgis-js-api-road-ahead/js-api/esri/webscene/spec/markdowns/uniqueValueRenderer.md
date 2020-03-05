# UniqueValue Renderer

A unique value renderer symbolizes based on the value of an attribute.

**Referenced by:** [renderer](renderer.md)

### Properties

| Property | Details
| --- | ---
| [authoringInfo](authoringInfo.md) | An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.
| [backgroundFillSymbol](polygonSymbol3D.md) | Used for polygon features. It can only be used for bivariate types and size rendering.
| defaultLabel | Default label for the default symbol used to draw unspecified values.
| [defaultSymbol](symbol3D.md) | The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.
| field1 | Attribute field renderer uses to match values.
| field2 | If needed, specify an additional attribute field the renderer uses to match values.
| field3 | If needed, specify an additional attribute field the renderer uses to match values.
| fieldDelimiter | String inserted between the values if multiple attribute fields are specified.
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| type | Specifies the type of renderer used.<br>Value of this property must be `uniqueValue`
| [uniqueValueInfos](uniqueValueInfo.md) | An array of uniqueValueInfo objects.
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number.
| valueExpressionTitle | The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.
| [visualVariables](visualVariable.md) | An array of objects used to set rendering properties.


### Example

```json
{
  "renderer": {
    "type": "uniqueValue",
    "field1": "COUNTRY",
    "uniqueValueInfos": [
      {
        "value": "US",
        "label": "US",
        "symbol": {
          "type": "PointSymbol3D",
          "symbolLayers": [
            {
              "type": "Icon",
              "resource": {
                "primitive": "circle"
              },
              "material": {
                "color": [
                  253,
                  127,
                  111
                ]
              },
              "size": 12
            }
          ]
        }
      },
      {
        "value": "Canada",
        "label": "Canada",
        "symbol": {
          "type": "PointSymbol3D",
          "symbolLayers": [
            {
              "type": "Icon",
              "resource": {
                "primitive": "circle"
              },
              "material": {
                "color": [
                  126,
                  176,
                  213
                ]
              },
              "size": 12
            }
          ]
        }
      },
      {
        "value": "Brazil",
        "label": "Brazil",
        "symbol": {
          "type": "PointSymbol3D",
          "symbolLayers": [
            {
              "type": "Icon",
              "resource": {
                "primitive": "circle"
              },
              "material": {
                "color": [
                  178,
                  224,
                  97
                ]
              },
              "size": 12
            }
          ]
        }
      }
    ]
  }
}
```

