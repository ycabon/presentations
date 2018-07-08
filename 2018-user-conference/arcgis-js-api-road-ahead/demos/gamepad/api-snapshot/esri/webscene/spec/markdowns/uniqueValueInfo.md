# uniqueValueInfo

Info item for the Unique Value Renderer. Its symbol gets selected if the feature's field matches its value.

### Properties

| Property | Details
| --- | ---
| description | String value used to describe the drawn symbol.
| label | String value used to label the drawn symbol.
| [symbol](symbol3D.md) | An object used to display the value.
| value | String value indicating the unique value.


### Example

```json
{
  "uniqueValueInfo": {
    "value": "Pacific",
    "label": "Pacific region",
    "description": "The Pacific region description",
    "symbol": {
      "type": "PointSymbol3D",
      "symbolLayers": [
        {
          "type": "Icon",
          "resource": {
            "primitive": "circle"
          },
          "material": {
            "color": [
              255,
              255,
              255
            ]
          },
          "size": 12
        }
      ]
    }
  }
}
```

