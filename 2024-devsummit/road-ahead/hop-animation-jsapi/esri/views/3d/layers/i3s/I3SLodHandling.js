// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../../core/PooledArray","./I3SNode","../support/I3SLayerView"],function(v,t,u){class w{constructor(a){this._layerView=a;this._lodGlobalDirty=!1}startNodeLoading(a,b,c,d){this._maxLodLevel=d.maxLodLevel;this._index=c;this._isNodeInScaleBounds=a;this._removeNodes=b}shouldLoadNode(a){if(null==a)return!1;const b=this._index.nodeTraversalState(a);return this._isChosenMaxLOD(b)?!0:b.isChosen?this._childrenRequireLoading(a):!1}setLodGlobalDirty(){this._lodGlobalDirty=!0}get requiresLODGlobalHandling(){return null!=
this._index&&!0===this._lodGlobalDirty}lodGlobalHandling(a){if(!this.requiresLODGlobalHandling)return!1;this._lodGlobalDirty=!1;var b=Math.max(0,Math.floor(10*(this._layerView.view.resourceController.memoryController.usedMemory-1)));e.clear();this._lodGlobalHandling(this._index.rootNode,b,!1,!!this._layerView.nodeCrossfadingEnabled);b=e.length;this._removeNodes(e,a);a=e.length<b;0!==e.length&&(this._lodGlobalDirty=!0);e.clear();return a}_lodGlobalHandling(a,b,c,d){if(null==a)return!1;const f=a.index,
n=this._index,k=this._layerView;var g=n.nodeTraversalState(a);g=this._isChosenMaxLOD(g);var h=a.resources.isEmpty;if(g&&h)return 0<a.childrenLoaded&&this._removeChildrenRecursive(a),!0;h=k.isNodeLoaded(f);if(d&&h&&g){var l=!c&&this.hasNoVisibleChildren(a);k.fadeNode(f,u.FadeDirection.FadeIn,!l)}l=h&&(!k.isNodeFullyFadedIn||k.isNodeFullyFadedIn(f));if(h&&(k.updateNodeState(f,g?t.NodeState.Leaf:t.NodeState.Hole),g))return l&&this._removeChildrenRecursive(a),l;var m=0<a.childCount;let p=m;if(m)for(m=
0;m<a.childCount;m++){const q=n.getChildIndex(f,m),r=n.getNode(q);null!=r?n.isGeometryVisible(q)&&!this._lodGlobalHandling(r,b,c||l,d)&&this._isNodeInScaleBounds(r)&&(p=!1):n.isNodeVisible(q)&&(p=!1)}(b=h&&!g&&(p||e.length<b))&&e.push(f);!d||b||!h||c||p||k.fadeNode(f,u.FadeDirection.FadeIn,!1);a=a.resources.isEmpty;return p||l&&!b||a}_removeChildrenRecursive(a){this._index.traverseDescendants(a,b=>{(this._layerView.isNodeLoaded(b.index)||this._layerView.isNodeReloading(b.index))&&e.push(b.index);
return 0<b.childrenLoaded})}hasNoVisibleChildren(a){let b=!0;this._index.traverseDescendants(a,c=>b&&this._index.isNodeVisible(c.index)?this._layerView.isNodeLoaded(c.index)?b=!1:0<c.childrenLoaded:!1);return b}_childrenRequireLoading(a){let b=!1,c=!0;this._index.traverseDescendants(a,d=>{if(!c||!this._index.isNodeVisible(d.index))return!1;const f=this._index.nodeTraversalState(d);this._isChosenMaxLOD(f)&&this._index.isGeometryVisible(d.index)&&(b=!0);return this._layerView.isNodeLoaded(d.index)?
c=!1:0<d.childrenLoaded});return c&&b}_isChosenMaxLOD(a){return a.isChosen&&(!a.nodeHasLOD||a.lodLevel===this._maxLodLevel)}}const e=new v({deallocator:null});return w});