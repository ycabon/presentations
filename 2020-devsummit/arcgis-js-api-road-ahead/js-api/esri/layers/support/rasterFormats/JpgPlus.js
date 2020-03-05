// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./Jpg","./Zlib"],function(r,t,p,q){return function(){function n(){}n.decode=function(e){var a=new Uint8Array(e),b=new p;b.parse(a);e=b.width;var h=b.height,k=b.numComponents,f=b.eof,b=b.getData(e,h,!0),l,m=e*h,c=0,g=0,d=0;if(f<a.length-1)for(a=(new q(a.subarray(f))).getBytes(),l=new Uint8Array(m),c=f=0;c<a.length;c++)for(d=7;0<=d;d--)l[f++]=a[c]>>d&1;a=null;if(1===k)a=[b,b,b];else{a=[];for(c=0;3>c;c++)k=new Uint8Array(m),a.push(k);for(g=d=0;g<m;g++)for(c=0;3>c;c++)a[c][g]=
b[d++]}return{width:e,height:h,pixels:a,mask:l}};return n}()});