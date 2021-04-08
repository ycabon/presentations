import { bn as t, j as e, y, k as i$1, c9 as a$1 } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=new t({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends a$1{constructor(r){super(r),this.description=null,this.type=null;}};e([y({type:String,json:{write:!0}})],i.prototype,"description",void 0),e([y({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=e([i$1("esri.tasks.support.GPMessage")],i);var a=i;

export { a };
