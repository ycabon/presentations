# PointCloud Layer

Point cloud data is post-processed spatially organized lidar data that consists of large collections of 3D points. Elevations for the ground, buildings, forest canopy, highway overpasses, and anything else encountered during the lidar survey make up the point cloud data. Point cloud layers allow for fast visualisation of point cloud data in the browser.

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal
| layerDefinition | A layerDefinition object defining the attribute schema and drawing information for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type<br>Value of this property must be `PointCloudLayer`
| listMode | To show or hide the layer in the layer list<br>Must be one of the following values:<ul><li>`show`</li><li>`hide`</li></ul>
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible


### layerDefinition properties

| Property | Details
| --- | ---
| [drawingInfo](drawingInfo.md) | Contains drawing, labeling, and transparency information.
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| [filters](pointCloudFilter.md) | Filters for PointCloud layers


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

