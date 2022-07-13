self.webpackChunkRemoteClient([41],{109:function(e,t,i){"use strict";function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function s(e,t){const i=t||a(e),r=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return n}))},118:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o}));var r=i(2);function n(e,t,i){return Object(r.j)(e.map((e,r)=>t.apply(i,[e,r])))}function a(e,t,i){return Object(r.j)(e.map((e,r)=>t.apply(i,[e,r]))).then(e=>e.map(e=>e.value))}function s(e){return e.then(e=>({ok:!0,value:e})).catch(e=>({ok:!1,error:e}))}function o(e){return e.then(e=>({ok:!0,value:e})).catch(e=>(Object(r.s)(e),{ok:!1,error:e}))}},150:function(e,t,i){"use strict";var r,n=i(14),a=(i(4),i(3),i(6),i(16)),s=i(20),o=(i(24),i(37),i(38),i(56)),l=i(142);let c=r=class extends o.a{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return this.value*l.a[this.unit]}clone(){return new r({value:this.value,unit:this.unit})}};Object(n.a)([Object(a.b)({type:Number,json:{write:!0},nonNullable:!0})],c.prototype,"value",void 0),Object(n.a)([Object(a.b)({type:l.c.apiValues,json:{type:l.c.jsonValues,read:l.c.read,write:l.c.write},nonNullable:!0})],c.prototype,"unit",void 0),c=r=Object(n.a)([Object(s.a)("esri.TimeInterval")],c);var u=c;t.a=u},156:function(e,t,i){"use strict";i.d(t,"a",(function(){return w})),i.d(t,"b",(function(){return f})),i.d(t,"c",(function(){return y})),i.d(t,"d",(function(){return j})),i.d(t,"e",(function(){return m})),i.d(t,"f",(function(){return h})),i.d(t,"g",(function(){return b}));var r=i(89),n=i(0),a=i(3),s=i(63),o=i(77),l=i(76),c=i(109);const u=a.a.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new o.a,d=Math.PI,b=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function f(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"color"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const a="number"==typeof t,o=a?null:t,l=o&&o.attributes;let c=a?t:null;const p=r.field,{ipData:d,hasExpression:b}=r.cache;let f=r.cache.compiledFunc;if(!p&&!b){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(b){if(!Object(n.h)(i)||!Object(n.h)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,a=t.getViewInfo(e),s=t.createExecContext(o,a);if(!f){const e=t.createSyntaxTree(r.valueExpression);f=t.createFunction(e),r.cache.compiledFunc=f}c=t.executeFunction(f,s)}else l&&(c=l[p]);const y=r.normalizationField,j=l?parseFloat(l[y]):void 0;if(null!=c&&(!y||a||!isNaN(j)&&0!==j)){isNaN(j)||a||(c/=j);const e=g(c,d);if(e){const t=e[0],a=e[1],o=t===a?r.stops[t].color:s.a.blendColors(r.stops[t].color,r.stops[a].color,e[2],Object(n.h)(i)?i.color:void 0);return new s.a(o)}}}function y(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"opacity"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const a="number"==typeof t,s=a?null:t,o=s&&s.attributes;let l=a?t:null;const c=r.field,{ipData:p,hasExpression:d}=r.cache;let b=r.cache.compiledFunc;if(!c&&!d){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(d){if(Object(n.g)(i)||Object(n.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,a=t.getViewInfo(e),o=t.createExecContext(s,a);if(!b){const e=t.createSyntaxTree(r.valueExpression);b=t.createFunction(e),r.cache.compiledFunc=b}l=t.executeFunction(b,o)}else o&&(l=o[c]);const f=r.normalizationField,y=o?parseFloat(o[f]):void 0;if(null!=l&&(!f||a||!isNaN(y)&&0!==y)){isNaN(y)||a||(l/=y);const e=g(l,p);if(e){const t=e[0],i=e[1];if(t===i)return r.stops[t].opacity;{const n=r.stops[t].opacity;return n+(r.stops[i].opacity-n)*e[2]}}}}function j(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"rotation"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const a=r.axis||"heading",s="heading"===a&&"arithmetic"===r.rotationType?90:0,o="heading"===a&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,c=l&&l.attributes,p=r.field,{hasExpression:d}=r.cache;let b=r.cache.compiledFunc,f=0;if(!p&&!d)return f;if(d){if(Object(n.g)(i)||Object(n.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,a=t.getViewInfo(e),s=t.createExecContext(l,a);if(!b){const e=t.createSyntaxTree(r.valueExpression);b=t.createFunction(e),r.cache.compiledFunc=b}f=t.executeFunction(b,s)}else c&&(f=c[p]||0);return f="number"!=typeof f||isNaN(f)?null:s+o*f,f}function m(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(e=>"size"===e.type)[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const a=function(e,t,i,r,a){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(O(t.minSize,i,r)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){const r=e.stops;let n=r&&r.length&&r[0].size;return null==n&&(n=e.minSize),O(n,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){const a=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=O(t.minSize,i,r),o=O(t.maxSize,i,r),l=Object(n.h)(r)?r.shape:void 0;if(e<=t.minDataValue)return s;if(e>=t.maxDataValue)return o;if("area"===t.scaleBy&&l){const e="circle"===l,t=e?d*(s/2)**2:s*s,i=t+a*((e?d*(o/2)**2:o*o)-t);return e?2*Math.sqrt(i/d):Math.sqrt(i)}return s+a*(o-s)}(e,t,i,r);case"proportional":return function(e,t,i,r){const a=Object(n.h)(r)?r.shape:void 0,s=e/t.minDataValue,o=O(t.minSize,i,r),l=O(t.maxSize,i,r);let c=null;return c="circle"===a?2*Math.sqrt(s*(o/2)**2):"square"===a||"diamond"===a||"image"===a?Math.sqrt(s*o**2):s*o,v(c,o,l)}(e,t,i,r);case"stops":return function(e,t,i,r,n){const[a,s,o]=g(e,n);if(a===s)return O(t.stops[a].size,i,r);{const e=O(t.stops[a].size,i,r);return e+(O(t.stops[s].size,i,r)-e)*o}}(e,t,i,r,a);case"real-world-size":return function(e,t,i,r){const a=(Object(n.h)(r)&&r.resolution?r.resolution:1)*l.a[t.valueUnit],s=O(t.minSize,i,r),o=O(t.maxSize,i,r),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/d)/a:"radius"===c||"distance"===c?2*e/a:e/a,v(u,s,o)}(e,t,i,r);case"identity":return e;case"unknown":return null}}(function(e,t,i){const r="number"==typeof t,a=r?null:t,s=a&&a.attributes;let o=r?t:null;const{isScaleDriven:l}=e.cache;let p=e.cache.compiledFunc;if(l){const t=Object(n.h)(i)?i.scale:void 0,r=Object(n.h)(i)?i.view:void 0;o=null==t||"3d"===r?function(e){let t=null,i=null;const r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if(Object(n.g)(i)||Object(n.g)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,s=r.getViewInfo(t),l=r.createExecContext(a,s);if(!p){const t=r.createSyntaxTree(e.valueExpression);p=r.createFunction(t),e.cache.compiledFunc=p}o=r.executeFunction(p,l);break}case"field":s&&(o=s[e.field]);break;case"unknown":o=null}if(!Object(c.d)(o))return null;if(r||!e.normalizationField)return o;const d=s?parseFloat(s[e.normalizationField]):null;return Object(c.d)(d)&&0!==d?o/d:null}(r,t,i),r,t,i,r.cache.ipData);return null==a||isNaN(a)?0:a}function O(e,t,i){return null==e?null:Object(c.c)(e)?m(e,t,i):Object(c.d)(e)?e:null}function v(e,t,i){return Object(c.d)(i)&&e>i?i:Object(c.d)(t)&&e<t?t:e}function h(e,t,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||t))return null;const n={scale:t,view:i};let a=O(e.minSize,p,n),s=O(e.maxSize,p,n);if(null!=a||null!=s){if(a>s){const e=s;s=a,a=e}return{minSize:a,maxSize:s}}}function g(e,t){if(!t)return;let i=0,r=t.length-1;return t.some((t,n)=>e<t?(r=n,!0):(i=n,!1)),[i,r,(e-t[i])/(t[r]-t[i])]}function w(e,t,i){const n=["proportional","proportional","proportional"];for(const a of e){const e=a.useSymbolValue?"symbol-value":m(a,t,i);switch(a.axis){case"width":n[0]=e;break;case"depth":n[1]=e;break;case"height":n[2]=e;break;case"width-and-depth":n[0]=e,n[1]=e;break;case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e;break;default:Object(r.a)(a.axis)}}return n}},194:function(e,t,i){"use strict";var r,n=i(14),a=(i(4),i(7)),s=(i(3),i(6),i(16)),o=i(58),l=i(20),c=i(57),u=(i(24),i(37),i(38),i(56)),p=i(142),d=i(103),b=i(150);let f=r=class extends u.a{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new r({respectsDaylightSaving:e,timezone:t})}};Object(n.a)([Object(s.b)({type:Boolean,json:{write:!0}})],f.prototype,"respectsDaylightSaving",void 0),Object(n.a)([Object(o.a)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],f.prototype,"readRespectsDaylightSaving",null),Object(n.a)([Object(s.b)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],f.prototype,"timezone",void 0),f=r=Object(n.a)([Object(l.a)("esri.layers.support.TimeReference")],f);var y,j=f;let m=y=class extends u.a{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),r=new Date(t.timeExtent[1]);return new d.a({start:i,end:r})}writeFullTimeExtent(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new b.a({value:t.timeInterval,unit:p.c.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new b.a({value:t.defaultTimeInterval,unit:p.c.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const i=e.toJSON();t.timeInterval=i.value,t.timeIntervalUnits=i.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:i,interval:r,startField:n,timeReference:s,fullTimeExtent:o,trackIdField:l,useTime:c}=this;return new y({cumulative:e,endField:t,hasLiveData:i,interval:r,startField:n,timeReference:Object(a.a)(s),fullTimeExtent:Object(a.a)(o),trackIdField:l,useTime:c})}};Object(n.a)([Object(s.b)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],m.prototype,"cumulative",void 0),Object(n.a)([Object(s.b)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],m.prototype,"endField",void 0),Object(n.a)([Object(s.b)({type:d.a,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"fullTimeExtent",void 0),Object(n.a)([Object(o.a)("fullTimeExtent",["timeExtent"])],m.prototype,"readFullTimeExtent",null),Object(n.a)([Object(c.a)("fullTimeExtent")],m.prototype,"writeFullTimeExtent",null),Object(n.a)([Object(s.b)({type:Boolean,json:{write:!0}})],m.prototype,"hasLiveData",void 0),Object(n.a)([Object(s.b)({type:b.a,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"interval",void 0),Object(n.a)([Object(o.a)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],m.prototype,"readInterval",null),Object(n.a)([Object(c.a)("interval")],m.prototype,"writeInterval",null),Object(n.a)([Object(s.b)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],m.prototype,"startField",void 0),Object(n.a)([Object(s.b)({type:j,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"timeReference",void 0),Object(n.a)([Object(s.b)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"trackIdField",void 0),Object(n.a)([Object(s.b)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],m.prototype,"useTime",void 0),m=y=Object(n.a)([Object(l.a)("esri.layers.support.TimeInfo")],m);var O=m;t.a=O},225:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(14),n=(i(4),i(3),i(6),i(16)),a=i(58),s=i(20),o=(i(24),i(37),i(38),i(75)),l=i(142),c=i(103),u=i(150),p=i(194);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const r=i.timeOffset,n=l.c.fromJSON(i.timeOffsetUnits);return r&&n?new u.a({value:r,unit:n}):null}set timeInfo(e){Object(o.f)(e,this.fields),this._set("timeInfo",e)}};return Object(r.a)([Object(n.b)({type:c.a,json:{write:!1}})],t.prototype,"timeExtent",void 0),Object(r.a)([Object(n.b)({type:u.a})],t.prototype,"timeOffset",void 0),Object(r.a)([Object(a.a)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),Object(r.a)([Object(n.b)({value:null,type:p.a,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),Object(r.a)([Object(n.b)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=Object(r.a)([Object(s.a)("esri.layers.mixins.TemporalLayer")],t),t}},274:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(41),n=i(2),a=i(118);async function s(e,t,i){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const o=await Object(a.c)(s.populateFromStyle());if(Object(n.t)(i),!1===o.ok){const i=o.error;t&&t.messages&&t.messages.push(new r.a("renderer:style-reference","Failed to create unique value renderer from style reference: "+i.message,{error:i,context:t})),e.clear("renderer",t.origin)}}}},290:function(e,t,i){"use strict";var r=i(14),n=(i(4),i(3),i(6),i(16)),a=i(20),s=(i(24),i(37),i(38),i(56));let o=class extends s.a{constructor(){super(...arguments),this.type=null}};Object(r.a)([Object(n.b)({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=Object(r.a)([Object(a.a)("esri.layers.support.FeatureReduction")],o);var l=o;t.a=l},349:function(e,t,i){"use strict";var r,n=i(14),a=(i(4),i(3),i(6),i(16)),s=i(20),o=(i(24),i(37),i(38),i(290));let l=r=class extends o.a{constructor(e){super(e),this.type="selection"}clone(){return new r}};Object(n.a)([Object(a.b)({type:["selection"]})],l.prototype,"type",void 0),l=r=Object(n.a)([Object(s.a)("esri.layers.support.FeatureReductionSelection")],l);var c=l;t.a=c},391:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(280);const n=/\[([^\[\]]+)\]/gi;function a(e,t,i){return e?e.map(e=>{const a=new r.a;if(a.read(e,i),a.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;a.labelExpression=a.labelExpression.replace(n,(t,i)=>`[${function(e,t){if(!t)return e;const i=e.toLowerCase();for(let e=0;e<t.length;e++){const r=t[e].name;if(r.toLowerCase()===i)return r}return e}(i,e)}]`)}return a}):null}},426:function(e,t,i){"use strict";var r,n=i(14),a=(i(4),i(7)),s=(i(3),i(6),i(16)),o=i(20),l=(i(24),i(37),i(38),i(56)),c=i(147),u=i(66),p=i(123),d=i(74);let b=r=class extends l.a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null}clone(){return new r({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};Object(n.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"statisticType",void 0),Object(n.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"onStatisticField",void 0),Object(n.a)([Object(s.b)({type:String,json:{write:!0}})],b.prototype,"onStatisticValueExpression",void 0),b=r=Object(n.a)([Object(o.a)("esri.layers.support.OutStatistic")],b);var f,y=b;let j=f=class extends l.a{constructor(){super(...arguments),this.name=null}clone(){return new f({name:this.name,outStatistic:this.outStatistic.clone()})}};Object(n.a)([Object(s.b)({type:String,json:{write:!0}})],j.prototype,"name",void 0),Object(n.a)([Object(s.b)({type:y,json:{write:!0}})],j.prototype,"outStatistic",void 0),j=f=Object(n.a)([Object(o.a)("esri.layers.support.AggregateField")],j);var m,O=j,v=i(280);let h=m=class extends l.a{constructor(e){super(e),this.type="cluster",this.clusterRadius=Object(u.e)("80px"),this.clusterMinSize=Object(u.e)("12px"),this.clusterMaxSize=Object(u.e)("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:Object(a.a)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:Object(a.a)(this.fields),popupEnabled:this.popupEnabled,popupTemplate:Object(a.a)(this.popupTemplate)})}};Object(n.a)([Object(s.b)({type:["cluster"],readOnly:!0,json:{write:!0}})],h.prototype,"type",void 0),Object(n.a)([Object(s.b)({type:Number,cast:e=>"auto"===e?e:Object(u.e)(e),json:{write:!0}})],h.prototype,"clusterRadius",void 0),Object(n.a)([Object(s.b)({type:Number,cast:u.e,json:{write:!0}})],h.prototype,"clusterMinSize",void 0),Object(n.a)([Object(s.b)({type:Number,cast:u.e,json:{write:!0}})],h.prototype,"clusterMaxSize",void 0),Object(n.a)([Object(s.b)(d.j)],h.prototype,"popupEnabled",void 0),Object(n.a)([Object(s.b)({type:c.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],h.prototype,"popupTemplate",void 0),Object(n.a)([Object(s.b)({types:p.f})],h.prototype,"symbol",void 0),Object(n.a)([Object(s.b)({type:[v.a],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],h.prototype,"labelingInfo",void 0),Object(n.a)([Object(s.b)(d.d)],h.prototype,"labelsVisible",void 0),Object(n.a)([Object(s.b)({type:[O],json:{write:!0}})],h.prototype,"fields",void 0),h=m=Object(n.a)([Object(o.a)("esri.layers.support.FeatureReductionCluster")],h);var g=h;t.a=g},436:function(e,t,i){"use strict";i.r(t);var r,n=i(14),a=i(1),s=(i(4),i(0)),o=i(3),l=i(6),c=i(16),u=i(60),p=i(58),d=i(33),b=i(20),f=i(57),y=i(17),j=(i(24),i(37),i(38),i(61)),m=i(62),O=(i(64),i(75)),v=i(147),h=i(55),g=i(123),w=i(88),S=i(85),x=i(126),I=i(74),F=i(101),T=i(127),V=(i(137),i(191),i(202)),D=(i(223),i(228),i(229),i(224)),R=i(235),E=i(246),z=i(145),N=i(167),k=i(125),U=i(97),M=i(151),C=i(110),L=i(225),P=i(280),q=i(478),A=i(391),J=i(274),_=i(237),G=i(83),W=i(56);let B=r=class extends W.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};Object(n.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"age",void 0),Object(n.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"ageReceived",void 0),Object(n.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"displayCount",void 0),Object(n.a)([Object(c.b)({type:Number,json:{write:!0}})],B.prototype,"maxObservations",void 0),B=r=Object(n.a)([Object(b.a)("esri.layers.support.PurgeOptions")],B);var $=B;const Z=o.a.getLogger("esri.layers.StreamLayer"),Q=new u.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let H=class extends(Object(k.a)(Object(L.a)(Object(C.a)(Object(M.a)(Object(N.a)(Object(F.a)(Object(U.a)(Object(S.a)(w.a))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=j.a.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in a.a))return this.addResolvingPromise(Promise.reject(new y.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=Object(s.h)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch(e=>e).then(()=>this._fetchService(t))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return Object(q.a)(e,t)}writeWebSceneFeatureReduction(e,t,i,r){Object(q.c)(e,t,"layerDefinition.featureReduction",r)}get fieldsIndex(){return new z.a(this.fields)}set renderer(e){Object(O.e)(e,this.fields),this._set("renderer",e)}readRenderer(e,t,i){const r=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(r){const e=Object(E.b)(r,t,i)||void 0;return e||Z.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}if(t.defaultSymbol)return t.types&&t.types.length?new V.a({defaultSymbol:K(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map(e=>({id:e.id,symbol:K(e.symbol,e,i)}))}):new D.a({symbol:K(t.defaultSymbol,t,i)})}writeRenderer(e,t,i,r){Object(E.c)(e,t,i,r)}writeWebSceneRenderer(e,t,i,r){Object(E.c)(e,t,"layerDefinition.drawingInfo.renderer",r)}createPopupTemplate(e){return Object(_.a)(this,e)}createQuery(){const e=new G.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some(t=>(t.name===e&&(i=t.domain),!!i)),i}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var i;if(null==(i=this.timeInfo)||!i.trackIdField)throw new y.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new y.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new y.a("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new y.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await Object(h.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(O.e)(this.renderer,this.fields),Object(O.f)(this.timeInfo,this.fields),Object(J.a)(this,{origin:"service"})}};Object(n.a)([Object(c.b)({type:String})],H.prototype,"copyright",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),Object(n.a)([Object(c.b)({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],H.prototype,"definitionExpression",void 0),Object(n.a)([Object(c.b)({type:String})],H.prototype,"displayField",void 0),Object(n.a)([Object(c.b)({type:x.a})],H.prototype,"elevationInfo",void 0),Object(n.a)([Object(p.a)("featureReduction",["layerDefinition.featureReduction"])],H.prototype,"readFeatureReduction",null),Object(n.a)([Object(f.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:q.b}})],H.prototype,"writeWebSceneFeatureReduction",null),Object(n.a)([Object(c.b)({type:[T.a]})],H.prototype,"fields",void 0),Object(n.a)([Object(c.b)({readOnly:!0})],H.prototype,"fieldsIndex",null),Object(n.a)([Object(c.b)({type:m.a})],H.prototype,"geometryDefinition",void 0),Object(n.a)([Object(c.b)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:Q.read}}})],H.prototype,"geometryType",void 0),Object(n.a)([Object(c.b)(I.d)],H.prototype,"labelsVisible",void 0),Object(n.a)([Object(c.b)({type:[P.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:A.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],H.prototype,"labelingInfo",void 0),Object(n.a)([Object(c.b)(I.e)],H.prototype,"legendEnabled",void 0),Object(n.a)([Object(c.b)({type:["show","hide"]})],H.prototype,"listMode",void 0),Object(n.a)([Object(c.b)({type:l.a})],H.prototype,"maxReconnectionAttempts",void 0),Object(n.a)([Object(c.b)({type:l.a})],H.prototype,"maxReconnectionInterval",void 0),Object(n.a)([Object(c.b)(I.f)],H.prototype,"maxScale",void 0),Object(n.a)([Object(c.b)(I.g)],H.prototype,"minScale",void 0),Object(n.a)([Object(c.b)({type:String})],H.prototype,"objectIdField",void 0),Object(n.a)([Object(c.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],H.prototype,"operationalLayerType",void 0),Object(n.a)([Object(c.b)(I.j)],H.prototype,"popupEnabled",void 0),Object(n.a)([Object(c.b)({type:v.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],H.prototype,"popupTemplate",void 0),Object(n.a)([Object(c.b)({type:$})],H.prototype,"purgeOptions",void 0),Object(n.a)([Object(c.b)({types:R.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],H.prototype,"renderer",null),Object(n.a)([Object(p.a)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(p.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],H.prototype,"readRenderer",null),Object(n.a)([Object(f.a)("renderer")],H.prototype,"writeRenderer",null),Object(n.a)([Object(f.a)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:R.b}})],H.prototype,"writeWebSceneRenderer",null),Object(n.a)([Object(c.b)(I.m)],H.prototype,"screenSizePerspectiveEnabled",void 0),Object(n.a)([Object(c.b)({type:j.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],H.prototype,"spatialReference",void 0),Object(n.a)([Object(c.b)({json:{read:!1}})],H.prototype,"type",void 0),Object(n.a)([Object(c.b)(I.n)],H.prototype,"url",void 0),Object(n.a)([Object(c.b)({type:Number})],H.prototype,"updateInterval",void 0),Object(n.a)([Object(c.b)({type:String})],H.prototype,"webSocketUrl",void 0),H=Object(n.a)([Object(b.a)("esri.layers.StreamLayer")],H);const K=Object(d.b)({types:g.i});var X=H;t.default=X},478:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return u}));var r=i(10),n=i(17),a=i(290),s=i(426),o=i(349);const l={key:"type",base:a.a,typeMap:{selection:o.a}};function c(e,t){const i=(t=t.layerDefinition||t).featureReduction;if(i)switch(i.type){case"selection":return o.a.fromJSON(i);case"cluster":return s.a.fromJSON(i)}return null}function u(e,t,i,a){const s=function(e,t,i){return e?"selection"!==e.type?(i.messages&&i.messages.push(new n.a("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:i})),null):e.write(t,i):null}(e,{},a);s&&Object(r.c)(i,s,t)}},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(102),n=i(73);const a={inches:Object(n.b)(1,"meters","inches"),feet:Object(n.b)(1,"meters","feet"),"us-feet":Object(n.b)(1,"meters","us-feet"),yards:Object(n.b)(1,"meters","yards"),miles:Object(n.b)(1,"meters","miles"),"nautical-miles":Object(n.b)(1,"meters","nautical-miles"),millimeters:Object(n.b)(1,"meters","millimeters"),centimeters:Object(n.b)(1,"meters","centimeters"),decimeters:Object(n.b)(1,"meters","decimeters"),meters:Object(n.b)(1,"meters","meters"),kilometers:Object(n.b)(1,"meters","kilometers"),"decimal-degrees":1/Object(n.h)(1,"meters",r.a.radius)}},89:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i(4);function r(e){}}});