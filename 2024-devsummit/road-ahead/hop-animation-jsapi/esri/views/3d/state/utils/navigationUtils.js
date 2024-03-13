// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Cyclical ../../../../core/mathUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/axisAngle ../../../../geometry/support/coordinateSystem ../../../../geometry/support/plane ../../../../chunks/sphere ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ../../support/geometryUtils/ray ../../support/geometryUtils/sphere ../../webgl-engine/lib/Camera ../../webgl-engine/lib/verticalOffsetUtils".split(" "),
function(f,y,p,va,r,F,wa,xa,d,n,G,B,C,w,ya,H,I,aa,za,S){function T(a,c,b){b=r.fromRotation(H.sm4d.get(),b[3],G.axis(b));null==b||r.exactEquals(b,F.IDENTITY)||(d.subtract(l,a.eye,c),d.transformMat4(l,l,b),a.eye=d.add(l,l,c),d.subtract(l,a.center,c),d.transformMat4(l,l,b),a.center=d.add(l,l,c),a.up=d.transformMat4(l,a.up,b))}function ba(a,c,b,e){return Math.sin(a/d.length(c))*(b+e.radius)}function ca(a,c,b,e){b=I.fromScreenAtEye(c,b,U);if(null==b)return!1;w.closestPointOnSilhouette(a,b,J);return w.intersectRay(a,
b,e)?d.squaredDistance(J,b.origin)<d.squaredDistance(e,b.origin)?(d.copy(e,J),!1):!0:(d.subtract(z,c.eye,c.center),d.normalize(z,z),C.fromNormalAndOffset(z,-d.dot(d.normalize(z,z),J),da),C.intersectRay(da,b,e),!1)}function ea(a,c,b,e,h,k){var g=0;d.cross(K,a,c);d.subtract(L,a,c);d.length(a)<=h||!e.aboveGround?(d.cross(b,L,e.eye),g=d.dot(a,c)/(d.length(a)*d.length(c)),.9999>g?g=p.acosClamped(g):(a=d.length(d.cross(n.create(),a,c))/(d.length(a)*d.length(c)),g=p.asinClamped(a)),k=Math.cos(p.clamp(y.cyclicalPI.normalize(p.deg2rad(k)),
0,V)),g=-g-Math.max(0,d.length(c)-h)/(k*h)):(d.subtract(fa,e.eye,e.center),d.cross(b,L,fa),g=-d.length(L)/h);d.normalize(b,b);d.scale(b,b,d.length(K));return g}function W(a,c,b,e){e=Math.cos(p.clamp(y.cyclicalPI.normalize(p.deg2rad(e)),0,V));c=c>b?-(c-b)/(e*b):c<-b?Math.PI-(c+b)/(e*b):p.acosClamped(c/b);return((a>b?-(a-b)/(e*b):a<-b?Math.PI-(a+b)/(e*b):p.acosClamped(a/b))-c)*b}function ha(a,c,b,e,h,k,g,m,q,t){m=W(a[2],c[2],k[3],m);c=q?W(a[0],c[0],k[3],180):c[0]-a[0];a=Math.sin(g)*c-Math.cos(g)*m;
g=Math.cos(g)*c+Math.sin(g)*m;d.normalize(l,h);h=q?a/Math.sqrt(Math.abs(k[3]**2-d.dot(b,l)**2)):a/k[3];b=g/Math.sqrt(Math.abs(k[3]**2-d.dot(b,e)**2));wa.set(t,h,b)}function ia(a,c,b,e,h,k,g,m,q,t){d.cross(K,a,c);B.coordinateSystemFromOneAxisAndNormalVector(k.up,k.eye,M,N,O);B.coordinateSystemFromOneAxisAndNormalVector([0,0,1],k.eye,u,v,ja);d.copy(b,v);d.copy(e,u);d.normalize(b,b);d.scale(b,b,d.length(K));B.vectorCoordinates(a,d.normalize(N,N),d.normalize(O,O),d.normalize(M,M),ka);B.vectorCoordinates(c,
N,O,M,la);ha(ka,la,a,u,v,g,m,q,t,h)}function ma(a,c,b,e,h,k,g){r.fromRotation(P,h,e);r.fromRotation(Q,g,k);r.multiply(A,P,Q);d.subtract(c,a,b);d.transformMat4(c,c,A);d.add(c,c,b)}function na(a,c,b,e,h,k){r.fromRotation(P,e,b);r.fromRotation(Q,k,h);r.multiply(A,P,Q);d.subtract(l,a.eye,c);d.transformMat4(l,l,A);a.eye=d.add(l,l,c);d.subtract(l,a.center,c);d.transformMat4(l,l,A);a.center=d.add(l,l,c);d.subtract(l,a.up,c);d.transformMat4(l,l,A);a.up=d.add(l,l,c)}function X(a,c,b,e,h,k){return(Math.abs(e)>
Math.PI-D.Angle||Math.abs(e)<D.Angle)&&(Math.abs(a[2])<b*D.Pole||Math.abs(c)>b)&&k.aboveGround&&h<D.Tilt}function oa(a,c,b,e,h,k){k?(G.fromPoints(b,e,pa),T(c,w.getCenter(a),pa)):(b=ea(b,e,qa,c,a[3],h),T(c,w.getCenter(a),G.wrapAxisAngle(qa,b)))}function ra(a,c,b,e,h,k,g){const m=g?20:1;d.copy(x,e);R.copyFrom(c);let q;for(let t=0;t<m&&1E-12<d.squaredDistance(b,x);t++)if(e=d.squaredDistance(b,x),ia(b,x,v,u,E,R,a,h,k,g),na(R,w.getCenter(a),u,E[1],v,E[0]),ma(x,x,w.getCenter(a),u,E[1],v,E[0]),q=d.squaredDistance(b,
x),q<e||0===t)c.copyFrom(R);else break}f.SpherePickPointFallback=void 0;(function(a){a[a.Ellipsoid=0]="Ellipsoid";a[a.Silhouette=1]="Silhouette"})(f.SpherePickPointFallback||(f.SpherePickPointFallback={}));S={exclude:new Set([S.terrainId])};const sa=va.createScreenPointArray();f.NavigationMode=void 0;(function(a){a[a.Vertical=0]="Vertical";a[a.Horizontal=1]="Horizontal"})(f.NavigationMode||(f.NavigationMode={}));const Y={Elevation:3E4,Angle:p.deg2rad(16)},D={Pole:.95,Angle:p.deg2rad(18),Tilt:45},
V=p.deg2rad(80),Z=n.create(),J=n.create(),z=n.create(),da=C.create(),fa=n.create(),u=n.create(),v=n.create(),ja=n.create(),M=n.create(),N=n.create(),O=n.create(),ka=n.create(),la=n.create(),E=xa.create(),pa=G.create(),P=F.create(),Q=F.create(),A=F.create(),x=n.create(),l=n.create(),L=n.create(),R=new za.Camera,K=n.create(),qa=n.create(),U={origin:n.create(),direction:n.create()},ta={origin:n.create(),direction:n.create()};f.PreservingHeadingThreshold=D;f.TiltThresholdPanningSpeed=V;f.VerticalPanTresholds=
Y;f.applyPanPlanar=function(a,c,b){d.subtract(Z,b,c);a.eye=d.subtract(l,a.eye,Z);a.center=d.subtract(l,a.center,Z)};f.applyPanSphericalDirectRotation=oa;f.applyPanSphericalPreserveHeading=ra;f.applyRotation=T;f.applyRotationWithTwoAxes=na;f.applyZoomOnSphere=function(a,c,b){c.getScreenCenter(sa);aa.intersectScreen(a,c,sa,l)&&(c.center=l);a=c.distance;b*=a;1E-6>Math.abs(a-b)||(b=d.scale(H.sv3d.get(),c.viewForward,b),c.eye=d.subtract(l,c.center,b))};f.applyZoomToPoint=function(a,c,b,e){const h=H.sv3d.get();
b=1-b;d.subtract(h,c,a.eye);const k=d.length(h);let g=k*(1-b);0<=b&&g<e&&(g=e,b=-(g-k)/k);1E-6>Math.abs(k-g)||(d.scale(h,h,b),a.eye=d.add(l,a.eye,h),a.center=d.lerp(l,a.center,c,b))};f.centroid=function(a,c){d.set(c,0,0,0);for(const b of a)d.add(c,c,b);d.scale(c,c,1/a.length)};f.contentIntersectorOptions=S;f.decideNavigationMode=function(a,c,b){if(d.length(a.eye)-b.radius>Y.Elevation)return f.NavigationMode.Horizontal;I.fromScreenAtEye(a,c,ta);return-Math.sign(a.relativeElevation)*(.5*Math.PI+ya.angle(a.eye,
ta.direction))<Y.Angle?f.NavigationMode.Vertical:f.NavigationMode.Horizontal};f.distanceClampValues=[1,3E8];f.intersectPlaneFromScreenPoint=function(a,c,b,e){return C.intersectRay(a,I.fromScreen(c,b,U),e)};f.intersectPlaneFromScreenPointAtEye=function(a,c,b,e){return C.intersectRay(a,I.fromScreenAtEye(c,b,U),e)};f.lengthFromPoints=W;f.minHeightLimit=50;f.normalizeCoordinate=function(a,c,b){b[0]=c[0]/(a.fullWidth/a.pixelRatio);b[1]=c[1]/(a.fullHeight/a.pixelRatio);return b};f.normalizeRotationDelta=
function(a){for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;return a};f.offSurfaceTiltToEyeTiltGlobal=function(a,c,b,e){return ba(Math.PI/2,c,b,e)+(a-Math.PI/2)};f.onSurfaceTiltToEyeTiltGlobal=ba;f.panDistanceModifier=5;f.panMotionToRotationMatrix=function(a,c,b,e,h,k,g,m,q){if(X(a.center,d.dot(a.up,a.center),d.length(a.center),-y.cyclicalPI.normalize(p.deg2rad(k)),g,c))switch(a=-y.cyclicalPI.normalize(p.deg2rad(h)),{eye:h}=c,B.coordinateSystemFromOneAxisAndNormalVector([0,0,1],h,u,v,ja),
h=b.translation[0]*e.pan,k="zoom"===q.mode?0:b.translation[1]*e.pan,c=Math.max(Math.sqrt(Math.abs(1-d.dot(c.center,u)**2/d.length(c.center)**2)),.5),g=-Math.cos(a)*k+Math.sin(a)*h,r.rotate(m.pan.matrix,m.pan.matrix,(Math.sin(a)*k+Math.cos(a)*h)/c,u),m.pan.enabled=!0,q.mode){case "pan":r.rotate(m.pan.matrix,m.pan.matrix,g,v);m.pan.enabled=!0;break;case "zoom":m.zoom=-b.translation[1]*e.zoom}else{const {eye:t,viewRight:ua}=c;c=d.cross(H.sv3d.get(),ua,t);a=b.translation[0]*e.pan;0!==a&&(r.rotate(m.pan.matrix,
m.pan.matrix,-a,c),m.pan.enabled=!0);switch(q.mode){case "pan":b=b.translation[1]*e.pan;0!==b&&(r.rotate(m.pan.matrix,m.pan.matrix,b,ua),m.pan.enabled=!0);break;case "zoom":m.zoom=-b.translation[1]*e.zoom}}};f.panToPosition=function(a,c,b,e,h,k,g){X(b,d.dot(c.up,b),a[3],-y.cyclicalPI.normalize(p.deg2rad(h)),k,c)?ra(a,c,b,e,-y.cyclicalPI.normalize(p.deg2rad(h)),k,g):oa(a,c,b,e,k,g)};f.pickPointAndInitSphere=function(a,c,b,e,h,k){const g=n.create(),m=w.create();let q=!0,t=!0;a.intersectScreen(b,g,k)?
m[3]=d.length(g):(t=!1,m[3]=c.aboveGround&&h!==f.SpherePickPointFallback.Ellipsoid?Math.max(d.length(c.center),.9*e.radius):d.length(c.eye)-c.relativeElevation,h===f.SpherePickPointFallback.Silhouette?ca(m,c,b,g):q=aa.intersectScreen(m,c,b,g));return{sphere:m,scenePickPoint:q?g:null,hasGeometryIntersection:t}};f.pivotDistanceModifier=30;f.preserveHeadingThreshold=X;f.rotatePivotDistanceModifier=5;f.rotatePivotMinDistanceModifier=10;f.rotatePointAroundTwoAxes=ma;f.rotateScreenPixelArea=90;f.rotationAngleAndAxisDirectRotation=
ea;f.rotationAnglesAndAxesHeadingPreserving=ia;f.rotationAnglesHeadingPreserving=ha;f.screenPixelArea=80;f.sphereOrPlanePointFromScreenPoint=ca;f.zoomDistanceModifier=8;f.zoomMaxDistanceModifier=1508E5;f.zoomMinDistanceModifier=200;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});