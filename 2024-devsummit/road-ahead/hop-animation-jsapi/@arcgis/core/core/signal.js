/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{equalsShallow as s}from"./lang.js";import{t}from"../chunks/tracking.js";import{S as e}from"../chunks/SimpleObservable.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";class i{constructor(s,t){this._observable=new e,this._value=s,this._equalityFunction=t}get value(){return t(this._observable),this._value}set value(s){this._equalityFunction(s,this._value)||(this._value=s,this._observable.notify())}mutate(s){s(this._value),this._observable.notify()}}function r(t,e=s){return new i(t,e)}export{r as signal};
