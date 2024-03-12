// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/handleUtils","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Object3DStateID"],function(d,e,f,g){class h{constructor(a){this._context=a;this._highlights=new Set}get empty(){return 0===this._highlights.size}destroy(){this._highlights=null}add(a){const b=new k(a);this._highlights.add(b);this._enableSet(b);return e.makeHandle(()=>this._removeSet(b))}_removeSet(a){this._disableSet(a);this._highlights.delete(a)}_enableSet(a){a.enabled||(a.enabled=!0,
this._context.forEachNode(b=>this._enableSetForNode(a,b)))}_enableSetForNode(a,b){if(a.enabled){var c=a.ids.get(b.id);c&&c.forEach(l=>this._context.addHighlight(b,l,a.id))}}_disableSet(a){a.enabled&&(a.enabled=!1,this._context.forEachNode(b=>this._disableSetForNode(a,b)))}_disableSetForNode(a,b){a.enabled||this._context.removeHighlight(b,a.id)}nodeAdded(a){this._highlights.forEach(b=>this._enableSetForNode(b,a))}nodeRemoved(a){this._highlights.forEach(b=>this._disableSetForNode(b,a))}removeAll(){this._highlights.forEach(a=>
this._disableSet(a))}}class k{constructor(a){this.id=new g.Object3DStateID(f.Object3DState.Highlight);this.ids=new Map;this.enabled=!1;for(const b of a)null!=b&&this._add(b.nodeId,b.pointId)}_add(a,b){const c=this.ids.get(a);c?c.add(b):this.ids.set(a,new Set([b]))}}d.PointHighlights=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});