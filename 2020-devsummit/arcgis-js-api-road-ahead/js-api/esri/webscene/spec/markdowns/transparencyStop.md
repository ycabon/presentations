# transparencyStop

The transparencyStop object defines the thematic opacity ramp in a sequence of stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop.

**Referenced by:** [TransparencyInfo Visual Variable](transparencyInfo_visualVariable.md)

### Properties

| Property | Details
| --- | ---
| label | A string value used to label the stop in the legend.
| transparency | A numeric transparancy value for a stop ranging from 0-100, where 0 is opaque and 100 is 100% transparent.
| value | The pixel intensity value. Describes the pixel intensity value that the color should be associated with.


### Example

```json
{
  "stop": {
    "value": 0,
    "transparency": 50
  }
}
```

