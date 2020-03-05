// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(g,b,h,k,d){Object.defineProperty(b,"__esModule",{value:!0});b.forEach=function(a,c,b){return d.eachAlways(a.map(function(a,f){return c.apply(b,[a,f])}))};b.map=function(a,b,e){return d.eachAlways(a.map(function(a,c){return b.apply(e,[a,c])})).then(function(a){return a.map(function(a){return a.value})})};b.result=function(a){return a.then(function(a){return{ok:!0,value:a}}).catch(function(a){return{ok:!1,
error:a}})};b.assertResult=function(a){if(!0===a.ok)return a.value;throw a.error;}});