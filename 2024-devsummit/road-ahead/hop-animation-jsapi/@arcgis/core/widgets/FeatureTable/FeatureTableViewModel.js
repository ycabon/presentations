/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Graphic.js";import"../../intl.js";import i from"../../core/Collection.js";import s from"../../core/Handles.js";import{o as r,debounce as o,ignoreAbortErrors as n}from"../../core/promiseUtils.js";import{watch as a,on as l}from"../../core/reactiveUtils.js";import{property as d}from"../../core/accessorSupport/decorators/property.js";import{i as h,e as c,clone as u,d as p}from"../../core/lang.js";import{L as _}from"../../chunks/Logger.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{getLowerCaseDefaultHiddenFields as g}from"../../layers/support/fieldUtils.js";import{g as f,s as y}from"../../chunks/timeZoneUtils.js";import{h as b}from"../../chunks/layerViewUtils.js";import v from"./Grid/Column.js";import C from"./FieldColumn.js";import{b as w}from"../../chunks/maybe.js";import{cast as A}from"../../core/accessorSupport/decorators/cast.js";import x from"../Widget.js";import E from"../../core/Accessor.js";import{g as S}from"../../chunks/globalCss.js";import"../../chunks/widgetUtils.js";import{m as I}from"../../chunks/messageBundle.js";import{t as P}from"../../chunks/jsxFactory.js";import T from"./Grid/GroupColumn.js";import z from"../../core/Error.js";import{g as O}from"../../chunks/layerUtils2.js";import k from"../../rest/support/AttachmentQuery.js";import{o as R}from"../../chunks/locale.js";import{c as F}from"../../chunks/date.js";import{f as N}from"../../chunks/messages.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/datetime.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/sql.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"./Grid/support/ButtonMenu.js";import"./Grid/support/ButtonMenuViewModel.js";import"./Grid/support/ButtonMenuItem.js";import"../../chunks/domUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/legacyIcon.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../chunks/editableLayers.js";import"../../chunks/infoFor3D.js";import"../FeatureForm/FieldInput.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/featureUtils.js";import"../FeatureForm/EditableInput.js";import"../../chunks/featureFormUtils.js";import"../../chunks/compilerUtils.js";import"../FeatureForm/InputBase.js";import"./Grid/EditorColumn.js";import"../../chunks/uriUtils.js";import"../support/DatePicker.js";import"../support/DatePickerViewModel.js";import"../support/DateTimeElementViewModel.js";import"../../chunks/Popover.js";import"../../chunks/accessibleHandler.js";import"../support/TimePicker.js";import"../support/TimePickerViewModel.js";let D=class extends v{constructor(e){super(e),this.header="",this.path="EsriFeatureTableAttachmentsColumn",this.renderFunction=({root:e,rowData:t})=>{const i=this._countFromItem(t?.item).toString();e.innerHTML=`<div class="esri-feature-table__column--attachments">${i}</div>`},this.sortable=!1,this.textAlign="center"}_countFromItem(e){return e?.attachments?.length||0}};e([d({constructOnly:!0})],D.prototype,"header",void 0),e([d({readOnly:!0})],D.prototype,"path",void 0),e([d()],D.prototype,"renderFunction",void 0),e([d({readOnly:!0})],D.prototype,"sortable",void 0),e([d({readOnly:!0})],D.prototype,"textAlign",void 0),D=e([m("esri.widgets.FeatureTable.AttachmentsColumn")],D);const L=D;function M(e){const t=customElements.get(e.is);if(t){const i=t.version;i&&e.version&&i===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}else Object.defineProperty(e,"version",{get:()=>"24.3.4"}),customElements.define(e.is,e)}class j extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}M(j);const $=globalThis,H=$.ShadowRoot&&(void 0===$.ShadyCSS||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),V=new WeakMap;let U=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(H&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=V.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&V.set(t,e))}return e}toString(){return this.cssText}};const G=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new U(i,e,B)},W=H?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new U("string"==typeof e?e:e+"",void 0,B))(t)})(e):e,{is:q,defineProperty:Y,getOwnPropertyDescriptor:Z,getOwnPropertyNames:K,getOwnPropertySymbols:Q,getPrototypeOf:J}=Object,X=globalThis,ee=X.trustedTypes,te=ee?ee.emptyScript:"",ie=X.reactiveElementPolyfillSupport,se=(e,t)=>e,re={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},oe=(e,t)=>!q(e,t),ne={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;class ae extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Y(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=Z(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){const o=s?.call(this);r.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(se("elementProperties")))return;const e=J(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se("properties"))){const e=this.properties,t=[...K(e),...Q(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(W(e))}else void 0!==e&&t.push(W(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(H)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),s=$.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:re).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:re;this._$Em=s,this[s]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??oe)(this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$ET??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$Ej()}catch(t){throw e=!1,this._$Ej(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&=this._$ET.forEach((e=>this._$EO(e,this[e]))),this._$Ej()}updated(e){}firstUpdated(e){}}ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},ae[se("elementProperties")]=new Map,ae[se("finalized")]=new Map,ie?.({ReactiveElement:ae}),(X.reactiveElementVersions??=[]).push("2.0.3");const le=globalThis,de=le.trustedTypes,he=de?de.createPolicy("lit-html",{createHTML:e=>e}):void 0,ce="$lit$",ue=`lit$${(Math.random()+"").slice(9)}$`,pe="?"+ue,_e=`<${pe}>`,me=document,ge=()=>me.createComment(""),fe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ye=Array.isArray,be="[ \t\n\f\r]",ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,we=/>/g,Ae=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,Ee=/"/g,Se=/^(?:script|style|textarea|title)$/i,Ie=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),Te=new WeakMap,ze=me.createTreeWalker(me,129);function Oe(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==he?he.createHTML(t):t}const ke=(e,t)=>{const i=e.length-1,s=[];let r,o=2===t?"<svg>":"",n=ve;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===ve?"!--"===l[1]?n=Ce:void 0!==l[1]?n=we:void 0!==l[2]?(Se.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=Ae):void 0!==l[3]&&(n=Ae):n===Ae?">"===l[0]?(n=r??ve,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?Ae:'"'===l[3]?Ee:xe):n===Ee||n===xe?n=Ae:n===Ce||n===we?n=ve:(n=Ae,r=void 0);const c=n===Ae&&e[t+1].startsWith("/>")?" ":"";o+=n===ve?i+_e:d>=0?(s.push(a),i.slice(0,d)+ce+i.slice(d)+ue+c):i+ue+(-2===d?t:c)}return[Oe(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class Re{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const n=e.length-1,a=this.parts,[l,d]=ke(e,t);if(this.el=Re.createElement(l,i),ze.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=ze.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(ce)){const t=d[o++],i=s.getAttribute(e).split(ue),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?Me:"?"===n[1]?je:"@"===n[1]?$e:Le}),s.removeAttribute(e)}else e.startsWith(ue)&&(a.push({type:6,index:r}),s.removeAttribute(e));if(Se.test(s.tagName)){const e=s.textContent.split(ue),t=e.length-1;if(t>0){s.textContent=de?de.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],ge()),ze.nextNode(),a.push({type:2,index:++r});s.append(e[t],ge())}}}else if(8===s.nodeType)if(s.data===pe)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(ue,e+1));)a.push({type:7,index:r}),e+=ue.length-1}r++}}static createElement(e,t){const i=me.createElement("template");return i.innerHTML=e,i}}function Fe(e,t,i=e,s){if(t===Ie)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=fe(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=Fe(e,r._$AS(e,t.values),r,s)),t}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??me).importNode(t,!0);ze.currentNode=s;let r=ze.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new De(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new He(r,this,e)),this._$AV.push(t),a=i[++n]}o!==a?.index&&(r=ze.nextNode(),o++)}return ze.currentNode=me,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class De{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fe(this,e,t),fe(e)?e===Pe||null==e||""===e?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==Ie&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>ye(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Pe&&fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(me.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Re.createElement(Oe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Ne(s,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=Te.get(e.strings);return void 0===t&&Te.set(e.strings,t=new Re(e)),t}T(e){ye(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new De(this.k(ge()),this.k(ge()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Le{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(void 0===r)e=Fe(this,e,t,0),o=!fe(e)||e!==this._$AH&&e!==Ie,o&&(this._$AH=e);else{const s=e;let n,a;for(e=r[0],n=0;n<r.length-1;n++)a=Fe(this,s[i+n],t,n),a===Ie&&(a=this._$AH[n]),o||=!fe(a)||a!==this._$AH[n],a===Pe?e=Pe:e!==Pe&&(e+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.O(e)}O(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends Le{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Pe?void 0:e}}class je extends Le{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}}class $e extends Le{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=Fe(this,e,t,0)??Pe)===Ie)return;const i=this._$AH,s=e===Pe&&i!==Pe||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Pe&&(i===Pe||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Fe(this,e)}}const Be=le.litHtmlPolyfillSupport;Be?.(Re,De),(le.litHtmlVersions??=[]).push("3.1.1");class Ve extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new De(t.insertBefore(ge(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}}Ve._$litElement$=!0,Ve.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Ve});const Ue=globalThis.litElementPolyfillSupport;Ue?.({LitElement:Ve}),(globalThis.litElementVersions??=[]).push("4.0.3");const Ge=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._set_theme(i)}},We=[];function qe(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Ye(e,t,i={}){var s;e&&(s=e,qe(customElements.get(s))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),t=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof U||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,i):We.push({themeFor:e,styles:t,include:i.include,moduleId:i.moduleId})}function Ze(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():We}function Ke(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Qe(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const i=Ze().find((t=>t.moduleId===e));i?t.push(...Qe(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function Je(e){const t=`${e}-default-theme`,i=Ze().filter((i=>i.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t)))}(i.themeFor,e))).map((e=>({...e,styles:[...Qe(e),...e.styles],includePriority:Ke(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return i.length>0?i:Ze().filter((e=>e.moduleId===t))}const Xe=e=>class extends(Ge(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!qe(this)&&function(e,t){const i=document.createElement("style");i.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(i)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...Je(this.is)];const i=this.__themes.flatMap((e=>e.styles));return i.filter(((e,t)=>t===i.lastIndexOf(e)))}},et=(e,...t)=>{((e,...t)=>{const i=document.createElement("style");i.id=e,i.textContent=t.map((e=>e.toString())).join("\n").replace(":host","html"),document.head.insertAdjacentElement("afterbegin",i)})(`lumo-${e}`,t)};et("color-props",G`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`),Ye("",G`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`,{moduleId:"lumo-color"}),et("font-icons",G`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`),et("sizing-props",G`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`),et("spacing-props",G`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`),G`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`,et("style-props",G`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`);const tt=G`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;Ye("",G`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"}),et("typography-props",tt),Ye("vaadin-checkbox",G`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"}),Ye("vaadin-grid",G`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"}),window.JSCompiler_renameProperty=function(e,t){return e};let it,st,rt=/(url\()([^)]*)(\))/g,ot=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function nt(e,t){if(e&&ot.test(e))return e;if("//"===e)return e;if(void 0===it){it=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",it="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),it)try{return new URL(e,t).href}catch(t){return e}return st||(st=document.implementation.createHTMLDocument("temp"),st.base=st.createElement("base"),st.head.appendChild(st.base),st.anchor=st.createElement("a"),st.body.appendChild(st.anchor)),st.base.href=t,st.anchor.href=e,st.anchor.href||e}function at(e,t){return e.replace(rt,(function(e,i,s,r){return i+"'"+nt(s.replace(/["']/g,""),t)+"'"+r}))}function lt(e){return e.substring(0,e.lastIndexOf("/")+1)}const dt=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const ht=dt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let ct=window.Polymer&&window.Polymer.rootPath||lt(document.baseURI||window.location.href),ut=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let pt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,_t=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,mt=window.Polymer&&window.Polymer.legacyOptimizations||!1,gt=window.Polymer&&window.Polymer.legacyWarnings||!1,ft=window.Polymer&&window.Polymer.syncInitialRender||!1,yt=window.Polymer&&window.Polymer.legacyUndefined||!1,bt=window.Polymer&&window.Polymer.orderedComputed||!1,vt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Ct=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let wt=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,At=0;const xt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=At++;return function(s){let r=s.__mixinSet;if(r&&r[i])return s;let o=t,n=o.get(s);if(!n){n=e(s),o.set(s,n);let t=Object.create(n.__mixinSet||r||null);t[i]=!0,n.__mixinSet=t}return n}};let Et={},St={};function It(e,t){Et[e]=St[e.toLowerCase()]=t}function Pt(e){return Et[e]||St[e.toLowerCase()]}class Tt extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=Pt(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,s){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=nt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=lt(t)}return this.__assetpath}register(e){if(e=e||this.id){if(pt&&void 0!==Pt(e))throw It(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,It(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Tt.prototype.modules=Et,customElements.define("dom-module",Tt);const zt="link[rel=import][type~=css]",Ot="include",kt="shady-unscoped";function Rt(e){return Tt.import(e)}function Ft(e){const t=at((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function Nt(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...Dt(t[e]));return i}function Dt(e){const t=Rt(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...Mt(t));const i=t.querySelector("template");i&&e.push(...Lt(i,t.assetpath)),t._styles=e}return t._styles}function Lt(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let r=s[e],o=r.getAttribute(Ot);o&&i.push(...Nt(o).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=at(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function Mt(e){const t=[],i=e.querySelectorAll(zt);for(let e=0;e<i.length;e++){let s=i[e];if(s.import){const e=s.import,i=s.hasAttribute(kt);if(i&&!e._unscopedStyle){const t=Ft(e);t.setAttribute(kt,""),e._unscopedStyle=t}else e._style||(e._style=Ft(e));t.push(i?e._unscopedStyle:e._style)}}return t}const jt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function $t(e){return e.indexOf(".")>=0}function Ht(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Bt(e,t){return 0===t.indexOf(e+".")}function Vt(e,t,i){return t+i.slice(e.length)}function Ut(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e])}return t.join(".")}return e}function Gt(e){return Array.isArray(e)?Ut(e).split("."):e.toString().split(".")}function Wt(e,t,i){let s=e,r=Gt(t);for(let e=0;e<r.length;e++){if(!s)return;s=s[r[e]]}return i&&(i.path=r.join(".")),s}function qt(e,t,i){let s=e,r=Gt(t),o=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++)if(s=s[r[e]],!s)return;s[o]=i}else s[t]=i;return r.join(".")}const Yt={},Zt=/-[a-z]/g,Kt=/([A-Z])/g;function Qt(e){return Yt[e]||(Yt[e]=e.indexOf("-")<0?e:e.replace(Zt,(e=>e[1].toUpperCase())))}function Jt(e){return Yt[e]||(Yt[e]=e.replace(Kt,"-$1").toLowerCase())}let Xt=0,ei=0,ti=[],ii=0,si=!1,ri=document.createTextNode("");new window.MutationObserver((function(){si=!1;const e=ti.length;for(let t=0;t<e;t++){let e=ti[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}ti.splice(0,e),ei+=e})).observe(ri,{characterData:!0});const oi={run:e=>(si||(si=!0,ri.textContent=ii++),ti.push(e),Xt++),cancel(e){const t=e-ei;if(t>=0){if(!ti[t])throw new Error("invalid async handle: "+e);ti[t]=null}}},ni=xt((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let s=this.__data[e],r=this._shouldPropertyChange(e,t,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,oi.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,s){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,s)}_attributeToProperty(e,t,i){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const s=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=jt(e)),void 0===s?e.removeAttribute(i):e.setAttribute(i,""===s&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),ai={};let li=HTMLElement.prototype;for(;li;){let e=Object.getOwnPropertyNames(li);for(let t=0;t<e.length;t++)ai[e[t]]=!0;li=Object.getPrototypeOf(li)}const di=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,hi=xt((e=>{const t=ni(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Qt(e[t]))}static attributeNameForProperty(e){return Jt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(di(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!ai[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),ci={"dom-if":!0,"dom-repeat":!0};let ui=!1,pi=!1;const _i=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,i,s)=>{const r=i.getAttribute(s);e&&s.startsWith("on-")?t.setAttribute(s,e.createScript(r,s)):t.setAttribute(s,r)}})();function mi(e){let t=e.getAttribute("is");if(t&&ci[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:t}=i.attributes[0];_i(e,i,t),i.removeAttribute(t)}}return e}function gi(e,t){let i=t.parentInfo&&gi(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,s=0;e;e=e.nextSibling)if(t.parentIndex===s++)return e}function fi(e,t,i,s){s.id&&(t[s.id]=i)}function yi(e,t,i){if(i.events&&i.events.length)for(let s,r=0,o=i.events;r<o.length&&(s=o[r]);r++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function bi(e,t,i,s){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=s)}const vi=xt((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let s=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,t,i)||s,function(e){(function(){if(!ui){ui=!0;const e=document.createElement("textarea");e.placeholder="a",pi=e.placeholder===e.textContent}return pi})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,t,i)||s),s||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let s,r=e.firstChild,o=0;r;r=s){if("template"==r.localName&&(r=mi(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,s=i.nextSibling,e.removeChild(i),i=s;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let n={parentIndex:o,parentInfo:i};this._parseTemplateNode(r,t,n)&&(n.infoIndex=t.nodeInfoList.push(n)-1),r.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,i){let s=e,r=this._parseTemplate(s,t);return(r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let s=!1,r=Array.from(e.attributes);for(let o,n=r.length-1;o=r[n];n--)s=this._parseTemplateNodeAttribute(e,t,i,o.name,o.value)||s;return s}static _parseTemplateNodeAttribute(e,t,i,s,r){return"on-"===s.slice(0,3)?(e.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,s=t.content||e.content,r=document.importNode(s,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=new Array(i.length);r.$={};for(let e,s=0,n=i.length;s<n&&(e=i[s]);s++){let i=o[s]=gi(r,e);fi(0,r.$,i,e),bi(0,i,e,t),yi(this,i,e)}return r}_addMethodEventListenerToNode(e,t,i,s){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(s=s||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));let Ci=0;const wi=[],Ai={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},xi="__computeInfo",Ei=/[A-Z]/;function Si(e,t,i){let s=e[t];if(s){if(!e.hasOwnProperty(t)&&(s=e[t]=Object.create(e[t]),i))for(let e in s){let t=s[e],i=s[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else s=e[t]={};return s}function Ii(e,t,i,s,r,o){if(t){let n=!1;const a=Ci++;for(let l in i){let d=t[r?Ht(l):l];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===a||r&&!Ti(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,s,t.info,r,o),n=!0)}return n}return!1}function Pi(e,t,i,s,r,o,n,a){let l=!1,d=t[n?Ht(s):s];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===i||n&&!Ti(s,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,s,r,o,t.info,n,a),l=!0);return l}function Ti(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!function(e,t){return 0===e.indexOf(t+".")}(i,e))||!(!t.wildcard||!Bt(i,e))}return!0}function zi(e,t,i,s,r){let o="string"==typeof r.method?e[r.method]:r.method,n=r.property;o?o.call(e,e.__data[n],s[n]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Oi(e,t,i){let s=Ht(t);return s!==t&&(ki(e,Jt(s)+"-changed",i[t],t),!0)}function ki(e,t,i,s){let r={value:i,queueProperty:!0};s&&(r.path=s),jt(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function Ri(e,t,i,s,r,o){let n=(o?Ht(t):t)!=t?t:null,a=n?Wt(e,n):e.__data[t];n&&void 0===a&&(a=i[t]),ki(e,r.eventName,a,n)}function Fi(e,t,i,s,r){let o=e.__data[t];ut&&(o=ut(o,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,o)}const Ni=(e,t,i)=>{let s=0,r=t.length-1,o=-1;for(;s<=r;){const n=s+r>>1,a=i.get(t[n].methodInfo)-i.get(e.methodInfo);if(a<0)s=n+1;else{if(!(a>0)){o=n;break}r=n-1}}o<0&&(o=r+1),t.splice(o,0,e)},Di=(e,t,i,s,r)=>{const o=t[r?Ht(e):e];if(o)for(let t=0;t<o.length;t++){const n=o[t];n.info.lastRun===Ci||r&&!Ti(e,n.trigger)||(n.info.lastRun=Ci,Ni(n.info,i,s))}};function Li(e,t,i,s,r){let o=Ui(e,t,i,0,r);if(o===wi)return!1;let n=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[n]?e._setPendingProperty(n,o,!0):(e[n]=o,!1)}function Mi(e,t,i,s,r,o,n){i.bindings=i.bindings||[];let a={kind:s,target:r,parts:o,literal:n,isCompound:1!==o.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Jt(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let s=a.parts[i];s.compoundIndex=i,ji(e,t,a,s,l)}}function ji(e,t,i,s,r){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=s.dependencies,n={index:r,binding:i,part:s,evaluator:e};for(let i=0;i<o.length;i++){let s=o[i];"string"==typeof s&&(s=Qi(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:$i,info:n,trigger:s})}}}function $i(e,t,i,s,r,o,n){let a=n[r.index],l=r.binding,d=r.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=i[t];t=Vt(d.source,l.target,t),a._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(a)}else{let n=r.evaluator._evaluateBinding(e,d,t,i,s,o);n!==wi&&function(e,t,i,s,r){if(r=function(e,t,i,s){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[s.compoundIndex]=t,t=r.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=t??"")),t}(t,r,i,s),ut&&(r=ut(r,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[Ai.READ_ONLY]&&t[Ai.READ_ONLY][s]||t._setPendingProperty(s,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,r)}}(e,a,l,d,n)}}function Hi(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,r=new Array(s.length);for(let e=0;e<s.length;e++)r[e]=s[e].literal;let o=t.target;i[o]=r,t.literal&&"property"==t.kind&&("className"===o&&(e=jt(e)),e[o]=t.literal)}}function Bi(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,s,r){let o,n=e.detail,a=n&&n.path;a?(s=Vt(i,s,a),o=n&&n.value):o=e.currentTarget[i],o=r?!o:o,t[Ai.READ_ONLY]&&t[Ai.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,o,!0,Boolean(a))||n&&n.queueProperty||t._invalidateProperties()}(e,t,i.target,s.source,s.negate)}))}}function Vi(e,t,i,s,r,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let r,o=0;o<t.args.length&&(r=t.args[o]);o++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:s,info:n,trigger:r});return o&&e._addPropertyEffect(t.methodName,i,{fn:s,info:n}),n}function Ui(e,t,i,s,r){let o=e._methodHost||e,n=o[r.methodName];if(n){let s=e._marshalArgs(r.args,t,i);return s===wi?wi:n.apply(o,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Gi=[],Wi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",qi="(?:("+Wi+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",Yi=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+Wi+"\\s*(?:\\(\\s*(?:(?:"+qi+"(?:,\\s*"+qi+")*)?)\\)\\s*)?)(?:]]|}})","g");function Zi(e){let t="";for(let i=0;i<e.length;i++)t+=e[i].literal||"";return t}function Ki(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Gi};return t[2].trim()?function(e,t){return t.args=e.map((function(e){let i=Qi(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e):e}return null}function Qi(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Ht(t),i.structured=$t(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Ji(e,t,i){let s=Wt(e,i);return void 0===s&&(s=t[i]),s}function Xi(e,t,i,s){const r={indexSplices:s};yt&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),yt&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function es(e,t,i,s,r,o){Xi(e,t,i,[{index:s,addedCount:r,removed:o,object:t,type:"splice"}])}const ts=xt((e=>{const t=vi(hi(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Ai}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(is.length){let e=is[is.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Ai.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==Ai.READ_ONLY);let s=Si(this,t,!0)[e];s||(s=this[t][e]=[]),s.push(i)}_removePropertyEffect(e,t,i){let s=Si(this,t,!0)[e],r=s.indexOf(i);r>=0&&s.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Ai.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Ai.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Ai.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Ai.COMPUTE)}_setPendingPropertyOrPath(e,t,i,s){if(s||Ht(Array.isArray(e)?e[0]:e)!==e){if(!s){let i=Wt(this,e);if(!(e=qt(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let s=e.__dataLinkedPaths;if(s){let r;for(let o in s){let n=s[o];Bt(o,t)?(r=Vt(o,n,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Bt(n,t)&&(r=Vt(n,o,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=jt(e)),e[t]=i)}_setPendingProperty(e,t,i){let s=this.__dataHasPaths&&$t(e),r=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[Ai.NOTIFY]&&this[Ai.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[Ai.READ_ONLY]&&this[Ai.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let s,r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,s){let r=e[Ai.COMPUTE];if(r)if(bt){Ci++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[Ai.COMPUTE];let s,{counts:r,ready:o,total:n}=function(e){const t=e[xi],i={},s=e[Ai.COMPUTE],r=[];let o=0;for(let e in t){const s=t[e];o+=i[e]=s.args.filter((e=>!e.literal)).length+(s.dynamicFn?1:0)}for(let e in s)t[e]||r.push(e);return{counts:i,ready:r,total:o}}(e);for(;s=o.shift();){t.set(s,t.size);const e=i[s];e&&e.forEach((e=>{const t=e.info.methodInfo;--n,0==--r[t]&&o.push(t)}))}if(0!==n){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),n=[];for(let e in t)Di(e,r,n,o,s);let a;for(;a=n.shift();)Li(e,"",t,0,a)&&Di(a.methodInfo,r,n,o,s);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;Ii(e,r,o,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}(this,t,i,r),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),Ii(this,this[Ai.REFLECT],t,i,r),Ii(this,this[Ai.OBSERVE],t,i,r),s&&function(e,t,i,s,r){let o,n,a=e[Ai.NOTIFY],l=Ci++;for(let n in t)t[n]&&(a&&Pi(e,a,l,n,i,s,r)||r&&Oi(e,n,i))&&(o=!0);o&&(n=e.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,s,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[Ai.PROPAGATE]&&Ii(this,this[Ai.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,s){const r=(t,s)=>{Ii(this,e.propertyEffects,t,i,s,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,i,s)};e.runEffects?e.runEffects(r,t,s):r(t,s)}linkPaths(e,t){e=Ut(e),t=Ut(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Ut(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Xi(this,Wt(this,e,i),i.path,t)}get(e,t){return Wt(t||this,e)}set(e,t,i){i?qt(i,e,t):this[Ai.READ_ONLY]&&this[Ai.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},s=Wt(this,e,i),r=s.length,o=s.push(...t);return t.length&&es(this,s,i.path,r,t.length,[]),o}pop(e){let t={path:""},i=Wt(this,e,t),s=Boolean(i.length),r=i.pop();return s&&es(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...s){let r,o={path:""},n=Wt(this,e,o);return t<0?t=n.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?n.splice(t):n.splice(t,i,...s),(s.length||r.length)&&es(this,n,o.path,t,s.length,r),r}shift(e){let t={path:""},i=Wt(this,e,t),s=Boolean(i.length),r=i.shift();return s&&es(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},s=Wt(this,e,i),r=s.unshift(...t);return t.length&&es(this,s,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let s={path:""};t=Wt(this,e,s),i=s.path}else i=Array.isArray(e)?Ut(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,Ai.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let s={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,Ai.OBSERVE,{fn:zi,info:s,trigger:{name:e}}),i&&this._addPropertyEffect(t,Ai.OBSERVE,{fn:zi,info:s,trigger:{name:t}})}_createMethodObserver(e,t){let i=Ki(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Vi(this,i,Ai.OBSERVE,Ui,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Ai.NOTIFY,{fn:Ri,info:{eventName:Jt(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Ai.REFLECT,{fn:Fi,info:{attrName:t}})}_createComputedProperty(e,t,i){let s=Ki(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");const r=Vi(this,s,Ai.COMPUTE,Li,e,i);Si(this,xi)[e]=r}_marshalArgs(e,t,i){const s=this.__data,r=[];for(let o=0,n=e.length;o<n;o++){let{name:n,structured:a,wildcard:l,value:d,literal:h}=e[o];if(!h)if(l){const e=Bt(n,t),r=Ji(s,i,e?t:n);d={path:e?t:n,value:r,base:e?Wt(s,n):r}}else d=a?Ji(s,i,n):s[n];if(yt&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return wi;r[o]=d}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),s=this.__preBoundTemplateInfo==i;if(!s)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=s,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,s=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=s,s?s.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),is.push(this);let i=super._stampTemplate(e,t);if(is.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let t=0;t<s.length;t++){let r=s[t],o=i[t],n=r.bindings;if(n)for(let t=0;t<n.length;t++){let i=n[t];Hi(o,i),Bi(o,e,i)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:s,parent:r}=t;i?i.nextSibling=s:r&&(r.firstChild=s),s?s.previousSibling=i:r&&(r.lastChild=i),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];jt(jt(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,s){let r=t._parseTemplateNode.call(this,e,i,s);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=Zi(t)||" ",Mi(this,i,s,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,s,r,o){let n=this._parseBindings(o,i);if(n){let t=r,o="property";Ei.test(r)?o="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),o="attribute");let a=Zi(n);return a&&"attribute"==o&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(r=Qt(r)),Mi(this,i,s,o,r,n,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,s,r,o)}static _parseTemplateNestedTemplate(e,i,s){let r=t._parseTemplateNestedTemplate.call(this,e,i,s);const o=e.parentNode,n=s.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;vt&&(a||l)&&(o.removeChild(e),(s=s.parentInfo).templateInfo=n,s.noted=!0,r=!1);let d=n.hostProps;if(Ct&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),vt||(s.parentInfo.noted=!0));else{let e="{";for(let t in d)Mi(this,i,s,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}return r}static _parseBindings(e,t){let i,s=[],r=0;for(;null!==(i=Yi.exec(e));){i.index>r&&s.push({literal:e.slice(r,i.index)});let o=i[1][0],n=Boolean(i[2]),a=i[3].trim(),l=!1,d="",h=-1;"{"==o&&(h=a.indexOf("::"))>0&&(d=a.substring(h+2),a=a.substring(0,h),l=!0);let c=Ki(a),u=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i)}let s=t.dynamicFns;(s&&s[i]||c.static)&&(u.push(i),c.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:o,negate:n,customEvent:l,signature:c,dependencies:u,event:d}),r=Yi.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&s.push({literal:t})}return s.length?s:null}static _evaluateBinding(e,t,i,s,r,o){let n;return n=t.signature?Ui(e,i,s,0,t.signature):i!=t.source?Wt(e,t.source):o&&$t(i)?Wt(e,i):e.__data[i],t.negate&&(n=!n),n}}})),is=[],ss=xt((e=>{const t=ni(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const s=e[i];t[i]="function"==typeof s?{type:s}:s}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r})),rs=window.ShadyCSS&&window.ShadyCSS.cssBuild,os=xt((e=>{const t=ss(ts(e));function i(e,t,i,s){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,s)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,s[i.observer]),e._addPropertyToAttributeMap(t)}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):mt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let s=0;s<e.length;s++)i._createMethodObserver(e[s],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!pt||_t)&&(t=Tt.import(e,"template"),pt&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=lt(e.url);else{const e=Tt.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ct,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let s=t[i];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=s)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return at(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;(function(e,t,i,s){if(!rs){const r=t.content.querySelectorAll("style"),o=Lt(t),n=function(e){let t=Rt(e);return t?Mt(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<n.length;i++){let r=n[i];r.textContent=e._processStyleText(r.textContent,s),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<o.length;t++){let i=o[t],n=r[l];n!==i?(i=i.cloneNode(!0),n.parentNode.insertBefore(i,n)):l++,i.textContent=e._processStyleText(i.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),wt&&rs&&ht){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}})(this,t,e,i?nt(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=jt(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ft&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=nt(this.importPath)),nt(e,t)}static _parseTemplateContent(e,i,s){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,s)}static _addTemplatePropertyEffect(e,i,s){return!gt||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,s)}}})),ns=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class as{constructor(e,t){hs(e,t);const i=t.reduce(((t,i,s)=>t+ls(i)+e[s+1]),e[0]);this.value=i.toString()}toString(){return this.value}}function ls(e){if(e instanceof as)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const ds=function(e,...t){hs(e,t);const i=document.createElement("template");let s=t.reduce(((t,i,s)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof as)return ls(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(i)+e[s+1]),e[0]);return ns&&(s=ns.createHTML(s)),i.innerHTML=s,i},hs=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},cs=os(HTMLElement);let us=0,ps=0;const _s=[];let ms=!1;const gs={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},fs={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},ys={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},bs={run(e){ms||(ms=!0,queueMicrotask((()=>function(){ms=!1;const e=_s.length;for(let t=0;t<e;t++){const e=_s[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}_s.splice(0,e),ps+=e}()))),_s.push(e);const t=us;return us+=1,t},cancel(e){const t=e-ps;if(t>=0){if(!_s[t])throw new Error(`invalid async handle: ${e}`);_s[t]=null}}},vs=new Set;class Cs{static debounce(e,t,i){return e instanceof Cs?e._cancelAsync():e=new Cs,e.setConfig(t,i),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,vs.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),vs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}function ws(e){vs.add(e)}function As(){const e=Boolean(vs.size);return vs.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e}const xs=()=>{let e;do{e=As()}while(e)},Es=[];function Ss(e,t,i=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=i&&e.removeAttribute("dir")}function Is(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=Is();Es.forEach((t=>{Ss(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ps=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),Ss(this,Is(),null))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const s=Is(),r=i===s&&-1===Es.indexOf(this),o=!i&&t&&-1===Es.indexOf(this),n=i!==s&&t===s;r||o?(this.__subscribe(),Ss(this,s,i)):n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Es.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,i){("dir"!==i||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,i)}_attributeToProperty(e,t,i){"dir"!==e||t?super._attributeToProperty(e,t,i):this.dir=""}__subscribe(){Es.includes(this)||Es.push(this)}__unsubscribe(){Es.includes(this)&&Es.splice(Es.indexOf(this),1)}};function Ts(e,t){return e.split(".").reduce(((e,t)=>e?e[t]:void 0),t)}function zs(e){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(e):e.querySelector("template")&&console.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function Os(e,t){return t?t.closest(e)||Os(e,t.getRootNode().host):null}function ks(e){return e?new Set(e.split(" ")):new Set}function Rs(e){return e?[...e].join(" "):""}function Fs(e,t,i){const s=ks(e.getAttribute(t));s.add(i),e.setAttribute(t,Rs(s))}function Ns(e,t,i){const s=ks(e.getAttribute(t));s.delete(i),0!==s.size?e.setAttribute(t,Rs(s)):e.removeAttribute(t)}function Ds(e){return e.__cells||Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function Ls(e,t){[...e.children].forEach(t)}function Ms(e,t){Ds(e).forEach(t),e.__detailsCell&&t(e.__detailsCell)}function js(e,t,i){let s=1;e.forEach((e=>{s%10==0&&(s+=1),e._order=i+s*t,s+=1}))}function $s(e,t,i){switch(typeof i){case"boolean":e.toggleAttribute(t,i);break;case"string":e.setAttribute(t,i);break;default:e.removeAttribute(t)}}function Hs(e,t,i){t||""===t?Fs(e,"part",i):Ns(e,"part",i)}function Bs(e,t,i){e.forEach((e=>{Hs(e,i,t)}))}function Vs(e,t){const i=Ds(e);Object.entries(t).forEach((([t,s])=>{$s(e,t,s);const r=`${t}-row`;Hs(e,s,r),Bs(i,`${r}-cell`,s)}))}function Us(e,t){const i=Ds(e);Object.entries(t).forEach((([t,s])=>{const r=e.getAttribute(t);if($s(e,t,s),r){const s=`${t}-${r}-row`;Hs(e,!1,s),Bs(i,`${s}-cell`,!1)}if(s){const r=`${t}-${s}-row`;Hs(e,s,r),Bs(i,`${r}-cell`,s)}}))}function Gs(e,t,i,s,r){$s(e,t,i),r&&Hs(e,!1,r),Hs(e,i,s||`${t}-cell`)}class Ws{constructor(e,t){this.__host=e,this.__callback=t,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(e,{childList:!0}),this.__initialCallDebouncer=Cs.debounce(this.__initialCallDebouncer,bs,(()=>this.__onMutation()))}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(e){this.__currentSlots.forEach((t=>{e?t.addEventListener("slotchange",this.__onMutation):t.removeEventListener("slotchange",this.__onMutation)}))}__onMutation(){const e=!this.__currentColumns;this.__currentColumns||=[];const t=Ws.getColumns(this.__host),i=t.filter((e=>!this.__currentColumns.includes(e))),s=this.__currentColumns.filter((e=>!t.includes(e))),r=this.__currentColumns.some(((e,i)=>e!==t[i]));this.__currentColumns=t,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter((e=>e instanceof HTMLSlotElement)),this.__toggleSlotChangeListeners(!0),(e||i.length||s.length||r)&&this.__callback(i,s)}static __isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}static getColumns(e){const t=[],i=e._isColumnElement||Ws.__isColumnElement;return[...e.children].forEach((e=>{i(e)?t.push(e):e instanceof HTMLSlotElement&&[...e.assignedElements({flatten:!0})].filter((e=>i(e))).forEach((e=>t.push(e)))})),t}}const qs=e=>class extends e{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>{this._grid&&this._allCells.forEach((e=>{e._content.parentNode||this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._grid||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}ready(){super.ready(),zs(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>{t.style.flexGrow=e}))}_orderChanged(e){this._allCells.forEach((t=>{t.style.order=e}))}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>{t.style.width=e}))}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>{Gs(t,"frozen",e)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||Gs(t,"frozen-to-end",e)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>{Gs(t,"last-frozen",e)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||Gs(t,"first-frozen-to-end",e)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach((t=>{t.setAttribute("role",e?"rowheader":"gridcell")}))}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,(e=>e.toUpperCase()))}_reorderStatusChanged(e){const t=this.__previousReorderStatus,i=t?`reorder-${t}-cell`:"",s=`reorder-${e}-cell`;this._allCells.forEach((t=>{Gs(t,"reorder-status",e,s,i)})),this.__previousReorderStatus=e}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e){if(void 0===e||void 0===this._grid)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((i=>{i._content.style.textAlign=e,getComputedStyle(i._content).textAlign!==e&&(i._content.style.textAlign=t)}))}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Cs.debounce(this._grid._debouncerHiddenChanged,fs,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,i){const s=i&&i.item&&!t.parentElement.hidden;if(!s&&e!==this._headerRenderer&&e!==this._footerRenderer)return;const r=[t._content,this];s&&r.push(i),e.apply(this,r)}__renderCellsContent(e,t){!this.hidden&&this._grid&&t.forEach((t=>{if(!t.parentElement)return;const i=this._grid.__getRowModel(t.parentElement);e&&(t._renderer!==e&&this._clearCellContent(t),t._renderer=e,this._runRenderer(e,t,i))}))}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...i){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,i,s){[{cell:e,partName:i},{cell:t,partName:s}].forEach((({cell:e,partName:t})=>{if(e){const i=e.__customParts||[];e.part.remove(...i),e.__customParts=t?t.trim().split(" "):[],e.part.add(...e.__customParts)}}))}_renderBodyCellsContent(e,t){t&&e&&this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...i){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:i}){this.path&&this.__setTextContent(e,Ts(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(null!=t?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class Ys extends((e=>class extends(qs(Ps(e))){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}})(cs)){static get is(){return"vaadin-grid-column"}}M(Ys);const Zs=xt((e=>"function"==typeof e.prototype.addController?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}})),Ks=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Qs=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Js(e,t){if("function"!=typeof e)return;const i=Ks.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}function Xs(){}let er;window.Vaadin=window.Vaadin||{},void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Qs?!(Qs&&Object.keys(Qs).map((e=>Qs[e])).filter((e=>e.productionMode)).length>0):!Js((function(){return!0})))}catch(e){return!1}}()),window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){var e;e=Xs,window.Vaadin.developmentMode&&Js(e,void 0)};const tr=new Set,ir=e=>class extends(Ps(e)){static finalize(){super.finalize();const{is:e}=this;e&&!tr.has(e)&&(window.Vaadin.registrations.push(this),tr.add(e),window.Vaadin.developmentModeCallback&&(er=Cs.debounce(er,ys,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),ws(er)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let sr=!1;function rr(){return sr}function or(e){return null===e.offsetParent&&0===e.clientWidth&&0===e.clientHeight||function(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const i=window.getComputedStyle(e);return"hidden"===i.visibility||"none"===i.display}(e)}window.addEventListener("keydown",(()=>{sr=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{sr=!1}),{capture:!0});const nr=xt((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),ar=e=>class extends(nr(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}},lr=e=>e.test(navigator.userAgent),dr=e=>e.test(navigator.platform),hr=lr(/Android/u),cr=lr(/Chrome/u)&&/Google Inc/u.test(navigator.vendor),ur=lr(/Firefox/u),pr=dr(/^iPad/u)||dr(/^Mac/u)&&navigator.maxTouchPoints>1,_r=dr(/^iPhone/u)||pr,mr=lr(/^((?!chrome|android).)*safari/iu),gr=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class fr{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask((()=>{this.flush()})))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const i=[],s=[];e.length&&(t=e.filter((e=>!this._storedNodes.includes(e)))),this._storedNodes.length&&this._storedNodes.forEach(((t,r)=>{const o=e.indexOf(t);-1===o?i.push(t):o!==r&&s.push(t)})),(t.length||i.length||s.length)&&this.callback({addedNodes:t,movedNodes:s,removedNodes:i}),this._storedNodes=e}}let yr=0;class br extends EventTarget{static generateId(e,t){return`${t||"default"}-${e.localName}-${yr++}`}constructor(e,t,i,s={}){super();const{initializer:r,multiple:o,observe:n,useUniqueId:a}=s;this.host=e,this.slotName=t,this.tagName=i,this.observe="boolean"!=typeof n||n,this.multiple="boolean"==typeof o&&o,this.slotInitializer=r,o&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(e,t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(0===e.length){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=e,e.forEach((e=>{this.initAddedNode(e)}))}attachDefaultNode(){const{host:e,slotName:t,tagName:i}=this;let s=this.defaultNode;return!s&&i&&(s=document.createElement(i),s instanceof Element&&(""!==t&&s.setAttribute("slot",t),this.node=s,this.defaultNode=s)),s&&e.appendChild(s),s}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=""===e?"slot:not([name])":`slot[name=${e}]`,i=this.host.shadowRoot.querySelector(t);this.__slotObserver=new fr(i,(({addedNodes:e,removedNodes:t})=>{const i=this.multiple?this.nodes:[this.node],s=e.filter((e=>!function(e){return e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim()}(e)&&!i.includes(e)));t.length&&(this.nodes=i.filter((e=>!t.includes(e))),t.forEach((e=>{this.teardownNode(e)}))),s&&s.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...i,...s].filter((e=>e!==this.defaultNode)),s.forEach((e=>{this.initAddedNode(e)}))):(this.node&&this.node.remove(),this.node=s[0],this.initAddedNode(this.node)))}))}}class vr extends br{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,void 0!==this.ariaTarget&&(e.ariaTarget=this.ariaTarget),void 0!==this.context&&(e.context=this.context),void 0!==this.manual&&(e.manual=this.manual),void 0!==this.opened&&(e.opened=this.opened),void 0!==this.position&&(e._position=this.position),void 0!==this.shouldShow&&(e.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const Cr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),wr=Cr&&Cr[1]>=8,Ar={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const e=this._virtualCount;return Math.max(0,e-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(e){this._physicalCountVal=e},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems(((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems(((i,s)=>{t<this._scrollBottom&&(e=s),t+=this._getPhysicalSizeIncrement(i)})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(i);i?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,i?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),bs)}},_getReusables(e){let t,i,s;const r=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(e?(t=this._physicalStart,i=c-d):(t=this._physicalEnd,i=h-u);s=this._getPhysicalSizeIncrement(t),i-=s,!(r.length>=l||i<=o);)if(e){if(a+r.length+1>=this._virtualCount)break;if(d+s>=c-this._scrollOffset)break;r.push(t),d+=s,t=(t+1)%l}else{if(n-r.length<=0)break;if(d+this._physicalSize-s<=u)break;r.push(t),d-=s,t=0===t?l-1:t-1}return{indexes:r,physicalTop:d-this._scrollOffset}},_update(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-e)/t,i=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===i||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),ys):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),bs))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,fs))},_iterateItems(e,t){let i,s,r,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],s=this._computeVidx(i),null!=(r=e.call(this,i,s)))return r}else{for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(r=e.call(this,i,s)))return r;for(i=0;i<this._physicalStart;i++,s++)if(null!=(r=e.call(this,i,s)))return r}},_computeVidx(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_positionItems(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((t=>{this.translate3d(0,`${e}px`,0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement(e){return this._physicalSizes[e]},_adjustScrollPosition(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop-=e;const t=this._scrollPosition;!wr&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize(e){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(e||0===this._scrollHeight||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(xs(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,i=this._virtualStart,s=0;const r=this._hiddenContentSize;for(;i<e&&s<=r;)s+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),fs)},_isIndexRendered(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:(e,t,i)=>Math.min(i,Math.max(t,e)),_debounce(e,t,i){this._debouncers||(this._debouncers={}),this._debouncers[e]=Cs.debounce(this._debouncers[e],i,t.bind(this)),ws(this._debouncers[e])}},xr=1e3;class Er{constructor({createElements:e,updateElement:t,scrollTarget:i,scrollContainer:s,elementsContainer:r,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=r||s,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>{this.__mouseDown=!0})),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}__hasPlaceholders(){return this.__getVisibleElements().some((e=>e.__virtualizerPlaceholder))}scrollToIndex(e){if("number"!=typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let i=Math.floor(e/this.size*this._virtualCount);this._virtualCount-i<t?(i=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):i<t?e<xr?(i=e,this._vidxOffset=0):(i=xr,this._vidxOffset=e-i):this._vidxOffset=e-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=e)}flush(){const e=this._physicalCount;0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),xs(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==e&&this.flush())}update(e=0,t=this.size-1){const i=[];this.__getVisibleElements().forEach((s=>{s.__virtualIndex>=e&&s.__virtualIndex<=t&&(this.__updateElement(s,s.__virtualIndex,!0),i.push(s))})),this.__afterElementsUpdated(i)}_updateMetrics(e){xs();let t=0,i=0;const s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems(((e,s)=>{i+=this._physicalSizes[e],this._physicalSizes[e]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[e])),t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-i,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+t)/this._physicalAverageCount))}__getBorderBoxHeight(e){const t=getComputedStyle(e),i=parseFloat(t.height)||0;return"border-box"===t.boxSizing?i:i+(parseFloat(t.paddingBottom)||0)+(parseFloat(t.paddingTop)||0)+(parseFloat(t.borderBottomWidth)||0)+(parseFloat(t.borderTopWidth)||0)}__updateElement(e,t,i){e.__virtualizerPlaceholder&&(e.style.paddingTop="",e.__virtualizerPlaceholder=!1),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!i||(this.updateElement(e,t),e.__lastUpdatedIndex=t)}__afterElementsUpdated(e){e.forEach((e=>{const t=e.offsetHeight;if(0===t)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=Cs.debounce(this.__placeholderClearDebouncer,fs,(()=>this._resizeHandler()));else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const e=this.__elementHeightQueue.filter((e=>void 0!==e));this.__placeholderHeight=Math.round(e.reduce(((e,t)=>e+t),0)/e.length)}})),void 0===this.__pendingScrollToIndex||this.__hasPlaceholders()||this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){e!==this.size&&(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__size=e,this._physicalItems?(this._updateScrollerSize(),this._virtualCount=this.items.length,this._render()):(this._itemsChanged({path:"items"}),this.__preventElementUpdates=!0,xs(),this.__preventElementUpdates=!1),this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this._resizeHandler(),xs())}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),i=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",i.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(i),t}_assignModels(e){const t=[];this._iterateItems(((e,i)=>{const s=this._physicalItems[e];s.hidden=i>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex),t.push(s))}),e),this.__afterElementsUpdated(t)}_isClientFull(){return setTimeout((()=>{this.__clientFull=!0})),this.__clientFull||super._isClientFull()}translate3d(e,t,i,s){s.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){if(0===this.scrollTarget.offsetHeight)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const t=e>=0,i=this._getReusables(!t);i.indexes.length&&(this._physicalTop=i.physicalTop,t?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}e&&(this.__fixInvalidItemPositioningDebouncer=Cs.debounce(this.__fixInvalidItemPositioningDebouncer,gs.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),(()=>this.__fixInvalidItemPositioning()))),this.reorderElements&&(this.__scrollReorderDebouncer=Cs.debounce(this.__scrollReorderDebouncer,gs.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop,0===this._scrollTop&&0!==this.firstVisibleIndex&&Math.abs(e)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const e=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,i=0===this.adjustedFirstVisibleIndex,s=this.adjustedLastVisibleIndex===this.size-1;if(e&&!i||t&&!s){const e=t,i=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(e?-1:1),this._scrollHandler(),this._ratio=i}}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Cs.debounce(this.__debouncerWheelAnimationFrame,fs,(()=>{this._wheelAnimationFrame=!1}));const i=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Cs.debounce(this._debouncerIgnoreNewWheel,gs.after(this.timeouts.IGNORE_WHEEL),(()=>{this._ignoreNewWheel=!1}))):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(e,t,i){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_increasePoolIfNeeded(e){if(this._physicalCount>2&&e){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(e,Math.min(100,t)))}else super._increasePoolIfNeeded(e)}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),i=t.find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))||t[0];if(!i)return;const s=i.__virtualIndex-e,r=t.indexOf(i)-s;if(r>0)for(let e=0;e<r;e++)this.elementsContainer.appendChild(t[e]);else if(r<0)for(let e=t.length+r;e<t.length;e++)this.elementsContainer.insertBefore(t[e],t[0]);if(mr){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>{this.scrollTarget.style.transform=e}))}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=xr,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const s=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=s,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<s&&(this._vidxOffset+=Math.min(s-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Er.prototype,Ar);class Sr{constructor(e){this.__adapter=new Er(e)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}}const Ir=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Ls(this.$.header,((e,t)=>{e.setAttribute("aria-rowindex",t+1)}))}_a11yUpdateFooterRows(){Ls(this.$.footer,((e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)}))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Ms(e,(e=>{e.setAttribute("aria-selected",Boolean(t))}))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){Ms(e,(e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}))}},Pr=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const s=i._content,r=this.getRootNode().activeElement;s.contains(r)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){return(e=>{if(!e.parentNode)return!1;const t=Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter((e=>{const t=e.getAttribute("part");return!(t&&t.includes("body-cell"))})).includes(e);return!e.disabled&&t&&e.offsetParent&&"hidden"!==getComputedStyle(e).visibility})(e)}};function Tr(e,t){return e.split(".").reduce(((e,t)=>e[t]),t)}function zr(e,t,i){if(0===i.length)return!1;let s=!0;return e.forEach((({path:e})=>{e&&-1!==e.indexOf(".")&&void 0===Tr(e.replace(/\.[^.]*$/u,""),i[0])&&(console.warn(`Path "${e}" used for ${t} does not exist in all of the items, ${t} is disabled.`),s=!1)})),s}function Or(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}function kr(e,t){return(e=Or(e))<(t=Or(t))?-1:e>t?1:0}const Rr=e=>class extends e{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const t=(i=this.items,(e,t)=>{let s=i?[...i]:[];e.filters&&zr(e.filters,"filtering",s)&&(s=function(e,t){return e.filter((e=>t.every((t=>{const i=Or(Tr(t.path,e)),s=Or(t.value).toString().toLowerCase();return i.toString().toLowerCase().includes(s)}))))}(s,e.filters)),Array.isArray(e.sortOrders)&&e.sortOrders.length&&zr(e.sortOrders,"sorting",s)&&(s=function(e,t){return e.sort(((e,i)=>t.map((t=>"asc"===t.direction?kr(Tr(t.path,e),Tr(t.path,i)):"desc"===t.direction?kr(Tr(t.path,i),Tr(t.path,e)):0)).reduce(((e,t)=>0!==e?e:t),0)))}(s,e.sortOrders));const r=Math.min(s.length,e.pageSize),o=e.page*r,n=o+r;t(s.slice(o,n),s.length)});var i;t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}__dataProviderOrItemsChanged(e,t,i){i&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}},Fr=!1,Nr=e=>e,Dr="string"==typeof document.head.style.touchAction,Lr="__polymerGestures",Mr="__polymerGesturesHandled",jr="__polymerGesturesTouchAction",$r=["mousedown","mousemove","mouseup","click"],Hr=[0,1,4,2],Br=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Vr(e){return $r.indexOf(e)>-1}let Ur=!1;function Gr(e){if(!Vr(e)&&"touchend"!==e)return Dr&&Ur&&Fr?{passive:!0}:void 0}!function(){try{const e=Object.defineProperty({},"passive",{get(){Ur=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();const Wr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),qr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Yr(e){const t=e.type;if(!Vr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Br&&(t=Hr[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}const Zr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Kr(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Qr(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Jr=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Xr={},eo=[];function to(e){const t=Jr(e);return t.length>0?t[0]:e.target}function io(e){const t=e.type,i=e.currentTarget[Lr];if(!i)return;const s=i[t];if(!s)return;if(!e[Mr]&&(e[Mr]={},t.startsWith("touch"))){const i=e.changedTouches[0];if("touchstart"===t&&1===e.touches.length&&(Zr.touch.id=i.identifier),Zr.touch.id!==i.identifier)return;Dr||"touchstart"!==t&&"touchmove"!==t||function(e){const t=e.changedTouches[0],i=e.type;if("touchstart"===i)Zr.touch.x=t.clientX,Zr.touch.y=t.clientY,Zr.touch.scrollDecided=!1;else if("touchmove"===i){if(Zr.touch.scrollDecided)return;Zr.touch.scrollDecided=!0;const i=function(e){let t="auto";const i=Jr(e);for(let e,s=0;s<i.length;s++)if(e=i[s],e[jr]){t=e[jr];break}return t}(e);let s=!1;const r=Math.abs(Zr.touch.x-t.clientX),o=Math.abs(Zr.touch.y-t.clientY);e.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>r:"pan-y"===i&&(s=r>o)),s?e.preventDefault():no("track")}}(e)}const r=e[Mr];if(!r.skip){for(let t,i=0;i<eo.length;i++)t=eo[i],s[t.name]&&!r[t.name]&&t.flow&&t.flow.start.indexOf(e.type)>-1&&t.reset&&t.reset();for(let i,o=0;o<eo.length;o++)i=eo[o],s[i.name]&&!r[i.name]&&(r[i.name]=!0,i[t](e))}}function so(e,t,i){return!!Xr[t]&&(function(e,t,i){const s=Xr[t],r=s.deps,o=s.name;let n=e[Lr];n||(e[Lr]=n={});for(let t,i,s=0;s<r.length;s++)t=r[s],Wr&&Vr(t)&&"click"!==t||(i=n[t],i||(n[t]=i={_count:0}),0===i._count&&e.addEventListener(t,io,Gr(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),s.touchAction&&function(e,t){Dr&&e instanceof HTMLElement&&bs.run((()=>{e.style.touchAction=t})),e[jr]=t}(e,s.touchAction)}(e,t,i),!0)}function ro(e){eo.push(e),e.emits.forEach((t=>{Xr[t]=e}))}function oo(e,t,i){const s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,Nr(e).dispatchEvent(s),s.defaultPrevented){const e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function no(e){const t=function(e){for(let t,i=0;i<eo.length;i++){t=eo[i];for(let i,s=0;s<t.emits.length;s++)if(i=t.emits[s],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function ao(e,t,i,s){t&&oo(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:e=>no(e)})}function lo(e,t,i){if(e.prevent)return!1;if(e.started)return!0;const s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=5||r>=5}function ho(e,t,i){if(!t)return;const s=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],o=r.x-e.x,n=r.y-e.y;let a,l=0;s&&(a=r.x-s.x,l=r.y-s.y),oo(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:i,hover:()=>function(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s)}return i}(i.clientX,i.clientY)})}function co(e,t,i){const s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),o=to(i||t);!o||qr[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;const t=to(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const i=t.getBoundingClientRect(),s=e.pageX,r=e.pageY;return!(s>=i.left&&s<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||oo(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}ro({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Qr(this.info)},mousedown(e){if(!Yr(e))return;const t=to(e),i=this;Kr(this.info,(e=>{Yr(e)||(ao("up",t,e),Qr(i.info))}),(e=>{Yr(e)&&ao("up",t,e),Qr(i.info)})),ao("down",t,e)},touchstart(e){ao("down",to(e),e.changedTouches[0],e)},touchend(e){ao("up",to(e),e.changedTouches[0],e)}}),ro({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Qr(this.info)},mousedown(e){if(!Yr(e))return;const t=to(e),i=this,s=e=>{const s=e.clientX,r=e.clientY;lo(i.info,s,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&no("tap"),i.info.addMove({x:s,y:r}),Yr(e)||(i.info.state="end",Qr(i.info)),t&&ho(i.info,t,e),i.info.started=!0)};Kr(this.info,s,(e=>{i.info.started&&s(e),Qr(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=to(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;lo(this.info,s,r)&&("start"===this.info.state&&no("tap"),this.info.addMove({x:s,y:r}),ho(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend(e){const t=to(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),ho(this.info,t,i))}}),ro({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){Yr(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){Yr(e)&&co(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){co(this.info,e.changedTouches[0],e)}});const uo=e=>class extends e{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),so(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),gr||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;if(i._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some((e=>e.hasAttribute&&e.hasAttribute("draggable"))))return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&i.getAttribute("part").includes("header-cell")){for(this.toggleAttribute("reordering",!0),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)){const e=this._columnTree.findIndex((e=>e.includes(i))),t=this._getColumnsInOrder(e),s=t.indexOf(this._draggedColumn),r=t.indexOf(i),o=s<r?1:-1;for(let e=s;e!==r;e+=o)this._swapColumnOrders(this._draggedColumn,t[e+o])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const i=this.shadowRoot.elementFromPoint(e,t);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),s=e-i.width/2,r=t-i.height/2,o=parseInt(this._reorderGhost._left||0),n=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-s),this._reorderGhost._top=n-(i.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>{t.style[e]=i[e]})),t}_updateOrders(e){void 0!==e&&(e[0].forEach((e=>{e._order=0})),js(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){Ls(e.parentNode,(i=>{/column/u.test(i.localName)&&this._isSwapAllowed(i,e)&&(i._reorderStatus=t)}))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout((()=>this._autoScroller()),10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,s=e.parentElement===t.parentElement,r=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return i&&s&&r}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find((t=>e.contains(t._column))),s=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=i.getBoundingClientRect();return r.left>s.left?t>r.right-s.width:t<r.left+s.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},po=e=>class extends e{ready(){super.ready();const e=this.$.scroller;so(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let i=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===i.localName;)i=i._childColumns.slice(0).sort(((e,t)=>e._order-t._order)).filter((e=>!e.hidden)).pop();const s=this.__isRTL,r=e.detail.x,o=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),n=o.find((e=>e._column===i));if(n.offsetWidth){const e=getComputedStyle(n._content),t=10+parseInt(e.paddingLeft)+parseInt(e.paddingRight)+parseInt(e.borderLeftWidth)+parseInt(e.borderRightWidth)+parseInt(e.marginLeft)+parseInt(e.marginRight);let o;const a=n.offsetWidth,l=n.getBoundingClientRect();o=n.hasAttribute("frozen-to-end")?a+(s?r-l.right:l.left-r):a+(s?l.left-r:r-l.right),i.width=`${Math.max(t,o)}px`,i.flexGrow=0}o.sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,i)=>{t<i.indexOf(n)&&(e._column.width=`${e.offsetWidth}px`,e._column.flexGrow=0)}));const a=this._frozenToEndCells[0];if(a&&this.$.table.scrollWidth>this.$.table.offsetWidth){const e=a.getBoundingClientRect(),t=r-(s?e.right:e.left);(s&&t<=0||!s&&t>=0)&&(this.$.table.scrollLeft+=t)}"end"===e.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler()}}};function _o(e,t,i=0){let s=t;for(const t of e.subCaches){const e=t.parentCacheIndex;if(s<=e)break;if(s<=e+t.flatSize)return _o(t,s-e-1,i+1);s-=t.flatSize}return{cache:e,item:e.items[s],index:s,page:Math.floor(s/e.pageSize),level:i}}function mo({getItemId:e},t,i,s=0,r=0){for(let o=0;o<t.items.length;o++){const n=t.items[o];if(n&&e(n)===e(i))return{cache:t,level:s,item:n,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:r+t.getFlatIndex(o)}}for(const o of t.subCaches){const n=mo({getItemId:e},o,i,s+1,r+t.getFlatIndex(o.parentCacheIndex)+1);if(n)return n}}function go(e,[t,...i],s=0){t===1/0&&(t=e.size-1);const r=e.getFlatIndex(t),o=e.getSubCache(t);return o&&o.flatSize>0&&i.length?go(o,i,s+r+1):s+r}class fo{context;size=0;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__flatSize=0;constructor(e,t,i,s,r){this.context=e,this.pageSize=t,this.size=i||0,this.parentCache=s,this.parentCacheIndex=r,this.__flatSize=i||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0||this.subCaches.some((e=>e.isLoading))}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce(((e,t)=>(t.recalculateFlatSize(),e+t.flatSize)),0):0}setPage(e,t){const i=e*this.pageSize;t.forEach(((e,t)=>{this.items[i+t]=e}))}getSubCache(e){return this.__subCacheByIndex[e]}removeSubCache(e){delete this.__subCacheByIndex[e]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(e){const t=new fo(this.context,this.pageSize,0,this,e);return this.__subCacheByIndex[e]=t,t}getFlatIndex(e){const t=Math.max(0,Math.min(this.size-1,e));return this.subCaches.reduce(((e,i)=>{const s=i.parentCacheIndex;return t>s?e+i.flatSize:e}),t)}getItemForIndex(e){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:t}=_o(this,e);return t}getCacheAndIndex(e){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:t,index:i}=_o(this,e);return{cache:t,scaledIndex:i}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(e){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(e)){const t=this.createSubCache(e);this.context.__controller.__loadCachePage(t,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}class yo extends EventTarget{host;dataProvider;dataProviderParams;size;pageSize;isExpanded;getItemId;rootCache;constructor(e,{size:t,pageSize:i,isExpanded:s,getItemId:r,dataProvider:o,dataProviderParams:n}){super(),this.host=e,this.pageSize=i,this.getItemId=r,this.isExpanded=s,this.dataProvider=o,this.dataProviderParams=n,this.rootCache=this.__createRootCache(t)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return _o(this.rootCache,e)}getItemContext(e){return mo({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return go(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:t,page:i,item:s}=this.getFlatIndexContext(e);s||this.__loadCachePage(t,i)}ensureFlatIndexHierarchy(e){const{cache:t,item:i,index:s}=this.getFlatIndexContext(e);if(i&&this.isExpanded(i)&&!t.getSubCache(s)){const e=t.createSubCache(s);this.__loadCachePage(e,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new fo(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,t){if(!this.dataProvider||e.pendingRequests[t])return;let i={page:t,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(i={...i,...this.dataProviderParams()});const s=(s,r)=>{void 0!==r?e.size=r:i.parentItem&&(e.size=s.length),e.setPage(t,s),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[t],this.dispatchEvent(new CustomEvent("page-loaded"))};e.pendingRequests[t]=s,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(i,s)}}const bo=e=>class extends e{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new yo(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){(t||"children"!==e)&&this.requestContentUpdate()}_getItem(e,t){if(e>=this._flatSize)return;t.index=e;const{item:i}=this._dataProviderController.getFlatIndexContext(e);i?(this.__updateLoading(t,!1),this._updateItem(t,i),this._isExpanded(i)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const i=Ds(e);$s(e,"loading",t),Bs(i,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?Ts(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const i=t||[],s=new Set;return i.forEach((e=>{s.add(this.getItemId(e))})),s}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter((t=>!this._itemsEqual(t,e))))}_getIndexLevel(e=0){const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach((e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)})),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=Cs.debounce(this._debouncerApplyCachedData,gs.after(0),(()=>{this._setLoading(!1),this._getRenderedRows().forEach((e=>{const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);t&&this._getItem(e.index,e)})),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()})),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=Cs.debounce(this.__clearCacheDebouncer,bs,(()=>this.clearCache()))}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),this.__virtualizer.size||this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._flatSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),void 0!==t&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Cs.debounce(this._debouncerCheckSize,gs.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach(((t,s)=>{this._itemsEqual(t,e)&&(i=s)})),i}scrollToIndex(...e){let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);!this._dataProviderController.isLoading()&&this.clientHeight||(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}},vo="between",Co="on-top-or-between",wo="above",Ao="below",xo="empty",Eo=!("draggable"in document.createElement("div")),So=e=>class extends e{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const i=t.getBoundingClientRect();Eo?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top);let s=[t];this._isSelected(t._item)&&(s=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(s)),Vs(t,{dragstart:s.length>1?`${s.length}`:""}),this.style.setProperty("--_grid-drag-start-x",e.clientX-i.left+20+"px"),this.style.setProperty("--_grid-drag-start-y",e.clientY-i.top+10+"px"),requestAnimationFrame((()=>{Vs(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")}));const r=new CustomEvent("grid-dragstart",{detail:{draggedItems:s.map((e=>e._item)),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});r.originalEvent=e,this.dispatchEvent(r)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().find((e=>"tr"===e.localName));if(this._flatSize&&"on-grid"!==this.dropMode)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation="on-top",this.dropMode===vo){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?wo:Ao}else this.dropMode===Co&&(e.clientY-i.top<i.height/3?this._dropLocation=wo:e.clientY-i.top>i.height/3*2&&(this._dropLocation=Ao))}else{if(t)return;if(this.dropMode!==vo&&this.dropMode!==Co)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=Ao}else this._dropLocation=xo;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===xo?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&Us(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,s=t-e+this.__dndAutoScrollThreshold,r=e-i+this.__dndAutoScrollThreshold;let o=0;if(r>0?o=2*r:s>0&&(o=2*-s),o){const e=this.$.table.scrollTop;if(this.$.table.scrollTop+=o,e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>{this.__dndAutoScrolling=!1}),20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((i=>{const s=i.getBoundingClientRect();return s.bottom>e&&s.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Ls(this.$.items,(e=>{Us(e,{dragover:null})}))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Ls(this.$.items,(e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const i=this.loading||e.hasAttribute("loading"),s=!this.rowsDraggable||i||this.dragFilter&&!this.dragFilter(t),r=!this.dropMode||i||this.dropFilter&&!this.dropFilter(t);Ms(e,(e=>{s?e._content.removeAttribute("draggable"):e._content.setAttribute("draggable",!0)})),Vs(e,{"drag-disabled":!!s,"drop-disabled":!!r})}};function Io(e,t){if(!e||!t||e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!Io(e[i],t[i]))return!1}else if(e[i]!==t[i])return!1;return!0}const Po=e=>class extends e{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some((e=>"vaadin-grid-column-group"===e.localName))}_getChildColumns(e){return Ws.getColumns(e)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=Ws.getColumns(this),t=[e];let i=e;for(;this._hasColumnGroups(i);)i=this._flattenColumnGroups(i),t.push(i);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=Cs.debounce(this.__updateColumnTreeDebouncer,bs,(()=>this._updateColumnTree()))}_updateColumnTree(){const e=this._getColumnTree();Io(e,this._columnTree)||(e.forEach((e=>{e.forEach((e=>{e.performUpdate&&e.performUpdate()}))})),this._columnTree=e)}_addNodeObserver(){this._observer=new Ws(this,((e,t)=>{const i=t.flatMap((e=>e._allCells)),s=e=>i.filter((t=>t&&t._content.contains(e))).length;this.__removeSorters(this._sorters.filter(s)),this.__removeFilters(this._filters.filter(s)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=Cs.debounce(this._debouncerCheckImports,gs.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,i)=>{Gs(e,"first-column",0===t),Gs(e,"last-column",t===i.length-1)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}},To=e=>class extends e{getEventContext(e){const t={},i=e.__composedPath||e.composedPath(),s=i[i.indexOf(this.$.table)-3];return s?(t.section=["body","header","footer","details"].find((e=>s.getAttribute("part").indexOf(e)>-1)),s._column&&(t.column=s._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(s.parentElement)),t):t}},zo=e=>class extends e{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!==e.length&&(this._filters=this._filters.filter((t=>e.indexOf(t)<0)),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}},Oo=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach((t=>{const i=this[t];if(e){const e=i&&i.parentElement;this.__isCell(i)?this[t]=e:this.__isCell(e)&&(this[t]=e.parentElement)}else if(!e&&this.__isRow(i)){const e=i.firstElementChild;this[t]=e._focusButton||e}}))}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",(()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0})),this.addEventListener("mouseup",(()=>{this._isMousedown=!1})))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&Ns(t,"part","focused-cell"),e&&Fs(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach((e=>{if(e.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=e;else{let t=this._itemsFocusable.parentElement,i=this._itemsFocusable;if(t){this.__isCell(t)&&(i=t,t=t.parentElement);const s=[...t.children].indexOf(i);this._itemsFocusable=this.__getFocusable(e,e.children[s])}}})),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let i;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==i&&(i=void 0),i&&this[`_on${i}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find((t=>t.index===e))?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!(!t||!Ts(this.itemHasChildrenPath,t)||this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1,s=this.__isRTL;let r=0,o=0;switch(t){case"ArrowRight":r=s?-1:1;break;case"ArrowLeft":r=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?o=-1/0:r=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?o=1/0:r=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=i;break;case"PageUp":o=-i}const n=e.composedPath().find((e=>this.__isRow(e))),a=e.composedPath().find((e=>this.__isCell(e)));if(this.__rowFocusMode&&!n||!this.__rowFocusMode&&!a)return;const l=s?"ArrowRight":"ArrowLeft";if(t===(s?"ArrowLeft":"ArrowRight")){if(this.__rowFocusMode)return this.__isRowExpandable(n)?void this.expandItem(n._item):(this.__rowFocusMode=!1,void this._onCellNavigation(n.firstElementChild,0,0))}else if(t===l)if(this.__rowFocusMode){if(this.__isRowCollapsible(n))return void this.collapseItem(n._item)}else{const e=[...n.children].sort(((e,t)=>e._order-t._order));if(a===e[0]||this.__isDetailsCell(a))return this.__rowFocusMode=!0,void this._onRowNavigation(n,0)}this.__rowFocusMode?this._onRowNavigation(n,o):this._onCellNavigation(a,r,o)}_onRowNavigation(e,t){const{dstRow:i}=this.__navigateRows(t,e);i&&i.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?void 0!==t?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,i){const s=this.__getIndexInGroup(t,this._focusedItemIndex),r=t.parentNode,o=(r===this.$.items?this._flatSize:r.children.length)-1;let n=Math.max(0,Math.min(s+e,o));if(r!==this.$.items){if(n>s)for(;n<o&&r.children[n].hidden;)n+=1;else if(n<s)for(;n>0&&r.children[n].hidden;)n-=1;return this.toggleAttribute("navigating",!0),{dstRow:r.children[n]}}let a=!1;if(i){const o=this.__isDetailsCell(i);if(r===this.$.items){const i=t._item,{item:r}=this._dataProviderController.getFlatIndexContext(n);a=o?0===e:1===e&&this._isDetailsOpened(i)||-1===e&&n!==s&&this._isDetailsOpened(r),a!==o&&(1===e&&a||-1===e&&!a)&&(n=s)}}return this._ensureScrolledToIndex(n),this._focusedItemIndex=n,this.toggleAttribute("navigating",!0),{dstRow:[...r.children].find((e=>!e.hidden&&e.index===n)),dstIsRowDetails:a}}_onCellNavigation(e,t,i){const s=e.parentNode,{dstRow:r,dstIsRowDetails:o}=this.__navigateRows(i,s,e);if(!r)return;let n=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(n=[...this.$.sizer.children].findIndex((t=>t._column===e._column)));const a=this.__isDetailsCell(e),l=s.parentNode,d=this.__getIndexInGroup(s,this._focusedItemIndex);if(void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=a?0:this._getColumns(l,d).filter((e=>!e.hidden))[n]._order),o)[...r.children].find((e=>this.__isDetailsCell(e))).focus();else{const s=this.__getIndexInGroup(r,this._focusedItemIndex),o=this._getColumns(l,s).filter((e=>!e.hidden)),n=o.map((e=>e._order)).sort(((e,t)=>e-t)),d=n.length-1,h=n.indexOf(n.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),c=0===i&&a?h:Math.max(0,Math.min(h+t,d));c!==h&&(this._focusedColumnOrder=void 0);const u=o.reduce(((e,t,i)=>(e[t._order]=i,e)),{}),p=u[n[c]];let _;if(this.$.items.contains(e)){const e=this.$.sizer.children[p];this._lazyColumns&&(this.__isColumnInViewport(e._column)||e.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),_=[...r.children].find((t=>t._column===e._column)),this._scrollHorizontallyToCell(_)}else _=r.children[p],this._scrollHorizontallyToCell(_);_.focus()}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],s="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(i.type);let r;switch(t){case"Enter":r=!this.interacting||!s;break;case"Escape":r=!1;break;case"F2":r=!this.interacting}const{cell:o}=this._getGridEventLocation(e);if(this.interacting!==r&&null!==o)if(r){const t=o._content.querySelector("[focus-target]")||[...o._content.querySelectorAll("*")].find((e=>this._isFocusable(e)));t&&(e.preventDefault(),t.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);"Escape"===t&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let s=i.indexOf(e);for(s+=t;s>=0&&s<=i.length-1;){let e=i[s];if(e&&!this.__rowFocusMode&&(e=i[s].parentNode),e&&!e.hidden)break;s+=t}let r=i[s];if(r&&!this.__isHorizontallyInViewport(r)){const e=this._getColumnsInOrder().find((e=>this.__isColumnInViewport(e)));if(e)if(r===this._headerFocusable)r=e._headerCell;else if(r===this._itemsFocusable){const t=r._column._cells.indexOf(r);r=e._cells[t]}else r===this._footerFocusable&&(r=e._footerCell)}return r}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const s=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),s.index!==this._focusedItemIndex&&this.__isCell(t)){const e=Array.from(s.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).find((e=>!e.hidden&&e.index===this._focusedItemIndex));t&&(i=t.children[e])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],i=this.__isRow(t);!i&&t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent(i?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(i?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const i=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",i)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:i,row:s}=this._getGridEventLocation(e);if(i||this.__rowFocusMode){if(this._detectInteracting(e),t&&(i||s))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(s,i):this.$.items===t?this._itemsFocusable=this.__getFocusable(s,i):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(s,i)),i){const t=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&"body"===t.section,this.__pendingBodyCellFocus||i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:t}})),this._focusedCell=i._focusButton||i,rr()&&e.target===i&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:i}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),i=this.interacting&&t===this._activeRowGroup;e.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach((e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find((e=>e.offsetHeight)),i=t?[...t.children].find((e=>!e.hidden)):null;t&&i&&(this[`_${e}Focusable`]=this.__getFocusable(t,i))}})),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find((e=>!e.hidden)):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),i=e.parentNode,s=Array.from(i.children).indexOf(e),r=this.$.table.getBoundingClientRect();let o=r.left,n=r.right;for(let e=s-1;e>=0;e--){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this.__isDetailsCell(t)&&(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))){o=t.getBoundingClientRect().right;break}}for(let e=s+1;e<i.children.length;e++){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this.__isDetailsCell(t)&&(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))){n=t.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>n&&(this.$.table.scrollLeft+=Math.round(t.right-n))}_getGridEventLocation(e){const t=e.composedPath(),i=t.indexOf(this.$.table);return{section:i>=1?t[i-1]:null,row:i>=2?t[i-2]:null,cell:i>=3?t[i-3]:null}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}},ko=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver((e=>{e.forEach((({target:e})=>{this._updateDetailsCellHeight(e.parentElement)})),this.__virtualizer.__adapter._resizeHandler()}))}_rowDetailsRendererChanged(e){e&&this._columnTree&&Ls(this.$.items,(e=>{if(!e.querySelector("[part~=details-cell]")){this._updateRow(e,this._columnTree[this._columnTree.length-1]);const t=this._isDetailsOpened(e._item);this._toggleDetailsCell(e,t)}}))}_detailsOpenedItemsChanged(e,t){Ls(this.$.items,(e=>{(e.hasAttribute("details-opened")||t&&this._isDetailsOpened(e._item))&&this._updateItem(e,e._item)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');i&&(i.hidden=!t,i.hidden||this.rowDetailsRenderer&&(i._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame((()=>this.__updateDetailsRowPadding(e,t))))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){Ls(this.$.items,(e=>{this._updateDetailsCellHeight(e)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((t=>!this._itemsEqual(t,e))))}},Ro=document.createElement("div");Ro.style.position="fixed",Ro.style.clip="rect(0px, 0px, 0px, 0px)",Ro.setAttribute("aria-live","polite"),document.body.appendChild(Ro);const Fo=xt((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}})),No=e=>class extends(nr(Fo(e))){get _activeKeys(){return[" "]}ready(){super.ready(),so(this,"down",(e=>{this._shouldSetActive(e)&&this._setActive(!0)})),so(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",(e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)}),{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}},Do=xt((e=>class extends e{get _keyboardActive(){return rr()}ready(){this.addEventListener("focusin",(e=>{this._shouldSetFocus(e)&&this._setFocused(!0)})),this.addEventListener("focusout",(e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}})),Lo=xt((e=>class extends(Do(ar(e))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){void 0!==e&&this.focusElement&&(this.focusElement.tabIndex=e,-1!==e&&(this.tabindex=void 0)),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}}));function Mo(e,t){const{scrollLeft:i}=e;return"rtl"!==t?i:e.scrollWidth-e.clientWidth+i}const jo=new ResizeObserver((e=>{setTimeout((()=>{e.forEach((e=>{e.target.resizables?e.target.resizables.forEach((t=>{t._onResize(e.contentRect)})):e.target._onResize(e.contentRect)}))}))})),$o=xt((e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),jo.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,jo.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),jo.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&jo.unobserve(e)),this.__parent=null}}_onResize(e){}})),Ho=e=>class extends($o(e)){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return"lazy"===this.columnRendering}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]})),this.$.items.addEventListener("focusout",(()=>{this._rowWithFocusedElement=void 0})),this.$.table.addEventListener("scroll",(()=>this._afterScroll()))}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!or(this);e&&!1===this.__previousVisible&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find((t=>t.index===e));if(t){const e=t.getBoundingClientRect(),i=this.$.footer.getBoundingClientRect().top,s=this.$.header.getBoundingClientRect().bottom;e.bottom>i?this.$.table.scrollTop+=e.bottom-i:e.top<s&&(this.$.table.scrollTop-=s-e.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this.$.scroller.toggleAttribute("scrolling",!0)))),this._debounceScrolling=Cs.debounce(this._debounceScrolling,gs.after(500),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)}))}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=Cs.debounce(this._debounceColumnContentVisibility,gs.after(100),(()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())})),this._firefox&&!or(this)&&!1!==this.__previousVisible&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree)return;const e=this._getColumnsInOrder();if(!e[0]||!e[0]._sizerCell)return;let t=!1;if(e.forEach((i=>{const s=this._lazyColumns&&!this.__isColumnInViewport(i);i._bodyContentHidden!==s&&(t=!0,i._cells.forEach((t=>{if(t!==i._sizerCell)if(s)t.remove();else if(t.__parentRow){const s=[...t.__parentRow.children].find((t=>e.indexOf(t._column)>e.indexOf(i)));t.__parentRow.insertBefore(t,s)}}))),i._bodyContentHidden=s})),t&&this._frozenCellsChanged(),this._lazyColumns){const t=[...e].reverse().find((e=>e.frozen)),i=this.__getColumnEnd(t),s=e.find((e=>!e.frozen&&!e._bodyContentHidden));this.__lazyColumnsStart=this.__getColumnStart(s)-i,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return!(!e.frozen&&!e.frozenToEnd)||this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){"eager"===t?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=Cs.debounce(this._debounceOverflow,fs,(()=>{this.__doUpdateOverflow()}))}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const i=Mo(t,this.getAttribute("dir"));i>0&&(e+=" start"),i<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,(e=>"start"===e?"end":"start"))),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const s=e.trim();s.length>0&&this.getAttribute("overflow")!==s?this.setAttribute("overflow",s):0===s.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=Cs.debounce(this._debouncerCacheElements,bs,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((e=>{e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()})),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=Cs.debounce(this.__debounceUpdateFrozenColumn,bs,(()=>this._updateFrozenColumn()))}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);let t,i;e.sort(((e,t)=>e._order-t._order));for(let s=0;s<e.length;s++){const r=e[s];r._lastFrozen=!1,r._firstFrozenToEnd=!1,void 0===i&&r.frozenToEnd&&!r.hidden&&(i=s),r.frozen&&!r.hidden&&(t=s)}void 0!==t&&(e[t]._lastFrozen=!0),void 0!==i&&(e[i]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,i=Math.max(0,this.$.table.scrollLeft),s=Mo(this.$.table,this.getAttribute("dir")),r=`translate(${-i}px, 0)`;this.$.header.style.transform=r,this.$.footer.style.transform=r,this.$.items.style.transform=r;const o=this.__isRTL?s+t-e:i,n=`translate(${o}px, 0)`;this._frozenCells.forEach((e=>{e.style.transform=n}));const a=this.__isRTL?s:i+t-e,l=`translate(${a}px, 0)`;let d=l;if(this._lazyColumns){const e=this._getColumnsInOrder(),t=[...e].reverse().find((e=>!e.frozenToEnd&&!e._bodyContentHidden)),i=this.__getColumnEnd(t),s=e.find((e=>e.frozenToEnd)),r=a+(this.__getColumnStart(s)-i)+this.__lazyColumnsStart;d=`translate(${r}px, 0)`}this._frozenToEndCells.forEach((e=>{this.$.items.contains(e)?e.style.transform=d:e.style.transform=l})),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-o+"px")}},Bo=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter((t=>!this._itemsEqual(t,e))))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const i=t||[],s=new Set;return i.forEach((e=>{s.add(this.getItemId(e))})),s}};let Vo="prepend";const Uo=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Vo},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Vo=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){0!==e.length&&(this._sorters=this._sorters.filter((t=>e.indexOf(t)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(((e,t)=>{e._order=this._sorters.length>1?t:null}))}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,i){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!i)||this.multiSortOnShiftClick&&t)"append"===this.multiSortPriority?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const t=this._sorters.filter((t=>t!==e));this._sorters=e.direction?[e]:[],t.forEach((e=>{e._order=null,e.direction=null}))}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}},Go=e=>class extends e{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){Ls(this.$.items,(e=>{e.hidden||e.hasAttribute("loading")||this._generateCellClassNames(e,this.__getRowModel(e))}))}generateCellPartNames(){Ls(this.$.items,(e=>{e.hidden||e.hasAttribute("loading")||this._generateCellPartNames(e,this.__getRowModel(e))}))}_generateCellClassNames(e,t){Ms(e,(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)))}}))}_generateCellPartNames(e,t){Ms(e,(e=>{if(e.__generatedParts&&e.__generatedParts.forEach((t=>{Hs(e,null,t)})),this.cellPartNameGenerator){const i=this.cellPartNameGenerator(e._column,t);e.__generatedParts=i&&i.split(" ").filter((e=>e.length>0)),e.__generatedParts&&e.__generatedParts.forEach((t=>{Hs(e,!0,t)}))}}))}},Wo=e=>class extends(Rr(bo(Po(Pr(Ho(Bo(Uo(ko(Oo(Ir(zo(uo(po(To(So(Go(ar(e)))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:mr},_ios:{type:Boolean,value:_r},_firefox:{type:Boolean,value:ur},_android:{type:Boolean,value:hr},_touchDevice:{type:Boolean,value:gr},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const e=this.__getFirstVisibleItem();return e?e.index:void 0}get _lastVisibleIndex(){const e=this.__getLastVisibleItem();return e?e.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find((e=>this._isInViewport(e)))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find((e=>this._isInViewport(e)))}_isInViewport(e){const t=this.$.table.getBoundingClientRect(),i=e.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,r=this.$.footer.getBoundingClientRect().height;return i.bottom>t.top+s&&i.top<t.bottom-r}_getRenderedRows(){return Array.from(this.$.items.children).filter((e=>!e.hidden)).sort(((e,t)=>e.index-t.index))}_getRowContainingNode(e){const t=Os("vaadin-grid-cell-content",e);if(t)return t.assignedSlot.parentElement.parentElement}_isItemAssignedToRow(e,t){const i=this.__getRowModel(t);return this.getItemId(e)===this.getItemId(i.item)}ready(){super.ready(),this.__virtualizer=new Sr({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver((()=>setTimeout((()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})))).observe(this.$.table),zs(this),this._tooltipController=new vr(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(e){if(this.$.items.contains(e)&&"td"===e.localName)return{item:e.parentElement._item,column:e._column}}__focusBodyCell({item:e,column:t}){const i=this._getRenderedRows().find((t=>t._item===e)),s=i&&[...i.children].find((e=>e._column===t));s&&s.focus()}_focusFirstVisibleRow(){const e=this.__getFirstVisibleItem();this.__rowFocusMode=!0,e.focus()}_flatSizeChanged(e,t,i,s){if(t&&i&&s){const i=this.shadowRoot.activeElement,s=this.__getBodyCellCoordinates(i),r=t.size||0;t.size=e,t.update(r-1,r-1),e<r&&t.update(e-1,e-1),s&&i.parentElement.hidden&&this.__focusBodyCell(s),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__getIntrinsicWidth(e){return this.__intrinsicWidthCache.has(e)||this.__calculateAndCacheIntrinsicWidths([e]),this.__intrinsicWidthCache.get(e)}__getDistributedWidth(e,t){if(null==e||e===this)return 0;const i=Math.max(this.__getIntrinsicWidth(e),this.__getDistributedWidth((e.assignedSlot||e).parentElement,e));if(!t)return i;const s=i,r=e._visibleChildColumns.map((e=>this.__getIntrinsicWidth(e))).reduce(((e,t)=>e+t),0),o=Math.max(0,s-r),n=this.__getIntrinsicWidth(t)/r*o;return this.__getIntrinsicWidth(t)+n}_recalculateColumnWidths(e){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach((e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()})),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const t=this._firstVisibleIndex,i=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter((e=>e.index>=t&&e.index<=i)),this.__calculateAndCacheIntrinsicWidths(e),e.forEach((e=>{e.width=`${this.__getDistributedWidth(e)}px`}))}__setVisibleCellContentAutoWidth(e,t){e._allCells.filter((e=>!this.$.items.contains(e)||this.__viewportRowsCache.includes(e.parentElement))).forEach((e=>{e.__measuringAutoWidth=t,e.__measuringAutoWidth?(e.__originalWidth=e.style.width,e.style.width="auto",e.style.position="absolute"):(e.style.width=e.__originalWidth,delete e.__originalWidth,e.style.position="")}))}__getAutoWidthCellsMaxWidth(e){return e._allCells.reduce(((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e),0)}__calculateAndCacheIntrinsicWidths(e){e.forEach((e=>this.__setVisibleCellContentAutoWidth(e,!0))),e.forEach((e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)})),e.forEach((e=>this.__setVisibleCellContentAutoWidth(e,!1)))}recalculateColumnWidths(){if(!this._columnTree)return;if(or(this)||this._dataProviderController.isLoading())return void(this.__pendingRecalculateColumnWidths=!0);const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&!or(this)&&!this._dataProviderController.isLoading()&&this.__hasRowsWithClientHeight()&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(e){const t=[];for(let i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row body-row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>{e.isConnected&&e._cells&&(e._cells=[...e._cells])})),this.__afterCreateScrollerRowsDebouncer=Cs.debounce(this.__afterCreateScrollerRowsDebouncer,fs,(()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()})),t}_createCell(e,t){const i=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,s=document.createElement("vaadin-grid-cell-content");s.setAttribute("slot",i);const r=document.createElement(e);r.id=i.replace("-content-","-"),r.setAttribute("role","td"===e?"gridcell":"columnheader"),hr||_r||(r.addEventListener("mouseenter",(e=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(e)})),r.addEventListener("mouseleave",(()=>{this._hideTooltip()})),r.addEventListener("mousedown",(()=>{this._hideTooltip(!0)})));const o=document.createElement("slot");if(o.setAttribute("name",i),t&&t._focusButtonMode){const e=document.createElement("div");e.setAttribute("role","button"),e.setAttribute("tabindex","-1"),r.appendChild(e),r._focusButton=e,r.focus=function(){r._focusButton.focus()},e.appendChild(o)}else r.setAttribute("tabindex","-1"),r.appendChild(o);return r._content=s,s.addEventListener("mousedown",(()=>{if(cr){const e=t=>{const i=s.contains(this.getRootNode().activeElement),o=t.composedPath().includes(s);!i&&o&&r.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{s.contains(this.getRootNode().activeElement)||r.focus()}))})),r}_updateRow(e,t,i="body",s=!1,r=!1){const o=document.createDocumentFragment();Ms(e,(e=>{e._vacant=!0})),e.innerHTML="","body"===i&&(e.__cells=[],e.__detailsCell=null),t.filter((e=>!e.hidden)).forEach(((t,n,a)=>{let l;if("body"===i){if(t._cells||(t._cells=[]),l=t._cells.find((e=>e._vacant)),l||(l=this._createCell("td",t),t._cells.push(l)),l.setAttribute("part","cell body-cell"),l.__parentRow=e,e.__cells.push(l),t._bodyContentHidden||e.appendChild(l),e===this.$.sizer&&(t._sizerCell=l),n===a.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const t=this._detailsCells.find((e=>e._vacant))||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||o.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),e.__detailsCell=t,this._a11ySetRowDetailsCell(e,t),t._vacant=!1}r||(t._cells=[...t._cells])}else{const r="header"===i?"th":"td";s||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(r),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells||(t._emptyCells=[]),l=t._emptyCells.find((e=>e._vacant))||this._createCell(r),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.part.add("cell",`${i}-cell`)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t})),"body"!==i&&this.__debounceUpdateHeaderFooterRowVisibility(e),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__debounceUpdateHeaderFooterRowVisibility(e){e.__debounceUpdateHeaderFooterRowVisibility=Cs.debounce(e.__debounceUpdateHeaderFooterRowVisibility,bs,(()=>this.__updateHeaderFooterRowVisibility(e)))}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer)return!0;return!1}));e.hidden!==!t.length&&(e.hidden=!t.length),this._resetKeyboardNavigation()}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._updateRowOrderParts(e,t),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(e,t=e.index){Vs(e,{first:0===t,last:t===this._flatSize-1,odd:t%2!=0,even:t%2==0})}_updateRowStateParts(e,{expanded:t,selected:i,detailsOpened:s}){Vs(e,{expanded:t,collapsed:this.__isRowExpandable(e),selected:i,"details-opened":s})}_renderColumnTree(e){for(Ls(this.$.items,(t=>{this._updateRow(t,e[e.length-1],"body",!1,!0);const i=this.__getRowModel(t);this._updateRowOrderParts(t),this._updateRowStateParts(t,i),this._filterDragAndDrop(t,i)}));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Ls(this.$.header,((t,i,s)=>{this._updateRow(t,e[i],"header",i===e.length-1);const r=Ds(t);Bs(r,"first-header-row-cell",0===i),Bs(r,"last-header-row-cell",i===s.length-1)})),Ls(this.$.footer,((t,i,s)=>{this._updateRow(t,e[e.length-1-i],"footer",0===i);const r=Ds(t);Bs(r,"first-footer-row-cell",0===i),Bs(r,"last-footer-row-cell",i===s.length-1)})),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleDetailsCell(e,i.detailsOpened),this._a11yUpdateRowLevel(e,i.level),this._a11yUpdateRowSelected(e,i.selected),this._updateRowStateParts(e,i),this._generateCellClassNames(e,i),this._generateCellPartNames(e,i),this._filterDragAndDrop(e,i),Ls(e,(e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}})),this._updateDetailsCellHeight(e),this._a11yUpdateRowExpanded(e,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(e.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame((()=>{this.__scrollToPendingIndexes()})))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(e._item)}}_showTooltip(e){const t=this._tooltipController.node;t&&t.isConnected&&(this._tooltipController.setTarget(e.target),this._tooltipController.setContext(this.getEventContext(e)),t._stateController.open({focus:"focusin"===e.type,hover:"mouseenter"===e.type}))}_hideTooltip(e){const t=this._tooltipController&&this._tooltipController.node;t&&t._stateController.close(e)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach((e=>{e.forEach((e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()}))}))}__updateVisibleRows(e,t){this.__virtualizer&&this.__virtualizer.update(e,t)}};Ye("vaadin-grid",G`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`,{moduleId:"vaadin-grid-styles"}),M(class extends(Wo(ir(Xe(Zs(cs))))){static get template(){return ds`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}});const qo=e=>class extends(qs(e)){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(e)&&this._updateFlexAndWidth(),"frozen"!==e||this.frozen||(this.frozen=t),"lastFrozen"!==e||this._lastFrozen||(this._lastFrozen=t),"frozenToEnd"!==e||this.frozenToEnd||(this.frozenToEnd=t),"firstFrozenToEnd"!==e||this._firstFrozenToEnd||(this._firstFrozenToEnd=t)}_groupOrderChanged(e,t){if(t){const i=t.slice(0);if(!e)return void i.forEach((e=>{e._order=0}));const s=10**(/(0+)$/u.exec(e).pop().length-(1+~~(Math.log(t.length)/Math.LN10)));i[0]&&i[0]._order&&i.sort(((e,t)=>e._order-t._order)),js(i,s,e)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>{t._reorderStatus=e}))}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>{t.resizable=e}))}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,(e=>!e.hidden)),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const e=this._visibleChildColumns.reduce(((e,t)=>e+` + ${(t.width||"0px").replace("calc","")}`),"").substring(3);this._setWidth(`calc(${e})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,((e,t)=>e+t.flexGrow),0))}}__scheduleAutoFreezeWarning(e,t){if(this._grid){const i=t.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=e[0][t]||e[0].hasAttribute(i);e.every((e=>(e[t]||e.hasAttribute(i))===s))||(this._grid.__autoFreezeWarningDebouncer=Cs.debounce(this._grid.__autoFreezeWarningDebouncer,fs,(()=>{console.warn(`WARNING: Joining ${t} and non-${t} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${t}. Otherwise, exclude the ${t} columns from the joined group.`)})))}}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&(this.__scheduleAutoFreezeWarning(t,"frozen"),Array.from(t).forEach((t=>{t.frozen=e})))}_groupFrozenToEndChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&(this.__scheduleAutoFreezeWarning(t,"frozenToEnd"),Array.from(t).forEach((t=>{t.frozenToEnd=e})))}_groupHiddenChanged(e){(e||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const e=this._autoHidden;this._autoHidden=0===(this._visibleChildColumns||[]).length,(e||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach((e=>{e.hidden=this.hidden}))}_colSpanChanged(e,t,i){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),i&&(i.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(i,e))}_getChildColumns(e){return Ws.getColumns(e)}_addNodeObserver(){this._observer=new Ws(this,(()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()})),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};class Yo extends(qo(cs)){static get is(){return"vaadin-grid-column-group"}}M(Yo);const Zo=xt((e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((e=>{this._delegateAttribute(e,this[e])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((e=>{this._delegateProperty(e,this[e])}))}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach(((t,i)=>{this._delegateAttribute(t,e[i])}))}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach(((t,i)=>{this._delegateProperty(t,e[i])}))}_delegateAttribute(e,t){this.stateTarget&&("invalid"===e&&this._delegateAttribute("aria-invalid",!!t&&"true"),"boolean"==typeof t?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}})),Ko=xt((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}})),Qo=xt((e=>class extends(Zo(nr(Ko(e)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}}));class Jo extends br{constructor(e,t){super(e,"input","input",{initializer:(e,i)=>{i.value&&(e.value=i.value),i.type&&e.setAttribute("type",i.type),e.id=this.defaultId,"function"==typeof t&&t(e)},useUniqueId:!0})}}class Xo extends br{constructor(e,t,i,s={}){super(e,t,i,{...s,useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((e=>{e.forEach((e=>{const t=e.target,i=t===this.node;"attributes"===e.type?i&&this.__updateNodeId(t):(i||t.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return!!e&&(e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&""!==e.textContent.trim())}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType!==Node.ELEMENT_NODE||this.multiple&&!t||e.id||(e.id=this.defaultId)}}class en extends Xo{constructor(e){super(e,"label","label")}setLabel(e){this.label=e,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&""!==e.trim()){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}const tn=xt((e=>class extends(Zs(e)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new en(this),this._labelController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-label",e.detail.hasContent)}))}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}}));class sn{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",(e=>{this.__initLabel(e.detail.node)})),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}const rn=e=>class extends(tn(Qo(Lo(No(e))))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Jo(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new sn(this.inputElement,this._labelController))}_shouldSetActive(e){return"a"!==e.target.localName&&super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};Ye("vaadin-checkbox",G`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`,{moduleId:"vaadin-checkbox-styles"});class on extends(rn(ir(Xe(cs)))){static get is(){return"vaadin-checkbox"}static get template(){return ds`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new vr(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}M(on);const nn=e=>class extends e{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let i=e.firstElementChild;i||(i=document.createElement("vaadin-checkbox"),i.setAttribute("aria-label","Select All"),i.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(i),i.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const s=this.__isChecked(this.selectAll,this._indeterminate);i.__rendererChecked=s,i.checked=s,i.hidden=this._selectAllHidden,i.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:i,selected:s}){let r=e.firstElementChild;r||(r=document.createElement("vaadin-checkbox"),r.setAttribute("aria-label","Select Row"),e.appendChild(r),r.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),so(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),r.__item=i,r.__rendererChecked=s,r.checked=s}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,"start"===e.detail.state){const t=this._grid._getRenderedRows().find((t=>t.contains(e.currentTarget.assignedSlot)));this.__selectOnDrag=!this._grid._isSelected(t._item),this.__dragStartIndex=t.index,this.__dragStartItem=t._item,this.__dragAutoScroller()}else"end"===e.detail.state&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout((()=>{this.__dragStartIndex=void 0})))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){void 0!==this.__dragStartIndex&&e.preventDefault()}__dragAutoScroller(){if(void 0===this.__dragStartIndex)return;const e=this._grid._getRenderedRows(),t=e.find((e=>{const t=e.getBoundingClientRect();return this.__dragCurrentY>=t.top&&this.__dragCurrentY<=t.bottom}));let i=t?t.index:void 0;const s=this.__getScrollableArea();this.__dragCurrentY<s.top?i=this._grid._firstVisibleIndex:this.__dragCurrentY>s.bottom&&(i=this._grid._lastVisibleIndex),void 0!==i&&e.forEach((e=>{(i>this.__dragStartIndex&&e.index>=this.__dragStartIndex&&e.index<=i||i<this.__dragStartIndex&&e.index<=this.__dragStartIndex&&e.index>=i)&&(this.__selectOnDrag?this._selectItem(e._item):this._deselectItem(e._item),this.__dragStartItem=void 0)}));const r=.15*s.height;if(this.__dragDy<0&&this.__dragCurrentY<s.top+r){const e=s.top+r-this.__dragCurrentY,t=Math.min(1,e/r);this._grid.$.table.scrollTop-=10*t}if(this.__dragDy>0&&this.__dragCurrentY>s.bottom-r){const e=this.__dragCurrentY-(s.bottom-r),t=Math.min(1,e/r);this._grid.$.table.scrollTop+=10*t}setTimeout((()=>this.__dragAutoScroller()),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),i=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-i.height,left:e.left,right:e.right,height:e.height-t.height-i.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}},an=e=>class extends(nn(e)){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super(),this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this),this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}__onSelectAllChanged(e){void 0!==e&&this._grid&&(this.__selectAllInitialized?this._selectAllChangeLock||(e&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray((e=>{this._grid.selectedItems=e})):this._grid.selectedItems=[]):this.__selectAllInitialized=!0)}__arrayContains(e,t){return Array.isArray(e)&&Array.isArray(t)&&t.every((t=>e.includes(t)))}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(e){this._grid.selectItem(e)}_deselectItem(e){this._grid.deselectItem(e)}__onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this.__previousActiveItem;e&&this._grid._toggleItem(e)}this.__previousActiveItem=t}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0,this.__hasArrayDataProvider()&&this.__withFilteredItemsArray((e=>{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,e)?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)})),this._selectAllChangeLock=!1}__onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(e){const t={page:0,pageSize:1/0,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(t,(t=>e(t)))}};class ln extends(an(Ys)){static get is(){return"vaadin-grid-selection-column"}}M(ln),Ye("vaadin-grid-sorter",G`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const dn=document.createElement("template");dn.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(dn.content),Ye("vaadin-grid-sorter",G`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const hn=e=>class extends e{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){!1!==t&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:Boolean(this._shiftClick),fromSorterClick:Boolean(this._fromSorterClick)},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}};class cn extends(hn(Xe(Ps(cs)))){static get template(){return ds`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}M(cn);let un=class extends E{constructor(e){super(e),this.cellClassNameGenerator=null,this.cellPartNameGenerator=e=>this.findColumn(e?.path)?.invalid?"invalid":"",this.columnReorderingEnabled=!0,this.columns=new i,this.dataProvider=async(e,t)=>{const{store:i}=this;t&&(i?t(await i.fetchItems(e)):t&&t([]))},this.multiSortEnabled=!1,this.pageSize=50,this.rowDetailsRenderer=null,this.store=null}get highlightIds(){return this._get("highlightIds")||new i}set highlightIds(e){Array.isArray(e)?this._set("highlightIds",new i(e)):this._set("highlightIds",e)}get size(){return this.store?.count||0}get state(){const{store:e}=this;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"loaded"===e.state?"loaded":"ready":"disabled"}closeColumnMenus(){this.columns?.forEach((e=>{e.menu&&e.menu.open&&e.menu.set("open",!1)}))}sortColumn(e,t){if(!e)return;const i=this.findColumn(e);i&&(i.direction=t)}hideColumn(e){const t=this.findColumn(e);!1===t?.hidden&&(t.hidden=!0)}showColumn(e){const t=this.findColumn(e);t?.hidden&&(t.hidden=!1)}showAllColumns(){this.columns?.forEach((e=>{e.hidden&&(e.hidden=!1)}))}findColumn(e){const t=[];return this.columns.forEach((e=>{t.push(e),"columns"in e&&e.columns?.forEach((e=>t.push(e)))})),t.find((t=>t.path===e))}getRowItemAt(e){return this.store?.getLocalItemAt(e)}refresh(){this.store&&(this.store.reset(),this.store.load())}};e([d()],un.prototype,"cellClassNameGenerator",void 0),e([d()],un.prototype,"cellPartNameGenerator",void 0),e([d()],un.prototype,"columnReorderingEnabled",void 0),e([d()],un.prototype,"columns",void 0),e([d()],un.prototype,"dataProvider",void 0),e([d()],un.prototype,"highlightIds",null),e([d()],un.prototype,"multiSortEnabled",void 0),e([d()],un.prototype,"pageSize",void 0),e([d()],un.prototype,"rowDetailsRenderer",void 0),e([d({readOnly:!0})],un.prototype,"size",null),e([d()],un.prototype,"store",void 0),e([d({readOnly:!0})],un.prototype,"state",null),un=e([m("esri.widgets.FeatureTable.Grid.GridViewModel")],un);const pn=un,_n={selectionColumn:!0,columnMenus:!0},mn="esri-grid",gn={base:mn,content:`${mn}__content`,grid:`${mn}__grid`,noColumnMenu:`${mn}--no-column-menu`};let fn=class extends x{constructor(e,t){super(e,t),this._grid=null,this._columnElements=[],this.itemIdPath=null,this.messages=null,this.viewModel=new pn,this.visibleElements={..._n}}initialize(){this.addHandles([this.columns.on("change",(()=>this.onColumnChange())),a((()=>this.viewModel?.size),(()=>this._updateGridSize())),a((()=>this.store?.state),((e,t)=>{"ready"!==e||"loaded"!==t&&"error"!==t||this.refreshPageCache()})),l((()=>this._grid?.$?.table),"scroll",(()=>this.viewModel?.closeColumnMenus()))])}destroy(){this.resetColumns(),this.columns?.destroy()}resetColumns(){this.columns.items.forEach((e=>e.destroy())),this.columns.removeAll()}get cellClassNameGenerator(){return this.viewModel.cellClassNameGenerator}set cellClassNameGenerator(e){this.viewModel.cellClassNameGenerator=e}get cellPartNameGenerator(){return this.viewModel.cellPartNameGenerator}set cellPartNameGenerator(e){this.viewModel.cellPartNameGenerator=e}get columns(){return this.viewModel.columns}set columns(e){this.viewModel.columns=e}get columnReorderingEnabled(){return this.viewModel.columnReorderingEnabled}set columnReorderingEnabled(e){this.viewModel.columnReorderingEnabled=e}get dataProvider(){return this.viewModel.dataProvider}set dataProvider(e){this.viewModel.dataProvider=e}get highlightIds(){return this.viewModel.highlightIds}set highlightIds(e){this.viewModel.highlightIds=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get multiSortEnabled(){return this.viewModel.multiSortEnabled}set multiSortEnabled(e){this.viewModel.multiSortEnabled=e}get pageSize(){return this.viewModel.pageSize}set pageSize(e){this.viewModel.pageSize=e}get rowDetailsRenderer(){return this.viewModel.rowDetailsRenderer}set rowDetailsRenderer(e){this.viewModel.rowDetailsRenderer=e}get size(){return this.viewModel.size}get sortOrders(){return this._grid?._sorters?this._grid._sorters.filter((e=>!!e&&e.path)).map((({direction:e,path:t})=>({direction:e,path:t}))):[]}get store(){return this.viewModel.store}set store(e){this.viewModel.store=e}castVisibleElements(e){return{..._n,...e}}getColumnProps(e,t){const{id:i}=this,{autoWidth:s,direction:r,flexGrow:o,frozen:n,frozenToEnd:a,header:l,hidden:d,invalid:h,path:c,resizable:u,textAlign:p,width:_}=e,m=`${i}_${l}_${t??c}`,{renderFunction:g,footerRenderFunction:f,headerRenderFunction:y}=e,b=f?(e,t)=>f({root:e,column:t}):void 0,v=y?(e,t)=>y({root:e,column:t}):void 0,C=g?(e,t,i)=>g({root:e,column:t,rowData:i}):void 0;return{footerRenderer:b,headerRenderer:v,renderer:C,autoWidth:s,direction:r,flexGrow:o,frozen:n,frozenToEnd:a,header:l,hidden:d,key:m,path:c,resizable:u,bind:this,headerPartName:h?"invalid":void 0,"text-align":p,width:"number"==typeof _?`${_}px`:_,afterCreate:this._afterColumnCreate,afterRemoved:this._afterColumnRemoved}}clearSelection(){this._clearSelection(),this.scheduleRender()}clearSort(){let e=!1;this._grid&&(this._grid._sorters?.length&&(this._grid._sorters.forEach((e=>{e._order=null,e.direction=null})),e=!0),this.columns?.length&&this.columns.some((e=>!!e.direction))&&(this.columns.forEach((e=>e.direction=null)),e=!0),e&&(this.notifyChange("sortOrders"),this.scheduleRender()))}findColumn(e){this.viewModel.findColumn(e)}generateCellClassNames(){this._grid?.generateCellClassNames()}getSlotElementByName(e){return this._grid?.shadowRoot?.querySelector(`slot[name='${e}']`)??null}hideColumn(e){this.viewModel?.hideColumn(e)}recalculateColumnWidths(){this._grid?.recalculateColumnWidths()}async reset(){this._clearSelection(),await(this.store?.reset()),this.scrollToTop()}refreshPageCache(){this._grid?.clearCache()}selectRows(e){const t=e?.filter((e=>!this.highlightIds.includes(e.objectId))),i=t.map((e=>e.objectId));i.length&&this.highlightIds.addMany(i)}deselectRows(e){const t=e?.map((e=>e.objectId))||[];t.length&&this.highlightIds.removeMany(t)}showColumn(e){this.viewModel?.showColumn(e)}sort({path:e,direction:t}){this.viewModel?.sortColumn(e,t),this.notifyChange("sortOrders")}scrollToIndex(e){this._grid?.scrollToIndex(e)}scrollToTop(){this._grid?.scrollToIndex(0)}isEditingActive(){return!!this._getActiveEditInfo().length}onColumnChange(){this._columnElements.forEach((e=>{this._applyRenderersToColumnElement(e)})),this._grid?.requestContentUpdate()}render(){const{columnMenus:e}=this.visibleElements;return P("div",{bind:this,class:this.classes(gn.base,S.widget,{[gn.noColumnMenu]:!e})},P("div",{bind:this,class:gn.content},this._renderGrid()))}_renderGrid(){const e=this.highlightIds.map((e=>this.store?.getLocalItemByKey(e)||{objectId:e})).toArray();return P("vaadin-grid",{afterCreate:this._afterGridCreate,afterUpdate:this._afterGridUpdate,bind:this,cellClassNameGenerator:this.cellClassNameGenerator,cellPartNameGenerator:this.cellPartNameGenerator,class:gn.grid,columnReorderingAllowed:this.columnReorderingEnabled,dataProvider:this.dataProvider,id:`${this.id}_grid`,itemIdPath:this.itemIdPath,multiSort:this.multiSortEnabled,pageSize:this.pageSize,ref:"grid",rowDetailsRenderer:this.rowDetailsRenderer,selectedItems:e,size:this.size},this._renderAllColumns())}_renderAllColumns(){return"disabled"!==this.viewModel.state&&this.columns?.length?[this._renderSelectionColumn(),this._renderColumns()]:null}_renderSelectionColumn(){return P("vaadin-grid-selection-column",{_selectAllHidden:!0,bind:this,dragSelect:!0,frozen:!0,hidden:!this.visibleElements.selectionColumn,selectAll:!1,sortable:!1,textAlign:"center"})}_renderColumns(){return this.columns.items.map(((e,t)=>"columns"in e?this._renderGroupColumn(e,t):P("vaadin-grid-column",{...this.getColumnProps(e,t)}))).filter(h)}_renderGroupColumn(e,t){const i=this.getColumnProps(e,t);if(i.hidden||!e.columns)return null;const s=e.columns.filter((({hidden:e})=>!e));return s.length?P("vaadin-grid-column-group",{...i},s.map((e=>P("vaadin-grid-column",{...this.getColumnProps(e,t)})))):null}_afterGridCreate(e){const t=this._grid=e;t.setAttribute("theme","compact column-borders"),customElements.whenDefined("vaadin-grid").then((()=>this._addGridEventListeners())),t.__updateSorter=e=>{const i=t._sorters,s=!i.includes(e);if(e.direction||!s)if(e._order=null,t.multiSort)t._removeArrayItem(i,e),e.direction&&(null!=e._initialOrder?(s?i[e._initialOrder]=e:i.splice(e._initialOrder,0,e),e._initialOrder=null):i.unshift(e)),t.__updateSortOrders();else if(e.direction){const s=i.filter((t=>t!==e));t._sorters=[e],s.forEach((e=>{e._order=null,e.direction=null}))}}}_afterGridUpdate(e){this._grid||(this._grid=e)}_afterColumnCreate(e){this._columnElements.push(e)}_afterColumnRemoved(e){const t=this._columnElements.indexOf(e,0);t>-1&&this._columnElements.splice(t,1)}_updateGridSize(){this._grid&&(this._grid.size=this.size||0,this.scheduleRender())}_getActiveEditInfo(){return!this.columns||this.columns.length?[]:this.columns.filter((e=>"activeEditInfo"in e)).map((e=>e.activeEditInfo)).items}_addGridEventListeners(){const e=this._grid;w(e),this.addHandles([r(e,"click",(e=>this._onRowClick(e))),r(e,"selected-items-changed",(e=>this._onSelectedItemsChange(e))),r(e,"sorter-changed",(()=>this.notifyChange("sortOrders")))])}_onRowClick(e){const t=this._grid;w(t);const i=t.getEventContext(e),{item:s,section:r}=i;s&&r&&"details"!==r&&"header"!==r&&this.emit("row-click",{context:i,native:e})}_clearSelection(){this.highlightIds.removeAll()}_onSelectedItemsChange(e){const{highlightIds:t}=this,i=e.detail.value.map((e=>e.objectId)),s=i.filter((e=>!t.includes(e))),r=t.filter((e=>!i.includes(e)));t.removeMany(r),t.addMany(s)}_applyRenderersToColumnElement(e){const t=e?.path,i=null!=t?this.viewModel.findColumn(t):void 0;if(i)try{const{renderFunction:t,footerRenderFunction:s,headerRenderFunction:r}=i;t&&"renderer"in e&&(e.renderer=(e,i,s)=>t({root:e,column:i,rowData:s})),s&&(e.footerRenderer=(e,t)=>s({root:e,column:t})),r&&(e.headerRenderer=(e,t)=>r({root:e,column:t}))}catch(e){}}};e([d()],fn.prototype,"_grid",void 0),e([d()],fn.prototype,"cellClassNameGenerator",null),e([d()],fn.prototype,"cellPartNameGenerator",null),e([d()],fn.prototype,"columns",null),e([d()],fn.prototype,"columnReorderingEnabled",null),e([d()],fn.prototype,"dataProvider",null),e([d()],fn.prototype,"highlightIds",null),e([d()],fn.prototype,"itemIdPath",void 0),e([d()],fn.prototype,"label",null),e([d(),I("esri/widgets/FeatureTable/t9n/FeatureTable")],fn.prototype,"messages",void 0),e([d()],fn.prototype,"multiSortEnabled",null),e([d()],fn.prototype,"pageSize",null),e([d()],fn.prototype,"rowDetailsRenderer",null),e([d()],fn.prototype,"size",null),e([d({readOnly:!0})],fn.prototype,"sortOrders",null),e([d()],fn.prototype,"store",null),e([d()],fn.prototype,"viewModel",void 0),e([d()],fn.prototype,"visibleElements",void 0),e([A("visibleElements")],fn.prototype,"castVisibleElements",null),fn=e([m("esri.widgets.FeatureTable.Grid.Grid")],fn);const yn=fn,bn="esri.widgets.FeatureTable.support.FeatureStore";function vn(e,t,i){_.getLogger(bn).error(new z(e,t,i))}let Cn=class extends E{constructor(e){super(e),this._loaded=!1,this._loadError=!1,this._loading=!1,this._editOperationQueue=[],this._queryOperationQueue=[],this._objectIdCache=new i,this._hasStaleCache=!1,this.count=0,this.failures=new i,this.itemCache=new i,this.relatedRecordsEnabled=!1}destroy(){this.layer=null,this.itemCache?.destroy(),this.failures?.destroy(),this._set("itemCache",null)}set attachmentsEnabled(e){this._reset(),this._set("attachmentsEnabled",e),this.notifyChange("state")}set filterGeometry(e){this._reset(),this._set("filterGeometry",e),this.notifyChange("state")}set layer(e){this._reset(),this._set("layer",e),this.notifyChange("state")}set objectIds(e){this._reset(),this._set("objectIds",e||null),this.notifyChange("state")}get orderByFields(){return this._get("orderByFields")||[]}set orderByFields(e){const t=this.orderByFields;c(e,t)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",e))}get querying(){return this._queryOperationQueue.length>0}set returnGeometry(e){this._reset(),this._set("returnGeometry",e),this.notifyChange("state")}get state(){const{layer:e,_loaded:t,_loadError:i,_loading:s}=this;return i?"error":!e||e.loadError?"disabled":s?"loading":"loaded"===e.loadStatus&&t?"loaded":"ready"}get syncing(){return this._editOperationQueue.length>0}set timeExtent(e){this._reset(),this._set("timeExtent",e),this.notifyChange("state")}get where(){return this._get("where")||null}set where(e){this._reset(),this._set("where",e),this.notifyChange("state")}async load(){this._reset();const{layer:e}=this;if(e){this._loading=!0,this.notifyChange("state");try{await e.when(),await this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(e){throw this._reset(),this._loadError=!0,this.notifyChange("state"),vn("store:load-error","An error occurred.",{error:e}),e}}}async refreshLayerInfo(){return this._syncLayerInfo()}async addItems(e){}async fetchItems(e){const{page:t,pageSize:i}=e,s=t*i,r=s+i,{layer:o,state:n}=this;if(!o||"loaded"!==n)return[];this.notifyChange("querying");const a=await this._query({start:s,num:r,page:t,pageSize:i});return this.notifyChange("state"),a}async verifyFeaturesByObjectId(e){const{layer:t,state:i}=this;if(!t||"loaded"!==i)return[];const{features:s}=await this._verifyFeaturesByObjectId(e);return e.map((e=>s.some((t=>t?.getObjectId()===e))))}async query(e){const{layer:t,state:i}=this;if(!t||"loaded"!==i)return[];this.notifyChange("querying");const s=await this._query(e);return this.notifyChange("state"),s}async removeItemAt(e){}async reset(){this._reset()}async updateItem(e){return this._update(e).then((()=>{}))}async deleteRowsByObjectId(e){const{layer:t}=this,{operations:i}=O(t);if(!i.supportsDelete||!("applyEdits"in t))throw new z("store:delete-error","Delete is not supported.");const s=e.map((e=>this.getItemByObjectId(e)?.feature)).filter(h);return this._queueEditOperation((()=>t.applyEdits({deleteFeatures:s})))}getLocalItemByKey(e){return this.getItemByObjectId(e)}getItemByObjectId(e){const{itemCache:t,layer:{objectIdField:i}}=this;return t.find((t=>t.feature?.attributes[i]===e))}getLocalItemAt(e){return this.itemCache.at(e)}at(e){return Promise.resolve(this.itemCache.at(e))}getObjectIdIndex(e){const{itemCache:t,layer:{objectIdField:i}}=this;return t.findIndex((t=>t.feature?.attributes[i]===e))}_reset(){this.itemCache.removeAll(),this.failures.removeAll(),this._editOperationQueue=[],this._queryOperationQueue=[],this._hasStaleCache=!1,this._loading=!1,this._loaded=!1,this._loadError=!1,this._set("count",0),this._objectIdCache.removeAll(),this.notifyChange("querying"),this.notifyChange("syncing"),this.notifyChange("state")}_getIdsFromFeatures(e){return e.map((e=>e.attributes[this.layer.objectIdField]))}_toFeatureData(e,t){const{layer:{objectIdField:i}}=this;return e.map((e=>{const{attributes:s}=e,r=s[i];return{objectId:r,feature:e,attachments:t?t[r]:null,relatedRecords:null}}))}async _update(e){const{layer:i}=this,{operations:s}=O(i);if(!s.supportsUpdate||!("applyEdits"in i))throw new z("store:update-error","Update is not supported.");const{index:r,name:o,value:n}=e,a=await this.at(r);if(!a?.feature)throw new z("store:update-error","Feature with provided 'objectId' not found.");const{feature:l}=a,d=u(l.attributes);d[o]=n;const h=new t({attributes:d}),c=i.applyEdits({updateFeatures:[h]}).then((e=>{const{updateFeatureResults:t}=e,i=t.find((e=>!!e.error));if(i)throw i.error;return t.length&&(l.attributes=d),e}));return this._queueEditOperation((()=>c))}async _query(e){const{refresh:t}=e;return!0===t?(this.itemCache.removeAll(),this._syncLayerInfo().then((()=>this._queryFeatureData(e)))):(this._hasStaleCache&&(await this._updateIds(),this._hasStaleCache=!1),this._queryFeatureData(e))}async _queryFeatureData(e){return this._queueQueryOperation((async()=>{const{features:t}=await this._queryFeatures(e),i=this._getIdsFromFeatures(t),s=await this._queryAttachments(i);return this._toFeatureData(t,s)||[]}))}async _syncLayerInfo(){await this._updateCount(),await this._updateIds()}async _updateCount(){await this._queryCount().then((e=>this._set("count",e)))}async _updateIds(){this.layer?.capabilities?.query?.supportsPagination||(this._objectIdCache.removeAll(),await this._queryForObjectIds().then((e=>this._objectIdCache.addMany(e))))}_queryCount(){const{filterGeometry:e,layer:t}=this,i=t.capabilities?.query?.supportsCacheHint,s=t.createQuery();return s.geometry=e,s.returnGeometry=!1,s.where=this._getWhere(),s.timeExtent=this._getTimeExtent(),s.objectIds=this.objectIds,i&&(s.cacheHint=!0),t.queryFeatureCount(s)}_queryForObjectIds(){const{filterGeometry:e,layer:t,orderByFields:i}=this,s=t.capabilities?.query,r=s?.supportsCacheHint,o=s?.supportsOrderBy,n=t.createQuery();return n.geometry=e,n.outFields=[t.objectIdField],n.returnGeometry=!1,n.where=this._getWhere(),n.timeExtent=this._getTimeExtent(),n.objectIds=this.objectIds,o&&(n.orderByFields=i),r&&(n.cacheHint=!0),t.queryObjectIds(n)}async _queryFeatures(e){const{layer:t}=this;if(!O(t)?.operations.supportsQuery)throw new z("store:query-error","Layer does not support query operation.");const{filterGeometry:i,orderByFields:s,returnGeometry:r}=this,o=this.layer?.capabilities?.query,{start:n,pageSize:a}=e,l=t.createQuery();return l.returnGeometry=r,o?.supportsPagination?(l.start=n,l.num=a,l.where=this._getWhere(),l.timeExtent=this._getTimeExtent(),l.objectIds=this.objectIds):l.objectIds=this.objectIds||this._getObjectIdsForPage(n,a??0),o?.supportsOrderBy&&(l.orderByFields=s),i&&(l.geometry=i),o?.supportsCacheHint&&(l.cacheHint=!0),t.queryFeatures(l)}async _verifyFeaturesByObjectId(e){const{layer:t}=this;if(!O(t)?.operations.supportsQuery)throw new z("store:query-error","Layer does not support query operation.");const{orderByFields:i}=this,s=this.layer?.capabilities?.query,r=t.createQuery();return r.where=this._getWhere(),r.timeExtent=this._getTimeExtent(),r.returnGeometry=!1,r.objectIds=e,r.outFields=[t.objectIdField],s?.supportsOrderBy&&(r.orderByFields=i),s?.supportsCacheHint&&(r.cacheHint=!0),t.queryFeatures(r)}_getObjectIdsForPage(e,t){const i=this._objectIdCache.toArray();return i.length>=e+t?i.slice(e,e+t):i.slice(e)}_queryAttachments(e){const{attachmentsEnabled:t,layer:i}=this,{capabilities:s}=i,r=s?.data.supportsAttachment,o=s?.operations?.supportsQueryAttachments;return t&&r&&o&&"queryAttachments"in i?i.queryAttachments(new k({objectIds:e,where:this._getWhere()})):Promise.resolve(null)}_syncLocalCache(e){e.forEach((e=>{if(e.feature){const t=e.feature.getObjectId();if(null!=t){const i=this.getObjectIdIndex(t);-1===i?this.itemCache.add(e):this.itemCache.splice(i,1,e)}}}))}_queueQueryOperation(e){return this._queryOperationQueue.push(e),this.notifyChange("querying"),e().then((t=>this._queryOperationQueue.includes(e)?(this._syncLocalCache(t),t):[])).catch((t=>{vn("store:query-error","An error occurred.",{error:t});const i={error:t,retry:()=>{this.failures.remove(i),this._queueQueryOperation(e)},cancel:()=>this.failures.remove(i)};return this.failures.add(i),[]})).then((t=>(p(this._queryOperationQueue,e),this.notifyChange("querying"),t)))}_queueEditOperation(e){return this._editOperationQueue.push(e),this.notifyChange("syncing"),e().then((t=>(p(this._editOperationQueue,e),this.notifyChange("syncing"),t))).catch((t=>{vn("store:edit-error","An error occurred.",{error:t});const i={error:t,retry:()=>{this.failures.remove(i),this._queueEditOperation(e)},cancel:()=>this.failures.remove(i)};throw this.failures.add(i),p(this._editOperationQueue,e),this.notifyChange("syncing"),t}))}_getWhere(){return this.where||this.layer?.definitionExpression||"1=1"}_getTimeExtent(){const e=this.layer;return this.timeExtent||e&&"timeExtent"in e&&e.timeExtent||null}};e([d()],Cn.prototype,"attachmentsEnabled",null),e([d({readOnly:!0})],Cn.prototype,"count",void 0),e([d({readOnly:!0})],Cn.prototype,"failures",void 0),e([d()],Cn.prototype,"filterGeometry",null),e([d({readOnly:!0})],Cn.prototype,"itemCache",void 0),e([d({value:null})],Cn.prototype,"layer",null),e([d({value:null})],Cn.prototype,"objectIds",null),e([d()],Cn.prototype,"orderByFields",null),e([d({readOnly:!0})],Cn.prototype,"querying",null),e([d()],Cn.prototype,"relatedRecordsEnabled",void 0),e([d({value:!1})],Cn.prototype,"returnGeometry",null),e([d({readOnly:!0})],Cn.prototype,"state",null),e([d({readOnly:!0})],Cn.prototype,"syncing",null),e([d()],Cn.prototype,"timeExtent",null),e([d()],Cn.prototype,"where",null),Cn=e([m(bn)],Cn);const wn=Cn;let An=class extends pn{constructor(e){super(e),this._debounceRefresh=o((()=>this._refresh())),this._highlights=new s,this.activeFilters=new i,this.attachmentsEnabled=!1,this.autoRefreshEnabled=!0,this.cellClassNameGenerator=(e,t)=>e.path||"",this.columns=new i,this.dataProvider=async(e,t)=>{const{store:i}=this,s=this._sortOrdersToLayerOrderByFields(e.sortOrders);t&&(i?(i.set({orderByFields:s}),"loaded"!==i.state&&"loading"!==i.state&&await i.load(),t&&t(await i.fetchItems(e))):t&&t([]))},this.editingEnabled=!1,this.grid=null,this.highlightEnabled=!0,this.itemIdPath="objectId",this.messagesCommon=null,this.messagesURIUtils=null,this.relatedRecordsEnabled=!1,this.returnGeometryEnabled=!1,this.store=null,this.tableTemplate=null,this.timeZone=null,this.view=null,this._onLayerRefresh=this._onLayerRefresh.bind(this),this._set("store",new wn),this._set("grid",new yn({itemIdPath:this.itemIdPath,viewModel:this}))}initialize(){const e=async()=>{this.messages=await N("esri/widgets/FeatureTable/t9n/FeatureTable"),this.messagesCommon=await N("esri/t9n/common"),this.messagesURIUtils=await N("esri/widgets/support/t9n/uriUtils")};e(),this.addHandles([R((()=>{e(),this._generateColumns()})),l((()=>this.highlightIds),"change",(e=>this._onHighlightIdsChange(e)),{onListenerAdd:()=>{this.highlightIds.forEach((e=>this._highlight(e)))},onListenerRemove:()=>{this.highlightIds.forEach((e=>this._removeHighlight(e)))}}),a((()=>this.attachmentsEnabled),(e=>{this.store.attachmentsEnabled=e,this.layer?.loaded&&this._generateColumns()})),a((()=>this.layerView),(e=>{this._highlights.removeAll(),e&&this.highlightEnabled&&this.highlightIds?.forEach((e=>this._highlight(e)))})),a((()=>this.highlightEnabled),(e=>{this._highlights.removeAll(),e&&this.highlightIds?.forEach((e=>this._highlight(e)))})),a((()=>this.relatedRecordsEnabled),(e=>this.store.relatedRecordsEnabled=e)),a((()=>this.returnGeometryEnabled),(e=>this.store.returnGeometry=e)),a((()=>this.layer?.loaded),(e=>e&&this._onLayerLoad())),a((()=>this.store.state),(e=>{"loaded"===e&&this.grid?.scrollToTop()})),a((()=>[this.messages,this.tableTemplate]),(()=>this.layer?.loaded&&this._generateColumns())),a((()=>[this.timeZone,this.view?.timeZone]),(()=>{this.columns.forEach((e=>{if("field"in e&&e.field){const{timeZone:t,timeZoneName:i}=this._getTimeZoneInfoForFieldColumn(e.field);e.set({timeZone:t,timeZoneName:i})}})),this.grid?.onColumnChange()})),a((()=>this.editingEnabled),(e=>{this.columns.forEach((t=>{"editingEnabled"in t&&(t.editingEnabled=e)})),this.grid?.onColumnChange()})),a((()=>this.layer?.definitionExpression),((e,t)=>(e||t)&&"loaded"===this.store.state&&this.reset())),a((()=>this.layer&&"timeExtent"in this.layer&&this.layer.timeExtent),((e,t)=>(e||t)&&!this.timeExtent&&"loaded"===this.store.state&&this.reset())),l((()=>this.layer),"refresh",(e=>this._onLayerRefresh(e)))])}destroy(){this._resetColumns(),this._highlights.removeAll(),this._highlights.destroy(),this.grid?.destroy(),this.columns?.destroy(),this.layer=null,this.view=null}get _defaultHiddenFields(){return g(this.layer)}get activeSortOrders(){return this.grid?.sortOrders?this.grid.sortOrders.map((({path:e,direction:t})=>({fieldName:e,direction:t}))).filter((e=>e.fieldName&&e.direction)):[]}set filterGeometry(e){if(!this.filterGeometry&&!e)return;const t=this.activeFilters.find((e=>"geometry"===e.type));t&&this.activeFilters.remove(t),this._set("filterGeometry",e),this.store.filterGeometry=e,e&&this.activeFilters.add({type:"geometry",geometry:e})}get hiddenFields(){return this._get("hiddenFields")??new i}set hiddenFields(e){Array.isArray(e)?this._set("hiddenFields",new i(e)):this._set("hiddenFields",e)}get highlightOnRowSelectEnabled(){return this.highlightEnabled}set highlightOnRowSelectEnabled(e){this.highlightEnabled=e}set layer(e){this._set("layer",e),this.grid?.clearSort(),this._resetColumns(),this.store.layer=e,e&&(e.loaded?this._onLayerLoad():e.load()),this.notifyChange("state")}get layerView(){return this.view?.allLayerViews.find((e=>e.layer===this.layer))||null}set messages(e){this.grid?.set("messages",e),this._set("messages",e)}get state(){const{store:e}=this;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"loaded"===e.state?"loaded":"ready":"disabled"}set timeExtent(e){this._set("timeExtent",e),this.store.timeExtent=e}clearHighlights(){this._highlights.removeAll()}clearSelection(){this.grid?.clearSelection()}async deleteSelection(){const e=this.highlightIds.toArray();if(!e?.length)return;const{deleteFeatureResults:t}=await this.store.deleteRowsByObjectId(e),i=t.filter((e=>!e.error)).map((e=>e.objectId));i.length&&(this.deselectRows(i),await this.refresh())}deselectRows(e){const t=this._getStoreItemsFromSelectionParams(e);this.grid?.deselectRows(t)}filterBySelection(){const e=this.highlightIds.toArray();e.length&&(this.clearSelectionFilter(),this.store.objectIds=e,this.activeFilters.add({type:"selection",objectIds:e}))}getObjectIdIndex(e){return this.store?.getObjectIdIndex(e)}getValue(e,t){const i=this.store.getItemByObjectId(e);return i?.feature?.attributes[t]}get highlightIds(){return this._get("highlightIds")||new i}set highlightIds(e){Array.isArray(e)?this._set("highlightIds",new i(e)):this._set("highlightIds",e)}async refresh(){return n(this._debounceRefresh())}reset(){this.grid?.reset()}selectRows(e){const t=this._getStoreItemsFromSelectionParams(e);return this.grid?.selectRows(t)}scrollToIndex(e){this.grid?.scrollToIndex(e)}clearSelectionFilter(){this.store.objectIds=null;const e=this.activeFilters.find((e=>"selection"===e.type));e&&this.activeFilters.remove(e)}async zoomToSelection(){const{layer:e,view:t}=this,i=this.highlightIds.toArray();if(!e||!t||!i.length)return;const s=e.createQuery();s.objectIds=i,s.returnGeometry=!0;const r=await e.queryFeatures(s);try{await t.goTo(r.features)}catch(e){"AbortError"!==e.name&&console.error(e)}}async _refresh(){await this.store.refreshLayerInfo();const e=this.highlightIds.toArray();e.length&&(await this.store.verifyFeaturesByObjectId(e)).forEach(((t,i)=>{t||this.deselectRows(e[i])})),this.grid?.refreshPageCache()}_onLayerLoad(){const e=this.layer.capabilities?.query.maxRecordCount;e&&e<this.pageSize&&this.grid&&(this.grid.pageSize=e),this._generateColumns()}_onLayerRefresh(e){this.autoRefreshEnabled&&e.dataChanged&&this.refresh()}_generateColumns(){this._resetColumns();const e=[],t=this.tableTemplate?.columnTemplates?this._generateColumnsFromTemplates(this.tableTemplate.columnTemplates):this._generateDefaultFieldColumns();e.push(...t),e.length&&this.attachmentsEnabled&&e.push(this._generateAttachmentsColumn()),this.columns.addMany([...e])}_generateColumnsFromTemplates(e){const{editingEnabled:t,grid:i,layer:s,messages:r,messagesCommon:o,messagesURIUtils:n,store:a,tableTemplate:l}=this,d=s?.fields??[],h=e=>{const t="fieldName"in e&&e.fieldName?.toLowerCase();return d.find((e=>t===e.name?.toLowerCase()))};return e.map((e=>({template:e,field:h(e)}))).filter((({template:e,field:t})=>null!=t||"group"===e.type&&"columnTemplates"in e||"column"===e.type)).map((({template:e,field:d})=>{if("fieldName"in e){const h=!1===e.visible||!0!==e.visible&&this._isFieldHidden(d?.name),{direction:c,formatFunction:u,initialSortPriority:p,invalid:_,menuConfig:m,sortable:g,textAlign:f}=e,y=l?.expressionInfos||null,{timeZone:b,timeZoneName:v}=this._getTimeZoneInfoForFieldColumn(d);return new C({sortable:!1!==g,direction:c,editingEnabled:t,expressionInfos:y,field:d,formatFunction:u,grid:i,hidden:h,initialSortPriority:p,invalid:_,layer:s,messages:r,messagesCommon:o,messagesURIUtils:n,menuConfig:m,store:a,template:e,textAlign:f,timeZone:b,timeZoneName:v})}if("group"===e.type&&"columnTemplates"in e){const t=this._generateColumnsFromTemplates(e.columnTemplates),i=!1===e.visible||!0!==e.visible&&this._isFieldHidden(e.label),{label:s}=e;return new T({header:s,columns:t,hidden:i})}return new v({...e,timeZone:this.timeZone})}))}_generateDefaultFieldColumns(){const{editingEnabled:e,grid:t,layer:i,messages:s,messagesCommon:r,messagesURIUtils:o,store:n}=this;return(this.layer?.fields??[]).map((a=>{const{timeZone:l,timeZoneName:d}=this._getTimeZoneInfoForFieldColumn(a);return new C({editingEnabled:e,field:a,grid:t,hidden:this._isFieldHidden(a.name),layer:i,store:n,messages:s,messagesCommon:r,messagesURIUtils:o,timeZone:l,timeZoneName:d})}))}_getTimeZoneInfoForFieldColumn(e){const{timeZone:t,view:i}=this;return!e||"date"!==e?.type&&"timestamp-offset"!==e?.type?{timeZone:void 0,timeZoneName:void 0}:f("preferredTimeZone"in this.layer?this.layer.preferredTimeZone:null,"datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,t??i?.timeZone??y,F("short-time"),e.type)}_generateAttachmentsColumn(){return new L({header:this.messages?.attachments??"Attachments"})}_sortOrdersToLayerOrderByFields(e){return e?.length?e.filter(((e,t,i)=>i.map((e=>e.path)).indexOf(e.path)===t)).filter((({direction:e})=>!!e)).map((({direction:e,path:t})=>t+" "+e?.toUpperCase())):[]}_isFieldHidden(e){const t=e?.toLowerCase();return(this.hiddenFields??this._defaultHiddenFields).some((e=>e.toLowerCase()===t))}_highlight(e){this.layerView&&b(this.layerView)&&this._highlights.add(this.layerView.highlight(e),e)}_removeHighlight(e){this._highlights.remove(e)}_getStoreItemsFromSelectionParams(e){const i=[];return(e=e instanceof Array?e:[e]).forEach((e=>{let s=e instanceof t?e:null;const r=s?s.getObjectId():e;if("number"==typeof r||"string"==typeof r){if(!s){const e=this.store.getItemByObjectId(r);e&&(s=e.feature)}i.push({objectId:r,feature:s})}})),i}_onHighlightIdsChange(e){const{highlightEnabled:t}=this,{added:i,removed:s}=e;t&&(i.forEach((e=>this._highlight(e))),s.forEach((e=>this._removeHighlight(e))))}_resetColumns(){this.columns.items.forEach((e=>e.destroy())),this.columns.removeAll()}};e([d()],An.prototype,"_defaultHiddenFields",null),e([d({readOnly:!0})],An.prototype,"activeFilters",void 0),e([d({readOnly:!0})],An.prototype,"activeSortOrders",null),e([d()],An.prototype,"attachmentsEnabled",void 0),e([d()],An.prototype,"autoRefreshEnabled",void 0),e([d()],An.prototype,"cellClassNameGenerator",void 0),e([d({readOnly:!0})],An.prototype,"columns",void 0),e([d()],An.prototype,"dataProvider",void 0),e([d()],An.prototype,"editingEnabled",void 0),e([d()],An.prototype,"filterGeometry",null),e([d({readOnly:!0})],An.prototype,"grid",void 0),e([d()],An.prototype,"hiddenFields",null),e([d()],An.prototype,"highlightEnabled",void 0),e([d()],An.prototype,"highlightOnRowSelectEnabled",null),e([d({readOnly:!0})],An.prototype,"itemIdPath",void 0),e([d()],An.prototype,"layer",null),e([d()],An.prototype,"layerView",null),e([d()],An.prototype,"messages",null),e([d(),I("esri/t9n/common")],An.prototype,"messagesCommon",void 0),e([d(),I("esri/widgets/support/t9n/uriUtils")],An.prototype,"messagesURIUtils",void 0),e([d()],An.prototype,"relatedRecordsEnabled",void 0),e([d()],An.prototype,"returnGeometryEnabled",void 0),e([d({readOnly:!0})],An.prototype,"state",null),e([d({readOnly:!0,type:wn})],An.prototype,"store",void 0),e([d()],An.prototype,"tableTemplate",void 0),e([d()],An.prototype,"timeExtent",null),e([d()],An.prototype,"timeZone",void 0),e([d()],An.prototype,"view",void 0),e([d()],An.prototype,"highlightIds",null),An=e([m("esri.widgets.FeatureTable.FeatureTableViewModel")],An);const xn=An;export{xn as default};
