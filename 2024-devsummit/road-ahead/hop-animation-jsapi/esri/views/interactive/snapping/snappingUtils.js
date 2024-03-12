// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/reactiveUtils ../../../core/SetUtils ../../../core/sql ../../../core/timeUtils ../../../chunks/vec32 ../../../layers/graphics/dehydratedPoint ../../../rest/support/Query ../../input/InputManager ../keybindings ../sketch/normalizedPoint".split(" "),function(e,m,u,v,w,n,x,y,z,p,q){function r(a,b){const c=a.x-b.x;a=a.y-b.y;return c*c+a*a}e.LineSegmentHintType=void 0;(function(a){a[a.TARGET=0]="TARGET";a[a.REFERENCE=1]="REFERENCE";a[a.REFERENCE_EXTENSION=2]="REFERENCE_EXTENSION"})(e.LineSegmentHintType||
(e.LineSegmentHintType={}));const t=Symbol("snapping-toggle");e.editEdgeToSnappingEdge=function(a,b,c){return{left:q.fromAnyMapPoint(a.leftVertex.pos,b,c),right:q.fromAnyMapPoint(a.rightVertex.pos,b,c)}};e.isUtilityNetworkWebMap=function(a){return null!=a&&"object"===typeof a&&"declaredClass"in a&&"esri.WebMap"===a.declaredClass&&"utilityNetworks"in a&&!!a?.utilityNetworks?.length};e.makeFilter=function(a){return a.createQuery()};e.makeSnappingQuery=function({point:a,distance:b,returnEdge:c,vertexMode:g,
coordinateHelper:{spatialReference:k},filter:d},h,f){f=null!=f?f.clone():new y({where:"1\x3d1"});if(d){f.geometry=d.geometry;f.distance=d.distance;f.spatialRelationship=d.spatialRelationship;f.where=v.sqlAnd(f.where,d.where);f.timeExtent=w.mergeTimeExtents(f.timeExtent,d.timeExtent);var A=f;var l=f.objectIds;d=d.objectIds;l=l||d?d?l?Array.from(u.intersection(new Set(l),new Set(d))):d:l:null;A.objectIds=l}return{point:x.makeDehydratedPoint(a[0],a[1],a[2],k.toJSON()),mode:h,distance:b,returnEdge:c,
vertexMode:g,query:f.toJSON()}};e.objectEqual=function(a,b){const c=a.length===b.length&&a[0]===b[0]&&a[1]===b[1];switch(a.length){case 2:return c;case 3:return c&&a[2]===b[2];case 4:return c&&a[2]===b[2]&&a[3]===b[3]}return!1};e.screenDistance=function(a,b){return Math.sqrt(r(a,b))};e.setupSnappingToggleHandles=function(a,b=()=>{}){const c=m.watch(()=>({view:a.view,snappingOptions:a.snappingOptions}),({view:g,snappingOptions:k})=>{a.removeHandles(t);if(g&&k){var d=z.ViewEventPriorities.TOOL;g=[g.on("key-down",
h=>{h.key!==p.snappingKeys.toggle||h.repeat||(k.enabledToggled=!0,b())},d),g.on("key-up",h=>{h.key===p.snappingKeys.toggle&&(k.enabledToggled=!1,b())},d),g.on("pointer-move",h=>{h=h.native.ctrlKey;k.enabledToggled!==h&&(k.enabledToggled=h,b())},d)];a.addHandles(g,t)}},m.syncAndInitial);a.addHandles(c)};e.sortCandidatesInPlace=function(a,b){b.sort((c,g)=>{c=n.squaredDistance(c.targetPoint,a);g=n.squaredDistance(g.targetPoint,a);return c-g})};e.squaredScreenDistance=r;Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});