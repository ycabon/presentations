// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/Accessor ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators @dojo/framework/shim/Promise".split(" "),function(d,m,k,n,p,D,E,e,h){Object.defineProperty(m,"__esModule",{value:!0});d=function(d){function a(b){b=d.call(this,b)||this;b._queue=[];b._onGoingRequest=
null;b._abortController=e.createAbortController();return b}D(a,d);a.prototype.destroy=function(){this.clear()};Object.defineProperty(a.prototype,"updating",{get:function(){return!this.destroyed&&(0<this._queue.length||null!=this._onGoingRequest)},enumerable:!0,configurable:!0});a.prototype.clear=function(){if(this.destroyed)throw Error("instance is already destroyed");for(var b=this._queue.pop();b;)b.resolver.reject(e.createAbortError()),b=this._queue.pop();this._queue.length=0;this._abortController.abort();
this._abortController=e.createAbortController()};a.prototype.push=function(b){return p(this,void 0,void 0,function(){var a,f=this;return n(this,function(g){if(this.destroyed)throw Error("instance is already destroyed");a=e.createResolver();this._queue.push({event:b,resolver:a});this.notifyChange("updating");Promise.resolve().then(function(){f._processNext()});return[2,a.promise]})})};a.prototype._processNext=function(){return p(this,void 0,void 0,function(){var b,a,f,g,d,e,h,k,m,p,q,u,v,c,l,r,w,x,
t,y,z,A,B,C=this;return n(this,function(n){switch(n.label){case 0:if(this._onGoingRequest)return[2];b=[];a=new Set;f=new Set;g=new Set;for(d=this._queue.shift();d;){e=d.event;h=e.addedFeatures;k=e.deletedFeatures;m=e.updatedFeatures;p=d.resolver;b.push(p);q=0;for(u=h;q<u.length;q++)v=u[q],c=v.objectId,l=v.error,l||(a.add(c),f.add(c),g.delete(c));r=0;for(w=m;r<w.length;r++)x=w[r],c=x.objectId,l=x.error,l||(f.add(c),g.delete(c));t=0;for(y=k;t<y.length;t++)z=y[t],c=z.objectId,l=z.error,l||(a.has(c)?
a.delete(c):g.add(c),f.delete(c));d=this._queue.shift()}if(!f.size&&!g.size)return this.notifyChange("updating"),b.forEach(function(a){return a()}),[2];A=[];B=[];f.size&&f.forEach(function(a){A.push(a)});g.size&&g.forEach(function(a){B.push(a)});this._onGoingRequest=Promise.resolve().then(function(){return C.processEdits(A,B,{signal:C._abortController.signal})}).catch(function(){});this.notifyChange("updating");return[4,this._onGoingRequest];case 1:return n.sent(),this._onGoingRequest=null,this.notifyChange("updating"),
b.forEach(function(a){return a()}),0<this._queue.length&&this._processNext(),[2]}})})};k([h.property({constructOnly:!0})],a.prototype,"processEdits",void 0);k([h.property({readOnly:!0})],a.prototype,"updating",null);return a=k([h.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],a)}(h.declared(E));m.EditsQueue=d});