// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary"],function(c,d){var e=d({preserveShape:"preserve-shape"});return c.createSubclass({declaredClass:"esri.tasks.support.LengthsParameters",properties:{calculationType:null,geodesic:null,lengthUnit:null,polylines:null},toJSON:function(){var b=this.polylines.map(function(a){return a.toJSON()}),a={};a.polylines=JSON.stringify(b);b=this.polylines[0].spatialReference;a.sr=b.wkid?b.wkid:JSON.stringify(b.toJSON());this.lengthUnit&&(a.lengthUnit=this.lengthUnit);
this.geodesic&&(a.geodesic=this.geodesic);this.calculationType&&(a.calculationType=e.toJSON(this.calculationType));return a}})});