// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../support/DictionaryValue"],function(d,e){class c{static async create(b,a){if("count"===a.statisticType)return b=new e.DictionaryValue(1),new c(a.name,a.alias,a.type,a.statisticType,b);b=await b.createComputedField({expression:a.onStatisticExpression?.expression,field:a.onStatisticField});return new c(a.name,a.alias,a.type,a.statisticType,b)}constructor(b,a,f,g,h){this.name=b;this.alias=a;this.type=f;this.statisticType=g;this.computed=h}}d.ComputedAggregateField=c;Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});