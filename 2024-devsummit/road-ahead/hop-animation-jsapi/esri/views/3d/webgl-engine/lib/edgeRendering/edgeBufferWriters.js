// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/RandomLCG ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../support/buffer/glUtil ../Normals ./bufferLayouts".split(" "),function(m,y,w,z,x,q,g){function A(a){const b=r;b[0]=a.position0[0];b[1]=a.position0[1];b[2]=a.position0[2];b[3]=a.position1[0];b[4]=a.position1[1];b[5]=a.position1[2];e[0]=5381;for(a=0;a<n.length;a++)e[0]=31*e[0]+n[a];return e[0]}function B(a){const b=r;b[0]=h(a.position0[0]);b[1]=h(a.position0[1]);b[2]=
h(a.position0[2]);b[3]=h(a.position1[0]);b[4]=h(a.position1[1]);b[5]=h(a.position1[2]);e[0]=5381;for(a=0;a<n.length;a++)e[0]=31*e[0]+n[a];return e[0]}function h(a){return Math.round(1E4*a)/1E4}class t{updateSettings(a){this.settings=a;this._edgeHashFunction=a.reducedPrecision?B:A}write(a,b,c){var f=this._edgeHashFunction(c);p.seed=f;f=p.getIntRange(0,255);const l=p.getIntRange(0,this.settings.variants-1);var d=p.getFloat();d=-(1-Math.min(d/.7,1))+Math.max(0,d-.7)/(1-.7);d=255*(Math.abs(d)**1.2*(0>
d?-1:1)*.5+.5);a.position0.setVec(b,c.position0);a.position1.setVec(b,c.position1);a.componentIndex.set(b,c.componentIndex);a.variantOffset.set(b,f);a.variantStroke.set(b,l);a.variantExtension.set(b,d)}trim(a,b){return a.slice(0,b)}}const r=new Float32Array(6),n=new Uint32Array(r.buffer),e=new Uint32Array(1);class u{constructor(){this._commonWriter=new t}updateSettings(a){this._commonWriter.updateSettings(a)}allocate(a){return g.RegularEdgeInstancesLayout.createBuffer(a)}write(a,b,c){this._commonWriter.write(a,
b,c);w.add(k,c.faceNormal0,c.faceNormal1);w.normalize(k,k);const {typedBuffer:f,typedBufferStride:l}=a.normalCompressed;q.compressNormal(f,b,k[0],k[1],k[2],l)}trim(a,b){return this._commonWriter.trim(a,b)}}u.Layout=g.RegularEdgeInstancesLayout;u.glLayout=x.glLayout(g.RegularEdgeInstancesLayout,1);class v{constructor(){this._commonWriter=new t}updateSettings(a){this._commonWriter.updateSettings(a)}allocate(a){return g.SilhouetteEdgeInstancesLayout.createBuffer(a)}write(a,b,c){this._commonWriter.write(a,
b,c);const {typedBuffer:f,typedBufferStride:l}=a.normalCompressed;q.compressNormal(f,b,c.faceNormal0[0],c.faceNormal0[1],c.faceNormal0[2],l);const {typedBuffer:d,typedBufferStride:C}=a.normal2Compressed;q.compressNormal(d,b,c.faceNormal1[0],c.faceNormal1[1],c.faceNormal1[2],C)}trim(a,b){return this._commonWriter.trim(a,b)}}v.Layout=g.SilhouetteEdgeInstancesLayout;v.glLayout=x.glLayout(g.SilhouetteEdgeInstancesLayout,1);const k=z.create(),p=new y;m.CommonBufferWriter=t;m.RegularEdgeBufferWriter=u;
m.SilhouetteEdgeBufferWriter=v;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});