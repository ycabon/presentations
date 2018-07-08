// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../Graphic"],function(d,c){return d.createSubclass({declaredClass:"esri.tasks.support.FindResult",properties:{displayFieldName:null,feature:{value:null,type:c,json:{read:{source:["attributes","geometry"],reader:function(a,b){a={};b.attributes&&(a.attributes=b.attributes);b.geometry&&(a.geometry=b.geometry);return c.fromJSON(a)}}}},foundFieldName:null,layerId:null,layerName:null,value:{value:null}}})});