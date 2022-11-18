import { n6 as u, ck as l, u as e, y, mL as T, d6 as o, cD as e$1, z as n, n7 as l$1, e9 as j$1, n8 as t, b7 as l$2, eX as w, t as t$1, m as r, n9 as n$1, L as e$2, na as on, w as w$1, my as c$2, mz as O, mZ as r$1, eb as b } from './_virtual_index-1ea2035a.js';
import { c as c$1 } from './Analysis-a31c916e.js';
import { u as u$1 } from './LengthDimension-f85d48b3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c=class extends(u(l$1)){constructor(e){super(e),this.type="simple",this.color=new l("black"),this.lineSize=2,this.fontSize=10,this.textColor=new l("black"),this.textBackgroundColor=new l([255,255,255,.6]);}};e([y({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),e([y({type:l,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"color",void 0),e([y({type:Number,cast:o,nonNullable:!0,range:{min:e$1(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),e([y({type:Number,cast:o,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),e([y({type:l,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),e([y({type:l,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=e([n("esri.analysis.DimensionSimpleStyle")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h$1=j$1.ofType(u$1);let g=class extends c$1{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null;}initialize(){this.addHandles(l$2((()=>this._computeExtent()),(e=>{(t$1(e)||t$1(e.pending))&&this._set("extent",r(e)?e.extent:null);}),w));}get dimensions(){return this._get("dimensions")||new h$1}set dimensions(e){this._set("dimensions",n$1(e,this.dimensions,h$1));}get spatialReference(){for(const e of this.dimensions){if(r(e.startPoint))return e.startPoint.spatialReference;if(r(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return r(e)?e$2(e.pending):null}_computeExtent(){const e=this.spatialReference;if(t$1(e))return {pending:null,extent:null};const t=[];for(const s of this.dimensions)r(s.startPoint)&&t.push(s.startPoint),r(s.endPoint)&&t.push(s.endPoint);const n=on(t,e);if(r(n.pending))return {pending:n.pending,extent:null};let o=null;return r(n.geometries)&&(o=n.geometries.reduce(((e,t)=>t$1(e)?r(t)?w$1.fromPoint(t):null:r(t)?e.union(w$1.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll();}};e([y({type:["dimension"]})],g.prototype,"type",void 0),e([y({cast:t,type:h$1,nonNullable:!0})],g.prototype,"dimensions",null),e([y({readOnly:!0})],g.prototype,"spatialReference",null),e([y({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],g.prototype,"style",void 0),e([y({value:null,readOnly:!0})],g.prototype,"extent",void 0),e([y({readOnly:!0})],g.prototype,"requiredPropertiesForEditing",null),g=e([n("esri.analysis.DimensionAnalysis")],g);const j=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let h=class extends(c$2(O(b))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new j,this.opacity=1,e){const{source:s,style:r}=e;s&&r&&(s.style=r);}}initialize(){this.addHandles([l$2((()=>this.source),((e,s)=>{r(s)&&s.parent===this&&(s.parent=null),r(e)&&(e.parent=this);}),w)]);}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return e$2(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e;}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new j);}get analysis(){return this.source}set analysis(e){this.source=e;}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e;}writeDimensions(e,s,r$1,t){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>r(e)&&r(s))).map((e=>e.toJSON(t))).toJSON();}};e([y({json:{read:!1},readOnly:!0})],h.prototype,"type",void 0),e([y({type:["ArcGISDimensionLayer"]})],h.prototype,"operationalLayerType",void 0),e([y({nonNullable:!0})],h.prototype,"source",void 0),e([y({readOnly:!0})],h.prototype,"spatialReference",null),e([y({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],h.prototype,"style",null),e([y({readOnly:!0})],h.prototype,"fullExtent",null),e([y({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],h.prototype,"opacity",void 0),e([y({type:["show","hide"]})],h.prototype,"listMode",void 0),e([y({type:j$1.ofType(u$1),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],h.prototype,"dimensions",null),e([r$1("web-scene","dimensions")],h.prototype,"writeDimensions",null),h=e([n("esri.layers.DimensionLayer")],h);const f=h;

export { f as default };