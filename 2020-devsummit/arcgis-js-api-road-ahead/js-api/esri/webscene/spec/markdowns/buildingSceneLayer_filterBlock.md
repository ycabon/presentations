# Building Scene Layer Filter Block

A filter block defines what elements will be filtered with a specific filter mode.  To ensure performance on client applications, it is not recommended to declare multiple filter blocks with the same filter mode. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.

**Referenced by:** [Building Scene Layer Filter](buildingSceneLayer_filter.md)

### Properties

| Property | Details
| --- | ---
| filterExpression | SQL expression to select features that belong to this filter block.
| [filterMode](buildingSceneLayer_filterMode.md) | Filter mode defines how features are drawn. For example, the filter mode of a filter can be solid or wire frame.
| title | Title of the filter block.



