# PointCloud Bitfield Filter

Filters points based on the value of the specified bitfield attribute.

### Properties

| Property | Details
| --- | ---
| field | The name of the field that is used for the filter.
| requiredClearBits | List ALL bit numbers that must cleared (=0) for the point to be kept. bit 0 is LSB.
| requiredSetBits |  List ALL bit numbers that must set (=1) for the point to be kept. bit 0 is LSB.
| type | Type:`String`<br>Value of this property must be `pointCloudBitfieldFilter`


### Example

```json
{
  "filters": [
    {
      "type": "pointCloudBitfieldFilter",
      "field": "USAGE",
      "requiredClearBits": [
        0
      ],
      "requiredSetBits": [
        2,
        3
      ]
    }
  ]
}
```

