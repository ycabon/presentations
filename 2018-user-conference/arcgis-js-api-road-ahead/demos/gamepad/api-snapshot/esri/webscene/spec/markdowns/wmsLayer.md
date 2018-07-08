# WMS Layer (WMS)

A layer consuming a Web Map Service (WMS). The WMS specification is an international specification for serving and consuming dynamic maps on the web.

### Properties

| Property | Details
| --- | ---
| copyright | A string containing copyright and access information for a WMS layer. This is copied from the capabilities document exposed by the WMS service.
| customLayerParameters | A sequence of custom parameters to WMS layer requests. These parameters are applied to `Getmap` and `GetFeatureInfo` requests. The `customLayerParameters` property takes precedence if `customParameters` is also present.
| customParameters | A sequence of custom parameters to all WMS requests. These parameters are applied to `GetCapabilities`, `GetMap`, and `GetFeatureinfo` requests. If used with the `customLayerParameters` property, `customParameters` will not take precedence.
| extent | The rectangular map extent that should be requested from the service.
| featureInfoFormat | Format of the feature, e.g.`text/plain`
| featureInfoUrl | The URL for the WMS GetFeatureInfo call.
| format | A string containing the image format to be requested from a WMS service.
| id | A unique identifying string for the layer.
| isReference | This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).
| itemId | Unique string value indicating an item registered in ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `WMS`
| [layers](wmsLayer_layer.md) | An array of layer objects defining the styling, geometry, and attribute information for the features.
| listMode | To show or hide layers in the layer list<br>Must be one of the following values:<ul><li>`show`</li><li>`hide`</li></ul>
| mapUrl | A string containing the URL of the WMS map. When using a WMS layer, you should also supply the url property. `mapUrl` is the URL returned by the capabilities to be used for the getMap requests.
| maxHeight | A number defining the maximum height, in pixels, that should be requested from the service.
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| maxWidth | A number defining the maximum width, in pixels, that should be requested from the service.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Boolean value indicating whether to display the layer in the legend.
| spatialReferences | An array of numbers containing well-known IDs for spatial references supported by the service.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the WMS service (`getCapabilities` URL).
| version | A string containing the version number of the service.
| visibility | Boolean property determining whether the layer is initially visible in the web map.
| visibleLayers | An array of layers that should appear visible. The array contains the names of the visible layers.


### WMS Layer (WMS) Example

WMS layer as an operationalLayer

```json
{
  "operationalLayers": [
    {
      "id": "15e0eda27c4-layer-0",
      "opacity": 1,
      "title": "IEM GOES IR WMS Service",
      "url": "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_ir.cgi",
      "visibility": true,
      "layerType": "WMS",
      "featureInfoFormat": "text/plain",
      "featureInfoUrl": "https://mesonet.agron.iastate.edu/cgi-bin/mapserv/mapserv?map=/opt/iem/data/wms/goes/conus_ir.map",
      "mapUrl": "https://mesonet.agron.iastate.edu/cgi-bin/mapserv/mapserv?map=/opt/iem/data/wms/goes/conus_ir.map",
      "version": "1.3.0"
    }
  ]
}
```
### WMS Layer basemap Example

WMS layer as a basemap layer

```json
{
  "baseMapLayers": [
    {
      "id": "15e14e20f82-layer-0",
      "opacity": 1,
      "title": "Open Government Data WMS Zürich",
      "url": "http://www.gis.stadt-zuerich.ch/maps/services/wms/WMS-ZH-STZH-OGD/MapServer/WMSServer",
      "visibility": true,
      "layerType": "WMS",
      "featureInfoFormat": "text/html",
      "featureInfoUrl": "http://www.gis.stadt-zuerich.ch/maps/services/wms/WMS-ZH-STZH-OGD/MapServer/WmsServer",
      "mapUrl": "http://www.gis.stadt-zuerich.ch/maps/services/wms/WMS-ZH-STZH-OGD/MapServer/WmsServer",
      "layers": [
        {
          "name": "Uebersichtsplan_2016",
          "title": "Uebersichtsplan_2016"
        }
      ],
      "visibleLayers": [
        "Uebersichtsplan_2016"
      ],
      "version": "1.3.0"
    }
  ]
}
```

