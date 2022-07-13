import { aw as u$4, r as r$1, as as f$5, Z as s$2, t as t$3, eh as M, aB as l$3, aC as f$7, aE as M$1, aD as h$4, az as e$1, B as e$2, C as d$4, D as n$1, E as f$8, ar as j, b1 as b, w as w$2, ec as d$5, ei as x$1, aP as l$4, g as g$2, ej as F$1, ek as D$1, bL as r$3, bN as t$4, cO as b$1, bM as i$2 } from './_virtual_index-4b72c57d.js';
import { c as c$2, f as f$6 } from './VertexArrayObject-47c5aa7a.js';
import { C, R, E, F, P, L, G, D } from './enums-fb707d37.js';
import { u as u$5 } from './Texture-e2dd4118.js';
import { t as t$2 } from './VertexElementDescriptor-b07b83f4.js';
import { b as a$1, i as i$1 } from './WGLContainer-e9b25fc8.js';
import { I, g as ge } from './Utils-af323e30.js';
import { r as r$2 } from './utils-1dcda7d1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(e){const n=i(a(e)),o=n,s=!0,r=Math.max(n/2,5),l=Math.round(u$4(e.maxPathLength)/r)+1,u=10,{density:c}=e;return {smoothing:u$4(e.smoothing),interpolate:!0,velocityScale:"flow-from"===e.flowRepresentation?1:-1,verticesPerLine:l,minSpeedThreshold:.001,segmentLength:r,maxTurnAngle:1,collisions:s,lineCollisionWidth:o,lineSpacing:u,density:c}}function i(e){return "constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function o(e){const t=e.toRgba();return [t[0]/255,t[1]/255,t[2]/255,t[3]]}function s$1(e){return {kind:"constant",value:[.1,.1,.1,1]}}function a(e){if(!e.hasVisualVariables("size"))return {kind:"constant",value:[u$4(e.trailWidth)]};const n=e.getVisualVariablesForType("size")[0],i=[],o=[];let s;if(n.stops){for(const e of n.stops)i.push(e.value),o.push(u$4(e.size));s=n.stops.length;}else i.push(n.minDataValue,n.maxDataValue),o.push(u$4(n.minSize),u$4(n.maxSize)),s=2;return {kind:"ramp",stops:i,values:o,count:s}}function r(e){if(!e.hasVisualVariables("color"))return {kind:"constant",value:o(e.color)};const t=e.getVisualVariablesForType("color")[0],n=[],i=[];for(const s of t.stops)n.push(s.value),Array.prototype.push.apply(i,o(s.color));return {kind:"ramp",stops:n,values:i,count:t.stops.length}}function l$2(e){if(!e.hasVisualVariables("opacity"))return {kind:"constant",value:[1]};const t=e.getVisualVariablesForType("opacity")[0],n=[],i=[];for(const o of t.stops)n.push(o.value),i.push(o.opacity);return {kind:"ramp",stops:n,values:i,count:t.stops.length}}function u$3(e,t,n,i){switch(t){case"int":e.setUniform1iv(n,i);break;case"float":e.setUniform1fv(n,i);break;case"vec2":e.setUniform2fv(n,i);break;case"vec3":e.setUniform3fv(n,i);break;case"vec4":e.setUniform4fv(n,i);}}function c$1(e,t,n,i){"constant"===i.kind?u$3(e,n,`u_${t}`,i.value):(u$3(e,"float",`u_${t}_stops`,i.stops),u$3(e,n,`u_${t}_values`,i.values),e.setUniform1i(`u_${t}_count`,i.count));}function p$1(e,t){let n=!0;return n=n&&e.collisions===t.collisions,n=n&&e.density===t.density,n=n&&e.interpolate===t.interpolate,n=n&&e.lineCollisionWidth===t.lineCollisionWidth,n=n&&e.lineSpacing===t.lineSpacing,n=n&&e.maxTurnAngle===t.maxTurnAngle,n=n&&e.minSpeedThreshold===t.minSpeedThreshold,n=n&&e.segmentLength===t.segmentLength,n=n&&e.smoothing===t.smoothing,n=n&&e.velocityScale===t.velocityScale,n=n&&e.verticesPerLine===t.verticesPerLine,n}function f$4(t,n){return t===n||!(!r$1(t)||!r$1(n))&&t.equals(n)}function m$1(e,t){if(!p$1(e.simulationSettings,t.simulationSettings))return !1;if(!f$4(e.timeExtent,t.timeExtent))return !1;let n=!0;return n=n&&e.loadImagery===t.loadImagery,n=n&&e.createFlowMesh===t.createFlowMesh,n=n&&e.color.kind===t.color.kind,n=n&&e.opacity.kind===t.opacity.kind,n=n&&e.size.kind===t.size.kind,n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class d$3{constructor(t){this._params=t,this.animated=!1;}isCompatible(t){if(!(t instanceof d$3))return !1;if(!f$4(this._params.timeExtent,t._params.timeExtent))return !1;let r=!0;return r=r&&this._params.loadImagery===t._params.loadImagery,r=r&&this._params.color.kind===t._params.color.kind,r=r&&this._params.opacity.kind===t._params.opacity.kind,r}async load(a,r){const{extent:e,size:s}=a;f$5(r);const i=await this._params.loadImagery(e,s[0],s[1],this._params.timeExtent,r);return new g$1(i,{color:this._params.color,opacity:this._params.opacity})}render(t,a,e){const{context:s}=t,{program:n}=e;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),s.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",a.dvsMat3),s.bindTexture(e.texture,0),n.setUniform1i("u_texture",0),n.setUniform1f("u_Min",e.min),n.setUniform1f("u_Max",e.max),c$1(n,"color","vec4",this._params.color),c$1(n,"opacity","float",this._params.opacity),s.bindVAO(e.vertexArray),s.drawArrays(E.TRIANGLE_STRIP,0,4);}}const u$2=new Map;u$2.set("a_position",0),u$2.set("a_texcoord",1);const w$1={geometry:[new t$2("a_position",2,C.UNSIGNED_SHORT,0,8),new t$2("a_texcoord",2,C.UNSIGNED_SHORT,4,8)]},x={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:u$2};class g$1{constructor(t,a){this._flowData=t,this._values=a;}attach(t){const{context:a}=t,{width:r,height:s}=this._flowData,i=c$2.createVertex(a,F.STATIC_DRAW,new Uint16Array([0,0,0,1,r,0,1,1,0,s,0,0,r,s,1,0])),o=new f$6(a,u$2,w$1,{geometry:i}),f=[];"ramp"===this._values.color.kind&&f.push("vvColor"),"ramp"===this._values.opacity.kind&&f.push("vvOpacity");const d=t.painter.materialManager.getProgram(x,f);let g=1e6,y=-1e6;for(let e=0;e<s;e++)for(let t=0;t<r;t++)if(0!==this._flowData.mask[e*r+t]){const a=this._flowData.data[2*(e*r+t)+0],s=this._flowData.data[2*(e*r+t)+1],i=Math.sqrt(a*a+s*s);g=Math.min(g,i),y=Math.max(y,i);}const A=new Uint8Array(4*r*s);for(let e=0;e<s;e++)for(let t=0;t<r;t++)if(0!==this._flowData.mask[e*r+t]){const a=this._flowData.data[2*(e*r+t)+0],s=this._flowData.data[2*(e*r+t)+1],i=(Math.sqrt(a*a+s*s)-g)/(y-g);A[4*(e*r+t)+0]=255*i,A[4*(e*r+t)+1]=0,A[4*(e*r+t)+2]=0,A[4*(e*r+t)+3]=255;}else A[4*(e*r+t)+0]=0,A[4*(e*r+t)+1]=0,A[4*(e*r+t)+2]=0,A[4*(e*r+t)+3]=0;const E=new u$5(a,{pixelFormat:P.RGBA,internalFormat:P.RGBA,samplingMode:L.LINEAR,dataType:G.UNSIGNED_BYTE,wrapMode:D.CLAMP_TO_EDGE,flipped:!0,width:r,height:s},A);this.vertexArray=o,this.program=d,this.texture=E,this.min=g,this.max=y,this._flowData=null;}detach(){this.vertexArray.dispose(),this.texture.dispose();}get ready(){return this.program.isCompiled}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class _$1{constructor(t){this._params=t;}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof _$1&&m$1(this._params,t._params)}async load(e,a){const{extent:s,size:r}=e;f$5(a);const i=await this._params.loadImagery(s,r[0],r[1],this._params.timeExtent,a),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,a);return new c(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:n}=t,{program:m}=s;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),n.useProgram(m),m.setUniform1f("u_time",e.time),m.setUniform1f("u_trailLength",this._params.trailLength),m.setUniform1f("u_flowSpeed",this._params.flowSpeed),m.setUniform1f("u_featheringSize",this._params.featheringSize),m.setUniform1f("u_featheringOffset",this._params.featheringOffset),m.setUniform1f("u_introFade",this._params.introFade?1:0),m.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),m.setUniform1f("u_decayRate",this._params.decayRate),m.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),m.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),c$1(m,"color","vec4",this._params.color),c$1(m,"opacity","float",this._params.opacity),c$1(m,"size","float",this._params.size),n.bindVAO(s.vertexArray),n.drawElements(E.TRIANGLES,s.indexCount,C.UNSIGNED_INT,0);}}const l$1=new Map;l$1.set("a_xyts0",0),l$1.set("a_xyts1",1),l$1.set("a_typeIdDurationSeed",2),l$1.set("a_extrudeInfo",3);const h$3={geometry:[new t$2("a_xyts0",4,C.FLOAT,0,64),new t$2("a_xyts1",4,C.FLOAT,16,64),new t$2("a_typeIdDurationSeed",4,C.FLOAT,32,64),new t$2("a_extrudeInfo",4,C.FLOAT,48,64)]},f$3={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:l$1};class c{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a;}attach(t){const{context:e}=t,a=c$2.createVertex(e,F.STATIC_DRAW,this._vertexData),r=c$2.createIndex(e,F.STATIC_DRAW,this._indexData),i=new f$6(e,l$1,h$3,{geometry:a},r),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity"),"ramp"===this._values.size.kind&&o.push("vvSize");const p=t.painter.materialManager.getProgram(f$3,o);this.vertexArray=i,this.program=p,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null;}detach(){this.vertexArray.dispose();}get ready(){return this.program.isCompiled}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$1{constructor(t){this._styles=t;}get animated(){return this._styles.reduce(((t,s)=>t||s.animated),!1)}isCompatible(s){if(!(s instanceof t$1))return !1;if(this._styles.length!==s._styles.length)return !1;const e=this._styles.length;for(let t=0;t<e;t++)if(!this._styles[t].isCompatible(s._styles[t]))return !1;return !0}async load(t,e){const r=await Promise.all(this._styles.map((s=>s.load(t,e))));return new s(r)}render(t,s,e){for(let r=0;r<this._styles.length;r++)this._styles[r].render(t,s,e.resources[r]);}}class s{constructor(t){this.resources=t;}attach(t){for(const s of this.resources)s.attach(t);}detach(){for(const t of this.resources)t.detach();}get ready(){return this.resources.reduce(((t,s)=>t&&s.ready),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class _{constructor(t){this._params=t;}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof _&&m$1(this._params,t._params)}async load(e,a){const{extent:s,size:r}=e;f$5(a);const i=await this._params.loadImagery(s,r[0],r[1],this._params.timeExtent,a),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,a);return new d$2(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:n}=t,{program:m}=s;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),n.useProgram(m),m.setUniform1f("u_time",e.time),m.setUniform1f("u_trailLength",this._params.trailLength),m.setUniform1f("u_flowSpeed",this._params.flowSpeed),m.setUniform1f("u_featheringSize",this._params.featheringSize),m.setUniform1f("u_featheringOffset",this._params.featheringOffset),m.setUniform1f("u_introFade",this._params.introFade?1:0),m.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),m.setUniform1f("u_decayRate",this._params.decayRate),m.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),m.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),c$1(m,"color","vec4",this._params.color),c$1(m,"opacity","float",this._params.opacity),c$1(m,"size","float",this._params.size),n.bindVAO(s.vertexArray),n.drawElements(E.TRIANGLES,s.indexCount,C.UNSIGNED_INT,0);}}const l=new Map;l.set("a_positionAndSide",0),l.set("a_timeInfo",1),l.set("a_extrude",2),l.set("a_speed",3);const h$2={geometry:[new t$2("a_positionAndSide",3,C.FLOAT,0,36),new t$2("a_timeInfo",3,C.FLOAT,12,36),new t$2("a_extrude",2,C.FLOAT,24,36),new t$2("a_speed",1,C.FLOAT,32,36)]},f$2={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:l};class d$2{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a;}attach(t){const{context:e}=t,a=c$2.createVertex(e,F.STATIC_DRAW,this._vertexData),r=c$2.createIndex(e,F.STATIC_DRAW,this._indexData),i=new f$6(e,l,h$2,{geometry:a},r),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity"),"ramp"===this._values.size.kind&&o.push("vvSize");const p=t.painter.materialManager.getProgram(f$2,o);this.vertexArray=i,this.program=p,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null;}detach(){this.vertexArray.dispose();}get ready(){return this.program.isCompiled}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f$1=4,p=1,u$1=.5,y$2=!0,d$1=!0,g=2.3;function w(w,h){const{flowSpeed:j,trailLength:v}=w,S=n(w);let k=null;const x={opacity:l$2(w),size:a(w)};let I=r(w);if("none"===w.background)x.color=I;else {"constant"===I.kind&&(I={kind:"ramp",stops:[0,1],values:[0,0,0,1,I.value[0],I.value[1],I.value[2],I.value[3]],count:2});const e={loadImagery:h.loadImagery,timeExtent:h.timeExtent,color:I,opacity:{kind:"constant",value:[1]}};k=new d$3(e),x.color=s$1();}const z={loadImagery:h.loadImagery,createFlowMesh:h.createFlowMesh,simulationSettings:S,timeExtent:h.timeExtent,trailLength:v,flowSpeed:j,featheringSize:p,featheringOffset:u$1,introFade:y$2,fadeToZero:d$1,decayRate:g,color:x.color,opacity:x.opacity,size:x.size},E="butt"===w.trailCap||i(a(w))<=f$1?new _(z):new _$1(z);return r$1(k)?new t$1([k,E]):E}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends a$1{constructor(){super(...arguments),this.flowStyle=null;}get requiresDedicatedFBO(){return !1}doRender(e){super.doRender(e);}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[i$1],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{constructor(t,e,s,a){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=s,this.pixelRatio=a;}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},s=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:s};}attach(e){if("loaded"!==this.state.name)return void s$2.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const s=this.state.resources;s.attach(e),this.state={name:"attached",resources:s};}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"});}update(t){if(!this.flowStyle.isCompatible(t.flowStyle))return !1;return !(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m extends r$2{constructor(){super(...arguments),this._displayData=null;}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender();}clear(){r$1(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender());}setTransform(s){const{displayData:n}=this;if(t$3(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=M(s.rotation),{dvs:x}=this.transforms;l$3(x,[-1,1,0]),f$7(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),M$1(x,x,[p[0],p[1],0]),h$4(x,x,d),f$7(x,x,[c*s.pixelRatio,c*s.pixelRatio,1]);}_createTransforms(){return {dvs:e$1()}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h$1=1.15;let y$1=class extends f$8{constructor(t){super(t),this._flowDisplayObject=new m,this._loading=null;}initialize(){this.flowContainer.addChild(this._flowDisplayObject);}destroy(){this._clear(),this.flowContainer.removeAllChildren();}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if(t$3(o))return void this._clear();const{extent:i,rotation:l,resolution:n,pixelRatio:p}=t.state,m=u(i,l);m.expand(h$1);const d=[Math.round((m.xmax-m.xmin)/n),Math.round((m.ymax-m.ymin)/n)],y=new e(o,m,d,p);if(r$1(this._loading)){if(this._loading.update(y))return;this._loading.detach(),this._loading=null;}!t$3(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(y)||(y.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null;}),(t=>{j(t)||(s$2.getLogger(this.declaredClass).error("A resource failed to load.",t),this._loading=null);})),this._loading=y);}_clear(){this._flowDisplayObject.clear(),r$1(this._loading)&&(this._loading.detach(),this._loading=null);}};e$2([d$4()],y$1.prototype,"_loading",void 0),e$2([d$4()],y$1.prototype,"flowContainer",void 0),e$2([d$4()],y$1.prototype,"updating",null),y$1=e$2([n$1("esri.views.2d.engine.flow.FlowStrategy")],y$1);const f=y$1;function u(t,o){const e=new b({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),s=t.xmax-t.xmin,r=t.ymax-t.ymin,a=Math.abs(Math.cos(M(o))),l=Math.abs(Math.sin(M(o))),n=a*s+l*r,c=l*s+a*r,m=new w$2({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let h=class extends d$5{constructor(){super(...arguments),this._loadImagery=(t,e,i,r,o)=>x$1(this.layer,t,e,i,r,o),this._createFlowMesh=(t,e,i,r)=>this.layer.createFlowMesh({meshType:t,flowData:i,simulationSettings:e},{signal:r}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization();};}get updating(){return !this._strategy||this._strategy.updating}attach(){const{layer:t$1}=this,e=()=>{this._loadImagery=(e,i,r,o,s)=>x$1(t$1,e,i,r,o,s),this._updateVisualization();};"multidimensionalDefinition"in t$1?this.handles.add(l$4((()=>t$1.multidimensionalDefinition),e)):this.handles.add([l$4((()=>t$1.mosaicRule),e),l$4((()=>t$1.renderingRule),e),l$4((()=>t$1.definitionExpression),e)]),this.container=new t,this._strategy=new f({flowContainer:this.container}),this._updateVisualization();}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll();}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate();}hitTest(t){return new g$2({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const{renderer:t}=this.layer;if("flow"!==t.type)return;const e=w(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate();}};e$2([d$4()],h.prototype,"_strategy",void 0),e$2([d$4()],h.prototype,"attached",void 0),e$2([d$4()],h.prototype,"container",void 0),e$2([d$4()],h.prototype,"layer",void 0),e$2([d$4()],h.prototype,"layerView",void 0),e$2([d$4()],h.prototype,"type",void 0),e$2([d$4()],h.prototype,"updating",null),e$2([d$4()],h.prototype,"timeExtent",void 0),h=e$2([n$1("esri.views.2d.engine.flow.FlowView2D")],h);const d=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class y extends r$2{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t;}destroy(){r$1(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null);}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO());}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO();}invalidateVAO(){!this._vaoInvalidated&&r$1(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender());}updateVectorFieldVAO(s){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,r$1(this.source)&&t$3(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=F$1(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(s.context,t);this.vaoData={magdir:e};}break;case"simple_scalar":{const t=D$1(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(s.context,t);this.vaoData={scalar:e};}break;case"wind_speed":{const t=F$1(this.source,this.symbolizerParameters),e=this._createVectorFieldVAO(s.context,t),a=D$1(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(s.context,a);this.vaoData={magdir:e,scalar:r};}}}this.ready(),this.requestRender();}}_createTransforms(){return {dvs:e$1()}}setTransform(t){const e=r$3(this.transforms.dvs),[n,l]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/t.resolution,m=h*this.width,d=h*this.height,u=Math.PI*this.rotation/180;M$1(e,e,t$4(n,l)),M$1(e,e,t$4(m/2,d/2)),h$4(e,e,-u),M$1(e,e,t$4(-m/2,-d/2)),b$1(e,e,t$4(m,d)),i$2(this.transforms.dvs,t.displayViewMat3,e);}onAttach(){this.invalidateVAO();}onDetach(){this.invalidateVAO();}_createVectorFieldVAO(t,e){const{vertexData:s,indexData:a}=e,r=c$2.createVertex(t,F.STATIC_DRAW,new Float32Array(s)),i=c$2.createIndex(t,F.STATIC_DRAW,new Uint32Array(a)),o=ge("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:C.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:C.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:C.FLOAT,normalized:!1}]});return {vao:new f$6(t,o.attributes,o.bufferLayouts,{geometry:r},i),elementCount:a.length}}}

export { d, y };
