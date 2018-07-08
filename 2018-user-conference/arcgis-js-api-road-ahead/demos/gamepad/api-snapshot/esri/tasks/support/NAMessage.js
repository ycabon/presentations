// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/kebabDictionary"],function(a,b){var c=b({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return a.createSubclass({declaredClass:"esri.tasks.support.NAMessage",properties:{description:{value:null,type:String,json:{write:!0}},type:{value:null,json:{read:c.fromJSON,write:function(a,b){b.type=c.toJSON(a)}}}}})});