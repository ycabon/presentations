// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./PerformanceTimer","./gl-matrix"],function(u,m){function h(b,c){this.normal=e.create();this.init(b,c)}function g(b,c,a,d,f,q,k){this.dir=e.create();this.normalDir=null;this.minResult=new h(a,d);this.maxResult=new h(a,d);this.timer=new u(1);this.invertedM=l.create();this.intersectObject=this.intersectObject.bind(this);this.init(b,c,a,d,f,q,k)}var e=m.vec3d,l=m.mat4d;h.prototype.getIntersectionPoint=function(b){if(void 0===this.dist)return!1;e.lerp(this.p0,this.p1,this.dist,b);return!0};h.prototype.set=
function(b,c,a,d,f,q,k,h){this.dist=a;e.set(d,this.normal);this.object=b;this.name=c;this.priority=f;this.center=q;this.geometryId=k;this.triangleNr=h};h.prototype.setIntersector=function(b){this.intersector=b};h.prototype.init=function(b,c){this.priority=this.name=this.object=this.dist=void 0;this.triangleNr=this.geometryId=this.center=null;this.intersector="stage";this.p0=b;this.p1=c};g.prototype.init=function(b,c,a,d,f,h,k){a&&d&&e.subtract(d,a,this.dir);this.minResult.init(a,d);this.maxResult.init(a,
d);this.numObjectsTested=0;this.point=f;this.camera=h;this.isSelection=k;this.layers=b;this.objectIds=c;this.p0=a;this.p1=d;this.hudResults=[];if(this.objectIds)for(this.objectIdSet=new Set,a=0;a<this.objectIds.length;a++)this.objectIdSet.add(this.objectIds[a]);else this.objectIdSet=null;if(this.layers){this.timer.start();for(b=0;b<this.layers.length;++b)if(c=this.layers[b],a=c.getSpatialQueryAccelerator?c.getSpatialQueryAccelerator():void 0)a.forEachObjectAlongRay(this.p0,this.dir,this.intersectObject);
else for(c=c.getObjects(),a=0,d=c.length;a<d;++a)this.intersectObject(c[a]);this.timer.stop();this.performanceInfo={queryDuration:this.timer.getLast(),numObjectsTested:this.numObjectsTested}}};g.prototype.getDirection=function(){this.normalDir||(this.normalDir=e.create(),e.normalize(this.dir,this.normalDir));return this.normalDir};var n=l.create(),r=e.create(),t=e.create();g.prototype.intersectObject=function(b){if(!this.objectIdSet||this.objectIdSet.has(b.getId())){this.numObjectsTested++;for(var c=
b.getId(),a=b.getGeometryRecords(),d=b.getObjectTransformation(),f=0;f<a.length;f++){var e=a[f].geometry,k=e.getId(),g=a[f].materials;l.set(d,n);l.multiply(n,a[f].transformation);l.inverse(n,this.invertedM);l.multiplyVec3(this.invertedM,this.p0,r);l.multiplyVec3(this.invertedM,this.p1,t);for(var p=0,m=e.getNumGroups();p<m;++p)g[p].intersect(e,p,n,this.point,this.p0,this.p1,r,t,this.camera,function(a,d,e,f,g){0<=a&&(g?(g=new h,g.set(b,c,a,d,f,b.getCenter(),k,e),this.hudResults.push(g)):((void 0===
this.minResult.priority||f>=this.minResult.priority)&&(void 0===this.minResult.dist||a<this.minResult.dist)&&this.minResult.set(b,c,a,d,f,null,k,e),(void 0===this.maxResult.priority||f>=this.maxResult.priority)&&(void 0===this.maxResult.dist||a>this.maxResult.dist)&&this.maxResult.set(b,c,a,d,f,null,k,e)))}.bind(this),this.isSelection)}}};g.prototype.getMinResult=function(){return this.minResult};g.prototype.getMaxResult=function(){return this.maxResult};g.prototype.getHudResults=function(){return this.hudResults};
return g});