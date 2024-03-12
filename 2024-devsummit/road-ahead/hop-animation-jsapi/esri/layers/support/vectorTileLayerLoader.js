// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/lang ../../core/promiseUtils ../../core/urlUtils ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../views/2d/engine/vectorTiles/style/VectorTileSource".split(" "),function(t,z,p,A,l,q,u,B){function n(...b){let c=void 0;for(const a of b)null!=a&&(l.isProtocolRelative(a)?c&&=c.split("://")[0]+":"+a.trim():c=l.isAbsolute(a)?a:l.join(c,a));return c?l.removeTrailingSlash(c):void 0}async function m(b,c,a,k,g){A.throwIfAborted(g);
let e,h;if("string"===typeof a){a=l.normalize(a);var d=await z(a,{...g,responseType:"json",query:{f:"json",...g?.query}});d.ssl&&(e&&=e.replace(/^http:/i,"https:"),h&&=h.replace(/^http:/i,"https:"));h=e=a}else null!=a&&(d={data:a},e=a.jsonUrl||null,h=k);if((d=d?.data)&&"sources"in d&&d.sources)return b.styleUrl=e||null,C(b,d,h,g);if(!(d&&"sources"in d&&d.sources))return b.sourceUrl?v(b,d,h,!1,c,g):(b.sourceUrl=e||null,v(b,d,h,!0,c,g));throw Error("You must specify the URL or the JSON for a service or for a style.");
}function w(b){return"object"===typeof b&&!!b&&"tilejson"in b&&null!=b.tilejson}async function C(b,c,a,k){a=a?l.removeFile(a):l.getAppBaseUrl();b.styleBase=a;b.style=c;c["sprite-format"]&&"webp"===c["sprite-format"].toLowerCase()&&(b.spriteFormat="webp");const g=[];if(c.sources&&c.sources.esri){const e=c.sources.esri;e.url?await m(b,"esri",n(a,e.url),void 0,k):g.push(m(b,"esri",e,a,k))}for(const e of Object.keys(c.sources))"esri"!==e&&"vector"===c.sources[e].type&&(c.sources[e].url?g.push(m(b,e,n(a,
c.sources[e].url),void 0,k)):c.sources[e].tiles&&g.push(m(b,e,c.sources[e],a,k)));await Promise.all(g)}async function v(b,c,a,k,g,e){a=a?l.removeTrailingSlash(a)+"/":l.getAppBaseUrl();if(c.hasOwnProperty("tileInfo"))var h=c;else{h={xmin:-2.0037507067161843E7,ymin:-2.0037507067161843E7,xmax:2.0037507067161843E7,ymax:2.0037507067161843E7,spatialReference:{wkid:102100,latestWkid:3857}};var d=null;if(w(c)){var {bounds:f}=c;f&&(d=u.geographicToWebMercator({x:f[0],y:f[1],spatialReference:p.clone(q.wgs84)}),
f=u.geographicToWebMercator({x:f[2],y:f[3],spatialReference:p.clone(q.wgs84)}),d={xmin:d.x,ymin:d.y,xmax:f.x,ymax:f.y,spatialReference:p.clone(q.webMercator)})}null===d&&(d=h);f=78271.51696400007;var x=2.958287637957775E8,y=[],D=c.hasOwnProperty("maxzoom")&&null!=c.maxzoom?+c.maxzoom:22;for(let r=0;r<=D;r++)y.push({level:r,scale:x,resolution:f}),f/=2,x/=2;h={capabilities:"TilesOnly",initialExtent:d,fullExtent:h,minScale:0,maxScale:0,tiles:c.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,
y:2.0037508342787E7},lods:y,spatialReference:p.clone(q.webMercator)}}}d=new B(g,l.addQueryParameters(a,e?.query??{}),h);if(!k&&b.primarySourceName in b.sourceNameToSource){f=b.sourceNameToSource[b.primarySourceName];if(!f.isCompatibleWith(d))return;null!=d.fullExtent&&(null!=f.fullExtent?f.fullExtent.union(d.fullExtent):f.fullExtent=d.fullExtent.clone());f.tileInfo&&d.tileInfo&&f.tileInfo.lods.length<d.tileInfo.lods.length&&(f.tileInfo=d.tileInfo)}k&&(b.sourceBase=a,b.source=c,b.validatedSource=h,
b.primarySourceName=g);b.sourceNameToSource[g]=d;if(!w(b)&&"defaultStyles"in c&&!b.style){if(null==c.defaultStyles)throw Error();return"string"===typeof c.defaultStyles?m(b,"",n(a,c.defaultStyles,"root.json"),void 0,e):m(b,"",c.defaultStyles,n(a,"root.json"),e)}}t.loadMetadata=async function(b,c){const a={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[k,g]="string"===typeof b?[b,
null]:[null,b.jsonUrl];await m(a,"esri",b,g,c);return{layerDefinition:a.validatedSource,url:k,serviceUrl:a.sourceUrl,style:a.style,styleUrl:a.styleUrl,spriteUrl:a.style.sprite&&n(a.styleBase,a.style.sprite),spriteFormat:a.spriteFormat,glyphsUrl:a.style.glyphs&&n(a.styleBase,a.style.glyphs),sourceNameToSource:a.sourceNameToSource,primarySourceName:a.primarySourceName}};Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});