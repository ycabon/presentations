# PointCloud Return Filter

Filters points based on the value of the return number/return count.

### Properties

| Property | Details
| --- | ---
| field | The name of the field that is used for the filter.
| includedReturns | All points with at least one specified return status will be kept. Status values: `last`, `firstOfMany`, `lastOfMany`, `single`
| type | Type:`String`<br>Value of this property must be `pointCloudReturnFilter`


### Example

```json
{
  "filters": [
    {
      "type": "pointCloudReturnFilter",
      "field": "USAGE",
      "includedReturns": [
        "firstOfMany",
        "single"
      ]
    }
  ]
}
```

