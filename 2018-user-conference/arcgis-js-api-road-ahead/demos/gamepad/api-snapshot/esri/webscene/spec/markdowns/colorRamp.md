# Color Ramp

A colorRamp object is used to specify a range of colors that are applied to a group of symbols.

### Properties

| Property | Details
| --- | ---
| algorithm | Algorithm used for calculating the ramp.<br>Must be one of the following values:<ul><li>`esriHSVAlgorithm`</li><li>`esriCIELabAlgorithm`</li><li>`esriLabLChAlgorithm`</li></ul>
| [colorRamps](colorRamp.md) | A multipart color ramp is defined by a list of constituent color ramps.
| [fromColor](color.md) | Array representing the initial color to start the ramp from.
| [toColor](color.md) | Array representing the final color to end the ramp with.
| type | Value indicating the type of colorRamp.<br>Must be one of the following values:<ul><li>`algorithmic`</li><li>`multipart`</li></ul>


### Algorithmic Example

```json
{
  "colorRamp": {
    "type": "algorithmic",
    "fromColor": [
      115,
      76,
      0,
      255
    ],
    "toColor": [
      255,
      25,
      86,
      255
    ],
    "algorithm": "esriHSVAlgorithm"
  }
}
```
### Multipart Example

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

