// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.updatingPercentageValue={value:100,readOnly:!0};a.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}});