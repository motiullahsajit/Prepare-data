(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1955],{7422:function(){},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return GenIcon}});var o=n(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(s),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)0>t.indexOf(o[s])&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n};function GenIcon(e){return function(t){return o.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return o.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var n,s=e.attr,a=e.size,r=e.title,i=__rest(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,i,{className:n,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),r&&o.createElement("title",null,r),e.children)};return void 0!==a?o.createElement(a.Consumer,null,function(e){return elem(e)}):elem(s)}},5538:function(e,t,n){"use strict";n.d(t,{Ix:function(){return ToastContainer},Am:function(){return toast}});var o,s,a,r,i,c,l,u,d,f,p,m,g=n(7294),clsx_m=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function toVal(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=toVal(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t)}return o}(e))&&(o&&(o+=" "),o+=t);return o},v=n(3935);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}function isNum(e){return"number"==typeof e&&!isNaN(e)}function isBool(e){return"boolean"==typeof e}function isStr(e){return"string"==typeof e}function isFn(e){return"function"==typeof e}function parseClassName(e){return isStr(e)||isFn(e)?e:null}var T=!!("undefined"!=typeof window&&window.document&&window.document.createElement);function canBeRendered(e){return(0,g.isValidElement)(e)||isStr(e)||isFn(e)||isNum(e)}var y={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},h={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter(function(e){return e!==t});return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];this.list.has(e)&&this.list.get(e).forEach(function(n){var s=setTimeout(function(){n.apply(void 0,o)},0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(s)})}},b=["delay","staleId"];function getX(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function getY(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function CloseButton(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel;return(0,g.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":void 0===o?"close":o},(0,g.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,g.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ProgressBar(e){var t,n,o=e.delay,s=e.isRunning,a=e.closeToast,r=e.type,i=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=_extends({},l,{animationDuration:o+"ms",animationPlayState:s?"running":"paused",opacity:i?0:1});u&&(v.transform="scaleX("+d+")");var T=clsx_m("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+r,((t={})["Toastify__progress-bar--rtl"]=f,t)),y=isFn(c)?c({rtl:f,type:r,defaultClassName:T}):clsx_m(T,c),h=((n={})[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]=u&&d<1?null:function(){p&&a()},n);return(0,g.createElement)("div",Object.assign({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:y,style:v},h))}ProgressBar.defaultProps={type:h.DEFAULT,hide:!1};var _=["theme","type"],Svg=function(e){var t=e.theme,n=e.type,o=_objectWithoutPropertiesLoose(e,_);return(0,g.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},C={info:function(e){return(0,g.createElement)(Svg,Object.assign({},e),(0,g.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,g.createElement)(Svg,Object.assign({},e),(0,g.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,g.createElement)(Svg,Object.assign({},e),(0,g.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,g.createElement)(Svg,Object.assign({},e),(0,g.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,g.createElement)("div",{className:"Toastify__spinner"})}},Toast=function(e){var t,n,o=function(e){var t=(0,g.useState)(!1),n=t[0],o=t[1],s=(0,g.useState)(!1),a=s[0],r=s[1],i=(0,g.useRef)(null),c=(0,g.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,g.useRef)(e),u=e.autoClose,d=e.pauseOnHover,f=e.closeToast,p=e.onClick,m=e.closeOnClick;function onDragStart(t){if(e.draggable){c.didMove=!1,document.addEventListener("mousemove",onDragMove),document.addEventListener("mouseup",onDragEnd),document.addEventListener("touchmove",onDragMove),document.addEventListener("touchend",onDragEnd);var n=i.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=getX(t.nativeEvent),c.y=getY(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function onDragTransitionEnd(){if(c.boundingRect){var t=c.boundingRect,n=t.top,o=t.bottom,s=t.left,a=t.right;e.pauseOnHover&&c.x>=s&&c.x<=a&&c.y>=n&&c.y<=o?pauseToast():playToast()}}function playToast(){o(!0)}function pauseToast(){o(!1)}function onDragMove(t){var o=i.current;c.canDrag&&o&&(c.didMove=!0,n&&pauseToast(),c.x=getX(t),c.y=getY(t),"x"===e.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function onDragEnd(){document.removeEventListener("mousemove",onDragMove),document.removeEventListener("mouseup",onDragEnd),document.removeEventListener("touchmove",onDragMove),document.removeEventListener("touchend",onDragEnd);var t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){r(!0),e.closeToast();return}t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,g.useEffect)(function(){l.current=e}),(0,g.useEffect)(function(){return i.current&&i.current.addEventListener("d",playToast,{once:!0}),isFn(e.onOpen)&&e.onOpen((0,g.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;isFn(e.onClose)&&e.onClose((0,g.isValidElement)(e.children)&&e.children.props)}},[]),(0,g.useEffect)(function(){return e.pauseOnFocusLoss&&(document.hasFocus()||pauseToast(),window.addEventListener("focus",playToast),window.addEventListener("blur",pauseToast)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",playToast),window.removeEventListener("blur",pauseToast))}},[e.pauseOnFocusLoss]);var v={onMouseDown:onDragStart,onTouchStart:onDragStart,onMouseUp:onDragTransitionEnd,onTouchEnd:onDragTransitionEnd};return u&&d&&(v.onMouseEnter=pauseToast,v.onMouseLeave=playToast),m&&(v.onClick=function(e){p&&p(e),c.canCloseOnClick&&f()}),{playToast:playToast,pauseToast:pauseToast,isRunning:n,preventExitTransition:a,toastRef:i,eventHandlers:v}}(e),s=o.isRunning,a=o.preventExitTransition,r=o.toastRef,i=o.eventHandlers,c=e.closeButton,l=e.children,u=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,T=e.position,y=e.className,h=e.style,E=e.bodyClassName,b=e.bodyStyle,_=e.progressClassName,O=e.progressStyle,I=e.updateId,N=e.role,x=e.progress,B=e.rtl,L=e.toastId,w=e.deleteToast,R=e.isIn,P=e.isLoading,D=e.icon,S=e.theme,F=clsx_m("Toastify__toast","Toastify__toast-theme--"+S,"Toastify__toast--"+f,((t={})["Toastify__toast--rtl"]=B,t)),k=isFn(y)?y({rtl:B,position:T,type:f,defaultClassName:F}):clsx_m(F,y),M=!!x,A=C[f],j={theme:S,type:f},z=A&&A(j);return!1===D?z=void 0:isFn(D)?z=D(j):(0,g.isValidElement)(D)?z=(0,g.cloneElement)(D,j):isStr(D)?z=D:P&&(z=C.spinner()),(0,g.createElement)(v,{isIn:R,done:w,position:T,preventExitTransition:a,nodeRef:r},(0,g.createElement)("div",Object.assign({id:L,onClick:d,className:k},i,{style:h,ref:r}),(0,g.createElement)("div",Object.assign({},R&&{role:N},{className:isFn(E)?E({type:f}):clsx_m("Toastify__toast-body",E),style:b}),z&&(0,g.createElement)("div",{className:clsx_m("Toastify__toast-icon",((n={})["Toastify--animate-icon Toastify__zoom-enter"]=!P,n))},z),(0,g.createElement)("div",null,l)),function(e){if(e){var t={closeToast:m,type:f,theme:S};if(isFn(e))return e(t);if((0,g.isValidElement)(e))return(0,g.cloneElement)(e,t)}}(c),(u||M)&&(0,g.createElement)(ProgressBar,Object.assign({},I&&!M?{key:"pb-"+I}:{},{rtl:B,theme:S,delay:u,isRunning:s,isIn:R,closeToast:m,hide:p,type:f,style:O,className:_,controlledProgress:M,progress:x}))))},O=(s=(o={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}).enter,a=o.exit,i=void 0!==(r=o.appendPosition)&&r,l=void 0===(c=o.collapse)||c,d=void 0===(u=o.collapseDuration)?300:u,function(e){var t=e.children,n=e.position,o=e.preventExitTransition,r=e.done,c=e.nodeRef,u=e.isIn,f=i?s+"--"+n:s,p=i?a+"--"+n:a,m=(0,g.useRef)(),v=(0,g.useRef)(0);function onEntered(e){if(e.target===c.current){var t=c.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",onEntered),t.removeEventListener("animationcancel",onEntered),0===v.current&&(t.className=m.current)}}function onExited(){var e,t,n,o=c.current;o.removeEventListener("animationend",onExited),l?(void 0===(e=d)&&(e=300),t=o.scrollHeight,n=o.style,requestAnimationFrame(function(){n.minHeight="initial",n.height=t+"px",n.transition="all "+e+"ms",requestAnimationFrame(function(){n.height="0",n.padding="0",n.margin="0",setTimeout(r,e)})})):r()}return(0,g.useLayoutEffect)(function(){var e;e=c.current,m.current=e.className,e.className+=" "+f,e.addEventListener("animationend",onEntered),e.addEventListener("animationcancel",onEntered)},[]),(0,g.useEffect)(function(){var e;u||(o?onExited():(v.current=1,e=c.current,e.className+=" "+p,e.addEventListener("animationend",onExited)))},[u]),g.createElement(g.Fragment,null,t)}),ToastContainer=function(e){var t=function(e){var t=(0,g.useReducer)(function(e){return e+1},0)[1],n=(0,g.useState)([]),o=n[0],s=n[1],a=(0,g.useRef)(null),r=(0,g.useRef)(new Map).current,isToastActive=function(e){return -1!==o.indexOf(e)},i=(0,g.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:isToastActive,getToast:function(e){return r.get(e)}}).current;function clearWaitingQueue(e){var t=e.containerId;i.props.limit&&(!t||i.containerId===t)&&(i.count-=i.queue.length,i.queue=[])}function removeToast(e){s(function(t){return 0===e||e?t.filter(function(t){return t!==e}):[]})}function dequeueToast(){var e=i.queue.shift();appendToast(e.toastContent,e.toastProps,e.staleId)}function buildToast(e,n){var o=n.delay,s=n.staleId,c=_objectWithoutPropertiesLoose(n,b);if(!(!canBeRendered(e)||!a.current||i.props.enableMultiContainer&&c.containerId!==i.props.containerId||r.has(c.toastId)&&null==c.updateId)){var l,u,d=c.toastId,f=c.updateId,p=c.data,m=i.props,closeToast=function(){return removeToast(d)},v=null==f;v&&i.count++;var T={toastId:d,updateId:f,isLoading:c.isLoading,theme:c.theme||m.theme,icon:null!=c.icon?c.icon:m.icon,isIn:!1,key:c.key||i.toastKey++,type:c.type,closeToast:closeToast,closeButton:c.closeButton,rtl:m.rtl,position:c.position||m.position,transition:c.transition||m.transition,className:parseClassName(c.className||m.toastClassName),bodyClassName:parseClassName(c.bodyClassName||m.bodyClassName),style:c.style||m.toastStyle,bodyStyle:c.bodyStyle||m.bodyStyle,onClick:c.onClick||m.onClick,pauseOnHover:isBool(c.pauseOnHover)?c.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:isBool(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:isBool(c.draggable)?c.draggable:m.draggable,draggablePercent:c.draggablePercent||m.draggablePercent,draggableDirection:c.draggableDirection||m.draggableDirection,closeOnClick:isBool(c.closeOnClick)?c.closeOnClick:m.closeOnClick,progressClassName:parseClassName(c.progressClassName||m.progressClassName),progressStyle:c.progressStyle||m.progressStyle,autoClose:!c.isLoading&&(l=c.autoClose,u=m.autoClose,!1===l||isNum(l)&&l>0?l:u),hideProgressBar:isBool(c.hideProgressBar)?c.hideProgressBar:m.hideProgressBar,progress:c.progress,role:c.role||m.role,deleteToast:function(){r.delete(d);var e=i.queue.length;if(i.count=0===d||d?i.count-1:i.count-i.displayedToast,i.count<0&&(i.count=0),e>0){var n=0===d||d?1:i.props.limit;if(1===e||1===n)i.displayedToast++,dequeueToast();else{var o=n>e?e:n;i.displayedToast=o;for(var s=0;s<o;s++)dequeueToast()}}else t()}};isFn(c.onOpen)&&(T.onOpen=c.onOpen),isFn(c.onClose)&&(T.onClose=c.onClose),T.closeButton=m.closeButton,!1===c.closeButton||canBeRendered(c.closeButton)?T.closeButton=c.closeButton:!0===c.closeButton&&(T.closeButton=!canBeRendered(m.closeButton)||m.closeButton);var y=e;(0,g.isValidElement)(e)&&!isStr(e.type)?y=(0,g.cloneElement)(e,{closeToast:closeToast,toastProps:T,data:p}):isFn(e)&&(y=e({closeToast:closeToast,toastProps:T,data:p})),m.limit&&m.limit>0&&i.count>m.limit&&v?i.queue.push({toastContent:y,toastProps:T,staleId:s}):isNum(o)&&o>0?setTimeout(function(){appendToast(y,T,s)},o):appendToast(y,T,s)}}function appendToast(e,t,n){var o=t.toastId;n&&r.delete(n),r.set(o,{content:e,props:t}),s(function(e){return[].concat(e,[o]).filter(function(e){return e!==n})})}return(0,g.useEffect)(function(){return i.containerId=e.containerId,E.cancelEmit(3).on(0,buildToast).on(1,function(e){return a.current&&removeToast(e)}).on(5,clearWaitingQueue).emit(2,i),function(){return E.emit(3,i)}},[]),(0,g.useEffect)(function(){i.isToastActive=isToastActive,i.displayedToast=o.length,E.emit(4,o.length,e.containerId)},[o]),(0,g.useEffect)(function(){i.props=e}),{getToastToRender:function(t){var n=new Map,o=Array.from(r.values());return e.newestOnTop&&o.reverse(),o.forEach(function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,function(e){return t(e[0],e[1])})},containerRef:a,isToastActive:isToastActive}}(e),n=t.getToastToRender,o=t.containerRef,s=t.isToastActive,a=e.className,r=e.style,i=e.rtl,c=e.containerId;return(0,g.createElement)("div",{ref:o,className:"Toastify",id:c},n(function(e,t){var n,o,c=t.length?_extends({},r):_extends({},r,{pointerEvents:"none"});return(0,g.createElement)("div",{className:(o=clsx_m("Toastify__toast-container","Toastify__toast-container--"+e,((n={})["Toastify__toast-container--rtl"]=i,n)),isFn(a)?a({position:e,rtl:i,defaultClassName:o}):clsx_m(o,parseClassName(a))),style:c,key:"container-"+e},t.map(function(e){var t=e.content,n=e.props;return(0,g.createElement)(Toast,Object.assign({},n,{isIn:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?CloseButton:n.closeButton}),t)}))}))};ToastContainer.defaultProps={position:y.TOP_RIGHT,transition:O,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:CloseButton,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var I=new Map,N=[],x=!1;function generateToastId(){return Math.random().toString(36).substring(2,9)}function dispatchToast(e,t){return I.size>0?E.emit(0,e,t):(N.push({content:e,options:t}),x&&T&&(x=!1,p=document.createElement("div"),document.body.appendChild(p),(0,v.render)((0,g.createElement)(ToastContainer,Object.assign({},m)),p))),t.toastId}function mergeOptions(e,t){return _extends({},t,{type:t&&t.type||e,toastId:t&&(isStr(t.toastId)||isNum(t.toastId))?t.toastId:generateToastId()})}function createToastByType(e){return function(t,n){return dispatchToast(t,mergeOptions(e,n))}}function toast(e,t){return dispatchToast(e,mergeOptions(h.DEFAULT,t))}toast.loading=function(e,t){return dispatchToast(e,mergeOptions(h.DEFAULT,_extends({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},toast.promise=function(e,t,n){var o,s=t.pending,a=t.error,r=t.success;s&&(o=isStr(s)?toast.loading(s,n):toast.loading(s.render,_extends({},n,s)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},resolver=function(e,t,s){if(null==t){toast.dismiss(o);return}var a=_extends({type:e},i,n,{data:s}),r=isStr(t)?{render:t}:t;return o?toast.update(o,_extends({},a,r)):toast(r.render,_extends({},a,r)),s},c=isFn(e)?e():e;return c.then(function(e){return resolver("success",r,e)}).catch(function(e){return resolver("error",a,e)}),c},toast.success=createToastByType(h.SUCCESS),toast.info=createToastByType(h.INFO),toast.error=createToastByType(h.ERROR),toast.warning=createToastByType(h.WARNING),toast.warn=toast.warning,toast.dark=function(e,t){return dispatchToast(e,mergeOptions(h.DEFAULT,_extends({theme:"dark"},t)))},toast.dismiss=function(e){return E.emit(1,e)},toast.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},toast.isActive=function(e){var t=!1;return I.forEach(function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},toast.update=function(e,t){void 0===t&&(t={}),setTimeout(function(){var n,o,s=(n=t.containerId,(o=I.get(n||f))?o.getToast(e):null);if(s){var a=s.props,r=s.content,i=_extends({},a,t,{toastId:t.toastId||e,updateId:generateToastId()});i.toastId!==e&&(i.staleId=e);var c=i.render||r;delete i.render,dispatchToast(c,i)}},0)},toast.done=function(e){toast.update(e,{progress:1})},toast.onChange=function(e){return isFn(e)&&E.on(4,e),function(){isFn(e)&&E.off(4,e)}},toast.configure=function(e){void 0===e&&(e={}),x=!0,m=e},toast.POSITION=y,toast.TYPE=h,E.on(2,function(e){f=e.containerId||e,I.set(f,e),N.forEach(function(e){E.emit(0,e.content,e.options)}),N=[]}).on(3,function(e){I.delete(e.containerId||e),0===I.size&&E.off(0).off(1).off(5),T&&p&&document.body.removeChild(p)})}}]);