# Vector Tile Layer (VectorTileLayer)

A vector tile layer references a set of web-accessible vector tiles and the corresponding style for how those tiles should be drawn.

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer.
| isReference | Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerType | String indicating the layer type.<br>Value of this property must be `VectorTileLayer`
| listMode | To show or hide the layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| styleUrl | A url to a JSON file containing the stylesheet information used to render the layer. You may also pass an object containing the stylesheet information identical to the JSON file.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### operationalLayer Example

```json
{
  "operationalLayers": [
    {
      "id": "VectorTile_3534",
      "layerType": "VectorTileLayer",
      "title": "World_Basemap",
      "styleUrl": "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer/resources/styles/root.json",
      "itemId": "bdf1eec3fa79456c8c7c2bb62f86dade",
      "visibility": true,
      "opacity": 1
    }
  ]
}
```
### baseMapLayer Example

```json
{
  "baseMapLayers": [
    {
      "id": "VectorTile_3534",
      "layerType": "VectorTileLayer",
      "title": "World_Basemap",
      "styleUrl": "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer/resources/styles/root.json",
      "visibility": true,
      "opacity": 1
    }
  ],
  "title": "VectorTileLayer as BaseMap",
  "elevationLayers": [
    {
      "id": "globalElevation",
      "listMode": "hide",
      "title": "Terrain3D",
      "url": "http://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
      "visibility": true,
      "layerType": "ArcGISTiledElevationServiceLayer"
    }
  ]
}
```

