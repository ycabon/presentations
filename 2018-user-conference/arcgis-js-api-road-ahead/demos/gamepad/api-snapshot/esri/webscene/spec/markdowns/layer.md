# layer

A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service. This object also contains geographic features and their attributes when used in a feature collection.

### Properties

| Property | Details
| --- | ---
| defaultVisibility | Default visibility of the layers in the map service.
| [definitionEditor](definitionEditor.md) | An object that provides interactive filters.
| [featureSet](featureSet.md) | A featureSet object containing the geometry and attributes of the features in the layer. Used with feature collections only.
| [field](field.md) | Information about each field in a layer. Used with feature collections.
| id | A string indicating the index position of the layer in the map service or feature collection.
| [layerDefinition](layerDefinition.md) | The layerDefinition object defines the attribute schema and drawing information for the layer.
| layerUrl | A string URL to a service that should be used for all queries against the layer. Used with hosted tiled map services on ArcGIS Online when there is an associated feature service that allows for queries.
| maxScale | Represents the maximum scale at which the layer definition will be applied.
| minScale | Represents the minimum scale at which the layer definition will be applied.
| parentLayerId | If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer.
| [popupInfo](popupInfo.md) | A popupInfo object defining the popup window content for the layer.
| showLegend | Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend.
| subLayer | Array of numeric values indicating the layer index for layers nested directly under the parent layer.
| subLayerIds | If the layer is a parent layer, it will have one or more sub layers included in an array.
| title | A user-friendly string title for the layer that can be used in a table of contents.



