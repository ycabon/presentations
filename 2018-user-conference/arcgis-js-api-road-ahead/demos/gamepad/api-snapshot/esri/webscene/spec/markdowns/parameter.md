# parameter

Objects defined by a [definitionEditor](definitionEditor.md) input.

### Properties

| Property | Details
| --- | ---
| defaultValue | The default value that is automatically given if nothing is provided.<br>Must be one of the following values:<ul><li>`Number`<br>Value given automatically if none provided.</li><li>`String`</li></ul>
| fieldName | A string value representing the name of the field to query.
| parameterId | Number given to uniquely identify the specified parameter.
| type | The field type for the specified field parameter.<br>Must be one of the following values:<ul><li>`esriFieldTypeBlob`</li><li>`esriFieldTypeDate`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeGeometry`</li><li>`esriFieldTypeGlobalID`</li><li>`esriFieldTypeGUID`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeOID`</li><li>`esriFieldTypeRaster`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li><li>`esriFieldTypeXML`</li></ul>
| utcValue | An integer value representing exact UNIX time used when `defaultValue` is a date string.



