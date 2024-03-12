// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(b,g){function d(a){return e.get(a)}const f=new WeakMap,e=new WeakMap;b.componentFocusable=async function(a){await d(a);g.forceUpdate(a);return new Promise(c=>requestAnimationFrame(()=>c()))};b.componentLoaded=d;b.setComponentLoaded=function(a){f.get(a)()};b.setUpLoadableComponent=function(a){e.set(a,new Promise(c=>f.set(a,c)))}});