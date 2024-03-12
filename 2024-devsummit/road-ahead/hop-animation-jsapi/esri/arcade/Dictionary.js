// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("./ArcadeDate ./deepClone ./executionError ./ImmutableArray ../chunks/languageUtils ../geometry/Geometry".split(" "),function(n,q,h,r,e,p){function m(a,b,d=!1,c=!1){if(null===a||void 0===a)return null;if(e.isNumber(a))return e.toNumber(a);if(e.isBoolean(a))return e.toBoolean(a);if(e.isString(a))return e.toString(a);if(e.isDate(a))return e.toDate(a,b);if(e.isDateOnly(a)||e.isTime(a))return a;if(e.isArray(a)){var f=[];for(var g of a)f.push(m(g,b,d,c));return f}if(c&&e.isGeometry(a))return a;
g=new k;g.immutable=!1;for(f of Object.keys(a)){const l=a[f];void 0!==l&&g.setField(f,m(l,b,d,c))}g.immutable=d;return g}class k{constructor(a){this.declaredClass="esri.arcade.Dictionary";this.attributes=null;this.plain=!1;this.immutable=!0;this.attributes=a instanceof k?a.attributes:void 0===a?{}:null===a?{}:a}field(a){const b=a.toLowerCase(),d=this.attributes[a];if(void 0!==d)return d;for(const c in this.attributes)if(c.toLowerCase()===b)return this.attributes[c];throw new h.ArcadeExecutionError(null,
h.ExecutionErrorCodes.FieldNotFound,null,{key:a});}setField(a,b){if(this.immutable)throw new h.ArcadeExecutionError(null,h.ExecutionErrorCodes.Immutable,null);if(e.isFunctionParameter(b))throw new h.ArcadeExecutionError(null,h.ExecutionErrorCodes.NoFunctionInDictionary,null);const d=a.toLowerCase();b instanceof Date&&(b=n.ArcadeDate.dateJSToArcadeDate(b));if(void 0===this.attributes[a])for(const c in this.attributes)if(c.toLowerCase()===d){this.attributes[c]=b;return}this.attributes[a]=b}hasField(a){const b=
a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(const d in this.attributes)if(d.toLowerCase()===b)return!0;return!1}keys(){let a=[];for(const b in this.attributes)a.push(b);return a=a.sort()}castToText(a=!1){let b="";for(const d in this.attributes){""!==b&&(b+=",");const c=this.attributes[d];null==c?b+=JSON.stringify(d)+":null":e.isBoolean(c)||e.isNumber(c)||e.isString(c)?b+=JSON.stringify(d)+":"+JSON.stringify(c):c instanceof p?b+=JSON.stringify(d)+":"+e.toStringExplicit(c):c instanceof
r?b+=JSON.stringify(d)+":"+e.toStringExplicit(c,null,a):c instanceof Array?b+=JSON.stringify(d)+":"+e.toStringExplicit(c,null,a):c instanceof n.ArcadeDate?b=a?b+(JSON.stringify(d)+":"+JSON.stringify(c.getTime())):b+(JSON.stringify(d)+":"+c.stringify()):null!==c&&"object"===typeof c&&void 0!==c.castToText&&(b+=JSON.stringify(d)+":"+c.castToText(a))}return"{"+b+"}"}static convertObjectToArcadeDictionary(a,b,d=!0,c=!1){const f=new k;f.immutable=!1;for(const g in a){const l=a[g];void 0!==l&&f.setField(g.toString(),
m(l,b,d,c))}f.immutable=d;return f}static convertJsonToArcade(a,b,d=!1){return m(a,b,d)}castAsJson(a=null){const b={};for(let d in this.attributes){const c=this.attributes[d];void 0!==c&&(a?.keyTranslate&&(d=a.keyTranslate(d)),b[d]=e.castAsJson(c,a))}return b}async castDictionaryValueAsJsonAsync(a,b,d,c=null,f){d=await e.castAsJsonAsync(d,c,f);return a[b]=d}async castAsJsonAsync(a=null,b=null){const d={},c=[];for(let f in this.attributes){const g=this.attributes[f];b?.keyTranslate&&(f=b.keyTranslate(f));
void 0!==g&&(e.isSimpleType(g)||g instanceof p||g instanceof n.ArcadeDate?d[f]=e.castAsJson(g,b):c.push(this.castDictionaryValueAsJsonAsync(d,f,g,a,b)))}0<c.length&&await Promise.all(c);return d}deepClone(){const a=new k;a.immutable=!1;for(const b of this.keys())a.setField(b,q.deepClone(this.field(b)));return a}}return k});