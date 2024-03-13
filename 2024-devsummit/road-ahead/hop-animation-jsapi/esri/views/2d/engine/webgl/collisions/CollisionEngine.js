// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/has","../definitions","./CollisionGrid"],function(w,y,x,t){function r(e,d){e=e.children.slice();e.sort((c,f)=>c.tileAge-f.tileAge);e.forEach(c=>{null!=c.labelMetrics&&c.isReady&&d(c,c.labelMetrics)})}class z{run(e,d,c,f){const a=[];for(let b=e.length-1;0<=b;b--){const k=e[b];k.labelingCollisionInfos?.length&&a.push(...k.labelingCollisionInfos)}y("esri-2d-update-debug")&&a.length&&console.debug("CollisionEngine.run");this._transformMetrics(a);this._runCollision(a,
d,c,f);for(const b of a)b.container.requestRender()}_runCollision(e,d,c,f){const [a,b]=d.state.size,k=new t.CollisionBitsetGrid(a,b,d.pixelRatio);for(const {container:g,deconflictionEnabled:h,visible:l}of e){const m=g.attributeView;h?l?(this._prepare(g),this._collideVisible(k,g,c,f),this._collideInvisible(k,g)):r(g,(q,u)=>{for(const n of u)m.setLabelMinZoom(n.entityTexel,255)}):r(g,(q,u)=>{for(const n of u)m.setLabelMinZoom(n.entityTexel,0),l&&k.insertMetrics(n)})}}_isFiltered(e,d,c){e=d.getFilterFlags(e);
d=null==c.featureEffect||c.featureEffect.excludedLabelsVisible||!!(e&x.effectFlag0);return!((!c.hasFilter||e&x.filterFlag0)&&d)}_prepare(e){const d=e.attributeView,c=new Set;r(e,(f,a)=>{for(const b of a)f=b.entityTexel,c.has(f)||(c.add(f),this._isFiltered(f,d,e.layerView)?d.setLabelMinZoom(f,254):0!==d.getLabelMinZoom(f)?d.setLabelMinZoom(f,255):d.setLabelMinZoom(f,0))})}_collideVisible(e,d,c,f){const a=d.attributeView,b=new Set;r(d,(k,g)=>{for(const h of g)if(g=h.entityTexel,!b.has(g))if(k.key.level!==
f)a.setLabelMinZoom(g,254);else if(h.minScale&&!(h.minScale>=c)||h.maxScale&&!(h.maxScale<=c))a.setLabelMinZoom(g,254);else if(0===a.getLabelMinZoom(g))switch(e.insertMetrics(h)){case t.hasCollision:a.setLabelMinZoom(g,254);b.add(g);break;case t.none:a.setLabelMinZoom(g,0),b.add(g)}})}_collideInvisible(e,d){const c=d.attributeView,f=new Set;r(d,(a,b)=>{for(const k of b)if(a=k.entityTexel,!f.has(a)&&255===c.getLabelMinZoom(a))switch(e.insertMetrics(k)){case t.hasCollision:c.setLabelMinZoom(a,255);
f.add(a);break;case t.none:c.setLabelMinZoom(a,0),f.add(a)}})}_transformMetrics(e){for(const {container:d,geometryType:c,vvEvaluators:f}of e)r(d,(a,b)=>{const k=d.attributeView;a=a.transforms.labelMat2d;a[4]=Math.round(a[4]);a[5]=Math.round(a[5]);const g="polyline"===c;for(const q of b){const {entityTexel:u,anchorX:n,anchorY:v}=q;var h=q.referenceBounds.size;b=f[0];if(null!=b){var l=k.getVVSize(u);b=b(l);h=isNaN(b)||null==b||Infinity===b?h:b}b=h/2*q.directionX;h=h/2*q.directionY;for(const p of q.bounds){l=
n;var m=v;g?(l=l+p.x+b,m=m+p.y+h,l=a[0]*l+a[2]*m+a[4],m=a[1]*l+a[3]*m+a[5],p.computedX=Math.floor(l),p.computedY=Math.floor(m)):(l=a[0]*n+a[2]*v+a[4],m=a[1]*n+a[3]*v+a[5],m=m+p.y+h,p.computedX=l+p.x+b,p.computedY=m)}}})}}w.CollisionEngine=z;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});