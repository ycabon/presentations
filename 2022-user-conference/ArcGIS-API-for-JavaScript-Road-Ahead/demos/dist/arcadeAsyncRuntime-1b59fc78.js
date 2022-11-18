import { M, B, N, C, f, V as V$1, _ as _$1, t, e, a as e$1, o, s, D, b as N$1, k as k$1, j, A, F, m, u, w, J as J$1, Y as Y$1, E, c as J$2, P, Z as Z$1, r as re$1, W as W$1, K, Q as Q$1, X as X$1, d as Ne$1, g as se$1, h as g, i as r, l as s$1, n, p as s$2 } from './arcadeUtils-cbca72a3.js';
import { registerFunctions as dn } from './geomasync-4a943c05.js';
import { O as k, pN as p } from './_virtual_index-1ea2035a.js';
import './number-2aae57c3.js';
import './hash-da85b7aa.js';
import './geometryEngineAsync-8eb3bd06.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function q(e){return e&&"function"==typeof e.then}const W=100;async function V(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await J(e,t.arguments[r]));return n}async function _(e,t,n){if(!0===t.preparsed)return n(e,null,t.arguments);return n(e,t,await V(e,t))}class Y extends r{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t;}createFunction(e$1){return (...t$1)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e$1.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new t(e$1,e.MaximumCallDepth,null);return Pe(this.definition,n,t$1,null)}}call(e$1,t$1){return H(e$1,t$1,((n,a,i)=>{const l={spatialReference:e$1.spatialReference,services:e$1.services,console:e$1.console,libraryResolver:e$1.libraryResolver,exports:e$1.exports,lrucache:e$1.lrucache,interceptor:e$1.interceptor,localScope:{},abortSignal:e$1.abortSignal,globalScope:e$1.globalScope,depthCounter:{depth:e$1.depthCounter.depth+1}};if(l.depthCounter.depth>64)throw new t(e$1,e.MaximumCallDepth,t$1);return Pe(this.definition,l,i,t$1)}))}marshalledCall(e,t,n$1,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n$1.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!F(t)||t instanceof s$1?t:n(t,e,r))),n(await Pe(this.definition,l,i,t),n$1,r)}))}}class z extends s$2{constructor(e){super(e);}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await J(this.executingContext,t.node),t.valueset=!0),F(t.value)&&!(t.value instanceof s$1)){const e=new s$1;e.fn=t.value,e.parameterEvaluator=H,e.context=this.executingContext,t.value=e;}return t.value}setGlobal(e$1,t$1){if(F(t$1))throw new t(null,e.AssignModuleFunction,null);this.executingContext.globalScope[e$1.toLowerCase()]={value:t$1,valueset:!0,node:null};}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let n=e.spatialReference;null==n&&(n=new k({wkid:102100})),this.moduleScope=Ge({},e.customfunctions),this.executingContext={spatialReference:n,services:e.services,libraryResolver:new s(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:Te,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await J(this.executingContext,this.source.syntax);}}async function H(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return q(r),r}const r=n(e,t,await V(e,t));return q(r),r}async function J(e$1,t$1,n){if(t$1.breakpoint&&!0!==n){const n=t$1.breakpoint();return await n,J(e$1,t$1,!0)}try{switch(t$1?.type){case"VariableDeclarator":return await xe(e$1,t$1);case"ImportDeclaration":return await ve(e$1,t$1);case"ExportNamedDeclaration":return await be(e$1,t$1);case"VariableDeclaration":return await Se(e$1,t$1,0);case"BlockStatement":case"Program":return await he(e$1,t$1);case"FunctionDeclaration":return await ye(e$1,t$1);case"ReturnStatement":return await ge(e$1,t$1);case"IfStatement":return await de(e$1,t$1);case"ExpressionStatement":return await we(e$1,t$1);case"UpdateExpression":return await ue(e$1,t$1);case"AssignmentExpression":return await pe(e$1,t$1);case"ForStatement":return await ne(e$1,t$1);case"WhileStatement":return await Z(e$1,t$1);case"ForInStatement":return await ce(e$1,t$1);case"BreakStatement":return j;case"EmptyStatement":return k$1;case"ContinueStatement":return A;case"TemplateElement":return await Le(e$1,t$1);case"TemplateLiteral":return await Ne(e$1,t$1);case"Identifier":return await Me(e$1,t$1);case"MemberExpression":return await Ie(e$1,t$1);case"Literal":return t$1.value;case"CallExpression":return await je(e$1,t$1);case"UnaryExpression":return await Fe(e$1,t$1);case"BinaryExpression":return await Re(e$1,t$1);case"LogicalExpression":return await Ae(e$1,t$1);case"ArrayExpression":return await Ce(e$1,t$1);case"ObjectExpression":return await Q(e$1,t$1);case"Property":return await X(e$1,t$1);default:throw new t(e$1,e.Unrecognised,t$1)}}catch(i){throw u(e$1,t$1,i)}}async function Q(e$1,t$1){const a=[];for(let n=0;n<t$1.properties.length;n++)a[n]=await J(e$1,t$1.properties[n]);const i={},l=new Map;for(let n=0;n<a.length;n++){const s=a[n];if(F(s.value))throw new t(e$1,e.NoFunctionInDictionary,t$1);if(!1===w(s.key))throw new t(e$1,e.KeyMustBeString,t$1);let c=s.key.toString();const u=c.toLowerCase();l.has(u)?c=l.get(u):l.set(u,c),s.value===k$1?i[c]=null:i[c]=s.value;}const s=new J$1(i);return s.immutable=!1,s}async function X(e,t){const n=await J(e,t.value);if("Identifier"===t.key.type)return {key:t.key.name,value:n};return {key:await J(e,t.key),value:n}}async function Z(e$1,t$1){const n={testResult:!0,lastAction:k$1};if(n.testResult=await J(e$1,t$1.test),!1===n.testResult)return k$1;if(!0!==n.testResult)throw new t(e$1,e.BooleanConditionRequired,t$1);for(;!0===n.testResult&&(n.lastAction=await J(e$1,t$1.body),n.lastAction!==j)&&!(n.lastAction instanceof D);)if(n.testResult=await J(e$1,t$1.test),!0!==n.testResult&&!1!==n.testResult)throw new t(e$1,e.BooleanConditionRequired,t$1);return n.lastAction instanceof D?n.lastAction:k$1}async function $(e,t,n){const r=await J(e,t.body);return n.lastAction=r,n.lastAction===j||n.lastAction instanceof D?(n.testResult=!1,n):null!==t.update?(await J(e,t.update),n):n}async function ee(e$1,t$1,n){if(null!==t$1.test){const a=await J(e$1,t$1.test);if(!0===e$1.abortSignal?.aborted)throw new t(e$1,e.Cancelled,t$1);if(n.testResult=a,!1===n.testResult)return n;if(!0!==n.testResult)throw new t(e$1,e.BooleanConditionRequired,t$1);return $(e$1,t$1,n)}return $(e$1,t$1,n)}function te(e,t,n,r,o,a){try{ee(e,t,n).then((()=>{try{!0===n.testResult?++a>W?(a=0,setTimeout((()=>{te(e,t,n,r,o,a);}),0)):te(e,t,n,r,o,a):n.lastAction instanceof D?r(n.lastAction):r(k$1);}catch(i){o(i);}}),(e=>{o(e);}));}catch(i){o(i);}}function ne(e,t){try{return null!==t.init?J(e,t.init).then((()=>new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:k$1},(e=>{n(e);}),(e=>{r(e);}),0);})))):new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:k$1},(e=>{n(e);}),(e=>{r(e);}),0);}))}catch(n){return Promise.reject(n)}}function re(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(k$1);o.value="k"===i?n[a]:a,J(e,t.body).then((u=>{try{u instanceof D?l(u):u===j?l(k$1):++c>W?(c=0,setTimeout((()=>{re(e,t,n,r,o,a+1,i,l,s,c);}),0)):re(e,t,n,r,o,a+1,i,l,s,c);}catch(f){s(f);}}),(e=>{s(e);}));}catch(u){s(u);}}function oe(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(k$1);r.value="k"===a?n.get(o):o,J(e,t.body).then((c=>{c instanceof D?i(c):c===j?i(k$1):++s>W?(s=0,setTimeout((()=>{oe(e,t,n,r,o+1,a,i,l,s);}),0)):oe(e,t,n,r,o+1,a,i,l,s);}),(e=>{l(e);}));}catch(c){l(c);}}function ae(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(k$1);re(e,t,n,n.length,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function ie(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(k$1);oe(e,t,n,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function le(e,t,n,r,o){try{ae(e,t,n.keys(),r,o,"k");}catch(a){r.reject(a);}}function se(e,t,n,r,o,a,l,s){try{e.next().then((c=>{try{if(null===c)a(k$1);else {const u=g.createFromGraphicLikeObject(c.geometry,c.attributes,r);u._underlyingGraphic=c,o.value=u;J(t,n.body).then((i=>{try{i===j?a(k$1):i instanceof D?a(i):++s>W?(s=0,setTimeout((()=>{se(e,t,n,r,o,a,l,s);}),0)):se(e,t,n,r,o,a,l,s);}catch(c){l(c);}}),(e=>{l(e);}));}}catch(u){l(u);}}),(e=>{l(e);}));}catch(c){l(c);}}async function ce(e$1,t$1){return new Promise(((a,i)=>{J(e$1,t$1.right).then((l=>{try{let s=null;s="VariableDeclaration"===t$1.left.type?J(e$1,t$1.left):Promise.resolve(),s.then((()=>{try{let s="";if("VariableDeclaration"===t$1.left.type){const e=t$1.left.declarations[0].id;"Identifier"===e.type&&(s=e.name);}else "Identifier"===t$1.left.type&&(s=t$1.left.name);if(!s)throw new t(e$1,e.InvalidIdentifier,t$1);s=s.toLowerCase();let c=null;if(null!=e$1.localScope&&void 0!==e$1.localScope[s]&&(c=e$1.localScope[s]),null===c&&void 0!==e$1.globalScope[s]&&(c=e$1.globalScope[s]),null===c)return void i(new t(e$1,e.InvalidIdentifier,t$1));Y$1(l)||w(l)?ae(e$1,t$1,l,{reject:i,resolve:a},c):E(l)?ie(e$1,t$1,l,{reject:i,resolve:a},c):l instanceof J$1||J$2(l)?le(e$1,t$1,l,{reject:i,resolve:a},c):P(l)?se(l.iterator(e$1.abortSignal),e$1,t$1,l,c,(e=>{a(e);}),(e=>{i(e);}),0):ae(e$1,t$1,[],{reject:i,resolve:a},c);}catch(s){i(s);}}),i);}catch(s){i(s);}}),i);}))}async function ue(e$1,t$1){const a=t$1.argument;if("MemberExpression"===a.type){const i={t:null},l=await J(e$1,a.object);let s=null;i.t=l,!0===a.computed?s=await J(e$1,a.property):"Identifier"===a.property.type&&(s=a.property.name);const c=i.t;let u;if(Y$1(c)){if(!Z$1(s))throw new t(e$1,e.ArrayAccessorMustBeNumber,t$1);if(s<0&&(s=c.length+s),s<0||s>=c.length)throw new t(e$1,e.OutOfBounds,t$1);u=re$1(c[s]),c[s]="++"===t$1.operator?u+1:u-1;}else if(c instanceof J$1){if(!1===w(s))throw new t(e$1,e.KeyAccessorMustBeString,t$1);if(!0!==c.hasField(s))throw new t(e$1,e.FieldNotFound,t$1,{key:s});u=re$1(c.field(s)),c.setField(s,"++"===t$1.operator?u+1:u-1);}else if(c instanceof z){if(!1===w(s))throw new t(e$1,e.ModuleAccessorMustBeString,t$1);if(!0!==c.hasGlobal(s))throw new t(e$1,e.ModuleExportNotFound,t$1);u=re$1(await c.global(s)),c.setGlobal(s,"++"===t$1.operator?u+1:u-1);}else {if(!J$2(c))throw E(c)?new t(e$1,e.Immutable,t$1):new t(e$1,e.InvalidParameter,t$1);if(!1===w(s))throw new t(e$1,e.KeyAccessorMustBeString,t$1);if(!0!==c.hasField(s))throw new t(e$1,e.FieldNotFound,t$1,{key:s});u=re$1(c.field(s)),c.setField(s,"++"===t$1.operator?u+1:u-1);}return !1===t$1.prefix?u:"++"===t$1.operator?u+1:u-1}const i="Identifier"===t$1.argument.type?t$1.argument.name.toLowerCase():"";if(!i)throw new t(e$1,e.InvalidIdentifier,t$1);let l;if(null!=e$1.localScope&&void 0!==e$1.localScope[i])return l=re$1(e$1.localScope[i].value),e$1.localScope[i]={value:"++"===t$1.operator?l+1:l-1,valueset:!0,node:t$1},!1===t$1.prefix?l:"++"===t$1.operator?l+1:l-1;if(void 0!==e$1.globalScope[i])return l=re$1(e$1.globalScope[i].value),e$1.globalScope[i]={value:"++"===t$1.operator?l+1:l-1,valueset:!0,node:t$1},!1===t$1.prefix?l:"++"===t$1.operator?l+1:l-1;throw new t(e$1,e.InvalidIdentifier,t$1)}function fe(e$1,t$1,n,a,i){switch(t$1){case"=":return e$1===k$1?null:e$1;case"/=":return re$1(n)/re$1(e$1);case"*=":return re$1(n)*re$1(e$1);case"-=":return re$1(n)-re$1(e$1);case"+=":return w(n)||w(e$1)?K(n)+K(e$1):re$1(n)+re$1(e$1);case"%=":return re$1(n)%re$1(e$1);default:throw new t(i,e.UnsupportedOperator,a)}}async function pe(e$1,t$1){const a=t$1.left;if("MemberExpression"===a.type){const i=await J(e$1,t$1.right),l=await J(e$1,a.object);let s=null;if(!0===a.computed)s=await J(e$1,a.property);else {if("Identifier"!==a.property.type)throw new t(e$1,e.InvalidIdentifier,t$1);s=a.property.name;}if(Y$1(l)){if(!Z$1(s))throw new t(e$1,e.ArrayAccessorMustBeNumber,t$1);if(s<0&&(s=l.length+s),s<0||s>l.length)throw new t(e$1,e.OutOfBounds,t$1);if(s===l.length){if("="!==t$1.operator)throw new t(e$1,e.OutOfBounds,t$1);l[s]=fe(i,t$1.operator,l[s],t$1,e$1);}else l[s]=fe(i,t$1.operator,l[s],t$1,e$1);}else if(l instanceof J$1){if(!1===w(s))throw new t(e$1,e.KeyAccessorMustBeString,t$1);if(!0===l.hasField(s))l.setField(s,fe(i,t$1.operator,l.field(s),t$1,e$1));else {if("="!==t$1.operator)throw new t(e$1,e.FieldNotFound,t$1,{key:s});l.setField(s,fe(i,t$1.operator,null,t$1,e$1));}}else if(l instanceof z){if(!1===w(s))throw new t(e$1,e.KeyAccessorMustBeString,t$1);if(!0!==l.hasGlobal(s))throw new t(e$1,e.ModuleExportNotFound,t$1);l.setGlobal(s,fe(i,t$1.operator,await l.global(s),t$1,e$1));}else {if(!J$2(l))throw E(l)?new t(e$1,e.Immutable,t$1):new t(e$1,e.InvalidParameter,t$1);if(!1===w(s))throw new t(e$1,e.KeyAccessorMustBeString,t$1);if(!0===l.hasField(s))l.setField(s,fe(i,t$1.operator,l.field(s),t$1,e$1));else {if("="!==t$1.operator)throw new t(e$1,e.FieldNotFound,t$1,{key:s});l.setField(s,fe(i,t$1.operator,null,t$1,e$1));}}return k$1}const i=a.name.toLowerCase();if(null!=e$1.localScope&&void 0!==e$1.localScope[i]){const n=await J(e$1,t$1.right);return e$1.localScope[i]={value:fe(n,t$1.operator,e$1.localScope[i].value,t$1,e$1),valueset:!0,node:t$1.right},k$1}if(void 0!==e$1.globalScope[i]){const n=await J(e$1,t$1.right);return e$1.globalScope[i]={value:fe(n,t$1.operator,e$1.globalScope[i].value,t$1,e$1),valueset:!0,node:t$1.right},k$1}throw new t(e$1,e.InvalidIdentifier,t$1)}async function we(e,t){if("AssignmentExpression"===t.expression.type)return J(e,t.expression);if("CallExpression"===t.expression.type){const n=await J(e,t.expression);return n===k$1?k$1:new N$1(n)}const n=await J(e,t.expression);return n===k$1?k$1:new N$1(n)}async function de(e$1,t$1){const n=await J(e$1,t$1.test);if(!0===n)return J(e$1,t$1.consequent);if(!1===n)return null!==t$1.alternate?J(e$1,t$1.alternate):k$1;throw new t(e$1,e.BooleanConditionRequired,t$1)}async function he(e,t){return me(e,t,0)}async function me(e,t,n){if(n>=t.body.length)return k$1;const r=await J(e,t.body[n]);return r instanceof D||r===j||r===A||n===t.body.length-1?r:me(e,t,n+1)}async function ge(e,t){if(null===t.argument)return new D(k$1);const n=await J(e,t.argument);return new D(n)}async function ye(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new Y(t,e)},k$1}async function ve(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new z(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},k$1}async function be(e,t){if(await J(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return k$1}async function Se(e,t,n){return n>=t.declarations.length?k$1:(await J(e,t.declarations[n]),n===t.declarations.length-1||await Se(e,t,n+1),k$1)}async function xe(e$1,t$1){let n=null;if(n=null===t$1.init?null:await J(e$1,t$1.init),null!==e$1.localScope){if(n===k$1&&(n=null),"Identifier"!==t$1.id.type)throw new t(e$1,e.InvalidIdentifier,t$1);const a=t$1.id.name.toLowerCase();return null!=e$1.localScope&&(e$1.localScope[a]={value:n,valueset:!0,node:t$1.init}),k$1}if("Identifier"!==t$1.id.type)throw new t(e$1,e.InvalidIdentifier,t$1);const a=t$1.id.name.toLowerCase();return n===k$1&&(n=null),e$1.globalScope[a]={value:n,valueset:!0,node:t$1.init},k$1}async function Ie(e$1,t$1){const a=await J(e$1,t$1.object);if(null===a)throw new t(e$1,e.MemberOfNull,t$1);if(!1===t$1.computed){if("Identifier"===t$1.property.type){if(a instanceof J$1||J$2(a))return a.field(t$1.property.name);if(a instanceof p)return W$1(a,t$1.property.name,e$1,t$1);if(a instanceof z){if(!a.hasGlobal(t$1.property.name))throw new t(e$1,e.InvalidIdentifier,t$1);return a.global(t$1.property.name)}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}let i=await J(e$1,t$1.property);if(a instanceof J$1||J$2(a)){if(w(i))return a.field(i);throw new t(e$1,e.InvalidMemberAccessKey,t$1)}if(a instanceof z){if(w(i))return a.global(i);throw new t(e$1,e.InvalidMemberAccessKey,t$1)}if(a instanceof p){if(w(i))return W$1(a,i,e$1,t$1);throw new t(e$1,e.InvalidMemberAccessKey,t$1)}if(Y$1(a)){if(Z$1(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a.length+i),i>=a.length||i<0)throw new t(e$1,e.OutOfBounds,t$1);return a[i]}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}if(E(a)){if(Z$1(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a.length()+i),i>=a.length()||i<0)throw new t(e$1,e.OutOfBounds,t$1);return a.get(i)}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}if(w(a)){if(Z$1(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a.length+i),i>=a.length||i<0)throw new t(e$1,e.OutOfBounds,t$1);return a[i]}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}throw new t(e$1,e.InvalidMemberAccessKey,t$1)}async function Fe(e$1,t$1){const n=await J(e$1,t$1.argument);if(_$1(n)){if("!"===t$1.operator)return !n;if("-"===t$1.operator)return -1*re$1(n);if("+"===t$1.operator)return 1*re$1(n);if("~"===t$1.operator)return ~re$1(n);throw new t(e$1,e.UnsupportedUnaryOperator,t$1)}if("-"===t$1.operator)return -1*re$1(n);if("+"===t$1.operator)return 1*re$1(n);if("~"===t$1.operator)return ~re$1(n);throw new t(e$1,e.UnsupportedUnaryOperator,t$1)}async function Ce(e$1,t$1){const n=[];for(let r=0;r<t$1.elements.length;r++)n.push(await J(e$1,t$1.elements[r]));for(let a=0;a<n.length;a++){if(F(n[a]))throw new t(e$1,e.NoFunctionInArray,t$1);n[a]===k$1&&(n[a]=null);}return n}async function Re(e$1,t$1){const n=[];n[0]=await J(e$1,t$1.left),n[1]=await J(e$1,t$1.right);const a=n[0],i=n[1];switch(t$1.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ne$1(re$1(a),re$1(i),t$1.operator);case"==":return X$1(a,i);case"!=":return !X$1(a,i);case"<":case">":case"<=":case">=":return Q$1(a,i,t$1.operator);case"+":return w(a)||w(i)?K(a)+K(i):re$1(a)+re$1(i);case"-":return re$1(a)-re$1(i);case"*":return re$1(a)*re$1(i);case"/":return re$1(a)/re$1(i);case"%":return re$1(a)%re$1(i);default:throw new t(e$1,e.UnsupportedOperator,t$1)}}async function Ae(e$1,t$1){const n=await J(e$1,t$1.left);let a=null;if(!_$1(n))throw new t(e$1,e.LogicalExpressionOnlyBoolean,t$1);switch(t$1.operator){case"||":if(!0===n)return n;if(a=await J(e$1,t$1.right),_$1(a))return a;throw new t(e$1,e.LogicExpressionOrAnd,t$1);case"&&":if(!1===n)return n;if(a=await J(e$1,t$1.right),_$1(a))return a;throw new t(e$1,e.LogicExpressionOrAnd,t$1);default:throw new t(e$1,e.LogicExpressionOrAnd,t$1)}}async function Me(e$1,t$1){const n=t$1.name.toLowerCase();if(null!=e$1.localScope&&void 0!==e$1.localScope[n]){const t=e$1.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=J(e$1,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e$1.globalScope[n]){const t=e$1.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=J(e$1,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new t(e$1,e.InvalidIdentifier,t$1)}async function je(e$1,t$1){if("MemberExpression"===t$1.callee.type){const n=await J(e$1,t$1.callee.object);if(!(n instanceof z))throw new t(e$1,e.FuncionNotFound,t$1);const a=!1===t$1.callee.computed?t$1.callee.property.name:await J(e$1,t$1.callee.property);if(!n.hasGlobal(a))throw new t(e$1,e.FuncionNotFound,t$1);const i=await n.global(a);if(!F(i))throw new t(e$1,e.CallNonFunction,t$1);return i.call(e$1,t$1)}if("Identifier"!==t$1.callee.type)throw new t(e$1,e.FuncionNotFound,t$1);if(null!=e$1.localScope&&void 0!==e$1.localScope[t$1.callee.name.toLowerCase()]){const n=e$1.localScope[t$1.callee.name.toLowerCase()];if(F(n.value))return n.value.call(e$1,t$1);throw new t(e$1,e.CallNonFunction,t$1)}if(void 0!==e$1.globalScope[t$1.callee.name.toLowerCase()]){const n=e$1.globalScope[t$1.callee.name.toLowerCase()];if(F(n.value))return n.value.call(e$1,t$1);throw new t(e$1,e.CallNonFunction,t$1)}throw new t(e$1,e.FuncionNotFound,t$1)}async function Le(e,t){return t.value?t.value.cooked:""}function ke(e$1,t$1,n){if(F(e$1))throw new t(t$1,e.NoFunctionInTemplateLiteral,n);return e$1}async function Ne(e,t){const n=[];for(let a=0;a<t.expressions.length;a++){const r=await J(e,t.expressions[a]);n[a]=K(r);}let r="",o=0;for(const a of t.quasis)if(r+=a.value?a.value.cooked:"",!1===a.tail){r+=n[o]?ke(n[o],e,t):"",o++;}return r}const Oe={};async function Ee(e,t,n,r){const o=await J(e,t.arguments[n]);if(X$1(o,r))return J(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?J(e,t.arguments[n]):2===a?null:3===a?J(e,t.arguments[n+2]):Ee(e,t,n+2,r)}async function Be(e$1,t$1,n,a){if(!0===a)return J(e$1,t$1.arguments[n+1]);if(3===t$1.arguments.length-n)return J(e$1,t$1.arguments[n+2]);const i=await J(e$1,t$1.arguments[n+2]);if(!1===_$1(i))throw new t(e$1,e.ModuleExportNotFound,t$1.arguments[n+2]);return Be(e$1,t$1,n+2,i)}async function Pe(e$1,t$1,n,a){const i=e$1.body;if(n.length!==e$1.params.length)throw new t(t$1,e.WrongNumberOfParameters,null);for(let r=0;r<n.length;r++){const o=e$1.params[r];"Identifier"===o.type&&null!=t$1.localScope&&(t$1.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null});}const l=await J(t$1,i);if(l instanceof D)return l.value;if(l===j)throw new t(t$1,e.UnexpectedToken,a);if(l===A)throw new t(t$1,e.UnexpectedToken,a);return l instanceof N$1?l.value:l}M(Oe,_),B(Oe,_),N(Oe,_),C(Oe,_),f(Oe,_),dn({functions:Oe,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:_,standardFunctionAsync:H}),Oe.iif=async function(e$1,t$1){V$1(null===t$1.arguments?[]:t$1.arguments,3,3,e$1,t$1);const n=await J(e$1,t$1.arguments[0]);if(!1===_$1(n))throw new t(e$1,e.BooleanConditionRequired,t$1);return J(e$1,n?t$1.arguments[1]:t$1.arguments[2])},Oe.decode=async function(e$1,t$1){if(t$1.arguments.length<2)throw new t(e$1,e.WrongNumberOfParameters,t$1);if(2===t$1.arguments.length)return J(e$1,t$1.arguments[1]);if((t$1.arguments.length-1)%2==0)throw new t(e$1,e.WrongNumberOfParameters,t$1);return Ee(e$1,t$1,1,await J(e$1,t$1.arguments[0]))},Oe.when=async function(e$1,t$1){if(t$1.arguments.length<3)throw new t(e$1,e.WrongNumberOfParameters,t$1);if(t$1.arguments.length%2==0)throw new t(e$1,e.WrongNumberOfParameters,t$1);const n=await J(e$1,t$1.arguments[0]);if(!1===_$1(n))throw new t(e$1,e.BooleanConditionRequired,t$1.arguments[0]);return Be(e$1,t$1,0,n)};const Ke={fixSpatialReference:se$1,parseArguments:V,standardFunction:_,standardFunctionAsync:H,evaluateIdentifier:Me};for(const Ve in Oe)Oe[Ve]={value:new e$1(Oe[Ve]),valueset:!0,node:null};const De=function(){};function Ge(e,t){const r=new De;null==e&&(e={}),null==t&&(t={});const o=new J$1({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const n in t)r[n]={value:new e$1(t[n]),native:!0,valueset:!0,node:null};for(const n in e)e[n]&&"esri.Graphic"===e[n].declaredClass?r[n]={value:g.createFromGraphic(e[n]),valueset:!0,node:null}:r[n]={value:e[n],valueset:!0,node:null};return r}function Te(e){console.log(e);}De.prototype=Oe,De.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},De.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ue=Ke;function qe(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:_,standardFunctionAsync:H,evaluateIdentifier:Me};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)Oe[n]={value:new e$1(t.functions[n]),valueset:!0,node:null},De.prototype[n]=Oe[n];for(let n=0;n<t.signatures.length;n++)o(t.signatures[n],"async");}async function We(e$1,n){let a=n.spatialReference;null==a&&(a=new k({wkid:102100}));let i=null;e$1.usesModules&&(i=new s(new Map,e$1.loadedModules));const l=Ge(n.vars,n.customfunctions),s$1={spatialReference:a,services:n.services,exports:{},libraryResolver:i,abortSignal:void 0===n.abortSignal||null===n.abortSignal?{aborted:!1}:n.abortSignal,globalScope:l,console:n.console?n.console:Te,lrucache:n.lrucache,interceptor:n.interceptor,localScope:null,depthCounter:{depth:1}};let c=await J(s$1,e$1);if(c instanceof D&&(c=c.value),c instanceof N$1&&(c=c.value),c===k$1&&(c=null),c===j)throw new t(s$1,e.IllegalResult,null);if(c===A)throw new t(s$1,e.IllegalResult,null);if(F(c))throw new t(s$1,e.IllegalResult,null);return c}qe([m]);

export { We as executeScript, qe as extend, Ue as functionHelper };
