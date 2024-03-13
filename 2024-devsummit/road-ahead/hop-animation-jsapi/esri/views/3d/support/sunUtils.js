// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/libs/gl-matrix-2/math/mat4 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../ViewingMode ../../../chunks/SunCalc ./mathUtils".split(" "),function(x,z,y,T,u,A,e,l,L,v,da){function U(b,f,k){f===L.ViewingMode.Global?e.normalize(M,b.eye):e.set(M,0,0,1);e.scale(N,b.viewForward,-1);f=da.angle(N,
M);const g=Math.max(f-.5,0);y.fromRotation(V,-Math.max(.25,f-.25-.85*g/(g+1)),b.viewRight);e.transformMat4(k,N,V);e.add(k,k,e.scale(ea,b.viewRight,.2));e.normalize(k,k)}function W(b,f,k,g){const p=fa,c=y.identity(ha);if(k===L.ViewingMode.Global)v.SunCalc.getPosition(b,0,0,p),e.set(g,0,0,-1),y.rotateX(c,c,-p.azimuth),y.rotateY(c,c,-p.altitude);else{var d=q.planarDirection;k=d.globalAngles;d=(Math.abs(f[2])-d.localAltitude)/(d.globalAltitude-d.localAltitude);d=z.clamp(d,0,1);1>d?(v.SunCalc.getPosition(b,
f[1],f[0],p),p.azimuth=(1-d)*p.azimuth+d*k.azimuth,p.altitude=(1-d)*p.altitude+d*k.altitude):(p.azimuth=k.azimuth,p.altitude=k.altitude);e.set(g,0,-1,0);y.rotateZ(c,c,-p.azimuth);y.rotateX(c,c,-p.altitude)}e.transformMat4(g,g,c)}function X(b){switch(b){case "disabled":case "sunny":return new B(1,1);case "cloudy":return new B(1,1);case "rainy":return new B(.4,1.2);case "snowy":return new B(.5,1.3);case "foggy":return new B(.2,1.6)}}function Y(b,f){const k=(b[0]+b[1]+b[2])/3;b[0]+=(k-b[0])*f;b[1]+=
(k-b[1])*f;b[2]+=(k-b[2])*f}const q={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,directAtNoon:.65,directAtTwilight:.7},global:{altitude:8E5,ambient:.015,direct:.75},planarDirection:{localAltitude:1E4,globalAltitude:1E6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}};class B{constructor(b,f){this.direct=b;this.ambient=f}}const ia=l.fromValues(.5773502691896258,-.5773502691896258,.5773502691896258);class ja{constructor(){this.ambient={color:l.fromValues(1,
1,1),intensity:.55};this.direct={color:l.fromValues(1,1,1),intensity:.55,directionToLightSource:l.clone(ia)};this.noonFactor=.5;this.globalFactor=0;this.environmentStrength=this.specularStrength=1}}const ha=T.create(),fa={azimuth:0,altitude:0},O=l.fromValues(.01,.01,.01),C=l.fromValues(1,.6,.5),D=l.fromValues(1,.98,.98),Z=l.fromValues(1,1,1),P=l.fromValues(.8,.8,1),E=l.fromValues(.8,.8,1),F=l.fromValues(.98,.98,1),aa=l.fromValues(1,1,1),Q=A.fromValues(.01,q.local.ambientAtNight),G=A.fromValues(q.local.directAtTwilight,
q.local.ambientAtTwilight),H=A.fromValues(.9*q.local.directAtNoon,q.local.ambientAtNoon),ba=A.fromValues(q.local.directAtNoon,q.local.ambientAtNoon),ca=new Date(0),V=T.create(),M=l.create(),N=l.create(),ea=l.create();x.ColorAndIntensity=ja;x.computeColorAndIntensity=function(b,f,k,g,p,c){e.set(c.ambient.color,1,1,1);c.ambient.intensity=q.global.ambient;e.set(c.direct.color,1,1,1);c.direct.intensity=q.global.direct;var d=z.clamp((Math.abs(f[2])-q.local.altitude)/(q.global.altitude-q.local.altitude),
0,1);c.globalFactor=d;var r;null!=b&&(r=v.SunCalc.getTimes(b,f[1],f[0]));if(1>d){if(null!=b){var h=r;var a=b.valueOf();if(h.polarException===v.SunCalc.PolarException.MIDNIGHT_SUN){var m=a-36E5*(b.getHours()+48)-6E4*b.getMinutes();h=m+432E6}else h.polarException===v.SunCalc.PolarException.POLAR_NIGHT?(m=a-2,h=a-1):(m=h.sunrise.valueOf(),h=h.sunset.valueOf());var n=h-m;var t=m+n/2,w=n/4;const I=t-w;w=t+w;n*=.06;const R=m-n/2,J=m+n/2,K=h-n/2,S=h+n/2;m=A.create();n=l.create();h=l.create();a<R||a>S?(u.copy(m,
Q),e.copy(n,O),e.copy(h,P)):a<J?(a=(a-R)/(J-R),u.lerp(m,Q,G,a),e.lerp(n,O,C,a),e.lerp(h,P,E,a)):a<I?(a=(a-J)/(I-J),u.lerp(m,G,H,a),e.lerp(n,C,D,a),e.lerp(h,E,F,a)):a<t?(a=(a-I)/(t-I),u.lerp(m,H,ba,a),e.lerp(n,D,Z,a),e.lerp(h,F,aa,a)):a<w?(a=(a-t)/(w-t),u.lerp(m,ba,H,a),e.lerp(n,Z,D,a),e.lerp(h,aa,F,a)):a<K?(a=(a-w)/(K-w),u.lerp(m,H,G,a),e.lerp(n,D,C,a),e.lerp(h,F,E,a)):a<S&&(a=(a-K)/(S-K),u.lerp(m,G,Q,a),e.lerp(n,C,O,a),e.lerp(h,E,P,a));a=0;switch(g){case "rainy":case "foggy":a=.8;break;case "snowy":a=
.5}0<a&&(Y(n,a),Y(h,a));t=X(g);a=m[0]*t.direct;m=m[1]*t.ambient}else h=X(g),a=q.local.directAtNoon*h.direct,n=l.fromValues(1,1,1),m=q.local.ambientAtNoon*h.ambient,h=l.fromValues(1,1,1);e.lerp(c.ambient.color,h,c.ambient.color,d);c.ambient.intensity=z.lerp(m,c.ambient.intensity,d);e.lerp(c.direct.color,n,c.direct.color,d);c.direct.intensity=z.lerp(a,c.direct.intensity,d);c.specularStrength="rainy"===g||"snowy"===g||"foggy"===g?0:1;c.environmentStrength="rainy"===g?.7:"snowy"===g||"foggy"===g?.75:
1}null!=b?(g=b.valueOf(),r.polarException===v.SunCalc.PolarException.MIDNIGHT_SUN?(d=g-36E5*(b.getHours()+48)-6E4*b.getMinutes(),r=d+432E6):r.polarException===v.SunCalc.PolarException.POLAR_NIGHT?(d=g-2,r=g-1):(d=r.sunrise.valueOf(),r=r.sunset.valueOf()),g=1-z.clamp(Math.abs(g-(d+(r-d)/2))/432E5,0,1)):g=1;c.noonFactor=g;null!=b?W(b,f,k,c.direct.directionToLightSource):U(p,k,c.direct.directionToLightSource)};x.computeDirectionsOverTime=function(b,f,k,g,p){b=b.getTime();f=f.getTime()-b;f=Math.floor(f/
k)+1;const c=Array(f);for(let d=0;d<f;++d)ca.setTime(b+k*d),c[d]=l.create(),W(ca,g,p,c[d]);return c};x.computeShadowsEnabled=function(b,f){return f===L.ViewingMode.Global?!0:Math.abs(b)<q.planarDirection.localAltitude};x.computeVirtualLightDirection=U;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});