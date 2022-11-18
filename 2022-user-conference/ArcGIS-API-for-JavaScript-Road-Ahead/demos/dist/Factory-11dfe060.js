import { h$ as d, i0 as d$1, jO as l, hV as t, i1 as s, m as r, h_ as q$1, t as t$1, aK as n$1, f3 as d$2, h2 as f, hz as s$1, fP as r$1, bo as i$1, jb as pn, fY as p, eG as _, eE as e, g1 as _$1, jP as e$1, eD as P$1, bn as g, g0 as u, jQ as x, jR as t$2, d8 as i$2, jS as j, jT as i$3, jU as L$1 } from './_virtual_index-1ea2035a.js';
import { G as G$1 } from './dragEventPipeline-b225d16a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function C(e,r){return D$1(e,(()=>r))}function T(e){return D$1(e,(e=>e.plane))}function D$1(t$2,s$1){const c=n$1(),l$1=n$1();let i=!1;return a=>{const u=s$1(a);if("start"===a.action){const r$1=d$1(a.screenStart,l(t.get())),s$1=s(t$2.state.camera,r$1,L);r(s$1)&&(i=q$1(u,s$1,c));}if(!i)return null;const p=d$1(a.screenEnd,l(t.get())),m=s(t$2.state.camera,p,L);return t$1(m)?null:q$1(u,m,l$1)?{...a,renderStart:c,renderEnd:l$1,plane:u,ray:m}:null}}function M(t,n,o,c=null,l=null){let i=null;return a=>{if("start"===a.action&&(i=t.sceneIntersectionHelper.intersectElevationFromScreen(i$1(a.screenStart.x,a.screenStart.y),n,o,l),r(i)&&r(c)&&!pn(i,i,c)))return null;if(t$1(i))return null;const u=t.sceneIntersectionHelper.intersectElevationFromScreen(i$1(a.screenEnd.x,a.screenEnd.y),n,o,l);return r(u)?r(c)&&!pn(u,u,c)?null:{...a,mapStart:i,mapEnd:u}:null}}function N(e,r,t,n=null,o=null){return M(e,t,d$2(r,e,t),n,o)}function P(e,r,t,n=null,o=null){return N(e,t,f(r),n,o)}function h(r$1,t,n,o){const s=t.toMap(r$1.screenStart,{include:[n]});return r(s)?P(t,n,s,o):null}function k(e$1,r){const t=J,n=K,o=p();e$1.renderCoordsHelper.worldUpAtPosition(r,t);const s=_(o,t,e(n,r,e$1.state.camera.eye));return _(s,s,t),_$1(r,s,o)}function G(e,r,t){let n=null;const o=new G$1;return o.next(C(e,k(e,r))).next(A$1(e,r)).next(F(e,t)).next((e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,n=e;})),e=>(n=null,o.execute(e),n)}function A$1(e$2,r){const t=n$1(),n=s$1(r);e$2.renderCoordsHelper.worldUpAtPosition(r,t);const o=n$1(),s=n$1(),i=o=>{if(e(o,o,r),e$1(t,o,o),"global"===e$2.viewingMode){s$1(o)*Math.sign(P$1(t,o))<.001-n&&e(o,g(o,t,.001),r);}return u(o,o,r),o};return e=>(e.renderStart=i(r$1(o,e.renderStart)),e.renderEnd=i(r$1(s,e.renderEnd)),e)}function F(r$1,t){const n=r$1.renderCoordsHelper;return r$1=>{const o=n.fromRenderCoords(r$1.renderStart,t),s=n.fromRenderCoords(r$1.renderEnd,t);return r(o)&&r(s)?{...r$1,mapStart:o,mapEnd:s}:null}}var q;function z(r$1){let t=null;return n=>{switch(n.action){case"start":t=r$1.disableDisplay();break;case"end":case"cancel":r(t)&&(t.remove(),t=null);}return n}}function B(o,c=null){const l=x(o.state.viewingMode);l.options.selectionMode=!0,l.options.store=t$2.MIN,l.options.hud=!1;const i=i$1(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},u=n$1(),p=i$2(c,o.spatialReference),m=e=>{o.map.ground&&o.map.ground.opacity<1?a.exclude.add(j):a.exclude.delete(j),o.sceneIntersectionHelper.intersectIntersectorScreen(d$1(e,i),l,a);const r=l.results.min;let t;if(r.getIntersectionPoint(u))t=r.intersector===i$3.TERRAIN?q.GROUND:q.OTHER;else {if(!l.results.ground.getIntersectionPoint(u))return null;t=q.GROUND;}return {location:o.renderCoordsHelper.fromRenderCoords(u,p),surfaceType:t}};let f;return t=>{if("start"===t.action){const r$1=m(t.screenStart);f=r(r$1)?r$1.location:null;}if(t$1(f))return null;const n=m(t.screenEnd);return r(n)&&r(n.location)?{...t,mapStart:f,mapEnd:n.location,surfaceType:n.surfaceType}:null}}!function(e){e[e.GROUND=0]="GROUND",e[e.OTHER=1]="OTHER";}(q||(q={}));const J=n$1(),K=n$1(),L=d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD/gAD/gAD/cAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/gAD/fAD/gAD/fAD/gAD/fAD/fQD/fQD/fQD/fQD/fQD/fgD/jR7/mjn/mjf/p1H/plH/smf/sWb/vHr/u3n/xYz/xIv/zZz/zJv/zJr/1Kv/1Kr/06r/06n/27n/27f/4cX/4cT/59D/7dr/8uX/9u7/+/f////u2EN0AAAAM3RSTlMACBAQICAoKDAwODhAQEhIUFBYYGhweICIkJCXmJ+gp6ivsLe4uL+/wMDHx8/P19/n7/cWvjXwAAACeUlEQVR42tWX3XqiMBCGY2pbtbrUnzhhdak/lHWliJD7v7fdJ+KG5AMhh30P8zCTmS+TycDaeBoHi5Wgf4jVYvbKmRfPgSAHMX9mPRnM1tSIGHM/c2QddLp4c8wxCvYIvqROBPfbHlm/sRYC6smMNTKn3sxZAyvyYNW1v38MM/IkcPQnZHPMLtciz9P9hhqwzoLD+cnfpTIUaYinyZlBkE2YKZcMXCyN/YhsPkuFlMfWJLiwo89VMxfpJDForMCwuG+Zx7ttGO2S/w4LJ42ZURDty5M0a4dqsZAQAihQfXqWdlhnpcmdEPAI0tv2EbnsbsKmdgi6/1GN7T1XJLx5sF0P9SWABMC+co5JBE4Ge/1NTM3EGIJgjFONXCdAbeQYwhN7pRrRV20LJNIhWOczdu+xPFzIBiQ62iIsyIOTvlZUY+HXySLQaMUEeSC1CPYxENIlwk+q8e0clFAIfiKG+qpaIvod4wfU8sqvkDLda+xCCqgDaAk7uyeNqD+feFlfGCcg3Hzsk+xS7Nz1Aq4CcauhhMc0uxaqIgcFsF0J+1WQyoCN7Y9ezeCVH5LhSxmyRvsihKbK1m7LafpSpkpj6yJgtsiVBh6AX5UyCVmMbrNpcwj5/h6DPN79JjAiQAhXVeN6SZI0q5bQnn4wBiHEqpUybp1ZJzWxStVCHhKhAhVLp/Emh6trHpGLaB6yZHk7wu3Z+ChOxhwUNEmYYjpUvqJDksSHraQmJm2DdqQK6sGUObybYtpSN+8Phm3pN2xjDH33R6b0CKxAZNLvl8foD3BBnSw5e8RI+G2P8GD9wHw6YN3wkfA0R4Zz8CGCIfOCv8zM738walXuLw6nXBvPr8wvAAAAAElFTkSuQmCC";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const D="data:image/png;base64,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";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};function o(r){return r.fromData(A,(()=>new L$1(A,n)))}function i(t){return t.fromData(D,(()=>new L$1(D,n)))}

export { B, C, F, G, N, P, T, h, i, o, z };