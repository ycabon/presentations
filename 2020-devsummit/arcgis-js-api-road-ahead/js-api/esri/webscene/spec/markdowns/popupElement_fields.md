# popupElement fields

Configures fields in popup elements.

**Referenced by:** [popupElement](popupElement.md)

### Properties

| Property | Details
| --- | ---
| [fieldInfos](fieldInfo.md) | It is an array of `fieldInfo` objects representing a field/value pair displayed as a table within the popupElement. If the `fieldInfos` property is not provided, the popupElement will display whatever is specified directly in the `popupInfo.fieldInfos` property.
| type | Type:`String`<br>Value of this property must be `fields`


### Example

```json
{
  "popupElements": [
    {
      "fieldInfos": [
        {
          "fieldName": "rotation",
          "visible": true,
          "isEditable": true,
          "label": "rotation"
        }
      ],
      "type": "fields"
    }
  ]
}
```

