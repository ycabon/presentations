// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/Logger ../../core/promiseUtils ../../intl/date ../../intl/number ./FieldsIndex ./fieldUtils ./labelUtils ../../support/arcadeOnDemand".split(" "),function(u,f,E,F,p,g,v,w,x,h,y,z,q,A,B){function C(){return g(this,void 0,void 0,function(){return p(this,function(a){return[2,x.create(function(b){u(["../../core/sql/WhereClause"],
b)})]})})}function r(a,b,c,e){a=q.getField(e,a);if(!a)return b;if(null==c[a.name])return"";if(b=a.domain)if("codedValue"===b.type||"coded-value"===b.type){e=c[a.name];var d=0;for(b=b.codedValues;d<b.length;d++){var k=b[d];if(k.code===e)return k.name}}else if("range"===b.type&&(e=+c[a.name],d="range"in b?b.range[1]:b.maxValue,("range"in b?b.range[0]:b.minValue)<=e&&e<=d))return b.name;c=c[a.name];"date"===a.type||"esriFieldTypeDate"===a.type?c=h.formatDate(c,h.convertDateFormatToIntlOptions("short-date")):
q.isNumericField(a)&&(c=y.formatNumber(+c));return c?c:""}Object.defineProperty(f,"__esModule",{value:!0});var D=w.getLogger("esri.layers.support.labelFormatUtils"),t={type:"simple",evaluate:function(){return null}};f.createLabelFunction=function(a,b,c){return g(this,void 0,void 0,function(){var e,d,k,f,l,n,g,h;return p(this,function(m){switch(m.label){case 0:if(!a||!a.symbol)return[2,t];e=a.where;d=a.getLabelExpression();return e?[4,C()]:[3,2];case 1:return f=m.sent(),[3,3];case 2:f=null,m.label=
3;case 3:return k=f,"arcade"!==d.type?[3,5]:[4,B.createLabelExpression(d.expression,c,b)];case 4:return n=m.sent(),l={type:"arcade",evaluate:function(b){try{var a=n.evaluate({$feature:n.repurposeFeature(b)});if(null!=a)return a.toString()}catch(H){D.error(v("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:b,expression:d}))}return null},needsHydrationToEvaluate:function(){return null==A.getSingleFieldArcadeExpression(d.expression)}},[3,6];case 5:l=
{type:"simple",evaluate:function(a){var c=a&&a.attributes;return c?d.expression.replace(/{[^}]*}/g,function(a){return r(a.slice(1,-1),a,c,b)}):null}},m.label=6;case 6:if(e){try{g=k.WhereClause.create(e,new z(b))}catch(G){return[2,t]}h=l.evaluate;l.evaluate=function(a){return g.testFeature(a)?h(a):null}}return[2,l]}})})};f.formatField=r});