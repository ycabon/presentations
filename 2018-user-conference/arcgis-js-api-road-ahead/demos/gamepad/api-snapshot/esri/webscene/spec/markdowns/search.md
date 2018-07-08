# search

An object specifying the search parameters set within the web scene.

### Properties

| Property | Details
| --- | ---
| enabled | A boolean value indicating whether search functionality is enabled in the web scene.
| hintText | A string value used to indicate the hint provided with the search dialog.
| [layers](search_layer.md) | An array of layers to be included in search.


### Example

```json
{
  "search": {
    "enabled": true,
    "hintText": "Search by Address or State name",
    "layers": [
      {
        "id": "Census_9227",
        "field": {
          "name": "STATE_NAME",
          "exactMatch": false,
          "type": "esriFieldTypeString"
        }
      }
    ]
  }
}
```

