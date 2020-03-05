# classBreakInfo

The classBreaksInfo object provides information about the class breaks associated with the renderer.

**Referenced by:** [ClassBreaks Renderer](classBreaksRenderer.md)

### Properties

| Property | Details
| --- | ---
| classMaxValue | A numeric value used to specify the maximum value for a break.
| classMinValue | A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value.
| description | String value used to describe the drawn symbol.
| label | String value used to label the drawn symbol.
| [symbol](symbol3D.md) | An object used to display the value.


### Example

```json
{
  "classBreakInfo": {
    "classMaxValue": 1000,
    "label": "10.0 - 1000.000000",
    "description": "10 to 1000",
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

