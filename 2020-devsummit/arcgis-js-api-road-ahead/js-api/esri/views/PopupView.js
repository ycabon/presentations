// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/awaiterHelper ../core/tsSupport/generatorHelper ../core/arrayUtils ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators".split(" "),function(w,d,x,t,u,n,p,v,h,q,r){Object.defineProperty(d,"__esModule",{value:!0});d.PopupView=function(d){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}t(a,d);a.prototype.fetchPopupFeatures=
function(b,c){return this._fetchPopupFeaturesAsync(b,c)};a.prototype._fetchPopupFeaturesAsync=function(b,c){return n(this,void 0,void 0,function(){var e,l,g,f,a,k;return p(this,function(m){switch(m.label){case 0:return[4,this.when()];case 1:return m.sent(),[4,this._prepareFetchPopupFeatures(b,c)];case 2:return e=m.sent(),l=e.location,g=this._queryLayerPopupFeatures(e,c),f=q.resolve(e.clientOnlyGraphics),a=[f].concat(g),k=q.eachAlwaysValues(a).then(v.flatten),[2,{promise:k,location:l,promises:a}]}})})};
a.prototype._queryLayerPopupFeatures=function(b,c){var e=b.queryArea;return b.layerViewsAndGraphics.map(function(b){var a=b.layerView;b={clientGraphics:b.graphics,event:h.isSome(c)?c.event:null,signal:h.isSome(c)?c.signal:null,defaultPopupTemplateEnabled:h.isSome(c)?!!c.defaultPopupTemplateEnabled:!1};return a.fetchPopupFeatures(e,b)})};a.prototype._isValidPopupGraphic=function(b,c){return b&&!!b.getEffectivePopupTemplate(h.isSome(c)&&c.defaultPopupTemplateEnabled)};a.prototype._prepareFetchPopupFeatures=
function(b,c){return n(this,void 0,void 0,function(){var e,a,g,f,d,k,m,h;return p(this,function(l){switch(l.label){case 0:return[4,this._popupHitTestGraphics(b,c)];case 1:return e=l.sent(),a=e.clientGraphics,g=e.queryArea,f=e.location,d=this._getFetchPopupLayerViews(),k=this._graphicsPerFetchPopupLayerView(a,d),m=k.layerViewsAndGraphics,h=k.clientOnlyGraphics,[2,{clientOnlyGraphics:h,layerViewsAndGraphics:m,queryArea:g,location:f}]}})})};a.prototype._popupHitTestGraphics=function(b,c){return n(this,
void 0,void 0,function(){var a,l,g,f,d,k,m=this;return p(this,function(e){switch(e.label){case 0:return[4,this.popupHitTest(b)];case 1:return a=e.sent(),l=a.results,g=a.mapPoint,f=l.filter(function(b){return m._isValidPopupGraphic(b.graphic,c)}),d=f.length?f[0].mapPoint:null,k=f.map(function(b){return b.graphic}),[2,{clientGraphics:k,queryArea:g,location:g||d}]}})})};a.prototype._getFetchPopupLayerViews=function(){var b=this,c=[];this.allLayerViews.forEach(function(a){b._isValidPopupLayerView(a)&&
c.push(a)});h.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&c.push(this.graphicsView);return c.reverse()};a.prototype._isValidPopupLayerView=function(b){return h.isSome(b)&&(!("layer"in b)||!b.suspended)&&"fetchPopupFeatures"in b};a.prototype._graphicsPerFetchPopupLayerView=function(b,a){var c=[],d=new Map;a=a.map(function(a){var b=[];"layer"in a?d.set(a.layer,b):d.set(a.graphics,b);return{layerView:a,graphics:b}});for(var g=0;g<b.length;g++){var f=b[g],h=d.get(f.layer)||
null;h?h.push(f):c.push(f)}return{layerViewsAndGraphics:a,clientOnlyGraphics:c}};return a=u([r.subclass("esri.views.PopupView")],a)}(r.declared(d))}});