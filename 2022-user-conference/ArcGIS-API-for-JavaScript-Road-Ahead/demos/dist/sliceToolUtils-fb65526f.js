import { jq as i$1, f0 as y$1, u as e$1, y as y$2, jr as s, bk as w$1, js as s$1, jt as a$1, z as n$1, ju as l$2, B as has, fU as e$2, bp as r, fS as r$1, gb as m$1, ir as o, iw as v$1, gP as O, iq as n$2, ix as e$3, ip as o$1, iE as t$1, iG as e$4, iH as o$2, jv as E$1, iI as W, jw as l$3, am as R, aN as I$1, iO as _, jx as t$2, iQ as d$2, jy as t$3, iR as x$1, jz as v$2, jA as f$2, is as h$4, iS as E$2, iT as t$4, L as e$5, gM as o$3, fV as a$2, m as r$2, jB as G$1, hE as u$2, h$ as d$3, hb as c$2, fP as r$3, g1 as _$1, hz as s$2, aO as o$4, g0 as u$3, bn as g$3, he as R$1, hc as f$3, hr as i$2, hf as u$4, hq as b$1, eE as e$6, hi as m$2, hj as n$4, i5 as q$1, jl as F$1, hd as t$5, aK as n$5, eF as z$1, jC as i$3, gR as H$1, jj as r$4, hp as c$3, hk as e$7, jD as I$2, eH as Q, jE as o$5, h8 as Z, hn as C$1, hL as k$1, jF as O$1, eD as P, eG as _$2, jG as D$2, i2 as m$3, jH as p$1, jI as u$5, jJ as $, hJ as t$6, gq as v$3, t as t$7, jK as fn, jL as x$3, gx as b$2, hU as G$2, jM as ls, eC as n$7, jN as ms, hY as H$2, $ as s$3 } from './_virtual_index-1ea2035a.js';
import { g as g$2 } from './persistable-2efd2972.js';
import { n as n$3, c as c$4, a as n$6 } from './LineVisualElement-e2d301b0.js';
import { D as D$1, i as ie$1, x as x$2, R as R$2 } from './manipulatorUtils-81641492.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c$1=class extends(i$1(l$2)){constructor(o){super(o),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10;}equals(o){return this.heading===o.heading&&this.tilt===o.tilt&&y$1(this.position,o.position)&&this.width===o.width&&this.height===o.height}};e$1([y$2({readOnly:!0,json:{read:!1,write:!0}})],c$1.prototype,"type",void 0),e$1([y$2({type:w$1}),g$2()],c$1.prototype,"position",void 0),e$1([y$2({type:Number,nonNullable:!0,range:{min:0,max:360}}),g$2(),s((o=>s$1.normalize(a$1(o),0,!0)))],c$1.prototype,"heading",void 0),e$1([y$2({type:Number,nonNullable:!0,range:{min:0,max:360}}),g$2(),s((o=>s$1.normalize(a$1(o),0,!0)))],c$1.prototype,"tilt",void 0),e$1([y$2({type:Number,nonNullable:!0}),g$2()],c$1.prototype,"width",void 0),e$1([y$2({type:Number,nonNullable:!0}),g$2()],c$1.prototype,"height",void 0),c$1=e$1([n$1("esri.analysis.SlicePlane")],c$1);const h$3=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=has("mac")?"Meta":"Control",m="Shift",a=2,f$1=1.15,h$2=1.15,e=2500,i=.02,p=Math.cos(m$1(45)),j=Math.cos(m$1(5)),n=.95,M=.3,k=.7,l$1=r(1,.5,0),u$1=2,v=1,b=e$2([...l$1,k]),x=[0,0,0,.04],C=e$2([...l$1,.5]),S=r$1(1,1,1,1),U=r$1(1,.8,.6,1),d$1=r$1(1,.93,.86,1),g$1=e$2([...l$1,1]),q=e$2([...l$1,1]),w=3,y=11,z=22.5,A=40,B=48,D=2.25,E=e$2([...l$1,1]),F=4,G=1,H=.3,I=6,J=4,K=1600,L=.4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(t){const g=new o;g.extensions.add("GL_OES_standard_derivatives");const{vertex:l,fragment:s,attributes:n,varyings:c}=g;return v$1(l,t),n.add(O.POSITION,"vec3"),n.add(O.UV0,"vec2"),c.add("vUV","vec2"),l.code.add(n$2`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),s.uniforms.add([new e$3("backgroundColor",(e=>e.backgroundColor)),new e$3("gridColor",(e=>e.gridColor)),new o$1("gridWidth",(e=>e.gridWidth))]),s.code.add(n$2`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
gl_FragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),g}const g=Object.freeze(Object.defineProperty({__proto__:null,build:t},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h$1 extends t$2{constructor(){super(...arguments),this.backgroundColor=r$1(1,0,0,.5),this.gridColor=r$1(0,1,0,.5),this.gridWidth=4;}}class u extends e$4{initializeProgram(e){return new o$2(e.rctx,u.shader.get().build(this.configuration),E$1)}initializePipeline(){return W({blending:l$3(R.ONE,R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE_MINUS_SRC_ALPHA),depthTest:{func:I$1.LESS},colorWrite:_})}}u.shader=new t$1(g,(()=>import('./SlicePlaneMaterial.glsl-84529c40.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class f extends d$2{constructor(r){super(r,new d),this._configuration=new t$3;}intersect(r,e,t,i,o,n,s){return x$1(r,e,i,o,n,void 0,s)}createBufferWriter(){return new v$2(f$2)}requiresSlot(r,t){return t===h$4.Color&&r===E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL}createGLMaterial(r){return new h(r)}getConfiguration(){return this._configuration}}class h extends t$4{constructor(r){super(r),this.ensureTechnique(u,null);}beginSlot(){return e$5(this.technique)}}class d extends h$1{constructor(){super(...arguments),this.renderOccluded=o$3.Occlude;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class l extends n$3{constructor(r){super(r),this._material=null,this._renderOccluded=o$3.OccludeAndTransparent,this._gridWidth=1,this._gridColor=r$1(1,0,0,1),this._backgroundColor=r$1(1,0,0,1),this.applyProps(r);}get renderOccluded(){return this._renderOccluded}set renderOccluded(r){r!==this._renderOccluded&&(this._renderOccluded=r,this._updateMaterial());}get gridWidth(){return this._gridWidth}set gridWidth(r){this._gridWidth!==r&&(this._gridWidth=r,this._updateMaterial());}get gridColor(){return this._gridColor}set gridColor(r){a$2(this._gridColor,r),this._updateMaterial();}get backgroundColor(){return this._backgroundColor}set backgroundColor(r){a$2(this._backgroundColor,r),this._updateMaterial();}createExternalResources(){this._material=new f(this._materialParameters);}destroyExternalResources(){this._material=null;}forEachExternalMaterial(e){r$2(this._material)&&e(this._material);}createGeometries(e){if(r$2(this._material)){const r=G$1();e.addGeometry(r,this._material);}}get _materialParameters(){return {backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded}}_updateMaterial(){r$2(this._material)&&this._material.setParameters(this._materialParameters);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function Gt(t,e,i,n,r,s,o,a){return Dt(e,o.worldUpAtPosition(t,c$2.get()),r,s,a.basis1,a.basis2),g$3(a.basis1,a.basis1,i),g$3(a.basis2,a.basis2,n),r$3(a.origin,t),O$1(a.basis2,a.basis1,a.origin,a.plane),a}function Dt(t,e,i,n,r,s){const o=P(t,e),a=c$2.get(),c=c$2.get();switch(n===we.HORIZONTAL_OR_VERTICAL?Math.abs(o)>p?we.HORIZONTAL:we.VERTICAL:n){case we.VERTICAL:{const n=Math.abs(o)<=j?t:i.viewUp;_$2(a,n,e),r$3(c,e);break}case we.HORIZONTAL:_$2(a,i.viewUp,e),_$2(c,e,a);break;case we.TILTED:{const n=Math.abs(o)<=j?e:i.viewUp;_$2(a,n,t),_$2(c,t,a);break}}const l=_$2(c$2.get(),a,c);P(l,i.viewForward)>0&&g$3(c,c,-1),z$1(r,a),z$1(s,c);}function Xt(t,e,i){const n=e.worldUpAtPosition(t.origin,c$2.get()),r=t.basis1,s=be(t,n),o=Math.round(s/ye)*ye;return ls(t,o-s,r,i)}function Yt(t,e,i,n,r,s){const o=r$3(c$2.get(),r.origin);u$3(o,o,g$3(c$2.get(),r.basis1,t.direction[0]<0?1:-1)),u$3(o,o,g$3(c$2.get(),r.basis2,t.direction[1]<0?1:-1));const a=s$2(r.basis1),c=s$2(r.basis2),l=e$6(c$2.get(),i,o),u=e$6(c$2.get(),e,o);let d=0,m=0;if(se(t)){const e=re(r),i=re(s);d=a-.5*t.direction[0]*P(r.basis1,u)/a,m=c-.5*t.direction[1]*P(r.basis2,u)/c;const n=i/e;d*=n,m*=n;}const p=d+.5*t.direction[0]*P(r.basis1,l)/a,g=m+.5*t.direction[1]*P(r.basis2,l)/c,f=g$3(c$2.get(),r.basis1,p/a),b=g$3(c$2.get(),r.basis2,g/c);(p<=0||ie(s.origin,f,n)<=K)&&r$3(f,s.basis1),(g<=0||ie(s.origin,b,n)<=K)&&r$3(b,s.basis2);const O=r$3(c$2.get(),o);return u$3(O,O,g$3(c$2.get(),f,t.direction[0]<0?-1:1)),u$3(O,O,g$3(c$2.get(),b,t.direction[1]<0?-1:1)),D$2(O,f,b,s)}function Zt(t,e){return L*Math.min(e.width,e.height)*e.computeRenderPixelSizeAt(t)}function Wt(t,e,i,n){const r=_$2(c$2.get(),e,i);return _$2(r,r,e),_$1(t,r,n)}function Bt(t,e){return D$1(t.basis1,t.basis2,t.origin,e)}function qt(t,e,i,n){const r=e.worldUpAtPosition(t.origin,c$2.get()),s=c$2.get();switch(i){case Re.HEADING:r$3(s,r);break;case Re.TILT:r$3(s,t.basis1);}return _$1(t.origin,s,n)}function zt(t,e,i,n){const r=ee(i,te.NEGATIVE_X),s=f$3.get();m$3(s,e,r.edge*Math.PI/2);const c=z$1(c$2.get(),r.basis);let l=g$3(c$2.get(),c,r.direction*n.computeScreenPixelSizeAt(r.position)*A);u$3(l,l,r.position);const u=n.projectToRenderScreen(l,p$1(c$2.get())),d=$t(n,u);u$5(n,u,je),z$1(je.direction,je.direction);const m=c$2.get();!d&&$(i,je,m)&&(l=m),s[12]=0,s[13]=0,s[14]=0,t.modelTransform=s,t.renderLocation=t$6(l),d?t.state|=Ae:t.state&=~Ae;}function $t(t,e){const[i,n,r,s]=t.viewport,o=Math.min(r,s)/16;let a=!0;return e[0]<i+o?(e[0]=i+o,a=!1):e[0]>i+r-o&&(e[0]=i+r-o,a=!1),e[1]<n+o?(e[1]=n+o,a=!1):e[1]>n+s-o&&(e[1]=n+s-o,a=!1),a}function Jt(t,e,i,n){const r=s$2(n.basis1),s=s$2(n.basis2),o=ne(n),a=re(n),d=o$4(c$2.get(),0,0,0);u$3(d,g$3(c$2.get(),n.basis1,e.direction[0]),g$3(c$2.get(),n.basis2,e.direction[1])),u$3(d,n.origin,d);let m=0,p=1;if(se(e))1===e.direction[0]&&-1===e.direction[1]?m=ye:1===e.direction[0]&&1===e.direction[1]?m=Math.PI:-1===e.direction[0]&&1===e.direction[1]&&(m=3*Math.PI/2),p=a;else {const t=0!==e.direction[0]?1:2;m=1===t?ye:0,p=(1===t?s:r)-o;}const g=R$1(f$3.get(),m);i$2(g,g,o$4(c$2.get(),p,p,p)),u$4(g,i,g),g[12]=0,g[13]=0,g[14]=0,t.modelTransform=g,t.renderLocation=d;}function Kt(t,e,i,n){const r=n.worldUpAtPosition(i.origin,c$2.get()),s=ee(i,te.POSITIVE_X),o=R$1(f$3.get(),s.edge*Math.PI/2);b$1(o,o,-be(i,r)),u$4(o,e,o),o[12]=0,o[13]=0,o[14]=0,t.modelTransform=o,t.renderLocation=s.position;}function Qt(t,e,i){const n=ee(i,te.POSITIVE_Y),r=R$1(f$3.get(),n.edge*Math.PI/2);b$1(r,r,ye),u$4(r,e,r),r[12]=0,r[13]=0,r[14]=0,t.modelTransform=r,t.renderLocation=n.position;}var te;function ee(t,e){switch(e){case te.POSITIVE_X:return {basis:t.basis1,direction:1,position:u$3(c$2.get(),t.origin,t.basis1),edge:e};case te.POSITIVE_Y:return {basis:t.basis2,direction:1,position:u$3(c$2.get(),t.origin,t.basis2),edge:e};case te.NEGATIVE_X:return {basis:t.basis1,direction:-1,position:e$6(c$2.get(),t.origin,t.basis1),edge:e};case te.NEGATIVE_Y:return {basis:t.basis2,direction:-1,position:e$6(c$2.get(),t.origin,t.basis2),edge:e}}}function ie(t,e,i){const n=i.projectToRenderScreen(u$3(c$2.get(),t,e),p$1(c$2.get())),r=i.projectToRenderScreen(e$6(c$2.get(),t,e),p$1(c$2.get()));return v$3(e$6(n,n,r))}function ne(t){const e=s$2(t.basis1),i=s$2(t.basis2);return H*Math.min(e,i)}function re(t){return ne(t)}function se(t){return 0!==t.direction[0]&&0!==t.direction[1]}function oe(t,e=_e.CENTER_ON_ARROW){const i=e===_e.CENTER_ON_CALLOUT?A:0,n=[r(i,0,-B/2),r(i,0,B/2)],r$1=pe(n,!0),s=(t,e)=>de(n,n,{tubeRadius:w,tipRadius:y,tipLength:z,tubeFocusMultiplier:f$1,tipFocusMultiplier:h$2,padding:t,bothEnds:!0,flat:null,focusTipLength:!0,addCap:e}),o=s(0,!1),a=s(D,!0),c=new m$2({color:S,cullFace:n$4.Back,renderOccluded:o$3.Opaque}),l=new m$2({color:U,cullFace:n$4.Back,renderOccluded:o$3.Opaque}),u=new m$2({color:d$1,cullFace:n$4.Back,renderOccluded:o$3.Opaque}),d=new m$2({color:q,transparent:!0,writeDepth:!1,cullFace:n$4.Front,renderOccluded:o$3.Transparent}),m=q$1([[i,0,0],[i-A,0,0]]),p=q$1([[i,0,0],[i-A,0,0]]),g=new F$1({color:g$1,renderOccluded:o$3.OccludeAndTransparent});return new ie$1({view:t,renderObjects:[...o.normal.map((({part:t,geometry:e,transform:i})=>({geometry:e,material:"tip"===t?c:"cap"===t?l:u,transform:i,stateMask:t$5.Unfocused|Ie}))),...a.normal.map((({geometry:t,transform:e})=>({geometry:t,material:d,transform:e,stateMask:t$5.Unfocused|Ie}))),{geometry:m,material:g,stateMask:t$5.Unfocused|Ie|Ae},...o.focused.map((({part:t,geometry:e,transform:i})=>({geometry:e,material:"tip"===t?c:"cap"===t?l:u,transform:i,stateMask:t$5.Focused|Ie}))),...a.focused.map((({geometry:t,transform:e})=>({geometry:t,material:d,transform:e,stateMask:t$5.Focused|Ie}))),{geometry:p,material:g,stateMask:t$5.Focused|Ie|Ae}],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[r$1]},collisionPriority:1,radius:y,state:Ie})}function ae(t,e){const i=R$2(t,{customStateMask:Ie,texture:e});return i.state=Ie,i}function ce(t){const e=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new c$4({view:t,attached:!1,color:b,width:v,writeDepthEnabled:!1,renderOccluded:o$3.OccludeAndTransparent,geometry:[e]})}function le(t){return new l({view:t,attached:!1,backgroundColor:[...x],gridColor:C,gridWidth:4,renderOccluded:o$3.OccludeAndTransparent})}function ue(t,e){const i=se(e),n=i?[r(1,0,0),r(0,0,0),r(0,1,0)]:[r(1,0,0),r(-1,0,0)],r$1=q$1(n),s=E,o=t=>new H$1({color:s,width:t,renderOccluded:o$3.OccludeAndTransparent}),a$1=()=>new F$1({color:s,renderOccluded:o$3.OccludeAndTransparent}),c=i?F:G,l=c*a,u=G,d=t=>t>1?o(t):a$1(),m=[{geometry:r$1,material:d(c),stateMask:t$5.Unfocused|Me},{geometry:r$1,material:d(l),stateMask:t$5.Focused|Me},{geometry:r$1,material:d(u),stateMask:Le}],p=new ie$1({view:t,renderObjects:m,collisionType:{type:"line",paths:[n]},radius:i?I:J,...x$2});return p.state=Me,p}function de(t,e,i){const n=n=>{const r$1=(n?e:t).slice(0),o=e$6(c$2.get(),r$1[0],r$1[1]);z$1(o,o);const a=e$6(c$2.get(),r$1[r$1.length-1],r$1[r$1.length-2]);if(z$1(a,a),i.padding>0){const t=g$3(n$5(),a,-i.padding);if(r$1[r$1.length-1]=u$3(t,t,r$1[r$1.length-1]),i.bothEnds){const t=g$3(n$5(),o,-i.padding);r$1[0]=u$3(t,t,r$1[0]);}}const c=n?i.tipFocusMultiplier:1,d=i.tipLength*(i.focusTipLength?c:1),T=i.tipRadius*c,E=r$4(f$3.get());if(i.padding>0){const t=d/4,e=o$4(c$2.get(),0,t,0),n=1+i.padding/t;c$3(E,E,e),i$2(E,E,o$4(c$2.get(),n,n,n)),c$3(E,E,g$3(e,e,-1/n));}const O=r$4(e$7()),w=r(0,1,0),y=I$2(e$7(),Q(o$5.get(),w,a));y[12]=r$1[r$1.length-1][0],y[13]=r$1[r$1.length-1][1],y[14]=r$1[r$1.length-1][2],u$4(y,y,E);const M=[{part:"tube",geometry:me(i.tubeRadius*(n?i.tubeFocusMultiplier:1)+i.padding,i.flat,r$1),transform:O}];let L,C;if(r$2(i.flat)?L=Z(d,T,T,i.flat.thickness):(L=C$1(d,T,24,!1,!1,!0),C=C$1(d,T,24,!1,!0,!1)),M.push({part:"tip",geometry:L,transform:y}),C&&M.push({part:"cap",geometry:C,transform:y}),i.bothEnds){const t=I$2(e$7(),Q(o$5.get(),w,o));t[12]=r$1[0][0],t[13]=r$1[0][1],t[14]=r$1[0][2],u$4(t,t,E),M.push({part:"tip",geometry:L,transform:t}),C&&M.push({part:"cap",geometry:C,transform:t});}return M};return {normal:n(!1),focused:n(!0)}}function me(t,e,i){const n=[];if(r$2(e))n.push([t,e.thickness/2],[-t,e.thickness/2],[-t,-e.thickness/2],[t,-e.thickness/2]);else {const e=12;for(let i=0;i<e;i++){const r=i/e*2*Math.PI;n.push([Math.cos(r)*t,Math.sin(r)*t]);}}return k$1(n,i,[],[],!1)}function pe(t,e){const i=e$6(n$5(),t[t.length-1],t[t.length-2]);if(z$1(i,i),g$3(i,i,z),u$3(i,i,t[t.length-1]),e){const e=e$6(n$5(),t[0],t[1]);return z$1(e,e),g$3(e,e,z),u$3(e,e,t[0]),[e,...t,i]}return [...t,i]}function ge(e,n,s,o=new h$3){if(t$7(e))return null;const{renderCoordsHelper:a}=n,c=a.fromRenderCoords(e.origin,n.spatialReference);if(t$7(c))return null;const l=fn(c,s);if(t$7(l))return null;o.position=l;const u=2*s$2(e.basis1),d=2*s$2(e.basis2),m=x$3.renderUnitScaleFactor(n.spatialReference,s);o.width=u*m,o.height=d*m;const p=a.worldUpAtPosition(e.origin,c$2.get());return o.tilt=b$2(be(e,p)),o.heading=a.headingAtPosition(e.origin,e.basis1)-90,o}function be(t,e){return i$3(e,t.basis2,t.basis1)+ye}function he(t,i,r,s,o,a,c=G$2()){return a.toRenderCoords(t,c.origin)?(a.worldBasisAtPosition(c.origin,n$7.X,c.basis1),a.worldBasisAtPosition(c.origin,n$7.Y,c.basis2),O$1(c.basis2,c.basis1,c.origin,c.plane),ls(c,-m$1(i),ms(c),c),ls(c,m$1(r),c.basis1,c),g$3(c.basis1,c.basis1,s/2),g$3(c.basis2,c.basis2,o/2),H$2(c),c):(s$3.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${t.spatialReference.wkid} is not supported`),null)}function Te(t,e){if(t$7(t)||t$7(t.position))return null;const i=n$6(t.position,e.spatialReference,e.elevationProvider);if(t$7(i))return null;const n=x$3.renderUnitScaleFactor(t.position.spatialReference,e.spatialReference),s=t.width*n,o=t.height*n;return {position:i,heading:t.heading,tilt:t.tilt,renderWidth:s,renderHeight:o}}function Oe(t,e,i,n=G$2()){if(t$7(t))return null;const o=he(t.position,t.heading,t.tilt,t.renderWidth,t.renderHeight,e.renderCoordsHelper,n);return !i.tiltEnabled&&r$2(o)&&Xt(o,e.renderCoordsHelper,o),o}!function(t){t[t.POSITIVE_X=0]="POSITIVE_X",t[t.POSITIVE_Y=1]="POSITIVE_Y",t[t.NEGATIVE_X=2]="NEGATIVE_X",t[t.NEGATIVE_Y=3]="NEGATIVE_Y";}(te||(te={}));const Ie=u$2.Custom1;var Re,we;!function(t){t[t.HEADING=1]="HEADING",t[t.TILT=2]="TILT";}(Re||(Re={})),function(t){t[t.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",t[t.HORIZONTAL=1]="HORIZONTAL",t[t.VERTICAL=2]="VERTICAL",t[t.TILTED=3]="TILTED";}(we||(we={}));const Ae=u$2.Custom2,je=d$3(),ye=Math.PI/2,Me=u$2.Custom1,Le=u$2.Custom2;var _e;function ke(t){const e="building-scene-3d"===t.type?t:null;return r$2(e)}!function(t){t[t.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",t[t.CENTER_ON_ARROW=1]="CENTER_ON_ARROW";}(_e||(_e={}));

export { Ae as A, Bt as B, C, Gt as G, Ie as I, Jt as J, Kt as K, Le as L, Me as M, Oe as O, Qt as Q, Re as R, Te as T, Wt as W, Yt as Y, Zt as Z, _e as _, ae as a, u$1 as b, ce as c, c as d, e, M as f, ge as g, h$3 as h, b as i, i as j, ke as k, le as l, m, n, oe as o, qt as q, re as r, se as s, t, ue as u, v, we as w, x, zt as z };
