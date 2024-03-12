/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
class t{constructor(){this._formatterCache=new Map,this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(t){return new Date(t)}increase(t){return new Date(t.getTime()+864e5)}formatToIsoDateString(t){const e=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return`${e}-${r.toString().padStart(2,"0")}-${n.toString().padStart(2,"0")}`}isoToTimeZone(t,e){const r=this._toDate(t),n=this._getFormatter(e).formatToParts(r),[a]=n.filter((({type:t})=>"timeZoneName"===t)).map((({value:t})=>t)),i=this._getTimeZoneOffsetInMins(a),o=r.getMinutes()-(r.getTimezoneOffset()-i);return r.setMinutes(o),r}same(t,e){return t.getTime()===e.getTime()}_toDate(t){return new Date(t)}_getFormatter(t){let e=this._formatterCache.get(t);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:t,...this._commonDateTimeFormatterOptions}),this._formatterCache.set(t,e)),e}_getTimeZoneOffsetInMins(t){const[e,...r]=t.slice(3),[n,a]=r.join("").split(":");return("+"===e?1:-1)*(60*Number(n)+Number(a||0))}}export{t as DateEngine};
