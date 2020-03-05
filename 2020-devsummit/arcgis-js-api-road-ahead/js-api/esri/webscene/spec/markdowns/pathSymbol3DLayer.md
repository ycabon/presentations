# PathSymbol3DLayer

PathSymbol3DLayer renders polyline geometries by extruding a 2D profile along the line, resulting in visualizations like tubes, walls, etc.

**Referenced by:** [LineSymbol3D](lineSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| anchor | The position of the extrusion profile with respect to the polyline geometry.<br>If property is present, must be one of the following values: <ul><li>`bottom`</li><li>`center`</li><li>`top`</li></ul>
| cap | Shape of the beginning and the end of each line geometry.<br>If property is present, must be one of the following values: <ul><li>`butt`</li><li>`none`</li><li>`round`</li><li>`square`</li></ul>
| castShadows | Boolean to control the shadow casting behaviour of the rendered geometries.
| enable | Type:`Boolean`
| height | Path height in meters. If unspecified, it is equal to `width`.
| join | Shape of the intersection of two line segments.<br>If property is present, must be one of the following values: <ul><li>`bevel`</li><li>`miter`</li><li>`round`</li></ul>
| [material](material.md) | The material used to shade the geometry.
| profile | The shape which is extruded along the line.<br>If property is present, must be one of the following values: <ul><li>`circle`</li><li>`quad`</li></ul>
| profileRotation | Specifies the axes about which the profile may be rotated at the joins. Constraining the rotation axes leads to a fixed orientation of the profile for the specified directions.<br>If property is present, must be one of the following values: <ul><li>`all`</li><li>`heading`</li></ul>
| size | Path size (diameter) in meters. Ignored if either `width` or `height` are present.
| type | Specifies the type of symbol used.<br>Value of this property must be `Path`
| width | Path width in meters. If unspecified, it is equal to `height`.


### Red tube Example

```json
{
  "symbolLayers": [
    {
      "type": "Path",
      "material": {
        "color": [
          255,
          0,
          0
        ]
      },
      "size": 12
    }
  ]
}
```
### Thin wall Example

```json
{
  "symbolLayers": [
    {
      "type": "Path",
      "profile": "quad",
      "width": 0,
      "height": 50,
      "anchor": "bottom",
      "profileRotation": "heading"
    }
  ]
}
```
### Strip Example

```json
{
  "symbolLayers": [
    {
      "type": "Path",
      "profile": "quad",
      "width": 10,
      "height": 1,
      "anchor": "center",
      "profileRotation": "heading"
    }
  ]
}
```

