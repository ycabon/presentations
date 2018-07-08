# labelingInfo

The labelingInfo object specifies the label definition for a layer.

### Properties

| Property | Details
| --- | ---
| labelExpression | Defines the expression for text of labels. Deprecated on FeatureLayer, Use `labelExpressionInfo` instead.
| [labelExpressionInfo](labelExpressionInfo.md) | Type:`object`
| labelPlacement | This string property specifies the label placement with respect to that of its feature. A list of label placement values categorized by feature geometry types.<br>Must be one of the following values:<ul><li>`esriServerPointLabelPlacementAboveCenter`</li><li>`esriServerPointLabelPlacementBelowCenter`</li><li>`esriServerPointLabelPlacementCenterCenter`</li><li>`esriServerPointLabelPlacementAboveLeft`</li><li>`esriServerPointLabelPlacementBelowLeft`</li><li>`esriServerPointLabelPlacementCenterLeft`</li><li>`esriServerPointLabelPlacementAboveRight`</li><li>`esriServerPointLabelPlacementBelowRight`</li><li>`esriServerPointLabelPlacementCenterRight`</li><li>`esriServerLinePlacementAboveAfter`</li><li>`esriServerLinePlacementAboveStart`</li><li>`esriServerLinePlacementBelowAfter`</li><li>`esriServerLinePlacementBelowStart`</li><li>`esriServerLinePlacementCenterAfter`</li><li>`esriServerLinePlacementCenterStart`</li><li>`esriServerLinePlacementAboveAlong`</li><li>`esriServerLinePlacementAboveEnd`</li><li>`esriServerLinePlacementBelowAlong`</li><li>`esriServerLinePlacementBelowEnd`</li><li>`esriServerLinePlacementCenterAlong`</li><li>`esriServerLinePlacementCenterEnd`</li><li>`esriServerLinePlacementAboveBefore`</li><li>`esriServerLinePlacementBelowBefore`</li><li>`esriServerLinePlacementCenterBefore`</li><li>`esriServerPolygonPlacementAlwaysHorizontal`</li></ul>
| maxScale | Represents the maximum scale at which the layer definition will be applied.
| minScale | Represents the minimum scale at which the layer definition will be applied.
| name | The name of the label class.
| [symbol](labelSymbol3D.md) | The text symbol used to label.
| useCodedValues | Boolean value indicating whether to display the coded values for the specified field name(s).
| where | String template used to determine which features to label.


### Example

```json
{
  "labelingInfo": [
    {
      "labelExpressionInfo": {
        "expression": "return $feature[\"state_name\"];"
      },
      "useCodedValues": false,
      "maxScale": 0,
      "minScale": 0,
      "labelPlacement": "esriServerPointLabelPlacementAboveLeft",
      "symbol": {
        "type": "LabelSymbol3D",
        "symbolLayers": [
          {
            "size": 32,
            "type": "Text",
            "material": {
              "color": [
                255,
                255,
                0
              ]
            }
          }
        ]
      }
    }
  ]
}
```

