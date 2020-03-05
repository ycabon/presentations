# labelExpressionInfo

The labelExpressionInfo allows label text to be read similar to that of Popups's description property.

**Referenced by:** [labelingInfo](labelingInfo.md)

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

