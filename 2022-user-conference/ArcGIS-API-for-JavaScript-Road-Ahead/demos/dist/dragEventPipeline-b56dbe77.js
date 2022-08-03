import { j as j$1, r, B as e$1, C as d, D as n, E as f, eV as o, cC as D, t, Z as s, eW as z$1, b7 as o$1, bG as e$2, bd as c, eX as Z, eY as rn, bl as r$2, bg as b$1, eJ as l, y as y$1 } from './_virtual_index-9b831d4a.js';
import { r as r$1 } from './drawUtils-4f83a157.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var i;!function(t){t[t.WhenToolEditable=0]="WhenToolEditable",t[t.WhenToolNotEditable=1]="WhenToolNotEditable",t[t.Always=2]="Always";}(i||(i={}));class e{constructor(){this._isToolEditable=!0,this._manipulators=new j$1,this._resourceContexts={manipulator3D:{}},this._attached=!1;}set isToolEditable(t){this._isToolEditable=t;}get length(){return this._manipulators.length}add(t,a=i.WhenToolEditable){this.addMany([t],a);}addMany(t,a=i.WhenToolEditable){for(const i of t){const t={manipulator:i,visibilityPredicate:a,attached:!1};this._manipulators.add(t),this._attached&&this._updateManipulatorAttachment(t);}}remove(t){for(let a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).manipulator===t){const t=this._manipulators.splice(a,1)[0];this._detachManipulator(t);break}}removeAll(){this._manipulators.forEach((t=>{this._detachManipulator(t);})),this._manipulators.removeAll();}attach(){this._manipulators.forEach((t=>{this._updateManipulatorAttachment(t);})),this._attached=!0;}detach(){this._manipulators.forEach((t=>{this._detachManipulator(t);})),this._attached=!1;}destroy(){this._manipulators.forEach((({manipulator:t})=>{t.destroy&&t.destroy();})),this._manipulators.destroy(),this._resourceContexts=null;}on(t,a){return this._manipulators.on(t,(t=>{a(t);}))}forEach(t){for(const a of this._manipulators.items)t(a);}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach((a=>t.push(a.manipulator))),t}intersect(t,i){let e=null,o=Number.MAX_VALUE;return this._manipulators.forEach((({manipulator:s,attached:r$1})=>{if(!r$1||!s.interactive)return;const n=s.intersectionDistance(t,i);r(n)&&n<o&&(o=n,e=s);})),e}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t);}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0);}_detachManipulator(t){if(!t.attached)return;const a=t.manipulator;a.grabbing=!1,a.dragging=!1,a.hovering=!1,a.selected=!1,a.detach&&a.detach(this._resourceContexts),t.attached=!1;}_isManipulatorItemVisible(t){return t.visibilityPredicate===i.Always||(this._isToolEditable?t.visibilityPredicate===i.WhenToolEditable:t.visibilityPredicate===i.WhenToolNotEditable)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$1=class extends f{constructor(t){super(t),this.manipulators=new e,this.automaticManipulatorSelection=!0,this.hasFocusedManipulators=!1,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[o.MANAGER,!0],[o.USER,!0]]),this._creationFinishedResolver=D();}get active(){return null!=this.view&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible());}get editable(){return this.getEditableFlag(o.USER)}set editable(t){this.setEditableFlag(o.USER,t);}get updating(){return !1}get cursor(){return null}destroy(){this.manipulators.destroy(),this._set("view",null);}onAdd(){this._syncVisible();}activate(){t(this.view)?s.getLogger(this.declaredClass).error("Can't activate tool if view is not defined."):(z$1(this.view)&&this.view.focus(),this.onActivate());}deactivate(){this.onDeactivate();}handleInputEvent(t){this.onInputEvent(t);}handleInputEventAfter(t){this.onInputEventAfter(t);}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===o.USER&&this.notifyChange("editable"),this.onEditableChange();}getEditableFlag(t){return this._editableFlags.get(t)}whenCreated(){return this._creationFinishedResolver.promise}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(o.USER)&&this.getEditableFlag(o.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0);}_syncVisible(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow();}_hide(){this._updateManipulatorAttachment(),this.onHide();}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach();}};e$1([d({constructOnly:!0})],p$1.prototype,"view",void 0),e$1([d({readOnly:!0})],p$1.prototype,"active",null),e$1([d({value:!0})],p$1.prototype,"visible",null),e$1([d({value:!0})],p$1.prototype,"editable",null),e$1([d({readOnly:!0})],p$1.prototype,"manipulators",void 0),e$1([d({readOnly:!0})],p$1.prototype,"updating",null),e$1([d()],p$1.prototype,"cursor",null),e$1([d({readOnly:!0})],p$1.prototype,"automaticManipulatorSelection",void 0),e$1([d()],p$1.prototype,"hasFocusedManipulators",void 0),e$1([d({readOnly:!0})],p$1.prototype,"created",void 0),e$1([d({readOnly:!0})],p$1.prototype,"removeIncompleteOnCancel",void 0),p$1=e$1([n("esri.views.interactive.InteractiveToolBase")],p$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function p(t$1,n){let e=null,a=null;return s=>{if("cancel"===s.action)return void(r(a)&&(a.execute({action:"cancel"}),e=null,a=null));const c={action:s.action,screenStart:s.start,screenEnd:s.screenPoint};"start"===s.action&&t(e)&&(e=new P,a=new P,n(t$1,e,a,s.pointerType,c)),r(e)&&e.execute(c),"end"===s.action&&r(e)&&(e=null,a=null);}}function y(t,n){return t.events.on("drag",p(t,n))}function x(t,n){const e=[t.x,t.y,t.z],r=n,o=[Math.cos(r),Math.sin(r)],a=Math.sqrt(o[0]*o[0]+o[1]*o[1]);if(0===a)return null;o[0]/=a,o[1]/=a;const s=t=>{const n=(t.x-e[0])*o[0]+(t.y-e[1])*o[1];t.x=e[0]+n*o[0],t.y=e[1]+n*o[1];};return t=>(s(t.mapStart),s(t.mapEnd),{...t,axis:o})}function g(t$1,n){let e=null;return r=>{if("start"===r.action&&(e=E(t$1,r.mapStart.spatialReference,n)),t(e))return null;const a=r.mapEnd.x-r.mapStart.x,s=r.mapEnd.y-r.mapStart.y,c=r.mapEnd.z-r.mapStart.z;return e.move(a,s,c),{...r,translationX:a,translationY:s,translationZ:c}}}function h(t$1,n){return t(t$1)?null:t$1.spatialReference.equals(n)?t$1.clone():rn(t$1,n)}function E(t$1,n,e){const r=t$1.geometry,a=Z(n);if(t(r))return null;if("mesh"===r.type)return S(t$1,r,a,e);const s=h(r,a),c=r.spatialReference;return t(s)?null:{move:(n,e,r)=>{const o=r$1(s.clone(),n,e,r);o.spatialReference.equals(c)?t$1.geometry=o:t$1.geometry=rn(o,c);}}}function S(t,n,e,o){if(r(n.transform))return j(t,n,n.transform,e);if(!n.spatialReference.equals(e))return null;let a=0,s=0,c=0;return {move:(e,r,i)=>{const l$1=e-a,m=r-s,p=i-c;if(l$1||m||p){const y=new b$1(n.origin.x+l$1,n.origin.y+m,n.origin.z+p,n.origin.spatialReference);n.centerAt(y,{geographic:o===l.Global}),t.notifyGeometryChanged(),a=e,s=r,c=i;}}}}function j(t$1,n,e,a){const s=h(e.getOriginPoint(n.spatialReference),a),l=n.spatialReference;return t(s)?null:{move:(n,o,a)=>{const u=r$1(s.clone(),n,o,a);if(u.spatialReference.equals(l))e.origin=r$2(u.x,u.y,u.z);else {const t=rn(u,l);r(t)&&(e.origin=r$2(t.x,t.y,t.z));}t$1.notifyMeshTransformChanged(),t$1.notifyGeometryChanged();}}}function z(t,n){const e=t.map((t=>e$2(g(t,n)))).filter((t=>r(t)));return t=>{const n=t.mapEnd.x-t.mapStart.x,r=t.mapEnd.y-t.mapStart.y,o=t.mapEnd.z-t.mapStart.z;return e.forEach((n=>n(t))),{...t,translationX:n,translationY:r,translationZ:o}}}function w(t,e){const r=new Map;for(const o of e)r.set(o,y$1(t[o]));return n=>(r.forEach(((n,e)=>{t[e]=n;})),n)}function v(t){return r(t.geometry)&&"mesh"===t.geometry.type?M(t,t.geometry):w(t,["geometry"])}function M(t,n){const e=r(n.transform)?n.transform.clone():null,o=n.vertexAttributes.clonePositional();return r=>(n.transform=e,n.vertexAttributes=o,t.notifyGeometryChanged(),r)}function q(t){const n=t.map((t=>e$2(v(t)))).filter((t=>r(t)));return t=>(n.forEach((n=>n(t))),t)}function b(){let t=0,n=0,e=0;return r=>{"start"===r.action&&(t=r.mapStart.x,n=r.mapStart.y,e=r.mapStart.z);const o=r.mapEnd.x-t,a=r.mapEnd.y-n,s=r.mapEnd.z-e;return t=r.mapEnd.x,n=r.mapEnd.y,e=r.mapEnd.z,{...r,mapDeltaX:o,mapDeltaY:a,mapDeltaZ:s,mapDeltaSpatialReference:r.mapStart.spatialReference}}}function C(){let t=0,n=0;return e=>{"start"===e.action&&(t=e.screenStart.x,n=e.screenStart.y);const r=e.screenEnd.x-t,o=e.screenEnd.y-n;return t=e.screenEnd.x,n=e.screenEnd.y,{...e,screenDeltaX:r,screenDeltaY:o}}}function G(t,n){let r=null,o=0,a=0;return c$1=>{if("start"===c$1.action&&(r=t.toScreen(n),r.x<0||r.x>t.width||r.y<0||r.y>t.height?r=null:(o=c$1.screenStart.x-r.x,a=c$1.screenStart.y-r.y)),null==r)return null;const i=o$1(c$1.screenEnd.x-o,0,t.width),l=o$1(c$1.screenEnd.y-a,0,t.height),u=c(i,l);return c$1.screenStart=r,c$1.screenEnd=u,c$1}}class P{constructor(){this.execute=()=>{};}next(t,n=new P){return r(t)&&(this.execute=e=>{const o=t(e);r(o)&&n.execute(o);}),n}}

export { C, G, P, b, g, p$1 as p, q, v, w, x, y, z };