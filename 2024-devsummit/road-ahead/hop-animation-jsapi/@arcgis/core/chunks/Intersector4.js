/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as s,I as t,G as e}from"./Intersector2.js";class r extends e{constructor(s,t,e,r,i,a){super(s,t),this.layerUid=s,this.graphicUid=t,this.geometryId=e,this.triangleNr=r,this.baseBoundingSphere=i,this.numLodLevels=a}}function i(e){return s(e)&&e.intersector===t.LOD&&!!e.target}export{r as L,i};
