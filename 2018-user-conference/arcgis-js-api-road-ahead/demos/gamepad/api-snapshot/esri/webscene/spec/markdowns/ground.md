# Ground

Ground defines the main surface of the web scene, based on elevation layers.

### Properties

| Property | Details
| --- | ---
| [layers](elevationLayer.md) | An array of elevationLayer objects defining the elevation of the ground in the web scene.


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
    ]
  }
}
```

