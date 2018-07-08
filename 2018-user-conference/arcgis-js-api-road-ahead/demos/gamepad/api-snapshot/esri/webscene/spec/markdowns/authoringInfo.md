# authoringInfo

The authoringInfo is an object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Properties for color/size/transparency sliders, theme selection, classification information, and additional properties are saved within this object.

### Properties

| Property | Details
| --- | ---
| classificationMethod | Used for classed color or size. The default value is `esriClassifyManual`.<br>Must be one of the following values:<ul><li>`esriClassifyDefinedInterval`</li><li>`esriClassifyNaturalBreaks`</li><li>`esriClassifyEqualInterval`</li><li>`esriClassifyQuantile`</li><li>`esriClassifyStandardDeviation`</li><li>`esriClassifyManual`</li></ul>
| [colorRamp](colorRamp.md) | A colorRamp object is used to specify a range of colors that are applied to a group of symbols.
| fields | An array of string values representing field names used for creating predominance renderers.
| lengthUnit | Unit used in user interfaces to display world/map sizes and distances<br>Must be one of the following values:<ul><li>`inches`</li><li>`feet`</li><li>`yards`</li><li>`miles`</li><li>`nautical-miles`</li><li>`millimeters`</li><li>`centimeters`</li><li>`decimeters`</li><li>`meters`</li><li>`kilometers`</li><li>`decimal-degrees`</li></ul>
| standardDeviationInterval | Use this property if the classificationMethod is `esriClassifyStandardDeviation`.<br>Must be one of the following values:<ul><li>`1`</li><li>`0.5`</li><li>`0.33`</li><li>`0.25`</li></ul>
| type | Used in case of classed renderers.<br>Must be one of the following values:<ul><li>`classedSize`</li><li>`classedColor`</li><li>`predominance`</li><li>`univariateColorSize`</li></ul>
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

