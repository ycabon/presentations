/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{R as e,d as t,a as r}from"./StencilUtils.js";import{g as a}from"./interfaces5.js";import{V as o}from"./VertexArrayObject.js";var s;function c(o){o.include(e),o.uniforms.add(new t("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepth?.getTexture())),new r("nearFar",((e,t)=>t.camera.nearFar))),o.code.add(a`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}!function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(s||(s={}));class m{}class n extends o{}export{s as H,m as M,n as V,c as m};
