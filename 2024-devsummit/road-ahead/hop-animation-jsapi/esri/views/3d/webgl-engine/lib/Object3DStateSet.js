// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./basicInterfaces"],function(e,f){var d;(function(a){a[a.Object=0]="Object";a[a.RenderGeometry=1]="RenderGeometry";a[a.External=2]="External";a[a.COUNT=3]="COUNT"})(d||={});class g{constructor(){this._items=[]}addObject(a,b){this._items.push({type:d.Object,objectStateId:b,object:a})}addRenderGeometry(a,b,c){this._items.push({type:d.RenderGeometry,objectStateId:b,renderGeometry:a,owner:c})}addExternal(a,b){this._items.push({type:d.External,objectStateId:b,remove:a})}remove(a){for(let b=
this._items.length-1;0<=b;--b){const c=this._items[b];c.objectStateId===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}}removeObject(a){for(let b=this._items.length-1;0<=b;--b){const c=this._items[b];c.type===d.Object&&c.object===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}}removeRenderGeometry(a){for(let b=this._items.length-1;0<=b;--b){const c=this._items[b];c.type===d.RenderGeometry&&c.renderGeometry===a&&(this._removeObjectStateItem(c),this._items.splice(b,1))}}removeAll(){this._items.forEach(a=>
{this._removeObjectStateItem(a)});this._items=[]}_removeObjectStateItem(a){switch(a.type){case d.Object:a.objectStateId.channel===f.Object3DState.Highlight?a.object.removeHighlight(a.objectStateId):a.objectStateId.channel===f.Object3DState.MaskOccludee&&a.object.removeOcclude(a.objectStateId);break;case d.RenderGeometry:a.owner.removeRenderGeometryObjectState(a.renderGeometry,a.objectStateId);break;case d.External:a.remove(a.objectStateId)}}}e.Object3DStateSet=g;Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});