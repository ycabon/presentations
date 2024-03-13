/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e,d as t}from"./maybe.js";import{T as s,A as i}from"./TechniqueInstance.js";import{b as r}from"./Container.js";import{T as a}from"./FeatureCommandQueue.js";import{c as n}from"./UpdateTracking2D.js";import{d as o,m as l,e as u,c,r as h}from"./mat3.js";import{c as m}from"./mat3f32.js";import{f as d}from"./vec2f32.js";import{f}from"./vec3f32.js";import{normalizeMapX as _}from"../geometry/support/normalizeUtils.js";import{D as p}from"./DisplayObject.js";import{c as g}from"./dataViewUtils.js";import{B as v}from"./BufferObject.js";import{j as x,m as b,D as y,U as B}from"./enums.js";import{V as R}from"./VertexArrayObject.js";let S=0;function M(e,t,i){return new s(n(S++),e,e.meshWriter.name,t,i)}const j={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class A{constructor(){this.instances={fill:M(a.fill,j,{zoomRange:!0}),marker:M(a.marker,j,{zoomRange:!0}),line:M(a.line,j,{zoomRange:!0}),text:M(a.text,j,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:M(a.complexFill,j,{zoomRange:!0}),texturedLine:M(a.texturedLine,j,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce(((e,t)=>(e.set(t.instanceId,t),e)),new Map)}getInstance(e){return this._instancesById.get(e)}}const D=Math.PI/180;class O extends p{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=m(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=e(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(x.ONE,x.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const i=this._program;t.bindVAO(this._vao),t.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(b.LINES,8*s.length,y.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:m()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",V().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:i,resolution:r,pixelRatio:a,rotation:n,viewpoint:m}=t,p=D*n,{x:g,y:v}=m.targetGeometry,x=_(g,t.spatialReference);this._localOrigin.x=x,this._localOrigin.y=v;const b=a*i[0],y=a*i[1],B=r*b,R=r*y,S=o(this._dvsMat3);l(S,S,s),u(S,S,d(b/2,y/2)),c(S,S,f(i[0]/B,-y/R,1)),h(S,S,-p)}_updateBufferData(e,t){const{x:s,y:i}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,l=0;for(const e of t)e&&(a[2*o]=e[0]-s,a[2*o+1]=e[1]-i,a[2*o+2]=e[0]-s,a[2*o+3]=e[3]-i,a[2*o+4]=e[2]-s,a[2*o+5]=e[3]-i,a[2*o+6]=e[2]-s,a[2*o+7]=e[1]-i,n[l]=o+0,n[l+1]=o+3,n[l+2]=o+3,n[l+3]=o+2,n[l+4]=o+2,n[l+5]=o+1,n[l+6]=o+1,n[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=v.createVertex(e,B.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=v.createIndex(e,B.DYNAMIC_DRAW,n),!this._vao){const t=V();this._vao=new R(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const V=()=>g("bounds",{geometry:[{location:0,name:"a_position",count:2,type:y.FLOAT}]});class I extends i{constructor(e){super(e),this._instanceStore=new A,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=t(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new O(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const t of this.children){if(!t.visible)continue;const s=t.getDisplayList(e.drawPhase,this._instanceStore,r.STRICT_ORDER);s?.render(e)}}}export{I as A};