import { u as e, y, ou as g, z as n, E as s, t, x, bk as w, m as r } from './_virtual_index-1ea2035a.js';
import { s as s$1 } from './popupUtils-4fcb9e6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,s$2){const{layer:p}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:a}=p,m=s$1(p,s$2);if(!a||t(m))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new x;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,w$1="2d"===this.view.type?new w(y,y,this.view.spatialReference):new w(.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:d,showNoDataRecords:h}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:w$1,showNoDataRecords:h,signal:r(s$2)?s$2.signal:null};return p.queryVisibleRasters(l,f).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],c.prototype,"layer",void 0),e([y()],c.prototype,"suspended",void 0),e([y(g)],c.prototype,"timeExtent",void 0),e([y()],c.prototype,"view",void 0),c=e([n("esri.views.layers.ImageryLayerView")],c),c};

export { m };
