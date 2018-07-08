// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./ModelContentType"],function(d,e,c){return function(){function a(b){this.materials={};this.stage=b}a.prototype.getMaterial=function(b){return this.materials[b]};a.prototype.addMaterial=function(b,a){this.materials[b]=a;this.stage.add(c.MATERIAL,a)};a.prototype.dispose=function(){for(var a in this.materials)this.stage.remove(c.MATERIAL,this.materials[a].id);this.materials={}};return a}()});