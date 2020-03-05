# layerDefinition

An object that defines the attribute schema and drawing information for a layer drawn using client-side graphics.

**Referenced by:** [Building Scene Layer (BuildingSceneLayer)](buildingSceneLayer.md), [Building Scene Sublayer](buildingSceneLayer_sublayer.md), [CSV Layer (CSV)](csvLayer.md), [Feature Layer (ArcGISFeatureLayer)](featureLayer.md), [Image Service Layer (ArcGISImageServiceLayer)](imageServiceLayer.md), [Integrated Mesh Layer (IntegratedMeshLayer)](integratedMeshLayer.md), [layer](layer.md), [PointCloud Layer](pointCloudLayer.md), [Scene Layer (ArcGISSceneServiceLayer)](sceneLayer.md), [table](table.md)

### Properties

| Property | Details
| --- | ---
| allowGeometryUpdates | Boolean value indicating whether the geometry of the features in the layer can be edited.
| capabilities | A comma separated list of supported capabilities, e.g. `Query,Editing`.
| copyrightText | String value for the copyright text information for the layer.
| currentVersion | Numeric value indicating the server version of the layer.
| defaultVisibility | Boolean value indicating whether the layer's visibility is turned on.
| definitionExpression | SQL-based definition expression string that narrows the data to be displayed in the layer.
| description | String value of the layer as defined in the map service.
| displayField | A string value that summarizes the feature.
| [drawingInfo](drawingInfo.md) | Contains the drawing and labeling information.
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| extent | An object defining the rectangular area.<br>Must be one of the following values:<ul><li>[extent](extent.md)<br>This object defines the bounding geometry given the lower-left and upper-right corners of the bounding box.</li><li>`Null`</li></ul>
| [featureReduction](featureReduction_select.md) | An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.
| [fields](field.md) | An array of field objects containing information about the attribute fields for the feature collection or layer.
| [filters](pointCloudFilter.md) | Filters for PointCloud layers
| geometryType | A string defining the type of geometry. Possible geometry types are: `esriGeometryPoint`, `esriGeometryMultipoint`, `esriGeometryPolyline`, `esriGeometryPolygon`, and `esriGeometryEnvelope`.
| globalIdField | The unique identifier for a feature or table row within a geodatabase.
| hasAttachments | Indicates whether attachments should be loaded for the layer.
| hasM | Boolean value indicating whether layer has M values.
| hasStaticData | Boolean value indicating whether data changes. True if it does not.
| hasZ | Boolean value indicating whether layer has Z values.
| htmlPopupType | String value indicating the HTML popup type.<br>If property is present, must be one of the following values: <ul><li>`esriServerHTMLPopupTypeAsHTMLText`</li><li>`esriServerHTMLPopupTypeAsURL`</li><li>`esriServerHTMLPopupTypeNone`</li></ul>
| id | The identifier assigned to the layer.
| isDataVersioned | Boolean value indicating whether the data is versioned.
| maxRecordCount | Numeric value indicating tbe maximum number of records that will be returned at once for a query.
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.
| name | Contains a unique name for the layer that can be displayed in a legend.
| objectIdField | Indicates the name of the object ID field in the dataset.
| overrideSymbols | Dictates whether a client can support having an end user modify symbols on individual features.
| [rangeInfos](rangeInfo.md) | Indicates range information
| [source](source.md) | An object indicating the layerDefinition's layer source.
| [spatialReference](spatialReference.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry.
| supportedQueryFormats | String value indicating the output formats that are supported in a query.
| supportsAdvancedQueries | Boolean value indicating whether the layer supports orderByFields in a query operation.
| supportsAttachmentsByUploadId | Boolean value indicating whether the layer supports uploading attachments with the Uploads operation. This can then be used in the Add Attachment and Update Attachment operations.
| supportsCalculate | Boolean value indicating whether the layer supports the Calculate REST operation when updating features.
| supportsRollbackOnFailureParameter | Boolean value indicating whether the layer supports rolling back edits made on a feature layer if some of the edits fail.
| supportsStatistics | Boolean value indicating whether feature layer query operations support statistical functions.
| supportsValidateSql | Boolean value indicating whether the validateSQL operation is supported across a feature service layer.
| type | Indicates whether the layerDefinition applies to a Feature Layer or a Table.<br>If property is present, must be one of the following values: <ul><li>`Feature Layer`</li><li>`Table`</li></ul>
| typeIdField | Contains the name of the field holding the type ID for the features.
| [types](type.md) | Contains information about an attribute field.
| visibilityField | String value indicating the attribute field that is used to control the visibility of a feature. If applicable, when rendering a feature the client should use this field to control visibility. The field's values are 0 = do not display, 1 = display.



