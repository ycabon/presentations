# Raster DataSource

Raster data source is a file-based raster that resides in a registered raster workspace.

**Referenced by:** [dataSource](dataSource.md)

### Properties

| Property | Details
| --- | ---
| dataSourceName | The raster datasource's name.
| type | String value indicating the type for the dataSource.<br>Value of this property must be `raster`
| workspaceId | The unique string value used to identify the datasource's workspace.


### Example

```json
{
  "dataSource": {
    "type": "raster",
    "workspaceId": "rasterWS",
    "dataSourceName": "NewOrleans.tif"
  }
}
```

