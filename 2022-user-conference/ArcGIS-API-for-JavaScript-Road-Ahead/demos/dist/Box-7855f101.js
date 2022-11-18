import { bJ as v, ev as m, bk as w, er as u, ep as y, lY as S, et as m$1, b1 as n, eT as p, bI as u$1, gv as r, gw as h$1, bl as f, b7 as l, es as s$1, P as g, m as r$1, t, u as e, y as y$1, lW as e$1, eX as w$1, z as n$1 } from './_virtual_index-1ea2035a.js';
import { j } from './quantityFormatUtils-d7b5c624.js';
import { s as s$2, i as i$1, a, m as m$3 } from './drawUtils-716bb6e9.js';
import { h as h$2, D as D$1 } from './GraphicMover-e499299e.js';
import { h } from './settings-53bbd435.js';
import { i as i$2, p as p$1 } from './ExtentTooltipInfos-bc73e71a.js';
import { b as m$2, h as h$3 } from './automaticLengthMeasurementUtils-ee98e9f2.js';
import { r as r$2 } from './TranslateTooltipInfos-6a2dddcf.js';
import './GraphicManipulator-dab088a1.js';
import './drapedUtils-fff0739e.js';
import './euclideanLengthMeasurementUtils-93ea014d.js';
import './measurementUtils-d2a749ce.js';
import './geometryEngine-d05be472.js';
import './geometryEngineBase-16bf8893.js';
import './hydrated-40740f3e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(n){let e=0,t=0;const r=n.length;let i,o=n[t];for(t=0;t<r-1;t++)i=n[t+1],e+=(i[0]-o[0])*(i[1]+o[1]),o=i;return e>=0}function o(n,e,t,r){const i=[];for(const o of n){const n=o.slice(0);i.push(n);const s=e*(o[0]-r.x)-t*(o[1]-r.y)+r.x,c=t*(o[0]-r.x)+e*(o[1]-r.y)+r.y;n[0]=s,n[1]=c;}return i}function s(s,c,a){const f=s.spatialReference,m$1=c*Math.PI/180,x=Math.cos(m$1),p=Math.sin(m$1);if("xmin"in s&&(a=a??s.center,s=new v({spatialReference:f,rings:[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]})),"paths"in s){a=a??s.extent.center;const n=[];for(const e of s.paths)n.push(o(e,x,p,a));return new m({spatialReference:f,paths:n})}if("rings"in s){a=a??s.extent.center;const e=[];for(const n of s.rings){const t=i(n),r=o(n,x,p,a);i(r)!==t&&r.reverse(),e.push(r);}return new v({spatialReference:f,rings:e})}if("x"in s){a=a??s;const n=new w({x:x*(s.x-a.x)-p*(s.y-a.y)+a.x,y:p*(s.x-a.x)+x*(s.y-a.y)+a.y,spatialReference:f});return null!=s.z&&(n.z=s.z),null!=s.m&&(n.m=s.m),n}return "points"in s?(a=a??s.extent.center,new u({points:o(s.points,x,p,a),spatialReference:f})):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class L{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start";}}class z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move";}}class Y{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop";}}class N{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start";}}class U{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate";}}class A{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop";}}class P{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start";}}class X{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale";}}class D{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop";}}const V=h.transformGraphics,F={centerIndicator:new y({style:"cross",size:V.center.size,color:V.center.color}),fill:{default:new S({color:V.fill.color,outline:{color:V.fill.outlineColor,join:"round",width:1}}),active:new S({color:V.fill.stagedColor,outline:{color:V.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new y({style:"square",size:V.vertex.size,color:V.vertex.color,outline:{color:V.vertex.outlineColor,width:1}}),hover:new y({style:"square",size:V.vertex.hoverSize,color:V.vertex.hoverColor,outline:{color:V.vertex.hoverOutlineColor,width:1}})},rotator:{default:new y({style:"circle",size:V.vertex.size,color:V.vertex.color,outline:{color:V.vertex.outlineColor,width:1}}),hover:new y({style:"circle",size:V.vertex.hoverSize,color:V.vertex.hoverColor,outline:{color:V.vertex.hoverOutlineColor,width:1}})},rotatorLine:new m$1({color:V.line.color,width:1})};let q=class extends n.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=F,this.tooltipOptions=new p,this.view=null,this._getBounds=(()=>{const t=u$1();return (e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,r$1,o,a;if("point"===s.type)i=o=s.x,r$1=a=s.y;else if("multipoint"===s.type){const e=r(s);[i,r$1,o,a]=h$1(t,[e]);}else if("extent"===s.type)[i,r$1,o,a]=[s.xmin,s.ymin,s.xmax,s.ymax];else {const e=r(s);[i,r$1,o,a]=h$1(t,e);}e[0]=Math.min(i,e[0]),e[1]=Math.min(r$1,e[1]),e[2]=Math.max(o,e[2]),e[3]=Math.max(a,e[3]);}return e}})();}initialize(){const t=this.view;this._highlightHelper=new h$2({view:t}),this._tooltip=new m$2({view:t}),this._setup(),this.addHandles([f((()=>t?.ready),(()=>{const{layer:t,view:e}=this;e$1(e,t);}),{once:!0,initial:!0}),l((()=>this.preserveAspectRatio),(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic));})),l((()=>t?.scale),(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic();})),l((()=>this.graphics),(()=>this.refresh())),l((()=>this.layer),((t,e)=>{e&&this._resetGraphics(e),this.refresh();})),l((()=>this.highlightsEnabled),(()=>{this._highlightHelper?.removeAll(),this._setUpHighlights();})),l((()=>this.tooltipOptions.enabled),(t=>{this._tooltip=t?new m$2({view:this.view}):s$1(this._tooltip);}),w$1),this.on("move-start",(t=>this.callbacks?.onMoveStart?.(t))),this.on("move",(t=>this.callbacks?.onMove?.(t))),this.on("move-stop",(t=>this.callbacks?.onMoveStop?.(t))),this.on("rotate-start",(t=>this.callbacks?.onRotateStart?.(t))),this.on("rotate",(t=>this.callbacks?.onRotate?.(t))),this.on("rotate-stop",(t=>this.callbacks?.onRotateStop?.(t))),this.on("scale-start",(t=>this.callbacks?.onScaleStart?.(t))),this.on("scale",(t=>this.callbacks?.onScale?.(t))),this.on("scale-stop",(t=>this.callbacks?.onScaleStop?.(t)))]);}destroy(){this._reset(),this._tooltip=s$1(this._tooltip);}get state(){const t=this.view?.ready??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=s$2(s,t,e,this.view);i.geometry=r;}this.refresh(),this.emit("move-stop",new Y(this.graphics,null,t,e));}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=i$1(s,t,e);i.geometry=r;}this.refresh(),this.emit("scale-stop",new D(this.graphics,null,t,e));}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this._vertexGraphics[1].geometry.x,i=this._vertexGraphics[3].geometry.y;e=new w(t,i,this.view.spatialReference);}for(const i of this.graphics){const s$1=i.geometry,r=s(s$1,t,e);i.geometry=r;}this.refresh(),this.emit("rotate-stop",new A(this.graphics,null,t));}}refresh(){this._reset(),this._setup();}reset(){this.graphics=[];}_setup(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics());}_reset(){this._highlightHelper.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default";}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0;}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null;}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new D$1({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}});}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds(u$1()),o=Math.abs(s-e),a=Math.abs(r-i),h=(s+e)/2,c=(r+i)/2,{x:n,y:l}=t.geometry;return {width:o,height:a,centerX:h,centerY:c,startX:n,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,o]=this._getBounds(u$1(),[e]);return {width:Math.abs(r-i),height:Math.abs(o-s),centerX:(r+i)/2,centerY:(o+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,_backgroundGraphic:r,_vertexGraphics:o,_rotateHandleGraphic:a,symbols:h}=this,c=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=h.fill.active,this._startInfo=this._getStartInfo(c),this._updateTooltip(c,t.viewEvent),c===a?(this.view.cursor="grabbing",this.emit("rotate-start",new N(this.graphics,c,e))):o.includes(c)?(this._activeHandleGraphic=c,this.emit("scale-start",new P(this.graphics,c,i,s))):this.emit("move-start",new L(this.graphics,c,t.dx,t.dy));}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new X(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new U(this.graphics,e,this._angleOfRotation));else {const{dx:i,dy:s}=t;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._updateTooltip(e,t.viewEvent),this.emit("move",new z(this.graphics,e,i,s));}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:o,_yScale:a,_vertexGraphics:h,_rotateHandleGraphic:c}=this;this.refresh(),e===c?(this.view.cursor="pointer",this.emit("rotate-stop",new A(this.graphics,e,i))):h.includes(e)?this.emit("scale-stop",new D(this.graphics,e,o,a)):this.emit("move-stop",new Y(this.graphics,e,s,r));}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:s,_rotateHandleGraphic:r,symbols:o,view:a}=this,h=t.graphic;if(h===r)return r.symbol=o.rotator.hover,a.cursor="pointer",void this._updateTooltip(h);if(s.includes(h)||h===e)return void(a.cursor="move");if(!i.includes(h))return void(a.cursor="pointer");this._updateTooltip(h),t.graphic.symbol=o.handles.hover;const c=a.rotation;let n,l=t.index;switch(l<8&&(c>=0&&c<45?l%=8:l=c>=45&&c<90?(l+1)%8:c>=90&&c<135?(l+2)%8:c>=135&&c<180?(l+3)%8:c>=180&&c<225?(l+4)%8:c>=225&&c<270?(l+5)%8:c>=270&&c<315?(l+6)%8:(l+7)%8),l){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer";}a.cursor=n;}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default",this._updateTooltip();}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:o,centerY:a$1,startX:h,startY:c}=e,{resolution:n,transform:l}=r.state,p=i.indexOf(t);1!==p&&5!==p||this._updateX(t,o),3!==p&&7!==p||this._updateY(t,a$1);const{x:_,y:d}=t.geometry,g=l[0]*_+l[2]*d+l[4],u=l[1]*_+l[3]*d+l[5],m=e.graphicInfos.map((t=>t.geometry));if(s){const t=l[0]*o+l[2]*a$1+l[4],e=l[1]*o+l[3]*a$1+l[5],i=l[0]*h+l[2]*c+l[4],s=l[1]*h+l[3]*c+l[5];this._xScale=this._yScale=a(t,e,i,s,g,u);for(const r of m){const t=m.indexOf(r);this.graphics[t].geometry=i$1(r,this._xScale,this._yScale,[o,a$1]);}this._updateBackgroundGraphic();}else {const{width:t,height:i}=e;let s=_-h,l=c-d;if(1===p||5===p?s=0:3!==p&&7!==p||(l=0),0===s&&0===l)return;const g=t+(h>o?s:-1*s),u=i+(c<a$1?l:-1*l),v=o+s/2,y=a$1+l/2;this._xScale=g/t||1,this._yScale=u/i||1,1===p||5===p?this._xScale=1:3!==p&&7!==p||(this._yScale=1);const b=(v-o)/n,w$1=(y-a$1)/n,x=i$1(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=s$2(x,b,w$1,r,!0);const{centerX:S,centerY:k}=this._getGraphicInfo(this._backgroundGraphic),R=(S-o)/n,I=-1*(k-a$1)/n;for(const e of m){const t=m.indexOf(e),i=i$1(e,this._xScale,this._yScale,[o,a$1]);this.graphics[t].geometry=s$2(i,R,I,r,!0);}this._centerGraphic.geometry=new w(S,k,r.spatialReference);}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s$1,startY:r,box:o,rotate:a}=this._startInfo,h=new w(s$1,r,this.view.spatialReference),c=new w(e,i,this.view.spatialReference),n=t.geometry;this._angleOfRotation=m$3(h,n,c);const l=this._startInfo.graphicInfos.map((t=>t.geometry));for(const p of l){const t=l.indexOf(p),e=s(p,this._angleOfRotation,c);this.graphics[t].geometry=e;}this._backgroundGraphic.geometry=s(o,this._angleOfRotation,c),this._rotateHandleGraphic.geometry=s(a,this._angleOfRotation,c);}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=s$2(s,e,i,this.view);for(const r of this.graphics)r!==t&&(r.geometry=s$2(r.geometry,e,i,this.view));}else if(t===this._centerGraphic){const t=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=s$2(t,e,i,this.view);}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=s$2(s.geometry,e,i,this.view);}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics);}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new g(null,i.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new g(null,i.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new g(null,i.rotatorLine,t),this._rotateHandleGraphic=new g(null,i.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let s=0;s<8;s++)this._vertexGraphics.push(new g(null,i.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics);}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic();}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach((t=>t.visible=!1));}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach(((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r);}));}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new v({rings:t,spatialReference:this.view.spatialReference});}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(u$1()),r=(i+t)/2,o=(s+e)/2;this._centerGraphic.geometry=new w(r,o,this.view.spatialReference);}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new w(t,i,this.view.spatialReference);}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new m({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference});}_updateXY(t,e,i){t.geometry=new w(e,i,this.view.spatialReference);}_updateX(t,e){const i=t.geometry.y;t.geometry=new w(e,i,this.view.spatialReference);}_updateY(t,e){const i=t.geometry.x;t.geometry=new w(i,e,this.view.spatialReference);}_hasExtentGraphic(){return this.graphics.some((t=>t&&r$1(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds(u$1());if(t){const t=(e+s)/2,o=(r+i)/2;return [[e,r],[t,r],[s,r],[s,o],[s,i],[t,i],[e,i],[e,o]]}return [[e,r],[s,r],[s,i],[e,i]]}_updateTooltip(t$1,e){if(t(this._tooltip))return;if(!t$1)return void this._tooltip.clear();const{_backgroundGraphic:i,graphics:s,_vertexGraphics:r,_rotateHandleGraphic:a}=this;t$1===a?this._updateRotateTooltip():r.includes(t$1)?this._updateScaleTooltip():(s.includes(t$1)||t$1===i)&&this._updateMoveTooltip(e);}_updateRotateTooltip(){t(this._tooltip)||(this._tooltip.info=new i$2({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}));}_updateScaleTooltip(){const{_tooltip:t$1,_xScale:e,_yScale:i,tooltipOptions:s,view:r}=this;if(t(t$1))return;const a=r.spatialReference,h=this._getCoordinates(),c=new w(h[0][0],h[0][1],a),n=new w(h[1][0],h[1][1],a),l=new w(h[2][0],h[2][1],a),p=h$3(c,n),_=h$3(n,l);if(t(p)||t(_))return;const d=Math.abs(e),g=Math.abs(i);t$1.info=new p$1({tooltipOptions:s,xScale:d,yScale:g,xSize:p,ySize:_});}_updateMoveTooltip(t$1){const{_tooltip:e,tooltipOptions:i,view:s}=this;if(t(e))return;const h=new r$2({tooltipOptions:i});if(t$1){const{x:e,y:i}=t$1.origin,o=s.toMap(t$1),c=s.toMap({x:e,y:i}),n=h$3(c,o);h.distance=r$1(n)?n:j;}e.info=h;}};e([y$1()],q.prototype,"_tooltip",void 0),e([y$1({readOnly:!0})],q.prototype,"type",void 0),e([y$1()],q.prototype,"callbacks",void 0),e([y$1()],q.prototype,"enableMovement",void 0),e([y$1()],q.prototype,"enableRotation",void 0),e([y$1()],q.prototype,"enableScaling",void 0),e([y$1()],q.prototype,"graphics",void 0),e([y$1()],q.prototype,"highlightsEnabled",void 0),e([y$1()],q.prototype,"layer",void 0),e([y$1()],q.prototype,"preserveAspectRatio",void 0),e([y$1()],q.prototype,"showCenterGraphic",void 0),e([y$1({readOnly:!0})],q.prototype,"state",null),e([y$1({value:F,cast(t){const{centerIndicator:e=F.centerIndicator,fill:i=F.fill,handles:s=F.handles,rotator:r=F.rotator,rotatorLine:o=F.rotatorLine}=t||{};return {centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:o}}})],q.prototype,"symbols",void 0),e([y$1({type:p})],q.prototype,"tooltipOptions",void 0),e([y$1({constructOnly:!0})],q.prototype,"view",void 0),q=e([n$1("esri.views.draw.support.Box")],q);const J=q;

export { J as default };
