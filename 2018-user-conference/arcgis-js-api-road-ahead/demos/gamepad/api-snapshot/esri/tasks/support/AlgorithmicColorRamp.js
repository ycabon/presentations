// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../Color","./ColorRamp"],function(b,c){return c.createSubclass({declaredClass:"esri.tasks.support.AlgorithmicColorRamp",properties:{algorithm:null,fromColor:{value:null,type:b},toColor:{value:null,type:b},type:"algorithmic"},toJSON:function(){var a;switch(this.algorithm.toLowerCase()){case "cie-lab":a="esriCIELabAlgorithm";break;case "hsv":a="esriHSVAlgorithm";break;case "lab-lch":a="esriLabLChAlgorithm"}a={type:"algorithmic",algorithm:a};a.fromColor=b.toJSON(this.fromColor);a.toColor=
b.toJSON(this.toColor);return a}})});