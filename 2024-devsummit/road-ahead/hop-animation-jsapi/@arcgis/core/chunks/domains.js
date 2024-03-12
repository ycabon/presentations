/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import r from"../layers/support/CodedValueDomain.js";import e from"../layers/support/Domain.js";import o from"../layers/support/InheritedDomain.js";import t from"../layers/support/RangeDomain.js";const a={key:"type",base:e,typeMap:{range:t,"coded-value":r,inherited:o}};function n(e){if(!e?.type)return null;switch(e.type){case"range":return t.fromJSON(e);case"codedValue":return r.fromJSON(e);case"inherited":return o.fromJSON(e)}return null}export{n as f,a as t};
