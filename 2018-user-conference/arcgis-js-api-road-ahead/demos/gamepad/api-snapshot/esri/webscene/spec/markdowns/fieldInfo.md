# fieldInfo

Defines how a field in the dataset participates (or does not participate) in a popup window.

### Properties

| Property | Details
| --- | ---
| fieldName | A string containing the field name as defined by the service. Anywhere that a fieldname is referenced as `{field-name} in popupInfo, an Arcade expression can also be referenced as `{expression/<expression-name>}`.
| [format](format.md) | A format object used with numerical or date fields to provide more detail about how the value should be displayed in a popup window.
| isEditable | A Boolean determining whether users can edit this field. Not applicable to Arcade expressions.
| label | A string containing the field alias. Not applicable to Arcade expressions as `title` is used instead.
| stringFieldOption | A string determining what type of input box editors see when editing the field. Applies only to string fields. Not applicable to Arcade expressions.<br>Must be one of the following values:<ul><li>`textbox`</li><li>`textarea`</li><li>`richtext`</li></ul>
| tooltip | A string providing an editing hint for editors of the field. Not applicable to Arcade expressions.
| visible | A Boolean determining whether the field is visible in the popup window.


### Example

```json
{
  "fieldInfo": {
    "fieldName": "relationships/2/Postcode",
    "label": "Postcode",
    "isEditable": false,
    "visible": false,
    "stringFieldOption": "textbox"
  }
}
```

