# relatedRecordsInfo

The sort in the popupInfo for the parent feature. This impacts the sorting order for the returned child records.

### Properties

| Property | Details
| --- | ---
| [orderByFields](orderByFields.md) | Array of orderByFields objects indicating the field display order for the related records and whether they should be sorted in ascending <code>'asc'</code> or descending <code>'desc'</code> order.
| showRelatedRecords | Required boolean value indicating whether to display related records. If <code>true</code>, client should let the user navigate to the related records. Defaults to <code>true</code> if the layer participates in a relationship AND the related layer/table has already been added to the scene (either as an operationalLayer or as a table).


### Example

```json
{
  "relatedRecordsInfo": {
    "showRelatedRecords": true,
    "orderByFields": [
      {
        "field": "relationships/0/FieldName",
        "order": "asc"
      }
    ]
  }
}
```

