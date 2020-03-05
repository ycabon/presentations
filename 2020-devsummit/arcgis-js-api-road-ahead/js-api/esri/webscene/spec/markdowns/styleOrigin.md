# styleOrigin

The origin of the style from which the symbol was originally referenced. A reference to the style origin can be either by styleName or by styleUrl (but not both). It may be used to understand where a symbol was originally sourced from, but does not affect actual appearance or rendering of the symbol.

**Referenced by:** [LineSymbol3D](lineSymbol3D.md), [MeshSymbol3D](meshSymbol3D.md), [PointSymbol3D](pointSymbol3D.md), [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| name | Identifies a symbol in the style by name.
| styleName | A registered web style name, such as `EsriThematicShapesStyle`
| styleUrl | URL to a style definition.<br>Must be one of the following values:<ul><li>`String`<br>An absolute URL</li><li>`String`<br>A relative path starting with ./</li></ul>


### Example

```json
{
  "symbol": {
    "styleOrigin": {
      "styleName": "EsriThematicTreesStyle",
      "name": "Frangula"
    },
    "type": "PointSymbol3D",
    "symbolLayers": [
      {
        "type": "Object",
        "resource": {
          "href": "http://static.arcgis.com/arcgis/styleItems/ThematicTrees/web/resource/FrangulaAlnus.json"
        },
        "height": 100,
        "material": {
          "color": [
            255,
            0,
            0
          ]
        }
      }
    ]
  }
}
```

