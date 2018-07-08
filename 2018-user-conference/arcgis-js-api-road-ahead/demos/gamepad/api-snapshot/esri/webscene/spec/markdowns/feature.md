# feature

Contains information about an attribute field and feature geometry.

### Properties

| Property | Details
| --- | ---
| attributes | The feature attributes. A JSON object that contains a dictionary of name-value pairs. The names are the feature field names. The values are the field values, and they can be any of the standard JSON types: string, number, and boolean. Note that date values are encoded as numbers. The number represents the number of milliseconds since epoch (January 1, 1970) in UTC.
| [geometry](geometry.md) | It can be any of the supported geometry types.
| [symbol](symbol3D.md) | Symbol used for drawing the feature.


### Example

```json
{
  "feature": {
    "geometry": {
      "x": -118.15,
      "y": 33.8
    },
    "attributes": {
      "OWNER": "Joe Smith",
      "VALUE": 94820.37,
      "APPROVED": true,
      "LASTUPDATE": 1227663551096
    },
    "symbol": {
      "type": "PolygonSymbol3D",
      "symbolLayers": [
        {
          "type": "Fill",
          "material": {
            "color": [
              255,
              0,
              0
            ]
          }
        }
      ]
    }
  }
}
```

