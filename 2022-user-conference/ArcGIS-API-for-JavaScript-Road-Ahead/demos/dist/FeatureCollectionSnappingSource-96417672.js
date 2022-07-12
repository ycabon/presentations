import { ap as f, G as r, a as e, d, n } from './_virtual_index-64b818a8.js';
import { o } from './queryEngineUtils-3eacfa3c.js';
import './PointSnappingHint-b4dbba27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends f{constructor(r){super(r);}get availability(){return 1}refresh(){}async fetchCandidates(r$1,e){const t=this.layerSource.layer.source;return t.querySnapping?(await t.querySnapping({distance:r$1.distance,point:r$1.coordinateHelper.vectorToPoint(r$1.point).toJSON(),types:r$1.types,query:r(r$1.filter)?r$1.filter.createQuery().toJSON():{where:"1=1"}},{signal:e})).candidates.map((e=>o(e,r$1.coordinateHelper,r$1.elevationInfo))):[]}};e([d({constructOnly:!0})],i.prototype,"layerSource",void 0),e([d({readOnly:!0})],i.prototype,"availability",null),i=e([n("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],i);

export { i as FeatureCollectionSnappingSource };
