/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{clone as t}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{e as i}from"./enumeration.js";import{s as p}from"./utils4.js";let l=class extends r{};e([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=e([o("esri.layers.support.BuildingFilterMode")],l);const n=l;var a;let d=a=class extends n{constructor(){super(...arguments),this.type="solid"}clone(){return new a}};e([s({type:["solid"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),d=a=e([o("esri.layers.support.BuildingFilterModeSolid")],d);const c=d;var u;let y=u=class extends n{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new u({edges:t(this.edges)})}};e([i({wireFrame:"wire-frame"})],y.prototype,"type",void 0),e([s(p)],y.prototype,"edges",void 0),y=u=e([o("esri.layers.support.BuildingFilterModeWireFrame")],y);const m=y;var f;let w=f=class extends n{constructor(){super(...arguments),this.type="x-ray"}clone(){return new f}};e([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],w.prototype,"type",void 0),w=f=e([o("esri.layers.support.BuildingFilterModeXRay")],w);const g=w;var j;const x={nonNullable:!0,types:{key:"type",base:n,typeMap:{solid:c,"wire-frame":m,"x-ray":g}},json:{read:e=>{switch(e?.type){case"solid":return c.fromJSON(e);case"wireFrame":return m.fromJSON(e);case"x-ray":return g.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let h=j=class extends r{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new c,this.title=""}clone(){return new j({filterExpression:this.filterExpression,filterMode:t(this.filterMode),title:this.title})}};e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterExpression",void 0),e([s(x)],h.prototype,"filterMode",void 0),e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"title",void 0),h=j=e([o("esri.layers.support.BuildingFilterBlock")],h);const v=h;export{v as B,g as a,c as b};
