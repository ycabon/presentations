/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import t from"../core/Accessor.js";import{a as o,r as e}from"./maybe.js";import{onAbort as s,eachAlways as n,throwIfAbortError as l}from"../core/promiseUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";function u(r,t,o){return n(r.map(((r,e)=>t.apply(o,[r,e]))))}async function c(r,t,o){return(await n(r.map(((r,e)=>t.apply(o,[r,e]))))).map((r=>r.value))}function p(r){return{ok:!0,value:r}}function h(r){return{ok:!1,error:r}}async function m(r){if(null==r)return{ok:!1,error:new Error("no promise provided")};try{return p(await r)}catch(r){return h(r)}}async function f(r){try{return p(await r)}catch(r){return l(r),h(r)}}function _(r){if(!0===r.ok)return r.value;throw r.error}function b(r,t){return new y(r,t)}let y=class extends t{get value(){return function(r){return null!=r&&!0===r.ok?r.value:null}(this._result)}get error(){return function(r){return null!=r&&!1===r.ok?r.error:null}(this._result)}get finished(){return null!=this._result}constructor(r,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=o(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:e}=this._abortController;this.promise=r(e),this.promise.then((r=>{this._result=p(r),this._cleanup()}),(r=>{this._result=h(r),this._cleanup()})),this._abortHandle=s(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=e(this._abortHandle),this._abortController=null}};r([a()],y.prototype,"value",null),r([a()],y.prototype,"error",null),r([a()],y.prototype,"finished",null),r([a()],y.prototype,"promise",void 0),r([a()],y.prototype,"_result",void 0),y=r([i("esri.core.asyncUtils.ReactiveTask")],y);export{f as a,_ as b,b as c,u as f,c as m,m as r};
