# field

Contains information about an attribute field.

### Properties

| Property | Details
| --- | ---
| alias | A string defining the field alias.
| [domain](domain.md) | The domain objects if applicable.
| editable | A Boolean defining whether this field is editable.
| exactMatch | A Boolean defining whether or not the field is an exact match.
| length | A number defining how many characters are allowed in a string field.
| name | A string defining the field name.
| nullable | A Boolean defining whether this field can have a null value.
| type | A string defining the field type.<br>Must be one of the following values:<ul><li>`esriFieldTypeBlob`</li><li>`esriFieldTypeDate`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeGeometry`</li><li>`esriFieldTypeGlobalID`</li><li>`esriFieldTypeGUID`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeOID`</li><li>`esriFieldTypeRaster`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li><li>`esriFieldTypeXML`</li></ul>


### Example

```json
{
  "field": {
    "alias": "Postcode",
    "name": "relationships/2/Postcode",
    "editable": false,
    "type": "esriFieldTypeString"
  }
}
```

