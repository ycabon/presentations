# UniqueValueFromStyle Renderer

This is a special version of UniqueValue Renderer, which loads uniqueValue infos from a style definition.

**Referenced by:** [renderer](renderer.md)

### Properties

| Property | Details
| --- | ---
| defaultLabel | Default string for the default symbol used to draw unspecified values.
| [defaultSymbol](symbol3D.md) | The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.
| field1 | String value specifying the first field used to render matching values.
| styleName | A registered web style name. Can not be used in conjunction with styleUrl.
| styleUrl | URL that points to the web style definition. Can not be used in conjunction with styleName.
| type | Specifies the type of renderer used.<br>Value of this property must be `uniqueValue`
| [visualVariables](visualVariable.md) | An array of visualVariable objects used for continuous color or size, simple, and unique values with feature opacity.


### Example

```json
{
  "renderer": {
    "type": "uniqueValue",
    "styleName": "EsriRealisticTreesStyle",
    "field1": "genus",
    "visualVariables": [
      {
        "type": "sizeInfo",
        "field": "height",
        "axis": "height",
        "valueUnit": "feet"
      },
      {
        "type": "sizeInfo",
        "field": "diameter",
        "axis": "widthAndDepth",
        "valueUnit": "feet"
      }
    ]
  }
}
```

