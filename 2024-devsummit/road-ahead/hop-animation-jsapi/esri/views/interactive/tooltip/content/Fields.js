// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../components/TooltipEditableField","../../../../widgets/support/jsxFactory"],function(d,f,b){d.Fields=function(c){const e=c.fields.filter(a=>!0===a?.visible);return 0===e.length?null:b.tsx(b.tsxFragment,null,e.map(a=>b.tsx(f.TooltipEditableField,{context:c.context,field:a,key:a.id,mode:c.mode})))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});