# ObjectSymbol3DLayer

ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.

**Referenced by:** [PointSymbol3D](pointSymbol3D.md), [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| anchor | The positioning of the object relative to the geometry.<br>If property is present, must be one of the following values: <ul><li>`bottom`</li><li>`center`</li><li>`origin`</li><li>`relative`</li><li>`top`</li></ul>
| anchorPosition | When `anchor` equals `relative`, this property specifies the positioning of the object relative to the geometry as a fraction of the symbol layer's bounding box. Otherwise it is ignored.
| castShadows | Boolean to control the shadow casting behaviour of the rendered geometries.
| depth | Object depth in meters, positive only
| enable | Type:`Boolean`
| heading | Rotation angle around Z axis in degrees. At 0 degrees, the model points in the direction of the Y-axis. Positive values indicate clockwise rotation (when looked at from the top). [Detailed description](static/objectSymbolLayerOrientation.md).
| height | Object height in meters, positive only
| [material](material.md) | The material used to shade the geometry.
| [resource](objectSymbol3DLayer_resource.md) | The primitive shape (primitive) or external 3D model (href) used to visualize the points.
| roll | Rotation angle around Y axis in degrees. At 0 degrees, the model is level. A positive value lifts the left part and lowers the right part of the model. [Detailed description](static/objectSymbolLayerOrientation.md).
| tilt | Rotation angle around X axis in degrees. At 0 degrees, the model is level. A positive value lifts the front and lowers the back of the model. [Detailed description](static/objectSymbolLayerOrientation.md).
| type | Specifies the type of symbol used.<br>Value of this property must be `Object`
| width | Object width in meters, positive only


### Additional information

- [Size property interaction](static/objectSymbolLayerSize.md)
- [Anchor and `origin`](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-ObjectSymbol3DLayer.html#anchor) in ArcGIS API for JavaScript.

### Object symbol layer Example

```json
{
  "symbolLayers": [
    {
      "type": "Object",
      "resource": {
        "primitive": "sphere"
      },
      "width": 50000,
      "height": 50000,
      "material": {
        "color": [
          128,
          255,
          0
        ]
      }
    }
  ]
}
```
### Object symbol layer with 3-axis rotation Example

```json
{
  "symbolLayers": [
    {
      "type": "Object",
      "resource": {
        "primitive": "diamond"
      },
      "width": 50000,
      "height": 50000,
      "material": {
        "color": [
          128,
          255,
          0
        ]
      },
      "heading": 12,
      "tilt": 10,
      "roll": 5
    }
  ]
}
```
### Object symbol layer with relative anchor Example

Places a diamond symbol such that its Southern tip coincides with the point geometry (assuming ENU coordinates).

```json
{
  "symbolLayers": [
    {
      "type": "Object",
      "resource": {
        "primitive": "diamond"
      },
      "width": 10000,
      "anchor": "relative",
      "anchorPosition": [
        0,
        -0.5,
        0
      ],
      "material": {
        "color": [
          128,
          255,
          0
        ]
      }
    }
  ]
}
```
### Object symbol layer with casting shadows disabled Example

```json
{
  "symbolLayers": [
    {
      "type": "Object",
      "resource": {
        "primitive": "cone"
      },
      "width": 50,
      "height": 100,
      "castShadows": false
    }
  ]
}
```

