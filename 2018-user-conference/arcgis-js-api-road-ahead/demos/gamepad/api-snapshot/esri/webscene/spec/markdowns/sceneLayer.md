# Scene Layer (ArcGISSceneServiceLayer)

The SceneLayer is a layer type designed for on-demand streaming and displaying large amounts of data in a SceneView. SceneLayers support two geometry types: Point and 3D Objects (e.g. buildings). The SceneLayer displays data published to a Scene Service. Scene Services can hold large volumes of features in an open format that is suitable for web streaming. The SceneLayer loads these features progressively, starting from coarse representations and refines them to higher detail as necessary for close-up views.

### Properties

| Property | Details
| --- | ---
| disablePopup | disablePopups allows a client to ignore popups defined by the service item.
| id | A unique identifying string for the layer.
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| [layerDefinition](layerDefinition.md) | A layerDefinition object defining the attribute schema and drawing information for the layer.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISSceneServiceLayer`
| listMode | To show or hide layers in the layer list<br>Must be one of the following values:<ul><li>`show`</li><li>`hide`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of pop-up windows when you click or query a feature.
| screenSizePerspective | Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.
| showLabels | If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the service.
| visibility | Boolean property determining whether the layer is initially visible in the web scene


### Example

Live sample web scene showing the Scene Layer as an [operationalLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=40b3391c9cad4beca75155e79d42366d)

```json
{
  "operationalLayers": [
    {
      "id": "1598894cf8a-layer-1",
      "opacity": 1,
      "title": "Buildings Textured",
      "url": "http://tiles.arcgis.com/tiles/lVkj5PBOw7tRmIPU/arcgis/rest/services/sf_small/SceneServer/layers/0",
      "visibility": true,
      "layerType": "ArcGISSceneServiceLayer",
      "itemId": "44a4ce7c2d2048ddb0606f8ed2cdf293"
    }
  ]
}
```

