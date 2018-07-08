// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Compass/nls/Compass ../core/accessorSupport/decorators ./Widget ./Compass/CompassViewModel ./support/widget".split(" "),function(n,p,l,c,g,b,m,e,f){return function(k){function a(a){a=k.call(this)||this;a.activeMode=null;a.goToOverride=null;a.iconClass="esri-icon-locate-circled";a.label=g.widgetLabel;a.modes=null;a.view=null;a.viewModel=new e;return a}l(a,k);a.prototype.reset=function(){};a.prototype.render=
function(){var a=this.viewModel.orientation,c=this.viewModel.state,b="disabled"===c,e="compass"===("rotation"===c?"rotation":"compass"),c=b?-1:0,b=(d={},d["esri-disabled"]=b,d["esri-compass--active"]="device-orientation"===this.viewModel.activeMode,d["esri-interactive"]=!b,d),d=(h={},h["esri-icon-compass"]=e,h["esri-icon-dial"]=!e,h);return f.tsx("div",{bind:this,class:this.classes("esri-compass esri-widget--button esri-widget",b),onclick:this._start,onkeydown:this._start,role:"button",tabIndex:c,
"aria-label":g.reset,title:g.reset},f.tsx("span",{"aria-hidden":"true",class:this.classes("esri-compass__icon",d),styles:this._toRotationTransform(a)}),f.tsx("span",{class:"esri-icon-font-fallback-text"},g.reset));var d,h};a.prototype._start=function(){var a=this.viewModel;a.nextMode();a.startMode()};a.prototype._toRotationTransform=function(a){return{transform:"rotateZ("+a.z+"deg)"}};c([b.aliasOf("viewModel.activeMode")],a.prototype,"activeMode",void 0);c([b.aliasOf("viewModel.goToOverride")],a.prototype,
"goToOverride",void 0);c([b.property()],a.prototype,"iconClass",void 0);c([b.property()],a.prototype,"label",void 0);c([b.aliasOf("viewModel.modes")],a.prototype,"modes",void 0);c([b.aliasOf("viewModel.view")],a.prototype,"view",void 0);c([b.property({type:e}),f.renderable(["viewModel.orientation","viewModel.state"])],a.prototype,"viewModel",void 0);c([b.aliasOf("viewModel.reset")],a.prototype,"reset",null);c([f.accessibleHandler()],a.prototype,"_start",null);return a=c([b.subclass("esri.widgets.Compass")],
a)}(b.declared(m))});