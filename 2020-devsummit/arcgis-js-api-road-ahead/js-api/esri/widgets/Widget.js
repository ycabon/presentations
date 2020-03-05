// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/domUtils ../core/Evented ../core/Handles ../core/Logger ../core/watchUtils ../core/accessorSupport/decorators ../libs/maquette/index ./support/widget".split(" "),function(v,w,h,k,d,f,l,m,n,p,e,c,q,r){var t=p.getLogger("esri.widgets.Widget"),u=0;return function(g){function b(a,b){a=g.call(this,a,b)||this;a._attached=!1;a.destroyed=!1;a.domNode=null;
a.iconClass="esri-icon-checkbox-unchecked";a.label=a.declaredClass.split(".").pop();a.visible=!0;a._internalHandles=new n;a.render=a.render.bind(a);return a}k(b,g);b.prototype.normalizeCtorArgs=function(a,b){a=h({},a);b&&(a.container=b);return a};b.prototype.initialize=function(){var a=this;this._internalHandles.add(this._renderableProps.map(function(b){return e.init(a,b,function(a,c){var d=this;f.isCollection(c)&&this._internalHandles.remove(this.declaredClass+":"+b+"-collection-change-event-listener");
f.isCollection(a)&&(a=a.on("change",function(){return d.scheduleRender()}),this._internalHandles.add(a,this.declaredClass+":"+b+"-collection-change-event-listener"));this.scheduleRender()})}));this._delegatedEventNames.length&&this._internalHandles.add(e.init(this,"viewModel",function(){a._get("viewModel")&&a._internalHandles.remove("delegated-events");a._delegatedEventNames.map(function(b){return a.viewModel.on(b,function(c){a.emit(b,c)})})}),"delegated-events");this.postInitialize();this._internalHandles.add(e.whenOnce(this,
"container",function(b){return a._attach(b)}))};b.prototype.postInitialize=function(){};b.prototype.destroy=function(){this.destroyed||(this.viewModel&&(this.viewModel.destroy(),this.viewModel=null),this._detach(this.container),this._internalHandles.destroy(),this._emitter.clear(),this._set("destroyed",!0))};b.prototype.startup=function(){t.warn("Widget.startup() is deprecated and no longer needed")};Object.defineProperty(b.prototype,"container",{set:function(a){this._get("container")||this._set("container",
a)},enumerable:!0,configurable:!0});b.prototype.castContainer=function(a){return l.byId(a)};Object.defineProperty(b.prototype,"id",{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+u++},set:function(a){a&&this._set("id",a)},enumerable:!0,configurable:!0});b.prototype.render=function(){throw Error("not implemented");};b.prototype.scheduleRender=function(){this._projector.scheduleRender()};b.prototype.classes=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=
arguments[b];return r.classes.apply(this,a)};b.prototype.own=function(a){1<arguments.length&&(a=Array.prototype.slice.call(arguments));this._internalHandles.add(a)};b.prototype.renderNow=function(){this._projector.renderNow()};b.prototype._attach=function(a){a&&(this._projector.merge(a,this.render),this._attached=!0)};b.prototype._detach=function(a){a&&this._attached&&(this._projector.detach(this.render),a.parentNode&&a.parentNode.removeChild(a),this._attached=!1)};d([c.shared(q.createProjector())],
b.prototype,"_projector",void 0);d([c.shared([])],b.prototype,"_renderableProps",void 0);d([c.shared([])],b.prototype,"_delegatedEventNames",void 0);d([c.property({value:null})],b.prototype,"container",null);d([c.cast("container")],b.prototype,"castContainer",null);d([c.property({readOnly:!0})],b.prototype,"destroyed",void 0);d([c.property({aliasOf:"container"})],b.prototype,"domNode",void 0);d([c.property()],b.prototype,"iconClass",void 0);d([c.property({dependsOn:["container"]})],b.prototype,"id",
null);d([c.property()],b.prototype,"label",void 0);d([c.property()],b.prototype,"viewModel",void 0);d([c.property()],b.prototype,"visible",void 0);return b=d([c.subclass("esri.widgets.Widget")],b)}(c.declared(m.EventedAccessor))});