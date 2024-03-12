/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../core/Collection.js";import s from"../support/actions/ActionBase.js";import o from"../support/actions/ActionButton.js";import t from"../support/actions/ActionToggle.js";import{l as a}from"./legacyIcon.js";const i=e.ofType({key:"type",defaultKeyValue:"button",base:s,typeMap:{button:o,toggle:t}}),n=new o({icon:"magnifying-glass-plus",id:"zoom-to-feature",title:"{messages.zoom}",className:a.zoomInMagnifyingGlass}),r=new o({icon:"trash",id:"remove-selected-feature",title:"{messages.remove}",className:a.trash}),l=new o({icon:"magnifying-glass-plus",id:"zoom-to-clustered-features",title:"{messages.zoom}",className:a.zoomInMagnifyingGlass}),m=new t({icon:"table",id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:a.table,value:!1});export{i as A,l as a,m as b,r,n as z};
