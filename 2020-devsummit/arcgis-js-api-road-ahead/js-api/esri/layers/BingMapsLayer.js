// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../request ../core/Error ../core/jsonMap ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/SpatialReference ./BaseTileLayer ./mixins/OperationalLayer ./support/TileInfo".split(" "),function(y,z,q,d,r,t,h,e,u,f,v,k,c,l,w,x,m){var n=new u.default({BingMapsAerial:"aerial",BingMapsRoad:"road",
BingMapsHybrid:"hybrid"});return function(p){function a(b){b=p.call(this,b)||this;b.type="bing-maps";b.tileInfo=new m({size:[256,256],dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:l.WebMercator},spatialReference:l.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},
{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,
scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]});b.key=null;b.style="road";b.culture="en-US";b.region=null;b.portalUrl=null;b.hasAttributionData=
!0;return b}q(a,p);Object.defineProperty(a.prototype,"bingMetadata",{get:function(){return this._get("bingMetadata")},set:function(b){this._set("bingMetadata",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"copyright",{get:function(){return f.isSome(this.bingMetadata)?this.bingMetadata.copyright:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"bingLogo",{get:function(){return f.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null},enumerable:!0,
configurable:!0});a.prototype.load=function(b){var a=this;this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(function(){return a._getMetadata()})):this.addResolvingPromise(k.reject(new e("bingmapslayer:load","Bing layer must have bing key.")));return k.resolve(this)};a.prototype.getTileUrl=function(b,a,c){if(!this.loaded||f.isNone(this.bingMetadata))return null;var g=this.bingMetadata.resourceSets[0].resources[0],d=g.imageUrlSubdomains[a%
g.imageUrlSubdomains.length];b=this._getQuadKey(b,a,c);return g.imageUrl.replace("{subdomain}",d).replace("{quadkey}",b)};a.prototype.fetchAttributionData=function(){return t(this,void 0,void 0,function(){var b,a=this;return r(this,function(g){b=this.load().then(function(){return f.isNone(a.bingMetadata)?null:{contributors:a.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(function(a){return{attribution:a.attribution,coverageAreas:a.coverageAreas.map(function(a){return{zoomMin:a.zoomMin,
zoomMax:a.zoomMax,score:1,bbox:[a.bbox[0],a.bbox[1],a.bbox[2],a.bbox[3]]}})}})}});return[2,b]})})};a.prototype._getMetadata=function(){var a=this;return h("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style],{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(function(b){b=b.data;if(200!==b.statusCode)throw new e("bingmapslayer:getmetadata",
b.statusDescription);a.bingMetadata=b;if(0===a.bingMetadata.resourceSets.length)throw new e("bingmapslayer:getmetadata","no bing resourcesets");if(0===a.bingMetadata.resourceSets[0].resources.length)throw new e("bingmapslayer:getmetadata","no bing resources");}).catch(function(a){throw new e("bingmapslayer:getmetadata",a.message);})};a.prototype._getPortalBingKey=function(){var a=this;return h(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(function(b){if(!b.data.bingKey)throw new e("bingmapslayer:getportalbingkey",
"The referenced Portal does not contain a valid bing key");a.key=b.data.bingKey}).catch(function(a){throw new e("bingmapslayer:getportalbingkey",a.message);})};a.prototype._getQuadKey=function(a,c,d){for(var b="";0<a;a--){var e=0,f=1<<a-1;0!==(d&f)&&(e+=1);0!==(c&f)&&(e+=2);b+=e.toString()}return b};d([c.property({json:{read:!1,write:!1},value:null})],a.prototype,"bingMetadata",null);d([c.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],a.prototype,"type",void 0);d([c.property({type:m})],
a.prototype,"tileInfo",void 0);d([c.property({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],a.prototype,"copyright",null);d([c.property({type:String,json:{write:!1,read:!1}})],a.prototype,"key",void 0);d([c.property({type:String,json:{write:{target:"layerType",writer:n.write},read:{source:"layerType",reader:n.read}}})],a.prototype,"style",void 0);d([c.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],readOnly:!0,json:{read:{source:"layerType"}}})],a.prototype,
"operationalLayerType",void 0);d([c.property({type:String,json:{write:!1,read:!1}})],a.prototype,"culture",void 0);d([c.property({type:String,json:{write:!1,read:!1}})],a.prototype,"region",void 0);d([c.property({type:String,json:{write:!0,read:!0}})],a.prototype,"portalUrl",void 0);d([c.property({type:Boolean,json:{write:!1,read:!1}})],a.prototype,"hasAttributionData",void 0);d([c.property({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],a.prototype,"bingLogo",null);return a=d([c.subclass("esri.layers.BingMapsLayer")],
a)}(c.declared(x.OperationalLayer(v.MultiOriginJSONMixin(w))))});