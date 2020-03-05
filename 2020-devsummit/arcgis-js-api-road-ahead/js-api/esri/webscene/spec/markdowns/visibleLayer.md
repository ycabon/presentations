# visibleLayer

Object with layer id, used to indicate layer visibility in a slide.

**Referenced by:** [slide](slide.md)

### Properties

| Property | Details
| --- | ---
| id | The id of the layer as listed on the operational layer.
| subLayerIds | List of visible sublayer ids, as listed on the service of the layer.


### visibleLayer Example

```json
{
  "visibleLayers": [
    {
      "id": "73128eb3-05ee-46a7-8c22-0c385a0b1827"
    }
  ]
}
```
### visibleLayer Example

```json
{
  "visibleLayers": [
    {
      "id": "73128eb3-05ee-46a7-8c22-0c385a0b1827",
      "subLayerIds": [
        0,
        3,
        5
      ]
    }
  ]
}
```

