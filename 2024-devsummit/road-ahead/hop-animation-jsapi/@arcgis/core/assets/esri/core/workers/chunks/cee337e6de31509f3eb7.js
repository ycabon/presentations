"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8281],{38281:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var a=e(82426),i=(e(72836),e(66106),e(29794),{});i.defaultNoDataValue=(0,a.g)(-1/0),i.decode=function(t,n){var e=(n=n||{}).encodedMaskData||null===n.encodedMaskData,l=u(t,n.inputOffset||0,e),c=null!=n.noDataValue?(0,a.g)(n.noDataValue):i.defaultNoDataValue,f=r(l,n.pixelType||Float32Array,n.encodedMaskData,c,n.returnMask),h={width:l.width,height:l.height,pixelData:f.resultPixels,minValue:l.pixels.minValue,maxValue:l.pixels.maxValue,noDataValue:c};return f.resultMask&&(h.maskData=f.resultMask),n.returnEncodedMask&&l.mask&&(h.encodedMaskData=l.mask.bitset?l.mask.bitset:null),n.returnFileInfo&&(h.fileInfo=o(l,c),n.computeUsedBitDepths&&(h.fileInfo.bitDepths=s(l))),h};var r=function(t,n,e,a,i){var r,o,s=0,u=t.pixels.numBlocksX,c=t.pixels.numBlocksY,f=Math.floor(t.width/u),h=Math.floor(t.height/c),m=2*t.maxZError;e=e||(t.mask?t.mask.bitset:null),r=new n(t.width*t.height),i&&e&&(o=new Uint8Array(t.width*t.height));for(var d,M,g=new Float32Array(f*h),k=0;k<=c;k++){var x=k!==c?h:t.height%c;if(0!==x)for(var p=0;p<=u;p++){var w=p!==u?f:t.width%u;if(0!==w){var b,y,v,B,V=k*t.width*h+p*f,D=t.width-w,U=t.pixels.blocks[s];if(U.encoding<2?(0===U.encoding?b=U.rawData:(l(U.stuffedData,U.bitsPerPixel,U.numValidPixels,U.offset,m,g,t.pixels.maxValue),b=g),y=0):v=2===U.encoding?0:U.offset,e)for(M=0;M<x;M++){for(7&V&&(B=e[V>>3],B<<=7&V),d=0;d<w;d++)7&V||(B=e[V>>3]),128&B?(o&&(o[V]=1),r[V++]=U.encoding<2?b[y++]:v):(o&&(o[V]=0),r[V++]=a),B<<=1;V+=D}else if(U.encoding<2)for(M=0;M<x;M++){for(d=0;d<w;d++)r[V++]=b[y++];V+=D}else for(M=0;M<x;M++)if(r.fill)r.fill(v,V,V+w),V+=w+D;else{for(d=0;d<w;d++)r[V++]=v;V+=D}if(1===U.encoding&&y!==U.numValidPixels)throw"Block and Mask do not match";s++}}}return{resultPixels:r,resultMask:o}},o=function(t,n){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,minValue:t.pixels.minValue,noDataValue:n}}},s=function(t){for(var n=t.pixels.numBlocksX*t.pixels.numBlocksY,e={},a=0;a<n;a++){var i=t.pixels.blocks[a];0===i.encoding?e.float32=!0:1===i.encoding?e[i.bitsPerPixel]=!0:e[0]=!0}return Object.keys(e)},u=function(t,n,e){var a={},i=new Uint8Array(t,n,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,i),"CntZImage"!=a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;n+=10;var r=new DataView(t,n,24);if(a.fileVersion=r.getInt32(0,!0),a.imageType=r.getInt32(4,!0),a.height=r.getUint32(8,!0),a.width=r.getUint32(12,!0),a.maxZError=r.getFloat64(16,!0),n+=24,!e)if(r=new DataView(t,n,16),a.mask={},a.mask.numBlocksY=r.getUint32(0,!0),a.mask.numBlocksX=r.getUint32(4,!0),a.mask.numBytes=r.getUint32(8,!0),a.mask.maxValue=r.getFloat32(12,!0),n+=16,a.mask.numBytes>0){var o=new Uint8Array(Math.ceil(a.width*a.height/8)),s=(r=new DataView(t,n,a.mask.numBytes)).getInt16(0,!0),u=2,l=0;do{if(s>0)for(;s--;)o[l++]=r.getUint8(u++);else{var c=r.getUint8(u++);for(s=-s;s--;)o[l++]=c}s=r.getInt16(u,!0),u+=2}while(u<a.mask.numBytes);if(-32768!==s||l<o.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=o,n+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(o=new Uint8Array(Math.ceil(a.width*a.height/8)),a.mask.bitset=o);r=new DataView(t,n,16),a.pixels={},a.pixels.numBlocksY=r.getUint32(0,!0),a.pixels.numBlocksX=r.getUint32(4,!0),a.pixels.numBytes=r.getUint32(8,!0),a.pixels.maxValue=r.getFloat32(12,!0),n+=16;var f=a.pixels.numBlocksX,h=a.pixels.numBlocksY,m=f+(a.width%f>0?1:0),d=h+(a.height%h>0?1:0);a.pixels.blocks=new Array(m*d);for(var M=1e9,g=0,k=0;k<d;k++)for(var x=0;x<m;x++){var p=0,w=t.byteLength-n;r=new DataView(t,n,Math.min(10,w));var b={};a.pixels.blocks[g++]=b;var y=r.getUint8(0);if(p++,b.encoding=63&y,b.encoding>3)throw"Invalid block encoding ("+b.encoding+")";if(2!==b.encoding){if(0!==y&&2!==y){if(y>>=6,b.offsetType=y,2===y)b.offset=r.getInt8(1),p++;else if(1===y)b.offset=r.getInt16(1,!0),p+=2;else{if(0!==y)throw"Invalid block offset type";b.offset=r.getFloat32(1,!0),p+=4}if(M=Math.min(b.offset,M),1===b.encoding)if(y=r.getUint8(p),p++,b.bitsPerPixel=63&y,y>>=6,b.numValidPixelsType=y,2===y)b.numValidPixels=r.getUint8(p),p++;else if(1===y)b.numValidPixels=r.getUint16(p,!0),p+=2;else{if(0!==y)throw"Invalid valid pixel count type";b.numValidPixels=r.getUint32(p,!0),p+=4}}var v;if(n+=p,3!=b.encoding)if(0===b.encoding){var B=(a.pixels.numBytes-1)/4;if(B!==Math.floor(B))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*B),new Uint8Array(v).set(new Uint8Array(t,n,4*B));for(var V=new Float32Array(v),D=0;D<V.length;D++)M=Math.min(M,V[D]);b.rawData=V,n+=4*B}else if(1===b.encoding){var U=Math.ceil(b.numValidPixels*b.bitsPerPixel/8),I=Math.ceil(U/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(t,n,U)),b.stuffedData=new Uint32Array(v),n+=U}}else n++,M=Math.min(M,0)}return a.pixels.minValue=M,a.eofOffset=n,a},l=function(t,n,e,a,i,r,o){var s,u,l,c=(1<<n)-1,f=0,h=0,m=Math.ceil((o-a)/i),d=4*t.length-Math.ceil(n*e/8);for(t[t.length-1]<<=8*d,s=0;s<e;s++){if(0===h&&(l=t[f++],h=32),h>=n)u=l>>>h-n&c,h-=n;else{var M=n-h;u=(l&c)<<M&c,u+=(l=t[f++])>>>(h=32-M)}r[s]=u<m?a+u*i:o}return r};const c=i.decode;class f{_decode(t){const n=c(t.buffer,t.options);return Promise.resolve({result:n,transferList:[n.pixelData.buffer]})}}function h(){return new f}},29794:(t,n,e)=>{function a(){return 1e-6}e.d(n,{R:()=>i,a:()=>u,g:()=>a,t:()=>s});const i=Math.random,r=Math.PI/180,o=180/Math.PI;function s(t){return t*r}function u(t){return t*o}},82426:(t,n,e)=>{e.d(n,{a:()=>f,b:()=>x,c:()=>o,d:()=>l,e:()=>h,f:()=>m,g:()=>g,h:()=>w,k:()=>p,l:()=>s,n:()=>r,r:()=>c,s:()=>u});var a=e(72836);const i=new Float32Array(1);function r(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function o(t,n,e){return Math.min(Math.max(t,n),e)}function s(t,n,e){return t+(n-t)*e}function u(t,n,e,a,i){return s(a,i,(t-n)/(e-n))}function l(t){return t*Math.PI/180}function c(t){return 180*t/Math.PI}function f(t){return Math.acos(o(t,-1,1))}function h(t){return Math.asin(o(t,-1,1))}function m(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const d=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const M=BigInt("1000000");function g(t){return k(Math.max(-w,Math.min(t,w)))}function k(t){return i[0]=t,i[0]}function x(t,n){const e=(0,a.l)(t),i=h(t[2]/e),r=Math.atan2(t[1]/e,t[0]/e);return(0,a.s)(n,e,i,r),n}function p(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],a=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(m(n,1)&&m(e,1)&&m(a,1))}!function(t){const n=function(t){return d.setFloat64(0,t),d.getBigInt64(0)}(t=Math.abs(t)),e=(a=n<=M?M:n-M,d.setBigInt64(0,a),d.getFloat64(0));var a;Math.abs(t-e)}(1);const w=k(34028234663852886e22)},72836:(t,n,e)=>{e.d(n,{A:()=>h,B:()=>S,C:()=>C,D:()=>m,E:()=>c,F:()=>f,G:()=>X,a:()=>B,b:()=>g,c:()=>l,d:()=>y,e:()=>v,g:()=>V,h:()=>u,i:()=>x,j:()=>w,k:()=>p,l:()=>r,m:()=>k,n:()=>b,o:()=>A,p:()=>o,r:()=>d,s:()=>s,t:()=>U,u:()=>M,v:()=>E,w:()=>D,x:()=>F});var a=e(66106),i=e(29794);function r(t){const n=t[0],e=t[1],a=t[2];return Math.sqrt(n*n+e*e+a*a)}function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function s(t,n,e,a){return t[0]=n,t[1]=e,t[2]=a,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function l(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function c(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function f(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function m(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function d(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t}function M(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t}function g(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function k(t,n,e,a){return t[0]=n[0]+e[0]*a,t[1]=n[1]+e[1]*a,t[2]=n[2]+e[2]*a,t}function x(t,n){const e=n[0]-t[0],a=n[1]-t[1],i=n[2]-t[2];return Math.sqrt(e*e+a*a+i*i)}function p(t,n){const e=n[0]-t[0],a=n[1]-t[1],i=n[2]-t[2];return e*e+a*a+i*i}function w(t){const n=t[0],e=t[1],a=t[2];return n*n+e*e+a*a}function b(t,n){const e=n[0],a=n[1],i=n[2];let r=e*e+a*a+i*i;return r>0&&(r=1/Math.sqrt(r),t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r),t}function y(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function v(t,n,e){const a=n[0],i=n[1],r=n[2],o=e[0],s=e[1],u=e[2];return t[0]=i*u-r*s,t[1]=r*o-a*u,t[2]=a*s-i*o,t}function B(t,n,e,a){const i=n[0],r=n[1],o=n[2];return t[0]=i+a*(e[0]-i),t[1]=r+a*(e[1]-r),t[2]=o+a*(e[2]-o),t}function V(t,n,e){const a=n[0],i=n[1],r=n[2];return t[0]=e[0]*a+e[4]*i+e[8]*r+e[12],t[1]=e[1]*a+e[5]*i+e[9]*r+e[13],t[2]=e[2]*a+e[6]*i+e[10]*r+e[14],t}function D(t,n,e){const a=n[0],i=n[1],r=n[2];return t[0]=a*e[0]+i*e[3]+r*e[6],t[1]=a*e[1]+i*e[4]+r*e[7],t[2]=a*e[2]+i*e[5]+r*e[8],t}function U(t,n,e){const a=e[0],i=e[1],r=e[2],o=e[3],s=n[0],u=n[1],l=n[2],c=i*l-r*u,f=r*s-a*l,h=a*u-i*s,m=i*h-r*f,d=r*c-a*h,M=a*f-i*c,g=2*o;return t[0]=s+c*g+2*m,t[1]=u+f*g+2*d,t[2]=l+h*g+2*M,t}const I=(0,a.c)(),P=(0,a.c)();function A(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function F(t,n,e){const a=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];let o=a*a+i*i+r*r;return o>0?(o=1/Math.sqrt(o),t[0]=a*o,t[1]=i*o,t[2]=r*o,t):(t[0]=0,t[1]=0,t[2]=0,t)}const E=l,Y=c,q=f,X=x,S=p,T=r,C=w;Object.freeze(Object.defineProperty({__proto__:null,abs:h,add:u,angle:function(t,n){o(I,t),o(P,n),b(I,I),b(P,P);const e=y(I,P);return e>1?0:e<-1?Math.PI:Math.acos(e)},bezier:function(t,n,e,a,i,r){const o=1-r,s=o*o,u=r*r,l=s*o,c=3*r*s,f=3*u*o,h=u*r;return t[0]=n[0]*l+e[0]*c+a[0]*f+i[0]*h,t[1]=n[1]*l+e[1]*c+a[1]*f+i[1]*h,t[2]=n[2]*l+e[2]*c+a[2]*f+i[2]*h,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},copy:o,cross:v,direction:F,dist:X,distance:x,div:q,divide:f,dot:y,equals:function(t,n){if(t===n)return!0;const e=t[0],a=t[1],r=t[2],o=n[0],s=n[1],u=n[2],l=(0,i.g)();return Math.abs(e-o)<=l*Math.max(1,Math.abs(e),Math.abs(o))&&Math.abs(a-s)<=l*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-u)<=l*Math.max(1,Math.abs(r),Math.abs(u))},exactEquals:A,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},hermite:function(t,n,e,a,i,r){const o=r*r,s=o*(2*r-3)+1,u=o*(r-2)+r,l=o*(r-1),c=o*(3-2*r);return t[0]=n[0]*s+e[0]*u+a[0]*l+i[0]*c,t[1]=n[1]*s+e[1]*u+a[1]*l+i[1]*c,t[2]=n[2]*s+e[2]*u+a[2]*l+i[2]*c,t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},len:T,length:r,lerp:B,max:M,min:d,mul:Y,multiply:c,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},normalize:b,random:function(t,n){n=n||1;const e=i.R,a=2*e()*Math.PI,r=2*e()-1,o=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*o,t[1]=Math.sin(a)*o,t[2]=r*n,t},rotateX:function(t,n,e,a){const i=[],r=[];return i[0]=n[0]-e[0],i[1]=n[1]-e[1],i[2]=n[2]-e[2],r[0]=i[0],r[1]=i[1]*Math.cos(a)-i[2]*Math.sin(a),r[2]=i[1]*Math.sin(a)+i[2]*Math.cos(a),t[0]=r[0]+e[0],t[1]=r[1]+e[1],t[2]=r[2]+e[2],t},rotateY:function(t,n,e,a){const i=[],r=[];return i[0]=n[0]-e[0],i[1]=n[1]-e[1],i[2]=n[2]-e[2],r[0]=i[2]*Math.sin(a)+i[0]*Math.cos(a),r[1]=i[1],r[2]=i[2]*Math.cos(a)-i[0]*Math.sin(a),t[0]=r[0]+e[0],t[1]=r[1]+e[1],t[2]=r[2]+e[2],t},rotateZ:function(t,n,e,a){const i=[],r=[];return i[0]=n[0]-e[0],i[1]=n[1]-e[1],i[2]=n[2]-e[2],r[0]=i[0]*Math.cos(a)-i[1]*Math.sin(a),r[1]=i[0]*Math.sin(a)+i[1]*Math.cos(a),r[2]=i[2],t[0]=r[0]+e[0],t[1]=r[1]+e[1],t[2]=r[2]+e[2],t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:g,scaleAndAdd:k,set:s,sign:m,sqrDist:S,sqrLen:C,squaredDistance:p,squaredLength:w,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:E,subtract:l,transformMat3:D,transformMat4:V,transformQuat:U},Symbol.toStringTag,{value:"Module"}))},66106:(t,n,e)=>{function a(){return[0,0,0]}function i(t){return[t[0],t[1],t[2]]}function r(t,n,e){return[t,n,e]}function o(t,n=[0,0,0]){const e=Math.min(3,t.length);for(let a=0;a<e;++a)n[a]=t[a];return n}e.d(n,{O:()=>u,U:()=>l,Z:()=>s,a:()=>i,b:()=>c,c:()=>a,d:()=>f,e:()=>o,f:()=>r});const s=[0,0,0],u=r(1,1,1),l=r(1,0,0),c=r(0,1,0),f=r(0,0,1)}}]);