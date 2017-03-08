<!-- .slide: class="title" -->

## ArcGIS API for JavaScript
## Building Classes using Accessor
Yann Cabon & René Rubalcava

[![octocat](../template/octocat.png)](https://github.com/ycabon/presentations/tree/gh-pages/2017-devsummit/building-classes-using-accessor/)

---

<!-- .slide: class="section" -->

<!-- .slide: class="section" -->

# Accessor

- What is Accessor?
- How does it work?
- Public API
- Implement `Accessor`
- TypeScript integration

---

# What is Accessor?

---

### What is Accessor?

- When we started 4.0 we looked at how 3.x was built.
- Improve on the experience
- Instead of building great apps with new features, deal with the API.
- We identified major coding pattern that could be formalized.

---

### What is Accessor?

- Objects are composed of properties that can be
  - read and set
  - or read-only
  - Constructor arguments
  - Computed from other properties
  - Events were emitted when changed
- Property values are cached

---

### How does it work?

based on ES5 accessors

```js
var Person = function() {}

Object.defineProperty(Person.prototype, "firstName", {
  get: function() {
    return this._firstName;
  }
});
```

---

# Public API

---

### Public API - unified single object constructor

Creating an instance, unified single object constructor.

```ts
let layer: TileLayer = new TileLayer({
  url: "http://...",
  opacity: 0.5
});

let mapView: MapView = new MapView({
  map: new Map({
    layers: new Collection([
      layer
    ])
  }),
  container: "viewDiv"
});
```

---

### Public API - property access

Accessing property values

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

### Public API - property watching

Watching for property changes

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
```

---

### Public API - autocasting

```js
  // 3.x
  new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 10,
    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
    new Color([255,0,0]), 4),
    new Color([255,255,255,0.25]));

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
```

---

# Implement Accessor

---

### Implement Accessor

```js
require([
  "esri/core/Accessor"
],
function (Accessor) {

  var Person = Accessor.createSubclass({
    // ...
  });
  
});
```

---

### Implement Accessor

```js
var person = new Person({
  firstName: "John",
  lastName: "Doe"
});
```

---

### Implement Accessor

Define a class with 2 properties

```js
var Person = Accessor.createSubclass({
  properties: {
    firstName: {},
    lastName: {}
  }
});

var person = new Person({
  firstName: "John",
  lastName: "Doe"
});

person.watch("lastName", function(newValue) {
  // ...
});
```

---

### Implement Accessor

Define a class with 2 watchable properties with default values

```js
Accessor.createSubclass({
  properties: {
    firstName: {
      value: "John"
    },
    lastName: {
      value: "Doe"
    }
  }
});
```

---

### Implement Accessor

Shorthand for properties

```js
Accessor.createSubclass({
  properties: {
    firstName: "John"
    lastName: "Doe"
  }
});
```

---

### Implement Accessor

Metadata `type` for autocasting

```js
var Layer = Accessor.createSubclass({
  properties: {
    extent: {
      type: Extent,
      value: new Extent(-180, -90, 180, 90)
    }
  }
});

var layer = new Layer();
layer.extent = {
  xmin: // ...
  // ...
}
```

---

### Implement Accessor

Metadata `type` for autocasting - shorthand

```js
var Layer = Accessor.createSubclass({
  properties: {
    extent: Extent,
    spatialReference: SpatialReference.WGS84
  }
});

var layer = new Layer();
layer.extent = {
  xmin: // ...
  // ...
}
```

---

### Implement Accessor

Metadata `type` for autocasting - arrays

```js
// or
var Layer = Accessor.createSubclass({
  properties: {
    fields: {
      type: [Field]
    }
  }
});

var layer = new Layer({
  fields: [{
    name: "fieldName",
    alias: "type",
    type: "string"
  }]
});

console.log(layer.fields[0] instanceof Field); // true
```

---

### Implement Accessor

Autocasting - Collection

```js
var Layer = Accessor.createSubclass({
  properties: {
    fields: {
      type: Collection.ofType(Field)
    }
  }
});

var layer = new Layer({
  fields: [{
    // ...
  }]
});
layer.fields.add({
  name: "ObjectID",
  alias: "ObjectID",
  type: "oid"
});

console.log(layer.fields.getItemAt(0) instanceof Field); // true
console.log(layer.fields.getItemAt(1) instanceof Field); // true
```

---

### Implement Accessor

Metadata `cast` for autocasting

```js
var Layer = Accessor.createSubclass({
  properties: {
    opacity: {
      value: 1,
      cast: function(value) {
        return Math.min(1, Math.max(0, value));
      },
    }
  }
});

var layer = new Layer({
  opacity: 45
});

console.log(layer.opacity); // 1
```

---

### Implement Accessor

Computed property

```js
var Person = Accessor.createSubclass({
  properties: {
    firstName: "John",
    lastName: "Doe",

    fullName: {
      dependsOn: ["firstName", "lastName"],

      get: function() {
        return this.firstName + " " + this.lastName;
      }
    }
  }
});

var john = new Person();
console.log(john.fullName); // outputs: John Doe
```

---

### Implement Accessor

Computed read-only property: most usage

```js
var Person = Accessor.createSubclass({
  properties: {
    firstName: "John",
    lastName: "Doe",

    fullName: {
      dependsOn: ["firstName", "lastName"],
      readOnly: true,

      get: function() {
        return this.firstName + " " + this.lastName;
      }
    }
  }
});

var john = new Person();
console.log(john.fullName); // outputs: John Doe
```

---

### Implement Accessor

Writable computed property

```js
var Person = Accessor.createSubclass({
  properties: {
    firstName: "John",
    lastName: "Doe",

    fullName: {
      dependsOn: ["firstName", "lastName"],
      get: function() { return this.firstName + " " + this.lastName; },
      set: function(value) {
        var part = value.split(" ");
        this._set("firstName", part[0]);
        this._set("lastName", part[1]);
      }
    }
  }
});

var john = new Person({
  fullName: "John Doe"
});
console.log(john.firstName); // outputs: John
```

---

### Implement Accessor

Defining a proxy property

```js
Accessor.createSubclass({
  properties: {

    scale: {
      aliasOf: "some.other.object.scale"
    }

  }
});
```

---

# TypeScript integration

---

### TypeScript decorators

_Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members._
[source](https://www.typescriptlang.org/docs/handbook/decorators.html)

```js
class Editor {
  content = "";
 
  @debounce(500)
  update(content) {
    this.content = content;
  }
}
```

---

### TypeScript integration

Defining default values

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  @property()
  firstName: string = "John";

  @property()
  lastName: string = "Doe";
}
```

---

### TypeScript integration

Defining subclasses. Work-around for multi inheritance

```ts
/// <amd-dependency path="esr/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esr/core/tsSupport/decorateHelper" name="__decorate" />

import { declared, subclass, property } from "esri/core/tsSupport/declare";

interface SceneLayer extends Layer, SceneService {}

@subclass("esri.layers.SceneLayer")
class SceneLayer extends declared(Layer, SceneService) implements SceneLayer {
  // ...
}
```

---

### TypeScript integration

Defining property types

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  @property({ type: String })
  firstName: string = "John";

  @property({ type: String })
  lastName: string = "Doe";
}
```

---

### TypeScript integration

Defining a computed property

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  @property()
  firstName: string;

  @property()
  lastName: string;

  @property({ readOnly: true, dependsOn: ["firstName", "lastName"] })
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

---

### TypeScript integration

Defining a custom setter property

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  // Example: perform additional work when visibility changes
  @property()
  set visible(value: boolean) {
    this._set("visible", value);
    this._updateChildVisibility();
  }

  // Example: only allow values in a certain range
  @property()
  set opacity(value: number) {
    if (value >= 0 && value <= 1) {
      this._set("opacity", value);
    }
  }
}
```

---

### TypeScript integration

Defining a custom type casted property

```ts
@subclass()
class Subclass extends declared(Accessor) {

  @property()
  alpha = 1;
  
  @cast("alpha")
  protected castAlpha(value: number) {
    return Math.max(0, Math.min(1, value));
  }
}
```

---

### TypeScript integration

Defining a read only property

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  // Example: read-only property may not be externally set
  @property({ readOnly: true })
  firstName: string;

  @property({ readOnly: true })
  lastName: string;

  updateName(firstName: string, lastName: string): void {
    // We may still update the read-only property internally, which will change
    // the property and notify changes to watchers
    this._set({
      firstName: firstName,
      lastName: lastName
    });
  }
}
```

---

### TypeScript integration

Defining a proxy property

```ts
@subclass()
class Subclass extends declared(Accessor) {
  
  @property({ aliasOf: "some.other.object.scale" })
  scale: number;

}
```

---

<!-- .slide: class="questions centered" -->

# Questions
  
@yanncabon  
ycabon@esri.com  
  
@odoenet  
rrubalcava@esri.com  

---


<!-- .slide: class="end" -->
