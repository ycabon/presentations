# PointCloud Value Filter

Filters points based on the value of an specified attribute.

### Properties

| Property | Details
| --- | ---
| field | The name of the field that is used for the filter.
| mode | Defines if values should be included or excluded.<br>Must be one of the following values:<ul><li>`exclude`</li><li>`include`</li></ul>
| type | Filters points based on the value of an specified attribute.<br>Value of this property must be `pointCloudValueFilter`
| values | list of values


### Example

```json
{
  "filters": [
    {
      "type": "pointCloudValueFilter",
      "field": "USAGE",
      "values": [
        1,
        3,
        7
      ],
      "mode": "include"
    }
  ]
}
```

