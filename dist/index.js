!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return{set(t){window.localStorage.setItem(e,t)},get:()=>window.localStorage.getItem(e),remove(){window.localStorage.removeItem(e)}}}n.r(t);const a=r("KONEKSI_DEVICE_ID"),i=r("KONEKSI_USER_DATA"),o=r("KONEKSI_IMAGE_DATA"),u=r("KONEKSI_SCANNER_DATA");function s(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"}function c(){try{"iOS"===s()?window.webkit.messageHandlers.qrScanner.postMessage(""):"Android"===s()&&window.androidObj.qrScanner()}catch(e){}}function d(){try{"iOS"===s()?window.webkit.messageHandlers.getImage.postMessage(""):"Android"===s()&&window.androidObj.getImage()}catch(e){console.log("err",e)}}function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+e>1?"s":" required, but only "+t.length+" present")}function f(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function h(e){l(1,arguments);var t=f(e);return!isNaN(t)}window.androidObj=function(){},window.receiveUserData=function(e){i.set(e)},window.receiveImage=function(e){o.set(e)},window.receiveScannerData=function(e){u.set(e)};var m={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var w={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function b(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function y(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(r)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(r)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var p,T={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof m[e]?m[e]:1===t?m[e].one:m[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:function(e,t,n,r){return v[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:b({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:b({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:b({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(p.matchPattern);if(!a)return null;var i=a[0],o=n.match(p.parsePattern);if(!o)return null;var u=p.valueCallback?p.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function M(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function C(e,t){l(2,arguments);var n=f(e).getTime(),r=M(t);return new Date(n+r)}function S(e,t){l(2,arguments);var n=M(t);return C(e,-n)}function x(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var P={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return x("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):x(n+1,2)},d:function(e,t){return x(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return x(e.getUTCHours()%12||12,t.length)},H:function(e,t){return x(e.getUTCHours(),t.length)},m:function(e,t){return x(e.getUTCMinutes(),t.length)},s:function(e,t){return x(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return x(Math.floor(r*Math.pow(10,n-3)),t.length)}};function D(e){l(1,arguments);var t=1,n=f(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function U(e){l(1,arguments);var t=f(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=D(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=D(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function O(e){l(1,arguments);var t=U(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}function k(e,t){l(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:M(a),o=null==n.weekStartsOn?i:M(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=f(e),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function E(e,t){l(1,arguments);var n=f(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:M(o),s=null==a.firstWeekContainsDate?u:M(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=k(c,t),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var m=k(h,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function W(e,t){l(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:M(a),o=null==n.firstWeekContainsDate?i:M(n.firstWeekContainsDate),u=E(e,t),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var c=k(s,t);return c}var N="midnight",Y="noon",q="morning",j="afternoon",I="evening",A="night";function H(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+x(i,2)}function z(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):Q(e,t)}function Q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+x(Math.floor(a/60),2)+n+x(a%60,2)}var X={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P.y(e,t)},Y:function(e,t,n,r){var a=E(e,r),i=a>0?a:1-a;return"YY"===t?x(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):x(i,t.length)},R:function(e,t){return x(U(e),t.length)},u:function(e,t){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){l(1,arguments);var n=f(e),r=k(n,t).getTime()-W(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},I:function(e,t,n){var r=function(e){l(1,arguments);var t=f(e),n=D(t).getTime()-O(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):x(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):P.d(e,t)},D:function(e,t,n){var r=function(e){l(1,arguments);var t=f(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):x(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return x(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return x(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return x(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?Y:0===a?N:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?I:a>=12?j:a>=4?q:A,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):P.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):P.s(e,t)},S:function(e,t){return P.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return z(a);case"XXXX":case"XX":return Q(a);case"XXXXX":case"XXX":default:return Q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return z(a);case"xxxx":case"xx":return Q(a);case"xxxxx":case"xxx":default:return Q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+H(a,":");case"OOOO":default:return"GMT"+Q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+H(a,":");case"zzzz":default:return"GMT"+Q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return x(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return x((r._originalDate||e).getTime(),t.length)}};function F(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function L(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var G={p:L,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return F(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",F(a,t)).replace("{{time}}",L(i,t))}};function _(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}var B=["D","DD"],R=["YY","YYYY"];function K(e){return-1!==B.indexOf(e)}function J(e){return-1!==R.indexOf(e)}function V(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ee=/^'([^]*?)'?$/,te=/''/g,ne=/[a-zA-Z]/;function re(e,t,n){l(2,arguments);var r=String(t),a=n||{},i=a.locale||T,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:M(o),s=null==a.firstWeekContainsDate?u:M(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=null==c?0:M(c),m=null==a.weekStartsOn?d:M(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=f(e);if(!h(g))throw new RangeError("Invalid time value");var w=_(g),v=S(g,w),b={firstWeekContainsDate:s,weekStartsOn:m,locale:i,_originalDate:g},y=r.match(Z).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,i.formatLong,b):e})).join("").match($).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return ae(e);var n=X[t];if(n)return!a.useAdditionalWeekYearTokens&&J(e)&&V(e),!a.useAdditionalDayOfYearTokens&&K(e)&&V(e),n(v,e,i.localize,b);if(t.match(ne))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return y}function ae(e){return e.match(ee)[1].replace(te,"'")}t.default=class{constructor(e){this.appId=e.appId,this.developerId=e.developerId,this.publicKey=e.publicKey}getDeviceId(){return console.log("test device id"),a.get()}getUserProfile(){return JSON.parse(i.get())}activateMobileCamera(){d()}activateMobileScanner(){console.log("asd",this.appId),c()}sendPicture(){d()}sendQR(){c()}getPicture(){return o.get()}getScanner(){return u.get()}payBill(e){!function(e){const t=JSON.stringify(e);console.log("in",t);try{"iOS"===s()?(console.log("stringify",t),window.webkit.messageHandlers.sendInquiry.postMessage(t)):"Android"===s()?(console.log("stringify",t),window.androidObj.sendInquiry(t)):console.log("Unknown")}catch(e){}}({...e,trxDate:re(new Date,"yyyyMMddHHMMSS"),appId:this.appId,appTrxId:e.transactionId,developerId:this.developerId,totalAmount:e.totalAmount,items:e.items})}}}])}));