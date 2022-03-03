import { e as s, s as s$1 } from './_virtual_index-3ad07138.js';
import { P, A } from './Utils-ba2d87f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=s.getLogger("esri.views.2d.engine.webgl");function o(s){return P(s.minDataValue)&&P(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?A.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?A.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?A.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?A.SIZE_UNIT_VALUE:(l.error(new s$1("mapview-bad-type","Found invalid size VisualVariable",s)),A.NONE)}

export { o };
