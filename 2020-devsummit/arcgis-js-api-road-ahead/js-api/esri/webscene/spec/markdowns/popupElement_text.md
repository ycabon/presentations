# popupElement text

Configures text in popup elements.

**Referenced by:** [popupElement](popupElement.md)

### Properties

| Property | Details
| --- | ---
| text | This property applies to elements of type `text`. This is string value indicating the text to be displayed within the popupElement. If no `text` property is provided, the popupElement will display whatever is specified in the [popupInfo.description](popupInfo.md) property.
| type | Type:`String`<br>Value of this property must be `text`


### Example

```json
{
  "popupElements": [
    {
      "type": "text",
      "text": "Some descriptive text describing the popup."
    }
  ]
}
```

