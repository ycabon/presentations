// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry/GeometryCursor ../../../geometry/geometryCursorCollectUtils ../CIMEffects ../CIMOperators ../CIMSymbolHelper".split(" "),function(f,m,n,g,h,k){const p=96/72;class q{static executeEffects(b,a,e,c){const d=k.getEffectsInflateSize(b);a=new g.SimpleEffectCursor(a);for(const l of b)(b=h.getEffectOperator(l))&&(a=b.execute(a,l,p,e,c,d));return a}static applyEffects(b,a,e){if(!b)return a;var c=k.getEffectsInflateSize(b);a=new g.SimpleEffectCursor(m.GeometryCursor.fromJSONCIM(a));
for(var d of b)(b=h.getEffectOperator(d))&&(a=b.execute(a,d,1,null,e,c));c=[];for(d=null;e=a.next();)c.push(...n.collectMultipath(e)),d=e.geometryType;return 0===c.length||null===d?null:"esriGeometryPolygon"===d?{rings:c}:{paths:c}}}f.CIMEffectHelper=q;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});