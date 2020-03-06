// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils ../../support/arcadeOnDemand ./support/popupUtils".split(" "),function(C,c,y,e,q,f,z,r,g,b,A,B,u){Object.defineProperty(c,"__esModule",{value:!0});c.MapImageLayerView=function(c){return function(c){function d(){return null!==
c&&c.apply(this,arguments)||this}y(d,c);d.prototype.fetchPopupFeatures=function(c,d){return f(this,void 0,void 0,function(){var b,k,l,m,e,v,w,x=this;return q(this,function(n){switch(n.label){case 0:b=this.layer;if(!c)return[2,g.reject(new z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:b}))];k=this.get("view.scale");l=[];m=function(a){return f(x,void 0,void 0,function(){var c,b,t;return q(this,function(h){switch(h.label){case 0:c=0===a.minScale||k<=a.minScale;b=0===
a.maxScale||k>=a.maxScale;if(!(a.visible&&c&&b))return[3,4];if(!a.sublayers)return[3,1];a.sublayers.forEach(m);return[3,4];case 1:return a.popupEnabled?!r.isSome(d)||!d.defaultPopupTemplateEnabled||a.loaded||a.popupTemplate?[3,3]:[4,a.load().catch(function(){})]:[3,4];case 2:h.sent(),h.label=3;case 3:t=u.getFetchPopupTemplate(a,d),r.isSome(t)&&l.push({sublayer:a,popupTemplate:t}),h.label=4;case 4:return[2]}})})};e=b.sublayers.toArray().map(m);return[4,g.all(e)];case 1:return n.sent(),v=l.map(function(a){var b=
a.sublayer,e=a.popupTemplate;return f(x,void 0,void 0,function(){var a,h,f,g,k,l,m,n;return q(this,function(p){switch(p.label){case 0:return a=b.createQuery(),h=r.isSome(d)?d.event:null,f=A.calculateTolerance({renderer:b.renderer,event:h}),g=this.createFetchPopupFeaturesQueryGeometry(c,f),a.geometry=g,k=a,[4,u.getRequiredFields(b,e)];case 1:return k.outFields=p.sent(),[4,this._loadArcadeModules(e)];case 2:return m=(l=p.sent())&&l.arcadeUtils.hasGeometryOperations(e),m||(a.maxAllowableOffset=g.width/
f),[4,b.queryFeatures(a)];case 3:return n=p.sent(),[2,n.features]}})})}),[4,g.eachAlways(v)];case 2:return w=n.sent(),[2,w.reduce(function(a,b){return a.concat(b.value)},[]).filter(function(a){return null!=a})]}})})};d.prototype._loadArcadeModules=function(b){if(b.get("expressionInfos.length"))return B.loadArcade()};e([b.property()],d.prototype,"layer",void 0);return d=e([b.subclass("esri.views.layers.MapImageLayerView")],d)}(b.declared(c))}});