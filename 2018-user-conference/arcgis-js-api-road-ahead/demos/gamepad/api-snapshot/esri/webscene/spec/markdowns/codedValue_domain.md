# codedValue

The coded value domain includes both the actual value that is stored in a database and a description of what the code value means.

### Properties

| Property | Details
| --- | ---
| [codedValues](codedValue.md) | A set of valid values with unique names.
| name | The domain name.
| type | String value representing the domain type.<br>Value of this property must be `codedValue`


### Example

```json
{
  "codedValue": {
    "type": "codedValue",
    "name": "Material",
    "codedValues": [
      {
        "name": "Aluminum",
        "code": "AL"
      },
      {
        "name": "Copper",
        "code": "CU"
      },
      {
        "name": "Steel",
        "code": "STEL"
      },
      {
        "name": "Not Applicable",
        "code": "NA"
      }
    ]
  }
}
```

