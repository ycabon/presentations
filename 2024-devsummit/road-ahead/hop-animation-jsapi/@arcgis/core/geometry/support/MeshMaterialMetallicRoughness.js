/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import s from"../../Color.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import r from"./MeshMaterial.js";import i from"./MeshTexture.js";import n from"./MeshTextureTransform.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/imageUtils.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/persistableUrlUtils.js";import"../../core/Clonable.js";var l;let u=l=class extends r{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const t=null!=e?e.get(this):null;if(t)return t;const o=new l(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,o),o}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};e([t({type:s,json:{write:!0}})],u.prototype,"emissiveColor",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),e([t({type:n,json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),e([t({type:n,json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),e([t({type:n,json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=l=e([o("esri.geometry.support.MeshMaterialMetallicRoughness")],u);const m=u;export{m as default};
