# polygonGeometry

A polygon contains an array of rings and a spatial reference.

### Properties

| Property | Details
| --- | ---
| hasM | Indicates whether the geometry contains M coordinate values.
| hasZ | Indicates whether the geometry contains Z coordinate values.
| rings | Represents an array of rings. Each ring is an array of points.
| [spatialReference](spatialReference.md) | The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).


### Example

```json
{
  "geometry": {
    "rings": [
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
        ],
        [
          -97.06138,
          32.837
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
        ],
        [
          -97.06153,
          32.749
        ],
        [
          -97.06326,
          32.759
        ]
      ]
    ],
    "spatialReference": {
      "wkid": 4326
    }
  }
}
```

