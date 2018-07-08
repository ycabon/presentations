# featureExpressionInfo

An object that defines an expression for per-feature elevation.

### Properties

| Property | Details
| --- | ---
| expression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.
| title | Title of the expression.


### Zero expression Example

Do not use geometry.z values

```json
{
  "featureExpressionInfo": {
    "expression": "0"
  }
}
```
### Expression with field name Example

Elevation from field value without geometry.z

```json
{
  "featureExpressionInfo": {
    "expression": "$feature.ELEVATION_FOOT"
  }
}
```

