# ObjectSymbol3DLayer

ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.

### Properties

| Property | Details
| --- | ---
| anchor | The positioning of the object relative to the geometry.<br>Must be one of the following values:<ul><li>`center`</li><li>`bottom`</li><li>`origin`</li><li>`top`</li></ul>
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

[Anchor and `origin`](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-ObjectSymbol3DLayer.html#anchor) in ArcGIS API for JavaScript.

### Object Symbol Example

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
### Object Symbol with 3-axis rotation Example

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

