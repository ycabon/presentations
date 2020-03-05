// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/has ../../../../core/lang ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../libs/draco/DracoDecoder ./I3SBinaryReader ./I3SMaterialUtil ./I3SUtil".split(" "),function(m,L,x,y,I,J,n,p,K,t,C,q){m=function(){function b(a,e,c,d,g,b){this.streamDataController=e;this.logger=c;this.defaultGeometrySchema=d;this.requiredAttributes=g;this.options=b;this.layerUrl=a.parsedUrl.path;
this.geometryDefinitions=a.geometryDefinitions;if(a.materialDefinitions){var f=a.textureSetDefinitions;this.materialAndTextures=a.materialDefinitions.map(function(a){return C.getMaterialAndTextures(f,a)})}}b.prototype.load=function(a,e,c){return this.streamDataController.request(a,e,{signal:c})};b.prototype.loadAttribute=function(a,e,c){return this.load(this.layerUrl+"/nodes/"+a.resources.attributes+"/attributes/"+e.key+"/0","binary",c).then(function(a){return t.readBinaryAttribute(e,a)})};b.prototype.loadAttributes=
function(a,e,c){var d=this;return n.eachAlways(e.map(function(e){return d.loadAttribute(a,e.attributeStorageInfo,c)})).then(function(c){for(var b={},f=0;f<e.length;++f)if(c[f].value)b[e[f].name]=c[f].value;else{if(n.isAbortError(c[f].error))throw c[f].error;d.logger.error("Failed to load attributeData for '"+e[f].name+"' on node '"+a.id+"'",c[f].error)}return b})};b.prototype.loadNodeData=function(a,e){return y(this,void 0,void 0,function(){var c,b,g,h,f,u,z,v,m,r,p,A,q,D,w,B,E,y,F,G,H;return x(this,
function(d){switch(d.label){case 0:c=null!=this.requiredAttributes&&a.resources.attributes?this.loadAttributes(a,this.requiredAttributes,e):n.resolve({});var k=this.geometryDefinitions;d={bufferDefinition:null,bufferIndex:0};if(!(null==k||0>a.resources.geometryDefinition)&&(k=0<=a.resources.geometryDefinition?k[a.resources.geometryDefinition].geometryBuffers:null,null!=k))for(var l=0;l<k.length;l++)if(null!=k[l].compressedAttributes){if("draco"===k[l].compressedAttributes.encoding&&K.isSupported()&&
!I("disable-feature:i3s-draco")){d.bufferIndex=l;d.bufferDefinition=k[l];break}}else d.bufferIndex=l,d.bufferDefinition=k[l];b=d;g=b.bufferDefinition;h=b.bufferIndex;f=a.resources.geometry?this.loadGeometry(a,h,e):null;return a.resources.hasSharedResource?[4,this.loadShared(a,e)]:[3,2];case 1:return z=d.sent(),[3,3];case 2:z=null,d.label=3;case 3:return u=z,m=(v=this.materialAndTextures&&0<=a.resources.materialDefinition?this.materialAndTextures[a.resources.materialDefinition]:null!=u?C.getMaterialAndTexturesFromShared(u):
null)&&v.material,r=v&&v.textures,this.options.loadFeatureData?[4,this.loadFeatureData(a,e)]:[3,5];case 4:return A=d.sent(),[3,6];case 5:A=null,d.label=6;case 6:return p=A,q=this.options.loadFeatureData?this.collectGeometries(p):this.meshPyramidGeometryData(m),D=null!=r&&0<r.length?this.loadTextures(a,r,e):null,B=w=null,f?[4,f]:[3,8];case 7:w=d.sent();k=this.defaultGeometrySchema;l=u;if(k&&l&&l.materialDefinitions){var x=Object.keys(l.materialDefinitions)[0];!l.materialDefinitions[x].params.vertexRegions&&
k.vertexAttributes.region&&(k=J.clone(k),delete k.vertexAttributes.region)}E=k;B=(y=!(!g||!g.compressedAttributes||"draco"!==g.compressedAttributes.encoding))?t.createGeometryIndexFromAttributes(g.compressedAttributes.attributes):g?t.createGeometryIndexFromDefinition(g,a.vertexCount,a.numFeatures):t.createGeometryIndexFromSchema(w,E);d.label=8;case 8:return[4,D];case 9:return F=d.sent(),[4,c];case 10:return H=(G=d.sent())?{attributeData:G,loadedAttributes:this.requiredAttributes}:null,[2,{allGeometryData:q,
attributeDataInfo:H,geometryBuffer:w,geometryIndex:B,requiredTextures:r,textureData:F}]}})})};b.addAbsoluteHrefTexture=function(a,e){a=a.textureDefinitions;if(null!=a)for(var c=0,d=Object.keys(a);c<d.length;c++)for(var b=0,h=a[d[c]].images;b<h.length;b++){var f=h[b];Array.isArray(f.href)?f.hrefConcat=f.href.map(function(a){return p.makeAbsolute(a,e)}):f.hrefConcat=p.makeAbsolute(f.href,e)}};b.fixTextureEncodings=function(a){a=a.textureDefinitions;if(null!=a)for(var b in a){var c=a[b];if(Array.isArray(c.encoding))for(var d=
0;d<c.encoding.length;d++){var g=c.encoding[d];"data:"===g.substring(0,5)&&(c.encoding[d]=g.substring(5))}else g=c.encoding,"data:"===g.substring(0,5)&&(c.encoding=g.substring(5))}};b.prototype.loadShared=function(a,e){var c=this.layerUrl+"/nodes/"+a.resources.geometry+"/shared";return this.load(c,"json",e).then(function(a){b.fixTextureEncodings(a);b.addAbsoluteHrefTexture(a,c);return a})};b.prototype.loadTexture=function(a,b,c,d,g,h){return g===q.DDS_ENCODING_STRING?this.load(a,"binary",h).then(function(a){return{id:b,
usage:c,data:a,encoding:g}}):this.load(a,"image",h).then(function(a){var e=a;if(d&&4096<=a.width*a.height){var e=Math.ceil(a.width/2),f=Math.ceil(a.height/2),h=document.createElement("canvas");h.width=e;h.height=f;h.getContext("2d").drawImage(a,0,0,e,f);e=h}return{id:b,usage:c,data:e,encoding:g}})};b.prototype.loadTextures=function(a,e,c){var d=this,g=this.options.textureFormat===b.TextureFormat.Compressed,h=this.options.textureFormat===b.TextureFormat.Downsampled,f=this.options.textureUsageMask;
return n.all(e.map(function(b){if(0===(b.usage&f))return null;var e=q.selectEncoding(b.encodings,g);return null==e?(d.logger.error("No known encoding for texture found on node "+a.id),n.reject()):d.loadTexture(d.layerUrl+"/nodes/"+(a.resources.texture||a.id)+"/textures/"+e.name,b.id,b.usage,h,e.encoding,c)}))};b.prototype.meshPyramidGeometryData=function(a){return[{featureIds:[],geometries:[{type:"ArrayBufferView",params:{material:a}}],featureDataPosition:[0,0,0]}]};b.prototype.collectGeometries=
function(a){var b=[],c=0;for(a=a.featureData;c<a.length;c++){var d=a[c],g=d.geometries;if(null!=g)for(var h=0;h<g.length;h++)b.push({featureIds:[d.id],featureDataPosition:d.position,geometries:[g[h]]});else null!=d.position&&b.push({featureIds:[d.id],featureDataPosition:d.position,geometries:null})}return b};b.prototype.loadFeatureData=function(a,b){return this.load(this.layerUrl+"/nodes/"+a.id+"/features/0","json",b)};b.prototype.loadGeometry=function(a,b,c){return this.load(this.layerUrl+"/nodes/"+
a.resources.geometry+"/geometries/"+b,"binary",c)};return b}();(function(b){b=b.TextureFormat||(b.TextureFormat={});b[b.Compressed=0]="Compressed";b[b.Normal=1]="Normal";b[b.Downsampled=2]="Downsampled"})(m||(m={}));return m});