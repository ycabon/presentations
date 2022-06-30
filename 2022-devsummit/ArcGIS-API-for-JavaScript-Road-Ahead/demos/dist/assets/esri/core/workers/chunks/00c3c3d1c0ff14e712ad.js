self.webpackChunkRemoteClient([11,147],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(14),a=(r(4),r(3),r(6),r(16)),o=r(20),s=r(57),n=r(17),l=(r(24),r(37),r(38),r(115)),c=r(82);const p={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var u=r(74);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=p[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new n.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof n.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(s.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(u.h)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(i.a)([Object(s.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.OperationalLayer")],t),t}},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(14),a=(r(4),r(3),r(6),r(16)),o=r(20);r(24),r(37),r(38);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(i.a)([Object(a.b)({readOnly:!0})],t.prototype,"scaleRangeId",null),t=Object(i.a)([Object(o.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},120:function(e,t,r){"use strict";var i,a=r(14),o=(r(4),r(3),r(6)),s=r(16),n=r(60),l=r(58),c=r(20),p=r(57),u=(r(24),r(37),r(38),r(56)),b=r(84),d=r(61),y=r(144),h=r(69),O=(r(64),r(73)),f=r(107),j=r(160);const m=new n.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let v=i=class extends u.a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:d.a.WebMercator}){const t=e.resolutionFactor||1,r=e.scales,a=e.size||256,o=e.spatialReference||d.a.WebMercator;if(!Object(b.i)(o)){const e=[];if(r)for(let t=0;t<r.length;t++){const i=r[t];e.push({level:t,scale:i,resolution:i})}else{let t=5e-4;for(let r=23;r>=0;r--)e.unshift({level:r,scale:t,resolution:t}),t*=2}return new i({dpi:96,lods:e,origin:new h.a(0,0,o),size:[a,a],spatialReference:o})}const s=Object(b.d)(o),n=e.origin?new h.a({x:e.origin.x,y:e.origin.y,spatialReference:o}):new h.a(s?{x:s.origin[0],y:s.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),l=1/(39.37*Object(O.c)(o)*96),c=[];if(r)for(let e=0;e<r.length;e++){const t=r[e],i=t*l;c.push({level:e,scale:t,resolution:i})}else{let e=Object(b.f)(o)?512/a*591657527.5917094:256/a*591657527.591555;const r=Math.ceil(24/t);c.push({level:0,scale:e,resolution:e*l});for(let i=1;i<r;i++){const r=e/2**t,a=r*l;c.push({level:i,scale:r,resolution:a}),e=r}}return new i({dpi:96,lods:c,origin:n,size:[a,a],spatialReference:o})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const r=Object(b.d)(e);return e.isWrappable&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}readOrigin(e,t){return h.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,r=0;const i=[];this._levelToLOD={},e&&(t=-1/0,r=1/0,e.forEach(e=>{i.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,this._levelToLOD[e.level]=e})),this._set("scales",i),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const r=Math.round(e-.5),i=Math.round(e);return t[i]+(i-e)*(t[r]-t[i])}}scaleToZoom(e){const t=this.scales,r=t.length-1;let i=0;for(;i<r;i++){const r=t[i],a=t[i+1];if(r<=e)return i;if(a===e)return i+1;if(r>e&&a<e)return i+1-(e-a)/(r-a)}return i}snapScale(e,t=.95){const r=this.scaleToZoom(e);return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))}tileAt(e,t,r,i){const a=this.lodAt(e);if(!a)return null;let o,s;if("number"==typeof t)o=t,s=r;else if(Object(b.c)(t.spatialReference,this.spatialReference))o=t.x,s=t.y,i=r;else{const e=Object(y.d)(t,this.spatialReference);if(!e)return null;o=e.x,s=e.y,i=r}const n=a.resolution*this.size[0],l=a.resolution*this.size[1];return i||(i={id:null,level:0,row:0,col:0,extent:Object(f.d)()}),i.level=e,i.row=Math.floor((this.origin.y-s)/l+.001),i.col=Math.floor((o-this.origin.x)/n+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=0){let r=this.lodAt(e.level);if(!r&&1===t){const t=this.lods[this.lods.length-1];t.level<e.level&&(r=t)}if(!r)return;const i=e.level-r.level,a=r.resolution*this.size[0]/2**i,o=r.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(f.d)()),e.extent[0]=this.origin.x+e.col*a,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+a,e.extent[3]=e.extent[1]+o}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:r}=this.lodAt(t.level),i=r*this.size[0],a=r*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*a,e[2]=e[0]+i,e[3]=e[1]+a,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return i.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let r=0;r<e.length;r++){const i=e[r];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],v.prototype,"compressionQuality",void 0),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],v.prototype,"dpi",void 0),Object(a.a)([Object(s.b)({type:String,json:{read:m.read,write:m.write,origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"format",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],v.prototype,"isWrappable",null),Object(a.a)([Object(s.b)({type:h.a,json:{write:!0}})],v.prototype,"origin",void 0),Object(a.a)([Object(l.a)("origin")],v.prototype,"readOrigin",null),Object(a.a)([Object(s.b)({type:[j.a],value:null,json:{write:!0}})],v.prototype,"lods",null),Object(a.a)([Object(s.b)({readOnly:!0})],v.prototype,"minScale",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],v.prototype,"maxScale",void 0),Object(a.a)([Object(s.b)({readOnly:!0})],v.prototype,"scales",void 0),Object(a.a)([Object(s.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],v.prototype,"size",void 0),Object(a.a)([Object(l.a)("size",["rows","cols"])],v.prototype,"readSize",null),Object(a.a)([Object(p.a)("size",{cols:{type:o.a},rows:{type:o.a}})],v.prototype,"writeSize",null),Object(a.a)([Object(s.b)({type:d.a,json:{write:!0}})],v.prototype,"spatialReference",void 0),v=i=Object(a.a)([Object(c.a)("esri.layers.support.TileInfo")],v);var g=v;t.a=g},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(14),a=(r(4),r(3),r(6),r(16)),o=r(20);r(24),r(37),r(38);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(i.a)([Object(a.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(i.a)([Object(a.b)()],t.prototype,"effect",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.BlendLayer")],t),t}},126:function(e,t,r){"use strict";var i,a=r(14),o=(r(4),r(0)),s=(r(3),r(6),r(16)),n=r(60),l=r(58),c=r(20),p=r(57),u=(r(24),r(37),r(38),r(56)),b=r(75);let d=i=class extends u.a{async collectRequiredFields(e,t){return Object(b.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],d);var y=d,h=r(76);const O=function(){const e=Object.keys(h.a);return e.sort(),e}();var f;const j=Object(n.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new n.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=f=class extends u.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):Object(o.h)(e)||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(s.b)({type:y,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(p.a)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(s.b)({type:j.apiValues,nonNullable:!0,json:{type:j.jsonValues,read:j.read,write:{writer:j.write,isRequired:!0}}})],v.prototype,"mode",null),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),Object(a.a)([Object(s.b)({type:O,json:{type:String,read:m.read,write:m.write}})],v.prototype,"unit",null),v=f=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],v);var g=v;t.a=g},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(14),a=(r(4),r(3),r(6),r(16)),o=r(20);r(24),r(37),r(38);const s=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return Object(i.a)([Object(a.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(i.a)([Object(o.a)("esri.layers.mixins.RefreshableLayer")],t),t}},160:function(e,t,r){"use strict";var i,a=r(14),o=(r(4),r(3),r(6)),s=r(16),n=r(20),l=(r(24),r(37),r(38),r(56));let c=i=class extends l.a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new i({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};Object(a.a)([Object(s.b)({type:o.a,json:{write:!0}})],c.prototype,"level",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(a.a)([Object(s.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=i=Object(a.a)([Object(n.a)("esri.layers.support.LOD")],c);var p=c;t.a=p},314:function(e,t,r){"use strict";r.r(t);var i=r(14),a=(r(4),r(40)),o=(r(3),r(6),r(16)),s=r(58),n=r(20),l=r(57),c=r(17),p=r(24),u=(r(37),r(38),r(61)),b=r(69),d=r(62),y=(r(64),r(55)),h=r(88),O=r(85),f=r(101),j=r(125),m=r(97),v=r(151),g=r(110),w=r(160),S=r(120),I=r(522);let x=class extends(Object(j.a)(Object(v.a)(Object(g.a)(Object(f.a)(Object(m.a)(Object(O.a)(h.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new d.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,u.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=u.a.WebMercator,this.subDomains=null,this.tileInfo=new S.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b.a({x:-20037508.342787,y:20037508.342787,spatialReference:u.a.WebMercator}),spatialReference:u.a.WebMercator,lods:[new w.a({level:0,scale:591657527.591555,resolution:156543.033928}),new w.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new w.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new w.a({level:10,scale:577790.554289,resolution:152.874056570411}),new w.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new w.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new w.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new w.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new w.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new w.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new w.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new w.a({level:18,scale:2256.994353,resolution:.597164283559817}),new w.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new p.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new c.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&u.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new p.a(t),a=i.scheme?i.scheme+"://":"//",o=a+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(o);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const t of r)e.push(a+i.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new p.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(p.w)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(p.C)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:a,timestamp:o}=i,s=this.getTileUrl(e,t,r),n={responseType:"image",signal:a};return null!=o&&(n.query={_ts:i.timestamp}),Object(y.default)(s,n).then(e=>e.data)}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(a.c)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};Object(i.a)([Object(o.b)({type:String,value:"",json:{write:!0}})],x.prototype,"copyright",void 0),Object(i.a)([Object(o.b)({type:d.a,json:{write:!0}})],x.prototype,"fullExtent",void 0),Object(i.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],x.prototype,"legendEnabled",void 0),Object(i.a)([Object(o.b)({type:["show","hide"]})],x.prototype,"listMode",void 0),Object(i.a)([Object(o.b)()],x.prototype,"levelValues",null),Object(i.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],x.prototype,"isReference",void 0),Object(i.a)([Object(o.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],x.prototype,"operationalLayerType",void 0),Object(i.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],x.prototype,"popupEnabled",void 0),Object(i.a)([Object(o.b)({type:u.a})],x.prototype,"spatialReference",void 0),Object(i.a)([Object(s.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],x.prototype,"readSpatialReference",null),Object(i.a)([Object(o.b)({type:[String],json:{write:!0}})],x.prototype,"subDomains",void 0),Object(i.a)([Object(o.b)({type:S.a,json:{write:!0}})],x.prototype,"tileInfo",void 0),Object(i.a)([Object(o.b)({readOnly:!0})],x.prototype,"tileServers",null),Object(i.a)([Object(o.b)({json:{read:!1}})],x.prototype,"type",void 0),Object(i.a)([Object(o.b)()],x.prototype,"urlPath",null),Object(i.a)([Object(o.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],x.prototype,"urlTemplate",void 0),Object(i.a)([Object(s.a)("urlTemplate",["urlTemplate","templateUrl"])],x.prototype,"readUrlTemplate",null),Object(i.a)([Object(l.a)("urlTemplate",{templateUrl:{type:String}})],x.prototype,"writeUrlTemplate",null),Object(i.a)([Object(o.b)({type:I.a,json:{write:!0}})],x.prototype,"wmtsInfo",void 0),x=Object(i.a)([Object(n.a)("esri.layers.WebTileLayer")],x);var L=x;t.default=L},522:function(e,t,r){"use strict";var i,a=r(14),o=(r(4),r(7)),s=(r(3),r(6),r(16)),n=r(20),l=(r(24),r(37),r(38),r(56));let c=i=class extends l.a{constructor(e){super(e)}clone(){return new i({customLayerParameters:Object(o.a)(this.customLayerParameters),customParameters:Object(o.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(a.a)([Object(s.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(a.a)([Object(s.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(a.a)([Object(s.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=i=Object(a.a)([Object(n.a)("esri.layer.support.WMTSLayerInfo")],c);var p=c;t.a=p},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return I})),r.d(t,"g",(function(){return S})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return f})),r.d(t,"l",(function(){return g})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return y}));var i=r(8),a=r(90),o=r(82),s=r(61),n=r(62),l=r(154),c=r(103),p=r(126);const u={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(o.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},b={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},d={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},y={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},h={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},O={value:null,type:p.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function f(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const j={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},m={...j,json:{...j.json,origins:{"web-document":{...j.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(l.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(l.b)(t.drawingInfo.transparency)}}},v={type:c.a,readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const o=this.layer.timeOffset,s=o?a.offset(-o.value,o.unit):a,n=this._get("timeExtent");return s.equals(n)?n:s}},g={type:n.a,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=n.a.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(r.spatialReference=s.a.fromJSON(t.spatialReference)),r}}}},read:!1}},w={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},S={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}}},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(102),a=r(73);const o={inches:Object(a.b)(1,"meters","inches"),feet:Object(a.b)(1,"meters","feet"),"us-feet":Object(a.b)(1,"meters","us-feet"),yards:Object(a.b)(1,"meters","yards"),miles:Object(a.b)(1,"meters","miles"),"nautical-miles":Object(a.b)(1,"meters","nautical-miles"),millimeters:Object(a.b)(1,"meters","millimeters"),centimeters:Object(a.b)(1,"meters","centimeters"),decimeters:Object(a.b)(1,"meters","decimeters"),meters:Object(a.b)(1,"meters","meters"),kilometers:Object(a.b)(1,"meters","kilometers"),"decimal-degrees":1/Object(a.h)(1,"meters",i.a.radius)}},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return v}));var i=r(14),a=r(8),o=r(20),s=r(28),n=r(26),l=r(82),c=r(0),p=r(115),u=r(7);class b{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(s.a),this._values=new Map}clone(e){const t=new b,r=this._originStores[0];r&&r.forEach((e,r)=>{t.set(r,Object(u.a)(e),0)});for(let r=2;r<s.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{e&&e.has(a)||t.set(a,Object(u.a)(i),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||Object(c.b)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),a=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),a!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var d=b;const y=e=>{let t=class extends e{constructor(...e){super(...e);const t=Object(c.b)(Object(a.a)(this)),r=t.metadatas,i=t.store,o=new d;t.store=o,i.keys().forEach(e=>{o.set(e,i.get(e),0)}),Object.keys(r).forEach(e=>{t.internalGet(e)&&o.set(e,t.internalGet(e),0)})}read(e,t){Object(p.a)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=Object(s.d)(t);if("string"==typeof e)return r.get(e,i);const a={};return e.forEach(e=>{a[e]=r.get(e,i)}),a}originOf(e){return Object(s.b)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=Object(s.d)(t),o=Object(a.a)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach(e=>{o.propertyInvalidated(e),r.revert(e,i),o.propertyCommitted(e)})}};return t=Object(i.a)([Object(o.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return Object(a.a)(e).store}let O=class extends(y(n.a)){};O=Object(i.a)([Object(o.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],O);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return j(this).delete(e,Object(s.d)(t))}write(e={},t){return Object(l.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(a.a)(this).setAtOrigin(e,t,Object(s.d)(r))}removeOrigin(e){const t=j(this),r=Object(s.d)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=j(this),i=Object(s.d)(t),a=this.get(e);for(let t=i+1;t<s.a;++t)r.delete(e,t);r.set(e,a,i)}toJSON(e){return this.write({},e)}};return t=Object(i.a)([Object(o.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function j(e){return Object(a.a)(e).store}const m=e=>{let t=class extends(f(y(e))){constructor(...e){super(...e)}};return t=Object(i.a)([Object(o.a)("esri.core.MultiOriginJSONSupport")],t),t};let v=class extends(m(n.a)){};v=Object(i.a)([Object(o.a)("esri.core.MultiOriginJSONSupport")],v)},88:function(e,t,r){"use strict";var i=r(14),a=(r(4),r(21)),o=r(3),s=(r(6),r(16)),n=r(20),l=r(17),c=r(24),p=(r(37),r(38),r(2)),u=r(61),b=r(62),d=(r(64),r(108)),y=r(143),h=r(55),O=r(87);let f=0;const j=o.a.getLogger("esri.layers.Layer");let m=class extends(d.a.EventedMixin(Object(y.a)(O.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new b.a(-180,-90,180,90,u.a.WGS84),this.id=Date.now().toString(16)+"-layer-"+f++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=u.a.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,i=await r.e(151).then(r.bind(null,192));try{return await i.fromUrl(t)}catch(e){throw j.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},i=await r.e(79).then(r.bind(null,173));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",o=r&&r.portal&&r.portal.url||a.a.portalUrl;throw j.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+i+"')",e),e}}initialize(){this.when().catch(e=>{var t,r;Object(p.l)(e)||o.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?Object(c.J)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await Object(h.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new l.a("layer:no-attribution-data","Layer does not have attribution data")}};Object(i.a)([Object(s.b)({type:String})],m.prototype,"attributionDataUrl",void 0),Object(i.a)([Object(s.b)({type:b.a})],m.prototype,"fullExtent",void 0),Object(i.a)([Object(s.b)({readOnly:!0})],m.prototype,"hasAttributionData",null),Object(i.a)([Object(s.b)({type:String})],m.prototype,"id",void 0),Object(i.a)([Object(s.b)({type:Boolean,nonNullable:!0})],m.prototype,"legendEnabled",void 0),Object(i.a)([Object(s.b)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),Object(i.a)([Object(s.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],m.prototype,"opacity",void 0),Object(i.a)([Object(s.b)()],m.prototype,"parent",void 0),Object(i.a)([Object(s.b)({readOnly:!0})],m.prototype,"parsedUrl",null),Object(i.a)([Object(s.b)({type:Boolean})],m.prototype,"popupEnabled",void 0),Object(i.a)([Object(s.b)({type:Boolean})],m.prototype,"attributionVisible",void 0),Object(i.a)([Object(s.b)({type:u.a})],m.prototype,"spatialReference",void 0),Object(i.a)([Object(s.b)({type:String})],m.prototype,"title",void 0),Object(i.a)([Object(s.b)({type:String,readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),Object(i.a)([Object(s.b)()],m.prototype,"url",void 0),Object(i.a)([Object(s.b)({type:Boolean,nonNullable:!0})],m.prototype,"visible",void 0),m=Object(i.a)([Object(n.a)("esri.layers.Layer")],m);var v=m;t.a=v},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r(14),a=(r(4),r(3)),o=(r(6),r(16)),s=r(58),n=r(20),l=r(57),c=r(17),p=r(24),u=(r(37),r(38),r(2)),b=r(80),d=r(111);const y=a.a.getLogger("esri.layers.mixins.PortalLayer"),h=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new d.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(66).then(r.bind(null,203));return Object(u.t)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw Object(u.l)(e)||y.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||b.a.getDefault());return r&&i&&!Object(p.r)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(o.b)({type:d.default})],t.prototype,"portalItem",null),Object(i.a)([Object(s.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(o.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.PortalLayer")],t),t}}});