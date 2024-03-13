/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../core/Error.js";import{d as i,f as t,i as s}from"./mathUtils.js";import{O as r,Q as n,g as l}from"./unitUtils.js";import o from"../geometry/Extent.js";import{canProjectToWGS84ComparableLonLat as a}from"../geometry/projection.js";import h from"../geometry/SpatialReference.js";import{c}from"./aaBoundingRect.js";import{x2lon as m,y2lat as u}from"../geometry/support/webMercatorUtils.js";import p from"../layers/support/LOD.js";import g from"../layers/support/TileInfo.js";import f from"../geometry/Point.js";class x{constructor(e){const i=x.checkUnsupported(e);if(null!=i)throw i;const t=e;this.spatialReference=t.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=a(this.spatialReference)||r(this.spatialReference)||n(this.spatialReference),this.origin=[t.origin.x,t.origin.y],this.pixelSize=t.size[0],this.dpi=t.dpi;const s=t.lods.reduce(((e,i,t)=>(i.level<e.min&&(e.min=i.level,e.minIndex=t),e.max=Math.max(e.max,i.level),e)),{min:1/0,minIndex:0,max:-1/0}),l=t.lods[s.minIndex],o=2**l.level;let h=l.resolution*o,c=l.scale*o;this.levels=new Array(s.max+1);for(let e=0;e<this.levels.length;e++)this.levels[e]={resolution:h,scale:c,tileSize:[h*t.size[0],h*t.size[1]]},h/=2,c/=2}clone(){return new x(this.toTileInfo())}toTileInfo(){return new g({dpi:this.dpi,origin:new f({x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference}),size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,i)=>new p({level:i,scale:e.scale,resolution:e.resolution})))})}getExtent(e,i,t,s){const r=this.levels[e],n=r.tileSize[0],l=r.tileSize[1];s[0]=this.origin[0]+t*n,s[2]=this.origin[0]+(t+1)*n,s[3]=this.origin[1]-i*l,s[1]=this.origin[1]-(i+1)*l}convertExtentToRadians(e,t){this._isWebMercator?(t[0]=m(e[0]),t[1]=u(e[1]),t[2]=m(e[2]),t[3]=u(e[3])):this._isGCS&&(t[0]=i(e[0]),t[1]=i(e[1]),t[2]=i(e[2]),t[3]=i(e[3]))}getExtentGeometry(e,i,t,s=new o){return this.getExtent(e,i,t,w),s.spatialReference=this.spatialReference,s.xmin=w[0],s.ymin=w[1],s.xmax=w[2],s.ymax=w[3],s.zmin=void 0,s.zmax=void 0,s}ensureMaxLod(e){if(null==e)return!1;let i=!1;for(;this.levels.length<=e;){const e=this.levels[this.levels.length-1],t=e.resolution/2;this.levels.push({resolution:t,scale:e.scale/2,tileSize:[t*this.pixelSize,t*this.pixelSize]}),i=!0}return i}capMaxLod(e){this.levels.length>e+1&&(this.levels.length=e+1)}getMaxLod(){return this.levels.length-1}scaleAtLevel(e){return this.levels[0].scale/2**e}levelAtScale(e){const i=this.levels[0].scale;return e>=i?0:Math.log(i/e)*Math.LOG2E}resolutionAtLevel(e){return this.levels[0].resolution/2**e}compatibleWith(e){if(!(e instanceof x)){if(x.checkUnsupported(e))return!1;e=new x(e)}if(!e.spatialReference.equals(this.spatialReference))return!1;if(e.pixelSize!==this.pixelSize)return!1;const i=Math.min(this.levels.length,e.levels.length)-1,s=this.levels[i].resolution;let r=.5*s;return!(!t(e.origin[0],this.origin[0],r)||!t(e.origin[1],this.origin[1],r))&&(r=.5*s/2**i/this.pixelSize*12,t(s,e.levels[i].resolution,r))}rootTilesInExtent(e,i=null,t=1/0){const s=new Array,r=this.levels[0].tileSize;if(null==e||0===r[0]||0===r[1])return s;x.computeRowColExtent(e,r,this.origin,w);let n=w[1],l=w[3],o=w[0],a=w[2];const h=a-o,c=l-n;if(h*c>t){const e=Math.floor(Math.sqrt(t));c>e&&(n=n+Math.floor(.5*c)-Math.floor(.5*e),l=n+e),h>e&&(o=o+Math.floor(.5*h)-Math.floor(.5*e),a=o+e)}for(let e=n;e<l;e++)for(let i=o;i<a;i++)s.push([0,e,i]);return null!=i&&(i[0]=this.origin[0]+o*r[0],i[1]=this.origin[1]-l*r[1],i[2]=this.origin[0]+a*r[0],i[3]=this.origin[1]-n*r[1]),s}static computeRowColExtent(e,i,t,s){const r=.001*(e[2]-e[0]+(e[3]-e[1]));s[0]=Math.max(0,Math.floor((e[0]+r-t[0])/i[0])),s[2]=Math.max(0,Math.ceil((e[2]-r-t[0])/i[0])),s[1]=Math.max(0,Math.floor((t[1]-e[3]+r)/i[1])),s[3]=Math.max(0,Math.ceil((t[1]-e[1]-r)/i[1]))}static isPowerOfTwo(e){const i=e.lods,t=i[0].resolution*2**i[0].level;return!i.some((e=>!s(e.resolution,t/2**e.level)))}static hasGapInLevels(e){const i=e.lods.map((e=>e.level));i.sort(((e,i)=>e-i));for(let e=1;e<i.length;e++)if(i[e]!==i[0]+e)return!0;return!1}static tileSizeSupported(e){const i=e.size[1];return i===e.size[0]&&0==(i&i-1)&&i>=128&&i<=512}static hasOriginPerLODs(e){const i=e.origin;return e.lods.some((e=>null!=e.origin&&(e.origin[0]!==i.x||e.origin[1]!==i.y)))}static getMissingTileInfoError(){return new e("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}static checkUnsupported(i){return null==i?v():i.lods.length<1?new e("tilingscheme:generic","Tiling scheme must have at least one level"):x.isPowerOfTwo(i)?x.hasGapInLevels(i)?new e("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):x.tileSizeSupported(i)?x.hasOriginPerLODs(i)?new e("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new e("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new e("tilingscheme:power-of-two","Tiling scheme must be power of two")}static fromExtent(e,i){const t=e[2]-e[0],s=e[3]-e[1],r=l(i),n=1.2*Math.max(t,s),o=256,a=new x(new g({size:[o,o],origin:new f({x:e[0]-.5*(n-t),y:e[3]+.5*(n-s)}),lods:[new p({level:0,resolution:n/o,scale:1/(o/96*.0254/(n*r))})],spatialReference:i}));return a.ensureMaxLod(20),a}static makeWebMercatorAuxiliarySphere(e){const i=new x(x.WebMercatorAuxiliarySphereTileInfo);return i.ensureMaxLod(e),i}static makeGCSWithTileSize(e,i=256,t=16){const s=256/i,r=new x(new g({size:[i,i],origin:new f({x:-180,y:90,spatialReference:e}),spatialReference:e,lods:[new p({level:0,resolution:.703125*s,scale:295497598.570834*s})]}));return r.ensureMaxLod(t),r}get test(){return{isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}function v(){return new e("tilingscheme:tile-info-missing","Tiling scheme must have tiling information")}x.WebMercatorAuxiliarySphereTileInfo=new g({size:[256,256],origin:new f({x:-20037508.342787,y:20037508.342787,spatialReference:h.WebMercator}),spatialReference:h.WebMercator,lods:[new p({level:0,resolution:156543.03392800014,scale:591657527.591555})]}),x.WebMercatorAuxiliarySphere=x.makeWebMercatorAuxiliarySphere(19);const w=c();export{x as T,v as g};