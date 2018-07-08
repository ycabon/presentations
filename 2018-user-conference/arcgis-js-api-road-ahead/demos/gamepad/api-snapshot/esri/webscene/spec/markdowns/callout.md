# Callout

Callout configuration for a symbol.

### Properties

| Property | Details
| --- | ---
| [border](border.md) | Optional border on the line that is used to improve the contrast of the line color against various background colors.
| [color](color.md) | The color of the line.
| size | The width of the line in points.
| transparency | A value between `100` (full transparency) and `0` (full opacity).
| type | The type of the callout. A callout of type `line` connects an offset symbol or label with its location.<br>Value of this property must be `line`


### Additional information

[Callout3D](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-callouts-Callout3D.html) in ArcGIS API for JavaScript.

### Example

```json
{
  "callout": {
    "type": "line",
    "size": 0.75,
    "color": [
      255,
      255,
      255
    ],
    "transparency": 20,
    "border": {
      "color": [
        50,
        50,
        50
      ],
      "transparency": 50
    }
  }
}
```

