// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Collection ../../../core/handleUtils ../../../core/reactiveUtils ../../../core/Logger ../../../core/has ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../engine/highlightReasons ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(n,p,q,r,k,f,h,y,z,t,u,v,l,m,w){h=class extends v.LayerView2DMixin(w){constructor(){super(...arguments);
this._highlightIds=new Map}*graphicsViews(){null!=this._graphicsViewsFeatureCollectionMap?yield*this._graphicsViewsFeatureCollectionMap.keys():null!=this._graphicsViews?yield*this._graphicsViews:yield*[]}async hitTest(a,b){return Array.from(this.graphicsViews(),c=>{const d=c.hitTest(a);if(null!=this._graphicsViewsFeatureCollectionMap){c=this._graphicsViewsFeatureCollectionMap.get(c);for(const e of d)!e.popupTemplate&&c.popupTemplate&&(e.popupTemplate=c.popupTemplate),e.sourceLayer=e.layer=this.layer}return d}).flat().map(c=>
({type:"graphic",graphic:c,layer:this.layer,mapPoint:a}))}highlight(a){let b;"number"===typeof a?b=[a]:a instanceof p?b=[a.uid]:Array.isArray(a)&&0<a.length?b="number"===typeof a[0]?a:a.map(d=>d&&d.uid):r.isCollection(a)&&(b=a.map(d=>d&&d.uid).toArray());const c=b?.filter(q.isSome);if(!c?.length)return k.makeHandle();this._addHighlight(c);return k.makeHandle(()=>this._removeHighlight(c))}update(a){for(const b of this.graphicsViews())b.processUpdate(a)}attach(){const a=this.view,b=()=>this.requestUpdate();
var c=this.layer.featureCollections;if(null!=c&&c.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const d of c){c=new l(this.view.featuresTilingScheme);const e=new m({view:a,graphics:d.source,renderer:d.renderer,requestUpdateCallback:b,container:c});this._graphicsViewsFeatureCollectionMap.set(e,d);this.container.addChild(e.container);this.addHandles([f.watch(()=>d.visible,g=>e.container.visible=g,f.initial),f.watch(()=>e.updating,()=>this.notifyChange("updating"),f.initial)],"layerView")}this._updateHighlight()}else null!=
this.layer.sublayers&&this.addHandles(f.on(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),"sublayers")}detach(){this._destroyGraphicsViews();this.removeHandles("sublayers")}moveStart(){}moveEnd(){}viewChange(){for(const a of this.graphicsViews())a.viewChange()}isUpdating(){for(const a of this.graphicsViews())if(a.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren();
this.removeHandles("layerView");for(const a of this.graphicsViews())a.destroy();this._graphicsViewsFeatureCollectionMap=this._graphicsViews=null}_createGraphicsViews(){this._destroyGraphicsViews();if(null!=this.layer.sublayers){var a=[],b=this.view,c=()=>this.requestUpdate();for(const d of this.layer.sublayers){const e=new l(this.view.featuresTilingScheme);e.fadeTransitionEnabled=!0;const g=new m({view:b,graphics:d.graphics,requestUpdateCallback:c,container:e});this.addHandles([d.on("graphic-update",
g.graphicUpdateHandler),f.watch(()=>d.visible,x=>g.container.visible=x,f.initial),f.watch(()=>g.updating,()=>this.notifyChange("updating"),f.initial)],"layerView");this.container.addChild(g.container);a.push(g)}this._graphicsViews=a;this._updateHighlight()}}_addHighlight(a){for(const b of a)this._highlightIds.has(b)?(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()}_removeHighlight(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-
1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,a));this._updateHighlight()}_updateHighlight(){const a=Array.from(this._highlightIds.keys()),b=u.getHighlightBits("highlight");for(const c of this.graphicsViews())c.setHighlight(a.map(d=>({objectId:d,highlightFlags:b})))}};return h=n.__decorate([t.subclass("esri.views.2d.layers.MapNotesLayerView2D")],h)});