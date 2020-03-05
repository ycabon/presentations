// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/earthUtils ../../support/projectionUtils".split(" "),function(C,m,z,A,n,B,q){function w(b,d,a){var e=n.vec3f64.create(),c=Math.pow(2,Math.ceil(Math.log(b[3])*Math.LOG2E/x)*x+y);if(a.isGeographic){var g=c/B.earthRadius*180/Math.PI;a=Math.round(b[1]/g);a=Math.max(-90,Math.min(90,a*g));var h=g/Math.cos((Math.abs(a)-g/2)/180*Math.PI),g=Math.round(b[0]/
h);e[0]=g*h;e[1]=a}else g=Math.round(b[0]/c),a=Math.round(b[1]/c),e[0]=g*c,e[1]=a*c;e[2]=Math.round((b[2]+d)/c)*c;return e}Object.defineProperty(m,"__esModule",{value:!0});var h=new Float64Array(3E3),p=n.vec3f64.create();m.computeGlobalTransformation=function(b,d,a,e){b=w(b,d,a);d=z.mat4f64.create();q.computeLinearTransformation(a,b,d,e);return d};m.reprojectPoints=function(b,d,a,e,c,g,m){var k=b.data,n=b.offsetIdx;b=b.strideIdx;A.vec3.copy(p,d);p[2]+=e;d=[0,0,0];e=k.length/b;q.vectorToVector(p,c,
d,g);for(c=0;c<e;c+=1E3){for(var r=Math.min(1E3,e-c),f=0;f<r;f++){var l=n+b*(c+f);h[3*f+0]=k[l+0]+d[0];h[3*f+1]=k[l+1]+d[1];h[3*f+2]=k[l+2]+d[2]}q.bufferToBuffer(h,g,0,h,m,0,r);for(f=0;f<r;f++){var l=h[3*f+0],t=h[3*f+1],u=h[3*f+2],v=n+b*(c+f);k[v+0]=a[0]*l+a[4]*t+a[8]*u+a[12];k[v+1]=a[1]*l+a[5]*t+a[9]*u+a[13];k[v+2]=a[2]*l+a[6]*t+a[10]*u+a[14]}}};var y=1,x=5-y;m.getLocalOrigin=w});