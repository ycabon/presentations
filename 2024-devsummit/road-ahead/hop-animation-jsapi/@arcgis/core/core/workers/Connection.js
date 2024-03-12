/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as s}from"../../chunks/handleUtils.js";import{isPromiseLike as e,createAbortError as t,createResolver as i,throwIfAborted as n}from"../promiseUtils.js";import{Q as o}from"../../chunks/Queue.js";import r,{c as l}from"./RemoteClient.js";import"../Error.js";import"../lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/SimpleObservable.js";import"../../chunks/ObservableBase.js";import"../../kernel.js";import"../urlUtils.js";import"../JSONSupport.js";import"../../chunks/tslib.es6.js";import"../Accessor.js";import"../Handles.js";import"../accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/ensureType.js";import"../accessorSupport/decorators/property.js";import"../scheduling.js";const h=new FinalizationRegistry((s=>{s.close()}));function c(s,e){h.register(s,e,e)}class m{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new o}destroy(){this.close()}get closed(){return!this._clients?.length}open(s,t){return new Promise(((i,o)=>{let l=!0;const h=s=>{n(t.signal),l&&(l=!1,s())};this._clients.length=s.length,this._clientPromises.length=s.length,this._inUseClients.length=s.length;for(let n=0;n<s.length;++n){const l=s[n];e(l)?this._clientPromises[n]=l.then((s=>(this._clients[n]=new r(s,t,this._ongoingJobsQueue),h(i),this._clients[n])),(()=>(h(o),null))):(this._clients[n]=new r(l,t,this._ongoingJobsQueue),this._clientPromises[n]=Promise.resolve(this._clients[n]),h(i))}}))}broadcast(s,e,t){const i=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];i[n]=o.then((i=>i?.invoke(s,e,t)))}return i}close(){let s;for(;s=this._ongoingJobsQueue.pop();)s.resolver.reject(t(`Worker closing, aborting job calling '${s.methodName}'`));for(const s of this._clientPromises)s.then((s=>s?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,h.unregister(this)}invoke(s,e,t){return this.apply(s,[e],t)}apply(s,e,t){const n=i();this._ongoingJobsQueue.push({methodName:s,data:e,invokeOptions:t,resolver:n});for(let s=0;s<this._clientPromises.length;s++){const e=this._clients[s];e?e.jobAdded():this._clientPromises[s].then((s=>s?.jobAdded()))}return n.promise}createInvokeProxy(s){return l(this,s)}on(e,t){return Promise.all(this._clientPromises).then((()=>s(this._clients.map((s=>s.on(e,t))))))}openPorts(){return new Promise((s=>{const e=new Array(this._clientPromises.length);let t=e.length;for(let i=0;i<this._clientPromises.length;++i)this._clientPromises[i].then((n=>{n&&(e[i]=n.openPort()),0==--t&&s(e)}))}))}get test(){return{numClients:this._clients.length}}}export{m as default,c as r};
