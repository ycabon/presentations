// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../core/has","./utils","../../../../../../webgl/enums"],function(m,t,r,k){function n(b){switch(b){case k.DataType.BYTE:case k.DataType.UNSIGNED_BYTE:return 1;case k.DataType.SHORT:case k.DataType.UNSIGNED_SHORT:return 2;case k.DataType.FLOAT:case k.DataType.INT:case k.DataType.UNSIGNED_INT:return 4}}function p(b){const a=[],e=[],f=[];for(const d of b)switch(b=n(d.type)*d.count,b%2||b%4||4){case 4:a.push(d);continue;case 2:e.push(d);continue;case 1:f.push(d);continue;
default:throw Error("Found unexpected dataType byte count");}a.push(...e);a.push(...f);return a}class q{static fromVertexSpec({attributes:b},a){let e,f,d;var g=[];for(var c in b){const l=b[c];!1!==a?.[c]&&("position"===l.pack?e={...l,name:c,offset:0}:"id"===l.pack?f={...l,name:c,offset:4}:"bitset"===c?d={...l,name:c,offset:7}:g.push({...l,name:c}))}c=p(g);b=[];a=8;g=1;for(var h of c)b.push({...h,offset:a}),a+=n(h.type)*h.count,h.packAlternating&&(g=Math.max(h.packAlternating.count,g));h=Uint32Array.BYTES_PER_ELEMENT;
c=a%h;return new q(e,f,d,b,a+(c?h-c:0),g)}constructor(b,a,e,f,d,g){this.position=b;this.id=a;this.bitset=e;this.standardAttributes=f;this.stride=d;this.packVertexCount=g;f.push(e);this._attributes=[b,a,e,...f]}get attributeLayout(){if(!this._attributeLayout){const b=r.vertexLayoutHash(this._attributes);this._attributeLayout={attributes:this._attributes.map(a=>({name:a.name,count:a.count,offset:a.offset,type:a.type,packPrecisionFactor:a.packPrecisionFactor,normalized:a.normalized??!1})),hash:b,stride:this.stride}}return this._attributeLayout}}
m.AlignedVertexSpec=q;m.sortByAlignment=p;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});