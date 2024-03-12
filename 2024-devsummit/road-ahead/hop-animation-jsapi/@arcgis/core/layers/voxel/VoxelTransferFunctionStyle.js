/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{ClonableMixin as e}from"../../core/Clonable.js";import r from"../../core/Collection.js";import{r as s}from"../../chunks/collectionUtils.js";import{JSONSupport as i}from"../../core/JSONSupport.js";import{c as n,l as p}from"../../chunks/mathUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import{I as a}from"../../chunks/ensureType.js";import"../../chunks/colorUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";let h=class extends(e(i)){constructor(){super(...arguments),this.color=null,this.position=0}};o([l({type:t,json:{type:[a],write:{enabled:!0,isRequired:!0}}})],h.prototype,"color",void 0),o([l({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"position",void 0),h=o([c("esri.layers.voxel.VoxelColorStop")],h);const u=h;let y=class extends(e(i)){constructor(){super(...arguments),this.opacity=1,this.position=0}};o([l({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],y.prototype,"opacity",void 0),o([l({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"position",void 0),y=o([c("esri.layers.voxel.VoxelOpacityStop")],y);const f=y;let m=class extends(e(i)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};o([l({type:Boolean,json:{default:!1,write:!0}})],m.prototype,"enabled",void 0),o([l({type:[Number],json:{write:!0}})],m.prototype,"range",void 0),m=o([c("esri.layers.voxel.VoxelRangeFilter")],m);const d=m;var j;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both"}(j||(j={}));let g=class extends(e(i)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(r.ofType(u)),this.opacityStops=new(r.ofType(f))}set colorStops(o){this._set("colorStops",s(o,this._get("colorStops"),r.ofType(u)))}set opacityStops(o){this._set("opacityStops",s(o,this._get("opacityStops"),r.ofType(f)))}getPreviousNext(o,t,e){let r=o;for(;--r>0&&t[r].type!==e&&t[r].type!==j.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==e&&t[s].type!==j.Both;);return[r,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const e=[],r=[];for(const t of this.colorStops){if(!t.color)return o;r.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:j.Color})}if(0===this.opacityStops.length)for(const o of r)e.push({color:o.color,position:o.position});else{for(const o of this.opacityStops){const t=n(o.position,0,1),e=Math.round(255*n(1-o.opacity,0,1));let s=!1;for(const o of r)if(o.type===j.Color&&Math.abs(o.position-t)<1e-5){o.color.a=e,o.type=j.Both,s=!0;break}s||r.push({color:{r:0,g:0,b:0,a:e},position:o.position,type:j.Alpha})}r.sort(((o,t)=>o.position<t.position?-1:1));const o=r.length;for(let t=0;t<o;++t){const e=r[t];if(e.type!==j.Both)if(e.type===j.Color){const[s,i]=this.getPreviousNext(t,r,j.Alpha);if(-1!==s&&i!==o){const o=(e.position-r[s].position)/(r[i].position-r[s].position);e.color.a=Math.round(p(r[s].color.a,r[i].color.a,o))}else e.color.a=-1!==s?r[s].color.a:r[i].color.a}else{const[s,i]=this.getPreviousNext(t,r,j.Color);if(-1!==s&&i!==o){const o=(e.position-r[s].position)/(r[i].position-r[s].position),t=r[s].color,n=r[i].color;b.forEach((r=>{e.color[r]=Math.round(p(t[r],n[r],o))}))}else-1!==s?b.forEach((o=>{e.color[o]=r[s].color[o]})):b.forEach((o=>{e.color[o]=r[i].color[o]}))}}for(const o of r)e.push({color:o.color,position:o.position})}e[0].position=0,e[e.length-1].position=1;let s=0,i=1;for(let r=0;r<this._colorMapSize;++r){const l=r/this._colorMapSize;for(;l>e[i].position;)s=i++;const c=(l-e[s].position)/(e[i].position-e[s].position),a=e[s].color,h=e[i].color,u=new t;b.forEach((o=>{u[o]=Math.round(p(a[o],h[o],c))})),u.a=n(1-p(a.a,h.a,c)/255,0,1),o.push(u)}return o}getColorForContinuousDataValue(o,t){const e=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||e.length<256)return null;let r=this.stretchRange[0],s=this.stretchRange[1];if(r>s){const o=r;r=s,s=o}o=n(o,r,s);const i=e[Math.round((o-r)/(s-r)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};o([l({type:["linear","nearest"],json:{write:!0}})],g.prototype,"interpolation",void 0),o([l({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"stretchRange",void 0),o([l({type:r.ofType(u),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],g.prototype,"colorStops",null),o([l({type:r.ofType(f),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],g.prototype,"opacityStops",null),o([l({type:d,json:{write:!0}})],g.prototype,"rangeFilter",void 0),o([l({type:[t],clonable:!1,json:{read:!1}})],g.prototype,"rasterizedTransferFunction",null),g=o([c("esri.layers.voxel.VoxelTransferFunctionStyle")],g);const S=g,b=["r","g","b"];export{S as default};
