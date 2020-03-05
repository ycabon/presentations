# multipointGeometry

Contains an array of points, along with a spatial reference field.

**Referenced by:** [geometry](geometry.md)

### Properties

| Property | Details
| --- | ---
| hasM | Indicates whether the geometry contains M coordinate values.
| hasZ | Indicates whether the geometry contains Z coordinate values.
| points | An array that corresponds to 2D and 3D points.
| [spatialReference](spatialReference.md) | The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).


### Example

```json
{
  "geometry": {
    "points": [
      [
        -97.06138,
        32.837
      ],
      [
        -97.06133,
        32.836
      ],
      [
        -97.06124,
        32.834
      ],
      [
        -97.06127,
        32.832
      ]
    ],
    "spatialReference": {
      "wkid": 4326
    }
  }
}
```

