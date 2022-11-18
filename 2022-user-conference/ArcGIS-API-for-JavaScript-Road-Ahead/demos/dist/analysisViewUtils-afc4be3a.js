import { u as e, y, z as n, b7 as l$1, eX as w, av as v$1, bD as j, kH as j$1, t, gi as h } from './_virtual_index-1ea2035a.js';
import { p } from './dragEventPipeline-b225d16a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends p{constructor(s){super(s);}initialize(){this.addHandles(l$1((()=>this.analysisViewData.visible),(s=>this.visible=s),w));}deactivate(){this.onDeactivate(),this.created||this.analysis.clear();}resetCreated(){this._set("created",!1);}};e([y({constructOnly:!0})],a.prototype,"analysis",void 0),e([y()],a.prototype,"analysisViewData",void 0),a=e([n("esri.views.interactive.AnalysisToolBase")],a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(r,a){r.interactive=!0;const{tool:c,view:s}=r;s.activeTool=c;let l=v$1(a,(()=>{s.activeTool===c&&(s.activeTool=null);}));return j((async o=>{await j$1((()=>t(c)||!c.active),o),l=h(l);}),a)}function s(o,t){return l$1((()=>o.interactive),(()=>l(o,t)),w)}function l(o,t){o.interactive?v(o,t):m(o);}function v(o,t){m(o);const{view:i,analysis:e}=o,n=new t({view:i,analysis:e,analysisViewData:o});return o.tool=n,i.tools.add(n),n}function m(o){const{view:t$1,tool:e}=o;t(e)||(t$1.tools.remove(e),o.tool=null);}

export { a, c, m, s };
