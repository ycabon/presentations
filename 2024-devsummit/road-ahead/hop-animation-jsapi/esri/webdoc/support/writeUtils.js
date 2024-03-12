// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/lang ../../core/object ../../core/accessorSupport/extensions/serializableProperty/writer ../../layers/support/layerUtils".split(" "),function(e,m,n,p,g,f){function l(a,c){"maxScale"in a&&(c.maxScale=g.numberToJSON(a.maxScale)??void 0);"minScale"in a&&(c.minScale=g.numberToJSON(a.minScale)??void 0)}const h=new Set("bing-maps imagery imagery-tile map-image open-street-map tile unknown unsupported vector-tile web-tile wms wmts".split(" ")),k=new Set("csv feature geo-rss geojson group imagery imagery-tile kml map-image map-notes media ogc-feature oriented-imagery route stream subtype-group tile unknown unsupported vector-tile web-tile wfs wms wmts".split(" "));
e.disableRestrictedWriting=function(a){h.add(a);k.add(a)};e.enableRestrictedWriting=function(a){h.delete(a);k.delete(a)};e.getLayerJSON=function(a,c,b){if(!a.persistenceEnabled)return null;if(!("write"in a&&a.write))return b?.messages&&b.messages.push(new m("layer:unsupported",`Layers (${a.title}, ${a.id}) of type '${a.declaredClass}' cannot be persisted`,{layer:a})),null;if(f.isFeatureCollectionLayer(a)&&!a.isTable)c=a.resourceInfo;else{if(b.restrictedWebMapWriting){var d="basemap"===b.layerContainerType?
h:"operational-layers"===b.layerContainerType?k:null;d=null!=d?d.has(a.type)&&!f.isFeatureCollectionLayer(a):!0}else d=!0;if(d)return c={},a.write(c,b)?c:null}if(null!=c){c=n.clone(c);if(b=c)f.isFeatureCollectionLayer(a)?(d=p.getDeepValue("featureCollection.layers",b)?.[0]?.layerDefinition)&&l(a,d):"group"!==a.type&&l(a,b);if(b&&(b.id=a.id,"blendMode"in a&&(b.blendMode=a.blendMode,"normal"===b.blendMode&&delete b.blendMode),b.opacity=g.numberToJSON(a.opacity)??void 0,b.title=a.title||"Layer",b.visibility=
a.visible,"legendEnabled"in a&&"wmts"!==a.type))if(f.isFeatureCollectionLayer(a)){if(b=b.featureCollection)b.showLegend=a.legendEnabled}else b.showLegend=a.legendEnabled}return c};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});