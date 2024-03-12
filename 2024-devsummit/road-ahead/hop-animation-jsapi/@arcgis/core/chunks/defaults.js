/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import s from"../symbols/SimpleFillSymbol.js";import o from"../symbols/SimpleLineSymbol.js";import r from"../symbols/SimpleMarkerSymbol.js";import m from"../symbols/TextSymbol.js";import{d as e,a as l,b as a,c as t,e as n,f as i,g as f}from"./defaultsJSON.js";const p=r.fromJSON(e),S=o.fromJSON(l),c=s.fromJSON(a),u=m.fromJSON(t);function y(s){if(null==s)return null;switch(s.type){case"mesh":return null;case"point":case"multipoint":return p;case"polyline":return S;case"polygon":case"extent":return c}return null}const b=r.fromJSON(n),J=o.fromJSON(i),N=s.fromJSON(f);export{S as a,p as b,u as c,c as d,J as e,N as f,y as g,b as h};
