# Sass + ArcGIS for JavaScript API 4.x

The ArcGIS for JavaScript API 4.x uses [Sass](http://sass-lang.com/) for styling. Sass powers up our CSS and allows us to leverage variables, mixins, and functions.

All Sass files are packaged here to make it easier to work with and to gives you more control over the CSS.

## Themes

One of the advantages of using Sass is that it allows us to easily author themes.

The following themes are available:

* light (default)
* dark
* light-blue
* dark-blue
* light-green
* dark-green
* light-purple
* dark-purple
* light-red
* dark-red

Note that theme files are independent, so there is no need to import `esri/css/main.css` in addition to a theme.

[Demo](http://jsbin.com/vojaru/edit?html,output)

## Compiling

An NPM script is provided to make compiling Sass a straightforward process:

```
npm run build:styles
```

There is also a watcher task available:

```
npm run watch:styles
```

This compiles all Sass files under each theme folder (excluding base), see the **Structure** section below for more information.

## Structure

The following is a simplified look at the themes folder structure:

```
esri/
+-- themes/
    +-- base/
    |   +-- colors
    |   +-- fonts
    |   +-- icons
    |   +-- images
    |   +-- widgets
    |
    +-- <theme>
        +-- main.scss
```

`base` contains the foundation for all themes. Here we define variables, functions, mixins, and other helpers, such as color, font, and icon resources.

Each theme folder has a `main.scss` file which will produce a matching `css` file when compiled.

## Working with Themes

Each theme has a `main.scss` and a simple way to get started is to to define any variable overrides, and then import `esri/themes/base/_core.scss`:

```scss
/*
  Theme: Skinny Green Latte
*/

// variable overrides
$button_width          : 28px;
$button_height         : 28px;

$text_size             : 12px;

$text_color                 : #fff;
$background_color           : #00704a;
$anchor_color               : #00704a;
$anchor_hover_color         : #000;
$interactive_text_color          : #fff;
$interactive_text_color--hover    : #000;

// import theme base
@import "../base/core";
```

If you want more control, you can also create the theme to your liking and import any base dependencies as needed.

```scss
@import "../base/mixins";  // mixins are now available for use

// custom scss goes here
```

By default `_core.scss` will include the styles for all widgets. You can make the output stylesheets leaner by excluding widget styles. Excluding widget styles is now simpler:

```scss
// exclude non-default widgets
$include_BasemapToggle    : false;
$include_ColorPicker      : false;
$include_HorizontalSlider : false;
$include_Legend           : false;
$include_RendererSlider   : false;
$include_Search           : false;
$include_Tags             : false;

@import "../base/core";
```

## Widget Sass Files

In the previous section, you saw how to exclude widget styles by using an 'include' variable. Updating your widget scss file to support this pattern is straightforward.

Assume we are styling `HelloWorld`. Its Sass file will look like the following:

**esri/themes/base/widgets/HelloWorld.scss**
```
@mixin HelloWorld(){
  // HelloWorld styles
}

@if $include_HelloWorld == true {
  @include HelloWorld();
}
```

Which is imported in `esri/themes/base/_core.scss` with a matching 'include' variable.

**esri/themes/base/_core.scss**

```scss
/*
  Core Settings and Imports
*/

// Widgets (sorted alphabetically)
// ...
$include_HelloWorld       : true !default;

// ...

// Widgets (sorted alphabetically)
// ...
@import "widgets/HelloWorld";
```

## References

* http://sass-lang.com/guide
* https://github.com/sindresorhus/grunt-sass
