import { n, s } from './_virtual_index-634cbc09.js';
import { K, A } from './Utils-3e0360c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=n.getLogger("esri.views.2d.engine.webgl");function o(e){return K(e.minDataValue)&&K(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?A.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?A.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?A.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?A.SIZE_UNIT_VALUE:(l.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),A.NONE)}

export { o };
