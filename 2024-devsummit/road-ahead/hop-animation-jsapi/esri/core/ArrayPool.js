// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./ObjectPool"],function(d){function e(a){a.length=0}class c{constructor(a=50,f=50){this._pool=new d(Array,void 0,e,f,a)}acquire(){return this._pool.acquire()}release(a){this._pool.release(a)}prune(){this._pool.prune(0)}static acquire(){return b.acquire()}static release(a){return b.release(a)}static prune(){b.prune()}}const b=new c(100);return c});