# CSV Layer (CSV)

The CSV layer type references a CSV or TXT file from a publically-accessible web server. It then dynamically loads into the scene at run time. The CSV layer will maintain a reference to the CSV resource.

**Referenced by:** [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| columnDelimiter | A string defining the character used to separate columns in a CSV file.<br>If property is present, must be one of the following values: <ul><li>`\t` (tab)</li><li>` ` (space)</li><li>`,` (comma)</li><li>`;` (semicolon)</li><li>`|` (pipe)</li></ul>
| disablePopup | Indicates whether to allow a client to ignore popups defined by the service item.
| id | A unique identifying string for the layer.
| layerDefinition | Additional properties that define drawing information and other configurations for the layer.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type.<br>Value of this property must be `CSV`
| listMode | To show or hide the layer in the layer list<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`show`</li></ul>
| [locationInfo](locationInfo.md) | A locationInfo object defining how location information will be retrieved from a CSV file.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of popup windows when you click or query a feature.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| screenSizePerspective | Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.
| showLabels | Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | The URL to the layer.
| visibility | Boolean property determining whether the layer is initially visible in the web scene.


### layerDefinition properties

| Property | Details
| --- | ---
| definitionExpression | SQL-based definition expression string that narrows the data to be displayed in the layer.
| [drawingInfo](drawingInfo.md) | Contains the drawing and labeling information.
| [elevationInfo](elevationInfo.md) | Elevation info defines how features are aligned to ground or other layers.
| [featureReduction](featureReduction_select.md) | An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.
| [fields](field.md) | An array of field objects containing information about the attribute fields for the feature collection or layer.
| maxScale | Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.
| minScale | Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.


### Example

```json
{
  "operationalLayers": [
    {
      "id": "15844915609-layer-0",
      "layerType": "CSV",
      "title": "earthquake",
      "url": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",
      "columnDelimiter": ",",
      "opacity": 1,
      "visibility": true,
      "layerDefinition": {
        "drawingInfo": {
          "renderer": {
            "type": "simple",
            "symbol": {
              "type": "PointSymbol3D",
              "symbolLayers": [
                {
                  "material": {
                    "color": [
                      238,
                      69,
                      0
                    ],
                    "transparency": 50
                  },
                  "type": "Icon",
                  "resource": {
                    "primitive": "circle"
                  },
                  "size": 17.25,
                  "outline": {
                    "color": [
                      255,
                      255,
                      255
                    ],
                    "size": 0.5
                  }
                }
              ]
            }
          }
        }
      }
    }
  ]
}
```

