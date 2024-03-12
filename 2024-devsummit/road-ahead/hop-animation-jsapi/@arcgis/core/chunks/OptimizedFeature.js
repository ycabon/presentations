/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(t=null,s={},h,e){this.geometry=t,this.attributes=s,this.centroid=h,this.objectId=e,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const s=new t(this.geometry,this.attributes,this.centroid,this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}clone(){const s=this.geometry?.clone(),h=new t(s,{...this.attributes},this.centroid?.clone(),this.objectId);return h.displayId=this.displayId,h.geohashX=this.geohashX,h.geohashY=this.geohashY,h}}function s(t){return!!t.geometry?.coords?.length}export{t as O,s as h};
