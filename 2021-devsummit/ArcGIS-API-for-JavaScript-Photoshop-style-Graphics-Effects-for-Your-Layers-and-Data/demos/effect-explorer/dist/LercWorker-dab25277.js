import { U } from './index.js';
import { m } from './LercCodec-9d0c0e3e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{_decode(t){const o=m(t.buffer,t.options);return U({result:o,transferList:[o.pixelData.buffer]})}}function o(){return new t}

export default o;
