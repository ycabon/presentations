# Feature Reduction: Selection

Feature reduction of type 'selection' declutters the screen by hiding features that would otherwise intersect with other features on screen. The default behavior of this feature reduction type is to select features by depth order, i.e. hide all features that would otherwise be overlapped by at least one other feature which is closer to the viewer.

### Properties

| Property | Details
| --- | ---
| type | A string value indicating the feature reduction type.<br>Value of this property must be `selection`


### Additional information

This feature reduction type is only supported for point symbols with non-draped icon symbol layers at the moment.

### Example

```json
{
  "featureReduction": {
    "type": "selection"
  }
}
```

