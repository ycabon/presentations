/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t="calcite-mode-";function e(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replaceAll(/\s|'|"/g,"").startsWith("dark")}function s(){return`${t}${e()?"dark":"light"}`}function a(e){!function(e){Array.from(e.classList).forEach((s=>{s.startsWith(t)&&e.classList.remove(s)}))}(e),e.classList.add(s())}export{s as g,e as i,a as s};
