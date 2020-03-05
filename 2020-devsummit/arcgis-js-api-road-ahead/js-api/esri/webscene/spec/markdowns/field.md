# field

Contains information about an attribute field.

**Referenced by:** [Dynamic data layer](dynamicDataLayer_source.md), [layerDefinition](layerDefinition.md)

### Properties

| Property | Details
| --- | ---
| alias | A string defining the field alias.
| defaultValue | The default value set for the field.
| [domain](domain.md) | The domain objects if applicable.
| editable | A Boolean defining whether this field is editable.
| length | A number defining how many characters are allowed in a string field.
| name | A string defining the field name.
| nullable | A Boolean defining whether this field can have a null value.
| type | A string defining the field type.<br>If property is present, must be one of the following values: <ul><li>`esriFieldTypeBlob`</li><li>`esriFieldTypeDate`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeGUID`</li><li>`esriFieldTypeGeometry`</li><li>`esriFieldTypeGlobalID`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeLong`</li><li>`esriFieldTypeOID`</li><li>`esriFieldTypeRaster`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li><li>`esriFieldTypeXML`</li></ul>


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

