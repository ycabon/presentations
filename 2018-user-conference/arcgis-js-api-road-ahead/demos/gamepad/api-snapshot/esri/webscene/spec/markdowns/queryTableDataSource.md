# Query Table DataSource

Query table data source is a layer/table that is defined by a SQL query.

### Properties

| Property | Details
| --- | ---
| geometryType | The geometry type. When querying a table that does not have a geometry column, do not include geometryType.<br>Must be one of the following values:<ul><li>`esriGeometryPoint`</li><li>`esriGeometryMultipoint`</li><li>`esriGeometryPolyline`</li><li>`esriGeometryPolygon`</li></ul>
| oidFields | Comma separated list of identifier fields. There are only certain field types that can be used as a unique identifier. These field types include integer, string, GUID, and date. If a single integer field is specified, map server uses the values in that field directly to uniquely identify all features and rows returned from a queryTable. However, if a single string field or a group of fields is used as the unique identifier, map server maps those unique values to an integer.
| query | The SQL query.
| [spatialReference](spatialReference.md) | The spatial reference of the geometry column. When querying a table that does not have a geometry column, do not include spatialReference.
| type | String value indicating the type for the dataSource.<br>Value of this property must be `queryTable`
| workspaceId | The unique string value used to identify the datasource's workspace.


### Example

```json
{
  "dataSource": {
    "type": "queryTable",
    "workspaceId": "SqlMAP",
    "oidFields": "taxlotid",
    "query": "SELECT * FROM TaxLots",
    "geometryType": "esriGeometryPolygon",
    "spatialReference": {
      "wkid": 4326
    }
  }
}
```

