/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";const t=Symbol("widget"),r=Symbol("widget-test-data"),o=[],n={},i=new WeakMap;function d(e,t){let r=t.children;if(r?.length)for(let t=0;t<r.length;++t)r[t]=d(e,r[t]);else r=o;const i=t.vnodeSelector;if(l(i)){const o=t.properties||n,d=o.key||i;return{vnodeSelector:"div",properties:{key:d,afterCreate:a,afterUpdate:s,afterRemoved:c,parentWidget:e,widgetConstructor:i,widgetProperties:{...o,key:d,children:r}},children:void 0,text:void 0,domNode:null}}return t}function a(t,o,n,{parentWidget:d,widgetConstructor:a,widgetProperties:s}){const l=new a(s);l.container=t,i.set(t,l),l.afterCreate?.(l,t),d.addHandles(e((()=>c(t)))),queueMicrotask((()=>{l[r].projector.renderNow()}))}function s(e,t,r,{widgetProperties:o}){const n=i.get(e);n&&(n.set(o),n.afterUpdate?.(n,e))}function c(e){const t=i.get(e);t&&(t.afterRemoved?.(t,e),t.destroy(),i.delete(e))}function l(e){return"function"==typeof e&&e[t]}export{t as a,l as i,d as p,r as w};
