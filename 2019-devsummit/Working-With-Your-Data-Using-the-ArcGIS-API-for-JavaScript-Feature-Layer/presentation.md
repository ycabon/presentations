<!-- .slide: data-background="../reveal.js/img/2019/devsummit/bg-1.png" -->

<h1 style="text-align: left; font-size: 80px;">Working With Your Data</h1>
<h2 style="text-align: left; font-size: 60px;">Using the ArcGIS API for JavaScript Feature Layer</h2>
<p style="text-align: left; font-size: 30px;">Jeremy Bartley | Yann Cabon</p>
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

### Agenda

---

## Feature Layer powered by

* [Feature Services](TODO sample from SDK)
* [Feature Collections](TODO sample from SDK)
* Client side data
  * [CSV](TODO sample from SDK)
  * [GeoJSON](TODO sample from SDK)

---

## Feature Layer powered by dynamic feature tiles

---

## Visualization styles

---

## Popups to communicate information

---

## Bringing portal feature layer into your app

* By url

```ts
const layer = new FeatureLayer({
  url: "TOTO",
  renderer: {

  },
  popupTemplate: {

  }
});

map.add(layer);
```

---

## Bringing portal feature layer into your app

* By url

```ts
const layer = new FeatureLayer({
  portalItem: {
    id: "TOTO"
  }
})

map.add(layer);
```

---

## Bringing portal feature layer into your app

* By url

```ts
const layer = await Layer.fromPortalItem({
  portalItem: {
    id: "TOTO"
  }
})

map.add(layer);
```

---

## Bringing portal feature layer into your app

* Restrict data retrieved from the feature service

```ts
layer.definitionExpression = "TODO < 10";
```

* to work with a subset of feature
* to remove features without `null` attributes.

---

## Bringing portal feature layer into your app

* New in 4.11 - only requesting the fields needed for display

```ts
const webmap = new WebMap({
  portalItem: {
    id: "TODO"
  }
});
await webmap.loadAll();
const layer = webmap.allLayers
  .find((layer) => layer.title === "test");

layer.outFields = ["some_field"];
```

---

## Query the data from the server

* statistics, individual features, grouped
* accessing attachements
* navigating relationships to other features in other layers

---

## Interact with the data in memory

* when is the layerview ready
* when is the layerview updating
* add interactivity by querying the layerview
* filter
* effect

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