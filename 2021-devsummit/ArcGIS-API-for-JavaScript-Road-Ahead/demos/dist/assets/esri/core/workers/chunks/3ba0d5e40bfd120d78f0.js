self.webpackChunkRemoteClient([152],{390:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return x})),t.d(n,"e",(function(){return v})),t.d(n,"f",(function(){return p}));var r=t(40);const a="__begin__",s="__end__",u=new RegExp(a,"ig"),i=new RegExp(s,"ig"),l=new RegExp("^"+a,"i"),o=new RegExp(s+"$","i"),c='"';function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function f(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function d(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return b(n.expression);case"arcade":return n.expression}return null}function x(e){const n=f(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(g);return n&&n[1].trim()||null}(n.expression);case"arcade":return v(n.expression)}return null}function b(e){let n;return e?(n=Object(r.c)(e,e=>a+'$feature["'+e+'"]'+s),n=l.test(n)?n.replace(l,""):c+n,n=o.test(n)?n.replace(o,""):n+c,n=n.replace(u,'" + ').replace(i,' + "')):n='""',n}const g=/^\s*\{([^}]+)\}\s*$/i;const w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,m=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function v(e){if(!e)return null;let n=w.exec(e)||y.exec(e);return n?n[1]||n[3]:(n=m.exec(e),n?n[2]:null)}},552:function(e,n,t){"use strict";t.r(n),t.d(n,"createLabelFunction",(function(){return x})),t.d(n,"formatField",(function(){return b}));var r=t(3),a=t(17),s=t(206),u=t(75),i=t(99),l=t(100),o=t(145),c=t(390);const p=r.a.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},d={getAttribute:(e,n)=>e.field(n)};async function x(e,n,r){if(!e||!e.symbol)return f;const i=e.where,l=Object(c.b)(e),x=i?await Promise.resolve().then(t.bind(null,139)):null;let g;if("arcade"===l.type){const e=await Object(s.c)(l.expression,r,n);g={type:"arcade",evaluate(n){try{const t=e.evaluate({$feature:"attributes"in n?e.repurposeFeature(n):e.repurposeAdapter(n)});if(null!=t)return t.toString()}catch(e){p.error(new a.a("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:n,expression:l}))}return null},needsHydrationToEvaluate:()=>null==Object(c.e)(l.expression)}}else g={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,t=>{const r=t.slice(1,-1),a=Object(u.h)(n,r);if(!a)return t;let s=null;return"attributes"in e?e&&e.attributes&&(s=e.attributes[a.name]):s=e.field(a.name),null==s?"":b(s,a)})};if(i){let e;try{e=x.WhereClause.create(i,new o.a(n))}catch(e){return f}const t=g.evaluate;g.evaluate=n=>{const r="attributes"in n?void 0:d;return e.testFeature(n,r)?t(n):null}}return g}function b(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=a)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=Object(i.b)(r,Object(i.a)("short-date")):Object(u.k)(n)&&(r=Object(l.b)(+r)),r||""}}});