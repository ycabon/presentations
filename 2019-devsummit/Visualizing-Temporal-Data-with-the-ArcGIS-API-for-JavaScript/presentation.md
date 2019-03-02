<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Visualizing Temporal Data</h1>
<h2 style="text-align: left; font-size: 60px;">with the ArcGIS API for JavaScript</h2>
<p style="text-align: left; font-size: 30px;">Yann Cabon | Richie Carmichael | Jeremy Bartley</p>
<p style="text-align: left; font-size: 30px;"><a href="https://github.com/ycabon">@ycabon</a> | <a href="https://github.com/richiecarmichael">@richiecarmichael</a></p>
    <p style="text-align: left; font-size: 30px;">slides: <a href=""><code>TODO</code></a></p>

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-2.png" -->

## Headline Here 2

* Bullet [points here](http://hakim.se).

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-3.png" -->

## Headline Here 3

* Bullet [points here](http://hakim.se).

---

### Slide Title

* A bullet

```ts
const view = new MapView();
```

---

## Agenda

- Time support in the JS API
- New APIs in 4.11
- Visualizing time using Arcade
- Visualizing time using Visual Variables

---

### Time support in ArcGIS

- Showing a webmap with time
- 3.x API

---

### Time support in 4.x - Roadmap

- What do we ship in 4.11:
  - Time metadata
    - TimeInfo
    - TimeExtent
  - Server-side queries
  - Client-side queries
  - Client-side filtering (display)
- Next
  - Image layers: TileLayer, MapImageLayer, ImageryLayer
  - New TimeSlider widget

---

### Time Metadata

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

### TimeInfo

![](./timeinfo.png)
- Temporal properties intended by the service publisher.
- Used by the API for building queries and other widgets.

---

### TimeExtent

![](./timeextent.png)
- Used by [TimeInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html) metadata and [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-Query.html) to describe a period of time.

---

### Server-side queries
![](./server-side-query.png)

---

### Server-side queries
```js
var query = {
  timeExtent: {
    start: new Date(2000, 0, 1),
    end: new Date(2007, 0, 1)
  },
  where: "mag >= 5"
};
featureLayerQuake.queryFeatureCount(query).then(function(count){
  console.log(`${count} quakes found.`);  // e.g. 9235 quakes found.
});
```
- _timeExtent_ added to [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-Query.html)
- Layers must be _time enabled_
- *Tip:* Use the [developer dashboard](https://developers.arcgis.com/dashboard) to retroactively time-enabled layers

---

### More server-side queries
- FeatureLayer.queryExtent()
- FeatureLayer.queryFeatureCount()
- FeatureLayer.queryFeatures()
- FeatureLayer.queryObjectIds()

---

### Demo
[Yet Another Earthquake App](http://richiecarmichael.github.io/quake-map/index.html)

---

### Client-side queries

TODO Richie

---

### Client-side queries - tips
```js
view.whenLayerView(featureLayerQuake).then(function(layerView){
    layerView.watch("updating", function(value){
        if (!value){
            // Finished updating
        }
    });
});
```
- Wait for content to be downloaded
- Geometries are generalized
- Restrict queries to information in visual extent

---

### Client-side filtering
![](./client-side-filter-2.gif)

---

### Enabling client-side filtering
```js
var quakeView = null;
view.whenLayerView(featureLayerQuake).then(function(layerView){
    quakeView = layerView;
});
```
```js
function updateMapView(startDate, endDate) {
    quakeView.filter = {
        timeExtent: {
            start: startDate,
            end: endDate
        }
    };
}
```

---

![](./client-side-filter-3.gif)

---

### Filtering with effects
```js
function updateMapView(startDate, endDate) {
    quakeView.effect = {
        filter: {
            timeExtent: {
                start: startDate,
                end: endDate
            }
        },
        insideEffect: null,
        outsideEffect: "saturate(0%) opacity(25%)"
    };
}
```

---

### List of possible filter effects
TODO Richie

---

## Visualizing time using Arcade: Color earthquakes by age.

TODO Jeremy

---

## Visualizing time using Visual Variables

TODO Yann - New York demo

---

## Client-side - Building a heatmap chart using clientside statistics.

TODO Kristian

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-5.png" -->

## Headline Here 5

* Bullet [points here](http://hakim.se).

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-6.png" -->

## Headline Here 6

* Bullet [points here](http://hakim.se).

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-esri.png" -->

---

<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-rating.png" -->