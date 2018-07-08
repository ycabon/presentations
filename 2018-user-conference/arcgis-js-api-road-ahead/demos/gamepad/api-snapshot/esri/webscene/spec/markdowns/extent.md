# extent

This object defines the bounding geometry given the lower-left and upper-right corners of the bounding box. A [spatial reference](spatialReference.md) is also required.

### Properties

| Property | Details
| --- | ---
| [spatialReference](spatialReference.md) | An object used to specify the spatial reference of the given geometry.
| xmax | A numeric value indicating the top-right X-coordinate of an extent envelope.
| xmin | A numeric value indicating the bottom-left X-coordinate of an extent envelope.<br>Must be one of the following values:<ul><li>`Number`</li><li>`Null`</li><li>`String`</li></ul>
| ymax | A numeric value indicating the top-right Y-coordinate of an extent envelope.
| ymin | A numeric value indicating the bottom-left Y-coordinate of an extent envelope.


### Example

```json
{
  "extent": {
    "xmin": 13871520.850500003,
    "ymin": 3910293.086000003,
    "xmax": 14574034.873400003,
    "ymax": 4686306.161399998,
    "spatialReference": {
      "wkid": 102100,
      "latestWkid": 3857
    }
  }
}
```

