/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../Color.js";import{t}from"./screenUtils.js";import{I as o}from"./ensureType.js";import{t as e,o as s}from"./opacityUtils.js";const n={type:r,json:{type:[o],default:null,read:{source:["color","transparency"],reader:function(t,o){const s=null!=o.transparency?e(o.transparency):1,n=o.color;return n&&Array.isArray(n)?new r([n[0]||0,n[1]||0,n[2]||0,s]):null}},write:{target:{color:{type:[o]},transparency:{type:o}},writer:function(r,t){t.color=r.toJSON().slice(0,3);const o=s(r.a);0!==o&&(t.transparency=o)}}}},a={type:Number,cast:t,json:{write:!0}};export{n as c,a as s};
