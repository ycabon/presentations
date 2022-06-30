import { e7 as f, ec as s, e8 as L, aP as k, e9 as x, d5 as c, a3 as j$1, aQ as x$1, c7 as m$1, e4 as m$2, bz as M } from './_virtual_index-2683c931.js';
import { h, d, N, a as N$1, D, o, J, I, B, S, b as a, c as N$2, T, e as b, _, j, t, u, f as N$3, m, p, A, g as S$1, O, K, Z, F, E, i as h$1, k as g, l as k$1, w, v, X, q, y as ye$1, P, n as e, s as s$1, r as D$1, x as te$1, z as i, C as h$2 } from './arcadeUtils-d726c21d.js';
import { registerFunctions as on } from './geomasync-2bc87caa.js';
import './number-b1bf087b.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './geometryEngineAsync-1e55fb8b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function te(e){return e&&"function"==typeof e.then}const re=100;function ne(e){return e instanceof Error?L(e):L(new Error(e))}function oe(e){return x(e)}function ae(e,r){const n=[];for(let t=0;t<r.arguments.length;t++)n.push(se(e,r.arguments[t]));return s(n)}function ce(t,r,n){return f(((e,o)=>{ae(t,r).then((a=>{try{e(n(t,r,a));}catch(c){o(c);}}),o);}))}function ie(e,t,r){try{return ae(e,t).then((o=>{try{const a=r(e,t,o);return te(a)?a:x(a)}catch(a){return ne(a)}}))}catch(o){return ne(o)}}function se(e,t,r){try{if(t.breakpoint&&!0!==r){return t.breakpoint().then((()=>se(e,t,!0)))}switch(t.type){case"VariableDeclarator":return Me(e,t);case"VariableDeclaration":return Fe(e,t,0);case"BlockStatement":return Oe(e,t);case"FunctionDeclaration":return Ce(e,t);case"ReturnStatement":return Ue(e,t);case"IfStatement":return Re(e,t);case"ExpressionStatement":return Se(e,t);case"UpdateExpression":return Ie(e,t);case"AssignmentExpression":return Te(e,t);case"ForStatement":return de(e,t);case"ForInStatement":return Ne(e,t);case"BreakStatement":return x(_);case"EmptyStatement":return x(b);case"ContinueStatement":return x(j);case"TemplateElement":return Ye(e,t);case"TemplateLiteral":return Ge(e,t);case"Identifier":return Ve(e,t);case"MemberExpression":return De(e,t);case"Literal":return oe(t.value);case"CallExpression":return Be(e,t);case"UnaryExpression":return je(e,t);case"BinaryExpression":return Le(e,t);case"LogicalExpression":return _e(e,t);case"ConditionalExpression":return ne(S$1(t,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return ke(e,t);case"ObjectExpression":return le(e,t);case"Property":return ue(e,t);default:return ne(S$1(t,"RUNTIME","UNREOGNISED"))}}catch(o){return ne(o)}}function le(r,n){try{const o=[];for(let e=0;e<n.properties.length;e++)o.push(se(r,n.properties[e]));return s(o).then((t=>f((e=>{const r={};for(let o=0;o<t.length;o++){const e=t[o];if(v(e.value))throw new Error("Illegal Argument");if(!1===F(e.key))throw new Error("Illegal Argument");e.value===b?r[e.key.toString()]=null:r[e.key.toString()]=e.value;}const n=new h$1(r);n.immutable=!1,e(n);}))))}catch(o){return ne(o)}}function ue(t,n){try{return se(t,n.value).then((r=>f((e=>{"Identifier"===n.key.type?e({key:n.key.name,value:r}):se(t,n.key).then((t=>{e({key:t,value:r});}));}))))}catch(o){return L(o)}}function fe(e,t,o){try{return se(e,t.body).then((a=>{try{return o.lastAction=a,o.lastAction===_||o.lastAction instanceof N$2?(o.testResult=!1,x(o)):null!==t.update?se(e,t.update).then((()=>x(o))):x(o)}catch(c){return L(c)}}))}catch(a){return L(a)}}function he(e,t,o){try{return null!==t.test?se(e,t.test).then((a=>{try{return !0===e.abortSignal.aborted?L(new Error("Cancelled")):(o.testResult=a,!1===o.testResult?x(o):!0!==o.testResult?L(new Error(S$1(t,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):fe(e,t,o))}catch(c){return L(c)}})):fe(e,t,o)}catch(a){return L(a)}}function pe(e,t,r,n,o,a){try{he(e,t,r).then((()=>{try{!0===r.testResult?++a>re?(a=0,setTimeout((()=>{pe(e,t,r,n,o,a);}),0)):pe(e,t,r,n,o,a):r.lastAction instanceof N$2?n(r.lastAction):n(b);}catch(c){o(c);}}),(e=>{o(e);}));}catch(c){o(c);}}function de(t,n){try{return null!==n.init?se(t,n.init).then((()=>f(((e,r)=>{pe(t,n,{testResult:!0,lastAction:b},(t=>{e(t);}),(e=>{r(e);}),0);})))):f(((e,r)=>{pe(t,n,{testResult:!0,lastAction:b},(t=>{e(t);}),(e=>{r(e);}),0);}))}catch(o){return L(o)}}function me(e,t,r,n,o,a,c,i,s,l){try{if(n<=a)return void i(b);o.value="k"===c?r[a]:a,se(e,t.body).then((u=>{try{u instanceof N$2?i(u):u===_?i(b):++l>re?(l=0,setTimeout((()=>{me(e,t,r,n,o,a+1,c,i,s,l);}),0)):me(e,t,r,n,o,a+1,c,i,s,l);}catch(f){s(f);}}),(e=>{s(e);}));}catch(u){s(u);}}function ge(e,t,r,n,o,a,c,i,s){try{if(r.length()<=o)return void c(b);n.value="k"===a?r.get(o):o,se(e,t.body).then((l=>{l instanceof N$2?c(l):l===_?c(b):++s>re?(s=0,setTimeout((()=>{ge(e,t,r,n,o+1,a,c,i,s);}),0)):ge(e,t,r,n,o+1,a,c,i,s);}),(e=>{i(e);}));}catch(l){i(l);}}function ye(e,t,r,n,o,a){try{if(void 0===a&&(a="i"),0===r.length)return void n.resolve(b);me(e,t,r,r.length,o,0,a,(e=>{n.resolve(e);}),(e=>{n.reject(e);}),0);}catch(c){n.reject(c);}}function Ee(e,t,r,n,o,a){try{if(void 0===a&&(a="i"),0===r.length)return void n.resolve(b);ge(e,t,r,o,0,a,(e=>{n.resolve(e);}),(e=>{n.reject(e);}),0);}catch(c){n.reject(c);}}function we(e,t,r,n,o){try{ye(e,t,r.keys(),n,o,"k");}catch(a){n.reject(a);}}function ve(e,t,r,n,o,a,c,i){try{e.next().then((s=>{try{if(null===s)a(b);else {const l=g.createFromGraphicLikeObject(s.geometry,s.attributes,n);l._underlyingGraphic=s,o.value=l;se(t,r.body).then((s=>{try{s===_?a(b):s instanceof N$2?a(s):++i>re?(i=0,setTimeout((()=>{ve(e,t,r,n,o,a,c,i);}),0)):ve(e,t,r,n,o,a,c,i);}catch(l){c(l);}}),(e=>{c(e);}));}}catch(l){c(l);}}),(e=>{c(e);}));}catch(s){c(s);}}function Ne(t,r){return f(((e,o)=>{se(t,r.right).then((a=>{try{let c=null;c="VariableDeclaration"===r.left.type?se(t,r.left):x(),c.then((()=>{try{let n="";if("VariableDeclaration"===r.left.type){const e=r.left.declarations[0].id;"Identifier"===e.type&&(n=e.name);}else "Identifier"===r.left.type&&(n=r.left.name);if(!n)throw new Error(S$1(r,"RUNTIME","INVALIDVARIABLE"));n=n.toLowerCase();let c=null;if(null!==t.localScope&&void 0!==t.localScope[n]&&(c=t.localScope[n]),null===c&&void 0!==t.globalScope[n]&&(c=t.globalScope[n]),null===c)return void o(new Error(S$1(r,"RUNTIME","VARIABLENOTDECLARED")));Z(a)||F(a)?ye(t,r,a,{reject:o,resolve:e},c):E(a)?Ee(t,r,a,{reject:o,resolve:e},c):a instanceof h$1||a instanceof g?we(t,r,a,{reject:o,resolve:e},c):k$1(a)?ve(a.iterator(t.abortSignal),t,r,a,c,(t=>{e(t);}),(e=>{o(e);}),0):ye(t,r,[],{reject:o,resolve:e},c);}catch(n){o(n);}}),o);}catch(c){o(c);}}),o);}))}function Ie(t,o){try{const r=o.argument;if("MemberExpression"===r.type){const a={t:null};return se(t,r.object).then((e=>{let o=null;return a.t=e,!0===r.computed?o=se(t,r.property):"Identifier"===r.property.type&&(o=x(r.property.name)),o})).then((t=>f((e=>{const r=a.t;let n;if(Z(r)){if(!w(t))throw new Error("Invalid Parameter");if(t<0&&(t=r.length+t),t<0||t>=r.length)throw new Error("Assignment outside of array bounds");n=X(r[t]),r[t]="++"===o.operator?n+1:n-1;}else if(r instanceof h$1){if(!1===F(t))throw new Error("Dictionary accessor must be a string");if(!0!==r.hasField(t))throw new Error("Invalid Parameter");n=X(r.field(t)),r.setField(t,"++"===o.operator?n+1:n-1);}else {if(!(r instanceof g))throw E(r)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===F(t))throw new Error("Feature accessor must be a string");if(!0!==r.hasField(t))throw new Error("Invalid Parameter");n=X(r.field(t)),r.setField(t,"++"===o.operator?n+1:n-1);}!1===o.prefix?e(n):e("++"===o.operator?n+1:n-1);}))))}return f(((e,r)=>{const n="Identifier"===o.argument.type?o.argument.name.toLowerCase():"";if(!n)throw new Error("Invalid identifier");let a;return null!==t.localScope&&void 0!==t.localScope[n]?(a=X(t.localScope[n].value),t.localScope[n]={value:"++"===o.operator?a+1:a-1,valueset:!0,node:o},void(!1===o.prefix?e(a):e("++"===o.operator?a+1:a-1))):void 0!==t.globalScope[n]?(a=X(t.globalScope[n].value),t.globalScope[n]={value:"++"===o.operator?a+1:a-1,valueset:!0,node:o},void(!1===o.prefix?e(a):e("++"===o.operator?a+1:a-1))):void r(new Error("Variable not recognised"))}))}catch(a){return L(a)}}function be(e,t,r,n){switch(t){case"=":return e===b?null:e;case"/=":return X(r)/X(e);case"*=":return X(r)*X(e);case"-=":return X(r)-X(e);case"+=":return F(r)||F(e)?K(r)+K(e):X(r)+X(e);case"%=":return X(r)%X(e);default:throw new Error(S$1(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function Te(t,r){return f(((e,o)=>{const a=r.left;if("MemberExpression"===a.type)se(t,r.right).then((c=>{try{se(t,a.object).then((i=>{try{let s=null;if(!0===a.computed)s=se(t,a.property);else {if("Identifier"!==a.property.type)throw new Error("Expected computed or identifier for assignemnt target");s=x(a.property.name);}s.then((t=>{try{if(Z(i)){if(!w(t))throw new Error("Invalid Parameter");if(t<0&&(t=i.length+t),t<0||t>i.length)throw new Error("Assignment outside of array bounds");if(t===i.length){if("="!==r.operator)throw new Error("Invalid Parameter");i[t]=be(c,r.operator,i[t],r);}else i[t]=be(c,r.operator,i[t],r);}else if(i instanceof h$1){if(!1===F(t))throw new Error("Dictionary accessor must be a string");if(!0===i.hasField(t))i.setField(t,be(c,r.operator,i.field(t),r));else {if("="!==r.operator)throw new Error("Invalid Parameter");i.setField(t,be(c,r.operator,null,r));}}else {if(!(i instanceof g))throw E(i)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===F(t))throw new Error("Feature accessor must be a string");if(!0===i.hasField(t))i.setField(t,be(c,r.operator,i.field(t),r));else {if("="!==r.operator)throw new Error("Invalid Parameter");i.setField(t,be(c,r.operator,null,r));}}e(b);}catch(n){o(n);}}),o);}catch(s){o(s);}}),o);}catch(i){o(i);}}),o);else {const n=a.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[n])return void se(t,r.right).then((a=>{try{t.localScope[n]={value:be(a,r.operator,t.localScope[n].value,r),valueset:!0,node:r.right},e(b);}catch(c){o(c);}}),o);void 0!==t.globalScope[n]?se(t,r.right).then((a=>{try{t.globalScope[n]={value:be(a,r.operator,t.globalScope[n].value,r),valueset:!0,node:r.right},e(b);}catch(c){o(c);}}),o):o(new Error("Cannot assign undeclared variable"));}}))}function Se(t,n){try{return "AssignmentExpression"===n.expression.type?se(t,n.expression):(n.expression.type,se(t,n.expression).then((t=>f((e=>{e(t===b?b:new T(t));})))))}catch(o){return L(o)}}function Re(t,r){return f(((e,n)=>{"AssignmentExpression"!==r.test.type&&"UpdateExpression"!==r.test.type?se(t,r.test).then((o=>{try{!0===o?se(t,r.consequent).then(e,n):!1===o?null!==r.alternate?se(t,r.alternate).then(e,n):e(b):n(new Error(S$1(r.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")));}catch(a){n(a);}}),n):n(new Error(S$1(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));}))}function Oe(e,t){try{return Ae(e,t,0)}catch(r){return ne(r)}}function Ae(t,r,o){try{return o>=r.body.length?x(b):f(((e,n)=>{se(t,r.body[o]).then((a=>{try{a instanceof N$2||a===_||a===j||o===r.body.length-1?e(a):Ae(t,r,o+1).then(e,n);}catch(c){n(c);}}),n);}))}catch(a){return ne(a)}}function Ue(t,r){return f(((e,n)=>{null===r.argument?e(new N$2(b)):se(t,r.argument).then((t=>{try{e(new N$2(t));}catch(r){n(r);}}),n);}))}function Ce(e,t$1){try{const r=t$1.id.name.toLowerCase();return e.globalScope[r]={valueset:!0,node:null,value:new t(t$1,e)},x(b)}catch(r){return ne(r)}}function Fe(t,r,n){return f(((e,o)=>{n>=r.declarations.length?e(b):se(t,r.declarations[n]).then((()=>{n===r.declarations.length-1?e(b):Fe(t,r,n+1).then((()=>{e(b);}),o);}),o);}))}function Me(t,r){try{let o=null;return o=null===r.init?x(null):se(t,r.init),null!==t.localScope?o.then((n=>f((e=>{if(n===b&&(n=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");const o=r.id.name.toLowerCase();t.localScope[o]={value:n,valueset:!0,node:r.init},e(b);})))):o.then((n=>f((e=>{if("Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");const o=r.id.name.toLowerCase();n===b&&(n=null),t.globalScope[o]={value:n,valueset:!0,node:r.init},e(b);}))))}catch(o){return ne(o)}}let xe=0;function Pe(e,t,r,n){let o;switch(t=t.toLowerCase()){case"hasz":{const t=e.hasZ;return void 0!==t&&t}case"hasm":{const t=e.hasM;return void 0!==t&&t}case"spatialreference":{let t=e.spatialReference._arcadeCacheId;if(void 0===t){let r=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(r=!1),r&&(xe++,e.spatialReference._arcadeCacheId=xe,t=xe);}const r=new h$1({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==t&&(r._arcadeCacheId="SPREF"+t.toString()),r}}switch(e.type){case"extent":switch(t){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const r=e[t];return void 0!==r?r:null}case"type":return "Extent"}break;case"polygon":switch(t){case"rings":o=e.cache._arcadeCacheId,void 0===o&&(xe++,o=xe,e.cache._arcadeCacheId=o);return new h$2(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return "Polygon"}break;case"point":switch(t){case"x":case"y":case"z":case"m":return void 0!==e[t]?e[t]:null;case"type":return "Point"}break;case"polyline":switch(t){case"paths":o=e.cache._arcadeCacheId,void 0===o&&(xe++,o=xe,e.cache._arcadeCacheId=o);return new h$2(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,o);case"type":return "Polyline"}break;case"multipoint":switch(t){case"points":o=e.cache._arcadeCacheId,void 0===o&&(xe++,o=xe,e.cache._arcadeCacheId=o);return new i(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,o,1);case"type":return "Multipoint"}}throw new Error(S$1(n,"RUNTIME","PROPERTYNOTFOUND"))}function De(t,o){try{return se(t,o.object).then((c$1=>{try{return null===c$1?L(new Error(S$1(o,"RUNTIME","NOTFOUND"))):!1===o.computed?"Identifier"===o.property.type?c$1 instanceof h$1||c$1 instanceof g?x(c$1.field(o.property.name)):c$1 instanceof c?x(Pe(c$1,o.property.name,t,o)):L(new Error(S$1(o,"RUNTIME","INVALIDTYPE"))):L(new Error(S$1(o,"RUNTIME","INVALIDTYPE"))):se(t,o.property).then((r=>f(((e,n)=>{if(c$1 instanceof h$1||c$1 instanceof g)F(r)?e(c$1.field(r)):n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));else if(c$1 instanceof c)F(r)?e(Pe(c$1,r,t,o)):n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));else if(Z(c$1))if(w(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=c$1.length+r),r>=c$1.length||r<0)throw new Error(S$1(o,"RUNTIME","OUTOFBOUNDS"));e(c$1[r]);}else n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));else if(E(c$1))if(w(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=c$1.length()+r),r>=c$1.length()||r<0)throw new Error(S$1(o,"RUNTIME","OUTOFBOUNDS"));e(c$1.get(r));}else n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));else if(F(c$1))if(w(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=c$1.length+r),r>=c$1.length||r<0)throw new Error(S$1(o,"RUNTIME","OUTOFBOUNDS"));e(c$1[r]);}else n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));else n(new Error(S$1(o,"RUNTIME","INVALIDTYPE")));}))))}catch(i){return ne(i)}}))}catch(c){return ne(c)}}function je(t,r){try{return se(t,r.argument).then((t=>f(((e,n)=>{I(t)&&"!"===r.operator?e(!t):"-"===r.operator?e(-1*X(t)):"+"===r.operator?e(1*X(t)):"~"===r.operator?e(~X(t)):n(new Error(S$1(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")));}))))}catch(n){return ne(n)}}function ke(r,n){try{const o=[];for(let e=0;e<n.elements.length;e++)o.push(se(r,n.elements[e]));return s(o).then((t=>f(((e,r)=>{for(let o=0;o<t.length;o++){if(v(t[o]))return void r(new Error(S$1(n,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));t[o]===b&&(t[o]=null);}e(t);}))))}catch(o){return ne(o)}}function Le(r,n){try{return s([se(r,n.left),se(r,n.right)]).then((t=>f(((e,r)=>{const o=t[0],a=t[1];switch(n.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":e(ye$1(X(o),X(a),n.operator));case"==":e(B(o,a));break;case"!=":e(!B(o,a));break;case"<":case">":case"<=":case">=":e(q(o,a,n.operator));break;case"+":F(o)||F(a)?e(K(o)+K(a)):e(X(o)+X(a));break;case"-":e(X(o)-X(a));break;case"*":e(X(o)*X(a));break;case"/":e(X(o)/X(a));break;case"%":e(X(o)%X(a));break;default:r(new Error(S$1(n,"RUNTIME","OPERATORNOTRECOGNISED")));}}))))}catch(o){return ne(o)}}function _e(t,r){return f(((e,n)=>{"AssignmentExpression"!==r.left.type&&"UpdateExpression"!==r.left.type?"AssignmentExpression"!==r.right.type&&"UpdateExpression"!==r.right.type?se(t,r.left).then((o=>{try{if(!I(o))throw new Error(S$1(r,"RUNTIME","ONLYBOOLEAN"));switch(r.operator){case"||":!0===o?e(o):se(t,r.right).then((t=>{try{if(!I(t))throw new Error(S$1(r,"RUNTIME","ONLYORORAND"));e(t);}catch(o){n(o);}}),n);break;case"&&":!1===o?e(o):se(t,r.right).then((t=>{try{if(!I(t))throw new Error(S$1(r,"RUNTIME","ONLYORORAND"));e(t);}catch(o){n(o);}}),n);break;default:throw new Error(S$1(r,"RUNTIME","ONLYORORAND"))}}catch(a){n(a);}}),n):n(new Error(S$1(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):n(new Error(S$1(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));}))}function Ve(t,r){return f(((e,n)=>{const o=r.name.toLowerCase();if(null===t.localScope||void 0===t.localScope[o])if(void 0===t.globalScope[o])n(new Error(S$1(r,"RUNTIME","VARIABLENOTFOUND")));else {const r=t.globalScope[o];!0===r.valueset?e(r.value):null!==r.d?r.d.then(e,n):(r.d=se(t,r.node),r.d.then((t=>{try{r.value=t,r.valueset=!0,e(t);}catch(o){n(o);}}),n));}else {const r=t.localScope[o];!0===r.valueset?e(r.value):null!==r.d?r.d.then(e,n):(r.d=se(t,r.node),r.d.then((t=>{try{r.value=t,r.valueset=!0,e(t);}catch(o){n(o);}}),n));}}))}function Be(e,t$1){try{if("Identifier"!==t$1.callee.type)return ne(S$1(t$1,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[t$1.callee.name.toLowerCase()]){const r=e.localScope[t$1.callee.name.toLowerCase()];return r.value instanceof S?r.value.fn(e,t$1):r.value instanceof t?$e(e,t$1,r.value.definition):ne(S$1(t$1,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[t$1.callee.name.toLowerCase()]){const r=e.globalScope[t$1.callee.name.toLowerCase()];return r.value instanceof S?r.value.fn(e,t$1):r.value instanceof t?$e(e,t$1,r.value.definition):ne(S$1(t$1,"RUNTIME","NOTAFUNCTION"))}return ne(S$1(t$1,"RUNTIME","NOTFOUND"))}catch(r){return ne(r)}}function Ye(e,t){return x(t.value?t.value.cooked:"")}function Ge(t,r){return f((e=>{const n=[];O(r.expressions,((e,r,o,a)=>se(t,r).then((e=>{n[o]=K(e);})))).then((()=>{let t="",o=0;for(const e of r.quasis)if(t+=e.value?e.value.cooked:"",!1===e.tail){t+=n[o]?n[o]:"",o++;}e(t);}));}))}const ze={};function qe(e$1){return null===e$1?"":Z(e$1)||E(e$1)?"Array":P(e$1)?"Date":F(e$1)?"String":I(e$1)?"Boolean":w(e$1)?"Number":e$1 instanceof e?"Attachment":e$1 instanceof s$1?"Portal":e$1 instanceof h$1?"Dictionary":e$1 instanceof g?"Feature":e$1 instanceof j$1?"Point":e$1 instanceof x$1?"Polygon":e$1 instanceof m$1?"Polyline":e$1 instanceof m$2?"Multipoint":e$1 instanceof M?"Extent":v(e$1)?"Function":k$1(e$1)?"FeatureSet":D$1(e$1)?"FeatureSetCollection":e$1===b?"":"number"==typeof e$1&&isNaN(e$1)?"Number":"Unrecognised Type"}function He(t,r,n,o){return f(((e,a)=>{se(t,r.arguments[n]).then((c=>{try{if(B(c,o))return void se(t,r.arguments[n+1]).then(e,a);{const c=r.arguments.length-n;return 1===c?void se(t,r.arguments[n]).then(e,a):(2===c&&e(null),3===c?void se(t,r.arguments[n+2]).then(e,a):void He(t,r,n+2,o).then(e,a))}}catch(i){a(i);}}),a);}))}function Ze(t,r,n,o){return f(((e,a)=>{if(!0===o)se(t,r.arguments[n+1]).then(e,a);else {3===r.arguments.length-n?se(t,r.arguments[n+2]).then(e,a):se(t,r.arguments[n+2]).then((o=>{try{if(!1===I(o))return void a(new Error("WHEN needs boolean test conditions"));Ze(t,r,n+2,o).then(e,a);}catch(c){a(c);}}));}}))}function We(r,o){try{const a=r.length,c=Math.floor(a/2);return 0===a?x([]):1===a?x([r[0]]):f(((e,n)=>{const i=[We(r.slice(0,c),o),We(r.slice(c,a),o)];s(i).then((t=>{try{Ke(t[0],t[1],o,[]).then(e,n);}catch(r){n(r);}}),n);}))}catch(a){return ne(a)}}function Ke(t,r,n,o){return f(((e,a)=>{const c=o;t.length>0||r.length>0?t.length>0&&r.length>0?n(t[0],r[0]).then((i=>{try{isNaN(i)&&(i=1),i<=0?(c.push(t[0]),t=t.slice(1)):(c.push(r[0]),r=r.slice(1)),Ke(t,r,n,o).then(e,a);}catch(s){a(s);}}),a):t.length>0?(c.push(t[0]),Ke(t=t.slice(1),r,n,o).then(e,a)):r.length>0&&(c.push(r[0]),r=r.slice(1),Ke(t,r,n,o).then(e,a)):e(o);}))}function Xe(e,t){const r=e.length,n=Math.floor(r/2);return t||(t=function(e,t){return e<t?-1:e===t?0:1}),0===r?[]:1===r?[e[0]]:Je(Xe(e.slice(0,n),t),Xe(e.slice(n,r),t),t)}function Je(e,t,r){const n=[];for(;e.length>0||t.length>0;)if(e.length>0&&t.length>0){let o=r(e[0],t[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(t[0]),t=t.slice(1));}else e.length>0?(n.push(e[0]),e=e.slice(1)):t.length>0&&(n.push(t[0]),t=t.slice(1));return n}function Qe(t,n,o){try{const r=t.body;if(o.length!==t.params.length)return ne(new Error("Invalid Parameter calls to function."));for(let e=0;e<o.length;e++){const r=t.params[e];"Identifier"===r.type&&(n.localScope[r.name.toLowerCase()]={d:null,value:o[e],valueset:!0,node:null});}return se(n,r).then((t=>f(((e,r)=>{t instanceof N$2?e(t.value):t!==_?t!==j?e(t instanceof T?t.value:t):r(new Error("Cannot Continue from a Function")):r(new Error("Cannot Break from a Function"));}))))}catch(a){return L(a)}}function $e(e,t,r){return ie(e,t,(function(t,n,o){const a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return Qe(r,a,o)}))}function et(e){return function(){const t={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,interceptor:e.context.interceptor,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(t.depthCounter>64)throw new Error("Exceeded maximum function depth");return Qe(e.definition,t,arguments)}}h(ze,ce),d(ze,ce),N(ze,ce),N$1(ze,ce),D(ze,ce),o(ze,ce),on({functions:ze,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:ce,standardFunctionAsync:ie}),ze.typeof=function(e,t){return ce(e,t,(function(e,t,r){J(r,1,1);const n=qe(r[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n}))},ze.iif=function(r,n){return f(((e,o)=>{J(null===n.arguments?[]:n.arguments,3,3),se(r,n.arguments[0]).then((a=>{try{if(!1===I(a))return void o(new Error("IF Function must have a boolean test condition"));s([se(r,n.arguments[1]),se(r,n.arguments[2])]).then((t=>{e(a?t[0]:t[1]);}),o);}catch(c){o(c);}}),o);}))},ze.decode=function(t,r){return f(((e,n)=>{r.arguments.length<2?n(new Error("Missing Parameters")):2!==r.arguments.length?(r.arguments.length-1)%2!=0?se(t,r.arguments[0]).then((o=>{try{He(t,r,1,o).then(e,n);}catch(a){n(a);}}),n):n(new Error("Must have a default value result.")):se(t,r.arguments[1]).then(e,n);}))},ze.when=function(t,r){try{return r.arguments.length<3?ne("Missing Parameters"):r.arguments.length%2==0?ne("Must have a default value result."):se(t,r.arguments[0]).then((n=>f(((e,o)=>{if(!1===I(n))return void o(new Error("WHEN needs boolean test conditions"));Ze(t,r,0,n).then(e,o);}))))}catch(n){return ne(n)}},ze.sort=function(e,t){return ie(e,t,(function(e,t,r){J(r,1,2);let o=r[0];if(E(o)&&(o=o.toArray()),!1===Z(o))return ne(Error("Illegal Argument"));if(r.length>1){if(!1===v(r[1]))return ne(Error("Illegal Argument"));return We(o,et(r[1]))}{let e=o;if(0===e.length)return x([]);const t={};for(let n=0;n<e.length;n++){const r=qe(e[n]);""!==r&&(t[r]=!0);}if(!0===t.Array||!0===t.Dictionary||!0===t.Feature||!0===t.Point||!0===t.Polygon||!0===t.Polyline||!0===t.Multipoint||!0===t.Extent||!0===t.Function)return x(e.slice(0));let r=0,a="";for(const n in t)r++,a=n;return r>1||"String"===a?e=Xe(e,(function(e,t){if(null==e||e===b)return null==t||t===b?0:1;if(null==t||t===b)return -1;const r=K(e),n=K(t);return r<n?-1:r===n?0:1})):"Number"===a?e=Xe(e,(function(e,t){return e-t})):"Boolean"===a?e=Xe(e,(function(e,t){return e===t?0:t?-1:1})):"Date"===a&&(e=Xe(e,(function(e,t){return t-e}))),x(e)}}))};const tt={failDefferred:ne,resolveDeffered:oe,fixSpatialReference:te$1,parseArguments:ae,standardFunction:ce,standardFunctionAsync:ie,evaluateIdentifier:Ve,arcadeCustomFunction:et};for(const pt in ze)ze[pt]={value:new S(ze[pt]),valueset:!0,node:null};const rt=function(){};function nt(e,t){const r=new rt;null==e&&(e={}),null==t&&(t={});const n=new h$1({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});n.immutable=!1,r.textformatting={value:n,valueset:!0,node:null};for(const o in t)r[o]={value:new S(t[o]),native:!0,valueset:!0,node:null};for(const o in e)e[o]&&"esri.Graphic"===e[o].declaredClass?r[o]={value:g.createFromGraphic(e[o]),valueset:!0,node:null}:r[o]={value:e[o],valueset:!0,node:null};return r}function ot(e){console.log(e);}rt.prototype=ze,rt.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},rt.prototype.pi={value:Math.PI,valueset:!0,node:null};const at=tt;function ct(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:ce,standardFunctionAsync:ie,failDefferred:ne,evaluateIdentifier:Ve,arcadeCustomFunctionHandler:et};for(let r=0;r<e.length;r++)e[r].registerFunctions(t);for(const r in t.functions)ze[r]={value:new S(t.functions[r]),valueset:!0,node:null},rt.prototype[r]=ze[r];for(let r=0;r<t.signatures.length;r++)a(t.signatures[r],"async");}function it(t$1,r){let n=r.spatialReference;null==n&&(n=new k({wkid:102100}));const a=nt(r.vars,r.customfunctions);return se({spatialReference:n,services:r.services,abortSignal:void 0===r.abortSignal||null===r.abortSignal?{aborted:!1}:r.abortSignal,globalScope:a,console:r.console?r.console:ot,lrucache:r.lrucache,interceptor:r.interceptor,localScope:null,depthCounter:1},t$1.body[0].body).then((t$1=>f(((e,r)=>{t$1 instanceof N$2&&(t$1=t$1.value),t$1 instanceof T&&(t$1=t$1.value),t$1===b&&(t$1=null),t$1!==_?t$1!==j?t$1 instanceof S||t$1 instanceof t?r(new Error("Cannot return FUNCTION")):e(t$1):r(new Error("Cannot return CONTINUE")):r(new Error("Cannot return BREAK"));}))))}function st(e,t){return u(e)}function lt(e,t){return N$3(e,t,"full")}function ut(e,t){return m(e,t)}function ft(e,t){return p(e,t)}function ht(e){return A(e)}

export { it as executeScript, ct as extend, st as extractFieldLiterals, ht as findFunctionCalls, at as functionHelper, ft as referencesFunction, ut as referencesMember, lt as validateScript };
