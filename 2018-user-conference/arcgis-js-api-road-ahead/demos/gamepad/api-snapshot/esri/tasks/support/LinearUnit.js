// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/kebabDictionary"],function(a,b){var c=b({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"});return a.createSubclass({declaredClass:"esri.tasks.support.LinearUnit",properties:{distance:{value:0,json:{write:!0}},units:{value:null,json:{read:c.fromJSON,write:function(a,b){b.units=c.toJSON(a)}}}}})});