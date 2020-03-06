// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/MapUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/PooledArray ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingRect ./deconflictorDebug ../../support/debugFlags ../../support/earthUtils ../../support/geometryUtils ../../support/geometryUtils/sphere ../../webgl-engine/lib/screenSizePerspectiveUtils ../../webgl-engine/lib/Util ../../webgl-engine/materials/HUDMaterial ../../webgl-engine/materials/internal/MaterialUtil".split(" "),
function(F,v,Q,G,A,B,R,H,S,I,l,T,w,J,r,q,C,U,V,D,W,X,K,Y,y){function L(g){var b,a,m,d,c;return G(this,function(e){switch(e.label){case 0:if(!Map.prototype.entries)return[3,5];b=g.entries();a=b.next();e.label=1;case 1:return a.done?[3,4]:[4,a.value[1]];case 2:e.sent(),e.label=3;case 3:return a=b.next(),[3,1];case 4:return[3,9];case 5:m=R.valuesOfMap(g),d=0,c=m,e.label=6;case 6:if(!(d<c.length))return[3,9];a=c[d];return[4,a];case 7:e.sent(),e.label=8;case 8:return d++,[3,6];case 9:return[2]}})}function Z(g,
b,a){var m,d;return G(this,function(c){switch(c.label){case 0:return b.clear(),g.forEach(function(c,d){var m=b.pushNew();m.id=d;m.prio=c.info?c.info[a].posView:Number.MAX_VALUE}),[4];case 1:c.sent(),m=b.iterableSort(function(a,c){return c.prio-a.prio}),d=m.next(),c.label=2;case 2:return d.done?[3,5]:[4];case 3:c.sent(),c.label=4;case 4:return d=m.next(),[3,2];case 5:return b.forEach(function(a){var c=g.get(a.id);c&&(g.delete(a.id),g.set(a.id,c))}),b.clear(),[2]}})}Object.defineProperty(v,"__esModule",
{value:!0});var M=r.vec4f64.create(),x=r.vec4f64.create(),N=r.vec4f64.create(),aa=r.vec4f64.create(),O=D.sphere.create(),z=D.ray.create(),P=J.vec3f64.create(),ba=q.create(),ca=q.create(),da=function(){return function(){this.posView=this.yMax=this.yMin=this.xMax=this.xMin=0;this.visible=this.culled=!1}}();F=function(){return function(g,b,a){void 0===a&&(a={});this.graphics3DGraphic=g;this.slicePlaneEnabled=b;this.info=a}}();v.DeconflictorGraphic=F;var ea=function(){function g(){this.active=new Map;
this.visible=new Map}g.prototype.clear=function(){this.active.clear();this.visible.clear()};return g}(),fa=function(){return function(){}}(),ga=function(){return function(){this.sortArray=new I({allocator:function(g){return g||new fa}})}}();B=function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a._dirty=!1;a._state=0;a.graphics=new ea;a.iterators=new ga;a.accBinsNumX=15;a.accBinsNumY=20;a.accBinsSizeX=0;a.accBinsSizeY=0;a.accBins=null;a.accNumTests=0;return a}Q(b,g);Object.defineProperty(b.prototype,
"dirty",{get:function(){return this._dirty},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0});b.prototype.destroy=function(){this.graphics.clear();this.iterators=null};b.prototype.setDirty=function(){!this._dirty&&0<this.graphics.active.size&&(this._dirty=!0,this.notifyChange("updating"))};Object.defineProperty(b.prototype,"updating",{get:function(){return 0!==this._state||this._dirty},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"updatingProgress",{get:function(){if(!this.updating)return 1;var a=this._state/4;return this._dirty?.5*a:a},enumerable:!0,configurable:!0});b.prototype.needsUpdate=function(){return this.view.ready&&null!=this.view.state&&this.updating};b.prototype.update=function(a){switch(this._state){case 0:this.startUpdate(),a.madeProgress();case 1:if(this._state=1,!this.processActiveGraphics(a))break;case 2:if(this._state=2,!this.sortVisibleGraphics(a))break;case 3:if(this._state=
3,!this.deconflictVisibleGraphics(a))break;default:C.drawAccelerationStruct(this,this.graphics.visible),this._state=0,this.notifyChange("updating")}};b.prototype.modifyGraphics=function(a,b){var d=this;b?a.forEach(function(a){return d.addToActiveGraphics(a)}):a.forEach(function(a){return d.removeFromActiveGraphics(a)});this.setDirty()};b.prototype.layerSupportsDeconfliction=function(a){if(S.isNone(a)||"object3d"!==a.type)return!1;a=a.stageObject;return 1===(a?a.getNumGeometryRecords():0)&&a.getGeometryRecord(0).material instanceof
Y?!0:!1};b.prototype.startUpdate=function(){C.prepare(this.view);this._dirty=!1;this.camera=this.view.state.camera;this.initBins(this.camera.fullWidth,this.camera.fullHeight);this.resetIterators()};b.prototype.addToActiveGraphics=function(a){a.info[this.visibilityGroup]=new da;this.graphics.active.set(a.graphics3DGraphic.graphic.uid,a);this.setDirty()};b.prototype.removeFromActiveGraphics=function(a){this.removeFromVisibleGraphics(a);var b=a.graphics3DGraphic;b.destroyed||b.clearVisibilityFlag(3,
this.visibilityGroup);delete a.info[this.visibilityGroup];this.graphics.active.delete(a.graphics3DGraphic.graphic.uid);this.setDirty()};b.prototype.addToVisibleGraphics=function(a){this.graphics.visible.set(a.graphics3DGraphic.graphic.uid,a)};b.prototype.removeFromVisibleGraphics=function(a){this.graphics.visible.delete(a.graphics3DGraphic.graphic.uid)};b.prototype.processActiveGraphics=function(a){for(var b=this.ensureActiveGraphicsIterator(),d="global"===this.view.viewingMode&&1===this.view.map.ground.opacity&&
this.camera&&0<this.camera.relativeElevation;!a.done;){a.madeProgress();var c=b.next();if(c.done)return this.resetActiveGraphicsIterator(),!0;var e=(c=c.value)&&c.info[this.visibilityGroup];e&&(this.collectGraphics3DGraphics(c,d),e.culled?this.removeFromVisibleGraphics(c):this.addToVisibleGraphics(c))}return!1};b.prototype.sortVisibleGraphics=function(a){for(var b=this.ensureSortGraphicsIterator();!a.done;){var d=b.next();a.madeProgress();if(d.done)return this.resetSortGraphicsIterator(),!0}return!1};
b.prototype.deconflictVisibleGraphics=function(a){for(var b=this.ensureVisibleGraphicsIterator(),d=1===this.visibilityGroup;!a.done;){a.madeProgress();var c=b.next();if(c.done)return this.resetVisibleGraphicsIterator(),!0;var c=c.value,e=c.info[this.visibilityGroup];if(e&&!e.culled){var f=c.graphics3DGraphic;(f=(!d||f.isVisible())&&!this.isConflicted(c))&&this.addToBins(c);e.visible=f;this.setGraphicVisibility(c,f);C.drawPoly(e,f)}}return!1};b.prototype.resetIterators=function(){this.iterators.active=
null;this.iterators.visible=null;this.iterators.sort=null};b.prototype.ensureActiveGraphicsIterator=function(){this.iterators.active||(this.iterators.active=L(this.graphics.active));return this.iterators.active};b.prototype.resetActiveGraphicsIterator=function(){this.iterators.active=null};b.prototype.ensureVisibleGraphicsIterator=function(){this.iterators.visible||(this.iterators.visible=L(this.graphics.visible));return this.iterators.visible};b.prototype.resetVisibleGraphicsIterator=function(){this.iterators.visible=
null};b.prototype.ensureSortGraphicsIterator=function(){this.iterators.sort||(this.iterators.sort=Z(this.graphics.visible,this.iterators.sortArray,this.visibilityGroup));return this.iterators.sort};b.prototype.resetSortGraphicsIterator=function(){this.iterators.sort=null};b.prototype.collectGraphics3DGraphics=function(a,b){var d=a.graphics3DGraphic;if(!d.destroyed){var c=a.info[this.visibilityGroup];if(d.isVisible(0,3)){for(var d=this.getGraphicsLayers(d),e=this.iconMarginFactor,f=this.camera,m=q.empty(ba),
g,h,l=0;l<d.length;l++){var k=d[l];if(this.layerSupportsDeconfliction(k)){var p=k.stageObject,t=p.getGeometryRecord(0),n=t.material;if(b&&(O.radius=V.earthRadius,w.vec3.sub(z.direction,p.getCenter(),f.eye),w.vec3.copy(z.origin,f.eye),W.intersectRay(O,z,P))){var u=1-Math.abs(Math.tan(w.vec3.angle(p.getCenter(),z.direction)))/this.view.width,u=Math.pow(u,4),r=w.vec3.sqrDist(f.eye,P),v=w.vec3.sqrDist(f.eye,p.getCenter());if(u*v>r){c.culled=!0;return}}if(!h){h=p.getCenter();u=t.origin.vec3;y.transformToWorld(h,
u,M);y.transformToView(M,u,f.viewMatrix,x);h=t.geometry.data.getVertexAttr();n.applyVerticalOffsetTransformation(x,h[K.VertexAttrConstants.NORMAL].data,p.objectTransformation,f,E);if(a.slicePlaneEnabled&&this.slicePlaneViewSpace&&D.boundedPlane.extrusionContainsPoint(this.slicePlaneViewSpace,x)){c.culled=!0;return}p=h[K.VertexAttrConstants.AUXPOS1].data;t="screen"!==n.getParameters().centerOffsetUnits;y.transformToProjection(x,f.projectionMatrix,t?p:J.vec3f64.ZEROS,N);h=y.transformToNDC(N,aa);t||
(h[0]+=p[0]/f.fullWidth*2,h[1]+=p[1]/f.fullHeight*2);if(-1>h[0]||-1>h[1]||-1>h[2]||1<=h[0]||1<=h[1])break;g=x[2];!U.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET&&c.visible&&(g*=.7)}k=k.getScreenSize(ha);k[0]*=f.pixelRatio;k[1]*=f.pixelRatio;X.applyPrecomputedScaleFactorVec2(k,E.factor,k);n=q.offset(n.calculateRelativeScreenBounds(k,E.factorAlignment.scale,ca),H.lerp(0,f.fullWidth,.5+.5*h[0]),H.lerp(0,f.fullHeight,.5+.5*h[1]));0!==e&&(k=e*Math.min(q.width(n),q.height(n)),n[0]-=k,n[1]-=k,n[2]+=k,n[3]+=k);
q.expand(m,n)}}null==g?c.culled=!0:(c.xMin=m[0],c.yMin=m[1],c.xMax=m[2],c.yMax=m[3],c.posView=g,c.culled=!1)}else c.culled=!0}};b.prototype.isConflicted=function(a){var b=a.graphics3DGraphic.graphic.uid;a=a.info[this.visibilityGroup];for(var d=Math.floor(a.xMin/this.accBinsSizeX);d<=Math.floor(a.xMax/this.accBinsSizeX);d++)if(!(0>d||d>=this.accBinsNumX))for(var c=Math.floor(a.yMin/this.accBinsSizeY);c<=Math.floor(a.yMax/this.accBinsSizeY);c++)if(!(0>c||c>=this.accBinsNumY))for(var e=this.accBins[d][c],
f=0;f<e.length;f++){var g=e.data[f],l=g.info[this.visibilityGroup];if(l&&l.visible&&g.graphics3DGraphic.graphic.uid!==b&&(this.accNumTests++,!(l.xMin>a.xMax||l.xMax<a.xMin||l.yMin>a.yMax||l.yMax<a.yMin)))return!0}return!1};b.prototype.initBins=function(a,b){if(null==this.accBins){this.accBins=[];for(var d=0;d<this.accBinsNumX;d++){this.accBins.push([]);for(var c=this.accBins[this.accBins.length-1],e=0;e<this.accBinsNumY;e++)c.push(new I)}}else for(d=0;d<this.accBinsNumX;d++)for(e=0;e<this.accBinsNumY;e++)this.accBins[d][e].clear();
this.accBinsSizeX=a/this.accBinsNumX;this.accBinsSizeY=b/this.accBinsNumY;this.accNumTests=0};b.prototype.addToBins=function(a){for(var b=a.info[this.visibilityGroup],d=Math.floor(b.xMax/this.accBinsSizeX),c=Math.floor(b.yMin/this.accBinsSizeY),e=Math.floor(b.yMax/this.accBinsSizeY),b=Math.floor(b.xMin/this.accBinsSizeX);b<=d;b++)if(!(0>b||b>=this.accBinsNumX))for(var f=c;f<=e;f++)0>f||f>=this.accBinsNumY||this.accBins[b][f].push(a)};b.prototype.setGraphicVisibility=function(a,b){a=a.graphics3DGraphic;
a.destroyed||(a.setVisibilityFlag(3,b,this.visibilityGroup),1===this.visibilityGroup&&this.view.labeler.setLabelGraphicVisibility(a,b))};A([l.property({constructOnly:!0})],b.prototype,"view",void 0);A([l.property({type:Boolean,readOnly:!0})],b.prototype,"updating",null);return b=A([l.subclass("esri.views.3d.layers.graphics.Deconflictor")],b)}(l.declared(B));v.Deconflictor=B;var E={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},
ha=T.vec2f64.create()});