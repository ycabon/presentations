// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["dijit/form/HorizontalRuleLabels","dijit/form/HorizontalSlider"],function(a,b){return b.createSubclass({declaredClass:"esri.widgets.HorizontalSlider",baseClass:"esri-horizontal-slider",buildRendering:function(){this.inherited(arguments);this.labels&&(new a({labels:this.labels})).placeAt(this.bottomDecoration)},labels:null,showButtons:!1})});