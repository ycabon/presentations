<!-- .slide: class="title" -->

## ArcGIS API for JavaScript
## Programming Patterns and API Fundamentals
Yann Cabon & René Rubalcava

[![octocat](../template/octocat.png)](https://github.com/ycabon/presentations/tree/gh-pages/2017-devsummit/programming-patterns-and-api-fundamentals)

---

<!-- .slide: class="agenda" -->

## Agenda

- Fundamentals
  - Map and View
  - Basemap, Ground and Operational Layers
  - Layers
  - LayerViews
  - Widgets and UI
  - ArcGIS Platform
- Programming patterns
  - Interactivity with Input Manager
  - Working with API Objects
  - Promises
  - Loadable

---

<!-- .slide: class="section" -->

# Fundamentals

---

## Map and View

---

## Map and View

Getting Started in 2D
 - need a `Map` with data
 - and a `MapView` with a container

```js
var map = new Map({
  basemap: "topo"
});

var view = new MapView({
  map: map,
  container: "viewDiv"
});
```

---

## Map and View

Getting Started in 3D
 - need a `Map` with data
 - and a `SceneView` with a container

```js
var map = new Map({
  basemap: "topo"
});

var view = new SceneView({
  map: map,
  container: "viewDiv"
});
```

---

## Map and View

- `Map` is holding on the different layers.
  - _What the world is composed of_
- `MapView` and `SceneView` displays each layer on the screen.
  - _A window on that world_

---

## Map and View

- `Map` is holding on the different layers.
  - _What the world is composed of_
- `MapView` and `SceneView` displays each layer on the screen.
  - _A window on that world_

---

## Map and View

![Map&View](images/api-diagram-0b.png)

---

## Map and View

![Map&View](images/api-diagram-1.png)

---

## Map and View

![Map&View](images/api-diagram-2.png)

---

## Basemap, Ground and Operational Layers

Layers are separated into 3 main groups.
 - `basemap`
 - `ground`
 - operational `layers`

`basemap` and `ground` gives context to the operational `layers`.

---

## Basemap, Ground and Operational Layers

- `basemap` and `ground` can be set by well-know ids:

```js
var map = new Map({

  /*
   streets, satellite, hybrid, terrain, topo, gray,
   dark-gray, oceans, national-geographic, osm,
   dark-gray-vector, gray-vector, streets-vector, topo-vector,
   streets-night-vector, streets-relief-vector, streets-navigation-vector
   */
  basemap: "streets"

  /*
   world-elevation 
   */
  ground: "world-elevation" 

});
```

---

## Basemap, Ground and Operational Layers

- or by specifying them

```js
var map = new Map({

  basemap: {
    // Layers drawn at the bottom
    baseLayers: [
      new TileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer")
    ],

    // Layers drawn on top
    referenceLayers: [
      new TileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer")
    ],
  },

  ground: {
    layers: [
      new ElevationLayer("https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer")
    ]
  }

});
```

---

## Basemap, Ground and Operational Layers

- `basemap` can also be set by item id.

```js
var map = new Map({

  basemap: {
    portalItem: {
      id: "8b3d38c0819547faa83f7b7aca80bd76"
    }
  }

});
```

---

## Basemap, Ground and Operational Layers

- `Map.layers` contains `Layer` objects with the operational data the user interacts with.

```js
var map = new Map({

  layers: [
    new MapImageLayer(...),
    new FeatureLayer(...)
  ]

});
```

---

## Basemap, Ground and Operational Layers

- At any point you can modify any on those groups of layers using the `Collection` API.

```js
// basemap
map.basemap.baseLayers.add(layer);
map.basemap.baseLayers.addMany([layer]);
map.basemap.baseLayers.remove(layer);
map.basemap.baseLayers.removeMany([layer]);
map.basemap.baseLayers.removeAll();

map.basemap.referenceLayers.add(layer);

map.ground.add(layer);

map.layers.add(layer);

// short hand
map.add(layer);
```

---

## Basemap, Ground and Operational Layers

- More `Collection` API goodness

```js
function isOperational(layer) {
  return !map.basemap.baseLayers.includes(layer)
    && !map.basemap.reference.includes(layer)
    && !map.ground.includes(layer);
}

map.layers = map.allLayers
  .filter(isOperational)
  .filter(function (layer) {
    layer.title.indexOf("some search");
  });
```

---

## Basemap, Ground and Operational Layers

- There is a layer class that can contain layers too!: `GroupLayer`
- `GroupLayer` shares the same layer management API as the `Map.layers`.

```js
var layer1 = new TileLayer(...);
var layer2 = new TileLayer(...);

var group = new GroupLayer({
  layers: [layer1, layer2]
});

map.add(group);

// same as Map
group.add();
group.addMany();
group.remove();
group.removeMany();
group.removeAll();

```

---

## Basemap, Ground and Operational Layers

- a layer can only be in one place.
- there are layers in multiple places:
  - Pro: easy to swap a basemap with another
  - Pro: easy to reproduce a tree structure of the data
  - Pro: easy to manager a group of layer
  - Con: more places to look for changes

- They can be easily searched using `Map.allLayers`
  - contains the layers from every collection

```js
var layer = map.allLayers.find(function (layer) {
  return layer.title === "what I'm looking for";
});
```

---

## Layers

---

## Supported Layers

- `TileLayer`
- `GraphicsLayer`
- `FeatureLayer`
- `CSVLayer`
- `GroupLayer`
- `ImageryLayer`
- `MapImageLayer`
- `OpenStreetMapLayer`
- `StreamLayer`
- `VectorTileLayer`
- `WebTileLayer`
- `GeoRSSLayer`

---

## 3D Only Layer

- `ElevationLayer`
- `IntegratedMeshLayer`
- `PointCloudLayer`
- `SceneLayer`

---

## TileLayer

- Layer that displays square images stitched together.
- It's fast to display because the tiles are cached.
- It as a URL at points to a Map Service

---

## TileLayer

```js
var transportationLyr = new TileLayer({
  url: "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
  id: "streets",
  visible: false
});
```

---

## WebTileLayer

- For use with machine serving map tiles
- Define the `level`, `column`, and `row` for map tiles

---

## WebTileLayer

```js
var tiledLayer = new WebTileLayer({
  urlTemplate: "http://{subDomain}.tile.stamen.com/toner/{level}/{col}/{row}.png",
  subDomains: ["a", "b", "c", "d"],
  copyright: "Map tiles by <a href=\"http://stamen.com/\">Stamen Design</a>, " +
    "under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. " +
    "Data by <a href=\"http://openstreetmap.org/\">OpenStreetMap</a>, " +
    "under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>."
});
```
API [sample](https://developers.arcgis.com/javascript/latest/sample-code/layers-webtile-3d/index.html)  
[OSM](https://developers.arcgis.com/javascript/latest/sample-code/layers-osm-3d/index.html)

---

## GraphicsLayer

- Simplest layer to work with
- Symbolizes `Graphic` object on the view.
- a `Graphic` requires a geometry and a symbol.
- additionally a attributes and popup template.

---

## GraphicsLayer

```js
var graphicsLayer = new GraphicsLayer({
  graphics: [graphic1, graphic2, graphic3]
});

// add a single graphic
graphicsLayer.add(graphic4);
// add an array of graphics
graphicsLayer.addMany([graphic5, graphic6, graphic7]);
```
API [2D sample](https://developers.arcgis.com/javascript/latest/sample-code/get-started-graphics/index.html)  
API [3D sample](https://developers.arcgis.com/javascript/latest/sample-code/graphics-basic-3d/index.html)

---

## GraphicsLayer - create a Graphic

```js
var graphic = new Graphic({
  attributes: {
    id: 1,
    city: "Los Angeles"
  },
  geometry: new Point({x: xValue, y: yValue}),
  symbol: new SimpleMarkerSymbol({
    style: 'circle',
    color: 'red',
    size: 10,
    outline: {
      color: 'rgba(255, 255, 255, 0.5)'
      width: 4
    }
  }),
  popupTemplate: {
    title: "My Awesome Graphic!",
    content: "{*}" // display all fields
  }
});
// add it to graphicsLayer
graphicsLayer.add(graphic);
```

---

## FeatureLayer

- Displays features: 
  - `geometry`
  - `attributes`
- Features are fetch from a service, or from a local collection 
- Their geometry is the same for the entire layer.
- Cannot be symbolized individually
  - `Feature.renderer`

---

## FeatureLayer

```javascript
// Create via URL
var featureLayer = new FeatureLayer({
  url: "http://services6.arcgis.com/m3L8QUZ93HeaQzKv/arcgis/rest/services/BeerAndBurgerJoints/FeatureServer/0"
});

// Create via a Portal item
var featureLayer = new FeatureLayer({
  portalItem: {
    id: "b126510e440744169943fd8ccc9b0c4e"
  }
});
```

---

## FeatureLayer - FeatureCollection

```javascript
var featureLayer = new FeatureLayer({
  objectIdField: "item_id",
  geometryType: "point",
  // Define the fields of the graphics in the FeatureLayer
  fields: [{
    name: "item_id",
    alias: "Item ID",
    type: "oid"
  }, {
    name: "description",
    alias: "Description",
    type: "string"
  }, {
    name: "title",
    alias: "Title",
    type: "string"
  }],
  // Define a renderer for the layer
  renderer: new SimpleRenderer({
    type: "simple",
    symbol: new SimpleMarkerSymbol({
      style: 'circle',
      color: 'red',
      size: 10,
      outline: {
        color: 'rgba(255, 255, 255, 0.5)'
        width: 4
      }
    })
  }),
  popupTemplate: {
    title: "{title}",
    content: "{description}"
  },
  // This is a collection of Graphics
  source: [graphic1, graphic2, graphic3]
});
```

---

## MapImageLayer

- Displays layers and sublayers from Map Services
- Map Service can export map image given a bounding box
- Simplified API for dynamic layer infos
  - sublayers

---

## MapImageLayer

```javascript
var layer = new MapImageLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
  sublayers: [
  {
    id: 0,
    visible: true
  },
  {
    id: 1,
    visible: true
  },
  {
    id: 2,
    visible: true,
    definitionExpression: "pop2000 > 1000000"
  },
  {
    id: 3,
    visible: false
  }]
});
```

---

## MapImageLayer

```javascript
var layer = new MapImageLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
  sublayers: [
  ...
  {
    id: 3,
    visible: true,
    renderer:  new SimpleRenderer({
      symbol: new SimpleFillSymbol({
        style: "solid",
        color: "dodgerblue",
        outline: {
          width: 0.5,
          color: "white"
        }
      }),
      label: "State boundaries"
    }),
    opacity: 0.5
  }
  ]
});
```

---

## LayerViews

---

## LayerViews

![Map&View](images/api-diagram-1.png)

---

## LayerViews

- `LayerViews` renders the layers on the screen.
- [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) has limited API so far.
- Give info about layer rendering
- Give access to data displayed on the screen
 - Features
 - Elevation data

---

## LayerViews

- There is a layerview per layer in the map
  - except if the layer is not supported
    - incompatible SpatialReference
    - incompatible tile cache
    - 3D layer and a MapView
- Like `Map`, a view has multiple collection of layerviews.

---

## LayerViews

- access a layerview with [`View.whenLayerView()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView) 

```js
  var map = new Map({
    basemap: 'topo'
  });
  var mapView = new MapView({
    map: map,
    container: 'mapDiv'
  });

  var layer = new FeatureLayer(...)
  map.add(layer);

  view.whenLayerView(layer)
    .then(function(layerView) {
      layerView.visible = false
    });
```
- or [`View.allLayerViews`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#allLayerViews) 

---

## LayerViews

- A layerview indicates if the layer is `suspended` (not displayed)
```js
view.whenLayerView(fLayer)
.then(function(layerView) {
  console.log(layerView.suspended);
});
```

---

## LayerViews

- FeatureLayer and LayerViews can be queried
- `featureLayer.queryFeatures()` - query features on the service
- `featureLayerView.queryFeatures()` - query features displayed in the view

---

## LayerViews

```js
view.whenLayerView(fLayer)
.then(function(layerView) {
  var query = new Query();
  query.geometry = view.extent;
  layerView.queryFeatures(q).then(function(features) {
    // do something with features
  });
});
```

---

## Widgets and UI

---

## Widgets

- [Out of the box widgets at 4.3](https://developers.arcgis.com/javascript/latest/sample-code/get-started-widgets/index.html):
 - Zoom
 - Attribution
 - Compass
 - Home
 - Locate
 - Search
 - Legend
 - LayerList
 - Popup
   - [dockable](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/sandbox.html?sample=popup-docking-position)
   - [custom actions](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/sandbox.html?sample=popup-custom-action)
- New design and user experience

---

## Widgets

- Extensibility through:
 - [CSS](demos/css/index.html), [matching vectortiles](demos/css-vectortiles/index.html)
 - [SASS](https://github.com/Esri/jsapi-resources/blob/master/4.x/bower/dojo/SASS.md)
 - [View Model](https://github.com/Esri/arcgis-js-api/tree/4master/widgets)

---

## Widgets - View Model

- New architecture
- Logic of the widget separated from the representation
- Views' source code available in the [SDK](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Zoom.html)
- View's can be rewritten in [any framework](demos/widgets/framework/index.html)
- ViewModels can be combined to create [Frankenwidgets](demos/widgets/frankenwidget/index.html)

---

## UI

- Managed overlay to place widgets over the view.
- Well known widgets can be directly added or removed from the view
- Popups are responsive
- [Guide](https://developers.arcgis.com/javascript/latest/guide/view-ui/index.html)

```js
var view = new MapView({

  ui: {

    padding: {
      top: 16,
      left: 16,
      right: 16,
      bottom: 16
    },

    components: ["zoom", "compass", "attribution"]

  }

});
```

---

## UI

- API to add widgets or any DOM element to the 4 corners of the view

```js
var view = new MapView({
  //...
});

var legend = new Legend({
  //...
});

view.ui.add(legend, "top-left");
```

---

## Popups

- First entry point to detailed data

```js
// basic popup
var featureLayer = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
  outFields: ["*"],
  popupTemplate: {
    title: "Name: {STATE_NAME}",
    content: "{*}"
  }
});
```

---

## Popups - Fields and Aliases

- First entry point to detailed data

```js
content: [
  {
    type: "fields",
    fieldInfos: [
      {
        fieldName: "POP2000",
        visible: true,
        label: "Population for year 2000",
        format: {
          places: 0,
          digitSeparator: true
        }
      },
      {
        fieldName: "POP2007",
        visible: true,
        label: "Population for year 2007",
        format: {
          places: 0,
          digitSeparator: true
        }
      }  
    ]
  }
]
```

---

## Popups - Fields and Aliases

- Format dates

```js
{
  fieldName: "FAKEDATE",
  visible: true,
  label: "Fake Date Field",
  format: {
    dateFormat: "short-date"
  }
}
```

---

## Popups - Fields and Aliases

- Custom content

```js
var featureLayer = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/2",
  outFields: ["*"],
  popupTemplate: {
    title: "Name: {STATE_NAME}",
    content: `
      <section>
        <h4>{STATE_ABBR}</h4>
        <hr />
        <ul>
          <li>Year 2000 Pop: {POP2000}</li>
          <li>Year 2007 Pop: {POP2007}</li>
          <li>Total Households: {HOUSEHOLDS}</li>
        </ul>
      </section>
    `
  }
});
```

---

## Popups - MediaInfos

- Charts

```js
{
  type: "media",
  mediaInfos: [
    {
      title: "<b>Population</b>",
      type: "column-chart",
      caption: "",
      value: {
        theme: "BlueDusk",
        fields: [ "POP2000", "POP2007" ]
      }
    }
  ]
}
```

---

## Popups - Custom actions

```js
// PopupTemplate
{
  title: '{Name}',
  content: '{*}',
  actions: [{
      id: 'alcohol-details',
      className: 'esri-icon-description',
      title: 'Events'
  }]
}
```

---

## Popups - Custom actions

```js
view.popup.viewModel.on("trigger-action", function(event) {
  var action = event.action;
  if (action.id === "customer-details") {
    var attributes = view.popup.viewModel.selectedFeature.attributes;
    var customerGroup = attributes.CUSTOMER_GROUP;
    esriRequest(customAPIURL, {
      query: {
        group: customerGroup
      },
      responseType: "json"
    })
    .then(function(response ) {
      // parse response data and update popup content
    })
    .otherwise(function() {
      console.log(error);
    });
  }
});
```

---

## ArcGIS Platform

---

## ArcGIS Platform

- [redesigned API](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html)
- access portal information: basemaps, featuring content
- query items, users, groups
- loading items like layers, webmap and webscene
- creating, deleting and updating items

---

## ArcGIS Platform

- Loading a `WebScene`

```js
var scene = new WebScene({
  portalItem: {
    id: "082c4fd545104f159db39da11ea1e675"
  }
});

var view = new SceneView({
  map: scene,
  container: "viewDiv"
});
```

---

## ArcGIS Platform

- Loading a layer from an item.

```js
var promise = Layer.fromPortalItem({
  portalItem: {
    id: '8444e275037549c1acab02d2626daaee',
    portal: {
      url: 'https://myorg.maps.argis.com'
    }
  }
})
.then(function(layer) {
  // Adds the layer to the map once it loads
  map.add(layer);
})
.otherwise(function(error) {
  //handle the error
});
```

- [demo](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/sandbox.html?sample=layers-portal)

---

## ArcGIS Platform

- Access Portal Items

```js
var portal = new Portal();

// Setting authMode to immediate signs the user in once loaded
portal.authMode = 'immediate';

// Once loaded, user is signed in
portal.load()
  .then(function() {
    // Create query parameters for the portal search
    var queryParams = new PortalQueryParams({
      query: 'owner:' + portal.user.username,
      sortField: 'numViews',
      sortOrder: 'desc',
      num: 20
    });

    // Query the items based on the queryParams created from portal above
    portal.queryItems(queryParams).then(createGallery);
  });
```

- [demo](https://developers.arcgis.com/javascript/latest/sample-code/sandbox/sandbox.html?sample=portalitem-dragndrop)

---

<!-- .slide: class="section" -->

# Programming patterns

---

## Interactivity with view events

- Use view events to interact with the view
- [List of events](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events-summary)
- You can stop the propagation of the event to prevent the default behavior

```js
view.on("drag", function(event) {
  // user won't be able to drag
  event.stopPropagation();
})
```

---

## Interactivity with view events

- Access the features on click

```js
view.on("click", function(evt){
  var screenPoint = {
    x: evt.x,
    y: evt.y
  };
  view.hitTest(screenPoint)
    .then(function(response){
       // do something with the result graphic
       var graphic = response.results[0].graphic;
    });
});
```
[API Sample](https://developers.arcgis.com/javascript/latest/sample-code/view-hittest/index.html)

---

## Working with API Objects

- Objects are have properties that can be:
  - read and set
  - or read-only
  - constructor arguments
  - watchable

---

### API Objects - property access

```ts
console.log(layer.opacity);
console.log(layer.title);

layer.opacity = 0.5;
layer.title = "My test layer";

// setting multiple values
layer.set({
  opacity: 0.5,
  title: "My test layer"
});

// accessing the value of a deep property
view.get("map.basemap.title");
view.set("map.basemap.title", "new title");
```

---

### API Objects - property watching

```ts
mapView.watch("scale", (newValue, oldValue, property, target) => {
  console.log(`scale changed: ${newValue}`);
});


mapView.watch("map.basemap.title", (newValue, oldValue, property, target) => {
  console.log(`new basemap title: ${newValue}`);
});


mapView.watch("ready, stationary", (newValue, oldValue, property, target) => {
  console.log(`property ${property}: ${newValue}`);
});

watchUtils.whenTrue(view, "stationary", () => {
  console.log("view is stationary");
})
```

[watchUtils](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-watchUtils.html)

---

### API Objects - autocasting and single constructor

```js
  // 4.0
  new SimpleMarkerSymbol({
    style: 'square',
    color: 'red',
    size: 10,
    outline: {
      color: 'rgba(255, 255, 255, 0.5)'
      width: 4
    }
  });

  // 3.x
  new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 10,
    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
    new Color([255,0,0]), 4),
    new Color([255,255,255,0.25]));
```

---

## Promises

- All asynchronous methods return a promise, no more [events](https://developers.arcgis.com/javascript/jsapi/querytask-amd.html#events)
- The basic pattern looks like this:

```js
  someAsyncFunction().then(
    function(resolvedVal){
      //This is called when the promise resolves
      console.log(resolvedVal);  //logs the value the promise resolves to
    },
    function(error){
      //This function is called when the promise is rejected
      console.error(error);  //logs the error message
    }
  );
```

---

## Promises

- Classes may be Promise
 - Load resources
 - Asychronously initialized `Layer`, `WebMap`, `WebScene`, `View`
 - `view.then()` replaces `map.on('load', ...)`

```js
var map = new Map({...})

view = new SceneView({
  map: map,
  //...
});

view.then(function() {
  // the view is ready to go
});
```

---

## Promises

```js
view.then(function() {
  return view.whenLayerView(map.findLayerById("awesomeLayer"));
})
.then(function(layerView) {
  return watchUtils.whenFalseOnce(layerView, "updating");
})
.then(function(result) {
  var layerView = result.target;
  return layerView.queryFeatures();
})
.then(doSomethingWithFeatures)
.otherwise(errorHandler);
```

[API sample](https://developers.arcgis.com/javascript/latest/sample-code/chaining-promises/index.html)

---

## Loadables

- brings better control, and scheduling of loading resources.
- extension of `esri/core/Promise`
- in 3.x, instanciating a layer loads it. in 4.0, it's an explicit call
- the views automatically loads the map and its layers

---

## Loadables

- `WebMap` / `WebScene` need to load:
 - the portal item
 - the layer module
 - the layer's item
- `MapView` / `SceneView` need to load:
 - the map
 - the layers

---

In a single page application, get a feature from a FeatureLayer from a WebMap without displaying it, ASAP!

```js
  var webmap = new WebMap({
    portalItem: {
      id: 'affa021c51944b5694132b2d61fe1057'
    }
  });

  webmap.load()
    .then(function() {
      return webmap.getLayer('myFeatureLayerId').load();
    })
    .then(function(featureLayer) {
      return featureLayer.queryFeatures({
        where: 'OBJECTID = 1'
      });
    })
    .then(function(result) {
      displayDetails(result.features[0]);
    })
    .otherwise(function(error) {
      console.error(error);
    });
```

---

<!-- .slide: class="questions" -->

## Questions?

![Survey](images/survey-slide.png)

Yann Cabon (ycabon@esri.com) ([@ycabon](https://twitter.com/ycabon))

Rene Rubalcava (rrubalcava@esri.com ) ([@odoenet](https://twitter.com/odoenet))

Slides: [github.com/odoe/presentations/2017-devsummit-ps-using-frameworks/](github.com/odoe/presentations/2017-devsummit-ps-using-frameworks)

---


<!-- .slide: class="end" -->
