# verticalOffset

Shifts the symbol along the vertical world axis by a given length. The length is set in screen space units.

**Referenced by:** [LabelSymbol3D](labelSymbol3D.md), [PointSymbol3D](pointSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| maxWorldLength | The maximum vertical symbol lift in world units. It acts as an upper bound to avoid lift becoming too big.
| minWorldLength | The minimum vertical symbol lift in world units. It acts as a lower bound to avoid lift becoming too small.
| screenLength | Maximal screen length of lift in points.


### Example

```json
{
  "verticalOffset": {
    "screenLength": 100,
    "maxWorldLength": 600,
    "minWorldLength": 10
  }
}
```

