/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as e}from"./asyncUtils.js";import t from"../core/Error.js";import{b as i}from"./maybe.js";import{whenOrAbort as s,throwIfAbortError as o}from"../core/promiseUtils.js";import{g as l}from"./unitUtils.js";import n from"../geometry/Multipoint.js";import a from"../geometry/Point.js";import r from"../geometry/Polyline.js";import{initializeProjection as c,project as u}from"../geometry/projection.js";import{d as p,c as m,m as h}from"./aaBoundingRect.js";import{MultiTileElevationSampler as f}from"../layers/support/ElevationSampler.js";import{E as d}from"./ElevationSamplerData.js";import{T as y}from"./TileKey.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/lang.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"./zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./extentUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./SimpleObservable.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";class T{constructor(e,t=null){if(this.tile=e,null!=t&&null!=e){const i=e.extent;this._samplerData=new d(t,i)}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(e,t){if(null==this._samplerData)return;const{safeWidth:i,data:s,dx:o,dy:l,y1:n,x0:a}=this._samplerData,{width:r,values:c,noDataValue:u}=s,p=g(l*(n-t),0,i),m=g(o*(e-a),0,i),h=Math.floor(p),f=Math.floor(m),d=h*r+f,y=d+r,T=c[d],v=c[y],w=c[d+1],x=c[y+1];if(T!==u&&v!==u&&w!==u&&x!==u){const e=m-f,t=T+(w-T)*e;return t+(v+(x-v)*e-t)*(p-h)}}}function g(e,t,i){return e<t?t:e>i?i:e}class v{async queryAll(e,i,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=w.fromGeometry(i);let l=!1;s&&s.returnSampleInfo||(l=!0);const n={...q,...s,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,n),r=await this._queryAllContinue(e,a,n);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,i,s){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof w)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new t("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...q,...s},l=new j(e,i.spatialReference,o),n=o.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,i,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,i,s){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const o={...q,...s};return this._createSampler(e,i,o)}async createSamplerAll(e,i,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const o={...q,...s,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],i,o);return this._createSamplerAllContinue(e,i,l,o)}async _createSampler(e,t,i,s){const o=i.signal;await e.load({signal:o});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await c([{source:l,dest:n}],{signal:o}),t=u(t,n));const a=new E(e,t,i,s);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new f(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const o=i.samplers.filter((e=>!e.tile.hasNoDataValues)).map((e=>p(e.extent))),l=await this._createSampler(e[e.length-1],t,s,o);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new f(n,s.noDataValue);return this._createSamplerAllContinue(e,t,a,s)}async _queryAllContinue(e,t,s){const o=e.pop(),l=t.geometry.coordinates,n=t.sampleInfo;i(n);const a=[],r=[];for(let t=0;t<l.length;t++){const i=n[t];i.demResolution>=0?i.source||(i.source=o):e.length&&(a.push(l[t]),r.push(t))}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,s),p=u.sampleInfo;if(!p)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{l[e].z=u.geometry.coordinates[t].z,n[e].demResolution=p[t].demResolution})),this._queryAllContinue(e,t,s)}async _createQueryResult(e,t){const s=await e.geometry.project(e.outSpatialReference,t);i(s);const o={geometry:s.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(o.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),o}async _createGeometryDescriptor(e,i,s){let o;const l=e.layer.tileInfo.spatialReference;if(i instanceof w?o=await i.project(l,s):(await c([{source:i.spatialReference,dest:l}],{signal:s}),o=u(i,l)),!o)throw new t("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=w.fromGeometry(o)}async _selectTiles(e,i){"geometry"===e.type&&this._preselectOutsideLayerExtent(e);const s=e.options.demResolution;if("number"==typeof s)this._selectTilesClosestResolution(e,s);else if("finest-contiguous"===s)await this._selectTilesFinestContiguous(e,i);else{if("auto"!==s)throw new t("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i)}}_preselectOutsideLayerExtent(e){if(null==e.layer.fullExtent)return;const t=new T(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,o=e.y;(s<i.xmin||s>i.xmax||o<i.ymin||o>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e,t){const i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const{tileInfo:i,tilemapCache:s}=e.layer,o=t/l(i.spatialReference),n=D(i,s);let a=n[0],r=0;for(let e=1;e<n.length;e++){const t=n[e];Math.abs(t.resolution-o)<Math.abs(a.resolution-o)&&(a=t,r=e)}return r}async _selectTilesFinestContiguous(e,t){const{tileInfo:i,tilemapCache:s}=e.layer,o=R(i,s,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,o,t)}async _selectTilesFinestContiguousAt(e,i,l){const n=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a=n.tilemapCache,r=e.getTilesToFetch();try{if(a&&!I(a))await s(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:l})))),l);else if(await this._populateElevationTiles(e,l),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new t("elevation-query:has-unavailable-tiles")}catch(t){o(t),await this._selectTilesFinestContiguousAt(e,i-1,l)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),o={},l=e.options.cache,n=e.options.noDataValue,a=i.map((async i=>{if(null==i.id)return;const s=`${e.layer.uid}:${i.id}:${n}`,a=null!=l?l.get(s):null,r=null!=a?a:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:n,signal:t});null!=l&&l.put(s,r),o[i.id]=new T(i,r)}));await s(Promise.allSettled(a),t),e.populateElevationTiles(o)}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const l=t.layer.tilemapCache;if(!l||I(l))return this._selectTilesAutoPrefetchUpsample(t,i);const n=t.getTilesToFetch(),a={},r=n.map((async t=>{const s=new y(null,0,0,0,m()),n=await e(l.fetchAvailabilityUpsample(t.level,t.row,t.col,s,{signal:i}));!1!==n.ok?null!=t.id&&(a[t.id]=s):o(n.error)}));await s(Promise.all(r),i),t.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},o=e=>{null!=e.id&&(e.id in s?s[e.id]++:(s[e.id]=1,i++))},l=e=>{if(null==e.id)return;const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(o,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(l(s),t.upsampleTile(s)&&(n=!0),o(s))}),l),n););}_selectTilesAutoFinest(e){const{tileInfo:t,tilemapCache:i}=e.layer,s=R(t,i,e.options.minDemResolution);e.selectTilesAtLOD(s,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);null!=e?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=l(t.spatialReference);return e.geometry.coordinates.map((s=>{let o=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(o=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:o}}))}}class w{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new w;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await c([{source:this.spatialReference,dest:e}],{signal:t});const i=new n({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),s=u(i,e);if(!s)return null;const o=this.coordinates.map(((e,t)=>{const i=e.clone(),o=s.points[t];return i.x=o[0],i.y=o[1],i})),l=this.clone(o);return l.spatialReference=e,l}static fromGeometry(e){const t=new w;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof w)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?[new x(i.x,i.y,i.z,i.m)]:s?[new x(i.x,i.y,i.z)]:o?[new x(i.x,i.y,null,i.m)]:[new x(i.x,i.y)],t._exporter=(t,i)=>e.hasM?new a(t[0].x,t[0].y,t[0].z,t[0].m,i):new a(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?i.points.map((e=>new x(e[0],e[1],e[2],e[3]))):s?i.points.map((e=>new x(e[0],e[1],e[2]))):o?i.points.map((e=>new x(e[0],e[1],null,e[2]))):i.points.map((e=>new x(e[0],e[1]))),t._exporter=(t,i)=>e.hasM?new n({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatialReference:i}):new n(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,s=[],o=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(o.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)s.push(new x(t[0],t[1],t[2],t[3]));else if(l)for(const t of e)s.push(new x(t[0],t[1],t[2]));else if(n)for(const t of e)s.push(new x(t[0],t[1],null,t[2]));else for(const t of e)s.push(new x(t[0],t[1]));t.coordinates=s,t._exporter=(t,i)=>{const s=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=o.map((e=>s.slice(e[0],e[1])));return new r({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class x{constructor(e,t,i=null,s=null,o=null,l=null){this.x=e,this.y=t,this.z=i,this.m=s,this.tile=o,this.elevationTile=l}clone(){return new x(this.x,this.y,this.z,this.m)}}class _{constructor(e,t){this.layer=e,this.options=t}}class j extends _{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const{tileInfo:t,tilemapCache:i}=this.layer,s=D(t,i)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(s,e.x,e.y)))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const i=t.tile?.id;t.tile=i?e[i]:null}}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;if(!s)continue;const o=i.tile?.id;i.elevationTile||!o||e[o]||(e[o]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class E extends _{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:i}=this.layer,s=D(t,i);if(!e)return s.length-1;const o=this.extent;if(null==o)return-1;for(let i=s.length-1;i>=0;i--){const l=s[i],n=l.resolution*t.size[0],a=l.resolution*t.size[1];if(Math.ceil(o.width/n)*Math.ceil(o.height/a)<=e)return i}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this._candidateTiles.push(i)})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const o of e){const e=o.id;e&&!i[e]?(i[e]=o,s.push(o)):t&&t(o)}const o=s.sort(((e,t)=>e.level-t.level));return o.filter(((e,i)=>{for(let s=0;s<i;s++){const i=o[s].extent;if(i&&e.extent&&h(i,e.extent))return t&&t(e),!1}return!0}))}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:i,tilemapCache:s}=this.layer,o=D(i,s)[e],l=i.tileAt(o.level,t.xmin,t.ymin),n=l.extent;if(null==n)return;const a=o.resolution*i.size[0],r=o.resolution*i.size[1],c=Math.ceil((t.xmax-n[0])/a),u=Math.ceil((t.ymax-n[1])/r);for(let e=0;e<u;e++)for(let t=0;t<c;t++){const s=new y(null,l.level,l.row-e,l.col+t);i.updateTileInfo(s),this._tileIsMasked(s)||this._candidateTiles.push(s)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&h(t,e.extent)))}}function R(e,t,i=0){const s=D(e,t);let o=s.length-1;if(i>0){const t=i/l(e.spatialReference),n=s.findIndex((e=>e.resolution<t));0===n?o=0:n>0&&(o=n-1)}return o}const q={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function D(e,t){const i=e.lods;if(I(t)){const{effectiveMinLOD:e,effectiveMaxLOD:s}=t;return i.filter((t=>t.level>=e&&t.level<=s))}return i}function I(e){return null!=e?.tileInfo}export{v as ElevationQuery,w as GeometryDescriptor,R as getFinestLodIndex};