# Range

Range object

### Properties

| Property | Details
| --- | ---
| interactionMode | Indicates the mode in which the active range should be presented to the user.<br>Must be one of the following values:<ul><li>`slider`</li><li>`picker`</li></ul>
| numberOfStops | This is used to generate the activeRangeValues if activeRangeValues are not specified.
| stopInterval | Interval in which stops should be generated.


### Example

```json
{
  "range": {
    "interactionMode": "slider",
    "stopInterval": 1
  }
}
```

