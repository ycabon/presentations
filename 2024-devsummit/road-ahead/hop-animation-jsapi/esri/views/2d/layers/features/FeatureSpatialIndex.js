// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/rbush","../../../../geometry/support/aaBoundingBox"],function(c,f,g){class d{static fromReader(a){const e=[],b=a.copy();for(a=g.create();b.next();)b.getBounds(a)&&e.push(b.getIndex());a=f.rbush(9,h=>{b.setIndex(h);return{minX:b.getBoundsXMin(),minY:b.getBoundsYMin(),maxX:b.getBoundsXMax(),maxY:b.getBoundsYMax()}});a.load(e);return new d(a)}constructor(a){this._index=a}search(a){return this._index.search({minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]})}}c.FeatureSpatialIndex=
d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});