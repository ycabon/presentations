# mediaInfo image

Defines an image to be displayed in a popup window.

**Referenced by:** [mediaInfo](mediaInfo.md)

### Properties

| Property | Details
| --- | ---
| caption | A string caption describing the media.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled. If the property does not exist, it's equivalent to having a value of 0.
| title | A string title for the media.
| type | A string defining the type of media.<br>Value of this property must be `image`
| [value](mediaInfo_image_value.md) | The value object contains information for popup windows about how images should be retrieved.


### Example

```json
{
  "mediaInfo": {
    "type": "image",
    "title": "<div><p style='font-weight:bold;'><span>Image</span></p></div>",
    "caption": "<div><p><span>californiaa flag</span></p><p><span /></p></div>",
    "value": {
      "sourceURL": "http://www.50states.com/flag/image/nunst0006.gif"
    }
  }
}
```

