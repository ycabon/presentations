# AuthoringInfo Visual Variable

This visual variable pertains specifically to [authoringInfo](authoringInfo.md) and is different from visual variables directly on the [renderer](renderer.md).

**Referenced by:** [authoringInfo](authoringInfo.md)

### Properties

| Property | Details
| --- | ---
| endTime | A Unix stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.
| field | The attribute field the user chose in the Smart Mapping gallery. Must be the same as in either `startTime` or `endTime`.
| maxSliderValue | A numeric value indicating the maximum value displayed.
| minSliderValue | A numeric value indicating the minimum value displayed.
| startTime | A Unix time stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.
| style | (This property is used for comparison rendering). It is used to map the ratio between two numbers. It is possible to express that relationship as percentages, simple ratios, or an overall percentage.<br>If property is present, must be one of the following values: <ul><li>`percent`</li><li>`percentTotal`</li><li>`ratio`</li></ul>
| theme | Theme to be used only when working with visual variables of type `colorInfo`. Default is `high-to-low`.<br>If property is present, must be one of the following values: <ul><li>`above-and-below`</li><li>`centered-on`</li><li>`extremes`</li><li>`high-to-low`</li></ul>
| type | A string value specifying the type of renderer's visual variable.<br>If property is present, must be one of the following values: <ul><li>`colorInfo`</li><li>`rotationInfo`</li><li>`sizeInfo`</li><li>`transparencyInfo`</li></ul>
| units | (This property is used only with age renderers.) Units for startTime and endTime.<br>If property is present, must be one of the following values: <ul><li>`days`</li><li>`hours`</li><li>`minutes`</li><li>`months`</li><li>`seconds`</li><li>`years`</li></ul>


### Attribute Transparency Example

Allows displaying features with different levels of opacity.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "transparencyInfo",
        "minSliderValue": 0.0003,
        "maxSliderValue": 23.8951
      }
    ]
  }
}
```
### Continuous Size Renderer Example

If a layer contains date values, it is possible to use a sequence of proportional symbols to view dates sequentially on a scene.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "sizeInfo",
        "minSliderValue": 1,
        "maxSliderValue": 14928.5396
      }
    ]
  }
}
```
### Continuous Color Renderer Example

If a layer contains date values, it is possible to use color to view data sequentially from new to old or before and after a key date.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "colorInfo",
        "minSliderValue": 1,
        "maxSliderValue": 14928.5396,
        "theme": "high-to-low"
      }
    ]
  }
}
```
### Age-Size Renderer Example

If a layer contains date or time values, it is possible to use a sequence of proportional symbols to view the age of features. Age reflects the length of time (in seconds, minutes, hours, days, months, or years) from a start date or time to an end date or time.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "sizeInfo",
        "minSliderValue": -129.2625,
        "maxSliderValue": 234.7374,
        "units": "days",
        "startTime": "DATE",
        "endTime": 1471970511924,
        "field": "DATE"
      }
    ]
  }
}
```
### Age-Color Renderer Example

If a layer contains date or time values, it is possible to use color to represent the age of features. Age reflects the length of time (in seconds, minutes, hours, days, months, or years) from a start date or time to an end date or time.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "colorInfo",
        "minSliderValue": -129.2625,
        "maxSliderValue": 234.7374,
        "units": "days",
        "startTime": "DATE",
        "endTime": 1471970511924,
        "field": "DATE",
        "theme": "high-to-low"
      }
    ]
  }
}
```
### Compare Renderer (special color renderer) Example

This style allows mapping the ratio between two numbers and expresses that relationship as percentages, simple ratios, or overall percentage.

```json
{
  "authoringInfo": {
    "visualVariables": [
      {
        "type": "colorInfo",
        "minSliderValue": 0.0003858501658018686,
        "maxSliderValue": 23.89513157894737,
        "theme": "above-and-below",
        "style": "ratio"
      }
    ]
  }
}
```
### Predominance Renderer Example

This style uses transparency to show the relative strength of the predominant attribute for each feature in the layer. The strength, or degree, of predominance is calculated as a percentage of the total value of all the attributes for a given feature.

```json
{
  "authoringInfo": {
    "type": "predominance",
    "fields": [
      "COST",
      "DOLLARS",
      "PRICE"
    ],
    "visualVariables": [
      {
        "type": "transparencyInfo",
        "minSliderValue": 0,
        "maxSliderValue": 100
      }
    ]
  }
}
```

