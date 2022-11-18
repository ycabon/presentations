import { f4 as o, f5 as s, f6 as r$1, f7 as s$1, f8 as r$2 } from './_virtual_index-1ea2035a.js';
import { s as s$2 } from './PointSnappingHint-71b3a4f1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r{draw(r,a){const p=this._getUniqueHints(r),h=[];for(const i of p)i instanceof o&&h.push(this.visualizeIntersectionPoint(i,a)),i instanceof s&&h.push(this.visualizeLine(i,a)),i instanceof r$1&&h.push(this.visualizeParallelSign(i,a)),i instanceof s$1&&h.push(this.visualizeRightAngleQuad(i,a)),i instanceof s$2&&h.push(this.visualizePoint(i,a));return r$2(h)}_getUniqueHints(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t);}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ;}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}

export { e, r };
