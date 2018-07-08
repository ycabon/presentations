# Web Map Tile Service Info

Object defines and provides information about layers in a [WMTSLayer](webTiledLayer.md) service.

### Properties

| Property | Details
| --- | ---
| customLayerParameters | A sequence of parameters used to append different custom parameters to a WMTS tile request. These parameters are applied to `GetTile`. The `customLayerParameters` property takes precedence if `customParameters` is also present.
| customParameters | A sequence of parameters used to append custom parameters to all WMTS requests. These parameters are applied to `GetCapabilities` and `GetTile`. If used with the `customLayerParameters` property, `customParameters` will not take precedence.
| layerIdentifier | Identifier for the specific layer used in the WMTS service. Required input by the user.
| tileMatrixSet | Tiling schema, set by the WMTS service.
| url | URL to the WMTS web service. Required input by the user.


### Example

The WMTSInfo as used within a WMTS Layer

```json
{
  "wmtsInfo": {
    "url": "http://maps.wien.gv.at/wmts",
    "layerIdentifier": "lb",
    "tileMatrixSet": "google3857",
    "customParameters": {
      "token": "1ADE-FR54T"
    },
    "customLayerParameters": {
      "style": "basic"
    }
  }
}
```

