//>>built
define(["./query","./_base/lang","./_base/array"],function(f,g,k){var h=f.NodeList;g.extend(h,{_buildArrayFromCallback:function(b){for(var a=[],c=0;c<this.length;c++){var d=b.call(this[c],this[c],a);d&&(a=a.concat(d))}return a},_getUniqueAsNodeList:function(b){for(var a=[],c=0,d;d=b[c];c++)1==d.nodeType&&-1==k.indexOf(a,d)&&a.push(d);return this._wrap(a,null,this._NodeListCtor)},_getUniqueNodeListWithParent:function(b,a){b=this._getUniqueAsNodeList(b);b=a?f._filterResult(b,a):b;return b._stash(this)},
_getRelatedUniqueNodes:function(b,a){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(a),b)},children:function(b){return this._getRelatedUniqueNodes(b,function(a,c){return g._toArray(a.childNodes)})},closest:function(b,a){return this._getRelatedUniqueNodes(null,function(c,d){do if(f._filterResult([c],b,a).length)return c;while(c!=a&&(c=c.parentNode)&&1==c.nodeType);return null})},parent:function(b){return this._getRelatedUniqueNodes(b,function(a,c){return a.parentNode})},parents:function(b){return this._getRelatedUniqueNodes(b,
function(a,c){for(c=[];a.parentNode;)a=a.parentNode,c.push(a);return c})},siblings:function(b){return this._getRelatedUniqueNodes(b,function(a,c){c=[];for(var b=a.parentNode&&a.parentNode.childNodes,e=0;e<b.length;e++)b[e]!=a&&c.push(b[e]);return c})},next:function(b){return this._getRelatedUniqueNodes(b,function(a,b){for(a=a.nextSibling;a&&1!=a.nodeType;)a=a.nextSibling;return a})},nextAll:function(b){return this._getRelatedUniqueNodes(b,function(a,b){for(b=[];a=a.nextSibling;)1==a.nodeType&&b.push(a);
return b})},prev:function(b){return this._getRelatedUniqueNodes(b,function(a,b){for(a=a.previousSibling;a&&1!=a.nodeType;)a=a.previousSibling;return a})},prevAll:function(b){return this._getRelatedUniqueNodes(b,function(a,b){for(b=[];a=a.previousSibling;)1==a.nodeType&&b.push(a);return b})},andSelf:function(){return this.concat(this._parent)},first:function(){return this._wrap(this[0]&&[this[0]]||[],this)},last:function(){return this._wrap(this.length?[this[this.length-1]]:[],this)},even:function(){return this.filter(function(b,
a){return 0!=a%2})},odd:function(){return this.filter(function(b,a){return 0==a%2})}});return h});