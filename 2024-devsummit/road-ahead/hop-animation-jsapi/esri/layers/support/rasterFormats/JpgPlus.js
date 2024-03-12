// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../chunks/Jpg","../../../chunks/Zlib"],function(p,q){class r{static decode(c,h=!1){const k=new Uint8Array(c);c=new p.JpegImage;c.parse(k);const {width:e,height:f,numComponents:t,eof:n}=c,l=c.getData(e,f,!0),m=e*f;c=null;let a=0,g=0,d=0;if(!h&&n<k.length-1)try{var b=(new q.Zlib(k.subarray(n))).getBytes();c=new Uint8Array(m);for(a=h=0;a<b.length;a++)for(d=7;0<=d;d--)c[h++]=b[a]>>d&1}catch{}if(1===t&&l.length===e*f)b=new Uint8Array(l.buffer),b=[b,b,b];else{b=[];for(a=0;3>a;a++)b.push(new Uint8Array(m));
for(g=d=0;g<m;g++)for(a=0;3>a;a++)b[a][g]=l[d++]}return{width:e,height:f,pixels:b,mask:c}}}return r});