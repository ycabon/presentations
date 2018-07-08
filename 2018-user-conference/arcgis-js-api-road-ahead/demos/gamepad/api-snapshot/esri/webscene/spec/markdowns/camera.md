# Camera

The camera defines the position, tilt, and heading of the point from which the SceneView's visible extent is observed.

### Properties

| Property | Details
| --- | ---
| heading | The heading of the camera in degrees. Heading is zero when north is the top of the screen. It increases as the view rotates clockwise.
| [position](point_geometry.md) | The position of the camera defined by a map point.
| tilt | The tilt of the camera in degrees with respect to the surface as projected down from the camera position. Tilt is zero when looking straight down at the surface and 90 degrees when the camera is looking parallel to the surface.


### Example

```json
{
  "camera": {
    "position": {
      "x": -13160021.85,
      "y": 4040530.94,
      "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
      },
      "z": 2948.02
    },
    "heading": 17.9,
    "tilt": 72.4
  }
}
```

