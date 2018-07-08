# IconSymbol3DLayer

IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.

### Properties

| Property | Details
| --- | ---
| anchor | Type:`String`<br>Must be one of the following values:<ul><li>`center`</li><li>`left`</li><li>`right`</li><li>`top`</li><li>`bottom`</li><li>`topLeft`</li><li>`topRight`</li><li>`bottomLeft`</li><li>`bottomRight`</li></ul>
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| [outline](outline.md) | The outline of the symbol layer.
| [resource](iconSymbol3DLayer_resource.md) | The shape (primitive) or image URL (href) used to visualize the features.
| size | Icon size in points, positive only
| type | Specifies the type of symbol used.<br>Value of this property must be `Icon`


### Example

```json
{
  "symbolLayers": [
    {
      "type": "Icon",
      "resource": {
        "primitive": "kite"
      },
      "material": {
        "color": [
          255,
          255,
          255
        ]
      },
      "size": 12,
      "anchor": "bottom",
      "outline": {
        "size": 1,
        "color": [
          0,
          0,
          0
        ]
      }
    }
  ]
}
```

