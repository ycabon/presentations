// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/PooledArray"],function(m,p,n){m=function(){function b(a){this.layerView=a;this._lodGlobalDirty=!1}b.prototype.startNodeLoading=function(a,c,e,g,f,b,d){this._maxLodLevel=d.maxLodLevel;this._index=b;this._nodeTraversalState=g;this._isNodeVisible=a;this._isGeometryVisible=c;this._isNodeInScaleBounds=e;this._removeNodes=f};b.prototype.shouldLoadNode=function(a){var c=this._nodeTraversalState(a);return this.isChosenMaxLOD(c)?!0:c.isChosen?this._childrenRequireLoading(a):
!1};b.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0};Object.defineProperty(b.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!0,configurable:!0});b.prototype.lodGlobalHandling=function(a){if(!this.requiresLODGlobalHandling)return!1;var c=Math.max(0,Math.floor(10*(this.layerView.view.resourceController.memoryController.usedMemory-1)));d.clear();this._lodGlobalHandlingRecursion(this._index.rootNode,c);c=d.length;
this._removeNodes(d,a);a=d.length<c;0===d.length&&(this._lodGlobalDirty=!1);d.clear();return a};b.prototype._lodGlobalHandlingRecursion=function(a,c){if(null==a)return!1;var e=this._nodeTraversalState(a),b=this.isChosenMaxLOD(e);(e=this.layerView.isNodeLoaded(a.index))&&null!=this.layerView.updateNodeStatus&&this.layerView.updateNodeStatus(a.index,b?"leaf":"hole");if(b&&e)return this._removeChildrenRecursive(a),!0;var f=!1;if(0<a.childCount)for(var f=!0,h=0;h<a.childCount;h++){var k=this._index.getChildIndex(a,
h),l=this._index.getNode(k);l?this._isGeometryVisible(k)&&!this._lodGlobalHandlingRecursion(l,c)&&this._isNodeInScaleBounds(l)&&(f=!1):this._isNodeVisible(k)&&(f=!1)}e&&!b&&(f||d.length<c)&&(d.push(a.index),e=!1);a=!a.resources.hasFeatureData;return f||e||a};b.prototype._removeChildrenRecursive=function(a){this._index.traverseChildren(a,function(a){d.push(a.index);return!0})};b.prototype.childrenEmpty=function(a){var c=this,b=!0;this._index.traverseChildren(a,function(a){return b&&c._isNodeVisible(a.index)?
c.layerView.isNodeLoaded(a.index)?b=!1:!0:!1});return b};b.prototype._childrenRequireLoading=function(a){var b=this,d=!1,g=!0;this._index.traverseChildren(a,function(a){if(!g||!b._isNodeVisible(a.index))return!1;var c=b._nodeTraversalState(a);b.isChosenMaxLOD(c)&&b._isGeometryVisible(a.index)&&(d=!0);return b.layerView.isNodeLoaded(a.index)?g=!1:!0});return g&&d};b.prototype.isChosenMaxLOD=function(a){return a.isChosen&&(!a.nodeHasLOD||a.lodLevel===this._maxLodLevel)};return b}();var d=new n({deallocator:null});
return m});