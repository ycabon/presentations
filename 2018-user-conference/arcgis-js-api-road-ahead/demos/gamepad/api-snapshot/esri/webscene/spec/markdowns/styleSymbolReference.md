# StyleSymbolReference

The StyleSymbolReference is used to reference a symbol from a portal styleItem

### Properties

| Property | Details
| --- | ---
| name | Identifies a symbol in the style by name.
| styleName | A registered web style name, such as `EsriThematicTreesStyle`
| styleUrl | URL to a style definition.
| type | The type of the symbol<br>Value of this property must be `styleSymbolReference`


### Example

```json
{
  "symbol": {
    "type": "styleSymbolReference",
    "styleName": "EsriThematicTreesStyle",
    "name": "Frangula"
  }
}
```

