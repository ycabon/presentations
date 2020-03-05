# PointCloud Layer

Point cloud data is post-processed spatially organized lidar data that consists of large collections of 3D points. Elevations for the ground, buildings, forest canopy, highway overpasses, and anything else encountered during the lidar survey make up the point cloud data. Point cloud layers allow for fast visualisation of point cloud data in the browser.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| disablePopup | disablePopups allows a client to ignore popups defined by the service item.
| id | A unique identifying string for the layer
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal
| layerDefinition | A layerDefinition object defining the attribute schema and drawing information for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type<br>Value of this property must be `PointCloudLayer`
| listMode | To show or hide the layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| path | For offline data, a path to point cloud layer data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/zurich.slpk`.
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of pop-up windows when you click a point.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible


### layerDefinition properties

| Property | Details
| --- | ---
| [drawingInfo.renderer](renderer.md) | The renderer object contains the drawing information for the operationalLayer.
| drawingInfo.transparency | Number value ranging between 0 (no transparency) to 100 (completely transparent).
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| [filters](pointCloudFilter.md) | Filters for PointCloud layers
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.


### Example

```json
{
  "operationalLayers": [
    {
      "id": "point-cloud-layer-0",
      "title": "Sonoma8",
      "layerType": "PointCloudLayer",
      "url": "http://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BARNEGAT_BAY_LiDAR_UTM/SceneServer",
      "visibility": true,
      "layerDefinition": {
        "filters": [
          {
            "field": "CLASS_CODE",
            "type": "pointCloudValueFilter",
            "mode": "include",
            "values": [
              1
            ]
          }
        ]
      }
    }
  ]
}
```

