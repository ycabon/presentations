// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared"],function(m,n,l,g){class p extends n{constructor(a){super(a);this._topnum=0;this.declaredClass="esri.arcade.featureset.actions.Top";this._countedin=0;this._maxProcessing=100;this._topnum=a.topnum;this._parent=a.parentfeatureset}async _getSet(a){null===this._wset&&(await this._ensureLoaded(),a=await this._parent._getSet(a),this._wset=new l(a._candidates.slice(0),a._known.slice(0),!1,this._clonePageDefinition(a.pagesDefinition)),
this._setKnownLength(this._wset)>this._topnum&&(this._wset._known=this._wset._known.slice(0,this._topnum)),this._setKnownLength(this._wset)>=this._topnum&&(this._wset._candidates=[]));return this._wset}_setKnownLength(a){return 0<a._known.length&&"GETPAGES"===a._known[a._known.length-1]?a._known.length-1:a._known.length}_isInFeatureSet(a){const b=this._parent._isInFeatureSet(a);if(b===g.IdState.NotInFeatureSet)return b;const f=this._idstates[a];return f===g.IdState.InFeatureSet||f===g.IdState.NotInFeatureSet?
f:b===g.IdState.InFeatureSet&&void 0===f?this._countedin<this._topnum?(this._idstates[a]=g.IdState.InFeatureSet,this._countedin++,g.IdState.InFeatureSet):this._idstates[a]=g.IdState.NotInFeatureSet:g.IdState.Unknown}async _expandPagedSet(a,b,f,c,d){if(null===this._parent)throw new m.FeatureSetError(m.FeatureSetErrorCodes.NotImplemented);b>this._topnum&&(b=this._topnum);if(this._countedin>=this._topnum&&a.pagesDefinition.internal.set.length<=a.pagesDefinition.resultOffset)return b=a._known.length,
0<b&&"GETPAGES"===a._known[b-1]&&(a._known.length=b-1),b=a._candidates.length,0<b&&"GETPAGES"===a._candidates[b-1]&&(a._candidates.length=b-1),"success";b=await this._parent._expandPagedSet(a,b,f,c,d);this._setKnownLength(a)>this._topnum&&(a._known.length=this._topnum);this._setKnownLength(a)>=this._topnum&&(a._candidates.length=0);return b}async _getFeatures(a,b,f,c){const d=[],e=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,e))return await this._expandPagedSet(a,e,0,0,c),this._getFeatures(a,
b,f,c);-1!==b&&void 0===this._featureCache[b]&&d.push(b);let h=0;for(let k=a._lastFetchedIndex;k<a._known.length&&!(h++,h<=f&&(a._lastFetchedIndex+=1),void 0===this._featureCache[a._known[k]]&&(a._known[k]!==b&&d.push(a._known[k]),d.length>e));k++);if(0===d.length)return"success";a=new l([],d,!1,null);f=Math.min(d.length,f);await this._parent._getFeatures(a,-1,f,c);for(c=0;c<f;c++)a=this._parent._featureFromCache(d[c]),void 0!==a&&(this._featureCache[d[c]]=a);return"success"}async _getFilteredSet(a,
b,f,c,d){await this._ensureLoaded();a=await this._getSet(d);return new l(a._candidates.slice(0).concat(a._known.slice(0)),[],!1,this._clonePageDefinition(a.pagesDefinition))}_refineKnowns(a,b){let f=0,c=null;const d=[];for(let e=0;e<a._candidates.length;e++){const h=this._isInFeatureSet(a._candidates[e]);if(h===g.IdState.InFeatureSet){if(a._known.push(a._candidates[e]),f+=1,null===c?c={start:e,end:e}:c.end===e-1?c.end=e:(d.push(c),c={start:e,end:e}),a._known.length>=this._topnum)break}else if(h===
g.IdState.NotInFeatureSet)null===c?c={start:e,end:e}:c.end===e-1?c.end=e:(d.push(c),c={start:e,end:e}),f+=1;else if(h===g.IdState.Unknown)break;if(f>=b)break}null!==c&&d.push(c);for(b=d.length-1;0<=b;b--)a._candidates.splice(d[b].start,d[b].end-d[b].start+1);this._setKnownLength(a)>this._topnum&&(a._known=a._known.slice(0,this._topnum));this._setKnownLength(a)>=this._topnum&&(a._candidates=[])}async _stat(){return{calculated:!1}}async _canDoAggregates(){return!1}static registerAction(){n._featuresetFunctions.top=
function(a){return new p({parentfeatureset:this,topnum:a})}}getFieldsIndex(){return this._parent.getFieldsIndex()}}return p});