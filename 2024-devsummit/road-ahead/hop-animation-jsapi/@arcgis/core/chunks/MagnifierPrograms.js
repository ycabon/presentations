/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as t}from"./WGLContainer.js";import{C as e}from"./CircularArray.js";import i from"../core/Evented.js";import{h as s}from"../core/lang.js";import{c as o}from"./testSVGPremultipliedAlpha.js";import{_ as n}from"./tslib.es6.js";import a from"../core/Accessor.js";import"../core/Error.js";import"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import{u as m,r as l,w as c}from"./definitions.js";import{c as u}from"./mathUtils.js";import{S as d}from"./AttributeStore.js";import p from"../Viewpoint.js";import{d as _}from"./maybe.js";import g from"../geometry/Point.js";import{t as v,b as w,s as f,c as b,r as y,d as M,p as x}from"../views/2d/ViewState.js";import{c as T,b as S}from"./screenUtils.js";import{V as C}from"./InputManager.js";import"../geometry.js";import{when as E}from"../core/reactiveUtils.js";import{b as z}from"./vec3.js";import{c as R,f as L}from"./vec3f64.js";import{P as A,R as Z,Z as P}from"./ZoomMomentumEstimator.js";import{g as j,b as I,j as V}from"./vec2.js";import{c as N}from"./vec2f64.js";import{c as k}from"./ProgramTemplate.js";const B={shaders:{vertexShader:t("bitBlit/bitBlit.vert"),fragmentShader:t("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},D={shaders:{vertexShader:t("stencil/stencil.vert"),fragmentShader:t("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])},F={shaders:{vertexShader:t("highlight/textured.vert"),fragmentShader:t("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},q={shaders:{vertexShader:t("highlight/textured.vert"),fragmentShader:t("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},O=s("esri-2d-profiler");class U{constructor(t,s){if(this._events=new i,this._entries=new Map,this._timings=new e(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!O)return;this._ext=o(t.gl,{}),this._debugOutput=s;const n=t.gl;if(!this.enableCommandLogging)return;let a;for(a in n)if("function"==typeof n[a]){const t=n[a],e=a.includes("draw");n[a]=(...i)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:a,args:i,isDrawCommand:e}),this._currentSummary&&(this._currentSummary.commands++,e&&this._currentSummary.drawCommands++),t.apply(n,i))}}get enableCommandLogging(){return!("object"==typeof O&&O.disableCommands)}recordContainerStart(t){O&&(this._currentContainer=t)}recordContainerEnd(){O&&(this._currentContainer=null)}recordPassStart(t){O&&(this._currentPass=t,this._initSummary())}recordPassEnd(){O&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){O&&(this._currentBrush=t)}recordBrushEnd(){O&&(this._currentBrush=null)}recordStart(t){if(O&&null!=this._ext){if(this._entries.has(t)){const e=this._entries.get(t),i=this._ext.resultAvailable(e.query),s=this._ext.disjoint();if(i&&!s){const i=this._ext.getResult(e.query)/1e6;let s=0;if(null!=this._timings.enqueue(i)){const t=this._timings.entries,e=t.length;let i=0;for(const e of t)i+=e;s=i/e}const o=i.toFixed(2),n=s?s.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${o} ms (${n} last 10 avg)\n${e.commandsLen} Commands (${e.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(e.summaries),console.log("Commands: ",e.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${o} ms (${n} last 10 avg)`),this._debugOutput.innerHTML=`${o} (${n})`}for(const t of e.handles)t.remove();this._ext.deleteQuery(e.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",(t=>{e.commandsLen++,e.commands.push(t),t.isDrawCommand&&e.drawCommands++}))),e.handles.push(this._events.on("summary",(t=>{e.summaries.push(t)})))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){O&&null!=this._ext&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}}class ${constructor(t,e,i){this._debugMap=new Map,this._width=t*i,this._height=e*i,this._pixelRatio=i;const s=Math.ceil(this._width/1),o=Math.ceil(this._height/1);this._cols=s,this._rows=o,this._cells=d.create(s*o)}insertMetrics(t){const e=this._hasCollision(t);return 0===e&&this._markMetrics(t),e}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,s){const o=t-i/2,n=e-s/2,a=o+i,r=n+s;if(a<0||r<0||o>this._width||n>this._height)return 1;const h=u(Math.floor(o/1),0,this._cols),m=u(Math.floor(n/1),0,this._rows),l=u(Math.ceil(a/1),0,this._cols),c=u(Math.ceil(r/1),0,this._rows);for(let t=m;t<=c;t++)for(let e=h;e<=l;e++){const i=this.getCellId(e,t);if(this.has(i))return 2}return 0}_mark(t,e,i,s,o){const n=t-i/2,a=e-s/2,r=n+i,h=a+s,m=u(Math.floor(n/1),0,this._cols),l=u(Math.floor(a/1),0,this._rows),c=u(Math.ceil(r/1),0,this._cols),d=u(Math.ceil(h/1),0,this._rows);for(let t=l;t<=d;t++)for(let e=m;e<=c;e++){const i=this.getCellId(e,t);this._debugMap.set(i,o),this.set(i)}return!1}_hasCollision(t){let e=0;for(const{computedX:i,computedY:s,width:o,height:n}of t.bounds){const t=(o+m)*this._pixelRatio,a=(n+m)*this._pixelRatio;switch(this._collide(i,s,t,a)){case 2:return 2;case 1:e++}}return e===t.bounds.length?1:0}_markMetrics(t){for(const{computedX:e,computedY:i,width:s,height:o}of t.bounds){const n=(s+m)*this._pixelRatio,a=(o+m)*this._pixelRatio;this._mark(e,i,n,a,t.entityTexel)}}}const G=254,H=255;function X(t,e){const i=t.children.slice();i.sort(((t,e)=>t.tileAge-e.tileAge)),i.forEach((t=>{null!=t.labelMetrics&&t.isReady&&e(t,t.labelMetrics)}))}function Y(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}class Q{run(t,e,i,o){const n=[];for(let e=t.length-1;e>=0;e--){const i=t[e];i.labelingCollisionInfos?.length&&n.push(...i.labelingCollisionInfos)}s("esri-2d-update-debug")&&n.length&&console.debug("CollisionEngine.run"),this._transformMetrics(n),this._runCollision(n,e,i,o);for(const t of n)t.container.requestRender()}_runCollision(t,e,i,s){const[o,n]=e.state.size,a=new $(o,n,e.pixelRatio);for(const{container:e,deconflictionEnabled:o,visible:n}of t){const t=e.attributeView;o?n?(this._prepare(e),this._collideVisible(a,e,i,s),this._collideInvisible(a,e)):X(e,((e,i)=>{for(const e of i)t.setLabelMinZoom(e.entityTexel,H)})):X(e,((e,i)=>{for(const e of i)t.setLabelMinZoom(e.entityTexel,0),n&&a.insertMetrics(e)}))}}_isFiltered(t,e,i){const s=e.getFilterFlags(t),o=!i.hasFilter||!!(s&l),n=null==i.featureEffect||i.featureEffect.excludedLabelsVisible||!!(s&c);return!(o&&n)}_prepare(t){const e=t.attributeView,i=new Set;X(t,((s,o)=>{for(const s of o){const o=s.entityTexel;i.has(o)||(i.add(o),this._isFiltered(o,e,t.layerView)?e.setLabelMinZoom(o,G):0!==e.getLabelMinZoom(o)?e.setLabelMinZoom(o,H):e.setLabelMinZoom(o,0))}}))}_collideVisible(t,e,i,s){const o=e.attributeView,n=new Set;X(e,((e,a)=>{for(const r of a){const a=r.entityTexel;if(!n.has(a))if(e.key.level===s)if(Y(r,i)){if(0===o.getLabelMinZoom(a))switch(t.insertMetrics(r)){case 1:break;case 2:o.setLabelMinZoom(a,G),n.add(a);break;case 0:o.setLabelMinZoom(a,0),n.add(a)}}else o.setLabelMinZoom(a,G);else o.setLabelMinZoom(a,G)}}))}_collideInvisible(t,e){const i=e.attributeView,s=new Set;X(e,((e,o)=>{for(const e of o){const o=e.entityTexel;if(!s.has(o)&&i.getLabelMinZoom(o)===H)switch(t.insertMetrics(e)){case 1:break;case 2:i.setLabelMinZoom(o,H),s.add(o);break;case 0:i.setLabelMinZoom(o,0),s.add(o)}}}))}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:s}of t)X(e,((t,o)=>{const n=e.attributeView,a=t.transforms.labelMat2d;a[4]=Math.round(a[4]),a[5]=Math.round(a[5]);const r="polyline"===i;for(const t of o){const{entityTexel:e,anchorX:i,anchorY:o}=t;let h=t.referenceBounds.size;const m=s[0];if(null!=m){const t=m(n.getVVSize(e));h=isNaN(t)||null==t||t===1/0?h:t}const l=t.directionX*(h/2),c=t.directionY*(h/2);for(const e of t.bounds){let t=i,s=o;if(r){let i=t+e.x+l,o=s+e.y+c;i=a[0]*i+a[2]*o+a[4],o=a[1]*i+a[3]*o+a[5],e.computedX=Math.floor(i),e.computedY=Math.floor(o)}else{t=a[0]*i+a[2]*o+a[4],s=a[1]*i+a[3]*o+a[5];const n=t+e.x+l,r=s+e.y+c;e.computedX=n,e.computedY=r}}}}))}}let W=class extends a{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new Q,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return s("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:\n-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=32?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,s=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,s)}catch(t){}}};n([r()],W.prototype,"updateRequested",void 0),n([r()],W.prototype,"updating",null),n([r()],W.prototype,"view",void 0),W=n([h("esri.views.2d.LabelManager")],W);const J="esri-zoom-box",K={container:`${J}__container`,overlay:`${J}__overlay`,background:`${J}__overlay-background`,box:`${J}__outline`},tt="Shift";let et=class extends a{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[tt],(t=>this._handleDrag(t,1)),C.INTERNAL),t.on("drag",[tt,"Ctrl"],(t=>this._handleDrag(t,-1)),C.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,o){const n=this.view,a=n.toMap(T(t+.5*i,e+.5*s));let r=Math.max(i/n.width,s/n.height);-1===o&&(r=1/r),this._destroyOverlay(),this.navigation.end(),n.goTo({center:a,scale:n.scale*r},{enableHop:!1})}_updateBox(t,e,i,s){const o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+i),o.setAttributeNS(null,"height",""+s),o.setAttributeNS(null,"class",K.box)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=K.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",K.background);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",K.overlay),o.appendChild(i),o.appendChild(s),this._container.appendChild(o),this._backgroundShape=i,this._boxShape=s,this._overlay=o}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,o,n){const a=t+i,r=e+s;return"M 0 0 L "+o+" 0 L "+o+" "+n+" L 0 "+n+" ZM "+t+" "+e+" L "+t+" "+r+" L "+a+" "+r+" L "+a+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,o=t.origin.x,n=t.origin.y;let a,r,h,m;switch(i>o?(a=o,h=i-o):(a=i,h=o-i),s>n?(r=n,m=s-n):(r=s,m=n-s),t.action){case"start":this._start();break;case"update":this._update(a,r,h,m);break;case"end":this._end(a,r,h,m,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};n([r()],et.prototype,"navigation",void 0),n([r()],et.prototype,"view",null),et=n([h("esri.views.2d.navigation.ZoomBox")],et);const it=et;let st=class extends a{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new A(500,6,.92),this.momentum=null,this.tmpMomentum=R(),this.momentumFinished=!1,this.viewpoint=new p({targetGeometry:new g,scale:0,rotation:0}),this._previousDrag=null,E((()=>this.momentumFinished),(()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,s=e.center.y;const o=this._previousDrag;i=o?o.center.x-i:-i,s=o?s-o.center.y:s,t.viewpoint=v(this.viewpoint,t.viewpoint,[i||0,s||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.momentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,s=S(-e,i),o=L(-e,i,0);this.momentumEstimator.add(s,o,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager?.animateContinous(t.viewpoint,((e,i)=>{const{momentum:s,animationTime:o,tmpMomentum:n}=this,a=.001*i;if(!(this.momentumFinished=!s||s.isFinished(o))){const i=s.valueDelta(o,a);z(n,s.direction,i),v(e,e,n),t.constraints.constrainByGeometry(e)}this.animationTime+=a}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};n([r()],st.prototype,"momentumFinished",void 0),n([r()],st.prototype,"viewpoint",void 0),n([r()],st.prototype,"navigation",void 0),st=n([h("esri.views.2d.navigation.actions.Pan")],st);const ot=st;let nt=class extends a{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new Z(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new P,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new p({targetGeometry:new g,scale:0,rotation:0}),this.addHandles(E((()=>this._momentumFinished),(()=>this.navigation.stop())))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){null===this._updateTimestamp&&(this._updateTimestamp=e.timestamp);const i=e.angle,s=e.radius,o=e.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),a=Math.abs(s-this._startRadius),r=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const h=s/this._previousRadius;let m=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=m>=0?1:-1,this._zoomDirection=h>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=a-n>0),null===this._zoomOnly||this._zoomOnly?m=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):m=0,this.addToZoomEstimator(e,r),this.navigation.setViewpoint([o.x,o.y],1/h,m,[this._previousCenter.x-o.x,o.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=o}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return 0===i||e<i}onAnimationUpdate(t){this.navigation.animationManager?.animateContinous(t.viewpoint,((e,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,o=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),n=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),a=.001*i;if(this._momentumFinished=o&&n,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,a))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,a)):1;const o=N(),n=N();if(this._previousCenter){j(o,this._previousCenter.x,this._previousCenter.y),w(n,t.size,t.padding),I(o,o,n);const{constraints:a,scale:r}=t,h=r*s;s<1&&!a.canZoomInTo(h)?(s=r/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!a.canZoomOutTo(h)&&(s=r/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),f(e,t.viewpoint,s,i,o,t.size),t.constraints.constrainByGeometry(e)}}this._animationTime+=a}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};n([r()],nt.prototype,"_momentumFinished",void 0),n([r()],nt.prototype,"viewpoint",void 0),n([r()],nt.prototype,"navigation",void 0),nt=n([h("esri.views.2d.navigation.actions.Pinch")],nt);const at=nt,rt=N(),ht=N();let mt=class extends a{constructor(t){super(t),this._previousCenter=N(),this.viewpoint=new p({targetGeometry:new g,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),j(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:s}}=t;j(rt,e.center.x,e.center.y),b(ht,i,s),t.viewpoint=y(this.viewpoint,t.state.paddedViewState.viewpoint,M(ht,this._previousCenter,rt)),V(this._previousCenter,rt)}end(){this.navigation.end()}};n([r()],mt.prototype,"viewpoint",void 0),n([r()],mt.prototype,"navigation",void 0),mt=n([h("esri.views.2d.actions.Rotate")],mt);const lt=mt,ct=new p({targetGeometry:new g}),ut=[0,0];let dt=class extends a{constructor(t){super(t),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new ot({navigation:this}),this.rotate=new lt({navigation:this}),this.pinch=new at({navigation:this}),this.zoomBox=new it({view:this.view,navigation:this})}destroy(){this.pan=_(this.pan),this.rotate=_(this.rotate),this.pinch=_(this.pinch),this.zoomBox=_(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(250)}async zoom(t,e=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(e):this.zoomOut(e);this.setViewpoint(e,t,0,[0,0])}async zoomIn(t){const e=this.view,i=e.constraints.snapToNextScale(e.scale);return this._zoomToScale(i,t)}async zoomOut(t){const e=this.view,i=e.constraints.snapToPreviousScale(e.scale);return this._zoomToScale(i,t)}setViewpoint(t,e,i,s){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,e,i,s),this.end()}setViewpointImmediate(t,e=0,i=[0,0],s=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,s,t,e,i)}continousRotateClockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinous(t,(t=>{y(t,t,-1)}))}continousRotateCounterclockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinous(t,(t=>{y(t,t,1)}))}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continousPanLeft(){this._continuousPan([-10,0])}continousPanRight(){this._continuousPan([10,0])}continousPanUp(){this._continuousPan([0,10])}continousPanDown(){this._continuousPan([0,-10])}continuousPanVector({x:t,y:e}){this._continuousPan([10*t,10*e])}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const e=this.view.viewpoint;this.animationManager?.animateContinous(e,(e=>{v(e,e,t),this.view.constraints.constrainByGeometry(e)}))}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<250?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:e,right:i,top:s,bottom:o}}=this.view;return ut[0]=.5*(t[0]-i+e),ut[1]=.5*(t[1]-o+s),ut}async _zoomToScale(t,e=this._getDefaultAnchor()){const{view:i}=this,{constraints:s,scale:o,viewpoint:n,size:a,padding:r}=i,h=s.canZoomInTo(t),m=s.canZoomOutTo(t);if(!(t<o&&!h||t>o&&!m))return x(ct,n,t/o,0,e,a,r),s.constrainByGeometry(ct),i.goTo(ct,{animate:!0,pickClosestTarget:!1,enableHop:!1})}_scaleRotateTranslateViewpoint(t,e,i,s,o){const{view:n}=this,{size:a,padding:r,constraints:h,scale:m,viewpoint:l}=n,c=m*i,u=h.canZoomInTo(c),d=h.canZoomOutTo(c);return(i<1&&!u||i>1&&!d)&&(i=1),v(l,l,o),x(t,l,i,s,e,a,r),h.constrainByGeometry(t)}};n([r()],dt.prototype,"animationManager",void 0),n([r({type:Boolean,readOnly:!0})],dt.prototype,"interacting",void 0),n([r()],dt.prototype,"pan",void 0),n([r()],dt.prototype,"pinch",void 0),n([r()],dt.prototype,"rotate",void 0),n([r()],dt.prototype,"view",void 0),n([r()],dt.prototype,"zoomBox",void 0),dt=n([h("esri.views.2d.navigation.MapViewNavigation")],dt);const pt=dt,_t={shaders:{vertexShader:t("magnifier/magnifier.vert"),fragmentShader:t("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function gt(t){return k(t,_t)}export{W as L,pt as M,U as P,q as a,B as b,gt as c,F as h,_t as m,D as s};
