// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./ColorRamp"],function(a){return a.createSubclass({declaredClass:"esri.tasks.support.MultipartColorRamp",properties:{colorRamps:[],type:"multipart"},toJSON:function(){return{type:"multipart",colorRamps:this.colorRamps.map(function(a){return a.toJSON()})}}})});