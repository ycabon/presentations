# elevationInfo

Elevation info defines how features are aligned to ground or other layers.

### Properties

| Property | Details
| --- | ---
| featureExpression | <em>Deprecated with 1.8, use `featureExpressionInfo` instead</em>. `{"value":0}` ignores geometry z-values.
| [featureExpressionInfo](featureExpressionInfo.md) | An object that defines an expression for per-feature elevation. If not set, geometry.z values are used for elevation. `unit` is applied to the resulting expression value.
| mode | Determines how the service elevation values are combined with the elevation of the scene.<br>Must be one of the following values:<ul><li>`relativeToGround`</li><li>`absoluteHeight`</li><li>`onTheGround`</li><li>`relativeToScene`</li></ul>
| offset | Offset is always added to the result of the above logic except for onTheGround where offset is ignored.
| unit | A string value indicating the unit for the values in elevationInfo. Applies to both `offset` and `featureExpressionInfo`. Defaults to `meter` if not set. <a href="#unit"><sup>1</sup></a>


### Additional information

[ElevationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#elevationInfo) in ArcGIS API for JavaScript.<br><a id="unit"><sup>1</sup></a>Supported units: `foot`, `kilometer`, `meter`, `mile`, `us-foot`, `yard`

### Example

```json
{
  "elevationInfo": {
    "mode": "relativeToGround",
    "offset": 200,
    "featureExpressionInfo": {
      "expression": "$feature.ELEVATION_FOOT"
    },
    "unit": "foot"
  }
}
```

