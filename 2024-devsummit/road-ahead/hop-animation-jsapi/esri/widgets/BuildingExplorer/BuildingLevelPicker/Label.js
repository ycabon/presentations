// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/legacyIcon ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(a,c,d,m,n,p,f,g,h,q,e){const k={clearLevel:"",selectLevel:""};a.Label=class extends g{constructor(b,l){super(b,l);this.level=null;this.hovering=this.active=!1;this.onClear=()=>{}}render(){var b=
this.messages??k;if(null==this.level)return e.tsx("div",{class:"esri-building-level-picker-label--empty",title:b.selectLevel},b.selectLevel);b=b.clearLevel;return e.tsx("div",{"aria-label":b,bind:this,class:this.classes("esri-building-level-picker-label",{["esri-building-level-picker-label--active"]:this.active,["esri-building-level-picker-label--hover"]:this.hovering}),onclick:this.onClear,title:b},e.tsx("span",null,this.level),e.tsx("button",{bind:this,class:this.classes("esri-building-level-picker-label__clear-button",
h.legacyIcon.close),disabled:!this.active,onclick:this.onClear,type:"button"}))}};c.__decorate([d.property()],a.Label.prototype,"level",void 0);c.__decorate([d.property({nonNullable:!0})],a.Label.prototype,"active",void 0);c.__decorate([d.property({nonNullable:!0})],a.Label.prototype,"hovering",void 0);c.__decorate([d.property()],a.Label.prototype,"messages",void 0);c.__decorate([d.property({nonNullable:!0})],a.Label.prototype,"onClear",void 0);a.Label=c.__decorate([f.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],
a.Label);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});