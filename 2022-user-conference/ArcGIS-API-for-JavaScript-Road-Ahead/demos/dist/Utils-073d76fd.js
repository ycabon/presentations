import { t, c0 as e, Z as s$1, s as s$2 } from './_virtual_index-fc1e0009.js';
import { x as x$1 } from './number-7d0da80b.js';
import { e as e$1, c as n } from './enums-11126df6.js';
import { F as F$1, G as G$1, C as C$1 } from './enums-fb707d37.js';
import './Texture-4621aa9a.js';
import { t as t$1 } from './VertexElementDescriptor-b07b83f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(r,n=0,t=!1){const o=r[n+3];return r[n+0]*=o,r[n+1]*=o,r[n+2]*=o,t||(r[n+3]*=255),r}function f(r){if(!r)return 0;const{r:t,g:o,b:u,a:i}=r;return x$1(t*i,o*i,u*i,255*i)}function s(r){if(!r)return 0;const[t,o,u,i]=r;return x$1(t*(i/255),o*(i/255),u*(i/255),i)}function a(n,t$1,o=0){if(t(t$1))return n[o+0]=0,n[o+1]=0,n[o+2]=0,void(n[o+3]=0);const{r:u,g:i,b:c,a:e}=t$1;n[o+0]=u*e/255,n[o+1]=i*e/255,n[o+2]=c*e/255,n[o+3]=e;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var E$1,T,I,L,A$1,_$1,O$1,S$1;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL";}(E$1||(E$1={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY";}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES";}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION";}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE";}(A$1||(A$1={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE";}(_$1||(_$1={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH";}(O$1||(O$1={})),function(E){E[E.DEFAULT=0]="DEFAULT",E[E.SIMPLE=1]="SIMPLE",E[E.DOT_DENSITY=2]="DOT_DENSITY",E[E.OUTLINE_FILL=3]="OUTLINE_FILL",E[E.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",E[E.HEATMAP=5]="HEATMAP",E[E.PIE_CHART=6]="PIE_CHART";}(S$1||(S$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0;}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c;}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0;}}h.pool=new e(h);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const E=s$1.getLogger("esri.views.2d.engine.webgl.Utils"),S="geometry",A=[{name:S,strideInBytes:36}],N=[{name:S,strideInBytes:12}],M=[{name:S,strideInBytes:36}],D=[{name:S,strideInBytes:24}],_=[{name:S,strideInBytes:12}],U=[{name:S,strideInBytes:40}],v=[{name:S,strideInBytes:36}],R=[{name:S,strideInBytes:36}];function B(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const C=B(A),b=B(N),O=B(M),F=B(D),x=B(_),z=B(U),P=B(v),j=B(R);function G(e,t){switch(e){case E$1.MARKER:return t===S$1.HEATMAP?b:C;case E$1.FILL:switch(t){case S$1.DOT_DENSITY:return x;case S$1.SIMPLE:case S$1.OUTLINE_FILL_SIMPLE:return F;default:return O}case E$1.LINE:return z;case E$1.TEXT:return P;case E$1.LABEL:return j}}const $=[S],k=[S],V=[S],Y=[S],H=[S];function q(e){switch(e){case E$1.MARKER:return $;case E$1.FILL:return k;case E$1.LINE:return V;case E$1.TEXT:return Y;case E$1.LABEL:return H}}function X(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function K(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function W(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function J(e){return null!=e}function Q(e){return "number"==typeof e}function ee(t){switch(t){case"butt":return e$1.BUTT;case"round":return e$1.ROUND;case"square":return e$1.SQUARE;default:return E.error(new s$2("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),e$1.ROUND}}function te(t){switch(t){case"miter":return n.MITER;case"bevel":return n.BEVEL;case"round":return n.ROUND;default:return E.error(new s$2("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),n.ROUND}}function re(e){switch(e){case"opacity":return L.OPACITY;case"color":return L.COLOR;case"rotation":return L.ROTATION;case"size":return L.SIZE;default:return E.error(`Cannot interpret unknown vv: ${e}`),null}}function ae(e,t,r,n,a,s,i){for(const c in s){const t=s[c].stride,n=X(t),i=s[c].data,o=r[c].data,u=t*a.vertexCount/n,l=t*e/n,m=t*a.vertexFrom/n;for(let e=0;e<u;++e)o[e+l]=i[e+m];}const o=a.indexCount;for(let c=0;c<o;++c)n[c+t]=i[c+a.indexFrom]-a.vertexFrom+e;}const se={[S]:F$1.STATIC_DRAW};function ie(e,t){const r=[];for(let n=0;n<5;++n){const a=q(n),s={};for(const e of a)s[e]={data:t(n,e)};r.push({data:e(n),buffers:s});}return r}function ue(e){switch(e){case C$1.BYTE:case C$1.UNSIGNED_BYTE:return 1;case C$1.SHORT:case C$1.UNSIGNED_SHORT:return 2;case C$1.FLOAT:case C$1.INT:case C$1.UNSIGNED_INT:return 4}}function le(t){switch(t){case G$1.UNSIGNED_BYTE:return 1;case G$1.UNSIGNED_SHORT_4_4_4_4:return 2;case G$1.FLOAT:return 4;default:return void E.error(new s$2("webgl-utils",`Unable to handle type ${t}`))}}function me(t){switch(t){case G$1.UNSIGNED_BYTE:return Uint8Array;case G$1.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case G$1.FLOAT:return Float32Array;default:return void E.error(new s$2("webgl-utils",`Unable to handle type ${t}`))}}function fe(e){const t={};for(const r in e){const n=e[r];let a=0;t[r]=n.map((e=>{const t=new t$1(e.name,e.count,e.type,a,0,e.normalized||!1);return a+=e.count*ue(e.type),t})),t[r].forEach((e=>e.stride=a));}return t}const pe=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},de=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0;}return t},ye=new Map,ge=(e,t)=>{if(!ye.has(e)){const r=fe(t),n={strides:de(r),bufferLayouts:r,attributes:pe(t)};ye.set(e,n);}return ye.get(e)};function he(e){e(E$1.FILL),e(E$1.LINE),e(E$1.MARKER),e(E$1.TEXT),e(E$1.LABEL);}const Ie=e=>"path"in e&&Re(e.path),Te=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,Ee=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,Se=e=>e.startsWith("data:image/gif"),we=e=>"url"in e&&e.url&&(e.url.includes(".gif")||Se(e.url))||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&Se(e.imageData),Le=e=>e.startsWith("data:image/png"),Ae=e=>"url"in e&&e.url&&(e.url.includes(".png")||Le(e.url))||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&Le(e.imageData),Ne=e=>e.type&&e.type.toLowerCase().includes("3d");function Me(e){switch(e.type){case"line":{const t=e;return "CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return "CIMSolidFill"===e.cim.type;case"esriSFS":return "esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return "esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return !1}}const De=e=>e.includes("data:image/svg+xml");function _e(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return !1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return Be(e);default:return !0}}function Ue(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function ve(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const Re=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4)),Be=e=>"fill"===e.type&&"CIMMarkerPlacementInsidePolygon"===e?.cim?.markerPlacement?.type;

export { Ae as A, Be as B, De as D, Ee as E, G, I, J, K, Me as M, Ne as N, O$1 as O, Q, S$1 as S, Te as T, Ue as U, W, X, _e as _, Ie as a, E$1 as b, ae as c, a as d, s as e, f, ge as g, he as h, ie as i, ee as j, A$1 as k, le as l, me as m, i as n, _$1 as o, re as r, se as s, te as t, ve as v, we as w };
