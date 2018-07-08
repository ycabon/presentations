# heightModelInfo

An object that defines the characteristics of the vertical coordinate system used by the web scene.

### Properties

| Property | Details
| --- | ---
| heightModel | The surface type or height model of the vertical coordinate system.<br>Must be one of the following values:<ul><li>`ellipsoidal`</li><li>`gravity_related_height`</li></ul>
| heightUnit | The unit of the vertical coordinate system.<a href="#heightUnit"><sup>1</sup></a>
| vertCRS | (Optional) The datum realization of the vertical coordinate system.


### Additional information

The height model info defines the characteristics of the vertical coordinate system used by the scene, and is used to avoid rendering layers that have incompatible vertical coordinate systems.

A height model info is defined by a surface type, a vertical unit and an optional datum realization.<br><a id="unit"><sup>1</sup></a>Supported units: `benoit-1895-b-chain`,`centimeter`,`clarke-foot`,`clarke-link`,`clarke-yard`,`decimeter`,`foot`,`gold-coast-foot`,`indian-1937-yard`,`indian-yard`,`kilometer`,`meter`,`millimeter`,`sears-1922-truncated-chain`,`sears-chain`,`sears-foot`,`sears-yard`,`us-foot`,`us-inch`,`us-mile`,`us-yard`

### Example

```json
{
  "heightModelInfo": {
    "heightModel": "gravity_related_height",
    "heightUnit": "meter",
    "vertCRS": "EGM2008_Geoid"
  }
}
```

