/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e}from"./mat4.js";import{c as t}from"./mat4f64.js";import r from"../geometry/Point.js";import n from"../geometry/support/MeshGeoreferencedVertexSpace.js";import{t as o}from"./vec32.js";function i(t){const{vertexSpace:r}=t;if(null!=r.origin)return t.clone();const{anchor:i}=t,s=i.clone(),c=e(a,[-s.x,-s.y,-s.z]),u=new n({origin:[s.x,s.y,s.z]}),f=t.cloneWithVertexSpace(u),{position:m}=f.vertexAttributes;return f.vertexAttributes.position=o(new Float64Array(m.length),m,c),f.vertexAttributesChanged(),f}function s(e){return null!=e.origin}function c(e,t){if(!s(e))return null;const[n,o,i]=e.origin;return new r({x:n,y:o,z:i,spatialReference:t})}const a=t();export{s as i,i as t,c as v};
