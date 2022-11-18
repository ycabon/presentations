import { n6 as u$1, u as e, y, bk as w, jr as s, js as s$1, jt as a, z as n, n7 as l$1 } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct";}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(u$1(l$1)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0;}};e([y({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),e([y({type:w,json:{write:!0}})],l.prototype,"startPoint",void 0),e([y({type:w,json:{write:!0}})],l.prototype,"endPoint",void 0),e([y({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),e([y({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),e([y({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>s$1.normalize(a(o),0,!0)))],l.prototype,"orientation",void 0),l=e([n("esri.analysis.LengthDimension")],l);const u=l;

export { r, t, u };
