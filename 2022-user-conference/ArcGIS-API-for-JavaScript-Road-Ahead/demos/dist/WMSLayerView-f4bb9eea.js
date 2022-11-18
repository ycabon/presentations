import { u as e, y, ou as g, z as n, E as s } from './_virtual_index-1ea2035a.js';
import { l } from './ExportWMSImageParameters-aeff78dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new l({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});return t.fetchFeatureInfo(p,a,i,m,n)}};return e([y()],i.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],i.prototype,"exportImageVersion",null),e([y()],i.prototype,"layer",void 0),e([y(g)],i.prototype,"timeExtent",void 0),i=e([n("esri.layers.mixins.WMSLayerView")],i),i};

export { a };
