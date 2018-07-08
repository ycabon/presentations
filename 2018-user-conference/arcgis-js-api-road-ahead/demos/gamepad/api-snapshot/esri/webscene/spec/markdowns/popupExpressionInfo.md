# popupExpressionInfo

Arcade expression added to the pop-up.

### Properties

| Property | Details
| --- | ---
| expression | The Arcade expression.
| name | Unique identifier for the expression.
| returnType | Return type of the Arcade expression, can be number or string. Defaults to string value. Number values are assumed to be `double`. This can be determined by the authoring client by executing the expression using a sample feature(s), although it can be corrected by the user. Knowing the returnType allows the authoring client to present fields in relevant contexts. For example, numeric fields in numeric contexts such as charts.<br>Must be one of the following values:<ul><li>`number`</li><li>`string`</li></ul>
| title | Title of the expression.


### Example

```json
{
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
```

