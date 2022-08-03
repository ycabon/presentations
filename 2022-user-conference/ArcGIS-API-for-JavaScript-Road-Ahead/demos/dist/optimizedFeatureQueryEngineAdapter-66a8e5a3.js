import { t, bI as t$1, kj as s } from './_virtual_index-9b831d4a.js';
import { e } from './centroid-3313e4f0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new s(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(r,i)=>(t(r.centroid)&&(r.centroid=e(new t$1,r.geometry,i.hasZ,i.hasM)),r.centroid)};

export { i };
