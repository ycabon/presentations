# Range Information

Range Information.

**Referenced by:** [layerDefinition](layerDefinition.md)

### Properties

| Property | Details
| --- | ---
| currentRangeExtent | Contains the min and max values within which the features are visible.
| field | Field name to used for the range.
| fullRangeExtent | Contains the min and max values of all the features for this rangeInfo.
| name | A unique name that can be referenced by webMap.activeRanges.
| type | Type of range object.<br>Value of this property must be `rangeInfo`


### Example

```json
{
  "layerDefinition": {
    "rangeInfos": [
      {
        "type": "rangeInfo",
        "name": "floors",
        "field": "floor",
        "currentRangeExtent": [
          -2,
          10
        ],
        "fullRangeExtent": [
          -2,
          100
        ]
      }
    ]
  }
}
```

