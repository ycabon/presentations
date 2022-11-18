"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5853],{17445:(e,t,r)=>{r.d(t,{N1:()=>d,YP:()=>a,Z_:()=>y,gx:()=>u,nn:()=>f,on:()=>p,tX:()=>g});var i=r(91460),s=r(50758),n=r(70586),l=r(95330),o=r(26258);function a(e,t,r={}){return c(e,t,r,m)}function u(e,t,r={}){return c(e,t,r,h)}function c(e,t,r={},i){let s=null;const l=r.once?(e,r)=>{i(e)&&((0,n.hw)(s),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(s=(0,o.aQ)(e,l,r.sync,r.equals),r.initial){const t=e();l(t,t)}return s}function p(e,t,r,l={}){let o=null,u=null,c=null;function p(){o&&u&&(u.remove(),l.onListenerRemove?.(o),o=null,u=null)}function d(e){l.once&&l.once&&(0,n.hw)(c),r(e)}const m=a(e,((e,r)=>{p(),(0,i.vT)(e)&&(o=e,u=(0,i.on)(e,t,d),l.onListenerAdd?.(e))}),{sync:l.sync,initial:!0});return c=(0,s.kB)((()=>{m.remove(),p()})),c}function d(e,t){return function(e,t,r){if((0,l.Hc)(r))return Promise.reject((0,l.zE)());const i=e();if(t?.(i))return Promise.resolve(i);let o=null;function a(){o=(0,n.hw)(o)}return new Promise(((i,n)=>{o=(0,s.AL)([(0,l.fu)(r,(()=>{a(),n((0,l.zE)())})),c(e,(e=>{a(),i(e)}),{sync:!1,once:!0},t??m)])}))}(e,h,t)}function m(e){return!0}function h(e){return!!e}r(87538);const y={sync:!0},f={initial:!0},g={sync:!0,initial:!0}},55853:(e,t,r)=>{r.r(t),r.d(t,{default:()=>me});var i=r(43697),s=r(3172),n=r(46791),l=r(20102),o=r(22974),a=r(70586),u=r(16453),c=r(78286),p=r(95330),d=r(17445),m=r(17452),h=r(5600),y=(r(75215),r(71715)),f=r(52011),g=r(30556),w=r(6570),v=r(87085),x=r(16199),S=r(71612),b=r(38009),M=r(16859),C=r(34760),I=r(72965),L=r(11145);class T{constructor(e,t=0,r=e.lods.length-1){this.tileInfo=e,this.minLOD=t,this.maxLOD=r}getAvailability(e,t,r){const i=this.tileInfo?.lodAt(e);return!i||e<this.minLOD||e>this.maxLOD?"unavailable":i.cols&&i.rows?r>=i.cols[0]&&r<=i.cols[1]&&t>=i.rows[0]&&t<=i.rows[1]?"available":"unavailable":"available"}async fetchAvailability(e,t,r,i){return await(0,p.Yn)(i),this.getAvailability(e,t,r)}async fetchAvailabilityUpsample(e,t,r,i,s){await(0,p.Yn)(s),i.level=e,i.row=t,i.col=r;const n=this.tileInfo;for(n.updateTileInfo(i);;){const e=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==e)return e;if(!n.upsampleTile(i))return"unavailable"}}}var _,P=r(5833),E=r(96674);r(67676);let R=_=class extends E.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new _;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,i._)([(0,h.Cb)({type:w.Z,json:{read:{source:"fullExtent"}}})],R.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({type:String,json:{read:{source:"id"}}})],R.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:L.Z,json:{read:{source:"tileInfo"}}})],R.prototype,"tileInfo",void 0),R=_=(0,i._)([(0,f.j)("esri.layer.support.TileMatrixSet")],R);const O=R;var F;let A=F=class extends E.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,i._)([(0,h.Cb)({json:{read:{source:"id"}}})],A.prototype,"id",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"title"}}})],A.prototype,"title",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"abstract"}}})],A.prototype,"description",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"legendUrl"}}})],A.prototype,"legendUrl",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"isDefault"}}})],A.prototype,"isDefault",void 0),(0,i._)([(0,h.Cb)({json:{read:{source:"keywords"}}})],A.prototype,"keywords",void 0),A=F=(0,i._)([(0,f.j)("esri.layer.support.WMTSStyle")],A);const V=A;var j;let U=j=class extends E.wq{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?w.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map((e=>w.Z.fromJSON(e))):t.tileMatrixSets?.map((e=>w.Z.fromJSON(e.fullExtent))).filter((e=>e))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new j;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,i._)([(0,h.Cb)()],U.prototype,"description",null),(0,i._)([(0,h.Cb)()],U.prototype,"fullExtent",void 0),(0,i._)([(0,y.r)("fullExtent",["fullExtent"])],U.prototype,"readFullExtent",null),(0,i._)([(0,h.Cb)({readOnly:!0})],U.prototype,"fullExtents",void 0),(0,i._)([(0,y.r)("fullExtents",["fullExtents","tileMatrixSets"])],U.prototype,"readFullExtents",null),(0,i._)([(0,h.Cb)()],U.prototype,"imageFormat",null),(0,i._)([(0,h.Cb)({json:{read:{source:"formats"}}})],U.prototype,"imageFormats",void 0),(0,i._)([(0,h.Cb)()],U.prototype,"id",void 0),(0,i._)([(0,h.Cb)()],U.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],U.prototype,"styleId",null),(0,i._)([(0,h.Cb)({type:n.Z.ofType(V),json:{read:{source:"styles"}}})],U.prototype,"styles",void 0),(0,i._)([(0,h.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],U.prototype,"title",null),(0,i._)([(0,h.Cb)()],U.prototype,"tileMatrixSetId",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],U.prototype,"tileMatrixSet",null),(0,i._)([(0,h.Cb)({type:n.Z.ofType(O),json:{read:{source:"tileMatrixSets"}}})],U.prototype,"tileMatrixSets",void 0),U=j=(0,i._)([(0,f.j)("esri.layers.support.WMTSSublayer")],U);const N=U;var Z=r(94139),k=r(24678),D=r(58116),W=r(52162),B=r(88724);const K=90.71428571428571;function $(e){const t=e.replace(/ows:/gi,"");if(!Y("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new l.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function q(e){return e.nodeType===Node.ELEMENT_NODE}function Y(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(q(i)&&i.nodeName===e)return i}return null}function G(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];q(s)&&s.nodeName===e&&r.push(s)}return r}function H(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];q(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent)).filter(a.pC)}function J(e,t){return e.split(">").forEach((e=>{t&&(t=Y(e,t))})),t&&t.textContent}function z(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=Y(t,i),n=e&&e.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=i,!0}return!1})),s}function Q(e,t,r,i,s){const n=J("Abstract",t),l=H("Format",t);return{id:e,fullExtent:ee(t),fullExtents:te(t),description:n,formats:l,styles:re(t,i),title:J("Title",t),tileMatrixSets:ie(s,t,r)}}function X(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=G("ResourceURL",i),n=G("Dimension",i);let l,o,a,u;return n.length&&(l=J("Identifier",n[0]),o=H("Default",n[0])||H("Value",n[0])),n.length>1&&(a=J("Identifier",n[1]),u=H("Default",n[1])||H("Value",n[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:u}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&o.length)if(t.includes("{"+l+"}"))t=t.replace("{"+l+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2))}if(a&&u.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function ee(e){const t=Y("WGS84BoundingBox",e),r=t?J("LowerCorner",t).split(" "):["-180","-90"],i=t?J("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function te(e){const t=[];return(0,B.h)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=se(r),s=r.includes("epsg")&&(0,W.A)(i.wkid);let n,l,o,a;(0,B.h)(e,{LowerCorner:e=>{[n,l]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([n,l]=[l,n])},UpperCorner:e=>{[o,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),s&&([o,a]=[a,o])}}),t.push({xmin:n,ymin:l,xmax:o,ymax:a,spatialReference:i})}}),t}function re(e,t){return G("Style",e).map((e=>{const r=Y("LegendURL",e),i=Y("Keywords",e),s=i?H("Keyword",i):[];let n=r&&r.getAttribute("xlink:href");return t&&(n=n&&n.replace(/^http:/i,"https:")),{abstract:J("Abstract",e),id:J("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:n,title:J("Title",e)}}))}function ie(e,t,r){return G("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=Y("TileMatrixSet",t).textContent,s=H("TileMatrix",t),n=r.find((e=>{const t=Y("Identifier",e),r=t&&t.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),l=Y("TileMatrixSetLimits",t),o=l&&G("TileMatrixLimits",l),a=new Map;if(o?.length)for(const e of o){const t=Y("TileMatrix",e).textContent,r=+Y("MinTileRow",e).textContent,i=+Y("MaxTileRow",e).textContent,s=+Y("MinTileCol",e).textContent,n=+Y("MaxTileCol",e).textContent;a.set(t,{minCol:s,maxCol:n,minRow:r,maxRow:i})}const u=J("SupportedCRS",n).toLowerCase(),c=function(e,t){return ne(Y("TileMatrix",e),t)}(n,u),p=c.spatialReference,d=Y("TileMatrix",n),m=[parseInt(J("TileWidth",d),10),parseInt(J("TileHeight",d),10)],h=[];s.length?s.forEach(((e,t)=>{const r=z("TileMatrix","Identifier",e,n);h.push(ae(r,u,t,i,a))})):G("TileMatrix",n).forEach(((e,t)=>{h.push(ae(e,u,t,i,a))}));const y=function(e,t,r,i,s){const n=Y("BoundingBox",t);let l,o,a,u,c,p;if(n&&(l=J("LowerCorner",n).split(" "),o=J("UpperCorner",n).split(" ")),l&&l.length>1&&o&&o.length>1)a=parseFloat(l[0]),c=parseFloat(l[1]),u=parseFloat(o[0]),p=parseFloat(o[1]);else{const e=Y("TileMatrix",t),n=parseInt(J("MatrixWidth",e),10),l=parseInt(J("MatrixHeight",e),10);a=r.x,p=r.y,u=a+n*i[0]*s.resolution,c=p-l*i[1]*s.resolution}return function(e,t,r){return"1.0.0"===e&&(0,W.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new w.Z(c,a,p,u,r.spatialReference):new w.Z(a,c,u,p,r.spatialReference)}(e,n,c,m,h[0]).toJSON(),f=new L.Z({dpi:96,spatialReference:p,size:m,origin:c,lods:h}).toJSON();return{id:i,fullExtent:y,tileInfo:f}}(e,t,r)))}function se(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?le.CRS84:e.includes("crs83")||e.includes("crs:83")?le.CRS83:e.includes("crs27")||e.includes("crs:27")?le.CRS27:null}(e);return(0,a.pC)(r)&&(t=r),{wkid:t}}function ne(e,t){const r=se(t),[i,s]=J("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),n=t.includes("epsg")&&(0,W.A)(r.wkid);return new Z.Z(n?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var le,oe;function ae(e,t,r,i,s){const n=se(t),l=J("Identifier",e);let o=parseFloat(J("ScaleDenominator",e));const a=ue(n.wkid,o,i);o*=96/K;const u=+J("MatrixWidth",e),c=+J("MatrixHeight",e),{maxCol:p=u-1,maxRow:d=c-1,minCol:m=0,minRow:h=0}=s.get(l)??{},{x:y,y:f}=ne(e,t);return{cols:[m,p],level:r,levelValue:l,origin:[y,f],scale:o,resolution:a,rows:[h,d]}}function ue(e,t,r){let i;return i=D.Z.hasOwnProperty(""+e)?D.Z.values[D.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,k.e8)(e).metersPerDegree,7*t/25e3/i}(oe=le||(le={}))[oe.CRS84=4326]="CRS84",oe[oe.CRS83=4269]="CRS83",oe[oe.CRS27=4267]="CRS27";const ce={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},pe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let de=class extends((0,S.h)((0,C.Q)((0,I.M)((0,b.q)((0,M.I)((0,u.R)(v.Z))))))){constructor(...e){super(...e),this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,d.YP)((()=>this.activeLayer),((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),d.Z_),(0,d.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this}),d.Z_),(0,d.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null}),d.Z_),(0,d.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=null;if(e)for(const t of e)t.layer=this}),d.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(p.r9).then((()=>this._fetchService(e))).catch((e=>{throw(0,p.r9)(e),new l.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new N);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,n=i?.layerIdentifier;let l=null;const o=i?.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const a=s?.format,u=s?.style;return new N({id:n,imageFormat:a,styleId:u,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const n=(0,c.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=n?n.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new N;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(a.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new T(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId)?.tileInfo,i=e.fullExtent,s=new P.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new x.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return(0,s.default)(i,{responseType:"image"}).then((e=>e.data))}async fetchImageBitmapTile(e,t,r){const i=this.getTileUrl(e,t,r),{data:n}=await(0,s.default)(i,{responseType:"blob"});return createImageBitmap(n)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)?.tileInfo?.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let n=this.resourceInfo?"":function(e,t,r,i,s,n,l,o){const a=function(e,t,r){const i=X(e,t),s=i?.filter((e=>e.format===r));return(s?.length?s:i)??[]}(e,t,i);if(!(a?.length>0))return"";const{dimensionMap:u}=e,c=u.get(t).dimensions?.[0],p=u.get(t).dimensions2?.[0];return a[l%a.length].template.replace(/\{Style\}/gi,s??"").replace(/\{TileMatrixSet\}/gi,r??"").replace(/\{TileMatrix\}/gi,n).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,c).replace(/\{dimensionValue2\}/gi,p)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,n=X(e,t);let l="";if(n&&n.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=n[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return ce[r.toLowerCase()]&&(s=ce[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),$(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),$(t.data),this.serviceMode=r}catch(e){throw new l.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ue(t.spatialReference?.wkid,r.scale*K/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){e=e.replace(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,n=Y("Contents",r);if(!n)throw new l.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const o=Y("OperationsMetadata",r)?.querySelector("[name='GetTile']"),a=o?.getElementsByTagName("Get"),u=a&&Array.prototype.slice.call(a),c=t.url?.indexOf("https"),p=void 0!==c&&c>-1;let d,m,h=t.serviceMode,y=t?.url;if(u&&u.length&&u.some((e=>{const t=Y("Constraint",e);return!t||z("AllowedValues","Value",h,t)?(y=e.attributes[0].nodeValue,!0):(!t||z("AllowedValues","Value","RESTful",t)||z("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!z("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)})),!y)if(m)y=m,h="RESTful";else if(d)y=d,h="KVP";else{const e=Y("ServiceMetadataURL",r);y=e?.getAttribute("xlink:href")}const f=y.indexOf("1.0.0/");-1===f&&"RESTful"===h?y+="/":f>-1&&(y=y.substring(0,f)),"KVP"===h&&(y+=f>-1?"":"?"),p&&(y=y.replace(/^http:/i,"https:"));const g=J("ServiceIdentification>ServiceTypeVersion",r),w=J("ServiceIdentification>AccessConstraints",r),v=w&&/^none$/i.test(w)?null:w,x=G("Layer",n),S=G("TileMatrixSet",n),b=x.map((e=>{const t=J("Identifier",e);return i.set(t,e),Q(t,e,S,p,g)}));return{copyright:v,dimensionMap:s,layerMap:i,layers:b,serviceMode:h,tileUrl:y}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,s.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find((t=>t.id===e));return t}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,o.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,m.mN)(e),i={...r.query,...t},s=(0,m.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t="KVP"===e?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,m.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,o.d9)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||pe.has(t)||(e[t]=r[t])})))}return e}};(0,i._)([(0,h.Cb)()],de.prototype,"dimensionMap",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"layerMap",void 0),(0,i._)([(0,h.Cb)({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],de.prototype,"activeLayer",null),(0,i._)([(0,y.r)("service","activeLayer",["layers"])],de.prototype,"readActiveLayerFromService",null),(0,i._)([(0,y.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],de.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,i._)([(0,g.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:L.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],de.prototype,"writeActiveLayer",null),(0,i._)([(0,h.Cb)({type:String,value:"",json:{write:!0}})],de.prototype,"copyright",void 0),(0,i._)([(0,h.Cb)({type:["show","hide"]})],de.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({json:{read:!0,write:!0}})],de.prototype,"blendMode",void 0),(0,i._)([(0,h.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],de.prototype,"customParameters",void 0),(0,i._)([(0,y.r)(["portal-item","web-document"],"customParameters")],de.prototype,"readCustomParameters",null),(0,i._)([(0,h.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],de.prototype,"customLayerParameters",void 0),(0,i._)([(0,h.Cb)({type:w.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],de.prototype,"fullExtent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"fullExtents",null),(0,i._)([(0,h.Cb)({type:["WebTiledLayer"]})],de.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"resourceInfo",void 0),(0,i._)([(0,h.Cb)()],de.prototype,"serviceMode",void 0),(0,i._)([(0,y.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],de.prototype,"readServiceMode",null),(0,i._)([(0,h.Cb)({type:n.Z.ofType(N)})],de.prototype,"sublayers",void 0),(0,i._)([(0,y.r)("service","sublayers",["layers"])],de.prototype,"readSublayersFromService",null),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"supportedSpatialReferences",null),(0,i._)([(0,h.Cb)({readOnly:!0})],de.prototype,"tilemapCache",null),(0,i._)([(0,h.Cb)({json:{read:{source:"title"}}})],de.prototype,"title",null),(0,i._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],de.prototype,"type",void 0),(0,i._)([(0,h.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],de.prototype,"url",null),(0,i._)([(0,h.Cb)()],de.prototype,"version",void 0),de=(0,i._)([(0,f.j)("esri.layers.WMTSLayer")],de);const me=de},52162:(e,t,r)=>{r.d(t,{A:()=>s});const i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function s(e){return null!=e&&i.some((([t,r])=>e>=t&&e<=r))}},88724:(e,t,r)=>{function i(e,t){if(e&&t)for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*s(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*s(r,e)}}r.d(t,{H:()=>s,h:()=>i})}}]);