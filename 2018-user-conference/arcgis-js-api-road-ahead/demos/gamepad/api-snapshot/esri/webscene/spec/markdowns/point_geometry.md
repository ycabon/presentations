# pointGeometry

Defines the JSON formats of the point and spatial reference objects.

### Properties

| Property | Details
| --- | ---
| m | M coordinate which contains measures used for linear referencing.
| [spatialReference](spatialReference.md) | The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).
| x | X coordinate which is measured along the east/west axis.<br>Must be one of the following values:<ul><li>`Number`</li><li>`Null`</li><li>`String`</li></ul>
| y | Y coordinate which is measured along the north/south axis.
| z | Z coordinate which measures height or elevation.


### Example

```json
{
  "geometry": {
    "x": -118.15,
    "y": 33.8,
    "spatialReference": {
      "wkid": 4326
    }
  }
}
```

