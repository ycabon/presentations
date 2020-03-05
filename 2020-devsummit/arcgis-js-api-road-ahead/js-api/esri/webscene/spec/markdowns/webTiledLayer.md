# WebTiledLayer

A tile layer is a derived from a set of web-accessible tiles which reside on a server. The tiles are accessed by a direct URL request from the web browser. Because the tiles in a tile layer are not available as a service, they must be in a specific format for a web app such as the ArcGIS.com scene viewer to display the layer on a scene.

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| copyright | Attribution to the Web Tiled Layer provider. It is displayed in the attribution on the web scene. Input required by the user when the layer is added to the web scene.
| [fullExtent](extent.md) | An extent object representing the full extent envelope for the layer.
| id | A unique identifying string for the layer.
| isReference | This is applicable if used as a basesceneLayer. A boolean value indicating whether or not the basesceneLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | Unique string value indicating an item registered in ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `WebTiledLayer`
| listMode | To show or hide the layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| subDomains | If subdomains are detected, they must be specified. The scene viewer detects if the Web Tiled Layer has subdomains by parsing the templateURL value for {subDomain}.
| templateUrl | URL to the Web Tiled Layer. Input required by the user when the layer is added to the web scene. The template URL contains a parameterized URL. The URL can contain the following templated parameters: `level`, `col`, `row`, and `subDomain`.
| [tileInfo](tileInfo.md) | Contains the spatial reference and the tiling scheme of the layer. Typically retrieved from a WMTS OGC Web Service. If missing the layer must be in the WGS 1984 Web Mercator (Auxiliary Sphere) tiling scheme.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.
| [wmtsInfo](wmtsInfo.md) | Object containing information about the chosen WMTS service layer and tiling schema.


### WebTiledLayer as an operationalLayer Example

```json
{
  "operationalLayers": [
    {
      "layerType": "WebTiledLayer",
      "templateUrl": "http://{subDomain}.tile.stamen.com/toner/{level}/{col}/{row}.png",
      "id": "1583e1976e9-layer-0",
      "listMode": "show",
      "opacity": 1,
      "title": "Layer",
      "visibility": true,
      "fullExtent": {
        "xmin": -20037508.342787,
        "ymin": -20037508.34278,
        "xmax": 20037508.34278,
        "ymax": 20037508.342787,
        "spatialReference": {
          "wkid": 102100,
          "latestWkid": 3857
        }
      },
      "tileInfo": {
        "rows": 256,
        "cols": 256,
        "dpi": 96,
        "compressionQuality": 0,
        "origin": {
          "x": -20037508.342787,
          "y": 20037508.342787,
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "spatialReference": {
          "wkid": 102100,
          "latestWkid": 3857
        },
        "lods": [
          {
            "level": 0,
            "resolution": 156543.033928,
            "scale": 591657527.591555
          },
          {
            "level": 1,
            "resolution": 78271.5169639999,
            "scale": 295828763.795777
          },
          {
            "level": 2,
            "resolution": 39135.7584820001,
            "scale": 147914381.897889
          },
          {
            "level": 3,
            "resolution": 19567.8792409999,
            "scale": 73957190.948944
          },
          {
            "level": 4,
            "resolution": 9783.93962049996,
            "scale": 36978595.474472
          },
          {
            "level": 5,
            "resolution": 4891.96981024998,
            "scale": 18489297.737236
          },
          {
            "level": 6,
            "resolution": 2445.98490512499,
            "scale": 9244648.868618
          },
          {
            "level": 7,
            "resolution": 1222.99245256249,
            "scale": 4622324.434309
          },
          {
            "level": 8,
            "resolution": 611.49622628138,
            "scale": 2311162.217155
          },
          {
            "level": 9,
            "resolution": 305.748113140558,
            "scale": 1155581.108577
          },
          {
            "level": 10,
            "resolution": 152.874056570411,
            "scale": 577790.554289
          },
          {
            "level": 11,
            "resolution": 76.4370282850732,
            "scale": 288895.277144
          },
          {
            "level": 12,
            "resolution": 38.2185141425366,
            "scale": 144447.638572
          },
          {
            "level": 13,
            "resolution": 19.1092570712683,
            "scale": 72223.819286
          },
          {
            "level": 14,
            "resolution": 9.55462853563415,
            "scale": 36111.909643
          },
          {
            "level": 15,
            "resolution": 4.77731426794937,
            "scale": 18055.954822
          },
          {
            "level": 16,
            "resolution": 2.38865713397468,
            "scale": 9027.977411
          },
          {
            "level": 17,
            "resolution": 1.19432856685505,
            "scale": 4513.988705
          },
          {
            "level": 18,
            "resolution": 0.597164283559817,
            "scale": 2256.994353
          },
          {
            "level": 19,
            "resolution": 0.298582141647617,
            "scale": 1128.497176
          }
        ]
      },
      "minScale": 0,
      "maxScale": 0,
      "copyright": "Map tiles by <a href=\"http://stamen.com/\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a href=\"http://openstreetmap.org/\">OpenStreetMap</a>, under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>.",
      "subDomains": [
        "a",
        "b",
        "c",
        "d"
      ]
    }
  ]
}
```
### WebTiledLayer as a baseMapLayer Example

```json
{
  "baseMapLayers": [
    {
      "templateUrl": "https://{subDomain}.tile.thunderforest.com/cycle/{level}/{col}/{row}.png",
      "id": "OpenCycleMap",
      "layerType": "WebTiledLayer",
      "title": "OpenCycleMap",
      "copyright": "'Maps © <a href='https://www.thunderforest.com'>Thunderforest</a>, Data © <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>'",
      "fullExtent": {
        "xmin": -20037508.342787,
        "ymin": -20037508.34278,
        "xmax": 20037508.34278,
        "ymax": 20037508.342787,
        "spatialReference": {
          "wkid": 102100
        }
      },
      "subDomains": [
        "a",
        "b",
        "c"
      ],
      "visibility": true,
      "opacity": 1
    }
  ],
  "title": "Topographic"
}
```
### WebTiledLayer from a WMTS service Example

```json
{
  "operationalLayers": [
    {
      "templateUrl": "http://maps1.wien.gv.at/wmts/lb/farbe/google3857/{level}/{row}/{col}.jpeg",
      "id": "WMTS_659",
      "itemId": "0217f8067457410a998fc9293563ba94",
      "layerType": "WebTiledLayer",
      "title": "Luftbild",
      "copyright": "http://data.wien.gv.at/nutzungsbedingungen",
      "fullExtent": {
        "xmin": 1800036.1661272035,
        "ymin": 6123507.424977349,
        "xmax": 1845677.1573524445,
        "ymax": 6161931.724216427,
        "spatialReference": {
          "wkid": 102100
        }
      },
      "tileInfo": {},
      "wmtsInfo": {
        "url": "http://maps.wien.gv.at/wmts",
        "layerIdentifier": "lb",
        "tileMatrixSet": "google3857"
      },
      "visibility": true,
      "opacity": 1,
      "minScale": 591658710.9094299,
      "maxScale": 1128.499433349543
    }
  ]
}
```

