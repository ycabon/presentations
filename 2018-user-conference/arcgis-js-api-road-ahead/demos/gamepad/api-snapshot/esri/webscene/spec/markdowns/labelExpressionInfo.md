# labelExpressionInfo

An object that defines an expression for text of labels

### Properties

| Property | Details
| --- | ---
| expression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number.


### Example

```json
{
  "labelExpressionInfo": {
    "expression": "return $feature[\"state_name\"] + \" (arcade)\";"
  }
}
```

