# Ground

Ground defines the main surface of the web scene, based on elevation layers.

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| [layers](elevationLayers.md) | An array of elevationLayer objects defining the elevation of the ground in the web scene.
| [navigationConstraint](navigationConstraint.md) | Object determining whether the camera is constrained to navigate only above, or also under the ground surface. If not specified, navigation is constrained to above ground.
| [surfaceColor](color.md) | Defines the color of the ground surface, displayed underneath the basemap. If no color, the default grid is shown.
| transparency | The transparency of the ground surface. It is used for seeing through the ground, therefore this property also changes the transparency of the basemap. Draped operational layers are not affected by this property. The value has to lie between `100` (full transparency) and `0` (full opacity).


### Example

```json
{
  "ground": {
    "layers": [
      {
        "id": "worldElevation",
        "listMode": "hide",
        "title": "Terrain3D",
        "url": "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
        "visibility": true,
        "layerType": "ArcGISTiledElevationServiceLayer"
      }
    ],
    "navigationConstraint": {
      "type": "none"
    },
    "transparency": 30,
    "surfaceColor": [
      0,
      0,
      0
    ]
  }
}
```

