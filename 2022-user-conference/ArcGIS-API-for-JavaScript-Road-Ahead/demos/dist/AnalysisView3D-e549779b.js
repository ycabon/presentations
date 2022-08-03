import { k6 as m, r, dW as n$1, B as e, C as d, D as n$2 } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=n=>{let p=class extends(m(n)){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0;}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(e){this._userInteractive=e;}get updating(){return !1}get visible(){return !r(this.parent)||this.parent.visible&&!this.parent.suspended}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible");}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,n$1((()=>this._interactiveViewModelCount--))}};return e([d({readOnly:!0})],p.prototype,"type",void 0),e([d({constructOnly:!0})],p.prototype,"analysis",void 0),e([d({constructOnly:!0})],p.prototype,"parent",void 0),e([d({constructOnly:!0})],p.prototype,"view",void 0),e([d({type:Boolean})],p.prototype,"interactive",null),e([d()],p.prototype,"_userInteractive",void 0),e([d({readOnly:!0})],p.prototype,"updating",null),e([d()],p.prototype,"visible",null),e([d()],p.prototype,"_interactiveViewModelCount",void 0),p=e([n$2("esri.views.3d.analysis.AnalysisView3D")],p),p};

export { n };
