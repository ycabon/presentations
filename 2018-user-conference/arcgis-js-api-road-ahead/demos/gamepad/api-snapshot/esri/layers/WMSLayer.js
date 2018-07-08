// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Graphic ../PopupTemplate ../request ../core/Collection ../core/CollectionFlattener ../core/Handles ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/write ../geometry/Extent ../geometry/SpatialReference ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/ExportWMSImageParameters ./support/WMSSublayer ./support/wmsUtils".split(" "),
function(m,J,g,w,e,x,y,l,z,A,n,h,b,B,p,q,C,D,E,F,G,H,r,t){function I(b,c){return b.some(function(a){for(var f in a)if(B.willPropertyWrite(a,f,null,c))return!0;return!1})}function v(b,c,a){var f=[],d=new Map;b.forEach(function(b){var e=new r;e.read(b,c);a&&-1===a.indexOf(e.name)&&(e.visible=!1);d[e.id]=e;null!=b.parentLayerId&&-1!==b.parentLayerId?(b=d[b.parentLayerId],b.sublayers||(b.sublayers=[]),b.sublayers.unshift(e)):f.unshift(e)});return f}return function(u){function c(a,f){var d=u.call(this)||
this;d._sublayersHandles=new n;d.allSublayers=new A({root:d,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return a.sublayers}});d.customParameters=null;d.customLayerParameters=null;d.copyright=null;d.description=null;d.fullExtent=null;d.fullExtents=null;d.featureInfoFormat=null;d.featureInfoUrl=null;d.imageFormat=null;d.imageMaxHeight=2048;d.imageMaxWidth=2048;d.imageTransparency=!0;d.legendEnabled=!0;d.mapUrl=null;d.operationalLayerType="WMS";d.spatialReference=null;d.spatialReferences=
null;d.sublayers=null;d.type="wms";d.version=null;d.watch("sublayers",function(a,f){f&&(f.forEach(function(a){a.layer=null}),d._sublayersHandles.removeAll(),d._sublayersHandles=null);a&&(a.forEach(function(a){a.parent=d;a.layer=d}),d._sublayersHandles||(d._sublayersHandles=new n),d._sublayersHandles.add([a.on("after-add",function(a){a=a.item;a.parent=d;a.layer=d}),a.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null})]))},!0);return d}w(c,u);c.prototype.normalizeCtorArgs=function(a,
f){return"string"===typeof a?g({url:a},f):a};c.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]}).then(function(){return a._fetchService()}));return this.when()};c.prototype.readFullExtentFromItemOrMap=function(a,f,d){a=f.extent;return(f=f.spatialReferences)&&0<f.length?new p({xmin:a[0][0],ymin:a[0][1],xmax:a[1][0],ymax:a[1][1],spatialReference:f[0]}):new p({xmin:a[0][0],ymin:a[0][1],xmax:a[1][0],ymax:a[1][1]})};c.prototype.writeFullExtent=
function(a,f,d,c){f.extent=[[a.xmin,a.ymin],[a.xmax,a.ymax]]};c.prototype.readImageFormat=function(a,f){return(a=f.supportedImageFormatTypes)&&-1<a.indexOf("image/png")?"image/png":a&&a[0]};c.prototype.readSpatialReferenceFromItemOrDocument=function(a,f,d){return new q(f.spatialReferences[0])};c.prototype.writeSpatialReferences=function(a,f,d,c){var b=this.spatialReference&&this.spatialReference.wkid;a&&b?(f.spatialReferences=a.filter(function(a){return a!==b}),f.spatialReferences.unshift(b)):f.spatialReferences=
a};c.prototype.readSublayersFromItemOrMap=function(a,f,d){return v(f.layers,d,f.visibleLayers)};c.prototype.readSublayers=function(a,f,d){return v(f.layers,d)};c.prototype.writeSublayers=function(a,f,d,c){f.layers=[];var b=new Map;a=a.flatten(function(a){return(a=a.sublayers)&&a.toArray()}).toArray();a.forEach(function(a){"number"===typeof a.parent.id&&(b.has(a.parent.id)?b.get(a.parent.id).push(a.id):b.set(a.parent.id,[a.id]))});a.forEach(function(a){var d=g({sublayer:a},c),e=a.write({parentLayerId:"number"===
typeof a.parent.id?a.parent.id:-1},d);b.has(a.id)&&(e.sublayerIds=b.get(a.id));!a.sublayers&&a.name&&(a=a.write({},d),delete a.id,f.layers.push(a))});f.visibleLayers=a.filter(function(a){return a.visible&&!a.sublayers}).map(function(a){return a.name})};c.prototype.createExportImageParameters=function(a){this._exportWMSImageParameters=new H({layer:this,extent:a});return this._exportWMSImageParameters.toJSON()};c.prototype.fetchImage=function(a,c,d,b){var f=this.parsedUrl.path;a={responseType:"image",
allowImageDataAccess:b&&b.allowImageDataAccess||!1,query:this._mixCustomParameters(g({width:c,height:d},this.createExportImageParameters(a)))};b&&b.timestamp&&(a.query=g({_ts:b.timestamp},a.query));return l(f,a).then(function(a){return a.data})};c.prototype.fetchFeatureInfo=function(a,b,c,e,h){var d=this,f=t.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!f)return null;b=g({query_layers:f,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,
width:b,height:c},"1.3.0"===this.version?{I:e,J:h}:{x:e,y:h});var k=g({},this.createExportImageParameters(a),b),k=this._mixCustomParameters(k);return l(this.featureInfoUrl,{query:k,responseType:"text/html"}).then(function(a){var b=d.featureInfoUrl,b=b+(-1===b.indexOf("?")?"?":""),c;for(c in k)b+="?"===b.substring(b.length-1,b.length)?"":"\x26",b+=c+"\x3d"+k[c];return new x({sourceLayer:d,popupTemplate:new y({title:d.title,content:'\x3ciframe src\x3d"'+b+'" frameborder\x3d"0" marginwidth\x3d"0" marginheight\x3d"0"\x3e'+
a.data+"\x3cframe\x3e"})})})};c.prototype.findSublayerById=function(a){return this.allSublayers.find(function(b){return b.id===a})};c.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return h.create(function(a){return m(["../views/2d/layers/WMSLayerView2D"],a)});case "3d":return h.create(function(a){return m(["../views/3d/layers/WMSLayerView3D"],a)})}};c.prototype._fetchService=function(){var a=this;return h.resolve().then(function(){if(a.resourceInfo)return{ssl:!1,data:a.resourceInfo};
a.parsedUrl.query&&a.parsedUrl.query.service&&(a.parsedUrl.query.SERVICE=a.parsedUrl.query.service,delete a.parsedUrl.query);a.parsedUrl.query&&a.parsedUrl.query.request&&(a.parsedUrl.query.REQUEST=a.parsedUrl.query.service,delete a.parsedUrl.query.request);return l(a.parsedUrl.path,{query:g({SERVICE:"WMS",REQUEST:"GetCapabilities"},a.parsedUrl.query,a.customParameters),responseType:"xml"})}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.resourceInfo||(b.data=t.parseCapabilities(b.data,
a.url));b.data&&a.read(b.data,{origin:"service"})})};c.prototype._mixCustomParameters=function(a){if(!this.customLayerParameters&&!this.customParameters)return a;var b=g({},this.customParameters,this.customLayerParameters),c;for(c in b)a[c.toLowerCase()]=b[c];return a};e([b.property({readOnly:!0})],c.prototype,"allSublayers",void 0);e([b.property({json:{write:!0}})],c.prototype,"customParameters",void 0);e([b.property({json:{write:!0}})],c.prototype,"customLayerParameters",void 0);e([b.property({type:String,
json:{write:!0}})],c.prototype,"copyright",void 0);e([b.property()],c.prototype,"description",void 0);e([b.property({json:{origins:{service:{read:{source:"extent"}}}}})],c.prototype,"fullExtent",void 0);e([b.reader(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null);e([b.writer(["web-document","portal-item"],"fullExtent")],c.prototype,"writeFullExtent",null);e([b.property()],c.prototype,"fullExtents",void 0);e([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],
c.prototype,"featureInfoFormat",void 0);e([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0);e([b.property({type:String,json:{origins:{"web-document":{read:{source:"format"},write:{target:"format"}}}}})],c.prototype,"imageFormat",void 0);e([b.reader("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null);e([b.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0);
e([b.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0);e([b.property()],c.prototype,"imageTransparency",void 0);e([b.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],c.prototype,"legendEnabled",void 0);e([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0);e([b.property()],c.prototype,"operationalLayerType",void 0);e([b.property({type:q,
json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0);e([b.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null);e([b.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],c.prototype,"spatialReferences",void 0);e([b.writer(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",
null);e([b.property({type:z.ofType(r),json:{write:{overridePolicy:function(a,b,c){if(I(this.allSublayers,c))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0);e([b.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null);e([b.reader("service","sublayers",["layers"])],c.prototype,"readSublayers",null);e([b.writer("sublayers")],c.prototype,"writeSublayers",null);e([b.property({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,
"type",void 0);e([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0);return c=e([b.subclass("esri.layers.WMSLayer")],c)}(b.declared(C,D,E,F,G))});