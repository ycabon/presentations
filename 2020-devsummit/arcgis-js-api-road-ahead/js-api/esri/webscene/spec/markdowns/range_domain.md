# rangeDomain

Range domain specifies a range of valid values for a field.

**Referenced by:** [domain](domain.md)

### Properties

| Property | Details
| --- | ---
| name | The domain name.
| range | The first element is the minValue and the second element is the maxValue.
| type | String value representing the domain type.<br>Value of this property must be `range`


### Example

```json
{
  "domain": {
    "type": "range",
    "name": "Measured Length",
    "range": [
      1,
      10000
    ]
  }
}
```

