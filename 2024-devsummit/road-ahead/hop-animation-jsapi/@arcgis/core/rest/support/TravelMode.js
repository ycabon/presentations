/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as i}from"../../chunks/enumeration.js";import{r as s}from"../../chunks/reader.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{w as p}from"../../chunks/writer.js";import{r as u,t as a,i as l,l as c,k as m,u as d,m as j}from"../../chunks/networkEnums.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/jsonMap.js";let h=class extends(r(e)){constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}readId(t,r){return r.id??r.itemId??null}readRestrictionAttributes(t,r){const{restrictionAttributeNames:e}=r;return null==e?null:e.map((t=>u.fromJSON(t)))}writeRestrictionAttributes(t,r,e){null!=t&&(r[e]=t.map((t=>u.toJSON(t))))}};t([o({type:[Object],json:{write:!0}})],h.prototype,"attributeParameterValues",void 0),t([o({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([i(a,{ignoreUnknown:!1})],h.prototype,"distanceAttributeName",void 0),t([o({type:String,json:{write:!0}})],h.prototype,"id",void 0),t([s("id",["id","itemId"])],h.prototype,"readId",null),t([i(l,{ignoreUnknown:!1})],h.prototype,"impedanceAttributeName",void 0),t([o({type:String,json:{write:!0}})],h.prototype,"name",void 0),t([o({type:[String],json:{write:!0}})],h.prototype,"restrictionAttributeNames",void 0),t([s("restrictionAttributeNames")],h.prototype,"readRestrictionAttributes",null),t([p("restrictionAttributeNames")],h.prototype,"writeRestrictionAttributes",null),t([o({type:Number,json:{write:{allowNull:!0}}})],h.prototype,"simplificationTolerance",void 0),t([i(c)],h.prototype,"simplificationToleranceUnits",void 0),t([i(m,{ignoreUnknown:!1})],h.prototype,"timeAttributeName",void 0),t([i(d)],h.prototype,"type",void 0),t([o({type:Boolean,json:{write:!0}})],h.prototype,"useHierarchy",void 0),t([i(j)],h.prototype,"uturnAtJunctions",void 0),h=t([n("esri.rest.support.TravelMode")],h);const y=h;export{y as default};
