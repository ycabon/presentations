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
    // Get time metadata.
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

### New APIs in 4.11 - TimeInfo

![](./timeinfo.png)

- Temporal properties intended by the service publisher.
- Used by the API for building queries and other widgets.

_Additional information about TimeInfo [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TimeInfo.html)._

---

### New APIs in 4.11 - TimeExtent

![](./timeextent.png)

- Used in metadata and queries to describe a period of time.

_Additional information about TimeExtent [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-TimeExtent.html)._

---

### Server-side queries
![](./client-side.gif)

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
  console.log(`${count} quakes found.`)
});
```
The [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-Query.html) now includes a `timeExtent` property for temporal filtering of time-enabled feature layers. Tip: Layers can be retrospectiely time-enabled with the developer dashboard.

---

## Client-side queries

TODO: Richie

---

## Client-side filtering

TODO: Richie

---

## Visualizing time using Arcade: Color earthquakes by age.

TODO Jeremy

---

## Visualizing time using Visual Variables

TODO Yann - New York demo

---

## Client-side - Building a timeline chart

TODO Richie

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