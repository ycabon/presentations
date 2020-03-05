# search layer field

Contains information about an attribute field in search layer configuration.

**Referenced by:** [search layer](search_layer.md)

### Properties

| Property | Details
| --- | ---
| exactMatch | A Boolean defining whether or not the field is an exact match.
| name | A string defining the field name.
| type | A string defining the field type.<br>If property is present, must be one of the following values: <ul><li>`esriFieldTypeBlob`</li><li>`esriFieldTypeDate`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeGUID`</li><li>`esriFieldTypeGeometry`</li><li>`esriFieldTypeGlobalID`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeLong`</li><li>`esriFieldTypeOID`</li><li>`esriFieldTypeRaster`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li><li>`esriFieldTypeXML`</li></ul>


### Example

```json
{
  "field": {
    "name": "relationships/2/Postcode",
    "type": "esriFieldTypeString",
    "exactMatch": true
  }
}
```

