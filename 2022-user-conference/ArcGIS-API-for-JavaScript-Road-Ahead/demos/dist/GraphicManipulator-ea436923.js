import { B as e, C as d, D as n, E as f, aH as n$1, hN as u, fS as x, t, r, aP as l, gx as U, hO as J, e1 as An, er as rn, aw as u$1, g0 as d$1, fx as b, gk as Hn, eg as x$1, ay as n$2, b4 as i } from './_virtual_index-fc1e0009.js';
import { o } from './drapedUtils-23583f29.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let C=class extends f{constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new n$1.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null;}set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged();}get elevationInfo(){const e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=u(this.graphic),i=e?e.offset:0;return new x({mode:t,offset:i})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null);}grabbableForEvent(){return !0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol());}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol());}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}));}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null);}intersectionDistance(e){const t$1=this.graphic;if(!1===t$1.visible)return null;const i=t$1.geometry;if(t(i))return null;const r$1=this._get("focusedSymbol"),l=r(r$1)?r$1:t$1.symbol;return "2d"===this.view.type?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,t$1)}attach(){this.attachSymbolChanged(),r(this.layer)&&this.layer.add(this.graphic);}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),r(this.layer)&&this.layer.remove(this.graphic);}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=l((()=>this.graphic?.symbol),(e=>{r(e)&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&r(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol));}),U);}detachSymbolChanged(){r(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null);}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&r(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol;}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol;}_intersectDistance2D(e,t$1,i,r$1){if(r$1=r$1||J(i),t(r$1))return null;const l=1;let c=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==r$1.type)return o(t$1,i,e)?l:null;if(t(c)||!c.originalPoint.equals(i)){const t=i,o=e.spatialReference;if(An(t.spatialReference,o)){const e=rn(t,o);c={originalPoint:t.clone(),mapPoint:e,radiusPx:u$1(r$1.size)},this._circleCollisionCache=c;}}if(r(c)){const i=d$1(t$1,D),o=e.toScreen(c.mapPoint),s=c.radiusPx,h=o.x+u$1(r$1.xoffset),p=o.y-u$1(r$1.yoffset);return b(i,[h,p])<s*s?l:null}return null}_intersectDistance3D(e,t,i){const o=e.toMap(t,{include:[i]});return o&&Hn(o,j,e.renderSpatialReference)?x$1(j,e.state.camera.eye):null}};e([d({constructOnly:!0,nonNullable:!0})],C.prototype,"graphic",null),e([d()],C.prototype,"elevationInfo",null),e([d({constructOnly:!0,nonNullable:!0})],C.prototype,"view",void 0),e([d({value:null})],C.prototype,"focusedSymbol",null),e([d({constructOnly:!0})],C.prototype,"layer",void 0),e([d()],C.prototype,"interactive",void 0),e([d()],C.prototype,"selectable",void 0),e([d()],C.prototype,"grabbable",void 0),e([d({value:!1})],C.prototype,"grabbing",null),e([d()],C.prototype,"dragging",void 0),e([d()],C.prototype,"hovering",null),e([d({value:!1})],C.prototype,"selected",null),e([d()],C.prototype,"cursor",void 0),C=e([n("esri.views.interactive.GraphicManipulator")],C);const j=n$2(),D=i();

export { C };
