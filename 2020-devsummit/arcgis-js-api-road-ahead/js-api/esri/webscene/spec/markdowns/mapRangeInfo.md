# Map Range Information

Map range information

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| activeRangeName | Active range ID that slider/picker acts upon.
| currentRangeExtent | Current range for the active range.
| fullRangeExtent | Full range extent for the active range to be presented in the UI.


### Example

```json
{
  "mapRangeInfo": {
    "activeRangeName": "floors",
    "currentRangeExtent": [
      -2,
      10
    ],
    "fullRangeExtent": [
      -2,
      100
    ]
  }
}
```

