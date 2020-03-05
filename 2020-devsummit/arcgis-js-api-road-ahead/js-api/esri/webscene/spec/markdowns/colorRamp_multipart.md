# Color Ramp Multipart

A colorRamp object is used to specify a range of colors that are applied to a group of symbols.

**Referenced by:** [Color Ramp](colorRamp.md)

### Properties

| Property | Details
| --- | ---
| [colorRamps](colorRamp_algorithmic.md) | A multipart color ramp is defined by a list of constituent color ramps.
| type | Value indicating the type of colorRamp.<br>If property is present, value of this property must be `multipart`


### Example

```json
{
  "colorRamp": {
    "type": "multipart",
    "colorRamps": [
      {
        "type": "algorithmic",
        "fromColor": [
          255,
          0,
          0,
          255
        ],
        "toColor": [
          255,
          255,
          0,
          255
        ],
        "algorithm": "esriHSVAlgorithm"
      },
      {
        "type": "algorithmic",
        "fromColor": [
          0,
          255,
          255,
          255
        ],
        "toColor": [
          0,
          0,
          255,
          255
        ],
        "algorithm": "esriHSVAlgorithm"
      }
    ]
  }
}
```

