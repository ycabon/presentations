// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./utils"],function(r,t){function u(b,g,c,d,e,a,h,k,l){if(h.has(d))return l;for(const f of d.properties){const n=g?`${g}.${f.name}`:f.name,p=c?`${c}.${f.name}`:f.name,m=e[p];m?(l.push({name:n,type:"ref",ref:m,refName:a[m[b].id]}),q(b,p,m[b],e,a,k)):"string"===typeof f.type?l.push({name:n,type:f.enum||("string"===typeof f.type?f.type:""),default:JSON.stringify(f.default)}):(h.add(d),u(b,n,p,f.type,e,a,h,k,l))}h.delete(d);return l}function q(b,g,c,d,e,a){if(c.id in a)return a;const h=
{container:c,text:null,props:[]};e[c.id].forEach(k=>a[k]=h);u(b,"",g,c,d,e,new Set,a,h.props);h.props.sort(v);return a}function v(b,g){var c=b.name.localeCompare(g.name);if(0!==c)return c;c=(b.type||"").localeCompare(g.type||"");return 0!==c?c:(b.default||"").localeCompare(g.default||"")}r.collect=function(b){var g=t.collectClassPaths(b.api),c=t.collectClassPaths(b.spec),d={};d[""]={api:b.api,spec:b.spec};for(var e in g){var a=c[e];a&&(d[e]={api:g[e],spec:a})}g=[];e={};c={};for(var h in d){a=d[h];
const f=`${a.api.name} (${a.spec.name})${a.api.typeValue?` <${a.api.typeValue}>`:""}`;var k=e[a.api.id];k||(k=new Set,e[a.api.id]=k);k.add(f);k=c[a.spec.id];k||(k=new Set,c[a.spec.id]=k);k.add(f)}h={};q("api","",b.api,d,e,h);e={};q("spec","",b.spec,d,c,e);b={};for(var l in d)c=l?l.split(".").length:0,a=d[l].api.id,b[a]=a in b?Math.min(c,b[a]):c;for(const f in h)d=h[f],l=e[f],g.push({name:`${d.container.name} (${l.container.name})${d.container.typeValue?` <${d.container.typeValue}>`:""}`,api:d,spec:l,
indent:b[d.container.id]});return g};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});