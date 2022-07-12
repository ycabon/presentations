import { a as e$2, d, n, i as l$1, jQ as r, iA as o$1, bY as r$1, aw as b, eP as w } from './_virtual_index-64b818a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t=class extends l$1{get affectsPixelSize(){return !1}forwardTransform(r){return r}inverseTransform(r){return r}};e$2([d()],t.prototype,"affectsPixelSize",null),e$2([d({json:{write:!0}})],t.prototype,"spatialReference",void 0),t=e$2([n("esri.layers.support.rasterTransforms.BaseRasterTransform")],t);const a$2=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a$1=class extends a$2{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8;}forwardTransform(r){return "point"===(r=r.clone()).type?(r.x>180+this.tolerance&&(r.x-=360),r):(r.xmin>=180-this.tolerance?(r.xmax-=360,r.xmin-=360):r.xmax>180+this.tolerance&&(r.xmin=-180,r.xmax=180),r)}inverseTransform(r){return "point"===(r=r.clone()).type?(r.x<-this.tolerance&&(r.x+=360),r):(r.xmin<-this.tolerance&&(r.xmin+=360,r.xmax+=360),r)}};e$2([r({GCSShiftXform:"gcs-shift"})],a$1.prototype,"type",void 0),e$2([d()],a$1.prototype,"tolerance",void 0),a$1=e$2([n("esri.layers.support.rasterTransforms.GCSShiftTransform")],a$1);const c$1=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e$1=class extends a$2{constructor(){super(...arguments),this.type="identity";}};e$2([r({IdentityXform:"identity"})],e$1.prototype,"type",void 0),e$1=e$2([n("esri.layers.support.rasterTransforms.IdentityTransform")],e$1);const p=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,r,o){const{x:t,y:s}=r;if(o<2){return {x:e[0]+t*e[2]+s*e[4],y:e[1]+t*e[3]+s*e[5]}}if(2===o){const r=t*t,o=s*s,n=t*s;return {x:e[0]+t*e[2]+s*e[4]+r*e[6]+n*e[8]+o*e[10],y:e[1]+t*e[3]+s*e[5]+r*e[7]+n*e[9]+o*e[11]}}const n=t*t,i=s*s,f=t*s,p=n*t,l=n*s,a=t*i,c=s*i;return {x:e[0]+t*e[2]+s*e[4]+n*e[6]+f*e[8]+i*e[10]+p*e[12]+l*e[14]+a*e[16]+c*e[18],y:e[1]+t*e[3]+s*e[5]+n*e[7]+f*e[9]+i*e[11]+p*e[13]+l*e[15]+a*e[17]+c*e[19]}}function a(e,r,o){const{xmin:t,ymin:s,xmax:n,ymax:i,spatialReference:f}=r;let a=[];if(o<2)a.push({x:t,y:i}),a.push({x:n,y:i}),a.push({x:t,y:s}),a.push({x:n,y:s});else {let e=10;for(let r=0;r<e;r++)a.push({x:t,y:s+(i-s)*r/(e-1)}),a.push({x:n,y:s+(i-s)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:t+(n-t)*r/e,y:s}),a.push({x:t+(n-t)*r/e,y:i});}a=a.map((r=>l(e,r,o)));const c=a.map((e=>e.x)),u=a.map((e=>e.y));return new w({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,u),ymax:Math.max.apply(null,u),spatialReference:f})}function c(e){const[r,o,t,s,n,i]=e,f=t*i-n*s,p=n*s-t*i;return [(n*o-r*i)/f,(t*o-r*s)/p,i/f,s/p,-n/f,-t/p]}let u=class extends a$2{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial";}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(!o?.length||!t?.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeForwardCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<e?.length;n++)n%2==0?t.push(e[n]):s.push(e[n]);r.coeffX=t,r.coeffY=s;}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return !e&&r&&this.polynomialOrder<2&&(e=c(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e);}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(!o?.length||!t?.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeInverseCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<e?.length;n++)n%2==0?t.push(e[n]):s.push(e[n]);r.inverseCoeffX=t,r.inverseCoeffY=s;}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const r=l(this.forwardCoefficients,e,this.polynomialOrder);return new b({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const r=l(this.inverseCoefficients,e,this.polynomialOrder);return new b({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.inverseCoefficients,e,this.polynomialOrder)}};e$2([d({json:{write:!0}})],u.prototype,"polynomialOrder",void 0),e$2([d()],u.prototype,"forwardCoefficients",void 0),e$2([o$1("forwardCoefficients",["coeffX","coeffY"])],u.prototype,"readForwardCoefficients",null),e$2([r$1("forwardCoefficients")],u.prototype,"writeForwardCoefficients",null),e$2([d({json:{write:!0}})],u.prototype,"inverseCoefficients",null),e$2([o$1("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],u.prototype,"readInverseCoefficients",null),e$2([r$1("inverseCoefficients")],u.prototype,"writeInverseCoefficients",null),e$2([d()],u.prototype,"affectsPixelSize",null),e$2([r({PolynomialXform:"polynomial"})],u.prototype,"type",void 0),u=e$2([n("esri.layers.support.rasterTransforms.PolynomialTransform")],u);const m=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o={GCSShiftXform:c$1,IdentityXform:p,PolynomialXform:m},e=Object.keys(o);function f(r){const t=r?.type;return !r||e.includes(t)}function i(r){const t=r?.type;if(!t)return null;const n=o[r?.type];if(n){const t=new n;return t.read(r),t}return null}

export { c$1 as c, f, i, m };
