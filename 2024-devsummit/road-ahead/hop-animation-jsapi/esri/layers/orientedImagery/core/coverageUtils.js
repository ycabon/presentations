// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../chunks/vec32 ../../../geometry/Circle ../../../geometry/Mesh ../../../geometry/support/Ellipsoid ../../../geometry/support/MeshVertexAttributes ../../../geometry/support/spatialReferenceUtils ../transformations/utils ../../../geometry/Polygon ../../../geometry/SpatialReference".split(" "),function(B,U,l,m,E,I,J,N,K,f,F,L){function O(a,c,k){var b=a.attributes;const e=b.geometry;a=e.spatialReference??a.spatialReference;
e.spatialReference=a instanceof L?a:L.fromJSON(a);a=M(e);const h=0>b.nearDistance?0:b.nearDistance*a;var n=b.cameraHeight*a/Math.cos(b.cameraPitch*u),d=!0;90<=b.cameraPitch+b.verticalFieldOfView/2&&(n=(b.farDistance??20)*a,d=!1);const g=2*Math.tan(b.verticalFieldOfView*u/2)*h,q=2*Math.tan(b.horizontalFieldOfView*u/2)*h,p=2*Math.tan(b.verticalFieldOfView*u/2)*n,y=2*Math.tan(b.horizontalFieldOfView*u/2)*n;if(k)var t=f.scaleWithFactor(m.sub(l.zeros(),k,[e.x,e.y,b.cameraHeight]),1/n,1/a);else t=[0,0,
-1],t=f.transformMat3(t,c),k=f.scaleAndAddWithFactor([e.x,e.y,b.cameraHeight],t,n,a),d&&(k[2]=0);n=f.scaleAndAddWithFactor([e.x,e.y,b.cameraHeight],t,h,a);d=[0,1,0];d=f.transformMat3(d,c);t=[1,0,0];t=f.transformMat3(t,c);let r=[];c=[];h?(c=[{faces:[4,0,3,4,7,3]},{faces:[5,1,2,5,6,2]},{faces:[4,0,1,4,5,1]},{faces:[6,2,3,6,7,3]}],r=r.concat(m.add(l.zeros(),n,m.sub(l.zeros(),f.scaleWithFactor(d,g/2,a),f.scaleWithFactor(t,q/2,a)))),r=r.concat(m.add(l.zeros(),n,m.add(l.zeros(),f.scaleWithFactor(d,g/2,
a),f.scaleWithFactor(t,q/2,a)))),r=r.concat(m.sub(l.zeros(),n,m.sub(l.zeros(),f.scaleWithFactor(d,g/2,a),f.scaleWithFactor(t,q/2,a)))),r=r.concat(m.sub(l.zeros(),n,m.add(l.zeros(),f.scaleWithFactor(d,g/2,a),f.scaleWithFactor(t,q/2,a))))):(r=[e.x,e.y,b.cameraHeight],c=[{faces:[0,1,2,0,2,3,0,3,4,0,4,1]}]);r=r.concat(m.add(l.zeros(),k,m.sub(l.zeros(),f.scaleWithFactor(d,p/2,a),f.scaleWithFactor(t,y/2,a))));r=r.concat(m.add(l.zeros(),k,m.add(l.zeros(),f.scaleWithFactor(d,p/2,a),f.scaleWithFactor(t,y/
2,a))));r=r.concat(m.sub(l.zeros(),k,m.sub(l.zeros(),f.scaleWithFactor(d,p/2,a),f.scaleWithFactor(t,y/2,a))));r=r.concat(m.sub(l.zeros(),k,m.add(l.zeros(),f.scaleWithFactor(d,p/2,a),f.scaleWithFactor(t,y/2,a))));b=new N.MeshVertexAttributes({position:Float64Array.from(r)});return new I({vertexAttributes:b,components:c,spatialReference:e.spatialReference})}function M(a){return a&&K.isWebMercator(a?.spatialReference)?1/Math.cos(Math.PI/2-2*Math.atan(Math.exp(-1*a.y/J.earth.radius))):1}const u=Math.PI/
180;B.checkIfPolygonContainsSelectedPoint=function(a,c){return a.contains(c)};B.computePolygonForInspection=function(a){const {spatialReference:c,x:k,y:b}=a.geometry,{cameraHeading:e,cameraPitch:h,farDistance:n,nearDistance:d}=a;var g=M(a.geometry);a=new F({spatialReference:c});const q=Math.abs(1.44*n*g);g=Math.abs(1.44*d*g);if(20>h||null==e)g=q;const p=[];p[0]={x:k+q*Math.sin((e-45)*u),y:b+q*Math.cos((e-45)*u)};p[1]={x:k+q*Math.sin((e+45)*u),y:b+q*Math.cos((e+45)*u)};p[2]={x:k+g*Math.sin((e+135)*
u),y:b+g*Math.cos((e+135)*u)};p[3]={x:k+g*Math.sin((e+225)*u),y:b+g*Math.cos((e+225)*u)};a.addRing([[p[0].x,p[0].y,0],[p[1].x,p[1].y,0],[p[2].x,p[2].y,0],[p[3].x,p[3].y,0],[p[0].x,p[0].y,0]]);return a};B.createCoveragePolygon=function(a){const {attributes:c}=a,{horizontalFieldOfView:k,geometry:b,verticalFieldOfView:e}=c;let h=1;let n=null;b&&K.isWebMercator(b?.spatialReference)&&(h=1/Math.cos(Math.PI/2-2*Math.atan(Math.exp(-1*b.y/J.earth.radius))));if(c.isSpherical){var d=new E({center:b,radius:c.farDistance*
h});c.nearDistance&&(a=new E({center:b,radius:c.nearDistance*h}),d.addRing(a.rings[0]));if(a=d.center)a.z=c.cameraHeight,n=I.createSphere(a,{size:2*c.farDistance}),n.centerAt(a)}else{let t=c.cameraPitch,r=c.cameraRoll;d=150;var g=[];150<k&&(t=90,r=0,d=5);const z=Math.ceil(k/d);if(0===z%2)for(d=0;d<z/2;d++)g.push(c.cameraHeading-k/z*(d+.5),c.cameraHeading+k/z*(d+.5));else for(g.push(c.cameraHeading),d=1;d<z/2;d++)g.push(c.cameraHeading-k/z*d,c.cameraHeading+k/z*d);g.sort();let D=c.farDistance?c.farDistance*
h:c.cameraHeight*h/Math.cos(t*u);90<=c.cameraPitch+e/2&&(D=(c.farDistance||20)*h);d=new F({spatialReference:b?.spatialReference});for(const P of g){var q=f.calculateRotationMatrix("HPR",[P,t,r]);n=O(a,q);g=f.transformMat3([0,0,-1],q);const {x:Q,y:R}=b;g=f.scaleAndAddWithFactor([Q,R,c.cameraHeight],g,D,h);var p=2*Math.tan(e*u/2)*D,y=2*Math.tan(k/z*u/2)*D;const S=f.transformMat3([0,1,0],q);q=f.transformMat3([1,0,0],q);p=f.scaleWithFactor(S,p/2,h);q=f.scaleWithFactor(q,y/2,h);y=m.sub(l.zeros(),p,q);
q=m.add(l.zeros(),p,q);g=[m.add(l.zeros(),g,y),m.add(l.zeros(),g,q),m.sub(l.zeros(),g,y),m.sub(l.zeros(),g,q)].map(v=>{{var w=c.cameraHeight,A=h,C=Math.sqrt((v[2]-w)**2+(Math.sqrt((v[0]-b.x)**2+(v[1]-b.y)**2)/A)**2)*A;const G=f.scaleWithFactor(m.sub(l.zeros(),[v[0],v[1],v[2]],[b.x,b.y,w]),1/C,1/A);var x=w/(w-v[2]);C=(1-x)*b.x+x*v[0];var H=(1-x)*b.y+x*v[1];x=(1-x)*w+x*v[2];const T=Math.sqrt((x-w)**2+(Math.sqrt((C-b.x)**2+(H-b.y)**2)/A)**2)*A;w=f.scaleWithFactor(m.sub(l.zeros(),[C,H,x],[b.x,b.y,w]),
1/T,1/A);v=Math.sign(G[0])!==Math.sign(w[0])&&Math.sign(G[1])!==Math.sign(w[1])&&Math.sign(G[2])!==Math.sign(w[2])||0<=v[2]?[v[0],v[1],0]:[C,H,x]}return v});g.push(g[0]);d.addRing(g)}}return{polygon:d,frustum:n}};B.resizePolygon=function(a,c){c=1+c/100;if("esri.geometry.Circle"===a.declaredClass){const {radius:b,center:e}=a;c=new E({radius:b*c,center:e});1<a.rings.length&&c.addRing(a.rings[1]);return c}if("esri.geometry.Polygon"===a.declaredClass){const b=new F({spatialReference:a.spatialReference}),
e=a.centroid;if(e){const h=[];for(let n=0;n<a.rings[0].length;n++){var k=Math.sqrt((e.x-a.rings[0][n][0])**2+(e.y-a.rings[0][n][1])**2);const d=f.scaleWithFactor(m.sub(l.zeros(),[a.rings[0][n][0],a.rings[0][n][1],0],[e.x,e.y,0]),1/k,1);k=f.scaleAndAddWithFactor([e.x,e.y,0],d,k*c,1);h.push({x:k[0],y:k[1]})}b.addRing([[h[0].x,h[0].y,0],[h[1].x,h[1].y,0],[h[2].x,h[2].y,0],[h[3].x,h[3].y,0],[h[0].x,h[0].y,0]])}return b}return a};Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});