// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class a{constructor(b,c){this._texture=b;this._cache=c;this.type="tile-texture";this._refCount=1}retain(){++this._refCount}release(){--this._refCount;0===this._refCount&&(this._cache?this._cache.put(`${this._texture.descriptor.width} ${this._texture.descriptor.pixelFormat}`,this):this.dispose())}dispose(){this._texture.dispose()}get texture(){return this._texture}generateMipmap(){this._texture.generateMipmap()}get descriptor(){return this._texture.descriptor}get usedMemory(){return this._texture.usedMemory}}
return a});