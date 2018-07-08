# polylineGeometry

Contains an array of paths and a spatialReference.

### Properties

| Property | Details
| --- | ---
| hasM | Indicates whether the geometry contains M coordinate values.
| hasZ | Indicates whether the geometry contains Z coordinate values.
| paths | Three nested array levels describing a polyline. The first level describes individual paths; the second describes the points of these paths; and the third gives the coordinates of the points.
| [spatialReference](spatialReference.md) | The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).


### Example

```json
{
  "geometry": {
    "paths": [
      [
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
      [
        [
          -97.06326,
          32.759
        ],
        [
          -97.06298,
          32.755
        ]
      ]
    ],
    "spatialReference": {
      "wkid": 4326
    }
  }
}
```

