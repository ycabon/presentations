// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../Graphic","../../../core/arrayUtils","../../../core/iteratorUtils","../../support/screenUtils"],function(r,y,t,u,v){function w(a,c,d,g,k,l){return e=>{if(e instanceof y){if(e.layer===a)l?.();else{var f=a.allLayerViews.find(h=>h.layer===e.layer);f&&k?.(f)}g(n(e))}else"subtype-sublayer"===e.type?(f=a.allLayerViews.find(h=>h.layer===e.parent))&&d(e,f):(f=a.allLayerViews.find(h=>h.layer===e))&&c(f)}}function x(a,c){if(a)if(u.isIterable(a))for(const d of a)if(u.isIterable(d))for(const g of d)c(g);
else c(d);else c(a)}function n(a){const c=a.getObjectId();return c?`${a.layer?.uid??a.sourceLayer?.uid??"MapView"}/${c}`:`"MapView/${a.uid}`}function p({layer:a},c){"subtype-group"===a.type&&a.sublayers.forEach(d=>{c(d)})}r.hitTest=async function(a,c,d){const g=v.isSupportedScreenPointEvent(c)?v.createScreenPointFromSupportedEvent(a,c):c;if(!a.ready||isNaN(g.x)||isNaN(g.y))return{screenPoint:g,results:[]};let k=new Set;const l=new Set;let e=!1,f=null,h=null;d?.include?x(d.include,w(a,b=>{k.add(b);
p(b,m=>l.add(m))},(b,m)=>{l.add(b);k.add(m)},b=>{f||=new Set;f.add(b)},b=>k.add(b),()=>e=!0)):(e=!0,k=new Set(a.allLayerViews),k.forEach(b=>{p(b,m=>l.add(m))}));d?.exclude&&x(d.exclude,w(a,b=>{k.delete(b);p(b,m=>l.delete(m))},b=>l.delete(b),b=>{h||=new Set;h.add(b)}));c=a.allLayerViews.filter(b=>!b.suspended&&k.has(b)).reverse();const q=a.toMap(g);a=e?a.graphicsView.hitTest(q).map(b=>({type:"graphic",graphic:b,layer:null,mapPoint:q})):[];c=await Promise.all(c.map(b=>b.hitTest(q,g)).toArray());a=[...a,
...c].filter(t.isSome).flat().filter(t.isSome);a=a.filter(b=>"graphic"===b.type&&"subtype-group"===b.layer?.type?l.has(b.graphic.layer):!0);f&&(a=a.filter(b=>!("graphic"in b)||!b.graphic||f?.has(n(b.graphic))));h&&(a=a.filter(b=>!("graphic"in b)||!b.graphic||!h?.has(n(b.graphic))));return{screenPoint:g,results:a}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});