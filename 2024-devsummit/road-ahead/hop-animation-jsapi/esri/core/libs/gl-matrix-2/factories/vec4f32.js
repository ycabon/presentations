// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function f(){return new Float32Array(4)}function n(c){const b=new Float32Array(4);b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];return b}function d(c,b,y,z){const e=new Float32Array(4);e[0]=c;e[1]=b;e[2]=y;e[3]=z;return e}function p(c,b){return new Float32Array(c,b,4)}function q(){return f()}function g(){return d(1,1,1,1)}function h(){return d(1,0,0,0)}function k(){return d(0,1,0,0)}function l(){return d(0,0,1,0)}function m(){return d(0,0,0,1)}const r=f(),t=g(),u=h(),v=k(),
w=l(),x=m(),A=Object.freeze(Object.defineProperty({__proto__:null,ONES:t,UNIT_W:x,UNIT_X:u,UNIT_Y:v,UNIT_Z:w,ZEROS:r,clone:n,create:f,createView:p,fromValues:d,ones:g,unitW:m,unitX:h,unitY:k,unitZ:l,zeros:q},Symbol.toStringTag,{value:"Module"}));a.ONES=t;a.UNIT_W=x;a.UNIT_X=u;a.UNIT_Y=v;a.UNIT_Z=w;a.ZEROS=r;a.clone=n;a.create=f;a.createView=p;a.fromValues=d;a.ones=g;a.unitW=m;a.unitX=h;a.unitY=k;a.unitZ=l;a.vec4f32=A;a.zeros=q;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});