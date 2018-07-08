# popupInfo

Defines the look and feel of popup windows when a user clicks or queries a feature.

### Properties

| Property | Details
| --- | ---
| description | A string that appears in the body of the popup window as a description. It is also possible to specify the description as HTML-formatted content.<br>Must be one of the following values:<ul><li>`String`</li><li>`Null`</li></ul>
| [expressionInfos](popupExpressionInfo.md) | List of Arcade expressions added to the pop-up.
| [fieldInfos](fieldInfo.md) | Array of fieldInfo information properties. This information is provided by the service layer definition.
| [layerOptions](popupLayerOptions.md) | Additional options that can be defined for the popup layer.
| [mediaInfos](mediaInfo.md) | Array of various mediaInfo to display. Can be of type `image`, `piechart`, `barchart`, `columnchart`, or `linechart`. The order given is the order in which it displays.
| [popupElements](popupElement.md) | An array of popupElement objects that represent an ordered list of popup elements.
| [relatedRecordsInfo](relatedRecordsInfo.md) | Indicates whether to enable related records if they exist on a layer.
| showAttachments | Indicates whether attachments will be loaded for feature layers that have attachments.
| title | A string that appears at the top of the popup window as a title.


### Example

```json
{
  "popupInfo": {
    "title": "Postcode status",
    "fieldInfos": [
      {
        "fieldName": "expression/expr1",
        "visible": true,
        "format": {
          "digitSeparator": true,
          "places": 0
        }
      },
      {
        "fieldName": "expression/expr2",
        "visible": true
      },
      {
        "fieldName": "ID",
        "label": "ID",
        "tooltip": "Identifier",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        },
        "stringFieldOption": "textbox"
      },
      {
        "fieldName": "relationships/0/Status",
        "label": "Status",
        "isEditable": false,
        "visible": true,
        "stringFieldOption": "textbox"
      },
      {
        "fieldName": "relationships/2/Postcode",
        "label": "Postcode",
        "isEditable": false,
        "visible": false,
        "stringFieldOption": "textbox"
      }
    ],
    "showAttachments": true,
    "relatedRecordsInfo": {
      "showRelatedRecords": true,
      "orderByFields": [
        {
          "field": "relationships/0/Identifier",
          "order": "asc"
        },
        {
          "field": "relationships/1/Status",
          "order": "desc"
        }
      ]
    },
    "mediaInfos": [
      {
        "title": "Chart stats",
        "type": "barchart",
        "caption": "For a better idea...",
        "value": {
          "fields": [
            "relationships/0/Pledge"
          ],
          "tooltipField": "relationships/2/Official"
        }
      },
      {
        "type": "barchart",
        "title": "{pop2000} / 2 = {expression/expr4}",
        "value": {
          "fields": [
            "expression/expr4",
            "pop2000"
          ]
        }
      }
    ],
    "popupElements": [
      {
        "type": "text"
      },
      {
        "type": "fields"
      },
      {
        "type": "media"
      },
      {
        "type": "attachments"
      }
    ],
    "expressionInfos": [
      {
        "name": "expr1",
        "title": "Population (Expr)",
        "expression": "$feature.pop2000",
        "returnType": "number"
      },
      {
        "name": "expr2",
        "title": "Name (Abbr) (Expr)",
        "expression": "$feature.state_name + ' (' + $feature.state_abbr + ')'",
        "returnType": "string"
      }
    ]
  }
}
```

