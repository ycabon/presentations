# Solid Edges

The solid edge rendering configuration of a symbol layer. Edges of type `solid` are rendered in a single color, unaffected by scene lighting.

**Referenced by:** [Edges](edges.md)

### Properties

| Property | Details
| --- | ---
| [color](color.md) | Color is represented as a three or four-element array.
| extensionLength | A size in points by which to extend edges beyond their original end points.
| size | Edge size in points, positive only
| transparency | The value has to lie between `100` (full transparency) and `0` (full opacity).
| type | The type of edge visualization.<br>Value of this property must be `solid`


### Example

```json
{
  "edges": {
    "type": "solid",
    "color": [
      255,
      0,
      0
    ],
    "size": 0.75,
    "transparency": 10,
    "extensionLength": 5
  }
}
```

