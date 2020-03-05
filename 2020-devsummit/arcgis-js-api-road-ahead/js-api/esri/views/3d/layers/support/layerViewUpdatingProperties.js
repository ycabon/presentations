// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.updatingProgressValue={value:.5,readOnly:!0};a.updatingProgress={dependsOn:["updating","updatingProgressValue"],readOnly:!0,value:.5,get:function(){return this.updating?this.updatingProgressValue:1}}});