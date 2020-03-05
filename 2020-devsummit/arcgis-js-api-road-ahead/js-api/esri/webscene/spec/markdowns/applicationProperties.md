# applicationProperties

Configuration of application and UI elements.

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| [viewing](viewing.md) | View-specific properties of application and UI elements.


### Example

```json
{
  "applicationProperties": {
    "viewing": {
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
            },
            "subLayer": 3
          }
        ]
      }
    }
  }
}
```

