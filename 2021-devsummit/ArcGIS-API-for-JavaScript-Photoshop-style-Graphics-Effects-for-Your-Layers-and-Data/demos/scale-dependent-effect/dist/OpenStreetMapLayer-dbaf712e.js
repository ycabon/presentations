import { n as e, y, cc as k, cS as x, p as i, bC as z, aF as y$1 } from './index.js';
import { E } from './WebTileLayer-86beba7f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let n=class extends E{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,y$1.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA";}get refreshInterval(){return 0}};e([y({type:k,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),e([y({type:Boolean,json:{read:!1,write:!1}})],n.prototype,"isReference",void 0),e([y({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"refreshInterval",null),e([y({type:x,json:{write:!1}})],n.prototype,"tileInfo",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"subDomains",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"fullExtent",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"urlTemplate",void 0),e([y({type:["OpenStreetMap"]})],n.prototype,"operationalLayerType",void 0),e([y({json:{read:!1}})],n.prototype,"type",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"copyright",void 0),e([y({json:{read:!1,write:!1}})],n.prototype,"wmtsInfo",void 0),n=e([i("esri.layers.OpenStreetMapLayer")],n);var l=n;

export default l;
