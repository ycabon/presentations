// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../Color ../../../../../core/colorUtils ../../../../../geometry/support/TileClipper ../../../unitBezier ../GeometryUtils ./types".split(" "),function(h,p,y,F,sa,r,f){function k(a,b,c){var d=typeof a;if("string"===d||"boolean"===d||"number"===d||null===a){if(c)switch(c.kind){case "string":"string"!==d&&(a=u.toString(a));break;case "number":"number"!==d&&(a=u.toNumber(a));break;case "color":a=u.toColor(a)}a=["literal",a]}if(!Array.isArray(a)||0===a.length)throw Error("Expression must be a non empty array");
d=a[0];if("string"!==typeof d)throw Error("First element of expression must be a string");const e=ea[d];if(void 0===e)throw Error(`Invalid expression operator "${d}"`);if(!e)throw Error(`Unimplemented expression operator "${d}"`);return e.parse(a,b,c)}class ta{constructor(a){this._parent=a;this._vars={}}add(a,b){this._vars[a]=b}get(a){return this._vars[a]?this._vars[a]:this._parent?this._parent.get(a):null}}class G{constructor(){this.type=f.valueType}static parse(a){if(1<a.length)throw Error('"id" does not expect arguments');
return new G}evaluate(a,b){return a?.id}}class H{constructor(){this.type=f.stringType}static parse(a){if(1<a.length)throw Error('"geometry-type" does not expect arguments');return new H}evaluate(a,b){if(!a)return null;switch(a.type){case F.GeometryType.Point:return"Point";case F.GeometryType.LineString:return"LineString";case F.GeometryType.Polygon:return"Polygon";default:return null}}}class I{constructor(){this.type=f.objectType}static parse(a){if(1<a.length)throw Error('"properties" does not expect arguments');
return new I}evaluate(a,b){return a?.values}}class J{constructor(){this.type=f.numberType}static parse(a){if(1<a.length)throw Error('"zoom" does not expect arguments');return new J}evaluate(a,b){return b}}class t{constructor(a,b,c){this._lhs=a;this._rhs=b;this._compare=c;this.type=f.booleanType}static parse(a,b,c){if(3!==a.length&&4!==a.length)throw Error(`"${a[0]}" expects 2 or 3 arguments`);if(4===a.length)throw Error(`"${a[0]}" collator not supported`);return new t(k(a[1],b),k(a[2],b),c)}evaluate(a,
b){return this._compare(this._lhs.evaluate(a,b),this._rhs.evaluate(a,b))}}class fa extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c===d)}}class ha extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c!==d)}}class ia extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c<d)}}class ja extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c<=d)}}class ka extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c>d)}}class la extends t{static parse(a,b){return t.parse(a,b,(c,d)=>c>=d)}}class K{constructor(a){this._arg=
a;this.type=f.booleanType}static parse(a,b){if(2!==a.length)throw Error('"!" expects 1 argument');return new K(k(a[1],b))}evaluate(a,b){return!this._arg.evaluate(a,b)}}class L{constructor(a){this._args=a;this.type=f.booleanType}static parse(a,b){const c=[];for(let d=1;d<a.length;d++)c.push(k(a[d],b));return new L(c)}evaluate(a,b){for(const c of this._args)if(!c.evaluate(a,b))return!1;return!0}}class M{constructor(a){this._args=a;this.type=f.booleanType}static parse(a,b){const c=[];for(let d=1;d<a.length;d++)c.push(k(a[d],
b));return new M(c)}evaluate(a,b){for(const c of this._args)if(c.evaluate(a,b))return!0;return!1}}class N{constructor(a){this._args=a;this.type=f.booleanType}static parse(a,b){const c=[];for(let d=1;d<a.length;d++)c.push(k(a[d],b));return new N(c)}evaluate(a,b){for(const c of this._args)if(c.evaluate(a,b))return!1;return!0}}class O{constructor(a,b,c){this.type=a;this._args=b;this._fallback=c}static parse(a,b,c){if(4>a.length)throw Error('"case" expects at least 3 arguments');if(1===a.length%2)throw Error('"case" expects an odd number of arguments');
let d;const e=[];for(let g=1;g<a.length-1;g+=2){const m=k(a[g],b),l=k(a[g+1],b,c);d||(d=l.type);e.push({condition:m,output:l})}a=k(a[a.length-1],b,c);d||(d=a.type);return new O(d,e,a)}evaluate(a,b){for(const c of this._args)if(c.condition.evaluate(a,b))return c.output.evaluate(a,b);return this._fallback.evaluate(a,b)}}class P{constructor(a,b){this.type=a;this._args=b}static parse(a,b){if(2>a.length)throw Error('"coalesce" expects at least 1 argument');let c;const d=[];for(let e=1;e<a.length;e++){const g=
k(a[e],b);c||(c=g.type);d.push(g)}return new P(c,d)}evaluate(a,b){for(const c of this._args){const d=c.evaluate(a,b);if(null!==d)return d}return null}}class Q{constructor(a,b,c,d,e){this.type=a;this._input=b;this._labels=c;this._outputs=d;this._fallback=e}static parse(a,b){if(3>a.length)throw Error('"match" expects at least 3 arguments');if(0===a.length%2)throw Error('"case" expects an even number of arguments');let c;const d=k(a[1],b),e=[],g={};let m;for(let v=2;v<a.length-1;v+=2){var l=a[v];Array.isArray(l)||
(l=[l]);for(const A of l){l=typeof A;if("string"!==l&&"number"!==l)throw Error('"match" requires string or number literal as labels');if(!m)m=l;else if(l!==m)throw Error('"match" requires labels to have the same type');g[A]=e.length}l=k(a[v+1],b);c||(c=l.type);e.push(l)}return new Q(c,d,g,e,k(a[a.length-1],b))}evaluate(a,b){const c=this._input.evaluate(a,b);return(this._outputs[this._labels[c]]||this._fallback).evaluate(a,b)}}class w{constructor(a,b,c,d,e){this._operator=a;this.type=b;this.interpolation=
c;this.input=d;this._stops=e}static parse(a,b,c){const d=a[0];if(5>a.length)throw Error(`"${d}" expects at least 4 arguments`);const e=a[1];if(!Array.isArray(e)||0===e.length)throw Error(`"${e}" is not a valid interpolation`);switch(e[0]){case "linear":if(1!==e.length)throw Error("Linear interpolation cannot have parameters");break;case "exponential":if(2!==e.length||"number"!==typeof e[1])throw Error("Exponential interpolation requires one numeric argument");break;case "cubic-bezier":if(5!==e.length)throw Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
for(var g=1;5>g;g++){var m=e[g];if("number"!==typeof m||0>m||1<m)throw Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");}break;default:throw Error(`"${a[0]}" unknown interpolation type "${e[0]}"`);}if(1!==a.length%2)throw Error(`"${d}" expects an even number of arguments`);g=k(a[2],b,f.numberType);let l;"interpolate-hcl"===d||"interpolate-lab"===d?l=f.colorType:c&&"value"!==c.kind&&(l=c);c=[];for(m=3;m<a.length;m+=2){const v=a[m];if("number"!==typeof v)throw Error(`"${d}" requires stop inputs as literal numbers`);
if(c.length&&c[c.length-1][0]>=v)throw Error(`"${d}" requires strictly ascending stop inputs`);const A=k(a[m+1],b,l);l||(l=A.type);c.push([v,A])}if(l&&l!==f.colorType&&l!==f.numberType&&("array"!==l.kind||l.itemType!==f.numberType))throw Error(`"${d}" cannot interpolate type ${f.typeToString(l)}`);return new w(d,l,e,g,c)}evaluate(a,b){var c=this._stops;if(1===c.length)return c[0][1].evaluate(a,b);var d=this.input.evaluate(a,b);if(d<=c[0][0])return c[0][1].evaluate(a,b);if(d>=c[c.length-1][0])return c[c.length-
1][1].evaluate(a,b);let e=0;for(;++e<c.length&&!(d<c[e][0]););const g=w.interpolationRatio(this.interpolation,d,c[e-1][0],c[e][0]);d=c[e-1][1].evaluate(a,b);const m=c[e][1].evaluate(a,b);if("interpolate"===this._operator){if("array"===this.type.kind&&Array.isArray(d)&&Array.isArray(m))return d.map((l,v)=>r.interpolate(l,m[v],g));if("color"===this.type.kind&&d instanceof p&&m instanceof p)return d=new p(d),a=new p(m),new p([r.interpolate(d.r,a.r,g),r.interpolate(d.g,a.g,g),r.interpolate(d.b,a.b,g),
r.interpolate(d.a,a.a,g)]);if("number"===this.type.kind&&"number"===typeof d&&"number"===typeof m)return r.interpolate(d,m,g);throw Error(`"${this._operator}" cannot interpolate type ${f.typeToString(this.type)}`);}if("interpolate-hcl"===this._operator)return a=y.toLCH(d),b=y.toLCH(m),c=b.h-a.h,a=y.toRGB({h:a.h+g*(180<c||-180>c?c-360*Math.round(c/360):c),c:r.interpolate(a.c,b.c,g),l:r.interpolate(a.l,b.l,g)}),new p({a:r.interpolate(d.a,m.a,g),...a});if("interpolate-lab"===this._operator)return a=
y.toLAB(d),b=y.toLAB(m),a=y.toRGB({l:r.interpolate(a.l,b.l,g),a:r.interpolate(a.a,b.a,g),b:r.interpolate(a.b,b.b,g)}),new p({a:r.interpolate(d.a,m.a,g),...a});throw Error(`Unexpected operator "${this._operator}"`);}interpolationUniformValue(a,b){const c=this._stops;if(1===c.length||a>=c[c.length-1][0])return 0;let d=0;for(;++d<c.length&&!(a<c[d][0]););return w.interpolationRatio(this.interpolation,b,c[d-1][0],c[d][0])}getInterpolationRange(a){const b=this._stops;if(1===b.length)return a=b[0][0],[a,
a];var c=b[b.length-1][0];if(a>=c)return[c,c];for(c=0;++c<b.length&&!(a<b[c][0]););return[b[c-1][0],b[c][0]]}static interpolationRatio(a,b,c,d){let e=0;"linear"===a[0]?e=w._exponentialInterpolationRatio(b,1,c,d):"exponential"===a[0]?e=w._exponentialInterpolationRatio(b,a[1],c,d):"cubic-bezier"===a[0]&&(e=sa.unitBezier(a[1],a[2],a[3],a[4])(w._exponentialInterpolationRatio(b,1,c,d),1E-5));0>e?e=0:1<e&&(e=1);return e}static _exponentialInterpolationRatio(a,b,c,d){d-=c;if(0===d)return 0;a-=c;return 1===
b?a/d:(b**a-1)/(b**d-1)}}class R{constructor(a,b,c){this.type=a;this._input=b;this._stops=c}static parse(a,b){if(5>a.length)throw Error('"step" expects at least 4 arguments');if(1!==a.length%2)throw Error('"step" expects an even number of arguments');const c=k(a[1],b,f.numberType);let d;const e=[];e.push([-Infinity,k(a[2],b)]);for(let g=3;g<a.length;g+=2){const m=a[g];if("number"!==typeof m)throw Error('"step" requires stop inputs as literal numbers');if(e.length&&e[e.length-1][0]>=m)throw Error('"step" requires strictly ascending stop inputs');
const l=k(a[g+1],b);d||(d=l.type);e.push([m,l])}return new R(d,c,e)}evaluate(a,b){const c=this._stops;if(1===c.length)return c[0][1].evaluate(a,b);const d=this._input.evaluate(a,b);let e=0;for(;++e<c.length&&!(d<c[e][0]););return this._stops[e-1][1].evaluate(a,b)}}class S{constructor(a,b){this.type=a;this._output=b}static parse(a,b,c){if(4>a.length)throw Error('"let" expects at least 3 arguments');if(1===a.length%2)throw Error('"let" expects an odd number of arguments');const d=new ta(b);for(let e=
1;e<a.length-1;e+=2){const g=a[e];if("string"!==typeof g)throw Error(`"let" requires a string to define variable names - found ${g}`);d.add(g,k(a[e+1],b))}a=k(a[a.length-1],d,c);return new S(a.type,a)}evaluate(a,b){return this._output.evaluate(a,b)}}class T{constructor(a,b){this.type=a;this.output=b}static parse(a,b,c){if(2!==a.length||"string"!==typeof a[1])throw Error('"var" requires just one literal string argument');b=b.get(a[1]);if(!b)throw Error(`${a[1]} must be defined before being used in a "var" expression`);
return new T(c||f.valueType,b)}evaluate(a,b){return this.output.evaluate(a,b)}}class U{constructor(a,b,c){this.type=a;this._index=b;this._array=c}static parse(a,b){if(3!==a.length)throw Error('"at" expects 2 arguments');const c=k(a[1],b,f.numberType);a=k(a[2],b);return new U(a.type.itemType,c,a)}evaluate(a,b){const c=this._index.evaluate(a,b);a=this._array.evaluate(a,b);if(0>c||c>=a.length)throw Error('"at" index out of bounds');if(c!==Math.floor(c))throw Error('"at" index must be an integer');return a[c]}}
class B{constructor(a,b){this._key=a;this._obj=b;this.type=f.valueType}static parse(a,b){let c;switch(a.length){case 2:return c=k(a[1],b),new B(c);case 3:return c=k(a[1],b),a=k(a[2],b),new B(c,a);default:throw Error('"get" expects 1 or 2 arguments');}}evaluate(a,b){const c=this._key.evaluate(a,b);return this._obj?this._obj.evaluate(a,b)[c]:a?.values[c]}}class C{constructor(a,b){this._key=a;this._obj=b;this.type=f.booleanType}static parse(a,b){let c;switch(a.length){case 2:return c=k(a[1],b),new C(c);
case 3:return c=k(a[1],b),a=k(a[2],b),new C(c,a);default:throw Error('"has" expects 1 or 2 arguments');}}evaluate(a,b){const c=this._key.evaluate(a,b);return this._obj?(a=this._obj.evaluate(a,b),c in a):!!a?.values[c]}}class V{constructor(a,b){this._key=a;this._vals=b;this.type=f.booleanType}static parse(a,b){if(3!==a.length)throw Error('"in" expects 2 arguments');return new V(k(a[1],b),k(a[2],b))}evaluate(a,b){const c=this._key.evaluate(a,b);return this._vals.evaluate(a,b).includes(c)}}class D{constructor(a,
b,c){this._item=a;this._array=b;this._from=c;this.type=f.numberType}static parse(a,b){if(3>a.length||4<a.length)throw Error('"index-of" expects 3 or 4 arguments');const c=k(a[1],b),d=k(a[2],b);return 4===a.length?(a=k(a[3],b,f.numberType),new D(c,d,a)):new D(c,d)}evaluate(a,b){const c=this._item.evaluate(a,b),d=this._array.evaluate(a,b);if(this._from){a=this._from.evaluate(a,b);if(a!==Math.floor(a))throw Error('"index-of" index must be an integer');return d.indexOf(c,a)}return d.indexOf(c)}}class W{constructor(a){this._arg=
a;this.type=f.numberType}static parse(a,b){if(2!==a.length)throw Error('"length" expects 2 arguments');a=k(a[1],b);return new W(a)}evaluate(a,b){a=this._arg.evaluate(a,b);if("string"===typeof a||Array.isArray(a))return a.length;throw Error('"length" expects string or array');}}class E{constructor(a,b,c,d){this.type=a;this._array=b;this._from=c;this._to=d}static parse(a,b){if(3>a.length||4<a.length)throw Error('"slice" expects 2 or 3 arguments');const c=k(a[1],b),d=k(a[2],b,f.numberType);if(d.type!==
f.numberType)throw Error('"slice" index must return a number');if(4===a.length){a=k(a[3],b,f.numberType);if(a.type!==f.numberType)throw Error('"slice" index must return a number');return new E(c.type,c,d,a)}return new E(c.type,c,d)}evaluate(a,b){const c=this._array.evaluate(a,b);if(!Array.isArray(c)&&"string"!==typeof c)throw Error('"slice" input must be an array or a string');const d=this._from.evaluate(a,b);if(0>d||d>=c.length)throw Error('"slice" index out of bounds');if(d!==Math.floor(d))throw Error('"slice" index must be an integer');
if(this._to){a=this._to.evaluate(a,b);if(0>a||a>=c.length)throw Error('"slice" index out of bounds');if(a!==Math.floor(a))throw Error('"slice" index must be an integer');return c.slice(d,a)}return c.slice(d)}}class X{constructor(){this.type=f.booleanType}static parse(a){if(1!==a.length)throw Error('"has-id" expects no arguments');return new X}evaluate(a,b){return void 0!==a?.id}}class q{constructor(a,b){this._args=a;this._calculate=b;this.type=f.numberType}static parse(a,b,c){a=a.slice(1).map(d=>
k(d,b));return new q(a,c)}evaluate(a,b){let c;this._args&&(c=this._args.map(d=>d.evaluate(a,b)));return this._calculate(c)}}class ma extends q{static parse(a,b){switch(a.length){case 2:return q.parse(a,b,c=>-c[0]);case 3:return q.parse(a,b,c=>c[0]-c[1]);default:throw Error('"-" expects 1 or 2 arguments');}}}class na extends q{static parse(a,b){return q.parse(a,b,c=>{let d=1;for(const e of c)d*=e;return d})}}class oa extends q{static parse(a,b){if(3===a.length)return q.parse(a,b,c=>c[0]/c[1]);throw Error('"/" expects 2 arguments');
}}class pa extends q{static parse(a,b){if(3===a.length)return q.parse(a,b,c=>c[0]%c[1]);throw Error('"%" expects 2 arguments');}}class qa extends q{static parse(a,b){if(3===a.length)return q.parse(a,b,c=>c[0]**c[1]);throw Error('"^" expects 1 or 2 arguments');}}class ra extends q{static parse(a,b){return q.parse(a,b,c=>{let d=0;for(const e of c)d+=e;return d})}}class n{constructor(a,b){this._args=a;this._calculate=b;this.type=f.numberType}static parse(a,b){const c=a.slice(1).map(d=>k(d,b));return new n(c,
n.ops[a[0]])}evaluate(a,b){let c;this._args&&(c=this._args.map(d=>d.evaluate(a,b)));return this._calculate(c)}}n.ops={abs:a=>Math.abs(a[0]),acos:a=>Math.acos(a[0]),asin:a=>Math.asin(a[0]),atan:a=>Math.atan(a[0]),ceil:a=>Math.ceil(a[0]),cos:a=>Math.cos(a[0]),e:()=>Math.E,floor:a=>Math.floor(a[0]),ln:a=>Math.log(a[0]),ln2:()=>Math.LN2,log10:a=>Math.log(a[0])/Math.LN10,log2:a=>Math.log(a[0])/Math.LN2,max:a=>Math.max(...a),min:a=>Math.min(...a),pi:()=>Math.PI,round:a=>Math.round(a[0]),sin:a=>Math.sin(a[0]),
sqrt:a=>Math.sqrt(a[0]),tan:a=>Math.tan(a[0])};class Y{constructor(a){this._args=a;this.type=f.stringType}static parse(a,b){return new Y(a.slice(1).map(c=>k(c,b)))}evaluate(a,b){return this._args.map(c=>c.evaluate(a,b)).join("")}}class z{constructor(a,b){this._arg=a;this._calculate=b;this.type=f.stringType}static parse(a,b){if(2!==a.length)throw Error(`${a[0]} expects 1 argument`);b=k(a[1],b);return new z(b,z.ops[a[0]])}evaluate(a,b){return this._calculate(this._arg.evaluate(a,b))}}z.ops={downcase:a=>
a.toLowerCase(),upcase:a=>a.toUpperCase()};class Z{constructor(a){this._args=a;this.type=f.colorType}static parse(a,b){if(4!==a.length)throw Error('"rgb" expects 3 arguments');a=a.slice(1).map(c=>k(c,b));return new Z(a)}evaluate(a,b){const c=this._validate(this._args[0].evaluate(a,b)),d=this._validate(this._args[1].evaluate(a,b));a=this._validate(this._args[2].evaluate(a,b));return new p({r:c,g:d,b:a})}_validate(a){if("number"!==typeof a||0>a||255<a)throw Error(`${a}: invalid color component`);return Math.round(a)}}
class aa{constructor(a){this._args=a;this.type=f.colorType}static parse(a,b){if(5!==a.length)throw Error('"rgba" expects 4 arguments');a=a.slice(1).map(c=>k(c,b));return new aa(a)}evaluate(a,b){const c=this._validate(this._args[0].evaluate(a,b)),d=this._validate(this._args[1].evaluate(a,b)),e=this._validate(this._args[2].evaluate(a,b));a=this._validateAlpha(this._args[3].evaluate(a,b));return new p({r:c,g:d,b:e,a})}_validate(a){if("number"!==typeof a||0>a||255<a)throw Error(`${a}: invalid color component`);
return Math.round(a)}_validateAlpha(a){if("number"!==typeof a||0>a||1<a)throw Error(`${a}: invalid alpha color component`);return a}}class ba{constructor(a){this._color=a;this.type=f.arrayType(f.numberType,4)}static parse(a,b){if(2!==a.length)throw Error('"to-rgba" expects 1 argument');a=k(a[1],b);return new ba(a)}evaluate(a,b){return(new p(this._color.evaluate(a,b))).toRgba()}}class x{constructor(a,b){this.type=a;this._args=b}static parse(a,b){var c=a[0];if(2>a.length)throw Error(`${c} expects at least one argument`);
let d=1,e;if("array"===c){if(2<a.length){switch(a[1]){case "string":e=f.stringType;break;case "number":e=f.numberType;break;case "boolean":e=f.booleanType;break;default:throw Error('"array" type argument must be string, number or boolean');}d++}else e=f.valueType;if(3<a.length){var g=a[2];if(null!==g&&("number"!==typeof g||0>g||g!==Math.floor(g)))throw Error('"array" length argument must be a positive integer literal');d++}e=f.arrayType(e,g)}else switch(c){case "string":e=f.stringType;break;case "number":e=
f.numberType;break;case "boolean":e=f.booleanType;break;case "object":e=f.objectType}for(c=[];d<a.length;d++)g=k(a[d],b),c.push(g);return new x(e,c)}evaluate(a,b){let c;for(const d of this._args){const e=d.evaluate(a,b);c=f.getType(e);if(f.matchType(c,this.type))return e}throw Error(`Expected ${f.typeToString(this.type)} but got ${f.typeToString(c)}`);}}class u{constructor(a,b){this.type=a;this._args=b}static parse(a,b){var c=a[0];const d=u.types[c];if(d===f.booleanType||d===f.stringType){if(2!==
a.length)throw Error(`${c} expects one argument`);}else if(2>a.length)throw Error(`${c} expects at least one argument`);c=[];for(let e=1;e<a.length;e++){const g=k(a[e],b);c.push(g)}return new u(d,c)}evaluate(a,b){if(this.type===f.booleanType)return!!this._args[0].evaluate(a,b);if(this.type===f.stringType)return f.valueToString(this._args[0].evaluate(a,b));if(this.type===f.numberType){for(const d of this._args){var c=Number(d.evaluate(a,b));if(!isNaN(c))return c}return null}if(this.type===f.colorType){for(c of this._args)try{const d=
u.toColor(c.evaluate(a,b));if(d instanceof p)return d}catch{}return null}}static toBoolean(a){return!!a}static toString(a){return f.valueToString(a)}static toNumber(a){const b=Number(a);if(isNaN(b))throw Error(`"${a}" is not a number`);return b}static toColor(a){if(a instanceof p)return a;if("string"===typeof a){const b=p.fromString(a);if(b)return b;throw Error(`"${a}" is not a color`);}if(Array.isArray(a))return p.fromArray(a);throw Error(`"${a}" is not a color`);}}u.types={"to-boolean":f.booleanType,
"to-color":f.colorType,"to-number":f.numberType,"to-string":f.stringType};class ca{constructor(a){this._val=a;this.type=f.getType(a)}static parse(a){if(2!==a.length)throw Error('"literal" expects 1 argument');return new ca(a[1])}evaluate(a,b){return this._val}}class da{constructor(a){this._arg=a;this.type=f.stringType}static parse(a,b){if(2!==a.length)throw Error('"typeof" expects 1 argument');return new da(k(a[1],b))}evaluate(a,b){return f.typeToString(f.getType(this._arg.evaluate(a,b)))}}const ea=
{array:x,boolean:x,collator:null,format:null,image:null,literal:ca,number:x,"number-format":null,object:x,string:x,"to-boolean":u,"to-color":u,"to-number":u,"to-string":u,typeof:da,accumulated:null,"feature-state":null,"geometry-type":H,id:G,"line-progress":null,properties:I,at:U,get:B,has:C,in:V,"index-of":D,length:W,slice:E,"!":K,"!\x3d":ha,"\x3c":ia,"\x3c\x3d":ja,"\x3d\x3d":fa,"\x3e":ka,"\x3e\x3d":la,all:L,any:M,case:O,coalesce:P,match:Q,within:null,interpolate:w,"interpolate-hcl":w,"interpolate-lab":w,
step:R,let:S,var:T,concat:Y,downcase:z,"is-supported-script":null,"resolved-locale":null,upcase:z,rgb:Z,rgba:aa,"to-rgba":ba,"-":ma,"*":na,"/":oa,"%":pa,"^":qa,"+":ra,abs:n,acos:n,asin:n,atan:n,ceil:n,cos:n,e:n,floor:n,ln:n,ln2:n,log10:n,log2:n,max:n,min:n,pi:n,round:n,sin:n,sqrt:n,tan:n,zoom:J,"heatmap-density":null,"has-id":X,none:N};h.ALL=L;h.ANY=M;h.Add=ra;h.Assert=x;h.At=U;h.Calculate=n;h.Case=O;h.Coalesce=P;h.Coerce=u;h.Concat=Y;h.Div=oa;h.EQ=fa;h.GE=la;h.GT=ka;h.GeomType=H;h.Get=B;h.Has=C;
h.HasID=X;h.ID=G;h.In=V;h.IndexOf=D;h.Interpolate=w;h.LE=ja;h.LT=ia;h.Length=W;h.Let=S;h.Literal=ca;h.Match=Q;h.Mod=pa;h.Mul=na;h.NE=ha;h.NONE=N;h.NOT=K;h.Pow=qa;h.Properties=I;h.Rgb=Z;h.Rgba=aa;h.Slice=E;h.Step=R;h.String=z;h.Sub=ma;h.ToRgba=ba;h.TypeOf=da;h.Var=T;h.Zoom=J;h.createExpression=k;h.ops=ea;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});