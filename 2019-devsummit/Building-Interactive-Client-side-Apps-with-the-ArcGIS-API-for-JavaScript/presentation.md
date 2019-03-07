<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Building Interactive Client-side Apps</h1>
<h2 style="text-align: left; font-size: 60px;">with the ArcGIS API for JavaScript</h2>
<p style="text-align: left; font-size: 30px;">Yann Cabon | Richie Carmichael</p>
<p style="text-align: left; font-size: 30px;"><a href="https://github.com/ycabon">@ycabon</a> | <a href="https://github.com/richiecarmichael">@richiecarmichael</a></p>
    <p style="text-align: left; font-size: 30px;">slides: <a href=""><code>TODO</code></a></p>

---

## Agenda - Yann

- Client-side APIs in 4.11
- Building interactive charts
- Adding drag-n-drop and export back.

---

## Client-side APIs in 4.11 - Yann

- Client-side layers
  - CSVLayer
  - GeoJSONLayer
  - FeatureLayer with collection
- Client-side query
- Filter & Effect

---

### Client-side layers - Yann

CSVLayer

---

### Client-side layers - Yann

GeoJSON

---

### Client-side layers - Yann

FeatureLayer with collection

---

### Client-side query - Yann

query features
query by distance
demo

---

### Introducting TimeInfo
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

### Introducting TimeExtent
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

### Filter & Effect - Yann

---

### App - Yann

Make a chart using clienside statistics and draw. ?

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-esri.png" -->

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-rating.png" -->