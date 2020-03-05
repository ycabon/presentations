# layer

A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service. This object also contains geographic features and their attributes when used in a feature collection.

**Referenced by:** [Map Service Layer (ArcGISMapServiceLayer)](mapServiceLayer.md), [Tiled Map Service Layer (ArcGISTiledMapServiceLayer)](tiledMapServiceLayer.md)

### Properties

| Property | Details
| --- | ---
| defaultVisibility | Default visibility of the layers in the map service.
| disablePopup | Indicates whether to allow a client to ignore the popups defined on the layer. The popupInfo object could be saved in the map or item.
| id | The layer id, as a numeric value.
| layerDefinition | Additional properties that define drawing information and other configurations for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerUrl | A URL to a service that should be used for all queries against the layer.
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| name | The name of the layer.
| parentLayerId | If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer.
| [popupInfo](popupInfo.md) | A popupInfo object defining the popup window content for the layer.
| showLabels | A Boolean indicating if the layer should display labels in client applications.
| showLegend | A Boolean indicating if the layer should be shown in the legend in client applications.
| subLayerIds | If the layer is a parent layer, it will have one or more sub layers included in an array.


### layerDefinition properties

| Property | Details
| --- | ---
| definitionExpression | SQL-based definition expression string that narrows the data to be displayed in the layer.
| [drawingInfo](drawingInfo.md) | Contains the drawing and labeling information.
| [source](source.md) | An object indicating the layerDefinition's layer source.



