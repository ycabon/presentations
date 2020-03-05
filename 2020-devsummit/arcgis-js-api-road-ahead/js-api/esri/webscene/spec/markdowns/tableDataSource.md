# Table DataSource

Table data source is a table, feature class, or raster that resides in a registered workspace (either a folder or geodatabase). In the case of a geodatabase, if versioned, use version to switch to an alternate geodatabase version. If version is empty or missing, the registered geodatabase version will be used.

**Referenced by:** [dataSource](dataSource.md)

### Properties

| Property | Details
| --- | ---
| dataSourceName | The fully-qualified string value used to specify where the dataSource is derived.
| gdbVersion | If applicable, the value indicating the version of the geodatabase.
| type | String value indicating the type for the dataSource. The value for a Table DataSource is `table`.<br>Value of this property must be `table`
| workspaceId | The unique string value used to identify the datasource's workspace.


### Example

```json
{
  "dataSource": {
    "type": "table",
    "workspaceId": "MyDatabaseWorkspaceIDSSR2",
    "dataSourceName": "ss6.gdb.Lakes"
  }
}
```

