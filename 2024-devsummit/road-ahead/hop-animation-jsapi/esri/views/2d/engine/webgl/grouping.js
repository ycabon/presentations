// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/string"],function(b,f){function c(a,d){if("string"===typeof a)a=f.numericHash(a+`-seed(${d})`);else{let e=12;a^=d;do a=107*(a>>8^a)+e|0;while(0!==--e)}return(1+a/-2147483648)/2}b.getRandomValue=c;b.getStartGroup=function(a){return Math.floor(10*c(a,53290320))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});