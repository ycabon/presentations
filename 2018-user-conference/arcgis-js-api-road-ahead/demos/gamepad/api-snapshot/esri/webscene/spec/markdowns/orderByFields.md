# orderByFields

Object indicating the field display order for the related records and whether they should be sorted in ascending or descending order.

### Properties

| Property | Details
| --- | ---
| field | The attribute value of the field selected that will drive the sorting of related records.
| order | Set the ascending or descending sort order of the returned related records.<br>Must be one of the following values:<ul><li>`asc`</li><li>`desc`</li></ul>


### Example

```json
{
  "orderByFields": [
    {
      "field": "relationships/0/FieldName",
      "order": "asc"
    }
  ]
}
```

