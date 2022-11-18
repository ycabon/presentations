import { sR as C$5, bk as w$7, nq as y$7, w as w$8, bJ as v$4, ev as m$7, er as u$7, uw as l$b, pN as p$6, t as t$7, eN as h$4, m as r$7, L as e$8, Q as v$5, r as rt, cq as G$4, ql as a$7, e1 as $$4, c as c$7, O as k$4, a8 as j$3, U as U$4, B as has, Y as y$8, ux as e$9 } from './_virtual_index-1ea2035a.js';
import { s as s$c, p as p$7 } from './number-2aae57c3.js';
import { i as i$8 } from './hash-da85b7aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$7;!function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FuncionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference";}(e$7||(e$7={}));const r$6={[e$7.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[e$7.LogicError]:"Logic error - {reason}",[e$7.NeverReach]:"Encountered unreachable logic",[e$7.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[e$7.ModuleAccessorMustBeString]:"Module accessor must be a string",[e$7.ModuleExportNotFound]:"Module has no export with provided identifier",[e$7.ModulesNotSupported]:"Current profile does not support modules",[e$7.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[e$7.FuncionNotFound]:"Function not found",[e$7.FieldNotFound]:"Key not found - {key}",[e$7.CircularModules]:"Circular module dependencies are not allowed",[e$7.Cancelled]:"Execution cancelled",[e$7.UnsupportedHashType]:"Type not supported in hash function",[e$7.IllegalResult]:"Value is not a supported return type",[e$7.PortalRequired]:"Portal is required",[e$7.InvalidParameter]:"Invalid parameter",[e$7.WrongNumberOfParameters]:"Call with wrong number of parameters",[e$7.Unrecognised]:"Unrecognised code structure",[e$7.UnrecognisedType]:"Unrecognised type",[e$7.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[e$7.BooleanConditionRequired]:"Conditions must use booleans",[e$7.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[e$7.NoFunctionInArray]:"Arrays cannot contain functions.",[e$7.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[e$7.KeyAccessorMustBeString]:"Accessor must be a string",[e$7.KeyMustBeString]:"Object keys must be a string",[e$7.Immutable]:"Object is immutable",[e$7.InvalidParameter]:"Invalid parameter",[e$7.UnexpectedToken]:"Unexpected token",[e$7.MemberOfNull]:"Cannot access property of null object",[e$7.MaximumCallDepth]:"Exceeded maximum function depth",[e$7.OutOfBounds]:"Out of bounds",[e$7.InvalidIdentifier]:"Identifier not recognised",[e$7.FuncionNotFound]:"Function not found",[e$7.CallNonFunction]:"Expression is not a function",[e$7.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[e$7.AssignModuleFunction]:"Cannot assign function to module variable",[e$7.UnsupportedUnaryOperator]:"Unsupported unary operator",[e$7.UnsupportedOperator]:"Unsupported operator",[e$7.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[e$7.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"};class o$6 extends Error{constructor(...e){super(...e);}}class n$5 extends o$6{constructor(e,r){super(a$6(r)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,n$5),r&&r.loc&&(this.loc=r.loc);}}class t$6 extends Error{constructor(e,o,n,s){super("Execution error - "+a$6(n)+i$7(r$6[o],s)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,t$6),n&&n.loc&&(this.loc=n.loc);}}function a$6(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class s$b extends Error{constructor(e,o,n,t){super("Compilation error - "+a$6(n)+i$7(r$6[o],t)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,s$b),n&&n.loc&&(this.loc=n.loc);}}class c$6 extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,c$6);}}function i$7(e,r){try{if(!r)return e;for(const o in r){let n=r[o];n||(n=""),e=e.replace("{"+o+"}",r[o]);}}catch(o){}return e}function u$6(e,r,o){return "esri.arcade.arcadeexecutionerror"===o.declaredRootClass||"esri.arcade.arcadecompilationerror"===o.declaredRootClass?null===o.loc&&r&&r.loc?new n$5(o,{cause:o}):o:("esri.arcade.featureset.support.featureseterror"===o.declaredRootClass||o.declaredRootClass,r&&r.loc?new n$5(o,{cause:o}):o)}var l$a;!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol";}(l$a||(l$a={}));const d$8={[l$a.UnrecognisedUri]:"Unrecognised uri - {uri}",[l$a.UnsupportedUriProtocol]:"Unrecognised uri protocol"};class p$5 extends Error{constructor(e,r){super(i$7(d$8[e],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,p$5);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$5{constructor(t=[]){this._elements=t;}length(){return this._elements.length}get(t){return this._elements[t]}toArray(){const t=[];for(let e=0;e<this.length();e++)t.push(this.get(e));return t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r$5{constructor(){}}function n$4(t,n,e){if(t instanceof r$5&&!(t instanceof s$a)){const r=new s$a;return r.fn=t,r.parameterEvaluator=e,r.context=n,r}return t}class e$6 extends r$5{constructor(t){super(),this.fn=t;}createFunction(t){return (...r)=>this.fn(t,{preparsed:!0,arguments:r})}call(t,r){return this.fn(t,r)}marshalledCall(e,a,l,c){return c(e,a,((a,o,i)=>{i=i.map((t=>t instanceof r$5&&!(t instanceof s$a)?n$4(t,e,c):t));const u=this.call(l,{args:i});return C$5(u)?u.then((t=>n$4(t,l,c))):u}))}}class s$a extends r$5{constructor(){super(...arguments),this.fn=null,this.context=null;}createFunction(t){return this.fn.createFunction(this.context)}call(t,r){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}marshalledCall(t,r,n){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$6 extends t$5{constructor(t,s,i,e,h,a){super(t),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=s,this._hasZ=i,this._hasM=e,this._cacheId=h,this._partId=a;}get(t){if(void 0===this._lazyPt[t]){const i=this._elements[t];if(void 0===i)return;const e=this._hasZ,h=this._hasM;let a=null;a=e&&!h?new w$7(i[0],i[1],i[2],void 0,this._spRef):h&&!e?new w$7(i[0],i[1],void 0,i[2],this._spRef):e&&h?new w$7(i[0],i[1],i[2],i[3],this._spRef):new w$7(i[0],i[1],this._spRef),a.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=a;}return this._lazyPt[t]}equalityTest(t){return t===this||null!==t&&(t instanceof i$6!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h$3 extends t$5{constructor(t,s,h,i,e){super(t),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=h,this._hasM=i,this._spRef=s,this._cacheId=e;}get(t){if(void 0===this._lazyPath[t]){const h=this._elements[t];if(void 0===h)return;this._lazyPath[t]=new i$6(h,this._spRef,this._hasZ,this._hasM,this._cacheId,t);}return this._lazyPath[t]}equalityTest(t){return t===this||null!==t&&(t instanceof h$3!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()}}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
 * @private
 */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
 * @private
 */
class ConflictingSpecificationError extends LuxonError {}

/**
 * @private
 */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
 * @private
 */
class InvalidArgumentError extends LuxonError {}

/**
 * @private
 */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}

/**
 * @private
 */

const n$3 = "numeric",
  s$9 = "short",
  l$9 = "long";

const DATE_SHORT = {
  year: n$3,
  month: n$3,
  day: n$3,
};

const DATE_MED = {
  year: n$3,
  month: s$9,
  day: n$3,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n$3,
  month: s$9,
  day: n$3,
  weekday: s$9,
};

const DATE_FULL = {
  year: n$3,
  month: l$9,
  day: n$3,
};

const DATE_HUGE = {
  year: n$3,
  month: l$9,
  day: n$3,
  weekday: l$9,
};

const TIME_SIMPLE = {
  hour: n$3,
  minute: n$3,
};

const TIME_WITH_SECONDS = {
  hour: n$3,
  minute: n$3,
  second: n$3,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n$3,
  minute: n$3,
  second: n$3,
  timeZoneName: s$9,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n$3,
  minute: n$3,
  second: n$3,
  timeZoneName: l$9,
};

const TIME_24_SIMPLE = {
  hour: n$3,
  minute: n$3,
  hourCycle: "h23",
};

const TIME_24_WITH_SECONDS = {
  hour: n$3,
  minute: n$3,
  second: n$3,
  hourCycle: "h23",
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n$3,
  minute: n$3,
  second: n$3,
  hourCycle: "h23",
  timeZoneName: s$9,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n$3,
  minute: n$3,
  second: n$3,
  hourCycle: "h23",
  timeZoneName: l$9,
};

const DATETIME_SHORT = {
  year: n$3,
  month: n$3,
  day: n$3,
  hour: n$3,
  minute: n$3,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n$3,
  month: n$3,
  day: n$3,
  hour: n$3,
  minute: n$3,
  second: n$3,
};

const DATETIME_MED = {
  year: n$3,
  month: s$9,
  day: n$3,
  hour: n$3,
  minute: n$3,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n$3,
  month: s$9,
  day: n$3,
  hour: n$3,
  minute: n$3,
  second: n$3,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n$3,
  month: s$9,
  day: n$3,
  weekday: s$9,
  hour: n$3,
  minute: n$3,
};

const DATETIME_FULL = {
  year: n$3,
  month: l$9,
  day: n$3,
  hour: n$3,
  minute: n$3,
  timeZoneName: s$9,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n$3,
  month: l$9,
  day: n$3,
  hour: n$3,
  minute: n$3,
  second: n$3,
  timeZoneName: s$9,
};

const DATETIME_HUGE = {
  year: n$3,
  month: l$9,
  day: n$3,
  weekday: l$9,
  hour: n$3,
  minute: n$3,
  timeZoneName: l$9,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n$3,
  month: l$9,
  day: n$3,
  weekday: l$9,
  hour: n$3,
  minute: n$3,
  second: n$3,
  timeZoneName: l$9,
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n, "0");
  } else {
    padded = ("" + input).padStart(n, "0");
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseFloat(string);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    const f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits,
    rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1,
    modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 =
      (weekYear +
        Math.floor(weekYear / 4) -
        Math.floor(weekYear / 100) +
        Math.floor(weekYear / 400)) %
      7,
    last = weekYear - 1,
    p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts),
    intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0,
    offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60)),
    minutes = Math.trunc(Math.abs(offset % 60)),
    sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

const ianaRegex =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

/**
 * @private
 */

const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}

const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}

const meridiems = ["AM", "PM"];

const erasLong = ["Before Christ", "Anno Domini"];

const erasShort = ["BC", "AD"];

const erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
  };

  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }

  const isInPast = Object.is(count, -0) || count < 0,
    fmtValue = Math.abs(count),
    singular = fmtValue === 1,
    lilUnits = units[unit],
    fmtUnit = narrow
      ? singular
        ? lilUnits[1]
        : lilUnits[2] || lilUnits[1]
      : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function stringifyTokens(splits, tokenToString) {
  let s = "";
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS,
};

/**
 * @private
 */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    let current = null,
      currentFull = "",
      bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en",
      useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      string = (opts, extract) => this.loc.extract(dt, opts, extract),
      formatOffset = (opts) => {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
      meridiem = () =>
        knownEnglish
          ? meridiemForDateTime(dt)
          : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      month = (length, standalone) =>
        knownEnglish
          ? monthForDateTime(dt, length)
          : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
      weekday = (length, standalone) =>
        knownEnglish
          ? weekdayForDateTime(dt, length)
          : string(
              standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
              "weekday"
            ),
      maybeMacro = (token) => {
        const formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
      era = (length) =>
        knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"),
      tokenToString = (token) => {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return this.num(dt.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(dt.millisecond, 3);
          // seconds
          case "s":
            return this.num(dt.second);
          case "ss":
            return this.num(dt.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(dt.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(dt.millisecond / 100));
          // minutes
          case "m":
            return this.num(dt.minute);
          case "mm":
            return this.num(dt.minute, 2);
          // hours
          case "h":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
          case "hh":
            return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
          case "H":
            return this.num(dt.hour);
          case "HH":
            return this.num(dt.hour, 2);
          // offset
          case "Z":
            // like +6
            return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            // like +06:00
            return formatOffset({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            // like +0600
            return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
          // zone
          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems
          case "a":
            return meridiem();
          // dates
          case "d":
            return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
          case "dd":
            return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
          // weekdays - standalone
          case "c":
            // like 1
            return this.num(dt.weekday);
          case "ccc":
            // like 'Tues'
            return weekday("short", true);
          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);
          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format
          case "E":
            // like 1
            return this.num(dt.weekday);
          case "EEE":
            // like 'Tues'
            return weekday("short", false);
          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);
          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone
          case "L":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric", day: "numeric" }, "month")
              : this.num(dt.month);
          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter
              ? string({ month: "2-digit", day: "numeric" }, "month")
              : this.num(dt.month, 2);
          case "LLL":
            // like Jan
            return month("short", true);
          case "LLLL":
            // like January
            return month("long", true);
          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format
          case "M":
            // like 1
            return useDateTimeFormatter
              ? string({ month: "numeric" }, "month")
              : this.num(dt.month);
          case "MM":
            // like 01
            return useDateTimeFormatter
              ? string({ month: "2-digit" }, "month")
              : this.num(dt.month, 2);
          case "MMM":
            // like Jan
            return month("short", false);
          case "MMMM":
            // like January
            return month("long", false);
          case "MMMMM":
            // like J
            return month("narrow", false);
          // years
          case "y":
            // like 2014
            return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
          case "yy":
            // like 14
            return useDateTimeFormatter
              ? string({ year: "2-digit" }, "year")
              : this.num(dt.year.toString().slice(-2), 2);
          case "yyyy":
            // like 0012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 4);
          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter
              ? string({ year: "numeric" }, "year")
              : this.num(dt.year, 6);
          // eras
          case "G":
            // like AD
            return era("short");
          case "GG":
            // like Anno Domini
            return era("long");
          case "GGGGG":
            return era("narrow");
          case "kk":
            return this.num(dt.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(dt.weekYear, 4);
          case "W":
            return this.num(dt.weekNumber);
          case "WW":
            return this.num(dt.weekNumber, 2);
          case "o":
            return this.num(dt.ordinal);
          case "ooo":
            return this.num(dt.ordinal, 3);
          case "q":
            // like 1
            return this.num(dt.quarter);
          case "qq":
            // like 01
            return this.num(dt.quarter, 2);
          case "X":
            return this.num(Math.floor(dt.ts / 1000));
          case "x":
            return this.num(dt.ts);
          default:
            return maybeMacro(token);
        }
      };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
        switch (token[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      tokenToString = (lildur) => (token) => {
        const mapped = tokenToField(token);
        if (mapped) {
          return this.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      },
      tokens = Formatter.parseFormat(fmt),
      realTokens = tokens.reduce(
        (found, { literal, val }) => (literal ? found : found.concat(val)),
        []
      ),
      collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}

class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}

/**
 * @interface
 */
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ZoneIsAbstractError();
  }

  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}

let singleton$1 = null;

/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */
class SystemZone extends Zone {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }

  /** @override **/
  get type() {
    return "system";
  }

  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }

  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }

  /** @override **/
  get isValid() {
    return true;
  }
}

let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short",
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""),
    parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
    [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */
class IANAZone extends Zone {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private **/
    this.zoneName = name;
    /** @private **/
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override **/
  get type() {
    return "iana";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }

  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override **/
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }

  /** @override **/
  get isValid() {
    return this.valid;
  }
}

let singleton = null;

/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */
class FixedOffsetZone extends Zone {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private **/
    this.fixed = offset;
  }

  /** @override **/
  get type() {
    return "fixed";
  }

  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
    }
  }

  /** @override **/
  offsetName() {
    return this.name;
  }

  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }

  /** @override **/
  get isUniversal() {
    return true;
  }

  /** @override **/
  offset() {
    return this.fixed;
  }

  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }

  /** @override **/
  get isValid() {
    return true;
  }
}

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override **/
  get type() {
    return "invalid";
  }

  /** @override **/
  get name() {
    return this.zoneName;
  }

  /** @override **/
  get isUniversal() {
    return false;
  }

  /** @override **/
  offsetName() {
    return null;
  }

  /** @override **/
  formatOffset() {
    return "";
  }

  /** @override **/
  offset() {
    return NaN;
  }

  /** @override **/
  equals() {
    return false;
  }

  /** @override **/
  get isValid() {
    return false;
  }
}

/**
 * @private
 */

function normalizeZone(input, defaultZone) {
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone;
    else if (lowered === "local" || lowered === "system") return SystemZone.instance;
    else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
    else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

let now = () => Date.now(),
  defaultZone = "system",
  defaultLocale = null,
  defaultNumberingSystem = null,
  defaultOutputCalendar = null,
  throwOnInvalid;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }

  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    now = n;
  }

  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }

  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}

// todo - remap caching

let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    const { numberingSystem, calendar } = options;
    // return the smaller one so that we can append the calendar and numbering overrides to it
    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return (
      loc.numberingSystem === "latn" ||
      !loc.locale ||
      loc.locale.startsWith("en") ||
      new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
    );
  }
}

/**
 * @private
 */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
}

/**
 * @private
 */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;

    let z;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
 * @private
 */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}

/**
 * @private
 */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness =
      (this.numberingSystem === null || this.numberingSystem === "latn") &&
      (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length },
        formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format
          ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
          : { weekday: length },
        formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
          this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }

        return this.meridiemCache;
      }
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) =>
          this.extract(dt, intl, "era")
        );
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts),
      results = df.formatToParts(),
      matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    );
  }

  equals(other) {
    return (
      this.locale === other.locale &&
      this.numberingSystem === other.numberingSystem &&
      this.outputCalendar === other.outputCalendar
    );
  }
}

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) =>
    extractors
      .reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1],
    fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
    zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration =
  /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
    match;

  const hasNegativePrefix = s[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";

  const maybeNegate = (num, force = false) =>
    num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr),
  };

  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday =
      weekdayStr.length > 3
        ? weekdaysLong.indexOf(weekdayStr) + 1
        : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
      ,
      weekdayStr,
      dayStr,
      monthStr,
      yearStr,
      hourStr,
      minuteStr,
      secondStr,
      obsOffset,
      milOffset,
      offHourStr,
      offMinuteStr,
    ] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}

// http date

const rfc1123 =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  rfc850 =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  ascii =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
    result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

/*
 * @private
 */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}

const INVALID$2 = "Invalid Duration";

// unit conversion constants
const lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
    minutes: { seconds: 60, milliseconds: 60 * 1000 },
    seconds: { milliseconds: 1000 },
  },
  casualMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000,
    },

    ...lowOrderMatrix,
  },
  daysInYearAccurate = 146097.0 / 400,
  daysInMonthAccurate = 146097.0 / 4800,
  accurateMatrix = {
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: (daysInYearAccurate * 24) / 4,
      minutes: (daysInYearAccurate * 24 * 60) / 4,
      seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
      milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
    },
    ...lowOrderMatrix,
  };

// units ordered by size
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

const reverseUnits = orderedUnits$1.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit],
    raw = fromMap[fromUnit] / conv,
    sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
    // ok, so this is wild, but see the matrix in the tests
    added =
      !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;

    if (config.matrix) {
      matrix = config.matrix;
    }

    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.matrix = matrix;
    /**
     * @access private
     */
    this.isLuxonDuration = true;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
      );
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix,
    });
  }

  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }

  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new InvalidUnitError(unit);

    return normalized;
  }

  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID$2;
  }

  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l = orderedUnits$1
      .map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
      .format(l);
  }

  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
    };

    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");

    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }

  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }

  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration),
      result = {};

    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(this, { values: result }, true);
  }

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
    return clone$1(this, { values: mixed });
  }

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone$1(this, opts);
  }

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {},
      accumulated = {},
      vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if (isNumber(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] +=
          key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(this, { values: built }, true).normalize();
  }

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }

  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}

const INVALID$1 = "Invalid Interval";

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */
class Interval {
  /**
   * @private
   */
  constructor(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalid || null;
    /**
     * @access private
     */
    this.isLuxonInterval = true;
  }

  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start),
      builtEnd = friendlyDateTime(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    } else {
      return validateError;
    }
  }

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration),
      dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s, e] = (text || "").split("/", 2);
    if (s && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit),
      end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
        .map(friendlyDateTime)
        .filter((d) => this.contains(d))
        .sort(),
      results = [];
    let { s } = this,
      i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e,
        next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    let { s } = this,
      idx = 1,
      next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s,
      e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s,
      e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } else if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          } else {
            return [sofar.concat([current]), item];
          }
        },
        [[], null]
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null,
      currentCount = 0;
    const results = [],
      ends = intervals.map((i) => [
        { time: i.s, type: "s" },
        { time: i.e, type: "e" },
      ]),
      flattened = Array.prototype.concat(...ends),
      arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID$1;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }

  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(
    length = "long",
    { locale = null, numberingSystem = null, locObj = null } = {}
  ) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: hasRelative() };
  }
}

function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
    ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ["days", dayDiff],
  ];

  const results = {};
  let lowestOrder, highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });

      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function diff (earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  } else {
    return duration;
  }
}

const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d",
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}

const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post(parseDigits(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s]) =>
        strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
    };
  }
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  const one = digitRegex(loc),
    two = digitRegex(loc, "{2}"),
    three = digitRegex(loc, "{3}"),
    four = digitRegex(loc, "{4}"),
    six = digitRegex(loc, "{6}"),
    oneOrTwo = digitRegex(loc, "{1,2}"),
    oneToThree = digitRegex(loc, "{1,3}"),
    oneToSix = digitRegex(loc, "{1,6}"),
    oneToNine = digitRegex(loc, "{1,9}"),
    twoToFour = digitRegex(loc, "{2,4}"),
    fourToSix = digitRegex(loc, "{4,6}"),
    literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
    unitate = (t) => {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);
        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years
        case "y":
          return intUnit(oneToSix);
        case "yy":
          return intUnit(twoToFour, untruncateYear);
        case "yyyy":
          return intUnit(four);
        case "yyyyy":
          return intUnit(fourToSix);
        case "yyyyyy":
          return intUnit(six);
        // months
        case "M":
          return intUnit(oneOrTwo);
        case "MM":
          return intUnit(two);
        case "MMM":
          return oneOf(loc.months("short", true, false), 1);
        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);
        case "L":
          return intUnit(oneOrTwo);
        case "LL":
          return intUnit(two);
        case "LLL":
          return oneOf(loc.months("short", false, false), 1);
        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates
        case "d":
          return intUnit(oneOrTwo);
        case "dd":
          return intUnit(two);
        // ordinals
        case "o":
          return intUnit(oneToThree);
        case "ooo":
          return intUnit(three);
        // time
        case "HH":
          return intUnit(two);
        case "H":
          return intUnit(oneOrTwo);
        case "hh":
          return intUnit(two);
        case "h":
          return intUnit(oneOrTwo);
        case "mm":
          return intUnit(two);
        case "m":
          return intUnit(oneOrTwo);
        case "q":
          return intUnit(oneOrTwo);
        case "qq":
          return intUnit(two);
        case "s":
          return intUnit(oneOrTwo);
        case "ss":
          return intUnit(two);
        case "S":
          return intUnit(oneToThree);
        case "SSS":
          return intUnit(three);
        case "u":
          return simple(oneToNine);
        case "uu":
          return simple(oneOrTwo);
        case "uuu":
          return intUnit(one);
        // meridiem
        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return intUnit(four);
        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
        case "W":
          return intUnit(oneOrTwo);
        case "WW":
          return intUnit(two);
        // weekdays
        case "E":
        case "c":
          return intUnit(one);
        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);
        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);
        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);
        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
        case "ZZZ":
          return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);
        default:
          return literal(t);
      }
    };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy",
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM",
  },
  day: {
    numeric: "d",
    "2-digit": "dd",
  },
  weekday: {
    short: "EEE",
    long: "EEEE",
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh",
  },
  minute: {
    numeric: "m",
    "2-digit": "mm",
  },
  second: {
    numeric: "s",
    "2-digit": "ss",
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ",
  },
};

function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;

  if (type === "literal") {
    return {
      literal: true,
      val: value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i],
          groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }

  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
    units = tokens.map((t) => unitForToken(t, locale)),
    disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units),
      regex = RegExp(regexString, "i"),
      [rawMatches, matches] = match(input, regex, handlers),
      [result, zone, specificOffset] = matches
        ? dateTimeFromMatches(matches)
        : [null, null, undefined];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}

function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, locale, formatOpts));
}

const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid(
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder,
    month0 = table.findIndex((i) => i < ordinal),
    day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj,
    ordinal = computeOrdinal(year, month, day),
    weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7),
    weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData,
    weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
    yearInDays = daysInYear(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
    year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(weekData) };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(ordinalData) };
}

function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear),
    validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
    validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year),
    validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year),
    validMonth = integerBetween(obj.month, 1, 12),
    validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour =
      integerBetween(hour, 0, 23) ||
      (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
    validMinute = integerBetween(minute, 0, 59),
    validSecond = integerBetween(second, 0, 59),
    validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o,
    year = inst.c.year + Math.trunc(dur.years),
    month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
    c = {
      ...inst.c,
      year,
      month,
      day:
        Math.min(inst.c.day, daysInMonth(year, month)) +
        Math.trunc(dur.days) +
        Math.trunc(dur.weeks) * 7,
    },
    millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds,
    }).as("milliseconds"),
    localTS = objToLocalTS(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone,
      inst = DateTime.fromObject(parsed, {
        ...opts,
        zone: interpretationZone,
        specificOffset,
      });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? Formatter.create(Locale.create("en-US"), {
        allowZ,
        forceSimple: true,
      }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone
) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

// Units in the supported calendars, sorted by bigness
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[unit.toLowerCase()];

  if (!normalized) throw new InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone),
    loc = Locale.fromObject(opts),
    tsNow = Settings.now();

  let ts, o;

  // assume we have the higher-order units
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({ ts, zone, loc, o });
}

function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round,
    format = (c, unit) => {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      const formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
    differ = (unit) => {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {},
    args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;

    let invalid =
      config.invalid ||
      (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) ||
      (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;

    let c = null,
      o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
     * @access private
     */
    this._zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.invalid = invalid;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
    /**
     * @access private
     */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments),
      [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }

  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options),
    });
  }

  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = Settings.now(),
      offsetProvis = !isUndefined(opts.specificOffset)
        ? opts.specificOffset
        : zoneToUse.offset(tsNow),
      normalized = normalizeObject(obj, normalizeUnit),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber,
      loc = Locale.fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units,
      defaultValues,
      objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
        ? hasInvalidWeekData(normalized)
        : containsOrdinal
        ? hasInvalidOrdinalData(normalized)
        : hasInvalidGregorianData(normalized),
      invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
        ? weekToGregorian(normalized)
        : containsOrdinal
        ? ordinalToGregorian(normalized)
        : normalized,
      [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
      inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc,
      });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }

    return inst;
  }

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }

  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    const { locale = null, numberingSystem = null } = opts,
      localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      }),
      [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }

  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }

  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
  }

  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }

  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }

  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }

  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }

  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale,
      });
    } else {
      return null;
    }
  }

  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return (
        this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset
      );
    }
  }

  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }

  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }

  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }

  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;

    const normalized = normalizeObject(values, normalizeUnit),
      settingWeekStuff =
        !isUndefined(normalized.weekYear) ||
        !isUndefined(normalized.weekNumber) ||
        !isUndefined(normalized.weekday),
      containsOrdinal = !isUndefined(normalized.ordinal),
      containsGregorYear = !isUndefined(normalized.year),
      containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
      containsGregor = containsGregorYear || containsGregorMD,
      definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {},
      normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
          .startOf(unit)
          .minus(1)
      : this;
  }

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === "extended";

    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === "extended");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    let c = includePrefix ? "T" : "";
    return (
      c +
      toISOTime(
        this,
        format === "extended",
        suppressSeconds,
        suppressMilliseconds,
        includeOffset,
        extendedZone
      )
    );
  }

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }

  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }

  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }

  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = maybeArray(unit).map(Duration.normalizeUnit),
      otherIsLater = otherDateTime.valueOf() > this.valueOf(),
      earlier = otherIsLater ? this : otherDateTime,
      later = otherIsLater ? otherDateTime : this,
      diffed = diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return (
      this.isValid &&
      other.isValid &&
      this.valueOf() === other.valueOf() &&
      this.zone.equals(other.zone) &&
      this.loc.equals(other.loc)
    );
  }

  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
      padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit,
    });
  }

  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true,
    });
  }

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options,
      localeToUse = Locale.fromOpts({
        locale,
        numberingSystem,
        defaultToEN: true,
      });
    return explainFromTokens(localeToUse, text, fmt);
  }

  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return DATE_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return DATE_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }

  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }

  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
 * @private
 */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t$4,i$5;function n$2(e){return y$7.fromJSON(e.toJSON())}function o$5(e){return e.toJSON?e.toJSON():e}function l$8(e){return "string"==typeof e||e instanceof String}function y$6(e){return "number"==typeof e}function p$4(e){return e instanceof Date}function c$5(e,r){return e===r||!(!p$4(e)||!p$4(r))&&e.getTime()===r.getTime()}function m$6(e){if(null==e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function f$2(r){if(null==r)return null;switch(r.type){case"polygon":case"multipoint":case"polyline":return r.extent;case"point":return new w$8({xmin:r.x,ymin:r.y,xmax:r.x,ymax:r.y,spatialReference:r.spatialReference});case"extent":return r}return null}function d$7(e){if(null==e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}!function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated";}(t$4||(t$4={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown";}(i$5||(i$5={}));const F$4=1e3;const S$1={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},v$3={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},P$6={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"eesriFieldTypeXML",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"eesriFieldTypeXML"};function b$2(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function D$7(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});const t="boolean"==typeof r.cycles&&r.cycles,i=r.cmp&&(n=r.cmp,function(e){return function(r,t){const i={key:r,value:e[r]},o={key:t,value:e[t]};return n(i,o)}});var n;const o=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()),void 0===r)return;if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);let n,l;if(Array.isArray(r)){for(l="[",n=0;n<r.length;n++)n&&(l+=","),l+=e(r[n])||"null";return l+"]"}if(null===r)return "null";if(o.includes(r)){if(t)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=o.push(r)-1,y=Object.keys(r).sort(i&&i(r));for(l="",n=0;n<y.length;n++){const t=y[n],i=e(r[t]);i&&(l&&(l+=","),l+=JSON.stringify(t)+":"+i);}return o.splice(s,1),"{"+l+"}"}(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s$8{constructor(s){this.source=s;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class T$7{constructor(e){this.value=e;}}class M$6{constructor(e){this.value=e;}}const N$5=M$6,D$6=T$7,k$3={type:"VOID"},j$2={type:"BREAK"},A$4={type:"CONTINUE"};function R$2(e,t,n){return ""===t||null==t||t===n||t===n?e:e=e.split(t).join(n)}function F$3(t){return t instanceof r$5}function C$4(e){return e instanceof s$8}function I$5(e){return !!w$6(e)||(!!Z$7(e)||(!!z$6(e)||(!!_$4(e)||(null===e||(e===k$3||"number"==typeof e)))))}function v$2(e,t){return void 0===e?t:e}function O$4(e){return null==e?"":Y$5(e)||E$3(e)?"Array":z$6(e)?"Date":w$6(e)?"String":_$4(e)?"Boolean":Z$7(e)?"Number":"esri.arcade.Attachment"===e?.declaredClass?"Attachment":"esri.arcade.Portal"===e?.declaredClass?"Portal":"esri.arcade.Dictionary"===e?.declaredClass?"Dictionary":e instanceof s$8?"Module":J$6(e)?"Feature":e instanceof w$7?"Point":e instanceof v$4?"Polygon":e instanceof m$7?"Polyline":e instanceof u$7?"Multipoint":e instanceof w$8?"Extent":F$3(e)?"Function":P$5(e)?"FeatureSet":G$3(e)?"FeatureSetCollection":e===k$3?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function w$6(e){return "string"==typeof e||e instanceof String}function _$4(e){return "boolean"==typeof e}function Z$7(e){return "number"==typeof e}function L$3(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function Y$5(e){return e instanceof Array}function J$6(e){return "esri.arcade.Feature"===e?.arcadeDeclaredClass}function P$5(e){return !0===(e&&e.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===e.declaredRootClass)}function G$3(e){return !0===(e&&e.declaredRootClass&&"esri.arcade.featureSetCollection"===e.declaredRootClass)}function E$3(e){return e instanceof t$5}function z$6(e){return e instanceof Date}function V$5(e,t,n,r,a){if(e.length<t||e.length>n)throw new t$6(r,e$7.WrongNumberOfParameters,a)}function H$5(e){return e<0?-Math.round(-e):Math.round(e)}function U$3(){let e=Date.now();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}function q$4(e,t){return isNaN(e)||null==t||""===t?e.toString():(t=R$2(t,"‰",""),t=R$2(t,"¤",""),s$c(e,{pattern:t}))}function B$4(e,t){const n=DateTime.fromJSDate(e);return null==t||""===t?n.toISO({suppressMilliseconds:!0}):n.toFormat(W$7(t),{locale:l$b(),numberingSystem:"latn"})}function W$7(e){e=e.replace(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let t="";const n=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(n))switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"Z":t+="ZZ";break;case"ZZ":t+="ZZZ";break;case"S":t+="'S'";break;case"SS":t+="'SS'";break;case"SSS":t+="u";break;case"A":case"a":t+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`;}return t}function $$3(e,t,n){switch(n){case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}return !1}function Q$5(e,t,n){if(null===e){if(null===t||t===k$3)return $$3(null,null,n);if(Z$7(t))return $$3(0,t,n);if(w$6(t))return $$3(0,re$5(t),n);if(_$4(t))return $$3(0,re$5(t),n);if(z$6(t))return $$3(0,t.getTime(),n)}if(e===k$3){if(null===t||t===k$3)return $$3(null,null,n);if(Z$7(t))return $$3(0,t,n);if(w$6(t))return $$3(0,re$5(t),n);if(_$4(t))return $$3(0,re$5(t),n);if(z$6(t))return $$3(0,t.getTime(),n)}else if(Z$7(e)){if(Z$7(t))return $$3(e,t,n);if(_$4(t))return $$3(e,re$5(t),n);if(null===t||t===k$3)return $$3(e,0,n);if(w$6(t))return $$3(e,re$5(t),n);if(z$6(t))return $$3(e,t.getTime(),n)}else if(w$6(e)){if(w$6(t))return $$3(K$3(e),K$3(t),n);if(z$6(t))return $$3(re$5(e),t.getTime(),n);if(Z$7(t))return $$3(re$5(e),t,n);if(null===t||t===k$3)return $$3(re$5(e),0,n);if(_$4(t))return $$3(re$5(e),re$5(t),n)}else if(z$6(e)){if(z$6(t))return $$3(e,t,n);if(null===t||t===k$3)return $$3(e.getTime(),0,n);if(Z$7(t))return $$3(e.getTime(),t,n);if(_$4(t))return $$3(e.getTime(),re$5(t),n);if(w$6(t))return $$3(e.getTime(),re$5(t),n)}else if(_$4(e)){if(_$4(t))return $$3(e,t,n);if(Z$7(t))return $$3(re$5(e),re$5(t),n);if(z$6(t))return $$3(re$5(e),t.getTime(),n);if(null===t||t===k$3)return $$3(re$5(e),0,n);if(w$6(t))return $$3(re$5(e),re$5(t),n)}return !!X$5(e,t)&&("<="===n||">="===n)}function X$5(e,t){if(e===t)return !0;if(null===e&&t===k$3||null===t&&e===k$3)return !0;if(z$6(e)&&z$6(t))return e.getTime()===t.getTime();if(e instanceof h$3)return e.equalityTest(t);if(e instanceof i$6)return e.equalityTest(t);if(e instanceof w$7&&t instanceof w$7){const n=e.cache._arcadeCacheId,r=t.cache._arcadeCacheId;if(null!=n)return n===r}if(void 0!==e&&void 0!==t&&null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t){if(e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return !0;if(e._underlyingGraphic===t._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return !0}return !1}function K$3(e,n){if(w$6(e))return e;if(null===e)return "";if(Z$7(e))return q$4(e,n);if(_$4(e))return e.toString();if(z$6(e))return B$4(e,n);if(e instanceof p$6)return JSON.stringify(e.toJSON());if(Y$5(e)){const t=[];for(let n=0;n<e.length;n++)t[n]=ne$5(e[n]);return "["+t.join(",")+"]"}if(e instanceof t$5){const t=[];for(let n=0;n<e.length();n++)t[n]=ne$5(e.get(n));return "["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():F$3(e)?"object, Function":e===k$3?"":C$4(e)?"object, Module":""}function ee$5(e){const n=[];if(!Y$5(e))return null;if(e instanceof t$5){for(let t=0;t<e.length();t++)n[t]=re$5(e.get(t));return n}for(let t=0;t<e.length;t++)n[t]=re$5(e[t]);return n}function te$5(e,n,r=!1){if(w$6(e))return e;if(null===e)return "";if(Z$7(e))return q$4(e,n);if(_$4(e))return e.toString();if(z$6(e))return B$4(e,n);if(e instanceof p$6)return e instanceof w$8?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+ye$2(e.spatialReference)+"}":ye$2(e.toJSON(),((e,t)=>e.key===t.key?0:"spatialReference"===e.key?1:"spatialReference"===t.key||e.key<t.key?-1:e.key>t.key?1:0));if(Y$5(e)){const t=[];for(let n=0;n<e.length;n++)t[n]=ne$5(e[n],r);return "["+t.join(",")+"]"}if(e instanceof t$5){const t=[];for(let n=0;n<e.length();n++)t[n]=ne$5(e.get(n),r);return "["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText(r):F$3(e)?"object, Function":e===k$3?"":C$4(e)?"object, Module":""}function ne$5(e,n=!1){if(null===e)return "null";if(_$4(e)||Z$7(e)||w$6(e))return JSON.stringify(e);if(e instanceof p$6)return te$5(e,null,n);if(e instanceof t$5)return te$5(e,null,n);if(e instanceof Array)return te$5(e,null,n);if(e instanceof Date)return n?JSON.stringify(e.getTime()):JSON.stringify(B$4(e,""));if(null!==e&&"object"==typeof e){if(void 0!==e.castToText)return e.castToText(n)}else if(e===k$3)return "null";return "null"}function re$5(e,t){return Z$7(e)?e:null===e||""===e?0:z$6(e)?NaN:_$4(e)?e?1:0:Y$5(e)||""===e||void 0===e?NaN:void 0!==t&&w$6(e)?(t=R$2(t,"‰",""),t=R$2(t,"¤",""),p$7(e,{pattern:t})):e===k$3?0:Number(e)}function ae$3(e){if(z$6(e))return e;if(w$6(e)){const t=oe$4(e);if(t)return t.toJSDate()}return null}function ie$4(e){return z$6(e)?DateTime.fromJSDate(e):w$6(e)?oe$4(e):null}function oe$4(e){const t=/ (\d\d)/;let n=DateTime.fromISO(e);return n.isValid||t.test(e)&&(e=e.replace(t,"T$1"),n=DateTime.fromISO(e),n.isValid)?n:null}function le$3(e){return _$4(e)?e:w$6(e)?"true"===(e=e.toLowerCase()):!!Z$7(e)&&(0!==e&&!isNaN(e))}function se$4(e,t){return t$7(e)?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=t),e)}function ue$3(e){if(null===e)return null;if(e instanceof w$7)return "NaN"===e.x||null===e.x||isNaN(e.x)?null:e;if(e instanceof v$4){if(0===e.rings.length)return null;for(const t of e.rings)if(t.length>0)return e;return null}if(e instanceof m$7){if(0===e.paths.length)return null;for(const t of e.paths)if(t.length>0)return e;return null}return e instanceof u$7?0===e.points.length?null:e:e instanceof w$8?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null}function fe$2(e,t){if(!e)return t;if(!e.domain)return t;let n=null;if("string"===e.field.type||"esriFieldTypeString"===e.field.type)t=K$3(t);else {if(null==t)return null;if(""===t)return t;t=re$5(t);}for(let r=0;r<e.domain.codedValues.length;r++){const a=e.domain.codedValues[r];a.code===t&&(n=a);}return null===n?t:n.name}function ce$3(e,t){if(!e)return t;if(!e.domain)return t;let n=null;t=K$3(t);for(let r=0;r<e.domain.codedValues.length;r++){const a=e.domain.codedValues[r];a.name===t&&(n=a);}return null===n?t:n.code}function me$3(e,t,n=null,r=null){if(!t)return null;if(!t.fields)return null;let a,i,o=null;for(let l=0;l<t.fields.length;l++){const n=t.fields[l];n.name.toLowerCase()===e.toString().toLowerCase()&&(o=n);}if(null===o)throw new t$6(null,e$7.FieldNotFound,null,{key:e});return null===r&&n&&t.typeIdField&&(r=n.hasField(t.typeIdField)?n.field(t.typeIdField):null),null!=r&&t.types.some((e=>e.id===r&&(a=e.domains&&e.domains[o.name],a&&"inherited"===a.type&&(a=de$3(o.name,t),i=!0),!0))),i||a||(a=de$3(e,t)),{field:o,domain:a}}function de$3(e,t){let n;return t.fields.some((t=>(t.name.toLowerCase()===e.toLowerCase()&&(n=t.domain),!!n))),n}function ye$2(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});const n="boolean"==typeof t.cycles&&t.cycles,r=t.cmp&&(a=t.cmp,function(e){return function(t,n){const r={key:t,value:e[t]},i={key:n,value:e[n]};return a(r,i)}});var a;const i=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0===t)return;if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);let a,o;if(Array.isArray(t)){for(o="[",a=0;a<t.length;a++)a&&(o+=","),o+=e(t[a])||"null";return o+"]"}if(null===t)return "null";if(i.includes(t)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const l=i.push(t)-1,s=Object.keys(t).sort(r&&r(t));for(o="",a=0;a<s.length;a++){const n=s[a],r=e(t[n]);r&&(o&&(o+=","),o+=JSON.stringify(n)+":"+r);}return i.splice(l,1),"{"+o+"}"}(e)}function pe$2(e){if(null===e)return null;const t=[];for(const n of e)n&&n.arcadeDeclaredClass&&"esri.arcade.Feature"===n.arcadeDeclaredClass?t.push(n.geometry()):t.push(n);return t}function ge$3(e,t){if(!(t instanceof w$7))throw new t$6(null,e$7.InvalidParameter,null);e.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]);}function he$3(e,t){if(Y$5(e)||E$3(e)){let n=!1,a=!1,i=[],o=t;if(Y$5(e)){for(const t of e)ge$3(i,t);i.length>0&&(o=e[0].spatialReference,n=e[0].hasZ,a=e[0].hasM);}else if(e instanceof i$6)i=e._elements,i.length>0&&(n=e._hasZ,a=e._hasM,o=e.get(0).spatialReference);else {if(!E$3(e))throw new t$6(null,e$7.InvalidParameter,null);for(const t of e.toArray())ge$3(i,t);i.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,a=!0===e.get(0).hasM);}if(0===i.length)return null;return h$4(i,a,n)||(i=i.slice(0).reverse()),new v$4({rings:[i],spatialReference:o,hasZ:n,hasM:a})}return e}function Se$2(e,t){if(Y$5(e)||E$3(e)){let n=!1,a=!1,i=[],o=t;if(Y$5(e)){for(const t of e)ge$3(i,t);i.length>0&&(o=e[0].spatialReference,n=!0===e[0].hasZ,a=!0===e[0].hasM);}else if(e instanceof i$6)i=e._elements,i.length>0&&(n=e._hasZ,a=e._hasM,o=e.get(0).spatialReference);else if(E$3(e)){for(const t of e.toArray())ge$3(i,t);i.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,a=!0===e.get(0).hasM);}return 0===i.length?null:new m$7({paths:[i],spatialReference:o,hasZ:n,hasM:a})}return e}function be$2(e,t){if(Y$5(e)||E$3(e)){let n=!1,a=!1,i=[],l=t;if(Y$5(e)){for(const t of e)ge$3(i,t);i.length>0&&(l=e[0].spatialReference,n=!0===e[0].hasZ,a=!0===e[0].hasM);}else if(e instanceof i$6)i=e._elements,i.length>0&&(n=e._hasZ,a=e._hasM,l=e.get(0).spatialReference);else if(E$3(e)){for(const t of e.toArray())ge$3(i,t);i.length>0&&(l=e.get(0).spatialReference,n=!0===e.get(0).hasZ,a=!0===e.get(0).hasM);}return 0===i.length?null:new u$7({points:i,spatialReference:l,hasZ:n,hasM:a})}return e}function xe$2(e,n=!1){const r=[];if(null===e)return r;if(!0===Y$5(e)){for(let t=0;t<e.length;t++){const a=K$3(e[t]);""===a&&!0!==n||r.push(a);}return r}if(e instanceof t$5){for(let t=0;t<e.length();t++){const a=K$3(e.get(t));""===a&&!0!==n||r.push(a);}return r}if(I$5(e)){const t=K$3(e);return ""===t&&!0!==n||r.push(t),r}return []}let Te=0;function Me$2(e){return Te++,Te%100==0?(Te=0,new Promise((t=>{setTimeout((()=>{t(e);}),0);}))):e}function Ne$1(e,t,n){switch(n){case"&":return e&t;case"|":return e|t;case"^":return e^t;case"<<":return e<<t;case">>":return e>>t;case">>>":return e>>>t}}function De$1(e,n=null){return null==e?null:_$4(e)||Z$7(e)||w$6(e)?e:e instanceof p$6?!0===n?.keepGeometryType?e:e.toJSON():e instanceof t$5?e.toArray().map((e=>De$1(e,n))):e instanceof Array?e.map((e=>De$1(e,n))):e instanceof Date?e:null!==e&&"object"==typeof e&&void 0!==e.castAsJson?e.castAsJson(n):null}async function ke(e,t,n,r,a){const i=await je$1(e,t,n);a[r]=i;}async function je$1(e,n=null,r=null){if(e instanceof t$5&&(e=e.toArray()),null==e)return null;if(I$5(e)||e instanceof p$6||e instanceof Date)return De$1(e,r);if(e instanceof Array){const t=[],a=[];for(const o of e)null===o||I$5(o)||o instanceof p$6||o instanceof Date?a.push(De$1(o,r)):(a.push(null),t.push(ke(o,n,r,a.length-1,a)));return t.length>0&&await Promise.all(t),a}return null!==e&&"object"==typeof e&&void 0!==e.castAsJsonAsync?e.castAsJsonAsync(n,r):null}function Ae$2(e,t,n){const r=e.fullSchema();if(null===r)return null;if(!r.fields)return null;return me$3(t,r,e,n)}function Re$1(e){const t=e.fullSchema();return null===t?null:t.fields&&t.typeIdField?{subtypeField:t.typeIdField,subtypes:t.types?t.types.map((e=>({name:e.name,code:e.id}))):[]}:null}function Fe$2(e,t,n,r){const a=e.fullSchema();if(null===a)return null;if(!a.fields)return null;const i=me$3(t,a,e,r);if(void 0===n)try{n=e.field(t);}catch(o){return null}return fe$2(i,n)}function Ce$2(e,t,n,r){const a=e.fullSchema();if(null===a)return null;if(!a.fields)return null;if(void 0===n){try{n=e.field(t);}catch(i){return null}return n}return ce$3(me$3(t,a,e,r),n)}function Ie$2(e){const t=e.fullSchema();if(null===t)return null;if(!t.fields)return null;const n=[];for(const r of t.fields)n.push(o$5(r));return {objectIdField:t.objectIdField,globalIdField:t.globalIdField,geometryType:void 0===v$3[t.geometryType]?"":v$3[t.geometryType],fields:n}}const ve$2=Object.freeze(Object.defineProperty({__proto__:null,ReturnResultE:T$7,ImplicitResultE:M$6,ImplicitResult:N$5,ReturnResult:D$6,voidOperation:k$3,breakResult:j$2,continueResult:A$4,multiReplace:R$2,isFunctionParameter:F$3,isModule:C$4,isSimpleType:I$5,defaultUndefined:v$2,getType:O$4,isString:w$6,isBoolean:_$4,isNumber:Z$7,isInteger:L$3,isArray:Y$5,isFeature:J$6,isFeatureSet:P$5,isFeatureSetCollection:G$3,isImmutableArray:E$3,isDate:z$6,pcCheck:V$5,absRound:H$5,generateUUID:U$3,formatNumber:q$4,formatDate:B$4,standardiseDateFormat:W$7,greaterThanLessThan:Q$5,equalityTest:X$5,toString:K$3,toNumberArray:ee$5,toStringExplicit:te$5,toNumber:re$5,toDate:ae$3,toDateTime:ie$4,toBoolean:le$3,fixSpatialReference:se$4,fixNullGeometry:ue$3,getDomainValue:fe$2,getDomainCode:ce$3,getDomain:me$3,stableStringify:ye$2,autoCastFeatureToGeometry:pe$2,autoCastArrayOfPointsToPolygon:he$3,autoCastArrayOfPointsToPolyline:Se$2,autoCastArrayOfPointsToMultiPoint:be$2,toStringArray:xe$2,tick:Me$2,binaryOperator:Ne$1,castAsJson:De$1,castAsJsonAsync:je$1,featureFullDomain:Ae$2,featureSubtypes:Re$1,featureDomainValueLookup:Fe$2,featureDomainCodeLookup:Ce$2,featureSchema:Ie$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function w$5(t,s=!1){if(null==t)return null;if(Z$7(t))return re$5(t);if(_$4(t))return le$3(t);if(w$6(t))return K$3(t);if(z$6(t))return ae$3(t);if(Y$5(t)){const i=[];for(const e of t)i.push(w$5(e,s));return i}const i=new J$5;i.immutable=!1;for(const e of Object.keys(t)){const n=t[e];void 0!==n&&i.setField(e,w$5(n,s));}return i.immutable=s,i}class J$5{constructor(t){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=t instanceof J$5?t.attributes:t??{};}field(i){const e=i.toLowerCase(),n=this.attributes[i];if(void 0!==n)return n;for(const t in this.attributes)if(t.toLowerCase()===e)return this.attributes[t];throw new t$6(null,e$7.FieldNotFound,null,{key:i})}setField(i,n){if(this.immutable)throw new t$6(null,e$7.Immutable,null);if(F$3(n))throw new t$6(null,e$7.NoFunctionInDictionary,null);const r=i.toLowerCase();if(void 0===this.attributes[i]){for(const t in this.attributes)if(t.toLowerCase()===r)return void(this.attributes[t]=n);this.attributes[i]=n;}else this.attributes[i]=n;}hasField(t){const s=t.toLowerCase();if(void 0!==this.attributes[t])return !0;for(const i in this.attributes)if(i.toLowerCase()===s)return !0;return !1}keys(){let t=[];for(const s in this.attributes)t.push(s);return t=t.sort(),t}castToText(t=!1){let s="";for(const e in this.attributes){""!==s&&(s+=",");const u=this.attributes[e];null==u?s+=JSON.stringify(e)+":null":_$4(u)||Z$7(u)||w$6(u)?s+=JSON.stringify(e)+":"+JSON.stringify(u):u instanceof p$6?s+=JSON.stringify(e)+":"+te$5(u):u instanceof t$5||u instanceof Array?s+=JSON.stringify(e)+":"+te$5(u,null,t):u instanceof Date?s+=t?JSON.stringify(e)+":"+JSON.stringify(u.getTime()):JSON.stringify(e)+":"+JSON.stringify(u):null!==u&&"object"==typeof u&&void 0!==u.castToText&&(s+=JSON.stringify(e)+":"+u.castToText(t));}return "{"+s+"}"}static convertObjectToArcadeDictionary(t,s=!0){const i=new J$5;i.immutable=!1;for(const e in t){const s=t[e];void 0!==s&&i.setField(e.toString(),w$5(s));}return i.immutable=s,i}static convertJsonToArcade(t,s=!1){return w$5(t,s)}castAsJson(t=null){const s={};for(let i in this.attributes){const e=this.attributes[i];void 0!==e&&(t?.keyTranslate&&(i=t.keyTranslate(i)),s[i]=De$1(e,t));}return s}async castDictionaryValueAsJsonAsync(t,s,i,e=null,n){const r=await je$1(i,e,n);return t[s]=r,r}async castAsJsonAsync(t=null,s=null){const i={},e=[];for(let n in this.attributes){const r=this.attributes[n];s?.keyTranslate&&(n=s.keyTranslate(n)),void 0!==r&&(I$5(r)||r instanceof p$6||r instanceof Date?i[n]=De$1(r,s):e.push(this.castDictionaryValueAsJsonAsync(i,n,r,t,s)));}return e.length>0&&await Promise.all(e),i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class g$4{constructor(){this.arcadeDeclaredClass="esri.arcade.Feature",this._optimizedGeomDefinition=null,this._geometry=null,this.attributes=null,this._layer=null,this._datesfixed=!0,this.immutable=!0,this._datefields=null,this.immutable=!0;}static createFromGraphic(t){const e=new g$4;return e._geometry=r$7(t.geometry)?t.geometry:null,void 0===t.attributes||null===t.attributes?e.attributes={}:e.attributes=t.attributes,t._sourceLayer?(e._layer=t._sourceLayer,e._datesfixed=!1):t._layer?(e._layer=t._layer,e._datesfixed=!1):t.layer&&"fields"in t.layer?(e._layer=t.layer,e._datesfixed=!1):t.sourceLayer&&"fields"in t.sourceLayer&&(e._layer=t.sourceLayer,e._datesfixed=!1),e}static createFromArcadeFeature(t){const e=new g$4;return e._datesfixed=t._datesfixed,e.attributes=t.attributes,e._geometry=t._geometry,e._optimizedGeomDefinition=t._optimizedGeomDefinition,t._layer&&(e._layer=t._layer),e}static createFromOptimisedFeature(t,e,i){const s=new g$4;return s._geometry=t.geometry?{geometry:t.geometry}:null,s._optimizedGeomDefinition=i,s.attributes=t.attributes||{},s._layer=e,s._datesfixed=!1,s}static createFromArcadeDictionary(e){const i=new g$4;return i.attributes=e.field("attributes"),null!==i.attributes&&i.attributes instanceof J$5?(i.attributes=i.attributes.attributes,null===i.attributes&&(i.attributes={})):i.attributes={},i._geometry=e.field("geometry"),null!==i._geometry&&(i._geometry instanceof J$5?i._geometry=g$4.parseGeometryFromDictionary(i._geometry):i._geometry instanceof p$6||(i._geometry=null)),i}static createFromGraphicLikeObject(t,e,i=null){const s=new g$4;return null===e&&(e={}),s.attributes=e,s._geometry=r$7(t)?t:null,s._layer=i,s._layer&&(s._datesfixed=!1),s}repurposeFromGraphicLikeObject(t,e,i=null){null===e&&(e={}),this.attributes=e,this._geometry=t||null,this._layer=i,this._layer?this._datesfixed=!1:this._datesfixed=!0;}castToText(t=!1){let o="";!1===this._datesfixed&&this._fixDates();for(const n in this.attributes){""!==o&&(o+=",");const l=this.attributes[n];null==l?o+=JSON.stringify(n)+":null":_$4(l)||Z$7(l)||w$6(l)?o+=JSON.stringify(n)+":"+JSON.stringify(l):l instanceof p$6?o+=JSON.stringify(n)+":"+te$5(l):l instanceof t$5||l instanceof Array?o+=JSON.stringify(n)+":"+te$5(l,null,t):l instanceof Date?o+=t?JSON.stringify(n)+":"+JSON.stringify(l.getTime()):JSON.stringify(n)+":"+JSON.stringify(l):null!==l&&"object"==typeof l&&void 0!==l.castToText&&(o+=JSON.stringify(n)+":"+l.castToText(t));}return '{"geometry":'+(null===this.geometry()?"null":te$5(this.geometry()))+',"attributes":{'+o+"}}"}_fixDates(){if(null!==this._datefields)return this._datefields.length>0&&this._fixDateFields(this._datefields),void(this._datesfixed=!0);const t=[],e=this._layer.fields;for(let i=0;i<e.length;i++){const s=e[i],r=s.type;"date"!==r&&"esriFieldTypeDate"!==r||t.push(s.name);}this._datefields=t,t.length>0&&this._fixDateFields(t),this._datesfixed=!0;}_fixDateFields(t){this.attributes={...this.attributes};for(let e=0;e<t.length;e++){let i=this.attributes[t[e]];if(null===i);else if(void 0===i){for(const s in this.attributes)if(s.toLowerCase()===t[e].toLowerCase()){i=this.attributes[s],null!==i&&(i instanceof Date||(this.attributes[s]=new Date(i)));break}}else i instanceof Date||(this.attributes[t[e]]=new Date(i));}}geometry(){return null===this._geometry||this._geometry instanceof p$6||(this._optimizedGeomDefinition?(this._geometry=e$8(v$5(rt(this._geometry,this._optimizedGeomDefinition.geometryType,this._optimizedGeomDefinition.hasZ,this._optimizedGeomDefinition.hasM))),this._geometry.spatialReference=this._optimizedGeomDefinition.spatialReference):this._geometry=e$8(v$5(this._geometry))),this._geometry}field(t){!1===this._datesfixed&&this._fixDates();const e=this.attributes[t];if(void 0!==e)return e;const i=t.toLowerCase();for(const s in this.attributes)if(s.toLowerCase()===i)return this.attributes[s];if(this._hasFieldDefinition(i))return null;throw new t$6(null,e$7.FieldNotFound,null,{key:t})}_hasFieldDefinition(t){if(null===this._layer)return !1;for(let e=0;e<this._layer.fields.length;e++){if(this._layer.fields[e].name.toLowerCase()===t)return !0}return !1}setField(t,e){if(this.immutable)throw new t$6(null,e$7.Immutable,null);if(!1===I$5(e))throw new t$6(null,e$7.TypeNotAllowedInFeature,null);const i=t.toLowerCase();if(void 0===this.attributes[t]){for(const t in this.attributes)if(t.toLowerCase()===i)return void(this.attributes[t]=e);this.attributes[t]=e;}else this.attributes[t]=e;}hasField(t){const e=t.toLowerCase();if(void 0!==this.attributes[t])return !0;for(const i in this.attributes)if(i.toLowerCase()===e)return !0;return !!this._hasFieldDefinition(e)}keys(){let t=[];const e={};for(const i in this.attributes)t.push(i),e[i.toLowerCase()]=1;if(null!==this._layer)for(let i=0;i<this._layer.fields.length;i++){const s=this._layer.fields[i];1!==e[s.name.toLowerCase()]&&t.push(s.name);}return t=t.sort(),t}static parseGeometryFromDictionary(t){const e=g$4._convertDictionaryToJson(t,!0);return void 0!==e.hasm&&(e.hasM=e.hasm,delete e.hasm),void 0!==e.hasz&&(e.hasZ=e.hasz,delete e.hasz),void 0!==e.spatialreference&&(e.spatialReference=e.spatialreference,delete e.spatialreference),void 0!==e.rings&&(e.rings=this._fixPathArrays(e.rings,!0===e.hasZ,!0===e.hasZ)),void 0!==e.paths&&(e.paths=this._fixPathArrays(e.paths,!0===e.hasZ,!0===e.hasM)),void 0!==e.points&&(e.points=this._fixPointArrays(e.points,!0===e.hasZ,!0===e.hasM)),v$5(e)}static _fixPathArrays(t,i,s){const r=[];if(t instanceof Array)for(let e=0;e<t.length;e++)r.push(this._fixPointArrays(t[e],i,s));else if(t instanceof t$5)for(let e=0;e<t.length();e++)r.push(this._fixPointArrays(t.get(e),i,s));return r}static _fixPointArrays(t,i,s){const r=[];if(t instanceof Array)for(let a=0;a<t.length;a++){const o=t[a];o instanceof w$7?i&&s?r.push([o.x,o.y,o.z,o.m]):i?r.push([o.x,o.y,o.z]):s?r.push([o.x,o.y,o.m]):r.push([o.x,o.y]):o instanceof t$5?r.push(o.toArray()):r.push(o);}else if(t instanceof t$5)for(let a=0;a<t.length();a++){const o=t.get(a);o instanceof w$7?i&&s?r.push([o.x,o.y,o.z,o.m]):i?r.push([o.x,o.y,o.z]):s?r.push([o.x,o.y,o.m]):r.push([o.x,o.y]):o instanceof t$5?r.push(o.toArray()):r.push(o);}return r}static _convertDictionaryToJson(e,i=!1){const s={};for(const r in e.attributes){let a=e.attributes[r];a instanceof J$5&&(a=g$4._convertDictionaryToJson(a)),i?s[r.toLowerCase()]=a:s[r]=a;}return s}static parseAttributesFromDictionary(t){const e={};for(const i in t.attributes){const s=t.attributes[i];if(!I$5(s))throw new t$6(null,e$7.InvalidParameter,null);e[i]=s;}return e}static fromJson(t){let e=null;null!==t.geometry&&void 0!==t.geometry&&(e=v$5(t.geometry));const a={};if(null!==t.attributes&&void 0!==t.attributes)for(const o in t.attributes){const e=t.attributes[o];if(null===e)a[o]=e;else {if(!(w$6(e)||Z$7(e)||_$4(e)||z$6(e)))throw new t$6(null,e$7.InvalidParameter,null);a[o]=e;}}return g$4.createFromGraphicLikeObject(e,a,null)}fullSchema(){return this._layer}gdbVersion(){if(null===this._layer)return "";const t=this._layer.gdbVersion;return void 0===t?"":""===t&&this._layer.capabilities&&this._layer.capabilities.isVersioned?"SDE.DEFAULT":t}castAsJson(t){const e={attributes:{},geometry:!0===t?.keepGeometryType?this.geometry():this.geometry().toJSON()};for(const i in this.attributes){const s=this.attributes[i];void 0!==s&&(e.attributes[i]=De$1(s,t));}return e}async castAsJsonAsync(t=null,e){return this.castAsJson(e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e$5={all:{min:2,max:2},none:{min:2,max:2},any:{min:2,max:2},reduce:{min:2,max:3},map:{min:2,max:2},filter:{min:2,max:2},fromcodepoint:{min:1,max:-1},fromcharcode:{min:1,max:-1},tocodepoint:{min:1,max:2},tocharcode:{min:1,max:2},concatenate:{min:0,max:-1},expects:{min:1,max:-1},getfeatureset:{min:1,max:2},week:{min:1,max:2},fromjson:{min:1,max:1},length3d:{min:1,max:2},tohex:{min:1,max:1},hash:{min:1,max:1},isoweek:{min:1,max:1},isoweekday:{min:1,max:1},hasvalue:{min:2,max:2},isomonth:{min:1,max:1},isoyear:{min:1,max:1},resize:{min:2,max:3},slice:{min:0,max:-1},splice:{min:0,max:-1},push:{min:2,max:2},pop:{min:1,max:1},includes:{min:2,max:2},array:{min:1,max:2},front:{min:1,max:1},back:{min:1,max:1},insert:{min:3,max:3},erase:{min:2,max:2},split:{min:2,max:4},guid:{min:0,max:1},standardizeguid:{min:2,max:2},today:{min:0,max:0},angle:{min:2,max:3},bearing:{min:2,max:3},urlencode:{min:1,max:1},now:{min:0,max:0},timestamp:{min:0,max:0},day:{min:1,max:1},month:{min:1,max:1},year:{min:1,max:1},hour:{min:1,max:1},second:{min:1,max:1},millisecond:{min:1,max:1},minute:{min:1,max:1},weekday:{min:1,max:1},toutc:{min:1,max:1},tolocal:{min:1,max:1},date:{min:0,max:7},datediff:{min:2,max:3},dateadd:{min:2,max:3},trim:{min:1,max:1},text:{min:1,max:2},left:{min:2,max:2},right:{min:2,max:2},mid:{min:2,max:3},upper:{min:1,max:1},proper:{min:1,max:2},lower:{min:1,max:1},find:{min:2,max:3},iif:{min:3,max:3},decode:{min:2,max:-1},when:{min:2,max:-1},defaultvalue:{min:2,max:2},isempty:{min:1,max:1},domaincode:{min:2,max:4},domainname:{min:2,max:4},polygon:{min:1,max:1},point:{min:1,max:1},polyline:{min:1,max:1},extent:{min:1,max:1},multipoint:{min:1,max:1},ringisclockwise:{min:1,max:1},geometry:{min:1,max:1},count:{min:0,max:-1},number:{min:1,max:2},acos:{min:1,max:1},asin:{min:1,max:1},atan:{min:1,max:1},atan2:{min:2,max:2},ceil:{min:1,max:2},floor:{min:1,max:2},round:{min:1,max:2},cos:{min:1,max:1},exp:{min:1,max:1},log:{min:1,max:1},min:{min:0,max:-1},constrain:{min:3,max:3},console:{min:0,max:-1},max:{min:0,max:-1},pow:{min:2,max:2},random:{min:0,max:0},sqrt:{min:1,max:1},sin:{min:1,max:1},tan:{min:1,max:1},abs:{min:1,max:1},isnan:{min:1,max:1},stdev:{min:0,max:-1},average:{min:0,max:-1},mean:{min:0,max:-1},sum:{min:0,max:-1},variance:{min:0,max:-1},distinct:{min:0,max:-1},first:{min:1,max:1},top:{min:2,max:2},boolean:{min:1,max:1},dictionary:{min:0,max:-1},typeof:{min:1,max:1},reverse:{min:1,max:1},replace:{min:3,max:4},sort:{min:1,max:2},feature:{min:1,max:-1},haskey:{min:2,max:2},indexof:{min:2,max:2},disjoint:{min:2,max:2},intersects:{min:2,max:2},touches:{min:2,max:2},crosses:{min:2,max:2},within:{min:2,max:2},contains:{min:2,max:2},overlaps:{min:2,max:2},equals:{min:2,max:2},relate:{min:3,max:3},intersection:{min:2,max:2},union:{min:1,max:2},difference:{min:2,max:2},symmetricdifference:{min:2,max:2},clip:{min:2,max:2},cut:{min:2,max:2},area:{min:1,max:2},areageodetic:{min:1,max:2},length:{min:1,max:2},lengthgeodetic:{min:1,max:2},distancegeodetic:{min:2,max:3},distance:{min:2,max:3},densify:{min:2,max:3},densifygeodetic:{min:2,max:3},generalize:{min:2,max:4},buffer:{min:2,max:3},buffergeodetic:{min:2,max:3},offset:{min:2,max:6},rotate:{min:2,max:3},issimple:{min:1,max:1},simplify:{min:1,max:1},convexhull:{min:1,max:1},centroid:{min:1,max:1},isselfintersecting:{min:1,max:1},multiparttosinglepart:{min:1,max:1},setgeometry:{min:2,max:2},portal:{min:1,max:1},getuser:{min:0,max:2},subtypes:{min:1,max:1},subtypecode:{min:1,max:1},subtypename:{min:1,max:1},domain:{min:2,max:3},convertdirection:{min:3,max:3},schema:{min:1,max:1}},n$1={functionDefinitions:new Map,constantDefinitions:new Map},a$5={functionDefinitions:new Map,constantDefinitions:new Map};for(const b of ["pi","infinity"])a$5.constantDefinitions.set(b,{type:"constant"}),n$1.constantDefinitions.set(b,{type:"constant"});a$5.constantDefinitions.set("textformatting",{type:"namespace",key:"textformatting",members:[{key:"backwardslash",type:"constant"},{key:"doublequote",type:"constant"},{key:"forwardslash",type:"constant"},{key:"tab",type:"constant"},{key:"singlequote",type:"constant"},{key:"newline",type:"constant"}]}),n$1.constantDefinitions.set("textformatting",{type:"namespace",key:"textformatting",members:[{key:"backwardslash",type:"constant"},{key:"tab",type:"constant"},{key:"singlequote",type:"constant"},{key:"doublequote",type:"constant"},{key:"forwardslash",type:"constant"},{key:"newline",type:"constant"}]});for(const b in e$5){const t=e$5[b];a$5.functionDefinitions.set(b,{overloads:[{type:"function",parametersInfo:{min:t.min,max:t.max}}]}),n$1.functionDefinitions.set(b,{overloads:[{type:"function",parametersInfo:{min:t.min,max:t.max}}]});}const t$3=["featureset","getuser","featuresetbyid","featuresetbyname","featuresetbyassociation","featuresetbyrelationshipname","featuresetbyurl","getfeatureset","attachments","featuresetbyportalitem"],i$4=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","length3d","lengthgeodetic","distance","distancegeodetic","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","convexhull","simplify","multiparttosinglepart"];function m$5(e){return "string"==typeof e||e instanceof String}function o$4(e,t){const i="sync"===t?n$1:a$5;i.functionDefinitions.has(e.name.toLowerCase())?i.functionDefinitions.get(e.name.toLowerCase())?.overloads.push({type:"function",parametersInfo:{min:e.min,max:e.max}}):i.functionDefinitions.set(e.name.toLowerCase(),{overloads:[{type:"function",parametersInfo:{min:e.min,max:e.max}}]});}function s$7(e,n){if(e)for(const a of e)r$4(a,n);}function r$4(e,n){if(e&&!1!==n(e))switch(e.type){case"ImportDeclaration":s$7(e.specifiers,n),r$4(e.source,n);break;case"ExportNamedDeclaration":r$4(e.declaration,n);break;case"ArrayExpression":s$7(e.elements,n);break;case"AssignmentExpression":case"BinaryExpression":case"LogicalExpression":r$4(e.left,n),r$4(e.right,n);break;case"BlockStatement":case"Program":s$7(e.body,n);break;case"BreakStatement":case"ContinueStatement":case"EmptyStatement":case"Identifier":case"Literal":break;case"CallExpression":r$4(e.callee,n),s$7(e.arguments,n);break;case"ExpressionStatement":r$4(e.expression,n);break;case"ForInStatement":r$4(e.left,n),r$4(e.right,n),r$4(e.body,n);break;case"ForStatement":r$4(e.init,n),r$4(e.test,n),r$4(e.update,n),r$4(e.body,n);break;case"WhileStatement":r$4(e.test,n),r$4(e.body,n);break;case"FunctionDeclaration":r$4(e.id,n),s$7(e.params,n),r$4(e.body,n);break;case"IfStatement":r$4(e.test,n),r$4(e.consequent,n),r$4(e.alternate,n);break;case"MemberExpression":r$4(e.object,n),r$4(e.property,n);break;case"ObjectExpression":s$7(e.properties,n);break;case"Property":r$4(e.key,n),r$4(e.value,n);break;case"ReturnStatement":case"UnaryExpression":case"UpdateExpression":r$4(e.argument,n);break;case"VariableDeclaration":s$7(e.declarations,n);break;case"VariableDeclarator":r$4(e.id,n),r$4(e.init,n);break;case"TemplateLiteral":s$7(e.expressions,n),s$7(e.quasis,n);}}function c$4(e,n){let a=!1;const t=n.toLowerCase();return r$4(e,(e=>!a&&("Identifier"===e.type&&e.name&&e.name.toLowerCase()===t&&(a=!0),!0))),a}function x$5(e){const n=[];return r$4(e,(e=>("ImportDeclaration"===e.type&&e.source&&e.source.value&&n.push({libname:e.specifiers[0].local.name.toLowerCase(),source:e.source.value}),!0))),n}function p$3(e,n){let a=!1;const t=n.toLowerCase();return r$4(e,(e=>!a&&("CallExpression"!==e.type||"Identifier"!==e.callee.type||!e.callee.name||e.callee.name.toLowerCase()!==t||(a=!0,!1)))),a}function l$7(e){const n=[];return r$4(e,(e=>"MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?n.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&n.push(e.object.name.toLowerCase()+"."+e.property.value?.toString().toLowerCase()),!1))),n}function u$5(e){const n=[];return r$4(e,(e=>{if("CallExpression"===e.type){if("Identifier"===e.callee.type&&"expects"===e.callee.name.toLowerCase()){let a="";for(let t=0;t<(e.arguments||[]).length;t++)0===t?"Identifier"===e.arguments[t].type&&(a=e.arguments[t].name.toLowerCase()):a&&"Literal"===e.arguments[t].type&&m$5(e.arguments[t].value)&&n.push(a+"."+e.arguments[t].value.toLowerCase());return !1}if("Identifier"===e.callee.type&&["domainname","domaincode","domain","haskey"].includes(e.callee.name.toLowerCase())&&e.arguments.length>=2){let a="";return "Identifier"===e.arguments[0].type&&(a=e.arguments[0].name.toLowerCase()),a&&"Literal"===e.arguments[1].type&&m$5(e.arguments[1].value)&&n.push(a+"."+e.arguments[1].value.toLowerCase()),!1}}return "MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?n.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&n.push(e.object.name.toLowerCase()+"."+e.property.value?.toString().toLowerCase()),!1)})),n}function y$5(e){const n=[];return r$4(e,(e=>("CallExpression"===e.type&&"Identifier"===e.callee.type&&n.push(e.callee.name.toLowerCase()),!0))),n}function d$6(e,n=[]){let a=null;if(void 0===e.usesFeatureSet){null===a&&(a=y$5(e)),e.usesFeatureSet=!1;for(let n=0;n<a.length;n++)t$3.includes(a[n])&&(e.usesFeatureSet=!0,e.isAsync=!0);if(!1===e.usesFeatureSet&&n&&n.length>0)for(const a of n)if(c$4(e,a)){e.usesFeatureSet=!0,e.isAsync=!0;break}}if(void 0===e.usesModules){e.usesModules=!1;x$5(e).length>0&&(e.usesModules=!0);}if(void 0===e.usesGeometry){e.usesGeometry=!1,null===a&&(a=y$5(e));for(let n=0;n<a.length;n++)i$4.includes(a[n])&&(e.usesGeometry=!0);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function F$2(F){function m(e,o,i){if(e instanceof t$5)return e.toArray();if(Y$5(e))return e;throw new t$6(o,e$7.InvalidParameter,i)}function p(n,t){const r=n.length,e=Math.floor(r/2);return 0===r?[]:1===r?[n[0]]:y(p(n.slice(0,e),t),p(n.slice(e,r),t),t)}function y(n,t,r){const e=[];for(;n.length>0||t.length>0;)if(n.length>0&&t.length>0){let o=r(n[0],t[0]);isNaN(o)&&(o=0),o<=0?(e.push(n[0]),n=n.slice(1)):(e.push(t[0]),t=t.slice(1));}else n.length>0?(e.push(n[0]),n=n.slice(1)):t.length>0&&(e.push(t[0]),t=t.slice(1));return e}async function v(n,t){const r=n.length,e=Math.floor(r/2);if(0===r)return [];if(1===r)return [n[0]];const o=[await v(n.slice(0,e),t),await v(n.slice(e,r),t)];return P(o[0],o[1],t,[])}async function P(n,t,r,e){const o=e;if(!(n.length>0||t.length>0))return e;if(n.length>0&&t.length>0){let i=await r(n[0],t[0]);return isNaN(i)&&(i=1),i<=0?(o.push(n[0]),n=n.slice(1)):(o.push(t[0]),t=t.slice(1)),P(n,t,r,e)}return n.length>0?(o.push(n[0]),P(n=n.slice(1),t,r,e)):t.length>0?(o.push(t[0]),P(n,t=t.slice(1),r,e)):void 0}function I(r,o,i,u){V$5(i,1,2,r,o);let l=i[0];if(E$3(l)&&(l=l.toArray()),!1===Y$5(l))throw new t$6(r,e$7.InvalidParameter,o);if(i.length>1){if(!1===F$3(i[1]))throw new t$6(r,e$7.InvalidParameter,o);let e=l;const a=i[1].createFunction(r);return u?v(e,a):(e=p(e,((n,t)=>a(n,t))),e)}let f=l;if(0===f.length)return [];const g={};for(let n=0;n<f.length;n++){const t=O$4(f[n]);""!==t&&(g[t]=!0);}if(!0===g.Array||!0===g.Dictionary||!0===g.Feature||!0===g.Point||!0===g.Polygon||!0===g.Polyline||!0===g.Multipoint||!0===g.Extent||!0===g.Function)return f.slice(0);let F=0,m="";for(const n in g)F++,m=n;return f=F>1||"String"===m?p(f,((n,t)=>{if(null==n||n===k$3)return null==t||t===k$3?0:1;if(null==t||t===k$3)return -1;const r=K$3(n),e=K$3(t);return r<e?-1:r===e?0:1})):"Number"===m?p(f,((n,t)=>n-t)):"Boolean"===m?p(f,((n,t)=>n===t?0:t?-1:1)):"Date"===m?p(f,((n,t)=>t-n)):f.slice(0),f}F.functions.array=function(r,a){return F.standardFunction(r,a,((c,s,l)=>{V$5(l,1,2,r,a);const f=re$5(l[0]);if(isNaN(f)||!1===L$3(f))throw new t$6(r,e$7.InvalidParameter,a);const d=v$2(l[1],null),h=new Array(f);return h.fill(d),h}))},F.functions.front=function(r,o){return F.standardFunction(r,o,((i,u,s)=>{if(V$5(s,1,1,r,o),E$3(s[0])){if(s[0].length()<=0)throw new t$6(r,e$7.OutOfBounds,o);return s[0].get(0)}if(Y$5(s[0])){if(s[0].length<=0)throw new t$6(r,e$7.OutOfBounds,o);return s[0][0]}throw new t$6(r,e$7.InvalidParameter,o)}))},F.functions.back=function(r,o){return F.standardFunction(r,o,((i,u,s)=>{if(V$5(s,1,1,r,o),E$3(s[0])){if(s[0].length()<=0)throw new t$6(r,e$7.OutOfBounds,o);return s[0].get(s[0].length()-1)}if(Y$5(s[0])){if(s[0].length<=0)throw new t$6(r,e$7.OutOfBounds,o);return s[0][s[0].length-1]}throw new t$6(r,e$7.InvalidParameter,o)}))},F.functions.push=function(r,o){return F.standardFunction(r,o,((i,u,a)=>{if(V$5(a,1,2,r,o),Y$5(a[0]))return a[0][a[0].length]=a[1],a[0].length;throw new t$6(r,e$7.InvalidParameter,o)}))},F.functions.pop=function(r,o){return F.standardFunction(r,o,((i,u,a)=>{if(V$5(a,1,1,r,o),Y$5(a[0])){if(a[0].length<=0)throw new t$6(r,e$7.OutOfBounds,o);const e=a[0][a[0].length-1];return a[0].length=a[0].length-1,e}throw new t$6(r,e$7.InvalidParameter,o)}))},F.functions.erase=function(r,u){return F.standardFunction(r,u,((a,l,f)=>{if(V$5(f,2,2,r,u),Y$5(f[0])){let e=re$5(f[1]);if(isNaN(e)||!1===L$3(e))throw new t$6(r,e$7.InvalidParameter,u);const a=f[0];if(a.length<=0)throw new t$6(r,e$7.OutOfBounds,u);if(e<0&&(e=a.length+e),e<0)throw new t$6(r,e$7.OutOfBounds,u);if(e>=a.length)throw new t$6(r,e$7.OutOfBounds,u);return a.splice(e,1),k$3}throw new t$6(r,e$7.InvalidParameter,u)}))},F.functions.insert=function(r,u){return F.standardFunction(r,u,((a,l,f)=>{if(V$5(f,3,3,r,u),Y$5(f[0])){const e=re$5(f[1]);if(isNaN(e)||!1===L$3(e))throw new t$6(r,e$7.InvalidParameter,u);const a=f[2],c=f[0];if(e>c.length)throw new t$6(r,e$7.OutOfBounds,u);if(e<0&&e<-1*c.length)throw new t$6(r,e$7.OutOfBounds,u);return e===c.length?(c[e]=a,k$3):(c.splice(e,0,a),k$3)}throw new t$6(r,e$7.InvalidParameter,u)}))},F.functions.resize=function(r,a){return F.standardFunction(r,a,((l,f,d)=>{if(V$5(d,2,3,r,a),Y$5(d[0])){const e=re$5(d[1]);if(isNaN(e)||!1===L$3(e))throw new t$6(r,e$7.InvalidParameter,a);if(e<0)throw new t$6(r,e$7.InvalidParameter,a);const c=v$2(d[2],null),l=d[0];if(l.length>=e)return l.length=e,k$3;const f=l.length;l.length=e;for(let n=f;n<l.length;n++)l[n]=c;return k$3}throw new t$6(r,e$7.InvalidParameter,a)}))},F.functions.includes=function(r,o){return F.standardFunction(r,o,((i,u,s)=>{if(V$5(s,2,2,r,o),Y$5(s[0])){const n=s[1];return s[0].findIndex((t=>X$5(t,n)))>-1}if(E$3(s[0])){const n=s[1];return s[0].toArray().findIndex((t=>X$5(t,n)))>-1}throw new t$6(r,e$7.InvalidParameter,o)}))},F.functions.slice=function(r,s){return F.standardFunction(r,s,((l,f,d)=>{if(V$5(d,1,3,r,s),Y$5(d[0])){const e=re$5(v$2(d[1],0)),a=re$5(v$2(d[2],d[0].length));if(isNaN(e)||!1===L$3(e))throw new t$6(r,e$7.InvalidParameter,s);if(isNaN(a)||!1===L$3(a))throw new t$6(r,e$7.InvalidParameter,s);return d[0].slice(e,a)}if(E$3(d[0])){const e=d[0],a=re$5(v$2(d[1],0)),c=re$5(v$2(d[2],e.length()));if(isNaN(a)||!1===L$3(a))throw new t$6(r,e$7.InvalidParameter,s);if(isNaN(c)||!1===L$3(c))throw new t$6(r,e$7.InvalidParameter,s);return e.toArray().slice(a,c)}throw new t$6(r,e$7.InvalidParameter,s)}))},F.functions.splice=function(n,t){return F.standardFunction(n,t,((n,t,r)=>{const e=[];for(let o=0;o<r.length;o++)Y$5(r[o])?e.push(...r[o]):E$3(r[o])?e.push(...r[o].toArray()):e.push(r[o]);return e}))},F.functions.top=function(r,i){return F.standardFunction(r,i,((u,s,l)=>{if(V$5(l,2,2,r,i),Y$5(l[0]))return re$5(l[1])>=l[0].length?l[0].slice(0):l[0].slice(0,re$5(l[1]));if(E$3(l[0]))return re$5(l[1])>=l[0].length()?l[0].slice(0):l[0].slice(0,re$5(l[1]));throw new t$6(r,e$7.InvalidParameter,i)}))},F.functions.first=function(n,t){return F.standardFunction(n,t,((r,o,i)=>(V$5(i,1,1,n,t),Y$5(i[0])?0===i[0].length?null:i[0][0]:E$3(i[0])?0===i[0].length()?null:i[0].get(0):null)))},"sync"===F.mode&&(F.functions.sort=function(n,t){return F.standardFunction(n,t,((r,e,o)=>I(n,t,o,!1)))},F.functions.any=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){const t=u(n);if(_$4(t)&&!0===t)return !0}return !1}))},F.functions.all=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){if(!0!==u(n))return !1}return !0}))},F.functions.none=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){if(!0===u(n))return !1}return !0}))},F.functions.reduce=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,3,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);return 2===i.length?0===a.length?null:a.reduce(((n,t)=>{const r=u(n,t);return n=void 0!==r&&r!==k$3?r:null})):a.reduce(((n,t)=>{const r=u(n,t);return n=void 0!==r&&r!==k$3?r:null}),i[2])}))},F.functions.map=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t),c=[];for(const n of a){const t=u(n);void 0!==t&&t!==k$3?c.push(t):c.push(null);}return c}))},F.functions.filter=function(n,t){return F.standardFunction(n,t,((r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t),c=[];for(const n of a){!0===u(n)&&c.push(n);}return c}))}),"async"===F.mode&&(F.functions.sort=function(n,t){return F.standardFunctionAsync(n,t,((r,e,o)=>I(n,t,o,!0)))},F.functions.any=function(n,t){return F.standardFunctionAsync(n,t,(async(r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){const t=await u(n);let r=null;if(r=C$5(r)?await t:t,_$4(r)&&!0===r)return !0}return !1}))},F.functions.all=function(n,t){return F.standardFunctionAsync(n,t,(async(r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){const t=await u(n);let r=null;if(r=C$5(r)?await t:t,!0!==r)return !1}return !0}))},F.functions.none=function(n,t){return F.standardFunctionAsync(n,t,(async(r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t);for(const n of a){const t=await u(n);let r=null;if(r=C$5(r)?await t:t,!0===r)return !1}return !0}))},F.functions.filter=function(n,t){return F.standardFunctionAsync(n,t,(async(r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t),c=[];for(const n of a){const t=await u(n);let r=null;r=C$5(r)?await t:t,!0===r&&c.push(n);}return c}))},F.functions.reduce=function(n,t){return F.standardFunctionAsync(n,t,((r,o,i)=>{V$5(i,2,3,n,t);const a=i[1].createFunction(n),c=m(i[0],n,t);let l=null;if(i.length>2){const n=v$2(i[2],null);l=c.reduce((async(n,t)=>{let r=await n;return void 0!==r&&r!==k$3||(r=null),a(r,t)}),Promise.resolve(n));}else {if(0===c.length)return null;l=c.reduce((async(n,t,r)=>{if(r<=1)return a(n,t);let e=await n;return void 0!==e&&e!==k$3||(e=null),a(e,t)}));}return l.then((n=>void 0!==n&&n!==k$3?n:null))}))},F.functions.map=function(n,t){return F.standardFunctionAsync(n,t,(async(r,o,i)=>{V$5(i,2,2,n,t);const u=i[1].createFunction(n),a=m(i[0],n,t),c=[];for(const n of a){const t=await u(n);let r=null;r=C$5(r)?await t:t,void 0!==r&&r!==k$3?c.push(r):c.push(null);}return c}))});}const m$4=Object.freeze(Object.defineProperty({__proto__:null,registerFunctions:F$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m$3(e){const t=new Date(e.getTime()),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const s=d$5(r),u=new Date(0);u.setFullYear(n,0,4),u.setHours(0,0,0,0);const o=d$5(u);return t.getTime()>=s.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function d$5(e){const t=1,n=new Date(e.getTime()),r=n.getDay(),s=(r<t?7:0)+r-t;return n.setDate(n.getDate()-s),n.setHours(0,0,0,0),n}function h$2(e){const t=m$3(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);return d$5(n)}function N$4(e,t,n){return e+(D$5(n)?y$4:w$4)[t]}function D$5(e){return e%4==0&&(e%100!=0||e%400==0)}const w$4=[0,31,59,90,120,151,181,212,243,273,304,334],y$4=[0,31,60,91,121,152,182,213,244,274,305,335];function T$6(e){return null===e?e:isNaN(e.getTime())?null:e}function M$5(D,w){D.today=function(t,n){return w(t,n,((r,s,u)=>{V$5(u,0,0,t,n);const o=new Date;return o.setHours(0,0,0,0),o}))},D.now=function(t,n){return w(t,n,((r,s,u)=>{V$5(u,0,0,t,n);return new Date}))},D.timestamp=function(t,n){return w(t,n,((r,s,u)=>{V$5(u,0,0,t,n);let o=new Date;return o=new Date(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),o}))},D.toutc=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?null:new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}))},D.tolocal=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?null:DateTime.utc(a.getFullYear(),a.getMonth()+1,a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()).toJSDate()}))},D.day=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getDate()}))},D.month=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getMonth()}))},D.year=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getFullYear()}))},D.hour=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getHours()}))},D.second=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getSeconds()}))},D.millisecond=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getMilliseconds()}))},D.minute=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getMinutes()}))},D.week=function(s,u){return w(s,u,((o,a,c)=>{V$5(c,1,2,s,u);const f=ae$3(c[0]);if(null===f)return NaN;const g=re$5(v$2(c[1],0));if(g<0||g>6)throw new t$6(s,e$7.InvalidParameter,u);const m=f.getDate(),d=f.getMonth(),h=f.getFullYear(),D=f.getDay(),w=N$4(m,d,h)-1,y=Math.floor(w/7);return D-g+(D-g<0?7:0)<w-7*y?y+1:y}))},D.weekday=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getDay()}))},D.isoweekday=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);if(null===a)return NaN;let c=a.getDay();return 0===c&&(c=7),c}))},D.isomonth=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:a.getMonth()+1}))},D.isoweek=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);if(null===a)return NaN;const c=d$5(a).getTime()-h$2(a).getTime();return Math.round(c/6048e5)+1}))},D.isoyear=function(n,r){return w(n,r,((s,u,o)=>{V$5(o,1,1,n,r);const a=ae$3(o[0]);return null===a?NaN:m$3(a)}))},D.date=function(r,a){return w(r,a,((c,l,i)=>{if(V$5(i,0,7,r,a),3===i.length)return T$6(new Date(re$5(i[0]),re$5(i[1]),re$5(i[2]),0,0,0,0));if(4===i.length)return T$6(new Date(re$5(i[0]),re$5(i[1]),re$5(i[2]),re$5(i[3]),0,0,0));if(5===i.length)return T$6(new Date(re$5(i[0]),re$5(i[1]),re$5(i[2]),re$5(i[3]),re$5(i[4]),0,0));if(6===i.length)return T$6(new Date(re$5(i[0]),re$5(i[1]),re$5(i[2]),re$5(i[3]),re$5(i[4]),re$5(i[5]),0));if(7===i.length)return T$6(new Date(re$5(i[0]),re$5(i[1]),re$5(i[2]),re$5(i[3]),re$5(i[4]),re$5(i[5]),re$5(i[6])));if(2===i.length){let e,t=K$3(i[1]);return ""===t?null:(t=W$7(t),e="X"===t?DateTime.fromSeconds(re$5(i[0])):"x"===t?DateTime.fromMillis(re$5(i[0])):DateTime.fromFormat(K$3(i[0]),t,{locale:l$b(),numberingSystem:"latn"}),e.isValid?e.toJSDate():null)}if(1===i.length){if(w$6(i[0])){if(""===i[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;if(!0===/^[0-9][0-9][0-9][0-9]$/.test(i[0]))return ae$3(i[0]+"-01-01")}const e=re$5(i[0]);if(!1===isNaN(e))return T$6(new Date(e));return ae$3(i[0])}return 0===i.length?new Date:void 0}))},D.datediff=function(t,n){return w(t,n,((r,u,o)=>{V$5(o,2,3,t,n);const c=ie$4(o[0]),l=ie$4(o[1]);if(null===c||null===l)return NaN;switch(K$3(o[2]).toLowerCase()){case"days":case"day":case"d":return c.diff(l,"days").days;case"months":case"month":return c.diff(l,"months").months;case"minutes":case"minute":case"m":return "M"===o[2]?c.diff(l,"months").months:c.diff(l,"minutes").minutes;case"seconds":case"second":case"s":return c.diff(l,"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return c.diff(l).milliseconds;case"hours":case"hour":case"h":return c.diff(l,"hours").hours;case"years":case"year":case"y":return c.diff(l,"years").years}}))},D.dateadd=function(t,r){return w(t,r,((u,o,l)=>{V$5(l,2,3,t,r);const i=ie$4(l[0]);if(null===i)return null;let f=re$5(l[1]);if(isNaN(f))return i.toJSDate();let g="milliseconds";switch(K$3(l[2]).toLowerCase()){case"days":case"day":case"d":g="days",f=H$5(f);break;case"months":case"month":g="months",f=H$5(f);break;case"minutes":case"minute":case"m":g="M"===l[2]?"months":"minutes";break;case"seconds":case"second":case"s":g="seconds";break;case"milliseconds":case"millisecond":case"ms":g="milliseconds";break;case"hours":case"hour":case"h":g="hours";break;case"years":case"year":case"y":g="years";}return i.plus({[g]:f}).toJSDate()}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$4(t,n,e){return Math.sqrt((t[0]-n[0])**2+(t[1]-n[1])**2+(void 0!==t[2]&&void 0!==n[2]?(t[2]*e-n[2]*e)**2:0))}const r$3=[];for(const v of [[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){const t=v[0];for(let n=1;n<v.length;n++)r$3[v[n]]=t;}const o$3=[];function s$6(t){return t.vcsWkid&&void 0!==r$3[t.vcsWkid]?o$3[r$3[t.vcsWkid]]:t.latestVcsWkid&&void 0!==r$3[t.latestVcsWkid]?o$3[r$3[t.latestVcsWkid]]:1}function c$3(t,n,e){const r={x:0,y:0};n&&(r.z=0),e&&(r.m=0);let o=0,s=t[0];for(let c=0;c<t.length;c++){const a=t[c];if(!1===f$1(a,s)){const t=h$1(s,a,n),c=i$3(s,a,n,e);c.x*=t,c.y*=t,r.x+=c.x,r.y+=c.y,n&&(c.z*=t,r.z+=c.z),e&&(c.m*=t,r.m+=c.m),o+=t,s=a;}}return o>0?(r.x/=o,r.y/=o,n&&(r.z/=o),e&&(r.m/=o)):(r.x=t[0][0],r.y=t[0][1],n&&(r.z=t[0][2]),e&&n?r.m=t[0][3]:e&&(r.m=t[0][2])),r}function i$3(t,n,e,r){const o={x:(t[0]+n[0])/2,y:(t[1]+n[1])/2};return e&&(o.z=(t[2]+n[2])/2),e&&r?o.m=(t[3]+n[3])/2:r&&(o.m=(t[2]+n[2])/2),o}function a$4(t,n){if(t.length<=1)return 0;let e=0;for(let r=1;r<t.length;r++)e+=h$1(t[r-1],t[r],n);return e}function h$1(t,n,e){const r=n[0]-t[0],o=n[1]-t[1];if(e){const t=n[2]-n[2];return Math.sqrt(r*r+o*o+t*t)}return Math.sqrt(r*r+o*o)}function f$1(t,n){if(t.length!==n.length)return !1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return !1;return !0}function l$6(n){const e={x:0,y:0,spatialReference:n.spatialReference.toJSON()},r={x:0,y:0,spatialReference:n.spatialReference.toJSON()};let o=0,s=0;for(let t=0;t<n.paths.length;t++){if(0===n.paths[t].length)continue;const i=a$4(n.paths[t],!0===n.hasZ);if(0===i){const r=c$3(n.paths[t],!0===n.hasZ,!0===n.hasM);e.x+=r.x,e.y+=r.y,!0===n.hasZ&&(e.z+=r.z),!0===n.hasM&&(e.m+=r.m),++o;}else {const e=c$3(n.paths[t],!0===n.hasZ,!0===n.hasM);r.x+=e.x*i,r.y+=e.y*i,!0===n.hasZ&&(r.z+=e.z*i),!0===n.hasM&&(r.m+=e.m*i),s+=i;}}return s>0?(r.x/=s,r.y/=s,!0===n.hasZ&&(r.z/=s),!0===n.hasM&&(r.m/=s),new w$7(r)):o>0?(e.x/=o,e.y/=o,!0===n.hasZ&&(r.z/=o),!0===n.hasM&&(e.m/=o),new w$7(e)):null}function u$4(n){if(0===n.points.length)return null;let e=0,r=0,o=0,s=0;for(let t=0;t<n.points.length;t++){const c=n.getPoint(t);!0===c.hasZ&&(o+=c.z),!0===c.hasM&&(s+=c.m),e+=c.x,r+=c.y,s+=c.m;}const c={x:e/n.points.length,y:r/n.points.length,spatialReference:null};return c.spatialReference=n.spatialReference.toJSON(),!0===n.hasZ&&(c.z=o/n.points.length),!0===n.hasM&&(c.m=s/n.points.length),new w$7(c)}function y$3(t,n){return t.x*n.x+t.y*n.y}function x$4(t,n){return t.x*n.y-n.x*t.y}function m$2(t,n,e=0){for(;t<e;)t+=n;const r=e+n;for(;t>=r;)t-=n;return t}function g$3(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function p$2(t,n){return m$2(g$3(t,n),2*Math.PI)*(180/Math.PI)}function M$4(t,n){return m$2(Math.PI/2-g$3(t,n),2*Math.PI)*(180/Math.PI)}function z$5(t,n,e){const r={x:t.x-n.x,y:t.y-n.y},o={x:e.x-n.x,y:e.y-n.y};return Math.atan2(x$4(r,o),y$3(r,o))}function P$4(t,n,e){return m$2(z$5(t,n,e),2*Math.PI)*(180/Math.PI)}function d$4(t,n,e){return m$2(-1*z$5(t,n,e),2*Math.PI)*(180/Math.PI)}o$3[9002]=.3048,o$3[9003]=.3048006096012192,o$3[9095]=.3048007491;const I$4=[0,0];function Z$6(t){for(let e=0;e<t.length;e++){const r=t[e];for(let s=0;s<r.length-1;s++){const o=r[s],c=r[s+1];for(let r=e+1;r<t.length;r++)for(let e=0;e<t[r].length-1;e++){const s=t[r][e],i=t[r][e+1];if(G$4(o,c,s,i,I$4)&&!(I$4[0]===o[0]&&I$4[1]===o[1]||I$4[0]===s[0]&&I$4[1]===s[1]||I$4[0]===c[0]&&I$4[1]===c[1]||I$4[0]===i[0]&&I$4[1]===i[1]))return !0}}const o=r.length;if(!(o<3))for(let t=0;t<=o-2;t++){const e=r[t],s=r[t+1];for(let c=t+2;c<=o-2;c++){const t=r[c],o=r[c+1];if(G$4(e,s,t,o,I$4)&&!(I$4[0]===e[0]&&I$4[1]===e[1]||I$4[0]===t[0]&&I$4[1]===t[1]||I$4[0]===s[0]&&I$4[1]===s[1]||I$4[0]===o[0]&&I$4[1]===o[1]))return !0}}}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function M$3(e){return e&&"esri.arcade.Feature"===e.arcadeDeclaredClass}function C$3(D,C){D.ringisclockwise=function(e,n){return C(e,n,((o,s,l)=>{V$5(l,1,1,e,n);let c=[],f=!1,u=!1;if(null===l[0])return !1;if(Y$5(l[0])){for(const t of l[0]){if(!(t instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);c.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]);}c.length>0&&(f=l[0][0].hasZ,u=l[0][0].hasM);}else if(l[0]instanceof i$6)c=l[0]._elements,c.length>0&&(f=l[0]._hasZ,u=l[0]._hasM);else {if(!E$3(l[0]))throw new t$6(e,e$7.InvalidParameter,n);for(const t of l[0].toArray()){if(!(t instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);c.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y]);}c.length>0&&(f=l[0].get(0).hasZ,u=l[0].get(0).hasM);}return !(c.length<3)&&h$4(c,u,f)}))},D.polygon=function(t,a){return C(t,a,((i,l,c)=>{V$5(c,1,1,t,a);let f=null;if(c[0]instanceof J$5){if(f=se$4(g$4.parseGeometryFromDictionary(c[0]),t.spatialReference),f instanceof v$4==!1)throw new t$6(t,e$7.InvalidParameter,a)}else f=c[0]instanceof v$4?v$5(c[0].toJSON()):se$4(new v$4(JSON.parse(c[0])),t.spatialReference);if(null!==f&&!1===f.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(f)}))},D.polyline=function(t,a){return C(t,a,((i,l,c)=>{V$5(c,1,1,t,a);let f=null;if(c[0]instanceof J$5){if(f=se$4(g$4.parseGeometryFromDictionary(c[0]),t.spatialReference),f instanceof m$7==!1)throw new t$6(t,e$7.InvalidParameter,a)}else f=c[0]instanceof m$7?v$5(c[0].toJSON()):se$4(new m$7(JSON.parse(c[0])),t.spatialReference);if(null!==f&&!1===f.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(f)}))},D.point=function(t,a){return C(t,a,((i,l,c)=>{V$5(c,1,1,t,a);let f=null;if(c[0]instanceof J$5){if(f=se$4(g$4.parseGeometryFromDictionary(c[0]),t.spatialReference),f instanceof w$7==!1)throw new t$6(t,e$7.InvalidParameter,a)}else f=c[0]instanceof w$7?v$5(c[0].toJSON()):se$4(new w$7(JSON.parse(c[0])),t.spatialReference);if(null!==f&&!1===f.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(f)}))},D.multipoint=function(t,a){return C(t,a,((i,l,c)=>{V$5(c,1,1,t,a);let f=null;if(c[0]instanceof J$5){if(f=se$4(g$4.parseGeometryFromDictionary(c[0]),t.spatialReference),f instanceof u$7==!1)throw new t$6(t,e$7.InvalidParameter,a)}else f=c[0]instanceof u$7?v$5(c[0].toJSON()):se$4(new u$7(JSON.parse(c[0])),t.spatialReference);if(null!==f&&!1===f.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(f)}))},D.extent=function(t,a){return C(t,a,((i,c,f)=>{f=pe$2(f),V$5(f,1,1,t,a);let u=null;if(f[0]instanceof J$5)u=se$4(g$4.parseGeometryFromDictionary(f[0]),t.spatialReference);else if(f[0]instanceof w$7){const e={xmin:f[0].x,ymin:f[0].y,xmax:f[0].x,ymax:f[0].y,spatialReference:f[0].spatialReference.toJSON()},n=f[0];n.hasZ?(e.zmin=n.z,e.zmax=n.z):n.hasM&&(e.mmin=n.m,e.mmax=n.m),u=v$5(e);}else u=f[0]instanceof v$4||f[0]instanceof m$7||f[0]instanceof u$7?v$5(f[0].extent?.toJSON()):f[0]instanceof w$8?v$5(f[0].toJSON()):se$4(new w$8(JSON.parse(f[0])),t.spatialReference);if(null!==u&&!1===u.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(u)}))},D.geometry=function(t,a){return C(t,a,((i,l,c)=>{V$5(c,1,1,t,a);let f=null;if(null===c[0])return null;if(f=M$3(c[0])?se$4(c[0].geometry(),t.spatialReference):c[0]instanceof J$5?se$4(g$4.parseGeometryFromDictionary(c[0]),t.spatialReference):se$4(v$5(JSON.parse(c[0])),t.spatialReference),null!==f&&!1===f.spatialReference.equals(t.spatialReference))throw new t$6(t,e$7.WrongSpatialReference,a);return ue$3(f)}))},D.setgeometry=function(e,n){return C(e,n,((t,a,i)=>{if(V$5(i,2,2,e,n),!M$3(i[0]))throw new t$6(e,e$7.InvalidParameter,n);if(!0===i[0].immutable)throw new t$6(e,e$7.Immutable,n);if(!(i[1]instanceof p$6||null===i[1]))throw new t$6(e,e$7.InvalidParameter,n);return i[0]._geometry=i[1],k$3}))},D.feature=function(t,r){return C(t,r,((a,i,s)=>{if(0===s.length)throw new t$6(t,e$7.WrongNumberOfParameters,r);let l=null;if(1===s.length)if(w$6(s[0]))l=g$4.fromJson(JSON.parse(s[0]));else if(M$3(s[0]))l=g$4.createFromArcadeFeature(s[0]);else if(s[0]instanceof p$6)l=g$4.createFromGraphicLikeObject(s[0],null,null);else {if(!(s[0]instanceof J$5))throw new t$6(t,e$7.InvalidParameter,r);{let t=s[0].hasField("geometry")?s[0].field("geometry"):null,r=s[0].hasField("attributes")?s[0].field("attributes"):null;null!==t&&t instanceof J$5&&(t=g$4.parseGeometryFromDictionary(t)),null!==r&&(r=g$4.parseAttributesFromDictionary(r)),l=g$4.createFromGraphicLikeObject(t,r,null);}}else if(2===s.length){let a=null,i=null;if(null!==s[0])if(s[0]instanceof p$6)a=s[0];else {if(!(a instanceof J$5))throw new t$6(t,e$7.InvalidParameter,r);a=g$4.parseGeometryFromDictionary(s[0]);}if(null!==s[1]){if(!(s[1]instanceof J$5))throw new t$6(t,e$7.InvalidParameter,r);i=g$4.parseAttributesFromDictionary(s[1]);}l=g$4.createFromGraphicLikeObject(a,i,null);}else {let a=null;const i={};if(null!==s[0])if(s[0]instanceof p$6)a=s[0];else {if(!(a instanceof J$5))throw new t$6(t,e$7.InvalidParameter,r);a=g$4.parseGeometryFromDictionary(s[0]);}for(let e=1;e<s.length;e+=2){const n=K$3(s[e]),a=s[e+1];if(!(null==a||w$6(a)||isNaN(a)||z$6(a)||Z$7(a)||_$4(a)))throw new t$6(t,e$7.InvalidParameter,r);if(F$3(a)||!1===I$5(a))throw new t$6(t,e$7.InvalidParameter,r);i[n]=a===k$3?null:a;}l=g$4.createFromGraphicLikeObject(a,i,null);}return l._geometry=se$4(l.geometry(),t.spatialReference),l.immutable=!1,l}))},D.dictionary=function(n,t){return C(n,t,((r,o,s)=>{if(0===s.length){const n=new J$5;return n.immutable=!1,n}if(1===s.length&&w$6(s[0]))try{const n=JSON.parse(s[0]),t=J$5.convertObjectToArcadeDictionary(n,!1);return t.immutable=!1,t}catch(y){throw new t$6(n,e$7.InvalidParameter,t)}if(s.length%2!=0)throw new t$6(n,e$7.WrongNumberOfParameters,t);const l={};for(let e=0;e<s.length;e+=2){const r=K$3(s[e]),o=s[e+1];if(!(null==o||w$6(o)||isNaN(o)||z$6(o)||Z$7(o)||_$4(o)||Y$5(o)||E$3(o)))throw new t$6(n,e$7.InvalidParameter,t);if(F$3(o))throw new t$6(n,e$7.InvalidParameter,t);l[r]=o===k$3?null:o;}const d=new J$5(l);return d.immutable=!1,d}))},D.haskey=function(n,t){return C(n,t,((a,i,o)=>{V$5(o,2,2,n,t);const s=K$3(o[1]);if(M$3(o[0]))return o[0].hasField(s);if(o[0]instanceof J$5)return o[0].hasField(s);if(o[0]instanceof p$6){const e=W$6(o[0],s,null,null,2);return !e||"notfound"!==e.keystate}throw new t$6(n,e$7.InvalidParameter,t)}))},D.hasvalue=function(n,t){return C(n,t,((a,i,o)=>{if(V$5(o,2,2,n,t),null===o[0]||null===o[1])return !1;const s=K$3(o[1]);if(J$6(o[0]))return !!o[0].hasField(s)&&null!==o[0].field(s);if(o[0]instanceof J$5)return !!o[0].hasField(s)&&null!==o[0].field(s);if(o[0]instanceof p$6){return null!==W$6(o[0],s,null,null,0)}return !1}))},D.indexof=function(e,n){return C(e,n,((t,o,s)=>{V$5(s,2,2,e,n);const l=s[1];if(Y$5(s[0])){for(let e=0;e<s[0].length;e++)if(X$5(l,s[0][e]))return e;return -1}if(E$3(s[0])){const e=s[0].length();for(let n=0;n<e;n++)if(X$5(l,s[0].get(n)))return n;return -1}throw new t$6(e,e$7.InvalidParameter,n)}))},D.angle=function(e,n){return C(e,n,((t,a,i)=>{if(i=pe$2(i),V$5(i,2,3,e,n),!(i[0]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);if(!(i[1]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);if(i.length>2&&!(i[2]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);return 2===i.length?p$2(i[0],i[1]):P$4(i[0],i[1],i[2])}))},D.bearing=function(e,n){return C(e,n,((t,a,i)=>{if(i=pe$2(i),V$5(i,2,3,e,n),!(i[0]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);if(!(i[1]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);if(i.length>2&&!(i[2]instanceof w$7))throw new t$6(e,e$7.InvalidParameter,n);return 2===i.length?M$4(i[0],i[1]):d$4(i[0],i[1],i[2])}))},D.isselfintersecting=function(e,n){return C(e,n,((t,o,s)=>{s=pe$2(s),V$5(s,1,1,e,n);let c=s[0];if(c instanceof v$4)return c.isSelfIntersecting;if(c instanceof m$7)return c=c.paths,Z$6(c);if(c instanceof u$7){const e=c.points;for(let n=0;n<e.length;n++)for(let t=0;t<e.length;t++)if(t!==n){let r=!0;for(let a=0;a<e[n].length;a++)if(e[n][a]!==e[t][a]){r=!1;break}if(!0===r)return !0}}return !(!Y$5(c)&&!E$3(c))&&(c=Se$2(c,e.spatialReference),null!==c&&(c=c.paths),Z$6(c))}))};}let Z$5=0;function W$6(n,r,a,i,o=1){let s;switch(r=r.toLowerCase()){case"hasz":{const e=n.hasZ;return void 0!==e&&e}case"hasm":{const e=n.hasM;return void 0!==e&&e}case"spatialreference":{let t=n.spatialReference._arcadeCacheId;if(void 0===t){let e=!0;Object.freeze&&Object.isFrozen(n.spatialReference)&&(e=!1),e&&(Z$5++,n.spatialReference._arcadeCacheId=Z$5,t=Z$5);}const r=new J$5({wkt:n.spatialReference.wkt,wkid:n.spatialReference.wkid});return void 0!==t&&(r._arcadeCacheId="SPREF"+t.toString()),r}}switch(n.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const e=n[r];return void 0!==e?e:null}case"type":return "Extent"}break;case"polygon":switch(r){case"rings":s=n.cache._arcadeCacheId,void 0===s&&(Z$5++,s=Z$5,n.cache._arcadeCacheId=s);return new h$3(n.rings,n.spatialReference,!0===n.hasZ,!0===n.hasM,s);case"type":return "Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==n[r]?n[r]:null;case"type":return "Point"}break;case"polyline":switch(r){case"paths":s=n.cache._arcadeCacheId,void 0===s&&(Z$5++,s=Z$5,n.cache._arcadeCacheId=s);return new h$3(n.paths,n.spatialReference,!0===n.hasZ,!0===n.hasM,s);case"type":return "Polyline"}break;case"multipoint":switch(r){case"points":s=n.cache._arcadeCacheId,void 0===s&&(Z$5++,s=Z$5,n.cache._arcadeCacheId=s);return new i$6(n.points,n.spatialReference,!0===n.hasZ,!0===n.hasM,s,1);case"type":return "Multipoint"}}if(1===o)throw new t$6(a,e$7.InvalidIdentifier,i);return 2===o?{keystate:"notfound"}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r$2(e){if(null==e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function s$5(r){if(null==r)return null;switch(r.type){case"polygon":case"multipoint":case"polyline":return r.extent;case"point":return new w$8({xmin:r.x,ymin:r.y,xmax:r.x,ymax:r.y,spatialReference:r.spatialReference});case"extent":return r}return null}function a$3(e){if(null==e)return null;if("number"==typeof e)return e;let r=e.toLowerCase();switch(r=r.replace(/\s/g,""),r=r.replace(/-/g,""),r){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nm":case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function c$2(e){if(null==e)return null;const r=e.clone();return void 0!==e.cache._geVersion&&(r.cache._geVersion=e.cache._geVersion),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let A$3=null;function z$4(e){return 0===a$7.indexOf("4.")?v$4.fromExtent(e):new v$4({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function E$2(n){A$3=n;}function O$3(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let t=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){t=s$6(n.spatialReference)/$$4(n.spatialReference);}let r=0;if("polyline"===n.type)for(const a of n.paths)for(let n=1;n<a.length;n++)r+=e$4(a[n],a[n-1],t);else if("polygon"===n.type)for(const a of n.rings){for(let n=1;n<a.length;n++)r+=e$4(a[n],a[n-1],t);(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])&&(r+=e$4(a[0],a[a.length-1],t));}else "extent"===n.type&&(r+=2*e$4([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),r+=2*e$4([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),r*=2,r+=4*Math.abs(v$2(n.zmax,0)*t-v$2(n.zmin,0)*t));const i=new m$7({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return A$3.planarLength(i,e)}function q$3(n,v){function I(n,e,t){if(V$5(t,2,2,n,e),t[0]instanceof p$6&&t[1]instanceof p$6);else if(t[0]instanceof p$6&&null===t[1]);else if(t[1]instanceof p$6&&null===t[0]);else if(null!==t[0]||null!==t[1])throw new t$6(n,e$7.InvalidParameter,e)}n.disjoint=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null===a[0]||null===a[1]||A$3.disjoint(a[0],a[1]))))},n.intersects=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.intersects(a[0],a[1]))))},n.touches=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.touches(a[0],a[1]))))},n.crosses=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.crosses(a[0],a[1]))))},n.within=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.within(a[0],a[1]))))},n.contains=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.contains(a[0],a[1]))))},n.overlaps=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null!==a[0]&&null!==a[1]&&A$3.overlaps(a[0],a[1]))))},n.equals=function(n,e){return v(n,e,((t,r,i)=>(V$5(i,2,2,n,e),i[0]===i[1]||(i[0]instanceof p$6&&i[1]instanceof p$6?A$3.equals(i[0],i[1]):!(!z$6(i[0])||!z$6(i[1]))&&i[0].getTime()===i[1].getTime()))))},n.relate=function(n,e){return v(n,e,((t,r,l)=>{if(l=pe$2(l),V$5(l,3,3,n,e),l[0]instanceof p$6&&l[1]instanceof p$6)return A$3.relate(l[0],l[1],K$3(l[2]));if(l[0]instanceof p$6&&null===l[1])return !1;if(l[1]instanceof p$6&&null===l[0])return !1;if(null===l[0]&&null===l[1])return !1;throw new t$6(n,e$7.InvalidParameter,e)}))},n.intersection=function(n,e){return v(n,e,((t,r,a)=>(a=pe$2(a),I(n,e,a),null===a[0]||null===a[1]?null:A$3.intersect(a[0],a[1]))))},n.union=function(n,t){return v(n,t,((r,a,l)=>{const o=[];if(0===(l=pe$2(l)).length)throw new t$6(n,e$7.WrongNumberOfParameters,t);if(1===l.length)if(Y$5(l[0])){const e=pe$2(l[0]);for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);o.push(e[r]);}}else {if(!E$3(l[0])){if(l[0]instanceof p$6)return se$4(c$2(l[0]),n.spatialReference);if(null===l[0])return null;throw new t$6(n,e$7.InvalidParameter,t)}{const e=pe$2(l[0].toArray());for(let r=0;r<e.length;r++)if(null!==e[r]){if(!(e[r]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);o.push(e[r]);}}}else for(let e=0;e<l.length;e++)if(null!==l[e]){if(!(l[e]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);o.push(l[e]);}return 0===o.length?null:A$3.union(o)}))},n.difference=function(n,t){return v(n,t,((r,a,l)=>(l=pe$2(l),I(n,t,l),null!==l[0]&&null===l[1]?c$2(l[0]):null===l[0]?null:A$3.difference(l[0],l[1]))))},n.symmetricdifference=function(n,t){return v(n,t,((r,a,l)=>(l=pe$2(l),I(n,t,l),null===l[0]&&null===l[1]?null:null===l[0]?c$2(l[1]):null===l[1]?c$2(l[0]):A$3.symmetricDifference(l[0],l[1]))))},n.clip=function(n,e){return v(n,e,((t,r,l)=>{if(l=pe$2(l),V$5(l,2,2,n,e),!(l[1]instanceof w$8)&&null!==l[1])throw new t$6(n,e$7.InvalidParameter,e);if(null===l[0])return null;if(!(l[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return null===l[1]?null:A$3.clip(l[0],l[1])}))},n.cut=function(n,t){return v(n,t,((r,l,o)=>{if(o=pe$2(o),V$5(o,2,2,n,t),!(o[1]instanceof m$7)&&null!==o[1])throw new t$6(n,e$7.InvalidParameter,t);if(null===o[0])return [];if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);return null===o[1]?[c$2(o[0])]:A$3.cut(o[0],o[1])}))},n.area=function(n,e){return v(n,e,((r,l,o)=>{if(V$5(o,1,2,n,e),null===(o=pe$2(o))[0])return 0;if(Y$5(o[0])||E$3(o[0])){const e=he$3(o[0],n.spatialReference);return null===e?0:A$3.planarArea(e,r$2(v$2(o[1],-1)))}if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.planarArea(o[0],r$2(v$2(o[1],-1)))}))},n.areageodetic=function(n,e){return v(n,e,((r,l,o)=>{if(V$5(o,1,2,n,e),null===(o=pe$2(o))[0])return 0;if(Y$5(o[0])||E$3(o[0])){const e=he$3(o[0],n.spatialReference);return null===e?0:A$3.geodesicArea(e,r$2(v$2(o[1],-1)))}if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.geodesicArea(o[0],r$2(v$2(o[1],-1)))}))},n.length=function(n,e){return v(n,e,((t,l,o)=>{if(V$5(o,1,2,n,e),null===(o=pe$2(o))[0])return 0;if(Y$5(o[0])||E$3(o[0])){const e=Se$2(o[0],n.spatialReference);return null===e?0:A$3.planarLength(e,a$3(v$2(o[1],-1)))}if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.planarLength(o[0],a$3(v$2(o[1],-1)))}))},n.length3d=function(n,e){return v(n,e,((t,l,o)=>{if(V$5(o,1,2,n,e),null===(o=pe$2(o))[0])return 0;if(Y$5(o[0])||E$3(o[0])){const e=Se$2(o[0],n.spatialReference);return null===e?0:!0===e.hasZ?O$3(e,a$3(v$2(o[1],-1))):A$3.planarLength(e,a$3(v$2(o[1],-1)))}if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return !0===o[0].hasZ?O$3(o[0],a$3(v$2(o[1],-1))):A$3.planarLength(o[0],a$3(v$2(o[1],-1)))}))},n.lengthgeodetic=function(n,e){return v(n,e,((t,l,o)=>{if(V$5(o,1,2,n,e),null===(o=pe$2(o))[0])return 0;if(Y$5(o[0])||E$3(o[0])){const e=Se$2(o[0],n.spatialReference);return null===e?0:A$3.geodesicLength(e,a$3(v$2(o[1],-1)))}if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.geodesicLength(o[0],a$3(v$2(o[1],-1)))}))},n.distance=function(n,e){return v(n,e,((t,l,o)=>{o=pe$2(o),V$5(o,2,3,n,e);let u=o[0];(Y$5(o[0])||E$3(o[0]))&&(u=be$2(o[0],n.spatialReference));let c=o[1];if((Y$5(o[1])||E$3(o[1]))&&(c=be$2(o[1],n.spatialReference)),!(u instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);if(!(c instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.distance(u,c,a$3(v$2(o[2],-1)))}))},n.distancegeodetic=function(n,e){return v(n,e,((t,l,o)=>{o=pe$2(o),V$5(o,2,3,n,e);const f=o[0],s=o[1];if(!(f instanceof w$7))throw new t$6(n,e$7.InvalidParameter,e);if(!(s instanceof w$7))throw new t$6(n,e$7.InvalidParameter,e);const u=new m$7({paths:[],spatialReference:f.spatialReference});return u.addPath([f,s]),A$3.geodesicLength(u,a$3(v$2(o[2],-1)))}))},n.densify=function(n,e){return v(n,e,((t,l,o)=>{if(o=pe$2(o),V$5(o,2,3,n,e),null===o[0])return null;if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);const f=re$5(o[1]);if(isNaN(f))throw new t$6(n,e$7.InvalidParameter,e);if(f<=0)throw new t$6(n,e$7.InvalidParameter,e);return o[0]instanceof v$4||o[0]instanceof m$7?A$3.densify(o[0],f,a$3(v$2(o[2],-1))):o[0]instanceof w$8?A$3.densify(z$4(o[0]),f,a$3(v$2(o[2],-1))):o[0]}))},n.densifygeodetic=function(n,e){return v(n,e,((t,l,o)=>{if(o=pe$2(o),V$5(o,2,3,n,e),null===o[0])return null;if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);const f=re$5(o[1]);if(isNaN(f))throw new t$6(n,e$7.InvalidParameter,e);if(f<=0)throw new t$6(n,e$7.InvalidParameter,e);return o[0]instanceof v$4||o[0]instanceof m$7?A$3.geodesicDensify(o[0],f,a$3(v$2(o[2],-1))):o[0]instanceof w$8?A$3.geodesicDensify(z$4(o[0]),f,a$3(v$2(o[2],-1))):o[0]}))},n.generalize=function(n,e){return v(n,e,((t,l,o)=>{if(o=pe$2(o),V$5(o,2,4,n,e),null===o[0])return null;if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);const f=re$5(o[1]);if(isNaN(f))throw new t$6(n,e$7.InvalidParameter,e);return A$3.generalize(o[0],f,le$3(v$2(o[2],!0)),a$3(v$2(o[3],-1)))}))},n.buffer=function(n,t){return v(n,t,((l,o,f)=>{if(f=pe$2(f),V$5(f,2,3,n,t),null===f[0])return null;if(!(f[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);const s=re$5(f[1]);if(isNaN(s))throw new t$6(n,e$7.InvalidParameter,t);return 0===s?c$2(f[0]):A$3.buffer(f[0],s,a$3(v$2(f[2],-1)))}))},n.buffergeodetic=function(n,t){return v(n,t,((l,o,f)=>{if(f=pe$2(f),V$5(f,2,3,n,t),null===f[0])return null;if(!(f[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);const s=re$5(f[1]);if(isNaN(s))throw new t$6(n,e$7.InvalidParameter,t);return 0===s?c$2(f[0]):A$3.geodesicBuffer(f[0],s,a$3(v$2(f[2],-1)))}))},n.offset=function(n,e){return v(n,e,((t,l,f)=>{if(f=pe$2(f),V$5(f,2,6,n,e),null===f[0])return null;if(!(f[0]instanceof v$4||f[0]instanceof m$7))throw new t$6(n,e$7.InvalidParameter,e);const s=re$5(f[1]);if(isNaN(s))throw new t$6(n,e$7.InvalidParameter,e);const u=re$5(v$2(f[4],10));if(isNaN(u))throw new t$6(n,e$7.InvalidParameter,e);const c=re$5(v$2(f[5],0));if(isNaN(c))throw new t$6(n,e$7.InvalidParameter,e);return A$3.offset(f[0],s,a$3(v$2(f[2],-1)),K$3(v$2(f[3],"round")).toLowerCase(),u,c)}))},n.rotate=function(n,e){return v(n,e,((t,r,l)=>{l=pe$2(l),V$5(l,2,3,n,e);let o=l[0];if(null===o)return null;if(!(o instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);o instanceof w$8&&(o=v$4.fromExtent(o));const f=re$5(l[1]);if(isNaN(f))throw new t$6(n,e$7.InvalidParameter,e);const s=v$2(l[2],null);if(null===s)return A$3.rotate(o,f);if(s instanceof w$7)return A$3.rotate(o,f,s);throw new t$6(n,e$7.InvalidParameter,e)}))},n.centroid=function(n,t){return v(n,t,((r,l,o)=>{if(o=pe$2(o),V$5(o,1,1,n,t),null===o[0])return null;let c=o[0];if((Y$5(o[0])||E$3(o[0]))&&(c=be$2(o[0],n.spatialReference)),null===c)return null;if(!(c instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);return c instanceof w$7?se$4(c$2(o[0]),n.spatialReference):c instanceof v$4?c.centroid:c instanceof m$7?l$6(c):c instanceof u$7?u$4(c):c instanceof w$8?c.center:null}))},n.multiparttosinglepart=function(n,t){return v(n,t,((r,l,o)=>{o=pe$2(o),V$5(o,1,1,n,t);const f=[];if(null===o[0])return null;if(!(o[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,t);if(o[0]instanceof w$7)return [se$4(c$2(o[0]),n.spatialReference)];if(o[0]instanceof w$8)return [se$4(c$2(o[0]),n.spatialReference)];const s=A$3.simplify(o[0]);if(s instanceof v$4){const n=[],e=[];for(let t=0;t<s.rings.length;t++)if(s.isClockwise(s.rings[t])){const e=v$5({rings:[s.rings[t]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(e);}else e.push({ring:s.rings[t],pt:s.getPoint(t,0)});for(let t=0;t<e.length;t++)for(let r=0;r<n.length;r++)if(n[r].contains(e[t].pt)){n[r].addRing(e[t].ring);break}return n}if(s instanceof m$7){const n=[];for(let e=0;e<s.paths.length;e++){const t=v$5({paths:[s.paths[e]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(t);}return n}if(o[0]instanceof u$7){const t=se$4(c$2(o[0]),n.spatialReference);for(let n=0;n<t.points.length;n++)f.push(t.getPoint(n));return f}return null}))},n.issimple=function(n,e){return v(n,e,((t,r,l)=>{if(l=pe$2(l),V$5(l,1,1,n,e),null===l[0])return !0;if(!(l[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.isSimple(l[0])}))},n.simplify=function(n,e){return v(n,e,((t,r,l)=>{if(l=pe$2(l),V$5(l,1,1,n,e),null===l[0])return null;if(!(l[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.simplify(l[0])}))},n.convexhull=function(n,e){return v(n,e,((t,r,l)=>{if(l=pe$2(l),V$5(l,1,1,n,e),null===l[0])return null;if(!(l[0]instanceof p$6))throw new t$6(n,e$7.InvalidParameter,e);return A$3.convexHull(l[0])}))};}

var geomsync = /*#__PURE__*/Object.freeze({
  __proto__: null,
  registerFunctions: q$3,
  setGeometryEngine: E$2
});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l$5(n,t,r){return void 0===r||0==+r?Math[n](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math[n](+(t[0]+"e"+(t[1]?+t[1]-r:-r)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+r:r))))}function N$3(N,h){function m(n,t,r){const u=re$5(n);return isNaN(u)?u:isNaN(t)||isNaN(r)||t>r?NaN:u<t?t:u>r?r:u}N.number=function(a,f){return h(a,f,((s,l,N)=>{V$5(N,1,2,a,f);const h=N[0];if(Z$7(h))return h;if(null===h)return 0;if(z$6(h))return Number(h);if(_$4(h))return Number(h);if(Y$5(h))return NaN;if(""===h)return Number(h);if(void 0===h)return Number(h);if(w$6(h)){if(void 0!==N[1]){let n=R$2(N[1],"‰","");return n=R$2(n,"¤",""),p$7(h,{pattern:n})}return Number(h.trim())}return Number(h)}))},N.abs=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.abs(re$5(o[0])))))},N.acos=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.acos(re$5(o[0])))))},N.asin=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.asin(re$5(o[0])))))},N.atan=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.atan(re$5(o[0])))))},N.atan2=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,2,2,t,r),Math.atan2(re$5(o[0]),re$5(o[1])))))},N.ceil=function(t,r){return h(t,r,((u,e,o)=>{if(V$5(o,1,2,t,r),2===o.length){let n=re$5(o[1]);return isNaN(n)&&(n=0),l$5("ceil",re$5(o[0]),-1*n)}return Math.ceil(re$5(o[0]))}))},N.round=function(t,r){return h(t,r,((u,e,o)=>{if(V$5(o,1,2,t,r),2===o.length){let n=re$5(o[1]);return isNaN(n)&&(n=0),l$5("round",re$5(o[0]),-1*n)}return Math.round(re$5(o[0]))}))},N.floor=function(t,r){return h(t,r,((u,e,o)=>{if(V$5(o,1,2,t,r),2===o.length){let n=re$5(o[1]);return isNaN(n)&&(n=0),l$5("floor",re$5(o[0]),-1*n)}return Math.floor(re$5(o[0]))}))},N.cos=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.cos(re$5(o[0])))))},N.isnan=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),"number"==typeof o[0]&&isNaN(o[0]))))},N.exp=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.exp(re$5(o[0])))))},N.log=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.log(re$5(o[0])))))},N.pow=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,2,2,t,r),re$5(o[0])**re$5(o[1]))))},N.random=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,0,0,t,r),Math.random())))},N.sin=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.sin(re$5(o[0])))))},N.sqrt=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.sqrt(re$5(o[0])))))},N.tan=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),Math.tan(re$5(o[0])))))},N.defaultvalue=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,2,2,t,r),null===o[0]||""===o[0]||void 0===o[0]?o[1]:o[0])))},N.isempty=function(t,r){return h(t,r,((u,e,o)=>(V$5(o,1,1,t,r),null===o[0]||(""===o[0]||void 0===o[0]))))},N.boolean=function(t,r){return h(t,r,((u,e,o)=>{V$5(o,1,1,t,r);const i=o[0];return le$3(i)}))},N.constrain=function(t,r){return h(t,r,((u,o,i)=>{V$5(i,3,3,t,r);const f=re$5(i[1]),c=re$5(i[2]);if(Y$5(i[0])){const n=[];for(const t of i[0])n.push(m(t,f,c));return n}if(E$3(i[0])){const n=[];for(let t=0;t<i[0].length();t++)n.push(m(i[0].get(t),f,c));return n}return m(i[0],f,c)}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$4(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}function c$1(e){const t=s$4(e);let n=0;for(let r=0;r<e.length;r++)n+=(t-e[r])**2;return n/e.length}function u$3(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function i$2(e,s){const c=[],u={},i=[];for(let o=0;o<e.length;o++){if(void 0!==e[o]&&null!==e[o]&&e[o]!==k$3){const t=e[o];if(Z$7(t)||w$6(t))void 0===u[t]&&(c.push(t),u[t]=1);else {let e=!1;for(let n=0;n<i.length;n++)!0===X$5(i[n],t)&&(e=!0);!1===e&&(i.push(t),c.push(t));}}if(c.length>=s&&-1!==s)return c}return c}function l$4(t,n,r=1e3){switch(t.toLowerCase()){case"distinct":return i$2(n,r);case"avg":case"mean":return s$4(ee$5(n));case"min":return Math.min.apply(Math,ee$5(n));case"sum":return u$3(ee$5(n));case"max":return Math.max.apply(Math,ee$5(n));case"stdev":case"stddev":return Math.sqrt(c$1(ee$5(n)));case"var":case"variance":return c$1(ee$5(n));case"count":return n.length}return 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$2(n,r,t,i){if(1===i.length){if(Y$5(i[0]))return l$4(n,i[0],-1);if(E$3(i[0]))return l$4(n,i[0].toArray(),-1)}return l$4(n,i,-1)}function f(o,f){o.stdev=function(n,r){return f(n,r,((n,r,t)=>a$2("stdev",n,r,t)))},o.variance=function(n,r){return f(n,r,((n,r,t)=>a$2("variance",n,r,t)))},o.average=function(n,r){return f(n,r,((n,r,t)=>a$2("mean",n,r,t)))},o.mean=function(n,r){return f(n,r,((n,r,t)=>a$2("mean",n,r,t)))},o.sum=function(n,r){return f(n,r,((n,r,t)=>a$2("sum",n,r,t)))},o.min=function(n,r){return f(n,r,((n,r,t)=>a$2("min",n,r,t)))},o.max=function(n,r){return f(n,r,((n,r,t)=>a$2("max",n,r,t)))},o.distinct=function(n,r){return f(n,r,((n,r,t)=>a$2("distinct",n,r,t)))},o.count=function(o,a){return f(o,a,((f,c,m)=>{if(V$5(m,1,1,o,a),Y$5(m[0])||w$6(m[0]))return m[0].length;if(E$3(m[0]))return m[0].length();throw new t$6(o,e$7.InvalidParameter,a)}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$2 extends J$5{constructor(s){super(),this.declaredClass="esri.arcade.Portal",this.immutable=!1,this.setField("url",s),this.immutable=!0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$3 extends J$5{constructor(t,e,s,i,a,l){super(),this.attachmentUrl=a,this.declaredClass="esri.arcade.Attachment",this.immutable=!1,this.setField("id",t),this.setField("name",e),this.setField("contenttype",s),this.setField("size",i),this.setField("exifinfo",l),this.immutable=!0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l$3=e=>(n,t,r)=>(r=r||14,+e(n,t).toFixed(r)),d$3=(e,n)=>e+n,m$1=(e,n)=>e*n,g$2=(e,n)=>e/n,_$3=(e,n,t)=>l$3(d$3)(e,n,t),w$3=(e,n,t)=>l$3(m$1)(e,n,t),A$2=(e,n,t)=>l$3(g$2)(e,n,t),D$4=360,p$1=400,E$1=2*Math.PI,T$5=3600,S=3240,R$1=60,M$2=60,F$1=180*T$5/Math.PI,v$1=D$4*R$1*M$2,L$2=90*T$5,U$2=180*T$5,N$2=270*T$5,x$3=String.fromCharCode(7501),z$3="°";function O$2(e){if(!1===w$6(e))throw new t$6(null,e$7.InvalidParameter,null);return e}function G$2(e,n){const t=10**n;return Math.round(e*t)/t}function I$3(e,n){return e%n}function b$1(e){const n=parseFloat(e.toString().replace(Math.trunc(e).toString(),"0"))*Math.sign(e);if(e<0){return {fraction:n,integer:Math.ceil(e)}}return {fraction:n,integer:Math.floor(e)}}var H$4,y$2,q$2,k$2;function C$2(e,n){switch(e){case H$4.north:return "SHORT"===n?"N":"North";case H$4.east:return "SHORT"===n?"E":"East";case H$4.south:return "SHORT"===n?"S":"South";case H$4.west:return "SHORT"===n?"W":"West"}}function P$3(e,n,t){for(;e.length<t;)e=n+e;return e}function Q$4(e,n){return e-Math.floor(e/n)*n}function j$1(e){switch(e){case y$2.truncated_degrees:case y$2.decimal_degrees:return D$4;case y$2.radians:return E$1;case y$2.gradians:return p$1;case y$2.seconds:return v$1;case y$2.fractional_degree_minutes:return R$1;case y$2.fractional_minute_seconds:return M$2;default:throw new t$6(null,e$7.LogicError,null,{reason:"unsupported evaluations"})}}function W$5(e){switch(e.toUpperCase().trim()){case"NORTH":case"NORTHAZIMUTH":case"NORTH AZIMUTH":return q$2.north_azimuth;case"POLAR":return q$2.polar;case"QUADRANT":return q$2.quadrant;case"SOUTH":case"SOUTHAZIMUTH":case"SOUTH AZIMUTH":return q$2.south_azimuth}throw new t$6(null,e$7.LogicError,null,{reason:"unsupported directionType"})}function Z$4(e){switch(e.toUpperCase().trim()){case"D":case"DD":case"DECIMALDEGREE":case"DECIMAL DEGREE":case"DEGREE":case"DECIMALDEGREES":case"DECIMAL DEGREES":case"DEGREES":return y$2.decimal_degrees;case"DMS":case"DEGREESMINUTESSECONDS":case"DEGREES MINUTES SECONDS":return y$2.degrees_minutes_seconds;case"R":case"RAD":case"RADS":case"RADIAN":case"RADIANS":return y$2.radians;case"G":case"GON":case"GONS":case"GRAD":case"GRADS":case"GRADIAN":case"GRADIANS":return y$2.gradians}throw new t$6(null,e$7.LogicError,null,{reason:"unsupported units"})}!function(e){e[e.north=0]="north",e[e.east=1]="east",e[e.south=2]="south",e[e.west=3]="west";}(H$4||(H$4={})),function(e){e[e.decimal_degrees=1]="decimal_degrees",e[e.seconds=2]="seconds",e[e.degrees_minutes_seconds=3]="degrees_minutes_seconds",e[e.radians=4]="radians",e[e.gradians=5]="gradians",e[e.truncated_degrees=6]="truncated_degrees",e[e.fractional_degree_minutes=7]="fractional_degree_minutes",e[e.fractional_minute_seconds=8]="fractional_minute_seconds";}(y$2||(y$2={})),function(e){e[e.north_azimuth=1]="north_azimuth",e[e.polar=2]="polar",e[e.quadrant=3]="quadrant",e[e.south_azimuth=4]="south_azimuth";}(q$2||(q$2={})),function(e){e[e.meridian=0]="meridian",e[e.direction=1]="direction";}(k$2||(k$2={}));class B$3{constructor(e,n,t){this.m_degrees=e,this.m_minutes=n,this.m_seconds=t;}getField(e){switch(e){case y$2.decimal_degrees:case y$2.truncated_degrees:return this.m_degrees;case y$2.fractional_degree_minutes:return this.m_minutes;case y$2.seconds:case y$2.fractional_minute_seconds:return this.m_seconds;default:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"})}}static secondsToDMS(e){const n=b$1(e).fraction;let t=b$1(e).integer;const r=Math.floor(t/T$5);t-=r*T$5;const s=Math.floor(t/M$2);return t-=s*M$2,new B$3(r,s,t+n)}static numberToDms(e){const n=b$1(e).fraction,t=b$1(e).integer,r=w$3(b$1(100*n).fraction,100),s=b$1(100*n).integer;return new B$3(t,s,r)}format(e,n){let t=G$2(this.m_seconds,n),r=this.m_minutes,s=this.m_degrees;if(e===y$2.seconds||e===y$2.fractional_minute_seconds)M$2<=t&&(t-=M$2,++r),R$1<=r&&(r=0,++s),D$4<=s&&(s=0);else if(e===y$2.fractional_degree_minutes)t=0,r=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,s=this.m_degrees,R$1<=r&&(r=0,++s),D$4<=s&&(s=0);else if(e===y$2.decimal_degrees||e===y$2.truncated_degrees){const e=A$2(this.m_seconds,T$5),n=A$2(this.m_minutes,R$1);s=Math.round(this.m_degrees+n+e),r=0,t=0;}return new B$3(s,r,t)}static dmsToSeconds(e,n,t){return e*T$5+n*M$2+t}}class V$4{constructor(e,n,t){this.meridian=e,this.angle=n,this.direction=t;}fetchAzimuth(e){return e===k$2.meridian?this.meridian:this.direction}}class X$4{constructor(e){this._angle=e;}static createFromAngleAndDirection(e,n){return new X$4(new K$2(X$4._convertDirectionFormat(e.extractAngularUnits(y$2.seconds),n,q$2.north_azimuth)))}getAngle(e){const n=this._angle.extractAngularUnits(y$2.seconds);switch(e){case q$2.north_azimuth:case q$2.south_azimuth:case q$2.polar:return new K$2(X$4._convertDirectionFormat(n,q$2.north_azimuth,e));case q$2.quadrant:{const e=X$4.secondsNorthAzimuthToQuadrant(n);return new K$2(e.angle)}}}getMeridian(e){const n=this._angle.extractAngularUnits(y$2.seconds);switch(e){case q$2.north_azimuth:return H$4.north;case q$2.south_azimuth:return H$4.south;case q$2.polar:return H$4.east;case q$2.quadrant:return X$4.secondsNorthAzimuthToQuadrant(n).meridian}}getDirection(e){const n=this._angle.extractAngularUnits(y$2.seconds);switch(e){case q$2.north_azimuth:return H$4.east;case q$2.south_azimuth:return H$4.west;case q$2.polar:return H$4.north;case q$2.quadrant:return X$4.secondsNorthAzimuthToQuadrant(n).direction}}static secondsNorthAzimuthToQuadrant(e){const n=e<=L$2||e>=N$2?H$4.north:H$4.south,t=n===H$4.north?Math.min(v$1-e,e):Math.abs(e-U$2),r=e>U$2?H$4.west:H$4.east;return new V$4(n,t,r)}static createFromAngleMeridianAndDirection(e,n,t){return new X$4(new K$2(X$4.secondsQuadrantToNorthAzimuth(e.extractAngularUnits(y$2.seconds),n,t)))}static secondsQuadrantToNorthAzimuth(e,n,t){return n===H$4.north?t===H$4.east?e:v$1-e:t===H$4.east?U$2-e:U$2+e}static _convertDirectionFormat(e,r,s){let a=0;switch(r){case q$2.north_azimuth:a=e;break;case q$2.polar:a=L$2-e;break;case q$2.quadrant:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"});case q$2.south_azimuth:a=e+U$2;}let i=0;switch(s){case q$2.north_azimuth:i=a;break;case q$2.polar:i=L$2-a;break;case q$2.quadrant:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"});case q$2.south_azimuth:i=a-U$2;}return i=I$3(i,v$1),i<0?v$1+i:i}}function J$4(e,r,s){let a=null;switch(r){case y$2.decimal_degrees:a=w$3(e,T$5);break;case y$2.seconds:a=e;break;case y$2.gradians:a=w$3(e,S);break;case y$2.radians:a=w$3(e,F$1);break;default:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"})}switch(s){case y$2.decimal_degrees:return A$2(a,T$5);case y$2.seconds:return a;case y$2.gradians:return A$2(a,S);case y$2.radians:return a/F$1;default:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"})}}class K$2{constructor(e){this._seconds=e;}static createFromAngleAndUnits(e,n){return new K$2(J$4(e,n,y$2.seconds))}extractAngularUnits(e){return J$4(this._seconds,y$2.seconds,Y$4(e))}static createFromDegreesMinutesSeconds(e,n,t){return new K$2(_$3(_$3(w$3(e,T$5),w$3(n,M$2)),t))}}function Y$4(e){switch(c$7(e),e){case y$2.decimal_degrees:case y$2.truncated_degrees:case y$2.degrees_minutes_seconds:return y$2.decimal_degrees;case y$2.gradians:return y$2.gradians;case y$2.fractional_degree_minutes:return y$2.fractional_degree_minutes;case y$2.radians:return y$2.radians;case y$2.seconds:case y$2.fractional_minute_seconds:return y$2.seconds}}class $$2{constructor(e,n,t,r){this.view=e,this.angle=n,this.merdian=t,this.direction=r,this._dms=null,this._formattedDms=null;}static createFromStringAndBearing(e,n,t){return new $$2(e,n.getAngle(t),n.getMeridian(t),n.getDirection(t))}fetchAngle(){return this.angle}fetchMeridian(){return this.merdian}fetchDirection(){return this.direction}fetchView(){return this.view}fetchDms(){return null===this._dms&&this._calculateDms(),this._dms}fetchFormattedDms(){return null===this._formattedDms&&this._calculateDms(),this._formattedDms}_calculateDms(){let e=null,n=y$2.truncated_degrees,t=0;for(let r=0;r<this.view.length;r++){const s=this.view[r];switch(s){case"m":e=de$2(this.view,r,s),n=n===y$2.truncated_degrees?y$2.fractional_degree_minutes:n,r=e.newpos;continue;case"s":e=de$2(this.view,r,s),n=y$2.fractional_minute_seconds,t=t<e.rounding?e.rounding:t,r=e.newpos;continue;default:continue}}this._dms=B$3.secondsToDMS(this.angle.extractAngularUnits(y$2.seconds)),this._formattedDms=B$3.secondsToDMS(this.angle.extractAngularUnits(y$2.seconds)).format(n,t);}}function ee$4(e,r,s,a,i){let o=null;switch(r){case y$2.decimal_degrees:case y$2.radians:case y$2.gradians:return o=Q$4(G$2(e.extractAngularUnits(r),a),j$1(r)),P$3(o.toFixed(a),"0",s+a+(a>0?1:0));case y$2.truncated_degrees:case y$2.fractional_degree_minutes:return o=Q$4(i.fetchFormattedDms().getField(r),j$1(r)),P$3(o.toFixed(a),"0",s+a+(a>0?1:0));case y$2.fractional_minute_seconds:return o=Q$4(G$2(i.fetchDms().getField(r),a),j$1(r)),P$3(o.toFixed(a),"0",s+a+(a>0?1:0));default:throw new t$6(null,e$7.LogicError,null,{reason:"unexpected evaluation"})}}function ne$4(e,r,s){if(s===q$2.quadrant)throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"});if(r===y$2.degrees_minutes_seconds){const n=B$3.numberToDms(e);return X$4.createFromAngleAndDirection(K$2.createFromDegreesMinutesSeconds(n.m_degrees,n.m_minutes,n.m_seconds),s)}return X$4.createFromAngleAndDirection(K$2.createFromAngleAndUnits(e,Y$4(r)),s)}function te$4(e){switch(re$5(e)){case 1:return {first:H$4.north,second:H$4.east};case 2:return {first:H$4.south,second:H$4.east};case 3:return {first:H$4.south,second:H$4.west};case 4:return {first:H$4.north,second:H$4.west}}return null}function re$4(e){switch(e.toUpperCase().trim()){case"N":case"NORTH":return H$4.north;case"E":case"EAST":return H$4.east;case"S":case"SOUTH":return H$4.south;case"W":case"WEST":return H$4.west}return null}function se$3(e){const r=parseFloat(e);if(Z$7(r)){if(isNaN(r))throw new t$6(null,e$7.LogicError,null,{reason:"invalid conversion"});return r}throw new t$6(null,e$7.LogicError,null,{reason:"invalid conversion"})}function ae$2(e,s,a){const i=a===q$2.quadrant;let o=null,c=null,u=0,l=0,d=0;if(i){if(e.length<2)throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"});d=1;const s=te$4(K$3(e[e.length-1]));if(s?(o=s.first,c=s.second):(u=1,o=re$4(K$3(e[0])),c=re$4(K$3(e[e.length-1]))),null===o||null===c)throw new t$6(null,e$7.LogicError,null,{reason:"invalid conversion"})}switch(s){case y$2.decimal_degrees:case y$2.radians:case y$2.gradians:if(0===e.length)throw new t$6(null,e$7.LogicError,null,{reason:"invalid conversion"});return i?X$4.createFromAngleMeridianAndDirection(K$2.createFromAngleAndUnits(se$3(e[u]),Y$4(s)),o,c):X$4.createFromAngleAndDirection(K$2.createFromAngleAndUnits(se$3(e[u]),Y$4(s)),a);case y$2.degrees_minutes_seconds:if(l=e.length-d-u,3===l){const n=K$2.createFromDegreesMinutesSeconds(se$3(e[u]),se$3(e[u+1]),se$3(e[u+2]));return i?X$4.createFromAngleMeridianAndDirection(n,o,c):X$4.createFromAngleAndDirection(n,a)}if(1===l){const n=se$3(e[u]),t=B$3.numberToDms(n),r=K$2.createFromDegreesMinutesSeconds(t.m_degrees,t.m_minutes,t.m_seconds);return i?X$4.createFromAngleMeridianAndDirection(r,o,c):X$4.createFromAngleAndDirection(r,a)}}throw new t$6(null,e$7.LogicError,null,{reason:"invalid conversion"})}function ie$3(e){const n=[" ","-","/","'",'"',"\\","^",z$3,x$3,"\t","\r","\n","*"];let t="";for(let r=0;r<e.length;r++){const s=e.charAt(r);n.includes(s)?t+="RRSPLITRRSPLITRR":t+=s;}return t.split("RRSPLITRRSPLITRR").filter((e=>""!==e))}function oe$3(e,r,u){if(Z$7(e))return ne$4(re$5(e),r,u);if(w$6(e))return ae$2(ie$3(e),r,u);if(Y$5(e))return ae$2(e,r,u);if(E$3(e))return ae$2(e.toArray(),r,u);throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"})}function ce$2(e,r,s){const a=Y$4(s);if(a&&s!==y$2.degrees_minutes_seconds){return e.getAngle(r).extractAngularUnits(a)}throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"})}function ue$2(e,n,t){const r=e.getAngle(n);if(n===q$2.quadrant&&t===y$2.degrees_minutes_seconds){const t=B$3.secondsToDMS(r.extractAngularUnits(y$2.seconds));return [C$2(e.getMeridian(n),"SHORT"),t.m_degrees,t.m_minutes,t.m_seconds,C$2(e.getDirection(n),"SHORT")]}if(t===y$2.degrees_minutes_seconds){const e=B$3.secondsToDMS(r.extractAngularUnits(y$2.seconds));return [e.m_degrees,e.m_minutes,e.m_seconds]}return n===q$2.quadrant?[C$2(e.getMeridian(n),"SHORT"),r.extractAngularUnits(t),C$2(e.getDirection(n),"SHORT")]:[r.extractAngularUnits(t)]}function le$2(e,r){let s="";switch(e){case y$2.decimal_degrees:s=r===q$2.quadrant?"DD.DD"+z$3:"DDD.DD"+z$3;break;case y$2.degrees_minutes_seconds:s=r===q$2.quadrant?"dd"+z$3+" mm' ss\"":"ddd"+z$3+" mm' ss.ss\"";break;case y$2.radians:s="R.RR";break;case y$2.gradians:s="GGG.GG"+x$3;break;default:throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"})}return r===q$2.quadrant&&(s="p "+s+" b"),s}function de$2(e,n,t){const r={padding:0,rounding:0,newpos:n};let s=!1;for(;n<e.length;){const a=e[n];if(a===t)s?r.rounding++:r.padding++,n++;else {if("."!==a)break;s=!0,n++;}}return r.newpos=n-1,r}function he$2(e,n,t){const r={escaped:"",newpos:n};for(n++;n<e.length;){const t=e[n];if(n++,"]"===t)break;r.escaped+=t;}return r.newpos=n-1,r}function me$2(e,n,t){let r="",s=null,a=null;const i=$$2.createFromStringAndBearing(n,e,t),o={D:y$2.decimal_degrees,d:y$2.truncated_degrees,m:y$2.fractional_degree_minutes,s:y$2.fractional_minute_seconds,R:y$2.radians,G:y$2.gradians};for(let c=0;c<n.length;c++){const u=n[c];switch(u){case"[":s=he$2(n,c),r+=s.escaped,c=s.newpos;continue;case"D":case"d":case"m":case"s":case"R":case"G":s=de$2(n,c,u),a=e.getAngle(t),r+=ee$4(a,o[u],s.padding,s.rounding,i),c=s.newpos;continue;case"P":case"p":r+=C$2(i.fetchMeridian(),"p"===u?"SHORT":"LONG");continue;case"B":case"b":r+=C$2(i.fetchDirection(),"b"===u?"SHORT":"LONG");continue;default:r+=u;}}return r}function ge$2(s,a,i){if(!(a instanceof J$5))throw new t$6(null,e$7.InvalidParameter,null);if(!1===a.hasField("directionType"))throw new t$6(null,e$7.LogicError,null,{reason:"missing directionType"});if(!1===a.hasField("angleType"))throw new t$6(null,e$7.LogicError,null,{reason:"missing angleType"});const o=W$5(O$2(a.field("directiontype"))),c=oe$3(s,Z$4(O$2(a.field("angletype"))),o);if(!(i instanceof J$5))throw new t$6(null,e$7.InvalidParameter,null);if(!1===i.hasField("directionType"))throw new t$6(null,e$7.LogicError,null,{reason:"missing directionType"});if(!1===i.hasField("outputType"))throw new t$6(null,e$7.LogicError,null,{reason:"missing angleType"});const u=W$5(O$2(i.field("directiontype"))),l=i.hasField("angleType")?Z$4(O$2(i.field("angletype"))):null,d=O$2(i.field("outputType")).toUpperCase().trim();if(!u||!d)throw new t$6(null,e$7.LogicError,null,{reason:"conversion error"});if(!(l||"TEXT"===d&&i.hasField("format")))throw new t$6(null,e$7.LogicError,null,{reason:"invalid unit"});switch(d){case"VALUE":return u===q$2.quadrant||l===y$2.degrees_minutes_seconds?ue$2(c,u,l):ce$2(c,u,l);case"TEXT":{let e="";return i.hasField("format")&&(e=K$3(i.field("format"))),null!==e&&""!==e||(e=le$2(l,u)),me$2(c,e,u)}default:throw new t$6(null,e$7.InvalidParameter,null)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function D$3(t,e){if(!t||!e)return t===e;if(t.x===e.x&&t.y===e.y){if(t.hasZ){if(t.z!==e.z)return !1}else if(e.hasZ)return !1;if(t.hasM){if(t.m!==e.m)return !1}else if(e.hasM)return !1;return !0}return !1}function W$4(o,i,u){if(null!==o)if(Y$5(o)){if(i.updateUint8Array([61]),u.map.has(o)){const t=u.map.get(o);i.updateIntArray([61237541^t]);}else {u.map.set(o,u.currentLength++);for(const t of o)W$4(t,i,u);u.map.delete(o),u.currentLength--;}i.updateUint8Array([199]);}else if(E$3(o)){if(i.updateUint8Array([61]),u.map.has(o)){const t=u.map.get(o);i.updateIntArray([61237541^t]);}else {u.map.set(o,u.currentLength++);for(const t of o.toArray())W$4(t,i,u);u.map.delete(o),u.currentLength--;}i.updateUint8Array([199]);}else {if(z$6(o))return i.updateIntArray([o.getTime()]),void i.updateUint8Array([241]);if(w$6(o))return i.updateIntArray([o.length]),i.updateWithString(o),void i.updateUint8Array([41]);if(_$4(o))i.updateUint8Array([!0===o?1:0,113]);else {if(Z$7(o))return i.updateFloatArray([o]),void i.updateUint8Array([173]);if(o instanceof e$3)throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(o instanceof t$2)throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(!(o instanceof J$5)){if(J$6(o))throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(o instanceof w$7)return i.updateIntArray([3833836621]),i.updateIntArray([0]),i.updateFloatArray([o.x]),i.updateIntArray([1]),i.updateFloatArray([o.y]),o.hasZ&&(i.updateIntArray([2]),i.updateFloatArray([o.z])),o.hasM&&(i.updateIntArray([3]),i.updateFloatArray([o.m])),i.updateIntArray([3765347959]),void W$4(o.spatialReference.wkid,i,u);if(o instanceof v$4){i.updateIntArray([1266616829]);for(let t=0;t<o.rings.length;t++){const e=o.rings[t],r=[];let n=null,a=null;for(let i=0;i<e.length;i++){const u=o.getPoint(t,i);if(0===i)n=u;else if(D$3(a,u))continue;a=u,i===e.length-1&&D$3(n,u)||r.push(u);}i.updateIntArray([1397116793,r.length]);for(let t=0;t<r.length;t++){const e=r[t];i.updateIntArray([3962308117,t]),W$4(e,i,u),i.updateIntArray([2716288009]);}i.updateIntArray([2278822459]);}return i.updateIntArray([3878477243]),void W$4(o.spatialReference.wkid,i,u)}if(o instanceof m$7){i.updateIntArray([4106883559]);for(let t=0;t<o.paths.length;t++){const e=o.paths[t];i.updateIntArray([1397116793,e.length]);for(let r=0;r<e.length;r++)i.updateIntArray([3962308117,r]),W$4(o.getPoint(t,r),i,u),i.updateIntArray([2716288009]);i.updateIntArray([2278822459]);}return i.updateIntArray([2568784753]),void W$4(o.spatialReference.wkid,i,u)}if(o instanceof u$7){i.updateIntArray([588535921,o.points.length]);for(let t=0;t<o.points.length;t++){const e=o.getPoint(t);i.updateIntArray([t]),W$4(e,i,u);}return i.updateIntArray([1700171621]),void W$4(o.spatialReference.wkid,i,u)}if(o instanceof w$8)return i.updateIntArray([3483648373]),i.updateIntArray([0]),i.updateFloatArray([o.xmax]),i.updateIntArray([1]),i.updateFloatArray([o.xmin]),i.updateIntArray([2]),i.updateFloatArray([o.ymax]),i.updateIntArray([3]),i.updateFloatArray([o.ymin]),o.hasZ&&(i.updateIntArray([4]),i.updateFloatArray([o.zmax]),i.updateIntArray([5]),i.updateFloatArray([o.zmin])),o.hasM&&(i.updateIntArray([6]),i.updateFloatArray([o.mmax]),i.updateIntArray([7]),i.updateFloatArray([o.mmin])),i.updateIntArray([3622027469]),void W$4(o.spatialReference.wkid,i,u);if(o instanceof k$4)return i.updateIntArray([14]),void 0!==o.wkid&&null!==o.wkid&&i.updateIntArray([o.wkid]),void(o.wkt&&i.updateWithString(o.wkt));if(F$3(o))throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(P$5(o))throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(G$3(o))throw new t$6(u.context,e$7.UnsupportedHashType,u.node);if(o===k$3)throw new t$6(u.context,e$7.UnsupportedHashType,u.node);throw new t$6(u.context,e$7.UnsupportedHashType,u.node)}if(i.updateUint8Array([223]),u.map.has(o)){const t=u.map.get(o);i.updateIntArray([61237541^t]);}else {u.map.set(o,u.currentLength++);for(const t of o.keys()){i.updateIntArray([t.length]),i.updateWithString(t),i.updateUint8Array([251]);W$4(o.field(t),i,u),i.updateUint8Array([239]);}u.map.delete(o),u.currentLength--;}i.updateUint8Array([73]);}}else i.updateUint8Array([0,139]);}function B$2(e,b){e.portal=function(e,r){return b(e,r,((n,a,u)=>(V$5(u,1,1,e,r),new t$2(K$3(u[0])))))},e.typeof=function(t,e){return b(t,e,((r,i,s)=>{V$5(s,1,1,t,e);const p=O$4(s[0]);if("Unrecognised Type"===p)throw new t$6(t,e$7.UnrecognisedType,e);return p}))},e.trim=function(t,e){return b(t,e,((r,n,a)=>(V$5(a,1,1,t,e),K$3(a[0]).trim())))},e.tohex=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,1,1,t,e);const i=re$5(a[0]);return isNaN(i)?i:i.toString(16)}))},e.upper=function(t,e){return b(t,e,((r,n,a)=>(V$5(a,1,1,t,e),K$3(a[0]).toUpperCase())))},e.proper=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,1,2,t,e);let u=1;2===a.length&&"firstword"===K$3(a[1]).toLowerCase()&&(u=2);const s=/\s/,p=K$3(a[0]);let d="",c=!0;for(let t=0;t<p.length;t++){let e=p[t];if(s.test(e))1===u&&(c=!0);else {e.toUpperCase()!==e.toLowerCase()&&(c?(e=e.toUpperCase(),c=!1):e=e.toLowerCase());}d+=e;}return d}))},e.lower=function(t,e){return b(t,e,((r,n,a)=>(V$5(a,1,1,t,e),K$3(a[0]).toLowerCase())))},e.guid=function(t,e){return b(t,e,((r,n,a)=>{if(V$5(a,0,1,t,e),a.length>0)switch(K$3(a[0]).toLowerCase()){case"digits":return U$3().replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return U$3();case"digits-hyphen-braces":return "{"+U$3()+"}";case"digits-hyphen-parentheses":return "("+U$3()+")"}return "{"+U$3()+"}"}))},e.standardizeguid=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,2,2,t,e);let u=K$3(a[0]);if(""===u||null===u)return "";const s=/^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u);if(!s)return "";const p=s.groups;switch(u=p.partA+"-"+p.partB+"-"+p.partC+"-"+p.partD+"-"+p.partE,K$3(a[1]).toLowerCase()){case"digits":return u.replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return u;case"digits-hyphen-braces":return "{"+u+"}";case"digits-hyphen-parentheses":return "("+u+")"}return "{"+u+"}"}))},e.console=function(t,e){return b(t,e,((e,r,n)=>(0===n.length||(1===n.length?t.console(K$3(n[0])):t.console(K$3(n))),k$3)))},e.mid=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,2,3,t,e);let u=re$5(a[1]);if(isNaN(u))return "";if(u<0&&(u=0),2===a.length)return K$3(a[0]).substr(u);let p=re$5(a[2]);return isNaN(p)?"":(p<0&&(p=0),K$3(a[0]).substr(u,p))}))},e.find=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,2,3,t,e);let u=0;if(a.length>2){if(u=re$5(v$2(a[2],0)),isNaN(u))return -1;u<0&&(u=0);}return K$3(a[1]).indexOf(K$3(a[0]),u)}))},e.left=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,2,2,t,e);let u=re$5(a[1]);return isNaN(u)?"":(u<0&&(u=0),K$3(a[0]).substr(0,u))}))},e.right=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,2,2,t,e);let u=re$5(a[1]);return isNaN(u)?"":(u<0&&(u=0),K$3(a[0]).substr(-1*u,u))}))},e.split=function(t,e){return b(t,e,((r,n,a)=>{let u;V$5(a,2,4,t,e);let p=re$5(v$2(a[2],-1));const d=le$3(v$2(a[3],!1));if(-1===p||null===p||!0===d?u=K$3(a[0]).split(K$3(a[1])):(isNaN(p)&&(p=-1),p<-1&&(p=-1),u=K$3(a[0]).split(K$3(a[1]),p)),!1===d)return u;const f=[];for(let t=0;t<u.length&&!(-1!==p&&f.length>=p);t++)""!==u[t]&&void 0!==u[t]&&f.push(u[t]);return f}))},e.text=function(t,e){return b(t,e,((r,n,a)=>(V$5(a,1,2,t,e),te$5(a[0],a[1]))))},e.concatenate=function(t,e){return b(t,e,((t,e,r)=>{const n=[];if(r.length<1)return "";if(Y$5(r[0])){const t=v$2(r[2],"");for(let e=0;e<r[0].length;e++)n[e]=te$5(r[0][e],t);return r.length>1?n.join(r[1]):n.join("")}if(E$3(r[0])){const t=v$2(r[2],"");for(let e=0;e<r[0].length();e++)n[e]=te$5(r[0].get(e),t);return r.length>1?n.join(r[1]):n.join("")}for(let a=0;a<r.length;a++)n[a]=te$5(r[a]);return n.join("")}))},e.reverse=function(t,e){return b(t,e,((r,i,u)=>{if(V$5(u,1,1,t,e),Y$5(u[0])){const t=u[0].slice(0);return t.reverse(),t}if(E$3(u[0])){const t=u[0].toArray().slice(0);return t.reverse(),t}throw new t$6(t,e$7.InvalidParameter,e)}))},e.replace=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,3,4,t,e);const u=K$3(a[0]),s=K$3(a[1]),p=K$3(a[2]);return 4!==a.length||le$3(a[3])?R$2(u,s,p):u.replace(s,p)}))},e.schema=function(t,e){return b(t,e,((o,i,u)=>{if(J$6(u[0])){const t=Ie$2(u[0]);return t?J$5.convertObjectToArcadeDictionary(t):null}throw new t$6(t,e$7.InvalidParameter,e)}))},e.subtypes=function(t,e){return b(t,e,((i,u,s)=>{if(V$5(s,1,1,t,e),J$6(s[0])){const t=Re$1(s[0]);return t?J$5.convertObjectToArcadeDictionary(t):null}throw new t$6(t,e$7.InvalidParameter,e)}))},e.subtypecode=function(t,e){return b(t,e,((r,i,u)=>{if(V$5(u,1,1,t,e),J$6(u[0])){const t=Re$1(u[0]);if(!t)return null;if(t.subtypeField&&u[0].hasField(t.subtypeField)){const e=u[0].field(t.subtypeField);for(const r of t.subtypes)if(r.code===e)return r.code;return null}return null}throw new t$6(t,e$7.InvalidParameter,e)}))},e.subtypename=function(t,e){return b(t,e,((r,i,u)=>{if(V$5(u,1,1,t,e),J$6(u[0])){const t=Re$1(u[0]);if(!t)return "";if(t.subtypeField&&u[0].hasField(t.subtypeField)){const e=u[0].field(t.subtypeField);for(const r of t.subtypes)if(r.code===e)return r.name;return ""}return ""}throw new t$6(t,e$7.InvalidParameter,e)}))},e.gdbversion=function(t,e){return b(t,e,((r,i,u)=>{if(V$5(u,1,1,t,e),J$6(u[0]))return u[0].gdbVersion();throw new t$6(t,e$7.InvalidParameter,e)}))},e.domain=function(t,e){return b(t,e,((u,p,d)=>{if(V$5(d,2,3,t,e),J$6(d[0])){const t=Ae$2(d[0],K$3(d[1]),void 0===d[2]?void 0:re$5(d[2]));return t&&t.domain?"coded-value"===t.domain.type||"codedValue"===t.domain.type?J$5.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:P$6[t.field.type],codedValues:t.domain.codedValues.map((t=>({name:t.name,code:t.code})))}):J$5.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:P$6[t.field.type],min:t.domain.min,max:t.domain.max}):null}throw new t$6(t,e$7.InvalidParameter,e)}))},e.domainname=function(t,e){return b(t,e,((r,u,p)=>{if(V$5(p,2,4,t,e),J$6(p[0]))return Fe$2(p[0],K$3(p[1]),p[2],void 0===p[3]?void 0:re$5(p[3]));throw new t$6(t,e$7.InvalidParameter,e)}))},e.domaincode=function(t,e){return b(t,e,((r,u,p)=>{if(V$5(p,2,4,t,e),J$6(p[0]))return Ce$2(p[0],K$3(p[1]),p[2],void 0===p[3]?void 0:re$5(p[3]));throw new t$6(t,e$7.InvalidParameter,e)}))},e.urlencode=function(t,e){return b(t,e,((n,a,u)=>{if(V$5(u,1,1,t,e),null===u[0])return "";if(u[0]instanceof J$5){let t="";for(const e of u[0].keys()){const r=u[0].field(e);""!==t&&(t+="&"),t+=null===r?encodeURIComponent(e)+"=":encodeURIComponent(e)+"="+encodeURIComponent(r);}return t}return encodeURIComponent(K$3(u[0]))}))},e.hash=function(t,e){return b(t,e,((r,n,a)=>{V$5(a,1,1,t,e);const i=new i$8(0);return W$4(a[0],i,{context:t,node:e,map:new Map,currentLength:0}),i.digest()}))},e.convertdirection=function(t,e){return b(t,e,((r,n,a)=>(V$5(a,3,3,t,e),ge$2(a[0],a[1],a[2]))))},e.fromjson=function(t,e){return b(t,e,((u,s,p)=>{if(V$5(p,1,1,t,e),!1===w$6(p[0]))throw new t$6(t,e$7.InvalidParameter,e);return J$5.convertJsonToArcade(JSON.parse(K$3(p[0])))}))},e.expects=function(t,e){return b(t,e,((r,o,i)=>{if(i.length<1)throw new t$6(t,e$7.WrongNumberOfParameters,e);return k$3}))},e.tocharcode=function(t,e){return b(t,e,((r,u,p)=>{V$5(p,1,2,t,e);const d=re$5(v$2(p[1],0)),l=K$3(p[0]);if(0===l.length&&1===p.length)return null;if(l.length<=d||d<0)throw new t$6(t,e$7.OutOfBounds,e);return l.charCodeAt(d)}))},e.tocodepoint=function(t,e){return b(t,e,((r,u,p)=>{V$5(p,1,2,t,e);const d=re$5(v$2(p[1],0)),l=K$3(p[0]);if(0===l.length&&1===p.length)return null;if(l.length<=d||d<0)throw new t$6(t,e$7.OutOfBounds,e);return l.codePointAt(d)}))},e.fromcharcode=function(t,e){return b(t,e,((r,o,i)=>{if(i.length<1)throw new t$6(t,e$7.WrongNumberOfParameters,e);const u=i.map((t=>Math.trunc(re$5(t)))).filter((t=>t>=0&&t<=65535));return 0===u.length?null:String.fromCharCode.apply(null,u)}))},e.fromcodepoint=function(t,e){return b(t,e,((r,o,i)=>{if(i.length<1)throw new t$6(t,e$7.WrongNumberOfParameters,e);let u;try{u=i.map((t=>Math.trunc(re$5(t)))).filter((t=>t<=1114111&&t>>>0===t));}catch(p){return null}return 0===u.length?null:String.fromCodePoint.apply(null,u)}))};}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s$3{constructor(s,t){this._moduleSingletons=s,this._syntaxModules=t;}loadLibrary(s){if(null==this._syntaxModules)return null;const t=this._syntaxModules[s.toLowerCase()];return t?{syntax:t.script,uri:t.uri}:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class T$4 extends r$5{constructor(e,n){super(),this.paramCount=n,this.fn=e;}createFunction(e){return (...n)=>{if(n.length!==this.paramCount)throw new t$6(e,e$7.WrongNumberOfParameters,null);return this.fn(...n)}}call(e,n){return this.fn(...n.arguments)}marshalledCall(e,n,o,l){return l(e,n,((n,r,a)=>{a=a.map((n=>!F$3(n)||n instanceof s$a?n:n$4(n,e,l)));const s=this.call(o,{arguments:a});return C$5(s)?s.then((e=>n$4(e,o,l))):s}))}}function W$3(e,n,t){try{return t(e,null,n.arguments)}catch(o){throw o}}function V$3(e,n){try{switch(n.type){case"EmptyStatement":return "lc.voidOperation";case"VariableDeclarator":return ue$1(e,n);case"VariableDeclaration":return ce$1(e,n);case"BlockStatement":case"Program":return oe$2(e,n);case"FunctionDeclaration":return ie$2(e,n);case"ImportDeclaration":return re$3(e,n);case"ExportNamedDeclaration":return ae$1(e,n);case"ReturnStatement":return le$1(e,n);case"IfStatement":return te$3(e,n);case"ExpressionStatement":return ee$3(e,n);case"AssignmentExpression":return Z$3(e,n);case"UpdateExpression":return Q$3(e,n);case"BreakStatement":return "break";case"ContinueStatement":return "continue";case"TemplateLiteral":return de$1(e,n);case"TemplateElement":return JSON.stringify(n.value?n.value.cooked:"");case"ForStatement":return H$3(e,n);case"ForInStatement":return Y$3(e,n);case"WhileStatement":return X$3(e,n);case"Identifier":return ye$1(e,n);case"MemberExpression":return pe$1(e,n);case"Literal":return null===n.value||void 0===n.value?"null":JSON.stringify(n.value);case"CallExpression":return be$1(e,n);case"UnaryExpression":return me$1(e,n);case"BinaryExpression":return fe$1(e,n);case"LogicalExpression":return he$1(e,n);case"ArrayExpression":return ge$1(e,n);case"ObjectExpression":return J$3(e,n);case"Property":return z$2(e,n);case"Array":throw new s$b(e,e$7.NeverReach,n);default:throw new s$b(e,e$7.Unrecognised,n)}}catch(t){throw t}}function J$3(e,n){let t="lang.dictionary([";for(let o=0;o<n.properties.length;o++){const l=n.properties[o];se$2(l.key.name);o>0&&(t+=","),t+="lang.strCheck("+("Identifier"===l.key.type?"'"+l.key.name+"'":V$3(e,l.key))+",'ObjectExpression'),lang.aCheck("+V$3(e,l.value)+", 'ObjectExpression')";}return t+="])",t}function z$2(e,n){throw new s$b(e,e$7.NeverReach,n)}function Y$3(e,n){const t=Fe$1(e),o=Fe$1(e),l=Fe$1(e);let r="var "+t+" = "+V$3(e,n.right)+";\n";"VariableDeclaration"===n.left.type&&(r+=V$3(e,n.left));let a="VariableDeclaration"===n.left.type?n.left.declarations[0].id.name:n.left.name;a=a.toLowerCase(),se$2(a);let s="";null!==e.localScope&&(void 0!==e.localScope[a]?s="lscope['"+a+"']":void 0!==e.localScope._SymbolsMap[a]&&(s="lscope['"+e.localScope._SymbolsMap[a]+"']"));let i="";if(""===s)if(void 0!==e.globalScope[a])s="gscope['"+a+"']";else if(void 0!==e.globalScope._SymbolsMap[a])s="gscope['"+e.globalScope._SymbolsMap[a]+"']";else if(null!==e.localScope)if(e.undeclaredGlobalsInFunctions.has(a))s="gscope['"+e.undeclaredGlobalsInFunctions.get(a).manglename+"']",i=e.undeclaredGlobalsInFunctions.get(a).manglename;else {const t={manglename:Me$1(e),node:n.left};e.undeclaredGlobalsInFunctions.set(a,t),s="gscope['"+t.manglename+"']",i=t.manglename;}return i&&(r+="lang.chkAssig('"+i+"',runtimeCtx); \n"),r+="if ("+t+"===null) {  lastStatement = lc.voidOperation; }\n ",r+="else if (lc.isArray("+t+") || lc.isString("+t+")) {",r+="var "+o+"="+t+".length; \n",r+="for(var "+l+"=0; "+l+"<"+o+"; "+l+"++) {\n",r+=s+"="+l+";\n",r+=V$3(e,n.body),r+="\n}\n",r+=" lastStatement = lc.voidOperation; \n",r+=" \n}\n",r+="else if (lc.isImmutableArray("+t+")) {",r+="var "+o+"="+t+".length(); \n",r+="for(var "+l+"=0; "+l+"<"+o+"; "+l+"++) {\n",r+=s+"="+l+";\n",r+=V$3(e,n.body),r+="\n}\n",r+=" lastStatement = lc.voidOperation; \n",r+=" \n}\n",r+="else if (( "+t+" instanceof lang.Dictionary) || ( "+t+" instanceof lang.Feature)) {",r+="var "+o+"="+t+".keys(); \n",r+="for(var "+l+"=0; "+l+"<"+o+".length; "+l+"++) {\n",r+=s+"="+o+"["+l+"];\n",r+=V$3(e,n.body),r+="\n}\n",r+=" lastStatement = lc.voidOperation; \n",r+=" \n}\n",e.isAsync&&(r+="else if (lc.isFeatureSet("+t+")) {",r+="var "+o+"="+t+".iterator(runtimeCtx.abortSignal); \n",r+="for(var "+l+"=lang. graphicToFeature( yield "+o+".next(),"+t+"); "+l+"!=null; "+l+"=lang. graphicToFeature( yield "+o+".next(),"+t+")) {\n",r+=s+"="+l+";\n",r+=V$3(e,n.body),r+="\n}\n",r+=" lastStatement = lc.voidOperation; \n",r+=" \n}\n"),r+="else { lastStatement = lc.voidOperation; } \n",r}function H$3(e,n){let t="lastStatement = lc.voidOperation; \n";null!==n.init&&(t+=V$3(e,n.init)+"; ");const o=Fe$1(e),l=Fe$1(e);return t+="var "+o+" = true; ",t+="\n do { ",null!==n.update&&(t+=" if ("+o+"===false) {\n "+V$3(e,n.update)+"  \n}\n "+o+"=false; \n"),null!==n.test&&(t+="var "+l+" = "+V$3(e,n.test)+"; ",t+="if ("+l+"===false) { break; } else if ("+l+"!==true) { lang.error('"+e$7.BooleanConditionRequired+"');   }\n"),t+=V$3(e,n.body),null!==n.update&&(t+="\n "+V$3(e,n.update)),t+="\n"+o+" = true; \n} while(true);  lastStatement = lc.voidOperation; ",t}function Q$3(e,n){let t=null,o="";if("MemberExpression"===n.argument.type)return t=V$3(e,n.argument.object),!0===n.argument.computed?o=V$3(e,n.argument.property):(o="'"+n.argument.property.name+"'",se$2(n.argument.property.name)),"lang.memberupdate("+t+","+o+",'"+n.operator+"',"+n.prefix+")";if(t=n.argument.name.toLowerCase(),se$2(t),null!==e.localScope){if(void 0!==e.localScope[t])return "lang.update(lscope, '"+t+"','"+n.operator+"',"+n.prefix+")";if(void 0!==e.localScope._SymbolsMap[t])return "lang.update(lscope, '"+e.localScope._SymbolsMap[t]+"','"+n.operator+"',"+n.prefix+")"}if(void 0!==e.globalScope[t])return "lang.update(gscope, '"+t+"','"+n.operator+"',"+n.prefix+")";if(void 0!==e.globalScope._SymbolsMap[t])return "lang.update(gscope, '"+e.globalScope._SymbolsMap[t]+"','"+n.operator+"',"+n.prefix+")";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(t))return "lang.update(gscope,lang.chkAssig( '"+e.undeclaredGlobalsInFunctions.get(t).manglename+"',runtimeCtx),'"+n.operator+"',"+n.prefix+")";const o={manglename:Me$1(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(t,o),"lang.update(gscope, lang.chkAssig('"+o.manglename+"',runtimeCtx),'"+n.operator+"',"+n.prefix+")"}throw new t$6(e,e$7.InvalidIdentifier,n)}function X$3(e,n){let t="lastStatement = lc.voidOperation; \n";const o=Fe$1(e);return t+=`\n  var ${o} = true;\n    do {\n      ${o} = ${V$3(e,n.test)};\n      if (${o}==false) {\n        break;\n      }\n      if (${o}!==true) {\n        lang.error('${e$7.BooleanConditionRequired}');\n      }\n      ${V$3(e,n.body)}\n    }\n    while (${o} !== false);\n    lastStatement = lc.voidOperation;\n  `,t}function Z$3(e,n){const t=V$3(e,n.right);let o=null,l="";if("MemberExpression"===n.left.type)return o=V$3(e,n.left.object),!0===n.left.computed?l=V$3(e,n.left.property):(l="'"+n.left.property.name+"'",se$2(n.left.property.name)),"lang.assignmember("+o+","+l+",'"+n.operator+"',"+t+")";if(o=n.left.name.toLowerCase(),se$2(o),null!==e.localScope){if(void 0!==e.localScope[o])return "lscope['"+o+"']=lang.assign("+t+",'"+n.operator+"', lscope['"+o+"'])";if(void 0!==e.localScope._SymbolsMap[o])return "lscope['"+e.localScope._SymbolsMap[o]+"']=lang.assign("+t+",'"+n.operator+"', lscope['"+e.localScope._SymbolsMap[o]+"'])"}if(void 0!==e.globalScope[o])return "gscope['"+o+"']=lang.assign("+t+",'"+n.operator+"', gscope['"+o+"'])";if(void 0!==e.globalScope._SymbolsMap[o])return "gscope['"+e.globalScope._SymbolsMap[o]+"']=lang.assign("+t+",'"+n.operator+"', gscope['"+e.globalScope._SymbolsMap[o]+"'])";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(o))return "gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(o).manglename+"',runtimeCtx)]=lang.assign("+t+",'"+n.operator+"', gscope['"+e.undeclaredGlobalsInFunctions.get(o).manglename+"'])";const l={manglename:Me$1(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(o,l),"gscope[lang.chkAssig('"+l.manglename+"',runtimeCtx)]=lang.assign("+t+",'"+n.operator+"', gscope['"+l.manglename+"'])"}throw new t$6(e,e$7.InvalidIdentifier,n)}function ee$3(e,n){return "AssignmentExpression"===n.expression.type?"lastStatement = lc.voidOperation; "+V$3(e,n.expression)+"; \n ":(n.expression.type,"lastStatement = "+V$3(e,n.expression)+"; ")}function ne$3(e,n){return "BlockStatement"===n.type?V$3(e,n):"ReturnStatement"===n.type||"BreakStatement"===n.type||"ContinueStatement"===n.type?V$3(e,n)+"; ":"UpdateExpression"===n.type?"lastStatement = "+V$3(e,n)+"; ":"ExpressionStatement"===n.type?V$3(e,n):"ObjectExpression"===n.type?"lastStatement = "+V$3(e,n)+"; ":V$3(e,n)+"; "}function te$3(e,n){if("AssignmentExpression"===n.test.type||"UpdateExpression"===n.test.type)throw new s$b(e,e$7.BooleanConditionRequired,n);return `if (lang.mustBoolean(${V$3(e,n.test)}, runtimeCtx) === true) {\n    ${ne$3(e,n.consequent)}\n  } `+(null!==n.alternate?"IfStatement"===n.alternate.type?" else "+te$3(e,n.alternate):` else {\n      ${ne$3(e,n.alternate)}\n    }\n`:" else {\n      lastStatement = lc.voidOperation;\n    }\n")}function oe$2(e,n){let t="";for(let o=0;o<n.body.length;o++)"EmptyStatement"!==n.body[o].type&&("ReturnStatement"===n.body[o].type||"BreakStatement"===n.body[o].type||"ContinueStatement"===n.body[o].type?t+=V$3(e,n.body[o])+"; \n":"UpdateExpression"===n.body[o].type||"ObjectExpression"===n.body[o].type?t+="lastStatement = "+V$3(e,n.body[o])+"; \n":t+=V$3(e,n.body[o])+" \n");return t}function le$1(e,n){if(null===n.argument)return "return lc.voidOperation";return "return "+V$3(e,n.argument)}function re$3(e,n){const t=n.specifiers[0].local.name.toLowerCase();se$2(t);const o=e.libraryResolver?.loadLibrary(t),l=Me$1(e);void 0===e.moduleFactory[o.uri]&&(e.moduleFactory[o.uri]=De(o.syntax,{interceptor:e.interceptor,services:e.services,moduleFactory:e.moduleFactory,lrucache:e.lrucache,libraryResolver:e.libraryResolver,customfunctions:e.customfunctions,vars:{}},e.isAsync)),e.moduleFactoryMap[l]=o.uri;let r="";if(r=e.isAsync?"(yield lang.loadModule('"+l+"', runtimeCtx) ); ":"lang.loadModule('"+l+"', runtimeCtx); ",void 0!==e.globalScope[t])return "gscope['"+t+"']="+r;if(void 0!==e.globalScope._SymbolsMap[t])return "gscope['"+e.globalScope._SymbolsMap[t]+"']="+r;let a="";return e.undeclaredGlobalsInFunctions.has(t)?(a=e.undeclaredGlobalsInFunctions.get(t).manglename,e.undeclaredGlobalsInFunctions.delete(t)):a=Me$1(e),e.globalScope._SymbolsMap[t]=a,e.mangleMap[t]=a,"gscope[lang.setAssig('"+a+"', runtimeCtx)]="+r}function ae$1(e,n){const t=V$3(e,n.declaration);if("FunctionDeclaration"===n.declaration.type)e.exports[n.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===n.declaration.type)for(const o of n.declaration.declarations)e.exports[o.id.name.toLowerCase()]="variable";return t}function se$2(e){if("iif"===e)throw new c$6;if("decode"===e)throw new c$6;if("when"===e)throw new c$6}function ie$2(e,n){const t=n.id.name.toLowerCase();se$2(t);let o="",l=!1;void 0!==e.globalScope[t]?o=t:void 0!==e.globalScope._SymbolsMap[t]?o=e.globalScope._SymbolsMap[t]:e.undeclaredGlobalsInFunctions.has(t)?(o=e.undeclaredGlobalsInFunctions.get(t).manglename,e.globalScope._SymbolsMap[t]=o,e.mangleMap[t]=o,e.undeclaredGlobalsInFunctions.delete(t),l=!0):(o=Me$1(e),e.globalScope._SymbolsMap[t]=o,e.mangleMap[t]=o);const r={isAsync:e.isAsync,console:e.console,exports:e.exports,undeclaredGlobalsInFunctions:e.undeclaredGlobalsInFunctions,customfunctions:e.customfunctions,moduleFactory:e.moduleFactory,moduleFactoryMap:e.moduleFactoryMap,libraryResolver:e.libraryResolver,lrucache:e.lrucache,interceptor:e.interceptor,services:e.services,symbols:e.symbols,mangleMap:e.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:e.depthCounter,globalScope:e.globalScope};let a="new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";for(let s=0;s<n.params.length;s++){const t=n.params[s].name.toLowerCase();se$2(t);const o=Me$1(e);r.localScope._SymbolsMap[t]=o,r.mangleMap[t]=o,a+="lscope['"+o+"']=arguments["+s.toString()+"];\n";}return !0===e.isAsync?(a+="return lang.__awaiter(this, void 0, void 0, function* () {\n",a+=oe$2(r,n.body)+"\n return lastStatement; ",a+="});  }",a+=", runtimeCtx),"+n.params.length+")",a+="\n lastStatement = lc.voidOperation; \n"):(a+=oe$2(r,n.body)+"\n return lastStatement; }, runtimeCtx),"+n.params.length+")",a+="\n lastStatement = lc.voidOperation; \n"),l?"gscope[lang.setAssig('"+o+"', runtimeCtx)]="+a:"gscope['"+o+"']="+a}function ce$1(e,n){const t=[];for(let o=0;o<n.declarations.length;o++)t.push(V$3(e,n.declarations[o]));return t.join("\n")+" \n lastStatement=  lc.voidOperation; \n"}function ue$1(e,n){let t=null===n.init?null:V$3(e,n.init);t===k$3&&(t=null);const o=n.id.name.toLowerCase();if(se$2(o),null!==e.localScope){if(void 0!==e.localScope[o])return "lscope['"+o+"']="+t+"; ";if(void 0!==e.localScope._SymbolsMap[o])return "lscope['"+e.localScope._SymbolsMap[o]+"']="+t+"; ";{const n=Me$1(e);return e.localScope._SymbolsMap[o]=n,e.mangleMap[o]=n,"lscope['"+n+"']="+t+"; "}}if(void 0!==e.globalScope[o])return "gscope['"+o+"']="+t+"; ";if(void 0!==e.globalScope._SymbolsMap[o])return "gscope['"+e.globalScope._SymbolsMap[o]+"']="+t+"; ";if(e.undeclaredGlobalsInFunctions.has(o)){const n=e.undeclaredGlobalsInFunctions.get(o).manglename;return e.globalScope._SymbolsMap[o]=n,e.mangleMap[o]=n,e.undeclaredGlobalsInFunctions.delete(o),"gscope[lang.setAssig('"+n+"', runtimeCtx)]="+t+"; "}const l=Me$1(e);return e.globalScope._SymbolsMap[o]=l,e.mangleMap[o]=l,"gscope['"+l+"']="+t+"; "}function pe$1(e,n){try{let t;return !0===n.computed?t=V$3(e,n.property):(t="'"+n.property.name+"'",se$2(n.property.name)),"lang.member("+V$3(e,n.object)+","+t+")"}catch(t){throw t}}function me$1(e,n){try{return "lang.unary("+V$3(e,n.argument)+",'"+n.operator+"')"}catch(t){throw t}}function ge$1(e,n){try{const t=[];for(let o=0;o<n.elements.length;o++)"Literal"===n.elements[o].type?t.push(V$3(e,n.elements[o])):t.push("lang.aCheck("+V$3(e,n.elements[o])+",'ArrayExpression')");return "["+t.join(",")+"]"}catch(t){throw t}}function de$1(e,n){try{const t=[];let o=0;for(const l of n.quasis)t.push(l.value?JSON.stringify(l.value.cooked):JSON.stringify("")),!1===l.tail&&(t.push(n.expressions[o]?"lang.castString(lang.aCheck("+V$3(e,n.expressions[o])+", 'TemplateLiteral'))":""),o++);return "(["+t.join(",")+"]).join('')"}catch(t){throw t}}function fe$1(e,n){try{return "lang.binary("+V$3(e,n.left)+","+V$3(e,n.right)+",'"+n.operator+"')"}catch(t){throw t}}function he$1(e,n){try{if("AssignmentExpression"===n.left.type||"UpdateExpression"===n.left.type)throw new s$b(e,e$7.LogicalExpressionOnlyBoolean,n);if("AssignmentExpression"===n.right.type||"UpdateExpression"===n.right.type)throw new s$b(e,e$7.LogicalExpressionOnlyBoolean,n);if("&&"===n.operator||"||"===n.operator)return "(lang.logicalCheck("+V$3(e,n.left)+") "+n.operator+" lang.logicalCheck("+V$3(e,n.right)+"))";throw new s$b(null,e$7.LogicExpressionOrAnd,null)}catch(t){throw t}}function ye$1(e,n){try{const t=n.name.toLowerCase();if(se$2(t),null!==e.localScope){if(void 0!==e.localScope[t])return "lscope['"+t+"']";if(void 0!==e.localScope._SymbolsMap[t])return "lscope['"+e.localScope._SymbolsMap[t]+"']"}if(void 0!==e.globalScope[t])return "gscope['"+t+"']";if(void 0!==e.globalScope._SymbolsMap[t])return "gscope['"+e.globalScope._SymbolsMap[t]+"']";if(null!==e.localScope){if(e.undeclaredGlobalsInFunctions.has(t))return "gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(t).manglename+"',runtimeCtx)]";const o={manglename:Me$1(e),node:n.argument};return e.undeclaredGlobalsInFunctions.set(t,o),"gscope[lang.chkAssig('"+o.manglename+"',runtimeCtx)]"}throw new s$b(e,e$7.InvalidIdentifier,n)}catch(t){throw t}}function be$1(e,n){try{if("MemberExpression"===n.callee.type){let t;!0===n.callee.computed?t=V$3(e,n.callee.property):(t="'"+n.callee.property.name+"'",se$2(n.callee.property.name));let o="[";for(let l=0;l<n.arguments.length;l++)l>0&&(o+=", "),o+=V$3(e,n.arguments[l]);return o+="]",e.isAsync?"(yield lang.callModuleFunction("+V$3(e,n.callee.object)+","+o+","+t+",runtimeCtx))":"lang.callModuleFunction("+V$3(e,n.callee.object)+","+o+","+t+",runtimeCtx)"}if("Identifier"!==n.callee.type)throw new s$b(e,e$7.FuncionNotFound,n);const t=n.callee.name.toLowerCase();if("iif"===t)return we$1(e,n);if("when"===t)return Se$1(e,n);if("decode"===t)return ve$1(e,n);let o="";if(null!==e.localScope&&(void 0!==e.localScope[t]?o="lscope['"+t+"']":void 0!==e.localScope._SymbolsMap[t]&&(o="lscope['"+e.localScope._SymbolsMap[t]+"']")),""===o)if(void 0!==e.globalScope[t])o="gscope['"+t+"']";else if(void 0!==e.globalScope._SymbolsMap[t])o="gscope['"+e.globalScope._SymbolsMap[t]+"']";else if(null!==e.localScope)if(e.undeclaredGlobalsInFunctions.has(t))o="gscope[lang.chkAssig('"+e.undeclaredGlobalsInFunctions.get(t).manglename+"',runtimeCtx)]";else {const l={manglename:Me$1(e),node:n.argument};e.undeclaredGlobalsInFunctions.set(t,l),o="gscope[lang.chkAssig('"+l.manglename+"',runtimeCtx)]";}if(""!==o){let t="[";for(let o=0;o<n.arguments.length;o++)o>0&&(t+=", "),t+=V$3(e,n.arguments[o]);return t+="]",e.isAsync?"(yield lang.callfunc("+o+","+t+",runtimeCtx) )":"lang.callfunc("+o+","+t+",runtimeCtx)"}throw new s$b(e,e$7.FuncionNotFound,n)}catch(t){throw t}}function we$1(e,n){try{if(3!==n.arguments.length)throw new s$b(e,e$7.WrongNumberOfParameters,n);const t=Fe$1(e);return `${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        var ${t} = ${V$3(e,n.arguments[0])};\n       \n        if (${t} === true) {\n          return  ${V$3(e,n.arguments[1])};\n        }\n        else if (${t} === false) {\n          return ${V$3(e,n.arguments[2])};\n        }\n        else {\n          lang.error('ExecutionErrorCodes.BooleanConditionRequired');\n        }\n      ${e.isAsync?"})}()))":"}()"}`}catch(t){throw t}}function Se$1(e,n){try{if(n.arguments.length<3)throw new s$b(e,e$7.WrongNumberOfParameters,n);if(n.arguments.length%2==0)throw new s$b(e,e$7.WrongNumberOfParameters,n);const t=Fe$1(e);let o="var ";for(let l=0;l<n.arguments.length-1;l+=2)o+=`${t} = lang.mustBoolean(${V$3(e,n.arguments[l])}, runtimeCtx);\n      if (${t} === true ) {\n        return ${V$3(e,n.arguments[l+1])} \n      }\n`;return `${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        ${o}\n        return ${V$3(e,n.arguments[n.arguments.length-1])}\n        ${e.isAsync?"})}()))":"}()"}`}catch(t){throw t}}function ve$1(e,n){try{if(n.arguments.length<2)throw new s$b(e,e$7.WrongNumberOfParameters,n);if(2===n.arguments.length)return `(${V$3(e,n.arguments[1])})`;if((n.arguments.length-1)%2==0)throw new s$b(e,e$7.WrongNumberOfParameters,n);const t=Fe$1(e),o=Fe$1(e);let l="var ";for(let r=1;r<n.arguments.length-1;r+=2)l+=`${o} = ${V$3(e,n.arguments[r])};\n      if (lang.binary(${o}, ${t}, "==") === true ) {\n        return ${V$3(e,n.arguments[r+1])} \n      }\n`;return `${e.isAsync?"(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {":"function() {"}\n        var ${t} = ${V$3(e,n.arguments[0])};\n        ${l}\n        return ${V$3(e,n.arguments[n.arguments.length-1])}\n        ${e.isAsync?"})}()))":"}()"}`}catch(t){throw t}}const xe$1={};function Me$1(e){return e.symbols.symbolCounter++,"_T"+e.symbols.symbolCounter.toString()}function Fe$1(e){return e.symbols.symbolCounter++,"_Tvar"+e.symbols.symbolCounter.toString()}M$5(xe$1,W$3),B$2(xe$1,W$3),N$3(xe$1,W$3),C$3(xe$1,W$3),f(xe$1,W$3),xe$1.iif=function(e,n){try{return W$3(e,n,((t,o,l)=>{throw new t$6(e,e$7.Unrecognised,n)}))}catch(t){throw t}},xe$1.decode=function(e,n){try{return W$3(e,n,((t,o,l)=>{throw new t$6(e,e$7.Unrecognised,n)}))}catch(t){throw t}},xe$1.when=function(e,n){try{return W$3(e,n,((t,o,l)=>{throw new t$6(e,e$7.Unrecognised,n)}))}catch(t){throw t}};const Ce$1={};for(const Pe in xe$1)Ce$1[Pe]=new e$6(xe$1[Pe]);q$3(xe$1,W$3);for(const Pe in xe$1)xe$1[Pe]=new e$6(xe$1[Pe]);const Ie$1=function(){};Ie$1.prototype=xe$1;const Ae$1=function(){};function _e(e,n,t){const o={};e||(e={}),t||(t={}),o._SymbolsMap={},o.textformatting=1,o.infinity=1,o.pi=1;for(const l in n)o[l]=1;for(const l in t)o[l]=1;for(const l in e)o[l]=1;return o}function Oe(t,o,l){const r=l?new Ae$1:new Ie$1;t||(t={}),o||(o={});const a=new J$5({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,r._SymbolsMap={textformatting:1,infinity:1,pi:1},r.textformatting=a,r.infinity=Number.POSITIVE_INFINITY,r.pi=Math.PI;for(const e in o)r[e]=o[e],r._SymbolsMap[e]=1;for(const e in t)r._SymbolsMap[e]=1,t[e]&&"esri.Graphic"===t[e].declaredClass?r[e]=g$4.createFromGraphic(t[e]):r[e]=t[e];return r}Ae$1.prototype=Ce$1;function Ee$1(e,n){const t={mode:n,compiled:!0,functions:{},signatures:[],standardFunction:W$3,standardFunctionAsync:W$3,evaluateIdentifier:Be};for(let o=0;o<e.length;o++)e[o].registerFunctions(t);if("sync"===n){for(const e in t.functions)xe$1[e]=new e$6(t.functions[e]),Ie$1.prototype[e]=xe$1[e];for(let e=0;e<t.signatures.length;e++)o$4(t.signatures[e],"sync");}else {for(const e in t.functions)Ce$1[e]=new e$6(t.functions[e]),Ae$1.prototype[e]=Ce$1[e];for(let e=0;e<t.signatures.length;e++)o$4(t.signatures[e],"async");}}function Be(e,n){const t=n.name;if("_SymbolsMap"===t)throw new t$6(e,e$7.InvalidIdentifier,null);if(e.localStack.length>0){if("_t"!==t.substr(0,2).toLowerCase()&&void 0!==e.localStack[e.localStack.length-1][t])return e.localStack[e.localStack.length-1][t];const n=e.mangleMap[t];if(void 0!==n&&void 0!==e.localStack[e.localStack.length-1][n])return e.localStack[e.localStack.length-1][n]}if("_t"!==t.substr(0,2).toLowerCase()&&void 0!==e.globalScope[t])return e.globalScope[t];if(1===e.globalScope._SymbolsMap[t])return e.globalScope[t];const o=e.mangleMap[t];return void 0!==o?e.globalScope[o]:void 0}Ee$1([m$4],"sync"),Ee$1([m$4],"async");let $e=0;const je={error(e){throw new t$6(null,e,null)},__awaiter:(e,n,t,o)=>new Promise(((t,l)=>{function r(e){try{s(o.next(e));}catch(n){l(n);}}function a(e){try{s(o.throw(e));}catch(n){l(n);}}function s(e){e.done?t(e.value):e.value&&e.value.then?e.value.then(r,a):($e++,$e%100==0?setTimeout((()=>{$e=0,r(e.value);}),0):r(e.value));}s((o=o.apply(e,n||[])).next());})),functionDepthchecker:(e,n)=>function(){if(n.depthCounter.depth++,n.localStack.push([]),n.depthCounter.depth>64)throw new t$6(null,e$7.MaximumCallDepth,null);const t=e.apply(this,arguments);return C$5(t)?t.then((e=>(n.depthCounter.depth--,n.localStack.length=n.localStack.length-1,e))):(n.depthCounter.depth--,n.localStack.length=n.localStack.length-1,t)},chkAssig(e,n){if(void 0===n.gdefs[e])throw new t$6(n,e$7.InvalidIdentifier,null);return e},mustBoolean(e,n){if(!0===e||!1===e)return e;throw new t$6(n,e$7.BooleanConditionRequired,null)},setAssig:(e,n)=>(n.gdefs[e]=1,e),castString:e=>K$3(e),aCheck(e,n){if(F$3(e)){if("ArrayExpression"===n)throw new t$6(null,e$7.NoFunctionInArray,null);if("ObjectExpression"===n)throw new t$6(null,e$7.NoFunctionInDictionary,null);throw new t$6(null,e$7.NoFunctionInTemplateLiteral,null)}return e===k$3?null:e},Dictionary:J$5,Feature:g$4,UserDefinedCompiledFunction:T$4,dictionary(n){const o={},l=new Map;for(let e=0;e<n.length;e+=2){if(F$3(n[e+1]))throw new t$6(null,e$7.NoFunctionInDictionary,null);if(!1===w$6(n[e]))throw new t$6(null,e$7.KeyMustBeString,null);let r=n[e].toString();const s=r.toLowerCase();l.has(s)?r=l.get(s):l.set(s,r),n[e+1]===k$3?o[r]=null:o[r]=n[e+1];}const r=new J$5(o);return r.immutable=!1,r},strCheck(e){if(!1===w$6(e))throw new t$6(null,e$7.KeyMustBeString,null);return e},unary(e,n){if(_$4(e)){if("!"===n)return !e;if("-"===n)return -1*re$5(e);if("+"===n)return 1*re$5(e);if("~"===n)return ~re$5(e);throw new t$6(null,e$7.UnsupportedUnaryOperator,null)}if("-"===n)return -1*re$5(e);if("+"===n)return 1*re$5(e);if("~"===n)return ~re$5(e);throw new t$6(null,e$7.UnsupportedUnaryOperator,null)},logicalCheck(e){if(!1===_$4(e))throw new t$6(null,e$7.LogicExpressionOrAnd,null);return e},logical(e,n,t){if(_$4(e)&&_$4(n))switch(t){case"||":return e||n;case"&&":return e&&n;default:throw new t$6(null,e$7.LogicExpressionOrAnd,null)}throw new t$6(null,e$7.LogicExpressionOrAnd,null)},binary(e,n,t){switch(t){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ne$1(re$5(e),re$5(n),t);case"==":case"=":return X$5(e,n);case"!=":return !X$5(e,n);case"<":case">":case"<=":case">=":return Q$5(e,n,t);case"+":return w$6(e)||w$6(n)?K$3(e)+K$3(n):re$5(e)+re$5(n);case"-":return re$5(e)-re$5(n);case"*":return re$5(e)*re$5(n);case"/":return re$5(e)/re$5(n);case"%":return re$5(e)%re$5(n);default:throw new t$6(null,e$7.UnsupportedOperator,null)}},assign(e,n,t){switch(n){case"=":return e===k$3?null:e;case"/=":return re$5(t)/re$5(e);case"*=":return re$5(t)*re$5(e);case"-=":return re$5(t)-re$5(e);case"+=":return w$6(t)||w$6(e)?K$3(t)+K$3(e):re$5(t)+re$5(e);case"%=":return re$5(t)%re$5(e);default:throw new t$6(null,e$7.UnsupportedOperator,null)}},update(e,n,t,o){const l=re$5(e[n]);return e[n]="++"===t?l+1:l-1,!1===o?l:"++"===t?l+1:l-1},graphicToFeature:(e,t)=>null===e?null:g$4.createFromGraphicLikeObject(e.geometry,e.attributes,t),memberupdate(n,t,o,l){let r;if(Y$5(n)){if(!Z$7(t))throw new t$6(null,e$7.ArrayAccessorMustBeNumber,null);if(t<0&&(t=n.length+t),t<0||t>=n.length)throw new t$6(null,e$7.OutOfBounds,null);r=re$5(n[t]),n[t]="++"===o?r+1:r-1;}else if(n instanceof J$5){if(!1===w$6(t))throw new t$6(null,e$7.KeyAccessorMustBeString,null);if(!0!==n.hasField(t))throw new t$6(null,e$7.FieldNotFound,null,{key:t});r=re$5(n.field(t)),n.setField(t,"++"===o?r+1:r-1);}else if(J$6(n)){if(!1===w$6(t))throw new t$6(null,e$7.KeyAccessorMustBeString,null);if(!0!==n.hasField(t))throw new t$6(null,e$7.FieldNotFound,null);r=re$5(n.field(t)),n.setField(t,"++"===o?r+1:r-1);}else {if(E$3(n))throw new t$6(null,e$7.Immutable,null);if(!(n instanceof Ue))throw new t$6(null,e$7.InvalidIdentifier,null);if(!1===w$6(t))throw new t$6(null,e$7.ModuleAccessorMustBeString,null);if(!0!==n.hasGlobal(t))throw new t$6(null,e$7.ModuleExportNotFound,null);r=re$5(n.global(t)),n.setGlobal(t,"++"===o?r+1:r-1);}return !1===l?r:"++"===o?r+1:r-1},assignmember(n,t,o,l){if(Y$5(n)){if(!Z$7(t))throw new t$6(null,e$7.ArrayAccessorMustBeNumber,null);if(t<0&&(t=n.length+t),t<0||t>n.length)throw new t$6(null,e$7.OutOfBounds,null);if(t===n.length){if("="!==o)throw new t$6(null,e$7.OutOfBounds,null);n[t]=this.assign(l,o,n[t]);}else n[t]=this.assign(l,o,n[t]);}else if(n instanceof J$5){if(!1===w$6(t))throw new t$6(null,e$7.KeyAccessorMustBeString,null);if(!0===n.hasField(t))n.setField(t,this.assign(l,o,n.field(t)));else {if("="!==o)throw new t$6(null,e$7.FieldNotFound,null);n.setField(t,this.assign(l,o,null));}}else if(J$6(n)){if(!1===w$6(t))throw new t$6(null,e$7.KeyAccessorMustBeString,null);if(!0===n.hasField(t))n.setField(t,this.assign(l,o,n.field(t)));else {if("="!==o)throw new t$6(null,e$7.FieldNotFound,null);n.setField(t,this.assign(l,o,null));}}else {if(E$3(n))throw new t$6(null,e$7.Immutable,null);if(!(n instanceof Ue))throw new t$6(null,e$7.InvalidIdentifier,null);if(!1===w$6(t))throw new t$6(null,e$7.ModuleAccessorMustBeString,null);if(!n.hasGlobal(t))throw new t$6(null,e$7.ModuleExportNotFound,null);n.setGlobal(t,this.assign(l,o,n.global(t)));}},member(n,t){if(null===n)throw new t$6(null,e$7.MemberOfNull,null);if(n instanceof J$5||J$6(n)){if(w$6(t))return n.field(t);throw new t$6(null,e$7.InvalidMemberAccessKey,null)}if(n instanceof p$6){if(w$6(t))return W$6(n,t,null,null);throw new t$6(null,e$7.InvalidMemberAccessKey,null)}if(Y$5(n)){if(Z$7(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length+t),t>=n.length||t<0)throw new t$6(null,e$7.OutOfBounds,null);return n[t]}throw new t$6(null,e$7.InvalidMemberAccessKey,null)}if(w$6(n)){if(Z$7(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length+t),t>=n.length||t<0)throw new t$6(null,e$7.OutOfBounds,null);return n[t]}throw new t$6(null,e$7.InvalidMemberAccessKey,null)}if(E$3(n)){if(Z$7(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=n.length()+t),t>=n.length()||t<0)throw new t$6(null,e$7.OutOfBounds,null);return n.get(t)}throw new t$6(null,e$7.InvalidMemberAccessKey,null)}if(n instanceof Ue){if(w$6(t))return n.global(t);throw new t$6(null,e$7.InvalidMemberAccessKey,null)}throw new t$6(null,e$7.InvalidMemberAccessKey,null)},callfunc:(e,n,t)=>e.call(t,{arguments:n,preparsed:!0}),loadModule(e,n){const t=n.moduleFactoryMap[e];if(n.moduleSingletons[t])return n.moduleSingletons[t];const o=n.moduleFactory[t]({vars:{},moduleSingletons:n.moduleSingletons,depthCounter:n.depthCounter,console:n.console,abortSignal:n.abortSignal,isAsync:n.isAsync,services:n.services,lrucache:n.lrucache,interceptor:n.interceptor},n.spatialReference);return n.moduleSingletons[t]=o,o},callModuleFunction(e,n,o,l){if(!(e instanceof Ue))throw new t$6(null,e$7.FuncionNotFound,null);const r=e.global(o);if(!1===F$3(r))throw new t$6(null,e$7.CallNonFunction,null);return r.call(l,{preparsed:!0,arguments:n})}};function Ne(e){console.log(e);}function Le(e,n,c=!1){null===n&&(n={vars:{},customfunctions:{}});let u=null;e.usesModules&&(u=new s$3(null,e.loadedModules));const p={isAsync:c,globalScope:_e(n.vars,c?Ce$1:xe$1,n.customfunctions),moduleFactory:{},moduleFactoryMap:{},undeclaredGlobalsInFunctions:new Map,customfunctions:n.customfunctions,libraryResolver:u,localScope:null,mangleMap:{},depthCounter:{depth:1},exports:{},console:Ne,lrucache:n.lrucache,interceptor:n.interceptor,services:n.services,symbols:{symbolCounter:0}};let m=V$3(p,e);""===m&&(m="lc.voidOperation; "),p.undeclaredGlobalsInFunctions.size>0&&p.undeclaredGlobalsInFunctions.forEach((e=>{throw new s$b(n,e$7.InvalidIdentifier,e.node)}));let g="";g=c?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+m+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+m+"\n return lastStatement; } \n return this.postProcess(mainBody()); ";const d=p.moduleFactory,f=p.moduleFactoryMap,h=p.exports,y={};for(const t in h)y[t]=void 0!==p.mangleMap[t]?p.mangleMap[t]:t;const b={lc:ve$2,lang:je,mangles:p.mangleMap,postProcess(e){if(e instanceof D$6&&(e=e.value),e instanceof N$5&&(e=e.value),e===k$3&&(e=null),e===j$2)throw new t$6(null,e$7.IllegalResult,null);if(e===A$4)throw new t$6(null,e$7.IllegalResult,null);if(F$3(e))throw new t$6(null,e$7.IllegalResult,null);return e},prepare(e,n){let t=e.spatialReference;null==t&&(t=k$4.WebMercator);const o=Oe(e.vars,e.customfunctions,n);return {localStack:[],isAsync:n,moduleFactory:d,moduleFactoryMap:f,mangleMap:this.mangles,moduleSingletons:{},exports:h,gdefs:{},exportmangle:y,spatialReference:t,globalScope:o,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console?e.console:Ne,lrucache:e.lrucache,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:{depth:1}}}};return new Function("context","spatialReference",g).bind(b)}async function Re(){return Ee$1([await import('./geomasync-4a943c05.js')],"async"),!0}class Ue extends s$8{constructor(e){super(null),this.moduleContext=e;}hasGlobal(e){return void 0===this.moduleContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.moduleContext.exports[e]}setGlobal(e,n){const o=this.moduleContext.globalScope,l=e.toLowerCase();if(F$3(n))throw new t$6(null,e$7.AssignModuleFunction,null);o[this.moduleContext.exportmangle[l]]=n;}global(e){const n=this.moduleContext.globalScope;e=e.toLowerCase();const o=n[this.moduleContext.exportmangle[e]];if(void 0===o)throw new t$6(null,e$7.InvalidIdentifier,null);if(F$3(o)&&!(o instanceof s$a)){const t=new s$a;return t.fn=o,t.parameterEvaluator=W$3,t.context=this.moduleContext,n[this.moduleContext.exportmangle[e]]=t,t}return o}}function De(e,n,t=!1){const l={isAsync:t,moduleFactory:n.moduleFactory,moduleFactoryMap:{},libraryResolver:new s$3(null,e.loadedModules),globalScope:_e(n.vars,t?Ce$1:xe$1,n.customfunctions),customfunctions:n.customfunctions,localScope:null,mangleMap:{},undeclaredGlobalsInFunctions:new Map,depthCounter:{depth:1},exports:{},console:Ne,lrucache:n.lrucache,interceptor:n.interceptor,services:n.services,symbols:{symbolCounter:0}};let r=V$3(l,e);""===r&&(r="lc.voidOperation; ");let a="";a=t?"var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+r+"\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); ":"var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n "+r+"\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";const s=l.moduleFactory,i=l.moduleFactoryMap,c=l.exports,u={};for(const o in c)u[o]=void 0!==l.mangleMap[o]?l.mangleMap[o]:o;const p={lc:ve$2,lang:je,mangles:l.mangleMap,prepareModule:e=>new Ue(e),prepare(e,n){let t=e.spatialReference;null==t&&(t=new k$4({wkid:102100}));const o=Oe(e.vars,e.customfunctions,n);return {localStack:[],isAsync:n,exports:c,exportmangle:u,gdefs:{},moduleFactory:s,moduleFactoryMap:i,moduleSingletons:e.moduleSingletons,mangleMap:this.mangles,spatialReference:t,globalScope:o,abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,localScope:null,services:e.services,console:e.console?e.console:Ne,lrucache:e.lrucache,interceptor:e.interceptor,symbols:{symbolCounter:0},depthCounter:e.depthCounter}}};return new Function("context","spatialReference",a).bind(p)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$2;!function(e){e.AssignmentExpression="AssignmentExpression",e.ArrayExpression="ArrayExpression",e.BlockComment="BlockComment",e.BlockStatement="BlockStatement",e.BinaryExpression="BinaryExpression",e.BreakStatement="BreakStatement",e.CallExpression="CallExpression",e.ContinueStatement="ContinueStatement",e.EmptyStatement="EmptyStatement",e.ExpressionStatement="ExpressionStatement",e.ExportNamedDeclaration="ExportNamedDeclaration",e.ExportSpecifier="ExportSpecifier",e.ForStatement="ForStatement",e.ForInStatement="ForInStatement",e.FunctionDeclaration="FunctionDeclaration",e.Identifier="Identifier",e.IfStatement="IfStatement",e.ImportDeclaration="ImportDeclaration",e.ImportDefaultSpecifier="ImportDefaultSpecifier",e.LineComment="LineComment",e.Literal="Literal",e.LogicalExpression="LogicalExpression",e.MemberExpression="MemberExpression",e.ObjectExpression="ObjectExpression",e.Program="Program",e.Property="Property",e.ReturnStatement="ReturnStatement",e.TemplateElement="TemplateElement",e.TemplateLiteral="TemplateLiteral",e.UnaryExpression="UnaryExpression",e.UpdateExpression="UpdateExpression",e.VariableDeclaration="VariableDeclaration",e.VariableDeclarator="VariableDeclarator",e.WhileStatement="WhileStatement";}(e$2||(e$2={}));const t$1=["++","--"],n=["-","+","!","~"],i$1=["=","/=","*=","%=","+=","-="],r$1=["||","&&"],a$1=["|","&",">>","<<",">>>","^","==","!=","<","<=",">",">=","+","-","*","/","%"],o$2={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10};var c;!function(e){e[e.Unknown=0]="Unknown",e[e.BooleanLiteral=1]="BooleanLiteral",e[e.EOF=2]="EOF",e[e.Identifier=3]="Identifier",e[e.Keyword=4]="Keyword",e[e.NullLiteral=5]="NullLiteral",e[e.NumericLiteral=6]="NumericLiteral",e[e.Punctuator=7]="Punctuator",e[e.StringLiteral=8]="StringLiteral",e[e.Template=10]="Template";}(c||(c={}));const s$2=["Unknown","Boolean","<end>","Identifier","Keyword","Null","Numeric","Punctuator","String","RegularExpression","Template"];var l$2;!function(e){e.InvalidModuleUri="InvalidModuleUri",e.ForInOfLoopInitializer="ForInOfLoopInitializer",e.IdentiferExpected="IdentiferExpected",e.InvalidEscapedReservedWord="InvalidEscapedReservedWord",e.InvalidExpression="InvalidExpression",e.InvalidFunctionIdentifier="InvalidFunctionIdentifier",e.InvalidHexEscapeSequence="InvalidHexEscapeSequence",e.InvalidLeftHandSideInAssignment="InvalidLeftHandSideInAssignment",e.InvalidLeftHandSideInForIn="InvalidLeftHandSideInForIn",e.InvalidTemplateHead="InvalidTemplateHead",e.InvalidVariableAssignment="InvalidVariableAssignment",e.KeyMustBeString="KeyMustBeString",e.NoFunctionInsideBlock="NoFunctionInsideBlock",e.NoFunctionInsideFunction="NoFunctionInsideFunction",e.ModuleExportRootOnly="ModuleExportRootOnly",e.ModuleImportRootOnly="ModuleImportRootOnly",e.PunctuatorExpected="PunctuatorExpected",e.TemplateOctalLiteral="TemplateOctalLiteral",e.UnexpectedEndOfScript="UnexpectedEndOfScript",e.UnexpectedIdentifier="UnexpectedIdentifier",e.UnexpectedNumber="UnexpectedNumber",e.UnexpectedString="UnexpectedString",e.UnexpectedTemplate="UnexpectedTemplate",e.UnexpectedToken="UnexpectedToken";}(l$2||(l$2={}));const p={[l$2.InvalidModuleUri]:"Module uri must be a string literal",[l$2.ForInOfLoopInitializer]:"for-in loop variable declaration may not have an initializer",[l$2.IdentiferExpected]:"Identifier expected",[l$2.InvalidEscapedReservedWord]:"Keyword cannot contain escaped characters",[l$2.InvalidExpression]:"Invalid expression",[l$2.InvalidFunctionIdentifier]:"Invalid function identifier",[l$2.InvalidHexEscapeSequence]:"Invalid hexadecimal escape sequence",[l$2.InvalidLeftHandSideInAssignment]:"Invalid left-hand side in assignment",[l$2.InvalidLeftHandSideInForIn]:"Invalid left-hand side in for-in",[l$2.InvalidTemplateHead]:"Invalid template structure",[l$2.InvalidVariableAssignment]:"Invalid variable assignment",[l$2.KeyMustBeString]:"Object keys must be a string",[l$2.NoFunctionInsideBlock]:"Functions cannot be declared inside of code blocks",[l$2.NoFunctionInsideFunction]:"Functions cannot be declared inside another function",[l$2.ModuleExportRootOnly]:"Module exports cannot be declared inside of code blocks",[l$2.ModuleImportRootOnly]:"Module import cannot be declared inside of code blocks",[l$2.PunctuatorExpected]:"'${value}' expected",[l$2.TemplateOctalLiteral]:"Octal literals are not allowed in template strings.",[l$2.UnexpectedEndOfScript]:"Unexpected end of script",[l$2.UnexpectedIdentifier]:"Unexpected identifier",[l$2.UnexpectedNumber]:"Unexpected number",[l$2.UnexpectedString]:"Unexpected string",[l$2.UnexpectedTemplate]:"Unexpected quasi '${value}'",[l$2.UnexpectedToken]:"Unexpected token"};class d$2 extends Error{constructor({code:e,index:t,line:n,column:i,len:r=0,description:a,data:o}){super(`${a??e}`),this.declaredRootClass="esri.arcade.lib.parsingerror",this.name="ParsingError",this.code=e,this.index=t,this.line=n,this.column=i,this.len=r,this.data=o,this.description=a,this.range={start:{line:n,column:i-1},end:{line:n,column:i+r}},Error.captureStackTrace?.(this,d$2);}}function u$2(t){return t?.type===e$2.Program}function x$2(t){return t?.type===e$2.BlockStatement}function I$2(t){return t?.type===e$2.BlockComment}function y$1(t){return t?.type===e$2.EmptyStatement}function w$2(t){return t?.type===e$2.VariableDeclarator}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(t,n){return !!n&&(n.loc.end.line===t.loc.start.line&&n.loc.end.column<=t.loc.start.column)}function m(t,n){return t.range[0]>=n.range[0]&&t.range[1]<=n.range[1]}class o$1{constructor(){this.comments=[],this._nodeStack=[],this._newComments=[];}insertInnerComments(n){if(!x$2(n)||0!==n.body.length)return;const e=[];for(let t=this._newComments.length-1;t>=0;--t){const s=this._newComments[t];n.range[1]>=s.range[0]&&(e.unshift(s),this._newComments.splice(t,1));}e.length&&(n.innerComments=e);}attachTrailingComments(n){if(!n)return;const e=this._nodeStack[this._nodeStack.length-1];if(x$2(n)&&m(e,n))for(let t=this._newComments.length-1;t>=0;--t){const s=this._newComments[t];m(s,n)&&(e.trailingComments=[...e.trailingComments??[],s],this._newComments.splice(t,1));}let s=[];if(this._newComments.length>0)for(let t=this._newComments.length-1;t>=0;--t){const m=this._newComments[t];i(m,e)?(e.trailingComments=[...e.trailingComments??[],m],this._newComments.splice(t,1)):i(m,n)&&(s.unshift(m),this._newComments.splice(t,1));}if(e?.trailingComments){i(e.trailingComments[0],n)&&(s=[...s,...e.trailingComments],delete e.trailingComments);}s.length>0&&(n.trailingComments=s);}attachLeadingComments(t){if(!t)return;let s;for(;this._nodeStack.length>0;){const n=this._nodeStack[this._nodeStack.length-1];if(!(t.range[0]<=n.range[0]))break;s=n,this._nodeStack.pop();}const i=[],m=[];if(s){for(let o=(s.leadingComments?.length??0)-1;o>=0;--o){const l=s.leadingComments[o];t.range[0]>=l.range[1]?(i.unshift(l),s.leadingComments.splice(o,1)):w$2(t)&&!I$2(l)&&(m.unshift(l),s.leadingComments.splice(o,1));}return 0===s.leadingComments?.length&&delete s.leadingComments,i.length&&(t.leadingComments=i),void(m.length&&(t.trailingComments=[...m,...t.trailingComments??[]]))}for(let n=this._newComments.length-1;n>=0;--n){const e=this._newComments[n];t.range[0]>=e.range[0]&&(i.unshift(e),this._newComments.splice(n,1));}i.length&&(t.leadingComments=i);}attachComments(t){if(u$2(t)&&t.body.length>0){const n=this._nodeStack[this._nodeStack.length-1];return n?(n.trailingComments=[...n.trailingComments??[],...this._newComments],this._newComments.length=0,void this._nodeStack.pop()):(t.trailingComments=[...this._newComments],void(this._newComments.length=0))}this.attachTrailingComments(t),this.attachLeadingComments(t),this.insertInnerComments(t),this._nodeStack.push(t);}collectComment(t){this.comments.push(t),this._newComments.push(t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(t,o){const e=p[t];return o?e.replace(/\${(.*?)}/g,((r,t)=>o[t]?.toString()??"")):e}class e$1{constructor(r=!1){this.tolerant=r,this.errors=[];}recordError(r){this.errors.push(r);}tolerate(r){if(!this.tolerant)throw r;this.recordError(r);}throwError(r){throw r.description=r.description??o(r.code,r.data),new d$2(r)}tolerateError(r){r.description=r.description??o(r.code,r.data);const e=new d$2(r);if(!this.tolerant)throw e;this.recordError(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(r,o){if(!r)throw new Error("ASSERT: "+o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const u$1={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},D$2={fromCodePoint:u=>u<65536?String.fromCharCode(u):String.fromCharCode(55296+(u-65536>>10))+String.fromCharCode(56320+(u-65536&1023)),isWhiteSpace:u=>32===u||9===u||11===u||12===u||160===u||u>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].includes(u),isLineTerminator:u=>10===u||13===u||8232===u||8233===u,isIdentifierStart:F=>36===F||95===F||F>=65&&F<=90||F>=97&&F<=122||92===F||F>=128&&u$1.NonAsciiIdentifierStart.test(D$2.fromCodePoint(F)),isIdentifierPart:F=>36===F||95===F||F>=65&&F<=90||F>=97&&F<=122||F>=48&&F<=57||92===F||F>=128&&u$1.NonAsciiIdentifierPart.test(D$2.fromCodePoint(F)),isDecimalDigit:u=>u>=48&&u<=57,isHexDigit:u=>u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102,isOctalDigit:u=>u>=48&&u<=55};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(e){return "0123456789abcdef".indexOf(e.toLowerCase())}function d$1(e){return "01234567".indexOf(e)}const l$1=[[],[],[]];t$1.forEach((e=>l$1[e.length-1].push(e))),n.forEach((e=>l$1[e.length-1].push(e))),r$1.forEach((e=>l$1[e.length-1].push(e))),i$1.forEach((e=>l$1[e.length-1].push(e))),a$1.forEach((e=>l$1[e.length-1].push(e)));class u{constructor(e,t){this.source=e,this.errorHandler=t,this._length=e.length,this.index=0,this.lineNumber=1,this.lineStart=0,this.curlyStack=[];}saveState(){return {index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}}restoreState(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart,this.curlyStack=e.curlyStack;}eof(){return this.index>=this._length}throwUnexpectedToken(e=l$2.UnexpectedToken){this.errorHandler.throwError({code:e,index:this.index,line:this.lineNumber,column:this.index-this.lineStart+1});}tolerateUnexpectedToken(e=l$2.UnexpectedToken){this.errorHandler.tolerateError({code:e,index:this.index,line:this.lineNumber,column:this.index-this.lineStart+1});}skipSingleLineComment(e){const i=[],s=this.index-e,n={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{line:0,column:0}};for(;!this.eof();){const r=this.source.charCodeAt(this.index);if(++this.index,D$2.isLineTerminator(r)){if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart-1};const t={multiLine:!1,start:s+e,end:this.index-1,range:[s,this.index-1],loc:n};i.push(t);}return 13===r&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,i}}if(n){n.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!1,start:s+e,end:this.index,range:[s,this.index],loc:n};i.push(t);}return i}skipMultiLineComment(){const e=[],i=this.index-2,s={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{line:0,column:0}};for(;!this.eof();){const n=this.source.charCodeAt(this.index);if(D$2.isLineTerminator(n))13===n&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===n){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!0,start:i+2,end:this.index-2,range:[i,this.index],loc:s};e.push(t);}return e}++this.index;}else ++this.index;}if(s){s.end={line:this.lineNumber,column:this.index-this.lineStart};const t={multiLine:!0,start:i+2,end:this.index,range:[i,this.index],loc:s};e.push(t);}return this.tolerateUnexpectedToken(),e}scanComments(){let e=[];for(;!this.eof();){let i=this.source.charCodeAt(this.index);if(D$2.isWhiteSpace(i))++this.index;else if(D$2.isLineTerminator(i))++this.index,13===i&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index;else {if(47!==i)break;if(i=this.source.charCodeAt(this.index+1),47===i){this.index+=2;const t=this.skipSingleLineComment(2);e=[...e,...t];}else {if(42!==i)break;{this.index+=2;const t=this.skipMultiLineComment();e=[...e,...t];}}}}return e}isKeyword(e){switch((e=e.toLowerCase()).length){case 2:return "if"===e||"in"===e;case 3:return "var"===e||"for"===e;case 4:return "else"===e;case 5:return "break"===e||"while"===e;case 6:return "return"===e||"import"===e||"export"===e;case 8:return "function"===e||"continue"===e;default:return !1}}codePointAt(e){let t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){const i=this.source.charCodeAt(e+1);if(i>=56320&&i<=57343){t=1024*(t-55296)+i-56320+65536;}}return t}scanHexEscape(e){const i="u"===e?4:2;let s=0;for(let n=0;n<i;++n){if(this.eof()||!D$2.isHexDigit(this.source.charCodeAt(this.index)))return null;s=16*s+a(this.source[this.index++]);}return String.fromCharCode(s)}scanUnicodeCodePointEscape(){let e=this.source[this.index],i=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],D$2.isHexDigit(e.charCodeAt(0)));)i=16*i+a(e);return (i>1114111||"}"!==e)&&this.throwUnexpectedToken(),D$2.fromCodePoint(i)}getIdentifier(){const e=this.index++;for(;!this.eof();){const i=this.source.charCodeAt(this.index);if(92===i)return this.index=e,this.getComplexIdentifier();if(i>=55296&&i<57343)return this.index=e,this.getComplexIdentifier();if(!D$2.isIdentifierPart(i))break;++this.index;}return this.source.slice(e,this.index)}getComplexIdentifier(){let e,i=this.codePointAt(this.index),s=D$2.fromCodePoint(i);for(this.index+=s.length,92===i&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&D$2.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken()),s=e);!this.eof()&&(i=this.codePointAt(this.index),D$2.isIdentifierPart(i));)e=D$2.fromCodePoint(i),s+=e,this.index+=e.length,92===i&&(s=s.substring(0,s.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&D$2.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken()),s+=e);return s}octalToDecimal(e){let i="0"!==e,s=d$1(e);return !this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index))&&(i=!0,s=8*s+d$1(this.source[this.index++]),"0123".includes(e)&&!this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index))&&(s=8*s+d$1(this.source[this.index++]))),{code:s,octal:i}}scanIdentifier(){let e;const t=this.index,i=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier();if(e=1===i.length?c.Identifier:this.isKeyword(i)?c.Keyword:"null"===i.toLowerCase()?c.NullLiteral:"true"===i.toLowerCase()||"false"===i.toLowerCase()?c.BooleanLiteral:c.Identifier,e!==c.Identifier&&t+i.length!==this.index){const e=this.index;this.index=t,this.tolerateUnexpectedToken(l$2.InvalidEscapedReservedWord),this.index=e;}return {type:e,value:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}}scanPunctuator(){const e=this.index;let t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;case"}":++this.index,this.curlyStack.pop();break;default:for(let e=l$1.length;e>0;e--)if(t=this.source.substring(this.index,this.index+e),l$1[e-1].includes(t)){this.index+=e;break}}return this.index===e&&this.throwUnexpectedToken(),{type:c.Punctuator,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanHexLiteral(e){let i="";for(;!this.eof()&&D$2.isHexDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];return 0===i.length&&this.throwUnexpectedToken(),D$2.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:c.NumericLiteral,value:parseInt("0x"+i,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanBinaryLiteral(e){let i="";for(;!this.eof();){const e=this.source[this.index];if("0"!==e&&"1"!==e)break;i+=this.source[this.index++];}if(0===i.length&&this.throwUnexpectedToken(),!this.eof()){const e=this.source.charCodeAt(this.index);(D$2.isIdentifierStart(e)||D$2.isDecimalDigit(e))&&this.throwUnexpectedToken();}return {type:c.NumericLiteral,value:parseInt(i,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}}scanOctalLiteral(e,i){let s="",n=!1;for(D$2.isOctalDigit(e.charCodeAt(0))?(n=!0,s="0"+this.source[this.index++]):++this.index;!this.eof()&&D$2.isOctalDigit(this.source.charCodeAt(this.index));)s+=this.source[this.index++];return n||0!==s.length||this.throwUnexpectedToken(),(D$2.isIdentifierStart(this.source.charCodeAt(this.index))||D$2.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:c.NumericLiteral,value:parseInt(s,8),lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}}scanNumericLiteral(){const i=this.index;let s=this.source[i];r(D$2.isDecimalDigit(s.charCodeAt(0))||"."===s,"Numeric literal must start with a decimal digit or a decimal point");let n="";if("."!==s){if(n=this.source[this.index++],s=this.source[this.index],"0"===n){if("x"===s||"X"===s)return ++this.index,this.scanHexLiteral(i);if("b"===s||"B"===s)return ++this.index,this.scanBinaryLiteral(i);if("o"===s||"O"===s)return this.scanOctalLiteral(s,i)}for(;D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index];}if("."===s){for(n+=this.source[this.index++];D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index];}if("e"===s||"E"===s)if(n+=this.source[this.index++],s=this.source[this.index],"+"!==s&&"-"!==s||(n+=this.source[this.index++]),D$2.isDecimalDigit(this.source.charCodeAt(this.index)))for(;D$2.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];else this.throwUnexpectedToken();return D$2.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:c.NumericLiteral,value:parseFloat(n),lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}}scanStringLiteral(){const i=this.index;let s=this.source[i];r("'"===s||'"'===s,"String literal must starts with a quote"),++this.index;let n=!1,r$1="";for(;!this.eof();){let e=this.source[this.index++];if(e===s){s="";break}if("\\"===e)if(e=this.source[this.index++],e&&D$2.isLineTerminator(e.charCodeAt(0)))++this.lineNumber,"\r"===e&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(e){case"u":if("{"===this.source[this.index])++this.index,r$1+=this.scanUnicodeCodePointEscape();else {const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(),r$1+=t;}break;case"x":{const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(l$2.InvalidHexEscapeSequence),r$1+=t;break}case"n":r$1+="\n";break;case"r":r$1+="\r";break;case"t":r$1+="\t";break;case"b":r$1+="\b";break;case"f":r$1+="\f";break;case"v":r$1+="\v";break;case"8":case"9":r$1+=e,this.tolerateUnexpectedToken();break;default:if(e&&D$2.isOctalDigit(e.charCodeAt(0))){const t=this.octalToDecimal(e);n=t.octal||n,r$1+=String.fromCharCode(t.code);}else r$1+=e;}else {if(D$2.isLineTerminator(e.charCodeAt(0)))break;r$1+=e;}}return ""!==s&&(this.index=i,this.throwUnexpectedToken()),{type:c.StringLiteral,value:r$1,lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}}scanTemplate(){let e="",i=!1;const s=this.index,n="`"===this.source[s];let r=!1,h=2;for(++this.index;!this.eof();){let s=this.source[this.index++];if("`"===s){h=1,r=!0,i=!0;break}if("$"!==s)if("\\"!==s)D$2.isLineTerminator(s.charCodeAt(0))?(++this.lineNumber,"\r"===s&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=s;else if(s=this.source[this.index++],D$2.isLineTerminator(s.charCodeAt(0)))++this.lineNumber,"\r"===s&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(s){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="\t";break;case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape();else {const t=this.index,i=this.scanHexEscape(s);null!==i?e+=i:(this.index=t,e+=s);}break;case"x":{const t=this.scanHexEscape(s);null===t&&this.throwUnexpectedToken(l$2.InvalidHexEscapeSequence),e+=t;break}case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===s?(D$2.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(l$2.TemplateOctalLiteral),e+="\0"):D$2.isOctalDigit(s.charCodeAt(0))?this.throwUnexpectedToken(l$2.TemplateOctalLiteral):e+=s;}else {if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,i=!0;break}e+=s;}}return i||this.throwUnexpectedToken(),n||this.curlyStack.pop(),{type:c.Template,value:this.source.slice(s+1,this.index-h),cooked:e,head:n,tail:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:s,end:this.index}}lex(){if(this.eof())return {type:c.EOF,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};const e=this.source.charCodeAt(this.index);return D$2.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?D$2.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():D$2.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&D$2.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var x$1,k$1;function w$1(t,e=0){let r=t.start-t.lineStart,i=t.lineNumber;return r<0&&(r+=e,i--),{index:t.start,line:i,column:r}}function g$1(t){return [{index:t.range[0],...t.loc.start},{index:t.range[1],...t.loc.end}]}function y(t){return o$2[t]??0}!function(t){t[t.None=0]="None",t[t.Function=1]="Function",t[t.IfClause=2]="IfClause",t[t.ForLoop=4]="ForLoop",t[t.WhileLoop=8]="WhileLoop";}(x$1||(x$1={})),function(t){t[t.AsObject=0]="AsObject",t[t.Automatic=1]="Automatic";}(k$1||(k$1={}));class T$3{constructor(r,n={},a){this.delegate=a,this.hasLineTerminator=!1,this.options={tokens:"boolean"==typeof n.tokens&&n.tokens,comments:"boolean"==typeof n.comments&&n.comments,tolerant:"boolean"==typeof n.tolerant&&n.tolerant},this.options.comments&&(this.commentHandler=new o$1),this.errorHandler=new e$1(this.options.tolerant),this.scanner=new u(r,this.errorHandler),this.context={isAssignmentTarget:!1,blockContext:x$1.None,curlyParsingType:k$1.AsObject},this.rawToken={type:c.EOF,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.endMarker={index:0,line:this.scanner.lineNumber,column:0},this.readNextRawToken(),this.endMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart};}throwIfInvalidType(t,e,{validTypes:r,invalidTypes:i}){r?.some((e=>t.type===e))||i?.some((e=>t.type===e))&&this.throwError(l$2.InvalidExpression,e);}throwError(t,e,r=this.endMarker){const{index:i,line:n,column:s}=e,a=r.index-i-1;this.errorHandler.throwError({code:t,index:i,line:n,column:s+1,len:a});}tolerateError(t,e){throw new Error("######################################### !!!")}unexpectedTokenError(t={}){const{rawToken:e}=t;let i,{code:n,data:h}=t;if(e){if(!n)switch(e.type){case c.EOF:n=l$2.UnexpectedEndOfScript;break;case c.Identifier:n=l$2.UnexpectedIdentifier;break;case c.NumericLiteral:n=l$2.UnexpectedNumber;break;case c.StringLiteral:n=l$2.UnexpectedString;break;case c.Template:n=l$2.UnexpectedTemplate;}i=e.value.toString();}else i="ILLEGAL";n=n??l$2.UnexpectedToken,h||(h={value:i});const c$1=o(n,h);if(e){const t=e.start,r=e.lineNumber,i=e.start-e.lineStart+1;return new d$2({code:n,index:t,line:r,column:i,len:e.end-e.start-1,data:h,description:c$1})}const{index:p,line:l}=this.endMarker;return new d$2({code:n,index:p,line:l,column:this.endMarker.column+1,data:h,description:c$1})}throwUnexpectedToken(t={}){throw t.rawToken=t.rawToken??this.rawToken,this.unexpectedTokenError(t)}collectComments(t){const{commentHandler:e}=this;e&&t?.length&&t.forEach((t=>{const r={type:t.multiLine?e$2.BlockComment:e$2.LineComment,value:this.getSourceValue(t),range:t.range,loc:t.loc};e.collectComment(r);}));}peekAhead(t){const e=()=>(this.scanner.scanComments(),this.scanner.lex()),r=this.scanner.saveState(),i=t.call(this,e);return this.scanner.restoreState(r),i}getSourceValue(t){return this.scanner.source.slice(t.start,t.end)}convertToToken(t){return {type:s$2[t.type],value:this.getSourceValue(t),range:[t.start,t.end],loc:{start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}}}readNextRawToken(){this.endMarker.index=this.scanner.index,this.endMarker.line=this.scanner.lineNumber,this.endMarker.column=this.scanner.index-this.scanner.lineStart;const t=this.rawToken;this.collectComments(this.scanner.scanComments()),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart),this.rawToken=this.scanner.lex(),this.hasLineTerminator=t.lineNumber!==this.rawToken.lineNumber,this.options.tokens&&this.rawToken.type!==c.EOF&&this.tokens.push(this.convertToToken(this.rawToken));}captureStartMarker(){return {index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}}getItemLocation(t){return {range:[t.index,this.endMarker.index],loc:{start:{line:t.line,column:t.column},end:{line:this.endMarker.line,column:this.endMarker.column}}}}finalize(t){return (this.delegate||this.commentHandler)&&(this.commentHandler?.attachComments(t),this.delegate?.(t)),t}expectPunctuator(t){const e=this.rawToken;this.matchPunctuator(t)?this.readNextRawToken():this.throwUnexpectedToken({rawToken:e,code:l$2.PunctuatorExpected,data:{value:t}});}expectKeyword(t){this.rawToken.type!==c.Keyword||this.rawToken.value.toLowerCase()!==t?this.throwUnexpectedToken({rawToken:this.rawToken}):this.readNextRawToken();}expectContextualKeyword(t){this.rawToken.type!==c.Identifier||this.rawToken.value.toLowerCase()!==t?this.throwUnexpectedToken({rawToken:this.rawToken}):this.readNextRawToken();}matchKeyword(t){return this.rawToken.type===c.Keyword&&this.rawToken.value.toLowerCase()===t}matchContextualKeyword(t){return this.rawToken.type===c.Identifier&&this.rawToken.value===t}matchPunctuator(t){return this.rawToken.type===c.Punctuator&&this.rawToken.value===t}getMatchingPunctuator(t){if("string"==typeof t&&(t=t.split("")),this.rawToken.type===c.Punctuator&&t?.length)return t.find(this.matchPunctuator,this)}isolateCoverGrammar(t){const e=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;const r=t.call(this);return this.context.isAssignmentTarget=e,r}inheritCoverGrammar(t){const e=this.context.isAssignmentTarget;this.context.isAssignmentTarget=!0;const r=t.call(this);return this.context.isAssignmentTarget=this.context.isAssignmentTarget&&e,r}withBlockContext(t,e){const r=this.context.blockContext;this.context.blockContext=this.context.blockContext|t;const i=this.context.curlyParsingType;this.context.curlyParsingType=k$1.Automatic;const n=e.call(this);return this.context.blockContext=r,this.context.curlyParsingType=i,n}consumeSemicolon(){if(this.matchPunctuator(";"))this.readNextRawToken();else if(!this.hasLineTerminator)return this.rawToken.type===c.EOF||this.matchPunctuator("}")?(this.endMarker.index=this.startMarker.index,this.endMarker.line=this.startMarker.line,void(this.endMarker.column=this.startMarker.column)):void this.throwUnexpectedToken({rawToken:this.rawToken})}parsePrimaryExpression(){const t=this.captureStartMarker(),e=this.rawToken;switch(e.type){case c.Identifier:return this.readNextRawToken(),this.finalize({type:e$2.Identifier,name:e.value,...this.getItemLocation(t)});case c.NumericLiteral:case c.StringLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:e$2.Literal,value:e.value,raw:this.getSourceValue(e),isString:"string"==typeof e.value,...this.getItemLocation(t)});case c.BooleanLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:e$2.Literal,value:"true"===e.value.toLowerCase(),raw:this.getSourceValue(e),isString:!1,...this.getItemLocation(t)});case c.NullLiteral:return this.context.isAssignmentTarget=!1,this.readNextRawToken(),this.finalize({type:e$2.Literal,value:null,raw:this.getSourceValue(e),isString:!1,...this.getItemLocation(t)});case c.Template:return this.parseTemplateLiteral();case c.Punctuator:switch(e.value){case"(":return this.inheritCoverGrammar(this.parseGroupExpression);case"[":return this.inheritCoverGrammar(this.parseArrayInitializer);case"{":return this.inheritCoverGrammar(this.parseObjectExpression);default:return this.throwUnexpectedToken({rawToken:this.rawToken})}case c.Keyword:return this.context.isAssignmentTarget=!1,this.throwUnexpectedToken({rawToken:this.rawToken});default:return this.throwUnexpectedToken({rawToken:this.rawToken})}}parseArrayInitializer(){const t=this.captureStartMarker();this.expectPunctuator("[");const e=[];for(;!this.matchPunctuator("]");)this.matchPunctuator(",")?(this.readNextRawToken(),e.push(null)):(e.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.matchPunctuator("]")||this.expectPunctuator(","));return this.expectPunctuator("]"),this.finalize({type:e$2.ArrayExpression,elements:e,...this.getItemLocation(t)})}parseObjectPropertyKey(){const t=this.captureStartMarker(),e=this.rawToken;switch(e.type){case c.StringLiteral:return this.readNextRawToken(),this.finalize({type:e$2.Literal,value:e.value,raw:this.getSourceValue(e),isString:!0,...this.getItemLocation(t)});case c.Identifier:case c.BooleanLiteral:case c.NullLiteral:case c.Keyword:return this.readNextRawToken(),this.finalize({type:e$2.Identifier,name:e.value,...this.getItemLocation(t)});default:this.throwError(l$2.KeyMustBeString,t);}}parseObjectProperty(){const t=this.rawToken,e=this.captureStartMarker(),r=this.parseObjectPropertyKey();let i=!1,n=null;return this.matchPunctuator(":")?(this.readNextRawToken(),n=this.inheritCoverGrammar(this.parseAssignmentExpression)):t.type===c.Identifier?(i=!0,n=this.finalize({type:e$2.Identifier,name:t.value,...this.getItemLocation(e)})):this.throwUnexpectedToken({rawToken:this.rawToken}),this.finalize({type:e$2.Property,kind:"init",key:r,value:n,shorthand:i,...this.getItemLocation(e)})}parseObjectExpression(){const t=this.captureStartMarker();this.expectPunctuator("{");const e=[];for(;!this.matchPunctuator("}");)e.push(this.parseObjectProperty()),this.matchPunctuator("}")||this.expectPunctuator(",");return this.expectPunctuator("}"),this.finalize({type:e$2.ObjectExpression,properties:e,...this.getItemLocation(t)})}parseTemplateElement(t=!1){const e=this.rawToken;e.type!==c.Template&&this.throwUnexpectedToken({rawToken:e}),t&&!e.head&&this.throwUnexpectedToken({code:l$2.InvalidTemplateHead,rawToken:e});const r=this.captureStartMarker();this.readNextRawToken();const{value:i,cooked:n,tail:o}=e,c$1=this.finalize({type:e$2.TemplateElement,value:{raw:i,cooked:n},tail:o,...this.getItemLocation(r)});return c$1.loc.start.column++,c$1.loc.end.column=c$1.loc.end.column-(o?1:2),c$1}parseTemplateLiteral(){const t=this.captureStartMarker(),e=[],r=[];let i=this.parseTemplateElement(!0);for(r.push(i);!i.tail;)e.push(this.parseExpression()),i=this.parseTemplateElement(),r.push(i);return this.finalize({type:e$2.TemplateLiteral,quasis:r,expressions:e,...this.getItemLocation(t)})}parseGroupExpression(){this.expectPunctuator("(");const t=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.expectPunctuator(")"),t}parseArguments(){this.expectPunctuator("(");const t=[];if(!this.matchPunctuator(")"))for(;;){const e=this.isolateCoverGrammar(this.parseAssignmentExpression);if(t.push(e),this.matchPunctuator(")"))break;if(this.expectPunctuator(","),this.matchPunctuator(")"))break}return this.expectPunctuator(")"),t}parseMemberName(){const t=this.rawToken,e=this.captureStartMarker();return this.readNextRawToken(),t.type!==c.NullLiteral&&t.type!==c.Identifier&&t.type!==c.Keyword&&t.type!==c.BooleanLiteral&&this.throwUnexpectedToken({rawToken:t}),this.finalize({type:e$2.Identifier,name:t.value,...this.getItemLocation(e)})}parseLeftHandSideExpression(){const t=this.captureStartMarker();let e=this.inheritCoverGrammar(this.parsePrimaryExpression);const r=this.captureStartMarker();let i;for(;i=this.getMatchingPunctuator("([.");)switch(i){case"(":{this.context.isAssignmentTarget=!1,e.type!==e$2.Identifier&&e.type!==e$2.MemberExpression&&this.throwError(l$2.IdentiferExpected,t,r);const i=this.parseArguments();e=this.finalize({type:e$2.CallExpression,callee:e,arguments:i,...this.getItemLocation(t)});continue}case"[":{this.context.isAssignmentTarget=!0,this.expectPunctuator("[");const r=this.isolateCoverGrammar(this.parseExpression);this.expectPunctuator("]"),e=this.finalize({type:e$2.MemberExpression,computed:!0,object:e,property:r,...this.getItemLocation(t)});continue}case".":{this.context.isAssignmentTarget=!0,this.expectPunctuator(".");const r=this.parseMemberName();e=this.finalize({type:e$2.MemberExpression,computed:!1,object:e,property:r,...this.getItemLocation(t)});continue}}return e}parseUpdateExpression(){const t=this.captureStartMarker();let e=this.getMatchingPunctuator(t$1);if(e){this.readNextRawToken();const r=this.captureStartMarker(),i=this.inheritCoverGrammar(this.parseUnaryExpression);return i.type!==e$2.Identifier&&i.type!==e$2.MemberExpression&&i.type!==e$2.CallExpression&&this.throwError(l$2.InvalidExpression,r),this.context.isAssignmentTarget||this.tolerateError(l$2.InvalidLeftHandSideInAssignment,t),this.context.isAssignmentTarget=!1,this.finalize({type:e$2.UpdateExpression,operator:e,argument:i,prefix:!0,...this.getItemLocation(t)})}const r=this.captureStartMarker(),i=this.inheritCoverGrammar(this.parseLeftHandSideExpression),n=this.captureStartMarker();return this.hasLineTerminator?i:(e=this.getMatchingPunctuator(t$1),e?(i.type!==e$2.Identifier&&i.type!==e$2.MemberExpression&&this.throwError(l$2.InvalidExpression,r,n),this.context.isAssignmentTarget||this.tolerateError(l$2.InvalidLeftHandSideInAssignment,t),this.readNextRawToken(),this.context.isAssignmentTarget=!1,this.finalize({type:e$2.UpdateExpression,operator:e,argument:i,prefix:!1,...this.getItemLocation(t)})):i)}parseUnaryExpression(){const t=this.getMatchingPunctuator(n);if(t){const e=this.captureStartMarker();this.readNextRawToken();const r=this.inheritCoverGrammar(this.parseUnaryExpression);return this.context.isAssignmentTarget=!1,this.finalize({type:e$2.UnaryExpression,operator:t,argument:r,prefix:!0,...this.getItemLocation(e)})}return this.parseUpdateExpression()}parseBinaryExpression(){const t=this.rawToken;let e=this.inheritCoverGrammar(this.parseUnaryExpression);if(this.rawToken.type!==c.Punctuator)return e;const r=this.rawToken.value;let i=y(r);if(0===i)return e;this.readNextRawToken(),this.context.isAssignmentTarget=!1;const n=[t,this.rawToken];let a=e,o=this.inheritCoverGrammar(this.parseUnaryExpression);const h=[a,r,o],c$1=[i];for(;this.rawToken.type===c.Punctuator&&(i=y(this.rawToken.value))>0;){for(;h.length>2&&i<=c$1[c$1.length-1];){o=h.pop();const t=h.pop();c$1.pop(),a=h.pop(),n.pop();const e=n[n.length-1],r=w$1(e,e.lineStart);h.push(this.finalize(this.createBinaryOrLogicalExpression(r,t,a,o)));}h.push(this.rawToken.value),c$1.push(i),n.push(this.rawToken),this.readNextRawToken(),h.push(this.inheritCoverGrammar(this.parseUnaryExpression));}let p=h.length-1;e=h[p];let l=n.pop();for(;p>1;){const t=n.pop();if(!t)break;const r=l?.lineStart,i=w$1(t,r),s=h[p-1];e=this.finalize(this.createBinaryOrLogicalExpression(i,s,h[p-2],e)),p-=2,l=t;}return e}createBinaryOrLogicalExpression(t,e,r,i){const n=r$1.includes(e)?e$2.LogicalExpression:e$2.BinaryExpression;return n===e$2.BinaryExpression||(r.type!==e$2.AssignmentExpression&&r.type!==e$2.UpdateExpression||this.throwError(l$2.InvalidExpression,...g$1(r)),i.type!==e$2.AssignmentExpression&&i.type!==e$2.UpdateExpression||this.throwError(l$2.InvalidExpression,...g$1(r))),{type:n,operator:e,left:r,right:i,...this.getItemLocation(t)}}parseAssignmentExpression(){const t=this.captureStartMarker(),e=this.inheritCoverGrammar(this.parseBinaryExpression),r=this.captureStartMarker(),i=this.getMatchingPunctuator(i$1);if(!i)return e;e.type!==e$2.Identifier&&e.type!==e$2.MemberExpression&&this.throwError(l$2.InvalidExpression,t,r),this.context.isAssignmentTarget||this.tolerateError(l$2.InvalidLeftHandSideInAssignment,t),this.matchPunctuator("=")||(this.context.isAssignmentTarget=!1),this.readNextRawToken();const n=this.isolateCoverGrammar(this.parseAssignmentExpression);return this.finalize({type:e$2.AssignmentExpression,left:e,operator:i,right:n,...this.getItemLocation(t)})}parseExpression(){return this.isolateCoverGrammar(this.parseAssignmentExpression)}parseStatements(t=null){const e=[];for(;this.rawToken.type!==c.EOF&&!this.matchPunctuator(t);){const t=this.parseStatementListItem();y$1(t)||e.push(t);}return e}parseStatementListItem(){return this.context.isAssignmentTarget=!0,this.matchKeyword("function")?this.parseFunctionDeclaration():this.matchKeyword("export")?this.parseExportDeclaration():this.matchKeyword("import")?this.parseImportDeclaration():this.parseStatement()}parseBlock(){const t=this.captureStartMarker();this.expectPunctuator("{");const e=this.parseStatements("}");return this.expectPunctuator("}"),this.finalize({type:e$2.BlockStatement,body:e,...this.getItemLocation(t)})}parseObjectStatement(){const t=this.captureStartMarker(),e=this.parseObjectExpression();return this.finalize({type:e$2.ExpressionStatement,expression:e,...this.getItemLocation(t)})}parseBlockOrObjectStatement(){if(this.context.curlyParsingType===k$1.AsObject)return this.parseObjectStatement();return this.peekAhead((t=>{let e=t();return (e.type===c.Identifier||e.type===c.StringLiteral)&&(e=t(),e.type===c.Punctuator&&":"===e.value)}))?this.parseObjectStatement():this.parseBlock()}parseIdentifier(){const t=this.rawToken;if(t.type!==c.Identifier)return null;const e=this.captureStartMarker();return this.readNextRawToken(),this.finalize({type:e$2.Identifier,name:t.value,...this.getItemLocation(e)})}parseVariableDeclarator(){const t=this.captureStartMarker(),e=this.parseIdentifier();e||this.throwUnexpectedToken({code:l$2.IdentiferExpected});let r=null;if(this.matchPunctuator("=")){this.readNextRawToken();const t=this.rawToken;try{r=this.isolateCoverGrammar(this.parseAssignmentExpression);}catch(i){this.throwUnexpectedToken({rawToken:t,code:l$2.InvalidVariableAssignment});}}return this.finalize({type:e$2.VariableDeclarator,id:e,init:r,...this.getItemLocation(t)})}parseVariableDeclarationList(){const t=[this.parseVariableDeclarator()];for(;this.matchPunctuator(",");)this.readNextRawToken(),t.push(this.parseVariableDeclarator());return t}parseVariableDeclaration(){const t=this.captureStartMarker();this.expectKeyword("var");const e=this.parseVariableDeclarationList();return this.consumeSemicolon(),this.finalize({type:e$2.VariableDeclaration,declarations:e,kind:"var",...this.getItemLocation(t)})}parseEmptyStatement(){const t=this.captureStartMarker();return this.expectPunctuator(";"),this.finalize({type:e$2.EmptyStatement,...this.getItemLocation(t)})}parseExpressionStatement(){const t=this.captureStartMarker(),e=this.parseExpression();return this.consumeSemicolon(),this.finalize({type:e$2.ExpressionStatement,expression:e,...this.getItemLocation(t)})}parseIfClause(){return this.withBlockContext(x$1.IfClause,this.parseStatement)}parseIfStatement(){const t=this.captureStartMarker();this.expectKeyword("if"),this.expectPunctuator("(");const e=this.captureStartMarker(),r=this.parseExpression(),i=this.captureStartMarker();this.expectPunctuator(")"),r.type!==e$2.AssignmentExpression&&r.type!==e$2.UpdateExpression||this.throwError(l$2.InvalidExpression,e,i);const n=this.parseIfClause();let s=null;return this.matchKeyword("else")&&(this.readNextRawToken(),s=this.parseIfClause()),this.finalize({type:e$2.IfStatement,test:r,consequent:n,alternate:s,...this.getItemLocation(t)})}parseWhileStatement(){const t=this.captureStartMarker();this.expectKeyword("while"),this.expectPunctuator("(");const e=this.captureStartMarker(),r=this.parseExpression(),i=this.captureStartMarker();this.expectPunctuator(")"),r.type!==e$2.AssignmentExpression&&r.type!==e$2.UpdateExpression||this.throwError(l$2.InvalidExpression,e,i);const n=this.withBlockContext(x$1.WhileLoop,this.parseStatement);return this.finalize({type:e$2.WhileStatement,test:r,body:n,...this.getItemLocation(t)})}parseForStatement(){let t=null,e=null,r=null,i=null,n=null;const s=this.captureStartMarker();if(this.expectKeyword("for"),this.expectPunctuator("("),this.matchPunctuator(";"))this.readNextRawToken();else if(this.matchKeyword("var")){const e=this.captureStartMarker();this.readNextRawToken();const r=this.parseVariableDeclarationList();if(1===r.length&&this.matchKeyword("in")){r[0].init&&this.throwError(l$2.ForInOfLoopInitializer,e),i=this.finalize({type:e$2.VariableDeclaration,declarations:r,kind:"var",...this.getItemLocation(e)}),this.readNextRawToken(),n=this.parseExpression();}else this.matchKeyword("in")&&this.throwError(l$2.InvalidLeftHandSideInForIn,e),t=this.finalize({type:e$2.VariableDeclaration,declarations:r,kind:"var",...this.getItemLocation(e)}),this.expectPunctuator(";");}else {const e=this.context.isAssignmentTarget,r=this.captureStartMarker();t=this.inheritCoverGrammar(this.parseAssignmentExpression),this.matchKeyword("in")?(this.context.isAssignmentTarget||this.tolerateError(l$2.InvalidLeftHandSideInForIn,r),t.type!==e$2.Identifier&&this.throwError(l$2.InvalidLeftHandSideInForIn,r),this.readNextRawToken(),i=t,n=this.parseExpression(),t=null):(this.context.isAssignmentTarget=e,this.expectPunctuator(";"));}i||(this.matchPunctuator(";")||(e=this.isolateCoverGrammar(this.parseExpression)),this.expectPunctuator(";"),this.matchPunctuator(")")||(r=this.isolateCoverGrammar(this.parseExpression))),this.expectPunctuator(")");const o=this.withBlockContext(x$1.ForLoop,(()=>this.isolateCoverGrammar(this.parseStatement)));return i&&n?this.finalize({type:e$2.ForInStatement,left:i,right:n,body:o,...this.getItemLocation(s)}):this.finalize({type:e$2.ForStatement,init:t,test:e,update:r,body:o,...this.getItemLocation(s)})}parseContinueStatement(){const t=this.captureStartMarker();return this.expectKeyword("continue"),this.consumeSemicolon(),this.finalize({type:e$2.ContinueStatement,...this.getItemLocation(t)})}parseBreakStatement(){const t=this.captureStartMarker();return this.expectKeyword("break"),this.consumeSemicolon(),this.finalize({type:e$2.BreakStatement,...this.getItemLocation(t)})}parseReturnStatement(){const t=this.captureStartMarker();this.expectKeyword("return");const e=!this.matchPunctuator(";")&&!this.matchPunctuator("}")&&!this.hasLineTerminator&&this.rawToken.type!==c.EOF||this.rawToken.type===c.StringLiteral||this.rawToken.type===c.Template?this.parseExpression():null;return this.consumeSemicolon(),this.finalize({type:e$2.ReturnStatement,argument:e,...this.getItemLocation(t)})}parseStatement(){switch(this.rawToken.type){case c.BooleanLiteral:case c.NullLiteral:case c.NumericLiteral:case c.StringLiteral:case c.Template:case c.Identifier:return this.parseExpressionStatement();case c.Punctuator:return "{"===this.rawToken.value?this.parseBlockOrObjectStatement():"("===this.rawToken.value?this.parseExpressionStatement():";"===this.rawToken.value?this.parseEmptyStatement():this.parseExpressionStatement();case c.Keyword:switch(this.rawToken.value.toLowerCase()){case"break":return this.parseBreakStatement();case"continue":return this.parseContinueStatement();case"for":return this.parseForStatement();case"function":return this.parseFunctionDeclaration();case"if":return this.parseIfStatement();case"return":return this.parseReturnStatement();case"var":return this.parseVariableDeclaration();case"while":return this.parseWhileStatement();default:return this.parseExpressionStatement()}default:return this.throwUnexpectedToken({rawToken:this.rawToken})}}parseFormalParameters(){const t=[];if(this.expectPunctuator("("),!this.matchPunctuator(")"))for(;this.rawToken.type!==c.EOF;){const e=this.parseIdentifier();if(e||this.throwUnexpectedToken({rawToken:this.rawToken,code:l$2.IdentiferExpected}),t.push(e),this.matchPunctuator(")"))break;if(this.expectPunctuator(","),this.matchPunctuator(")"))break}return this.expectPunctuator(")"),t}parseFunctionDeclaration(){(this.context.blockContext&x$1.Function)===x$1.Function&&this.throwUnexpectedToken({code:l$2.NoFunctionInsideFunction}),(this.context.blockContext&x$1.WhileLoop)!==x$1.WhileLoop&&(this.context.blockContext&x$1.IfClause)!==x$1.IfClause||this.throwUnexpectedToken({code:l$2.NoFunctionInsideBlock});const t=this.captureStartMarker();this.expectKeyword("function");const e=this.parseIdentifier();e||this.throwUnexpectedToken({code:l$2.InvalidFunctionIdentifier});const r=this.parseFormalParameters(),i=this.context.blockContext;this.context.blockContext=this.context.blockContext|x$1.Function;const n=this.parseBlock();return this.context.blockContext=i,this.finalize({type:e$2.FunctionDeclaration,id:e,params:r,body:n,...this.getItemLocation(t)})}parseScript(){const t=this.captureStartMarker(),e=this.parseStatements(),r=this.finalize({type:e$2.Program,body:e,...this.getItemLocation(t)});return this.options.tokens&&(r.tokens=this.tokens),this.options.tolerant&&(r.errors=this.errorHandler.errors),r}parseExportDeclaration(){this.context.blockContext!==x$1.None&&this.throwUnexpectedToken({code:l$2.ModuleExportRootOnly});let t=null;const e=this.captureStartMarker();return this.expectKeyword("export"),this.matchKeyword("var")?t=this.parseVariableDeclaration():this.matchKeyword("function")?t=this.parseFunctionDeclaration():this.throwUnexpectedToken({code:l$2.InvalidExpression}),this.finalize({type:e$2.ExportNamedDeclaration,declaration:t,specifiers:[],source:null,...this.getItemLocation(e)})}parseModuleSpecifier(){const t=this.captureStartMarker(),e=this.rawToken;if(e.type===c.StringLiteral)return this.readNextRawToken(),this.finalize({type:e$2.Literal,value:e.value,raw:this.getSourceValue(e),isString:!0,...this.getItemLocation(t)});this.throwError(l$2.InvalidModuleUri,t);}parseDefaultSpecifier(){const t=this.captureStartMarker(),e=this.parseIdentifier();return e||this.throwUnexpectedToken({code:l$2.InvalidFunctionIdentifier}),this.finalize({type:e$2.ImportDefaultSpecifier,local:e,...this.getItemLocation(t)})}parseImportDeclaration(){this.context.blockContext!==x$1.None&&this.throwUnexpectedToken({code:l$2.ModuleImportRootOnly});const t=this.captureStartMarker();this.expectKeyword("import");const e=this.parseDefaultSpecifier();this.expectContextualKeyword("from");const r=this.parseModuleSpecifier();return this.finalize({type:e$2.ImportDeclaration,specifiers:[e],source:r,...this.getItemLocation(t)})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$1(r,s,t){return new T$3(r,s,t).parseScript()}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function d(d,l=[]){const r=s$1(d);if(null===r.body||void 0===r.body)throw new d$2({index:0,line:0,column:0,data:null,description:"",code:l$2.InvalidExpression});if(0===r.body.length)throw new d$2({index:0,line:0,column:0,data:null,description:"",code:l$2.InvalidExpression});if(0===r.body.length)throw new d$2({index:0,line:0,column:0,data:null,description:"",code:l$2.InvalidExpression});return r.loadedModules={},d$6(r,l),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{constructor(e){const s=this;s._keys=[],s._values=[],s.length=0,e&&e.forEach((e=>{s.set(e[0],e[1]);}));}entries(){return [].slice.call(this.keys().map(((e,s)=>[e,this._values[s]])))}keys(){return [].slice.call(this._keys)}values(){return [].slice.call(this._values)}has(e){return this._keys.includes(e)}get(e){const s=this._keys.indexOf(e);return s>-1?this._values[s]:null}deepGet(s){if(!s||!s.length)return null;const t=(s,i)=>null==s?null:i.length?t(s instanceof e?s.get(i[0]):s[i[0]],i.slice(1)):s;return t(this.get(s[0]),s.slice(1))}set(e,s){const t=this,i=this._keys.indexOf(e);return i>-1?t._values[i]=s:(t._keys.push(e),t._values.push(s),t.length=t._values.length),this}sortedSet(e,s,t,i){const h=this,l=this._keys.length,r=t||0,n=void 0!==i?i:l-1;if(0===l)return h._keys.push(e),h._values.push(s),h;if(e===this._keys[r])return this._values.splice(r,0,s),this;if(e===this._keys[n])return this._values.splice(n,0,s),this;if(e>this._keys[n])return this._keys.splice(n+1,0,e),this._values.splice(n+1,0,s),this;if(e<this._keys[r])return this._values.splice(r,0,s),this._keys.splice(r,0,e),this;if(r>=n)return this;const u=r+Math.floor((n-r)/2);return e<this._keys[u]?this.sortedSet(e,s,r,u-1):e>this._keys[u]?this.sortedSet(e,s,u+1,n):this}size(){return this.length}clear(){const e=this;return e._keys.length=e.length=e._values.length=0,this}delete(e){const s=this,t=s._keys.indexOf(e);return t>-1&&(s._keys.splice(t,1),s._values.splice(t,1),s.length=s._keys.length,!0)}forEach(e){this._keys.forEach(((s,t)=>{e(this._values[t],s,t);}));}map(e){return this.keys().map(((s,t)=>e(this._values[t],s,t)))}filter(e){const s=this;return s._keys.forEach(((t,i)=>{!1===e(s._values[i],t,i)&&s.delete(t);})),this}clone(){return new e(this.entries())}}class s{constructor(s=20){this._maxEntries=s,this._values=new e;}delete(e){this._values.has(e)&&this._values.delete(e);}get(e){let s=null;return this._values.has(e)&&(s=this._values.get(e),this._values.delete(e),this._values.set(e,s)),s}put(e,s){if(this._values.size()>=this._maxEntries){const e=this._values.keys()[0];this._values.delete(e);}this._values.set(e,s);}}class t{constructor(e=20){this._maxEntries=e,this._cache=new s(this._maxEntries);}clear(){this._cache=new s(this._maxEntries);}addToCache(e,s){this._cache.put(e,s);}removeFromCache(e){this._cache.delete(e);}getFromCache(e){return this._cache.get(e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class l{constructor(e){this.portalUri=e;}normalizeModuleUri(e){const r=/^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi,o=/(?<portalurl>.+)\/home\/item\.html\?id\=(?<itemid>.+)$/gi,c=/(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi,u=/(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi,n=/(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi;if(e.startsWith("portal+")){let l=e.substring(7),a="",m=l,d=!1;for(const e of [o,u,c]){const t=e.exec(l);if(null!==t){const e=t.groups;m=e.itemid,a=e.portalurl,d=!0;break}}if(!1===d){if(!r.test(l))throw new p$5(l$a.UnsupportedUriProtocol,{uri:e});m=l,a=this.portalUri;}m.includes("/")&&(m=m.split("/")[0]),m.includes("?")&&(m=m.split("?")[0]);let h="current";const p=n.exec(m);if(null!==p){const e=p.groups;m=e.itemid,h=e.versionstring;}return l=new j$3({url:a}).restUrl+"/content/items/"+m+"/resources/"+h+".arc",{url:l,scheme:"portal",uri:"PO:"+l}}if(e.startsWith("mock")){if("mock"===e){return {url:"",scheme:"mock",data:'\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ',uri:"mock"}}const t=e.replace("mock:","");if(void 0!==l.mocks[t])return {url:"",scheme:"mock",data:l.mocks[t],uri:e}}throw new p$5(l$a.UnrecognisedUri,{uri:e})}async fetchModule(e){const t=l.cachedModules.getFromCache(e.uri);if(t)return t;const r=this.fetchSource(e);l.cachedModules.addToCache(e.uri,r);let o=null;try{o=await r;}catch(s){throw l.cachedModules.removeFromCache(e.uri),s}return o}async fetchSource(t){if("portal"===t.scheme){const o=await U$4(t.url,{responseType:"text",query:{}});if(o.data)return d(o.data,[])}if("mock"===t.scheme)return d(t.data??"",[]);throw new p$5(l$a.UnsupportedUriProtocol)}static create(e){return new l(e)}static getDefault(){return this._default??(l._default=l._moduleResolverFactory())}static set moduleResolverClass(e){this._moduleResolverFactory=e,this._default=null;}}l.mocks={},l.cachedModules=new t(30),l._default=null,l._moduleResolverFactory=()=>{const e=j$3.getDefault();return new l(e.url)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class P$2 extends r$5{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t;}createFunction(e){return (...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter.depth+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new t$6(e,e$7.MaximumCallDepth,null);return Ie(this.definition,n,t,null)}}call(e,t){return V$2(e,t,((n,l,a)=>{const i={spatialReference:e.spatialReference,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};if(i.depthCounter.depth>64)throw new t$6(e,e$7.MaximumCallDepth,t);return Ie(this.definition,i,a,t)}))}marshalledCall(e,t,n,r){return r(e,t,((o,l,a)=>{const i={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};return a=a.map((t=>!F$3(t)||t instanceof s$a?t:n$4(t,e,r))),n$4(Ie(this.definition,i,a,t),n,r)}))}}class T$2 extends s$8{constructor(e){super(e);}global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=_$2(this.executingContext,t.node),t.valueset=!0),F$3(t.value)&&!(t.value instanceof s$a)){const e=new s$a;e.fn=t.value,e.parameterEvaluator=V$2,e.context=this.executingContext,t.value=e;}return t.value}setGlobal(e,t){if(F$3(t))throw new t$6(null,e$7.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null};}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}loadModule(e){let n=e.spatialReference;null==n&&(n=new k$4({wkid:102100})),this.moduleScope=Ce({},e.customfunctions),this.executingContext={spatialReference:n,globalScope:this.moduleScope,localScope:null,libraryResolver:new s$3(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},console:e.console?e.console:Ae,lrucache:e.lrucache,interceptor:e.interceptor,depthCounter:{depth:1}},_$2(this.executingContext,this.source.syntax);}}function W$2(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(_$2(e,t.arguments[r]));return n}function V$2(e,t,n){try{return !0===t.preparsed?n(e,null,t.arguments):n(e,t,W$2(e,t))}catch(r){throw r}}function _$2(e,t){try{switch(t?.type){case"EmptyStatement":return k$3;case"VariableDeclarator":return ue(e,t);case"VariableDeclaration":return se$1(e,t);case"ImportDeclaration":return ae(e,t);case"ExportNamedDeclaration":return ie$1(e,t);case"BlockStatement":case"Program":return re$2(e,t);case"FunctionDeclaration":return le(e,t);case"ReturnStatement":return oe$1(e,t);case"IfStatement":return ne$2(e,t);case"ExpressionStatement":return te$2(e,t);case"AssignmentExpression":return ee$2(e,t);case"UpdateExpression":return Z$2(e,t);case"BreakStatement":return j$2;case"ContinueStatement":return A$4;case"TemplateElement":return we(e,t);case"TemplateLiteral":return ge(e,t);case"ForStatement":return J$2(e,t);case"ForInStatement":return H$2(e,t);case"WhileStatement":return Q$2(e,t);case"Identifier":return ve(e,t);case"MemberExpression":return ce(e,t);case"Literal":return t.value;case"CallExpression":return ye(e,t);case"UnaryExpression":return fe(e,t);case"BinaryExpression":return de(e,t);case"LogicalExpression":return he(e,t);case"ArrayExpression":return pe(e,t);case"ObjectExpression":return Y$2(e,t);case"Property":return z$1(e,t);default:throw new t$6(e,e$7.Unrecognised,t)}}catch(n){throw u$6(e,t,n)}}function Y$2(e,t){const l={},a=new Map;for(let n=0;n<t.properties.length;n++){const i=_$2(e,t.properties[n]);if(F$3(i.value))throw new t$6(e,e$7.NoFunctionInDictionary,t);if(!1===w$6(i.key))throw new t$6(e,e$7.KeyMustBeString,t);let s=i.key.toString();const u=s.toLowerCase();a.has(u)?s=a.get(u):a.set(u,s),i.value===k$3?l[s]=null:l[s]=i.value;}const i=new J$5(l);return i.immutable=!1,i}function z$1(e,t){return {key:"Identifier"===t.key.type?t.key.name:_$2(e,t.key),value:_$2(e,t.value)}}function H$2(e,t){const l=_$2(e,t.right);"VariableDeclaration"===t.left.type&&_$2(e,t.left);let a=null,i="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(i=e.name);}else "Identifier"===t.left.type&&(i=t.left.name);if(!i)throw new t$6(e,e$7.InvalidIdentifier,t);if(i=i.toLowerCase(),null!=e.localScope&&void 0!==e.localScope[i]&&(a=e.localScope[i]),null===a&&void 0!==e.globalScope[i]&&(a=e.globalScope[i]),null===a)throw new t$6(e,e$7.InvalidIdentifier,t);if(Y$5(l)||w$6(l)){const n=l.length;for(let r=0;r<n;r++){a.value=r;const n=_$2(e,t.body);if(n===j$2)break;if(n instanceof D$6)return n}return k$3}if(E$3(l)){for(let n=0;n<l.length();n++){a.value=n;const r=_$2(e,t.body);if(r===j$2)break;if(r instanceof D$6)return r}return k$3}if(!(l instanceof J$5||J$6(l)))return k$3;{const n=l.keys();for(let r=0;r<n.length;r++){a.value=n[r];const o=_$2(e,t.body);if(o===j$2)break;if(o instanceof D$6)return o}}}function J$2(e,t){null!==t.init&&_$2(e,t.init);const n={testResult:!0,lastAction:k$3};do{X$2(e,t,n);}while(!0===n.testResult);return n.lastAction instanceof D$6?n.lastAction:k$3}function Q$2(e,t){const n={testResult:!0,lastAction:k$3};if(n.testResult=_$2(e,t.test),!1===n.testResult)return k$3;if(!0!==n.testResult)throw new t$6(e,e$7.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=_$2(e,t.body),n.lastAction!==j$2)&&!(n.lastAction instanceof D$6);)if(n.testResult=_$2(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new t$6(e,e$7.BooleanConditionRequired,t);return n.lastAction instanceof D$6?n.lastAction:k$3}function X$2(e,t,n){if(null!==t.test){if(n.testResult=_$2(e,t.test),!1===n.testResult)return;if(!0!==n.testResult)throw new t$6(e,e$7.BooleanConditionRequired,t)}n.lastAction=_$2(e,t.body),n.lastAction!==j$2?n.lastAction instanceof D$6?n.testResult=!1:null!==t.update&&_$2(e,t.update):n.testResult=!1;}function Z$2(e,t){let l,a=null,i="";if("MemberExpression"===t.argument.type){if(a=_$2(e,t.argument.object),!0===t.argument.computed?i=_$2(e,t.argument.property):"Identifier"===t.argument.property.type&&(i=t.argument.property.name),Y$5(a)){if(!Z$7(i))throw new t$6(e,e$7.ArrayAccessorMustBeNumber,t);if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new t$6(e,e$7.OutOfBounds,t);l=re$5(a[i]),a[i]="++"===t.operator?l+1:l-1;}else if(a instanceof J$5){if(!1===w$6(i))throw new t$6(e,e$7.KeyAccessorMustBeString,t);if(!0!==a.hasField(i))throw new t$6(e,e$7.FieldNotFound,t);l=re$5(a.field(i)),a.setField(i,"++"===t.operator?l+1:l-1);}else if(J$6(a)){if(!1===w$6(i))throw new t$6(e,e$7.KeyAccessorMustBeString,t);if(!0!==a.hasField(i))throw new t$6(e,e$7.FieldNotFound,t);l=re$5(a.field(i)),a.setField(i,"++"===t.operator?l+1:l-1);}else {if(E$3(a))throw new t$6(e,e$7.Immutable,t);if(!(a instanceof T$2))throw new t$6(e,e$7.InvalidParameter,t);if(!1===w$6(i))throw new t$6(e,e$7.ModuleAccessorMustBeString,t);if(!0!==a.hasGlobal(i))throw new t$6(e,e$7.ModuleExportNotFound,t);l=re$5(a.global(i)),a.setGlobal(i,"++"===t.operator?l+1:l-1);}return !1===t.prefix?l:"++"===t.operator?l+1:l-1}if(a="Identifier"===t.argument.type?t.argument.name.toLowerCase():"",!a)throw new t$6(e,e$7.InvalidIdentifier,t);if(null!=e.localScope&&void 0!==e.localScope[a])return l=re$5(e.localScope[a].value),e.localScope[a]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;if(void 0!==e.globalScope[a])return l=re$5(e.globalScope[a].value),e.globalScope[a]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;throw new t$6(e,e$7.InvalidIdentifier,t)}function $$1(e,t,n,l,a){switch(t){case"=":return e===k$3?null:e;case"/=":return re$5(n)/re$5(e);case"*=":return re$5(n)*re$5(e);case"-=":return re$5(n)-re$5(e);case"+=":return w$6(n)||w$6(e)?K$3(n)+K$3(e):re$5(n)+re$5(e);case"%=":return re$5(n)%re$5(e);default:throw new t$6(a,e$7.UnsupportedOperator,l)}}function ee$2(e,t){const l=_$2(e,t.right);let a=null,i="";if("MemberExpression"===t.left.type){if(a=_$2(e,t.left.object),!0===t.left.computed)i=_$2(e,t.left.property);else {if("Identifier"!==t.left.property.type)throw new t$6(e,e$7.InvalidIdentifier,t);i=t.left.property.name;}if(Y$5(a)){if(!Z$7(i))throw new t$6(e,e$7.ArrayAccessorMustBeNumber,t);if(i<0&&(i=a.length+i),i<0||i>a.length)throw new t$6(e,e$7.OutOfBounds,t);if(i===a.length){if("="!==t.operator)throw new t$6(e,e$7.OutOfBounds,t);a[i]=$$1(l,t.operator,a[i],t,e);}else a[i]=$$1(l,t.operator,a[i],t,e);}else if(a instanceof J$5){if(!1===w$6(i))throw new t$6(e,e$7.KeyAccessorMustBeString,t);if(!0===a.hasField(i))a.setField(i,$$1(l,t.operator,a.field(i),t,e));else {if("="!==t.operator)throw new t$6(e,e$7.FieldNotFound,t,{key:i});a.setField(i,$$1(l,t.operator,null,t,e));}}else if(J$6(a)){if(!1===w$6(i))throw new t$6(e,e$7.KeyAccessorMustBeString,t);if(!0===a.hasField(i))a.setField(i,$$1(l,t.operator,a.field(i),t,e));else {if("="!==t.operator)throw new t$6(e,e$7.FieldNotFound,t,{key:i});a.setField(i,$$1(l,t.operator,null,t,e));}}else {if(E$3(a))throw new t$6(e,e$7.Immutable,t);if(!(a instanceof T$2))throw new t$6(e,e$7.InvalidIdentifier,t);if(!1===w$6(i))throw new t$6(e,e$7.ModuleAccessorMustBeString,t);if(!0!==a.hasGlobal(i))throw new t$6(e,e$7.ModuleExportNotFound,t);a.setGlobal(i,$$1(l,t.operator,a.global(i),t,e));}return k$3}if(a=t.left.name.toLowerCase(),null!=e.localScope&&void 0!==e.localScope[a])return e.localScope[a]={value:$$1(l,t.operator,e.localScope[a].value,t,e),valueset:!0,node:t.right},k$3;if(void 0!==e.globalScope[a])return e.globalScope[a]={value:$$1(l,t.operator,e.globalScope[a].value,t,e),valueset:!0,node:t.right},k$3;throw new t$6(e,e$7.InvalidIdentifier,t)}function te$2(e,t){if("AssignmentExpression"===t.expression.type||"UpdateExpression"===t.expression.type)return _$2(e,t.expression);if("CallExpression"===t.expression.type){const n=_$2(e,t.expression);return n===k$3?k$3:new N$5(n)}{const n=_$2(e,t.expression);return n===k$3?k$3:new N$5(n)}}function ne$2(e,t){const n=_$2(e,t.test);if(!0===n)return _$2(e,t.consequent);if(!1===n)return null!==t.alternate?_$2(e,t.alternate):k$3;throw new t$6(e,e$7.BooleanConditionRequired,t)}function re$2(e,t){let n=k$3;for(let r=0;r<t.body.length;r++)if(n=_$2(e,t.body[r]),n instanceof D$6||n===j$2||n===A$4)return n;return n}function oe$1(e,t){if(null===t.argument)return new D$6(k$3);const n=_$2(e,t.argument);return new D$6(n)}function le(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new P$2(t,e)},k$3}function ae(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new T$2(r),o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},k$3}function ie$1(e,t){if(_$2(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return k$3}function se$1(e,t){for(let n=0;n<t.declarations.length;n++)_$2(e,t.declarations[n]);return k$3}function ue(e,t){let n=null===t.init?null:_$2(e,t.init);if(n===k$3&&(n=null),"Identifier"!==t.id.type)throw new t$6(e,e$7.InvalidIdentifier,t);const l=t.id.name.toLowerCase();return null!=e.localScope?e.localScope[l]={value:n,valueset:!0,node:t.init}:e.globalScope[l]={value:n,valueset:!0,node:t.init},k$3}function ce(e,t){try{const l=_$2(e,t.object);if(null===l)throw new t$6(e,e$7.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(l instanceof J$5||J$6(l))return l.field(t.property.name);if(l instanceof p$6)return W$6(l,t.property.name,t,e);if(l instanceof T$2){if(!l.hasGlobal(t.property.name))throw new t$6(e,e$7.InvalidIdentifier,t);return l.global(t.property.name)}}throw new t$6(e,e$7.InvalidMemberAccessKey,t)}{let a=_$2(e,t.property);if(l instanceof J$5||J$6(l)){if(w$6(a))return l.field(a);throw new t$6(e,e$7.InvalidMemberAccessKey,t)}if(l instanceof T$2){if(w$6(a))return l.global(a);throw new t$6(e,e$7.InvalidMemberAccessKey,t)}if(l instanceof p$6){if(w$6(a))return W$6(l,a,t,e);throw new t$6(e,e$7.InvalidMemberAccessKey,t)}if(Y$5(l)){if(Z$7(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=l.length+a),a>=l.length||a<0)throw new t$6(e,e$7.OutOfBounds,t);return l[a]}throw new t$6(e,e$7.InvalidMemberAccessKey,t)}if(w$6(l)){if(Z$7(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=l.length+a),a>=l.length||a<0)throw new t$6(e,e$7.OutOfBounds,t);return l[a]}throw new t$6(e,e$7.InvalidMemberAccessKey,t)}if(E$3(l)){if(Z$7(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=l.length()+a),a>=l.length()||a<0)throw new t$6(e,e$7.OutOfBounds,t);return l.get(a)}throw new t$6(e,e$7.InvalidMemberAccessKey,t)}throw new t$6(e,e$7.InvalidMemberAccessKey,t)}}catch(l){throw l}}function fe(e,t){try{const n=_$2(e,t.argument);if(_$4(n)){if("!"===t.operator)return !n;if("-"===t.operator)return -1*re$5(n);if("+"===t.operator)return 1*re$5(n);if("~"===t.operator)return ~re$5(n);throw new t$6(e,e$7.UnsupportedUnaryOperator,t)}if("~"===t.operator)return ~re$5(n);if("-"===t.operator)return -1*re$5(n);if("+"===t.operator)return 1*re$5(n);throw new t$6(e,e$7.UnsupportedUnaryOperator,t)}catch(n){throw n}}function pe(e,t){try{const n=[];for(let l=0;l<t.elements.length;l++){const a=_$2(e,t.elements[l]);if(F$3(a))throw new t$6(e,e$7.NoFunctionInArray,t);a===k$3?n.push(null):n.push(a);}return n}catch(n){throw n}}function de(e,t){try{const n=[_$2(e,t.left),_$2(e,t.right)],l=n[0],a=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ne$1(re$5(l),re$5(a),t.operator);case"==":return X$5(l,a);case"!=":return !X$5(l,a);case"<":case">":case"<=":case">=":return Q$5(l,a,t.operator);case"+":return w$6(l)||w$6(a)?K$3(l)+K$3(a):re$5(l)+re$5(a);case"-":return re$5(l)-re$5(a);case"*":return re$5(l)*re$5(a);case"/":return re$5(l)/re$5(a);case"%":return re$5(l)%re$5(a);default:throw new t$6(e,e$7.UnsupportedOperator,t)}}catch(n){throw n}}function he(e,t){try{const n=_$2(e,t.left);if(_$4(n))switch(t.operator){case"||":if(!0===n)return n;{const n=_$2(e,t.right);if(_$4(n))return n;throw new t$6(e,e$7.LogicExpressionOrAnd,t)}case"&&":if(!1===n)return n;{const n=_$2(e,t.right);if(_$4(n))return n;throw new t$6(e,e$7.LogicExpressionOrAnd,t)}default:throw new t$6(e,e$7.LogicExpressionOrAnd,t)}throw new t$6(e,e$7.LogicalExpressionOnlyBoolean,t)}catch(n){throw n}}function we(e,t){return t.value?t.value.cooked:""}function me(e,t,n){if(F$3(e))throw new t$6(t,e$7.NoFunctionInTemplateLiteral,n);return e}function ge(e,t){let n="",r=0;for(const o of t.quasis)if(n+=o.value?o.value.cooked:"",!1===o.tail){n+=t.expressions[r]?K$3(me(_$2(e,t.expressions[r]),e,t)):"",r++;}return n}function ve(e,t){let n;try{const l=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[l])return n=e.localScope[l],!0===n.valueset||(n.value=_$2(e,n.node),n.valueset=!0),n.value;if(void 0!==e.globalScope[l])return n=e.globalScope[l],!0===n.valueset||(n.value=_$2(e,n.node),n.valueset=!0),n.value;throw new t$6(e,e$7.InvalidIdentifier,t)}catch(l){throw l}}function ye(e,t){try{if("MemberExpression"===t.callee.type){const n=_$2(e,t.callee.object);if(!(n instanceof T$2))throw new t$6(e,e$7.FuncionNotFound,t);const l=!1===t.callee.computed?t.callee.property.name:_$2(e,t.callee.property);if(!n.hasGlobal(l))throw new t$6(e,e$7.FuncionNotFound,t);const a=n.global(l);if(!F$3(a))throw new t$6(e,e$7.CallNonFunction,t);return a.call(e,t)}if("Identifier"!==t.callee.type)throw new t$6(e,e$7.FuncionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if(F$3(n.value))return n.value.call(e,t);throw new t$6(e,e$7.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if(F$3(n.value))return n.value.call(e,t);throw new t$6(e,e$7.CallNonFunction,t)}throw new t$6(e,e$7.FuncionNotFound,t)}catch(n){throw n}}const be={};function xe(e,t,n,r){try{const o=_$2(e,t.arguments[n]);if(X$5(o,r))return _$2(e,t.arguments[n+1]);{const o=t.arguments.length-n;return 1===o?_$2(e,t.arguments[n]):2===o?null:3===o?_$2(e,t.arguments[n+2]):xe(e,t,n+2,r)}}catch(o){throw o}}function Se(e,t,n,l){try{if(!0===l)return _$2(e,t.arguments[n+1]);if(3===t.arguments.length-n)return _$2(e,t.arguments[n+2]);{const l=_$2(e,t.arguments[n+2]);if(!1===_$4(l))throw new t$6(e,e$7.BooleanConditionRequired,t.arguments[n+2]);return Se(e,t,n+2,l)}}catch(a){throw a}}function Ie(e,t,n,l){try{const a=e.body;if(n.length!==e.params.length)throw new t$6(t,e$7.WrongNumberOfParameters,l);if(null!=t.localScope)for(let r=0;r<n.length;r++)t.localScope[e.params[r].name.toLowerCase()]={value:n[r],valueset:!0,node:null};const i=_$2(t,a);if(i instanceof D$6)return i.value;if(i===j$2)throw new t$6(t,e$7.UnexpectedToken,l);if(i===A$4)throw new t$6(t,e$7.UnexpectedToken,l);return i instanceof N$5?i.value:i}catch(a){throw a}}M$5(be,V$2),B$2(be,V$2),N$3(be,V$2),C$3(be,V$2),f(be,V$2),q$3(be,V$2),be.iif=function(e,t){try{V$5(null===t.arguments?[]:t.arguments,3,3,e,t);const n=_$2(e,t.arguments[0]);if(!1===_$4(n))throw new t$6(e,e$7.BooleanConditionRequired,t);return _$2(e,!0===n?t.arguments[1]:t.arguments[2])}catch(n){throw n}},be.decode=function(e,t){try{if(t.arguments.length<2)throw new t$6(e,e$7.WrongNumberOfParameters,t);if(2===t.arguments.length)return _$2(e,t.arguments[1]);{if((t.arguments.length-1)%2==0)throw new t$6(e,e$7.WrongNumberOfParameters,t);const n=_$2(e,t.arguments[0]);return xe(e,t,1,n)}}catch(n){throw n}},be.when=function(e,t){try{if(t.arguments.length<3)throw new t$6(e,e$7.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new t$6(e,e$7.WrongNumberOfParameters,t);const n=_$2(e,t.arguments[0]);if(!1===_$4(n))throw new t$6(e,e$7.BooleanConditionRequired,t.arguments[0]);return Se(e,t,0,n)}catch(n){throw n}};for(const Le in be)be[Le]={value:new e$6(be[Le]),valueset:!0,node:null};const Fe=function(){};function Ce(e,t){const r=new Fe;e||(e={}),t||(t={});const o=new J$5({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const n in t)r[n]={value:new e$6(t[n]),native:!0,valueset:!0,node:null};for(const n in e)e[n]&&"esri.Graphic"===e[n].declaredClass?r[n]={value:g$4.createFromGraphic(e[n]),valueset:!0,node:null}:r[n]={value:e[n],valueset:!0,node:null};return r}Fe.prototype=be,Fe.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},Fe.prototype.pi={value:Math.PI,valueset:!0,node:null};function Ae(e){console.log(e);}function Me(e){const t={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:V$2,evaluateIdentifier:ve};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)be[n]={value:new e$6(t.functions[n]),valueset:!0,node:null},Fe.prototype[n]=be[n];for(let n=0;n<t.signatures.length;n++)o$4(t.signatures[n],"sync");}function Ee(e,n){let l=n.spatialReference;null==l&&(l=new k$4({wkid:102100}));let a=null;e.usesModules&&(a=new s$3(new Map,e.loadedModules));const i={spatialReference:l,globalScope:Ce(n.vars,n.customfunctions),localScope:null,exports:{},libraryResolver:a,console:n.console?n.console:Ae,lrucache:n.lrucache,interceptor:n.interceptor,depthCounter:{depth:1}};let s=_$2(i,e);if(s instanceof D$6&&(s=s.value),s instanceof N$5&&(s=s.value),s===k$3&&(s=null),s===j$2)throw new t$6(i,e$7.IllegalResult,null);if(s===A$4)throw new t$6(i,e$7.IllegalResult,null);if(F$3(s))throw new t$6(i,e$7.IllegalResult,null);return s}Me([m$4]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const b=["feature","angle","bearing","centroid","envelopeintersects","extent","geometry","isselfintersecting","ringisclockwise"];function g(){return !0}const A$1=g();let w=!1,h=!1,j=null,x=[];function M$1(t,r){if(!0===r.useAsync||!0===t.isAsync)return F(t,r);if(has("esri-csp-restrictions")){return function(e){return Ee(t,e)}}try{return Le(t,r)}catch(n){if("esri.arcade.arcadeuncompilableerror"===n.declaredRootClass)return function(e){return Ee(t,e)};throw n}}function F(t,r){if(null===j)throw new t$6(null,e$7.AsyncNotEnabled,null);if(has("esri-csp-restrictions")||!1===A$1){return function(e){return j.executeScript(t,e)}}try{return Le(t,r,!0)}catch(n){if("esri.arcade.arcadeuncompilableerror"===n.declaredRootClass)return function(e){return j.executeScript(t,e)};throw n}}function E(e){Me(e),Ee$1(e,"sync"),null===j?x.push(e):(Ee$1(e,"async"),j.extend(e));}function G$1(e,t=[]){return d(e,t)}function v(e,t,r=[]){return U$1(d(e,r),t)}function U$1(e,t){if(!0===t.useAsync||!0===e.isAsync){if(null===j)throw new t$6(null,e$7.AsyncNotEnabled,null);return j.executeScript(e,t)}return Ee(e,t)}function _$1(e,t){return c$4(e,t)}function I$1(e,t){return p$3(e,t)}function R(e,t=!1){return void 0===t&&(t=!1),l$7(e)}function C$1(e){return u$5(e)}function D$1(e,t=[]){return void 0===e.usesGeometry&&d$6(e,t),!0===e.usesGeometry}let P$1=null;function k(){return P$1||(P$1=z(),P$1)}async function z(){const[e,t]=await Promise.all([import('./geometryEngine-d05be472.js'),Promise.resolve().then(function () { return geomsync; })]);return h=!0,t.setGeometryEngine(e),!0}let L$1=null;function N$1(){return null!==L$1||(L$1=O$1()),L$1}async function O$1(){await Re(),j=await import('./arcadeAsyncRuntime-1b59fc78.js');for(const e of x)j.extend(e),Ee$1(e,"async");return x=null,!0}function T$1(){return w}function q$1(){return !!j}function B$1(){return h}let H$1=null;function J$1(){return H$1||(H$1=K$1(),H$1)}async function K$1(){await N$1();const[e,r,n,s,u]=await Promise.all([import('./featureSetUtils-2ed33d22.js').then(function (n) { return n.h; }),import('./featuresetbase-7f6827b6.js'),import('./featuresetgeom-fe1a98b7.js'),import('./featuresetstats-0486e44f.js'),import('./featuresetstring-28fbc647.js')]);return te$1=e,j.extend([r,n,s,u]),Ee$1([r,n,s,u],"async"),w=!0,!0}function Q$1(e,t=[]){return void 0===e.usesFeatureSet&&d$6(e,t),!0===e.usesFeatureSet}function V$1(e,t=[]){return void 0===e.isAsync&&d$6(e,t),!0===e.isAsync}function W$1(e,t){if(t){for(const r of t)if(_$1(e,r))return !0;return !1}return !1}async function X$1(e,t,r=[],n=!1,s=null){return Y$1(new Set,e,t,r,n,s)}async function Y$1(e,t,r,n=[],s=!1,u=null){const a="string"==typeof t?G$1(t):t,o=[];return a&&(!1===B$1()&&(D$1(a)||s)&&o.push(k()),!1===q$1()&&(!0===a.isAsync||r)&&o.push(N$1()),!1===T$1()&&(Q$1(a)||W$1(a,n))&&o.push(J$1())),o.length&&await Promise.all(o),await $(e,a,u,r,s),!0}function Z$1(e,t=[]){return void 0===e.usesModules&&d$6(e,t),!0===e.usesModules}async function $(e,t,r=null,s=!1,u=!1){const i=x$5(t);null===r&&i.length>0&&(r=l.getDefault()),t.loadedModules={};for(const n of i){c$7(r);const i=r.normalizeModuleUri(n.source);if(e.has(i.uri))throw new t$6(null,e$7.CircularModules,null);e.add(i.uri);const c=await r.fetchModule(i);await Y$1(e,c,s,[],u,r),e.delete(i.uri),c.isAsync&&(t.isAsync=!0),c.usesFeatureSet&&(t.usesFeatureSet=!0),c.usesGeometry&&(t.usesGeometry=!0),t.loadedModules[n.libname]={uri:i.uri,script:c};}}function ee$1(e){if(D$1(e))return !0;const t=y$5(e);let r=!1;for(let n=0;n<t.length;n++)if(b.includes(t[n])){r=!0;break}return r}let te$1=null;function re$1(){return te$1}const ne$1=Object.freeze(Object.defineProperty({__proto__:null,compileScript:M$1,extend:E,parseScript:G$1,parseAndExecuteScript:v,executeScript:U$1,referencesMember:_$1,referencesFunction:I$1,extractFieldLiterals:R,extractExpectedFieldLiterals:C$1,scriptUsesGeometryEngine:D$1,enableGeometrySupport:k,enableGeometrySupportImpl:z,enableAsyncSupport:N$1,enableAsyncSupportImpl:O$1,isFeatureSetSupportEnabled:T$1,isAsyncEnabled:q$1,isGeometryEnabled:B$1,enableFeatureSetSupport:J$1,enableFeatureSetSupportImpl:K$1,scriptUsesFeatureSet:Q$1,scriptIsAsync:V$1,loadScriptDependencies:X$1,_loadScriptDependenciesImpl:Y$1,scriptUsesModules:Z$1,loadDependentModules:$,scriptTouchesGeometry:ee$1,featureSetUtils:re$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const C=/^\$(feature|aggregatedFeatures)\./i,M={vars:{$feature:"any",$view:"any"},spatialReference:null};function P(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function I(e){return null==e?null:Y$5(e)||E$3(e)?"array":z$6(e)?"date":w$6(e)?"text":_$4(e)?"boolean":Z$7(e)?"number":e instanceof J$5?"dictionary":J$6(e)?"feature":e instanceof w$7?"point":e instanceof v$4?"polygon":e instanceof m$7?"polyline":e instanceof u$7?"multipoint":e instanceof w$8?"extent":P$5(e)?"featureSet":G$3(e)?"featureSetCollection":null}function A(r){if(!r)return null;try{return G$1(r)}catch(n){}return null}function D(e,n){const t="string"==typeof e?A(e):e;if(!t)return null;try{return n=n||y$8(M),M$1(t,n)}catch(o){}return null}function G(e,r){return {vars:{$feature:null==e?new g$4:g$4.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}}function T(e,r,n){return g$4.createFromGraphicLikeObject(r,e,n)}function U(e,r){null!=e.vars&&(e.vars.$feature=r);}function V(e,r){let t;try{t=U$1(e,r);}catch(o){t=null;}return t}function L(e,r){let n;try{n=e?e(r):null;}catch(t){n=null;}return n}function q(e,r){try{return e?e(r):Promise.resolve(null)}catch(n){return Promise.resolve(null)}}function J(e,r){if(!e)return [];const n="string"==typeof e?A(e):e;if(!n)return [];const o=C$1(n);let s=new Array;o.forEach((e=>{C.test(e)&&(e=e.replace(C,""),s.push(e));}));const i=s.filter((e=>e.includes("*")));return s=s.filter((e=>!i.includes(e))),r&&i.forEach((e=>{const n=new RegExp(`^${e.split(/\*+/).map(P).join(".*")}$`,"i");r.forEach((e=>n.test(e)?s.push(e):null));})),[...new Set(s.sort())]}function O(e){return _$1(e,"$view")}function B(e,r){return !!e&&_$1(e,r)}function H(e){if(!e||null==e.spatialReference&&(null==e.scale||null==e.viewingMode))return;return {view:e.viewingMode&&null!=e.scale?new J$5({viewingMode:e.viewingMode,scale:e.scale}):null,sr:e.spatialReference}}function K({url:e,spatialReference:r,lrucache:n,interceptor:t}){const o=re$1();return o?o.createFeatureSetCollectionFromService(e,r,n,t):null}function N({layer:e,spatialReference:r,outFields:n,returnGeometry:t,lrucache:o,interceptor:s}){if(null===e)return null;const i=re$1();return i?i.constructFeatureSet(e,r,n,t??!0,o,s):null}function Q(e){if(null===e?.map)return null;const r=re$1();return r?r.createFeatureSetCollectionFromMap(e.map,e.spatialReference,e.lrucache,e.interceptor):null}function W(e){return J$5.convertJsonToArcade(e)}function X(e,r,n=[]){return X$1(e,r,n)}function Y(){return k()}function Z(){return J$1()}function _(e){return "simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type||"dot-density"===e.type||"dictionary"===e.type||"pie-chart"===e.type}function ee(e){return "esri.layers.support.LabelClass"===e.declaredClass}function re(e){return "esri.PopupTemplate"===e.declaredClass}function ne(e,r){if(!e)return !1;if("string"==typeof e)return r(e);const n=e;if(_(n)){if("dot-density"===n.type){const e=n.attributes?.some((e=>r(e.valueExpression)));if(e)return e}const e=n.visualVariables,t=!!e&&e.some((e=>{let n=r(e.valueExpression);return "size"===e.type&&(e$9(e.minSize)&&(n=n||r(e.minSize.valueExpression)),e$9(e.maxSize)&&(n=n||r(e.maxSize.valueExpression))),n}));return !(!("valueExpression"in n)||!r(n.valueExpression))||t}if(ee(n)){const e=n.labelExpressionInfo&&n.labelExpressionInfo.expression;return !(!e||!r(e))||!1}return !!re(n)&&(!!n.expressionInfos&&n.expressionInfos.some((e=>r(e.expression)))||Array.isArray(n.content)&&n.content.some((e=>"expression"===e.type&&r(e.expressionInfo?.expression))))}function te(e){const r=A(e);return !!r&&ee$1(r)}function oe(e){return ne(e,te)}function se(e){const r=A(e);return !!r&&D$1(r)}function ie(e){return ne(e,se)}

var arcadeUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  convertFeatureLayerToFeatureSet: N,
  convertJsonToArcade: W,
  convertMapToFeatureSetCollection: Q,
  convertServiceUrlToWorkspace: K,
  createExecContext: G,
  createFeature: T,
  createFunction: D,
  createSyntaxTree: A,
  dependsOnView: O,
  enableFeatureSetOperations: Z,
  enableGeometryOperations: Y,
  evalSyntaxTree: V,
  executeAsyncFunction: q,
  executeFunction: L,
  extractFieldNames: J,
  getArcadeType: I,
  getViewInfo: H,
  hasGeometryFunctions: oe,
  hasGeometryOperations: ie,
  hasVariable: B,
  loadScriptDependencies: X,
  updateExecContext: U,
  arcade: ne$1,
  Dictionary: J$5,
  arcadeFeature: g$4
});

export { S$1 as $, A$4 as A, B$2 as B, C$3 as C, D$6 as D, E$3 as E, F$3 as F, he$3 as G, a$3 as H, be$2 as I, J$5 as J, K$3 as K, le$3 as L, M$5 as M, N$3 as N, l$6 as O, P$5 as P, Q$5 as Q, u$4 as R, Se$2 as S, s$6 as T, e$4 as U, V$5 as V, W$6 as W, X$5 as X, Y$5 as Y, Z$7 as Z, _$4 as _, e$6 as a, i$5 as a0, n$2 as a1, t$4 as a2, Me$2 as a3, F$4 as a4, D$7 as a5, b$2 as a6, e$3 as a7, i$7 as a8, DateTime as a9, y$6 as aa, l$8 as ab, c$5 as ac, m$6 as ad, d$7 as ae, o$5 as af, v$3 as ag, f$2 as ah, t$2 as ai, t$5 as aj, xe$2 as ak, R$2 as al, l$4 as am, s$5 as an, Ae$2 as ao, me$3 as ap, Re$1 as aq, Fe$2 as ar, fe$2 as as, Ce$2 as at, ce$3 as au, te$5 as av, Ie$2 as aw, P$6 as ax, arcadeUtils as ay, N$5 as b, J$6 as c, Ne$1 as d, e$7 as e, f, se$4 as g, g$4 as h, r$5 as i, j$2 as j, k$3 as k, s$a as l, m$4 as m, n$4 as n, o$4 as o, s$8 as p, pe$2 as q, re$5 as r, s$3 as s, t$6 as t, u$6 as u, c$2 as v, w$6 as w, r$2 as x, v$2 as y, z$6 as z };
