// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Handles ../../core/lang ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/support/webMercatorUtils".split(" "),function(w,x,q,k,r,m,t,n,l,h,u,v){return function(p){function d(a){a=p.call(this,a)||this;a._handles=new t;a._pendingAttributionItemsByLayerId={};a._attributionDataByLayerId={};a.items=new m;
a.view=null;a._updateAttributionItems=a._updateAttributionItems.bind(a);return a}q(d,p);d.prototype.initialize=function(){this._handles.add(l.init(this,"view",this._viewWatcher))};d.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(d.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});d.prototype._viewWatcher=function(a){var c=this,e=this._handles;e&&e.remove();a&&(e.add([a.allLayerViews.on("change",
function(a){c._addLayerViews(a.added);0<a.removed.length&&(a.removed.forEach(function(a){e.remove(a.uid)}),c._updateAttributionItems())}),l.init(a,"stationary",this._updateAttributionItems)]),this._addLayerViews(a.allLayerViews))};d.prototype._addLayerViews=function(a){var c=this;a.forEach(function(a){c._handles.has(a.uid)||c._handles.add(l.init(a,"suspended",c._updateAttributionItems),a.uid)})};d.prototype._updateAttributionItems=function(){var a=this,c=[];this._getActiveLayerViews().forEach(function(e){var b=
e.layer;if(!b.hasAttributionData){if(e=b.get("copyright")){var d=a._findItem(c,{layer:b,text:e});d||c.push({text:e,layer:b})}}else if(b&&b.tileInfo){var f=a._attributionDataByLayerId;if(f[b.uid]){if(e=a._getDynamicAttribution(f[b.uid],a.view,b))(d=a._findItem(c,{layer:b,text:e}))||c.push({text:e,layer:b})}else{var g=a._pendingAttributionItemsByLayerId;a._inProgress(g[b.uid])||(g[b.uid]=b.fetchAttributionData().then(function(c){c=a._createContributionIndex(c,a._isBingLayer(b));delete g[b.uid];f[b.uid]=
c;a._updateAttributionItems()}))}}});this._itemsChanged(this.items,c)&&(this.items.removeAll(),this.items.addMany(c))};d.prototype._itemsChanged=function(a,c){return a.length!==c.length||a.some(function(a,b){return a.text!==c[b].text})};d.prototype._inProgress=function(a){return a&&!a.isFulfilled()};d.prototype._getActiveLayerViews=function(){return this.get("view.allLayerViews").filter(function(a){return!a.suspended&&a.get("layer.attributionVisible")})};d.prototype._findItem=function(a,c){var e=
c.layer,b=c.text,d;a.some(function(a){var c=a.layer===e&&a.text===b;c&&(d=a);return c});return d};d.prototype._isBingLayer=function(a){return"bing-maps"===a.type};d.prototype._createContributionIndex=function(a,c){a=a.contributors;var d={};if(!a)return d;a.forEach(function(a,e){var b=a.coverageAreas;b&&b.forEach(function(b){var g=b.bbox,f=b.zoomMin-(c&&b.zoomMin?1:0),h=b.zoomMax-(c&&b.zoomMax?1:0);a={extent:v.geographicToWebMercator(new u({xmin:g[1],ymin:g[0],xmax:g[3],ymax:g[2]})),attribution:a.attribution||
"",score:n.isDefined(b.score)?b.score:100,id:e};for(b=f;b<=h;b++)d[b]=d[b]||[],d[b].push(a)})});d.maxKey=Math.max.apply(null,Object.keys(d));return d};d.prototype._getDynamicAttribution=function(a,c,d){var b=c.extent;c=d.tileInfo.scaleToZoom(c.scale);c=Math.min(a.maxKey,Math.round(c));if(!b||!n.isDefined(c)||-1>=c)return"";a=a[c];var e=b.center.clone().normalize(),f={};return a.filter(function(a){var b=!f[a.id]&&a.extent.contains(e);b&&(f[a.id]=!0);return b}).sort(function(a,b){return b.score-a.score||
a.objectId-b.objectId}).map(function(a){return a.attribution}).join(", ")};k([h.property({readOnly:!0,type:m})],d.prototype,"items",void 0);k([h.property({dependsOn:["view.ready"],readOnly:!0})],d.prototype,"state",null);k([h.property()],d.prototype,"view",void 0);return d=k([h.subclass("esri.widgets.Attribution.AttributionViewModel")],d)}(h.declared(r))});