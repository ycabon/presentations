// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../Graphic"],function(c,d){return c.createSubclass({declaredClass:"esri.tasks.support.IdentifyResult",properties:{displayFieldName:null,feature:{value:null,json:{read:{source:["attributes","geometry"],reader:function(a,b){a={};b.attributes&&(a.attributes=b.attributes);b.geometry&&(a.geometry=b.geometry);return d.fromJSON(a)}}}},layerId:null,layerName:null}})});