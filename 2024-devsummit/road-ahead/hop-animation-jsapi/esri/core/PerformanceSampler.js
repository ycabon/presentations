// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class c{constructor(a,b=30){this.name=a;this._counter=0;this._samples=Array(b)}record(a){null!=a&&(this._samples[++this._counter%this._samples.length]=a)}get median(){return this._samples.slice().sort((a,b)=>a-b)[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce((a,b)=>a+b,0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}}return c});