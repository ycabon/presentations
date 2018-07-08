# definitionEditor

The definitionEditor stores interactive filters at the same level as layerDefinition.

### Properties

| Property | Details
| --- | ---
| [inputs](input.md) | An array of input objects.
| parameterizedExpression | A string value representing the where clause for the interactive filter.


### Example

```json
{
  "definitionEditor": {
    "parameterizedExpression": "AREA BETWEEN {0} AND {1} or VALUE = 23 or NAME LIKE '{2}%'",
    "inputs": [
      {
        "hint": "Enter square miles.",
        "prompt": "Area between",
        "parameters": [
          {
            "type": "esriFieldTypeInteger",
            "fieldName": "AREA",
            "parameterId": 0,
            "defaultValue": 10
          },
          {
            "type": "esriFieldTypeInteger",
            "fieldName": "AREA",
            "parameterId": 1,
            "defaultValue": 100
          }
        ]
      },
      {
        "hint": "Enter your name.",
        "prompt": "Name starts with",
        "parameters": [
          {
            "type": "esriFieldTypeString",
            "fieldName": "NAME",
            "parameterId": 2,
            "defaultValue": "Jack"
          }
        ]
      }
    ]
  }
}
```

