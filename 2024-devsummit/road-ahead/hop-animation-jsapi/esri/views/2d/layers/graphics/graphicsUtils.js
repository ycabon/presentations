// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/spatialReferenceUtils ../../engine/webgl/definitions ../../engine/webgl/mesh/templates/shapingUtils".split(" "),function(d,f,l,g,m,h,n){d.getTextSymbolSize=function(a,b,c){if(!c.glyphs.length)return a;b=n.shapeGlyphs(c,{scale:f.pt2px(b.font.size)/h.glyphSize,angle:b.angle??0,xOffset:b.xoffset??0,yOffset:b.yoffset??0,horizontalAlignment:b.horizontalAlignment??
"center",verticalAlignment:b.verticalAlignment??"baseline",maxLineWidth:Math.max(32,Math.min(b.lineWidth||512,512)),lineHeight:h.magicLabelLineHeight*Math.max(.25,Math.min(b.lineHeight||1,4)),decoration:b.font.decoration||"none",useCIMAngleBehavior:!1,hasBackground:!!b.backgroundColor,borderLineSizePx:f.pt2px(b.borderLineSize)}).bounds;a[0]=f.pt2px(b.x-b.halfWidth);a[1]=f.pt2px(b.y-b.halfHeight);a[2]=f.pt2px(b.width);a[3]=f.pt2px(b.height);return a};d.graphicGeometryToNumber=function(a){if(!a)return 0;
switch(a.type){case "polyline":return 1;case "polygon":case "extent":return 2}return 0};d.intersectingInternationalDateline=function(a,b){b=m.getInfo(b);if(!b)return null;const [c,e]=b.valid;return a[2]>e?[g.create([a[0],a[1],e,a[3]]),g.create([c,a[1],c+a[2]-e,a[3]])]:a[0]<c?[g.create([c,a[1],a[2],a[3]]),g.create([e-(c-a[0]),a[1],e,a[3]])]:null};d.isMarkerSymbol=function(a){return"simple-marker"===a||"picture-marker"===a||"esriSMS"===a||"esriPMS"===a};d.isTextSymbol=function(a){return"text"===a||
"esriTS"===a};d.pixelBuffer=50;d.polygonFromExtent=function(a){if(!a)return null;const {xmin:b,ymin:c,xmax:e,ymax:k,spatialReference:p}=a;return new l({rings:[[[b,c],[b,k],[e,k],[e,c],[b,c]]],spatialReference:p})};d.tileSize=512;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});