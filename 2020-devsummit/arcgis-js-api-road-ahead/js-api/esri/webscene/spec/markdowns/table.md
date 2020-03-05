# table

Root element in the web scene specifying an array of table objects.

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| capabilities | A comma-separated string listing which editing operations are allowed on an editable feature service. Available operations include: `Create`, `Delete`, `Query`, `Update`, and `Editing`.
| [definitionEditor](definitionEditor.md) | Object indicating the definitionEditor used as a layer's interactive filter.
| id | Unique string identifier for the table.
| itemId | Unique string value indicating an item registered in ArcGIS Online or your organization's portal.
| [layerDefinition](layerDefinition.md) | A layerDefinition object defining a definition expression for the table.
| path | For offline data, a path to a geodatabase file. A URI format is used starting with `file:` followed by a file system path with a `.geodatabase` extension. A query parameter `itemId` must also be present specifying the ID of a table in the geodatabase's `GDB_ServiceItems` table. A relative path must be from the file which defines the table. For example `file:../p20/northamerica.geodatabase?itemId=5`.
| [popupInfo](popupInfo.md) | An object defining the content of popup windows when you query a record and the sort option for child related records.
| title | String value for the title of the table.
| url | String value indicating the URL reference of the hosted table.


### Example

```json
{
  "table": {
    "url": "http://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/FeatureServer/1",
    "id": "SF311_1421",
    "title": "SF311 - SF_Crime_Incidents",
    "itemId": "0217f8067457410a998fc9293563ba94",
    "layerDefinition": {},
    "definitionEditor": {},
    "popupInfo": {},
    "capabilities": "Query"
  }
}
```

