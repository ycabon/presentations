// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/dom dojo/dom-attr dojo/_base/Color dojo/_base/lang dojox/gfx/_base ./svg ../gl-matrix/mat2d".split(" "),function(k,l,n,p,q,m,f,h,g){Object.defineProperty(l,"__esModule",{value:!0});k=function(){function c(){this.parentMatrix=this.parent=this.bbox=this.strokeStyle=this.fillStyle=this.matrix=this.shape=this.rawNode=null}c.prototype.destroy=function(){if(this.fillStyle&&"type"in this.fillStyle){var a=this.rawNode.getAttribute("fill");(a=h.getRef(a))&&a.parentNode.removeChild(a)}this.rawNode&&
"__gfxObject__"in this.rawNode&&(this.rawNode.__gfxObject__=null);this.rawNode=null};c.prototype.getNode=function(){return this.rawNode};c.prototype.getShape=function(){return this.shape};c.prototype.getTransform=function(){return this.matrix};c.prototype.getFill=function(){return this.fillStyle};c.prototype.getStroke=function(){return this.strokeStyle};c.prototype.getParent=function(){return this.parent};c.prototype.getBoundingBox=function(){return this.bbox};c.prototype.setTransform=function(a){this.matrix=
this.matrix?g.copy(this.matrix,a):g.clone(a);return this._applyTransform()};c.prototype.setFill=function(a){if(!a)return this.fillStyle=null,this.rawNode.setAttribute("fill","none"),this.rawNode.setAttribute("fill-opacity",0),this;var b;if("object"===typeof a&&"type"in a){switch(a.type){case "linear":b=f.makeParameters(f.defaultLinearGradient,a);a=this._setFillObject(b,"linearGradient");a.setAttribute("x1",b.x1.toFixed(8));a.setAttribute("y1",b.y1.toFixed(8));a.setAttribute("x2",b.x2.toFixed(8));
a.setAttribute("y2",b.y2.toFixed(8));break;case "radial":b=f.makeParameters(f.defaultRadialGradient,a);a=this._setFillObject(b,"radialGradient");a.setAttribute("cx",b.cx.toFixed(8));a.setAttribute("cy",b.cy.toFixed(8));a.setAttribute("r",b.r.toFixed(8));break;case "pattern":b=f.makeParameters(f.defaultPattern,a),a=this._setFillObject(b,"pattern"),a.setAttribute("x",b.x.toFixed(8)),a.setAttribute("y",b.y.toFixed(8)),a.setAttribute("width",b.width.toFixed(8)),a.setAttribute("height",b.height.toFixed(8))}this.fillStyle=
b;return this}this.fillStyle=b=f.normalizeColor(a);this.rawNode.setAttribute("fill",b.toCss());this.rawNode.setAttribute("fill-opacity",b.a);this.rawNode.setAttribute("fill-rule","evenodd");return this};c.prototype.setStroke=function(a){var b=this.rawNode;if(!a)return this.strokeStyle=null,b.setAttribute("stroke","none"),b.setAttribute("stroke-opacity",0),this;if("string"===typeof a||m.isArray(a)||a instanceof q)a={color:a};a=this.strokeStyle=f.makeParameters(f.defaultStroke,a);a.color=f.normalizeColor(a.color);
if(a){var c=0>a.width?0:a.width;b.setAttribute("stroke",a.color.toCss());b.setAttribute("stroke-opacity",a.color.a);b.setAttribute("stroke-width",c);b.setAttribute("stroke-linecap",a.cap);"number"===typeof a.join?(b.setAttribute("stroke-linejoin","miter"),b.setAttribute("stroke-miterlimit",a.join)):b.setAttribute("stroke-linejoin",a.join);var e=a.style.toLowerCase();e in h.dasharray&&(e=h.dasharray[e]);if(e instanceof Array){for(var e=m._toArray(e),d=0;d<e.length;++d)e[d]*=c;if("butt"!==a.cap){for(d=
0;d<e.length;d+=2)e[d]-=c,1>e[d]&&(e[d]=1);for(d=1;d<e.length;d+=2)e[d]+=c}e=e.join(",")}b.setAttribute("stroke-dasharray",e);b.setAttribute("dojoGfxStrokeStyle",a.style)}return this};c.prototype._getParentSurface=function(){for(var a=this.parent;a&&!a.defNode;a=a.parent);return a};c.prototype._setFillObject=function(a,b){var c=h.xmlns.svg;this.fillStyle=a;var e=this._getParentSurface().defNode,d=this.rawNode.getAttribute("fill");if(d=h.getRef(d))if(d.tagName.toLowerCase()!==b.toLowerCase()){var g=
d.id;d.parentNode.removeChild(d);d=h._createElementNS(c,b);d.setAttribute("id",g);e.appendChild(d)}else for(;d.childNodes.length;)d.removeChild(d.lastChild);else d=h._createElementNS(c,b),d.setAttribute("id",f._base._getUniqueId()),e.appendChild(d);if("pattern"===b)d.setAttribute("patternUnits","userSpaceOnUse"),c=h._createElementNS(c,"image"),c.setAttribute("x",0),c.setAttribute("y",0),c.setAttribute("width",(0>a.width?0:a.width).toFixed(8)),c.setAttribute("height",(0>a.height?0:a.height).toFixed(8)),
h._setAttributeNS(c,h.xmlns.xlink,"xlink:href",a.src),d.appendChild(c);else for(d.setAttribute("gradientUnits","userSpaceOnUse"),b=0;b<a.colors.length;++b){var e=a.colors[b],g=h._createElementNS(c,"stop"),k=e.color=f.normalizeColor(e.color);g.setAttribute("offset",e.offset.toFixed(8));g.setAttribute("stop-color",k.toCss());g.setAttribute("stop-opacity",k.a);d.appendChild(g)}this.rawNode.setAttribute("fill","url(#"+d.getAttribute("id")+")");this.rawNode.removeAttribute("fill-opacity");this.rawNode.setAttribute("fill-rule",
"evenodd");return d};c.prototype._applyTransform=function(){var a=this.matrix;a?this.rawNode.setAttribute("transform","matrix("+a[0].toFixed(8)+","+a[1].toFixed(8)+","+a[2].toFixed(8)+","+a[3].toFixed(8)+","+a[4].toFixed(8)+","+a[5].toFixed(8)+")"):this.rawNode.removeAttribute("transform");return this};c.prototype.setRawNode=function(a){a=this.rawNode=a;"image"!==this.shape.type&&a.setAttribute("fill","none");a.setAttribute("fill-opacity",0);a.setAttribute("stroke","none");a.setAttribute("stroke-opacity",
0);a.setAttribute("stroke-width",1);a.setAttribute("stroke-linecap","butt");a.setAttribute("stroke-linejoin","miter");a.setAttribute("stroke-miterlimit",4);a.__gfxObject__=this};c.prototype.setShape=function(a){this.shape=f.makeParameters(this.shape,a);for(var b in this.shape)if("type"!==b){a=this.shape[b];if("width"===b||"height"===b)a=0>a?0:a;this.rawNode.setAttribute(b,a)}this.bbox=null;return this};c.prototype._moveToFront=function(){this.rawNode.parentNode.appendChild(this.rawNode);return this};
c.prototype._moveToBack=function(){this.rawNode.parentNode.insertBefore(this.rawNode,this.rawNode.parentNode.firstChild);return this};c.prototype._removeClipNode=function(){var a,b=p.get(this.rawNode,"clip-path");b&&(a=n.byId(b.match(/gfx_clip[\d]+/)[0]))&&a.parentNode.removeChild(a);return a};c.prototype.moveToFront=function(){var a=this.getParent();a&&(a._moveChildToFront(this),this._moveToFront());return this};c.prototype.moveToBack=function(){var a=this.getParent();a&&(a._moveChildToBack(this),
this._moveToBack());return this};c.prototype.removeShape=function(a){this.parent&&this.parent.remove(this,a);return this};c.prototype._setParent=function(a,b){this.parent=a;return this._updateParentMatrix(b)};c.prototype._updateParentMatrix=function(a){this.parentMatrix=a?g.clone(a):null;return this._applyTransform()};c.prototype._getRealMatrix=function(){for(var a=g.clone(this.matrix||g.create()),b=this.parent;b;)b.matrix&&a&&g.multiply(a,b.matrix,a),b=b.parent;return a};return c}();l.default=k});