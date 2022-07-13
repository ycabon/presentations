import { s } from './_virtual_index-fc1e0009.js';
import { i } from './alignmentUtils-d4b065e2.js';
import { S as S$1, b as E$1, k as A$1, o as _$1 } from './Utils-073d76fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(t,e,s){const n=A$1.SIZE_FIELD_STOPS|A$1.SIZE_MINMAX_VALUE|A$1.SIZE_SCALE_STOPS|A$1.SIZE_UNIT_VALUE,o=(e&(_$1.FIELD_TARGETS_OUTLINE|_$1.MINMAX_TARGETS_OUTLINE|_$1.SCALE_TARGETS_OUTLINE|_$1.UNIT_TARGETS_OUTLINE))>>>4;return t===E$1.LINE&&s.isOutline||t===E$1.FILL&&_(s.symbologyType)?n&o:n&~o}const o=0,v=8,l=7,h=8,S=11,u=11,p=12,c=13,y=14,V=15,d=16,g=17,T=18,m=19,z=20,E=21,L=26,M=Object.keys(S$1).filter((t=>"number"==typeof S$1[t])).reduce(((t,e)=>({...t,[e]:S$1[e]})),{});function I(t){return t===S$1.SIMPLE||t===S$1.OUTLINE_FILL_SIMPLE}function _(t){return t===S$1.OUTLINE_FILL||t===S$1.OUTLINE_FILL_SIMPLE}function b(t){return I(t.symbologyType)}function O(t){return _(t.symbologyType)}function f(t,e){switch(t){case E$1.FILL:return w.from(e);case E$1.LINE:return C.from(e);case E$1.MARKER:return N.from(e);case E$1.TEXT:return P.from(e);case E$1.LABEL:return Z.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function A(t){switch(U.load(t).geometryType){case E$1.MARKER:return new N(t);case E$1.FILL:return new w(t);case E$1.LINE:return new C(t);case E$1.TEXT:return new P(t);case E$1.LABEL:return new Z(t)}}class U{constructor(t){this._data=0,this._data=t;}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t;}get data(){return this._data}get geometryType(){return this.bits(h,S)}set geometryType(t){this.setBits(t,h,S);}get mapAligned(){return !!this.bit(z)}set mapAligned(t){this.setBit(z,t);}get sdf(){return !!this.bit(u)}set sdf(t){this.setBit(u,t);}get pattern(){return !!this.bit(p)}set pattern(t){this.setBit(p,t);}get textureBinding(){return this.bits(o,v)}set textureBinding(t){this.setBits(t,o,v);}get symbologyType(){return this.bits(E,L)}set symbologyType(t){this.setBits(t,E,L);}get geometryTypeString(){switch(this.geometryType){case E$1.FILL:return "fill";case E$1.MARKER:return "marker";case E$1.LINE:return "line";case E$1.TEXT:return "text";case E$1.LABEL:return "label";default:throw new s(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const s=1<<t;e?this._data|=s:this._data&=~s;}bit(t){return (this._data&1<<t)>>t}setBits(t,e,s){for(let i=e,a=0;i<s;i++,a++)this.setBit(i,0!=(t&1<<a));}bits(t,e){let s=0;for(let i=t,a=0;i<e;i++,a++)s|=this.bit(i)<<a;return s}hasVV(){return !1}setVV(t,e){}getVariation(){return {mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:S$1[this.symbologyType],options:M,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(l&this.textureBinding)}}U.shared=new U(0);const F=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(d)}set vvSizeMinMaxValue(t){this.setBit(d,t);}get vvSizeScaleStops(){return 0!==this.bit(g)}set vvSizeScaleStops(t){this.setBit(g,t);}get vvSizeFieldStops(){return 0!==this.bit(T)}set vvSizeFieldStops(t){this.setBit(T,t);}get vvSizeUnitValue(){return 0!==this.bit(m)}set vvSizeUnitValue(t){this.setBit(m,t);}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const s=n(this.geometryType,t,e)&t;this.vvSizeMinMaxValue=!!(s&A$1.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&A$1.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&A$1.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&A$1.SIZE_SCALE_STOPS);}},x=t=>class extends t{get vvRotation(){return 0!==this.bit(V)}set vvRotation(t){this.setBit(V,t);}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e.isOutline&&!!(t&A$1.ROTATION);}},B=t=>class extends t{get vvColor(){return 0!==this.bit(c)}set vvColor(t){this.setBit(c,t);}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e.isOutline&&!!(t&A$1.COLOR);}},R=t=>class extends t{get vvOpacity(){return 0!==this.bit(y)}set vvOpacity(t){this.setBit(y,t);}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e.isOutline&&!!(t&A$1.OPACITY);}};class w extends(B(R(F(U)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:a}=t,r=this.load(0);return r.geometryType=E$1.FILL,r.symbologyType=e,e!==S$1.DOT_DENSITY&&r.setVV(a,t),r.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}w.shared=new w(0);class N extends(B(R(x(F(U))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const{symbologyType:e,vvFlags:a}=t,r=this.load(0);return r.geometryType=E$1.MARKER,r.symbologyType=e,e!==S$1.HEATMAP&&r.setVV(a,t),r.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}N.shared=new N(0);class C extends(B(R(F(U)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.LINE,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}C.shared=new C(0);class P extends(B(R(x(F(U))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=E$1.TEXT,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data}getVariation(){return {...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}P.shared=new P(0);class Z extends(F(U)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const s=this.load(0);return s.geometryType=E$1.LABEL,s.symbologyType=t.symbologyType,s.setVV(t.vvFlags,t),s.mapAligned=i(t.placement),s.data}getVariation(){return {...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}Z.shared=new Z(0);

export { A, C, N, O, P, U, Z, _, b, f, w };
