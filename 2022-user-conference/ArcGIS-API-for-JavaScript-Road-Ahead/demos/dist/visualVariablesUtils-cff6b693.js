import { Z as s, s as s$1 } from './_virtual_index-fc1e0009.js';
import { Q, k as A } from './Utils-073d76fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(l){return Q(l.minDataValue)&&Q(l.maxDataValue)&&null!=l.minSize&&null!=l.maxSize?A.SIZE_MINMAX_VALUE:(l.expression&&"view.scale"===l.expression||l.valueExpression&&"$view.scale"===l.valueExpression)&&Array.isArray(l.stops)?A.SIZE_SCALE_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&(Array.isArray(l.stops)||"levels"in l&&l.levels)?A.SIZE_FIELD_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&null!=l.valueUnit?A.SIZE_UNIT_VALUE:(s.getLogger("esri.views.2d.engine.webgl").error(new s$1("mapview-bad-type","Found invalid size VisualVariable",l)),A.NONE)}

export { l };
