import { U, cV as c, bK as O } from './index.js';
import { C as se, l as k, ak as s, J, K } from './arcadeUtils-a0255de5.js';
import { y as y$1, d, g as g$2, x, l, m, S as S$1 } from './geometryEngineAsync-e8eea63b.js';
import { e as g$1, y } from './SpatialFilter-bc7ac385.js';
import './number-cfad8293.js';
import './FeatureSetReader-592a63f4.js';
import './centroid-6105d00e.js';
import './WhereClause-28a3e89e.js';
import './_commonjsHelpers-34398bae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function S(e){return e instanceof c}function h(i,s$1,d$1,h,g){return g(i,s$1,(function(i,s$1,g){if(g.length<2)return h(new Error("Missing Parameters"));if(null===(g=se(g))[0]&&null===g[1])return U(!1);if(k(g[0]))return g[1]instanceof c?U(new g$1({parentfeatureset:g[0],relation:d$1,relationGeom:g[1]})):null===g[1]?U(new y({parentfeatureset:g[0]})):h("Spatial Relation cannot accept this parameter type");if(S(g[0])){if(S(g[1])){let e=null;switch(d$1){case"esriSpatialRelEnvelopeIntersects":e=m(s(g[0]),s(g[1]));break;case"esriSpatialRelIntersects":e=m(g[0],g[1]);break;case"esriSpatialRelContains":e=l(g[0],g[1]);break;case"esriSpatialRelOverlaps":e=x(g[0],g[1]);break;case"esriSpatialRelWithin":e=g$2(g[0],g[1]);break;case"esriSpatialRelTouches":e=d(g[0],g[1]);break;case"esriSpatialRelCrosses":e=y$1(g[0],g[1]);}return null!==e?e:O(new Error("Unrecognised Relationship"))}return k(g[1])?U(new g$1({parentfeatureset:g[1],relation:d$1,relationGeom:g[0]})):null===g[1]?U(!1):h("Spatial Relation cannot accept this parameter type")}return null!==g[0]?h("Spatial Relation cannot accept this parameter type"):k(g[1])?U(new y({parentfeatureset:g[1]})):g[1]instanceof c||null===g[1]?U(!1):void 0}))}function g(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return h(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return h(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return h(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return h(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return h(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return h(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return h(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,l){return e.standardFunctionAsync(n,l,(function(e,n,l){if(l=se(l),J(l,3,3),S(l[0])&&S(l[1]))return S$1(l[0],l[1],K(l[2]));if(l[0]instanceof c&&null===l[1])return !1;if(l[1]instanceof c&&null===l[0])return !1;if(k(l[0])&&null===l[1])return new y({parentfeatureset:l[0]});if(k(l[1])&&null===l[0])return new y({parentfeatureset:l[1]});if(k(l[0])&&l[1]instanceof c)return l[0].relate(l[1],K(l[2]));if(k(l[1])&&l[0]instanceof c)return l[1].relate(l[0],K(l[2]));if(null===l[0]&&null===l[1])return !1;throw new Error("Illegal Argument")}))});}

export { g as registerFunctions };
