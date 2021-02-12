import { q as e$1, y, r as i$3, cI as a, br as u$1, eL as a$1, df as M, eI as g, eH as l, b7 as s$1, h as s$2, en as o } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t=class extends a{constructor(){super(...arguments),this.type=null;}};e$1([y({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=e$1([i$3("esri.layers.support.FeatureReduction")],t);var p=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i;let e=i=class extends a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new i({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([y({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([y({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=i=e$1([i$3("esri.layers.support.OutStatistic")],e);var p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p$2;let i$1=p$2=class extends a{constructor(){super(...arguments),this.name=null;}clone(){return new p$2({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([y({type:String,json:{write:!0}})],i$1.prototype,"name",void 0),e$1([y({type:p$1,json:{write:!0}})],i$1.prototype,"outStatistic",void 0),i$1=p$2=e$1([i$3("esri.layers.support.AggregateField")],i$1);var c=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var c$1;let m=c$1=class extends a{constructor(e){super(e),this.type="cluster",this.clusterRadius=u$1("80px"),this.clusterMinSize=u$1("12px"),this.clusterMaxSize=u$1("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new c$1({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:s$1(this.labelingInfo),labelsVisible:this.labelsVisible,fields:s$1(this.fields),popupEnabled:this.popupEnabled,popupTemplate:s$1(this.popupTemplate)})}};e$1([y({type:["cluster"],readOnly:!0,json:{write:!0}})],m.prototype,"type",void 0),e$1([y({type:Number,cast:e=>"auto"===e?e:u$1(e),json:{write:!0}})],m.prototype,"clusterRadius",void 0),e$1([y({type:Number,cast:u$1,json:{write:!0}})],m.prototype,"clusterMinSize",void 0),e$1([y({type:Number,cast:u$1,json:{write:!0}})],m.prototype,"clusterMaxSize",void 0),e$1([y(a$1)],m.prototype,"popupEnabled",void 0),e$1([y({type:M,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],m.prototype,"popupTemplate",void 0),e$1([y({type:[g],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],m.prototype,"labelingInfo",void 0),e$1([y(l)],m.prototype,"labelsVisible",void 0),e$1([y({type:[c],json:{write:!0}})],m.prototype,"fields",void 0),m=c$1=e$1([i$3("esri.layers.support.FeatureReductionCluster")],m);var d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t$1;let p$3=t$1=class extends p{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e$1([y({type:["selection"]})],p$3.prototype,"type",void 0),p$3=t$1=e$1([i$3("esri.layers.support.FeatureReductionSelection")],p$3);var c$2=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s={key:"type",base:p,typeMap:{selection:c$2}};function u(e,t){const r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return c$2.fromJSON(r);case"cluster":return d.fromJSON(r)}return null}function c$3(t,r,o$1,n){const s=i$2(t,{},n);s&&o(o$1,s,r);}function i$2(e,r,o){return e?"selection"!==e.type?(o.messages&&o.messages.push(new s$2("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:o})),null):e.write(r,o):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,t,i){return r?r.map((r=>{const o=new g;if(o.read(r,i),o.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;o.labelExpression=o.labelExpression.replace(n,((n,r)=>`[${function(e,n){if(!n)return e;const r=e.toLowerCase();for(let e=0;e<n.length;e++){const t=n[e].name;if(t.toLowerCase()===r)return t}return e}(r,e)}]`));}return o})):null}

export { c$2 as a, c$3 as c, d, p, r, s, u };
