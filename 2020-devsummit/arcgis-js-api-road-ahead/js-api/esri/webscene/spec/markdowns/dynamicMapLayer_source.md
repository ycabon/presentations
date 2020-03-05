# Dynamic map layer

A dynamic map layer refers to a layer in the current map service. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).

**Referenced by:** [source](source.md)

### Properties

| Property | Details
| --- | ---
| gdbVersion | If applicable, specify this to use an alternate geodatabase version.
| mapLayerId | The current map layer's id.
| type | A string value indicating the type.<br>Value of this property must be `mapLayer`


### Example

```json
{
  "source": {
    "type": "mapLayer",
    "mapLayerId": 3,
    "gdbVersion": "SDE.dynamicLayers"
  }
}
```

