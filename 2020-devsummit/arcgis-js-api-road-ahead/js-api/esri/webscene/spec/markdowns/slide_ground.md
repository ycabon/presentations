# Ground

Ground defines the main surface of the web scene, based on elevation layers. This object defines the ground properties to be set in the slides.

**Referenced by:** [slide](slide.md)

### Properties

| Property | Details
| --- | ---
| transparency | The transparency of the ground surface (including basemap). The value has to lie between `100` (full transparency) and `0` (full opacity).


### Example

```json
{
  "ground": {
    "transparency": 30
  }
}
```

