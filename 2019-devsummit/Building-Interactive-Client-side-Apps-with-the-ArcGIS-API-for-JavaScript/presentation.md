<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Building Interactive Client-side Apps</h1>
<h2 style="text-align: left; font-size: 60px;">with the ArcGIS API for JavaScript</h2>
<p style="text-align: left; font-size: 30px;">Yann Cabon | Richie Carmichael</p>
<p style="text-align: left; font-size: 30px;"><a href="https://github.com/ycabon">@ycabon</a> | <a href="https://github.com/richiecarmichael">@richiecarmichael</a></p>
    <p style="text-align: left; font-size: 30px;">slides: <a href=""><code>TODO</code></a></p>

---

## Agenda

- Client-side APIs in 4.11
- Building interactive charts

---

## Client-side APIs in 4.11

- Client-side layers
  - CSVLayer
  - GeoJSONLayer
  - FeatureLayer with collection
- Client-side query
- Filter & Effect

---

### Client-side layers - CSVLayer

```ts
const new CSVLayer({
  url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",
  copyright: "USGS Earthquakes",
  // SR in which the data will be stored
  spatialReference: { wkid: 102100 },
  delimiter: ",",
  latitudeField: "lat",
  longitudeField: "lon",
  // defaults to "__OBJECTID"
  objectIdField: "myOid"
})
```

[API Reference](http://bzh.esri.com/javascript/latest/api-reference/esri-layers-CSVLayer.html)
| [Sample](http://bzh.esri.com/javascript/latest/sample-code/layers-csv/index.html)
| [Plenary Demo](https://ycabon.github.io/2018-devsummit-plenary/2-hurricanes.html)

---

### Client-side layers - CSVLayer - Tips

- specify the layer's spatial reference
- pass by a blob url

```ts
const csv = `
first_name|Sales|latitude|Longitude
Yann|0|40.4187499|20.5535753
Richie|9001|0|0
`;
const blob = new Blob([csv], {
  type: "plain/text"
});
let url = URL.createObjectURL(blob);

const layer = new CSVLayer({
  url: ""
});

await layer.load();

URL.revokeObjectURL(url);
url = null;
```

---

### Client-side layers - FeatureLayer

```ts
const layer = new FeatureLayer({
  source: [
    new Graphic({ attributes: { myOid: 1 }, geometry: { ... } })
    new Graphic({ attributes: { myOid: 2 }, geometry: { ... } })
    new Graphic({ attributes: { myOid: 3 }, geometry: { ... } })
  ],

  // can be inferred from geometries
  geometryType: "point",
  // can be inferred from geometries
  spatialReference: { wkid: 2154 },
  // can be inferred from fields w/ field.type "oid"
  objectIdField: "myOid",

  fields: [
    new Field({
      name: "myOid",
      type: "oid"
    })
  ]
})
```

Supports data in any spatial reference

[Sample](https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/index.html)

---

### Client-side layers - GeoJSON

```ts
const geoJSONLayer = new GeoJSONLayer({
  url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
  copyright: "USGS Earthquakes"
});
```

[API Reference](http://bzh.esri.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html)
| [Sample](http://bzh.esri.com/javascript/latest/sample-code/layers-geojson/index.html)
| [Plenary Demo](https://ycabon.github.io/2019-devsummit-plenary/2_geojson.html)

---

### Client-side layers - GeoJSON

- Implementation of the spec [`rfc7946`](https://tools.ietf.org/html/rfc7946)
- Support for `"Feature"` and `"FeatureCollection"`
- Support for fixing ring winding order
- Not supported:
  - mixed geometry types for consistency with other layers.
  - `crs` object - only geographic coordinates using WGS84 datum (long/lat)
  - No Antimeridian crossing

---

### Client-side layers - GeoJSON

- Not supported, maybe pile:
  - `"GeometryCollection"` object
  - TopoJSON
  - Feature `id` as `string`
- Not supported yet but will be:
  - Export back to GeoJSON
  - updating features using GeoJSON, only through `applyEdits()`
  - Loading a `GeoJSONLayer` using a `GeoJSON` object
  - WebMap spec
  - `queryParameters` and `refresh()`

---

### Client-side layers - GeoJSON - Tips

- Prefer `GeoJSON` over `CSV`. `CSV` inference is CPU heavy.
- specify the layer's spatial reference
- Limitation at 4.11: create a blob url from GeoJSON object

```ts
const geojson = `
{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-100, 40] },
      properties: { name: "none" }
    }
  ]
}
`;

const blob = new Blob([JSON.stringify(geojson)], {
  type: "application/json"
})

let url = URL.createObjectURL(blob);

const layer = new GeoJSONLayer({
  url
});

await layer.load();

URL.revokeObjectURL(url);
url = null;
```

---

### Client-side layers

- Each implementation uses the client-side query engine
- Pick what's best for your usage.
- *"With [`GeoJSON`](./demos/geojson_or_featurelayer/geojson.html) I ditch my [`FeatureLayer`](./demos/geojson_or_featurelayer/featureLayer.html)"* NO!!!

---

### Client-side query - Yann

query features
query by distance
demo

---

### TimeInfo

```js
var featureLayer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/FeatureServer/0"
});
featureLayer.load().then(function(){
    var timeInfo = featureLayer.timeInfo;

    console.log(`
        Start Field: ${timeInfo.startField}       // date_
        End Field:   ${timeInfo.endField}         // null
        Time Extent:
            Start:   ${timeInfo.timeExtent.start} // Sat Jan 03 1970 16:00:00 GMT-0800 (Pacific Standard Time)
            End:     ${timeInfo.timeExtent.end}   // Wed May 27 2009 17:00:00 GMT-0700 (Pacific Daylight Time)
    `);
});
```

---

### TimeExtent

```js
var timeExtent = new TimeExtent({
    start: new Date(2000, 0, 1),
    end: new Date(2007, 0, 1)
});
```

```js
var query = {
  timeExtent: {
    start: new Date(2000, 0, 1),
    end: new Date(2007, 0, 1)
  },
  where: "mag >= 5"
};
```

---

### Using Time-enabled Queries

```js
// Server-side queries.
featureLayer.queryFeatureCount(query).then(function(count){
  console.log(`${count} quakes found.`);  // e.g. 9235 quakes found.
});
```

```js
// Client-side queries.
featureLayerView.queryFeatureCount(query).then(function(count){
  console.log(`${count} quakes found.`);  // e.g. 9235 quakes found.
});
```

```js
// Display filters.
featureLayerView.filter = query;
```

```js
// Display effects.
quakeView.effect = {
    filter: query
};
```

---

### Client-side query

[demo](https://richiecarmichael.github.io/quake-map/index.html)

---

```js
view.on("pointer-move", function(event){
    if (!quakeView) { return; }
    event.stopPropagation();

    const query = featureLayerQuake.createQuery();
    query.timeExtent = {
        start: startTime,
        end: endTime
    };
    query.geometry = view.toMap(event);
    query.distance = 500;
    query.units = "kilometers";
    query.returnQueryGeometry = true;

    quakeView.queryFeatures(query).then(function(results) {
        // Draw selection circle.
        view.graphics.removeAll();
        view.graphics.add(new Graphic({
            geometry: results.queryGeometry,
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    color: [255, 255, 255, 0.5],
                    width: 0.5
                }
            }
        }));

        // Highlight selected Earthquakes.
        if (highlight) {
            highlight.remove();
            highlight = null;
        }
        highlight = quakeView.highlight(results.features);

        // Highlight selected Earthquakes in chart.
        d3.selectAll("#dots circle").classed('highlight', false);
        results.features.forEach(function(feature){
            const dot = index[feature.attributes.OBJECTID];
            d3.select(dot).classed('highlight', true);
        });
    });
});
```

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-esri.png" -->

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-rating.png" -->