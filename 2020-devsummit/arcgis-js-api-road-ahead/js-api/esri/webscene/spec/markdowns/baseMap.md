# baseMap

The basemap provides geographic context to the map and scene.

**Referenced by:** [slide](slide.md), [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| [baseMapLayers](baseMapLayer.md) | An array of baseMapLayer objects defining the basemaps used in the web scene.
| [elevationLayers](elevationLayers.md) | <em>Deprecated, use `ground.layers` instead <a href="#elevationLayers"><sup>1</sup></a>.</em> An array of elevationLayer objects defining the basemaps used in the web scene.
| id | A unique identifying string for the basemap.
| title | Required string title for the basemap that can be used in a table of contents.


### Additional information

<a id="elevationlayers"><sup>1</sup></a>`elevationLayers` was a required property until 1.7

### Example

Live sample web scene showing the Imagery with Labels as a [baseMap](https://www.arcgis.com/home/webscene/viewer.html?webscene=5a57ef09b11f4cefbe317cdaf1cd31a2)

```json
{
  "baseMap": {
    "baseMapLayers": [
      {
        "id": "World_Imagery_5014",
        "title": "World Imagery",
        "layerType": "ArcGISTiledMapServiceLayer",
        "opacity": 1,
        "visibility": true,
        "url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
      },
      {
        "id": "World_Boundaries_and_Places_9730",
        "title": "World Boundaries and Places",
        "layerType": "ArcGISTiledMapServiceLayer",
        "isReference": true,
        "visibility": true,
        "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer"
      }
    ],
    "title": "Imagery with Labels"
  }
}
```

