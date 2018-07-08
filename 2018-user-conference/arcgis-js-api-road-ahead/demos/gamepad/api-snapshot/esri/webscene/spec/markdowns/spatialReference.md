# spatialReference

The spatialReference object is located at the top level of the JSON hierarchy. In addition to this, it is also available within the operationalLayer and basemap objects.

Many predefined spatial references have already been defined and are available for use. A spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT). The default tolerance and resolution values for the associated coordinate system are used.

A spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret the z values of a geometry.

### Properties

| Property | Details
| --- | ---
| latestVcsWkid | (Optional) The current wkid value of the vertical coordinate system.
| latestWkid | (Optional) Identifies the current wkid value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'.
| vcsWkid | (Optional) The wkid value of the vertical coordinate system.
| wkid | The well-known ID (WKID) of the coordinate system. Specify either WKID or the well-known text (WKT) of the coordinate system.
| wkt | The well-known text (WKT) of the coordinate system. Specify either WKT or WKID of the coordinate system.


### Additional information

All operational layers in the scene are drawn or requested in the spatial reference of the basemap layers.

The **basemap** defines the spatial reference and tiling scheme of the scene. Each **baseMapLayer** must be in the same spatial reference and tiling scheme.



For a complete list of supported IDs and their corresponding definition strings, see:

[Projected Coordinate Systems Listing](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Projected_coordinate_systems/02r3000000vt000000/)

[Geographic Coordinate Systems Listing](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geographic_coordinate_systems/02r300000105000000/)

[Vertical Coordinate Systems Listing](http://resources.arcgis.com/en/help/rest/apiref/vcs.html)



Additional information regarding how web scenes work with geometry and spatial reference can be found on the Resource Center:

[ArcGIS Server REST API Geometry object](http://resources.arcgis.com/en/help/rest/apiref/geometry.html)

[Using spatial references](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Using_spatial_references/02r3000000qq000000/)

[Working with Geometry Objects](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Geometry_Objects/02r3000000n1000000/)

### Example

```json
{
  "spatialreference": {
    "wkid": 102100,
    "latestWkid": 3857
  }
}
```

