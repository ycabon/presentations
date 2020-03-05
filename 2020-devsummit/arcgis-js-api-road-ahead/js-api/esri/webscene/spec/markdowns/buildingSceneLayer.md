# Building Scene Layer (BuildingSceneLayer)

The BuildingSceneLayer is a layer type designed for on-demand streaming and displaying building data.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| activeFilterId | specifies the id of the currently active filter
| [filters](buildingSceneLayer_filter.md) | A list of filters available for this layer. Overrides filters defined on the service.
| id | A unique identifying string for the layer.
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerDefinition | Additional properties that can define an elevation offset for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type.<br>Value of this property must be `BuildingSceneLayer`
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| [sublayers](buildingSceneLayer_sublayer.md) | An array of objects specifying overrides for building scene layer sublayers
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the service.
| visibility | Boolean property determining whether the layer is initially visible in the web scene


### layerDefinition properties

| Property | Details
| --- | ---
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.


### Example

Sample web scene showing the Building Scene Layer as an operationalLayer

```json
{
  "operationalLayers": [
    {
      "id": "14c4ab705ea-layer24",
      "opacity": 1,
      "title": "Building",
      "url": "https://peach.esri.com/server/rest/services/Hosted/NashvilleAirport_ESMerged/SceneServer/layers/0",
      "visibility": true,
      "layerType": "BuildingSceneLayer",
      "layerDefinition": {
        "elevationInfo": {
          "mode": "absoluteHeight",
          "offset": 100
        }
      },
      "sublayers": [
        {
          "id": 1,
          "title": "Overview",
          "visibility": true,
          "disablePopup": false,
          "layerDefinition": {
            "drawingInfo": {
              "renderer": {
                "type": "simple",
                "symbol": {
                  "type": "MeshSymbol3D",
                  "symbolLayers": [
                    {
                      "material": {
                        "color": [
                          192,
                          192,
                          255
                        ]
                      },
                      "type": "Fill"
                    }
                  ]
                }
              }
            }
          }
        },
        {
          "id": 3,
          "title": "Walls",
          "visibility": false
        }
      ]
    }
  ]
}
```

