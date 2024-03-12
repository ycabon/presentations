/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as s}from"./handleUtils.js";import{I as i,L as t,P as n,R as e}from"./RightAngleSnappingHint.js";import{P as o}from"./PointSnappingHint.js";class a{draw(a,r){const u=this._getUniqueHints(a),h=this.sortUniqueHints(u),f=[];for(const s of h)s instanceof i&&f.push(this.visualizeIntersectionPoint(s,r)),s instanceof t&&f.push(this.visualizeLine(s,r)),s instanceof n&&f.push(this.visualizeParallelSign(s,r)),s instanceof e&&f.push(this.visualizeRightAngleQuad(s,r)),s instanceof o&&f.push(this.visualizePoint(s,r));return s(f)}sortUniqueHints(s){return s}_getUniqueHints(s){const i=[];for(const t of s){let s=!0;for(const n of i)if(t.equals(n)){s=!1;break}s&&i.push(t)}return i}}export{a as S};
