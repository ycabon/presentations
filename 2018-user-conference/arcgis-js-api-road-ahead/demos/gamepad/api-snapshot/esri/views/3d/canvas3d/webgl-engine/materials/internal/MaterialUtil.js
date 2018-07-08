// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../../lib/IdGen ../../lib/gl-matrix ../../parts/Model ../../lib/GeometryData ../../lib/VertexBufferLayout ../../lib/Util".split(" "),function(V,F,W,P,X,G){var z=F.vec3d,Y=F.mat4d,Q=F.mat4,C=G.VertexAttrConstants,w={};w.__Material_idGen=new V;w.__GLMaterial_id=0;w.IDENTITY=Y.identity();w.Layouts=X.Defaults;w.fill=function(a,c,d,k,b,f){if(void 0===b||3!==f)for(b=0;b<f;++b)d[k+b]=a[c+b];else{var n=a[c],v=a[c+1];a=a[c+2];d[k]=b[0]*n+b[4]*v+b[8]*a+b[12];d[k+1]=b[1]*n+b[5]*v+b[9]*a+b[13];d[k+2]=
b[2]*n+b[6]*v+b[10]*a+b[14]}return f};var R=function(a,c,d,k,b,f){for(var n=a.length,v=0;v<n;++v){for(var H=d*a[v],m=0;m<d;++m)k[b+m]=c[H+m];b+=f}};w.fillInterleaved=function(a,c,d,k,b,f,n,v){var H=b.getAttributes();b=b.getStride();for(var m in H){var h=n+H[m].offset;if(null==v||null!=v[m]){var e;switch(m){case C.UV0:e=a.vertexAttr[m];null!=e&&R(a.faces.indices[m],e.data,e.size,f,h,b);break;case C.REGION:e=a.vertexAttr[m];var x=a.faces.indices[m],g=e.data;e=e.size;for(var l=f,r=b,l=new Uint16Array(l.buffer),
h=2*h,r=2*r,y=x.length,p=0;p<y;++p){var t=e*x[p],u;for(u=0;u<e;++u)l[h+u]=g[t+u];h+=r}break;case C.COLOR:e=a.vertexAttr[m];if(k&&k.color)for(x=a.faces.indices[m],g=e.data,l=k.color,e=e.size,r=f,y=b,r=new Uint8Array(r.buffer),h*=4,y*=4,p=x.length,t=0;t<p;++t){u=e*x[t];var q;for(q=0;q<e;++q)r[h+q]=g[u+q]*l[q];4>q&&(r[h+3]=255*l[3]);h+=y}else for(x=a.faces.indices[m],g=e.data,e=e.size,l=f,r=b,l=new Uint8Array(l.buffer),h*=4,r*=4,y=x.length,p=0;p<y;++p){t=e*x[p];for(u=0;u<e;++u)l[h+u]=g[t+u];4>u&&(l[h+
3]=255);h+=r}break;default:if(e=a.vertexAttr[m],g=m===C.POSITION?c:m===C.NORMAL?d:void 0,void 0!==g&&3===e.size)if(e.axisOrder===P.AxisOrder.GIS)for(x=a.faces.indices[m],e=e.data,l=f,r=b,y=x.length,p=0;p<y;++p)q=3*x[p],t=e[q],u=e[q+2],q=-e[q+1],l[h]=g[0]*t+g[4]*u+g[8]*q+g[12],l[h+1]=g[1]*t+g[5]*u+g[9]*q+g[13],l[h+2]=g[2]*t+g[6]*u+g[10]*q+g[14],h+=r;else for(x=a.faces.indices[m],e=e.data,l=f,r=b,y=x.length,p=0;p<y;++p)q=3*x[p],t=e[q],u=e[q+1],q=e[q+2],l[h]=g[0]*t+g[4]*u+g[8]*q+g[12],l[h+1]=g[1]*t+
g[5]*u+g[9]*q+g[13],l[h+2]=g[2]*t+g[6]*u+g[10]*q+g[14],h+=r;else if(e.axisOrder===P.AxisOrder.GIS)for(x=a.faces.indices[m],g=e.data,e=e.size,l=f,r=b,y=x.length,p=0;p<y;++p)t=e*x[p],l[h]=g[t],l[h+1]=g[t+2],l[h+2]=-g[t+1],h+=r;else R(a.faces.indices[m],e.data,e.size,f,h,b)}}}};var S=z.create(),Z=z.create(),aa=z.create(),ba=z.create(),T=function(a,c,d,k){var b=a.getCenter();z.project(b,c,d,S);var b=z.dist2(S,b),f=a.getBSRadius();if(b<f*f){var b=a.getPrimitiveIndices(),f=a.getIndices(),n=a.getPosition(),
v=b?b.length:f.length/3;if(1E4<v&&(a=a.getChildren(),void 0!==a)){for(b=0;8>b;++b)void 0!==a[b]&&T(a[b],c,d,k);return}a=n.size;var n=n.data,H=c[0],m=c[1];c=c[2];var h=d[0]-H,e=d[1]-m;d=d[2]-c;for(var x=0;x<v;++x){var g=b?b[x]:x,l=a*f[3*g],r=a*f[3*g+1],y=a*f[3*g+2],p=n[l],t=n[l+1],l=n[l+2],u=n[r],q=n[r+1],r=n[r+2],w=n[y],C=n[y+1],y=n[y+2],J=u-p,K=q-t,L=r-l,M=w-p,B=C-t,D=y-l,N=e*D-B*d,O=d*M-D*h,I=h*B-M*e,A=J*N+K*O+L*I;if(!(-1E-5<A&&1E-5>A)){var A=1/A,E=H-p,F=m-t,G=c-l,N=A*(E*N+F*O+G*I);0>N||1<N||(O=
F*L-K*G,L=G*J-L*E,J=E*K-J*F,K=A*(h*O+e*L+d*J),0>K||1<N+K||(M=A*(M*O+B*L+D*J),0<=M&&(B=Z,D=aa,A=ba,z.set3(p,t,l,B),z.set3(u,q,r,D),z.set3(w,C,y,A),z.subtract(D,B,D),z.subtract(A,B,A),z.normalize(z.cross(D,A,B)),k(M,B,g))))}}}};w.intersectTriangleGeometry=function(a,c,d,k,b,f,n,v,w,m){G.assert("triangle"===a.getData().getFaces()[c].type);T(a.getBoundingInfo(c),n,v,m)};w.basicMaterialConstructor=function(a,c){var d=!0,k=0,b=w.__Material_idGen.gen(c);a.getId=function(){return b};var f;a.getParentStage=
function(){return f};a.addParentStage=function(a){G.assert(void 0===f,"Material can only be added to a single Stage");f=a};a.removeParentStage=function(a){f=void 0};a.setVisible=function(b){d!==b&&(d=b,a.notifyDirty("matChanged"))};a.isVisible=function(){return d};a.notifyDirty=function(b){f&&f.notifyDirty(W.ContentType.MATERIAL,a,b)};a.setRenderPriority=function(a){k=a;this.notifyDirty("matChanged")};a.getRenderPriority=function(){return k}};var I=w.aquireIfNotUndefined=function(a,c,d,k){if(void 0!==
a)return d.aquire(a,c,k)},E=w.releaseIfNotUndefined=function(a,c){void 0!==a&&c.release(a)},U=Q.create();w.bindView=function(a,c,d){Q.translate(c,a,U);d.uniformMatrix4fv("view",U)};w.bindCamPos=function(a,c,d){d.uniform3f("camPos",c[3]-a[0],c[7]-a[1],c[11]-a[2])};w.basicGLMaterialConstructor=function(a,c){this.id=w.__GLMaterial_id++;this.getId=function(){return this.id};a.getMaterialId=function(){return c.getId()};var d=!0;a.isVisible=function(){return d};a.updateVisibility=function(){d=c.isVisible()};
a.getRenderPriority=function(){return c.getRenderPriority()}};w.singleTextureGLMaterialConstructor=function(a,c,d,k){var b=I(d.textureId,d.initTexture,c,k);a.updateTexture=function(a){d.textureId!==a&&(E(d.textureId,c),d.textureId=a,b=I(d.textureId,d.initTexture,c,k))};a.renderTexture=function(a){var f=c.getTexture(d.textureId);f&&f.renderGl&&f.renderGl(b,a)};a.bindTexture=function(a,d){void 0!==b&&(d.uniform1i("tex",0),a.bindTexture(a.TEXTURE_2D,b))};a.dispose=function(){E(d.textureId,c)}};w.multiTextureGLMaterialConstructor=
function(a,c,d,k){for(var b=k.length,f=Array(b),n=0;n<b;n++)f[n]=I(d[k[n][0]],d[k[n][1]],c);a.updateTextures=function(a){for(var v=0;v<b;v++){var m=d[k[v][0]],h=a[k[v][0]];m!==h&&(E(m,c),d[k[v][0]]=h,f[v]=I(h,d[k[v][1]],c))}};a.bindTextures=function(a,d){for(var c=0;c<b;c++)void 0!==f[c]&&(d.uniform1i(k[c][2],c),a.activeTexture(a.TEXTURE0+c),a.bindTexture(a.TEXTURE_2D,f[c]));a.activeTexture(a.TEXTURE0)};a.bindOneTexture=function(a,b,c){b.uniform1i(k[c][2],c);a.activeTexture(a.TEXTURE0+c);a.bindTexture(a.TEXTURE_2D,
f[c]);a.activeTexture(a.TEXTURE0)};a.disposeTextures=function(){for(var a=0;a<b;a++)E(d[k[a][0]],c)}};return w});