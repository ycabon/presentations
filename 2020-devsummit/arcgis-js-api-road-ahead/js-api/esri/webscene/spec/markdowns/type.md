# type

Contains information about an attribute field.

**Referenced by:** [layerDefinition](layerDefinition.md)

### Properties

| Property | Details
| --- | ---
| domains | A comma-delimited series of domain objects for each domain in the type.
| id | A unique string or numerical ID for the type.
| name | A user-friendly name for the type.
| [templates](template.md) | Defined as a property of the layer definition when there are no types defined; otherwise, templates are defined as properties of the types.


### Example

```json
{
  "types": {
    "id": "1",
    "name": "Active",
    "domains": {
      "status": {
        "type": "inherited"
      },
      "hazardous_issue": {
        "type": "inherited"
      },
      "severity": {
        "type": "inherited"
      }
    },
    "templates": [
      {
        "name": "Active",
        "description": "",
        "prototype": {
          "attributes": {
            "occurence_local": null,
            "date_resolved": null,
            "issue_id": null,
            "issue_name": null,
            "empname_reporting": null,
            "emp_id": null,
            "job_title": null,
            "hazard_date": null,
            "status": "1",
            "hazardous_issue": null,
            "severity": null,
            "number_injuries": null,
            "comments_injuries": null,
            "comments_hazard": null,
            "issued_resolved": null,
            "comments_resolve": null
          }
        },
        "drawingTool": "esriFeatureEditToolPoint"
      }
    ]
  }
}
```

