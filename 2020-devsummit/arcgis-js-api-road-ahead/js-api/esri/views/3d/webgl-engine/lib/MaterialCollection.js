// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function a(b){this.materials={};this.stage=b}a.prototype.getMaterial=function(b){return this.materials[b]};a.prototype.addMaterial=function(b,a){this.materials[b]=a;this.stage.add(3,a)};a.prototype.dispose=function(){for(var a in this.materials)this.stage.remove(3,this.materials[a].id);this.materials={}};return a}()});