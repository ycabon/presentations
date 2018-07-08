// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./ModelContentType"],function(c){return function(d){var a={};this.getMaterial=function(b){return a[b]};this.addMaterial=function(b,e){a[b]=e;d.add(c.MATERIAL,e)};this.dispose=function(){for(var b in a)d.remove(c.MATERIAL,a[b].getId());a={}}}});