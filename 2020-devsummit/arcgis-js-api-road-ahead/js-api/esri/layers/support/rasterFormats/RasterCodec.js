// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../PixelBlock ./ImageCanvasDecoder ./JpgPlus ./Lerc2Codec ./LercCodec ./Png ./Raw ./TiffDecoder".split(" "),function(W,X,A,B,E,u,v,J,K,L,M,N,O,F){function P(a,b){if(!G)throw new u("rasterCoded:decode","lerc decoder is not supported on big endian platform");var c=b.width,d=b.height,e=b.pixelType,f=H(e),g=f.pixelTypeCtor;b=null==b.noDataValue?
f.noDataValue:b.noDataValue;for(var f=0,h,t=0,m,r=a.byteLength-10;t<r;){var l=M.decode(a,{inputOffset:t,encodedMaskData:h,returnMask:0===f?!0:!1,returnEncodedMask:0===f?!0:!1,returnFileInfo:!0,pixelType:g,noDataValue:b});if(c&&d&&(l.width!==c||l.height!==d))throw new u("rasterCoded:decode","lerc decoded result has width or height different from specified in options");t=l.fileInfo.eofOffset;0===f&&(h=l.encodedMaskData,m=new v({width:l.width,height:l.height,pixels:[],pixelType:e,mask:l.maskData,statistics:[]}));
f++;m.addData({pixels:l.pixelData,statistics:{minValue:l.minValue,maxValue:l.maxValue,noDataValue:l.noDataValue}});10<r-t&&(l=String.fromCharCode.apply(null,new Uint8Array(a,t,10)),t=-1<t+l.indexOf("CntZ")?l.indexOf("CntZ"):0)}return m}function Q(a,b){if(!G)throw new u("rasterCoded:decode","lerc decoder is not supported on big endian platform");var c=0,d=0,e=0,f,g,h,t=a.byteLength-10,m=[],r=b.width;for(b=b.height;d<t;){g=L.decode(a,{inputOffset:d,maskData:f,returnFileInfo:!0});if(r&&b&&(g.width!==
r||g.height!==b))throw new u("rasterCoded:decode","lerc2 decoded result has width or height different from what's specified in options");d=g.fileInfo.eofOffset;0===c&&(e=g.fileInfo.numValidPixel,f=g.maskData,h=new v({width:g.width,height:g.height,pixels:[],pixelType:g.fileInfo.pixelType,mask:g.maskData,statistics:[]}));g.fileInfo.mask&&0<g.fileInfo.mask.numBytes&&m.push(g.maskData);c++;h.addData({pixels:g.pixelData,statistics:{minValue:g.minValue,maxValue:g.maxValue}});10<t-d&&(g=String.fromCharCode.apply(null,
new Uint8Array(a,d,10)),d+=-1<g.indexOf("Lerc")?g.indexOf("Lerc"):0)}d=c=a=0;if(1<m.length){d=h.width*h.height;f=new Uint8Array(d);f.set(m[0]);for(a=1;a<m.length;a++)for(e=m[a],c=0;c<d;c++)f[c]&=e[c];for(c=e=0;c<d;c++)e+=f[c];h.mask=f}h.validPixelCount=e;return h}function R(a){a=F.decode(a);a=new v({width:a.width,height:a.height,pixels:a.pixels,pixelType:a.pixelType.toLowerCase(),mask:a.mask,statistics:null});a.updateStatistics();return a}function S(a){a=K.decode(a);a=new v({width:a.width,height:a.height,
pixels:a.pixels,pixelType:"U8",mask:a.mask,statistics:null});a.updateStatistics();return a}function T(a,b){a=new Uint8Array(a);var c=new N(a);a=b.width;var d=b.height;b=a*d;for(var c=c.decode(),e=0,f=0,f=new Uint8Array(b),e=0;e<b;e++)f[e]=c[4*e+3];d=new v({width:a,height:d,pixels:[],pixelType:"U8",mask:f,statistics:[]});for(e=0;3>e;e++){a=new Uint8Array(b);for(f=0;f<b;f++)a[f]=c[4*f+e];d.addData({pixels:a})}d.updateStatistics();return d}function U(a,b,c){return B(this,void 0,void 0,function(){var d,
e,f,g;return A(this,function(h){switch(h.label){case 0:return d=new J,e=E({applyJpegMask:!1},b),[4,d.decode(a,e,c)];case 1:return f=h.sent(),g=new v(f),g.updateStatistics(),[2,g]}})})}function I(a){if(null==a)throw new u("rasterCodec:decode","parameter encodeddata is required.");a=new Uint8Array(a,0,10);var b="";255===a[0]&&216===a[1]?b="jpg":137===a[0]&&80===a[1]&&78===a[2]&&71===a[3]?b="png":67===a[0]&&110===a[1]&&116===a[2]&&90===a[3]&&73===a[4]&&109===a[5]&&97===a[6]&&103===a[7]&&101===a[8]&&
32===a[9]?b="lerc":76===a[0]&&101===a[1]&&114===a[2]&&99===a[3]&&50===a[4]&&32===a[5]?b="lerc2":73===a[0]&&73===a[1]&&42===a[2]&&0===a[3]||77===a[0]&&77===a[1]&&0===a[2]&&42===a[3]?b="tiff":-1<String.fromCharCode.apply(null,a).toLowerCase().indexOf("error")&&(b="error");return b}function V(a){var b=null;switch(a){case "lerc":b=P;break;case "lerc2":b=Q;break;case "jpg":b=S;break;case "png":b=T;break;case "bsq":case "bip":b=function(b,d){var c=H(d.pixelType).pixelTypeCtor,f=O.decode;b=f(b,{width:d.width,
height:d.height,pixelType:c,format:a});d=new v({width:d.width,height:d.height,pixels:b.pixels,pixelType:d.pixelType,mask:b.mask,statistics:null});d.updateStatistics();return d};break;case "tiff":b=R;break;case "error":b=function(){throw new u("rasterCodec:decode","input data contains error");};break;default:b=function(){throw new u("rasterCodec:decode","unsupported raster format");}}return b}function H(a){var b=null,c=null;switch(a?a.toLowerCase():"f32"){case "u1":case "u2":case "u4":case "u8":c=
Math.pow(2,8)-1;b=Uint8Array;break;case "u16":c=c||Math.pow(2,16)-1;b=Uint16Array;break;case "u32":c=c||Math.pow(2,32)-1;b=Uint32Array;break;case "s8":c=c||0-Math.pow(2,7);b=Int8Array;break;case "s16":c=c||0-Math.pow(2,15);b=Int16Array;break;case "s32":c=c||0-Math.pow(2,31);b=Int32Array;break;default:b=Float32Array}return{pixelTypeCtor:b,noDataValue:c}}var G=function(){var a=new ArrayBuffer(4),b=new Uint8Array(a);(new Uint32Array(a))[0]=1;return 1===b[0]}();return function(){function a(){}a.getFormat=
function(a){a=I(a);"lerc2"===a?a="lerc":"error"===a&&(a="");return a};a.decode=function(a,c,d){return B(this,void 0,void 0,function(){var b,f,g;return A(this,function(h){switch(h.label){case 0:if(null==a)throw new u("rasterCodec:decode","missing encodeddata parameter.");if(null==c||null==c.width||null==c.height)throw new u("rasterCodec:decode","requires width and height in options parameter.");b=c.format&&c.format.toLowerCase();if("tiff"===b&&c.customOptions)return h=F.decodeTileOrStrip(a,c.customOptions),
h=new v({width:h.width,height:h.height,pixels:h.pixels,pixelType:h.pixelType.toLowerCase(),mask:h.mask,statistics:null}),h.updateStatistics(),[2,h];if(!b||"bsq"!==b&&"bip"!==b)b=I(a);return!c.useCanvas||"jpg"!==b&&"png"!==b?[3,2]:[4,U(a,c,d)];case 1:return g=h.sent(),[3,3];case 2:f=V(b);c.isPoint&&(c=E({},c),c.width++,c.height++);g=f(a,c);if(c.isPoint){var e=g,m=void 0;void 0===m&&(m=1);if(e){var r=e.pixels,l=e.width,x=e.mask;if(r&&0!==r.length){var A=r.length,q=l-1,w=e.height-1,D=[],n,k,p,y,z,C,
B=v.getPixelArrayConstructor(e.pixelType);if(0===m){for(m=0;m<A;m++){y=r[m];z=new B(q*w);for(n=0;n<w;n++)for(p=n*l,k=0;k<q;k++)z[n*q+k]=y[p+k];D.push(z)}if(x)for(C=new Uint8Array(q*w),n=0;n<w;n++)for(p=n*l,k=0;k<q;k++)C[n*q+k]=x[p+k]}else{for(m=0;m<A;m++){y=r[m];z=new B(q*w);for(n=0;n<w;n++)for(p=n*l,k=0;k<q;k++)z[n*q+k]=(y[p+k]+y[p+k+1]+y[p+l+k]+y[p+l+k+1])/4;D.push(z)}if(x)for(C=new Uint8Array(q*w),n=0;n<w;n++)for(p=n*l,k=0;k<q;k++)C[n*q+k]=Math.min.apply(null,[x[p+k],x[p+k+1],x[p+l+k],x[p+l+k+
1]])}e.width=q;e.height=w;e.mask=C;e.pixels=D}}}h.label=3;case 3:return[2,g]}})})};return a}()});