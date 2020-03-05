# WaterSymbol3DLayer

Symbol Layer that describes a water appearance on surfaces in a SceneView.

**Referenced by:** [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| [color](color.md) | The dominant water color.
| enable | Type:`Boolean`
| type | Specifies the type of symbol used.<br>Value of this property must be `Water`
| waterbodySize | Size of the waterbody the symbol layer represents. Applications will display waves that are appropriate for the chosen body of water, for example ocean versus marina versus swimming pool.<br>If property is present, must be one of the following values: <ul><li>`large`</li><li>`medium`</li><li>`small`</li></ul>
| waveDirection | Azimuthal bearing for direction of the waves. If ommitted, waves appear directionless. The value is interpreted as 'geographic' rotation, i.e. clockwise starting from north.
| waveStrength | The magnitude of the waves displayed on the waterbody. Strings roughly follow the [Douglas sea scale](https://en.wikipedia.org/wiki/Douglas_sea_scale), currently limited to lower degrees.<br>If property is present, must be one of the following values: <ul><li>`calm`</li><li>`moderate`</li><li>`rippled`</li><li>`slight`</li></ul>


### Water SymbolLayer defaults Example

```json
{
  "symbolLayers": [
    {
      "type": "Water"
    }
  ]
}
```
### Water SymbolLayer Example

```json
{
  "symbolLayers": [
    {
      "type": "Water",
      "color": [
        98,
        182,
        210
      ],
      "waterbodySize": "large",
      "waveStrength": "rippled",
      "waveDirection": 60
    }
  ]
}
```

