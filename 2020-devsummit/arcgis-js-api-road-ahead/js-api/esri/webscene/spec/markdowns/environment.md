# environment

Represents settings that affect the environment in which the web scene is displayed. It is entirely stored as part of the initial state of the web scene, and partially in the slides in the presentation.

**Referenced by:** [initialState](initialState.md), [slide](slide.md)

### Properties

| Property | Details
| --- | ---
| atmosphereEnabled | Whether the atmosphere should be visualized. This includes sky and haze effects.
| [background](environment_background_color.md) | The background is what is displayed behind any scene objects, stars and atmosphere.
| [lighting](lighting.md) | Object containing information on how the scene is lit.
| starsEnabled | Whether stars should be displayed in the sky.


### Example

```json
{
  "environment": {
    "atmosphereEnabled": true,
    "background": {
      "type": "color",
      "color": [
        0,
        0,
        0
      ],
      "transparency": 0
    },
    "starsEnabled": true
  }
}
```

