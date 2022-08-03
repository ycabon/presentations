import { B as e, C as d, D as n, b3 as l$1, er as w, bz as j, jX as j$1, fy as a$2, av as v$1, t } from './_virtual_index-9b831d4a.js';
import { p } from './dragEventPipeline-b56dbe77.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a$1=class extends p{constructor(s){super(s);}initialize(){this.addHandles(l$1((()=>this.analysisViewData.visible),(s=>this.visible=s),w));}deactivate(){this.onDeactivate(),this.created||this.analysis.clear();}resetCreated(){this._set("created",!1);}};e([d({constructOnly:!0})],a$1.prototype,"analysis",void 0),e([d()],a$1.prototype,"analysisViewData",void 0),a$1=e([n("esri.views.interactive.AnalysisToolBase")],a$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(i,n,s){const a=m(i,n);i.view.activeTool=a;let c=v$1(s,(()=>l(i,n)));return j((async o=>{await j$1((()=>!a.active),o),c=a$2(c),l(i,n);}),s)}function c(o,t){return l$1((()=>o.interactive),(()=>l(o,t)),w)}function l(o,t){o.interactive?m(o,t):v(o);}function m(o,t){v(o);const{view:i,analysis:e}=o,n=new t({view:i,analysis:e,analysisViewData:o});return o.tool=n,i.tools.add(n),n}function v(o){const{view:t$1,tool:e}=o;t(e)||(t$1.tools.remove(e),o.tool=null);}

export { a$1 as a, a as b, c, v };
