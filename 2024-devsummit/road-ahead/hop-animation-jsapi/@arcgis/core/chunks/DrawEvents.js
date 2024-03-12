/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(e,t,s){this.view=e,this.vertexIndex=t,this.vertices=s,this.defaultPrevented=!1,this.type="vertex-add"}preventDefault(){this.defaultPrevented=!0}}class t{constructor(e,t,s){this.view=e,this.vertexIndex=t,this.vertices=s,this.defaultPrevented=!1,this.type="vertex-remove"}preventDefault(){this.defaultPrevented=!0}}class s{constructor(e,t,s,i=null){this.view=e,this.vertexIndex=t,this.vertices=s,this.mapPoint=i,this.coordinates=null,this.defaultPrevented=!1,this.type="cursor-update",this.coordinates=1===s.length?s[0]:null}preventDefault(){this.defaultPrevented=!0}}class i{constructor(e){this.vertices=e,this.coordinates=null,this.defaultPrevented=!1,this.type="draw-complete",this.coordinates=1===e.length?e[0]:null}preventDefault(){this.defaultPrevented=!0}}export{s as C,i as D,t as V,e as a};
