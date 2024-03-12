// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../projection/projectPointToVector ../meshVertexSpaceUtils ./geographicUtils ./georeference".split(" "),function(l,f,m,g,h,n,p,q){const k=g.create(),e=g.create(),t=g.create();l.centerAt=function(a,b,c){if(a.vertexAttributes?.position){var {vertexSpace:r}=a,d=c?.origin??a.origin;if(n.isRelativeVertexSpace(r))p.validateGeographicFlag(r,"esri.geometry.support.meshUtils.centerAt",c),{vertexSpace:c}=
a,n.isRelativeVertexSpace(c)&&(h.projectPointToVector(b,k,a.spatialReference)?(h.projectPointToVector(d,e,a.spatialReference)||(b=a.origin,e[0]=b.x,e[1]=b.y,e[2]=b.z,f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+"Projection may be possible after calling projection.load().")),a=m.subtract(t,k,e),c.origin=m.add(g.create(),c.origin,a)):f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project centerAt location (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+
"Projection may be possible after calling projection.load()."));else if(p.isGlobal(a.spatialReference,c?.geographic)){d=q.ungeoreference(a.vertexAttributes,d,{geographic:!0});const {position:u,normal:v,tangent:w}=q.georeference(d,b,{geographic:!0});a.vertexAttributes.position=u;a.vertexAttributes.normal=v;a.vertexAttributes.tangent=w;a.vertexAttributesChanged()}else if(h.projectPointToVector(b,k,a.spatialReference)){h.projectPointToVector(d,e,a.spatialReference)||(b=a.origin,e[0]=b.x,e[1]=b.y,e[2]=
b.z,f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+"Projection may be possible after calling projection.load()."));if(d=a.vertexAttributes.position)for(b=0;b<d.length;b+=3)for(c=0;3>c;c++)d[b+c]+=k[c]-e[c];a.vertexAttributesChanged()}else f.getLogger("esri.geometry.support.meshUtils.centerAt").error(`Failed to project centerAt location (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}). `+
"Projection may be possible after calling projection.load().")}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});