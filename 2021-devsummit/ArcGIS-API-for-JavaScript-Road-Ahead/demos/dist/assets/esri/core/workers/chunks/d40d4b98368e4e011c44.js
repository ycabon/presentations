self.webpackChunkRemoteClient([163],{419:function(e,t,r){"use strict";r.r(t);var i,s=r(14),a=(r(4),r(7)),l=r(10),o=(r(3),r(6),r(16)),n=r(58),c=r(20),u=r(57),d=r(17),p=r(24),h=(r(37),r(38),r(62)),m=r(70),y=r(55),f=r(136),b=r(88),g=r(85),O=r(101),j=r(125),v=r(97),w=r(151),x=r(110),S=r(120),I=r(522),M=r(314),L=r(56);let T=i=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};Object(s.a)([Object(o.b)({type:h.a,json:{read:{source:"fullExtent"}}})],T.prototype,"fullExtent",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:{source:"id"}}})],T.prototype,"id",void 0),Object(s.a)([Object(o.b)({type:S.a,json:{read:{source:"tileInfo"}}})],T.prototype,"tileInfo",void 0),T=i=Object(s.a)([Object(c.a)("esri.layer.support.TileMatrixSet")],T);var P,E=T;let C=P=class extends L.a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new P;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(o.b)({json:{read:{source:"id"}}})],C.prototype,"id",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"title"}}})],C.prototype,"title",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"abstract"}}})],C.prototype,"description",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"legendUrl"}}})],C.prototype,"legendUrl",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"isDefault"}}})],C.prototype,"isDefault",void 0),Object(s.a)([Object(o.b)({json:{read:{source:"keywords"}}})],C.prototype,"keywords",void 0),C=P=Object(s.a)([Object(c.a)("esri.layer.support.WMTSStyle")],C);var F,R=C;let _=F=class extends L.a{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?h.a.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(s.a)([Object(o.b)()],_.prototype,"description",null),Object(s.a)([Object(o.b)()],_.prototype,"fullExtent",void 0),Object(s.a)([Object(n.a)("fullExtent",["fullExtent"])],_.prototype,"readFullExtent",null),Object(s.a)([Object(o.b)()],_.prototype,"imageFormat",null),Object(s.a)([Object(o.b)({json:{read:{source:"formats"}}})],_.prototype,"imageFormats",void 0),Object(s.a)([Object(o.b)()],_.prototype,"id",void 0),Object(s.a)([Object(o.b)()],_.prototype,"layer",void 0),Object(s.a)([Object(o.b)()],_.prototype,"styleId",null),Object(s.a)([Object(o.b)({type:m.a.ofType(R),json:{read:{source:"styles"}}})],_.prototype,"styles",void 0),Object(s.a)([Object(o.b)({value:null,json:{write:{ignoreOrigin:!0}}})],_.prototype,"title",null),Object(s.a)([Object(o.b)()],_.prototype,"tileMatrixSetId",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],_.prototype,"tileMatrixSet",null),Object(s.a)([Object(o.b)({type:m.a.ofType(E),json:{read:{source:"tileMatrixSets"}}})],_.prototype,"tileMatrixSets",void 0),_=F=Object(s.a)([Object(c.a)("esri.layers.support.WMTSSublayer")],_);var V=_,U=r(0),A=r(371),N=r(61),k=r(69),W=r(328);const D=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function K(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,l=new Map,o=H("Contents",s);if(!o)throw new d.a("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=H("OperationsMetadata",s),c=null==n?void 0:n.querySelector("[name='GetTile']"),u=null==c?void 0:c.getElementsByTagName("Get"),p=u&&Array.prototype.slice.call(u),h=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let m,y,f=t.serviceMode,b=t&&t.url;if(p&&p.length&&p.some(e=>{const t=H("Constraint",e);return!t||z("AllowedValues","Value",f,t)?(b=e.attributes[0].nodeValue,!0):(!t||z("AllowedValues","Value","RESTful",t)||z("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!z("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)}),!b)if(y)b=y,f="RESTful";else if(m)b=m,f="KVP";else{const e=H("ServiceMetadataURL",s);b=e&&e.getAttribute("xlink:href")}const g=b.indexOf("1.0.0/");-1===g&&"RESTful"===f?b+="/":g>-1&&(b=b.substring(0,g)),"KVP"===f&&(b+=g>-1?"":"?"),h&&(b=b.replace(/^http:/i,"https:"));const O=q("ServiceIdentification>ServiceTypeVersion",s),j=q("ServiceIdentification>AccessConstraints",s),v=G("Layer",o),w=G("TileMatrixSet",o);return{copyright:j,layers:v.map(e=>{const t=q("Identifier",e);return a.set(t,e),function(e,t,r,i,s){const a=q("Abstract",t),l=J("Format",t);return{id:e,fullExtent:Y(t),description:a,formats:l,styles:Q(t,i),title:q("Title",t),tileMatrixSets:Z(s,t,r)}}(t,e,w,h,O)}),tileUrl:b,serviceMode:f,layerMap:a,dimensionMap:l}}function B(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(B(i)&&i.nodeName===e)return i}return null}function G(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];B(s)&&s.nodeName===e&&r.push(s)}return r}function J(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];B(s)&&s.nodeName===e&&r.push(s)}return r.map(e=>e.textContent)}function q(e,t){return e.split(">").forEach(e=>{t&&(t=H(e,t))}),t&&t.textContent}function z(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(i=>{if(i.nodeName.indexOf(e)>-1){const e=H(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1}),s}function X(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const s=G("ResourceURL",i),a=G("Dimension",i);let l,o,n,c;return a.length&&(l=q("Identifier",a[0]),o=J("Default",a[0])||J("Value",a[0])),a.length>1&&(n=q("Identifier",a[1]),c=J("Default",a[1])||J("Value",a[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:c}),s.forEach(e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2))}if(n&&c.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}}),r}function Y(e){const t=H("WGS84BoundingBox",e),r=t?q("LowerCorner",t).split(" "):["-180","-90"],i=t?q("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function Q(e,t){return G("Style",e).map(e=>{const r=H("LegendURL",e),i=H("Keywords",e),s=i&&J("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:q("Abstract",e),id:q("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:q("Title",e)}})}function Z(e,t,r){return G("TileMatrixSetLink",t).map(e=>H("TileMatrixSet",e).textContent).map(i=>function(e,t,r,i){const s=J("TileMatrix",z("TileMatrixSetLink","TileMatrixSet",t,r)),a=i.find(e=>{const r=H("Identifier",e),i=r&&r.textContent;return!!(i===t||t.split(":")&&t.split(":")[1]===i)}),l=function(e){let t=q("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);const i=function(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}(t);Object(U.h)(i)&&(r=i);const s=new N.a({wkid:r}),a=q("TopLeftCorner",H("TileMatrix",e)).split(" "),l=a[0].split("E").map(e=>Number(e)),o=a[1].split("E").map(e=>Number(e));let n=l[0],c=o[0];return l.length>1&&(n=l[0]*10**l[1]),o.length>1&&(c=o[0]*10**o[1]),$(r)?new k.a(c,n,s):new k.a(n,c,s)}(a),o=l.spatialReference,n=o.wkid,c=H("TileMatrix",a),u=[parseInt(q("TileWidth",c),10),parseInt(q("TileHeight",c),10)],d=[];s.length?s.forEach((e,r)=>{const i=z("TileMatrix","Identifier",e,a);d.push(ee(i,n,r,t))}):G("TileMatrix",a).forEach((e,r)=>{d.push(ee(e,n,r,t))});const p=function(e,t,r,i,s){const a=H("BoundingBox",t);let l,o,n,c,u,d;if(a&&(l=q("LowerCorner",a).split(" "),o=q("UpperCorner",a).split(" ")),l&&l.length>1&&o&&o.length>1)n=parseFloat(l[0]),u=parseFloat(l[1]),c=parseFloat(o[0]),d=parseFloat(o[1]);else{const e=H("TileMatrix",t),a=parseFloat(q("MatrixWidth",e)),l=parseFloat(q("MatrixHeight",e));n=r.x,d=r.y,c=n+a*i[0]*s.resolution,u=d-l*i[1]*s.resolution}return function(e,t){return"1.0.0"===e&&$(t.wkid)}(e,r.spatialReference)?new h.a(u,n,d,c,r.spatialReference):new h.a(n,u,c,d,r.spatialReference)}(e,a,l,u,d[0]);return{id:t,fullExtent:p.toJSON(),tileInfo:new S.a({dpi:96,spatialReference:o,size:u,origin:l,lods:d}).toJSON()}}(e,i,t,r))}function $(e){return D.some(([t,r])=>e>=t&&e<=r)}function ee(e,t,r,i){const s=q("Identifier",e),a=q("ScaleDenominator",e).split("E").map(e=>Number(e));let l;l=a.length>1?a[0]*10**a[1]:a[0];const o=te(t,l,i);return l*=1.058267716535433,{level:r,levelValue:s,scale:l,resolution:o}}function te(e,t,r){let i;return i=A.a.hasOwnProperty(String(e))?A.a.values[A.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(W.f)(e).metersPerDegree,7*t/25e3/i}const re={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ie=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let se=class extends(Object(j.a)(Object(w.a)(Object(x.a)(Object(O.a)(Object(v.a)(Object(g.a)(b.a))))))){constructor(...e){super(...e),this._sublayersHandles=new f.a,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",(e,t)=>{t&&(t.layer=null),e&&(e.layer=this)},!0),this.watch("sublayers",(e,t)=>{t&&(t.forEach(e=>{e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(e=>{e.layer=this}),this._sublayersHandles||(this._sublayersHandles=new f.a),this._sublayersHandles.add([e.on("after-add",({item:e})=>{e.layer=this}),e.on("after-remove",({item:e})=>{e.layer=null})]))},!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>this._fetchService(e)).catch(e=>{throw new d.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some(e=>e.id===this.activeLayer.id&&(i=e,!0)):(this.activeLayer=new V,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier;let l=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=s&&s.format,c=s&&s.style;return new V({id:a,imageFormat:n,styleId:c,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=Object(l.b)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach(t=>{t.fullExtent&&e.push(t.fullExtent)}),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map(e=>{const r=new V;return r.read(e,t),r})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map(e=>e.tileInfo.spatialReference).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new I.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new M.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return Object(y.default)(i,{responseType:"image"}).then(e=>e.data)}findSublayerById(e){return this.sublayers.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:""+i.level:""+e;let a=this.resourceInfo?"":function(e,t,r,i,s,a,l,o){const{dimensionMap:n}=e,c=X(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],d=n.get(t).dimensions2&&n.get(t).dimensions2[0];let p="";if(c&&c.length>0){let e=null;c.some(t=>t.format===i&&(e=t,!0)),e||(e=c[l%c.length]),p=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,d)}return p}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=X(e,t);let l="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return re[r.toLowerCase()]&&(s=re[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(e){throw new d.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach(e=>{e.tileMatrixSets.forEach(e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach(r=>{r.scale=96*r.scale/t.dpi,r.resolution=te(t.spatialReference.wkid,90.71428571428571*r.scale/96,e.id)}),t.dpi=96)})}),e}(t.data):t.data=K(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await Object(y.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(t=>t.id===e)}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...Object(a.a)(this.customParameters),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=Object(p.J)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(e=>{r[e.toLowerCase()]=t[e]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?Object(a.a)(e):{},t.forEach(t=>{e.hasOwnProperty(t)||ie.has(t)||(e[t]=r[t])}))}return e}};Object(s.a)([Object(o.b)()],se.prototype,"dimensionMap",void 0),Object(s.a)([Object(o.b)()],se.prototype,"layerMap",void 0),Object(s.a)([Object(o.b)({type:V,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],se.prototype,"activeLayer",null),Object(s.a)([Object(n.a)("service","activeLayer",["layers"])],se.prototype,"readActiveLayerFromService",null),Object(s.a)([Object(n.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],se.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(s.a)([Object(u.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:S.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],se.prototype,"writeActiveLayer",null),Object(s.a)([Object(o.b)({type:String,value:"",json:{write:!0}})],se.prototype,"copyright",void 0),Object(s.a)([Object(o.b)({type:["show","hide"]})],se.prototype,"listMode",void 0),Object(s.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],se.prototype,"customParameters",void 0),Object(s.a)([Object(n.a)("web-document","customParameters"),Object(n.a)("portal-item","customParameters")],se.prototype,"readCustomParameters",null),Object(s.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],se.prototype,"customLayerParameters",void 0),Object(s.a)([Object(o.b)({type:h.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],se.prototype,"fullExtent",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],se.prototype,"fullExtents",null),Object(s.a)([Object(o.b)({type:["WebTiledLayer"]})],se.prototype,"operationalLayerType",void 0),Object(s.a)([Object(o.b)()],se.prototype,"resourceInfo",void 0),Object(s.a)([Object(o.b)()],se.prototype,"serviceMode",void 0),Object(s.a)([Object(n.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],se.prototype,"readServiceMode",null),Object(s.a)([Object(o.b)({type:m.a.ofType(V)})],se.prototype,"sublayers",void 0),Object(s.a)([Object(n.a)("service","sublayers",["layers"])],se.prototype,"readSublayersFromService",null),Object(s.a)([Object(o.b)({readOnly:!0})],se.prototype,"supportedSpatialReferences",null),Object(s.a)([Object(o.b)({json:{read:{source:"title"}}})],se.prototype,"title",null),Object(s.a)([Object(o.b)({json:{read:!1},readOnly:!0,value:"wmts"})],se.prototype,"type",void 0),Object(s.a)([Object(o.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],se.prototype,"url",null),Object(s.a)([Object(o.b)()],se.prototype,"version",void 0),se=Object(s.a)([Object(c.a)("esri.layers.WMTSLayer")],se);var ae=se;t.default=ae}});