# Scene Layer (ArcGISSceneServiceLayer)

The SceneLayer is a layer type designed for on-demand streaming and displaying large amounts of data in a SceneView. SceneLayers support two geometry types: Point and 3D Objects (e.g. buildings). The SceneLayer displays data published to a Scene Service. Scene Services can hold large volumes of features in an open format that is suitable for web streaming. The SceneLayer loads these features progressively, starting from coarse representations and refines them to higher detail as necessary for close-up views.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| disablePopup | disablePopups allows a client to ignore popups defined by the service item.
| id | A unique identifying string for the layer.
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerDefinition | A layerDefinition object defining the attribute schema and drawing information for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISSceneServiceLayer`
| listMode | To show or hide layers in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| path | For offline data, a path to a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.slpk`.
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of pop-up windows when you click or query a feature.
| screenSizePerspective | Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.
| showLabels | If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the service.
| visibility | Boolean property determining whether the layer is initially visible in the web scene


### layerDefinition properties

| Property | Details
| --- | ---
| definitionExpression | SQL-based definition expression string that narrows the data to be displayed in the layer.
| [drawingInfo](drawingInfo.md) | Contains the drawing and labeling information.
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| [featureReduction](featureReduction_select.md) | An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.
| [rangeInfos](rangeInfo.md) | Indicates range information


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

