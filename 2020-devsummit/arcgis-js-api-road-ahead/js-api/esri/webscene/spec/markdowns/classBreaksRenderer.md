# ClassBreaks Renderer

A class breaks renderer symbolizes based on the value of some numeric attribute. The classBreakInfo define the values at which the symbology changes.

**Referenced by:** [renderer](renderer.md)

### Properties

| Property | Details
| --- | ---
| [authoringInfo](authoringInfo.md) | An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.
| [backgroundFillSymbol](polygonSymbol3D.md) | Supported only for polygon features.
| [classBreakInfos](classBreakInfo.md) | Array of classBreakInfo objects.
| defaultLabel | Label for the default symbol used to draw unspecified values.
| [defaultSymbol](symbol3D.md) | Symbol used when a value cannot be classified.
| field | Attribute field used for renderer.
| [legendOptions](rendererLegendOptions.md) | A legend containing one title, which is a string describing the renderer in the legend.
| minValue | The minimum numeric data value needed to begin class breaks.
| normalizationField | Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized.
| normalizationTotal | Used when normalizationType is percent-of-total, this number property contains the total of all data values.
| normalizationType | Determine how the data was normalized.<br>If property is present, must be one of the following values: <ul><li>`esriNormalizeByField`</li><li>`esriNormalizeByLog`</li><li>`esriNormalizeByPercentOfTotal`</li></ul>
| type | Specifies the type of renderer used.<br>Value of this property must be `classBreaks`
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.
| valueExpressionTitle | The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.
| [visualVariables](visualVariable.md) | An array of objects used to set rendering properties.



