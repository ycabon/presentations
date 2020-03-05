# heightModelInfo

An object that defines the characteristics of the vertical coordinate system used by the web scene.

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| heightModel | The surface type or height model of the vertical coordinate system.<br>Must be one of the following values:<ul><li>`ellipsoidal`</li><li>`gravity_related_height`</li></ul>
| heightUnit | The unit of the vertical coordinate system.<a href="#heightUnit"><sup>1</sup></a><br>Must be one of the following values:<ul><li>`150-kilometers`</li><li>`50-kilometers`</li><li>`benoit-1895-b-chain`</li><li>`clarke-foot`</li><li>`clarke-link`</li><li>`clarke-yard`</li><li>`foot`</li><li>`gold-coast-foot`</li><li>`indian-1937-yard`</li><li>`indian-yard`</li><li>`meter`</li><li>`sears-1922-truncated-chain`</li><li>`sears-chain`</li><li>`sears-foot`</li><li>`sears-yard`</li><li>`us-foot`</li></ul>
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

