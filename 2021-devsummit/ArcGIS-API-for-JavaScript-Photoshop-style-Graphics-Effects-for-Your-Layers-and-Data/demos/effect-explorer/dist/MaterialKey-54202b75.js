import { h as s } from './index.js';
import { A, E as E$1, c as _ } from './Utils-ea321f1e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":return 1;default:return 0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,s=!1){const r=A.SIZE_FIELD_STOPS|A.SIZE_MINMAX_VALUE|A.SIZE_SCALE_STOPS|A.SIZE_UNIT_VALUE,a=(t&(_.FIELD_TARGETS_OUTLINE|_.MINMAX_TARGETS_OUTLINE|_.SCALE_TARGETS_OUTLINE|_.UNIT_TARGETS_OUTLINE))>>>4;return s?r&a:r&~a}function S(t,e,i,r,a){switch(t){case E$1.FILL:return z.from(e,r);case E$1.LINE:return y.from(e,i);case E$1.MARKER:return T.from(e);case E$1.TEXT:return E.from(e);case E$1.LABEL:return m.from(e,a);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function l(t){switch(c.load(t).geometryType){case E$1.MARKER:return new T(t);case E$1.FILL:return new z(t);case E$1.LINE:return new y(t);case E$1.TEXT:return new E(t);case E$1.LABEL:return new m(t)}}class c{constructor(t){this._data=0,this._data=t;}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t;}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11);}get mapAligned(){return !!this.bit(20)}set mapAligned(t){this.setBit(20,t);}get sdf(){return !!this.bit(11)}set sdf(t){this.setBit(11,t);}get pattern(){return !!this.bit(12)}set pattern(t){this.setBit(12,t);}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8);}get geometryTypeString(){switch(this.geometryType){case E$1.FILL:return "fill";case E$1.MARKER:return "marker";case E$1.LINE:return "line";case E$1.TEXT:return "text";case E$1.LABEL:return "label";default:throw new s(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i;}bit(t){return (this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,r=0;s<i;s++,r++)this.setBit(s,0!=(t&1<<r));}bits(t,e){let i=0;for(let s=t,r=0;s<e;s++,r++)i|=this.bit(s)<<r;return i}hasVV(){return !1}setVV(t,e){}getVariation(){return {mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}c.shared=new c(0);const d=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t);}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t);}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t);}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t);}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=a(t,i)&t;this.vvSizeMinMaxValue=!!(s&A.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&A.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&A.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&A.SIZE_SCALE_STOPS);}},V=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t);}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i&&!!(t&A.ROTATION);}},p=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t);}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i&&!!(t&A.COLOR);}},g=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t);}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i&&!!(t&A.OPACITY);}};class z extends(p(g(c))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=E$1.FILL,e?i.dotDensity=!0:i.setVV(t,!1),i.data}getVariation(){return {...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return !!this.bit(15)}set dotDensity(t){this.setBit(15,t);}}z.shared=new z(0);class T extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.MARKER,e.setVV(t,!1),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}T.shared=new T(0);class y extends(p(g(d(c)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=E$1.LINE,i.setVV(t,e),i.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class E extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=E$1.TEXT,e.setVV(t,!1),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}E.shared=new E(0);class m extends(d(c)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e$1){const i=this.load(0);return i.geometryType=E$1.LABEL,i.setVV(t,!1),i.mapAligned=!!e(e$1),i.data}getVariation(){return {...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);

export { E, S, T, c, e, l, m, y, z };
