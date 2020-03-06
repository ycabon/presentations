// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../fontUtils ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLDynamicMeshTemplate ../../util/BidiText".split(" "),function(m,u,x,f,q,n,v,w,d,y,z,A){Object.defineProperty(u,"__esModule",{value:!0});var r=new Set;m=function(m){function l(p,a){var b=m.call(this,a)||this;b._horizontalAlignment="center";b._verticalAlignment="middle";b._glyphs=[];var t=
a.scaleFactor||1;b._cimTextLayer=a;d.isFunction(a.color)?b._dynamicPropertyMap.set("_color",function(b,e,c){return n.premultiplyAlphaRGBA(a.color(b,e,c))}):b._color=n.premultiplyAlphaRGBA(a.color);d.isFunction(a.color)?b._dynamicPropertyMap.set("_haloColor",function(b,e,c){return n.premultiplyAlphaRGBA(a.outlineColor(b,e,c))}):b._haloColor=n.premultiplyAlphaRGBA(a.outlineColor);var h;d.isFunction(a.size)||(h=Math.min(Math.round(f.pt2px(a.size*a.sizeRatio)),127));b._dynamicPropertyMap.set("_size",
function(b,e,c){return d.isFunction(a.size)?Math.min(Math.round(f.pt2px(a.size(b,e,c)*a.sizeRatio)),127):h});d.isFunction(a.outlineSize)?b._dynamicPropertyMap.set("_haloSize",function(b,e,c){return Math.min(Math.floor(5*f.pt2px(a.outlineSize(b,e,c)*a.sizeRatio)),127)}):b._haloSize=Math.min(Math.floor(5*f.pt2px(a.outlineSize*a.sizeRatio)),127);var g;d.isFunction(a.offsetX)||(g=Math.round(f.pt2px(a.offsetX*a.sizeRatio)));b._dynamicPropertyMap.set("_xOffset",function(b,e,c){return d.isFunction(a.offsetX)?
Math.round(f.pt2px(a.offsetX(b,e,c)*a.sizeRatio)):g});var k;d.isFunction(a.offsetY)||(k=Math.round(f.pt2px(a.offsetY*a.sizeRatio)));b._dynamicPropertyMap.set("_yOffset",function(b,e,c){return d.isFunction(a.offsetY)?Math.round(f.pt2px(a.offsetY(b,e,c)*a.sizeRatio)):k});d.isFunction(a.decoration)?b._dynamicPropertyMap.set("_decorationTop",function(b,e,c){return v.getFontDecorationTop(a.decoration(b,e,c))}):b._decorationTop=v.getFontDecorationTop(a.decoration);d.isFunction(a.angle)?b._dynamicPropertyMap.set("_angle",
a.angle):b._angle=a.angle;d.isFunction(a.horizontalAlignment)?b._dynamicPropertyMap.set("_horizontalAlignment",a.horizontalAlignment):b._horizontalAlignment=a.horizontalAlignment;d.isFunction(a.verticalAlignment)?b._dynamicPropertyMap.set("_verticalAlignment",a.verticalAlignment):b._verticalAlignment=a.verticalAlignment;b._scaleFactor=t;d.isFunction(a.text)?b._dynamicPropertyMap.set("_text",a.text):b._text=a.text;t=Math.min(Math.round(f.pt2px(a.referenceSize*a.sizeRatio)),127);b._referenceSize=Math.round(Math.sqrt(256*
t));b._materialKey=w.createMaterialKey(b.geometryType,p,!1);p=w.TextMaterialKey.load(b._materialKey);p.sdf=!0;b._bitset=a.colorLocked?1:0;b._materialKey=p.data;return b}x(l,m);l.fromCIMText=function(d,a){return new l(d,a)};l.prototype.analyze=function(d,a,b,f){var h=this._cimTextLayer;a="string"===typeof h.text?h.text:"function"===typeof h.text?h.text(a,b,f):"";var g=this._glyphs;r.clear();for(b=0;b<a.length;b++)r.add(a.charCodeAt(b));var k=[];r.forEach(function(a){if(g.length<a||void 0===g[a])k[a]=
a});return d.getCIMMosaicItem(h.cim,k).then(function(a){if(a.glyphMosaicItems&&0<a.glyphMosaicItems.length)for(var b=a.glyphMosaicItems,c=0;c<b.length;c++)void 0!==b[c]&&(g[c]=b[c]);return a})};l.prototype.bindFeature=function(d,a,b){var f=this;this._dynamicPropertyMap.forEach(function(c,e){f[e]=c(d,a,b)});if(this._text&&0!==this._text.length){this._size*=this._scaleFactor;this._scale=this._size/24;this._xOffset*=this._scaleFactor;this._yOffset*=this._scaleFactor;this._justify=q.getJustification(this._horizontalAlignment||
"center");this._xAlignD=q.getXAnchorDirection(this._horizontalAlignment||"center");this._yAlignD=-q.getYAnchorDirection(this._verticalAlignment||"baseline");this._baseline="baseline"===(this._verticalAlignment||"baseline");for(var h=this._glyphs,g=A.bidiText(this._text),k=g[0],g=g[1],l=[],e=0;e<k.length;e++)l[k.charCodeAt(e)]=h[k.charCodeAt(e)];this.bindTextInfo(l,k,g);this._computeGlyphs(this._shapedGlyphs,this._shapedBox)}else this._shapedBox=this._shapedGlyphs=this._computedGlyphs=null};return l}(y.default(z.default));
u.default=m});