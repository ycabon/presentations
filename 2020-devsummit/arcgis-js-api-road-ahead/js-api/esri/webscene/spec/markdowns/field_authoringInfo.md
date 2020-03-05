# AuthoringInfo Field

Contains information about an attribute field relating to Relationship renderers.

**Referenced by:** [authoringInfo](authoringInfo.md), [authoringInfo](authoringInfo.md)

### Properties

| Property | Details
| --- | ---
| [classBreakInfos](classBreakInfo_authoringInfo.md) | Type:`Array`
| field | Attribute field used for renderer.
| normalizationField | Attribute field used to normalize the data.


### Example

```json
{
  "field1": {
    "field": "VOTE_TURNOUT",
    "classBreakInfos": [
      {
        "minValue": 1.0844,
        "maxValue": 54.0946
      },
      {
        "minValue": 54.0946,
        "maxValue": 4083.8235
      }
    ]
  }
}
```

