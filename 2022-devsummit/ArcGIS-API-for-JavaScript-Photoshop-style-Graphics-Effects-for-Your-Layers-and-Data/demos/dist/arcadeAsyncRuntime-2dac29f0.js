import { y, L, N, P, o, r, f as f$1, S, p, u, I, g, b, O, a as g$1, F, e, s as s$1 } from './arcadeUtils-03731fcc.js';
import { e8 as f, e0 as s, ed as P$1, dT as Y, ei as Q, e9 as k, el as M, b3 as k$1, eQ as R, eR as k$2, eh as D, eO as j, eP as C, ek as t, e1 as L$1, e4 as X, e7 as J, dV as Z, eg as z, eI as L$2, dU as F$1, ez as v, e2 as ne$1, dW as p$1, eK as W, eL as Ne$1, e5 as G, am as j$1, c2 as v$1, d8 as m, ex as m$1, c_ as M$1, eJ as E, ev as se$1, et as i, eM as h } from './_virtual_index-49b2bc11.js';
import { registerFunctions as fn } from './geomasync-619307bb.js';
import './FeatureSetReader-c99e2aca.js';
import './centroid-15412c9b.js';
import './geometryEngineAsync-18cb476d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function te(e){return e&&"function"==typeof e.then}const re=100;function ne(e){return e instanceof Error?k(e):k(new Error(e))}function oe(e){return L$1(e)}function ae(e,t){const r=[];for(let n=0;n<t.arguments.length;n++)r.push(se(e,t.arguments[n]));return s(r)}function ce(e,t,r){return f(((n,o)=>{if(!0===t.preparsed)return n(r(e,null,t.arguments));ae(e,t).then((a=>{try{n(r(e,t,a));}catch(c){o(c);}}),o);}))}function ie(e,t,r){try{if(!0===t.preparsed){const n=r(e,null,t.arguments);return te(n)?n:L$1(n)}return ae(e,t).then((n=>{try{const o=r(e,t,n);return te(o)?o:L$1(o)}catch(o){return ne(o)}}))}catch(n){return ne(n)}}function se(e,t,r){try{if(t.breakpoint&&!0!==r){return t.breakpoint().then((()=>se(e,t,!0)))}switch(t.type){case"VariableDeclarator":return Me(e,t);case"VariableDeclaration":return Fe(e,t,0);case"BlockStatement":return Oe(e,t);case"FunctionDeclaration":return Ce(e,t);case"ReturnStatement":return Ue(e,t);case"IfStatement":return Re(e,t);case"ExpressionStatement":return Te(e,t);case"UpdateExpression":return Ie(e,t);case"AssignmentExpression":return Se(e,t);case"ForStatement":return de(e,t);case"ForInStatement":return Ne(e,t);case"BreakStatement":return L$1(j);case"EmptyStatement":return L$1(D);case"ContinueStatement":return L$1(C);case"TemplateElement":return Ye(e,t);case"TemplateLiteral":return Ge(e,t);case"Identifier":return Ve(e,t);case"MemberExpression":return De(e,t);case"Literal":return oe(t.value);case"CallExpression":return Be(e,t);case"UnaryExpression":return ke(e,t);case"BinaryExpression":return Le(e,t);case"LogicalExpression":return _e(e,t);case"ArrayExpression":return je(e,t);case"ObjectExpression":return le(e,t);case"Property":return ue(e,t);default:return ne(b(t,"RUNTIME","UNREOGNISED"))}}catch(n){return ne(n)}}function le(e,t){try{const n=[];for(let r=0;r<t.properties.length;r++)n.push(se(e,t.properties[r]));return s(n).then((e=>f((t=>{const n={};for(let r=0;r<e.length;r++){const t=e[r];if(v(t.value))throw new Error("Illegal Argument");if(!1===Z(t.key))throw new Error("Illegal Argument");t.value===D?n[t.key.toString()]=null:n[t.key.toString()]=t.value;}const o=new g$1(n);o.immutable=!1,t(o);}))))}catch(n){return ne(n)}}function ue(e,t){try{return se(e,t.value).then((r=>f((n=>{"Identifier"===t.key.type?n({key:t.key.name,value:r}):se(e,t.key).then((e=>{n({key:e,value:r});}));}))))}catch(r){return k(r)}}function fe(e,t,r){try{return se(e,t.body).then((n=>{try{return r.lastAction=n,r.lastAction===j||r.lastAction instanceof R?(r.testResult=!1,L$1(r)):null!==t.update?se(e,t.update).then((()=>L$1(r))):L$1(r)}catch(o){return k(o)}}))}catch(n){return k(n)}}function he(e,t,r){try{return null!==t.test?se(e,t.test).then((n=>{try{return !0===e.abortSignal.aborted?k(new Error("Cancelled")):(r.testResult=n,!1===r.testResult?L$1(r):!0!==r.testResult?k(new Error(b(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):fe(e,t,r))}catch(o){return k(o)}})):fe(e,t,r)}catch(n){return k(n)}}function pe(e,t,r,n,o,a){try{he(e,t,r).then((()=>{try{!0===r.testResult?++a>re?(a=0,setTimeout((()=>{pe(e,t,r,n,o,a);}),0)):pe(e,t,r,n,o,a):r.lastAction instanceof R?n(r.lastAction):n(D);}catch(c){o(c);}}),(e=>{o(e);}));}catch(c){o(c);}}function de(e,t){try{return null!==t.init?se(e,t.init).then((()=>f(((r,n)=>{pe(e,t,{testResult:!0,lastAction:D},(e=>{r(e);}),(e=>{n(e);}),0);})))):f(((r,n)=>{pe(e,t,{testResult:!0,lastAction:D},(e=>{r(e);}),(e=>{n(e);}),0);}))}catch(r){return k(r)}}function me(e,t,r,n,o,a,c,i,s,l){try{if(n<=a)return void i(D);o.value="k"===c?r[a]:a,se(e,t.body).then((u=>{try{u instanceof R?i(u):u===j?i(D):++l>re?(l=0,setTimeout((()=>{me(e,t,r,n,o,a+1,c,i,s,l);}),0)):me(e,t,r,n,o,a+1,c,i,s,l);}catch(f){s(f);}}),(e=>{s(e);}));}catch(u){s(u);}}function ge(e,t,r,n,o,a,c,i,s){try{if(r.length()<=o)return void c(D);n.value="k"===a?r.get(o):o,se(e,t.body).then((l=>{l instanceof R?c(l):l===j?c(D):++s>re?(s=0,setTimeout((()=>{ge(e,t,r,n,o+1,a,c,i,s);}),0)):ge(e,t,r,n,o+1,a,c,i,s);}),(e=>{i(e);}));}catch(l){i(l);}}function ye(e,t,r,n,o,a){try{if(void 0===a&&(a="i"),0===r.length)return void n.resolve(D);me(e,t,r,r.length,o,0,a,(e=>{n.resolve(e);}),(e=>{n.reject(e);}),0);}catch(c){n.reject(c);}}function Ee(e,t,r,n,o,a){try{if(void 0===a&&(a="i"),0===r.length)return void n.resolve(D);ge(e,t,r,o,0,a,(e=>{n.resolve(e);}),(e=>{n.reject(e);}),0);}catch(c){n.reject(c);}}function we(e,t,r,n,o){try{ye(e,t,r.keys(),n,o,"k");}catch(a){n.reject(a);}}function ve(e,t,r,o,a,c,i,s){try{e.next().then((l=>{try{if(null===l)c(D);else {const u=F.createFromGraphicLikeObject(l.geometry,l.attributes,o);u._underlyingGraphic=l,a.value=u;se(t,r.body).then((n=>{try{n===j?c(D):n instanceof R?c(n):++s>re?(s=0,setTimeout((()=>{ve(e,t,r,o,a,c,i,s);}),0)):ve(e,t,r,o,a,c,i,s);}catch(l){i(l);}}),(e=>{i(e);}));}}catch(u){i(u);}}),(e=>{i(e);}));}catch(l){i(l);}}function Ne(e,t){return f(((o,a)=>{se(e,t.right).then((c=>{try{let i=null;i="VariableDeclaration"===t.left.type?se(e,t.left):L$1(),i.then((()=>{try{let i="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(i=e.name);}else "Identifier"===t.left.type&&(i=t.left.name);if(!i)throw new Error(b(t,"RUNTIME","INVALIDVARIABLE"));i=i.toLowerCase();let s=null;if(null!==e.localScope&&void 0!==e.localScope[i]&&(s=e.localScope[i]),null===s&&void 0!==e.globalScope[i]&&(s=e.globalScope[i]),null===s)return void a(new Error(b(t,"RUNTIME","VARIABLENOTDECLARED")));J(c)||Z(c)?ye(e,t,c,{reject:a,resolve:o},s):z(c)?Ee(e,t,c,{reject:a,resolve:o},s):c instanceof g$1||c instanceof F?we(e,t,c,{reject:a,resolve:o},s):L$2(c)?ve(c.iterator(e.abortSignal),e,t,c,s,(e=>{o(e);}),(e=>{a(e);}),0):ye(e,t,[],{reject:a,resolve:o},s);}catch(i){a(i);}}),a);}catch(i){a(i);}}),a);}))}function Ie(e,t){try{const o=t.argument;if("MemberExpression"===o.type){const a={t:null};return se(e,o.object).then((t=>{let r=null;return a.t=t,!0===o.computed?r=se(e,o.property):"Identifier"===o.property.type&&(r=L$1(o.property.name)),r})).then((e=>f((o=>{const c=a.t;let i;if(J(c)){if(!F$1(e))throw new Error("Invalid Parameter");if(e<0&&(e=c.length+e),e<0||e>=c.length)throw new Error("Assignment outside of array bounds");i=ne$1(c[e]),c[e]="++"===t.operator?i+1:i-1;}else if(c instanceof g$1){if(!1===Z(e))throw new Error("Dictionary accessor must be a string");if(!0!==c.hasField(e))throw new Error("Invalid Parameter");i=ne$1(c.field(e)),c.setField(e,"++"===t.operator?i+1:i-1);}else {if(!(c instanceof F))throw z(c)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z(e))throw new Error("Feature accessor must be a string");if(!0!==c.hasField(e))throw new Error("Invalid Parameter");i=ne$1(c.field(e)),c.setField(e,"++"===t.operator?i+1:i-1);}!1===t.prefix?o(i):o("++"===t.operator?i+1:i-1);}))))}return f(((r,n)=>{const o="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");let a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=ne$1(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?r(a):r("++"===t.operator?a+1:a-1))):void 0!==e.globalScope[o]?(a=ne$1(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},void(!1===t.prefix?r(a):r("++"===t.operator?a+1:a-1))):void n(new Error("Variable not recognised"))}))}catch(o){return k(o)}}function be(e,t,r,n){switch(t){case"=":return e===D?null:e;case"/=":return ne$1(r)/ne$1(e);case"*=":return ne$1(r)*ne$1(e);case"-=":return ne$1(r)-ne$1(e);case"+=":return Z(r)||Z(e)?X(r)+X(e):ne$1(r)+ne$1(e);case"%=":return ne$1(r)%ne$1(e);default:throw new Error(b(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function Se(e,t){return f(((o,a)=>{const c=t.left;if("MemberExpression"===c.type)se(e,t.right).then((i=>{try{se(e,c.object).then((s=>{try{let l=null;if(!0===c.computed)l=se(e,c.property);else {if("Identifier"!==c.property.type)throw new Error("Expected computed or identifier for assignemnt target");l=L$1(c.property.name);}l.then((e=>{try{if(J(s)){if(!F$1(e))throw new Error("Invalid Parameter");if(e<0&&(e=s.length+e),e<0||e>s.length)throw new Error("Assignment outside of array bounds");if(e===s.length){if("="!==t.operator)throw new Error("Invalid Parameter");s[e]=be(i,t.operator,s[e],t);}else s[e]=be(i,t.operator,s[e],t);}else if(s instanceof g$1){if(!1===Z(e))throw new Error("Dictionary accessor must be a string");if(!0===s.hasField(e))s.setField(e,be(i,t.operator,s.field(e),t));else {if("="!==t.operator)throw new Error("Invalid Parameter");s.setField(e,be(i,t.operator,null,t));}}else {if(!(s instanceof F))throw z(s)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===Z(e))throw new Error("Feature accessor must be a string");if(!0===s.hasField(e))s.setField(e,be(i,t.operator,s.field(e),t));else {if("="!==t.operator)throw new Error("Invalid Parameter");s.setField(e,be(i,t.operator,null,t));}}o(D);}catch(c){a(c);}}),a);}catch(l){a(l);}}),a);}catch(s){a(s);}}),a);else {const r=c.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[r])return void se(e,t.right).then((n=>{try{e.localScope[r]={value:be(n,t.operator,e.localScope[r].value,t),valueset:!0,node:t.right},o(D);}catch(c){a(c);}}),a);void 0!==e.globalScope[r]?se(e,t.right).then((n=>{try{e.globalScope[r]={value:be(n,t.operator,e.globalScope[r].value,t),valueset:!0,node:t.right},o(D);}catch(c){a(c);}}),a):a(new Error("Cannot assign undeclared variable"));}}))}function Te(e,t){try{return "AssignmentExpression"===t.expression.type?se(e,t.expression):(t.expression.type,se(e,t.expression).then((e=>f((t=>{t(e===D?D:new k$2(e));})))))}catch(r){return k(r)}}function Re(e,t){return f(((r,n)=>{"AssignmentExpression"!==t.test.type&&"UpdateExpression"!==t.test.type?se(e,t.test).then((o=>{try{!0===o?se(e,t.consequent).then(r,n):!1===o?null!==t.alternate?se(e,t.alternate).then(r,n):r(D):n(new Error(b(t.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")));}catch(a){n(a);}}),n):n(new Error(b(t.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));}))}function Oe(e,t){try{return Ae(e,t,0)}catch(r){return ne(r)}}function Ae(e,t,r){try{return r>=t.body.length?L$1(D):f(((n,o)=>{se(e,t.body[r]).then((a=>{try{a instanceof R||a===j||a===C||r===t.body.length-1?n(a):Ae(e,t,r+1).then(n,o);}catch(c){o(c);}}),o);}))}catch(n){return ne(n)}}function Ue(e,t){return f(((r,n)=>{null===t.argument?r(new R(D)):se(e,t.argument).then((e=>{try{r(new R(e));}catch(t){n(t);}}),n);}))}function Ce(e,t$1){try{const r=t$1.id.name.toLowerCase();return e.globalScope[r]={valueset:!0,node:null,value:new t(t$1,e)},L$1(D)}catch(r){return ne(r)}}function Fe(e,t,r){return f(((n,o)=>{r>=t.declarations.length?n(D):se(e,t.declarations[r]).then((()=>{r===t.declarations.length-1?n(D):Fe(e,t,r+1).then((()=>{n(D);}),o);}),o);}))}function Me(e,t){try{let r=null;return r=null===t.init?L$1(null):se(e,t.init),null!==e.localScope?r.then((r=>f((n=>{if(r===D&&(r=null),"Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();e.localScope[o]={value:r,valueset:!0,node:t.init},n(D);})))):r.then((r=>f((n=>{if("Identifier"!==t.id.type)throw new Error("Can only assign a regular variable");const o=t.id.name.toLowerCase();r===D&&(r=null),e.globalScope[o]={value:r,valueset:!0,node:t.init},n(D);}))))}catch(r){return ne(r)}}let xe=0;function Pe(e,t,n,o){let i$1;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let r=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(r=!1),r&&(xe++,e.spatialReference._arcadeCacheId=xe,t=xe);}const n=new g$1({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(n._arcadeCacheId="SPREF"+t.toString()),n}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const r=e[t];return void 0!==r?r:null}case"type":return "Extent"}break;case"polygon":switch(t){case"rings":i$1=e.cache._arcadeCacheId,void 0===i$1&&(xe++,i$1=xe,e.cache._arcadeCacheId=i$1);return new h(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,i$1);case"type":return "Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return "Point"}break;case"polyline":switch(t){case"paths":i$1=e.cache._arcadeCacheId,void 0===i$1&&(xe++,i$1=xe,e.cache._arcadeCacheId=i$1);return new h(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,i$1);case"type":return "Polyline"}break;case"multipoint":switch(t){case"points":i$1=e.cache._arcadeCacheId,void 0===i$1&&(xe++,i$1=xe,e.cache._arcadeCacheId=i$1);return new i(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,i$1,1);case"type":return "Multipoint"}}throw new Error(b(o,"RUNTIME","PROPERTYNOTFOUND"))}function De(e,t){try{return se(e,t.object).then((o=>{try{return null===o?k(new Error(b(t,"RUNTIME","NOTFOUND"))):!1===t.computed?"Identifier"===t.property.type?o instanceof g$1||o instanceof F?L$1(o.field(t.property.name)):o instanceof p$1?L$1(Pe(o,t.property.name,e,t)):k(new Error(b(t,"RUNTIME","INVALIDTYPE"))):k(new Error(b(t,"RUNTIME","INVALIDTYPE"))):se(e,t.property).then((a=>f(((c,i)=>{if(o instanceof g$1||o instanceof F)Z(a)?c(o.field(a)):i(new Error(b(t,"RUNTIME","INVALIDTYPE")));else if(o instanceof p$1)Z(a)?c(Pe(o,a,e,t)):i(new Error(b(t,"RUNTIME","INVALIDTYPE")));else if(J(o))if(F$1(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(b(t,"RUNTIME","OUTOFBOUNDS"));c(o[a]);}else i(new Error(b(t,"RUNTIME","INVALIDTYPE")));else if(z(o))if(F$1(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length()+a),a>=o.length()||a<0)throw new Error(b(t,"RUNTIME","OUTOFBOUNDS"));c(o.get(a));}else i(new Error(b(t,"RUNTIME","INVALIDTYPE")));else if(Z(o))if(F$1(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(b(t,"RUNTIME","OUTOFBOUNDS"));c(o[a]);}else i(new Error(b(t,"RUNTIME","INVALIDTYPE")));else i(new Error(b(t,"RUNTIME","INVALIDTYPE")));}))))}catch(a){return ne(a)}}))}catch(o){return ne(o)}}function ke(e,t){try{return se(e,t.argument).then((e=>f(((r,n)=>{Y(e)&&"!"===t.operator?r(!e):"-"===t.operator?r(-1*ne$1(e)):"+"===t.operator?r(1*ne$1(e)):"~"===t.operator?r(~ne$1(e)):n(new Error(b(t,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")));}))))}catch(r){return ne(r)}}function je(e,t){try{const r=[];for(let n=0;n<t.elements.length;n++)r.push(se(e,t.elements[n]));return s(r).then((e=>f(((r,n)=>{for(let o=0;o<e.length;o++){if(v(e[o]))return void n(new Error(b(t,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===D&&(e[o]=null);}r(e);}))))}catch(r){return ne(r)}}function Le(e,t){try{return s([se(e,t.left),se(e,t.right)]).then((e=>f(((r,n)=>{const o=e[0],a=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":r(Ne$1(ne$1(o),ne$1(a),t.operator));case"==":r(Q(o,a));break;case"!=":r(!Q(o,a));break;case"<":case">":case"<=":case">=":r(W(o,a,t.operator));break;case"+":Z(o)||Z(a)?r(X(o)+X(a)):r(ne$1(o)+ne$1(a));break;case"-":r(ne$1(o)-ne$1(a));break;case"*":r(ne$1(o)*ne$1(a));break;case"/":r(ne$1(o)/ne$1(a));break;case"%":r(ne$1(o)%ne$1(a));break;default:n(new Error(b(t,"RUNTIME","OPERATORNOTRECOGNISED")));}}))))}catch(r){return ne(r)}}function _e(e,t){return f(((r,n)=>{"AssignmentExpression"!==t.left.type&&"UpdateExpression"!==t.left.type?"AssignmentExpression"!==t.right.type&&"UpdateExpression"!==t.right.type?se(e,t.left).then((o=>{try{if(!Y(o))throw new Error(b(t,"RUNTIME","ONLYBOOLEAN"));switch(t.operator){case"||":!0===o?r(o):se(e,t.right).then((e=>{try{if(!Y(e))throw new Error(b(t,"RUNTIME","ONLYORORAND"));r(e);}catch(o){n(o);}}),n);break;case"&&":!1===o?r(o):se(e,t.right).then((e=>{try{if(!Y(e))throw new Error(b(t,"RUNTIME","ONLYORORAND"));r(e);}catch(o){n(o);}}),n);break;default:throw new Error(b(t,"RUNTIME","ONLYORORAND"))}}catch(a){n(a);}}),n):n(new Error(b(t.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):n(new Error(b(t.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));}))}function Ve(e,t){return f(((r,n)=>{const o=t.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])n(new Error(b(t,"RUNTIME","VARIABLENOTFOUND")));else {const t=e.globalScope[o];!0===t.valueset?r(t.value):null!==t.d?t.d.then(r,n):(t.d=se(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,r(e);}catch(o){n(o);}}),n));}else {const t=e.localScope[o];!0===t.valueset?r(t.value):null!==t.d?t.d.then(r,n):(t.d=se(e,t.node),t.d.then((e=>{try{t.value=e,t.valueset=!0,r(e);}catch(o){n(o);}}),n));}}))}function Be(e,t$1){try{if("Identifier"!==t$1.callee.type)return ne(b(t$1,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t$1.callee.name.toLowerCase()]){const r=e.localScope[t$1.callee.name.toLowerCase()];return r.value instanceof M?r.value.fn(e,t$1):r.value instanceof t?$e(e,t$1,r.value.definition):ne(b(t$1,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t$1.callee.name.toLowerCase()]){const r=e.globalScope[t$1.callee.name.toLowerCase()];return r.value instanceof M?r.value.fn(e,t$1):r.value instanceof t?$e(e,t$1,r.value.definition):ne(b(t$1,"RUNTIME","NOTAFUNCTION"))}return ne(b(t$1,"RUNTIME","NOTFOUND"))}catch(r){return ne(r)}}function Ye(e,t){return L$1(t.value?t.value.cooked:"")}function Ge(e,t){return f((r=>{const n=[];O(t.expressions,((t,r,o,a)=>se(e,r).then((e=>{n[o]=X(e);})))).then((()=>{let e="",o=0;for(const r of t.quasis)if(e+=r.value?r.value.cooked:"",!1===r.tail){e+=n[o]?n[o]:"",o++;}r(e);}));}))}const ze={};function qe(o){return null===o?"":J(o)||z(o)?"Array":G(o)?"Date":Z(o)?"String":Y(o)?"Boolean":F$1(o)?"Number":o instanceof e?"Attachment":o instanceof s$1?"Portal":o instanceof g$1?"Dictionary":o instanceof F?"Feature":o instanceof j$1?"Point":o instanceof v$1?"Polygon":o instanceof m?"Polyline":o instanceof m$1?"Multipoint":o instanceof M$1?"Extent":v(o)?"Function":L$2(o)?"FeatureSet":E(o)?"FeatureSetCollection":o===D?"":"number"==typeof o&&isNaN(o)?"Number":"Unrecognised Type"}function He(e,t,r,n){return f(((o,a)=>{se(e,t.arguments[r]).then((c=>{try{if(Q(c,n))return void se(e,t.arguments[r+1]).then(o,a);{const c=t.arguments.length-r;return 1===c?void se(e,t.arguments[r]).then(o,a):(2===c&&o(null),3===c?void se(e,t.arguments[r+2]).then(o,a):void He(e,t,r+2,n).then(o,a))}}catch(i){a(i);}}),a);}))}function Ze(e,t,r,n){return f(((o,a)=>{if(!0===n)se(e,t.arguments[r+1]).then(o,a);else {3===t.arguments.length-r?se(e,t.arguments[r+2]).then(o,a):se(e,t.arguments[r+2]).then((n=>{try{if(!1===Y(n))return void a(new Error("WHEN needs boolean test conditions"));Ze(e,t,r+2,n).then(o,a);}catch(c){a(c);}}));}}))}function We(e,t){try{const r=e.length,n=Math.floor(r/2);return 0===r?L$1([]):1===r?L$1([e[0]]):f(((o,a)=>{const c=[We(e.slice(0,n),t),We(e.slice(n,r),t)];s(c).then((e=>{try{Ke(e[0],e[1],t,[]).then(o,a);}catch(r){a(r);}}),a);}))}catch(r){return ne(r)}}function Ke(e,t,r,n){return f(((o,a)=>{const c=n;e.length>0||t.length>0?e.length>0&&t.length>0?r(e[0],t[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(c.push(e[0]),e=e.slice(1)):(c.push(t[0]),t=t.slice(1)),Ke(e,t,r,n).then(o,a);}catch(s){a(s);}}),a):e.length>0?(c.push(e[0]),Ke(e=e.slice(1),t,r,n).then(o,a)):t.length>0&&(c.push(t[0]),t=t.slice(1),Ke(e,t,r,n).then(o,a)):o(n);}))}function Xe(e,t){const r=e.length,n=Math.floor(r/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===r?[]:1===r?[e[0]]:Je(Xe(e.slice(0,n),t),Xe(e.slice(n,r),t),t)}function Je(e,t,r){const n=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=r(e[0],t[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(t[0]),t=t.slice(1));}else e.length>0?(n.push(e[0]),e=e.slice(1)):t.length>0&&(n.push(t[0]),t=t.slice(1));return n}function Qe(e,t,r){try{const n=e.body;if(r.length!==e.params.length)return ne(new Error("Invalid Parameter calls to function."));for(let o=0;o<r.length;o++){const n=e.params[o];"Identifier"===n.type&&(t.localScope[n.name.toLowerCase()]={d:null,value:r[o],valueset:!0,node:null});}return se(t,n).then((e=>f(((t,r)=>{e instanceof R?t(e.value):e!==j?e!==C?t(e instanceof k$2?e.value:e):r(new Error("Cannot Continue from a Function")):r(new Error("Cannot Break from a Function"));}))))}catch(n){return k(n)}}function $e(e,t,r){return ie(e,t,(function(t,n,o){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Qe(r,a,o)}))}function et(e){const t=function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return Qe(e.definition,t,arguments)};return t}y(ze,ce),L(ze,ce),N(ze,ce),P(ze,ce),o(ze,ce),fn({functions:ze,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:ce,standardFunctionAsync:ie}),ze.typeof=function(e,t){return ce(e,t,(function(e,t,r){P$1(r,1,1);const n=qe(r[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},ze.iif=function(e,t){return f(((r,n)=>{P$1(null===t.arguments?[]:t.arguments,3,3),se(e,t.arguments[0]).then((o=>{try{if(!1===Y(o))return void n(new Error("IF Function must have a boolean test condition"));s([se(e,t.arguments[1]),se(e,t.arguments[2])]).then((e=>{r(o?e[0]:e[1]);}),n);}catch(a){n(a);}}),n);}))},ze.decode=function(e,t){return f(((r,n)=>{t.arguments.length<2?n(new Error("Missing Parameters")):2!==t.arguments.length?(t.arguments.length-1)%2!=0?se(e,t.arguments[0]).then((o=>{try{He(e,t,1,o).then(r,n);}catch(a){n(a);}}),n):n(new Error("Must have a default value result.")):se(e,t.arguments[1]).then(r,n);}))},ze.when=function(e,t){try{return t.arguments.length<3?ne("Missing Parameters"):t.arguments.length%2==0?ne("Must have a default value result."):se(e,t.arguments[0]).then((r=>f(((n,o)=>{if(!1===Y(r))return void o(new Error("WHEN needs boolean test conditions"));Ze(e,t,0,r).then(n,o);}))))}catch(r){return ne(r)}},ze.sort=function(e,t){return ie(e,t,(function(e,t,r){P$1(r,1,2);let n=r[0];if(z(n)&&(n=n.toArray()),!1===J(n))return ne(Error("Illegal Argument"));if(r.length>1){if(!1===v(r[1]))return ne(Error("Illegal Argument"));return We(n,et(r[1]))}{let e=n;if(0===e.length)return L$1([]);const t={};for(let n=0;n<e.length;n++){const r=qe(e[n]);""!==r&&(t[r]=!0);}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return L$1(e.slice(0));let r=0,o="";for(const n in t)r++,o=n;return r>1||"String"===o?e=Xe(e,(function(e,t){if(null==e||e===D)return null==t||t===D?0:1;if(null==t||t===D)return -1;const r=X(e),n=X(t);return r<n?-1:r===n?0:1})):"Number"===o?e=Xe(e,(function(e,t){return e-t})):"Boolean"===o?e=Xe(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===o&&(e=Xe(e,(function(e,t){return t-e}))),L$1(e)}}))};const tt={failDefferred:ne,resolveDeffered:oe,fixSpatialReference:se$1,parseArguments:ae,standardFunction:ce,standardFunctionAsync:ie,evaluateIdentifier:Ve,arcadeCustomFunction:et};for(const pt in ze)ze[pt]={value:new M(ze[pt]),valueset:!0,node:null};const rt=function(){};function nt(e,t){const o=new rt;null==e&&(e={}),null==t&&(t={});const a=new g$1({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,o.textformatting={value:a,valueset:!0,node:null};for(const r in t)o[r]={value:new M(t[r]),native:!0,valueset:!0,node:null};for(const r in e)e[r]&&"esri.Graphic"===e[r].declaredClass?o[r]={value:F.createFromGraphic(e[r]),valueset:!0,node:null}:o[r]={value:e[r],valueset:!0,node:null};return o}function ot(e){console.log(e);}rt.prototype=ze,rt.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},rt.prototype.pi={value:Math.PI,valueset:!0,node:null};const at=tt;function ct(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:ce,standardFunctionAsync:ie,failDefferred:ne,evaluateIdentifier:Ve,arcadeCustomFunctionHandler:et};for(let r=0;r<e.length;r++)e[r].registerFunctions(t);for(const r in t.functions)ze[r]={value:new M(t.functions[r]),valueset:!0,node:null},rt.prototype[r]=ze[r];for(let r$1=0;r$1<t.signatures.length;r$1++)r(t.signatures[r$1],"async");}function it(e,t$1){let r=t$1.spatialReference;null==r&&(r=new k$1({wkid:102100}));const n=nt(t$1.vars,t$1.customfunctions);return se({spatialReference:r,services:t$1.services,abortSignal:void 0===t$1.abortSignal||null===t$1.abortSignal?{aborted:!1}:t$1.abortSignal,globalScope:n,console:t$1.console?t$1.console:ot,lrucache:t$1.lrucache,interceptor:t$1.interceptor,localScope:null,depthCounter:1},e.body[0].body).then((e=>f(((t$1,r)=>{e instanceof R&&(e=e.value),e instanceof k$2&&(e=e.value),e===D&&(e=null),e!==j?e!==C?e instanceof M||e instanceof t?r(new Error("Cannot return FUNCTION")):t$1(e):r(new Error("Cannot return CONTINUE")):r(new Error("Cannot return BREAK"));}))))}function st(e,t){return f$1(e)}function lt(e,t){return S(e,t,"full")}function ut(e,t){return p(e,t)}function ft(e,t){return u(e,t)}function ht(e){return I(e)}ct([g]);

export { it as executeScript, ct as extend, st as extractFieldLiterals, ht as findFunctionCalls, at as functionHelper, ft as referencesFunction, ut as referencesMember, lt as validateScript };