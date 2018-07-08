# value

The value object contains information for popup windows about how images should be retrieved or charts constructed.

### Properties

| Property | Details
| --- | ---
| fields | Used with charts. An array of strings, with each string containing the name of a field to display in the chart.
| linkURL | Used with images. A string containing a URL to be launched in a browser when a user clicks the image.
| normalizeField | Used with charts. An optional string containing the name of a field. The values of all fields in the chart will be normalized (divided) by the value of this field.
| sourceURL | Used with images. A string containing the URL to the image.
| tooltipField | String value indicating the tooltip for a chart specified from another field. This field is needed when related records are not sued. It is used for showing tooltips from another field in the same layer or related layer/table.


### Example

```json
{
  "value": {
    "fields": [
      "relationships/0/Pledge"
    ],
    "tooltipField": "relationships/2/Official"
  }
}
```

