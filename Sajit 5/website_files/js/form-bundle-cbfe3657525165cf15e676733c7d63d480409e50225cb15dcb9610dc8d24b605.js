/* flatpickr v4.6.9,, @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).flatpickr=t()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var n=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},r=function(e){return!0===e?1:0};function l(e,t){var n;return function(){var a=this;clearTimeout(n),n=setTimeout((function(){return e.apply(a,arguments)}),t)}}var c=function(e){return e instanceof Array?e:[e]};function d(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function s(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function f(e,t){return t(e)?e:e.parentNode?f(e.parentNode,t):void 0}function m(e,t){var n=s("div","numInputWrapper"),a=s("input","numInput "+e),i=s("span","arrowUp"),o=s("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==t)for(var r in t)a.setAttribute(r,t[r]);return n.appendChild(a),n.appendChild(i),n.appendChild(o),n}function g(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(t){return e.target}}var p=function(){},h=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},v={D:p,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*r(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var a=parseInt(t),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+n.firstDayOfWeek),i},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:p,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:p,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},D={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[w.w(e,t,n)]},F:function(e,t,n){return h(w.n(e,t,n)-1,!1,t)},G:function(e,t,n){return o(w.h(e,t,n))},H:function(e){return o(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[r(e.getHours()>11)]},M:function(e,t){return h(e.getMonth(),!0,t)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},b=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,t,a){var i=a||r;return void 0===n.formatDate||c?t.split("").map((function(t,a,o){return w[t]&&"\\"!==o[a-1]?w[t](e,i,n):"\\"!==t?t:""})).join(""):n.formatDate(e,t,i)}},C=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o;return function(e,t,i,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=t||(n||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(n&&n.parseDate)l=n.parseDate(e,s);else{l=n&&n.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],g=0,p=0,h="";g<s.length;g++){var w=s[g],b="\\"===w,C="\\"===s[g-1]||b;if(D[w]&&!C){h+=D[w];var M=new RegExp(h).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:v[w],val:M[++p]})}else b||(h+=".");m.forEach((function(e){var t=e.fn,n=e.val;return l=t(l,n,c)||l}))}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===i&&l.setHours(0,0,0,0),l;n.errorHandler(new Error("Invalid date provided: "+d))}}};function M(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var y=864e5;function x(e){var t=e.defaultHour,n=e.defaultMinute,a=e.defaultSeconds;if(void 0!==e.minDate){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),r=e.minDate.getSeconds();t<i&&(t=i),t===i&&n<o&&(n=o),t===i&&n===o&&a<r&&(a=e.minDate.getSeconds())}if(void 0!==e.maxDate){var l=e.maxDate.getHours(),c=e.maxDate.getMinutes();(t=Math.min(t,l))===l&&(n=Math.min(c,n)),t===l&&n===c&&(a=e.maxDate.getSeconds())}return{hours:t,minutes:n,seconds:a}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(t){t&&Object.keys(t).forEach((function(n){return e[n]=t[n]}))},i=0,o=t;i<o.length;i++){var r=o[i];a(r)}return e});function E(p,v){var w={config:e(e({},a),T.defaultConfig),l10n:i};function E(e){return e.bind(w)}function k(){var e=w.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==w.calendarContainer&&(w.calendarContainer.style.visibility="hidden",w.calendarContainer.style.display="block"),void 0!==w.daysContainer){var t=(w.days.offsetWidth+1)*e.showMonths;w.daysContainer.style.width=t+"px",w.calendarContainer.style.width=t+(void 0!==w.weekWrapper?w.weekWrapper.offsetWidth:0)+"px",w.calendarContainer.style.removeProperty("visibility"),w.calendarContainer.style.removeProperty("display")}}))}function I(e){if(0===w.selectedDates.length){var t=void 0===w.config.minDate||M(new Date,w.config.minDate)>=0?new Date:new Date(w.config.minDate.getTime()),n=x(w.config);t.setHours(n.hours,n.minutes,n.seconds,t.getMilliseconds()),w.selectedDates=[t],w.latestSelectedDateObj=t}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=g(e),a=n;void 0!==w.amPM&&n===w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),d=parseInt(a.value,10),s=e.delta||(t?38===e.which?1:-1:0),u=d+c*s;if(void 0!==a.value&&2===a.value.length){var f=a===w.hourElement,m=a===w.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!w.amPM)),m&&j(void 0,-1,w.hourElement)):u>l&&(u=a===w.hourElement?u-l-r(!w.amPM):i,m&&j(void 0,1,w.hourElement)),w.amPM&&f&&(1===c?u+d===23:Math.abs(u-d)>c)&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]),a.value=o(u)}}(e);var a=w._input.value;S(),be(),w._input.value!==a&&w._debouncedChange()}function S(){if(void 0!==w.hourElement&&void 0!==w.minuteElement){var e,t,n=(parseInt(w.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(w.minuteElement.value,10)||0)%60,i=void 0!==w.secondElement?(parseInt(w.secondElement.value,10)||0)%60:0;void 0!==w.amPM&&(e=n,t=w.amPM.textContent,n=e%12+12*r(t===w.l10n.amPM[1]));var o=void 0!==w.config.minTime||w.config.minDate&&w.minDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.minDate,!0);if(void 0!==w.config.maxTime||w.config.maxDate&&w.maxDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.maxDate,!0)){var l=void 0!==w.config.maxTime?w.config.maxTime:w.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(o){var c=void 0!==w.config.minTime?w.config.minTime:w.config.minDate;(n=Math.max(n,c.getHours()))===c.getHours()&&a<c.getMinutes()&&(a=c.getMinutes()),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}O(n,a,i)}}function _(e){var t=e||w.latestSelectedDateObj;t&&O(t.getHours(),t.getMinutes(),t.getSeconds())}function O(e,t,n){void 0!==w.latestSelectedDateObj&&w.latestSelectedDateObj.setHours(e%24,t,n||0,0),w.hourElement&&w.minuteElement&&!w.isMobile&&(w.hourElement.value=o(w.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),w.minuteElement.value=o(t),void 0!==w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(e>=12)]),void 0!==w.secondElement&&(w.secondElement.value=o(n)))}function F(e){var t=g(e),n=parseInt(t.value)+(e.delta||0);(n/1e3>1||"Enter"===e.key&&!/[^\d]/.test(n.toString()))&&Q(n)}function A(e,t,n,a){return t instanceof Array?t.forEach((function(t){return A(e,t,n,a)})):e instanceof Array?e.forEach((function(e){return A(e,t,n,a)})):(e.addEventListener(t,n,a),void w._handlers.push({remove:function(){return e.removeEventListener(t,n)}}))}function N(){pe("onChange")}function P(e,t){var n=void 0!==e?w.parseDate(e):w.latestSelectedDateObj||(w.config.minDate&&w.config.minDate>w.now?w.config.minDate:w.config.maxDate&&w.config.maxDate<w.now?w.config.maxDate:w.now),a=w.currentYear,i=w.currentMonth;try{void 0!==n&&(w.currentYear=n.getFullYear(),w.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,w.config.errorHandler(e)}t&&w.currentYear!==a&&(pe("onYearChange"),K()),!t||w.currentYear===a&&w.currentMonth===i||pe("onMonthChange"),w.redraw()}function Y(e){var t=g(e);~t.className.indexOf("arrow")&&j(e,t.classList.contains("arrowUp")?1:-1)}function j(e,t,n){var a=e&&g(e),i=n||a&&a.parentNode&&a.parentNode.firstChild,o=he("increment");o.delta=t,i&&i.dispatchEvent(o)}function H(e,t,n,a){var i=X(t,!0),o=s("span","flatpickr-day "+e,t.getDate().toString());return o.dateObj=t,o.$i=a,o.setAttribute("aria-label",w.formatDate(t,w.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===M(t,w.now)&&(w.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,ve(t)&&(o.classList.add("selected"),w.selectedDateElem=o,"range"===w.config.mode&&(d(o,"startRange",w.selectedDates[0]&&0===M(t,w.selectedDates[0],!0)),d(o,"endRange",w.selectedDates[1]&&0===M(t,w.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===w.config.mode&&function(e){return!("range"!==w.config.mode||w.selectedDates.length<2)&&(M(e,w.selectedDates[0])>=0&&M(e,w.selectedDates[1])<=0)}(t)&&!ve(t)&&o.classList.add("inRange"),w.weekNumbers&&1===w.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&w.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+w.config.getWeek(t)+"</span>"),pe("onDayCreate",o),o}function L(e){e.focus(),"range"===w.config.mode&&ae(e)}function W(e){for(var t=e>0?0:w.config.showMonths-1,n=e>0?w.config.showMonths:-1,a=t;a!=n;a+=e)for(var i=w.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&X(c.dateObj))return c}}function R(e,t){var n=ee(document.activeElement||document.body),a=void 0!==e?e:n?document.activeElement:void 0!==w.selectedDateElem&&ee(w.selectedDateElem)?w.selectedDateElem:void 0!==w.todayDateElem&&ee(w.todayDateElem)?w.todayDateElem:W(t>0?1:-1);void 0===a?w._input.focus():n?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():w.currentMonth,a=t>0?w.config.showMonths:-1,i=t>0?1:-1,o=n-w.currentMonth;o!=a;o+=i)for(var r=w.daysContainer.children[o],l=n-w.currentMonth===o?e.$i+t:t<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&X(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return L(s)}w.changeMonth(i),R(W(i),0)}(a,t):L(a)}function B(e,t){for(var n=(new Date(e,t,1).getDay()-w.l10n.firstDayOfWeek+7)%7,a=w.utils.getDaysInMonth((t-1+12)%12,e),i=w.utils.getDaysInMonth(t,e),o=window.document.createDocumentFragment(),r=w.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",d=a+1-n,u=0;d<=a;d++,u++)o.appendChild(H(l,new Date(e,t-1,d),d,u));for(d=1;d<=i;d++,u++)o.appendChild(H("",new Date(e,t,d),d,u));for(var f=i+1;f<=42-n&&(1===w.config.showMonths||u%7!=0);f++,u++)o.appendChild(H(c,new Date(e,t+1,f%i),f,u));var m=s("div","dayContainer");return m.appendChild(o),m}function J(){if(void 0!==w.daysContainer){u(w.daysContainer),w.weekNumbers&&u(w.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<w.config.showMonths;t++){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),e.appendChild(B(n.getFullYear(),n.getMonth()))}w.daysContainer.appendChild(e),w.days=w.daysContainer.firstChild,"range"===w.config.mode&&1===w.selectedDates.length&&ae()}}function K(){if(!(w.config.showMonths>1||"dropdown"!==w.config.monthSelectorType)){var e=function(e){return!(void 0!==w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&e<w.config.minDate.getMonth())&&!(void 0!==w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()&&e>w.config.maxDate.getMonth())};w.monthsDropdownContainer.tabIndex=-1,w.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=s("option","flatpickr-monthDropdown-month");n.value=new Date(w.currentYear,t).getMonth().toString(),n.textContent=h(t,w.config.shorthandCurrentMonth,w.l10n),n.tabIndex=-1,w.currentMonth===t&&(n.selected=!0),w.monthsDropdownContainer.appendChild(n)}}}function U(){var e,t=s("div","flatpickr-month"),n=window.document.createDocumentFragment();w.config.showMonths>1||"static"===w.config.monthSelectorType?e=s("span","cur-month"):(w.monthsDropdownContainer=s("select","flatpickr-monthDropdown-months"),w.monthsDropdownContainer.setAttribute("aria-label",w.l10n.monthAriaLabel),A(w.monthsDropdownContainer,"change",(function(e){var t=g(e),n=parseInt(t.value,10);w.changeMonth(n-w.currentMonth),pe("onMonthChange")})),K(),e=w.monthsDropdownContainer);var a=m("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",w.l10n.yearAriaLabel),w.config.minDate&&i.setAttribute("min",w.config.minDate.getFullYear().toString()),w.config.maxDate&&(i.setAttribute("max",w.config.maxDate.getFullYear().toString()),i.disabled=!!w.config.minDate&&w.config.minDate.getFullYear()===w.config.maxDate.getFullYear());var o=s("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),n.appendChild(o),t.appendChild(n),{container:t,yearElement:i,monthElement:e}}function q(){u(w.monthNav),w.monthNav.appendChild(w.prevMonthNav),w.config.showMonths&&(w.yearElements=[],w.monthElements=[]);for(var e=w.config.showMonths;e--;){var t=U();w.yearElements.push(t.yearElement),w.monthElements.push(t.monthElement),w.monthNav.appendChild(t.container)}w.monthNav.appendChild(w.nextMonthNav)}function $(){w.weekdayContainer?u(w.weekdayContainer):w.weekdayContainer=s("div","flatpickr-weekdays");for(var e=w.config.showMonths;e--;){var t=s("div","flatpickr-weekdaycontainer");w.weekdayContainer.appendChild(t)}return z(),w.weekdayContainer}function z(){if(w.weekdayContainer){var e=w.l10n.firstDayOfWeek,n=t(w.l10n.weekdays.shorthand);e>0&&e<n.length&&(n=t(n.splice(e,n.length),n.splice(0,e)));for(var a=w.config.showMonths;a--;)w.weekdayContainer.children[a].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+n.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function G(e,t){void 0===t&&(t=!0);var n=t?e:e-w.currentMonth;n<0&&!0===w._hidePrevMonthArrow||n>0&&!0===w._hideNextMonthArrow||(w.currentMonth+=n,(w.currentMonth<0||w.currentMonth>11)&&(w.currentYear+=w.currentMonth>11?1:-1,w.currentMonth=(w.currentMonth+12)%12,pe("onYearChange"),K()),J(),pe("onMonthChange"),De())}function V(e){return!(!w.config.appendTo||!w.config.appendTo.contains(e))||w.calendarContainer.contains(e)}function Z(e){if(w.isOpen&&!w.config.inline){var t=g(e),n=V(t),a=t===w.input||t===w.altInput||w.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(w.input)||~e.path.indexOf(w.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!V(e.relatedTarget):!a&&!n&&!V(e.relatedTarget),o=!w.config.ignoredFocusElements.some((function(e){return e.contains(t)}));i&&o&&(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement&&""!==w.input.value&&void 0!==w.input.value&&I(),w.close(),w.config&&"range"===w.config.mode&&1===w.selectedDates.length&&(w.clear(!1),w.redraw()))}}function Q(e){if(!(!e||w.config.minDate&&e<w.config.minDate.getFullYear()||w.config.maxDate&&e>w.config.maxDate.getFullYear())){var t=e,n=w.currentYear!==t;w.currentYear=t||w.currentYear,w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth=Math.min(w.config.maxDate.getMonth(),w.currentMonth):w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&(w.currentMonth=Math.max(w.config.minDate.getMonth(),w.currentMonth)),n&&(w.redraw(),pe("onYearChange"),K())}}function X(e,t){var n;void 0===t&&(t=!0);var a=w.parseDate(e,void 0,t);if(w.config.minDate&&a&&M(a,w.config.minDate,void 0!==t?t:!w.minDateHasTime)<0||w.config.maxDate&&a&&M(a,w.config.maxDate,void 0!==t?t:!w.maxDateHasTime)>0)return!1;if(!w.config.enable&&0===w.config.disable.length)return!0;if(void 0===a)return!1;for(var i=!!w.config.enable,o=null!==(n=w.config.enable)&&void 0!==n?n:w.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l){var c=w.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return!i}function ee(e){return void 0!==w.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&w.daysContainer.contains(e))}function te(e){!(e.target===w._input)||!(w.selectedDates.length>0||w._input.value.length>0)||e.relatedTarget&&V(e.relatedTarget)||w.setDate(w._input.value,!0,e.target===w.altInput?w.config.altFormat:w.config.dateFormat)}function ne(e){var t=g(e),n=w.config.wrap?p.contains(t):t===w._input,a=w.config.allowInput,i=w.isOpen&&(!a||!n),o=w.config.inline&&n&&!a;if(13===e.keyCode&&n){if(a)return w.setDate(w._input.value,!0,t===w.altInput?w.config.altFormat:w.config.dateFormat),t.blur();w.open()}else if(V(t)||i||o){var r=!!w.timeContainer&&w.timeContainer.contains(t);switch(e.keyCode){case 13:r?(e.preventDefault(),I(),se()):ue(e);break;case 27:e.preventDefault(),se();break;case 8:case 46:n&&!w.config.allowInput&&(e.preventDefault(),w.clear());break;case 37:case 39:if(r||n)w.hourElement&&w.hourElement.focus();else if(e.preventDefault(),void 0!==w.daysContainer&&(!1===a||document.activeElement&&ee(document.activeElement))){var l=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),G(l),R(W(1),0)):R(void 0,l)}break;case 38:case 40:e.preventDefault();var c=40===e.keyCode?1:-1;w.daysContainer&&void 0!==t.$i||t===w.input||t===w.altInput?e.ctrlKey?(e.stopPropagation(),Q(w.currentYear-c),R(W(1),0)):r||R(void 0,7*c):t===w.currentYearElement?Q(w.currentYear-c):w.config.enableTime&&(!r&&w.hourElement&&w.hourElement.focus(),I(e),w._debouncedChange());break;case 9:if(r){var d=[w.hourElement,w.minuteElement,w.secondElement,w.amPM].concat(w.pluginElements).filter((function(e){return e})),s=d.indexOf(t);if(-1!==s){var u=d[s+(e.shiftKey?-1:1)];e.preventDefault(),(u||w._input).focus()}}else!w.config.noCalendar&&w.daysContainer&&w.daysContainer.contains(t)&&e.shiftKey&&(e.preventDefault(),w._input.focus())}}if(void 0!==w.amPM&&t===w.amPM)switch(e.key){case w.l10n.amPM[0].charAt(0):case w.l10n.amPM[0].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[0],S(),be();break;case w.l10n.amPM[1].charAt(0):case w.l10n.amPM[1].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[1],S(),be()}(n||V(t))&&pe("onKeyDown",e)}function ae(e){if(1===w.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():w.days.firstElementChild.dateObj.getTime(),n=w.parseDate(w.selectedDates[0],void 0,!0).getTime(),a=Math.min(t,w.selectedDates[0].getTime()),i=Math.max(t,w.selectedDates[0].getTime()),o=!1,r=0,l=0,c=a;c<i;c+=y)X(new Date(c),!0)||(o=o||c>a&&c<i,c<n&&(!r||c>r)?r=c:c>n&&(!l||c<l)&&(l=c));for(var d=0;d<w.config.showMonths;d++)for(var s=w.daysContainer.children[d],u=function(a,i){var c,d,u,f=s.children[a],m=f.dateObj.getTime(),g=r>0&&m<r||l>0&&m>l;return g?(f.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){f.classList.remove(e)})),"continue"):o&&!g?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){f.classList.remove(e)})),void(void 0!==e&&(e.classList.add(t<=w.selectedDates[0].getTime()?"startRange":"endRange"),n<t&&m===n?f.classList.add("startRange"):n>t&&m===n&&f.classList.add("endRange"),m>=r&&(0===l||m<=l)&&(d=n,u=t,(c=m)>Math.min(d,u)&&c<Math.max(d,u))&&f.classList.add("inRange"))))},f=0,m=s.children.length;f<m;f++)u(f)}}function ie(){!w.isOpen||w.config.static||w.config.inline||ce()}function oe(e){return function(t){var n=w.config["_"+e+"Date"]=w.parseDate(t,w.config.dateFormat),a=w.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(w["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),w.selectedDates&&(w.selectedDates=w.selectedDates.filter((function(e){return X(e)})),w.selectedDates.length||"min"!==e||_(n),be()),w.daysContainer&&(de(),void 0!==n?w.currentYearElement[e]=n.getFullYear().toString():w.currentYearElement.removeAttribute(e),w.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function re(){return w.config.wrap?p.querySelector("[data-input]"):p}function le(){"object"!=typeof w.config.locale&&void 0===T.l10ns[w.config.locale]&&w.config.errorHandler(new Error("flatpickr: invalid locale "+w.config.locale)),w.l10n=e(e({},T.l10ns.default),"object"==typeof w.config.locale?w.config.locale:"default"!==w.config.locale?T.l10ns[w.config.locale]:void 0),D.K="("+w.l10n.amPM[0]+"|"+w.l10n.amPM[1]+"|"+w.l10n.amPM[0].toLowerCase()+"|"+w.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},v),JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===T.defaultConfig.time_24hr&&(w.config.time_24hr=w.l10n.time_24hr),w.formatDate=b(w),w.parseDate=C({config:w.config,l10n:w.l10n})}function ce(e){if("function"!=typeof w.config.position){if(void 0!==w.calendarContainer){pe("onPreCalendarPosition");var t=e||w._positionElement,n=Array.prototype.reduce.call(w.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),a=w.calendarContainer.offsetWidth,i=w.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=t.getBoundingClientRect(),c=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&c<n&&l.top>n,u=window.pageYOffset+l.top+(s?-n-2:t.offsetHeight+2);if(d(w.calendarContainer,"arrowTop",!s),d(w.calendarContainer,"arrowBottom",s),!w.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),d(w.calendarContainer,"arrowLeft",!m&&!g),d(w.calendarContainer,"arrowCenter",m),d(w.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(d(w.calendarContainer,"rightMost",h),!w.config.static)if(w.calendarContainer.style.top=u+"px",h)if(v){var D=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];try{n.cssRules}catch(e){continue}e=n;break}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a}();if(void 0===D)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=D.cssRules.length,y="{left:"+l.left+"px;right:auto;}";d(w.calendarContainer,"rightMost",!1),d(w.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),w.calendarContainer.style.left=C+"px",w.calendarContainer.style.right="auto"}else w.calendarContainer.style.left="auto",w.calendarContainer.style.right=p+"px";else w.calendarContainer.style.left=f+"px",w.calendarContainer.style.right="auto"}}}else w.config.position(w,e)}function de(){w.config.noCalendar||w.isMobile||(K(),De(),J())}function se(){w._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(w.close,0):w.close()}function ue(e){e.preventDefault(),e.stopPropagation();var t=f(g(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,a=w.latestSelectedDateObj=new Date(n.dateObj.getTime()),i=(a.getMonth()<w.currentMonth||a.getMonth()>w.currentMonth+w.config.showMonths-1)&&"range"!==w.config.mode;if(w.selectedDateElem=n,"single"===w.config.mode)w.selectedDates=[a];else if("multiple"===w.config.mode){var o=ve(a);o?w.selectedDates.splice(parseInt(o),1):w.selectedDates.push(a)}else"range"===w.config.mode&&(2===w.selectedDates.length&&w.clear(!1,!1),w.latestSelectedDateObj=a,w.selectedDates.push(a),0!==M(a,w.selectedDates[0],!0)&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(S(),i){var r=w.currentYear!==a.getFullYear();w.currentYear=a.getFullYear(),w.currentMonth=a.getMonth(),r&&(pe("onYearChange"),K()),pe("onMonthChange")}if(De(),J(),be(),i||"range"===w.config.mode||1!==w.config.showMonths?void 0!==w.selectedDateElem&&void 0===w.hourElement&&w.selectedDateElem&&w.selectedDateElem.focus():L(n),void 0!==w.hourElement&&void 0!==w.hourElement&&w.hourElement.focus(),w.config.closeOnSelect){var l="single"===w.config.mode&&!w.config.enableTime,c="range"===w.config.mode&&2===w.selectedDates.length&&!w.config.enableTime;(l||c)&&se()}N()}}w.parseDate=C({config:w.config,l10n:w.l10n}),w._handlers=[],w.pluginElements=[],w.loadedPlugins=[],w._bind=A,w._setHoursFromDate=_,w._positionCalendar=ce,w.changeMonth=G,w.changeYear=Q,w.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);w.input.value="",void 0!==w.altInput&&(w.altInput.value="");void 0!==w.mobileInput&&(w.mobileInput.value="");w.selectedDates=[],w.latestSelectedDateObj=void 0,!0===t&&(w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth());if(!0===w.config.enableTime){var n=x(w.config),a=n.hours,i=n.minutes,o=n.seconds;O(a,i,o)}w.redraw(),e&&pe("onChange")},w.close=function(){w.isOpen=!1,w.isMobile||(void 0!==w.calendarContainer&&w.calendarContainer.classList.remove("open"),void 0!==w._input&&w._input.classList.remove("active"));pe("onClose")},w._createElement=s,w.destroy=function(){void 0!==w.config&&pe("onDestroy");for(var e=w._handlers.length;e--;)w._handlers[e].remove();if(w._handlers=[],w.mobileInput)w.mobileInput.parentNode&&w.mobileInput.parentNode.removeChild(w.mobileInput),w.mobileInput=void 0;else if(w.calendarContainer&&w.calendarContainer.parentNode)if(w.config.static&&w.calendarContainer.parentNode){var t=w.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else w.calendarContainer.parentNode.removeChild(w.calendarContainer);w.altInput&&(w.input.type="text",w.altInput.parentNode&&w.altInput.parentNode.removeChild(w.altInput),delete w.altInput);w.input&&(w.input.type=w.input._type,w.input.classList.remove("flatpickr-input"),w.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete w[e]}catch(e){}}))},w.isEnabled=X,w.jumpToDate=P,w.open=function(e,t){void 0===t&&(t=w._positionElement);if(!0===w.isMobile){if(e){e.preventDefault();var n=g(e);n&&n.blur()}return void 0!==w.mobileInput&&(w.mobileInput.focus(),w.mobileInput.click()),void pe("onOpen")}if(w._input.disabled||w.config.inline)return;var a=w.isOpen;w.isOpen=!0,a||(w.calendarContainer.classList.add("open"),w._input.classList.add("active"),pe("onOpen"),ce(t));!0===w.config.enableTime&&!0===w.config.noCalendar&&(!1!==w.config.allowInput||void 0!==e&&w.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return w.hourElement.select()}),50))},w.redraw=de,w.set=function(e,t){if(null!==e&&"object"==typeof e)for(var a in Object.assign(w.config,e),e)void 0!==fe[a]&&fe[a].forEach((function(e){return e()}));else w.config[e]=t,void 0!==fe[e]?fe[e].forEach((function(e){return e()})):n.indexOf(e)>-1&&(w.config[e]=c(t));w.redraw(),be(!0)},w.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=w.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return w.clear(t);me(e,n),w.latestSelectedDateObj=w.selectedDates[w.selectedDates.length-1],w.redraw(),P(void 0,t),_(),0===w.selectedDates.length&&w.clear(!1);be(t),t&&pe("onChange")},w.toggle=function(e){if(!0===w.isOpen)return w.close();w.open(e)};var fe={locale:[le,z],showMonths:[q,k,$],minDate:[P],maxDate:[P],clickOpens:[function(){!0===w.config.clickOpens?(A(w._input,"focus",w.open),A(w._input,"click",w.open)):(w._input.removeEventListener("focus",w.open),w._input.removeEventListener("click",w.open))}]};function me(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return w.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[w.parseDate(e,t)];else if("string"==typeof e)switch(w.config.mode){case"single":case"time":n=[w.parseDate(e,t)];break;case"multiple":n=e.split(w.config.conjunction).map((function(e){return w.parseDate(e,t)}));break;case"range":n=e.split(w.l10n.rangeSeparator).map((function(e){return w.parseDate(e,t)}))}else w.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));w.selectedDates=w.config.allowInvalidPreload?n:n.filter((function(e){return e instanceof Date&&X(e,!1)})),"range"===w.config.mode&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function ge(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?w.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:w.parseDate(e.from,void 0),to:w.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function pe(e,t){if(void 0!==w.config){var n=w.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](w.selectedDates,w.input.value,w,t);"onChange"===e&&(w.input.dispatchEvent(he("change")),w.input.dispatchEvent(he("input")))}}function he(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ve(e){for(var t=0;t<w.selectedDates.length;t++)if(0===M(w.selectedDates[t],e))return""+t;return!1}function De(){w.config.noCalendar||w.isMobile||!w.monthNav||(w.yearElements.forEach((function(e,t){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),w.config.showMonths>1||"static"===w.config.monthSelectorType?w.monthElements[t].textContent=h(n.getMonth(),w.config.shorthandCurrentMonth,w.l10n)+" ":w.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),w._hidePrevMonthArrow=void 0!==w.config.minDate&&(w.currentYear===w.config.minDate.getFullYear()?w.currentMonth<=w.config.minDate.getMonth():w.currentYear<w.config.minDate.getFullYear()),w._hideNextMonthArrow=void 0!==w.config.maxDate&&(w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth+1>w.config.maxDate.getMonth():w.currentYear>w.config.maxDate.getFullYear()))}function we(e){return w.selectedDates.map((function(t){return w.formatDate(t,e)})).filter((function(e,t,n){return"range"!==w.config.mode||w.config.enableTime||n.indexOf(e)===t})).join("range"!==w.config.mode?w.config.conjunction:w.l10n.rangeSeparator)}function be(e){void 0===e&&(e=!0),void 0!==w.mobileInput&&w.mobileFormatStr&&(w.mobileInput.value=void 0!==w.latestSelectedDateObj?w.formatDate(w.latestSelectedDateObj,w.mobileFormatStr):""),w.input.value=we(w.config.dateFormat),void 0!==w.altInput&&(w.altInput.value=we(w.config.altFormat)),!1!==e&&pe("onValueUpdate")}function Ce(e){var t=g(e),n=w.prevMonthNav.contains(t),a=w.nextMonthNav.contains(t);n||a?G(n?-1:1):w.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?w.changeYear(w.currentYear+1):t.classList.contains("arrowDown")&&w.changeYear(w.currentYear-1)}return function(){w.element=w.input=p,w.isOpen=!1,function(){var t=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(p.dataset||{}))),v),o={};w.config.parseDate=i.parseDate,w.config.formatDate=i.formatDate,Object.defineProperty(w.config,"enable",{get:function(){return w.config._enable},set:function(e){w.config._enable=ge(e)}}),Object.defineProperty(w.config,"disable",{get:function(){return w.config._disable},set:function(e){w.config._disable=ge(e)}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=T.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var d=T.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):d+" h:i"+(i.enableSeconds?":S":"")+" K"}Object.defineProperty(w.config,"minDate",{get:function(){return w.config._minDate},set:oe("min")}),Object.defineProperty(w.config,"maxDate",{get:function(){return w.config._maxDate},set:oe("max")});var s=function(e){return function(t){w.config["min"===e?"_minTime":"_maxTime"]=w.parseDate(t,"H:i:S")}};Object.defineProperty(w.config,"minTime",{get:function(){return w.config._minTime},set:s("min")}),Object.defineProperty(w.config,"maxTime",{get:function(){return w.config._maxTime},set:s("max")}),"time"===i.mode&&(w.config.noCalendar=!0,w.config.enableTime=!0);Object.assign(w.config,o,i);for(var u=0;u<t.length;u++)w.config[t[u]]=!0===w.config[t[u]]||"true"===w.config[t[u]];n.filter((function(e){return void 0!==w.config[e]})).forEach((function(e){w.config[e]=c(w.config[e]||[]).map(E)})),w.isMobile=!w.config.disableMobile&&!w.config.inline&&"single"===w.config.mode&&!w.config.disable.length&&!w.config.enable&&!w.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<w.config.plugins.length;u++){var f=w.config.plugins[u](w)||{};for(var m in f)n.indexOf(m)>-1?w.config[m]=c(f[m]).map(E).concat(w.config[m]):void 0===i[m]&&(w.config[m]=f[m])}i.altInputClass||(w.config.altInputClass=re().className+" "+w.config.altInputClass);pe("onParseConfig")}(),le(),function(){if(w.input=re(),!w.input)return void w.config.errorHandler(new Error("Invalid input element specified"));w.input._type=w.input.type,w.input.type="text",w.input.classList.add("flatpickr-input"),w._input=w.input,w.config.altInput&&(w.altInput=s(w.input.nodeName,w.config.altInputClass),w._input=w.altInput,w.altInput.placeholder=w.input.placeholder,w.altInput.disabled=w.input.disabled,w.altInput.required=w.input.required,w.altInput.tabIndex=w.input.tabIndex,w.altInput.type="text",w.input.setAttribute("type","hidden"),!w.config.static&&w.input.parentNode&&w.input.parentNode.insertBefore(w.altInput,w.input.nextSibling));w.config.allowInput||w._input.setAttribute("readonly","readonly");w._positionElement=w.config.positionElement||w._input}(),function(){w.selectedDates=[],w.now=w.parseDate(w.config.now)||new Date;var e=w.config.defaultDate||("INPUT"!==w.input.nodeName&&"TEXTAREA"!==w.input.nodeName||!w.input.placeholder||w.input.value!==w.input.placeholder?w.input.value:null);e&&me(e,w.config.dateFormat);w._initialDate=w.selectedDates.length>0?w.selectedDates[0]:w.config.minDate&&w.config.minDate.getTime()>w.now.getTime()?w.config.minDate:w.config.maxDate&&w.config.maxDate.getTime()<w.now.getTime()?w.config.maxDate:w.now,w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth(),w.selectedDates.length>0&&(w.latestSelectedDateObj=w.selectedDates[0]);void 0!==w.config.minTime&&(w.config.minTime=w.parseDate(w.config.minTime,"H:i"));void 0!==w.config.maxTime&&(w.config.maxTime=w.parseDate(w.config.maxTime,"H:i"));w.minDateHasTime=!!w.config.minDate&&(w.config.minDate.getHours()>0||w.config.minDate.getMinutes()>0||w.config.minDate.getSeconds()>0),w.maxDateHasTime=!!w.config.maxDate&&(w.config.maxDate.getHours()>0||w.config.maxDate.getMinutes()>0||w.config.maxDate.getSeconds()>0)}(),w.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=w.currentMonth),void 0===t&&(t=w.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:w.l10n.daysInMonth[e]}},w.isMobile||function(){var e=window.document.createDocumentFragment();if(w.calendarContainer=s("div","flatpickr-calendar"),w.calendarContainer.tabIndex=-1,!w.config.noCalendar){if(e.appendChild((w.monthNav=s("div","flatpickr-months"),w.yearElements=[],w.monthElements=[],w.prevMonthNav=s("span","flatpickr-prev-month"),w.prevMonthNav.innerHTML=w.config.prevArrow,w.nextMonthNav=s("span","flatpickr-next-month"),w.nextMonthNav.innerHTML=w.config.nextArrow,q(),Object.defineProperty(w,"_hidePrevMonthArrow",{get:function(){return w.__hidePrevMonthArrow},set:function(e){w.__hidePrevMonthArrow!==e&&(d(w.prevMonthNav,"flatpickr-disabled",e),w.__hidePrevMonthArrow=e)}}),Object.defineProperty(w,"_hideNextMonthArrow",{get:function(){return w.__hideNextMonthArrow},set:function(e){w.__hideNextMonthArrow!==e&&(d(w.nextMonthNav,"flatpickr-disabled",e),w.__hideNextMonthArrow=e)}}),w.currentYearElement=w.yearElements[0],De(),w.monthNav)),w.innerContainer=s("div","flatpickr-innerContainer"),w.config.weekNumbers){var t=function(){w.calendarContainer.classList.add("hasWeeks");var e=s("div","flatpickr-weekwrapper");e.appendChild(s("span","flatpickr-weekday",w.l10n.weekAbbreviation));var t=s("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,a=t.weekNumbers;w.innerContainer.appendChild(n),w.weekNumbers=a,w.weekWrapper=n}w.rContainer=s("div","flatpickr-rContainer"),w.rContainer.appendChild($()),w.daysContainer||(w.daysContainer=s("div","flatpickr-days"),w.daysContainer.tabIndex=-1),J(),w.rContainer.appendChild(w.daysContainer),w.innerContainer.appendChild(w.rContainer),e.appendChild(w.innerContainer)}w.config.enableTime&&e.appendChild(function(){w.calendarContainer.classList.add("hasTime"),w.config.noCalendar&&w.calendarContainer.classList.add("noCalendar");var e=x(w.config);w.timeContainer=s("div","flatpickr-time"),w.timeContainer.tabIndex=-1;var t=s("span","flatpickr-time-separator",":"),n=m("flatpickr-hour",{"aria-label":w.l10n.hourAriaLabel});w.hourElement=n.getElementsByTagName("input")[0];var a=m("flatpickr-minute",{"aria-label":w.l10n.minuteAriaLabel});w.minuteElement=a.getElementsByTagName("input")[0],w.hourElement.tabIndex=w.minuteElement.tabIndex=-1,w.hourElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getHours():w.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),w.minuteElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getMinutes():e.minutes),w.hourElement.setAttribute("step",w.config.hourIncrement.toString()),w.minuteElement.setAttribute("step",w.config.minuteIncrement.toString()),w.hourElement.setAttribute("min",w.config.time_24hr?"0":"1"),w.hourElement.setAttribute("max",w.config.time_24hr?"23":"12"),w.hourElement.setAttribute("maxlength","2"),w.minuteElement.setAttribute("min","0"),w.minuteElement.setAttribute("max","59"),w.minuteElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(n),w.timeContainer.appendChild(t),w.timeContainer.appendChild(a),w.config.time_24hr&&w.timeContainer.classList.add("time24hr");if(w.config.enableSeconds){w.timeContainer.classList.add("hasSeconds");var i=m("flatpickr-second");w.secondElement=i.getElementsByTagName("input")[0],w.secondElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getSeconds():e.seconds),w.secondElement.setAttribute("step",w.minuteElement.getAttribute("step")),w.secondElement.setAttribute("min","0"),w.secondElement.setAttribute("max","59"),w.secondElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(s("span","flatpickr-time-separator",":")),w.timeContainer.appendChild(i)}w.config.time_24hr||(w.amPM=s("span","flatpickr-am-pm",w.l10n.amPM[r((w.latestSelectedDateObj?w.hourElement.value:w.config.defaultHour)>11)]),w.amPM.title=w.l10n.toggleTitle,w.amPM.tabIndex=-1,w.timeContainer.appendChild(w.amPM));return w.timeContainer}());d(w.calendarContainer,"rangeMode","range"===w.config.mode),d(w.calendarContainer,"animate",!0===w.config.animate),d(w.calendarContainer,"multiMonth",w.config.showMonths>1),w.calendarContainer.appendChild(e);var i=void 0!==w.config.appendTo&&void 0!==w.config.appendTo.nodeType;if((w.config.inline||w.config.static)&&(w.calendarContainer.classList.add(w.config.inline?"inline":"static"),w.config.inline&&(!i&&w.element.parentNode?w.element.parentNode.insertBefore(w.calendarContainer,w._input.nextSibling):void 0!==w.config.appendTo&&w.config.appendTo.appendChild(w.calendarContainer)),w.config.static)){var l=s("div","flatpickr-wrapper");w.element.parentNode&&w.element.parentNode.insertBefore(l,w.element),l.appendChild(w.element),w.altInput&&l.appendChild(w.altInput),l.appendChild(w.calendarContainer)}w.config.static||w.config.inline||(void 0!==w.config.appendTo?w.config.appendTo:window.document.body).appendChild(w.calendarContainer)}(),function(){w.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(w.element.querySelectorAll("[data-"+e+"]"),(function(t){return A(t,"click",w[e])}))}));if(w.isMobile)return void function(){var e=w.config.enableTime?w.config.noCalendar?"time":"datetime-local":"date";w.mobileInput=s("input",w.input.className+" flatpickr-mobile"),w.mobileInput.tabIndex=1,w.mobileInput.type=e,w.mobileInput.disabled=w.input.disabled,w.mobileInput.required=w.input.required,w.mobileInput.placeholder=w.input.placeholder,w.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",w.selectedDates.length>0&&(w.mobileInput.defaultValue=w.mobileInput.value=w.formatDate(w.selectedDates[0],w.mobileFormatStr));w.config.minDate&&(w.mobileInput.min=w.formatDate(w.config.minDate,"Y-m-d"));w.config.maxDate&&(w.mobileInput.max=w.formatDate(w.config.maxDate,"Y-m-d"));w.input.getAttribute("step")&&(w.mobileInput.step=String(w.input.getAttribute("step")));w.input.type="hidden",void 0!==w.altInput&&(w.altInput.type="hidden");try{w.input.parentNode&&w.input.parentNode.insertBefore(w.mobileInput,w.input.nextSibling)}catch(e){}A(w.mobileInput,"change",(function(e){w.setDate(g(e).value,!1,w.mobileFormatStr),pe("onChange"),pe("onClose")}))}();var e=l(ie,50);w._debouncedChange=l(N,300),w.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&A(w.daysContainer,"mouseover",(function(e){"range"===w.config.mode&&ae(g(e))}));A(window.document.body,"keydown",ne),w.config.inline||w.config.static||A(window,"resize",e);void 0!==window.ontouchstart?A(window.document,"touchstart",Z):A(window.document,"mousedown",Z);A(window.document,"focus",Z,{capture:!0}),!0===w.config.clickOpens&&(A(w._input,"focus",w.open),A(w._input,"click",w.open));void 0!==w.daysContainer&&(A(w.monthNav,"click",Ce),A(w.monthNav,["keyup","increment"],F),A(w.daysContainer,"click",ue));if(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement){var t=function(e){return g(e).select()};A(w.timeContainer,["increment"],I),A(w.timeContainer,"blur",I,{capture:!0}),A(w.timeContainer,"click",Y),A([w.hourElement,w.minuteElement],["focus","click"],t),void 0!==w.secondElement&&A(w.secondElement,"focus",(function(){return w.secondElement&&w.secondElement.select()})),void 0!==w.amPM&&A(w.amPM,"click",(function(e){I(e),N()}))}w.config.allowInput&&A(w._input,"blur",te)}(),(w.selectedDates.length||w.config.noCalendar)&&(w.config.enableTime&&_(w.config.noCalendar?w.latestSelectedDateObj:void 0),be(!1)),k();var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!w.isMobile&&t&&ce(),pe("onReady")}(),w}function k(e,t){for(var n=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=E(o,t||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return k(this,e)},HTMLElement.prototype.flatpickr=function(e){return k([this],e)});var T=function(e,t){return"string"==typeof e?k(window.document.querySelectorAll(e),t):e instanceof Node?k([e],t):k(e,t)};return T.defaultConfig={},T.l10ns={en:e({},i),default:e({},i)},T.localize=function(t){T.l10ns.default=e(e({},T.l10ns.default),t)},T.setDefaults=function(t){T.defaultConfig=e(e({},T.defaultConfig),t)},T.parseDate=C({}),T.formatDate=b({}),T.compareDates=M,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return k(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=T),T}));
/**
* Tom Select v1.7.8
* Licensed under the Apache License, Version 2.0 (the "License");
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).TomSelect=t()}(this,(function(){"use strict"
function e(e,t){e.split(/\s+/).forEach((e=>{t(e)}))}class t{constructor(){this._events={}}on(t,i){e(t,(e=>{this._events[e]=this._events[e]||[],this._events[e].push(i)}))}off(t,i){var s=arguments.length
0!==s?e(t,(e=>{if(1===s)return delete this._events[e]
e in this._events!=!1&&this._events[e].splice(this._events[e].indexOf(i),1)})):this._events={}}trigger(t,...i){var s=this
e(t,(e=>{if(e in s._events!=!1)for(let t of s._events[e])t.apply(s,i)}))}}var i
const s="[̀-ͯ·ʾ]",n=new RegExp(s,"g")
var o
const r={"æ":"ae","ⱥ":"a","ø":"o"},l=new RegExp(Object.keys(r).join("|"),"g"),a=[[67,67],[160,160],[192,438],[452,652],[961,961],[1019,1019],[1083,1083],[1281,1289],[1984,1984],[5095,5095],[7429,7441],[7545,7549],[7680,7935],[8580,8580],[9398,9449],[11360,11391],[42792,42793],[42802,42851],[42873,42897],[42912,42922],[64256,64260],[65313,65338],[65345,65370]],c=e=>e.normalize("NFKD").replace(n,"").toLowerCase().replace(l,(function(e){return r[e]})),d=(e,t="|")=>e.length>1?"(?:"+e.join(t)+")":e[0],p=e=>{if(1===e.length)return[[e]]
var t=[]
return p(e.substring(1)).forEach((function(i){var s=i.slice(0)
s[0]=e.charAt(0)+s[0],t.push(s),(s=i.slice(0)).unshift(e.charAt(0)),t.push(s)})),t},u=e=>{void 0===o&&(o=(()=>{var e={}
a.forEach((t=>{for(let i=t[0];i<=t[1];i++){let t=String.fromCharCode(i),s=c(t)
s!=t.toLowerCase()&&(s in e||(e[s]=[s]),e[s].push(t))}}))
var t=Object.keys(e)
t=t.sort(((e,t)=>t.length-e.length)),i=new RegExp("("+d(t)+"[̀-ͯ·ʾ]*)","g")
var s={}
return t.sort(((e,t)=>e.length-t.length)).forEach((t=>{var i=p(t).map((t=>(t=t.map((t=>e.hasOwnProperty(t)?d(e[t]):t)),d(t,""))))
s[t]=d(i)})),s})())
return e.normalize("NFKD").toLowerCase().split(i).map((e=>{if(""==e)return""
const t=c(e)
if(o.hasOwnProperty(t))return o[t]
const i=e.normalize("NFC")
return i!=e?d([e,i]):e})).join("")},h=(e,t)=>{if(e)return e[t]},g=(e,t)=>{if(e){for(var i,s=t.split(".");(i=s.shift())&&(e=e[i]););return e}},v=(e,t,i)=>{var s,n
return e?-1===(n=(e+="").search(t.regex))?0:(s=t.string.length/e.length,0===n&&(s+=.5),s*i):0},f=e=>(e+"").replace(/([\$\(-\+\.\?\[-\^\{-\}])/g,"\\$1"),m=(e,t)=>{var i=e[t]
i&&!Array.isArray(i)&&(e[t]=[i])},y=(e,t)=>{if(Array.isArray(e))e.forEach(t)
else for(var i in e)e.hasOwnProperty(i)&&t(e[i],i)},O=(e,t)=>"number"==typeof e&&"number"==typeof t?e>t?1:e<t?-1:0:(e=c(e+"").toLowerCase())>(t=c(t+"").toLowerCase())?1:t>e?-1:0
class b{constructor(e,t){this.items=e,this.settings=t||{diacritics:!0}}tokenize(e,t,i){if(!e||!e.length)return[]
const s=[],n=e.split(/\s+/)
var o
return i&&(o=new RegExp("^("+Object.keys(i).map(f).join("|")+"):(.*)$")),n.forEach((e=>{let i,n=null,r=null
o&&(i=e.match(o))&&(n=i[1],e=i[2]),e.length>0&&(r=f(e),this.settings.diacritics&&(r=u(r)),t&&(r="\\b"+r)),s.push({string:e,regex:r?new RegExp(r,"iu"):null,field:n})})),s}getScoreFunction(e,t){var i=this.prepareSearch(e,t)
return this._getScoreFunction(i)}_getScoreFunction(e){const t=e.tokens,i=t.length
if(!i)return function(){return 0}
const s=e.options.fields,n=e.weights,o=s.length,r=e.getAttrFn
if(!o)return function(){return 1}
const l=1===o?function(e,t){const i=s[0].field
return v(r(t,i),e,n[i])}:function(e,t){var i=0
if(e.field){const s=r(t,e.field)
!e.regex&&s?i+=1/o:i+=v(s,e,1)}else y(n,((s,n)=>{i+=v(r(t,n),e,s)}))
return i/o}
return 1===i?function(e){return l(t[0],e)}:"and"===e.options.conjunction?function(e){for(var s,n=0,o=0;n<i;n++){if((s=l(t[n],e))<=0)return 0
o+=s}return o/i}:function(e){var s=0
return y(t,(t=>{s+=l(t,e)})),s/i}}getSortFunction(e,t){var i=this.prepareSearch(e,t)
return this._getSortFunction(i)}_getSortFunction(e){var t,i,s
const n=this,o=e.options,r=!e.query&&o.sort_empty?o.sort_empty:o.sort,l=[],a=[],c=function(t,i){return"$score"===t?i.score:e.getAttrFn(n.items[i.id],t)}
if(r)for(t=0,i=r.length;t<i;t++)(e.query||"$score"!==r[t].field)&&l.push(r[t])
if(e.query){for(s=!0,t=0,i=l.length;t<i;t++)if("$score"===l[t].field){s=!1
break}s&&l.unshift({field:"$score",direction:"desc"})}else for(t=0,i=l.length;t<i;t++)if("$score"===l[t].field){l.splice(t,1)
break}for(t=0,i=l.length;t<i;t++)a.push("desc"===l[t].direction?-1:1)
const d=l.length
if(d){if(1===d){const e=l[0].field,t=a[0]
return function(i,s){return t*O(c(e,i),c(e,s))}}return function(e,t){var i,s,n
for(i=0;i<d;i++)if(n=l[i].field,s=a[i]*O(c(n,e),c(n,t)))return s
return 0}}return null}prepareSearch(e,t){const i={}
var s=Object.assign({},t)
if(m(s,"sort"),m(s,"sort_empty"),s.fields){m(s,"fields")
const e=[]
s.fields.forEach((t=>{"string"==typeof t&&(t={field:t,weight:1}),e.push(t),i[t.field]="weight"in t?t.weight:1})),s.fields=e}return{options:s,query:e.toLowerCase().trim(),tokens:this.tokenize(e,s.respect_word_boundaries,i),total:0,items:[],weights:i,getAttrFn:s.nesting?g:h}}search(e,t){var i,s,n=this
s=this.prepareSearch(e,t),t=s.options,e=s.query
const o=t.score||n._getScoreFunction(s)
e.length?y(n.items,((e,n)=>{i=o(e),(!1===t.filter||i>0)&&s.items.push({score:i,id:n})})):y(n.items,((e,t)=>{s.items.push({score:1,id:t})}))
const r=n._getSortFunction(s)
return r&&s.items.sort(r),s.total=s.items.length,"number"==typeof t.limit&&(s.items=s.items.slice(0,t.limit)),s}}const w=e=>{if(e.jquery)return e[0]
if(e instanceof HTMLElement)return e
if(e.indexOf("<")>-1){let t=document.createElement("div")
return t.innerHTML=e.trim(),t.firstChild}return document.querySelector(e)},C=(e,t)=>{var i=document.createEvent("HTMLEvents")
i.initEvent(t,!0,!1),e.dispatchEvent(i)},I=(e,t)=>{Object.assign(e.style,t)},_=(e,...t)=>{var i=A(t);(e=x(e)).map((e=>{i.map((t=>{e.classList.add(t)}))}))},S=(e,...t)=>{var i=A(t);(e=x(e)).map((e=>{i.map((t=>{e.classList.remove(t)}))}))},A=e=>{var t=[]
for(let i of e)"string"==typeof i&&(i=i.trim().split(/[\11\12\14\15\40]/)),Array.isArray(i)&&(t=t.concat(i))
return t.filter(Boolean)},x=e=>(Array.isArray(e)||(e=[e]),e),k=(e,t,i)=>{if(!i||i.contains(e))for(;e&&e.matches;){if(e.matches(t))return e
e=e.parentNode}},F=(e,t=0)=>t>0?e[e.length-1]:e[0],L=(e,t)=>{if(!e)return-1
t=t||e.nodeName
for(var i=0;e=e.previousElementSibling;)e.matches(t)&&i++
return i},P=(e,t)=>{for(const i in t){let s=t[i]
null==s?e.removeAttribute(i):e.setAttribute(i,""+s)}},E=(e,t)=>{e.parentNode&&e.parentNode.replaceChild(t,e)},T=(e,t)=>{if(null===t)return
if("string"==typeof t){if(!t.length)return
t=new RegExp(t,"i")}const i=e=>3===e.nodeType?(e=>{var i=e.data.match(t)
if(i&&e.data.length>0){var s=document.createElement("span")
s.className="highlight"
var n=e.splitText(i.index)
n.splitText(i[0].length)
var o=n.cloneNode(!0)
return s.appendChild(o),E(n,s),1}return 0})(e):((e=>{if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&("highlight"!==e.className||"SPAN"!==e.tagName))for(var t=0;t<e.childNodes.length;++t)t+=i(e.childNodes[t])})(e),0)
i(e)},q="undefined"!=typeof navigator&&/Mac/.test(navigator.userAgent)?"metaKey":"ctrlKey"
var j={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:null,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,shouldOpen:null,maxOptions:50,maxItems:null,hideSelected:null,duplicates:!1,addPrecedence:!1,selectOnTab:!1,preload:null,allowEmptyOption:!1,closeAfterSelect:!1,loadThrottle:300,loadingClass:"loading",dataAttr:null,optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"ts-control",inputClass:"ts-input",dropdownClass:"ts-dropdown",dropdownContentClass:"ts-dropdown-content",itemClass:"item",optionClass:"option",dropdownParent:null,controlInput:null,copyClassesToDropdown:!0,placeholder:null,hidePlaceholder:null,shouldLoad:function(e){return e.length>0},render:{}}
const V=e=>null==e?null:N(e),N=e=>"boolean"==typeof e?e?"1":"0":e+"",D=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),R=(e,t)=>{var i
return function(s,n){var o=this
i&&(o.loading=Math.max(o.loading-1,0),clearTimeout(i)),i=setTimeout((function(){i=null,o.loadedSearches[s]=!0,e.call(o,s,n)}),t)}},z=(e,t,i)=>{var s,n=e.trigger,o={}
for(s in e.trigger=function(){var i=arguments[0]
if(-1===t.indexOf(i))return n.apply(e,arguments)
o[i]=arguments},i.apply(e,[]),e.trigger=n,o)n.apply(e,o[s])},H=(e,t=!1)=>{e&&(e.preventDefault(),t&&e.stopPropagation())},K=(e,t,i,s)=>{e.addEventListener(t,i,s)},B=(e,t)=>!!t&&(!!t[e]&&1===(t.altKey?1:0)+(t.ctrlKey?1:0)+(t.shiftKey?1:0)+(t.metaKey?1:0)),M=(e,t)=>{const i=e.getAttribute("id")
return i||(e.setAttribute("id",t),t)},Q=e=>e.replace(/[\\"']/g,"\\$&"),U=(e,t)=>{t&&e.append(t)}
function G(e,t){var i=Object.assign({},j,t),s=i.dataAttr,n=i.labelField,o=i.valueField,r=i.disabledField,l=i.optgroupField,a=i.optgroupLabelField,c=i.optgroupValueField,d=e.tagName.toLowerCase(),p=e.getAttribute("placeholder")||e.getAttribute("data-placeholder")
if(!p&&!i.allowEmptyOption){let t=e.querySelector('option[value=""]')
t&&(p=t.textContent)}var u={placeholder:p,options:[],optgroups:[],items:[],maxItems:null}
return"select"===d?(()=>{var t,d=u.options,p={},h=1,g=e=>{var t=Object.assign({},e.dataset),i=s&&t[s]
return"string"==typeof i&&i.length&&(t=Object.assign(t,JSON.parse(i))),t},v=(e,t)=>{var s=V(e.value)
if(null!=s&&(s||i.allowEmptyOption)){if(p.hasOwnProperty(s)){if(t){var a=p[s][l]
a?Array.isArray(a)?a.push(t):p[s][l]=[a,t]:p[s][l]=t}}else{var c=g(e)
c[n]=c[n]||e.textContent,c[o]=c[o]||s,c[r]=c[r]||e.disabled,c[l]=c[l]||t,c.$option=e,p[s]=c,d.push(c)}e.selected&&u.items.push(s)}},f=e=>{var t,i;(i=g(e))[a]=i[a]||e.getAttribute("label")||"",i[c]=i[c]||h++,i[r]=i[r]||e.disabled,u.optgroups.push(i),t=i[c]
for(const i of e.children)v(i,t)}
u.maxItems=e.hasAttribute("multiple")?null:1
for(const i of e.children)"optgroup"===(t=i.tagName.toLowerCase())?f(i):"option"===t&&v(i)})():(()=>{const t=e.getAttribute(s)
if(t){u.options=JSON.parse(t)
for(const e of u.options)u.items.push(e[o])}else{var r=e.value.trim()||""
if(!i.allowEmptyOption&&!r.length)return
const t=r.split(i.delimiter)
for(const e of t){const t={}
t[n]=e,t[o]=e,u.options.push(t)}u.items=t}})(),Object.assign({},j,u,t)}var J=0
class W extends(function(e){return e.plugins={},class extends e{constructor(...e){super(...e),this.plugins={names:[],settings:{},requested:{},loaded:{}}}static define(t,i){e.plugins[t]={name:t,fn:i}}initializePlugins(e){var t,i
const s=this,n=[]
if(Array.isArray(e))e.forEach((e=>{"string"==typeof e?n.push(e):(s.plugins.settings[e.name]=e.options,n.push(e.name))}))
else if(e)for(t in e)e.hasOwnProperty(t)&&(s.plugins.settings[t]=e[t],n.push(t))
for(;i=n.shift();)s.require(i)}loadPlugin(t){var i=this,s=i.plugins,n=e.plugins[t]
if(!e.plugins.hasOwnProperty(t))throw new Error('Unable to find "'+t+'" plugin')
s.requested[t]=!0,s.loaded[t]=n.fn.apply(i,[i.plugins.settings[t]||{}]),s.names.push(t)}require(e){var t=this,i=t.plugins
if(!t.plugins.loaded.hasOwnProperty(e)){if(i.requested[e])throw new Error('Plugin has circular dependency ("'+e+'")')
t.loadPlugin(e)}return i.loaded[e]}}}(t)){constructor(e,t){var i
super(),this.order=0,this.tab_key=!1,this.isOpen=!1,this.isDisabled=!1,this.isInvalid=!1,this.isLocked=!1,this.isFocused=!1,this.isInputHidden=!1,this.isSetup=!1,this.ignoreFocus=!1,this.hasOptions=!1,this.lastValue="",this.caretPos=0,this.loading=0,this.loadedSearches={},this.activeOption=null,this.activeItems=[],this.optgroups={},this.options={},this.userOptions={},this.items=[],this.renderCache={item:{},option:{}},J++
var s=w(e),n=this
if(s.tomselect)throw new Error("Tom Select already initialized on this element")
s.tomselect=this,i=(window.getComputedStyle&&window.getComputedStyle(s,null)).getPropertyValue("direction"),this.settings=G(s,t),this.input=s,this.tabIndex=s.tabIndex||0,this.is_select_tag="select"===s.tagName.toLowerCase(),this.rtl=/rtl/i.test(i),this.inputId=M(s,"tomselect-"+J),this.isRequired=s.required,this.sifter=new b(this.options,{diacritics:this.settings.diacritics}),this.setupOptions(this.settings.options,this.settings.optgroups),delete this.settings.optgroups,delete this.settings.options,this.settings.mode=this.settings.mode||(1===this.settings.maxItems?"single":"multi"),"boolean"!=typeof this.settings.hideSelected&&(this.settings.hideSelected="multi"===this.settings.mode),"boolean"!=typeof this.settings.hidePlaceholder&&(this.settings.hidePlaceholder="multi"!==this.settings.mode)
var o=this.settings.createFilter
"function"!=typeof o&&("string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp?this.settings.createFilter=e=>o.test(e):this.settings.createFilter=()=>!0),this.initializePlugins(this.settings.plugins),this.setupCallbacks(),this.setupTemplates()
var r,l,a,c,d,p,u,h,g
t=n.settings,s=n.input
const v={passive:!0},m=n.inputId+"-ts-dropdown"
if(p=n.settings.mode,u=s.getAttribute("class")||"",r=w("<div>"),_(r,t.wrapperClass,u,p),l=w('<div class="items">'),_(l,t.inputClass),U(r,l),c=n._render("dropdown"),_(c,t.dropdownClass,p),d=w(`<div role="listbox" id="${m}" tabindex="-1">`),_(d,t.dropdownContentClass),U(c,d),w(t.dropdownParent||r).appendChild(c),t.controlInput)a=w(t.controlInput)
else{a=w('<input type="text" autocomplete="no" size="1" />')
for(const e of["autocorrect","autocapitalize","autocomplete"])s.getAttribute(e)&&P(a,{[e]:s.getAttribute(e)})}t.controlInput||(a.tabIndex=s.disabled?-1:n.tabIndex,l.appendChild(a)),P(a,{role:"combobox",haspopup:"listbox","aria-expanded":"false","aria-controls":m}),g=M(a,n.inputId+"-tomselected")
let y="label[for='"+(e=>e.replace(/['"\\]/g,"\\$&"))(n.inputId)+"']",O=document.querySelector(y)
if(O){P(O,{for:g})
let e=M(O,n.inputId+"-ts-label")
P(d,{"aria-labelledby":e})}n.settings.copyClassesToDropdown&&_(c,u),r.style.width=s.style.width,n.plugins.names.length&&(h="plugin-"+n.plugins.names.join(" plugin-"),_([r,c],h)),(null===t.maxItems||t.maxItems>1)&&n.is_select_tag&&P(s,{multiple:"multiple"}),n.settings.placeholder&&P(a,{placeholder:t.placeholder}),!n.settings.splitOn&&n.settings.delimiter&&(n.settings.splitOn=new RegExp("\\s*"+f(n.settings.delimiter)+"+\\s*")),this.settings.load&&this.settings.loadThrottle&&(this.settings.load=R(this.settings.load,this.settings.loadThrottle)),this.control=l,this.control_input=a,this.wrapper=r,this.dropdown=c,this.dropdown_content=d,n.control_input.type=s.type,K(c,"click",(e=>{const t=k(e.target,"[data-selectable]")
t&&(n.onOptionSelect(e,t),H(e,!0))})),K(l,"click",(e=>{var t=k(e.target,"."+n.settings.itemClass,l)
t&&n.onItemSelect(e,t)?H(e,!0):""==a.value&&(n.onClick(),H(e,!0))})),K(a,"mousedown",(e=>{""!==a.value&&e.stopPropagation()})),K(a,"keydown",(e=>n.onKeyDown(e))),K(a,"keyup",(e=>n.onKeyUp(e))),K(a,"keypress",(e=>n.onKeyPress(e))),K(a,"resize",(()=>n.positionDropdown()),v),K(a,"blur",(()=>n.onBlur())),K(a,"focus",(e=>n.onFocus(e))),K(a,"paste",(e=>n.onPaste(e)))
const C=e=>{const t=e.composedPath()[0]
if(!r.contains(t)&&!c.contains(t))return n.isFocused&&n.blur(),void n.inputState()
H(e,!0)}
var I=()=>{n.isOpen&&n.positionDropdown()}
K(document,"mousedown",C),K(window,"sroll",I,v),K(window,"resize",I,v),this._destroy=()=>{document.removeEventListener("mousedown",C),window.removeEventListener("sroll",I),window.removeEventListener("resize",I)},this.revertSettings={innerHTML:s.innerHTML,tabIndex:s.tabIndex},s.tabIndex=-1,P(s,{hidden:"hidden"}),s.insertAdjacentElement("afterend",n.wrapper),n.setValue(t.items),t.items=[],K(s,"invalid",(e=>{H(e),n.isInvalid||(n.isInvalid=!0,n.refreshState())})),n.updateOriginalInput(),n.refreshItems(),n.close(!1),n.inputState(),n.isSetup=!0,s.disabled&&n.disable(),n.on("change",this.onChange),_(s,"tomselected"),n.trigger("initialize"),!0===t.preload&&n.load(""),n.setup()}setup(){}setupOptions(e=[],t=[]){for(const t of e)this.registerOption(t)
for(const e of t)this.registerOptionGroup(e)}setupTemplates(){var e=this,t=e.settings.labelField,i=e.settings.optgroupLabelField,s={optgroup:e=>{let t=document.createElement("div")
return t.className="optgroup",t.appendChild(e.options),t},optgroup_header:(e,t)=>'<div class="optgroup-header">'+t(e[i])+"</div>",option:(e,i)=>"<div>"+i(e[t])+"</div>",item:(e,i)=>"<div>"+i(e[t])+"</div>",option_create:(e,t)=>'<div class="create">Add <strong>'+t(e.input)+"</strong>&hellip;</div>",no_results:()=>'<div class="no-results">No results found</div>',loading:()=>'<div class="spinner"></div>',not_loading:()=>{},dropdown:()=>"<div></div>"}
e.settings.render=Object.assign({},s,e.settings.render)}setupCallbacks(){var e,t,i={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",item_select:"onItemSelect",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"}
for(e in i)(t=this.settings[i[e]])&&this.on(e,t)}onClick(){var e=this
if(e.activeItems.length>0)return e.clearActiveItems(),void e.focus()
e.isFocused&&e.isOpen?e.blur():e.focus()}onMouseDown(){}onChange(){C(this.input,"input"),C(this.input,"change")}onPaste(e){var t=this
t.isFull()||t.isInputHidden||t.isLocked?H(e):t.settings.splitOn&&setTimeout((()=>{var e=t.inputValue()
if(e.match(t.settings.splitOn)){var i=e.trim().split(t.settings.splitOn)
for(const e of i)t.createItem(e)}}),0)}onKeyPress(e){var t=this
if(!t.isLocked){var i=String.fromCharCode(e.keyCode||e.which)
return t.settings.create&&"multi"===t.settings.mode&&i===t.settings.delimiter?(t.createItem(),void H(e)):void 0}H(e)}onKeyDown(e){var t=this
if(t.isLocked)9!==e.keyCode&&H(e)
else{switch(e.keyCode){case 65:if(B(q,e))return void t.selectAll()
break
case 27:return t.isOpen&&(H(e,!0),t.close()),void t.clearActiveItems()
case 40:if(!t.isOpen&&t.hasOptions)t.open()
else if(t.activeOption){let e=t.getAdjacent(t.activeOption,1)
e&&t.setActiveOption(e)}return void H(e)
case 38:if(t.activeOption){let e=t.getAdjacent(t.activeOption,-1)
e&&t.setActiveOption(e)}return void H(e)
case 13:return void(t.isOpen&&t.activeOption?(t.onOptionSelect(e,t.activeOption),H(e)):t.settings.create&&t.createItem()&&H(e))
case 37:return void t.advanceSelection(-1,e)
case 39:return void t.advanceSelection(1,e)
case 9:return void(t.settings.selectOnTab&&(t.isOpen&&t.activeOption&&(t.tab_key=!0,t.onOptionSelect(e,t.activeOption),H(e),t.tab_key=!1),t.settings.create&&t.createItem()&&H(e)))
case 8:case 46:return void t.deleteSelection(e)}t.isInputHidden&&!B(q,e)&&H(e)}}onKeyUp(e){var t=this
if(t.isLocked)H(e)
else{var i=t.inputValue()
t.lastValue!==i&&(t.lastValue=i,t.settings.shouldLoad.call(t,i)&&t.load(i),t.refreshOptions(),t.trigger("type",i))}}onFocus(e){var t=this,i=t.isFocused
if(t.isDisabled)return t.blur(),void H(e)
t.ignoreFocus||(t.isFocused=!0,"focus"===t.settings.preload&&t.load(""),i||t.trigger("focus"),t.activeItems.length||(t.showInput(),t.refreshOptions(!!t.settings.openOnFocus)),t.refreshState())}onBlur(){var e=this
if(e.isFocused){e.isFocused=!1,e.ignoreFocus=!1
var t=()=>{e.close(),e.setActiveItem(),e.setCaret(e.items.length),e.trigger("blur")}
e.settings.create&&e.settings.createOnBlur?e.createItem(null,!1,t):t()}}onOptionSelect(e,t){var i,s=this
t&&(t.parentElement&&t.parentElement.matches("[data-disabled]")||(t.classList.contains("create")?s.createItem(null,!0,(()=>{s.settings.closeAfterSelect&&s.close()})):void 0!==(i=t.dataset.value)&&(s.lastQuery=null,s.addItem(i),s.settings.closeAfterSelect&&s.close(),!s.settings.hideSelected&&e.type&&/click/.test(e.type)&&s.setActiveOption(t))))}onItemSelect(e,t){var i=this
return!i.isLocked&&"multi"===i.settings.mode&&(H(e),i.setActiveItem(t,e),!0)}canLoad(e){return!!this.settings.load&&!this.loadedSearches.hasOwnProperty(e)}load(e){const t=this
if(!t.canLoad(e))return
_(t.wrapper,t.settings.loadingClass),t.loading++
const i=t.loadCallback.bind(t)
t.settings.load.call(t,e,i)}loadCallback(e,t){const i=this
i.loading=Math.max(i.loading-1,0),i.lastQuery=null,i.clearActiveOption(),i.setupOptions(e,t),i.refreshOptions(i.isFocused&&!i.isInputHidden),i.loading||S(i.wrapper,i.settings.loadingClass),i.trigger("load",e,t)}setTextboxValue(e=""){var t=this.control_input
t.value!==e&&(t.value=e,C(t,"update"),this.lastValue=e)}getValue(){return this.is_select_tag&&this.input.hasAttribute("multiple")?this.items:this.items.join(this.settings.delimiter)}setValue(e,t){z(this,t?[]:["change"],(()=>{this.clear(t),this.addItems(e,t)}))}setMaxItems(e){0===e&&(e=null),this.settings.maxItems=e,this.refreshState()}setActiveItem(e,t){var i,s,n,o,r,l,a=this
if("single"!==a.settings.mode){if(!e)return a.clearActiveItems(),void(a.isFocused&&a.showInput())
if("click"===(i=t&&t.type.toLowerCase())&&B("shiftKey",t)&&a.activeItems.length){for(l=a.getLastActive(),(n=Array.prototype.indexOf.call(a.control.children,l))>(o=Array.prototype.indexOf.call(a.control.children,e))&&(r=n,n=o,o=r),s=n;s<=o;s++)e=a.control.children[s],-1===a.activeItems.indexOf(e)&&a.setActiveItemClass(e)
H(t)}else"click"===i&&B(q,t)||"keydown"===i&&B("shiftKey",t)?e.classList.contains("active")?a.removeActiveItem(e):a.setActiveItemClass(e):(a.clearActiveItems(),a.setActiveItemClass(e))
a.hideInput(),a.isFocused||a.focus()}}setActiveItemClass(e){const t=this,i=t.control.querySelector(".last-active")
i&&S(i,"last-active"),_(e,"active last-active"),t.trigger("item_select",e),-1==t.activeItems.indexOf(e)&&t.activeItems.push(e)}removeActiveItem(e){var t=this.activeItems.indexOf(e)
this.activeItems.splice(t,1),S(e,"active")}clearActiveItems(){S(this.activeItems,"active"),this.activeItems=[]}setActiveOption(e){e!==this.activeOption&&(this.clearActiveOption(),e&&(this.activeOption=e,P(this.control_input,{"aria-activedescendant":e.getAttribute("id")}),P(e,{"aria-selected":"true"}),_(e,"active"),this.scrollToOption(e)))}scrollToOption(e,t){if(!e)return
const i=this.dropdown_content,s=i.clientHeight,n=i.scrollTop||0,o=e.offsetHeight,r=e.getBoundingClientRect().top-i.getBoundingClientRect().top+n
r+o>s+n?this.scroll(r-s+o,t):r<n&&this.scroll(r,t)}scroll(e,t){const i=this.dropdown_content
t&&(i.style.scrollBehavior=t),i.scrollTop=e,i.style.scrollBehavior=""}clearActiveOption(){this.activeOption&&(S(this.activeOption,"active"),P(this.activeOption,{"aria-selected":null})),this.activeOption=null,P(this.control_input,{"aria-activedescendant":null})}selectAll(){"single"!==this.settings.mode&&(this.activeItems=this.controlChildren(),this.activeItems.length&&(_(this.activeItems,"active"),this.hideInput(),this.close()),this.focus())}inputState(){var e=this
e.settings.controlInput||(e.activeItems.length>0||!e.isFocused&&this.settings.hidePlaceholder&&e.items.length>0?(e.setTextboxValue(),e.isInputHidden=!0,_(e.wrapper,"input-hidden")):(e.isInputHidden=!1,S(e.wrapper,"input-hidden")))}hideInput(){this.inputState()}showInput(){this.inputState()}inputValue(){return this.control_input.value.trim()}focus(){var e=this
e.isDisabled||(e.ignoreFocus=!0,e.control_input.focus(),setTimeout((()=>{e.ignoreFocus=!1,e.onFocus()}),0))}blur(){this.control_input.blur(),this.onBlur()}getScoreFunction(e){return this.sifter.getScoreFunction(e,this.getSearchOptions())}getSearchOptions(){var e=this.settings,t=e.sortField
return"string"==typeof e.sortField&&(t=[{field:e.sortField}]),{fields:e.searchField,conjunction:e.searchConjunction,sort:t,nesting:e.nesting}}search(e){var t,i,s,n=this,o=this.getSearchOptions()
if(n.settings.score&&"function"!=typeof(s=n.settings.score.call(n,e)))throw new Error('Tom Select "score" setting must be a function that returns a function')
if(e!==n.lastQuery?(n.lastQuery=e,i=n.sifter.search(e,Object.assign(o,{score:s})),n.currentResults=i):i=Object.assign({},n.currentResults),n.settings.hideSelected)for(t=i.items.length-1;t>=0;t--){let e=V(i.items[t].id)
e&&-1!==n.items.indexOf(e)&&i.items.splice(t,1)}return i}refreshOptions(e=!0){var t,i,s,n,o,r,l,a,c,d,p
const u={},h=[]
var g,v=this,f=v.inputValue(),m=v.search(f),y=v.activeOption,O=v.settings.shouldOpen||!1,b=v.dropdown_content
for(y&&(c=y.dataset.value,d=y.closest("[data-group]")),n=m.items.length,"number"==typeof v.settings.maxOptions&&(n=Math.min(n,v.settings.maxOptions)),n>0&&(O=!0),t=0;t<n;t++){let e=m.items[t].id,n=v.options[e],l=v.getOption(e,!0)
for(v.settings.hideSelected||l.classList.toggle("selected",v.items.includes(e)),o=n[v.settings.optgroupField]||"",i=0,s=(r=Array.isArray(o)?o:[o])&&r.length;i<s;i++)o=r[i],v.optgroups.hasOwnProperty(o)||(o=""),u.hasOwnProperty(o)||(u[o]=document.createDocumentFragment(),h.push(o)),i>0&&(l=l.cloneNode(!0),P(l,{id:n.$id+"-clone-"+i,"aria-selected":null}),l.classList.add("ts-cloned"),S(l,"active")),c==e&&d&&d.dataset.group===o&&(y=l),u[o].appendChild(l)}for(o of(this.settings.lockOptgroupOrder&&h.sort(((e,t)=>(v.optgroups[e]&&v.optgroups[e].$order||0)-(v.optgroups[t]&&v.optgroups[t].$order||0))),l=document.createDocumentFragment(),h))if(v.optgroups.hasOwnProperty(o)&&u[o].children.length){let e=document.createDocumentFragment(),t=v.render("optgroup_header",v.optgroups[o])
U(e,t),U(e,u[o])
let i=v.render("optgroup",{group:v.optgroups[o],options:e})
U(l,i)}else U(l,u[o])
if(b.innerHTML="",U(b,l),v.settings.highlight&&(g=b.querySelectorAll("span.highlight"),Array.prototype.forEach.call(g,(function(e){var t=e.parentNode
t.replaceChild(e.firstChild,e),t.normalize()})),m.query.length&&m.tokens.length))for(const e of m.tokens)T(b,e.regex)
var w=e=>{let t=v.render(e,{input:f})
return t&&(O=!0,b.insertBefore(t,b.firstChild)),t}
if(v.settings.shouldLoad.call(v,f)?v.loading?w("loading"):0===m.items.length&&w("no_results"):w("not_loading"),(a=v.canCreate(f))&&(p=w("option_create")),v.hasOptions=m.items.length>0||a,O){if(m.items.length>0){if(!b.contains(y)&&"single"===v.settings.mode&&v.items.length&&(y=v.getOption(v.items[0])),!b.contains(y)){let e=0
p&&!v.settings.addPrecedence&&(e=1),y=v.selectable()[e]}}else p&&(y=p)
e&&!v.isOpen&&(v.open(),v.scrollToOption(y,"auto")),v.setActiveOption(y)}else v.clearActiveOption(),e&&v.isOpen&&v.close(!1)}selectable(){return this.dropdown_content.querySelectorAll("[data-selectable]")}addOption(e){var t,i=this
if(Array.isArray(e))for(const t of e)i.addOption(t)
else(t=i.registerOption(e))&&(i.userOptions[t]=!0,i.lastQuery=null,i.trigger("option_add",t,e))}registerOption(e){var t=V(e[this.settings.valueField])
return null!==t&&!this.options.hasOwnProperty(t)&&(e.$order=e.$order||++this.order,e.$id=this.inputId+"-opt-"+e.$order,this.options[t]=e,t)}registerOptionGroup(e){var t=V(e[this.settings.optgroupValueField])
return null!==t&&(e.$order=e.$order||++this.order,this.optgroups[t]=e,t)}addOptionGroup(e,t){var i
t[this.settings.optgroupValueField]=e,(i=this.registerOptionGroup(t))&&this.trigger("optgroup_add",i,t)}removeOptionGroup(e){this.optgroups.hasOwnProperty(e)&&(delete this.optgroups[e],this.clearCache(),this.trigger("optgroup_remove",e))}clearOptionGroups(){this.optgroups={},this.clearCache(),this.trigger("optgroup_clear")}updateOption(e,t){const i=this
var s,n
const o=V(e)
if(null===o)return
const r=V(t[i.settings.valueField]),l=i.getOption(o),a=i.getItem(o)
if(i.options.hasOwnProperty(o)){if("string"!=typeof r)throw new Error("Value must be set in option data")
if(t.$order=t.$order||i.options[o].$order,delete i.options[o],i.uncacheValue(r),i.uncacheValue(o,!1),i.options[r]=t,l){if(i.dropdown_content.contains(l)){const e=i._render("option",t)
E(l,e),i.activeOption===l&&i.setActiveOption(e)}l.remove()}a&&(-1!==(n=i.items.indexOf(o))&&i.items.splice(n,1,r),s=i._render("item",t),a.classList.contains("active")&&_(s,"active"),E(a,s)),i.lastQuery=null}}removeOption(e,t){const i=this
e=N(e),i.uncacheValue(e),delete i.userOptions[e],delete i.options[e],i.lastQuery=null,i.trigger("option_remove",e),i.removeItem(e,t)}clearOptions(){this.loadedSearches={},this.userOptions={},this.clearCache()
var e={}
for(let t in this.options)this.options.hasOwnProperty(t)&&this.items.indexOf(t)>=0&&(e[t]=this.options[t])
this.options=this.sifter.items=e,this.lastQuery=null,this.trigger("option_clear")}uncacheValue(e,t=!0){const i=this,s=i.renderCache.item,n=i.renderCache.option
if(s&&delete s[e],n&&delete n[e],t){const t=i.getOption(e)
t&&t.remove()}}getOption(e,t=!1){var i=V(e),s=this.rendered("option",i)
return!s&&t&&null!==i&&(s=this._render("option",this.options[i])),s}getAdjacent(e,t,i="option"){var s
if(!e)return null
s="item"==i?this.controlChildren():this.dropdown_content.querySelectorAll("[data-selectable]")
for(let i=0;i<s.length;i++)if(s[i]==e)return t>0?s[i+1]:s[i-1]
return null}getItem(e){if("object"==typeof e)return e
var t=V(e)
return null!==t?this.control.querySelector(`[data-value="${Q(t)}"]`):null}addItems(e,t){var i=this,s=Array.isArray(e)?e:[e]
for(let e=0,n=(s=s.filter((e=>-1===i.items.indexOf(e)))).length;e<n;e++)i.isPending=e<n-1,i.addItem(s[e],t)}addItem(e,t){z(this,t?[]:["change"],(()=>{var i,s
const n=this,o=n.settings.mode,r=V(e)
if((!r||-1===n.items.indexOf(r)||("single"===o&&n.close(),"single"!==o&&n.settings.duplicates))&&null!==r&&n.options.hasOwnProperty(r)&&("single"===o&&n.clear(t),"multi"!==o||!n.isFull())){if(i=n._render("item",n.options[r]),n.control.contains(i)&&(i=i.cloneNode(!0)),s=n.isFull(),n.items.splice(n.caretPos,0,r),n.insertAtCaret(i),n.isSetup){let e=n.selectable()
if(!n.isPending&&n.settings.hideSelected){let e=n.getOption(r),t=n.getAdjacent(e,1)
t&&n.setActiveOption(t)}n.isPending||n.refreshOptions(n.isFocused&&"single"!==o),!e.length||n.isFull()?n.close():n.isPending||n.positionDropdown(),n.trigger("item_add",r,i),n.isPending||n.updateOriginalInput({silent:t})}(!n.isPending||!s&&n.isFull())&&n.refreshState()}}))}removeItem(e=null,t){const i=this
if(!(e=i.getItem(e)))return
var s,n
const o=e.dataset.value
s=L(e),e.remove(),e.classList.contains("active")&&(n=i.activeItems.indexOf(e),i.activeItems.splice(n,1),S(e,"active")),i.items.splice(s,1),i.lastQuery=null,!i.settings.persist&&i.userOptions.hasOwnProperty(o)&&i.removeOption(o,t),s<i.caretPos&&i.setCaret(i.caretPos-1),i.updateOriginalInput({silent:t}),i.refreshState(),i.positionDropdown(),i.trigger("item_remove",o,e)}createItem(e=null,t=!0,i=(()=>{})){var s,n=this,o=n.caretPos
if(e=e||n.inputValue(),!n.canCreate(e))return i(),!1
n.lock()
var r=!1,l=e=>{if(n.unlock(),!e||"object"!=typeof e)return i()
var s=V(e[n.settings.valueField])
if("string"!=typeof s)return i()
n.setTextboxValue(),n.addOption(e),n.setCaret(o),n.addItem(s),n.refreshOptions(t&&"single"!==n.settings.mode),i(e),r=!0}
return s="function"==typeof n.settings.create?n.settings.create.call(this,e,l):{[n.settings.labelField]:e,[n.settings.valueField]:e},r||l(s),!0}refreshItems(){var e=this
e.lastQuery=null,e.isSetup&&e.addItems(e.items),e.updateOriginalInput(),e.refreshState()}refreshState(){var e=this
e.refreshValidityState()
var t=e.isFull(),i=e.isLocked
e.wrapper.classList.toggle("rtl",e.rtl)
var s,n=e.control.classList
n.toggle("focus",e.isFocused),n.toggle("disabled",e.isDisabled),n.toggle("required",e.isRequired),n.toggle("invalid",e.isInvalid),n.toggle("locked",i),n.toggle("full",t),n.toggle("not-full",!t),n.toggle("input-active",e.isFocused&&!e.isInputHidden),n.toggle("dropdown-active",e.isOpen),n.toggle("has-options",(s=e.options,0===Object.keys(s).length)),n.toggle("has-items",e.items.length>0)}refreshValidityState(){var e=this
if(e.input.checkValidity){this.isRequired&&(e.input.required=!0)
var t=!e.input.checkValidity()
e.isInvalid=t,e.control_input.required=t,this.isRequired&&(e.input.required=!t)}}isFull(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems}updateOriginalInput(e={}){const t=this
var i,s,n,o
if(t.is_select_tag){const e=[]
function r(i,s,n){return i||(i=w('<option value="'+D(s)+'">'+D(n)+"</option>")),t.input.prepend(i),e.push(i),P(i,{selected:"true"}),i.selected=!0,i}if(t.input.querySelectorAll("option[selected]").forEach((e=>{P(e,{selected:null}),e.selected=!1})),0!=t.items.length||"single"!=t.settings.mode||t.isRequired)for(i=t.items.length-1;i>=0;i--)if(s=t.items[i],o=(n=t.options[s])[t.settings.labelField]||"",e.includes(n.$option)){r(t.input.querySelector(`option[value="${Q(s)}"]:not([selected])`),s,o)}else n.$option=r(n.$option,s,o)
else r(t.input.querySelector('option[value=""]'),"","")}else t.input.value=t.getValue()
t.isSetup&&(e.silent||t.trigger("change",t.getValue()))}open(){var e=this
e.isLocked||e.isOpen||"multi"===e.settings.mode&&e.isFull()||(e.isOpen=!0,P(e.control_input,{"aria-expanded":"true"}),e.refreshState(),I(e.dropdown,{visibility:"hidden",display:"block"}),e.positionDropdown(),I(e.dropdown,{visibility:"visible",display:"block"}),e.focus(),e.trigger("dropdown_open",e.dropdown))}close(e=!0){var t=this,i=t.isOpen
e&&(t.setTextboxValue(),"single"===t.settings.mode&&t.items.length&&(t.hideInput(),t.tab_key||t.blur())),t.isOpen=!1,P(t.control_input,{"aria-expanded":"false"}),I(t.dropdown,{display:"none"}),t.settings.hideSelected&&t.clearActiveOption(),t.refreshState(),i&&t.trigger("dropdown_close",t.dropdown)}positionDropdown(){if("body"===this.settings.dropdownParent){var e=this.control,t=e.getBoundingClientRect(),i=e.offsetHeight+t.top+window.scrollY,s=t.left+window.scrollX
I(this.dropdown,{width:t.width+"px",top:i+"px",left:s+"px"})}}clear(e){var t=this
if(t.items.length){var i=t.controlChildren()
for(const e of i)t.removeItem(e,!0)
t.showInput(),e||t.updateOriginalInput(),t.trigger("clear")}}insertAtCaret(e){var t=this,i=Math.min(t.caretPos,t.items.length),s=t.control
0===i?s.insertBefore(e,s.firstChild):s.insertBefore(e,s.children[i]),t.setCaret(i+1)}deleteSelection(e){var t,i,s,n,o,r=this
t=e&&8===e.keyCode?-1:1,i={start:(o=r.control_input).selectionStart||0,length:(o.selectionEnd||0)-(o.selectionStart||0)}
const l=[]
if(r.activeItems.length){n=F(r.activeItems,t),s=L(n),t>0&&s++
for(const e of r.activeItems)l.push(e)}else if((r.isFocused||"single"===r.settings.mode)&&r.items.length){const e=r.controlChildren()
t<0&&0===i.start&&0===i.length?l.push(e[r.caretPos-1]):t>0&&i.start===r.inputValue().length&&l.push(e[r.caretPos])}const a=l.map((e=>e.dataset.value))
if(!a.length||"function"==typeof r.settings.onDelete&&!1===r.settings.onDelete.call(r,a,e))return!1
for(H(e,!0),void 0!==s&&r.setCaret(s);l.length;)r.removeItem(l.pop())
return r.showInput(),r.positionDropdown(),r.refreshOptions(!1),!0}advanceSelection(e,t){var i,s,n,o=this
o.rtl&&(e*=-1),o.inputValue().length||(B(q,t)||B("shiftKey",t)?(n=(s=o.getLastActive(e))?s.classList.contains("active")?o.getAdjacent(s,e,"item"):s:e>0?o.control_input.nextElementSibling:o.control_input.previousElementSibling)&&(n.classList.contains("active")&&o.removeActiveItem(s),o.setActiveItemClass(n)):o.isFocused&&!o.activeItems.length?o.setCaret(o.caretPos+e):(s=o.getLastActive(e))&&(i=L(s),o.setCaret(e>0?i+1:i),o.setActiveItem()))}getLastActive(e){let t=this.control.querySelector(".last-active")
if(t)return t
var i=this.control.querySelectorAll(".active")
return i?F(i,e):void 0}setCaret(e){var t=this
"single"===t.settings.mode||t.settings.controlInput?e=t.items.length:(e=Math.max(0,Math.min(t.items.length,e)))==t.caretPos||t.isPending||t.controlChildren().forEach(((i,s)=>{s<e?t.control_input.insertAdjacentElement("beforebegin",i):t.control.appendChild(i)})),t.caretPos=e}controlChildren(){return Array.from(this.control.getElementsByClassName(this.settings.itemClass))}lock(){this.close(),this.isLocked=!0,this.refreshState()}unlock(){this.isLocked=!1,this.refreshState()}disable(){var e=this
e.input.disabled=!0,e.control_input.disabled=!0,e.control_input.tabIndex=-1,e.isDisabled=!0,e.lock()}enable(){var e=this
e.input.disabled=!1,e.control_input.disabled=!1,e.control_input.tabIndex=e.tabIndex,e.isDisabled=!1,e.unlock()}destroy(){var e=this,t=e.revertSettings
e.trigger("destroy"),e.off(),e.wrapper.remove(),e.dropdown.remove(),e.input.innerHTML=t.innerHTML,e.input.tabIndex=t.tabIndex,S(e.input,"tomselected"),P(e.input,{hidden:null}),e.input.required=this.isRequired,e._destroy(),delete e.input.tomselect}render(e,t){return"function"!=typeof this.settings.render[e]?null:this._render(e,t)}_render(e,t){var i,s,n=""
const o=this
return("option"===e||"item"===e)&&(n=N(t[o.settings.valueField]),s=o.rendered(e,n))||null==(s=o.settings.render[e].call(this,t,D))||(s=w(s),"option"===e||"option_create"===e?t[o.settings.disabledField]?P(s,{"aria-disabled":"true"}):P(s,{"data-selectable":""}):"optgroup"===e&&(i=t.group[o.settings.optgroupValueField],P(s,{"data-group":i}),t.group[o.settings.disabledField]&&P(s,{"data-disabled":""})),"option"!==e&&"item"!==e||(P(s,{"data-value":n}),"item"===e?_(s,o.settings.itemClass):(_(s,o.settings.optionClass),P(s,{role:"option",id:t.$id})),o.renderCache[e][n]=s)),s}rendered(e,t){return null!==t&&this.renderCache[e].hasOwnProperty(t)?this.renderCache[e][t]:null}clearCache(e){var t=this
for(let e in t.options){const i=t.getOption(e)
i&&i.remove()}void 0===e?t.renderCache={item:{},option:{}}:t.renderCache[e]={}}canCreate(e){return this.settings.create&&e.length>0&&this.settings.createFilter.call(this,e)}hook(e,t,i){var s=this,n=s[t]
s[t]=function(){var t,o
return"after"===e&&(t=n.apply(s,arguments)),o=i.apply(s,arguments),"instead"===e?o:("before"===e&&(t=n.apply(s,arguments)),t)}}}return W.define("change_listener",(function(){const e=this,t=t=>t.join(e.settings.delimiter)
K(e.input,"change",(()=>{var i=G(e.input,{delimiter:e.settings.delimiter})
t(e.items)!=t(i.items)&&(e.setupOptions(i.options,i.optgroups),e.setValue(i.items))}))})),W.define("checkbox_options",(function(){var e=this,t=e.onOptionSelect
e.settings.hideSelected=!1
var i=function(e){setTimeout((()=>{var t=e.querySelector("input")
e.classList.contains("selected")?t.checked=!0:t.checked=!1}),1)}
e.hook("after","setupTemplates",(()=>{var t=e.settings.render.option
e.settings.render.option=(i,s)=>{var n=w(t.call(e,i,s)),o=document.createElement("input")
o.addEventListener("click",(function(e){H(e)})),o.type="checkbox"
const r=V(i[e.settings.valueField])
return r&&e.items.indexOf(r)>-1&&(o.checked=!0),n.prepend(o),n}})),e.on("item_remove",(t=>{var s=e.getOption(t)
s&&(s.classList.remove("selected"),i(s))})),e.hook("instead","onOptionSelect",((s,n)=>{if(n.classList.contains("selected"))return n.classList.remove("selected"),e.removeItem(n.dataset.value),e.refreshOptions(),void H(s,!0)
t.call(e,s,n),i(n)}))})),W.define("clear_button",(function(e){const t=this,i=Object.assign({className:"clear-button",title:"Clear All",html:e=>`<div class="${e.className}" title="${e.title}">&times;</div>`},e)
t.on("initialize",(()=>{var e=w(i.html(i))
e.addEventListener("click",(e=>{t.clear(),e.preventDefault(),e.stopPropagation()})),t.control.appendChild(e)}))})),W.define("drag_drop",(function(){var e=this
if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".')
if("multi"===e.settings.mode){var t=e.lock,i=e.unlock
e.hook("instead","lock",(()=>{var i=$(e.control).data("sortable")
return i&&i.disable(),t.call(e)})),e.hook("instead","unlock",(()=>{var t=$(e.control).data("sortable")
return t&&t.enable(),i.call(e)})),e.on("initialize",(()=>{var t=$(e.control).sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:e.isLocked,start:(e,i)=>{i.placeholder.css("width",i.helper.css("width")),t.css({overflow:"visible"})},stop:()=>{t.css({overflow:"hidden"})
var i=[]
t.children("[data-value]").each((function(){this.dataset.value&&i.push(this.dataset.value)})),e.setValue(i)}})}))}})),W.define("dropdown_header",(function(e){const t=this,i=Object.assign({title:"Untitled",headerClass:"dropdown-header",titleRowClass:"dropdown-header-title",labelClass:"dropdown-header-label",closeClass:"dropdown-header-close",html:e=>'<div class="'+e.headerClass+'"><div class="'+e.titleRowClass+'"><span class="'+e.labelClass+'">'+e.title+'</span><a class="'+e.closeClass+'">&times;</a></div></div>'},e)
t.on("initialize",(()=>{var e=w(i.html(i)),s=e.querySelector("."+i.closeClass)
s&&s.addEventListener("click",(e=>{H(e,!0),t.close()})),t.dropdown.insertBefore(e,t.dropdown.firstChild)}))})),W.define("dropdown_input",(function(){var e=this,t=e.settings.controlInput||'<input type="text" autocomplete="no" class="dropdown-input" />'
t=w(t),e.settings.placeholder&&P(t,{placeholder:e.settings.placeholder}),e.settings.controlInput=t,e.settings.shouldOpen=!0,e.on("initialize",(()=>{K(e.wrapper,"focus",(t=>{e.onFocus(t)}))
const i=()=>{P(e.wrapper,{tabindex:e.input.disabled?"-1":e.tabIndex})}
e.on("dropdown_close",i),e.on("dropdown_open",(()=>P(e.wrapper,{tabindex:"-1"}))),i(),K(e.wrapper,"keypress",(t=>{if(!e.control.contains(t.target)&&!e.dropdown.contains(t.target))switch(t.keyCode){case 13:return void e.onClick()}}))
let s=w('<div class="dropdown-input-wrap">')
s.appendChild(t),e.dropdown.insertBefore(s,e.dropdown.firstChild)}))})),W.define("input_autogrow",(function(){var e=this
e.on("initialize",(()=>{var t=document.createElement("span"),i=e.control_input
t.style.cssText="position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ",e.wrapper.appendChild(t)
for(const e of["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"])t.style[e]=i.style[e]
var s=()=>{e.items.length>0?(t.textContent=i.value,i.style.width=t.clientWidth+"px"):i.style.width=""}
s(),e.on("update item_add item_remove",s),K(i,"input",s),K(i,"keyup",s),K(i,"blur",s),K(i,"update",s)}))})),W.define("no_backspace_delete",(function(){var e=this,t=e.deleteSelection
this.hook("instead","deleteSelection",(i=>!!e.activeItems.length&&t.call(e,i)))})),W.define("no_active_items",(function(){this.hook("instead","setActiveItem",(()=>{})),this.hook("instead","selectAll",(()=>{}))})),W.define("optgroup_columns",(function(){var e=this,t=e.onKeyDown
e.hook("instead","onKeyDown",(i=>{var s,n,o,r
if(!e.isOpen||37!==i.keyCode&&39!==i.keyCode)return t.call(e,i)
r=k(e.activeOption,"[data-group]"),s=L(e.activeOption,"[data-selectable]"),r&&(r=37===i.keyCode?r.previousSibling:r.nextSibling)&&(n=(o=r.querySelectorAll("[data-selectable]"))[Math.min(o.length-1,s)])&&e.setActiveOption(n)}))})),W.define("remove_button",(function(e){const t=Object.assign({label:"&times;",title:"Remove",className:"remove",append:!0},e)
var i=this
if(t.append){var s='<a href="javascript:void(0)" class="'+t.className+'" tabindex="-1" title="'+D(t.title)+'">'+t.label+"</a>"
i.hook("after","setupTemplates",(()=>{var e=i.settings.render.item
i.settings.render.item=(t,n)=>{var o=w(e.call(i,t,n)),r=w(s)
return o.appendChild(r),K(r,"mousedown",(e=>{H(e,!0)})),K(r,"click",(e=>{if(H(e,!0),!i.isLocked){var t=o.dataset.value
i.removeItem(t),i.refreshOptions(!1)}})),o}}))}})),W.define("restore_on_backspace",(function(e){const t=this,i=Object.assign({text:e=>e[t.settings.labelField]},e)
t.on("item_remove",(function(e){if(""===t.control_input.value.trim()){var s=t.options[e]
s&&t.setTextboxValue(i.text.call(t,s))}}))})),W.define("virtual_scroll",(function(){const e=this,t=e.canLoad,i=e.clearActiveOption,s=e.loadCallback
var n,o={},r=!1
if(!e.settings.firstUrl)throw"virtual_scroll plugin requires a firstUrl() method"
function l(t){return!("number"==typeof e.settings.maxOptions&&n.children.length>=e.settings.maxOptions)&&!(!(t in o)||!o[t])}e.settings.sortField=[{field:"$order"},{field:"$score"}],e.setNextUrl=function(e,t){o[e]=t},e.getUrl=function(t){if(t in o){const e=o[t]
return o[t]=!1,e}return o={},e.settings.firstUrl(t)},e.hook("instead","clearActiveOption",(()=>{if(!r)return i.call(e)})),e.hook("instead","canLoad",(i=>i in o?l(i):t.call(e,i))),e.hook("instead","loadCallback",((t,i)=>{r||e.clearOptions(),s.call(e,t,i),r=!1})),e.hook("after","refreshOptions",(()=>{const t=e.lastValue
var i
l(t)?(i=e.render("loading_more",{query:t}))&&i.setAttribute("data-selectable",""):t in o&&!n.querySelector(".no-results")&&(i=e.render("no_more_results",{query:t})),i&&(_(i,e.settings.optionClass),n.append(i))})),e.on("initialize",(()=>{n=e.dropdown_content,e.settings.render=Object.assign({},{loading_more:function(){return'<div class="loading-more-results">Loading more results ... </div>'},no_more_results:function(){return'<div class="no-more-results">No more results</div>'}},e.settings.render),n.addEventListener("scroll",(function(){n.clientHeight/(n.scrollHeight-n.scrollTop)<.95||l(e.lastValue)&&(r||(r=!0,e.load.call(e,e.lastValue)))}))}))})),W}))
var tomSelect=function(e,t){return new TomSelect(e,t)}
;
/*! Sortable 1.14.0 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function A(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function f(t,e,n){t.removeEventListener(e,n,!y&&d)}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=M(t,!0),i=k(t)[e];o;){var r=k(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height)}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","")}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=A({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var H=[],L={initializeByDefault:!0},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](A({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](A({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=A(A({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,A({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=!0},cloneNowShown:function(){et=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n})}},o))}var G=["evt"];function U(t){W(A({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t))}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=!1,wt=!1,Et=[],Dt=!1,St=!1,_t=[],Ct=!1,Tt=[],xt="undefined"!=typeof document,Ot=n,Mt=w||y?"cssFloat":"float",At=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},kt=function(){!Nt&&Z&&P(Z,"display","none")},Rt=function(){!Nt&&Z&&P(Z,"display","")};xt&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=!1},!0);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o)}}var i,r,a}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target)}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,!1))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,!1))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt)}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;yt=!1,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,!1),I(q,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt()}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,!0,Ot,!0,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt)}I(Z=q.cloneNode(!0),n.ghostClass,!1),I(Z,n.fallbackClass,!0),I(Z,n.dragClass,!0),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).draggable=!1,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,!1),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}))}),e||I(q,i.dragClass,!0),e?(wt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=!0,u&&P(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=!1;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,!0),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(!1);if(wt=!1,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(!0);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(!1);if((l=g&&a===n.target?g:l)&&(w=k(l)),!1!==Ft($,a,q,o,l,w,n,!!l))return x(),a.appendChild(q),V=a,M(),O(!0)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,!0));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,!0);if(m===q)return O(!1);if(w=k(l=m),!1!==Ft($,a,q,o,l,w,n,!1))return x(),a.insertBefore(q,m),V=a,M(),O(!0)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=!1,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?!0:Dt)n=!0;else if(1===mt?s<t+vt:o-vt<s)return-mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(!1);mt=v;var C=(gt=l).nextElementSibling,E=!1,D=Ft($,a,q,o,l,w,n,E=1===v);if(!1!==D)return 1!==D&&-1!==D||(E=1===D),Ct=!0,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),M(),O(!0)}if(a.contains(q))return O(!1)}return!1}function T(t,e){z(t,f,A({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:M},e))}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,!1),I(q,e.ghostClass,!0)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function M(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,!1),I(q,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=!0}),Tt.length=ut=dt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return N(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n)},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=!0))},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=!1)):this._hideClone()}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault()}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return!!N(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=A(A({},Bt.utils),t.utils)),K.mount(t)})},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.14.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid)}),Zt=[]}function Jt(){clearInterval(Vt)}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,!0===Wt&&(Wt=M(e,!0)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));$t=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=!1,he=!1,fe=!1;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t)})}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=M(t,!0),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Qt()),ee(e,i.options,t,n)},10),Gt=r,Ut=a)):this.options.bubbleScroll&&M(t,!0)!==O()?ee(e,this.options,M(t,!1),!1):Qt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;te=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=!1!==o(n)?(I(n,i.swapClass,!0),n):null,t&&t!==te&&I(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,!1),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){te=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag)),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ae=t},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=!1,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,!1),ce[n]===ae&&I(ue[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(!1,n),ue.forEach(function(t){P(t,"display","")}),e(),se=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),se=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t)}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute")}),e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&C(t,e)}),de=he=!0)),t.animateAll(function(){de=he=!1,n.options.animation&&ce.forEach(function(t){T(t)}),n.options.sort&&ge()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),he=!1,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=!1,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t))}),he=!0),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,!0),le.top-=e.f,le.left-=e.e)},dragOverAnimationComplete:function(){he&&(he=!1,ge())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae,originalEvt:e});else{if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae,originalEvt:e}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,!0),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g],originalEvt:e}))}else ie=ae;re=s}fe&&this.isMultiDrag&&(he=!1,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++}),a===B(ae)&&(d=!1,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=!0)}),d&&r("update"))),ce.forEach(function(t){T(t)}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,ue.length=0},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,!1),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,!0),ce.push(t))},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,!1),ce.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e})}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt});
!(function(t, n) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = n())
		: 'function' == typeof define && define.amd
		? define([], n)
		: 'object' == typeof exports
		? (exports.HSToggleSwitch = n())
		: (t.HSToggleSwitch = n());
})(window, function() {
	return (
		(d = {
			'./node_modules/countup.js/dist/countUp.min.js': function(
				module,
				__webpack_exports__,
				__webpack_require__
			) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountUp", function() { return CountUp; });\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+="").split("."))[0],e=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign(__assign({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();\n\n//# sourceURL=webpack://HSToggleSwitch/./node_modules/countup.js/dist/countUp.min.js?'
				);
			},
			'./src/js/hs-toggle-switch.js': function(module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HSToggleSwitch; });\n/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSToggleSwitch Plugin\n* @version: 1.0.0 (Mon, 12 Dec 2019)\n* @requires: countup.js v2.0.4\n* @author: HtmlStream\n* @event-namespace: .HSToggleSwitch\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar dataAttributeName = \'data-hs-toggle-switch-options\';\nvar dataAttributeItemName = \'data-hs-toggle-switch-item-options\';\nvar defaults = {\n  mode: \'toggle-count\',\n  targetSelector: undefined,\n  isChecked: false,\n  eventType: \'change\'\n};\n\nvar HSToggleSwitch = /*#__PURE__*/function () {\n  function HSToggleSwitch(el, options, id) {\n    _classCallCheck(this, HSToggleSwitch);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSToggleSwitch, [{\n    key: "_init",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty(\'$initializedEl\')) {\n          return "continue";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.isChecked = _$el.checked;\n        _options.$targets = document.querySelectorAll(_options.targetSelector);\n\n        if (_options.mode === \'toggle-count\') {\n          if (_options.isChecked) {\n            _options.isChecked = true;\n\n            _options.$targets.forEach(function ($target) {\n              var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n              $target.innerHTML = currentDataSettings.max;\n            });\n          }\n\n          _$el.addEventListener(_options.eventType, function () {\n            return that._toggleCount(_options);\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === "continue") continue;\n      }\n    } // Toggle Count\n\n  }, {\n    key: "_toggleCount",\n    value: function _toggleCount(settings) {\n      if (settings.isChecked) {\n        this._countDownEach(settings);\n      } else {\n        this._countUpEach(settings);\n      }\n    }\n  }, {\n    key: "_countUpEach",\n    value: function _countUpEach(settings) {\n      var _this = this;\n\n      settings.isChecked = true;\n      settings.$targets.forEach(function ($target) {\n        var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n        var currentDefaults = {\n          duration: .5,\n          useEasing: false\n        },\n            currentOptions = {};\n        currentOptions = Object.assign({}, currentDefaults, currentDataSettings);\n\n        _this._countUp($target, currentOptions);\n      });\n    }\n  }, {\n    key: "_countDownEach",\n    value: function _countDownEach(settings) {\n      var _this2 = this;\n\n      settings.isChecked = false;\n      settings.$targets.forEach(function ($target) {\n        var currentDataSettings = $target.hasAttribute(dataAttributeItemName) ? JSON.parse($target.getAttribute(dataAttributeItemName)) : {};\n        var currentDefaults = {\n          duration: .5,\n          useEasing: false\n        },\n            currentOptions = {};\n        currentOptions = Object.assign({}, currentDefaults, currentDataSettings);\n\n        _this2._countDown($target, currentOptions);\n      });\n    }\n  }, {\n    key: "_countUp",\n    value: function _countUp(el, data) {\n      var defaults = {\n        startVal: data.min\n      };\n      var options = Object.assign({}, defaults, data);\n      var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__["CountUp"](el, data.max, options);\n      countUp.start();\n    }\n  }, {\n    key: "_countDown",\n    value: function _countDown(el, data) {\n      var defaults = {\n        startVal: data.max\n      };\n      var options = Object.assign({}, defaults, data);\n      var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__["CountUp"](el, data.min, options);\n      countUp.start();\n    }\n  }, {\n    key: "addToCollection",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: "getItem",\n    value: function getItem(item) {\n      if (typeof item === \'number\') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSToggleSwitch;\n}();\n\n\n\n//# sourceURL=webpack://HSToggleSwitch/./src/js/hs-toggle-switch.js?'
				);
			}
		}),
		(e = {}),
		(f.m = d),
		(f.c = e),
		(f.d = function(t, n, e) {
			f.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
		}),
		(f.r = function(t) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(f.t = function(n, t) {
			if ((1 & t && (n = f(n)), 8 & t)) return n;
			if (4 & t && 'object' == typeof n && n && n.__esModule) return n;
			var e = Object.create(null);
			if (
				(f.r(e),
				Object.defineProperty(e, 'default', { enumerable: !0, value: n }),
				2 & t && 'string' != typeof n)
			)
				for (var i in n)
					f.d(
						e,
						i,
						function(t) {
							return n[t];
						}.bind(null, i)
					);
			return e;
		}),
		(f.n = function(t) {
			var n =
				t && t.__esModule
					? function() {
							return t.default;
					  }
					: function() {
							return t;
					  };
			return f.d(n, 'a', n), n;
		}),
		(f.o = function(t, n) {
			return Object.prototype.hasOwnProperty.call(t, n);
		}),
		(f.p = ''),
		f((f.s = './src/js/hs-toggle-switch.js')).default
	);
	function f(t) {
		if (e[t]) return e[t].exports;
		var n = (e[t] = { i: t, l: !1, exports: {} });
		return d[t].call(n.exports, n, n.exports, f), (n.l = !0), n.exports;
	}
	var d, e;
});
/*
* Flatpickr wrapper
* @version: 3.0.0 (Mon, 13 Jul 2021)
* @requires: flatpickr v4.6.9
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSFlatpickr
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2021 Htmlstream
*/

HSCore.components.HSFlatpickr = {
	collection: [],

	dataAttributeName: 'data-hs-flatpickr-options',

	defaults: {
		mode: 'single',
		dateFormat: 'd M Y',
		maxDate: false,
		locale: {
			firstDayOfWeek: 1,
			weekdays: {
				shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
			},
			rangeSeparator: ' - '
		},
		nextArrow: '<i class="bi-chevron-right flatpickr-custom-arrow"></i>',
		prevArrow: '<i class="bi-chevron-left flatpickr-custom-arrow"></i>',
		disableMobile: true
	},

	init: function (el, options, id) {
		const that = this;
		let elems;

		if (el instanceof HTMLElement) {
			elems = [el]
		} else if (el instanceof Object) {
			elems = el
		} else {
			elems = document.querySelectorAll(el)
		}

		for (let i = 0; i < elems.length; i += 1) {
			that.addToCollection(elems[i], options, id || elems[i].id)
		}

		if (!that.collection.length) {
			return false
		}

		// initialization calls
		that._init()
	},

	getItem(item) {
		if (typeof item === 'number') {
			return this.collection[item].$initializedEl;
		} else {
			return this.collection.find(el => {
				return el.id === item;
			}).$initializedEl;
		}
	},

	addToCollection(item, options, id) {
		this.collection.push({
			$el: item,
			id: id || null,
			options: Object.assign(
				{},
				this.defaults,
				item.hasAttribute(this.dataAttributeName)
					? JSON.parse(item.getAttribute(this.dataAttributeName))
					: {},
				options,
			),
		})
	},

	_init: function () {
		const that = this;

		for (let i = 0; i < that.collection.length; i += 1) {
			let _$el;
			let _options;
			let flatpickrInput;

			if (that.collection[i].hasOwnProperty('$initializedEl')) {
				continue;
			}

			_$el = that.collection[i].$el;
			_options = that.collection[i].options;
			flatpickrInput = _$el;

			if (_options.appendTo) {
				_options.appendTo = document.querySelector(_options.appendTo);
			}

			if (!(flatpickrInput instanceof HTMLInputElement)) {
				flatpickrInput = _$el.querySelector('.flatpickr-input');
			}

			if (flatpickrInput) {
				_$el.style.width = `${flatpickrInput.value.length * 12}px`;
			}

			that.collection[i].$initializedEl = flatpickr(
				_$el,
				_options,
			)
		}
	}
};
/*
 * HSTomSelect Plugin
 * @version: 1.0.0 (Mon, 24 May 2021)
 * @requires: tom-select 1.7.26
 * @author: HtmlStream
 * @event-namespace: .HSTomSelect
 * @license: Htmlstream Libraries (https://htmlstream.com/)
 * Copyright 2021 Htmlstream
 */

HSCore.components.HSTomSelect = {
  collection: [],

  dataAttributeName: 'data-hs-tom-select-options',

  defaults: {
    dropdownWrapperClass: 'tom-select-custom',
    searchInDropdown: true,
    plugins: ['change_listener', 'hs_smart_position'],
    dropup: false,
    hideSelected: false,
    render: {
      option: function (data, escape) {
        return data.optionTemplate || `<div>${data.text}</div>>`;
      },
      item: function (data, escape) {
        return data.itemTemplate || data.optionTemplate || `<div>${data.text}</div>>`;
      }
    }
  },

  init(el, options, id) {
    const that = this;
    let elems;

    if (el instanceof HTMLElement) {
      elems = [el];
    } else if (el instanceof Object) {
      elems = el;
    } else {
      elems = document.querySelectorAll(el);
    }

    for (let i = 0; i < elems.length; i += 1) {
      that.addToCollection(elems[i], options, id || elems[i].id);
    }

    if (!that.collection.length) {
      return false;
    }

    // initialization calls
    that._init();
  },

  addToCollection(item, options, id) {
    const that = this;

    this.collection.push({
      $el: item,
      id: id || null,
      options: Object.assign(
        {},
        that.defaults,
        item.hasAttribute(that.dataAttributeName)
          ? JSON.parse(item.getAttribute(that.dataAttributeName))
          : {},
        options
      )
    });
  },

  getItems() {
    const that = this;
    let newCollection = [];

    for (let i = 0; i < that.collection.length; i += 1) {
      newCollection.push(that.collection[i].$initializedEl);
    }

    return newCollection;
  },

  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find((el) => {
        return el.id === item;
      }).$initializedEl;
    }
  },

  _init() {
    const that = this;

    for (let i = 0; i < that.collection.length; i += 1) {
      let _options;
      let _$el;
      let $clearBtn;

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }

      _options = that.collection[i].options;
      _$el = that.collection[i].$el;
      if (_options.plugins.hasOwnProperty('hs_smart_position') && !_$el.closest('.modal')) {
        _options.dropdownParent = 'body';
      }

      if (_$el.hasAttribute('multiple')) {
        _options.plugins = [..._options.plugins, 'remove_button'];
      }

      if (_options.searchInDropdown) {
        _options.plugins = [..._options.plugins, 'dropdown_input'];
      }

      TomSelect.define('hs_smart_position', function (plugin_options) {
        function smartPositionOnScroll(instance) {
          const menuBoundary = instance.$menu.getBoundingClientRect();
          if (menuBoundary.bottom > window.innerHeight) {
            instance.$menu.style.top = `${
              parseInt(instance.$menu.style.top || 0) - (instance.$menu.clientHeight + 10)
            }px`;
          } else if (menuBoundary.top < 0) {
            instance.$menu.style.top = `${
              parseInt(instance.$menu.style.top || 0) +
              (instance.control.clientHeight + instance.$menu.clientHeight + 10)
            }px`;
          }
        }

        this.hook('after', 'setup', function () {
          this.$menu = this.dropdown_content.parentElement;

          this.on('dropdown_open', ($menu) => {
            const menuBoundary = $menu.getBoundingClientRect(),
              wrapperBoundary = this.wrapper.getBoundingClientRect();
            if (menuBoundary.bottom > window.innerHeight) {
              $menu.style.top = `${
                parseInt($menu.style.top || 0) -
                (this.control.clientHeight + $menu.clientHeight + 10)
              }px`;
            } else if (_options.dropup) {
              $menu.style.top = `${parseInt($menu.style.top || 0) - ($menu.clientHeight + 10)}px`;
            }
            $menu.style.opacity = 0;
            setTimeout(() => {
              const width = parseInt($menu.style.width);
              if (width > wrapperBoundary.width && _options.dropdownLeft) {
                $menu.style.left = `${
                  parseInt($menu.style.left || 0) - Math.abs(menuBoundary.width - width)
                }px`;
              }
              $menu.style.opacity = 1;
            });
          });
          // window.addEventListener('scroll', () => smartPositionOnScroll(this));
        });
      });

      /* Start : Init */

      that.collection[i].$initializedEl = new TomSelect(_$el, _options);

      /* End : Init */

      if (_options.hideSearch) that.hideSearch(that.collection[i].$initializedEl, _options);
      if (_options.disableSearch) that.disableSearch(that.collection[i].$initializedEl, _options);
      if (_options.width) that.width(that.collection[i].$initializedEl, _options);
      if (_options.singleMultiple) that.singleMultiple(that.collection[i].$initializedEl, _options);
      if (_options.hidePlaceholderOnSearch)
        that.hidePlaceholderOnSearch(that.collection[i].$initializedEl, _options);
      if (_options.create) that.openIfEmpty(that.collection[i].$initializedEl, _options);
      if (_options.hideSelectedFromField)
        that.hideSelectedFromField(that.collection[i].$initializedEl, _options);
      if (_options.dropdownWidth) that.dropdownWidth(that.collection[i].$initializedEl, _options);

      that.renderPlaceholder(that.collection[i].$initializedEl, _options);
      that.wrapContainer(that.collection[i].$initializedEl, _options);
    }
  },

  hideSearch(tomSelect, settings) {
    tomSelect.control_input.parentElement.removeChild(tomSelect.control_input);
  },

  disableSearch(tomSelect, settings) {
    tomSelect.control_input.readOnly = true;
  },

  singleMultiple(tomSelect, settings) {
    tomSelect.control.classList.add('hs-select-single-multiple');

    const defaultPlaceholder = (
      tomSelect.control_input.getAttribute('placeholder') || settings.placeholder
    ).replace(/(<([^>]+)>)/gi, '');
    const handler = (e) => {
      if (e.target.closest('[data-selectable].selected')) {
        e.target.classList.remove('selected');
        setTimeout(() => {
          tomSelect.removeItem(e.target.getAttribute('data-value'), false);
          tomSelect.refreshItems();
        });
      }
    };
    const renderPlaceholder = (val) => {
      const $selectedCount = tomSelect.wrapper.querySelector('.ts-selected-count');

      if (!$selectedCount) {
        const $createSelectedCount = document.createElement('span');
        $createSelectedCount.classList.add('ts-selected-count');
        tomSelect.wrapper.querySelector('.items').appendChild($createSelectedCount);
      }

      return (tomSelect.wrapper.querySelector('.ts-selected-count').innerHTML = val);
    };

    if (tomSelect.items.length) {
      if (!settings.searchInDropdown) {
        tomSelect.control_input.setAttribute(
          'placeholder',
          `${tomSelect.items.length} item(s) selected`
        );
      } else {
        renderPlaceholder(
          tomSelect.items.length ? `${tomSelect.items.length} item(s) selected` : defaultPlaceholder
        );
      }
    }

    tomSelect.on('dropdown_open', ($menu) => {
      $menu.addEventListener('mouseup', handler);
    });

    tomSelect.on('dropdown_close', ($menu) => {
      window.removeEventListener('mouseup', handler);
    });

    tomSelect.on('item_add', () => {
      if (tomSelect.items.length) {
        if (settings.searchInDropdown) {
          renderPlaceholder(`${tomSelect.items.length} item(s) selected`);
        } else {
          tomSelect.control_input.setAttribute(
            'placeholder',
            `${tomSelect.items.length} item(s) selected`
          );
        }
      }
    });

    tomSelect.on('item_remove', () => {
      if (!tomSelect.items.length) {
        if (settings.searchInDropdown) {
          renderPlaceholder(defaultPlaceholder);
        } else {
          tomSelect.control_input.setAttribute('placeholder', defaultPlaceholder);
        }
      } else {
        if (settings.searchInDropdown) {
          renderPlaceholder(`${tomSelect.items.length} item(s) selected`);
        } else {
          tomSelect.control_input.setAttribute(
            'placeholder',
            `${tomSelect.items.length} item(s) selected`
          );
        }
      }
    });
  },

  width(tomSelect, settings) {
    tomSelect.wrapper.style.maxWidth = settings.width;
  },

  hidePlaceholderOnSearch(tomSelect, settings) {
    const defaultPlaceholder = (
      tomSelect.control_input.getAttribute('placeholder') || settings.placeholder
    ).replace(/(<([^>]+)>)/gi, '');
    if (!defaultPlaceholder) return;

    tomSelect.on('dropdown_open', () => {
      tomSelect.control_input.setAttribute('placeholder', '');
    });

    tomSelect.on('dropdown_close', () => {
      tomSelect.control_input.setAttribute('placeholder', defaultPlaceholder);
    });
  },

  openIfEmpty(tomSelect, settings) {
    tomSelect.control_input.addEventListener('focus', () => {
      if (tomSelect.$menu.querySelector('.option')) return;
      tomSelect.open();
      setTimeout(() => {
        tomSelect.$menu.style.display = 'block';
        tomSelect.$menu
          .querySelector('.ts-dropdown-content')
          .append(tomSelect.render('no_results'));
      }, 10);
    });
  },

  hideSelectedFromField(tomSelect, settings) {
    const onSelect = () => {};

    tomSelect.on('item_select', onSelect);
    tomSelect.on('item_add', onSelect);
  },

  dropdownWidth(tomSelect, settings) {
    tomSelect.on('dropdown_open', () => (tomSelect.$menu.style.width = settings.dropdownWidth));
  },

  width(tomSelect, settings) {
    tomSelect.wrapper.style.width = settings.width;
  },

  renderPlaceholder(tomSelect, settings) {
    if (settings.singleMultiple || tomSelect.items.length) return;
    const defaultPlaceholder = tomSelect.input.getAttribute('placeholder') || settings.placeholder;

    if (settings.searchInDropdown && !settings.hideSelected) {
      let placeholderElement = null;
      const onSelect = function () {
        placeholderElement = tomSelect.wrapper.querySelector('.ts-custom-placeholder');
        if (tomSelect.items.length && placeholderElement) {
          if (placeholderElement.parentElement) {
            placeholderElement.parentElement.removeChild(placeholderElement);
          }
          return (placeholderElement = null);
        }

        if (!tomSelect.items.length && !placeholderElement) {
          addPlaceholder();
        }
      };
      const addPlaceholder = function () {
        if (tomSelect.items.length) return;
        tomSelect.wrapper.querySelector(
          '.items'
        ).innerHTML = `<span class="ts-custom-placeholder">${defaultPlaceholder}</span>`;
        placeholderElement = tomSelect.wrapper.querySelector('.ts-custom-placeholder');
      };

      addPlaceholder();
      tomSelect.on('change', onSelect);
    }

    function addInputPlaceholder(defaultPlaceholder) {
      tomSelect.control_input.setAttribute(
        'placeholder',
        defaultPlaceholder.replace(/(<([^>]+)>)/gi, '')
      );
    }

    function addTextPlaceholder(defaultPlaceholder) {
      const addPlaceholder = () => {
          tomSelect.control.innerHTML = `<div class="ts-custom-placeholder">${defaultPlaceholder}</div>`;
        },
        removePlaceholder = () => {
          const $placeholder = tomSelect.wrapper.querySelector('.items .ts-custom-placeholder');
          if ($placeholder && $placeholder.parentElement) {
            $placeholder.parentElement.removeChild($placeholder);
          }
        };

      addPlaceholder();

      tomSelect.on('change', () => {
        if (tomSelect.items.length) {
          removePlaceholder();
        }

        if (!tomSelect.items.length) {
          addPlaceholder();
        }
      });
    }

    if (defaultPlaceholder) {
      if (tomSelect.control_input.offsetParent) {
        addInputPlaceholder(defaultPlaceholder);
      } else {
        addTextPlaceholder(defaultPlaceholder);
      }
    }
  },

  wrapContainer(tomSelect, settings) {
    var wrapper = document.createElement('div');
    wrapper.className += settings.dropdownWrapperClass;
    tomSelect.$menu.parentNode.insertBefore(wrapper, tomSelect.$menu);
    // DANGER - IZEA - We changed the below code
    var label = tomSelect.input.getAttribute('label');
    if (label) {
      wrapper.parentElement.setAttribute('label', label);
    }
    wrapper.appendChild(tomSelect.$menu);
  }
};
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSFileAttach"] = factory();
	else
		root["HSFileAttach"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-file-attach.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-file-attach.js":
/*!**********************************!*\
  !*** ./src/js/hs-file-attach.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSFileAttach; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSFileAttach Plugin\n* @version: 3.0.0 (Mon, 22 Feb 2021)\n* @author: HtmlStream\n* @event-namespace: .HSFileAttach\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar dataAttributeName = 'data-hs-file-attach-options';\nvar defaults = {\n  textTarget: null,\n  maxFileSize: 1024,\n  // Infinity - off file size detection\n  errorMessage: 'File is too big!',\n  typeErrorMessage: 'Unsupported file type',\n  mode: 'simple',\n  targetAttr: null,\n  resetTarget: null,\n  allowTypes: []\n};\n\nvar HSFileAttach = /*#__PURE__*/function () {\n  function HSFileAttach(el, options, id) {\n    _classCallCheck(this, HSFileAttach);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSFileAttach, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.$target = document.querySelector(_options.textTarget);\n\n        function getFileExtension(filename) {\n          return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : null;\n        }\n\n        _$el.addEventListener('change', function (e) {\n          if (_$el.value === '') {\n            return;\n          }\n\n          if (e.target.files[0].size > _options.maxFileSize * 1024) {\n            alert(_options.errorMessage);\n            return e.target.value = '';\n          }\n\n          if (_options.allowTypes.length > 0) {\n            var type = '.' + getFileExtension(e.target.files[0].name);\n\n            if (!type || !_options.allowTypes.includes(type.toLowerCase())) {\n              alert(_options.typeErrorMessage);\n              return e.target.value = '';\n            }\n          }\n\n          if (_options.mode === 'image') {\n            _this.image(_$el, _options);\n          } else {\n            _this.simple(_$el, _options);\n          }\n        });\n\n        _options.resetTarget ? document.querySelector(_options.resetTarget).addEventListener('click', function () {\n          _$el.value = '';\n\n          _options.$target.setAttribute(_options.targetAttr, _options.resetImg);\n        }) : null;\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"simple\",\n    value: function simple($el, settings) {\n      settings.textContent = $el.value.replace(/.+[\\\\\\/]/, '');\n    }\n  }, {\n    key: \"image\",\n    value: function image($el, settings) {\n      var reader;\n\n      if ($el.files && $el.files[0]) {\n        reader = new FileReader();\n\n        reader.onload = function (e) {\n          settings.$target.setAttribute(settings.targetAttr, e.target.result);\n        };\n\n        reader.readAsDataURL($el.files[0]);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSFileAttach;\n}();\n\n\n\n//# sourceURL=webpack://HSFileAttach/./src/js/hs-file-attach.js?");

/***/ })

/******/ })["default"];
});
/*
 * HSSortable Plugin
 * @version: 3.0.0 (Thu, 14 Jul 2021)
 * @requires: Sortable v1.14.0
 * @author: HtmlStream
 * @event-namespace: .HSSortable
 * @license: Htmlstream Libraries (https://htmlstream.com/)
 * Copyright 2021 Htmlstream
 */

HSCore.components.HSSortable = {
  collection: [],

  dataAttributeName: 'data-hs-sortable-options',

  defaults: {
    zoomOnScroll: false
  },

  destroy(id) {
    this.collection = this.collection.filter(sortable => id !== sortable.id);
  },

  init: function(el, options, id) {
    const that = this;
    let elems;

    if (el instanceof HTMLElement) {
      elems = [el];
    } else if (el instanceof Object) {
      elems = el;
    } else {
      elems = document.querySelectorAll(el);
    }

    for (let i = 0; i < elems.length; i += 1) {
      that.addToCollection(elems[i], options, id || elems[i].id);
    }

    if (!that.collection.length) {
      return false;
    }

    // initialization calls
    that._init();
    //./
  },

  addToCollection(item, options, id) {
    this.collection.push({
      $el: item,
      id: id || null,
      options: Object.assign(
        {},
        this.defaults,
        item.hasAttribute(this.dataAttributeName)
          ? JSON.parse(item.getAttribute(this.dataAttributeName))
          : {},
        options
      )
    });
  },

  getItems() {
    const that = this;
    let newCollection = [];

    for (let i = 0; i < that.collection.length; i += 1) {
      newCollection.push(that.collection[i].$initializedEl);
    }

    return newCollection;
  },

  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  },

  _init: function() {
    const that = this;

    for (let i = 0; i < that.collection.length; i += 1) {
      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }

      that.collection[i].$initializedEl = new Sortable(
        that.collection[i].$el,
        that.collection[i].options
      );
    }
  }
};








