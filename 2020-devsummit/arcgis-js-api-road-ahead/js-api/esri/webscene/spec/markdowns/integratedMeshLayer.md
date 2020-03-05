# Integrated Mesh Layer (IntegratedMeshLayer)

An integrated mesh can represent built and natural 3D features, such as building walls, trees, valleys, and cliffs, with realistic textures and includes elevation information.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer.
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerDefinition | A layerDefinition object defining the attribute schema and drawing information for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type.<br>Value of this property must be `IntegratedMeshLayer`
| listMode | Type:`String`<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| path | For offline data, a path to integrated mesh data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/edinburgh.slpk`.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.
| url | The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### layerDefinition properties

| Property | Details
| --- | ---
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.


### Example

Data for example service was provided by Institute Cartografic i Geologic Catalunya (ICGC).

```json
{
  "operationalLayers": [
    {
      "id": "1589c525c4c-layer-0",
      "title": "Integrated Mesh Girona",
      "url": "http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/Girona_Spain/SceneServer",
      "visibility": true,
      "layerType": "IntegratedMeshLayer",
      "layerDefinition": {
        "elevationInfo": {
          "mode": "absoluteHeight",
          "offset": 100
        }
      }
    }
  ]
}
```

