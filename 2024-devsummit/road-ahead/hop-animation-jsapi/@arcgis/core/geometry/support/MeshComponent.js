/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{L as e}from"../../chunks/Logger.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{b as a}from"../../chunks/ensureType.js";import l from"./MeshMaterial.js";import c from"./MeshMaterialMetallicRoughness.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"./MeshTexture.js";import"../../chunks/imageUtils.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/persistableUrlUtils.js";import"./MeshTextureTransform.js";import"../../core/Clonable.js";var u;let p=u=class extends r{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return h(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},e.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&e.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),h(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},e.getLogger(this))}castUv(t){return h(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},e.getLogger(this))}castNormal(t){return h(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},e.getLogger(this))}castTangent(t){return h(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},e.getLogger(this))}clone(){const t={position:o(this.position),uv:o(this.uv),normal:o(this.normal),tangent:o(this.tangent),color:o(this.color)};return new u(t)}clonePositional(){const t={position:o(this.position),normal:o(this.normal),tangent:o(this.tangent),uv:this.uv,color:this.color};return new u(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};function m(t,r,o,e){const{loggerTag:s,stride:i}=r;return t.length%i!=0?(e.error(s,`Invalid array length, expected a multiple of ${i}`),new o([])):t}function h(t,r,o,e,s){if(!t)return t;if(t instanceof r)return m(t,e,r,s);for(const i of o)if(t instanceof i)return m(new r(t),e,r,s);if(Array.isArray(t))return m(new r(t),e,r,s);{const e=o.map((t=>`'${t.name}'`));return s.error(`Failed to set property, expected one of ${e}, but got ${t.constructor.name}`),new r([])}}function g(t,r,o){r[o]=function(t){const r=new Array(t.length);for(let o=0;o<t.length;o++)r[o]=t[o];return r}(t)}var y;t([s({json:{write:g}})],p.prototype,"color",void 0),t([i("color")],p.prototype,"castColor",null),t([s({nonNullable:!0,json:{write:g}})],p.prototype,"position",void 0),t([i("position")],p.prototype,"castPosition",null),t([s({json:{write:g}})],p.prototype,"uv",void 0),t([i("uv")],p.prototype,"castUv",null),t([s({json:{write:g}})],p.prototype,"normal",void 0),t([i("normal")],p.prototype,"castNormal",null),t([s({json:{write:g}})],p.prototype,"tangent",void 0),t([i("tangent")],p.prototype,"castTangent",null),p=u=t([n("esri.geometry.support.MeshVertexAttributes")],p);let j=y=class extends r{static from(t){return a(y,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return h(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},e.getLogger(this))}castMaterial(t){return a(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?c:l,t)}clone(){return new y({faces:o(this.faces),shading:this.shading,material:o(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const e={faces:o(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new y(e)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};t([s({json:{write:!0}})],j.prototype,"faces",void 0),t([i("faces")],j.prototype,"castFaces",null),t([s({type:l,json:{write:!0}})],j.prototype,"material",void 0),t([i("material")],j.prototype,"castMaterial",null),t([s()],j.prototype,"name",void 0),t([s({type:String,json:{write:!0}})],j.prototype,"shading",void 0),t([s({type:Boolean})],j.prototype,"trustSourceNormals",void 0),j=y=t([n("esri.geometry.support.MeshComponent")],j);const d=j;export{p as M,d as default};