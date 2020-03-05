// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/domUtils ../../core/accessorSupport/decorators".split(" "),function(k,l,f,d,g,h,c){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.widget=null;return a}f(b,e);b.prototype.destroy=function(){this.widget&&this.widget.destroy();this.node=null};Object.defineProperty(b.prototype,"id",{get:function(){return this.get("widget.id")||this.get("node.id")},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"node",{set:function(a){var b=this._get("node");a!==b&&(a&&a.classList.add("esri-component"),b&&b.classList.remove("esri-component"),this._set("node",a))},enumerable:!0,configurable:!0});b.prototype.castNode=function(a){if(!a)return this._set("widget",null),null;if("string"===typeof a||a&&"nodeType"in a)return this._set("widget",null),h.byId(a);a&&"function"===typeof a.render&&!a.domNode&&(a.domNode=document.createElement("div"));this._set("widget",
a);return a.domNode};d([c.property()],b.prototype,"id",null);d([c.property()],b.prototype,"node",null);d([c.cast("node")],b.prototype,"castNode",null);d([c.property({readOnly:!0})],b.prototype,"widget",void 0);return b=d([c.subclass("esri.views.ui.Component")],b)}(c.declared(g))});