# mediaInfo

Defines an image or a chart to be displayed in a popup window.

### Properties

| Property | Details
| --- | ---
| caption | A string caption describing the media.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled. If the property does not exist, it's equivalent to having a value of 0. Only applicable when `type` is set to `image`.
| title | A string title for the media.<br>Must be one of the following values:<ul><li>`String`</li><li>`Null`</li></ul>
| type | A string defining the type of media.<br>Must be one of the following values:<ul><li>`image`</li><li>`barchart`</li><li>`columnchart`</li><li>`linechart`</li><li>`piechart`</li></ul>
| value | A value object containing information about how the image should be retrieved or how the chart should be constructed.<br>Must be one of the following values:<ul><li>[value](value.md)<br>The value object contains information for popup windows about how images should be retrieved or charts constructed.</li><li>`Null`</li></ul>


### Example

```json
{
  "mediaInfo": {
    "title": "Chart stats",
    "type": "barchart",
    "caption": "For a better idea...",
    "value": {
      "fields": [
        "relationships/0/Pledge"
      ],
      "tooltipField": "relationships/2/Official"
    }
  }
}
```

