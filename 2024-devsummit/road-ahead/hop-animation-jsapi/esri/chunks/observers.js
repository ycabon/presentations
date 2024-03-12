// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){function g(b){class e extends window.MutationObserver{constructor(a){super(a);this.observedEntry=[];this.callback=a}observe(a,c){this.observedEntry.push({target:a,options:c});return super.observe(a,c)}unobserve(a){const c=this.observedEntry.filter(d=>d.target!==a);this.observedEntry=[];this.callback(super.takeRecords(),this);this.disconnect();c.forEach(d=>this.observe(d.target,d.options))}}return"intersection"===b?window.IntersectionObserver:"mutation"===b?e:window.ResizeObserver}
f.createObserver=function(b,e,a){return new (g(b))(e,a)}});