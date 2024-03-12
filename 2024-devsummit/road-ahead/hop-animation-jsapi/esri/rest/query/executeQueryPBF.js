// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../utils ./operations/pbfJSONFeatureSet ./operations/query ../support/FeatureSet ../support/Query".split(" "),function(d,g,h,k,l,e){async function f(b,a,c){b=g.parseUrl(b);c={...c};a=e.from(a);({data:a}=await k.executeQueryPBF(b,a,new h.JSONFeatureSetParserContext({sourceSpatialReference:a.sourceSpatialReference,applyTransform:!a.quantizationParameters}),c));return a}d.executeQueryPBF=async function(b,a,c){b=await f(b,e.from(a),c);return l.fromJSON(b)};d.executeRawQueryPBF=f;Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});