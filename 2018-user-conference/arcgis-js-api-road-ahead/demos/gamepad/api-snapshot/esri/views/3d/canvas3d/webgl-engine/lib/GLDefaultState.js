// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){return function(a){this.cullFace=!1;this.blendFuncSrc=a.SRC_ALPHA;this.blendFuncDst=a.ONE_MINUS_SRC_ALPHA;this.apply=function(){this.cullFace?a.enable(a.CULL_FACE):a.disable(a.CULL_FACE);a.blendFunc(this.blendFuncSrc,this.blendFuncDst)}}});