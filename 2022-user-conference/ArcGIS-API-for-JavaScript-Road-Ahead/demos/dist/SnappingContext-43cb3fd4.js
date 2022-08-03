import { eO as i, eP as i$1, eQ as n, eR as r$1, eS as r$2 } from './_virtual_index-9b831d4a.js';
import { s } from './PointSnappingHint-f4370fcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r{draw(r,a){const p=this._getUniqueHints(r),h=[];for(const i$2 of p)i$2 instanceof i&&h.push(this.visualizeIntersectionPoint(i$2,a)),i$2 instanceof i$1&&h.push(this.visualizeLine(i$2,a)),i$2 instanceof n&&h.push(this.visualizeParallelSign(i$2,a)),i$2 instanceof r$1&&h.push(this.visualizeRightAngleQuad(i$2,a)),i$2 instanceof s&&h.push(this.visualizePoint(i$2,a));return r$2(h)}_getUniqueHints(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t);}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer;}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}

export { e, r };
