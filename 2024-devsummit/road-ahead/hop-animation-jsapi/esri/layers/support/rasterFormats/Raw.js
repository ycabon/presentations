// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){const n=b=>{let a=1;switch(b){case Uint8Array:case Int8Array:a=1;break;case Uint16Array:case Int16Array:a=2;break;case Uint32Array:case Int32Array:case Float32Array:a=4;break;case Float64Array:a=8}return a};class u{static decode(b,a){var f=a.pixelType;const p=[],c=a.width*a.height;var h=Math.floor(b.byteLength/(a.width*a.height*n(a.pixelType)));const {bandIds:k,format:t}=a;a=k?.length||Math.floor(b.byteLength/(a.width*a.height*n(a.pixelType)));var g=b.byteLength-b.byteLength%(c*
n(f)),d=new f(b,0,c*h);let e,l,q,m,r=null;if("bip"===t)for(e=0;e<a;e++){q=new f(c);m=k?k[e]:e;for(l=0;l<c;l++)q[l]=d[l*h+m];p.push(q)}else if("bsq"===t)for(e=0;e<a;e++)m=k?k[e]:e,p.push(d.subarray(m*c,(m+1)*c));if(g<b.byteLength-1)if(b=b.slice(g),8*b.byteLength<c)r=null;else{b=new Uint8Array(b,0,Math.ceil(c/8));f=new Uint8Array(c);for(g=d=g=a=h=0;g<b.length-1;g++)for(a=b[g],d=7;0<=d;d--)f[h++]=a>>d&1;for(d=7;h<c-1;)a=b[b.length-1],f[h++]=a>>d&1,d--;r=f}return{pixels:p,mask:r}}}return u});