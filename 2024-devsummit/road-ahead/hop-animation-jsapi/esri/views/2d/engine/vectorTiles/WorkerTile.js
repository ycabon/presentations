// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../../core/promiseUtils","./Placement","./TileParser","../../tiling/enums"],function(k,l,m,e){class n{constructor(a,b,c,f){this.status=e.TileStatus.INITIALIZED;this.placementEngine=new l.PlacementEngine;this.tileKey=a;this.refKeys=b;this._workerTileHandler=c;this._styleRepository=f}release(){this.tileKey="";this.refKeys=null;this.status=e.TileStatus.INITIALIZED;this._workerTileHandler=null}async parse(a,b){const c=b?.signal;if(null!=c){const h=()=>{c.removeEventListener("abort",h);
this.status=e.TileStatus.INVALID};c.addEventListener("abort",h)}const f={bucketsWithData:[],emptyBuckets:null};try{var d=await this._parse(a,b)}catch(h){if(k.isAbortError(h))throw h;return{result:f,transferList:[]}}this.status=e.TileStatus.READY;b=f.bucketsWithData;a=[];for(var g of d)g.hasFeatures()?(d=g.serialize(),b.push(d)):a.push(g.layer.uid);g=[...b];d=null;0<a.length&&(d=Uint32Array.from(a),g.push(d.buffer));f.emptyBuckets=d;return{result:f,transferList:g}}setObsolete(){this.status=e.TileStatus.INVALID}getLayers(){return this._workerTileHandler.getLayers()}getWorkerTileHandler(){return this._workerTileHandler}async _parse(a,
b){const c=a.sourceName2DataAndRefKey;if(0===Object.keys(c).length)return[];this.status=e.TileStatus.MODIFIED;return(new m(c,this,b.client,a.sourceDataMaxLOD,this._styleRepository,a.styleLayerUIDs)).parse(b)}}return n});