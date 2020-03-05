# lighting

Object containing information on how the scene is lit.

**Referenced by:** [environment](environment.md)

### Properties

| Property | Details
| --- | ---
| datetime | The current date and time of the simulated sun. It is a number representing the number of milliseconds since 1 January, 1970 UTC.
| directShadows | Indicates whether to show shadows cast by the sun.
| displayUTCOffset | UTC offset in decimal hours. Not to be applied to datetime for sun position, only to adjust display of datetime in UI. If displayUTCOffset is null, offset is calculated for the current location (approximate only).


### Example

```json
{
  "lighting": {
    "datetime": 1458054000000,
    "directShadows": true,
    "displayUTCOffset": 1
  }
}
```

