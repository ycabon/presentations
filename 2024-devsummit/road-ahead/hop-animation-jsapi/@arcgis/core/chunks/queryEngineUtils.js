/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e}from"./normalizedPoint.js";import{D as t,E as r}from"./SnappingManager.js";import{V as n}from"./VertexSnappingCandidate.js";function a({x:t,y:r,z:n}){return e(t,r,n??0)}function o(e,o){switch(e.type){case"edge":return e.draped?new t({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:a(e.target),objectId:e.objectId,getGroundElevation:o}):new r({edgeStart:a(e.start),edgeEnd:a(e.end),targetPoint:a(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new n({targetPoint:a(e.target),objectId:e.objectId,isDraped:!1})}}function d(e,t){return null!=e&&"3d"===e.type?(r,n)=>e.elevationProvider.getElevation(r,n,0,t,"ground"):()=>null}export{o as c,d as m};
