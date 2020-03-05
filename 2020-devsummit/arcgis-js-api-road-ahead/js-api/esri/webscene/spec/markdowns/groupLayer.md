# Group Layer

GroupLayer provides the ability to organize several sublayers into one common layer. Suppose there are several FeatureLayers that all represent water features in different dimensions. For example, wells (points), streams (lines), and lakes (polygons). The GroupLayer provides the functionality to treat them as one layer called Water Features even though they are stored as separate feature layers.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| id | A unique identifying string for the layer
| layerType | String indicating the layer type<br>Value of this property must be `GroupLayer`
| [layers](operationalLayers.md) | list of child operationalLayers
| listMode | To show or hide the group layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| title | A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service
| visibility | Boolean property determining whether the layer is initially visible in the web scene
| visibilityMode | How visibility of children is affected:independent, exclusive, inherited<br>If property is present, must be one of the following values: <ul><li>`exclusive`</li><li>`independent`</li><li>`inherited`</li></ul>


### Example

Live sample web scene showing [groupLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=74ec7d6ca482442ba24f80b708aec67e)

```json
{
  "operationalLayers": [
    {
      "id": "scenarios",
      "layerType": "GroupLayer",
      "visibilityMode": "exclusive",
      "listMode": "show",
      "opacity": 1,
      "title": "Building Scenarios",
      "visibility": true,
      "layers": [
        {
          "id": "devA",
          "opacity": 1,
          "title": "Dev A Buildings",
          "url": "https://scenesampleserverdev.arcgis.com/arcgis/rest/services/Hosted/DevA_BuildingShell_Textured/SceneServer/layers/0",
          "visibility": true,
          "layerType": "ArcGISSceneServiceLayer",
          "itemId": "e3e09257b8e14872b56b4801b01e6c6e"
        },
        {
          "id": "devB",
          "opacity": 1,
          "title": "DevB Buildings",
          "url": "https://scenesampleserverdev.arcgis.com/arcgis/rest/services/Hosted/DevB_BuildingShell_Textured/SceneServer/layers/0",
          "visibility": false,
          "layerType": "ArcGISSceneServiceLayer",
          "itemId": "3e6ac251b62b4f02a58fd942f80fd369"
        }
      ]
    }
  ]
}
```

