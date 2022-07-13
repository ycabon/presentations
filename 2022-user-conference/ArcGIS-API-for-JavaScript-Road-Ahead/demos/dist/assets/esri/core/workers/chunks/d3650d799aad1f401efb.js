"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1491],{17017:(e,t,r)=>{r.d(t,{N:()=>s});var n=r(43697),o=r(5600),i=(r(67676),r(80442),r(75215),r(52011));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,n._)([(0,o.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,n._)([(0,i.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},34760:(e,t,r)=>{r.d(t,{Q:()=>h});var n=r(43697),o=r(92604),i=r(95330),s=r(5600),l=(r(67676),r(80442),r(75215),r(52011)),a=r(46791),c=(r(20102),r(26258),r(87538));const p=new a.Z,u=new WeakMap;function d(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function b(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:b(t,e%t):0}let f=0,w=0;function m(){const e=Date.now();for(const t of p)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,c.EH)((()=>{const e=Date.now();let t=0;for(const r of p)t=b(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?u.get(r)||u.set(r,e):u.delete(r);if(t!==w){if(w=t,clearInterval(f),0===w)return void(f=0);f=setInterval(m,w)}}));const h=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,i.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{!function(e){d(e)&&p.push(e)}(this)}),(()=>{}))}destroy(){d(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,i.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{o.Z.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,n._)([(0,s.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,n._)([(0,s.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,n._)([(0,s.Cb)()],t.prototype,"refreshParameters",null),t=(0,n._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(43697),o=r(2368),i=r(35454),s=r(96674),l=r(5600),a=(r(67676),r(80442),r(75215),r(52011));const c=new i.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends((0,o.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,n._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"name",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"description",void 0),(0,n._)([(0,l.Cb)({json:{read:c.read,write:c.write}})],p.prototype,"drawingTool",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"thumbnail",void 0),p=(0,n._)([(0,a.j)("esri.layers.support.FeatureTemplate")],p);const u=p},16451:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(43697),o=r(2368),i=r(96674),s=r(5600),l=(r(67676),r(80442),r(75215),r(71715)),a=r(52011),c=r(30556),p=r(72729),u=r(70082);let d=class extends((0,o.J)(i.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,p.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,n._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"id",void 0),(0,n._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,n._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"domains",void 0),(0,n._)([(0,l.r)("domains")],d.prototype,"readDomains",null),(0,n._)([(0,c.c)("domains")],d.prototype,"writeDomains",null),(0,n._)([(0,s.Cb)({type:[u.Z],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,n._)([(0,a.j)("esri.layers.support.FeatureType")],d);const b=d},2319:(e,t,r)=>{r.d(t,{Z:()=>j});var n,o=r(43697),i=r(78223),s=r(35454),l=r(96674),a=r(22974),c=r(62357),p=r(5600),u=(r(75215),r(71715)),d=r(52011),b=r(30556),f=(r(67676),r(80442),r(8813));let w=n=class extends l.wq{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?(0,f.dI)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=(0,f.dI)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}};(0,o._)([(0,p.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],w.prototype,"expression",void 0),(0,o._)([(0,u.r)("expression",["expression","value"])],w.prototype,"readExpression",null),(0,o._)([(0,b.c)("expression")],w.prototype,"writeExpression",null),(0,o._)([(0,p.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],w.prototype,"title",void 0),(0,o._)([(0,p.Cb)({json:{read:!1,write:!1}})],w.prototype,"value",void 0),w=n=(0,o._)([(0,d.j)("esri.layers.support.LabelExpressionInfo")],w);const m=w;var h=r(20256),y=r(4095),v=r(77987),g=r(78724),x=r(58333);v.Z.fromJSON(x.I4),y.Z.fromJSON(x.ET),h.Z.fromJSON(x.lF);const E=g.Z.fromJSON(x.qP);v.Z.fromJSON(x.eG),y.Z.fromJSON(x.wW),h.Z.fromJSON(x.lj);var C,S=r(21878);const L=new s.X({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function _(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function P(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let I=C=class extends l.wq{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=E,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;const n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){const e=r(t[n[0]],n[1],n[2]),o=n[3],i=r(t[n[4]],n[5],n[6]);switch(o){case"AND":return e&&i;case"OR":return e||i}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,t){const r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,f.z7)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const t=(0,f.el)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&_(n))e=new m({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(n);o.expression&&(t[r]=o)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return(0,f.hV)(this)}getLabelExpressionArcade(){return(0,f.YI)(this)}getLabelExpressionSingleField(){return(0,f.UO)(this)}hash(){return JSON.stringify(this)}clone(){return new C({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,a.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,a.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],I.prototype,"name",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],I.prototype,"allowOverrun",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],I.prototype,"deconflictionStrategy",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===r?.origin&&P(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],I.prototype,"labelExpression",void 0),(0,o._)([(0,u.r)("labelExpression")],I.prototype,"readLabelExpression",null),(0,o._)([(0,b.c)("labelExpression")],I.prototype,"writeLabelExpression",null),(0,o._)([(0,p.Cb)({type:m,json:{write:{overridePolicy:(e,t,r)=>function(e){return _(e)||P(e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],I.prototype,"labelExpressionInfo",void 0),(0,o._)([(0,b.c)("labelExpressionInfo")],I.prototype,"writeLabelExpressionInfo",null),(0,o._)([(0,p.Cb)({type:L.apiValues,json:{type:L.jsonValues,read:L.read,write:L.write}})],I.prototype,"labelPlacement",void 0),(0,o._)([(0,p.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"labelPosition",void 0),(0,o._)([(0,p.Cb)({type:Number})],I.prototype,"maxScale",void 0),(0,o._)([(0,b.c)("maxScale")],I.prototype,"writeMaxScale",null),(0,o._)([(0,p.Cb)({type:Number})],I.prototype,"minScale",void 0),(0,o._)([(0,b.c)("minScale")],I.prototype,"writeMinScale",null),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"repeatLabel",void 0),(0,o._)([(0,p.Cb)({type:Number,cast:c.t_,json:{write:!0,origins:{"web-scene":{write:!1}}}})],I.prototype,"repeatLabelDistance",void 0),(0,o._)([(0,p.Cb)({types:i.yK,json:{origins:{"web-scene":{types:i.S6,write:S.vX,default:null}},write:S.vX,default:null}})],I.prototype,"symbol",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],I.prototype,"useCodedValues",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],I.prototype,"where",void 0),I=C=(0,o._)([(0,d.j)("esri.layers.support.LabelClass")],I);const j=I},8813:(e,t,r)=>{r.d(t,{UO:()=>b,YI:()=>d,dI:()=>f,el:()=>v,hV:()=>u,z7:()=>p});var n=r(19153);const o="__begin__",i="__end__",s=new RegExp(o,"ig"),l=new RegExp(i,"ig"),a=new RegExp("^"+o,"i"),c=new RegExp(i+"$","i");function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function u(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function d(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return f(t.expression);case"arcade":return t.expression}return null}function b(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(w);return t&&t[1].trim()||null}(t.expression);case"arcade":return v(t.expression)}return null}function f(e){let t;return e?(t=(0,n.gx)(e,(e=>o+'$feature["'+e+'"]'+i)),t=a.test(t)?t.replace(a,""):'"'+t,t=c.test(t)?t.replace(c,""):t+'"',t=t.replace(s,'" + ').replace(l,' + "')):t='""',t}const w=/^\s*\{([^}]+)\}\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,h=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,y=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function v(e){if(!e)return null;let t=m.exec(e)||h.exec(e);return t?t[1]||t[3]:(t=y.exec(e),t?t[2]:null)}},30707:(e,t,r)=>{r.d(t,{a:()=>u,r:()=>c});var n=r(20102),o=r(22974),i=r(92604),s=r(2319);const l=i.Z.getLogger("esri.layers.support.labelingInfo"),a=/\[([^\[\]]+)\]/gi;function c(e,t,r){return e?e.map((e=>{const n=new s.Z;if(n.read(e,r),n.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;n.labelExpression=n.labelExpression.replace(a,((t,r)=>`[${function(e,t){if(!t)return e;const r=e.toLowerCase();for(let e=0;e<t.length;e++){const n=t[e].name;if(n.toLowerCase()===r)return n}return e}(r,e)}]`))}return n})):null}const p={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function u(e,t){const r=(0,o.d9)(e);return r.some((e=>function(e,t){const r=e.labelPlacement,o=p[t];if(!e.symbol)return l.warn("No ILabelClass symbol specified."),!0;if(!o)return l.error(new n.Z("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!o.includes(r)){const n=o[0];r&&l.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:r}},32163:(e,t,r)=>{r.d(t,{eZ:()=>u});var n=r(51773),o=r(35671),i=r(84649),s=(r(63801),r(48074),r(38745),r(9190)),l=(r(10214),r(44951),r(422)),a=r(63061);const c=["oid","global-id"],p=["oid","global-id","guid"];function u({displayField:e,editFieldsInfo:t,fields:r,objectIdField:a,title:c},p){if(!r)return null;const u=function({editFieldsInfo:e,fields:t,objectIdField:r},n){return function(e,t){const r=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===r&&(e=e.slice()),e.sort(f),e}(t,n?.ignoreFieldTypes||v).map((t=>new l.Z({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:h(t),visible:b(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:n?.visibleFieldNames})})))}({editFieldsInfo:t,fields:r,objectIdField:a},p);if(!u.length)return null;const d=function(e){const t=(0,o.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r}({titleBase:c,fields:r,displayField:e}),w=[new s.Z,new i.Z];return new n.Z({title:d,content:w,fieldInfos:u})}const d=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],b=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:n})=>n?n.has(e.name):!(w(e.name,t)||r&&e.name===r||c.includes(e.type)||d.some((t=>t.test(e.name))));function f(e,t){return"oid"===e.type?-1:"oid"===t.type?1:y(e)?-1:y(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function w(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:n,editDateField:o,editorField:i}=t;return[r&&r.toLowerCase(),n&&n.toLowerCase(),o&&o.toLowerCase(),i&&i.toLowerCase()].includes(e.toLowerCase())}function m(e,t){return e.editable&&!p.includes(e.type)&&!w(e.name,t)}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.Z({digitSeparator:!0,places:0});case"double":return new a.Z({digitSeparator:!0,places:2});case"date":return new a.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,o.Ec)(e.name)?new a.Z({digitSeparator:!0,places:0}):null}}function y(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}const v=["geometry","blob","raster","guid","xml"]}}]);