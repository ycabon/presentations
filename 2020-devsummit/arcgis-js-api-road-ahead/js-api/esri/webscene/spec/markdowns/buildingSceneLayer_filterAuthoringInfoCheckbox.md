# Metadata for checkbox based filter UI

Client UI with checkbox representation for each filter type and filter value.

**Referenced by:** [Building Scene Layer Filter](buildingSceneLayer_filter.md)

### Properties

| Property | Details
| --- | ---
| [filterBlocks](buildingSceneLayer_filterAuthoringInfo_filterBlock.md) | Array of filter block authoring infos.
| type | Type of filter authoring info.<br>Value of this property must be `checkbox`


### Example

```json
{
  "filterAuthoringInfo": {
    "type": "checkbox",
    "filterBlocks": [
      {
        "filterTypes": [
          {
            "filterType": "BldgLevel",
            "filterValues": [
              "3"
            ]
          },
          {
            "filterType": "CreatedPhase",
            "filterValues": [
              "1"
            ]
          }
        ]
      }
    ]
  }
}
```

