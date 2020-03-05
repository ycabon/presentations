# authoringInfo

The authoringInfo is an object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Properties for color/size/transparency sliders, theme selection, classification information, and additional properties are saved within this object.

**Referenced by:** [ClassBreaks Renderer](classBreaksRenderer.md), [Raster ClassBreaks Renderer](rasterClassBreaksRenderer.md), [Raster UniqueValue Renderer](rasterUniqueValueRenderer.md), [Simple Renderer](simpleRenderer.md), [UniqueValue Renderer](uniqueValueRenderer.md)

### Properties

| Property | Details
| --- | ---
| classificationMethod | Used for classed color or size. The default value is `esriClassifyManual`.<br>If property is present, must be one of the following values: <ul><li>`esriClassifyDefinedInterval`</li><li>`esriClassifyEqualInterval`</li><li>`esriClassifyManual`</li><li>`esriClassifyNaturalBreaks`</li><li>`esriClassifyQuantile`</li><li>`esriClassifyStandardDeviation`</li></ul>
| [colorRamp](colorRamp.md) | A colorRamp object is used to specify a range of colors that are applied to a group of symbols.
| [field1](field_authoringInfo.md) | Contains information about an attribute field relating to Relationship renderers.
| [field2](field_authoringInfo.md) | Contains information about an attribute field relating to Relationship renderers.
| fields | An array of string values representing field names used for creating predominance renderers.
| focus | Optional. Used for Relationship renderer. If not set, the legend will default to being square.<br>If property is present, must be one of the following values: <ul><li>`HH`</li><li>`HL`</li><li>`LH`</li><li>`LL`</li></ul>
| lengthUnit | Unit used in user interfaces to display world/map sizes and distances<br>If property is present, must be one of the following values: <ul><li>`centimeters`</li><li>`decimal-degrees`</li><li>`decimeters`</li><li>`feet`</li><li>`inches`</li><li>`kilometers`</li><li>`meters`</li><li>`miles`</li><li>`millimeters`</li><li>`nautical-miles`</li><li>`yards`</li></ul>
| numClasses | Number of classes to be associated with the relationship. Used for Relationship renderer.
| standardDeviationInterval | Use this property if the classificationMethod is `esriClassifyStandardDeviation`.<br>If property is present, must be one of the following values: <ul><li>`0.25`</li><li>`0.33`</li><li>`0.5`</li><li>`1`</li></ul>
| type | Type:`String`<br>If property is present, must be one of the following values: <ul><li>`classedColor`</li><li>`classedSize`</li><li>`predominance`</li><li>`relationship`</li><li>`univariateColorSize`</li></ul>
| [visualVariables](authoringInfo_visualVariable.md) | An array of visualVariable objects containing additional information needed when authoring the renderer.


### Additional information

The authoringInfo object is not required with a renderer. It is only used if rendering was generated using the Scene Viewer rendering tools. All snippets provided below show a portion of what is contained within `authoringInfo`. Please refer to the sample snippets in the [authoringInfo visual variable](authoringInfo_visualVariable.md) object for additional help.

### Classed Size Renderer (Option 1) Example

```json
{
  "authoringInfo": {
    "type": "classedSize",
    "classificationMethod": "esriClassifyNaturalBreaks"
  }
}
```
### Classed Size Renderer (Option 2) Example

```json
{
  "authoringInfo": {
    "type": "classedSize",
    "classificationMethod": "esriClassifyStandardDeviation",
    "standardDeviationInterval": 0.5
  }
}
```
### Classed Color Renderer (Option 1) Example

```json
{
  "authoringInfo": {
    "type": "classedColor",
    "classificationMethod": "esriClassifyNaturalBreaks"
  }
}
```
### Classed Color Renderer (Option 2) Example

```json
{
  "authoringInfo": {
    "type": "classedColor",
    "classificationMethod": "esriClassifyStandardDeviation",
    "standardDeviationInterval": 0.5
  }
}
```
### Predominance Renderer Example

```json
{
  "authoringInfo": {
    "type": "predominance",
    "fields": [
      "COST",
      "DOLLARS",
      "PRICE"
    ]
  }
}
```
### Univariate Color Size Renderer Example

```json
{
  "authoringInfo": {
    "type": "univariateColorSize",
    "visualVariables": [
      {
        "type": "sizeInfo",
        "minSliderValue": 1,
        "maxSliderValue": 1000
      },
      {
        "type": "colorInfo",
        "minSliderValue": 1,
        "maxSliderValue": 1000,
        "theme": "high-to-low"
      }
    ]
  }
}
```
### Relationship Renderer Example

```json
{
  "authoringInfo": {
    "classificationMethod": "esriClassifyQuantile",
    "field1": {
      "field": "VOTE_TURNOUT",
      "classBreakInfos": [
        {
          "minValue": 1.0844,
          "maxValue": 54.0946
        },
        {
          "minValue": 54.0946,
          "maxValue": 4083.8235
        }
      ]
    },
    "field2": {
      "field": "MP06026a_B",
      "normalizationField": "TOTPOP_CY",
      "classBreakInfos": [
        {
          "minValue": 0.101322,
          "maxValue": 0.197619
        },
        {
          "minValue": 0.197619,
          "maxValue": 0.266094
        }
      ]
    },
    "focus": "HH",
    "numClasses": 2,
    "type": "relationship"
  }
}
```

