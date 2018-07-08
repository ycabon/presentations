# Join Table DataSource

Join Table data source is the result of a join operation. Nested joins are supported. To use nested joins, set either leftTableSource or rightTableSource to be a joinTable.

### Properties

| Property | Details
| --- | ---
| joinType | The type of join (left outer or left inner).<br>Must be one of the following values:<ul><li>`esriLeftOuterJoin`</li><li>`esriLeftInnerJoin`</li></ul>
| leftTableKey | Field name from the left table.
| [leftTableSource](source.md) | The left source. If the leftTableSource is a table, the resulting joinTable is a table. If the leftTableSource is a layer, the resulting joinTable is a layer.
| rightTableKey | Field name from the right table.
| [rightTableSource](source.md) | The right table source.
| type | String value indicating the type for the dataSource.<br>Value of this property must be `joinTable`


### Example

```json
{
  "dataSource": {
    "type": "joinTable",
    "leftTableSource": {
      "type": "mapLayer",
      "mapLayerId": 0
    },
    "rightTableSource": {
      "type": "dataLayer",
      "dataSource": {
        "type": "table",
        "workspaceId": "MAP",
        "dataSourceName": "MAP.user1.TaxLots",
        "gdbVersion": "MAP.Version1"
      }
    },
    "leftTableKey": "STATE_FIPS",
    "rightTableKey": "FIPS",
    "joinType": "esriLeftOuterJoin"
  }
}
```

