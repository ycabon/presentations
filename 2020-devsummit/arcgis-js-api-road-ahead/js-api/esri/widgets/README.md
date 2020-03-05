[//]: # (TOC generated with https://github.com/jonschlinkert/markdown-toc)
- [4.x Widget Development Guide [INTERNAL]](#4x-widget-development-guide-internal)
  * [Widget development requirements](#widget-development-requirements)
    + [Node](#node)
    + [TypeScript](#typescript)
    + [JSX](#jsx)
    + [`esri/core/Accessor`](#esricoreaccessor)
    + [Sass](#sass)
  * [Widget development setup](#widget-development-setup)
  * [`esri/widgets/Widget`](#esriwidgetswidget)
  * [Building `HelloWorld` widget](#building-helloworld-widget)
    + [Simple `HelloWorld`](#simple-helloworld)
    + [Defining properties](#defining-properties)
    + [Defining methods](#defining-methods)
    + [Responding to DOM events](#responding-to-dom-events)
    + [Responding to synthetic events](#responding-to-synthetic-events)
    + [Styling `HelloWorld` widget](#styling-helloworld-widget)
    + [Internationalizing `HelloWorld` widget](#internationalizing-helloworld-widget)
    + [Making `HelloWorld` accessible](#making-helloworld-accessible)
    + [Dynamic UI](#dynamic-ui)
    + [Putting it all together](#putting-it-all-together)
    + [Using `HelloWorld` widget](#using-helloworld-widget)
  * [Advanced concepts](#advanced-concepts)
    + [Working with a viewModel](#working-with-a-viewmodel)
    + [`render()`](#render)
    + [Render relevant elements only](#render-relevant-elements-only)
    + [Binding](#binding)
    + [Distinguishable children](#distinguishable-children)
    + [Composite widgets](#composite-widgets)
    + [Dynamic CSS classes](#dynamic-css-classes)
    + [Dynamic inline styles](#dynamic-inline-styles)
    + [Spreading properties/attributes](#spreading-propertiesattributes)
  * [TypeScript widget decorators](#typescript-widget-decorators)
    + [Properties](#properties)
    + [Methods](#methods)
  * [Gotchas](#gotchas)
  * [Widget file structure](#widget-file-structure)
  * [Styling](#styling)
    + [Sass](#sass-1)
    + [CSS](#css)
  * [ViewModel](#viewmodel)
  * [Best Practices](#best-practices)
  * [Tips](#tips)
    + [Behind the scenes](#behind-the-scenes)
  * [Q&A](#qa)
  * [Additional Examples](#additional-examples)
    + [Widgets](#widgets)
    + [Patterns](#patterns)
  * [Additional References](#additional-references)
  * [Unresolved/Workarounds](#unresolvedworkarounds)
  * [Known issues (working on it!)](#known-issues-working-on-it)
  * [Breaking changes](#breaking-changes)
  * [Notes](#notes)

# 4.x Widget Development Guide [INTERNAL]

Widgets are reusable user-interface components and are key to providing a rich user experience. The ArcGIS for JavaScript API provides a set of ready-to-use widgets and also provides a foundation for you to create custom widgets.

This document will walk through developing a custom widget and also how to use a widget in an ArcGIS for JavaScript API application.

## Widget development requirements

### [Node](https://nodejs.org/en/)

Node is a JavaScript runtime environment and it powers some of the tooling used for widget development. It'll mostly be used to install all development dependencies and to compile our TypeScript and Sass.

### [TypeScript](https://www.typescriptlang.org/)

> TypeScript
> JavaScript that scales.
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
> Any browser. Any host. Any OS. Open source.

Widget development is done in TypeScript and the following are some of its main features:

* statically-typed
* transpiles ES6 to ES5 (our current target)
* class-based

The [TypeScript Tutorial](https://www.typescriptlang.org/docs/tutorial.html) and [Sitepen's Definitive Guide to TypeScript](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) are excellent resources to start learning TypeScript.

Although not required, a code editor that supports TypeScript will ease development. See [TypeScript Editor support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support) for more details.

### [JSX](https://facebook.github.io/jsx/)

JSX is a JavaScript extension syntax that allows us to describe our widget UIs similarly to HTML.

See [JSX in depth](https://facebook.github.io/react/docs/jsx-in-depth.html) for more information.

**Note:** Not all concepts from React resources are applicable.

### `esri/core/Accessor`

Accessor is one of the core features of 4.0 and it is the base for all classes. It is the foundation for widgets, so knowledge of Accessor will come pretty handy. It is strongly recommended to read learn [`Accessor` TypeScript usage patterns](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/%5B4.0-Guides%5D-Accessor-usage-patterns-in-typescript) to become familiar with best practices using Accessor + TypeScript.

### [Sass](http://sass-lang.com/)

Sass is a CSS preprocessor that allows us to use variables, mixins, and functions. Widget CSS is authored in Sass in an effort to make it easier to style and to ensure a consistent look across widgets.

## Widget development setup

**Note:** The following steps assume the developer is working with the `arcgis-js-api` 4.x repo and that submodules have been initialized.

* Run `npm install && npm run start`
* Each widget belongs in a `.tsx` file, which allows us to use JSX to define our UIs.
* Each widget should have a reference to it in [`tsconfig.json`](https://devtopia.esri.com/WebGIS/arcgis-js-api/blob/4master/tsconfig.json#L13). Place entries in alphabetical order.
  **Note:** this step will no longer be needed when [TypeScript 2.0](https://github.com/Microsoft/TypeScript/wiki/Roadmap#20) rolls out (see *Glob support in tsconfig.json*).

## `esri/widgets/Widget`

This module is the base for all ArcGIS for JavaScript API widgets. Like most 4.0 modules, it extends [`Accessor`](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html). We are also able to leverage JSX to define our UIs.

The core principle for widgets is that the UI is created and updated inside `render()`. This method will rely on widget properties and methods (typically from the viewModel) for rendering.

It is recommended to design your widget to minimize relying on state to reduce complexity. Although this is not always possible, strive for simplicity when building your widget.

**Lifecycle**

* `constructor(params)` – †
* `postInitialize()` – this method is called when the widget's properties are ready, but before rendering
* `startup()` – deprecated; added for backwards-compatibility only
* `destroy()` – this method should be used to free up widget resources to ensure proper garbage collection

**Methods**

* `render()` – method where the UI is rendered
* `scheduleRender()` – invalidates the UI and schedules a subsequent render
* `on(eventType, listener)` – method used to register event listeners
* `emit(event, eventObject)` – method used to emit events

**Properties**

* `viewModel` – the widget's viewModel

† `srcNodeRef` is only needed when consumed outside of a Widget [see Composite widgets](#composite-widgets)

**Note**: This is not a 1:1 replacement for React/Dijit, etc...

As a developer, you will typically implement `postInitialize`, `destroy` and `render`; as well as define custom widget methods/properties.

Also, unlike `dijit/_WidgetBase`, `esri/widgets/Widget` will automatically call `destroy` on all superclasses when destroyed.

## Building `HelloWorld` widget

The following shows how to build `HelloWorld` widget.

**Note** This section assumes knowledge of [`Accessor` TypeScript usage patterns](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/%5B4.0-Guides%5D-Accessor-usage-patterns-in-typescript)

```js
var helloWorld = new HelloWorld({}, "helloWorldDiv");

// renders <div>Hello, my name is Art Vandelay!</div>
```

### Simple `HelloWorld`

**HelloWorld.tsx**

```tsx
/// <amd-dependency path="../../../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../../../core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "../../../core/accessorSupport/decorators";

import Widget = require("./Widget");
import {jsxFactory} from "./support/widget";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {
  render() {
    return (
      <div>Hello, my name is Art Vandelay!</div>
    );
  }
}

export = HelloWorld;
```

Let's focus on the following section:

```tsx
@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {
  render() {
    return (
      <div>Hello, my name is Art Vandelay!</div>
    );
  }
}
```

We are extending `esri/widgets/Widget` and defining our UI in the `render` method. We can leverage [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) to define our UI and it should be straightforward to see that we are creating a `div` element with `Hello World!` as its content.

You may have noticed that this snippet has some lines using a triple-slash syntax: `///`. In TypeScript, this is known as a triple-slash directive. You can find more information on this [here](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

### Defining properties

This section assumes knowledge on [`Accessor` TypeScript usage patterns](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/%5B4.0-Guides%5D-Accessor-usage-patterns-in-typescript).

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import {subclass, declared, property} from "../../../core/accessorSupport/decorators";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  @property({
    value: "Art"
  })
  firstName: string;

  @property({
    value: "Vandelay"
  })
  lastName: string;

  render() {
    return (
      <div>{`Hello, my name is ${this.firstName} ${this.lastName}!`}</div>
    );
  }
}
```

**Note:** previous snippet uses using a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for readability

Defining properties for widgets are the same as defining them for any Accessor-based class written in TypeScript. Once defined, they can be used inside the render method if applicable.

**usage**

```js
widget = new HelloWorld({
  firstName: "Eduardo",
  lastName: "Corrochio"
}, "widgetDiv");

// renders <div>Hello, my name is Eduardo Corrochio!</div>
```

### Defining methods

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  greet() {
    const greeting = this._getGreeting();
    console.log(greeting);
  }

  private _getGreeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }

  render() {
    return (
      <div>{this._getGreeting()}</div>
    );
  }
}
```

### Responding to DOM events

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  private _handleClick() {
    this.greet();
  }

  render() {
    return (
      <div onclick={this._handleClick}>{this._getGreeting()}</div>
    );
  }
}
```

Listening for DOM events requires setting the corresponding event listener on your node.

**Note:** event listener attributes are lowercased and not camelcased as React resources may show.

### Responding to synthetic events

Synthetic events rely on using `emit`:

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  greet() {
    const greeting = this._getGreeting();
    console.log(greeting);

    this.emit("greeted", {
      greeting: greeting
    });
  }

}
```

Consumers can then listen to the emitted event:

```js
widget.on("greeted", function(payload) {
  console.log("greeted: ", payload);
});

widget.greet();  // 'greeted: Hello, my name is Art Vandelay!'
```

### Styling `HelloWorld` widget

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

const CSS = {
  base: "esri-hello-world"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  render() {
    return (
      <div class={CSS.base}>
        {this._getGreeting()}
      </div>
    );
  }
}
```

We apply CSS in our JSX by using the `class` attribute. We are also leveraging a CSS lookup object that holds all CSS used by our widget. This allows us to keep all of the CSS in the same place. Also, note that our classes follow the BEM naming convention. See [CSS](#css) for more details on how to name your CSS classes.

The previous snippet focused on a class that won't change, but what if we have some classes that need to be toggled at runtime? The answer is to use the special CSS-classes object.

A CSS-classes object is a key-value pair object where keys represents CSS classes and the values are booleans that determine whether the class is added or removed during rendering.

You use the `Widget#classes` helper to convert that object into a string for the `class` attribute. The helper function also accepts additional classes you may need applied.

```tsx
// previous sections omitted for brevity

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  @property({
    value: true
  })
  emphasized: boolean;

  render() {
    const dynamicClasses = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div class={this.classes(CSS.base, dynamicClasses)}>
        {this._getGreeting()}
      </div>
    );
  }
}
```

**Note:** The previous snippet uses [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). This allows us to use `CSS` values as keys for our dynamic classes object. See [Dynamic CSS classes](#dynamic-css) for more details.

### Internationalizing `HelloWorld` widget

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import * as i18n from "dojo/i18n!../nls/HelloWorld";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {
  render() {
    return (
      <div title={i18n.caption}>{this._getGreeting()}</div>
    );
  }
}
```

**HelloWorld.js**

```js
define({
  root: ({
    helloWorld: "Hello World"
  }),
  ar: 1,
  // ...
  "zh-tw": 1
});
```

Internationalization leverages `dojo/i18n` and follows the same conventions denoted [here](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/Widget-Development-Guidelines#structure)

In order for us to use that module, we need to define an amd-dependency and declare a constant to use it inside our widget.

The way we bring `dojo/i18n` may look different, but using the localization bundle stays the same.

### Making `HelloWorld` accessible

 **HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import { eventKey } from "../../../core/events";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  private _handleClick(event: MouseEvent) {
    this.greet();
  }

  private _handleKeyDown(event: KeyboardEvent) {
    const key = eventKey(event);

    if (key === "Enter" || key === " ") {
      this.greet();
    }
  }

  render() {
    return (
      <div onclick={this._handleClick}
           onkeydown={this._handleKeyDown}
           tabIndex="0">
         {this._getGreeting()}
      </div>
    );
  }
}
```

Here we can make our widget keyboard accessible by allowing it to be used via keyboard. This is possible by using `tabIndex` and handling keydown events.

See our [Accessibility wiki page](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/4.0-Widget-508-accessibility-and-semantics/) for more info on accesssibility.

**Note:** The `@accessibleHandler` decorator can help us simplify our accessible event setup. See [TypeScript widget decorators](ts-widget-decorators) for more details.

### Dynamic UI

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import {subclass, declared, property} from "../../../core/accessorSupport/decorators";
import {renderable} from "./support/widget";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  @property({
    value: "Art"
  })
  @renderable()
  firstName: string;

  @property({
    value: "Vandelay"
  })
  @renderable()
  lastName: string;

  render() {
    return (
      <div>{`Hello, my name is ${this.firstName} ${this.lastName}!`}</div>
    );
  }
}
```

The previous examples so far, have focused on rendering the initial state of the widget. Most widgets will require the UI to update during their lifespan. As you may now know, `render()` is where the UI is created. We can cause our widget to re-render by doing any of the following.

By using the `@renderable` decorator, our widget will now re-render whenever the decorated properties change.

**Note:**** `@renderable` is only applicable to properties. If your widget requires re-rendering by another means, say responding to an event, `scheduleRender` may be used instead.

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import topic = require("dojo/topic");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  postInitialize() {
    const handle = topic.subscribe("external-event-emitted", () => {
      this.scheduleRender();
    });

    // removes handle when destroyed
    this.own(handle);
  }

}
```

`@renderable` also accepts a property chain as an argument if you have nested object properties that your UI depends on:

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import {subclass, declared, property} from "../../../core/accessorSupport/decorators";
import {renderable} from "./support/widget";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  @property()
  @renderable("person.firstName")
  @renderable("person.lastName")
  person: Person;

  render() {
    return (
      <div>{`Hello, my name is ${this.person.firstName} ${this.person.lastName}!`}</div>
    );
  }
}
```

### Putting it all together

```tsx
/// <amd-dependency path="../../../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../../../core/tsSupport/decorateHelper" name="__decorate" />

import { eventKey } from "../../../core/events";

import {subclass, declared, property} from "../../../core/accessorSupport/decorators";

import Widget = require("../../../widgets/Widget");

import {renderable, jsxFactory} from "../../../widgets/support/widget";

import * as i18n from "dojo/i18n!../nls/HelloWorld";

const CSS = {
  base: "esri-hello-world",
  emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  @property({
    value: "Art"
  })
  @renderable()
  firstName: string;

  //----------------------------------
  //  lastName
  //----------------------------------

  @property({
    value: "Vandelay"
  })
  @renderable()
  lastName: string;

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property({
    value: false
  })
  @renderable()
  emphasized: boolean;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  greet() {
    const greeting = this._getGreeting();
    console.log(greeting);
    this.emit("greeted", {
      greeting: greeting
    });
  }

  render() {
    const greeting = this._getGreeting();
    const classes = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div role="button"
           bind={this}
           class={this.classes(CSS.base, classes)}
           onclick={this._handleClick}
           onkeydown={this._handleKeyDown}
           tabIndex="0"
           title={i18n.caption}>
      {greeting}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }

  private _handleClick() {
    this.greet();
  }

  private _handleKeyDown(event: KeyboardEvent) {
    const key = eventKey(event);

    if (key === "Enter" || key === " ") {
      this.greet();
    }
  }

}

export = HelloWorld;
```

### Using `HelloWorld` widget

```html
var widget;

require([
  "esri/widgets/examples/widgets/HelloWorld",
  "dojo/domReady!"
], function(
  HelloWorld
) {

  var names = [
    {
      firstName: "Kenny",
      lastName: "Banya"
    },
    {
      firstName: "Jackie",
      lastName: "Chiles"
    },
    {
      firstName: "Joe",
      lastName: "Devola"
    }
  ],
  nameIndex = 0;

  widget = new HelloWorld(names[nameIndex], "widgetDiv");

  function changeName() {
    widget.set(names[++nameIndex % names.length]);
  }

  setInterval(changeName, 1000);
});
```

See it in [action](./examples/demo-apps/hello-world).

## Advanced concepts

### Working with a viewModel

If your widget has an associated [ViewModel](#viewmodel), you can delegate properties, methods, and events easily by using widget view model decorators (see [TypeScript widget decorators](#ts-widget-decorators) for more info).

Extending our `HelloWorld` example, if we have a `HelloWorldViewModel` with the following API:

```
firstName: string;
lastName: string;
greet(): void;
getGreeting(): string; // emits "greeted" event with { greeting: greeting } as its payload
```

We could delegate to the view model as follows

```tsx
// previous sections omitted for brevity

import HelloWorldViewModel = require("./HelloWorld/HelloWorldViewModel");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  // delegates to viewmodel property
  @aliasOf("viewModel.firstName")
  @renderable()
  firstName: string;

  // delegates to viewmodel property
  @aliasOf("viewModel.lastName")
  @renderable()
  lastName: string;

  // redispatches the event when emitted from the view model
  @vmEvent("greeted")
  @property({
    type: HelloWorldViewModel
  })
  viewModel: HelloWorldViewModel = new HelloWorldViewModel()

  // delegates to the viewmodel method
  @aliasOf("viewModel.greet")
  greet(): void {}

  render() {
    const greeting = this.viewModel.getGreeting(); // from viewModel

    // render() parts omitted for brevity

    return (
      <div>
        {greeting}
      </div>
    );
  }

}
```

### `render()`

* This method must return a valid UI representation (VNode). If you need to toggle some content, consider wrapping the content in another node (see [Render relevant elements](#render-relevant-elements) below).

```tsx
render() {
  // invalid – `render` cannot return null
  return this.visible ? (
    <div>...</div>
  ) : null;
}
```

### Render relevant elements only

In each `render` call, create only relevant UI pieces. This will eliminate the need to hide/remove them explicitly with JavaScript or CSS.

**Rendering non-applicable elements (don't)**

```tsx
render() {
  // assume these methods always return some UI structure
  const title = this._createTitle();
  const body = this._createBody();

  // the following produces HTML for title and content
  return (
    <div>
      {title}
      {body}
    </div>
  );
}
```

**Not rendering non-applicable elements (do)**

```tsx
render() {
  const title = this._hasTitle ? this._createTitle() : null;
  const body = this._hasBody ? this._createBody() : null;

  // produces HTML for title and content ONLY if there is truly content
  return (
    <div>
      {title}
      {body}
    </div>
  );
}
```

### Binding

By default, functions referenced in your elements will have `this` set to the actual element.

```tsx
render() {
  return (
    <div onclick={whatIsThis}>`this` is the node</div>
  );
}

private _whatIsThis(): void {
  console.log(`this === node: ${this}`);
}
```

You can use the special `bind` attribute to change `this`.

```tsx
render() {
  return (
    <div bind={this} onclick={this._whatIsThis}>`this` is the widget instance</div>
  );
}

private _whatIsThis(): void {
  console.log(`this === widget: ${this}`);
}
```

### Distinguishable children

If you have sibling elements with the same selector and the elements will be added/removed dynamically, they need to be made distinguishable.

We do this by using the special `key` attribute:

```tsx
render() {
  const top = this.hasTop ? <li class={CSS.item} key="top">Top</header> : null;
  const middle = this.hasMiddle ? <li class={CSS.item} key="middle">Middle</section> : null;
  const bottom = this.hasBottom ? <li class={CSS.item} key="bottom">Bottom</footer> : null;

  return (
    <ol>
      {top}
      {middle}
      {bottom}
    </ol>
  );
}
```

**Note**: `key` can also be a number or object.

### Composite widgets

One of the main highlights of widgets is reusability. Composing widgets out of other widgets is a good way to promote reusability and not have to worry about reinventing the wheel.

Note that subcomponents **must** be created outside of `render`.

**HelloWorld.tsx**

```tsx
// previous sections omitted for brevity

import {subclass, declared, property} from "../../../core/accessorSupport/decorators";
import {renderable} from "./support/widget";

import RandomEmoji = require("./RandomEmoji");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  private _emoji = new RandomEmoji();

  render() {
    return (
      <div>
      {this._emoji.render()}  // we call the subcomponent's render() method to get its UI representation
      </div>
    );
  }
}
```

If your subcomponent has state, you can update it within `render()`:

```tsx
// previous sections omitted for brevity

import Emphasis = require("./Emphasis");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  private _emphasis: Emphasis = new Emphasis();

  render() {
    this._emphasis.text = `Hello, my name is ${this.firstName} ${this.lastName}!`;
    return (
      <div>
      {this._emphasis.render()}  // we call the subcomponent's render() method to get its UI representation
      </div>
    );
  }
}
```

**Note:** Whenever using subcomponents, you do not need to provide `container`/`srcRefNode`. You will only use `render()` to get your widget's UI representation and place it within the owner's `render()` method appropriately.

### Dynamic CSS classes

Starting in 4.7, `class` can be modified between renders. A helper was introduced to help unify CSS class setup. So, instead of having to use a different pattern based on whether classes are static (single), static (multiple) or dynamic:

**before 4.7**

```tsx
// join used for multiple static classes
import { /*..., */ join, tsx } from "esri/widgets/support/widget";

// ...

// render()
const dynamicClasses = {
  [CSS.dynamic1]: this.someProp,
  [CSS.dynamic2]: this.anotherProp
};

<div class={CSS.singleStatic} />
<div class={CSS.singleStatic} classes={dynamicClasses} />
<div class={join(CSS.multipleStatic1, CSS.multipleStatic2)} classes={dynamicClasses} />
```

We now have a single pattern that accommodates all cases: `class` JSX attribute + `Widget#classes`.

**4.7+**

```tsx
// join no longer required (deprecated)
import { /*..., */ tsx } from "esri/widgets/support/widget";

// ...

// render()
const dynamicClasses = {
  [CSS.dynamic1]: this.someProp,
  [CSS.dynamic2]: this.anotherProp
};

<div class={CSS.singleStatic} />
<div class={this.classes(CSS.singleStatic, dynamicClasses)}/>
<div class={this.classes(CSS.multipleStatic1, CSS.multipleStatic2, dynamicClasses)} />
```

Note that the `classes` attribute and `join` utility are now deprecated.

**CSS lookup object**

A lookup object is used to help keep CSS for maintanability.

```tsx
/*
 * Assuming:
 *
 * CSS = {
 *   bold: "esri-example--bold",
 *   italic: "esri-example--italic"
 * }
 *
 * The following pattern is error-prone due to duplication
 */

const dynamicClass = {
  "esri-example--bold": this.isBold,
  "esri-example--italic": this.isItalic
};
```

**with computed property syntax**

The CSS lookup object comes in handy when building the dynamic class objects used in `render`.

```tsx
const dynamicClass = {
  [CSS.bold]: this.isBold
  [CSS.italic]: this.isItalic
};
```

### Dynamic inline styles

Similar to `classes`, `styles` helps us apply styles dynamically:

```tsx
render() {
  const dynamicStyles = {
    background-color: this.__hasBackgroundColor ? "chartreuse" : ""
  };

  return (
    <div styles={dynamicStyles}>Hello World!</div>
  );
}
```

**Note:** Style values must be strings

### Spreading properties/attributes

```tsx
// previous sections omitted for brevity

// `assignHelper` is required for spreading
/// <amd-dependency path="../../../core/tsSupport/assignHelper" name="__assign" />

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  _staticProps: any = {
    "role": "button",
    tabIndex: "0",
    title: "static-title"
  }

  render() {
    // will render: <div role="button" tabindex="0" title="static-title">Hello World!</div>
    return (
      <div {...this._staticProps}>Hello World!</div>
    );
  }

}
```

The spread operator is a useful pattern if you already have an object with properties that you want to apply to a node.

## TypeScript widget decorators

The following decorators are available to ease widget development in TypeScript.

### Properties

* `@aliasOf` – used to delegate a property or method

  **Properties**
  ```tsx
  @aliasOf("viewModel.name")
  name: string;
  ```

  **Methods**
  ```tsx
  @aliasOf("viewModel.toLabel")
  toLabel(id: string): Label { return null; }

* [deprecated - see `@aliasOf`] ~~`@vmProperty()`~~ – used to delegate a property to a view model

  ```tsx
  @vmProperty()
  foo: string;
  ```

* `@renderable()` – used to automatically schedule renders when a property is modified

  ```tsx
  @renderable()
  partVisible = true;
  ```

  A property chain can be passed as an argument if the property has a child property that should trigger a render.

  ```tsx
  @renderable("viewModel.isActive")
  viewModel: ViewModelType = new ViewModelType()
  ```

  The following signatures are also supported:

  ```tsx
  @renderable("viewModel.propA, viewModel.propB")
  viewModel: ViewModelType = new ViewModelType()
  ```

  ```tsx
  @renderable([
    "viewModel.propA",
    "viewModel.propB"
  ])
  viewModel: ViewModelType;
  ```

* `@vmEvent` – used to delegate a view model event

  ```tsx
  @vmEvent("vm-event")
  viewModel: ViewModelType = new ViewModelType();
  ```

### Methods

* `@accessibleHandler` - used to execute a method when the space or enter key are pressed. (Note: triggers on keydown event)

  ```tsx
    @accessibleHandler()
    private _doSomething() {
      // ...
    }

    render() {
      return (
        <div onclick={this._doSomething}
             onkeydown={this._doSomething}
             tabIndex="0">:)</div>
      );
    }
  }
  ```

* [deprecated - see `@aliasOf`] ~~`@vmMethod`~~ – used to delegate a method to a view model (**NOTE:** requires method stub);

  ```tsx
  @vmMethod()
  bar() {}
  ```

## Gotchas

* Make sure your widget file uses the `tsx` extension. Otherwise, TypeScript will not recognize JSX.

* Remember to import `tsx`! It is required when using JSX. **Note:** IDEs may complain about the import not being used.

* JSX attributes vs. props – whenever you set an attribute with a string value, it'll render as an attribute. Otherwise, as a property:

  ```tsx
  _afterCreate(element: Element) {
    console.log(element);   // <div data-custom-attr="100">Hello World!</div>

    console.log(element.getAttribute("data-custom-attr"));  // '100'
    console.log(element.getAttribute("data-custom-prop"));  // 'undefined'

    console.log((element as any)["data-custom-attr"]);  // 'undefined'
    console.log((element as any)["data-custom-prop"]);  // 100
  }

  render() {
    return (
      <div afterCreate={this._afterCreate}
           data-custom-attr={"100"}
           data-custom-prop={100}>
           Hello World!
      </div>
    );
  }
  ```

  > By the way, a VNode-property will only become an attribute if its value is a string. Other type of values will become properties and can be read using evt.target[]

  [See maquette/issues/29](https://github.com/AFASSoftware/maquette/issues/29#issuecomment-183840013)

* Do not modify any renderable properties within `render()`, `afterCreate` or `afterUpdate`. Doing so, will cause an infinite loop.

  The only exception is when you can prevent unnecessary updates within `afterCreate` and `afterUpdate`:

  ```tsx
  afterCreate(node: Element) {
    if (this._somethingReallyChanged(node)) {
      this.scheduleRender();
    }
  }
  ```

* ~~Using space-delimited CSS dynamic classes throws an error.~~

**Note**: Starting in 4.7, this is no longer an issue.

 ```tsx
render() {

  // CSS.multi = "esri-example esri-example--active"
  const dynamicClass = {
    [CSS.multi]: this.someCondition
  };

  // throws error
  return (
    <div class={dynamicClass}>Hello World!</div>
  );
}
```

~~On the other hand, space-delimited static classes are allowed.~~

 ```tsx
 render() {

   // CSS.base = "esri-example esri-widget"

   return (
     <div class={CSS.base}>Hello World!</div>
   );
 }
 ```

* Avoid complex setups in the constructor. Use `postInitialize` instead.

## Widget file structure

The following is a high-level view of a widget's structure in the API.

```
esri/
    themes/
        base/
            widgets/
                <WidgetName>.scss
            _Core.scss // has option to include widget and its respective import
    widgets/
        <WidgetName>/
            nls/
                <WidgetName>.js
            <WidgetName>ViewModel.{js, ts}
        <WidgetName>.tsx
```

The next sections give more detail on this structure.

## Styling

### Sass

Sass files reside separately from the other widget files to allow us to distribute all of the Sass files as a submodule. This will give users full control over the CSS.

Assume we're styling `HelloWorld`. Its scss file would be located in `esri/themes/base/widgets/HelloWorld.scss`

**esri/themes/base/widgets/HelloWorld.scss**
```
@mixin HelloWorld(){
  // HelloWorld styles
}

@if $include_HelloWorld == true {
  @include HelloWorld();
}
```

Which is imported in `esri/themes/base/Core.scss` with a corresponding 'include' variable.

**esri/themes/base/_Core.scss**

```scss
/*
  Core Settings and Imports
*/

// Widgets (sorted alphabetically)
$include_Attribution      : true !default;
// ...
$include_HelloWorld       : true !default;

// ...

// Widgets (sorted alphabetically)
@import "widgets/Attribution";
// ...
@import "widgets/HelloWorld";
```

The API provides an NPM script to build all styles:

```
npm run build:styles
```

See [4.0 – styles](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/4.0-styles) for more info.

### CSS

CSS for widgets should follow [BEM (Block Element Modifier)](http://getbem.com/) conventions. This has the following benefits:

* Uses delimiters to separate block, element, modifiers
* Semantics (albeit verbose)
* Keeps specificity low
* Scopes styles to blocks

```css
 /* block */
.example-widget {}

/* block__element */
.example-widget__input {}
.example-widget__submit {}

/* block--modifier */
.example-widget--loading {}

/* block__element--modifier */
.example-widget__submit--disabled {}
```

For JS API widgets, the block must be prefixed with `esri-`, for example `.esri-compass` for the Compass widget.

## ViewModel

Public widgets (i.e., documented in the SDK) that have reusable behavior should have an associated view model. Internal widgets do not require a view model.

https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/4.0-Widget-'ViewModel'-Pattern

## Best Practices

* Be expressive! Be, be expressive!

  **Example 1**

  Compare

  ```tsx
  add("david", 30, 5.8, 195);
  ```

  to

  ```tsx
  const name = "david";
  const age = 30;
  const heightInFeet = 5.98;
  const weightInPounds = 195;

  add(name, age, heightInFeet, weightInPounds);
  ```

  **Example 2**

  Compare

  ```tsx
  test(i: string) {
    return i.test(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/);
  }
  ```

  to

  ```tsx
  isEmail(input: string): boolean {
    const emailPattern = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    return input.test(emailPattern);
  }
  ```

  **Example4**

  Compare

  ```tsx
  // renderable.ts

  export function renderable(nestedProperties?: string | string[]) {
    const nestedProps = typeof nestedProperties === "string" ?
      [...nestedProperties
        .split(",")
        .map(chain => chain.trim())
      ] :
      nestedProperties;

    return function (target: any, propertyName: string): void {
      if (!target._renderableProps) {
        target._renderableProps = [];
      }

      if (nestedProps) {
        target._renderableProps = [
          ...target._renderableProps,
          ...nestedProps.map((prop) => {
            prop = prop.replace(`${propertyName}.`, "");
            return `${propertyName}.${prop}`;
          })
        ];
      }
      else {
        target._renderableProps.push(propertyName);
      }
    };
  }
  ```

  to


  ```tsx
  // renderable.ts

  function splitProps(props: string): string[] {
    return props.split(",")
      .map(chain => chain.trim());
  }

  function normalizePropNames(names: string[], sourceName: string): string[] {
    return names.map(name => normalizePropName(name, sourceName));
  }

  function normalizePropName(name: string, sourceName: string): string {
    if (name.indexOf(sourceName) === 0) {
      return name;
    }

    return `${sourceName}.${name}`;
  }

  export function renderable(nestedProperties?: string | string[]): PropertyDecorator {
    const nestedProps = typeof nestedProperties === "string" ?
      splitProps(nestedProperties) :
      nestedProperties;

    return function (target: any, propertyName: string): void {
      if (!target._renderableProps) {
        target._renderableProps = [];
      }

      const renderableProps = target._renderableProps;

      if (!nestedProps) {
        renderableProps.push(propertyName);
        return;
      }

      renderableProps.push.apply(
        renderableProps,
        normalizePropNames(nestedProps, propertyName)
      );
    };
  }
  ```

## Tips

* In JSX, any element tag can be self-closed. This can be helpful if you have simple elements with no children:

  ```tsx
  return (
    <div class={CSS.base}>
      <div class={CSS.selfClosing} />
    </div>
   );
  ```

### Behind the scenes

Widget rendering is powered by [Maquette](http://maquettejs.org/).

The following resources are highly recommended:

* Rendering rules: http://maquettejs.org/docs/rules.html
* Tutorial: http://maquettejs.org/tutorial/01-intro.html
* Documentation: http://maquettejs.org/docs/typedoc/modules/_maquette_.html

Although we use JSX for defining our UI, we are not using React. This is because the transpiled JSX is processed by a custom JSX factory that uses Maquette's `h` function to create the VDOM. See [Maquette 2.2 now supports JSX](https://medium.com/maquette-news/maquette-2-2-now-supports-jsx-7da7b0a1dc98#.rw8b10wjw) for more information.

## Q&A

* What happened to HTML template files?

  Template files are long gone. Reasons:

  * Using JSX allows us to express our UI and gives context to how it'll behave. Templates obscure this by being separate.
  * For simple HTML, creating a separate HTML file introduces overhead.
  * Allowing JSX prevents anti-patterns where a complex widget uses a main template file and defines supporting widget templates inline.
  * No more exposed references to the widget's CSS & i18n variables.

* I have to use external text content, which may not be safe for `innerHTML`. How can I use `textContent`?

  Maquette uses `textContent` internally and appends Text nodes, so HTML is never parsed. [See maquette/issues/10](https://github.com/AFASSoftware/maquette/issues/10#issuecomment-96282384)

  The only way `innerHTML` would be used is if provided as an attribute, which is an anti-pattern:

   **ANTI-PATTERN**

  ```tsx
  render() {
    return (
      <div>
        {/*ANTI-PATTERN: DO NOT DO THIS!!!*/}
        <div innerHTML={this.maliciousText}></div>
      </div>
    );
  }
  ```

* Why Maquette?

  * VDOM - UI lib
  * Fast, easy to learn, easy to debug and predictable.
  * small 3kb (gzipped)
  * Sitepen is adopting it for Dojo 2 widgets and will provide support for us
  * Project is actively maintained
  * Supports JSX
  * Flexible
  * Stable
  * Inspired by [`React`](https://facebook.github.io/react/) & [`Mithril`](http://mithril.js.org/)

* How do I know when my widget's been attached to the DOM?

  http://maquettejs.org/docs/typedoc/interfaces/_maquette_.vnodeproperties.html#aftercreate

* How do I use comments in JSX?

  ```tsx
  const content = (
    <div class={CSS.base}>
      {/* child comment */}
      <div class={CSS.child}
           /*
            * multi
            * line
            */
           tabIndex="0"  // end of line
           title="my-title"></div>
    </div>
  );
  ```

* How do I know if my widget has been destroyed?

  You can use `Widget#destroyed`.

* How do I reference a widget's DOM node?

  Only widgets that are instantiated programmatically: e.g., `new Widget(args, container);` will have a reference to the root DOM node via `container`/`srcRefNode`.

  Within `render()`, you can access the real DOM node with `afterCreate()`:

  ```tsx
  render() {
    return (
      <div afterCreate={this._doSomethingWithRootNode}>Hello World!</div>
    );
  }
  ```

  `afterCreate()` can also be used per-element:

  ```tsx
  render() {
    return (
      <div afterCreate={this._doSomethingWithRootNode}>
        <span afterCreate={this._doSomethingWithChildNode}>Hello World!<span>
      </div>
    );
  }
  ```

  **Note:** Storing a reference to the node reference passed to `afterCreate` is not advised since it is not likely to be the same:

  TODO: INVESTIGATE!

  ```tsx
  _previousNode: Element;

  _compareWithPrevious(node: Element) {
    console.log("same as previous?", this._previousNode === node);
    this._previousNode = node;
  }

  render() {
    return (
      <div afterCreate={this._compareWithPrevious} bind={this}>
        <span afterCreate={this._compareWithPrevious} bind={this}>Hello World!<span>
      </div>
    );
  }

  // logs true for the root node, false for the child
  ```

## Additional Examples

You can take a look at the [4x-widget-snippets](https://github.com/jcfranco/4x-widget-snippets/) repo to look at some focused snippets.

## Additional References

* [Development Guidelines](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/Dev-Guidelines)
* [Widget Development Guidelines (needs updating)](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/Widget-Development-Guidelines)
* [Accessibility](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/4.0-Widget-508-accessibility-and-semantics/)
* [Accessor usage patterns in TypeScript](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/%5B4.0-Guides%5D-Accessor-usage-patterns-in-typescript)
* [4.0 Developer Documentation](https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/4.0-Developer-Documentation)
* [ArcGIS API for JavaScript SDK – Styling](https://developers.arcgis.com/javascript/latest/guide/styling/index.html)

## Unresolved/Workarounds

* RTL approach/helpers – for now widget's can check document.dir?
* Storing and accessing current widget DOMNode – the only way to do this is via `afterCreate`, which needs to be added to the UI definition (JSX/h syntax). Storing this may not be feasible since it'll change if the DOM is recreated.
* React-ish way of passing props down or customizing components is not possible:

  ```tsx
  // not possible because JSX expects the SubComponent to expose the React.Component API
  render() {
    return (
      <div class="root">
        <SubComponent class="parent-given-class" />
      </div>
    )
  }
  ```

  ```tsx
  render() {
    const subComponentNode = this._subComponent.render();

     // not possible because modifying VDOM breaks maquette's API contract
    subComponentNode.class = "parent-given-class";

    return (
      <div class="root">
        <SubComponent />
      </div>
    )
  }
  ```

  ```tsx
  render() {
     // this could work, but it makes the API slightly more complex
    this._subComponent.overrides = {
      class: "parent-given-class"
    };

    return (
      <div class="root">
        {this._subComponent.render()}
      </div>
    )
  }
  ```

## Known issues (working on it!)

~~* `destroy` not unmounting widget~~ **fixed**

## Breaking changes

* The `visible` property from Widget has been removed. Widget subclasses will need to implement their own `visible` property if necessary.

## Notes

* In order to support dynamically adding/removing DOM event/listeners an event map proxy needs to be added to the appropriate node inside `render()`. Doing so has the unfortunate side-effect of causing multiple renders when these DOM events are fired. This may be fixed in the future by leveraging an [advanced projector](https://github.com/AFASSoftware/maquette/issues/51#issuecomment-216896321).
