// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./common","./mat3","./vec3","./vec4"],function(t,u,k,h){var d={create:function(){var a=new t.ARRAY_TYPE(4);a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a}};d.rotationTo=function(){var a=k.create(),b=k.fromValues(1,0,0),c=k.fromValues(0,1,0);return function(e,m,f){var g=k.dot(m,f);if(-.999999>g)return k.cross(a,b,m),1E-6>k.length(a)&&k.cross(a,c,m),k.normalize(a,a),d.setAxisAngle(e,a,Math.PI),e;if(.999999<g)return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e;k.cross(a,m,f);e[0]=a[0];e[1]=a[1];e[2]=a[2];e[3]=1+g;return d.normalize(e,
e)}}();d.setAxes=function(){var a=u.create();return function(b,c,e,m){a[0]=e[0];a[3]=e[1];a[6]=e[2];a[1]=m[0];a[4]=m[1];a[7]=m[2];a[2]=-c[0];a[5]=-c[1];a[8]=-c[2];return d.normalize(b,d.fromMat3(b,a))}}();d.clone=h.clone;d.fromValues=h.fromValues;d.copy=h.copy;d.set=h.set;d.identity=function(a){a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a};d.setAxisAngle=function(a,b,c){c*=.5;var e=Math.sin(c);a[0]=e*b[0];a[1]=e*b[1];a[2]=e*b[2];a[3]=Math.cos(c);return a};d.getAxisAngle=function(a,b){var c=2*Math.acos(b[3]),
e=Math.sin(c/2);0!=e?(a[0]=b[0]/e,a[1]=b[1]/e,a[2]=b[2]/e):(a[0]=1,a[1]=0,a[2]=0);return c};d.add=h.add;d.multiply=function(a,b,c){var e=b[0],d=b[1],f=b[2];b=b[3];var g=c[0],n=c[1],h=c[2];c=c[3];a[0]=e*c+b*g+d*h-f*n;a[1]=d*c+b*n+f*g-e*h;a[2]=f*c+b*h+e*n-d*g;a[3]=b*c-e*g-d*n-f*h;return a};d.mul=d.multiply;d.scale=h.scale;d.rotateX=function(a,b,c){c*=.5;var e=b[0],d=b[1],f=b[2];b=b[3];var g=Math.sin(c);c=Math.cos(c);a[0]=e*c+b*g;a[1]=d*c+f*g;a[2]=f*c-d*g;a[3]=b*c-e*g;return a};d.rotateY=function(a,
b,c){c*=.5;var e=b[0],d=b[1],f=b[2];b=b[3];var g=Math.sin(c);c=Math.cos(c);a[0]=e*c-f*g;a[1]=d*c+b*g;a[2]=f*c+e*g;a[3]=b*c-d*g;return a};d.rotateZ=function(a,b,c){c*=.5;var e=b[0],d=b[1],f=b[2];b=b[3];var g=Math.sin(c);c=Math.cos(c);a[0]=e*c+d*g;a[1]=d*c-e*g;a[2]=f*c+b*g;a[3]=b*c-f*g;return a};d.calculateW=function(a,b){var c=b[0],e=b[1];b=b[2];a[0]=c;a[1]=e;a[2]=b;a[3]=Math.sqrt(Math.abs(1-c*c-e*e-b*b));return a};d.dot=h.dot;d.lerp=h.lerp;d.slerp=function(a,b,c,e){var d=b[0],f=b[1],g=b[2];b=b[3];
var h=c[0],k=c[1],p=c[2];c=c[3];var q,l,r;l=d*h+f*k+g*p+b*c;0>l&&(l=-l,h=-h,k=-k,p=-p,c=-c);1E-6<1-l?(q=Math.acos(l),r=Math.sin(q),l=Math.sin((1-e)*q)/r,e=Math.sin(e*q)/r):l=1-e;a[0]=l*d+e*h;a[1]=l*f+e*k;a[2]=l*g+e*p;a[3]=l*b+e*c;return a};d.sqlerp=function(){var a=d.create(),b=d.create();return function(c,e,h,f,g,k){d.slerp(a,e,g,k);d.slerp(b,h,f,k);d.slerp(c,a,b,2*k*(1-k));return c}}();d.invert=function(a,b){var c=b[0],e=b[1],d=b[2];b=b[3];var f=c*c+e*e+d*d+b*b,f=f?1/f:0;a[0]=-c*f;a[1]=-e*f;a[2]=
-d*f;a[3]=b*f;return a};d.conjugate=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=b[3];return a};d.length=h.length;d.len=d.length;d.squaredLength=h.squaredLength;d.sqrLen=d.squaredLength;d.normalize=h.normalize;d.fromMat3=function(a,b){var c=b[0]+b[4]+b[8];if(0<c)c=Math.sqrt(c+1),a[3]=.5*c,c=.5/c,a[0]=(b[5]-b[7])*c,a[1]=(b[6]-b[2])*c,a[2]=(b[1]-b[3])*c;else{var e=0;b[4]>b[0]&&(e=1);b[8]>b[3*e+e]&&(e=2);var d=(e+1)%3,f=(e+2)%3,c=Math.sqrt(b[3*e+e]-b[3*d+d]-b[3*f+f]+1);a[e]=.5*c;c=.5/c;a[3]=(b[3*
d+f]-b[3*f+d])*c;a[d]=(b[3*d+e]+b[3*e+d])*c;a[f]=(b[3*f+e]+b[3*e+f])*c}return a};d.str=function(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.exactEquals=h.exactEquals;d.equals=h.equals;return d});