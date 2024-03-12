/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{O as s}from"./ObservableBase.js";class o extends s{notify(){const s=this._observers;if(s&&s.length>0){const o=s.slice();for(const s of o)s.onInvalidated(),s.onCommitted()}}}export{o as S};
