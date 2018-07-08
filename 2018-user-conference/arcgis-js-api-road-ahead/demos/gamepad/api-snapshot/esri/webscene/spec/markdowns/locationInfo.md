# locationInfo

Defines how location information will be retrieved from a [CSV](csvLayer.md) file referenced through the web, ie. referenced by URL.

### Properties

| Property | Details
| --- | ---
| latitudeFieldName | A string defining the field name that holds the latitude (Y) coordinate.
| locationType | String value indicating location type.<br>Value of this property must be `coordinates`
| longitudeFieldName | A string defining the field name that holds the longitude (X) coordinate.


### Example

```json
{
  "locationInfo": {
    "locationType": "coordinates",
    "latitudeFieldName": "latitude",
    "longitudeFieldName": "longitude"
  }
}
```

