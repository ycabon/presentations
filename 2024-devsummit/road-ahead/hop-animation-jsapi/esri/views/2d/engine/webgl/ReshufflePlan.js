// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class d{constructor(a){this._indexOnly=a;this.vertex={count:0,operations:[]};this.index={count:0,operations:[]}}copyRecord(a){let c=0;this._indexOnly||(c=this.vertex.count-a.vertexStart,this.vertex.operations.push({srcFrom:a.vertexStart,dstFrom:this.vertex.count,count:a.vertexCount,mutate:0}),a.vertexStart=this.vertex.count,this.vertex.count+=a.vertexCount);this.index.operations.push({srcFrom:a.indexStart,dstFrom:this.index.count,count:a.indexCount,mutate:c});a.indexStart=
this.index.count;this.index.count+=a.indexCount}}b.ReshufflePlan=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});