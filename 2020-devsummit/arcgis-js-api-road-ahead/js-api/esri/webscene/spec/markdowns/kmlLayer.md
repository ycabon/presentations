# KML Layer (KML)

Keyhole Markup Language (KML) is an XML-based format for storing geographic data and associated content and is an official Open Geospatial Consortium (OGC) standard. KML is a common format for sharing geographic data with non-GIS users as it can be easily delivered on the Internet.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer.
| itemId | A string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `KML`
| listMode | To show or hide the sublayer in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| path | For offline data, a path to a KML file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.kml` or `.kmz`.  A relative path must be from the file which defines the layer. For example `file:../commondata/kml/paris.kml`.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Indicates whether to allow scene authors the ability to control what layers should be shown in a client's legend.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.
| visibleFolders | Array of numeric IDs of folders that will be made visible.


### Example

```json
{
  "operationalLayers": [
    {
      "id": "87a5bcad920440f293a36ff3fea1a4f8",
      "title": "Paris",
      "visibility": true,
      "layerType": "KML",
      "path": "file:../commondata/kml/paris.kml"
    }
  ]
}
```

