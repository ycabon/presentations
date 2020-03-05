// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/string ../../support/mathUtils ../lib/localOrigin ../lib/ModelContentType ../lib/ModelDirtySet ../lib/RenderGeometry ../lib/Util".split(" "),function(h,k,m,n,p,g,q,r,l){Object.defineProperty(k,"__esModule",{value:!0});var f=l.assert,t=l.logWithBase;h=function(){function e(){var a=this;this.dirtySet=new q(this);this._id2origin={};this._content=new Map;g.allModelContentTypes.forEach(function(b){return a._content.set(b,new Map)})}e.prototype.getAll=function(a){a=
this._content.get(a);f(void 0!==a);return a};e.prototype.get=function(a,b){return this.getAll(a).get(b)};e.prototype.add=function(a,b){var c=this._content.get(a);f(void 0!==c);var d=b.id;f(!c.has(d),"Model/Stage already contains object to be added");c.set(d,b);0===a&&this.notifyDirty(b,"layerAdded")};e.prototype.remove=function(a,b){var c=this._content.get(a);f(void 0!==c);var d=c.get(b);f(void 0!==d,"Model/Stage doesn't contain object to be removed");c.delete(b);4===a&&d.unload();0===a&&this.notifyDirty(d,
"layerRemoved");return d};e.prototype.getDirtySet=function(){return this.dirtySet};e.prototype.notifyDirty=function(a,b,c){this.dirtySet.handleUpdate(a,b,c)};e.prototype.getOrigin=function(a,b,c){void 0===c&&(c=10);var d=0;b=b*c/1E4;1<b&&(d=Math.ceil(t(b,2)));b=1E4*Math.pow(2,d);c=Math.round(a[0]/b);var e=Math.round(a[1]/b);a=Math.round(a[2]/b);var d=d+"_"+c+"_"+e+"_"+a,f=this._id2origin[d];null==f&&(f=p.fromValues(c*b,e*b,a*b,d),this._id2origin[d]=f);return f};e.prototype.getGeometryRenderGeometries=
function(a,b,c){var d=b.geometry,e=a.getCombinedStaticTransformation(b),f=n.maxScale(e),g=b.origin;a=new r(d.data,d.boundingInfo,b.material,e,b.shaderTransformation,f,a.castShadow);a.uniqueName=b.id;a.origin=g||this.getOrigin(a.center,a.bsRadius);a.instanceParameters=b.instanceParameters;c.push(a)};e.prototype.updateRenderGeometryTransformation=function(a,b,c){a=a.getCombinedStaticTransformation(b,c.transformation);c.updateTransformation(a);a=this.getOrigin(c.center,c.bsRadius);return c.origin!==
a};e.prototype.formatDebugInfo=function(a){var b=[];if(a){b[0]="\x3ctable\x3e";for(var c=0,d=g.allModelContentTypes;c<d.length;c++)a=d[c],b[0]+="\x3ctr\x3e\x3ctd\x3e"+a+'\x3c/td\x3e\x3ctd style\x3d"text-align: right"\x3e'+this.getAll(a).size+"\x3c/td\x3e\x3c/tr\x3e";b[0]+="\x3c/table\x3e";b[1]=this.dirtySet.formatDebugInfo(!0)}else{b[0]="";c=0;for(d=g.allModelContentTypes;c<d.length;c++)a=d[c],b[0]+=m.padStart(String(this.getAll(a).size),6," ")+" "+a+", ";b[1]=this.dirtySet.formatDebugInfo(!1)}return b};
e.prototype.validateObject=function(a){a=a.geometryRecords;for(var b=0;b<a.length;++b){var c=a[b];f(null!=this.get(2,c.geometry.id));f(null!=this.get(3,c.material.id))}};e.prototype.validateLayer=function(a){a=a.getObjects();for(var b=0;b<a.length;++b){var c=this.get(1,a[b].id);f(null!=c)}};return e}();k.Model=h});