# template

Templates describe features that can be created in a layer. They are generally used with feature collections and editable web-based CSV layers. Templates are not used with ArcGIS feature services as these already have templates defined in the service. They are also defined as properties of the layer definition when there are no defined types. Otherwise, templates are defined as properties of the types.

**Referenced by:** [type](type.md)

### Properties

| Property | Details
| --- | ---
| description | A string value containing a detailed description of the template.
| drawingTool | An optional string that can define a client-side drawing tool to be used with this feature.<br>If property is present, must be one of the following values: <ul><li>`esriFeatureEditToolAutoCompletePolygon`</li><li>`esriFeatureEditToolCircle`</li><li>`esriFeatureEditToolDownArrow`</li><li>`esriFeatureEditToolEllipse`</li><li>`esriFeatureEditToolFreehand`</li><li>`esriFeatureEditToolLeftArrow`</li><li>`esriFeatureEditToolLine`</li><li>`esriFeatureEditToolNone`</li><li>`esriFeatureEditToolPoint`</li><li>`esriFeatureEditToolPolygon`</li><li>`esriFeatureEditToolRectangle`</li><li>`esriFeatureEditToolRightArrow`</li><li>`esriFeatureEditToolText`</li><li>`esriFeatureEditToolTriangle`</li><li>`esriFeatureEditToolUpArrow`</li></ul>
| name | A string containing a user-friendly name for the template.
| [prototype](feature.md) | A feature object representing a prototypical feature for the template.


### Additional information

drawingTool strings: esriFeatureEditToolPolygon, esriFeatureEditToolTriangle, esriFeatureEditToolRectangle, esriFeatureEditToolLeftArrow, esriFeatureEditToolRightArrow, esriFeatureEditToolEllipse, esriFeatureEditToolUpArrow, esriFeatureEditToolDownArrow, esriFeatureEditToolCircle, esriFeatureEditToolFreehand, esriFeatureEditToolLine, esriFeatureEditToolText, esriFeatureEditToolPoint

### Example

```json
{
  "template": {
    "drawingTool": "esriFeatureEditToolFreehand",
    "description": "Groomed cross-country skiing trails",
    "name": "X-country skiing",
    "prototype": {
      "attributes": {
        "VISIBLE": 1,
        "TITLE": "Cross-country skiing",
        "TYPEID": 5
      }
    }
  }
}
```

