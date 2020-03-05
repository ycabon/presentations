# popupElement media

Configures media in popup elements.

**Referenced by:** [popupElement](popupElement.md)

### Properties

| Property | Details
| --- | ---
| [mediaInfos](mediaInfo.md) | An array of `mediaInfo` objects representing an image or chart for display. If no `mediaInfos` property is provided, the popupElement will display whatever is specified in the `popupInfo.mediaInfos` property.
| type | Type:`String`<br>Value of this property must be `media`


### Additional information

Each popupElement has a `type` property. This string value indicates the type of popupElement used.

### popupElement media imag Example

```json
{
  "popupElements": [
    {
      "mediaInfos": [
        {
          "type": "image",
          "title": "<div><p style='font-weight:bold;'><span>Image</span></p></div>",
          "caption": "<div><p><span>californiaa flag</span></p><p><span /></p></div>",
          "value": {
            "sourceURL": "http://www.50states.com/flag/image/nunst0006.gif"
          }
        }
      ],
      "type": "media"
    }
  ]
}
```
### popupElement media chart Example

```json
{
  "popupElements": [
    {
      "mediaInfos": [
        {
          "type": "columnchart",
          "title": "<div><p style='font-weight:bold;'><span>Chart</span></p></div>",
          "caption": "<div><p><span style=\"color:#DF73FF;\">This shows Rotation and size.</span></p></div>",
          "value": {
            "fields": [
              "rotation",
              "size"
            ]
          }
        }
      ],
      "type": "media"
    }
  ]
}
```

