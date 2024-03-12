// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./DisplayRecord","./util/serializationUtils"],function(d,e){class c{constructor(a,b){this.id=a;this.sortKey=b;this.records=[]}serialize(a){a.push(this.id);a.push(this.sortKey);e.serializeList(a,this.records);return a}static deserialize(a){var b=a.readInt32();const f=a.readInt32();b=new c(b,f);b.records=e.deserializeList(a,d)??[];return b}}c.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+d.byteSizeHint;return c});