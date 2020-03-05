# Building Scene Layer Filter

Filter allows client applications to reduce the drawn elements of a building to specific types and values. Filters on the webscene override the list of existing filters on the service.

**Referenced by:** [Building Scene Layer (BuildingSceneLayer)](buildingSceneLayer.md)

### Properties

| Property | Details
| --- | ---
| description | Description of the filter.
| [filterAuthoringInfo](buildingSceneLayer_filterAuthoringInfoCheckbox.md) | Metadata about the athoring process for this filter.
| [filterBlocks](buildingSceneLayer_filterBlock.md) | Array of filter blocks defining the filter. A filter contains at least one filter block.
| id | unique filter id (uuid). Either a new id to extend the list of filters, or an existing id to override properties of an existing filter.
| name | Name of the filter.


### Example

```json
{
  "filter": {
    "id": "5a7e75ce-ceb8-4922-aba7-0aadb16976e2",
    "name": "Test Filter",
    "description": "Example Filter for webscene spec",
    "filterBlocks": [
      {
        "title": "Solid",
        "filterExpression": "floorId = 5 AND deletedPhase IS NULL",
        "filterMode": {
          "type": "solid"
        }
      },
      {
        "title": "Wireframe",
        "filterExpression": "floorId < 5 AND deletedPhase IS NULL",
        "filterMode": {
          "type": "wireFrame",
          "edges": {
            "type": "solid",
            "color": [
              120,
              120,
              120
            ],
            "size": 0.75,
            "transparency": 50
          }
        }
      }
    ]
  }
}
```

