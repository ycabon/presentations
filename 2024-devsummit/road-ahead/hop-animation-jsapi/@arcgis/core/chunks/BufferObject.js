/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as e,j as t,k as s}from"../core/lang.js";import{L as i}from"./Logger.js";import{c as r}from"./Texture.js";import{B as n,U as a,R as _,D as u}from"./enums.js";const f=()=>i.getLogger("esri.views.webgl.BufferObject");class o{static createIndex(e,t,s){return new o(e,n.ELEMENT_ARRAY_BUFFER,t,s)}static createVertex(e,t,s){return new o(e,n.ARRAY_BUFFER,t,s)}static createUniform(e,t,s){return new o(e,n.UNIFORM_BUFFER,t,s)}static createPixelPack(e,t=a.STREAM_READ,s){const i=new o(e,n.PIXEL_PACK_BUFFER,t);return s&&i.setSize(s),i}static createPixelUnpack(e,t=a.STREAM_DRAW,s){return new o(e,n.PIXEL_UNPACK_BUFFER,t,s)}static createTransformFeedback(e,t=a.STATIC_DRAW,s){const i=new o(e,n.TRANSFORM_FEEDBACK_BUFFER,t);return i.setSize(s),i}constructor(e,t,s,i){this._context=e,this.bufferType=t,this.usage=s,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(_.BufferObject,this),this._glName=this._context.gl.createBuffer(),r(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER?this._indexType===u.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER||this.bufferType===n.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(_.BufferObject,this),this._context=null):this._glName&&f().warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&f().error("Buffer size needs to be positive!"),this.bufferType===n.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case u.UNSIGNED_SHORT:e*=2;break;case u.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(s){if(!s)return;let i=s.byteLength;this.bufferType===n.ELEMENT_ARRAY_BUFFER&&(e(s)&&(i/=2,this._indexType=u.UNSIGNED_SHORT),t(s)&&(i/=4,this._indexType=u.UNSIGNED_INT)),this._setBufferData(i,s)}_setBufferData(e,t=null){this._size=e;const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),r(i),this._isVAOAware&&this._context.bindVAO(s)}setSubData(e,t,s,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.usedMemory)&&f().error("offset is out of range!"),s>=i&&f().error("end must be bigger than start!"),(t+(i-s))*e.BYTES_PER_ELEMENT>this.usedMemory&&f().error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:a}=this._context;a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,s,i-s),r(a),this._isVAOAware&&this._context.bindVAO(n)}getSubData(e,t=0,i,r){if(i<0||r<0)return void f().error("Problem getting subdata: offset and length were less than zero!");const a=s(e)?e.BYTES_PER_ELEMENT:1;if(a*((i??0)+(r??0))>e.byteLength)return void f().error("Problem getting subdata: offset and length exceeded destination size!");t+a*(r??0)>this.usedMemory&&f().warn("Potential problem getting subdata: requested data exceeds buffer size!");const _=this._context.gl;this.bufferType===n.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,n.TRANSFORM_FEEDBACK_BUFFER),_.getBufferSubData(n.TRANSFORM_FEEDBACK_BUFFER,t,e,i,r),this._context.unbindBuffer(n.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,n.COPY_READ_BUFFER),_.getBufferSubData(n.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(n.COPY_READ_BUFFER))}async getSubDataAsync(e,t=0,s,i){await this._context.clientWaitAsync(),this.getSubData(e,t,s,i)}}export{o as B};