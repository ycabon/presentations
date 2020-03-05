# IconSymbol3DLayer

IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.

**Referenced by:** [PointSymbol3D](pointSymbol3D.md), [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| anchor | Type:`String`<br>If property is present, must be one of the following values: <ul><li>`bottom`</li><li>`bottomLeft`</li><li>`bottomRight`</li><li>`center`</li><li>`left`</li><li>`relative`</li><li>`right`</li><li>`top`</li><li>`topLeft`</li><li>`topRight`</li></ul>
| anchorPosition | When `anchor` equals `relative`, this property specifies the position within the icon that should coincide with the feature geometry. Otherwise it is ignored. The position is defined as a factor of the icon dimensions that is added to the icon center: `positionInIcon = (0.5 + anchorPosition) * size`, where `size` is the original size of the icon resource.
| enable | Type:`Boolean`
| [material](material.md) | The material used to shade the geometry.
| [outline](outline.md) | The outline of the symbol layer.
| [resource](iconSymbol3DLayer_resource.md) | The shape (primitive) or image URL (href) used to visualize the features.
| size | Icon size in points, positive only
| type | Specifies the type of symbol used.<br>Value of this property must be `Icon`


### Icon symbol layer Example

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
### Icon symbol layer with custom anchor in the bottom right region of the icon Example

```json
{
  "symbolLayers": [
    {
      "type": "Icon",
      "resource": {
        "href": "http://hostname/icon.png"
      },
      "size": 12,
      "anchor": "relative",
      "anchorPosition": [
        0.25,
        0.4
      ]
    }
  ]
}
```

