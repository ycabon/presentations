// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../resources ../../support/widget ../../support/jsxFactory".split(" "),function(e,g,k,l,m,n,h,c,f,d){e.FeatureContentMixin=b=>{b=class extends b{constructor(){super(...arguments);this.renderNodeContent=a=>f.isWidget(a)&&!a.destroyed?d.tsx("div",{class:c.css.contentNode,key:a},a.render()):a instanceof HTMLElement?d.tsx("div",
{afterCreate:this._attachToNode,bind:a,class:c.css.contentNode,key:a}):f.hasDomNode(a)?d.tsx("div",{afterCreate:this._attachToNode,bind:a.domNode,class:c.css.contentNode,key:a}):null}_attachToNode(a){a.appendChild(this)}};return b=g.__decorate([h.subclass("esri.widgets.Feature.ContentMixin")],b)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});