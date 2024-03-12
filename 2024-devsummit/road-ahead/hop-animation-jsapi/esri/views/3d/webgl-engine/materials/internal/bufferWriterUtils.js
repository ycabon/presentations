// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/libs/gl-matrix-2/math/mat4","../../../../../geometry/support/buffer/BufferView","../../lib/Util","../../lib/VertexAttribute"],function(v,H,z,w,x){function I(c,a,d){const {data:b,indices:e}=c;c=a.typedBuffer;a=a.typedBufferStride;const f=e.length;d*=a;for(let h=0;h<f;++h){const g=2*e[h];c[d]=b[g];c[d+1]=b[g+1];d+=a}}function J(c,a,d,b){const {data:e,indices:f}=c;c=a.typedBuffer;a=a.typedBufferStride;const h=f.length;d*=a;if(null==b||1===b)for(b=0;b<h;++b){var g=
3*f[b];c[d]=e[g];c[d+1]=e[g+1];c[d+2]=e[g+2];d+=a}else for(g=0;g<h;++g){const k=3*f[g];for(let u=0;u<b;++u)c[d]=e[k],c[d+1]=e[k+1],c[d+2]=e[k+2],d+=a}}function K(c,a,d,b=1){const {data:e,indices:f}=c;c=a.typedBuffer;a=a.typedBufferStride;const h=f.length;d*=a;if(1===b)for(b=0;b<h;++b){var g=4*f[b];c[d]=e[g];c[d+1]=e[g+1];c[d+2]=e[g+2];c[d+3]=e[g+3];d+=a}else for(g=0;g<h;++g){const k=4*f[g];for(let u=0;u<b;++u)c[d]=e[k],c[d+1]=e[k+1],c[d+2]=e[k+2],c[d+3]=e[k+3],d+=a}}function M(c,a,d,b,e=1){if(a){var {data:f,
indices:h}=c;c=d.typedBuffer;d=d.typedBufferStride;var g=h.length,k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10],r=a[12],p=a[13],l=a[14];b*=d;var m=0,q=0,n=0;a=H.hasIdentityRotation(a)?t=>{m=f[t]+r;q=f[t+1]+p;n=f[t+2]+l}:t=>{const y=f[t],L=f[t+1];t=f[t+2];m=k*y+B*L+E*t+r;q=u*y+C*L+F*t+p;n=A*y+D*L+G*t+l};if(1===e)for(e=0;e<g;++e)a(3*h[e]),c[b]=m,c[b+1]=q,c[b+2]=n,b+=d;else for(let t=0;t<g;++t){a(3*h[t]);for(let y=0;y<e;++y)c[b]=m,c[b+1]=q,c[b+2]=n,b+=d}}else J(c,d,b,e)}function N(c,
a,d,b,e=1){if(a){var {data:f,indices:h}=c;c=d.typedBuffer;d=d.typedBufferStride;var g=h.length,k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10],r=!H.isOrthoNormal(a);b*=d;var p=0,l=0,m=0;a=H.hasIdentityRotation(a)?n=>{p=f[n];l=f[n+1];m=f[n+2]}:n=>{const t=f[n],y=f[n+1];n=f[n+2];p=k*t+B*y+E*n;l=u*t+C*y+F*n;m=A*t+D*y+G*n};if(1===e)if(r)for(e=0;e<g;++e)a(3*h[e]),r=p*p+l*l+m*m,.999999>r&&1E-6<r?(r=1/Math.sqrt(r),c[b]=p*r,c[b+1]=l*r,c[b+2]=m*r):(c[b]=p,c[b+1]=l,c[b+2]=m),b+=d;else for(e=
0;e<g;++e)a(3*h[e]),c[b]=p,c[b+1]=l,c[b+2]=m,b+=d;else for(let n=0;n<g;++n){a(3*h[n]);if(r){var q=p*p+l*l+m*m;.999999>q&&1E-6<q&&(q=1/Math.sqrt(q),p*=q,l*=q,m*=q)}for(q=0;q<e;++q)c[b]=p,c[b+1]=l,c[b+2]=m,b+=d}}else J(c,d,b,e)}function O(c,a,d,b,e=1){if(a){var {data:f,indices:h}=c;c=d.typedBuffer;d=d.typedBufferStride;var g=h.length,k=a[0],u=a[1],A=a[2],B=a[4],C=a[5],D=a[6],E=a[8],F=a[9],G=a[10];a=!H.isOrthoNormal(a);b*=d;if(1===e)for(e=0;e<g;++e){var r=4*h[e],p=f[r],l=f[r+1],m=f[r+2];r=f[r+3];var q=
k*p+B*l+E*m,n=u*p+C*l+F*m;p=A*p+D*l+G*m;a&&(l=q*q+n*n+p*p,.999999>l&&1E-6<l&&(l=1/Math.sqrt(l),q*=l,n*=l,p*=l));c[b]=q;c[b+1]=n;c[b+2]=p;c[b+3]=r;b+=d}else for(r=0;r<g;++r){q=4*h[r];l=f[q];m=f[q+1];const t=f[q+2];q=f[q+3];n=k*l+B*m+E*t;p=u*l+C*m+F*t;l=A*l+D*m+G*t;a&&(m=n*n+p*p+l*l,.999999>m&&1E-6<m&&(m=1/Math.sqrt(m),n*=m,p*=m,l*=m));for(m=0;m<e;++m)c[b]=n,c[b+1]=p,c[b+2]=l,c[b+3]=q,b+=d}}else K(c,d,b,e)}function P(c,a,d,b,e=1){const {data:f,indices:h}=c;var g=d.typedBuffer,k=d.typedBufferStride;
c=h.length;b*=k;if(a===f.length&&4===a)for(g[b]=f[0],g[b+1]=f[1],g[b+2]=f[2],g[b+3]=f[3],g=new Uint32Array(d.typedBuffer.buffer,d.start),k/=4,b/=4,a=g[b],b+=k,c*=e,e=1;e<c;++e)g[b]=a,b+=k;else if(1===e)if(4===a)for(e=0;e<c;++e)a=4*h[e],g[b]=f[a],g[b+1]=f[a+1],g[b+2]=f[a+2],g[b+3]=f[a+3],b+=k;else for(e=0;e<c;++e)a=3*h[e],g[b]=f[a],g[b+1]=f[a+1],g[b+2]=f[a+2],g[b+3]=255,b+=k;else if(4===a)for(a=0;a<c;++a){d=4*h[a];for(var u=0;u<e;++u)g[b]=f[d],g[b+1]=f[d+1],g[b+2]=f[d+2],g[b+3]=f[d+3],b+=k}else for(a=
0;a<c;++a)for(d=3*h[a],u=0;u<e;++u)g[b]=f[d],g[b+1]=f[d+1],g[b+2]=f[d+2],g[b+3]=255,b+=k}function Q(c,a,d){const {data:b,indices:e}=c;c=a.typedBuffer;a=a.typedBufferStride;const f=e.length,h=b[0];d*=a;for(let g=0;g<f;++g)c[d]=h,d+=a}function R(c,a,d,b,e=1){const f=a.typedBuffer;a=a.typedBufferStride;b*=a;if(1===e)for(e=0;e<d;++e)f[b]=c[0],f[b+1]=c[1],f[b+2]=c[2],f[b+3]=c[3],b+=a;else for(let h=0;h<d;++h)for(let g=0;g<e;++g)f[b]=c[0],f[b+1]=c[1],f[b+2]=c[2],f[b+3]=c[3],b+=a}function S(c,a,d,b,e,f){switch(c){case x.VertexAttribute.POSITION:w.assert(3===
a.size);b=e.getField(c,z.BufferViewVec3f);w.assert(!!b,`No buffer view for ${c}`);b&&M(a,d,b,f);break;case x.VertexAttribute.NORMAL:w.assert(3===a.size);d=e.getField(c,z.BufferViewVec3f);w.assert(!!d,`No buffer view for ${c}`);d&&N(a,b,d,f);break;case x.VertexAttribute.NORMALCOMPRESSED:w.assert(2===a.size);b=e.getField(c,z.BufferViewVec2i16);w.assert(!!b,`No buffer view for ${c}`);b&&I(a,b,f);break;case x.VertexAttribute.UV0:w.assert(2===a.size);b=e.getField(c,z.BufferViewVec2f);w.assert(!!b,`No buffer view for ${c}`);
b&&I(a,b,f);break;case x.VertexAttribute.COLOR:case x.VertexAttribute.SYMBOLCOLOR:b=e.getField(c,z.BufferViewVec4u8);w.assert(!!b,`No buffer view for ${c}`);w.assert(3===a.size||4===a.size);!b||3!==a.size&&4!==a.size||P(a,a.size,b,f);break;case x.VertexAttribute.COLORFEATUREATTRIBUTE:b=e.getField(c,z.BufferViewFloat);w.assert(!!b,`No buffer view for ${c}`);w.assert(1===a.size);b&&1===a.size&&Q(a,b,f);break;case x.VertexAttribute.TANGENT:w.assert(4===a.size);d=e.getField(c,z.BufferViewVec4f);w.assert(!!d,
`No buffer view for ${c}`);d&&O(a,b,d,f);break;case x.VertexAttribute.PROFILERIGHT:case x.VertexAttribute.PROFILEUP:case x.VertexAttribute.PROFILEVERTEXANDNORMAL:case x.VertexAttribute.FEATUREVALUE:w.assert(4===a.size),b=e.getField(c,z.BufferViewVec4f),w.assert(!!b,`No buffer view for ${c}`),b&&K(a,b,f)}}v.writeBufferFloat=function(c,a,d,b=1){const {data:e,indices:f}=c;c=a.typedBuffer;a=a.typedBufferStride;const h=f.length;d*=a;if(1===b)for(b=0;b<h;++b)c[d]=e[f[b]],d+=a;else for(let g=0;g<h;++g){const k=
e[f[g]];for(let u=0;u<b;u++)c[d]=k,d+=a}};v.writeBufferMat3f=function(c,a,d){const {data:b,indices:e}=c;c=a.typedBuffer;a=a.typedBufferStride;const f=e.length;d*=a;for(let h=0;h<f;++h){const g=9*e[h];for(let k=0;9>k;++k)c[d+k]=b[g+k];d+=a}};v.writeBufferMat4f=function(c,a,d){const {data:b,indices:e}=c;c=a.typedBuffer;a=a.typedBufferStride;const f=e.length;d*=a;for(let h=0;h<f;++h){const g=16*e[h];for(let k=0;16>k;++k)c[d+k]=b[g+k];d+=a}};v.writeBufferVec2=I;v.writeBufferVec3=J;v.writeBufferVec4=K;
v.writeBufferVec4Zeros=function(c,a,d){const b=c.typedBuffer;c=c.typedBufferStride;a*=c;for(let e=0;e<d;++e)b[a]=0,b[a+1]=0,b[a+2]=0,b[a+3]=0,a+=c};v.writeColor=P;v.writeColorFeatureAttribute=Q;v.writeDefaultAttribute=S;v.writeDefaultAttributes=function(c,a,d,b,e,f){for(const g of a.fields.keys()){a=c.attributes.get(g);var h=a?.indices;a&&h?S(g,a,d,b,e,f):g===x.VertexAttribute.OBJECTANDLAYERIDCOLOR&&null!=c.objectAndLayerIdColor&&(a=c.attributes.get(x.VertexAttribute.POSITION)?.indices)&&(a=a.length,
h=e.getField(g,z.BufferViewVec4u8),R(c.objectAndLayerIdColor,h,a,f))}};v.writeNormal=N;v.writeObjectAndLayerIdColor=R;v.writePosition=M;v.writeTangent=O;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});