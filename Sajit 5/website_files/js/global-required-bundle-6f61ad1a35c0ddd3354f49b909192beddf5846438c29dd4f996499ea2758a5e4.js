if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.documentElement.classList.add('mobile-device');

  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.documentElement.classList.add('device-ios');

    // Added to overwrite an accessibility issue with Mobile Safari
    // that forces a zoom on all input elements.
    document.head.querySelector('meta[name="viewport"]').content =
      'width=device-width, initial-scale=1, maximum-scale=1';
  }

  if (/Android/i.test(navigator.userAgent)) {
    document.documentElement.classList.add('device-android');
  }
}

// Add class if Safari
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  document.documentElement.classList.add('browser-safari');
}

// Tied to SCSS app/assets/stylesheets/helpers/_viewport.scss
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener(
  'resize',
  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let status_div_height = document.getElementById('status_banner')?.offsetHeight;
    if (status_div_height) {
      document.documentElement.style.setProperty('--padding', `${status_div_height}px`);
    }
  },
  { passive: true }
);

window.addEventListener(
  'touchend',
  () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  { passive: true }
);
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).IMask={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(t){return t&&t.Math==Math&&t},i=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")(),r={},u=function(t){try{return!!t()}catch(t){return!0}},s=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),o=a,l=Function.prototype.call,h=o?l.bind(l):function(){return l.apply(l,arguments)},c={},f={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,d=p&&!f.call({1:2},1);c.f=d?function(t){var e=p(this,t);return!!e&&e.enumerable}:f;var v,g,k=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y=a,m=Function.prototype,b=m.bind,_=m.call,A=y&&b.bind(_,_),C=y?function(t){return t&&A(t)}:function(t){return t&&function(){return _.apply(t,arguments)}},E=C,F=E({}.toString),S=E("".slice),w=function(t){return S(F(t),8,-1)},B=C,D=u,x=w,M=i.Object,O=B("".split),P=D((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==x(t)?O(t,""):M(t)}:M,T=i.TypeError,I=function(t){if(null==t)throw T("Can't call method on "+t);return t},j=P,R=I,V=function(t){return j(R(t))},L=function(t){return"function"==typeof t},N=L,U=function(t){return"object"==typeof t?null!==t:N(t)},z=i,q=L,H=function(t){return q(t)?t:void 0},Y=function(t,e){return arguments.length<2?H(z[t]):z[t]&&z[t][e]},Z=C({}.isPrototypeOf),G=Y("navigator","userAgent")||"",K=i,$=G,W=K.process,X=K.Deno,J=W&&W.versions||X&&X.version,Q=J&&J.v8;Q&&(g=(v=Q.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!g&&$&&(!(v=$.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=$.match(/Chrome\/(\d+)/))&&(g=+v[1]);var tt=g,et=u,nt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),it=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,rt=Y,ut=L,st=Z,at=it,ot=i.Object,lt=at?function(t){return"symbol"==typeof t}:function(t){var e=rt("Symbol");return ut(e)&&st(e.prototype,ot(t))},ht=i.String,ct=L,ft=function(t){try{return ht(t)}catch(t){return"Object"}},pt=i.TypeError,dt=function(t){if(ct(t))return t;throw pt(ft(t)+" is not a function")},vt=h,gt=L,kt=U,yt=i.TypeError,mt={exports:{}},bt=i,_t=Object.defineProperty,At=function(t,e){try{_t(bt,t,{value:e,configurable:!0,writable:!0})}catch(n){bt[t]=e}return e},Ct=At,Et="__core-js_shared__",Ft=i[Et]||Ct(Et,{}),St=Ft;(mt.exports=function(t,e){return St[t]||(St[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"});var wt=I,Bt=i.Object,Dt=function(t){return Bt(wt(t))},xt=Dt,Mt=C({}.hasOwnProperty),Ot=Object.hasOwn||function(t,e){return Mt(xt(t),e)},Pt=C,Tt=0,It=Math.random(),jt=Pt(1..toString),Rt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+jt(++Tt+It,36)},Vt=i,Lt=mt.exports,Nt=Ot,Ut=Rt,zt=nt,qt=it,Ht=Lt("wks"),Yt=Vt.Symbol,Zt=Yt&&Yt.for,Gt=qt?Yt:Yt&&Yt.withoutSetter||Ut,Kt=function(t){if(!Nt(Ht,t)||!zt&&"string"!=typeof Ht[t]){var e="Symbol."+t;zt&&Nt(Yt,t)?Ht[t]=Yt[t]:Ht[t]=qt&&Zt?Zt(e):Gt(e)}return Ht[t]},$t=h,Wt=U,Xt=lt,Jt=function(t,e){var n=t[e];return null==n?void 0:dt(n)},Qt=function(t,e){var n,i;if("string"===e&&gt(n=t.toString)&&!kt(i=vt(n,t)))return i;if(gt(n=t.valueOf)&&!kt(i=vt(n,t)))return i;if("string"!==e&&gt(n=t.toString)&&!kt(i=vt(n,t)))return i;throw yt("Can't convert object to primitive value")},te=Kt,ee=i.TypeError,ne=te("toPrimitive"),ie=function(t,e){if(!Wt(t)||Xt(t))return t;var n,i=Jt(t,ne);if(i){if(void 0===e&&(e="default"),n=$t(i,t,e),!Wt(n)||Xt(n))return n;throw ee("Can't convert object to primitive value")}return void 0===e&&(e="number"),Qt(t,e)},re=lt,ue=function(t){var e=ie(t,"string");return re(e)?e:e+""},se=U,ae=i.document,oe=se(ae)&&se(ae.createElement),le=function(t){return oe?ae.createElement(t):{}},he=!s&&!u((function(){return 7!=Object.defineProperty(le("div"),"a",{get:function(){return 7}}).a})),ce=s,fe=h,pe=c,de=k,ve=V,ge=ue,ke=Ot,ye=he,me=Object.getOwnPropertyDescriptor;r.f=ce?me:function(t,e){if(t=ve(t),e=ge(e),ye)try{return me(t,e)}catch(t){}if(ke(t,e))return de(!fe(pe.f,t,e),t[e])};var be={},_e=s&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ae=i,Ce=U,Ee=Ae.String,Fe=Ae.TypeError,Se=function(t){if(Ce(t))return t;throw Fe(Ee(t)+" is not an object")},we=s,Be=he,De=_e,xe=Se,Me=ue,Oe=i.TypeError,Pe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ie="enumerable",je="configurable",Re="writable";be.f=we?De?function(t,e,n){if(xe(t),e=Me(e),xe(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Re in n&&!n.writable){var i=Te(t,e);i&&i.writable&&(t[e]=n.value,n={configurable:je in n?n.configurable:i.configurable,enumerable:Ie in n?n.enumerable:i.enumerable,writable:!1})}return Pe(t,e,n)}:Pe:function(t,e,n){if(xe(t),e=Me(e),xe(n),Be)try{return Pe(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Oe("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ve=be,Le=k,Ne=s?function(t,e,n){return Ve.f(t,e,Le(1,n))}:function(t,e,n){return t[e]=n,t},Ue={exports:{}},ze=L,qe=Ft,He=C(Function.toString);ze(qe.inspectSource)||(qe.inspectSource=function(t){return He(t)});var Ye,Ze,Ge,Ke=qe.inspectSource,$e=L,We=Ke,Xe=i.WeakMap,Je=$e(Xe)&&/native code/.test(We(Xe)),Qe=mt.exports,tn=Rt,en=Qe("keys"),nn={},rn=Je,un=i,sn=C,an=U,on=Ne,ln=Ot,hn=Ft,cn=function(t){return en[t]||(en[t]=tn(t))},fn=nn,pn="Object already initialized",dn=un.TypeError,vn=un.WeakMap;if(rn||hn.state){var gn=hn.state||(hn.state=new vn),kn=sn(gn.get),yn=sn(gn.has),mn=sn(gn.set);Ye=function(t,e){if(yn(gn,t))throw new dn(pn);return e.facade=t,mn(gn,t,e),e},Ze=function(t){return kn(gn,t)||{}},Ge=function(t){return yn(gn,t)}}else{var bn=cn("state");fn[bn]=!0,Ye=function(t,e){if(ln(t,bn))throw new dn(pn);return e.facade=t,on(t,bn,e),e},Ze=function(t){return ln(t,bn)?t[bn]:{}},Ge=function(t){return ln(t,bn)}}var _n={set:Ye,get:Ze,has:Ge,enforce:function(t){return Ge(t)?Ze(t):Ye(t,{})},getterFor:function(t){return function(e){var n;if(!an(e)||(n=Ze(e)).type!==t)throw dn("Incompatible receiver, "+t+" required");return n}}},An=s,Cn=Ot,En=Function.prototype,Fn=An&&Object.getOwnPropertyDescriptor,Sn=Cn(En,"name"),wn=Sn&&"something"===function(){}.name,Bn=Sn&&(!An||An&&Fn(En,"name").configurable),Dn=i,xn=L,Mn=Ot,On=Ne,Pn=At,Tn=Ke,In={EXISTS:Sn,PROPER:wn,CONFIGURABLE:Bn}.CONFIGURABLE,jn=_n.get,Rn=_n.enforce,Vn=String(String).split("String");(Ue.exports=function(t,e,n,i){var r,u=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet,o=i&&void 0!==i.name?i.name:e;xn(n)&&("Symbol("===String(o).slice(0,7)&&(o="["+String(o).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Mn(n,"name")||In&&n.name!==o)&&On(n,"name",o),(r=Rn(n)).source||(r.source=Vn.join("string"==typeof o?o:""))),t!==Dn?(u?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=n:On(t,e,n)):s?t[e]=n:Pn(e,n)})(Function.prototype,"toString",(function(){return xn(this)&&jn(this).source||Tn(this)}));var Ln={},Nn=Math.ceil,Un=Math.floor,zn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Un:Nn)(e)},qn=zn,Hn=Math.max,Yn=Math.min,Zn=zn,Gn=Math.min,Kn=function(t){return t>0?Gn(Zn(t),9007199254740991):0},$n=Kn,Wn=V,Xn=function(t,e){var n=qn(t);return n<0?Hn(n+e,0):Yn(n,e)},Jn=function(t){return $n(t.length)},Qn=function(t){return function(e,n,i){var r,u=Wn(e),s=Jn(u),a=Xn(i,s);if(t&&n!=n){for(;s>a;)if((r=u[a++])!=r)return!0}else for(;s>a;a++)if((t||a in u)&&u[a]===n)return t||a||0;return!t&&-1}},ti={includes:Qn(!0),indexOf:Qn(!1)},ei=Ot,ni=V,ii=ti.indexOf,ri=nn,ui=C([].push),si=function(t,e){var n,i=ni(t),r=0,u=[];for(n in i)!ei(ri,n)&&ei(i,n)&&ui(u,n);for(;e.length>r;)ei(i,n=e[r++])&&(~ii(u,n)||ui(u,n));return u},ai=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],oi=si,li=ai.concat("length","prototype");Ln.f=Object.getOwnPropertyNames||function(t){return oi(t,li)};var hi={};hi.f=Object.getOwnPropertySymbols;var ci=Y,fi=Ln,pi=hi,di=Se,vi=C([].concat),gi=ci("Reflect","ownKeys")||function(t){var e=fi.f(di(t)),n=pi.f;return n?vi(e,n(t)):e},ki=Ot,yi=gi,mi=r,bi=be,_i=u,Ai=L,Ci=/#|\.prototype\./,Ei=function(t,e){var n=Si[Fi(t)];return n==Bi||n!=wi&&(Ai(e)?_i(e):!!e)},Fi=Ei.normalize=function(t){return String(t).replace(Ci,".").toLowerCase()},Si=Ei.data={},wi=Ei.NATIVE="N",Bi=Ei.POLYFILL="P",Di=Ei,xi=i,Mi=r.f,Oi=Ne,Pi=Ue.exports,Ti=At,Ii=function(t,e,n){for(var i=yi(e),r=bi.f,u=mi.f,s=0;s<i.length;s++){var a=i[s];ki(t,a)||n&&ki(n,a)||r(t,a,u(e,a))}},ji=Di,Ri=function(t,e){var n,i,r,u,s,a=t.target,o=t.global,l=t.stat;if(n=o?xi:l?xi[a]||Ti(a,{}):(xi[a]||{}).prototype)for(i in e){if(u=e[i],r=t.noTargetGet?(s=Mi(n,i))&&s.value:n[i],!ji(o?i:a+(l?".":"#")+i,t.forced)&&void 0!==r){if(typeof u==typeof r)continue;Ii(u,r)}(t.sham||r&&r.sham)&&Oi(u,"sham",!0),Pi(n,i,u,t)}},Vi=si,Li=ai,Ni=Object.keys||function(t){return Vi(t,Li)},Ui=s,zi=C,qi=h,Hi=u,Yi=Ni,Zi=hi,Gi=c,Ki=Dt,$i=P,Wi=Object.assign,Xi=Object.defineProperty,Ji=zi([].concat),Qi=!Wi||Hi((function(){if(Ui&&1!==Wi({b:1},Wi(Xi({},"a",{enumerable:!0,get:function(){Xi(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=Wi({},t)[n]||Yi(Wi({},e)).join("")!=i}))?function(t,e){for(var n=Ki(t),i=arguments.length,r=1,u=Zi.f,s=Gi.f;i>r;)for(var a,o=$i(arguments[r++]),l=u?Ji(Yi(o),u(o)):Yi(o),h=l.length,c=0;h>c;)a=l[c++],Ui&&!qi(s,o,a)||(n[a]=o[a]);return n}:Wi,tr=Qi;Ri({target:"Object",stat:!0,forced:Object.assign!==tr},{assign:tr});var er={};er[Kt("toStringTag")]="z";var nr=i,ir="[object z]"===String(er),rr=L,ur=w,sr=Kt("toStringTag"),ar=nr.Object,or="Arguments"==ur(function(){return arguments}()),lr=ir?ur:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ar(t),sr))?n:or?ur(e):"Object"==(i=ur(e))&&rr(e.callee)?"Arguments":i},hr=i.String,cr=function(t){if("Symbol"===lr(t))throw TypeError("Cannot convert a Symbol value to a string");return hr(t)},fr=zn,pr=cr,dr=I,vr=i.RangeError,gr=function(t){var e=pr(dr(this)),n="",i=fr(t);if(i<0||i==1/0)throw vr("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n};Ri({target:"String",proto:!0},{repeat:gr});var kr=C,yr=Kn,mr=cr,br=I,_r=kr(gr),Ar=kr("".slice),Cr=Math.ceil,Er=function(t){return function(e,n,i){var r,u,s=mr(br(e)),a=yr(n),o=s.length,l=void 0===i?" ":mr(i);return a<=o||""==l?s:((u=_r(l,Cr((r=a-o)/l.length))).length>r&&(u=Ar(u,0,r)),t?s+u:u+s)}},Fr={start:Er(!1),end:Er(!0)},Sr=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(G),wr=Fr.start;Ri({target:"String",proto:!0,forced:Sr},{padStart:function(t){return wr(this,t,arguments.length>1?arguments[1]:void 0)}});var Br=Fr.end;function Dr(t){return Dr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dr(t)}function xr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mr(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Or(t,e,n){return e&&Mr(t.prototype,e),n&&Mr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Pr(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ir(t,e)}function Tr(t){return Tr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Tr(t)}function Ir(t,e){return Ir=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Ir(t,e)}function jr(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},u=Object.keys(t);for(i=0;i<u.length;i++)n=u[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(i=0;i<u.length;i++)n=u[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Rr(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Vr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Tr(t);if(e){var r=Tr(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Rr(this,n)}}function Lr(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Tr(t)););return t}function Nr(){return Nr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=Lr(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},Nr.apply(this,arguments)}function Ur(t,e,n,i){return Ur="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,u=Lr(t,e);if(u){if((r=Object.getOwnPropertyDescriptor(u,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(i,e,n);return!0},Ur(t,e,n,i)}function zr(t,e,n,i,r){if(!Ur(t,e,n,i||t)&&r)throw new Error("failed to set property");return n}function qr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,u=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(i=n.next()).done)&&(u.push(i.value),!e||u.length!==e);s=!0);}catch(t){a=!0,r=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}return u}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Hr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Hr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}Ri({target:"String",proto:!0,forced:Sr},{padEnd:function(t){return Br(this,t,arguments.length>1?arguments[1]:void 0)}}),Ri({global:!0},{globalThis:i});var Yr=function(){function t(e){xr(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return Or(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}();function Zr(t){return"string"==typeof t||t instanceof String}var Gr="NONE",Kr="LEFT",$r="FORCE_LEFT",Wr="RIGHT",Xr="FORCE_RIGHT";function Jr(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function Qr(t){return Array.isArray(t)?t:[t,new Yr]}function tu(t,e){if(e===t)return!0;var n,i=Array.isArray(e),r=Array.isArray(t);if(i&&r){if(e.length!=t.length)return!1;for(n=0;n<e.length;n++)if(!tu(e[n],t[n]))return!1;return!0}if(i!=r)return!1;if(e&&t&&"object"===Dr(e)&&"object"===Dr(t)){var u=e instanceof Date,s=t instanceof Date;if(u&&s)return e.getTime()==t.getTime();if(u!=s)return!1;var a=e instanceof RegExp,o=t instanceof RegExp;if(a&&o)return e.toString()==t.toString();if(a!=o)return!1;var l=Object.keys(e);for(n=0;n<l.length;n++)if(!Object.prototype.hasOwnProperty.call(t,l[n]))return!1;for(n=0;n<l.length;n++)if(!tu(t[l[n]],e[l[n]]))return!1;return!0}return!(!e||!t||"function"!=typeof e||"function"!=typeof t)&&e.toString()===t.toString()}var eu=function(){function t(e,n,i,r){for(xr(this,t),this.value=e,this.cursorPos=n,this.oldValue=i,this.oldSelection=r;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return Or(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?Gr:this.oldSelection.end!==this.cursorPos&&this.oldSelection.start!==this.cursorPos||this.oldSelection.end!==this.oldSelection.start?Kr:Wr}}]),t}(),nu=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;xr(this,t),this.value=e,this.from=n,this.stop=i}return Or(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}},{key:"unshift",value:function(t){if(!this.value.length||null!=t&&this.from>=t)return"";var e=this.value[0];return this.value=this.value.slice(1),e}},{key:"shift",value:function(){if(!this.value.length)return"";var t=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),t}}]),t}();function iu(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new iu.InputMask(t,e)}var ru=function(){function t(e){xr(this,t),this._value="",this._update(Object.assign({},t.DEFAULTS,e)),this.isInitialized=!0}return Or(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(t){this.value=this.doFormat(t)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"isFilled",get:function(){return this.isComplete}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new nu(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return Zr(t)&&(t=new nu(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){return t?(this._value+=t,new Yr({inserted:t,rawInserted:t})):new Yr}},{key:"_appendChar",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,r=this.state,u=Qr(this.doPrepare(t,n)),s=qr(u,2);if(t=s[0],(e=(e=s[1]).aggregate(this._appendCharRaw(t,n))).inserted){var a,o=!1!==this.doValidate(n);if(o&&null!=i){var l=this.state;!0===this.overwrite&&(a=i.state,i.unshift(this.value.length));var h=this.appendTail(i);(o=h.rawInserted===i.toString())&&h.inserted||"shift"!==this.overwrite||(this.state=l,a=i.state,i.shift(),o=(h=this.appendTail(i)).rawInserted===i.toString()),o&&h.inserted&&(this.state=l)}o||(e=new Yr,this.state=r,i&&a&&(i.state=a))}return e}},{key:"_appendPlaceholder",value:function(){return new Yr}},{key:"_appendEager",value:function(){return new Yr}},{key:"append",value:function(t,e,n){if(!Zr(t))throw new Error("value should be string");var i=new Yr,r=Zr(n)?new nu(String(n)):n;e&&e.tail&&(e._beforeTailState=this.state);for(var u=0;u<t.length;++u)i.aggregate(this._appendChar(t[u],e,r));return null!=r&&(i.tailShift+=this.appendTail(r).tailShift),this.eager&&null!=e&&e.input&&t&&i.aggregate(this._appendEager()),i}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new Yr}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.rawInputValue,n=this.value,i=t();return this.rawInputValue=e,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,i}},{key:"runIsolated",value:function(t){if(this._isolated||!this.isInitialized)return t(this);this._isolated=!0;var e=this.state,n=t(this);return this.state=e,delete this._isolated,n}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(t){return this.format?this.format(t,this):t}},{key:"doParse",value:function(t){return this.parse?this.parse(t,this):t}},{key:"splice",value:function(t,e,n,i){var r,u=t+e,s=this.extractTail(u);this.eager&&(i=function(t){switch(t){case Kr:return $r;case Wr:return Xr;default:return t}}(i),r=this.extractInput(0,u,{raw:!0}));var a=this.nearestInputPos(t,e>1&&0!==t&&!this.eager?Gr:i),o=new Yr({tailShift:a-t}).aggregate(this.remove(a));if(this.eager&&i!==Gr&&r===this.rawInputValue)if(i===$r)for(var l;r===this.rawInputValue&&(l=this.value.length);)o.aggregate(new Yr({tailShift:-1})).aggregate(this.remove(l-1));else i===Xr&&s.unshift();return o.aggregate(this.append(n,{input:!0},s))}},{key:"maskEquals",value:function(t){return this.mask===t}}]),t}();function uu(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?iu.MaskedRegExp:Zr(t)?iu.MaskedPattern:t instanceof Date||t===Date?iu.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?iu.MaskedNumber:Array.isArray(t)||t===Array?iu.MaskedDynamic:iu.Masked&&t.prototype instanceof iu.Masked?t:t instanceof iu.Masked?t.constructor:t instanceof Function?iu.MaskedFunction:(console.warn("Mask not found for mask",t),iu.Masked)}function su(t){if(iu.Masked&&t instanceof iu.Masked)return t;var e=(t=Object.assign({},t)).mask;if(iu.Masked&&e instanceof iu.Masked)return e;var n=uu(e);if(!n)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(t)}ru.DEFAULTS={format:function(t){return t},parse:function(t){return t}},iu.Masked=ru,iu.createMask=su;var au=["mask"],ou={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},lu=function(){function t(e){xr(this,t);var n=e.mask,i=jr(e,au);this.masked=su({mask:n}),Object.assign(this,i)}return Or(t,[{key:"reset",value:function(){this.isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this.isFilled=!1,this.masked.remove(t,e)):new Yr}},{key:"value",get:function(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isFilled)return new Yr;var n=this.masked.state,i=this.masked._appendChar(t,e);return i.inserted&&!1===this.doValidate(e)&&(i.inserted=i.rawInserted="",this.masked.state=n),i.inserted||this.isOptional||this.lazy||e.input||(i.inserted=this.placeholderChar),i.skip=!i.inserted&&!this.isOptional,this.isFilled=Boolean(i.inserted),i}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new Yr;return this.isFilled||this.isOptional||(this.isFilled=!0,t.inserted=this.placeholderChar),t}},{key:"_appendEager",value:function(){return new Yr}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gr,n=0,i=this.value.length,r=Math.min(Math.max(t,n),i);switch(e){case Kr:case $r:return this.isComplete?r:n;case Wr:case Xr:return this.isComplete?r:i;default:return r}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,isFilled:this.isFilled}},set:function(t){this.masked.state=t.masked,this.isFilled=t.isFilled}}]),t}(),hu=function(){function t(e){xr(this,t),Object.assign(this,e),this._value="",this.isFixed=!0}return Or(t,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new Yr}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gr,n=0,i=this._value.length;switch(e){case Kr:case $r:return n;default:return i}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"isComplete",get:function(){return!0}},{key:"isFilled",get:function(){return Boolean(this._value)}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Yr;if(this._value)return n;var i=this.char===t,r=i&&(this.isUnmasking||e.input||e.raw)&&!this.eager&&!e.tail;return r&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=r&&(e.raw||e.input),n}},{key:"_appendEager",value:function(){return this._appendChar(this.char)}},{key:"_appendPlaceholder",value:function(){var t=new Yr;return this._value||(this._value=t.inserted=this.char),t}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]||this.value.length,new nu("")}},{key:"appendTail",value:function(t){return Zr(t)&&(t=new nu(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var i=this._appendChar(t[0],e);return null!=n&&(i.tailShift+=this.appendTail(n).tailShift),i}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),cu=["chunks"],fu=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;xr(this,t),this.chunks=e,this.from=n}return Or(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){Zr(e)&&(e=new nu(String(e)));var n=this.chunks[this.chunks.length-1],i=n&&(n.stop===e.stop||null==e.stop)&&e.from===n.from+n.toString().length;if(e instanceof nu)i?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(var r;e.chunks.length&&null==e.chunks[0].stop;)(r=e.chunks.shift()).from+=e.from,this.extend(r);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof iu.MaskedPattern))return new nu(this.toString()).appendTo(e);for(var n=new Yr,i=0;i<this.chunks.length&&!n.skip;++i){var r=this.chunks[i],u=e._mapPosToBlock(e.value.length),s=r.stop,a=void 0;if(null!=s&&(!u||u.index<=s)&&((r instanceof t||e._stops.indexOf(s)>=0)&&n.aggregate(e._appendPlaceholder(s)),a=r instanceof t&&e._blocks[s]),a){var o=a.appendTail(r);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=r.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(r.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map((function(t){return t.state})),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks,i=jr(e,cu);Object.assign(this,i),this.chunks=n.map((function(e){var n="chunks"in e?new t:new nu;return n.state=e,n}))}},{key:"unshift",value:function(t){if(!this.chunks.length||null!=t&&this.from>=t)return"";for(var e=null!=t?t-this.from:t,n=0;n<this.chunks.length;){var i=this.chunks[n],r=i.unshift(e);if(i.toString()){if(!r)break;++n}else this.chunks.splice(n,1);if(r)return r}return""}},{key:"shift",value:function(){if(!this.chunks.length)return"";for(var t=this.chunks.length-1;0<=t;){var e=this.chunks[t],n=e.shift();if(e.toString()){if(!n)break;--t}else this.chunks.splice(t,1);if(n)return n}return""}}]),t}(),pu=function(){function t(e,n){xr(this,t),this.masked=e,this._log=[];var i=e._mapPosToBlock(n)||(n<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0}),r=i.offset,u=i.index;this.offset=r,this.index=u,this.ok=!1}return Or(t,[{key:"block",get:function(){return this.masked._blocks[this.index]}},{key:"pos",get:function(){return this.masked._blockStartPos(this.index)+this.offset}},{key:"state",get:function(){return{index:this.index,offset:this.offset,ok:this.ok}},set:function(t){Object.assign(this,t)}},{key:"pushState",value:function(){this._log.push(this.state)}},{key:"popState",value:function(){var t=this._log.pop();return this.state=t,t}},{key:"bindBlock",value:function(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.value.length))}},{key:"_pushLeft",value:function(t){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=(null===(e=this.block)||void 0===e?void 0:e.value.length)||0){var e;if(t())return this.ok=!0}return this.ok=!1}},{key:"_pushRight",value:function(t){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(t())return this.ok=!0;return this.ok=!1}},{key:"pushLeftBeforeFilled",value:function(){var t=this;return this._pushLeft((function(){if(!t.block.isFixed&&t.block.value)return t.offset=t.block.nearestInputPos(t.offset,$r),0!==t.offset||void 0}))}},{key:"pushLeftBeforeInput",value:function(){var t=this;return this._pushLeft((function(){if(!t.block.isFixed)return t.offset=t.block.nearestInputPos(t.offset,Kr),!0}))}},{key:"pushLeftBeforeRequired",value:function(){var t=this;return this._pushLeft((function(){if(!(t.block.isFixed||t.block.isOptional&&!t.block.value))return t.offset=t.block.nearestInputPos(t.offset,Kr),!0}))}},{key:"pushRightBeforeFilled",value:function(){var t=this;return this._pushRight((function(){if(!t.block.isFixed&&t.block.value)return t.offset=t.block.nearestInputPos(t.offset,Xr),t.offset!==t.block.value.length||void 0}))}},{key:"pushRightBeforeInput",value:function(){var t=this;return this._pushRight((function(){if(!t.block.isFixed)return t.offset=t.block.nearestInputPos(t.offset,Gr),!0}))}},{key:"pushRightBeforeRequired",value:function(){var t=this;return this._pushRight((function(){if(!(t.block.isFixed||t.block.isOptional&&!t.block.value))return t.offset=t.block.nearestInputPos(t.offset,Gr),!0}))}}]),t}(),du=function(t){Pr(n,t);var e=Vr(n);function n(){return xr(this,n),e.apply(this,arguments)}return Or(n,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),Nr(Tr(n.prototype),"_update",this).call(this,t)}}]),n}(ru);iu.MaskedRegExp=du;var vu=["_blocks"],gu=function(t){Pr(n,t);var e=Vr(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return xr(this,n),t.definitions=Object.assign({},ou,t.definitions),e.call(this,Object.assign({},n.DEFAULTS,t))}return Or(n,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),Nr(Tr(n.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,e=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var i=this.mask;if(i&&e)for(var r=!1,u=!1,s=0;s<i.length;++s){if(this.blocks)if("continue"===function(){var e=i.slice(s),n=Object.keys(t.blocks).filter((function(t){return 0===e.indexOf(t)}));n.sort((function(t,e){return e.length-t.length}));var r=n[0];if(r){var u=su(Object.assign({parent:t,lazy:t.lazy,eager:t.eager,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[r]));return u&&(t._blocks.push(u),t._maskedBlocks[r]||(t._maskedBlocks[r]=[]),t._maskedBlocks[r].push(t._blocks.length-1)),s+=r.length-1,"continue"}}())continue;var a=i[s],o=a in e;if(a!==n.STOP_CHAR)if("{"!==a&&"}"!==a)if("["!==a&&"]"!==a){if(a===n.ESCAPE_CHAR){if(++s,!(a=i[s]))break;o=!1}var l=o?new lu({parent:this,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,mask:e[a],isOptional:u}):new hu({char:a,eager:this.eager,isUnmasking:r});this._blocks.push(l)}else u=!u;else r=!r;else this._stops.push(this._blocks.length)}}},{key:"state",get:function(){return Object.assign({},Nr(Tr(n.prototype),"state",this),{_blocks:this._blocks.map((function(t){return t.state}))})},set:function(t){var e=t._blocks,i=jr(t,vu);this._blocks.forEach((function(t,n){return t.state=e[n]})),zr(Tr(n.prototype),"state",i,this,!0)}},{key:"reset",value:function(){Nr(Tr(n.prototype),"reset",this).call(this),this._blocks.forEach((function(t){return t.reset()}))}},{key:"isComplete",get:function(){return this._blocks.every((function(t){return t.isComplete}))}},{key:"isFilled",get:function(){return this._blocks.every((function(t){return t.isFilled}))}},{key:"isFixed",get:function(){return this._blocks.every((function(t){return t.isFixed}))}},{key:"isOptional",get:function(){return this._blocks.every((function(t){return t.isOptional}))}},{key:"doCommit",value:function(){this._blocks.forEach((function(t){return t.doCommit()})),Nr(Tr(n.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce((function(t,e){return t+e.unmaskedValue}),"")},set:function(t){zr(Tr(n.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce((function(t,e){return t+e.value}),"")},set:function(t){zr(Tr(n.prototype),"value",t,this,!0)}},{key:"appendTail",value:function(t){return Nr(Tr(n.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendEager",value:function(){var t,e=new Yr,n=null===(t=this._mapPosToBlock(this.value.length))||void 0===t?void 0:t.index;if(null==n)return e;this._blocks[n].isFilled&&++n;for(var i=n;i<this._blocks.length;++i){var r=this._blocks[i]._appendEager();if(!r.inserted)break;e.aggregate(r)}return e}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),i=new Yr;if(!n)return i;for(var r=n.index;;++r){var u,s=this._blocks[r];if(!s)break;var a=s._appendChar(t,Object.assign({},e,{_beforeTailState:null===(u=e._beforeTailState)||void 0===u?void 0:u._blocks[r]})),o=a.skip;if(i.aggregate(a),o||a.rawInserted)break}return i}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,i=new fu;return e===n||this._forEachBlocksInRange(e,n,(function(e,n,r,u){var s=e.extractTail(r,u);s.stop=t._findStopBefore(n),s.from=t._blockStartPos(n),s instanceof fu&&(s.blockIndex=n),i.extend(s)})),i}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var i="";return this._forEachBlocksInRange(t,e,(function(t,e,r,u){i+=t.extractInput(r,u,n)})),i}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var i=this._stops[n];if(!(i<=t))break;e=i}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new Yr;if(this.lazy&&null==t)return n;var i=this._mapPosToBlock(this.value.length);if(!i)return n;var r=i.index,u=null!=t?t:this._blocks.length;return this._blocks.slice(r,u).forEach((function(i){if(!i.lazy||null!=t){var r=null!=i._blocks?[i._blocks.length]:[],u=i._appendPlaceholder.apply(i,r);e._value+=u.inserted,n.aggregate(u)}})),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var i=this._blocks[n],r=e.length;if(t<=(e+=i.value).length)return{index:n,offset:t-r}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce((function(t,e){return t+e.value.length}),0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,i=this._mapPosToBlock(t);if(i){var r=this._mapPosToBlock(e),u=r&&i.index===r.index,s=i.offset,a=r&&u?r.offset:this._blocks[i.index].value.length;if(n(this._blocks[i.index],i.index,s,a),r&&!u){for(var o=i.index+1;o<r.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[r.index],r.index,0,r.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,i=Nr(Tr(n.prototype),"remove",this).call(this,t,e);return this._forEachBlocksInRange(t,e,(function(t,e,n,r){i.aggregate(t.remove(n,r))})),i}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gr;if(!this._blocks.length)return 0;var n=new pu(this,t);if(e===Gr)return n.pushRightBeforeInput()?n.pos:(n.popState(),n.pushLeftBeforeInput()?n.pos:this.value.length);if(e===Kr||e===$r){if(e===Kr){if(n.pushRightBeforeFilled(),n.ok&&n.pos===t)return t;n.popState()}if(n.pushLeftBeforeInput(),n.pushLeftBeforeRequired(),n.pushLeftBeforeFilled(),e===Kr){if(n.pushRightBeforeInput(),n.pushRightBeforeRequired(),n.ok&&n.pos<=t)return n.pos;if(n.popState(),n.ok&&n.pos<=t)return n.pos;n.popState()}return n.ok?n.pos:e===$r?0:(n.popState(),n.ok?n.pos:(n.popState(),n.ok?n.pos:0))}return e===Wr||e===Xr?(n.pushRightBeforeInput(),n.pushRightBeforeRequired(),n.pushRightBeforeFilled()?n.pos:e===Xr?this.value.length:(n.popState(),n.ok?n.pos:(n.popState(),n.ok?n.pos:this.nearestInputPos(t,Kr)))):t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map((function(t){return e._blocks[t]})):[]}}]),n}(ru);gu.DEFAULTS={lazy:!0,placeholderChar:"_"},gu.STOP_CHAR="`",gu.ESCAPE_CHAR="\\",gu.InputDefinition=lu,gu.FixedDefinition=hu,iu.MaskedPattern=gu;var ku=function(t){Pr(n,t);var e=Vr(n);function n(){return xr(this,n),e.apply(this,arguments)}return Or(n,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(t){t=Object.assign({to:this.to||0,from:this.from||0,maxLength:this.maxLength||0},t);var e=String(t.to).length;null!=t.maxLength&&(e=Math.max(e,t.maxLength)),t.maxLength=e;for(var i=String(t.from).padStart(e,"0"),r=String(t.to).padStart(e,"0"),u=0;u<r.length&&r[u]===i[u];)++u;t.mask=r.slice(0,u).replace(/0/g,"\\0")+"0".repeat(e-u),Nr(Tr(n.prototype),"_update",this).call(this,t)}},{key:"isComplete",get:function(){return Nr(Tr(n.prototype),"isComplete",this)&&Boolean(this.value)}},{key:"boundaries",value:function(t){var e="",n="",i=qr(t.match(/^(\D*)(\d*)(\D*)/)||[],3),r=i[1],u=i[2];return u&&(e="0".repeat(r.length)+u,n="9".repeat(r.length)+u),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Qr(Nr(Tr(n.prototype),"doPrepare",this).call(this,t.replace(/\D/g,""),i)),u=qr(r,2);if(t=u[0],e=u[1],!this.autofix||!t)return t;var s=String(this.from).padStart(this.maxLength,"0"),a=String(this.to).padStart(this.maxLength,"0"),o=this.value+t;if(o.length>this.maxLength)return"";var l=this.boundaries(o),h=qr(l,2),c=h[0],f=h[1];return Number(f)<this.from?s[o.length-1]:Number(c)>this.to?"pad"===this.autofix&&o.length<this.maxLength?["",e.aggregate(this.append(s[o.length-1]+t,i))]:a[o.length-1]:t}},{key:"doValidate",value:function(){var t,e=this.value,i=e.search(/[^0]/);if(-1===i&&e.length<=this._matchFrom)return!0;for(var r=this.boundaries(e),u=qr(r,2),s=u[0],a=u[1],o=arguments.length,l=new Array(o),h=0;h<o;h++)l[h]=arguments[h];return this.from<=Number(a)&&Number(s)<=this.to&&(t=Nr(Tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(l))}}]),n}(gu);iu.MaskedRange=ku;var yu=function(t){Pr(n,t);var e=Vr(n);function n(t){return xr(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Or(n,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var e=t.blocks;t.blocks=Object.assign({},n.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,this.blocks,e),Object.keys(t.blocks).forEach((function(e){var n=t.blocks[e];!("autofix"in n)&&"autofix"in t&&(n.autofix=t.autofix)})),Nr(Tr(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this.date,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(t=Nr(Tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}},{key:"date",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"typedValue",get:function(){return this.isComplete?Nr(Tr(n.prototype),"typedValue",this):null},set:function(t){zr(Tr(n.prototype),"typedValue",t,this,!0)}},{key:"maskEquals",value:function(t){return t===Date||Nr(Tr(n.prototype),"maskEquals",this).call(this,t)}}]),n}(gu);yu.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return t?[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join("."):""},parse:function(t){var e=qr(t.split("."),3),n=e[0],i=e[1],r=e[2];return new Date(r,i-1,n)}},yu.GET_DEFAULT_BLOCKS=function(){return{d:{mask:ku,from:1,to:31,maxLength:2},m:{mask:ku,from:1,to:12,maxLength:2},Y:{mask:ku,from:1900,to:9999}}},iu.MaskedDate=yu;var mu=function(){function t(){xr(this,t)}return Or(t,[{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}}]),t}();iu.MaskElement=mu;var bu=function(t){Pr(n,t);var e=Vr(n);function n(t){var i;return xr(this,n),(i=e.call(this)).input=t,i._handlers={},i}return Or(n,[{key:"rootElement",get:function(){var t,e,n;return null!==(t=null===(e=(n=this.input).getRootNode)||void 0===e?void 0:e.call(n))&&void 0!==t?t:document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}},{key:"bindEvents",value:function(t){var e=this;Object.keys(t).forEach((function(i){return e._toggleEventHandler(n.EVENTS_MAP[i],t[i])}))}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach((function(e){return t._toggleEventHandler(e)}))}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}}]),n}(mu);bu.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},iu.HTMLMaskElement=bu;var _u=function(t){Pr(n,t);var e=Vr(n);function n(){return xr(this,n),e.apply(this,arguments)}return Or(n,[{key:"_unsafeSelectionStart",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection(),n=e&&e.anchorOffset,i=e&&e.focusOffset;return null==i||null==n||n<i?n:i}},{key:"_unsafeSelectionEnd",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection(),n=e&&e.anchorOffset,i=e&&e.focusOffset;return null==i||null==n||n>i?n:i}},{key:"_unsafeSelect",value:function(t,e){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,t),n.setEnd(this.input.lastChild||this.input,e);var i=this.rootElement,r=i.getSelection&&i.getSelection();r&&(r.removeAllRanges(),r.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}]),n}(bu);iu.HTMLContenteditableMaskElement=_u;var Au=["mask"],Cu=function(){function t(e,n){xr(this,t),this.el=e instanceof mu?e:e.isContentEditable&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName?new _u(e):new bu(e),this.masked=su(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return Or(t,[{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t))if(t instanceof iu.Masked||this.masked.constructor!==uu(t)){var e=su({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}else this.masked.updateOptions({mask:t})}},{key:"maskEquals",value:function(t){var e;return null==t||(null===(e=this.masked)||void 0===e?void 0:e.maskEquals(t))}},{key:"value",get:function(){return this._value},set:function(t){this.masked.value=t,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValue=t,this.updateControl(),this.alignCursor()}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=this._listeners[t];r&&r.forEach((function(t){return t.apply(void 0,n)}))}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var e=t.mask,n=jr(t,Au),i=!this.maskEquals(e),r=!tu(this.masked,n);i&&(this.mask=e),r&&this.masked.updateOptions(n),(i||r)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout((function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())}),10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,Kr))}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(t){if(this._inputEvent=t,this._abortUpdateCursor(),!this._selection)return this.updateValue();var e=new eu(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,i=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection).offset,r=n===this.masked.rawInputValue?e.removeDirection:Gr,u=this.masked.nearestInputPos(e.startChangePos+i,r);r!==Gr&&(u=this.masked.nearestInputPos(u,Gr)),this.updateControl(),this.updateCursor(u),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.alignCursorFriendly()}},{key:"_onClick",value:function(t){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),t}();iu.InputMask=Cu;var Eu=function(t){Pr(n,t);var e=Vr(n);function n(){return xr(this,n),e.apply(this,arguments)}return Or(n,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),Nr(Tr(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return this.enum.some((function(t){return t.indexOf(e.unmaskedValue)>=0}))&&(t=Nr(Tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))}}]),n}(gu);iu.MaskedEnum=Eu;var Fu=function(t){Pr(n,t);var e=Vr(n);function n(t){return xr(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Or(n,[{key:"_update",value:function(t){Nr(Tr(n.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+Jr(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(Jr).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(Jr(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){var e;t=t.replace(this._mapToRadixRegExp,this.radix);for(var i=this._removeThousandsSeparators(t),r=arguments.length,u=new Array(r>1?r-1:0),s=1;s<r;s++)u[s-1]=arguments[s];var a=Qr((e=Nr(Tr(n.prototype),"doPrepare",this)).call.apply(e,[this,i].concat(u))),o=qr(a,2),l=o[0],h=o[1];return t&&!i&&(h.skip=!0),[l,h]}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,i=0;i<t;++i)this._value.indexOf(this.thousandsSeparator,i)===i&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,i=arguments.length>2?arguments[2]:void 0,r=this._adjustRangeWithSeparators(t,e),u=qr(r,2);return t=u[0],e=u[1],this._removeThousandsSeparators(Nr(Tr(n.prototype),"extractInput",this).call(this,t,e,i))}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return Nr(Tr(n.prototype),"_appendCharRaw",this).call(this,t,e);var i=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,r=this._separatorsCountFromSlice(i);this._value=this._removeThousandsSeparators(this.value);var u=Nr(Tr(n.prototype),"_appendCharRaw",this).call(this,t,e);this._value=this._insertThousandsSeparators(this._value);var s=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,a=this._separatorsCountFromSlice(s);return u.tailShift+=(a-r)*this.thousandsSeparator.length,u.skip=!u.rawInserted&&t===this.thousandsSeparator,u}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var i=this._findSeparatorAround(e);return i>=0&&(e=i+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=this._adjustRangeWithSeparators(t,e),i=qr(n,2);t=i[0],e=i[1];var r=this.value.slice(0,t),u=this.value.slice(e),s=this._separatorsCount(r.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(r+u));var a=this._separatorsCountFromSlice(r);return new Yr({tailShift:(a-s)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case Gr:case Kr:case $r:var n=this._findSeparatorAround(t-1);if(n>=0){var i=n+this.thousandsSeparator.length;if(t<i||this.value.length<=i||e===$r)return n}break;case Wr:case Xr:var r=this._findSeparatorAround(t);if(r>=0)return r+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var e=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(e){var i=this.number;e=e&&!isNaN(i)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return e&&Nr(Tr(n.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=String(e));var i=this.value;this.normalizeZeros&&(i=this._normalizeZeros(i)),this.padFractionalZeros&&this.scale>0&&(i=this._padFractionalZeros(i)),this._value=i}Nr(Tr(n.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,(function(t,e,n,i){return e+i})),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){zr(Tr(n.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(t){zr(Tr(n.prototype),"unmaskedValue",String(t),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),n}(ru);Fu.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},iu.MaskedNumber=Fu;var Su=function(t){Pr(n,t);var e=Vr(n);function n(){return xr(this,n),e.apply(this,arguments)}return Or(n,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),Nr(Tr(n.prototype),"_update",this).call(this,t)}}]),n}(ru);iu.MaskedFunction=Su;var wu=["compiledMasks","currentMaskRef","currentMask"],Bu=function(t){Pr(n,t);var e=Vr(n);function n(t){var i;return xr(this,n),(i=e.call(this,Object.assign({},n.DEFAULTS,t))).currentMask=null,i}return Or(n,[{key:"_update",value:function(t){Nr(Tr(n.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map((function(t){return su(t)})):[])}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(t,e);return this.currentMask&&n.aggregate(this.currentMask._appendChar(t,e)),n}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,i=this.rawInputValue,r=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:i,u=i.slice(r.length),s=this.currentMask,a=new Yr,o=s&&s.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask)if(this.currentMask!==s){if(this.currentMask.reset(),r){var l=this.currentMask.append(r,{raw:!0});a.tailShift=l.inserted.length-n.length}u&&(a.tailShift+=this.currentMask.append(u,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o;return a}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"_appendEager",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendEager()),t}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(){for(var t,e,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(t=Nr(Tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(r))&&(!this.currentMask||(e=this.currentMask).doValidate.apply(e,r))}},{key:"reset",value:function(){var t;null===(t=this.currentMask)||void 0===t||t.reset(),this.compiledMasks.forEach((function(t){return t.reset()}))}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){zr(Tr(n.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){zr(Tr(n.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){var t;return Boolean(null===(t=this.currentMask)||void 0===t?void 0:t.isComplete)}},{key:"isFilled",get:function(){var t;return Boolean(null===(t=this.currentMask)||void 0===t?void 0:t.isFilled)}},{key:"remove",value:function(){var t,e=new Yr;this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch());return e}},{key:"state",get:function(){return Object.assign({},Nr(Tr(n.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((function(t){return t.state})),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(t){var e=t.compiledMasks,i=t.currentMaskRef,r=t.currentMask,u=jr(t,wu);this.compiledMasks.forEach((function(t,n){return t.state=e[n]})),null!=i&&(this.currentMask=i,this.currentMask.state=r),zr(Tr(n.prototype),"state",u,this,!0)}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,e,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return this.currentMask?(t=this.currentMask).extractTail.apply(t,r):(e=Nr(Tr(n.prototype),"extractTail",this)).call.apply(e,[this].concat(r))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),Nr(Tr(n.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,e,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,r):(e=Nr(Tr(n.prototype),"nearestInputPos",this)).call.apply(e,[this].concat(r))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:Nr(Tr(n.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}},{key:"eager",get:function(){return this.currentMask?this.currentMask.eager:Nr(Tr(n.prototype),"eager",this)},set:function(t){console.warn('"eager" option is not available in dynamic mask, use this option in siblings')}},{key:"maskEquals",value:function(t){return Array.isArray(t)&&this.compiledMasks.every((function(e,n){var i;return e.maskEquals(null===(i=t[n])||void 0===i?void 0:i.mask)}))}}]),n}(ru);Bu.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var i=e.rawInputValue,r=e.compiledMasks.map((function(e,r){return e.reset(),e.append(i,{raw:!0}),e.append(t,n),{weight:e.rawInputValue.length,index:r}}));return r.sort((function(t,e){return e.weight-t.weight})),e.compiledMasks[r[0].index]}}},iu.MaskedDynamic=Bu;var Du={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function xu(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Du.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Du.MASKED,i=su(t);return function(t){return i.runIsolated((function(i){return i[e]=t,i[n]}))}}function Mu(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return xu.apply(void 0,n)(t)}iu.PIPE_TYPE=Du,iu.createPipe=xu,iu.pipe=Mu;try{globalThis.IMask=iu}catch(t){}t.HTMLContenteditableMaskElement=_u,t.HTMLMaskElement=bu,t.InputMask=Cu,t.MaskElement=mu,t.Masked=ru,t.MaskedDate=yu,t.MaskedDynamic=Bu,t.MaskedEnum=Eu,t.MaskedFunction=Su,t.MaskedNumber=Fu,t.MaskedPattern=gu,t.MaskedRange=ku,t.MaskedRegExp=du,t.PIPE_TYPE=Du,t.createMask=su,t.createPipe=xu,t.default=iu,t.pipe=Mu,Object.defineProperty(t,"__esModule",{value:!0})}));

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global = global || self), (global.GLightbox = factory()));
})(this, function() {
  'use strict';

  function _typeof(obj) {
    '@babel/helpers - typeof';

    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var uid = Date.now();
  function extend() {
    var extended = {};
    var deep = true;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }
  function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) {
      collection = [collection];
    }

    if (!isArrayLike(collection) && !isObject(collection)) {
      collection = [collection];
    }

    if (size(collection) == 0) {
      return;
    }

    if (isArrayLike(collection) && !isObject(collection)) {
      var l = collection.length,
        i = 0;

      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (isObject(collection)) {
      for (var key in collection) {
        if (has(collection, key)) {
          if (callback.call(collection[key], collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
  }
  function getNodeEvents(node) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cache = (node[uid] = node[uid] || []);
    var data = {
      all: cache,
      evt: null,
      found: null
    };

    if (name && fn && size(cache) > 0) {
      each(cache, function(cl, i) {
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
          data.found = true;
          data.evt = i;
          return false;
        }
      });
    }

    return data;
  }
  function addEvent(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onElement = _ref.onElement,
      withCallback = _ref.withCallback,
      _ref$avoidDuplicate = _ref.avoidDuplicate,
      avoidDuplicate = _ref$avoidDuplicate === void 0 ? true : _ref$avoidDuplicate,
      _ref$once = _ref.once,
      once = _ref$once === void 0 ? false : _ref$once,
      _ref$useCapture = _ref.useCapture,
      useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;

    var thisArg = arguments.length > 2 ? arguments[2] : undefined;
    var element = onElement || [];

    if (isString(element)) {
      element = document.querySelectorAll(element);
    }

    function handler(event) {
      if (isFunction(withCallback)) {
        withCallback.call(thisArg, event, this);
      }

      if (once) {
        handler.destroy();
      }
    }

    handler.destroy = function() {
      each(element, function(el) {
        var events = getNodeEvents(el, eventName, handler);

        if (events.found) {
          events.all.splice(events.evt, 1);
        }

        if (el.removeEventListener) {
          el.removeEventListener(eventName, handler, useCapture);
        }
      });
    };

    each(element, function(el) {
      var events = getNodeEvents(el, eventName, handler);

      if ((el.addEventListener && avoidDuplicate && !events.found) || !avoidDuplicate) {
        el.addEventListener(eventName, handler, useCapture);
        events.all.push({
          eventName: eventName,
          fn: handler
        });
      }
    });
    return handler;
  }
  function addClass(node, name) {
    each(name.split(' '), function(cl) {
      return node.classList.add(cl);
    });
  }
  function removeClass(node, name) {
    each(name.split(' '), function(cl) {
      return node.classList.remove(cl);
    });
  }
  function hasClass(node, name) {
    return node.classList.contains(name);
  }
  function closest(elem, selector) {
    while (elem !== document.body) {
      elem = elem.parentElement;

      if (!elem) {
        return false;
      }

      var matches =
        typeof elem.matches == 'function'
          ? elem.matches(selector)
          : elem.msMatchesSelector(selector);

      if (matches) {
        return elem;
      }
    }
  }
  function animateElement(element) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!element || animation === '') {
      return false;
    }

    if (animation === 'none') {
      if (isFunction(callback)) {
        callback();
      }

      return false;
    }

    var animationEnd = whichAnimationEvent();
    var animationNames = animation.split(' ');
    each(animationNames, function(name) {
      addClass(element, 'g' + name);
    });
    addEvent(animationEnd, {
      onElement: element,
      avoidDuplicate: false,
      once: true,
      withCallback: function withCallback(event, target) {
        each(animationNames, function(name) {
          removeClass(target, 'g' + name);
        });

        if (isFunction(callback)) {
          callback();
        }
      }
    });
  }
  function cssTransform(node) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (translate === '') {
      node.style.webkitTransform = '';
      node.style.MozTransform = '';
      node.style.msTransform = '';
      node.style.OTransform = '';
      node.style.transform = '';
      return false;
    }

    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
  }
  function show(element) {
    element.style.display = 'block';
  }
  function hide(element) {
    element.style.display = 'none';
  }
  function createHTML(htmlStr) {
    var frag = document.createDocumentFragment(),
      temp = document.createElement('div');
    temp.innerHTML = htmlStr;

    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    return frag;
  }
  function windowSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height:
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }
  function whichAnimationEvent() {
    var t,
      el = document.createElement('fakeelement');
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd'
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }
  function whichTransitionEvent() {
    var t,
      el = document.createElement('fakeelement');
    var transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
  function createIframe(config) {
    var url = config.url,
      allow = config.allow,
      callback = config.callback,
      appendTo = config.appendTo;
    var iframe = document.createElement('iframe');
    iframe.className = 'vimeo-video gvideo';
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    if (allow) {
      iframe.setAttribute('allow', allow);
    }

    iframe.onload = function() {
      iframe.onload = null;
      addClass(iframe, 'node-ready');

      if (isFunction(callback)) {
        callback();
      }
    };

    if (appendTo) {
      appendTo.appendChild(iframe);
    }

    return iframe;
  }
  function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
      onComplete();
      return;
    }

    if (!delay) {
      delay = 100;
    }

    var timeoutPointer;
    var intervalPointer = setInterval(function() {
      if (!check()) {
        return;
      }

      clearInterval(intervalPointer);

      if (timeoutPointer) {
        clearTimeout(timeoutPointer);
      }

      onComplete();
    }, delay);

    if (timeout) {
      timeoutPointer = setTimeout(function() {
        clearInterval(intervalPointer);
      }, timeout);
    }
  }
  function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
      console.error('Inject assets error');
      return;
    }

    if (isFunction(waitFor)) {
      callback = waitFor;
      waitFor = false;
    }

    if (isString(waitFor) && waitFor in window) {
      if (isFunction(callback)) {
        callback();
      }

      return;
    }

    var found;

    if (url.indexOf('.css') !== -1) {
      found = document.querySelectorAll('link[href="' + url + '"]');

      if (found && found.length > 0) {
        if (isFunction(callback)) {
          callback();
        }

        return;
      }

      var head = document.getElementsByTagName('head')[0];
      var headStyles = head.querySelectorAll('link[rel="stylesheet"]');
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';

      if (headStyles) {
        head.insertBefore(link, headStyles[0]);
      } else {
        head.appendChild(link);
      }

      if (isFunction(callback)) {
        callback();
      }

      return;
    }

    found = document.querySelectorAll('script[src="' + url + '"]');

    if (found && found.length > 0) {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(
            function() {
              return typeof window[waitFor] !== 'undefined';
            },
            function() {
              callback();
            }
          );
          return false;
        }

        callback();
      }

      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(
            function() {
              return typeof window[waitFor] !== 'undefined';
            },
            function() {
              callback();
            }
          );
          return false;
        }

        callback();
      }
    };

    document.body.appendChild(script);
  }
  function isMobile() {
    return (
      'navigator' in window &&
      window.navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
      )
    );
  }
  function isTouch() {
    return (
      isMobile() !== null ||
      document.createTouch !== undefined ||
      'ontouchstart' in window ||
      'onmsgesturechange' in window ||
      navigator.msMaxTouchPoints
    );
  }
  function isFunction(f) {
    return typeof f === 'function';
  }
  function isString(s) {
    return typeof s === 'string';
  }
  function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
  }
  function isArray(ar) {
    return Array.isArray(ar);
  }
  function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
  }
  function isObject(o) {
    var type = _typeof(o);

    return type === 'object' && o != null && !isFunction(o) && !isArray(o);
  }
  function isNil(o) {
    return o == null;
  }
  function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }
  function size(o) {
    if (isObject(o)) {
      if (o.keys) {
        return o.keys().length;
      }

      var l = 0;

      for (var k in o) {
        if (has(o, k)) {
          l++;
        }
      }

      return l;
    } else {
      return o.length;
    }
  }
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function getNextFocusElement() {
    var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var btns = document.querySelectorAll('.gbtn[data-taborder]:not(.disabled)');

    if (!btns.length) {
      return false;
    }

    if (btns.length == 1) {
      return btns[0];
    }

    if (typeof current == 'string') {
      current = parseInt(current);
    }

    var orders = [];
    each(btns, function(btn) {
      orders.push(btn.getAttribute('data-taborder'));
    });
    var highestOrder = Math.max.apply(
      Math,
      orders.map(function(order) {
        return parseInt(order);
      })
    );
    var newIndex = current < 0 ? 1 : current + 1;

    if (newIndex > highestOrder) {
      newIndex = '1';
    }

    var nextOrders = orders.filter(function(el) {
      return el >= parseInt(newIndex);
    });
    var nextFocus = nextOrders.sort()[0];
    return document.querySelector('.gbtn[data-taborder="'.concat(nextFocus, '"]'));
  }

  function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty('keyboard')) {
      return false;
    }

    instance.events['keyboard'] = addEvent('keydown', {
      onElement: window,
      withCallback: function withCallback(event, target) {
        event = event || window.event;
        var key = event.keyCode;

        if (key == 9) {
          var focusedButton = document.querySelector('.gbtn.focused');

          if (!focusedButton) {
            var activeElement =
              document.activeElement && document.activeElement.nodeName
                ? document.activeElement.nodeName.toLocaleLowerCase()
                : false;

            if (
              activeElement == 'input' ||
              activeElement == 'textarea' ||
              activeElement == 'button'
            ) {
              return;
            }
          }

          event.preventDefault();
          var btns = document.querySelectorAll('.gbtn[data-taborder]');

          if (!btns || btns.length <= 0) {
            return;
          }

          if (!focusedButton) {
            var first = getNextFocusElement();

            if (first) {
              first.focus();
              addClass(first, 'focused');
            }

            return;
          }

          var currentFocusOrder = focusedButton.getAttribute('data-taborder');
          var nextFocus = getNextFocusElement(currentFocusOrder);
          removeClass(focusedButton, 'focused');

          if (nextFocus) {
            nextFocus.focus();
            addClass(nextFocus, 'focused');
          }
        }

        if (key == 39) {
          instance.nextSlide();
        }

        if (key == 37) {
          instance.prevSlide();
        }

        if (key == 27) {
          instance.close();
        }
      }
    });
  }

  function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);

    if (mr === 0) {
      return 0;
    }

    var r = dot(v1, v2) / mr;

    if (r > 1) {
      r = 1;
    }

    return Math.acos(r);
  }

  function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }

  function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);

    if (cross(v1, v2) > 0) {
      angle *= -1;
    }

    return (angle * 180) / Math.PI;
  }

  var EventsHandlerAdmin = (function() {
    function EventsHandlerAdmin(el) {
      _classCallCheck(this, EventsHandlerAdmin);

      this.handlers = [];
      this.el = el;
    }

    _createClass(EventsHandlerAdmin, [
      {
        key: 'add',
        value: function add(handler) {
          this.handlers.push(handler);
        }
      },
      {
        key: 'del',
        value: function del(handler) {
          if (!handler) {
            this.handlers = [];
          }

          for (var i = this.handlers.length; i >= 0; i--) {
            if (this.handlers[i] === handler) {
              this.handlers.splice(i, 1);
            }
          }
        }
      },
      {
        key: 'dispatch',
        value: function dispatch() {
          for (var i = 0, len = this.handlers.length; i < len; i++) {
            var handler = this.handlers[i];

            if (typeof handler === 'function') {
              handler.apply(this.el, arguments);
            }
          }
        }
      }
    ]);

    return EventsHandlerAdmin;
  })();

  function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
  }

  var TouchEvents = (function() {
    function TouchEvents(el, option) {
      _classCallCheck(this, TouchEvents);

      this.element = typeof el == 'string' ? document.querySelector(el) : el;
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this);
      this.cancel = this.cancel.bind(this);
      this.element.addEventListener('touchstart', this.start, false);
      this.element.addEventListener('touchmove', this.move, false);
      this.element.addEventListener('touchend', this.end, false);
      this.element.addEventListener('touchcancel', this.cancel, false);
      this.preV = {
        x: null,
        y: null
      };
      this.pinchStartLen = null;
      this.zoom = 1;
      this.isDoubleTap = false;

      var noop = function noop() {};

      this.rotate = wrapFunc(this.element, option.rotate || noop);
      this.touchStart = wrapFunc(this.element, option.touchStart || noop);
      this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
      this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
      this.pinch = wrapFunc(this.element, option.pinch || noop);
      this.swipe = wrapFunc(this.element, option.swipe || noop);
      this.tap = wrapFunc(this.element, option.tap || noop);
      this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
      this.longTap = wrapFunc(this.element, option.longTap || noop);
      this.singleTap = wrapFunc(this.element, option.singleTap || noop);
      this.pressMove = wrapFunc(this.element, option.pressMove || noop);
      this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
      this.touchMove = wrapFunc(this.element, option.touchMove || noop);
      this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
      this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
      this.translateContainer = this.element;
      this._cancelAllHandler = this.cancelAll.bind(this);
      window.addEventListener('scroll', this._cancelAllHandler);
      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.singleTapTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = {
        x: null,
        y: null
      };
    }

    _createClass(TouchEvents, [
      {
        key: 'start',
        value: function start(evt) {
          if (!evt.touches) {
            return;
          }

          var ignoreDragFor = ['a', 'button', 'input'];

          if (
            evt.target &&
            evt.target.nodeName &&
            ignoreDragFor.indexOf(evt.target.nodeName.toLowerCase()) >= 0
          ) {
            console.log('ignore drag for this touched element', evt.target.nodeName.toLowerCase());
            return;
          }

          this.now = Date.now();
          this.x1 = evt.touches[0].pageX;
          this.y1 = evt.touches[0].pageY;
          this.delta = this.now - (this.last || this.now);
          this.touchStart.dispatch(evt, this.element);

          if (this.preTapPosition.x !== null) {
            this.isDoubleTap =
              this.delta > 0 &&
              this.delta <= 250 &&
              Math.abs(this.preTapPosition.x - this.x1) < 30 &&
              Math.abs(this.preTapPosition.y - this.y1) < 30;

            if (this.isDoubleTap) {
              clearTimeout(this.singleTapTimeout);
            }
          }

          this.preTapPosition.x = this.x1;
          this.preTapPosition.y = this.y1;
          this.last = this.now;
          var preV = this.preV,
            len = evt.touches.length;

          if (len > 1) {
            this._cancelLongTap();

            this._cancelSingleTap();

            var v = {
              x: evt.touches[1].pageX - this.x1,
              y: evt.touches[1].pageY - this.y1
            };
            preV.x = v.x;
            preV.y = v.y;
            this.pinchStartLen = getLen(preV);
            this.multipointStart.dispatch(evt, this.element);
          }

          this._preventTap = false;
          this.longTapTimeout = setTimeout(
            function() {
              this.longTap.dispatch(evt, this.element);
              this._preventTap = true;
            }.bind(this),
            750
          );
        }
      },
      {
        key: 'move',
        value: function move(evt) {
          if (!evt.touches) {
            return;
          }

          var preV = this.preV,
            len = evt.touches.length,
            currentX = evt.touches[0].pageX,
            currentY = evt.touches[0].pageY;
          this.isDoubleTap = false;

          if (len > 1) {
            var sCurrentX = evt.touches[1].pageX,
              sCurrentY = evt.touches[1].pageY;
            var v = {
              x: evt.touches[1].pageX - currentX,
              y: evt.touches[1].pageY - currentY
            };

            if (preV.x !== null) {
              if (this.pinchStartLen > 0) {
                evt.zoom = getLen(v) / this.pinchStartLen;
                this.pinch.dispatch(evt, this.element);
              }

              evt.angle = getRotateAngle(v, preV);
              this.rotate.dispatch(evt, this.element);
            }

            preV.x = v.x;
            preV.y = v.y;

            if (this.x2 !== null && this.sx2 !== null) {
              evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
              evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
            } else {
              evt.deltaX = 0;
              evt.deltaY = 0;
            }

            this.twoFingerPressMove.dispatch(evt, this.element);
            this.sx2 = sCurrentX;
            this.sy2 = sCurrentY;
          } else {
            if (this.x2 !== null) {
              evt.deltaX = currentX - this.x2;
              evt.deltaY = currentY - this.y2;
              var movedX = Math.abs(this.x1 - this.x2),
                movedY = Math.abs(this.y1 - this.y2);

              if (movedX > 10 || movedY > 10) {
                this._preventTap = true;
              }
            } else {
              evt.deltaX = 0;
              evt.deltaY = 0;
            }

            this.pressMove.dispatch(evt, this.element);
          }

          this.touchMove.dispatch(evt, this.element);

          this._cancelLongTap();

          this.x2 = currentX;
          this.y2 = currentY;

          if (len > 1) {
            evt.preventDefault();
          }
        }
      },
      {
        key: 'end',
        value: function end(evt) {
          if (!evt.changedTouches) {
            return;
          }

          this._cancelLongTap();

          var self = this;

          if (evt.touches.length < 2) {
            this.multipointEnd.dispatch(evt, this.element);
            this.sx2 = this.sy2 = null;
          }

          if (
            (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
            (this.y2 && Math.abs(this.y1 - this.y2) > 30)
          ) {
            evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
            this.swipeTimeout = setTimeout(function() {
              self.swipe.dispatch(evt, self.element);
            }, 0);
          } else {
            this.tapTimeout = setTimeout(function() {
              if (!self._preventTap) {
                self.tap.dispatch(evt, self.element);
              }

              if (self.isDoubleTap) {
                self.doubleTap.dispatch(evt, self.element);
                self.isDoubleTap = false;
              }
            }, 0);

            if (!self.isDoubleTap) {
              self.singleTapTimeout = setTimeout(function() {
                self.singleTap.dispatch(evt, self.element);
              }, 250);
            }
          }

          this.touchEnd.dispatch(evt, this.element);
          this.preV.x = 0;
          this.preV.y = 0;
          this.zoom = 1;
          this.pinchStartLen = null;
          this.x1 = this.x2 = this.y1 = this.y2 = null;
        }
      },
      {
        key: 'cancelAll',
        value: function cancelAll() {
          this._preventTap = true;
          clearTimeout(this.singleTapTimeout);
          clearTimeout(this.tapTimeout);
          clearTimeout(this.longTapTimeout);
          clearTimeout(this.swipeTimeout);
        }
      },
      {
        key: 'cancel',
        value: function cancel(evt) {
          this.cancelAll();
          this.touchCancel.dispatch(evt, this.element);
        }
      },
      {
        key: '_cancelLongTap',
        value: function _cancelLongTap() {
          clearTimeout(this.longTapTimeout);
        }
      },
      {
        key: '_cancelSingleTap',
        value: function _cancelSingleTap() {
          clearTimeout(this.singleTapTimeout);
        }
      },
      {
        key: '_swipeDirection',
        value: function _swipeDirection(x1, x2, y1, y2) {
          return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
              ? 'Left'
              : 'Right'
            : y1 - y2 > 0
            ? 'Up'
            : 'Down';
        }
      },
      {
        key: 'on',
        value: function on(evt, handler) {
          if (this[evt]) {
            this[evt].add(handler);
          }
        }
      },
      {
        key: 'off',
        value: function off(evt, handler) {
          if (this[evt]) {
            this[evt].del(handler);
          }
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          if (this.singleTapTimeout) {
            clearTimeout(this.singleTapTimeout);
          }

          if (this.tapTimeout) {
            clearTimeout(this.tapTimeout);
          }

          if (this.longTapTimeout) {
            clearTimeout(this.longTapTimeout);
          }

          if (this.swipeTimeout) {
            clearTimeout(this.swipeTimeout);
          }

          this.element.removeEventListener('touchstart', this.start);
          this.element.removeEventListener('touchmove', this.move);
          this.element.removeEventListener('touchend', this.end);
          this.element.removeEventListener('touchcancel', this.cancel);
          this.rotate.del();
          this.touchStart.del();
          this.multipointStart.del();
          this.multipointEnd.del();
          this.pinch.del();
          this.swipe.del();
          this.tap.del();
          this.doubleTap.del();
          this.longTap.del();
          this.singleTap.del();
          this.pressMove.del();
          this.twoFingerPressMove.del();
          this.touchMove.del();
          this.touchEnd.del();
          this.touchCancel.del();
          this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
          window.removeEventListener('scroll', this._cancelAllHandler);
          return null;
        }
      }
    ]);

    return TouchEvents;
  })();

  function resetSlideMove(slide) {
    var transitionEnd = whichTransitionEvent();
    var windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var media = hasClass(slide, 'gslide-media') ? slide : slide.querySelector('.gslide-media');
    var container = closest(media, '.ginner-container');
    var desc = slide.querySelector('.gslide-description');

    if (windowWidth > 769) {
      media = container;
    }

    addClass(media, 'greset');
    cssTransform(media, 'translate3d(0, 0, 0)');
    addEvent(transitionEnd, {
      onElement: media,
      once: true,
      withCallback: function withCallback(event, target) {
        removeClass(media, 'greset');
      }
    });
    media.style.opacity = '';

    if (desc) {
      desc.style.opacity = '';
    }
  }

  function touchNavigation(instance) {
    if (instance.events.hasOwnProperty('touch')) {
      return false;
    }

    var winSize = windowSize();
    var winWidth = winSize.width;
    var winHeight = winSize.height;
    var process = false;
    var currentSlide = null;
    var media = null;
    var mediaImage = null;
    var doingMove = false;
    var initScale = 1;
    var maxScale = 4.5;
    var currentScale = 1;
    var doingZoom = false;
    var imageZoomed = false;
    var zoomedPosX = null;
    var zoomedPosY = null;
    var lastZoomedPosX = null;
    var lastZoomedPosY = null;
    var hDistance;
    var vDistance;
    var hDistancePercent = 0;
    var vDistancePercent = 0;
    var vSwipe = false;
    var hSwipe = false;
    var startCoords = {};
    var endCoords = {};
    var xDown = 0;
    var yDown = 0;
    var isInlined;
    var sliderWrapper = document.getElementById('glightbox-slider');
    var overlay = document.querySelector('.goverlay');
    var touchInstance = new TouchEvents(sliderWrapper, {
      touchStart: function touchStart(e) {
        process = true;

        if (
          hasClass(e.targetTouches[0].target, 'ginner-container') ||
          closest(e.targetTouches[0].target, '.gslide-desc') ||
          e.targetTouches[0].target.nodeName.toLowerCase() == 'a'
        ) {
          process = false;
        }

        if (
          closest(e.targetTouches[0].target, '.gslide-inline') &&
          !hasClass(e.targetTouches[0].target.parentNode, 'gslide-inline')
        ) {
          process = false;
        }

        if (process) {
          endCoords = e.targetTouches[0];
          startCoords.pageX = e.targetTouches[0].pageX;
          startCoords.pageY = e.targetTouches[0].pageY;
          xDown = e.targetTouches[0].clientX;
          yDown = e.targetTouches[0].clientY;
          currentSlide = instance.activeSlide;
          media = currentSlide.querySelector('.gslide-media');
          isInlined = currentSlide.querySelector('.gslide-inline');
          mediaImage = null;

          if (hasClass(media, 'gslide-image')) {
            mediaImage = media.querySelector('img');
          }

          var windowWidth =
            window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          if (windowWidth > 769) {
            media = currentSlide.querySelector('.ginner-container');
          }

          removeClass(overlay, 'greset');

          if (e.pageX > 20 && e.pageX < window.innerWidth - 20) {
            return;
          }

          e.preventDefault();
        }
      },
      touchMove: function touchMove(e) {
        if (!process) {
          return;
        }

        endCoords = e.targetTouches[0];

        if (doingZoom || imageZoomed) {
          return;
        }

        if (isInlined && isInlined.offsetHeight > winHeight) {
          var moved = startCoords.pageX - endCoords.pageX;

          if (Math.abs(moved) <= 13) {
            return false;
          }
        }

        doingMove = true;
        var xUp = e.targetTouches[0].clientX;
        var yUp = e.targetTouches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          vSwipe = false;
          hSwipe = true;
        } else {
          hSwipe = false;
          vSwipe = true;
        }

        hDistance = endCoords.pageX - startCoords.pageX;
        hDistancePercent = (hDistance * 100) / winWidth;
        vDistance = endCoords.pageY - startCoords.pageY;
        vDistancePercent = (vDistance * 100) / winHeight;
        var opacity;

        if (vSwipe && mediaImage) {
          opacity = 1 - Math.abs(vDistance) / winHeight;
          overlay.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            hDistancePercent = 0;
          }
        }

        if (hSwipe) {
          opacity = 1 - Math.abs(hDistance) / winWidth;
          media.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            vDistancePercent = 0;
          }
        }

        if (!mediaImage) {
          return cssTransform(media, 'translate3d('.concat(hDistancePercent, '%, 0, 0)'));
        }

        cssTransform(
          media,
          'translate3d('.concat(hDistancePercent, '%, ').concat(vDistancePercent, '%, 0)')
        );
      },
      touchEnd: function touchEnd() {
        if (!process) {
          return;
        }

        doingMove = false;

        if (imageZoomed || doingZoom) {
          lastZoomedPosX = zoomedPosX;
          lastZoomedPosY = zoomedPosY;
          return;
        }

        var v = Math.abs(parseInt(vDistancePercent));
        var h = Math.abs(parseInt(hDistancePercent));

        if (v > 29 && mediaImage) {
          instance.close();
          return;
        }

        if (v < 29 && h < 25) {
          addClass(overlay, 'greset');
          overlay.style.opacity = 1;
          return resetSlideMove(media);
        }
      },
      multipointEnd: function multipointEnd() {
        setTimeout(function() {
          doingZoom = false;
        }, 50);
      },
      multipointStart: function multipointStart() {
        doingZoom = true;
        initScale = currentScale ? currentScale : 1;
      },
      pinch: function pinch(evt) {
        if (!mediaImage || doingMove) {
          return false;
        }

        doingZoom = true;
        mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
        var scale = initScale * evt.zoom;
        imageZoomed = true;

        if (scale <= 1) {
          imageZoomed = false;
          scale = 1;
          lastZoomedPosY = null;
          lastZoomedPosX = null;
          zoomedPosX = null;
          zoomedPosY = null;
          mediaImage.setAttribute('style', '');
          return;
        }

        if (scale > maxScale) {
          scale = maxScale;
        }

        mediaImage.style.transform = 'scale3d('.concat(scale, ', ').concat(scale, ', 1)');
        currentScale = scale;
      },
      pressMove: function pressMove(e) {
        if (imageZoomed && !doingZoom) {
          var mhDistance = endCoords.pageX - startCoords.pageX;
          var mvDistance = endCoords.pageY - startCoords.pageY;

          if (lastZoomedPosX) {
            mhDistance = mhDistance + lastZoomedPosX;
          }

          if (lastZoomedPosY) {
            mvDistance = mvDistance + lastZoomedPosY;
          }

          zoomedPosX = mhDistance;
          zoomedPosY = mvDistance;
          var style = 'translate3d('.concat(mhDistance, 'px, ').concat(mvDistance, 'px, 0)');

          if (currentScale) {
            style += ' scale3d('.concat(currentScale, ', ').concat(currentScale, ', 1)');
          }

          cssTransform(mediaImage, style);
        }
      },
      swipe: function swipe(evt) {
        if (imageZoomed) {
          return;
        }

        if (doingZoom) {
          doingZoom = false;
          return;
        }

        if (evt.direction == 'Left') {
          if (instance.index == instance.elements.length - 1) {
            return resetSlideMove(media);
          }

          instance.nextSlide();
        }

        if (evt.direction == 'Right') {
          if (instance.index == 0) {
            return resetSlideMove(media);
          }

          instance.prevSlide();
        }
      }
    });
    instance.events['touch'] = touchInstance;
  }

  var ZoomImages = (function() {
    function ZoomImages(el, slide) {
      var _this = this;

      var onclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, ZoomImages);

      this.img = el;
      this.slide = slide;
      this.onclose = onclose;

      if (this.img.setZoomEvents) {
        return false;
      }

      this.active = false;
      this.zoomedIn = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.img.addEventListener(
        'mousedown',
        function(e) {
          return _this.dragStart(e);
        },
        false
      );
      this.img.addEventListener(
        'mouseup',
        function(e) {
          return _this.dragEnd(e);
        },
        false
      );
      this.img.addEventListener(
        'mousemove',
        function(e) {
          return _this.drag(e);
        },
        false
      );
      this.img.addEventListener(
        'click',
        function(e) {
          if (_this.slide.classList.contains('dragging-nav')) {
            _this.zoomOut();

            return false;
          }

          if (!_this.zoomedIn) {
            return _this.zoomIn();
          }

          if (_this.zoomedIn && !_this.dragging) {
            _this.zoomOut();
          }
        },
        false
      );
      this.img.setZoomEvents = true;
    }

    _createClass(ZoomImages, [
      {
        key: 'zoomIn',
        value: function zoomIn() {
          var winWidth = this.widowWidth();

          if (this.zoomedIn || winWidth <= 768) {
            return;
          }

          var img = this.img;
          img.setAttribute('data-style', img.getAttribute('style'));
          img.style.maxWidth = img.naturalWidth + 'px';
          img.style.maxHeight = img.naturalHeight + 'px';

          if (img.naturalWidth > winWidth) {
            var centerX = winWidth / 2 - img.naturalWidth / 2;
            this.setTranslate(this.img.parentNode, centerX, 0);
          }

          this.slide.classList.add('zoomed');
          this.zoomedIn = true;
        }
      },
      {
        key: 'zoomOut',
        value: function zoomOut() {
          this.img.parentNode.setAttribute('style', '');
          this.img.setAttribute('style', this.img.getAttribute('data-style'));
          this.slide.classList.remove('zoomed');
          this.zoomedIn = false;
          this.currentX = null;
          this.currentY = null;
          this.initialX = null;
          this.initialY = null;
          this.xOffset = 0;
          this.yOffset = 0;

          if (this.onclose && typeof this.onclose == 'function') {
            this.onclose();
          }
        }
      },
      {
        key: 'dragStart',
        value: function dragStart(e) {
          e.preventDefault();

          if (!this.zoomedIn) {
            this.active = false;
            return;
          }

          if (e.type === 'touchstart') {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
          } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
          }

          if (e.target === this.img) {
            this.active = true;
            this.img.classList.add('dragging');
          }
        }
      },
      {
        key: 'dragEnd',
        value: function dragEnd(e) {
          var _this2 = this;

          e.preventDefault();
          this.initialX = this.currentX;
          this.initialY = this.currentY;
          this.active = false;
          setTimeout(function() {
            _this2.dragging = false;
            _this2.img.isDragging = false;

            _this2.img.classList.remove('dragging');
          }, 100);
        }
      },
      {
        key: 'drag',
        value: function drag(e) {
          if (this.active) {
            e.preventDefault();

            if (e.type === 'touchmove') {
              this.currentX = e.touches[0].clientX - this.initialX;
              this.currentY = e.touches[0].clientY - this.initialY;
            } else {
              this.currentX = e.clientX - this.initialX;
              this.currentY = e.clientY - this.initialY;
            }

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            this.img.isDragging = true;
            this.dragging = true;
            this.setTranslate(this.img, this.currentX, this.currentY);
          }
        }
      },
      {
        key: 'onMove',
        value: function onMove(e) {
          if (!this.zoomedIn) {
            return;
          }

          var xOffset = e.clientX - this.img.naturalWidth / 2;
          var yOffset = e.clientY - this.img.naturalHeight / 2;
          this.setTranslate(this.img, xOffset, yOffset);
        }
      },
      {
        key: 'setTranslate',
        value: function setTranslate(node, xPos, yPos) {
          node.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
        }
      },
      {
        key: 'widowWidth',
        value: function widowWidth() {
          return (
            window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          );
        }
      }
    ]);

    return ZoomImages;
  })();

  var DragSlides = (function() {
    function DragSlides() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DragSlides);

      var dragEl = config.dragEl,
        _config$toleranceX = config.toleranceX,
        toleranceX = _config$toleranceX === void 0 ? 40 : _config$toleranceX,
        _config$toleranceY = config.toleranceY,
        toleranceY = _config$toleranceY === void 0 ? 65 : _config$toleranceY,
        _config$slide = config.slide,
        slide = _config$slide === void 0 ? null : _config$slide,
        _config$instance = config.instance,
        instance = _config$instance === void 0 ? null : _config$instance;
      this.el = dragEl;
      this.active = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.direction = null;
      this.lastDirection = null;
      this.toleranceX = toleranceX;
      this.toleranceY = toleranceY;
      this.toleranceReached = false;
      this.dragContainer = this.el;
      this.slide = slide;
      this.instance = instance;
      this.el.addEventListener(
        'mousedown',
        function(e) {
          return _this.dragStart(e);
        },
        false
      );
      this.el.addEventListener(
        'mouseup',
        function(e) {
          return _this.dragEnd(e);
        },
        false
      );
      this.el.addEventListener(
        'mousemove',
        function(e) {
          return _this.drag(e);
        },
        false
      );
    }

    _createClass(DragSlides, [
      {
        key: 'dragStart',
        value: function dragStart(e) {
          if (this.slide.classList.contains('zoomed')) {
            this.active = false;
            return;
          }

          if (e.type === 'touchstart') {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
          } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
          }

          var clicked = e.target.nodeName.toLowerCase();
          var exludeClicks = ['input', 'select', 'textarea', 'button', 'a'];

          if (
            e.target.classList.contains('nodrag') ||
            closest(e.target, '.nodrag') ||
            exludeClicks.indexOf(clicked) !== -1
          ) {
            this.active = false;
            return;
          }

          e.preventDefault();

          if (e.target === this.el || (clicked !== 'img' && closest(e.target, '.gslide-inline'))) {
            this.active = true;
            this.el.classList.add('dragging');
            this.dragContainer = closest(e.target, '.ginner-container');
          }
        }
      },
      {
        key: 'dragEnd',
        value: function dragEnd(e) {
          var _this2 = this;

          e && e.preventDefault();
          this.initialX = 0;
          this.initialY = 0;
          this.currentX = null;
          this.currentY = null;
          this.initialX = null;
          this.initialY = null;
          this.xOffset = 0;
          this.yOffset = 0;
          this.active = false;

          if (this.doSlideChange) {
            this.instance.preventOutsideClick = true;
            this.doSlideChange == 'right' && this.instance.prevSlide();
            this.doSlideChange == 'left' && this.instance.nextSlide();
          }

          if (this.doSlideClose) {
            this.instance.close();
          }

          if (!this.toleranceReached) {
            this.setTranslate(this.dragContainer, 0, 0, true);
          }

          setTimeout(function() {
            _this2.instance.preventOutsideClick = false;
            _this2.toleranceReached = false;
            _this2.lastDirection = null;
            _this2.dragging = false;
            _this2.el.isDragging = false;

            _this2.el.classList.remove('dragging');

            _this2.slide.classList.remove('dragging-nav');

            _this2.dragContainer.style.transform = '';
            _this2.dragContainer.style.transition = '';
          }, 100);
        }
      },
      {
        key: 'drag',
        value: function drag(e) {
          if (this.active) {
            e.preventDefault();
            this.slide.classList.add('dragging-nav');

            if (e.type === 'touchmove') {
              this.currentX = e.touches[0].clientX - this.initialX;
              this.currentY = e.touches[0].clientY - this.initialY;
            } else {
              this.currentX = e.clientX - this.initialX;
              this.currentY = e.clientY - this.initialY;
            }

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            this.el.isDragging = true;
            this.dragging = true;
            this.doSlideChange = false;
            this.doSlideClose = false;
            var currentXInt = Math.abs(this.currentX);
            var currentYInt = Math.abs(this.currentY);

            if (
              currentXInt > 0 &&
              currentXInt >= Math.abs(this.currentY) &&
              (!this.lastDirection || this.lastDirection == 'x')
            ) {
              this.yOffset = 0;
              this.lastDirection = 'x';
              this.setTranslate(this.dragContainer, this.currentX, 0);
              var doChange = this.shouldChange();

              if (!this.instance.settings.dragAutoSnap && doChange) {
                this.doSlideChange = doChange;
              }

              if (this.instance.settings.dragAutoSnap && doChange) {
                this.instance.preventOutsideClick = true;
                this.toleranceReached = true;
                this.active = false;
                this.instance.preventOutsideClick = true;
                this.dragEnd(null);
                doChange == 'right' && this.instance.prevSlide();
                doChange == 'left' && this.instance.nextSlide();
                return;
              }
            }

            if (
              this.toleranceY > 0 &&
              currentYInt > 0 &&
              currentYInt >= currentXInt &&
              (!this.lastDirection || this.lastDirection == 'y')
            ) {
              this.xOffset = 0;
              this.lastDirection = 'y';
              this.setTranslate(this.dragContainer, 0, this.currentY);
              var doClose = this.shouldClose();

              if (!this.instance.settings.dragAutoSnap && doClose) {
                this.doSlideClose = true;
              }

              if (this.instance.settings.dragAutoSnap && doClose) {
                this.instance.close();
              }

              return;
            }
          }
        }
      },
      {
        key: 'shouldChange',
        value: function shouldChange() {
          var doChange = false;
          var currentXInt = Math.abs(this.currentX);

          if (currentXInt >= this.toleranceX) {
            var dragDir = this.currentX > 0 ? 'right' : 'left';

            if (
              (dragDir == 'left' && this.slide !== this.slide.parentNode.lastChild) ||
              (dragDir == 'right' && this.slide !== this.slide.parentNode.firstChild)
            ) {
              doChange = dragDir;
            }
          }

          return doChange;
        }
      },
      {
        key: 'shouldClose',
        value: function shouldClose() {
          var doClose = false;
          var currentYInt = Math.abs(this.currentY);

          if (currentYInt >= this.toleranceY) {
            doClose = true;
          }

          return doClose;
        }
      },
      {
        key: 'setTranslate',
        value: function setTranslate(node, xPos, yPos) {
          var animated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (animated) {
            node.style.transition = 'all .2s ease';
          } else {
            node.style.transition = '';
          }

          node.style.transform = 'translate3d('.concat(xPos, 'px, ').concat(yPos, 'px, 0)');
        }
      }
    ]);

    return DragSlides;
  })();

  function slideImage(slide, data, index, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var img = new Image();
    var titleID = 'gSlideTitle_' + index;
    var textID = 'gSlideDesc_' + index;
    img.addEventListener(
      'load',
      function() {
        if (isFunction(callback)) {
          callback();
        }
      },
      false
    );
    img.src = data.href;

    if (data.sizes != '' && data.srcset != '') {
      img.sizes = data.sizes;
      img.srcset = data.srcset;
    }

    img.alt = '';

    if (!isNil(data.alt) && data.alt !== '') {
      img.alt = data.alt;
    }

    if (data.title !== '') {
      img.setAttribute('aria-labelledby', titleID);
    }

    if (data.description !== '') {
      img.setAttribute('aria-describedby', textID);
    }

    if (data.hasOwnProperty('_hasCustomWidth') && data._hasCustomWidth) {
      img.style.width = data.width;
    }

    if (data.hasOwnProperty('_hasCustomHeight') && data._hasCustomHeight) {
      img.style.height = data.height;
    }

    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
  }

  function slideVideo(slide, data, index, callback) {
    var _this = this;

    var slideContainer = slide.querySelector('.ginner-container');
    var videoID = 'gvideo' + index;
    var slideMedia = slide.querySelector('.gslide-media');
    var videoPlayers = this.getAllPlayers();
    addClass(slideContainer, 'gvideo-container');
    slideMedia.insertBefore(
      createHTML('<div class="gvideo-wrapper"></div>'),
      slideMedia.firstChild
    );
    var videoWrapper = slide.querySelector('.gvideo-wrapper');
    injectAssets(this.settings.plyr.css, 'Plyr');
    var url = data.href;
    var provider = data === null || data === void 0 ? void 0 : data.videoProvider;
    var customPlaceholder = false;
    slideMedia.style.maxWidth = data.width;
    injectAssets(this.settings.plyr.js, 'Plyr', function() {
      if (!provider && url.match(/vimeo\.com\/([0-9]*)/)) {
        provider = 'vimeo';
      }

      if (
        !provider &&
        (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) ||
          url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
          url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))
      ) {
        provider = 'youtube';
      }

      if (provider === 'local' || !provider) {
        provider = 'local';
        var html = '<video id="' + videoID + '" ';
        html += 'style="background:#000; max-width: '.concat(data.width, ';" ');
        html += 'preload="metadata" ';
        html += 'x-webkit-airplay="allow" ';
        html += 'playsinline ';
        html += 'controls ';
        html += 'class="gvideo-local">';
        html += '<source src="'.concat(url, '">');
        html += '</video>';
        customPlaceholder = createHTML(html);
      }

      var placeholder = customPlaceholder
        ? customPlaceholder
        : createHTML(
            '<div id="'
              .concat(videoID, '" data-plyr-provider="')
              .concat(provider, '" data-plyr-embed-id="')
              .concat(url, '"></div>')
          );
      addClass(videoWrapper, ''.concat(provider, '-video gvideo'));
      videoWrapper.appendChild(placeholder);
      videoWrapper.setAttribute('data-id', videoID);
      videoWrapper.setAttribute('data-index', index);
      var playerConfig = has(_this.settings.plyr, 'config') ? _this.settings.plyr.config : {};
      var player = new Plyr('#' + videoID, playerConfig);
      player.on('ready', function(event) {
        videoPlayers[videoID] = event.detail.plyr;

        if (isFunction(callback)) {
          callback();
        }
      });
      waitUntil(
        function() {
          return (
            slide.querySelector('iframe') && slide.querySelector('iframe').dataset.ready == 'true'
          );
        },
        function() {
          _this.resize(slide);
        }
      );
      player.on('enterfullscreen', handleMediaFullScreen);
      player.on('exitfullscreen', handleMediaFullScreen);
    });
  }

  function handleMediaFullScreen(event) {
    var media = closest(event.target, '.gslide-media');

    if (event.type === 'enterfullscreen') {
      addClass(media, 'fullscreen');
    }

    if (event.type === 'exitfullscreen') {
      removeClass(media, 'fullscreen');
    }
  }

  function slideInline(slide, data, index, callback) {
    var _this = this;

    var slideMedia = slide.querySelector('.gslide-media');
    var hash =
      has(data, 'href') && data.href
        ? data.href
            .split('#')
            .pop()
            .trim()
        : false;
    var content = has(data, 'content') && data.content ? data.content : false;
    var innerContent;

    if (content) {
      if (isString(content)) {
        innerContent = createHTML('<div class="ginlined-content">'.concat(content, '</div>'));
      }

      if (isNode(content)) {
        if (content.style.display == 'none') {
          content.style.display = 'block';
        }

        var container = document.createElement('div');
        container.className = 'ginlined-content';
        container.appendChild(content);
        innerContent = container;
      }
    }

    if (hash) {
      var div = document.getElementById(hash);

      if (!div) {
        return false;
      }

      var cloned = div.cloneNode(true);
      cloned.style.height = data.height;
      cloned.style.maxWidth = data.width;
      addClass(cloned, 'ginlined-content');
      innerContent = cloned;
    }

    if (!innerContent) {
      console.error('Unable to append inline slide content', data);
      return false;
    }

    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events['inlineclose' + hash] = addEvent('click', {
      onElement: slideMedia.querySelectorAll('.gtrigger-close'),
      withCallback: function withCallback(e) {
        e.preventDefault();

        _this.close();
      }
    });

    if (isFunction(callback)) {
      callback();
    }

    return;
  }

  function slideIframe(slide, data, index, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var iframe = createIframe({
      url: data.href,
      callback: callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
  }

  var SlideConfigParser = (function() {
    function SlideConfigParser() {
      var slideParamas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SlideConfigParser);

      this.defaults = {
        href: '',
        sizes: '',
        srcset: '',
        title: '',
        type: '',
        videoProvider: '',
        description: '',
        alt: '',
        descPosition: 'bottom',
        effect: '',
        width: '',
        height: '',
        content: false,
        zoomable: true,
        draggable: true
      };

      if (isObject(slideParamas)) {
        this.defaults = extend(this.defaults, slideParamas);
      }
    }

    _createClass(SlideConfigParser, [
      {
        key: 'sourceType',
        value: function sourceType(url) {
          var origin = url;
          url = url.toLowerCase();

          if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null) {
            return 'image';
          }

          if (
            url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) ||
            url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
            url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)
          ) {
            return 'video';
          }

          if (url.match(/vimeo\.com\/([0-9]*)/)) {
            return 'video';
          }

          if (url.match(/\.(mp4|ogg|webm|mov)/) !== null) {
            return 'video';
          }

          if (url.match(/\.(mp3|wav|wma|aac|ogg)/) !== null) {
            return 'audio';
          }

          if (url.indexOf('#') > -1) {
            var hash = origin.split('#').pop();

            if (hash.trim() !== '') {
              return 'inline';
            }
          }

          if (url.indexOf('goajax=true') > -1) {
            return 'ajax';
          }

          return 'external';
        }
      },
      {
        key: 'parseConfig',
        value: function parseConfig(element, settings) {
          var _this = this;

          var data = extend(
            {
              descPosition: settings.descPosition
            },
            this.defaults
          );

          if (isObject(element) && !isNode(element)) {
            if (!has(element, 'type')) {
              if (has(element, 'content') && element.content) {
                element.type = 'inline';
              } else if (has(element, 'href')) {
                element.type = this.sourceType(element.href);
              }
            }

            var objectData = extend(data, element);
            this.setSize(objectData, settings);
            return objectData;
          }

          var url = '';
          var config = element.getAttribute('data-glightbox');
          var nodeType = element.nodeName.toLowerCase();

          if (nodeType === 'a') {
            url = element.href;
          }

          if (nodeType === 'img') {
            url = element.src;
            data.alt = element.alt;
          }

          data.href = url;
          each(data, function(val, key) {
            if (has(settings, key) && key !== 'width') {
              data[key] = settings[key];
            }

            var nodeData = element.dataset[key];

            if (!isNil(nodeData)) {
              data[key] = _this.sanitizeValue(nodeData);
            }
          });

          if (data.content) {
            data.type = 'inline';
          }

          if (!data.type && url) {
            data.type = this.sourceType(url);
          }

          if (!isNil(config)) {
            var cleanKeys = [];
            each(data, function(v, k) {
              cleanKeys.push(';\\s?' + k);
            });
            cleanKeys = cleanKeys.join('\\s?:|');

            if (config.trim() !== '') {
              each(data, function(val, key) {
                var str = config;
                var match = 's?' + key + 's?:s?(.*?)(' + cleanKeys + 's?:|$)';
                var regex = new RegExp(match);
                var matches = str.match(regex);

                if (matches && matches.length && matches[1]) {
                  var value = matches[1].trim().replace(/;\s*$/, '');
                  data[key] = _this.sanitizeValue(value);
                }
              });
            }
          } else {
            if (!data.title && nodeType == 'a') {
              var title = element.title;

              if (!isNil(title) && title !== '') {
                data.title = title;
              }
            }

            if (!data.title && nodeType == 'img') {
              var alt = element.alt;

              if (!isNil(alt) && alt !== '') {
                data.title = alt;
              }
            }
          }

          if (data.description && data.description.substring(0, 1) === '.') {
            var description;

            try {
              description = document.querySelector(data.description).innerHTML;
            } catch (error) {
              if (!(error instanceof DOMException)) {
                throw error;
              }
            }

            if (description) {
              data.description = description;
            }
          }

          if (!data.description) {
            var nodeDesc = element.querySelector('.glightbox-desc');

            if (nodeDesc) {
              data.description = nodeDesc.innerHTML;
            }
          }

          this.setSize(data, settings, element);
          this.slideConfig = data;
          return data;
        }
      },
      {
        key: 'setSize',
        value: function setSize(data, settings) {
          var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var defaultWith =
            data.type == 'video'
              ? this.checkSize(settings.videosWidth)
              : this.checkSize(settings.width);
          var defaultHeight = this.checkSize(settings.height);
          data.width =
            has(data, 'width') && data.width !== '' ? this.checkSize(data.width) : defaultWith;
          data.height =
            has(data, 'height') && data.height !== '' ? this.checkSize(data.height) : defaultHeight;

          if (element && data.type == 'image') {
            data._hasCustomWidth = element.dataset.width ? true : false;
            data._hasCustomHeight = element.dataset.height ? true : false;
          }

          return data;
        }
      },
      {
        key: 'checkSize',
        value: function checkSize(size) {
          return isNumber(size) ? ''.concat(size, 'px') : size;
        }
      },
      {
        key: 'sanitizeValue',
        value: function sanitizeValue(val) {
          if (val !== 'true' && val !== 'false') {
            return val;
          }

          return val === 'true';
        }
      }
    ]);

    return SlideConfigParser;
  })();

  var Slide = (function() {
    function Slide(el, instance, index) {
      _classCallCheck(this, Slide);

      this.element = el;
      this.instance = instance;
      this.index = index;
    }

    _createClass(Slide, [
      {
        key: 'setContent',
        value: function setContent() {
          var _this = this;

          var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (hasClass(slide, 'loaded')) {
            return false;
          }

          var settings = this.instance.settings;
          var slideConfig = this.slideConfig;
          var isMobileDevice = isMobile();

          if (isFunction(settings.beforeSlideLoad)) {
            settings.beforeSlideLoad({
              index: this.index,
              slide: slide,
              player: false
            });
          }

          var type = slideConfig.type;
          var position = slideConfig.descPosition;
          var slideMedia = slide.querySelector('.gslide-media');
          var slideTitle = slide.querySelector('.gslide-title');
          var slideText = slide.querySelector('.gslide-desc');
          var slideDesc = slide.querySelector('.gdesc-inner');
          var finalCallback = callback;
          var titleID = 'gSlideTitle_' + this.index;
          var textID = 'gSlideDesc_' + this.index;

          if (isFunction(settings.afterSlideLoad)) {
            finalCallback = function finalCallback() {
              if (isFunction(callback)) {
                callback();
              }

              settings.afterSlideLoad({
                index: _this.index,
                slide: slide,
                player: _this.instance.getSlidePlayerInstance(_this.index)
              });
            };
          }

          if (slideConfig.title == '' && slideConfig.description == '') {
            if (slideDesc) {
              slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
            }
          } else {
            if (slideTitle && slideConfig.title !== '') {
              slideTitle.id = titleID;
              slideTitle.innerHTML = slideConfig.title;
            } else {
              slideTitle.parentNode.removeChild(slideTitle);
            }

            if (slideText && slideConfig.description !== '') {
              slideText.id = textID;

              if (isMobileDevice && settings.moreLength > 0) {
                slideConfig.smallDescription = this.slideShortDesc(
                  slideConfig.description,
                  settings.moreLength,
                  settings.moreText
                );
                slideText.innerHTML = slideConfig.smallDescription;
                this.descriptionEvents(slideText, slideConfig);
              } else {
                slideText.innerHTML = slideConfig.description;
              }
            } else {
              slideText.parentNode.removeChild(slideText);
            }

            addClass(slideMedia.parentNode, 'desc-'.concat(position));
            addClass(slideDesc.parentNode, 'description-'.concat(position));
          }

          addClass(slideMedia, 'gslide-'.concat(type));
          addClass(slide, 'loaded');

          if (type === 'video') {
            slideVideo.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);
            return;
          }

          if (type === 'external') {
            slideIframe.apply(this, [slide, slideConfig, this.index, finalCallback]);
            return;
          }

          if (type === 'inline') {
            slideInline.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);

            if (slideConfig.draggable) {
              new DragSlides({
                dragEl: slide.querySelector('.gslide-inline'),
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide: slide,
                instance: this.instance
              });
            }

            return;
          }

          if (type === 'image') {
            slideImage(slide, slideConfig, this.index, function() {
              var img = slide.querySelector('img');

              if (slideConfig.draggable) {
                new DragSlides({
                  dragEl: img,
                  toleranceX: settings.dragToleranceX,
                  toleranceY: settings.dragToleranceY,
                  slide: slide,
                  instance: _this.instance
                });
              }

              if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
                addClass(img, 'zoomable');
                new ZoomImages(img, slide, function() {
                  _this.instance.resize();
                });
              }

              if (isFunction(finalCallback)) {
                finalCallback();
              }
            });
            return;
          }

          if (isFunction(finalCallback)) {
            finalCallback();
          }
        }
      },
      {
        key: 'slideShortDesc',
        value: function slideShortDesc(string) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
          var wordBoundary =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var div = document.createElement('div');
          div.innerHTML = string;
          var cleanedString = div.innerText;
          var useWordBoundary = wordBoundary;
          string = cleanedString.trim();

          if (string.length <= n) {
            return string;
          }

          var subString = string.substr(0, n - 1);

          if (!useWordBoundary) {
            return subString;
          }

          div = null;
          return subString + '... <a href="#" class="desc-more">' + wordBoundary + '</a>';
        }
      },
      {
        key: 'descriptionEvents',
        value: function descriptionEvents(desc, data) {
          var _this2 = this;

          var moreLink = desc.querySelector('.desc-more');

          if (!moreLink) {
            return false;
          }

          addEvent('click', {
            onElement: moreLink,
            withCallback: function withCallback(event, target) {
              event.preventDefault();
              var body = document.body;
              var desc = closest(target, '.gslide-desc');

              if (!desc) {
                return false;
              }

              desc.innerHTML = data.description;
              addClass(body, 'gdesc-open');
              var shortEvent = addEvent('click', {
                onElement: [body, closest(desc, '.gslide-description')],
                withCallback: function withCallback(event, target) {
                  if (event.target.nodeName.toLowerCase() !== 'a') {
                    removeClass(body, 'gdesc-open');
                    addClass(body, 'gdesc-closed');
                    desc.innerHTML = data.smallDescription;

                    _this2.descriptionEvents(desc, data);

                    setTimeout(function() {
                      removeClass(body, 'gdesc-closed');
                    }, 400);
                    shortEvent.destroy();
                  }
                }
              });
            }
          });
        }
      },
      {
        key: 'create',
        value: function create() {
          return createHTML(this.instance.settings.slideHTML);
        }
      },
      {
        key: 'getConfig',
        value: function getConfig() {
          if (!isNode(this.element) && !this.element.hasOwnProperty('draggable')) {
            this.element.draggable = this.instance.settings.draggable;
          }

          var parser = new SlideConfigParser(this.instance.settings.slideExtraAttributes);
          this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
          return this.slideConfig;
        }
      }
    ]);

    return Slide;
  })();

  var _version = '3.1.0';

  var isMobile$1 = isMobile();

  var isTouch$1 = isTouch();

  var html = document.getElementsByTagName('html')[0];
  var defaults = {
    selector: '.glightbox',
    elements: null,
    skin: 'clean',
    theme: 'clean',
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    autofocusVideos: true,
    descPosition: 'bottom',
    width: '900px',
    height: '506px',
    videosWidth: '960px',
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    slideExtraAttributes: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plugins: false,
    plyr: {
      css: 'https://cdn.plyr.io/3.6.12/plyr.css',
      js: 'https://cdn.plyr.io/3.6.12/plyr.js',
      config: {
        ratio: '16:9',
        fullscreen: {
          enabled: true,
          iosNative: true
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false
        }
      }
    },
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    moreText: 'See more',
    moreLength: 60,
    cssEfects: {
      fade: {
        in: 'fadeIn',
        out: 'fadeOut'
      },
      zoom: {
        in: 'zoomIn',
        out: 'zoomOut'
      },
      slide: {
        in: 'slideInRight',
        out: 'slideOutLeft'
      },
      slideBack: {
        in: 'slideInLeft',
        out: 'slideOutRight'
      },
      none: {
        in: 'none',
        out: 'none'
      }
    },
    svg: {
      close:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev:
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
  };
  defaults.slideHTML =
    '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
  defaults.lightboxHTML =
    '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>';

  var GlightboxInit = (function() {
    function GlightboxInit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GlightboxInit);

      this.customOptions = options;
      this.settings = extend(defaults, options);
      this.effectsClasses = this.getAnimationClasses();
      this.videoPlayers = {};
      this.apiEvents = [];
      this.fullElementsList = false;
    }

    _createClass(GlightboxInit, [
      {
        key: 'init',
        value: function init() {
          var _this = this;

          var selector = this.getSelector();

          if (selector) {
            this.baseEvents = addEvent('click', {
              onElement: selector,
              withCallback: function withCallback(e, target) {
                e.preventDefault();

                _this.open(target);
              }
            });
          }

          this.elements = this.getElements();
        }
      },
      {
        key: 'open',
        value: function open() {
          var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (this.elements.length === 0) {
            return false;
          }

          this.activeSlide = null;
          this.prevActiveSlideIndex = null;
          this.prevActiveSlide = null;
          var index = isNumber(startAt) ? startAt : this.settings.startAt;

          if (isNode(element)) {
            var gallery = element.getAttribute('data-gallery');

            if (gallery) {
              this.fullElementsList = this.elements;
              this.elements = this.getGalleryElements(this.elements, gallery);
            }

            if (isNil(index)) {
              index = this.getElementIndex(element);

              if (index < 0) {
                index = 0;
              }
            }
          }

          if (!isNumber(index)) {
            index = 0;
          }

          this.build();

          animateElement(
            this.overlay,
            this.settings.openEffect === 'none' ? 'none' : this.settings.cssEfects.fade['in']
          );

          var body = document.body;
          var scrollBar = window.innerWidth - document.documentElement.clientWidth;

          if (scrollBar > 0) {
            var styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            styleSheet.className = 'gcss-styles';
            styleSheet.innerText = '.gscrollbar-fixer {margin-right: '.concat(scrollBar, 'px}');
            document.head.appendChild(styleSheet);

            addClass(body, 'gscrollbar-fixer');
          }

          addClass(body, 'glightbox-open');

          addClass(html, 'glightbox-open');

          if (isMobile$1) {
            addClass(document.body, 'glightbox-mobile');

            this.settings.slideEffect = 'slide';
          }

          this.showSlide(index, true);

          if (this.elements.length === 1) {
            addClass(this.prevButton, 'glightbox-button-hidden');

            addClass(this.nextButton, 'glightbox-button-hidden');
          } else {
            removeClass(this.prevButton, 'glightbox-button-hidden');

            removeClass(this.nextButton, 'glightbox-button-hidden');
          }

          this.lightboxOpen = true;
          this.trigger('open');

          if (isFunction(this.settings.onOpen)) {
            this.settings.onOpen();
          }

          if (isTouch$1 && this.settings.touchNavigation) {
            touchNavigation(this);
          }

          if (this.settings.keyboardNavigation) {
            keyboardNavigation(this);
          }
        }
      },
      {
        key: 'openAt',
        value: function openAt() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          this.open(null, index);
        }
      },
      {
        key: 'showSlide',
        value: function showSlide() {
          var _this2 = this;

          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          show(this.loader);

          this.index = parseInt(index);
          var current = this.slidesContainer.querySelector('.current');

          if (current) {
            removeClass(current, 'current');
          }

          this.slideAnimateOut();
          var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

          if (hasClass(slideNode, 'loaded')) {
            this.slideAnimateIn(slideNode, first);

            hide(this.loader);
          } else {
            show(this.loader);

            var slide = this.elements[index];
            var slideData = {
              index: this.index,
              slide: slideNode,
              slideNode: slideNode,
              slideConfig: slide.slideConfig,
              slideIndex: this.index,
              trigger: slide.node,
              player: null
            };
            this.trigger('slide_before_load', slideData);
            slide.instance.setContent(slideNode, function() {
              hide(_this2.loader);

              _this2.resize();

              _this2.slideAnimateIn(slideNode, first);

              _this2.trigger('slide_after_load', slideData);
            });
          }

          this.slideDescription = slideNode.querySelector('.gslide-description');
          this.slideDescriptionContained =
            this.slideDescription && hasClass(this.slideDescription.parentNode, 'gslide-media');

          if (this.settings.preload) {
            this.preloadSlide(index + 1);
            this.preloadSlide(index - 1);
          }

          this.updateNavigationClasses();
          this.activeSlide = slideNode;
        }
      },
      {
        key: 'preloadSlide',
        value: function preloadSlide(index) {
          var _this3 = this;

          if (index < 0 || index > this.elements.length - 1) {
            return false;
          }

          if (isNil(this.elements[index])) {
            return false;
          }

          var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

          if (hasClass(slideNode, 'loaded')) {
            return false;
          }

          var slide = this.elements[index];
          var type = slide.type;
          var slideData = {
            index: index,
            slide: slideNode,
            slideNode: slideNode,
            slideConfig: slide.slideConfig,
            slideIndex: index,
            trigger: slide.node,
            player: null
          };
          this.trigger('slide_before_load', slideData);

          if (type === 'video' || type === 'external') {
            setTimeout(function() {
              slide.instance.setContent(slideNode, function() {
                _this3.trigger('slide_after_load', slideData);
              });
            }, 200);
          } else {
            slide.instance.setContent(slideNode, function() {
              _this3.trigger('slide_after_load', slideData);
            });
          }
        }
      },
      {
        key: 'prevSlide',
        value: function prevSlide() {
          this.goToSlide(this.index - 1);
        }
      },
      {
        key: 'nextSlide',
        value: function nextSlide() {
          this.goToSlide(this.index + 1);
        }
      },
      {
        key: 'goToSlide',
        value: function goToSlide() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.prevActiveSlide = this.activeSlide;
          this.prevActiveSlideIndex = this.index;

          if (!this.loop() && (index < 0 || index > this.elements.length - 1)) {
            return false;
          }

          if (index < 0) {
            index = this.elements.length - 1;
          } else if (index >= this.elements.length) {
            index = 0;
          }

          this.showSlide(index);
        }
      },
      {
        key: 'insertSlide',
        value: function insertSlide() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

          if (index < 0) {
            index = this.elements.length;
          }

          var slide = new Slide(config, this, index);
          var data = slide.getConfig();

          var slideInfo = extend({}, data);

          var newSlide = slide.create();
          var totalSlides = this.elements.length - 1;
          slideInfo.index = index;
          slideInfo.node = false;
          slideInfo.instance = slide;
          slideInfo.slideConfig = data;
          this.elements.splice(index, 0, slideInfo);
          var addedSlideNode = null;
          var addedSlidePlayer = null;

          if (this.slidesContainer) {
            if (index > totalSlides) {
              this.slidesContainer.appendChild(newSlide);
            } else {
              var existingSlide = this.slidesContainer.querySelectorAll('.gslide')[index];
              this.slidesContainer.insertBefore(newSlide, existingSlide);
            }

            if (
              (this.settings.preload && this.index == 0 && index == 0) ||
              this.index - 1 == index ||
              this.index + 1 == index
            ) {
              this.preloadSlide(index);
            }

            if (this.index === 0 && index === 0) {
              this.index = 1;
            }

            this.updateNavigationClasses();
            addedSlideNode = this.slidesContainer.querySelectorAll('.gslide')[index];
            addedSlidePlayer = this.getSlidePlayerInstance(index);
            slideInfo.slideNode = addedSlideNode;
          }

          this.trigger('slide_inserted', {
            index: index,
            slide: addedSlideNode,
            slideNode: addedSlideNode,
            slideConfig: data,
            slideIndex: index,
            trigger: null,
            player: addedSlidePlayer
          });

          if (isFunction(this.settings.slideInserted)) {
            this.settings.slideInserted({
              index: index,
              slide: addedSlideNode,
              player: addedSlidePlayer
            });
          }
        }
      },
      {
        key: 'removeSlide',
        value: function removeSlide() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

          if (index < 0 || index > this.elements.length - 1) {
            return false;
          }

          var slide =
            this.slidesContainer && this.slidesContainer.querySelectorAll('.gslide')[index];

          if (slide) {
            if (this.getActiveSlideIndex() == index) {
              if (index == this.elements.length - 1) {
                this.prevSlide();
              } else {
                this.nextSlide();
              }
            }

            slide.parentNode.removeChild(slide);
          }

          this.elements.splice(index, 1);
          this.trigger('slide_removed', index);

          if (isFunction(this.settings.slideRemoved)) {
            this.settings.slideRemoved(index);
          }
        }
      },
      {
        key: 'slideAnimateIn',
        value: function slideAnimateIn(slide, first) {
          var _this4 = this;

          var slideMedia = slide.querySelector('.gslide-media');
          var slideDesc = slide.querySelector('.gslide-description');
          var prevData = {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlide,
            slideConfig: isNil(this.prevActiveSlideIndex)
              ? null
              : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: isNil(this.prevActiveSlideIndex)
              ? null
              : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          };
          var nextData = {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideConfig: this.elements[this.index].slideConfig,
            slideIndex: this.index,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          };

          if (slideMedia.offsetWidth > 0 && slideDesc) {
            hide(slideDesc);

            slideDesc.style.display = '';
          }

          removeClass(slide, this.effectsClasses);

          if (first) {
            animateElement(
              slide,
              this.settings.cssEfects[this.settings.openEffect]['in'],
              function() {
                if (_this4.settings.autoplayVideos) {
                  _this4.slidePlayerPlay(slide);
                }

                _this4.trigger('slide_changed', {
                  prev: prevData,
                  current: nextData
                });

                if (isFunction(_this4.settings.afterSlideChange)) {
                  _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
                }
              }
            );
          } else {
            var effectName = this.settings.slideEffect;
            var animIn =
              effectName !== 'none' ? this.settings.cssEfects[effectName]['in'] : effectName;

            if (this.prevActiveSlideIndex > this.index) {
              if (this.settings.slideEffect == 'slide') {
                animIn = this.settings.cssEfects.slideBack['in'];
              }
            }

            animateElement(slide, animIn, function() {
              if (_this4.settings.autoplayVideos) {
                _this4.slidePlayerPlay(slide);
              }

              _this4.trigger('slide_changed', {
                prev: prevData,
                current: nextData
              });

              if (isFunction(_this4.settings.afterSlideChange)) {
                _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
              }
            });
          }

          setTimeout(function() {
            _this4.resize(slide);
          }, 100);

          addClass(slide, 'current');
        }
      },
      {
        key: 'slideAnimateOut',
        value: function slideAnimateOut() {
          if (!this.prevActiveSlide) {
            return false;
          }

          var prevSlide = this.prevActiveSlide;

          removeClass(prevSlide, this.effectsClasses);

          addClass(prevSlide, 'prev');

          var animation = this.settings.slideEffect;
          var animOut = animation !== 'none' ? this.settings.cssEfects[animation].out : animation;
          this.slidePlayerPause(prevSlide);
          this.trigger('slide_before_change', {
            prev: {
              index: this.prevActiveSlideIndex,
              slide: this.prevActiveSlide,
              slideNode: this.prevActiveSlide,
              slideIndex: this.prevActiveSlideIndex,
              slideConfig: isNil(this.prevActiveSlideIndex)
                ? null
                : this.elements[this.prevActiveSlideIndex].slideConfig,
              trigger: isNil(this.prevActiveSlideIndex)
                ? null
                : this.elements[this.prevActiveSlideIndex].node,
              player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
            },
            current: {
              index: this.index,
              slide: this.activeSlide,
              slideNode: this.activeSlide,
              slideIndex: this.index,
              slideConfig: this.elements[this.index].slideConfig,
              trigger: this.elements[this.index].node,
              player: this.getSlidePlayerInstance(this.index)
            }
          });

          if (isFunction(this.settings.beforeSlideChange)) {
            this.settings.beforeSlideChange.apply(this, [
              {
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide,
                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
              },
              {
                index: this.index,
                slide: this.activeSlide,
                player: this.getSlidePlayerInstance(this.index)
              }
            ]);
          }

          if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == 'slide') {
            animOut = this.settings.cssEfects.slideBack.out;
          }

          animateElement(prevSlide, animOut, function() {
            var container = prevSlide.querySelector('.ginner-container');
            var media = prevSlide.querySelector('.gslide-media');
            var desc = prevSlide.querySelector('.gslide-description');
            container.style.transform = '';
            media.style.transform = '';

            removeClass(media, 'greset');

            media.style.opacity = '';

            if (desc) {
              desc.style.opacity = '';
            }

            removeClass(prevSlide, 'prev');
          });
        }
      },
      {
        key: 'getAllPlayers',
        value: function getAllPlayers() {
          return this.videoPlayers;
        }
      },
      {
        key: 'getSlidePlayerInstance',
        value: function getSlidePlayerInstance(index) {
          var id = 'gvideo' + index;
          var videoPlayers = this.getAllPlayers();

          if (has(videoPlayers, id) && videoPlayers[id]) {
            return videoPlayers[id];
          }

          return false;
        }
      },
      {
        key: 'stopSlideVideo',
        value: function stopSlideVideo(slide) {
          if (isNode(slide)) {
            var node = slide.querySelector('.gvideo-wrapper');

            if (node) {
              slide = node.getAttribute('data-index');
            }
          }

          console.log('stopSlideVideo is deprecated, use slidePlayerPause');
          var player = this.getSlidePlayerInstance(slide);

          if (player && player.playing) {
            player.pause();
          }
        }
      },
      {
        key: 'slidePlayerPause',
        value: function slidePlayerPause(slide) {
          if (isNode(slide)) {
            var node = slide.querySelector('.gvideo-wrapper');

            if (node) {
              slide = node.getAttribute('data-index');
            }
          }

          var player = this.getSlidePlayerInstance(slide);

          if (player && player.playing) {
            player.pause();
          }
        }
      },
      {
        key: 'playSlideVideo',
        value: function playSlideVideo(slide) {
          if (isNode(slide)) {
            var node = slide.querySelector('.gvideo-wrapper');

            if (node) {
              slide = node.getAttribute('data-index');
            }
          }

          console.log('playSlideVideo is deprecated, use slidePlayerPlay');
          var player = this.getSlidePlayerInstance(slide);

          if (player && !player.playing) {
            player.play();
          }
        }
      },
      {
        key: 'slidePlayerPlay',
        value: function slidePlayerPlay(slide) {
          var _this$settings$plyr$c;

          if (
            isMobile$1 &&
            !(
              (_this$settings$plyr$c = this.settings.plyr.config) !== null &&
              _this$settings$plyr$c !== void 0 &&
              _this$settings$plyr$c.muted
            )
          ) {
            return;
          }

          if (isNode(slide)) {
            var node = slide.querySelector('.gvideo-wrapper');

            if (node) {
              slide = node.getAttribute('data-index');
            }
          }

          var player = this.getSlidePlayerInstance(slide);

          if (player && !player.playing) {
            player.play();

            if (this.settings.autofocusVideos) {
              player.elements.container.focus();
            }
          }
        }
      },
      {
        key: 'setElements',
        value: function setElements(elements) {
          var _this5 = this;

          this.settings.elements = false;
          var newElements = [];

          if (elements && elements.length) {
            each(elements, function(el, i) {
              var slide = new Slide(el, _this5, i);
              var data = slide.getConfig();

              var slideInfo = extend({}, data);

              slideInfo.slideConfig = data;
              slideInfo.instance = slide;
              slideInfo.index = i;
              newElements.push(slideInfo);
            });
          }

          this.elements = newElements;

          if (this.lightboxOpen) {
            this.slidesContainer.innerHTML = '';

            if (this.elements.length) {
              each(this.elements, function() {
                var slide = createHTML(_this5.settings.slideHTML);

                _this5.slidesContainer.appendChild(slide);
              });

              this.showSlide(0, true);
            }
          }
        }
      },
      {
        key: 'getElementIndex',
        value: function getElementIndex(node) {
          var index = false;

          each(this.elements, function(el, i) {
            if (has(el, 'node') && el.node == node) {
              index = i;
              return true;
            }
          });

          return index;
        }
      },
      {
        key: 'getElements',
        value: function getElements() {
          var _this6 = this;

          var list = [];
          this.elements = this.elements ? this.elements : [];

          if (
            !isNil(this.settings.elements) &&
            isArray(this.settings.elements) &&
            this.settings.elements.length
          ) {
            each(this.settings.elements, function(el, i) {
              var slide = new Slide(el, _this6, i);
              var elData = slide.getConfig();

              var slideInfo = extend({}, elData);

              slideInfo.node = false;
              slideInfo.index = i;
              slideInfo.instance = slide;
              slideInfo.slideConfig = elData;
              list.push(slideInfo);
            });
          }

          var nodes = false;
          var selector = this.getSelector();

          if (selector) {
            nodes = document.querySelectorAll(this.getSelector());
          }

          if (!nodes) {
            return list;
          }

          each(nodes, function(el, i) {
            var slide = new Slide(el, _this6, i);
            var elData = slide.getConfig();

            var slideInfo = extend({}, elData);

            slideInfo.node = el;
            slideInfo.index = i;
            slideInfo.instance = slide;
            slideInfo.slideConfig = elData;
            slideInfo.gallery = el.getAttribute('data-gallery');
            list.push(slideInfo);
          });

          return list;
        }
      },
      {
        key: 'getGalleryElements',
        value: function getGalleryElements(list, gallery) {
          return list.filter(function(el) {
            return el.gallery == gallery;
          });
        }
      },
      {
        key: 'getSelector',
        value: function getSelector() {
          if (this.settings.elements) {
            return false;
          }

          if (this.settings.selector && this.settings.selector.substring(0, 5) == 'data-') {
            return '*['.concat(this.settings.selector, ']');
          }

          return this.settings.selector;
        }
      },
      {
        key: 'getActiveSlide',
        value: function getActiveSlide() {
          return this.slidesContainer.querySelectorAll('.gslide')[this.index];
        }
      },
      {
        key: 'getActiveSlideIndex',
        value: function getActiveSlideIndex() {
          return this.index;
        }
      },
      {
        key: 'getAnimationClasses',
        value: function getAnimationClasses() {
          var effects = [];

          for (var key in this.settings.cssEfects) {
            if (this.settings.cssEfects.hasOwnProperty(key)) {
              var effect = this.settings.cssEfects[key];
              effects.push('g'.concat(effect['in']));
              effects.push('g'.concat(effect.out));
            }
          }

          return effects.join(' ');
        }
      },
      {
        key: 'build',
        value: function build() {
          var _this7 = this;

          if (this.built) {
            return false;
          }

          var children = document.body.childNodes;
          var bodyChildElms = [];

          each(children, function(el) {
            if (
              el.parentNode == document.body &&
              el.nodeName.charAt(0) !== '#' &&
              el.hasAttribute &&
              !el.hasAttribute('aria-hidden')
            ) {
              bodyChildElms.push(el);
              el.setAttribute('aria-hidden', 'true');
            }
          });

          var nextSVG = has(this.settings.svg, 'next') ? this.settings.svg.next : '';
          var prevSVG = has(this.settings.svg, 'prev') ? this.settings.svg.prev : '';
          var closeSVG = has(this.settings.svg, 'close') ? this.settings.svg.close : '';
          var lightboxHTML = this.settings.lightboxHTML;
          lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
          lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
          lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
          lightboxHTML = createHTML(lightboxHTML);
          document.body.appendChild(lightboxHTML);
          var modal = document.getElementById('glightbox-body');
          this.modal = modal;
          var closeButton = modal.querySelector('.gclose');
          this.prevButton = modal.querySelector('.gprev');
          this.nextButton = modal.querySelector('.gnext');
          this.overlay = modal.querySelector('.goverlay');
          this.loader = modal.querySelector('.gloader');
          this.slidesContainer = document.getElementById('glightbox-slider');
          this.bodyHiddenChildElms = bodyChildElms;
          this.events = {};

          addClass(this.modal, 'glightbox-' + this.settings.skin);

          if (this.settings.closeButton && closeButton) {
            this.events['close'] = addEvent('click', {
              onElement: closeButton,
              withCallback: function withCallback(e, target) {
                e.preventDefault();

                _this7.close();
              }
            });
          }

          if (closeButton && !this.settings.closeButton) {
            closeButton.parentNode.removeChild(closeButton);
          }

          if (this.nextButton) {
            this.events['next'] = addEvent('click', {
              onElement: this.nextButton,
              withCallback: function withCallback(e, target) {
                e.preventDefault();

                _this7.nextSlide();
              }
            });
          }

          if (this.prevButton) {
            this.events['prev'] = addEvent('click', {
              onElement: this.prevButton,
              withCallback: function withCallback(e, target) {
                e.preventDefault();

                _this7.prevSlide();
              }
            });
          }

          if (this.settings.closeOnOutsideClick) {
            this.events['outClose'] = addEvent('click', {
              onElement: modal,
              withCallback: function withCallback(e, target) {
                if (
                  !_this7.preventOutsideClick &&
                  !hasClass(document.body, 'glightbox-mobile') &&
                  !closest(e.target, '.ginner-container')
                ) {
                  if (
                    !closest(e.target, '.gbtn') &&
                    !hasClass(e.target, 'gnext') &&
                    !hasClass(e.target, 'gprev')
                  ) {
                    _this7.close();
                  }
                }
              }
            });
          }

          each(this.elements, function(slide, i) {
            _this7.slidesContainer.appendChild(slide.instance.create());

            slide.slideNode = _this7.slidesContainer.querySelectorAll('.gslide')[i];
          });

          if (isTouch$1) {
            addClass(document.body, 'glightbox-touch');
          }

          this.events['resize'] = addEvent('resize', {
            onElement: window,
            withCallback: function withCallback() {
              _this7.resize();
            }
          });
          this.built = true;
        }
      },
      {
        key: 'resize',
        value: function resize() {
          var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          slide = !slide ? this.activeSlide : slide;

          if (!slide || hasClass(slide, 'zoomed')) {
            return;
          }

          var winSize = windowSize();

          var video = slide.querySelector('.gvideo-wrapper');
          var image = slide.querySelector('.gslide-image');
          var description = this.slideDescription;
          var winWidth = winSize.width;
          var winHeight = winSize.height;

          if (winWidth <= 768) {
            addClass(document.body, 'glightbox-mobile');
          } else {
            removeClass(document.body, 'glightbox-mobile');
          }

          if (!video && !image) {
            return;
          }

          var descriptionResize = false;

          if (
            description &&
            (hasClass(description, 'description-bottom') ||
              hasClass(description, 'description-top')) &&
            !hasClass(description, 'gabsolute')
          ) {
            descriptionResize = true;
          }

          if (image) {
            if (winWidth <= 768) {
              var imgNode = image.querySelector('img');
            } else if (descriptionResize) {
              var descHeight = description.offsetHeight;

              var _imgNode = image.querySelector('img');

              _imgNode.setAttribute('style', 'max-height: calc(100vh - '.concat(descHeight, 'px)'));

              description.setAttribute('style', 'max-width: '.concat(_imgNode.offsetWidth, 'px;'));
            }
          }

          if (video) {
            var ratio = has(this.settings.plyr.config, 'ratio')
              ? this.settings.plyr.config.ratio
              : '';

            if (!ratio) {
              var containerWidth = video.clientWidth;
              var containerHeight = video.clientHeight;
              var divisor = containerWidth / containerHeight;
              ratio = ''.concat(containerWidth / divisor, ':').concat(containerHeight / divisor);
            }

            var videoRatio = ratio.split(':');
            var videoWidth = this.settings.videosWidth;
            var maxWidth = this.settings.videosWidth;

            if (isNumber(videoWidth) || videoWidth.indexOf('px') !== -1) {
              maxWidth = parseInt(videoWidth);
            } else {
              if (videoWidth.indexOf('vw') !== -1) {
                maxWidth = (winWidth * parseInt(videoWidth)) / 100;
              } else if (videoWidth.indexOf('vh') !== -1) {
                maxWidth = (winHeight * parseInt(videoWidth)) / 100;
              } else if (videoWidth.indexOf('%') !== -1) {
                maxWidth = (winWidth * parseInt(videoWidth)) / 100;
              } else {
                maxWidth = parseInt(video.clientWidth);
              }
            }

            var maxHeight = maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));
            maxHeight = Math.floor(maxHeight);

            if (descriptionResize) {
              winHeight = winHeight - description.offsetHeight;
            }

            if (
              maxWidth > winWidth ||
              maxHeight > winHeight ||
              (winHeight < maxHeight && winWidth > maxWidth)
            ) {
              var vwidth = video.offsetWidth;
              var vheight = video.offsetHeight;

              var _ratio = winHeight / vheight;

              var vsize = {
                width: vwidth * _ratio,
                height: vheight * _ratio
              };
              video.parentNode.setAttribute('style', 'max-width: '.concat(vsize.width, 'px'));

              if (descriptionResize) {
                description.setAttribute('style', 'max-width: '.concat(vsize.width, 'px;'));
              }
            } else {
              video.parentNode.style.maxWidth = ''.concat(videoWidth);

              if (descriptionResize) {
                description.setAttribute('style', 'max-width: '.concat(videoWidth, ';'));
              }
            }
          }
        }
      },
      {
        key: 'reload',
        value: function reload() {
          this.init();
        }
      },
      {
        key: 'updateNavigationClasses',
        value: function updateNavigationClasses() {
          var loop = this.loop();

          removeClass(this.nextButton, 'disabled');

          removeClass(this.prevButton, 'disabled');

          if (this.index == 0 && this.elements.length - 1 == 0) {
            addClass(this.prevButton, 'disabled');

            addClass(this.nextButton, 'disabled');
          } else if (this.index === 0 && !loop) {
            addClass(this.prevButton, 'disabled');
          } else if (this.index === this.elements.length - 1 && !loop) {
            addClass(this.nextButton, 'disabled');
          }
        }
      },
      {
        key: 'loop',
        value: function loop() {
          var loop = has(this.settings, 'loopAtEnd') ? this.settings.loopAtEnd : null;
          loop = has(this.settings, 'loop') ? this.settings.loop : loop;
          return loop;
        }
      },
      {
        key: 'close',
        value: function close() {
          var _this8 = this;

          if (!this.lightboxOpen) {
            if (this.events) {
              for (var key in this.events) {
                if (this.events.hasOwnProperty(key)) {
                  this.events[key].destroy();
                }
              }

              this.events = null;
            }

            return false;
          }

          if (this.closing) {
            return false;
          }

          this.closing = true;
          this.slidePlayerPause(this.activeSlide);

          if (this.fullElementsList) {
            this.elements = this.fullElementsList;
          }

          if (this.bodyHiddenChildElms.length) {
            each(this.bodyHiddenChildElms, function(el) {
              el.removeAttribute('aria-hidden');
            });
          }

          addClass(this.modal, 'glightbox-closing');

          animateElement(
            this.overlay,
            this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade.out
          );

          animateElement(
            this.activeSlide,
            this.settings.cssEfects[this.settings.closeEffect].out,
            function() {
              _this8.activeSlide = null;
              _this8.prevActiveSlideIndex = null;
              _this8.prevActiveSlide = null;
              _this8.built = false;

              if (_this8.events) {
                for (var _key in _this8.events) {
                  if (_this8.events.hasOwnProperty(_key)) {
                    _this8.events[_key].destroy();
                  }
                }

                _this8.events = null;
              }

              var body = document.body;

              removeClass(html, 'glightbox-open');

              removeClass(
                body,
                'glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer'
              );

              _this8.modal.parentNode.removeChild(_this8.modal);

              _this8.trigger('close');

              if (isFunction(_this8.settings.onClose)) {
                _this8.settings.onClose();
              }

              var styles = document.querySelector('.gcss-styles');

              if (styles) {
                styles.parentNode.removeChild(styles);
              }

              _this8.lightboxOpen = false;
              _this8.closing = null;
            }
          );
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          this.close();
          this.clearAllEvents();

          if (this.baseEvents) {
            this.baseEvents.destroy();
          }
        }
      },
      {
        key: 'on',
        value: function on(evt, callback) {
          var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!evt || !isFunction(callback)) {
            throw new TypeError('Event name and callback must be defined');
          }

          this.apiEvents.push({
            evt: evt,
            once: once,
            callback: callback
          });
        }
      },
      {
        key: 'once',
        value: function once(evt, callback) {
          this.on(evt, callback, true);
        }
      },
      {
        key: 'trigger',
        value: function trigger(eventName) {
          var _this9 = this;

          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var onceTriggered = [];

          each(this.apiEvents, function(event, i) {
            var evt = event.evt,
              once = event.once,
              callback = event.callback;

            if (evt == eventName) {
              callback(data);

              if (once) {
                onceTriggered.push(i);
              }
            }
          });

          if (onceTriggered.length) {
            each(onceTriggered, function(i) {
              return _this9.apiEvents.splice(i, 1);
            });
          }
        }
      },
      {
        key: 'clearAllEvents',
        value: function clearAllEvents() {
          this.apiEvents.splice(0, this.apiEvents.length);
        }
      },
      {
        key: 'version',
        value: function version() {
          return _version;
        }
      }
    ]);

    return GlightboxInit;
  })();

  function glightbox() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instance = new GlightboxInit(options);
    instance.init();
    return instance;
  }

  return glightbox;
});
/**
 * Swiper 11.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 9, 2024
 */

var Swiper = (function () {
  'use strict';

  /**
   * SSR Window 4.0.2
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: December 13, 2021
   */
  /* eslint-disable no-param-reassign */
  function isObject$1(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
  }
  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(key => {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }
  const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: ''
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {}
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };
  function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  const ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return '';
        }
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }

  function classesToTokens(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return classes.trim().split(' ').filter(c => !!c.trim());
  }

  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach(key => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    const window = getWindow();
    let style;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }
    const window = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }
  function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = ['__proto__', 'constructor', 'prototype'];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target) => {
      return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = () => {
      time = new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.scrollSnapType = '';
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = '';
    }
    return [...element.children].filter(el => el.matches(selector));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
      // err
    }
  }
  function createElement(tag, classes) {
    if (classes === void 0) {
      classes = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
    return el;
  }
  function elementOffset(el) {
    const window = getWindow();
    const document = getDocument();
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window = getWindow();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return undefined;
  }
  function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) {
      el.addEventListener('transitionend', fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window = getWindow();
    if (includeMargins) {
      return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter(e => !!e);
  }

  let support;
  function calcSupport() {
    const window = getWindow();
    const document = getDocument();
    return {
      smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  let deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support = getSupport();
    const window = getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel';

    // iPadOs 13 fix
    const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    }

    // Android
    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }

    // Export object
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }

  let browser;
  function calcBrowser() {
    const window = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    if (isSafari()) {
      const ua = String(window.navigator.userAgent);
      if (ua.includes('Version/')) {
        const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('beforeResize');
      emit('resize');
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver(entries => {
        animationFrame = window.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(_ref2 => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('orientationchange');
    };
    on('init', () => {
      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
        createObserver();
        return;
      }
      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', () => {
      removeObserver();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', orientationChangeHandler);
    });
  }

  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window = getWindow();
    const attach = function (target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      const observer = new ObserverFunc(mutations => {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit('observerUpdate', mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate() {
          emit('observerUpdate', mutations[0]);
        };
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      // Observe container
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });

      // Observe wrapper
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
  }

  /* eslint-disable no-underscore-dangle */

  var eventsEmitter = {
    on(events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      const method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(event => {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once(events, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== 'function') return self;
      const method = priority ? 'unshift' : 'push';
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(event => {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(event => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(eventHandler => {
            eventHandler.apply(context, [event, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(eventHandler => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };

  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }

    // Subtract paddings
    width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
    height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;

    // reset margins
    slides.forEach(slideEl => {
      if (rtl) {
        slideEl.style.marginLeft = '';
      } else {
        slideEl.style.marginRight = '';
      }
      slideEl.style.marginBottom = '';
      slideEl.style.marginTop = '';
    });

    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }

    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
      return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide;
      if (slides[i]) slide = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slides);
      }
      if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel('width')] = ``;
        }
        const slideStyles = getComputedStyle(slide);
        const currentTransform = slide.style.transform;
        const currentWebKitTransform = slide.style.webkitTransform;
        if (currentTransform) {
          slide.style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide.style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
        } else {
          // eslint-disable-next-line
          const width = getDirectionPropertyValue(slideStyles, 'width');
          const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach(slideEl => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach(slideSizeValue => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(snap => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach(slideSizeValue => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit('slidesUpdated');
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }

  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = index => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach(slide => {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
  }

  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;

    // Visible Slides
    slides.forEach(slideEl => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      let slideOffset = slide.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i].classList.add(params.slideFullyVisibleClass);
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
      slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }

  function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      // eslint-disable-next-line
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
  }

  const toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = selector => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        // Next Slide
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }

        // Prev Slide
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach(slideEl => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }

  const processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          // init later
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  const unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute('loading');
  };
  const preload = swiper => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };

  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = aIndex => {
      let realIndex = aIndex - swiper.virtual.slidesBefore;
      if (realIndex < 0) {
        realIndex = swiper.virtual.slides.length + realIndex;
      }
      if (realIndex >= swiper.virtual.slides.length) {
        realIndex -= swiper.virtual.slides.length;
      }
      return realIndex;
    };
    if (typeof activeIndex === 'undefined') {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter(slideEl => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
        if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };

  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }

    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: -newTranslate,
          behavior: 'smooth'
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }

  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };

  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
    }
    swiper.emit('setTransition', duration, byController);
  }

  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === 'next') {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: 'Start'
    });
  }

  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: 'End'
    });
  }

  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };

  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

    // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate : -translate;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = 'none';
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          });
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = '';
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? 'left' : 'top'
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: t,
          behavior: 'smooth'
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === 'string') {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === 'auto') {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'next'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: 'prev'
      });
      // eslint-disable-next-line
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map(val => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== 'undefined') {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === 'undefined') {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };

  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute('data-swiper-slide-index', index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = amountOfSlides => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? undefined : 'next'
    });
  }

  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo = true,
      direction,
      setTranslate,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit('beforeLoopFix');
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
    } else if (gridEnabled && params.grid.fill === 'row') {
      showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') {
      activeSlideIndex = swiper.getSlideIndex(slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === 'next' || !direction;
    const isPrev = direction === 'prev' || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i = slides.length - 1; i >= 0; i -= 1) {
            if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
          }
          // slides.forEach((slide, slideIndex) => {
          //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
          // });
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide, slideIndex) => {
            if (slide.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach(index => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach(index => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === 'undefined') {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === 'undefined') {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach(c => {
          if (!c.destroyed && c.params.loop) c.loopFix({
            ...loopParams,
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
          });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      }
    }
    swiper.emit('loopFix');
  }

  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach(slideEl => {
      const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach(slideEl => {
      slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach(slideEl => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }

  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };

  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }

  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }

  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };

  // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event, startX) {
    const window = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event) {
    const swiper = this;
    const document = getDocument();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === 'pointerdown') {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === 'touchstart') {
      // don't proceed touch event
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
      if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ('which' in e && e.which === 3) return;
    if ('button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;

    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // eslint-disable-next-line
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);

    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
      document.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove(event) {
    const document = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === 'mouse') return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === 'pointermove') {
      if (data.touchId !== null) return; // return from pointer if we use touch
      const id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === 'touchmove') {
      targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document.activeElement) {
      if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    let loopFixed;
    new Date().getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
        swiper.loopFix({
          direction: 'prev',
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: 'next',
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }

    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;

    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
    if (!isTouchEvent) {
      if (data.touchId !== null) return; // return from pointer if we use touch
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].filter(t => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
      const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === 'mouse') return;
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit('tap click', e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }

    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment] !== 'undefined') {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
  }

  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }

  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = 'auto';
    }
  }

  const events = (swiper, method) => {
    const document = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method;

    // Touch Events
    document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]('touchstart', swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]('pointerdown', swiper.onTouchStart, {
      passive: false
    });
    document[domMethod]('touchmove', swiper.onTouchMove, {
      passive: false,
      capture
    });
    document[domMethod]('pointermove', swiper.onTouchMove, {
      passive: false,
      capture
    });
    document[domMethod]('touchend', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerup', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointercancel', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('touchcancel', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerout', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('pointerleave', swiper.onTouchEnd, {
      passive: true
    });
    document[domMethod]('contextmenu', swiper.onTouchEnd, {
      passive: true
    });

    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll);
    }

    // Resize handler
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper[swiperMethod]('observerUpdate', onResize, true);
    }

    // Images loader
    el[domMethod]('load', swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, 'on');
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };

  const isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }

    // Toggle navigation, pagination, scrollbar
    ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
      if (typeof breakpointParams[prop] === 'undefined') return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit('breakpoint', breakpointParams);
  }

  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map(point => {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === 'window') {
        if (window.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };

  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach(item => {
      if (typeof item === 'object') {
        Object.keys(item).forEach(classNames => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses(['initialized', params.direction, {
      'free-mode': swiper.params.freeMode && params.freeMode.enabled
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'grid': params.grid && params.grid.rows > 1
    }, {
      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }, {
      'centered': params.cssMode && params.centeredSlides
    }, {
      'watch-progress': params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }

  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }

  var classes = {
    addClasses,
    removeClasses
  };

  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };

  var defaults = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: 'swiper',
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };

  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== 'object' || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && 'enabled' in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend(allModulesParams, obj);
    };
  }

  /* eslint no-param-reassign: "off" */
  const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  const extendedDefaults = {};
  class Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      const document = getDocument();
      if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document.querySelectorAll(params.el).forEach(containerEl => {
          const newParams = extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        // eslint-disable-next-line no-constructor-return
        return swipers;
      }

      // Swiper Instance
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach(mod => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });

      // Extend defaults with modules params
      const swiperParams = extend({}, defaults, allModulesParams);

      // Extend defaults with passed params
      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params);

      // add event listeners
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(eventName => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }

      // Extend Swiper
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          // Returns 0 unless `translate` is > 2**23
          // Should be subtracted from css values to prevent overflow
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          startMoving: undefined,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit('_swiper');

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      // eslint-disable-next-line no-constructor-return
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      // prettier-ignore
      return {
        'width': 'height',
        'margin-top': 'margin-left',
        'margin-bottom ': 'margin-right',
        'margin-left': 'margin-top',
        'margin-right': 'margin-bottom',
        'padding-left': 'padding-top',
        'padding-right': 'padding-bottom',
        'marginRight': 'marginBottom'
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit('enable');
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit('disable');
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(' ').filter(className => {
        return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return '';
      return slideEl.className.split(' ').filter(className => {
        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(' ');
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach(slideEl => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit('_slideClass', slideEl, classNames);
      });
      swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = 'current';
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === 'number') return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += Math.ceil(slides[i].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        // eslint-disable-next-line
        if (view === 'current') {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          // previous
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach(slideEl => {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
      swiper.rtl = direction === 'rtl';
      swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = 'rtl';
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = 'ltr';
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;

      // Find el
      let el = element || swiper.params.el;
      if (typeof el === 'string') {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          // Children needs to return slot items
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      // Find Wrapper
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement('div', swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
        wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }

      // Slide To Initial Slide
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Attach events
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach(imageEl => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener('load', e => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);

      // Init Flag
      swiper.initialized = true;
      preload(swiper);

      // Emit
      swiper.emit('init');
      swiper.emit('afterInit');
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }
      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        el.removeAttribute('style');
        wrapperEl.removeAttribute('style');
        if (slides && slides.length) {
          slides.forEach(slideEl => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute('style');
            slideEl.removeAttribute('data-swiper-slide-index');
          });
        }
      }
      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(eventName => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.el.swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
      const modules = Swiper.prototype.__modules__;
      if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach(m => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  }
  Object.keys(prototypes).forEach(prototypeGroup => {
    Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  function Virtual(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    const document = getDocument();
    swiper.virtual = {
      cache: {},
      from: undefined,
      to: undefined,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const tempDOM = document.createElement('div');
    function renderSlide(slide, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      // eslint-disable-next-line
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide, index);
        if (typeof slideEl === 'string') {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement('swiper-slide');
      } else {
        slideEl = createElement('div', swiper.params.slideClass);
      }
      slideEl.setAttribute('data-swiper-slide-index', index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide;
      }
      if (params.cache) {
        swiper.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update(force, beforeInit) {
      const {
        slidesPerView,
        slidesPerGroup,
        centeredSlides,
        loop: isLoop,
        initialSlide
      } = swiper.params;
      if (beforeInit && !isLoop && initialSlide > 0) {
        return;
      }
      const {
        addSlidesBefore,
        addSlidesAfter
      } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = swiper.activeIndex || 0;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore,
        slidesAfter
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit('virtualUpdate');
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.forEach(slideEl => {
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
          });
        }
        swiper.updateProgress();
        emit('virtualUpdate');
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit('virtualUpdate');
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = index => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          // eslint-disable-next-line
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
          slideEl.remove();
        });
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            const slideIndex = getSlideIndex(i);
            swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
              slideEl.remove();
            });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i = loopFrom; i < loopTo; i += 1) {
        if (i >= from && i <= to) {
          const slideIndex = getSlideIndex(i);
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i > previousTo) appendIndexes.push(slideIndex);
            if (i < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach(index => {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
          const index = prependIndexes[i];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a, b) => b - a);
        prependIndexes.forEach(index => {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
      });
      onRendered();
    }
    function appendSlide(slides) {
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update(true);
    }
    function prependSlide(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach(cachedIndex => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
          if (cachedElIndex) {
            cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
            // shift cache indexes
            Object.keys(swiper.virtual.cache).forEach(key => {
              if (key > slidesIndexes) {
                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                delete swiper.virtual.cache[key];
              }
            });
          }
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update(true);
      swiper.slideTo(0, 0);
    }
    on('beforeInit', () => {
      if (!swiper.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === 'undefined') {
        const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
        if (slides && slides.length) {
          swiper.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute('data-swiper-slide-index', slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      update(false, true);
    });
    on('setTranslate', () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update();
        }, 100);
      } else {
        update();
      }
    });
    on('init update resize', () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide,
      prependSlide,
      removeSlide,
      removeAllSlides,
      update
    });
  }

  /* eslint-disable consistent-return */
  function Keyboard(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document = getDocument();
    const window = getWindow();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      // Directions locks
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        // Check that swiper should be inside of visible area of window
        if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
          return undefined;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
            inView = true;
          }
        }
        if (!inView) return undefined;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit('keyPress', kc);
      return undefined;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document.addEventListener('keydown', handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document.removeEventListener('keydown', handle);
      swiper.keyboard.enabled = false;
    }
    on('init', () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on('destroy', () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable
    });
  }

  /* eslint-disable consistent-return */
  function Mousewheel(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const window = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: 'container',
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: 'swiper-no-mousewheel'
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      // Reasonable defaults
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0; // spinX, spinY
      let pX = 0;
      let pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      }

      // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        // Return false as a default
        return true;
      }
      // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit('scroll', newEvent.raw);
      }
      // If you got here is because an animation has been triggered so store the current time
      lastScrollTime = new window.Date().getTime();
      // Return false as a default
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
      return false;
    }
    function handle(event) {
      let e = event;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;

      // Ignore event if the target or its parents have the swiper-no-mousewheel class
      if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;

      // Get the scroll positions
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

      // When loop is true:
      //     the disableParentSwiper will be true.
      // When loop is false:
      //     if the scroll positions is not on edge,
      //     then the disableParentSwiper will be true.
      //     if the scroll on edge positions,
      //     then the disableParentSwiper will be false.
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        // Register the new event in a variable which stores the relevant data
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event
        };

        // Keep the most recent events
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent);

        // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }

        // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:

        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = undefined;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? 'next' : 'prev',
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(timeout);
            timeout = undefined;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift(); // only store the last N events
            }

            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }

            if (!timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              timeout = nextTick(() => {
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          }

          // Emit event
          if (!ignoreWheelEvents) emit('scroll', e);

          // Stop autoplay
          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
          // Return page scroll on edge positions
          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
            return true;
          }
        }
      }
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    }
    function events(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]('mouseenter', handleMouseEnter);
      targetEl[method]('mouseleave', handleMouseLeave);
      targetEl[method]('wheel', handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener('wheel', handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events('addEventListener');
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events('removeEventListener');
      swiper.mousewheel.enabled = false;
      return true;
    }
    on('init', () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach(key => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement('div', checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled'
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === 'string' && swiper.isElement) {
        res = swiper.el.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === 'string') res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      // if (Array.isArray(res) && res.length === 1) res = res[0];
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach(subEl => {
        if (subEl) {
          subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
          if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
          }
        }
      });
    }
    function update() {
      // Update Navigation Buttons
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit('navigationPrev');
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit('navigationNext');
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(' '));
        }
      };
      nextEl.forEach(el => initButton(el, 'next'));
      prevEl.forEach(el => initButton(el, 'prev'));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
      };
      nextEl.forEach(el => destroyButton(el, 'next'));
      prevEl.forEach(el => destroyButton(el, 'prev'));
    }
    on('init', () => {
      if (swiper.params.navigation.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        update();
      }
    });
    on('toEdge fromEdge lock unlock', () => {
      update();
    });
    on('destroy', () => {
      destroy();
    });
    on('enable disable', () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update();
        return;
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
    });
    on('click', (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit('navigationShow');
        } else {
          emit('navigationHide');
        }
        [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
      init();
      update();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update,
      init,
      destroy
    });
  }

  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }
    return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
  }

  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = 'swiper-pagination';
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: number => number,
        formatFractionTotal: number => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        swiper.slideToLoop(index);
      } else {
        swiper.slideTo(index);
      }
    }
    function update() {
      // Render || Update Pagination bullets/items
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      // Current/Total
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
          el.forEach(subEl => {
            subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach(bulletEl => {
          const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach(bullet => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(' '));
            } else if (swiper.isElement) {
              bullet.setAttribute('part', 'bullet');
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, 'prev');
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, 'next');
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
              }
            }
            setSideBullets(firstDisplayedBullet, 'prev');
            setSideBullets(lastDisplayedBullet, 'next');
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? 'right' : 'left';
          bullets.forEach(bullet => {
            bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === 'fraction') {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === 'progressbar') {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === 'custom' && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit('paginationRender', subEl);
        } else {
          if (subElIndex === 0) emit('paginationRender', subEl);
          emit('paginationUpdate', subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      });
    }
    function render() {
      // Render Container
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = '';
      if (params.type === 'bullets') {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            // prettier-ignore
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach(subEl => {
        if (params.type !== 'custom') {
          subEl.innerHTML = paginationHTML || '';
        }
        if (params.type === 'bullets') {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== 'custom') {
        emit('paginationRender', el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: 'swiper-pagination'
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        // check if it belongs to another nested Swiper
        if (el.length > 1) {
          el = el.filter(subEl => {
            if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach(subEl => {
        if (params.type === 'bullets' && params.clickable) {
          subEl.classList.add(...(params.clickableClass || '').split(' '));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener('click', onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || '').split(' '));
            subEl.removeEventListener('click', onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
    }
    on('changeDirection', () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on('init', () => {
      if (swiper.params.pagination.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        render();
        update();
      }
    });
    on('activeIndexChange', () => {
      if (typeof swiper.snapIndex === 'undefined') {
        update();
      }
    });
    on('snapIndexChange', () => {
      update();
    });
    on('snapGridLengthChange', () => {
      render();
      update();
    });
    on('destroy', () => {
      destroy();
    });
    on('enable disable', () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
      }
    });
    on('lock unlock', () => {
      update();
    });
    on('click', (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit('paginationShow');
        } else {
          emit('paginationHide');
        }
        el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update,
      init,
      destroy
    });
  }

  function Scrollbar(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
        scrollbarDisabledClass: 'swiper-scrollbar-disabled',
        horizontalClass: `swiper-scrollbar-horizontal`,
        verticalClass: `swiper-scrollbar-vertical`
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
        dragEl.style.width = `${newSize}px`;
      } else {
        dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
        dragEl.style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
    }
    function setTransition(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = '';
      dragEl.style.height = '';
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = `${dragSize}px`;
      } else {
        dragEl.style.height = `${dragSize}px`;
      }
      if (divider >= 1) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = '100ms';
      dragEl.style.transitionDuration = '100ms';
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = '0ms';
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = 'none';
      }
      emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = '0ms';
      el.style.transitionDuration = '0ms';
      dragEl.style.transitionDuration = '0ms';
      emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style['scroll-snap-type'] = '';
        wrapperEl.style.transitionDuration = '';
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = '400ms';
        }, 1000);
      }
      emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events(method) {
      const {
        scrollbar,
        params
      } = swiper;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      target[eventMethod]('pointerdown', onDragStart, activeListener);
      document[eventMethod]('pointermove', onDragMove, activeListener);
      document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('on');
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events('off');
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: 'swiper-scrollbar'
      });
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === 'string' && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === 'string') {
        el = document.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement('div', swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on('changeDirection', () => {
      if (!swiper.scrollbar || !swiper.scrollbar.el) return;
      const params = swiper.params.scrollbar;
      let {
        el
      } = swiper.scrollbar;
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on('init', () => {
      if (swiper.params.scrollbar.enabled === false) {
        // eslint-disable-next-line
        disable();
      } else {
        init();
        updateSize();
        setTranslate();
      }
    });
    on('update resize observerUpdate lock unlock changeDirection', () => {
      updateSize();
    });
    on('setTranslate', () => {
      setTranslate();
    });
    on('setTransition', (_s, duration) => {
      setTransition(duration);
    });
    on('enable disable', () => {
      const {
        el
      } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    });
    on('destroy', () => {
      destroy();
    });
    const enable = () => {
      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize();
      setTranslate();
    };
    const disable = () => {
      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize,
      setTranslate,
      init,
      destroy
    });
  }

  function Parallax(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
    const setTransform = (el, progress) => {
      const {
        rtl
      } = swiper;
      const rtlFactor = rtl ? -1 : 1;
      const p = el.getAttribute('data-swiper-parallax') || '0';
      let x = el.getAttribute('data-swiper-parallax-x');
      let y = el.getAttribute('data-swiper-parallax-y');
      const scale = el.getAttribute('data-swiper-parallax-scale');
      const opacity = el.getAttribute('data-swiper-parallax-opacity');
      const rotate = el.getAttribute('data-swiper-parallax-rotate');
      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }
      if (x.indexOf('%') >= 0) {
        x = `${parseInt(x, 10) * progress * rtlFactor}%`;
      } else {
        x = `${x * progress * rtlFactor}px`;
      }
      if (y.indexOf('%') >= 0) {
        y = `${parseInt(y, 10) * progress}%`;
      } else {
        y = `${y * progress}px`;
      }
      if (typeof opacity !== 'undefined' && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = `translate3d(${x}, ${y}, 0px)`;
      if (typeof scale !== 'undefined' && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += ` scale(${currentScale})`;
      }
      if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += ` rotate(${currentRotate}deg)`;
      }
      el.style.transform = transform;
    };
    const setTranslate = () => {
      const {
        el,
        slides,
        progress,
        snapGrid,
        isElement
      } = swiper;
      const elements = elementChildren(el, elementsSelector);
      if (swiper.isElement) {
        elements.push(...elementChildren(swiper.hostEl, elementsSelector));
      }
      elements.forEach(subEl => {
        setTransform(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
          setTransform(subEl, slideProgress);
        });
      });
    };
    const setTransition = function (duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      const {
        el,
        hostEl
      } = swiper;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach(parallaxEl => {
        let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
      });
    };
    on('beforeInit', () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTranslate', () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate();
    });
    on('setTransition', (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition(duration);
    });
  }

  function Zoom(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const window = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        limitToOriginalSize: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed'
      }
    });
    swiper.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: undefined,
      slideWidth: undefined,
      slideHeight: undefined,
      imageEl: undefined,
      imageWrapEl: undefined,
      maxRatio: 3
    };
    const image = {
      isTouched: undefined,
      isMoved: undefined,
      currentX: undefined,
      currentY: undefined,
      minX: undefined,
      minY: undefined,
      maxX: undefined,
      maxY: undefined,
      width: undefined,
      height: undefined,
      startX: undefined,
      startY: undefined,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: undefined,
      y: undefined,
      prevPositionX: undefined,
      prevPositionY: undefined,
      prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x2 = evCache[1].pageX;
      const y2 = evCache[1].pageY;
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      return distance;
    }
    function getMaxRatio() {
      const params = swiper.params.zoom;
      const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
        return Math.min(imageMaxRatio, maxRatio);
      }
      return maxRatio;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      const box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
    }
    function getSlideSelector() {
      return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
      const slideSelector = getSlideSelector();
      if (e.target.matches(slideSelector)) return true;
      if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e) {
      const selector = `.${swiper.params.zoom.containerClass}`;
      if (e.target.matches(selector)) return true;
      if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
      return false;
    }

    // Events
    function onGestureStart(e) {
      if (e.pointerType === 'mouse') {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = undefined;
          return;
        }
        gesture.maxRatio = getMaxRatio();
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = '0ms';
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache[pointerIndex] = e;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
      }
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
      if (!eventWithinSlide(e)) return;
      if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = undefined;
      }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
      swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
      clearTimeout(allowTouchMoveTimeout);
      swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
      allowTouchMoveTimeout = setTimeout(() => {
        allowTouchMove();
      });
    }
    function onTouchStart(e) {
      const device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      const event = evCache.length > 0 ? evCache[0] : e;
      image.touchesStart.x = event.pageX;
      image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
        return;
      }
      const zoom = swiper.zoom;
      if (!gesture.imageEl) {
        return;
      }
      if (!image.isTouched || !gesture.slideEl) {
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
        image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = '0ms';
      }
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
        allowTouchMove();
        return;
      }
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      preventTouchMove();
      image.isMoved = true;
      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
      const {
        originX,
        originY
      } = gesture;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
      }

      // Velocity
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
      const zoom = swiper.zoom;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      // Define if we need image drag
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
      gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        }
        gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = undefined;
        gesture.imageEl = undefined;
        gesture.imageWrapEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e && e.target) {
          gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        }
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.touchAction = 'none';
      }
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.pageX;
        touchY = e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const forceZoomRatio = typeof e === 'number' ? e : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = undefined;
        touchY = undefined;
      }
      const maxRatio = getMaxRatio();
      zoom.scale = forceZoomRatio || maxRatio;
      currentScale = forceZoomRatio || maxRatio;
      if (e && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = '300ms';
      gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
      gesture.imageEl.style.transitionDuration = '300ms';
      gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl) {
          imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
        } else {
          gesture.imageWrapEl = undefined;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.style.touchAction = '';
      }
      zoom.scale = 1;
      currentScale = 1;
      gesture.imageWrapEl.style.transitionDuration = '300ms';
      gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      gesture.imageEl.style.transitionDuration = '300ms';
      gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
      gesture.slideEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }

    // Toggle Zoom
    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoomOut();
      } else {
        // Zoom In
        zoomIn(e);
      }
    }
    function getListeners() {
      const passiveListener = swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = swiper.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener,
        activeListenerWithCapture
      };
    }

    // Attach/Detach Events
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();

      // Scale image
      swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
      swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
      ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });

      // Move image
      swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();

      // Scale image
      swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
      swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
      ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });

      // Move image
      swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    on('init', () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on('destroy', () => {
      disable();
    });
    on('touchStart', (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart(e);
    });
    on('touchEnd', (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd();
    });
    on('doubleTap', (_s, e) => {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e);
      }
    });
    on('transitionEnd', () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on('slideChange', () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
  function Controller(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'
      }
    });

    swiper.controller = {
      control: undefined
    };
    function LinearSpline(x, y) {
      const binarySearch = function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper = swiper.constructor;
      function setControlledTranslate(c) {
        if (c.destroyed) return;

        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }
        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition(duration, byController) {
      const Swiper = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        if (c.destroyed) return;
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          elementTransitionEnd(c.wrapperEl, () => {
            if (!controlled) return;
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    }
    on('beforeInit', () => {
      if (typeof window !== 'undefined' && (
      // eslint-disable-line
      typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
        const controlElement = document.querySelector(swiper.params.controller.control);
        if (controlElement && controlElement.swiper) {
          swiper.controller.control = controlElement.swiper;
        } else if (controlElement) {
          const onControllerSwiper = e => {
            swiper.controller.control = e.detail[0];
            swiper.update();
            controlElement.removeEventListener('init', onControllerSwiper);
          };
          controlElement.addEventListener('init', onControllerSwiper);
        }
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on('update', () => {
      removeSpline();
    });
    on('resize', () => {
      removeSpline();
    });
    on('observerUpdate', () => {
      removeSpline();
    });
    on('setTranslate', (_s, translate, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate,
      setTransition
    });
  }

  function A11y(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: 'group',
        id: null
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = new Date().getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = '';
      notification.innerHTML = message;
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('tabIndex', '0');
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('tabIndex', '-1');
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('role', role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-roledescription', description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-controls', controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-label', label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('id', id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-live', live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-disabled', true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.setAttribute('aria-disabled', false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper.navigation.prevEl);
        const nextEls = makeElementsArray(swiper.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach(bulletEl => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, 'button');
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute('aria-current', 'true');
        } else {
          bulletEl.removeAttribute('aria-current');
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== 'BUTTON') {
        addElRole(el, 'button');
        el.addEventListener('keydown', onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = e => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
        preventFocusHandler = true;
      }
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = e => {
      visibilityChangedTimestamp = new Date().getTime();
    };
    const handleFocus = e => {
      if (swiper.a11y.clicked) return;
      if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);

      // Container
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }

      // Wrapper
      const wrapperEl = swiper.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);

      // Slide
      initSlides();

      // Navigation
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
      }

      // Pagination
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach(el => {
          el.addEventListener('keydown', onEnterOrSpaceKey);
        });
      }

      // Tab focus
      const document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
      swiper.el.addEventListener('focus', handleFocus, true);
      swiper.el.addEventListener('focus', handleFocus, true);
      swiper.el.addEventListener('pointerdown', handlePointerDown, true);
      swiper.el.addEventListener('pointerup', handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
      }

      // Pagination
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach(el => {
          el.removeEventListener('keydown', onEnterOrSpaceKey);
        });
      }
      const document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      // Tab focus
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
    on('beforeInit', () => {
      liveRegion = createElement('span', swiper.params.a11y.notificationClass);
      liveRegion.setAttribute('aria-live', 'assertive');
      liveRegion.setAttribute('aria-atomic', 'true');
    });
    on('afterInit', () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on('paginationUpdate', () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on('destroy', () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }

  function History(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: '',
        replaceState: false,
        key: 'slides',
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = text => {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = urlOverride => {
      const window = getWindow();
      let location;
      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }
      const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value
      };
    };
    const setHistory = (key, index) => {
      const window = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      let location;
      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }
      const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
      let value = slugify(slide.getAttribute('data-history'));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
        value = `${root}/${key ? `${key}/` : ''}${value}`;
      } else if (!location.pathname.includes(key)) {
        value = `${key ? `${key}/` : ''}${value}`;
      }
      if (swiper.params.history.keepQuery) {
        value += location.search;
      }
      const currentState = window.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window.history.replaceState({
          value
        }, null, value);
      } else {
        window.history.pushState({
          value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide = swiper.slides[i];
          const slideHistory = slugify(slide.getAttribute('data-history'));
          if (slideHistory === value) {
            const index = swiper.getSlideIndex(slide);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window = getWindow();
      if (!swiper.params.history) return;
      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
    };
    const destroy = () => {
      const window = getWindow();
      if (!swiper.params.history.replaceState) {
        window.removeEventListener('popstate', setHistoryPopState);
      }
    };
    on('init', () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on('destroy', () => {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on('slideChange', () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }

  function HashNavigation(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      on
    } = _ref;
    let initialized = false;
    const document = getDocument();
    const window = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
            if (!slideWithHash) return 0;
            const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
            return index;
          }
          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
        }
      }
    });
    const onHashChange = () => {
      emit('hashChange');
      const newHash = document.location.hash.replace('#', '');
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
        if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
        window.history.replaceState(null, null, `#${activeSlideHash}` || '');
        emit('hashSet');
      } else {
        document.location.hash = activeSlideHash || '';
        emit('hashSet');
      }
    };
    const init = () => {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      const hash = document.location.hash.replace('#', '');
      if (hash) {
        const speed = 0;
        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
      }
      if (swiper.params.hashNavigation.watchState) {
        window.addEventListener('hashchange', onHashChange);
      }
    };
    const destroy = () => {
      if (swiper.params.hashNavigation.watchState) {
        window.removeEventListener('hashchange', onHashChange);
      }
    };
    on('init', () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on('destroy', () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
      if (initialized) {
        setHash();
      }
    });
    on('slideChange', () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  /* eslint no-underscore-dangle: "off" */
  /* eslint no-use-before-define: "off" */
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
      if (pausedByPointerEnter) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return undefined;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
      return currentSlideDelay;
    };
    const run = delayForce => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit('autoplay');
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit('autoplay');
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = new Date().getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }

      // eslint-disable-next-line
      return delay;
    };
    const start = () => {
      autoplayStartTime = new Date().getTime();
      swiper.autoplay.running = true;
      run();
      emit('autoplayStart');
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit('autoplayStop');
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit('autoplayPause');
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = new Date().getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit('autoplayResume');
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document = getDocument();
      if (document.visibilityState === 'hidden') {
        pausedByInteraction = true;
        pause(true);
      }
      if (document.visibilityState === 'visible') {
        resume();
      }
    };
    const onPointerEnter = e => {
      if (e.pointerType !== 'mouse') return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = e => {
      if (e.pointerType !== 'mouse') return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener('pointerenter', onPointerEnter);
        swiper.el.addEventListener('pointerleave', onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    };
    const attachDocumentEvents = () => {
      const document = getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on('destroy', () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on('_freeModeStaticRelease', () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on('_freeModeNoMomentumRelease', () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on('beforeTransitionStart', (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on('sliderFirstMove', () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on('touchEnd', () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on('slideChange', () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  function Thumb(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-thumbs'
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', onThumbClick);
      return true;
    }
    function update(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

      // Activate thumbs
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + i]) {
            thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
          }
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }
        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }
    }
    on('beforeInit', () => {
      const {
        thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
        const document = getDocument();
        const getThumbsElementAndInit = () => {
          const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update(true);
          } else if (thumbsElement) {
            const onThumbsSwiper = e => {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener('init', onThumbsSwiper);
              init();
              update(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener('init', onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update(true);
      }
    });
    on('slideChange update resize observerUpdate', () => {
      update();
    });
    on('setTransition', (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update
    });
  }

  function freeMode(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      once
    } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart() {
      if (swiper.params.cssMode) return;
      const translate = swiper.getTranslate();
      swiper.setTranslate(translate);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove() {
      if (swiper.params.cssMode) return;
      const {
        touchEventsData: data,
        touches
      } = swiper;
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: now()
      });
    }
    function onTouchEnd(_ref2) {
      let {
        currentPos
      } = _ref2;
      if (swiper.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data
      } = swiper;
      // Time diff
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1000 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once('transitionEnd', () => {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit('momentumBounce');
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit('_freeModeNoMomentumRelease');
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit('_freeModeNoMomentumRelease');
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit('_freeModeStaticRelease');
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart,
        onTouchMove,
        onTouchEnd
      }
    });
  }

  function Grid(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: 'column'
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
      } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = slides => {
      const {
        slidesPerView
      } = swiper.params;
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== 'auto' && fill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper.slides) {
        swiper.slides.forEach(slide => {
          if (slide.swiperSlideGridSet) {
            slide.style.height = '';
            slide.style[swiper.getDirectionLabel('margin-top')] = '';
          }
        });
      }
    };
    const updateSlide = (i, slide, slides) => {
      const {
        slidesPerGroup
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === 'row' && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide.style.order = newSlideOrderIndex;
      } else if (fill === 'column') {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.row = row;
      slide.column = column;
      slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
      slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
      slide.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const {
        centeredSlides,
        roundLengths
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows
      } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const {
        params,
        el
      } = swiper;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        numFullColumns = 1;
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (params.grid.fill === 'column') {
          el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on('init', onInit);
    on('update', onUpdate);
    swiper.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize
    };
  }

  function appendSlide(slides) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    const appendElement = slideEl => {
      if (typeof slideEl === 'string') {
        const tempDOM = document.createElement('div');
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = '';
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) appendElement(slides[i]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = slideEl => {
      if (typeof slideEl === 'string') {
        const tempDOM = document.createElement('div');
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = '';
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) prependElement(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides[i];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) slidesEl.append(slides[i]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    const swiper = this;
    const {
      params,
      activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  function Manipulation(_ref) {
    let {
      swiper
    } = _ref;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }

  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate,
      setTransition,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on('beforeInit', () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', () => {
      if (swiper.params.effect !== effect) return;
      setTranslate();
    });
    on('setTransition', (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition(duration);
    });
    on('transitionEnd', () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        // remove shadows
        swiper.slides.forEach(slideEl => {
          slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
        });
        // create new one
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = 'hidden';
      transformEl.style['-webkit-backface-visibility'] = 'hidden';
    }
    return transformEl;
  }

  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = el => {
      if (!el.parentElement) {
        // assume shadow root
        const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
        return slide;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter(transformEl => {
          const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach(el => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition = duration => {
      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
      transformElements.forEach(el => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: 'fade',
      swiper,
      on,
      setTranslate,
      setTransition,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  function EffectCube(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
      let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
      if (!shadowBefore) {
        shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // create new ones
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach(slideEl => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
          if (!cubeShadowEl) {
            cubeShadowEl = createElement('div', 'swiper-cube-shadow');
            swiper.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = `${swiperWidth}px`;
        } else {
          cubeShadowEl = el.querySelector('.swiper-cube-shadow');
          if (!cubeShadowEl) {
            cubeShadowEl = createElement('div', 'swiper-cube-shadow');
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          if (swiper.browser && swiper.browser.need3dFix && Math.abs(wrapperRotate) / 90 % 2 === 1) {
            wrapperRotate += 0.001;
          }
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
      wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
        }
      }
      const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
      wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
    };
    const setTransition = duration => {
      const {
        el,
        slides
      } = swiper;
      slides.forEach(slideEl => {
        slideEl.style.transitionDuration = `${duration}ms`;
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
          subEl.style.transitionDuration = `${duration}ms`;
        });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        const shadowEl = el.querySelector('.swiper-cube-shadow');
        if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
      }
    };
    effectInit({
      effect: 'cube',
      swiper,
      on,
      setTranslate,
      setTransition,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }

  function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
    if (!shadowEl) {
      shadowEl = createElement('div', shadowClass.split(' '));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  function EffectFlip(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
      let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
      if (!shadowBefore) {
        shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
      }
      if (!shadowAfter) {
        shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      // Set shadows
      swiper.params.flipEffect;
      swiper.slides.forEach(slideEl => {
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate = () => {
      const {
        slides,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.flipEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        if (swiper.browser && swiper.browser.need3dFix) {
          if (Math.abs(rotateY) / 90 % 2 === 1) {
            rotateY += 0.001;
          }
          if (Math.abs(rotateX) / 90 % 2 === 1) {
            rotateX += 0.001;
          }
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition = duration => {
      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
      transformElements.forEach(el => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: 'flip',
      swiper,
      on,
      setTranslate,
      setTransition,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  function EffectCoverflow(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    const setTranslate = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const slideEl = slides[i];
        const slideSize = slidesSizesGrid[i];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        // Allow percentage to make a relative stretch for responsive sliders
        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        if (swiper.browser && swiper.browser.need3dFix) {
          if (Math.abs(rotateY) / 90 % 2 === 1) {
            rotateY += 0.001;
          }
          if (Math.abs(rotateX) / 90 % 2 === 1) {
            rotateX += 0.001;
          }
        }
        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
          let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition = duration => {
      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
      transformElements.forEach(el => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
    };
    effectInit({
      effect: 'coverflow',
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }

  function EffectCreative(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = value => {
      if (typeof value === 'string') return value;
      return `${value}px`;
    };
    const setTranslate = () => {
      const {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = slideEl.swiperSlideOffset;
        const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        // set translate
        t.forEach((value, index) => {
          t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
        });
        // set rotates
        r.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          if (swiper.browser && swiper.browser.need3dFix && Math.abs(val) / 90 % 2 === 1) {
            val += 0.001;
          }
          r[index] = val;
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(', ');
        const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
        const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

        // Set shadows
        if (custom && data.shadow || !custom) {
          let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow('creative', slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition = duration => {
      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
      transformElements.forEach(el => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: 'creative',
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  function EffectCards(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate = () => {
      const {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.cardsEffect;
      const {
        startTranslate,
        isTouched
      } = swiper.touchEventsData;
      const currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = `${-25 * subProgress * Math.abs(progress)}%`;
        }
        if (progress < 0) {
          // next
          tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
        } else if (progress > 0) {
          // prev
          tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
        } else {
          tX = `${tX}px`;
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

        /* eslint-disable */
        const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
        /* eslint-enable */

        if (params.slideShadows) {
          // Set shadows
          let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
          if (!shadowEl) {
            shadowEl = createShadow('cards', slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition = duration => {
      const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
      transformElements.forEach(el => {
        el.style.transitionDuration = `${duration}ms`;
        el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: 'cards',
      swiper,
      on,
      setTranslate,
      setTransition,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  /**
   * Swiper 11.1.1
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * https://swiperjs.com
   *
   * Copyright 2014-2024 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: April 9, 2024
   */


  // Swiper Class
  const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);

  return Swiper;

})();
/*
 * HSCore
 * @version: 4.1.0 (12 July, 2021)
 * @author: HtmlStream
 * @event-namespace: .HSCore
 * @license: Htmlstream Libraries (https://htmlstream.com/licenses)
 * Copyright 2021 Htmlstream
 */
'use strict';

const HSCore = {
  components: {},
  collection: {
    tooltips: [],
    popovers: []
  },

  init: function() {
    const that = this;

    // Tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    for (let i = 0; i < tooltips.length; i += 1) {
      that.collection.tooltips.push(
        new window.bootstrap.Tooltip(tooltips[i], {
          container: '.tooltip-container'
        })
      );
    }

    // Popovers
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');

    for (let i = 0; i < popovers.length; i += 1) {
      that.collection.popovers.push(new window.bootstrap.Popover(popovers[i]));
    }

    document.querySelectorAll('[data-bs-popover-dark]').forEach(function($popover) {
      $popover.addEventListener('click', function(e) {
        const $popovers = document.querySelectorAll('.popover');
        if (!$popovers.length) return;
        $popovers[$popovers.length - 1].classList.add('popover-dark');
      });
    });
  },

  getTooltips: function() {
    return this.collection.tooltips;
  },

  hideTooltips: function() {
    const tooltips = this.getTooltips();

    for (let i = 0; i < tooltips.length; i += 1) {
      tooltips[i].hide();
    }
  },

  getPopovers: function() {
    return this.collection.popovers;
  },

  hidePopovers: function() {
    const popovers = this.getPopovers();

    for (let i = 0; i < popovers.length; i += 1) {
      popovers[i].hide();
    }
  },

  disposePopovers: function() {
    const popovers = this.getPopovers();

    for (let i = 0; i < popovers.length; i += 1) {
      popovers[i].dispose();
    }
  }
};
'use strict';

const HSBsDropdown = {
	init(options) {
		this.setAnimations();
		this.openOnHover();
	},

	scrollEvent: null,

	setAnimations() {
		window.addEventListener('show.bs.dropdown', el => {
			const $table = el.target.closest('.table-responsive');
			if ($table) {
				this.scrollEvent = function() {
					new bootstrap.Dropdown(el.target).hide();
				};

				$table.addEventListener('scroll', this.scrollEvent);
			}

			const animation = el.target.hasAttribute('data-bs-dropdown-animation');
			if (!animation) return;

			const menu = el.target.nextElementSibling;
			menu.style.opacity = 0;
			setTimeout(() => {
				menu.style.transform = `${menu.style.transform} translateY(10px)`;
			});
			setTimeout(() => {
				menu.style.transform = `${menu.style.transform} translateY(-10px)`;
				menu.style.transition = 'transform 300ms, opacity 300ms';
				menu.style.opacity = 1;
			}, 100);
		});

		window.addEventListener('hide.bs.dropdown', el => {
			const $table = el.target.closest('.table-responsive');
			if ($table) {
				$table.removeEventListener('scroll', this.scrollEvent);
			}

			const animation = el.target.hasAttribute('data-bs-dropdown-animation');
			if (!animation) return;

			const menu = el.target.nextElementSibling;
			setTimeout(() => {
				menu.style.removeProperty('transform');
				menu.style.removeProperty('transition');
			});
		});
	},

	openOnHover() {
		const $targets = Array.from(document.querySelectorAll('[data-bs-open-on-hover]'));

		$targets.forEach($target => {
			var timeout;
			const instance = new bootstrap.Dropdown($target);

			function close() {
				timeout = setTimeout(() => {
					instance.hide();
				}, 500);
			}

			$target.addEventListener('mouseenter', () => {
				clearTimeout(timeout);
				instance.show();
			});

			instance._menu.addEventListener('mouseenter', () => {
				window.clearTimeout(timeout);
			});

			Array.from([instance._menu, $target]).forEach($el => $el.addEventListener('mouseleave', close));
		});
	}
};

HSBsDropdown.init();
/*
 * HSMask Plugin
 * @version: 2.0.1 (Sat, 30 Jul 2021)
 * @requires: imask v1.14.16
 * @author: HtmlStream
 * @event-namespace: .HSMask
 * @license: Htmlstream Libraries (https://htmlstream.com/)
 * Copyright 2021 Htmlstream
 */

HSCore.components.HSMask = {
  collection: [],

  dataAttributeName: 'data-hs-mask-options',

  defaults: {
    mask: null
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

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }

      _options = that.collection[i].options;
      _$el = that.collection[i].$el;

      // patch - Marketplace override - if we pass a currency block configuration
      // change the mask type to be js Number- because how can you parse a string to a js type from ruby server :shruggie:
      if (
        _options['blocks'] &&
        _options['blocks']['num'] &&
        typeof _options['blocks']['num'] == 'object'
      ) {
        if (_options['blocks']['num']['mask'] == 'Currency') {
          _options['blocks']['num']['mask'] = Number;
        }
      }

      if (
        _options['blocks'] &&
        _options['blocks']['link'] &&
        typeof _options['blocks']['link'] == 'object'
      ) {
        if (_options['blocks']['link']['mask'] == 'Link') {
          _options['blocks']['link']['mask'] = String;
        }
      }
      /* Start : Init */

      that.collection[i].$initializedEl = new IMask(_$el, _options);

      /* End : Init */
    }
  }
};
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HsNavScroller"] = factory();
	else
		root["HsNavScroller"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-nav-scroller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/velocity-animate/velocity.js":
/*!***************************************************!*\
  !*** ./node_modules/velocity-animate/velocity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */\r\n\r\n/*************************\r\n Velocity jQuery Shim\r\n *************************/\r\n\r\n/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */\r\n\r\n/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */\r\n/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */\r\n/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */\r\n\r\n(function(window) {\r\n\t\"use strict\";\r\n\t/***************\r\n\t Setup\r\n\t ***************/\r\n\r\n\t/* If jQuery is already loaded, there's no point in loading this shim. */\r\n\tif (window.jQuery) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t/* jQuery base. */\r\n\tvar $ = function(selector, context) {\r\n\t\treturn new $.fn.init(selector, context);\r\n\t};\r\n\r\n\t/********************\r\n\t Private Methods\r\n\t ********************/\r\n\r\n\t/* jQuery */\r\n\t$.isWindow = function(obj) {\r\n\t\t/* jshint eqeqeq: false */\r\n\t\treturn obj && obj === obj.window;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.type = function(obj) {\r\n\t\tif (!obj) {\r\n\t\t\treturn obj + \"\";\r\n\t\t}\r\n\r\n\t\treturn typeof obj === \"object\" || typeof obj === \"function\" ?\r\n\t\t\t\tclass2type[toString.call(obj)] || \"object\" :\r\n\t\t\t\ttypeof obj;\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.isArray = Array.isArray || function(obj) {\r\n\t\treturn $.type(obj) === \"array\";\r\n\t};\r\n\r\n\t/* jQuery */\r\n\tfunction isArraylike(obj) {\r\n\t\tvar length = obj.length,\r\n\t\t\t\ttype = $.type(obj);\r\n\r\n\t\tif (type === \"function\" || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tif (obj.nodeType === 1 && length) {\r\n\t\t\treturn true;\r\n\t\t}\r\n\r\n\t\treturn type === \"array\" || length === 0 || typeof length === \"number\" && length > 0 && (length - 1) in obj;\r\n\t}\r\n\r\n\t/***************\r\n\t $ Methods\r\n\t ***************/\r\n\r\n\t/* jQuery: Support removed for IE<9. */\r\n\t$.isPlainObject = function(obj) {\r\n\t\tvar key;\r\n\r\n\t\tif (!obj || $.type(obj) !== \"object\" || obj.nodeType || $.isWindow(obj)) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\tif (obj.constructor &&\r\n\t\t\t\t\t!hasOwn.call(obj, \"constructor\") &&\r\n\t\t\t\t\t!hasOwn.call(obj.constructor.prototype, \"isPrototypeOf\")) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t} catch (e) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tfor (key in obj) {\r\n\t\t}\r\n\r\n\t\treturn key === undefined || hasOwn.call(obj, key);\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.each = function(obj, callback, args) {\r\n\t\tvar value,\r\n\t\t\t\ti = 0,\r\n\t\t\t\tlength = obj.length,\r\n\t\t\t\tisArray = isArraylike(obj);\r\n\r\n\t\tif (args) {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.apply(obj[i], args);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\tif (isArray) {\r\n\t\t\t\tfor (; i < length; i++) {\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (i in obj) {\r\n\t\t\t\t\tif (!obj.hasOwnProperty(i)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tvalue = callback.call(obj[i], i, obj[i]);\r\n\r\n\t\t\t\t\tif (value === false) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn obj;\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.data = function(node, key, value) {\r\n\t\t/* $.getData() */\r\n\t\tif (value === undefined) {\r\n\t\t\tvar getId = node[$.expando],\r\n\t\t\t\t\tstore = getId && cache[getId];\r\n\r\n\t\t\tif (key === undefined) {\r\n\t\t\t\treturn store;\r\n\t\t\t} else if (store) {\r\n\t\t\t\tif (key in store) {\r\n\t\t\t\t\treturn store[key];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t/* $.setData() */\r\n\t\t} else if (key !== undefined) {\r\n\t\t\tvar setId = node[$.expando] || (node[$.expando] = ++$.uuid);\r\n\r\n\t\t\tcache[setId] = cache[setId] || {};\r\n\t\t\tcache[setId][key] = value;\r\n\r\n\t\t\treturn value;\r\n\t\t}\r\n\t};\r\n\r\n\t/* Custom */\r\n\t$.removeData = function(node, keys) {\r\n\t\tvar id = node[$.expando],\r\n\t\t\t\tstore = id && cache[id];\r\n\r\n\t\tif (store) {\r\n\t\t\t// Cleanup the entire store if no keys are provided.\r\n\t\t\tif (!keys) {\r\n\t\t\t\tdelete cache[id];\r\n\t\t\t} else {\r\n\t\t\t\t$.each(keys, function(_, key) {\r\n\t\t\t\t\tdelete store[key];\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\r\n\t/* jQuery */\r\n\t$.extend = function() {\r\n\t\tvar src, copyIsArray, copy, name, options, clone,\r\n\t\t\t\ttarget = arguments[0] || {},\r\n\t\t\t\ti = 1,\r\n\t\t\t\tlength = arguments.length,\r\n\t\t\t\tdeep = false;\r\n\r\n\t\tif (typeof target === \"boolean\") {\r\n\t\t\tdeep = target;\r\n\r\n\t\t\ttarget = arguments[i] || {};\r\n\t\t\ti++;\r\n\t\t}\r\n\r\n\t\tif (typeof target !== \"object\" && $.type(target) !== \"function\") {\r\n\t\t\ttarget = {};\r\n\t\t}\r\n\r\n\t\tif (i === length) {\r\n\t\t\ttarget = this;\r\n\t\t\ti--;\r\n\t\t}\r\n\r\n\t\tfor (; i < length; i++) {\r\n\t\t\tif ((options = arguments[i])) {\r\n\t\t\t\tfor (name in options) {\r\n\t\t\t\t\tif (!options.hasOwnProperty(name)) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tsrc = target[name];\r\n\t\t\t\t\tcopy = options[name];\r\n\r\n\t\t\t\t\tif (target === copy) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {\r\n\t\t\t\t\t\tif (copyIsArray) {\r\n\t\t\t\t\t\t\tcopyIsArray = false;\r\n\t\t\t\t\t\t\tclone = src && $.isArray(src) ? src : [];\r\n\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tclone = src && $.isPlainObject(src) ? src : {};\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttarget[name] = $.extend(deep, clone, copy);\r\n\r\n\t\t\t\t\t} else if (copy !== undefined) {\r\n\t\t\t\t\t\ttarget[name] = copy;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn target;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.queue = function(elem, type, data) {\r\n\t\tfunction $makeArray(arr, results) {\r\n\t\t\tvar ret = results || [];\r\n\r\n\t\t\tif (arr) {\r\n\t\t\t\tif (isArraylike(Object(arr))) {\r\n\t\t\t\t\t/* $.merge */\r\n\t\t\t\t\t(function(first, second) {\r\n\t\t\t\t\t\tvar len = +second.length,\r\n\t\t\t\t\t\t\t\tj = 0,\r\n\t\t\t\t\t\t\t\ti = first.length;\r\n\r\n\t\t\t\t\t\twhile (j < len) {\r\n\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (len !== len) {\r\n\t\t\t\t\t\t\twhile (second[j] !== undefined) {\r\n\t\t\t\t\t\t\t\tfirst[i++] = second[j++];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tfirst.length = i;\r\n\r\n\t\t\t\t\t\treturn first;\r\n\t\t\t\t\t})(ret, typeof arr === \"string\" ? [arr] : arr);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t[].push.call(ret, arr);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn ret;\r\n\t\t}\r\n\r\n\t\tif (!elem) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\ttype = (type || \"fx\") + \"queue\";\r\n\r\n\t\tvar q = $.data(elem, type);\r\n\r\n\t\tif (!data) {\r\n\t\t\treturn q || [];\r\n\t\t}\r\n\r\n\t\tif (!q || $.isArray(data)) {\r\n\t\t\tq = $.data(elem, type, $makeArray(data));\r\n\t\t} else {\r\n\t\t\tq.push(data);\r\n\t\t}\r\n\r\n\t\treturn q;\r\n\t};\r\n\r\n\t/* jQuery 1.4.3 */\r\n\t$.dequeue = function(elems, type) {\r\n\t\t/* Custom: Embed element iteration. */\r\n\t\t$.each(elems.nodeType ? [elems] : elems, function(i, elem) {\r\n\t\t\ttype = type || \"fx\";\r\n\r\n\t\t\tvar queue = $.queue(elem, type),\r\n\t\t\t\t\tfn = queue.shift();\r\n\r\n\t\t\tif (fn === \"inprogress\") {\r\n\t\t\t\tfn = queue.shift();\r\n\t\t\t}\r\n\r\n\t\t\tif (fn) {\r\n\t\t\t\tif (type === \"fx\") {\r\n\t\t\t\t\tqueue.unshift(\"inprogress\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfn.call(elem, function() {\r\n\t\t\t\t\t$.dequeue(elem, type);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n\r\n\t/******************\r\n\t $.fn Methods\r\n\t ******************/\r\n\r\n\t/* jQuery */\r\n\t$.fn = $.prototype = {\r\n\t\tinit: function(selector) {\r\n\t\t\t/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */\r\n\t\t\tif (selector.nodeType) {\r\n\t\t\t\tthis[0] = selector;\r\n\r\n\t\t\t\treturn this;\r\n\t\t\t} else {\r\n\t\t\t\tthrow new Error(\"Not a DOM node.\");\r\n\t\t\t}\r\n\t\t},\r\n\t\toffset: function() {\r\n\t\t\t/* jQuery altered code: Dropped disconnected DOM node checking. */\r\n\t\t\tvar box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),\r\n\t\t\t\tleft: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)\r\n\t\t\t};\r\n\t\t},\r\n\t\tposition: function() {\r\n\t\t\t/* jQuery */\r\n\t\t\tfunction offsetParentFn(elem) {\r\n\t\t\t\tvar offsetParent = elem.offsetParent;\r\n\r\n\t\t\t\twhile (offsetParent && (offsetParent.nodeName.toLowerCase() !== \"html\" && offsetParent.style && offsetParent.style.position.toLowerCase() === \"static\")) {\r\n\t\t\t\t\toffsetParent = offsetParent.offsetParent;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn offsetParent || document;\r\n\t\t\t}\r\n\r\n\t\t\t/* Zepto */\r\n\t\t\tvar elem = this[0],\r\n\t\t\t\t\toffsetParent = offsetParentFn(elem),\r\n\t\t\t\t\toffset = this.offset(),\r\n\t\t\t\t\tparentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();\r\n\r\n\t\t\toffset.top -= parseFloat(elem.style.marginTop) || 0;\r\n\t\t\toffset.left -= parseFloat(elem.style.marginLeft) || 0;\r\n\r\n\t\t\tif (offsetParent.style) {\r\n\t\t\t\tparentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;\r\n\t\t\t\tparentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;\r\n\t\t\t}\r\n\r\n\t\t\treturn {\r\n\t\t\t\ttop: offset.top - parentOffset.top,\r\n\t\t\t\tleft: offset.left - parentOffset.left\r\n\t\t\t};\r\n\t\t}\r\n\t};\r\n\r\n\t/**********************\r\n\t Private Variables\r\n\t **********************/\r\n\r\n\t/* For $.data() */\r\n\tvar cache = {};\r\n\t$.expando = \"velocity\" + (new Date().getTime());\r\n\t$.uuid = 0;\r\n\r\n\t/* For $.queue() */\r\n\tvar class2type = {},\r\n\t\t\thasOwn = class2type.hasOwnProperty,\r\n\t\t\ttoString = class2type.toString;\r\n\r\n\tvar types = \"Boolean Number String Function Array Date RegExp Object Error\".split(\" \");\r\n\tfor (var i = 0; i < types.length; i++) {\r\n\t\tclass2type[\"[object \" + types[i] + \"]\"] = types[i].toLowerCase();\r\n\t}\r\n\r\n\t/* Makes $(node) possible, without having to call init. */\r\n\t$.fn.init.prototype = $.fn;\r\n\r\n\t/* Globalize Velocity onto the window, and assign its Utilities property. */\r\n\twindow.Velocity = {Utilities: $};\r\n})(window);\r\n\r\n/******************\r\n Velocity.js\r\n ******************/\r\n\r\n(function(factory) {\r\n\t\"use strict\";\r\n\t/* CommonJS module. */\r\n\tif ( true && typeof module.exports === \"object\") {\r\n\t\tmodule.exports = factory();\r\n\t\t/* AMD module. */\r\n\t} else if (true) {\r\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\t\t/* Browser globals. */\r\n\t} else {}\r\n}(function() {\r\n\t\"use strict\";\r\n\treturn function(global, window, document, undefined) {\r\n\r\n\t\t/***************\r\n\t\t Summary\r\n\t\t ***************/\r\n\r\n\t\t/*\r\n\t\t - CSS: CSS stack that works independently from the rest of Velocity.\r\n\t\t - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.\r\n\t\t - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.\r\n\t\t - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.\r\n\t\t Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).\r\n\t\t - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.\r\n\t\t - completeCall(): Handles the cleanup process for each Velocity call.\r\n\t\t */\r\n\r\n\t\t/*********************\r\n\t\t Helper Functions\r\n\t\t *********************/\r\n\r\n\t\t/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */\r\n\t\tvar IE = (function() {\r\n\t\t\tif (document.documentMode) {\r\n\t\t\t\treturn document.documentMode;\r\n\t\t\t} else {\r\n\t\t\t\tfor (var i = 7; i > 4; i--) {\r\n\t\t\t\t\tvar div = document.createElement(\"div\");\r\n\r\n\t\t\t\t\tdiv.innerHTML = \"<!--[if IE \" + i + \"]><span></span><![endif]-->\";\r\n\r\n\t\t\t\t\tif (div.getElementsByTagName(\"span\").length) {\r\n\t\t\t\t\t\tdiv = null;\r\n\r\n\t\t\t\t\t\treturn i;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn undefined;\r\n\t\t})();\r\n\r\n\t\t/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */\r\n\t\tvar rAFShim = (function() {\r\n\t\t\tvar timeLast = 0;\r\n\r\n\t\t\treturn window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {\r\n\t\t\t\tvar timeCurrent = (new Date()).getTime(),\r\n\t\t\t\t\t\ttimeDelta;\r\n\r\n\t\t\t\t/* Dynamically set delay on a per-tick basis to match 60fps. */\r\n\t\t\t\t/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */\r\n\t\t\t\ttimeDelta = Math.max(0, 16 - (timeCurrent - timeLast));\r\n\t\t\t\ttimeLast = timeCurrent + timeDelta;\r\n\r\n\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\tcallback(timeCurrent + timeDelta);\r\n\t\t\t\t}, timeDelta);\r\n\t\t\t};\r\n\t\t})();\r\n\r\n\t\tvar performance = (function() {\r\n\t\t\tvar perf = window.performance || {};\r\n\r\n\t\t\tif (typeof perf.now !== \"function\") {\r\n\t\t\t\tvar nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();\r\n\r\n\t\t\t\tperf.now = function() {\r\n\t\t\t\t\treturn (new Date()).getTime() - nowOffset;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn perf;\r\n\t\t})();\r\n\r\n\t\t/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */\r\n\t\tfunction compactSparseArray(array) {\r\n\t\t\tvar index = -1,\r\n\t\t\t\t\tlength = array ? array.length : 0,\r\n\t\t\t\t\tresult = [];\r\n\r\n\t\t\twhile (++index < length) {\r\n\t\t\t\tvar value = array[index];\r\n\r\n\t\t\t\tif (value) {\r\n\t\t\t\t\tresult.push(value);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn result;\r\n\t\t}\r\n\r\n\t\t/**\r\n\t\t * Shim for \"fixing\" IE's lack of support (IE < 9) for applying slice\r\n\t\t * on host objects like NamedNodeMap, NodeList, and HTMLCollection\r\n\t\t * (technically, since host objects have been implementation-dependent,\r\n\t\t * at least before ES2015, IE hasn't needed to work this way).\r\n\t\t * Also works on strings, fixes IE < 9 to allow an explicit undefined\r\n\t\t * for the 2nd argument (as in Firefox), and prevents errors when\r\n\t\t * called on other DOM objects.\r\n\t\t */\r\n\t\tvar _slice = (function() {\r\n\t\t\tvar slice = Array.prototype.slice;\r\n\r\n\t\t\ttry {\r\n\t\t\t\t// Can't be used with DOM elements in IE < 9\r\n\t\t\t\tslice.call(document.documentElement);\r\n\t\t\t\treturn slice;\r\n\t\t\t} catch (e) { // Fails in IE < 9\r\n\r\n\t\t\t\t// This will work for genuine arrays, array-like objects, \r\n\t\t\t\t// NamedNodeMap (attributes, entities, notations),\r\n\t\t\t\t// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),\r\n\t\t\t\t// and will not fail on other DOM objects (as do DOM elements in IE < 9)\r\n\t\t\t\treturn function(begin, end) {\r\n\t\t\t\t\tvar len = this.length;\r\n\r\n\t\t\t\t\tif (typeof begin !== \"number\") {\r\n\t\t\t\t\t\tbegin = 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// IE < 9 gets unhappy with an undefined end argument\r\n\t\t\t\t\tif (typeof end !== \"number\") {\r\n\t\t\t\t\t\tend = len;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For native Array objects, we use the native slice function\r\n\t\t\t\t\tif (this.slice) {\r\n\t\t\t\t\t\treturn slice.call(this, begin, end);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t// For array like object we handle it ourselves.\r\n\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\tcloned = [],\r\n\t\t\t\t\t\t\t// Handle negative value for \"begin\"\r\n\t\t\t\t\t\t\tstart = (begin >= 0) ? begin : Math.max(0, len + begin),\r\n\t\t\t\t\t\t\t// Handle negative value for \"end\"\r\n\t\t\t\t\t\t\tupTo = end < 0 ? len + end : Math.min(end, len),\r\n\t\t\t\t\t\t\t// Actual expected size of the slice\r\n\t\t\t\t\t\t\tsize = upTo - start;\r\n\r\n\t\t\t\t\tif (size > 0) {\r\n\t\t\t\t\t\tcloned = new Array(size);\r\n\t\t\t\t\t\tif (this.charAt) {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this.charAt(start + i);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tfor (i = 0; i < size; i++) {\r\n\t\t\t\t\t\t\t\tcloned[i] = this[start + i];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn cloned;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t})();\r\n\r\n\t\t/* .indexOf doesn't exist in IE<9 */\r\n\t\tvar _inArray = (function() {\r\n\t\t\tif (Array.prototype.includes) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.includes(val);\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\tif (Array.prototype.indexOf) {\r\n\t\t\t\treturn function(arr, val) {\r\n\t\t\t\t\treturn arr.indexOf(val) >= 0;\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\treturn function(arr, val) {\r\n\t\t\t\tfor (var i = 0; i < arr.length; i++) {\r\n\t\t\t\t\tif (arr[i] === val) {\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn false;\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\tfunction sanitizeElements(elements) {\r\n\t\t\t/* Unwrap jQuery/Zepto objects. */\r\n\t\t\tif (Type.isWrapped(elements)) {\r\n\t\t\t\telements = _slice.call(elements);\r\n\t\t\t\t/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */\r\n\t\t\t} else if (Type.isNode(elements)) {\r\n\t\t\t\telements = [elements];\r\n\t\t\t}\r\n\r\n\t\t\treturn elements;\r\n\t\t}\r\n\r\n\t\tvar Type = {\r\n\t\t\tisNumber: function(variable) {\r\n\t\t\t\treturn (typeof variable === \"number\");\r\n\t\t\t},\r\n\t\t\tisString: function(variable) {\r\n\t\t\t\treturn (typeof variable === \"string\");\r\n\t\t\t},\r\n\t\t\tisArray: Array.isArray || function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Array]\";\r\n\t\t\t},\r\n\t\t\tisFunction: function(variable) {\r\n\t\t\t\treturn Object.prototype.toString.call(variable) === \"[object Function]\";\r\n\t\t\t},\r\n\t\t\tisNode: function(variable) {\r\n\t\t\t\treturn variable && variable.nodeType;\r\n\t\t\t},\r\n\t\t\t/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */\r\n\t\t\t/* NOTE: HTMLFormElements also have a length. */\r\n\t\t\tisWrapped: function(variable) {\r\n\t\t\t\treturn variable\r\n\t\t\t\t\t\t&& variable !== window\r\n\t\t\t\t\t\t&& Type.isNumber(variable.length)\r\n\t\t\t\t\t\t&& !Type.isString(variable)\r\n\t\t\t\t\t\t&& !Type.isFunction(variable)\r\n\t\t\t\t\t\t&& !Type.isNode(variable)\r\n\t\t\t\t\t\t&& (variable.length === 0 || Type.isNode(variable[0]));\r\n\t\t\t},\r\n\t\t\tisSVG: function(variable) {\r\n\t\t\t\treturn window.SVGElement && (variable instanceof window.SVGElement);\r\n\t\t\t},\r\n\t\t\tisEmptyObject: function(variable) {\r\n\t\t\t\tfor (var name in variable) {\r\n\t\t\t\t\tif (variable.hasOwnProperty(name)) {\r\n\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Dependencies\r\n\t\t *****************/\r\n\r\n\t\tvar $,\r\n\t\t\t\tisJQuery = false;\r\n\r\n\t\tif (global.fn && global.fn.jquery) {\r\n\t\t\t$ = global;\r\n\t\t\tisJQuery = true;\r\n\t\t} else {\r\n\t\t\t$ = window.Velocity.Utilities;\r\n\t\t}\r\n\r\n\t\tif (IE <= 8 && !isJQuery) {\r\n\t\t\tthrow new Error(\"Velocity: IE8 and below require jQuery to be loaded before Velocity.\");\r\n\t\t} else if (IE <= 7) {\r\n\t\t\t/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */\r\n\t\t\tjQuery.fn.velocity = jQuery.fn.animate;\r\n\r\n\t\t\t/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t Constants\r\n\t\t *****************/\r\n\r\n\t\tvar DURATION_DEFAULT = 400,\r\n\t\t\t\tEASING_DEFAULT = \"swing\";\r\n\r\n\t\t/*************\r\n\t\t State\r\n\t\t *************/\r\n\r\n\t\tvar Velocity = {\r\n\t\t\t/* Container for page-wide Velocity state data. */\r\n\t\t\tState: {\r\n\t\t\t\t/* Detect mobile devices to determine if mobileHA should be turned on. */\r\n\t\t\t\tisMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */\r\n\t\t\t\tisAndroid: /Android/i.test(window.navigator.userAgent),\r\n\t\t\t\tisGingerbread: /Android 2\\.3\\.[3-7]/i.test(window.navigator.userAgent),\r\n\t\t\t\tisChrome: window.chrome,\r\n\t\t\t\tisFirefox: /Firefox/i.test(window.navigator.userAgent),\r\n\t\t\t\t/* Create a cached element for re-use when checking for CSS property prefixes. */\r\n\t\t\t\tprefixElement: document.createElement(\"div\"),\r\n\t\t\t\t/* Cache every prefix match to avoid repeating lookups. */\r\n\t\t\t\tprefixMatches: {},\r\n\t\t\t\t/* Cache the anchor used for animating window scrolling. */\r\n\t\t\t\tscrollAnchor: null,\r\n\t\t\t\t/* Cache the browser-specific property names associated with the scroll anchor. */\r\n\t\t\t\tscrollPropertyLeft: null,\r\n\t\t\t\tscrollPropertyTop: null,\r\n\t\t\t\t/* Keep track of whether our RAF tick is running. */\r\n\t\t\t\tisTicking: false,\r\n\t\t\t\t/* Container for every in-progress call to Velocity. */\r\n\t\t\t\tcalls: [],\r\n\t\t\t\tdelayedElements: {\r\n\t\t\t\t\tcount: 0\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/* Velocity's custom CSS stack. Made global for unit testing. */\r\n\t\t\tCSS: {/* Defined below. */},\r\n\t\t\t/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */\r\n\t\t\tUtilities: $,\r\n\t\t\t/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */\r\n\t\t\tRedirects: {/* Manually registered by the user. */},\r\n\t\t\tEasings: {/* Defined below. */},\r\n\t\t\t/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */\r\n\t\t\tPromise: window.Promise,\r\n\t\t\t/* Velocity option defaults, which can be overriden by the user. */\r\n\t\t\tdefaults: {\r\n\t\t\t\tqueue: \"\",\r\n\t\t\t\tduration: DURATION_DEFAULT,\r\n\t\t\t\teasing: EASING_DEFAULT,\r\n\t\t\t\tbegin: undefined,\r\n\t\t\t\tcomplete: undefined,\r\n\t\t\t\tprogress: undefined,\r\n\t\t\t\tdisplay: undefined,\r\n\t\t\t\tvisibility: undefined,\r\n\t\t\t\tloop: false,\r\n\t\t\t\tdelay: false,\r\n\t\t\t\tmobileHA: true,\r\n\t\t\t\t/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */\r\n\t\t\t\t_cacheValues: true,\r\n\t\t\t\t/* Advanced: Set to false if the promise should always resolve on empty element lists. */\r\n\t\t\t\tpromiseRejectEmpty: true\r\n\t\t\t},\r\n\t\t\t/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */\r\n\t\t\tinit: function(element) {\r\n\t\t\t\t$.data(element, \"velocity\", {\r\n\t\t\t\t\t/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */\r\n\t\t\t\t\tisSVG: Type.isSVG(element),\r\n\t\t\t\t\t/* Keep track of whether the element is currently being animated by Velocity.\r\n\t\t\t\t\t This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */\r\n\t\t\t\t\tisAnimating: false,\r\n\t\t\t\t\t/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\t\tcomputedStyle: null,\r\n\t\t\t\t\t/* Tween data is cached for each animation on the element so that data can be passed across calls --\r\n\t\t\t\t\t in particular, end values are used as subsequent start values in consecutive Velocity calls. */\r\n\t\t\t\t\ttweensContainer: null,\r\n\t\t\t\t\t/* The full root property values of each CSS hook being animated on this element are cached so that:\r\n\t\t\t\t\t 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.\r\n\t\t\t\t\t 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */\r\n\t\t\t\t\trootPropertyValueCache: {},\r\n\t\t\t\t\t/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */\r\n\t\t\t\t\ttransformCache: {}\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */\r\n\t\t\thook: null, /* Defined below. */\r\n\t\t\t/* Velocity-wide animation time remapping for testing purposes. */\r\n\t\t\tmock: false,\r\n\t\t\tversion: {major: 1, minor: 5, patch: 2},\r\n\t\t\t/* Set to 1 or 2 (most verbose) to output debug info to console. */\r\n\t\t\tdebug: false,\r\n\t\t\t/* Use rAF high resolution timestamp when available */\r\n\t\t\ttimestamp: true,\r\n\t\t\t/* Pause all animations */\r\n\t\t\tpauseAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\r\n\t\t\t\t/* Pause timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t},\r\n\t\t\t/* Resume all animations */\r\n\t\t\tresumeAll: function(queueName) {\r\n\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\tif (activeCall) {\r\n\r\n\t\t\t\t\t\t/* If we have a queueName and this call is not on that queue, skip */\r\n\t\t\t\t\t\tif (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Set call to resumed if it was paused */\r\n\t\t\t\t\t\tif (activeCall[5]) {\r\n\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\t/* Resume timers on any currently delayed calls */\r\n\t\t\t\t$.each(Velocity.State.delayedElements, function(k, element) {\r\n\t\t\t\t\tif (!element) {\r\n\t\t\t\t\t\treturn;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */\r\n\t\tif (window.pageYOffset !== undefined) {\r\n\t\t\tVelocity.State.scrollAnchor = window;\r\n\t\t\tVelocity.State.scrollPropertyLeft = \"pageXOffset\";\r\n\t\t\tVelocity.State.scrollPropertyTop = \"pageYOffset\";\r\n\t\t} else {\r\n\t\t\tVelocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;\r\n\t\t\tVelocity.State.scrollPropertyLeft = \"scrollLeft\";\r\n\t\t\tVelocity.State.scrollPropertyTop = \"scrollTop\";\r\n\t\t}\r\n\r\n\t\t/* Shorthand alias for jQuery's $.data() utility. */\r\n\t\tfunction Data(element) {\r\n\t\t\t/* Hardcode a reference to the plugin name. */\r\n\t\t\tvar response = $.data(element, \"velocity\");\r\n\r\n\t\t\t/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */\r\n\t\t\treturn response === null ? undefined : response;\r\n\t\t}\r\n\r\n\t\t/**************\r\n\t\t Delay Timer\r\n\t\t **************/\r\n\r\n\t\tfunction pauseDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any delay timers, and pause the set timeouts (while preserving time data)\r\n\t\t\t to be resumed when the \"resume\" command is issued */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && !data.delayPaused) {\r\n\t\t\t\tdata.delayRemaining = data.delay - currentTime + data.delayBegin;\r\n\t\t\t\tdata.delayPaused = true;\r\n\t\t\t\tclearTimeout(data.delayTimer.setTimeout);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfunction resumeDelayOnElement(element, currentTime) {\r\n\t\t\t/* Check for any paused timers and resume */\r\n\t\t\tvar data = Data(element);\r\n\t\t\tif (data && data.delayTimer && data.delayPaused) {\r\n\t\t\t\t/* If the element was mid-delay, re initiate the timeout with the remaining delay */\r\n\t\t\t\tdata.delayPaused = false;\r\n\t\t\t\tdata.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\r\n\t\t/**************\r\n\t\t Easing\r\n\t\t **************/\r\n\r\n\t\t/* Step easing generator. */\r\n\t\tfunction generateStep(steps) {\r\n\t\t\treturn function(p) {\r\n\t\t\t\treturn Math.round(p * steps) * (1 / steps);\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\tfunction generateBezier(mX1, mY1, mX2, mY2) {\r\n\t\t\tvar NEWTON_ITERATIONS = 4,\r\n\t\t\t\t\tNEWTON_MIN_SLOPE = 0.001,\r\n\t\t\t\t\tSUBDIVISION_PRECISION = 0.0000001,\r\n\t\t\t\t\tSUBDIVISION_MAX_ITERATIONS = 10,\r\n\t\t\t\t\tkSplineTableSize = 11,\r\n\t\t\t\t\tkSampleStepSize = 1.0 / (kSplineTableSize - 1.0),\r\n\t\t\t\t\tfloat32ArraySupported = \"Float32Array\" in window;\r\n\r\n\t\t\t/* Must contain four arguments. */\r\n\t\t\tif (arguments.length !== 4) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Arguments must be numbers. */\r\n\t\t\tfor (var i = 0; i < 4; ++i) {\r\n\t\t\t\tif (typeof arguments[i] !== \"number\" || isNaN(arguments[i]) || !isFinite(arguments[i])) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* X values must be in the [0, 1] range. */\r\n\t\t\tmX1 = Math.min(mX1, 1);\r\n\t\t\tmX2 = Math.min(mX2, 1);\r\n\t\t\tmX1 = Math.max(mX1, 0);\r\n\t\t\tmX2 = Math.max(mX2, 0);\r\n\r\n\t\t\tvar mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);\r\n\r\n\t\t\tfunction A(aA1, aA2) {\r\n\t\t\t\treturn 1.0 - 3.0 * aA2 + 3.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction B(aA1, aA2) {\r\n\t\t\t\treturn 3.0 * aA2 - 6.0 * aA1;\r\n\t\t\t}\r\n\t\t\tfunction C(aA1) {\r\n\t\t\t\treturn 3.0 * aA1;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcBezier(aT, aA1, aA2) {\r\n\t\t\t\treturn ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getSlope(aT, aA1, aA2) {\r\n\t\t\t\treturn 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);\r\n\t\t\t}\r\n\r\n\t\t\tfunction newtonRaphsonIterate(aX, aGuessT) {\r\n\t\t\t\tfor (var i = 0; i < NEWTON_ITERATIONS; ++i) {\r\n\t\t\t\t\tvar currentSlope = getSlope(aGuessT, mX1, mX2);\r\n\r\n\t\t\t\t\tif (currentSlope === 0.0) {\r\n\t\t\t\t\t\treturn aGuessT;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar currentX = calcBezier(aGuessT, mX1, mX2) - aX;\r\n\t\t\t\t\taGuessT -= currentX / currentSlope;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn aGuessT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction calcSampleValues() {\r\n\t\t\t\tfor (var i = 0; i < kSplineTableSize; ++i) {\r\n\t\t\t\t\tmSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tfunction binarySubdivide(aX, aA, aB) {\r\n\t\t\t\tvar currentX, currentT, i = 0;\r\n\r\n\t\t\t\tdo {\r\n\t\t\t\t\tcurrentT = aA + (aB - aA) / 2.0;\r\n\t\t\t\t\tcurrentX = calcBezier(currentT, mX1, mX2) - aX;\r\n\t\t\t\t\tif (currentX > 0.0) {\r\n\t\t\t\t\t\taB = currentT;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\taA = currentT;\r\n\t\t\t\t\t}\r\n\t\t\t\t} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);\r\n\r\n\t\t\t\treturn currentT;\r\n\t\t\t}\r\n\r\n\t\t\tfunction getTForX(aX) {\r\n\t\t\t\tvar intervalStart = 0.0,\r\n\t\t\t\t\t\tcurrentSample = 1,\r\n\t\t\t\t\t\tlastSample = kSplineTableSize - 1;\r\n\r\n\t\t\t\tfor (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {\r\n\t\t\t\t\tintervalStart += kSampleStepSize;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t--currentSample;\r\n\r\n\t\t\t\tvar dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),\r\n\t\t\t\t\t\tguessForT = intervalStart + dist * kSampleStepSize,\r\n\t\t\t\t\t\tinitialSlope = getSlope(guessForT, mX1, mX2);\r\n\r\n\t\t\t\tif (initialSlope >= NEWTON_MIN_SLOPE) {\r\n\t\t\t\t\treturn newtonRaphsonIterate(aX, guessForT);\r\n\t\t\t\t} else if (initialSlope === 0.0) {\r\n\t\t\t\t\treturn guessForT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar _precomputed = false;\r\n\r\n\t\t\tfunction precompute() {\r\n\t\t\t\t_precomputed = true;\r\n\t\t\t\tif (mX1 !== mY1 || mX2 !== mY2) {\r\n\t\t\t\t\tcalcSampleValues();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar f = function(aX) {\r\n\t\t\t\tif (!_precomputed) {\r\n\t\t\t\t\tprecompute();\r\n\t\t\t\t}\r\n\t\t\t\tif (mX1 === mY1 && mX2 === mY2) {\r\n\t\t\t\t\treturn aX;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 0) {\r\n\t\t\t\t\treturn 0;\r\n\t\t\t\t}\r\n\t\t\t\tif (aX === 1) {\r\n\t\t\t\t\treturn 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn calcBezier(getTForX(aX), mY1, mY2);\r\n\t\t\t};\r\n\r\n\t\t\tf.getControlPoints = function() {\r\n\t\t\t\treturn [{x: mX1, y: mY1}, {x: mX2, y: mY2}];\r\n\t\t\t};\r\n\r\n\t\t\tvar str = \"generateBezier(\" + [mX1, mY1, mX2, mY2] + \")\";\r\n\t\t\tf.toString = function() {\r\n\t\t\t\treturn str;\r\n\t\t\t};\r\n\r\n\t\t\treturn f;\r\n\t\t}\r\n\r\n\t\t/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */\r\n\t\t/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass\r\n\t\t then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */\r\n\t\tvar generateSpringRK4 = (function() {\r\n\t\t\tfunction springAccelerationForState(state) {\r\n\t\t\t\treturn (-state.tension * state.x) - (state.friction * state.v);\r\n\t\t\t}\r\n\r\n\t\t\tfunction springEvaluateStateWithDerivative(initialState, dt, derivative) {\r\n\t\t\t\tvar state = {\r\n\t\t\t\t\tx: initialState.x + derivative.dx * dt,\r\n\t\t\t\t\tv: initialState.v + derivative.dv * dt,\r\n\t\t\t\t\ttension: initialState.tension,\r\n\t\t\t\t\tfriction: initialState.friction\r\n\t\t\t\t};\r\n\r\n\t\t\t\treturn {dx: state.v, dv: springAccelerationForState(state)};\r\n\t\t\t}\r\n\r\n\t\t\tfunction springIntegrateState(state, dt) {\r\n\t\t\t\tvar a = {\r\n\t\t\t\t\tdx: state.v,\r\n\t\t\t\t\tdv: springAccelerationForState(state)\r\n\t\t\t\t},\r\n\t\t\t\t\t\tb = springEvaluateStateWithDerivative(state, dt * 0.5, a),\r\n\t\t\t\t\t\tc = springEvaluateStateWithDerivative(state, dt * 0.5, b),\r\n\t\t\t\t\t\td = springEvaluateStateWithDerivative(state, dt, c),\r\n\t\t\t\t\t\tdxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),\r\n\t\t\t\t\t\tdvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);\r\n\r\n\t\t\t\tstate.x = state.x + dxdt * dt;\r\n\t\t\t\tstate.v = state.v + dvdt * dt;\r\n\r\n\t\t\t\treturn state;\r\n\t\t\t}\r\n\r\n\t\t\treturn function springRK4Factory(tension, friction, duration) {\r\n\r\n\t\t\t\tvar initState = {\r\n\t\t\t\t\tx: -1,\r\n\t\t\t\t\tv: 0,\r\n\t\t\t\t\ttension: null,\r\n\t\t\t\t\tfriction: null\r\n\t\t\t\t},\r\n\t\t\t\t\t\tpath = [0],\r\n\t\t\t\t\t\ttime_lapsed = 0,\r\n\t\t\t\t\t\ttolerance = 1 / 10000,\r\n\t\t\t\t\t\tDT = 16 / 1000,\r\n\t\t\t\t\t\thave_duration, dt, last_state;\r\n\r\n\t\t\t\ttension = parseFloat(tension) || 500;\r\n\t\t\t\tfriction = parseFloat(friction) || 20;\r\n\t\t\t\tduration = duration || null;\r\n\r\n\t\t\t\tinitState.tension = tension;\r\n\t\t\t\tinitState.friction = friction;\r\n\r\n\t\t\t\thave_duration = duration !== null;\r\n\r\n\t\t\t\t/* Calculate the actual time it takes for this animation to complete with the provided conditions. */\r\n\t\t\t\tif (have_duration) {\r\n\t\t\t\t\t/* Run the simulation without a duration. */\r\n\t\t\t\t\ttime_lapsed = springRK4Factory(tension, friction);\r\n\t\t\t\t\t/* Compute the adjusted time delta. */\r\n\t\t\t\t\tdt = time_lapsed / duration * DT;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdt = DT;\r\n\t\t\t\t}\r\n\r\n\t\t\t\twhile (true) {\r\n\t\t\t\t\t/* Next/step function .*/\r\n\t\t\t\t\tlast_state = springIntegrateState(last_state || initState, dt);\r\n\t\t\t\t\t/* Store the position. */\r\n\t\t\t\t\tpath.push(1 + last_state.x);\r\n\t\t\t\t\ttime_lapsed += 16;\r\n\t\t\t\t\t/* If the change threshold is reached, break. */\r\n\t\t\t\t\tif (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the\r\n\t\t\t\t computed path and returns a snapshot of the position according to a given percentComplete. */\r\n\t\t\t\treturn !have_duration ? time_lapsed : function(percentComplete) {\r\n\t\t\t\t\treturn path[ (percentComplete * (path.length - 1)) | 0 ];\r\n\t\t\t\t};\r\n\t\t\t};\r\n\t\t}());\r\n\r\n\t\t/* jQuery easings. */\r\n\t\tVelocity.Easings = {\r\n\t\t\tlinear: function(p) {\r\n\t\t\t\treturn p;\r\n\t\t\t},\r\n\t\t\tswing: function(p) {\r\n\t\t\t\treturn 0.5 - Math.cos(p * Math.PI) / 2;\r\n\t\t\t},\r\n\t\t\t/* Bonus \"spring\" easing, which is a less exaggerated version of easeInOutElastic. */\r\n\t\t\tspring: function(p) {\r\n\t\t\t\treturn 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* CSS3 and Robert Penner easings. */\r\n\t\t$.each(\r\n\t\t\t\t[\r\n\t\t\t\t\t[\"ease\", [0.25, 0.1, 0.25, 1.0]],\r\n\t\t\t\t\t[\"ease-in\", [0.42, 0.0, 1.00, 1.0]],\r\n\t\t\t\t\t[\"ease-out\", [0.00, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t[\"ease-in-out\", [0.42, 0.0, 0.58, 1.0]],\r\n\t\t\t\t\t[\"easeInSine\", [0.47, 0, 0.745, 0.715]],\r\n\t\t\t\t\t[\"easeOutSine\", [0.39, 0.575, 0.565, 1]],\r\n\t\t\t\t\t[\"easeInOutSine\", [0.445, 0.05, 0.55, 0.95]],\r\n\t\t\t\t\t[\"easeInQuad\", [0.55, 0.085, 0.68, 0.53]],\r\n\t\t\t\t\t[\"easeOutQuad\", [0.25, 0.46, 0.45, 0.94]],\r\n\t\t\t\t\t[\"easeInOutQuad\", [0.455, 0.03, 0.515, 0.955]],\r\n\t\t\t\t\t[\"easeInCubic\", [0.55, 0.055, 0.675, 0.19]],\r\n\t\t\t\t\t[\"easeOutCubic\", [0.215, 0.61, 0.355, 1]],\r\n\t\t\t\t\t[\"easeInOutCubic\", [0.645, 0.045, 0.355, 1]],\r\n\t\t\t\t\t[\"easeInQuart\", [0.895, 0.03, 0.685, 0.22]],\r\n\t\t\t\t\t[\"easeOutQuart\", [0.165, 0.84, 0.44, 1]],\r\n\t\t\t\t\t[\"easeInOutQuart\", [0.77, 0, 0.175, 1]],\r\n\t\t\t\t\t[\"easeInQuint\", [0.755, 0.05, 0.855, 0.06]],\r\n\t\t\t\t\t[\"easeOutQuint\", [0.23, 1, 0.32, 1]],\r\n\t\t\t\t\t[\"easeInOutQuint\", [0.86, 0, 0.07, 1]],\r\n\t\t\t\t\t[\"easeInExpo\", [0.95, 0.05, 0.795, 0.035]],\r\n\t\t\t\t\t[\"easeOutExpo\", [0.19, 1, 0.22, 1]],\r\n\t\t\t\t\t[\"easeInOutExpo\", [1, 0, 0, 1]],\r\n\t\t\t\t\t[\"easeInCirc\", [0.6, 0.04, 0.98, 0.335]],\r\n\t\t\t\t\t[\"easeOutCirc\", [0.075, 0.82, 0.165, 1]],\r\n\t\t\t\t\t[\"easeInOutCirc\", [0.785, 0.135, 0.15, 0.86]]\r\n\t\t\t\t], function(i, easingArray) {\r\n\t\t\tVelocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);\r\n\t\t});\r\n\r\n\t\t/* Determine the appropriate easing type given an easing input. */\r\n\t\tfunction getEasing(value, duration) {\r\n\t\t\tvar easing = value;\r\n\r\n\t\t\t/* The easing option can either be a string that references a pre-registered easing,\r\n\t\t\t or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */\r\n\t\t\tif (Type.isString(value)) {\r\n\t\t\t\t/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */\r\n\t\t\t\tif (!Velocity.Easings[value]) {\r\n\t\t\t\t\teasing = false;\r\n\t\t\t\t}\r\n\t\t\t} else if (Type.isArray(value) && value.length === 1) {\r\n\t\t\t\teasing = generateStep.apply(null, value);\r\n\t\t\t} else if (Type.isArray(value) && value.length === 2) {\r\n\t\t\t\t/* springRK4 must be passed the animation's duration. */\r\n\t\t\t\t/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing\r\n\t\t\t\t function generated with default tension and friction values. */\r\n\t\t\t\teasing = generateSpringRK4.apply(null, value.concat([duration]));\r\n\t\t\t} else if (Type.isArray(value) && value.length === 4) {\r\n\t\t\t\t/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */\r\n\t\t\t\teasing = generateBezier.apply(null, value);\r\n\t\t\t} else {\r\n\t\t\t\teasing = false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Revert to the Velocity-wide default easing type, or fall back to \"swing\" (which is also jQuery's default)\r\n\t\t\t if the Velocity-wide default has been incorrectly modified. */\r\n\t\t\tif (easing === false) {\r\n\t\t\t\tif (Velocity.Easings[Velocity.defaults.easing]) {\r\n\t\t\t\t\teasing = Velocity.defaults.easing;\r\n\t\t\t\t} else {\r\n\t\t\t\t\teasing = EASING_DEFAULT;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn easing;\r\n\t\t}\r\n\r\n\t\t/*****************\r\n\t\t CSS Stack\r\n\t\t *****************/\r\n\r\n\t\t/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.\r\n\t\t It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */\r\n\t\t/* Note: A \"CSS\" shorthand is aliased so that our code is easier to read. */\r\n\t\tvar CSS = Velocity.CSS = {\r\n\t\t\t/*************\r\n\t\t\t RegEx\r\n\t\t\t *************/\r\n\r\n\t\t\tRegEx: {\r\n\t\t\t\tisHex: /^#([A-f\\d]{3}){1,2}$/i,\r\n\t\t\t\t/* Unwrap a property value's surrounding text, e.g. \"rgba(4, 3, 2, 1)\" ==> \"4, 3, 2, 1\" and \"rect(4px 3px 2px 1px)\" ==> \"4px 3px 2px 1px\". */\r\n\t\t\t\tvalueUnwrap: /^[A-z]+\\((.*)\\)$/i,\r\n\t\t\t\twrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,\r\n\t\t\t\t/* Split a multi-value property into an array of subvalues, e.g. \"rgba(4, 3, 2, 1) 4px 3px 2px 1px\" ==> [ \"rgba(4, 3, 2, 1)\", \"4px\", \"3px\", \"2px\", \"1px\" ]. */\r\n\t\t\t\tvalueSplit: /([A-z]+\\(.+\\))|(([A-z0-9#-.]+?)(?=\\s|$))/ig\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Lists\r\n\t\t\t ************/\r\n\r\n\t\t\tLists: {\r\n\t\t\t\tcolors: [\"fill\", \"stroke\", \"stopColor\", \"color\", \"backgroundColor\", \"borderColor\", \"borderTopColor\", \"borderRightColor\", \"borderBottomColor\", \"borderLeftColor\", \"outlineColor\"],\r\n\t\t\t\ttransformsBase: [\"translateX\", \"translateY\", \"scale\", \"scaleX\", \"scaleY\", \"skewX\", \"skewY\", \"rotateZ\"],\r\n\t\t\t\ttransforms3D: [\"transformPerspective\", \"translateZ\", \"scaleZ\", \"rotateX\", \"rotateY\"],\r\n\t\t\t\tunits: [\r\n\t\t\t\t\t\"%\", // relative\r\n\t\t\t\t\t\"em\", \"ex\", \"ch\", \"rem\", // font relative\r\n\t\t\t\t\t\"vw\", \"vh\", \"vmin\", \"vmax\", // viewport relative\r\n\t\t\t\t\t\"cm\", \"mm\", \"Q\", \"in\", \"pc\", \"pt\", \"px\", // absolute lengths\r\n\t\t\t\t\t\"deg\", \"grad\", \"rad\", \"turn\", // angles\r\n\t\t\t\t\t\"s\", \"ms\" // time\r\n\t\t\t\t],\r\n\t\t\t\tcolorNames: {\r\n\t\t\t\t\t\"aliceblue\": \"240,248,255\",\r\n\t\t\t\t\t\"antiquewhite\": \"250,235,215\",\r\n\t\t\t\t\t\"aquamarine\": \"127,255,212\",\r\n\t\t\t\t\t\"aqua\": \"0,255,255\",\r\n\t\t\t\t\t\"azure\": \"240,255,255\",\r\n\t\t\t\t\t\"beige\": \"245,245,220\",\r\n\t\t\t\t\t\"bisque\": \"255,228,196\",\r\n\t\t\t\t\t\"black\": \"0,0,0\",\r\n\t\t\t\t\t\"blanchedalmond\": \"255,235,205\",\r\n\t\t\t\t\t\"blueviolet\": \"138,43,226\",\r\n\t\t\t\t\t\"blue\": \"0,0,255\",\r\n\t\t\t\t\t\"brown\": \"165,42,42\",\r\n\t\t\t\t\t\"burlywood\": \"222,184,135\",\r\n\t\t\t\t\t\"cadetblue\": \"95,158,160\",\r\n\t\t\t\t\t\"chartreuse\": \"127,255,0\",\r\n\t\t\t\t\t\"chocolate\": \"210,105,30\",\r\n\t\t\t\t\t\"coral\": \"255,127,80\",\r\n\t\t\t\t\t\"cornflowerblue\": \"100,149,237\",\r\n\t\t\t\t\t\"cornsilk\": \"255,248,220\",\r\n\t\t\t\t\t\"crimson\": \"220,20,60\",\r\n\t\t\t\t\t\"cyan\": \"0,255,255\",\r\n\t\t\t\t\t\"darkblue\": \"0,0,139\",\r\n\t\t\t\t\t\"darkcyan\": \"0,139,139\",\r\n\t\t\t\t\t\"darkgoldenrod\": \"184,134,11\",\r\n\t\t\t\t\t\"darkgray\": \"169,169,169\",\r\n\t\t\t\t\t\"darkgrey\": \"169,169,169\",\r\n\t\t\t\t\t\"darkgreen\": \"0,100,0\",\r\n\t\t\t\t\t\"darkkhaki\": \"189,183,107\",\r\n\t\t\t\t\t\"darkmagenta\": \"139,0,139\",\r\n\t\t\t\t\t\"darkolivegreen\": \"85,107,47\",\r\n\t\t\t\t\t\"darkorange\": \"255,140,0\",\r\n\t\t\t\t\t\"darkorchid\": \"153,50,204\",\r\n\t\t\t\t\t\"darkred\": \"139,0,0\",\r\n\t\t\t\t\t\"darksalmon\": \"233,150,122\",\r\n\t\t\t\t\t\"darkseagreen\": \"143,188,143\",\r\n\t\t\t\t\t\"darkslateblue\": \"72,61,139\",\r\n\t\t\t\t\t\"darkslategray\": \"47,79,79\",\r\n\t\t\t\t\t\"darkturquoise\": \"0,206,209\",\r\n\t\t\t\t\t\"darkviolet\": \"148,0,211\",\r\n\t\t\t\t\t\"deeppink\": \"255,20,147\",\r\n\t\t\t\t\t\"deepskyblue\": \"0,191,255\",\r\n\t\t\t\t\t\"dimgray\": \"105,105,105\",\r\n\t\t\t\t\t\"dimgrey\": \"105,105,105\",\r\n\t\t\t\t\t\"dodgerblue\": \"30,144,255\",\r\n\t\t\t\t\t\"firebrick\": \"178,34,34\",\r\n\t\t\t\t\t\"floralwhite\": \"255,250,240\",\r\n\t\t\t\t\t\"forestgreen\": \"34,139,34\",\r\n\t\t\t\t\t\"fuchsia\": \"255,0,255\",\r\n\t\t\t\t\t\"gainsboro\": \"220,220,220\",\r\n\t\t\t\t\t\"ghostwhite\": \"248,248,255\",\r\n\t\t\t\t\t\"gold\": \"255,215,0\",\r\n\t\t\t\t\t\"goldenrod\": \"218,165,32\",\r\n\t\t\t\t\t\"gray\": \"128,128,128\",\r\n\t\t\t\t\t\"grey\": \"128,128,128\",\r\n\t\t\t\t\t\"greenyellow\": \"173,255,47\",\r\n\t\t\t\t\t\"green\": \"0,128,0\",\r\n\t\t\t\t\t\"honeydew\": \"240,255,240\",\r\n\t\t\t\t\t\"hotpink\": \"255,105,180\",\r\n\t\t\t\t\t\"indianred\": \"205,92,92\",\r\n\t\t\t\t\t\"indigo\": \"75,0,130\",\r\n\t\t\t\t\t\"ivory\": \"255,255,240\",\r\n\t\t\t\t\t\"khaki\": \"240,230,140\",\r\n\t\t\t\t\t\"lavenderblush\": \"255,240,245\",\r\n\t\t\t\t\t\"lavender\": \"230,230,250\",\r\n\t\t\t\t\t\"lawngreen\": \"124,252,0\",\r\n\t\t\t\t\t\"lemonchiffon\": \"255,250,205\",\r\n\t\t\t\t\t\"lightblue\": \"173,216,230\",\r\n\t\t\t\t\t\"lightcoral\": \"240,128,128\",\r\n\t\t\t\t\t\"lightcyan\": \"224,255,255\",\r\n\t\t\t\t\t\"lightgoldenrodyellow\": \"250,250,210\",\r\n\t\t\t\t\t\"lightgray\": \"211,211,211\",\r\n\t\t\t\t\t\"lightgrey\": \"211,211,211\",\r\n\t\t\t\t\t\"lightgreen\": \"144,238,144\",\r\n\t\t\t\t\t\"lightpink\": \"255,182,193\",\r\n\t\t\t\t\t\"lightsalmon\": \"255,160,122\",\r\n\t\t\t\t\t\"lightseagreen\": \"32,178,170\",\r\n\t\t\t\t\t\"lightskyblue\": \"135,206,250\",\r\n\t\t\t\t\t\"lightslategray\": \"119,136,153\",\r\n\t\t\t\t\t\"lightsteelblue\": \"176,196,222\",\r\n\t\t\t\t\t\"lightyellow\": \"255,255,224\",\r\n\t\t\t\t\t\"limegreen\": \"50,205,50\",\r\n\t\t\t\t\t\"lime\": \"0,255,0\",\r\n\t\t\t\t\t\"linen\": \"250,240,230\",\r\n\t\t\t\t\t\"magenta\": \"255,0,255\",\r\n\t\t\t\t\t\"maroon\": \"128,0,0\",\r\n\t\t\t\t\t\"mediumaquamarine\": \"102,205,170\",\r\n\t\t\t\t\t\"mediumblue\": \"0,0,205\",\r\n\t\t\t\t\t\"mediumorchid\": \"186,85,211\",\r\n\t\t\t\t\t\"mediumpurple\": \"147,112,219\",\r\n\t\t\t\t\t\"mediumseagreen\": \"60,179,113\",\r\n\t\t\t\t\t\"mediumslateblue\": \"123,104,238\",\r\n\t\t\t\t\t\"mediumspringgreen\": \"0,250,154\",\r\n\t\t\t\t\t\"mediumturquoise\": \"72,209,204\",\r\n\t\t\t\t\t\"mediumvioletred\": \"199,21,133\",\r\n\t\t\t\t\t\"midnightblue\": \"25,25,112\",\r\n\t\t\t\t\t\"mintcream\": \"245,255,250\",\r\n\t\t\t\t\t\"mistyrose\": \"255,228,225\",\r\n\t\t\t\t\t\"moccasin\": \"255,228,181\",\r\n\t\t\t\t\t\"navajowhite\": \"255,222,173\",\r\n\t\t\t\t\t\"navy\": \"0,0,128\",\r\n\t\t\t\t\t\"oldlace\": \"253,245,230\",\r\n\t\t\t\t\t\"olivedrab\": \"107,142,35\",\r\n\t\t\t\t\t\"olive\": \"128,128,0\",\r\n\t\t\t\t\t\"orangered\": \"255,69,0\",\r\n\t\t\t\t\t\"orange\": \"255,165,0\",\r\n\t\t\t\t\t\"orchid\": \"218,112,214\",\r\n\t\t\t\t\t\"palegoldenrod\": \"238,232,170\",\r\n\t\t\t\t\t\"palegreen\": \"152,251,152\",\r\n\t\t\t\t\t\"paleturquoise\": \"175,238,238\",\r\n\t\t\t\t\t\"palevioletred\": \"219,112,147\",\r\n\t\t\t\t\t\"papayawhip\": \"255,239,213\",\r\n\t\t\t\t\t\"peachpuff\": \"255,218,185\",\r\n\t\t\t\t\t\"peru\": \"205,133,63\",\r\n\t\t\t\t\t\"pink\": \"255,192,203\",\r\n\t\t\t\t\t\"plum\": \"221,160,221\",\r\n\t\t\t\t\t\"powderblue\": \"176,224,230\",\r\n\t\t\t\t\t\"purple\": \"128,0,128\",\r\n\t\t\t\t\t\"red\": \"255,0,0\",\r\n\t\t\t\t\t\"rosybrown\": \"188,143,143\",\r\n\t\t\t\t\t\"royalblue\": \"65,105,225\",\r\n\t\t\t\t\t\"saddlebrown\": \"139,69,19\",\r\n\t\t\t\t\t\"salmon\": \"250,128,114\",\r\n\t\t\t\t\t\"sandybrown\": \"244,164,96\",\r\n\t\t\t\t\t\"seagreen\": \"46,139,87\",\r\n\t\t\t\t\t\"seashell\": \"255,245,238\",\r\n\t\t\t\t\t\"sienna\": \"160,82,45\",\r\n\t\t\t\t\t\"silver\": \"192,192,192\",\r\n\t\t\t\t\t\"skyblue\": \"135,206,235\",\r\n\t\t\t\t\t\"slateblue\": \"106,90,205\",\r\n\t\t\t\t\t\"slategray\": \"112,128,144\",\r\n\t\t\t\t\t\"snow\": \"255,250,250\",\r\n\t\t\t\t\t\"springgreen\": \"0,255,127\",\r\n\t\t\t\t\t\"steelblue\": \"70,130,180\",\r\n\t\t\t\t\t\"tan\": \"210,180,140\",\r\n\t\t\t\t\t\"teal\": \"0,128,128\",\r\n\t\t\t\t\t\"thistle\": \"216,191,216\",\r\n\t\t\t\t\t\"tomato\": \"255,99,71\",\r\n\t\t\t\t\t\"turquoise\": \"64,224,208\",\r\n\t\t\t\t\t\"violet\": \"238,130,238\",\r\n\t\t\t\t\t\"wheat\": \"245,222,179\",\r\n\t\t\t\t\t\"whitesmoke\": \"245,245,245\",\r\n\t\t\t\t\t\"white\": \"255,255,255\",\r\n\t\t\t\t\t\"yellowgreen\": \"154,205,50\",\r\n\t\t\t\t\t\"yellow\": \"255,255,0\"\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************\r\n\t\t\t Hooks\r\n\t\t\t ************/\r\n\r\n\t\t\t/* Hooks allow a subproperty (e.g. \"boxShadowBlur\") of a compound-value CSS property\r\n\t\t\t (e.g. \"boxShadow: X Y Blur Spread Color\") to be animated as if it were a discrete property. */\r\n\t\t\t/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only\r\n\t\t\t tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */\r\n\t\t\tHooks: {\r\n\t\t\t\t/********************\r\n\t\t\t\t Registration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\t/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */\r\n\t\t\t\t/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */\r\n\t\t\t\ttemplates: {\r\n\t\t\t\t\t\"textShadow\": [\"Color X Y Blur\", \"black 0px 0px 0px\"],\r\n\t\t\t\t\t\"boxShadow\": [\"Color X Y Blur Spread\", \"black 0px 0px 0px 0px\"],\r\n\t\t\t\t\t\"clip\": [\"Top Right Bottom Left\", \"0px 0px 0px 0px\"],\r\n\t\t\t\t\t\"backgroundPosition\": [\"X Y\", \"0% 0%\"],\r\n\t\t\t\t\t\"transformOrigin\": [\"X Y Z\", \"50% 50% 0px\"],\r\n\t\t\t\t\t\"perspectiveOrigin\": [\"X Y\", \"50% 50%\"]\r\n\t\t\t\t},\r\n\t\t\t\t/* A \"registered\" hook is one that has been converted from its template form into a live,\r\n\t\t\t\t tweenable property. It contains data to associate it with its root property. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\t/* Note: A registered hook looks like this ==> textShadowBlur: [ \"textShadow\", 3 ],\r\n\t\t\t\t\t which consists of the subproperty's name, the associated root property's name,\r\n\t\t\t\t\t and the subproperty's position in the root's value. */\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert the templates into individual hooks then append them to the registered object above. */\r\n\t\t\t\tregister: function() {\r\n\t\t\t\t\t/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are\r\n\t\t\t\t\t currently set to \"transparent\" default to their respective template below when color-animated,\r\n\t\t\t\t\t and white is typically a closer match to transparent than black is. An exception is made for text (\"color\"),\r\n\t\t\t\t\t which is almost always set closer to black than white. */\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.colors.length; i++) {\r\n\t\t\t\t\t\tvar rgbComponents = (CSS.Lists.colors[i] === \"color\") ? \"0 0 0 1\" : \"255 255 255 1\";\r\n\t\t\t\t\t\tCSS.Hooks.templates[CSS.Lists.colors[i]] = [\"Red Green Blue Alpha\", rgbComponents];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar rootProperty,\r\n\t\t\t\t\t\t\thookTemplate,\r\n\t\t\t\t\t\t\thookNames;\r\n\r\n\t\t\t\t\t/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.\r\n\t\t\t\t\t Thus, we re-arrange the templates accordingly. */\r\n\t\t\t\t\tif (IE) {\r\n\t\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\r\n\r\n\t\t\t\t\t\t\tvar defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);\r\n\r\n\t\t\t\t\t\t\tif (hookNames[0] === \"Color\") {\r\n\t\t\t\t\t\t\t\t/* Reposition both the hook's name and its default value to the end of their respective strings. */\r\n\t\t\t\t\t\t\t\thookNames.push(hookNames.shift());\r\n\t\t\t\t\t\t\t\tdefaultValues.push(defaultValues.shift());\r\n\r\n\t\t\t\t\t\t\t\t/* Replace the existing template for the hook's root property. */\r\n\t\t\t\t\t\t\t\tCSS.Hooks.templates[rootProperty] = [hookNames.join(\" \"), defaultValues.join(\" \")];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Hook registration. */\r\n\t\t\t\t\tfor (rootProperty in CSS.Hooks.templates) {\r\n\t\t\t\t\t\tif (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\thookTemplate = CSS.Hooks.templates[rootProperty];\r\n\t\t\t\t\t\thookNames = hookTemplate[0].split(\" \");\r\n\r\n\t\t\t\t\t\tfor (var j in hookNames) {\r\n\t\t\t\t\t\t\tif (!hookNames.hasOwnProperty(j)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tvar fullHookName = rootProperty + hookNames[j],\r\n\t\t\t\t\t\t\t\t\thookPosition = j;\r\n\r\n\t\t\t\t\t\t\t/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)\r\n\t\t\t\t\t\t\t and the hook's position in its template's default value string. */\r\n\t\t\t\t\t\t\tCSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Injection and Extraction\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Look up the root property associated with the hook (e.g. return \"textShadow\" for \"textShadowBlur\"). */\r\n\t\t\t\t/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */\r\n\t\t\t\tgetRoot: function(property) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[property];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\treturn hookData[0];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If there was no hook match, return the property name untouched. */\r\n\t\t\t\t\t\treturn property;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tgetUnit: function(str, start) {\r\n\t\t\t\t\tvar unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || \"\";\r\n\r\n\t\t\t\t\tif (unit && _inArray(CSS.Lists.units, unit)) {\r\n\t\t\t\t\t\treturn unit;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn \"\";\r\n\t\t\t\t},\r\n\t\t\t\tfixColors: function(str) {\r\n\t\t\t\t\treturn str.replace(/(rgba?\\(\\s*)?(\\b[a-z]+\\b)/g, function($0, $1, $2) {\r\n\t\t\t\t\t\tif (CSS.Lists.colorNames.hasOwnProperty($2)) {\r\n\t\t\t\t\t\t\treturn ($1 ? $1 : \"rgba(\") + CSS.Lists.colorNames[$2] + ($1 ? \"\" : \",1)\");\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn $1 + $2;\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that\r\n\t\t\t\t the targeted hook can be injected or extracted at its standard position. */\r\n\t\t\t\tcleanRootPropertyValue: function(rootProperty, rootPropertyValue) {\r\n\t\t\t\t\t/* If the rootPropertyValue is wrapped with \"rgb()\", \"clip()\", etc., remove the wrapping to normalize the value before manipulation. */\r\n\t\t\t\t\tif (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),\r\n\t\t\t\t\t default to the root's default value as defined in CSS.Hooks.templates. */\r\n\t\t\t\t\t/* Note: CSS null-values include \"none\", \"auto\", and \"transparent\". They must be converted into their\r\n\t\t\t\t\t zero-values (e.g. textShadow: \"none\" ==> textShadow: \"0px 0px 0px black\") for hook manipulation to proceed. */\r\n\t\t\t\t\tif (CSS.Values.isCSSNullValue(rootPropertyValue)) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t},\r\n\t\t\t\t/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */\r\n\t\t\t\textractValue: function(fullHookName, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1];\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */\r\n\t\t\t\t\t\treturn rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* Inject the hook's value into its root property's value. This is used to piece back together the root property\r\n\t\t\t\t once Velocity has updated one of its individually hooked values through tweening. */\r\n\t\t\t\tinjectValue: function(fullHookName, hookValue, rootPropertyValue) {\r\n\t\t\t\t\tvar hookData = CSS.Hooks.registered[fullHookName];\r\n\r\n\t\t\t\t\tif (hookData) {\r\n\t\t\t\t\t\tvar hookRoot = hookData[0],\r\n\t\t\t\t\t\t\t\thookPosition = hookData[1],\r\n\t\t\t\t\t\t\t\trootPropertyValueParts,\r\n\t\t\t\t\t\t\t\trootPropertyValueUpdated;\r\n\r\n\t\t\t\t\t\trootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);\r\n\r\n\t\t\t\t\t\t/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,\r\n\t\t\t\t\t\t then reconstruct the rootPropertyValue string. */\r\n\t\t\t\t\t\trootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);\r\n\t\t\t\t\t\trootPropertyValueParts[hookPosition] = hookValue;\r\n\t\t\t\t\t\trootPropertyValueUpdated = rootPropertyValueParts.join(\" \");\r\n\r\n\t\t\t\t\t\treturn rootPropertyValueUpdated;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */\r\n\t\t\t\t\t\treturn rootPropertyValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/*******************\r\n\t\t\t Normalizations\r\n\t\t\t *******************/\r\n\r\n\t\t\t/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)\r\n\t\t\t and reformatting special properties (e.g. clip, rgba) to look like standard ones. */\r\n\t\t\tNormalizations: {\r\n\t\t\t\t/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),\r\n\t\t\t\t the targeted element (which may need to be queried), and the targeted property value. */\r\n\t\t\t\tregistered: {\r\n\t\t\t\t\tclip: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\treturn \"clip\";\r\n\t\t\t\t\t\t\t\t/* Clip needs to be unwrapped and stripped of its commas during extraction. */\r\n\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t/* If Velocity also extracted this value, skip extraction. */\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Remove the \"rect()\" wrapper. */\r\n\t\t\t\t\t\t\t\t\textracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip off commas. */\r\n\t\t\t\t\t\t\t\t\textracted = extracted ? extracted[1].replace(/,(\\s+)?/g, \" \") : propertyValue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Clip needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\treturn \"rect(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\tblur: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\treturn Velocity.State.isFirefox ? \"filter\" : \"-webkit-filter\";\r\n\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\tvar extracted = parseFloat(propertyValue);\r\n\r\n\t\t\t\t\t\t\t\t/* If extracted is NaN, meaning the value isn't already extracted. */\r\n\t\t\t\t\t\t\t\tif (!(extracted || extracted === 0)) {\r\n\t\t\t\t\t\t\t\t\tvar blurComponent = propertyValue.toString().match(/blur\\(([0-9]+[A-z]+)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\t/* If the filter string had a blur component, return just the blur value and unit type. */\r\n\t\t\t\t\t\t\t\t\tif (blurComponent) {\r\n\t\t\t\t\t\t\t\t\t\textracted = blurComponent[1];\r\n\t\t\t\t\t\t\t\t\t\t/* If the component doesn't exist, default blur to 0. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\textracted = 0;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t/* Blur needs to be re-wrapped during injection. */\r\n\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t/* For the blur effect to be fully de-applied, it needs to be set to \"none\" instead of 0. */\r\n\t\t\t\t\t\t\t\tif (!parseFloat(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\treturn \"none\";\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\treturn \"blur(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */\r\n\t\t\t\t\topacity: function(type, element, propertyValue) {\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn \"filter\";\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t/* <=IE8 return a \"filter\" value of \"alpha(opacity=\\d{1,3})\".\r\n\t\t\t\t\t\t\t\t\t Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */\r\n\t\t\t\t\t\t\t\t\tvar extracted = propertyValue.toString().match(/alpha\\(opacity=(.*)\\)/i);\r\n\r\n\t\t\t\t\t\t\t\t\tif (extracted) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert to decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = extracted[1] / 100;\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */\r\n\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t/* Opacified elements are required to have their zoom property set to a non-zero value. */\r\n\t\t\t\t\t\t\t\t\telement.style.zoom = 1;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Setting the filter property on elements with certain font property combinations can result in a\r\n\t\t\t\t\t\t\t\t\t highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the\r\n\t\t\t\t\t\t\t\t\t value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */\r\n\t\t\t\t\t\t\t\t\tif (parseFloat(propertyValue) >= 1) {\r\n\t\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */\r\n\t\t\t\t\t\t\t\t\t\treturn \"alpha(opacity=\" + parseInt(parseFloat(propertyValue) * 100, 10) + \")\";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* With all other browsers, normalization is not required; return the same values that were passed in. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn \"opacity\";\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/*****************************\r\n\t\t\t\t Batched Registrations\r\n\t\t\t\t *****************************/\r\n\r\n\t\t\t\t/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */\r\n\t\t\t\tregister: function() {\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Transforms\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Transforms are the subproperties contained by the CSS \"transform\" property. Transforms must undergo normalization\r\n\t\t\t\t\t so that they can be referenced in a properties map by their individual names. */\r\n\t\t\t\t\t/* Note: When transforms are \"set\", they are actually assigned to a per-element transformCache. When all transform\r\n\t\t\t\t\t setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.\r\n\t\t\t\t\t Transform setting is batched in this way to improve performance: the transform style only needs to be updated\r\n\t\t\t\t\t once when multiple transform subproperties are being animated simultaneously. */\r\n\t\t\t\t\t/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported\r\n\t\t\t\t\t transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values\r\n\t\t\t\t\t from being normalized for these browsers so that tweening skips these properties altogether\r\n\t\t\t\t\t (since it will ignore them as being unsupported by the browser.) */\r\n\t\t\t\t\tif ((!IE || IE > 9) && !Velocity.State.isGingerbread) {\r\n\t\t\t\t\t\t/* Note: Since the standalone CSS \"perspective\" property and the CSS transform \"perspective\" subproperty\r\n\t\t\t\t\t\t share the same name, the latter is given a unique token within Velocity: \"transformPerspective\". */\r\n\t\t\t\t\t\tCSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tfor (var i = 0; i < CSS.Lists.transformsBase.length; i++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is\r\n\t\t\t\t\t\t paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar transformName = CSS.Lists.transformsBase[i];\r\n\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\t/* The normalized property name is the parent \"transform\" property -- the property that is actually set in CSS. */\r\n\t\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\t\treturn \"transform\";\r\n\t\t\t\t\t\t\t\t\t\t/* Transform values are cached onto a per-element transformCache object. */\r\n\t\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t\t/* If this transform has yet to be assigned a value, return its null value. */\r\n\t\t\t\t\t\t\t\t\t\tif (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn /^scale/i.test(transformName) ? 1 : 0;\r\n\t\t\t\t\t\t\t\t\t\t\t/* When transform values are set, they are wrapped in parentheses as per the CSS spec.\r\n\t\t\t\t\t\t\t\t\t\t\t Thus, when extracting their values (for tween calculations), we strip off the parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName].replace(/[()]/g, \"\");\r\n\t\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t\tvar invalid = false;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.\r\n\t\t\t\t\t\t\t\t\t\t Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */\r\n\t\t\t\t\t\t\t\t\t\t/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */\r\n\t\t\t\t\t\t\t\t\t\tswitch (transformName.substr(0, transformName.length - 1)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Whitelist unit types for each transform. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"translate\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(%|px|em|rem|vw|vh|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Since an axis-free \"scale\" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"scal\":\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"scale\":\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Chrome on Android has a bug in which scaled elements blur if their initial scale\r\n\t\t\t\t\t\t\t\t\t\t\t\t value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property\r\n\t\t\t\t\t\t\t\t\t\t\t\t and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"skew\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\tcase \"rotate\":\r\n\t\t\t\t\t\t\t\t\t\t\t\tinvalid = !/(deg|\\d)$/i.test(propertyValue);\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (!invalid) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* As per the CSS spec, wrap the value in parentheses. */\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).transformCache[transformName] = \"(\" + propertyValue + \")\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */\r\n\t\t\t\t\t\t\t\t\t\treturn Data(element).transformCache[transformName];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*************\r\n\t\t\t\t\t Colors\r\n\t\t\t\t\t *************/\r\n\r\n\t\t\t\t\t/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.\r\n\t\t\t\t\t Accordingly, color values must be normalized (e.g. \"#ff0000\", \"red\", and \"rgb(255, 0, 0)\" ==> \"255 0 0 1\") so that their components can be injected/extracted by CSS.Hooks logic. */\r\n\t\t\t\t\tfor (var j = 0; j < CSS.Lists.colors.length; j++) {\r\n\t\t\t\t\t\t/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.\r\n\t\t\t\t\t\t (Otherwise, all functions would take the final for loop's colorName.) */\r\n\t\t\t\t\t\t(function() {\r\n\t\t\t\t\t\t\tvar colorName = CSS.Lists.colors[j];\r\n\r\n\t\t\t\t\t\t\t/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */\r\n\t\t\t\t\t\t\tCSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\t\treturn colorName;\r\n\t\t\t\t\t\t\t\t\t\t/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */\r\n\t\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\t\tvar extracted;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If the color is already in its hookable form (e.g. \"255 255 255 1\") due to having been previously extracted, skip extraction. */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted = propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tvar converted,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolorNames = {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblack: \"rgb(0, 0, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tblue: \"rgb(0, 0, 255)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgray: \"rgb(128, 128, 128)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgreen: \"rgb(0, 128, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tred: \"rgb(255, 0, 0)\",\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\twhite: \"rgb(255, 255, 255)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Convert color names to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\tif (/^[A-z]+$/i.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (colorNames[propertyValue] !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames[propertyValue];\r\n\t\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* If an unmatched color name is provided, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* Convert hex values to rgb. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (CSS.RegEx.isHex.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = \"rgb(\" + CSS.Values.hexToRgb(propertyValue).join(\" \") + \")\";\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* If the provided color doesn't match any of the accepted color formats, default to black. */\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!(/^rgba?\\(/i.test(propertyValue))) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tconverted = colorNames.black;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Remove the surrounding \"rgb/rgba()\" string then replace commas with spaces and strip\r\n\t\t\t\t\t\t\t\t\t\t\t repeated spaces (in case the value included spaces to begin with). */\r\n\t\t\t\t\t\t\t\t\t\t\textracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\\s+)?/g, \" \");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\tif ((!IE || IE > 8) && extracted.split(\" \").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\textracted += \" 1\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\treturn extracted;\r\n\t\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\t\t/* If we have a pattern then it might already have the right values */\r\n\t\t\t\t\t\t\t\t\t\tif (/^rgb/.test(propertyValue)) {\r\n\t\t\t\t\t\t\t\t\t\t\treturn propertyValue;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* If this is IE<=8 and an alpha component exists, strip it off. */\r\n\t\t\t\t\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (propertyValue.split(\" \").length === 4) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tpropertyValue = propertyValue.split(/\\s+/).slice(0, 3).join(\" \");\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertyValue.split(\" \").length === 3) {\r\n\t\t\t\t\t\t\t\t\t\t\tpropertyValue += \" 1\";\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Re-insert the browser-appropriate wrapper(\"rgb/rgba()\"), insert commas, and strip off decimal units\r\n\t\t\t\t\t\t\t\t\t\t on all values but the fourth (R, G, and B only accept whole numbers). */\r\n\t\t\t\t\t\t\t\t\t\treturn (IE <= 8 ? \"rgb\" : \"rgba\") + \"(\" + propertyValue.replace(/\\s+/g, \",\").replace(/\\.(\\d)+(?=,)/g, \"\") + \")\";\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**************\r\n\t\t\t\t\t Dimensions\r\n\t\t\t\t\t **************/\r\n\t\t\t\t\tfunction augmentDimension(name, element, wantInner) {\r\n\t\t\t\t\t\tvar isBorderBox = CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() === \"border-box\";\r\n\r\n\t\t\t\t\t\tif (isBorderBox === (wantInner || false)) {\r\n\t\t\t\t\t\t\t/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */\r\n\t\t\t\t\t\t\tvar i,\r\n\t\t\t\t\t\t\t\t\tvalue,\r\n\t\t\t\t\t\t\t\t\taugment = 0,\r\n\t\t\t\t\t\t\t\t\tsides = name === \"width\" ? [\"Left\", \"Right\"] : [\"Top\", \"Bottom\"],\r\n\t\t\t\t\t\t\t\t\tfields = [\"padding\" + sides[0], \"padding\" + sides[1], \"border\" + sides[0] + \"Width\", \"border\" + sides[1] + \"Width\"];\r\n\r\n\t\t\t\t\t\t\tfor (i = 0; i < fields.length; i++) {\r\n\t\t\t\t\t\t\t\tvalue = parseFloat(CSS.getPropertyValue(element, fields[i]));\r\n\t\t\t\t\t\t\t\tif (!isNaN(value)) {\r\n\t\t\t\t\t\t\t\t\taugment += value;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn wantInner ? -augment : augment;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\treturn 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tfunction getDimension(name, wantInner) {\r\n\t\t\t\t\t\treturn function(type, element, propertyValue) {\r\n\t\t\t\t\t\t\tswitch (type) {\r\n\t\t\t\t\t\t\t\tcase \"name\":\r\n\t\t\t\t\t\t\t\t\treturn name;\r\n\t\t\t\t\t\t\t\tcase \"extract\":\r\n\t\t\t\t\t\t\t\t\treturn parseFloat(propertyValue) + augmentDimension(name, element, wantInner);\r\n\t\t\t\t\t\t\t\tcase \"inject\":\r\n\t\t\t\t\t\t\t\t\treturn (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + \"px\";\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t}\r\n\t\t\t\t\tCSS.Normalizations.registered.innerWidth = getDimension(\"width\", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.innerHeight = getDimension(\"height\", true);\r\n\t\t\t\t\tCSS.Normalizations.registered.outerWidth = getDimension(\"width\");\r\n\t\t\t\t\tCSS.Normalizations.registered.outerHeight = getDimension(\"height\");\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Names\r\n\t\t\t ************************/\r\n\r\n\t\t\tNames: {\r\n\t\t\t\t/* Camelcase a property name into its JavaScript notation (e.g. \"background-color\" ==> \"backgroundColor\").\r\n\t\t\t\t Camelcasing is used to normalize property names between and across calls. */\r\n\t\t\t\tcamelCase: function(property) {\r\n\t\t\t\t\treturn property.replace(/-(\\w)/g, function(match, subMatch) {\r\n\t\t\t\t\t\treturn subMatch.toUpperCase();\r\n\t\t\t\t\t});\r\n\t\t\t\t},\r\n\t\t\t\t/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */\r\n\t\t\t\tSVGAttribute: function(property) {\r\n\t\t\t\t\tvar SVGAttributes = \"width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2\";\r\n\r\n\t\t\t\t\t/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */\r\n\t\t\t\t\tif (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {\r\n\t\t\t\t\t\tSVGAttributes += \"|transform\";\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn new RegExp(\"^(\" + SVGAttributes + \")$\", \"i\").test(property);\r\n\t\t\t\t},\r\n\t\t\t\t/* Determine whether a property should be set with a vendor prefix. */\r\n\t\t\t\t/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.\r\n\t\t\t\t If the property is not at all supported by the browser, return a false flag. */\r\n\t\t\t\tprefixCheck: function(property) {\r\n\t\t\t\t\t/* If this property has already been checked, return the cached value. */\r\n\t\t\t\t\tif (Velocity.State.prefixMatches[property]) {\r\n\t\t\t\t\t\treturn [Velocity.State.prefixMatches[property], true];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar vendors = [\"\", \"Webkit\", \"Moz\", \"ms\", \"O\"];\r\n\r\n\t\t\t\t\t\tfor (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {\r\n\t\t\t\t\t\t\tvar propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\tif (i === 0) {\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = property;\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */\r\n\t\t\t\t\t\t\t\tpropertyPrefixed = vendors[i] + property.replace(/^\\w/, function(match) {\r\n\t\t\t\t\t\t\t\t\treturn match.toUpperCase();\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Check if the browser supports this property as prefixed. */\r\n\t\t\t\t\t\t\tif (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {\r\n\t\t\t\t\t\t\t\t/* Cache the match. */\r\n\t\t\t\t\t\t\t\tVelocity.State.prefixMatches[property] = propertyPrefixed;\r\n\r\n\t\t\t\t\t\t\t\treturn [propertyPrefixed, true];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */\r\n\t\t\t\t\t\treturn [property, false];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/************************\r\n\t\t\t CSS Property Values\r\n\t\t\t ************************/\r\n\r\n\t\t\tValues: {\r\n\t\t\t\t/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */\r\n\t\t\t\thexToRgb: function(hex) {\r\n\t\t\t\t\tvar shortformRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,\r\n\t\t\t\t\t\t\tlongformRegex = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i,\r\n\t\t\t\t\t\t\trgbParts;\r\n\r\n\t\t\t\t\thex = hex.replace(shortformRegex, function(m, r, g, b) {\r\n\t\t\t\t\t\treturn r + r + g + g + b + b;\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\trgbParts = longformRegex.exec(hex);\r\n\r\n\t\t\t\t\treturn rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];\r\n\t\t\t\t},\r\n\t\t\t\tisCSSNullValue: function(value) {\r\n\t\t\t\t\t/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.\r\n\t\t\t\t\t Thus, we check for both falsiness and these special strings. */\r\n\t\t\t\t\t/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook\r\n\t\t\t\t\t templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */\r\n\t\t\t\t\t/* Note: Chrome returns \"rgba(0, 0, 0, 0)\" for an undefined color whereas IE returns \"transparent\". */\r\n\t\t\t\t\treturn (!value || /^(none|auto|transparent|(rgba\\(0, ?0, ?0, ?0\\)))$/i.test(value));\r\n\t\t\t\t},\r\n\t\t\t\t/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */\r\n\t\t\t\tgetUnitType: function(property) {\r\n\t\t\t\t\tif (/^(rotate|skew)/i.test(property)) {\r\n\t\t\t\t\t\treturn \"deg\";\r\n\t\t\t\t\t} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {\r\n\t\t\t\t\t\t/* The above properties are unitless. */\r\n\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Default to px for all other properties. */\r\n\t\t\t\t\t\treturn \"px\";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* HTML elements default to an associated display type when they're not set to display:none. */\r\n\t\t\t\t/* Note: This function is used for correctly setting the non-\"none\" display value in certain Velocity redirects, such as fadeIn/Out. */\r\n\t\t\t\tgetDisplayType: function(element) {\r\n\t\t\t\t\tvar tagName = element && element.tagName.toString().toLowerCase();\r\n\r\n\t\t\t\t\tif (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"inline\";\r\n\t\t\t\t\t} else if (/^(li)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"list-item\";\r\n\t\t\t\t\t} else if (/^(tr)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table-row\";\r\n\t\t\t\t\t} else if (/^(table)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table\";\r\n\t\t\t\t\t} else if (/^(tbody)$/i.test(tagName)) {\r\n\t\t\t\t\t\treturn \"table-row-group\";\r\n\t\t\t\t\t\t/* Default to \"block\" when no match is found. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn \"block\";\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t/* The class add/remove functions are used to temporarily apply a \"velocity-animating\" class to elements while they're animating. */\r\n\t\t\t\taddClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.add(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\telement.className += (element.className.length ? \" \" : \"\") + className;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass + (currentClass ? \" \" : \"\") + className);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\tremoveClass: function(element, className) {\r\n\t\t\t\t\tif (element) {\r\n\t\t\t\t\t\tif (element.classList) {\r\n\t\t\t\t\t\t\telement.classList.remove(className);\r\n\t\t\t\t\t\t} else if (Type.isString(element.className)) {\r\n\t\t\t\t\t\t\t// Element.className is around 15% faster then set/getAttribute\r\n\t\t\t\t\t\t\t// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?\r\n\t\t\t\t\t\t\telement.className = element.className.toString().replace(new RegExp(\"(^|\\\\s)\" + className.split(\" \").join(\"|\") + \"(\\\\s|$)\", \"gi\"), \" \");\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it\r\n\t\t\t\t\t\t\tvar currentClass = element.getAttribute(IE <= 7 ? \"className\" : \"class\") || \"\";\r\n\r\n\t\t\t\t\t\t\telement.setAttribute(\"class\", currentClass.replace(new RegExp(\"(^|\\s)\" + className.split(\" \").join(\"|\") + \"(\\s|$)\", \"gi\"), \" \"));\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t/****************************\r\n\t\t\t Style Getting & Setting\r\n\t\t\t ****************************/\r\n\r\n\t\t\t/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tgetPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {\r\n\t\t\t\t/* Get an element's computed property value. */\r\n\t\t\t\t/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's\r\n\t\t\t\t style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's\r\n\t\t\t\t *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */\r\n\t\t\t\tfunction computePropertyValue(element, property) {\r\n\t\t\t\t\t/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an\r\n\t\t\t\t\t element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate\r\n\t\t\t\t\t offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.\r\n\t\t\t\t\t We subtract border and padding to get the sum of interior + scrollbar. */\r\n\t\t\t\t\tvar computedValue = 0;\r\n\r\n\t\t\t\t\t/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array\r\n\t\t\t\t\t of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the\r\n\t\t\t\t\t codebase for a dying browser. The performance repercussions of using jQuery here are minimal since\r\n\t\t\t\t\t Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */\r\n\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\tcomputedValue = $.css(element, property); /* GET */\r\n\t\t\t\t\t\t/* All other browsers support getComputedStyle. The returned live object reference is cached onto its\r\n\t\t\t\t\t\t associated element so that it does not need to be refetched upon every GET. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Browsers do not return height and width values for elements that are set to display:\"none\". Thus, we temporarily\r\n\t\t\t\t\t\t toggle display to the element type's default value. */\r\n\t\t\t\t\t\tvar toggleDisplay = false;\r\n\r\n\t\t\t\t\t\tif (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, \"display\") === 0) {\r\n\t\t\t\t\t\t\ttoggleDisplay = true;\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", CSS.Values.getDisplayType(element));\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar revertDisplay = function() {\r\n\t\t\t\t\t\t\tif (toggleDisplay) {\r\n\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", \"none\");\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (!forceStyleLookup) {\r\n\t\t\t\t\t\t\tif (property === \"height\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\r\n\t\t\t\t\t\t\t\tvar contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, \"borderTopWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderBottomWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingTop\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingBottom\")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxHeight;\r\n\t\t\t\t\t\t\t} else if (property === \"width\" && CSS.getPropertyValue(element, \"boxSizing\").toString().toLowerCase() !== \"border-box\") {\r\n\t\t\t\t\t\t\t\tvar contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, \"borderLeftWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"borderRightWidth\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingLeft\")) || 0) - (parseFloat(CSS.getPropertyValue(element, \"paddingRight\")) || 0);\r\n\t\t\t\t\t\t\t\trevertDisplay();\r\n\r\n\t\t\t\t\t\t\t\treturn contentBoxWidth;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar computedStyle;\r\n\r\n\t\t\t\t\t\t/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf\r\n\t\t\t\t\t\t of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */\r\n\t\t\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\t\t\tcomputedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If the computedStyle object has yet to be cached, do so now. */\r\n\t\t\t\t\t\t} else if (!Data(element).computedStyle) {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */\r\n\t\t\t\t\t\t\t/* If computedStyle is cached, use it. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedStyle = Data(element).computedStyle;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.\r\n\t\t\t\t\t\t Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.\r\n\t\t\t\t\t\t So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */\r\n\t\t\t\t\t\tif (property === \"borderColor\") {\r\n\t\t\t\t\t\t\tproperty = \"borderTopColor\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 has a bug in which the \"filter\" property must be accessed from computedStyle using the getPropertyValue method\r\n\t\t\t\t\t\t instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */\r\n\t\t\t\t\t\tif (IE === 9 && property === \"filter\") {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle.getPropertyValue(property); /* GET */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcomputedValue = computedStyle[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Fall back to the property's style value (if defined) when computedValue returns nothing,\r\n\t\t\t\t\t\t which can happen when the element hasn't been painted. */\r\n\t\t\t\t\t\tif (computedValue === \"\" || computedValue === null) {\r\n\t\t\t\t\t\t\tcomputedValue = element.style[property];\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\trevertDisplay();\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* For top, right, bottom, and left (TRBL) values that are set to \"auto\" on elements of \"fixed\" or \"absolute\" position,\r\n\t\t\t\t\t defer to jQuery for converting \"auto\" to a numeric value. (For elements with a \"static\" or \"relative\" position, \"auto\" has the same\r\n\t\t\t\t\t effect as being set to 0, so no conversion is necessary.) */\r\n\t\t\t\t\t/* An example of why numeric conversion is necessary: When an element with \"position:absolute\" has an untouched \"left\"\r\n\t\t\t\t\t property, which reverts to \"auto\", left's value is 0 relative to its parent element, but is often non-zero relative\r\n\t\t\t\t\t to its *containing* (not parent) element, which is the nearest \"position:relative\" ancestor or the viewport (and always the viewport in the case of \"position:fixed\"). */\r\n\t\t\t\t\tif (computedValue === \"auto\" && /^(top|right|bottom|left)$/i.test(property)) {\r\n\t\t\t\t\t\tvar position = computePropertyValue(element, \"position\"); /* GET */\r\n\r\n\t\t\t\t\t\t/* For absolute positioning, jQuery's $.position() only returns values for top and left;\r\n\t\t\t\t\t\t right and bottom will have their \"auto\" value reverted to 0. */\r\n\t\t\t\t\t\t/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().\r\n\t\t\t\t\t\t Not a big deal since we're currently in a GET batch anyway. */\r\n\t\t\t\t\t\tif (position === \"fixed\" || (position === \"absolute\" && /top|left/i.test(property))) {\r\n\t\t\t\t\t\t\t/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */\r\n\t\t\t\t\t\t\tcomputedValue = $(element).position()[property] + \"px\"; /* GET */\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn computedValue;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar propertyValue;\r\n\r\n\t\t\t\t/* If this is a hooked property (e.g. \"clipLeft\" instead of the root property of \"clip\"),\r\n\t\t\t\t extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */\r\n\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\tvar hook = property,\r\n\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(hook);\r\n\r\n\t\t\t\t\t/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),\r\n\t\t\t\t\t query the DOM for the root property's value. */\r\n\t\t\t\t\tif (rootPropertyValue === undefined) {\r\n\t\t\t\t\t\t/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */\r\n\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this root has a normalization registered, peform the associated normalization extraction. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\trootPropertyValue = CSS.Normalizations.registered[hookRoot](\"extract\", element, rootPropertyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Extract the hook's value. */\r\n\t\t\t\t\tpropertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);\r\n\r\n\t\t\t\t\t/* If this is a normalized property (e.g. \"opacity\" becomes \"filter\" in <=IE8) or \"translateX\" becomes \"transform\"),\r\n\t\t\t\t\t normalize the property's name and value, and handle the special case of transforms. */\r\n\t\t\t\t\t/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly\r\n\t\t\t\t\t numerical and therefore do not require normalization extraction. */\r\n\t\t\t\t} else if (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\tvar normalizedPropertyName,\r\n\t\t\t\t\t\t\tnormalizedPropertyValue;\r\n\r\n\t\t\t\t\tnormalizedPropertyName = CSS.Normalizations.registered[property](\"name\", element);\r\n\r\n\t\t\t\t\t/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.\r\n\t\t\t\t\t At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.\r\n\t\t\t\t\t This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;\r\n\t\t\t\t\t thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */\r\n\t\t\t\t\tif (normalizedPropertyName !== \"transform\") {\r\n\t\t\t\t\t\tnormalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */\r\n\r\n\t\t\t\t\t\t/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */\r\n\t\t\t\t\t\tif (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {\r\n\t\t\t\t\t\t\tnormalizedPropertyValue = CSS.Hooks.templates[property][1];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"extract\", element, normalizedPropertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */\r\n\t\t\t\tif (!/^[\\d-]/.test(propertyValue)) {\r\n\t\t\t\t\t/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via\r\n\t\t\t\t\t their HTML attribute values instead of their CSS style values. */\r\n\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t/* Since the height/width attribute values must be set manually, they don't reflect computed values.\r\n\t\t\t\t\t\t Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */\r\n\t\t\t\t\t\tif (/^(height|width)$/i.test(property)) {\r\n\t\t\t\t\t\t\t/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\tpropertyValue = element.getBBox()[property];\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* Otherwise, access the attribute value directly. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tpropertyValue = element.getAttribute(property);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),\r\n\t\t\t\t convert CSS null-values to an integer of value 0. */\r\n\t\t\t\tif (CSS.Values.isCSSNullValue(propertyValue)) {\r\n\t\t\t\t\tpropertyValue = 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\tconsole.log(\"Get \" + property + \": \" + propertyValue);\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn propertyValue;\r\n\t\t\t},\r\n\t\t\t/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */\r\n\t\t\tsetPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {\r\n\t\t\t\tvar propertyName = property;\r\n\r\n\t\t\t\t/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */\r\n\t\t\t\tif (property === \"scroll\") {\r\n\t\t\t\t\t/* If a container option is present, scroll the container instead of the browser window. */\r\n\t\t\t\t\tif (scrollData.container) {\r\n\t\t\t\t\t\tscrollData.container[\"scroll\" + scrollData.direction] = propertyValue;\r\n\t\t\t\t\t\t/* Otherwise, Velocity defaults to scrolling the browser window. */\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tif (scrollData.direction === \"Left\") {\r\n\t\t\t\t\t\t\twindow.scrollTo(propertyValue, scrollData.alternateValue);\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\twindow.scrollTo(scrollData.alternateValue, propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().\r\n\t\t\t\t\t Thus, for now, we merely cache transforms being SET. */\r\n\t\t\t\t\tif (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property](\"name\", element) === \"transform\") {\r\n\t\t\t\t\t\t/* Perform a normalization injection. */\r\n\t\t\t\t\t\t/* Note: The normalization logic handles the transformCache updating. */\r\n\t\t\t\t\t\tCSS.Normalizations.registered[property](\"inject\", element, propertyValue);\r\n\r\n\t\t\t\t\t\tpropertyName = \"transform\";\r\n\t\t\t\t\t\tpropertyValue = Data(element).transformCache[property];\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t/* Inject hooks. */\r\n\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\tvar hookName = property,\r\n\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */\r\n\t\t\t\t\t\t\trootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */\r\n\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);\r\n\t\t\t\t\t\t\tproperty = hookRoot;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Normalize names and values. */\r\n\t\t\t\t\t\tif (CSS.Normalizations.registered[property]) {\r\n\t\t\t\t\t\t\tpropertyValue = CSS.Normalizations.registered[property](\"inject\", element, propertyValue);\r\n\t\t\t\t\t\t\tproperty = CSS.Normalizations.registered[property](\"name\", element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Assign the appropriate vendor prefix before performing an official style update. */\r\n\t\t\t\t\t\tpropertyName = CSS.Names.prefixCheck(property)[0];\r\n\r\n\t\t\t\t\t\t/* A try/catch is used for IE<=8, which throws an error when \"invalid\" CSS values are set, e.g. a negative width.\r\n\t\t\t\t\t\t Try/catch is avoided for other browsers since it incurs a performance overhead. */\r\n\t\t\t\t\t\tif (IE <= 8) {\r\n\t\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Browser does not support [\" + propertyValue + \"] for [\" + propertyName + \"]\");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */\r\n\t\t\t\t\t\t\t/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\t\t\t\tif (data && data.isSVG && CSS.Names.SVGAttribute(property)) {\r\n\t\t\t\t\t\t\t\t/* Note: For SVG attributes, vendor-prefixed property names are never used. */\r\n\t\t\t\t\t\t\t\t/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */\r\n\t\t\t\t\t\t\t\telement.setAttribute(property, propertyValue);\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\telement.style[propertyName] = propertyValue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (Velocity.debug >= 2) {\r\n\t\t\t\t\t\t\tconsole.log(\"Set \" + property + \" (\" + propertyName + \"): \" + propertyValue);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */\r\n\t\t\t\treturn [propertyName, propertyValue];\r\n\t\t\t},\r\n\t\t\t/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */\r\n\t\t\t/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */\r\n\t\t\tflushTransformCache: function(element) {\r\n\t\t\t\tvar transformString = \"\",\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string\r\n\t\t\t\t (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */\r\n\t\t\t\tif ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {\r\n\t\t\t\t\t/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.\r\n\t\t\t\t\t Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */\r\n\t\t\t\t\tvar getTransformFloat = function(transformProperty) {\r\n\t\t\t\t\t\treturn parseFloat(CSS.getPropertyValue(element, transformProperty));\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,\r\n\t\t\t\t\t we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */\r\n\t\t\t\t\tvar SVGTransforms = {\r\n\t\t\t\t\t\ttranslate: [getTransformFloat(\"translateX\"), getTransformFloat(\"translateY\")],\r\n\t\t\t\t\t\tskewX: [getTransformFloat(\"skewX\")], skewY: [getTransformFloat(\"skewY\")],\r\n\t\t\t\t\t\t/* If the scale property is set (non-1), use that value for the scaleX and scaleY values\r\n\t\t\t\t\t\t (this behavior mimics the result of animating all these properties at once on HTML elements). */\r\n\t\t\t\t\t\tscale: getTransformFloat(\"scale\") !== 1 ? [getTransformFloat(\"scale\"), getTransformFloat(\"scale\")] : [getTransformFloat(\"scaleX\"), getTransformFloat(\"scaleY\")],\r\n\t\t\t\t\t\t/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values\r\n\t\t\t\t\t\t defining the rotation's origin point. We ignore the origin values (default them to 0). */\r\n\t\t\t\t\t\trotate: [getTransformFloat(\"rotateZ\"), 0, 0]\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* Iterate through the transform properties in the user-defined property map order.\r\n\t\t\t\t\t (This mimics the behavior of non-SVG transform animation.) */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\t/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master\r\n\t\t\t\t\t\t properties so that they match up with SVG's accepted transform properties. */\r\n\t\t\t\t\t\tif (/^translate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"translate\";\r\n\t\t\t\t\t\t} else if (/^scale/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"scale\";\r\n\t\t\t\t\t\t} else if (/^rotate/i.test(transformName)) {\r\n\t\t\t\t\t\t\ttransformName = \"rotate\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Check that we haven't yet deleted the property from the SVGTransforms container. */\r\n\t\t\t\t\t\tif (SVGTransforms[transformName]) {\r\n\t\t\t\t\t\t\t/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */\r\n\t\t\t\t\t\t\ttransformString += transformName + \"(\" + SVGTransforms[transformName].join(\" \") + \")\" + \" \";\r\n\r\n\t\t\t\t\t\t\t/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't\r\n\t\t\t\t\t\t\t re-insert the same master property if we encounter another one of its axis-specific properties. */\r\n\t\t\t\t\t\t\tdelete SVGTransforms[transformName];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t} else {\r\n\t\t\t\t\tvar transformValue,\r\n\t\t\t\t\t\t\tperspective;\r\n\r\n\t\t\t\t\t/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */\r\n\t\t\t\t\t$.each(Data(element).transformCache, function(transformName) {\r\n\t\t\t\t\t\ttransformValue = Data(element).transformCache[transformName];\r\n\r\n\t\t\t\t\t\t/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */\r\n\t\t\t\t\t\tif (transformName === \"transformPerspective\") {\r\n\t\t\t\t\t\t\tperspective = transformValue;\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* IE9 only supports one rotation type, rotateZ, which it refers to as \"rotate\". */\r\n\t\t\t\t\t\tif (IE === 9 && transformName === \"rotateZ\") {\r\n\t\t\t\t\t\t\ttransformName = \"rotate\";\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\ttransformString += transformName + transformValue + \" \";\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* If present, set the perspective subproperty first. */\r\n\t\t\t\t\tif (perspective) {\r\n\t\t\t\t\t\ttransformString = \"perspective\" + perspective + \" \" + transformString;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tCSS.setPropertyValue(element, \"transform\", transformString);\r\n\t\t\t}\r\n\t\t};\r\n\r\n\t\t/* Register hooks and normalizations. */\r\n\t\tCSS.Hooks.register();\r\n\t\tCSS.Normalizations.register();\r\n\r\n\t\t/* Allow hook setting in the same fashion as jQuery's $.css(). */\r\n\t\tVelocity.hook = function(elements, arg2, arg3) {\r\n\t\t\tvar value;\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Get property value. If an element set was passed in, only return the value for the first element. */\r\n\t\t\t\tif (arg3 === undefined) {\r\n\t\t\t\t\tif (value === undefined) {\r\n\t\t\t\t\t\tvalue = CSS.getPropertyValue(element, arg2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Set property value. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */\r\n\t\t\t\t\tvar adjustedSet = CSS.setPropertyValue(element, arg2, arg3);\r\n\r\n\t\t\t\t\t/* Transform properties don't automatically set. They have to be flushed to the DOM. */\r\n\t\t\t\t\tif (adjustedSet[0] === \"transform\") {\r\n\t\t\t\t\t\tVelocity.CSS.flushTransformCache(element);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvalue = adjustedSet;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\treturn value;\r\n\t\t};\r\n\r\n\t\t/*****************\r\n\t\t Animation\r\n\t\t *****************/\r\n\r\n\t\tvar animate = function() {\r\n\t\t\tvar opts;\r\n\r\n\t\t\t/******************\r\n\t\t\t Call Chain\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* Logic for determining what to return to the call stack when exiting out of Velocity. */\r\n\t\t\tfunction getChain() {\r\n\t\t\t\t/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,\r\n\t\t\t\t default to null instead of returning the targeted elements so that utility function's return value is standardized. */\r\n\t\t\t\tif (isUtility) {\r\n\t\t\t\t\treturn promiseData.promise || null;\r\n\t\t\t\t\t/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\treturn elementsWrapped;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*************************\r\n\t\t\t Arguments Assignment\r\n\t\t\t *************************/\r\n\r\n\t\t\t/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which \"elements\" (or \"e\"), \"properties\" (or \"p\"), and \"options\" (or \"o\")\r\n\t\t\t objects are defined on a container object that's passed in as Velocity's sole argument. */\r\n\t\t\t/* Note: Some browsers automatically populate arguments with a \"properties\" object. We detect it by checking for its default \"names\" property. */\r\n\t\t\tvar syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),\r\n\t\t\t\t\t/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */\r\n\t\t\t\t\tisUtility,\r\n\t\t\t\t\t/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly\r\n\t\t\t\t\t passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */\r\n\t\t\t\t\telementsWrapped,\r\n\t\t\t\t\targumentIndex;\r\n\r\n\t\t\tvar elements,\r\n\t\t\t\t\tpropertiesMap,\r\n\t\t\t\t\toptions;\r\n\r\n\t\t\t/* Detect jQuery/Zepto elements being animated via the $.fn method. */\r\n\t\t\tif (Type.isWrapped(this)) {\r\n\t\t\t\tisUtility = false;\r\n\r\n\t\t\t\targumentIndex = 0;\r\n\t\t\t\telements = this;\r\n\t\t\t\telementsWrapped = this;\r\n\t\t\t\t/* Otherwise, raw elements are being animated via the utility function. */\r\n\t\t\t} else {\r\n\t\t\t\tisUtility = true;\r\n\r\n\t\t\t\targumentIndex = 1;\r\n\t\t\t\telements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Promises\r\n\t\t\t ***************/\r\n\r\n\t\t\tvar promiseData = {\r\n\t\t\t\tpromise: null,\r\n\t\t\t\tresolver: null,\r\n\t\t\t\trejecter: null\r\n\t\t\t};\r\n\r\n\t\t\t/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if\r\n\t\t\t promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve\r\n\t\t\t method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated\r\n\t\t\t call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */\r\n\t\t\t/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that\r\n\t\t\t triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are\r\n\t\t\t grouped together for the purposes of resolving and rejecting a promise. */\r\n\t\t\tif (isUtility && Velocity.Promise) {\r\n\t\t\t\tpromiseData.promise = new Velocity.Promise(function(resolve, reject) {\r\n\t\t\t\t\tpromiseData.resolver = resolve;\r\n\t\t\t\t\tpromiseData.rejecter = reject;\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tif (syntacticSugar) {\r\n\t\t\t\tpropertiesMap = arguments[0].properties || arguments[0].p;\r\n\t\t\t\toptions = arguments[0].options || arguments[0].o;\r\n\t\t\t} else {\r\n\t\t\t\tpropertiesMap = arguments[argumentIndex];\r\n\t\t\t\toptions = arguments[argumentIndex + 1];\r\n\t\t\t}\r\n\r\n\t\t\telements = sanitizeElements(elements);\r\n\r\n\t\t\tif (!elements) {\r\n\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\tif (!propertiesMap || !options || options.promiseRejectEmpty !== false) {\r\n\t\t\t\t\t\tpromiseData.rejecter();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tpromiseData.resolver();\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a\r\n\t\t\t single raw DOM element is passed in (which doesn't contain a length property). */\r\n\t\t\tvar elementsLength = elements.length,\r\n\t\t\t\t\telementsIndex = 0;\r\n\r\n\t\t\t/***************************\r\n\t\t\t Argument Overloading\r\n\t\t\t ***************************/\r\n\r\n\t\t\t/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).\r\n\t\t\t Overloading is detected by checking for the absence of an object being passed into options. */\r\n\t\t\t/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */\r\n\t\t\tif (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {\r\n\t\t\t\t/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */\r\n\t\t\t\tvar startingArgumentPosition = argumentIndex + 1;\r\n\r\n\t\t\t\toptions = {};\r\n\r\n\t\t\t\t/* Iterate through all options arguments */\r\n\t\t\t\tfor (var i = startingArgumentPosition; i < arguments.length; i++) {\r\n\t\t\t\t\t/* Treat a number as a duration. Parse it out. */\r\n\t\t\t\t\t/* Note: The following RegEx will return true if passed an array with a number as its first item.\r\n\t\t\t\t\t Thus, arrays are skipped from this check. */\r\n\t\t\t\t\tif (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\\d/.test(arguments[i]))) {\r\n\t\t\t\t\t\toptions.duration = arguments[i];\r\n\t\t\t\t\t\t/* Treat strings and arrays as easings. */\r\n\t\t\t\t\t} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {\r\n\t\t\t\t\t\toptions.easing = arguments[i];\r\n\t\t\t\t\t\t/* Treat a function as a complete callback. */\r\n\t\t\t\t\t} else if (Type.isFunction(arguments[i])) {\r\n\t\t\t\t\t\toptions.complete = arguments[i];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/*********************\r\n\t\t\t Action Detection\r\n\t\t\t *********************/\r\n\r\n\t\t\t/* Velocity's behavior is categorized into \"actions\": Elements can either be specially scrolled into view,\r\n\t\t\t or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's\r\n\t\t\t first argument, the associated action is \"start\". Alternatively, \"scroll\", \"reverse\", \"pause\", \"resume\" or \"stop\" can be passed in \r\n\t\t\t instead of a properties map. */\r\n\t\t\tvar action;\r\n\r\n\t\t\tswitch (propertiesMap) {\r\n\t\t\t\tcase \"scroll\":\r\n\t\t\t\t\taction = \"scroll\";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"reverse\":\r\n\t\t\t\t\taction = \"reverse\";\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"pause\":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Pause\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\tvar currentTime = (new Date()).getTime();\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tpauseDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Set call to paused */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5] = {\r\n\t\t\t\t\t\t\t\t\t\t\tresume: false\r\n\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since pause creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase \"resume\":\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Resume\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Handle delay timers */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tresumeDelayOnElement(element, currentTime);\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a \r\n\t\t\t\t\t single element will cause any calls that containt tweens for that element to be paused/resumed\r\n\t\t\t\t\t as well. */\r\n\r\n\t\t\t\t\t/* Iterate through all calls and pause any that contain any of our elements */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\tvar found = false;\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Skip any calls that have never been paused */\r\n\t\t\t\t\t\t\t\tif (!activeCall[5]) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Flag a pause object to be resumed, which will occur during the next tick. In\r\n\t\t\t\t\t\t\t\t\t\t addition, the pause object will at that time be deleted */\r\n\t\t\t\t\t\t\t\t\t\tactiveCall[5].resume = true;\r\n\r\n\t\t\t\t\t\t\t\t\t\t/* Once we match an element, we can bounce out to the next call entirely */\r\n\t\t\t\t\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* Proceed to check next call if we have already matched */\r\n\t\t\t\t\t\t\t\tif (found) {\r\n\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Since resume creates no new tweens, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tcase \"finish\":\r\n\t\t\t\tcase \"finishAll\":\r\n\t\t\t\tcase \"stop\":\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Action: Stop\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* Clear the currently-active delay on each targeted element. */\r\n\t\t\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t\t\tif (Data(element) && Data(element).delayTimer) {\r\n\t\t\t\t\t\t\t/* Stop the timer from triggering its cached next() function. */\r\n\t\t\t\t\t\t\tclearTimeout(Data(element).delayTimer.setTimeout);\r\n\r\n\t\t\t\t\t\t\t/* Manually call the next() function so that the subsequent queue items can progress. */\r\n\t\t\t\t\t\t\tif (Data(element).delayTimer.next) {\r\n\t\t\t\t\t\t\t\tData(element).delayTimer.next();\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tdelete Data(element).delayTimer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* If we want to finish everything in the queue, we have to iterate through it\r\n\t\t\t\t\t\t and call each function. This will make them active calls below, which will\r\n\t\t\t\t\t\t cause them to be applied via the duration setting. */\r\n\t\t\t\t\t\tif (propertiesMap === \"finishAll\" && (options === true || Type.isString(options))) {\r\n\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\r\n\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\r\n\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\r\n\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\titem();\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tvar callsToStop = [];\r\n\r\n\t\t\t\t\t/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have\r\n\t\t\t\t\t been applied to multiple elements, in which case all of the call's elements will be stopped. When an element\r\n\t\t\t\t\t is stopped, the next item in its animation queue is immediately triggered. */\r\n\t\t\t\t\t/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the \"fx\" queue)\r\n\t\t\t\t\t or a custom queue string can be passed in. */\r\n\t\t\t\t\t/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,\r\n\t\t\t\t\t regardless of the element's current queue state. */\r\n\r\n\t\t\t\t\t/* Iterate through every active call. */\r\n\t\t\t\t\t$.each(Velocity.State.calls, function(i, activeCall) {\r\n\t\t\t\t\t\t/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */\r\n\t\t\t\t\t\tif (activeCall) {\r\n\t\t\t\t\t\t\t/* Iterate through the active call's targeted elements. */\r\n\t\t\t\t\t\t\t$.each(activeCall[1], function(k, activeElement) {\r\n\t\t\t\t\t\t\t\t/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only\r\n\t\t\t\t\t\t\t\t clear calls associated with the relevant queue. */\r\n\t\t\t\t\t\t\t\t/* Call stopping logic works as follows:\r\n\t\t\t\t\t\t\t\t - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.\r\n\t\t\t\t\t\t\t\t - options === undefined --> stop current queue:\"\" call and all queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === false --> stop only queue:false calls.\r\n\t\t\t\t\t\t\t\t - options === \"custom\" --> stop current queue:\"custom\" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:\"custom\" call). */\r\n\t\t\t\t\t\t\t\tvar queueName = (options === undefined) ? \"\" : options;\r\n\r\n\t\t\t\t\t\t\t\tif (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {\r\n\t\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Iterate through the calls targeted by the stop command. */\r\n\t\t\t\t\t\t\t\t$.each(elements, function(l, element) {\r\n\t\t\t\t\t\t\t\t\t/* Check that this call was applied to the target element. */\r\n\t\t\t\t\t\t\t\t\tif (element === activeElement) {\r\n\t\t\t\t\t\t\t\t\t\t/* Optionally clear the remaining queued calls. If we're doing \"finishAll\" this won't find anything,\r\n\t\t\t\t\t\t\t\t\t\t due to the queue-clearing above. */\r\n\t\t\t\t\t\t\t\t\t\tif (options === true || Type.isString(options)) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Iterate through the items in the element's queue. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.each($.queue(element, Type.isString(options) ? options : \"\"), function(_, item) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t/* The queue array can contain an \"inprogress\" string, which we skip. */\r\n\t\t\t\t\t\t\t\t\t\t\t\tif (Type.isFunction(item)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/* Pass the item's callback a flag indicating that we want to abort from the queue call.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t (Specifically, the queue will resolve the call's associated promise then abort.)  */\r\n\t\t\t\t\t\t\t\t\t\t\t\t\titem(null, true);\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Clearing the $.queue() array is achieved by resetting it to []. */\r\n\t\t\t\t\t\t\t\t\t\t\t$.queue(element, Type.isString(options) ? options : \"\", []);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (propertiesMap === \"stop\") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Since \"reverse\" uses cached start values (the previous call's endValues), these values must be\r\n\t\t\t\t\t\t\t\t\t\t\t changed to reflect the final value that the elements were actually tweened to. */\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: If only queue:false/queue:\"custom\" animations are currently running on an element, it won't have a tweensContainer\r\n\t\t\t\t\t\t\t\t\t\t\t object. Also, queue:false/queue:\"custom\" animations can't be reversed. */\r\n\t\t\t\t\t\t\t\t\t\t\tvar data = Data(element);\r\n\t\t\t\t\t\t\t\t\t\t\tif (data && data.tweensContainer && (queueName === true || queueName === \"\")) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t$.each(data.tweensContainer, function(m, activeTween) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tactiveTween.endValue = activeTween.currentValue;\r\n\t\t\t\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tcallsToStop.push(i);\r\n\t\t\t\t\t\t\t\t\t\t} else if (propertiesMap === \"finish\" || propertiesMap === \"finishAll\") {\r\n\t\t\t\t\t\t\t\t\t\t\t/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that\r\n\t\t\t\t\t\t\t\t\t\t\t they finish upon the next rAf tick then proceed with normal call completion logic. */\r\n\t\t\t\t\t\t\t\t\t\t\tactiveCall[2].duration = 1;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\t/* Prematurely call completeCall() on each matched active call. Pass an additional flag for \"stop\" to indicate\r\n\t\t\t\t\t that the complete callback and display:none setting should be skipped since we're completing prematurely. */\r\n\t\t\t\t\tif (propertiesMap === \"stop\") {\r\n\t\t\t\t\t\t$.each(callsToStop, function(i, j) {\r\n\t\t\t\t\t\t\tcompleteCall(j, true);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */\r\n\t\t\t\t\treturn getChain();\r\n\r\n\t\t\t\tdefault:\r\n\t\t\t\t\t/* Treat a non-empty plain object as a literal properties map. */\r\n\t\t\t\t\tif ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {\r\n\t\t\t\t\t\taction = \"start\";\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t Redirects\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* Check if a string matches a registered redirect (see Redirects above). */\r\n\t\t\t\t\t} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {\r\n\t\t\t\t\t\topts = $.extend({}, options);\r\n\r\n\t\t\t\t\t\tvar durationOriginal = opts.duration,\r\n\t\t\t\t\t\t\t\tdelayOriginal = opts.delay || 0;\r\n\r\n\t\t\t\t\t\t/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */\r\n\t\t\t\t\t\tif (opts.backwards === true) {\r\n\t\t\t\t\t\t\telements = $.extend(true, [], elements).reverse();\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */\r\n\t\t\t\t\t\t$.each(elements, function(elementIndex, element) {\r\n\t\t\t\t\t\t\t/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */\r\n\t\t\t\t\t\t\tif (parseFloat(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);\r\n\t\t\t\t\t\t\t} else if (Type.isFunction(opts.stagger)) {\r\n\t\t\t\t\t\t\t\topts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)\r\n\t\t\t\t\t\t\t the duration of each element's animation, using floors to prevent producing very short durations. */\r\n\t\t\t\t\t\t\tif (opts.drag) {\r\n\t\t\t\t\t\t\t\t/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */\r\n\t\t\t\t\t\t\t\topts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);\r\n\r\n\t\t\t\t\t\t\t\t/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,\r\n\t\t\t\t\t\t\t\t B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).\r\n\t\t\t\t\t\t\t\t The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */\r\n\t\t\t\t\t\t\t\topts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to\r\n\t\t\t\t\t\t\t reduce the opts checking logic required inside the redirect. */\r\n\t\t\t\t\t\t\tVelocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.\r\n\t\t\t\t\t\t (The performance overhead up to this point is virtually non-existant.) */\r\n\t\t\t\t\t\t/* Note: The jQuery call chain is kept intact by returning the complete element set. */\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tvar abortError = \"Velocity: First argument (\" + propertiesMap + \") was not a property map, a known action, or a registered redirect. Aborting.\";\r\n\r\n\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\tpromiseData.rejecter(new Error(abortError));\r\n\t\t\t\t\t\t} else if (window.console) {\r\n\t\t\t\t\t\t\tconsole.log(abortError);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\treturn getChain();\r\n\t\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Call-Wide Variables\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements\r\n\t\t\t being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore\r\n\t\t\t avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale\r\n\t\t\t conversion metrics across Velocity animations that are not immediately consecutively chained. */\r\n\t\t\tvar callUnitConversionData = {\r\n\t\t\t\tlastParent: null,\r\n\t\t\t\tlastPosition: null,\r\n\t\t\t\tlastFontSize: null,\r\n\t\t\t\tlastPercentToPxWidth: null,\r\n\t\t\t\tlastPercentToPxHeight: null,\r\n\t\t\t\tlastEmToPx: null,\r\n\t\t\t\tremToPx: null,\r\n\t\t\t\tvwToPx: null,\r\n\t\t\t\tvhToPx: null\r\n\t\t\t};\r\n\r\n\t\t\t/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide\r\n\t\t\t Velocity.State.calls array that is processed during animation ticking. */\r\n\t\t\tvar call = [];\r\n\r\n\t\t\t/************************\r\n\t\t\t Element Processing\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):\r\n\t\t\t 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.\r\n\t\t\t 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.\r\n\t\t\t 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.\r\n\t\t\t `elementArrayIndex` allows passing index of the element in the original array to value functions.\r\n\t\t\t If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.\r\n\t\t\t */\r\n\t\t\tfunction processElement(element, elementArrayIndex) {\r\n\r\n\t\t\t\t/*************************\r\n\t\t\t\t Part I: Pre-Queueing\r\n\t\t\t\t *************************/\r\n\r\n\t\t\t\t/***************************\r\n\t\t\t\t Element-Wide Variables\r\n\t\t\t\t ***************************/\r\n\r\n\t\t\t\tvar /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */\r\n\t\t\t\t\t\topts = $.extend({}, Velocity.defaults, options),\r\n\t\t\t\t\t\t/* A container for the processed data associated with each property in the propertyMap.\r\n\t\t\t\t\t\t (Each property in the map produces its own \"tween\".) */\r\n\t\t\t\t\t\ttweensContainer = {},\r\n\t\t\t\t\t\telementUnitConversionData;\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Element Init\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\tif (Data(element) === undefined) {\r\n\t\t\t\t\tVelocity.init(element);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/******************\r\n\t\t\t\t Option: Delay\r\n\t\t\t\t ******************/\r\n\r\n\t\t\t\t/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */\r\n\t\t\t\t/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()\r\n\t\t\t\t (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */\r\n\t\t\t\tif (parseFloat(opts.delay) && opts.queue !== false) {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\t/* The ensuing queue item (which is assigned to the \"next\" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.\r\n\t\t\t\t\t\t The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's \"stop\" command, and\r\n\t\t\t\t\t\t delayBegin/delayTime is used to ensure we can \"pause\" and \"resume\" a tween that is still mid-delay. */\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilite access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tnext();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(next, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Duration\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Support for jQuery's named durations. */\r\n\t\t\t\tswitch (opts.duration.toString().toLowerCase()) {\r\n\t\t\t\t\tcase \"fast\":\r\n\t\t\t\t\t\topts.duration = 200;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase \"normal\":\r\n\t\t\t\t\t\topts.duration = DURATION_DEFAULT;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tcase \"slow\":\r\n\t\t\t\t\t\topts.duration = 600;\r\n\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t/* Remove the potential \"ms\" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */\r\n\t\t\t\t\t\topts.duration = parseFloat(opts.duration) || 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/************************\r\n\t\t\t\t Global Option: Mock\r\n\t\t\t\t ************************/\r\n\r\n\t\t\t\tif (Velocity.mock !== false) {\r\n\t\t\t\t\t/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.\r\n\t\t\t\t\t Alternatively, a multiplier can be passed in to time remap all delays and durations. */\r\n\t\t\t\t\tif (Velocity.mock === true) {\r\n\t\t\t\t\t\topts.duration = opts.delay = 1;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\topts.duration *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t\topts.delay *= parseFloat(Velocity.mock) || 1;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*******************\r\n\t\t\t\t Option: Easing\r\n\t\t\t\t *******************/\r\n\r\n\t\t\t\topts.easing = getEasing(opts.easing, opts.duration);\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: Callbacks\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Callbacks must functions. Otherwise, default to null. */\r\n\t\t\t\tif (opts.begin && !Type.isFunction(opts.begin)) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.progress && !Type.isFunction(opts.progress)) {\r\n\t\t\t\t\topts.progress = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.complete && !Type.isFunction(opts.complete)) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************************\r\n\t\t\t\t Option: Display & Visibility\r\n\t\t\t\t *********************************/\r\n\r\n\t\t\t\t/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */\r\n\t\t\t\t/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */\r\n\t\t\t\tif (opts.display !== undefined && opts.display !== null) {\r\n\t\t\t\t\topts.display = opts.display.toString().toLowerCase();\r\n\r\n\t\t\t\t\t/* Users can pass in a special \"auto\" value to instruct Velocity to set the element to its default display value. */\r\n\t\t\t\t\tif (opts.display === \"auto\") {\r\n\t\t\t\t\t\topts.display = Velocity.CSS.Values.getDisplayType(element);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== null) {\r\n\t\t\t\t\topts.visibility = opts.visibility.toString().toLowerCase();\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Option: mobileHA\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)\r\n\t\t\t\t on animating elements. HA is removed from the element at the completion of its animation. */\r\n\t\t\t\t/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */\r\n\t\t\t\t/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */\r\n\t\t\t\topts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);\r\n\r\n\t\t\t\t/***********************\r\n\t\t\t\t Part II: Queueing\r\n\t\t\t\t ***********************/\r\n\r\n\t\t\t\t/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.\r\n\t\t\t\t In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */\r\n\t\t\t\t/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,\r\n\t\t\t\t the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */\r\n\t\t\t\tfunction buildQueue(next) {\r\n\t\t\t\t\tvar data, lastTweensContainer;\r\n\r\n\t\t\t\t\t/*******************\r\n\t\t\t\t\t Option: Begin\r\n\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t\tif (opts.begin && elementsIndex === 0) {\r\n\t\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\r\n\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\topts.begin.call(elements, elements);\r\n\t\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t Tween Data Construction (for Scroll)\r\n\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */\r\n\t\t\t\t\tif (action === \"scroll\") {\r\n\t\t\t\t\t\t/* The scroll action uniquely takes an optional \"offset\" option -- specified in pixels -- that offsets the targeted scroll position. */\r\n\t\t\t\t\t\tvar scrollDirection = (/^x$/i.test(opts.axis) ? \"Left\" : \"Top\"),\r\n\t\t\t\t\t\t\t\tscrollOffset = parseFloat(opts.offset) || 0,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tscrollPositionCurrentAlternate,\r\n\t\t\t\t\t\t\t\tscrollPositionEnd;\r\n\r\n\t\t\t\t\t\t/* Scroll also uniquely takes an optional \"container\" option, which indicates the parent element that should be scrolled --\r\n\t\t\t\t\t\t as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */\r\n\t\t\t\t\t\tif (opts.container) {\r\n\t\t\t\t\t\t\t/* Ensure that either a jQuery object or a raw DOM element was passed in. */\r\n\t\t\t\t\t\t\tif (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {\r\n\t\t\t\t\t\t\t\t/* Extract the raw DOM element from the jQuery wrapper. */\r\n\t\t\t\t\t\t\t\topts.container = opts.container[0] || opts.container;\r\n\t\t\t\t\t\t\t\t/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes\r\n\t\t\t\t\t\t\t\t (due to the user's natural interaction with the page). */\r\n\t\t\t\t\t\t\t\tscrollPositionCurrent = opts.container[\"scroll\" + scrollDirection]; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions\r\n\t\t\t\t\t\t\t\t -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*\r\n\t\t\t\t\t\t\t\t the scroll container's current scroll position. */\r\n\t\t\t\t\t\t\t\tscrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */\r\n\t\t\t\t\t\t\t\t/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\topts.container = null;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using\r\n\t\t\t\t\t\t\t the appropriate cached property names (which differ based on browser type). */\r\n\t\t\t\t\t\t\tscrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + scrollDirection]]; /* GET */\r\n\t\t\t\t\t\t\t/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */\r\n\t\t\t\t\t\t\tscrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State[\"scrollProperty\" + (scrollDirection === \"Left\" ? \"Top\" : \"Left\")]]; /* GET */\r\n\r\n\t\t\t\t\t\t\t/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --\r\n\t\t\t\t\t\t\t and therefore end values do not need to be compounded onto current values. */\r\n\t\t\t\t\t\t\tscrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */\r\n\t\t\t\t\t\ttweensContainer = {\r\n\t\t\t\t\t\t\tscroll: {\r\n\t\t\t\t\t\t\t\trootPropertyValue: false,\r\n\t\t\t\t\t\t\t\tstartValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tcurrentValue: scrollPositionCurrent,\r\n\t\t\t\t\t\t\t\tendValue: scrollPositionEnd,\r\n\t\t\t\t\t\t\t\tunitType: \"\",\r\n\t\t\t\t\t\t\t\teasing: opts.easing,\r\n\t\t\t\t\t\t\t\tscrollData: {\r\n\t\t\t\t\t\t\t\t\tcontainer: opts.container,\r\n\t\t\t\t\t\t\t\t\tdirection: scrollDirection,\r\n\t\t\t\t\t\t\t\t\talternateValue: scrollPositionCurrentAlternate\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\telement: element\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\tconsole.log(\"tweensContainer (scroll): \", tweensContainer.scroll, element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/******************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Reverse)\r\n\t\t\t\t\t\t ******************************************/\r\n\r\n\t\t\t\t\t\t/* Reverse acts like a \"start\" action in that a property map is animated toward. The only difference is\r\n\t\t\t\t\t\t that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate\r\n\t\t\t\t\t\t the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */\r\n\t\t\t\t\t\t/* Note: Reverse can be directly called via the \"reverse\" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */\r\n\t\t\t\t\t\t/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;\r\n\t\t\t\t\t\t there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined\r\n\t\t\t\t\t\t as reverting to the element's values as they were prior to the previous *Velocity* call. */\r\n\t\t\t\t\t} else if (action === \"reverse\") {\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* Abort if there is no prior animation data to reverse to. */\r\n\t\t\t\t\t\tif (!data) {\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (!data.tweensContainer) {\r\n\t\t\t\t\t\t\t/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */\r\n\t\t\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\r\n\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Options Parsing\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* If the element was hidden via the display option in the previous call,\r\n\t\t\t\t\t\t\t revert display to \"auto\" prior to reversal so that the element is visible again. */\r\n\t\t\t\t\t\t\tif (data.opts.display === \"none\") {\r\n\t\t\t\t\t\t\t\tdata.opts.display = \"auto\";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (data.opts.visibility === \"hidden\") {\r\n\t\t\t\t\t\t\t\tdata.opts.visibility = \"visible\";\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the loop option was set in the previous call, disable it so that \"reverse\" calls aren't recursively generated.\r\n\t\t\t\t\t\t\t Further, remove the previous call's callback options; typically, users do not want these to be refired. */\r\n\t\t\t\t\t\t\tdata.opts.loop = false;\r\n\t\t\t\t\t\t\tdata.opts.begin = null;\r\n\t\t\t\t\t\t\tdata.opts.complete = null;\r\n\r\n\t\t\t\t\t\t\t/* Since we're extending an opts object that has already been extended with the defaults options object,\r\n\t\t\t\t\t\t\t we remove non-explicitly-defined properties that are auto-assigned values. */\r\n\t\t\t\t\t\t\tif (!options.easing) {\r\n\t\t\t\t\t\t\t\tdelete opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!options.duration) {\r\n\t\t\t\t\t\t\t\tdelete opts.duration;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* The opts object used for reversal is an extension of the options object optionally passed into this\r\n\t\t\t\t\t\t\t reverse call plus the options used in the previous Velocity call. */\r\n\t\t\t\t\t\t\topts = $.extend({}, data.opts, opts);\r\n\r\n\t\t\t\t\t\t\t/*************************************\r\n\t\t\t\t\t\t\t Tweens Container Reconstruction\r\n\t\t\t\t\t\t\t *************************************/\r\n\r\n\t\t\t\t\t\t\t/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */\r\n\t\t\t\t\t\t\tlastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);\r\n\r\n\t\t\t\t\t\t\t/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */\r\n\t\t\t\t\t\t\tfor (var lastTween in lastTweensContainer) {\r\n\t\t\t\t\t\t\t\t/* In addition to tween data, tweensContainers contain an element property that we ignore here. */\r\n\t\t\t\t\t\t\t\tif (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== \"element\") {\r\n\t\t\t\t\t\t\t\t\tvar lastStartValue = lastTweensContainer[lastTween].startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;\r\n\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].endValue = lastStartValue;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).\r\n\t\t\t\t\t\t\t\t\t Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.\r\n\t\t\t\t\t\t\t\t\t The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */\r\n\t\t\t\t\t\t\t\t\tif (!Type.isEmptyObject(options)) {\r\n\t\t\t\t\t\t\t\t\t\tlastTweensContainer[lastTween].easing = opts.easing;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.log(\"reverse tweensContainer (\" + lastTween + \"): \" + JSON.stringify(lastTweensContainer[lastTween]), element);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\ttweensContainer = lastTweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/*****************************************\r\n\t\t\t\t\t\t Tween Data Construction (for Start)\r\n\t\t\t\t\t\t *****************************************/\r\n\r\n\t\t\t\t\t} else if (action === \"start\") {\r\n\r\n\t\t\t\t\t\t/*************************\r\n\t\t\t\t\t\t Value Transferring\r\n\t\t\t\t\t\t *************************/\r\n\r\n\t\t\t\t\t\t/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created\r\n\t\t\t\t\t\t while the element was in the process of being animated by Velocity, then this current call is safe to use\r\n\t\t\t\t\t\t the end values from the prior call as its start values. Velocity attempts to perform this value transfer\r\n\t\t\t\t\t\t process whenever possible in order to avoid requerying the DOM. */\r\n\t\t\t\t\t\t/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),\r\n\t\t\t\t\t\t then the DOM is queried for the element's current values as a last resort. */\r\n\t\t\t\t\t\t/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\t/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)\r\n\t\t\t\t\t\t to transfer over end values to use as start values. If it's set to true and there is a previous\r\n\t\t\t\t\t\t Velocity call to pull values from, do so. */\r\n\t\t\t\t\t\tif (data && data.tweensContainer && data.isAnimating === true) {\r\n\t\t\t\t\t\t\tlastTweensContainer = data.tweensContainer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t Tween Data Calculation\r\n\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */\r\n\t\t\t\t\t\t/* Property map values can either take the form of 1) a single value representing the end value,\r\n\t\t\t\t\t\t or 2) an array in the form of [ endValue, [, easing] [, startValue] ].\r\n\t\t\t\t\t\t The optional third parameter is a forcefed startValue to be used instead of querying the DOM for\r\n\t\t\t\t\t\t the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */\r\n\t\t\t\t\t\tvar parsePropertyValue = function(valueData, skipResolvingEasing) {\r\n\t\t\t\t\t\t\tvar endValue, easing, startValue;\r\n\r\n\t\t\t\t\t\t\t/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */\r\n\t\t\t\t\t\t\tif (Type.isFunction(valueData)) {\r\n\t\t\t\t\t\t\t\tvalueData = valueData.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Handle the array format, which can be structured as one of three potential overloads:\r\n\t\t\t\t\t\t\t A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */\r\n\t\t\t\t\t\t\tif (Type.isArray(valueData)) {\r\n\t\t\t\t\t\t\t\t/* endValue is always the first item in the array. Don't bother validating endValue's value now\r\n\t\t\t\t\t\t\t\t since the ensuing property cycling logic does that. */\r\n\t\t\t\t\t\t\t\tendValue = valueData[0];\r\n\r\n\t\t\t\t\t\t\t\t/* Two-item array format: If the second item is a number, function, or hex string, treat it as a\r\n\t\t\t\t\t\t\t\t start value since easings can only be non-hex strings or arrays. */\r\n\t\t\t\t\t\t\t\tif ((!Type.isArray(valueData[1]) && /^[\\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1];\r\n\t\t\t\t\t\t\t\t\t/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */\r\n\t\t\t\t\t\t\t\t} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {\r\n\t\t\t\t\t\t\t\t\teasing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);\r\n\r\n\t\t\t\t\t\t\t\t\t/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[1] || valueData[2];\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t/* Handle the single-value format. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tendValue = valueData;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Default to the call's easing if a per-property easing type was not defined. */\r\n\t\t\t\t\t\t\tif (!skipResolvingEasing) {\r\n\t\t\t\t\t\t\t\teasing = easing || opts.easing;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If functions were passed in as values, pass the function the current element as its context,\r\n\t\t\t\t\t\t\t plus the element's index and the element set's size as arguments. Then, assign the returned value. */\r\n\t\t\t\t\t\t\tif (Type.isFunction(endValue)) {\r\n\t\t\t\t\t\t\t\tendValue = endValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Type.isFunction(startValue)) {\r\n\t\t\t\t\t\t\t\tstartValue = startValue.call(element, elementArrayIndex, elementsLength);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */\r\n\t\t\t\t\t\t\treturn [endValue || 0, easing, startValue];\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\tvar fixPropertyValue = function(property, valueData) {\r\n\t\t\t\t\t\t\t/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */\r\n\t\t\t\t\t\t\tvar rootProperty = CSS.Hooks.getRoot(property),\r\n\t\t\t\t\t\t\t\t\trootPropertyValue = false,\r\n\t\t\t\t\t\t\t\t\t/* Parse out endValue, easing, and startValue from the property's data. */\r\n\t\t\t\t\t\t\t\t\tendValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\tstartValue = valueData[2],\r\n\t\t\t\t\t\t\t\t\tpattern;\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Start Value Sourcing\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will\r\n\t\t\t\t\t\t\t inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.\r\n\t\t\t\t\t\t\t Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */\r\n\t\t\t\t\t\t\t/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,\r\n\t\t\t\t\t\t\t there is no way to check for their explicit browser support, and so we skip skip this check for them. */\r\n\t\t\t\t\t\t\tif ((!data || !data.isSVG) && rootProperty !== \"tween\" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {\r\n\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Skipping [\" + rootProperty + \"] due to a lack of browser support.\");\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If the display option is being set to a non-\"none\" (e.g. \"block\") and opacity (filter on IE<=8) is being\r\n\t\t\t\t\t\t\t animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity\r\n\t\t\t\t\t\t\t a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */\r\n\t\t\t\t\t\t\tif (((opts.display !== undefined && opts.display !== null && opts.display !== \"none\") || (opts.visibility !== undefined && opts.visibility !== \"hidden\")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {\r\n\t\t\t\t\t\t\t\tstartValue = 0;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue\r\n\t\t\t\t\t\t\t for all of the current call's properties that were *also* animated in the previous call. */\r\n\t\t\t\t\t\t\t/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */\r\n\t\t\t\t\t\t\tif (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {\r\n\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the\r\n\t\t\t\t\t\t\t\t instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue\r\n\t\t\t\t\t\t\t\t attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */\r\n\t\t\t\t\t\t\t\trootPropertyValue = data.rootPropertyValueCache[rootProperty];\r\n\t\t\t\t\t\t\t\t/* If values were not transferred from a previous Velocity call, query the DOM as needed. */\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t/* Handle hooked properties. */\r\n\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\tif (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */\r\n\t\t\t\t\t\t\t\t\t\t/* Note: The following getPropertyValue() call does not actually trigger a DOM query;\r\n\t\t\t\t\t\t\t\t\t\t getPropertyValue() will extract the hook from rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property, rootPropertyValue);\r\n\t\t\t\t\t\t\t\t\t\t/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;\r\n\t\t\t\t\t\t\t\t\t\t just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual\r\n\t\t\t\t\t\t\t\t\t\t root property value (if one is set), but this is acceptable since the primary reason users forcefeed is\r\n\t\t\t\t\t\t\t\t\t\t to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t/* Grab this hook's zero-value template, e.g. \"0px 0px 0px black\". */\r\n\t\t\t\t\t\t\t\t\t\trootPropertyValue = CSS.Hooks.templates[rootProperty][1];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* Handle non-hooked properties that haven't already been defined via forcefeeding. */\r\n\t\t\t\t\t\t\t\t} else if (startValue === undefined) {\r\n\t\t\t\t\t\t\t\t\tstartValue = CSS.getPropertyValue(element, property); /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t Value Data Extraction\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\tvar separatedValue,\r\n\t\t\t\t\t\t\t\t\tendValueUnitType,\r\n\t\t\t\t\t\t\t\t\tstartValueUnitType,\r\n\t\t\t\t\t\t\t\t\toperator = false;\r\n\r\n\t\t\t\t\t\t\t/* Separates a property value into its numeric value and its unit type. */\r\n\t\t\t\t\t\t\tvar separateValue = function(property, value) {\r\n\t\t\t\t\t\t\t\tvar unitType,\r\n\t\t\t\t\t\t\t\t\t\tnumericValue;\r\n\r\n\t\t\t\t\t\t\t\tnumericValue = (value || \"0\")\r\n\t\t\t\t\t\t\t\t\t\t.toString()\r\n\t\t\t\t\t\t\t\t\t\t.toLowerCase()\r\n\t\t\t\t\t\t\t\t\t\t/* Match the unit type at the end of the value. */\r\n\t\t\t\t\t\t\t\t\t\t.replace(/[%A-z]+$/, function(match) {\r\n\t\t\t\t\t\t\t\t\t\t\t/* Grab the unit type. */\r\n\t\t\t\t\t\t\t\t\t\t\tunitType = match;\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t/* Strip the unit type off of value. */\r\n\t\t\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t\t\t/* If no unit type was supplied, assign one that is appropriate for this property (e.g. \"deg\" for rotateZ or \"px\" for width). */\r\n\t\t\t\t\t\t\t\tif (!unitType) {\r\n\t\t\t\t\t\t\t\t\tunitType = CSS.Values.getUnitType(property);\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\treturn [numericValue, unitType];\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\tif (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {\r\n\t\t\t\t\t\t\t\tpattern = \"\";\r\n\t\t\t\t\t\t\t\tvar iStart = 0, // index in startValue\r\n\t\t\t\t\t\t\t\t\t\tiEnd = 0, // index in endValue\r\n\t\t\t\t\t\t\t\t\t\taStart = [], // array of startValue numbers\r\n\t\t\t\t\t\t\t\t\t\taEnd = [], // array of endValue numbers\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0, // Keep track of being inside a \"calc()\" so we don't duplicate it\r\n\t\t\t\t\t\t\t\t\t\tinRGB = 0, // Keep track of being inside an RGB as we can't use fractional values\r\n\t\t\t\t\t\t\t\t\t\tinRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel\r\n\r\n\t\t\t\t\t\t\t\tstartValue = CSS.Hooks.fixColors(startValue);\r\n\t\t\t\t\t\t\t\tendValue = CSS.Hooks.fixColors(endValue);\r\n\t\t\t\t\t\t\t\twhile (iStart < startValue.length && iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\tvar cStart = startValue[iStart],\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\r\n\t\t\t\t\t\t\t\t\tif (/[\\d\\.-]/.test(cStart) && /[\\d\\.-]/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\tvar tStart = cStart, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\ttEnd = cEnd, // temporary character buffer\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \".\", // Make sure we can only ever match a single dot in a decimal\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \".\"; // Make sure we can only ever match a single dot in a decimal\r\n\r\n\t\t\t\t\t\t\t\t\t\twhile (++iStart < startValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcStart = startValue[iStart];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cStart === dotStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotStart = \"..\"; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cStart)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttStart += cStart;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\twhile (++iEnd < endValue.length) {\r\n\t\t\t\t\t\t\t\t\t\t\tcEnd = endValue[iEnd];\r\n\t\t\t\t\t\t\t\t\t\t\tif (cEnd === dotEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdotEnd = \"..\"; // Can never match two characters\r\n\t\t\t\t\t\t\t\t\t\t\t} else if (!/\\d/.test(cEnd)) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\ttEnd += cEnd;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tvar uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type\r\n\t\t\t\t\t\t\t\t\t\t\t\tuEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type\r\n\r\n\t\t\t\t\t\t\t\t\t\tiStart += uStart.length;\r\n\t\t\t\t\t\t\t\t\t\tiEnd += uEnd.length;\r\n\t\t\t\t\t\t\t\t\t\tif (uStart === uEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t// Same units\r\n\t\t\t\t\t\t\t\t\t\t\tif (tStart === tEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Same numbers, so just copy over\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += tStart + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t\t// Different numbers, so store them\r\n\t\t\t\t\t\t\t\t\t\t\t\tpattern += \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" + uStart;\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(parseFloat(tStart));\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(parseFloat(tEnd));\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\t// Different units, so put into a \"calc(from + to)\" and animate each side to/from zero\r\n\t\t\t\t\t\t\t\t\t\t\tvar nStart = parseFloat(tStart),\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tnEnd = parseFloat(tEnd);\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tpattern += (inCalc < 5 ? \"calc\" : \"\") + \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nStart ? \"{\" + aStart.length + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uStart\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \" + \"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (nEnd ? \"{\" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? \"!\" : \"\") + \"}\" : \"0\") + uEnd\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ \")\";\r\n\t\t\t\t\t\t\t\t\t\t\tif (nStart) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(nStart);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tif (nEnd) {\r\n\t\t\t\t\t\t\t\t\t\t\t\taStart.push(0);\r\n\t\t\t\t\t\t\t\t\t\t\t\taEnd.push(nEnd);\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else if (cStart === cEnd) {\r\n\t\t\t\t\t\t\t\t\t\tpattern += cStart;\r\n\t\t\t\t\t\t\t\t\t\tiStart++;\r\n\t\t\t\t\t\t\t\t\t\tiEnd++;\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside a calc()\r\n\t\t\t\t\t\t\t\t\t\tif (inCalc === 0 && cStart === \"c\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 1 && cStart === \"a\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 2 && cStart === \"l\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc === 3 && cStart === \"c\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc++;\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inCalc && inCalc < 5)\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inCalc >= 4 && cStart === \")\" && --inCalc < 5) {\r\n\t\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t// Keep track of being inside an rgb() / rgba()\r\n\t\t\t\t\t\t\t\t\t\tif (inRGB === 0 && cStart === \"r\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 1 && cStart === \"g\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 2 && cStart === \"b\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB === 3 && cStart === \"a\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= 3 && cStart === \"(\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t) {\r\n\t\t\t\t\t\t\t\t\t\t\tif (inRGB === 3 && cStart === \"a\") {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGBA = 1;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB++;\r\n\t\t\t\t\t\t\t\t\t\t} else if (inRGBA && cStart === \",\") {\r\n\t\t\t\t\t\t\t\t\t\t\tif (++inRGBA > 3) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))\r\n\t\t\t\t\t\t\t\t\t\t\t\t|| inRGB >= (inRGBA ? 4 : 3) && cStart === \")\" && --inRGB < (inRGBA ? 5 : 4)) {\r\n\t\t\t\t\t\t\t\t\t\t\tinRGB = inRGBA = 0;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tinCalc = 0;\r\n\t\t\t\t\t\t\t\t\t\t// TODO: changing units, fixing colours\r\n\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (iStart !== startValue.length || iEnd !== endValue.length) {\r\n\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\tconsole.error(\"Trying to pattern match mis-matched strings [\\\"\" + endValue + \"\\\", \\\"\" + startValue + \"\\\"]\");\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\t\tif (aStart.length) {\r\n\t\t\t\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\t\t\t\tconsole.log(\"Pattern found \\\"\" + pattern + \"\\\" -> \", aStart, aEnd, \"[\" + startValue + \",\" + endValue + \"]\");\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\tstartValue = aStart;\r\n\t\t\t\t\t\t\t\t\t\tendValue = aEnd;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\tpattern = undefined;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (!pattern) {\r\n\t\t\t\t\t\t\t\t/* Separate startValue. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, startValue);\r\n\t\t\t\t\t\t\t\tstartValue = separatedValue[0];\r\n\t\t\t\t\t\t\t\tstartValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Separate endValue, and extract a value operator (e.g. \"+=\", \"-=\") if one exists. */\r\n\t\t\t\t\t\t\t\tseparatedValue = separateValue(property, endValue);\r\n\t\t\t\t\t\t\t\tendValue = separatedValue[0].replace(/^([+-\\/*])=/, function(match, subMatch) {\r\n\t\t\t\t\t\t\t\t\toperator = subMatch;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Strip the operator off of the value. */\r\n\t\t\t\t\t\t\t\t\treturn \"\";\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\tendValueUnitType = separatedValue[1];\r\n\r\n\t\t\t\t\t\t\t\t/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */\r\n\t\t\t\t\t\t\t\tstartValue = parseFloat(startValue) || 0;\r\n\t\t\t\t\t\t\t\tendValue = parseFloat(endValue) || 0;\r\n\r\n\t\t\t\t\t\t\t\t/***************************************\r\n\t\t\t\t\t\t\t\t Property-Specific Value Conversion\r\n\t\t\t\t\t\t\t\t ***************************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */\r\n\t\t\t\t\t\t\t\tif (endValueUnitType === \"%\") {\r\n\t\t\t\t\t\t\t\t\t/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),\r\n\t\t\t\t\t\t\t\t\t which is identical to the em unit's behavior, so we piggyback off of that. */\r\n\t\t\t\t\t\t\t\t\tif (/^(fontSize|lineHeight)$/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\t/* Convert % into an em decimal value. */\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"em\";\r\n\t\t\t\t\t\t\t\t\t\t/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/^scale/.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = endValue / 100;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t\t/* For RGB components, take the defined percentage of 255 and strip off the unit type. */\r\n\t\t\t\t\t\t\t\t\t} else if (/(Red|Green|Blue)$/i.test(property)) {\r\n\t\t\t\t\t\t\t\t\t\tendValue = (endValue / 100) * 255;\r\n\t\t\t\t\t\t\t\t\t\tendValueUnitType = \"\";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t Unit Ratio Calculation\r\n\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of\r\n\t\t\t\t\t\t\t %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order\r\n\t\t\t\t\t\t\t for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred\r\n\t\t\t\t\t\t\t from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:\r\n\t\t\t\t\t\t\t 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels\r\n\t\t\t\t\t\t\t 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */\r\n\t\t\t\t\t\t\t/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,\r\n\t\t\t\t\t\t\t setting values with the target unit type then comparing the returned pixel value. */\r\n\t\t\t\t\t\t\t/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead\r\n\t\t\t\t\t\t\t of batching the SETs and GETs together upfront outweights the potential overhead\r\n\t\t\t\t\t\t\t of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */\r\n\t\t\t\t\t\t\t/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */\r\n\t\t\t\t\t\t\tvar calculateUnitRatios = function() {\r\n\r\n\t\t\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t\t\t Same Ratio Checks\r\n\t\t\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t\t\t/* The properties below are used to determine whether the element differs sufficiently from this call's\r\n\t\t\t\t\t\t\t\t previously iterated element to also differ in its unit conversion ratios. If the properties match up with those\r\n\t\t\t\t\t\t\t\t of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,\r\n\t\t\t\t\t\t\t\t this is done to minimize DOM querying. */\r\n\t\t\t\t\t\t\t\tvar sameRatioIndicators = {\r\n\t\t\t\t\t\t\t\t\tmyParent: element.parentNode || document.body, /* GET */\r\n\t\t\t\t\t\t\t\t\tposition: CSS.getPropertyValue(element, \"position\"), /* GET */\r\n\t\t\t\t\t\t\t\t\tfontSize: CSS.getPropertyValue(element, \"fontSize\") /* GET */\r\n\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */\r\n\t\t\t\t\t\t\t\t\t\tsamePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),\r\n\t\t\t\t\t\t\t\t\t\t/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */\r\n\t\t\t\t\t\t\t\t\t\tsameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);\r\n\r\n\t\t\t\t\t\t\t\t/* Store these ratio indicators call-wide for the next element to compare against. */\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastParent = sameRatioIndicators.myParent;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastPosition = sameRatioIndicators.position;\r\n\t\t\t\t\t\t\t\tcallUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Specific Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement\r\n\t\t\t\t\t\t\t\t of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */\r\n\t\t\t\t\t\t\t\tvar measurement = 100,\r\n\t\t\t\t\t\t\t\t\t\tunitRatios = {};\r\n\r\n\t\t\t\t\t\t\t\tif (!sameEmRatio || !samePercentRatio) {\r\n\t\t\t\t\t\t\t\t\tvar dummy = data && data.isSVG ? document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\") : document.createElement(\"div\");\r\n\r\n\t\t\t\t\t\t\t\t\tVelocity.init(dummy);\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.appendChild(dummy);\r\n\r\n\t\t\t\t\t\t\t\t\t/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.\r\n\t\t\t\t\t\t\t\t\t Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */\r\n\t\t\t\t\t\t\t\t\t/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */\r\n\t\t\t\t\t\t\t\t\t$.each([\"overflow\", \"overflowX\", \"overflowY\"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, \"hidden\");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"position\", sameRatioIndicators.position);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"fontSize\", sameRatioIndicators.fontSize);\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"boxSizing\", \"content-box\");\r\n\r\n\t\t\t\t\t\t\t\t\t/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */\r\n\t\t\t\t\t\t\t\t\t$.each([\"minWidth\", \"maxWidth\", \"width\", \"minHeight\", \"maxHeight\", \"height\"], function(i, property) {\r\n\t\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, property, measurement + \"%\");\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t\t\t/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */\r\n\t\t\t\t\t\t\t\t\tVelocity.CSS.setPropertyValue(dummy, \"paddingLeft\", measurement + \"em\");\r\n\r\n\t\t\t\t\t\t\t\t\t/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, \"width\", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, \"height\", null, true)) || 1) / measurement; /* GET */\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, \"paddingLeft\")) || 1) / measurement; /* GET */\r\n\r\n\t\t\t\t\t\t\t\t\tsameRatioIndicators.myParent.removeChild(dummy);\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tunitRatios.emToPx = callUnitConversionData.lastEmToPx;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;\r\n\t\t\t\t\t\t\t\t\tunitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/***************************\r\n\t\t\t\t\t\t\t\t Element-Agnostic Units\r\n\t\t\t\t\t\t\t\t ***************************/\r\n\r\n\t\t\t\t\t\t\t\t/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked\r\n\t\t\t\t\t\t\t\t once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time\r\n\t\t\t\t\t\t\t\t that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,\r\n\t\t\t\t\t\t\t\t so we calculate it now. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.remToPx === null) {\r\n\t\t\t\t\t\t\t\t\t/* Default to browsers' default fontSize of 16px in the case of 0. */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, \"fontSize\")) || 16; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t/* Similarly, viewport units are %-relative to the window's inner dimensions. */\r\n\t\t\t\t\t\t\t\tif (callUnitConversionData.vwToPx === null) {\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t\tcallUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\tunitRatios.remToPx = callUnitConversionData.remToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vwToPx = callUnitConversionData.vwToPx;\r\n\t\t\t\t\t\t\t\tunitRatios.vhToPx = callUnitConversionData.vhToPx;\r\n\r\n\t\t\t\t\t\t\t\tif (Velocity.debug >= 1) {\r\n\t\t\t\t\t\t\t\t\tconsole.log(\"Unit ratios: \" + JSON.stringify(unitRatios), element);\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\treturn unitRatios;\r\n\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t/********************\r\n\t\t\t\t\t\t\t Unit Conversion\r\n\t\t\t\t\t\t\t ********************/\r\n\r\n\t\t\t\t\t\t\t/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */\r\n\t\t\t\t\t\t\tif (/[\\/*]/.test(operator)) {\r\n\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType\r\n\t\t\t\t\t\t\t\t is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend\r\n\t\t\t\t\t\t\t\t on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio\r\n\t\t\t\t\t\t\t\t would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */\r\n\t\t\t\t\t\t\t\t/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */\r\n\t\t\t\t\t\t\t} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {\r\n\t\t\t\t\t\t\t\t/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */\r\n\t\t\t\t\t\t\t\t/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively\r\n\t\t\t\t\t\t\t\t match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,\r\n\t\t\t\t\t\t\t\t which remains past the point of the animation's completion. */\r\n\t\t\t\t\t\t\t\tif (endValue === 0) {\r\n\t\t\t\t\t\t\t\t\tendValueUnitType = startValueUnitType;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).\r\n\t\t\t\t\t\t\t\t\t If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */\r\n\t\t\t\t\t\t\t\t\telementUnitConversionData = elementUnitConversionData || calculateUnitRatios();\r\n\r\n\t\t\t\t\t\t\t\t\t/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */\r\n\t\t\t\t\t\t\t\t\t/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */\r\n\t\t\t\t\t\t\t\t\tvar axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === \"x\") ? \"x\" : \"y\";\r\n\r\n\t\t\t\t\t\t\t\t\t/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:\r\n\t\t\t\t\t\t\t\t\t 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */\r\n\t\t\t\t\t\t\t\t\tswitch (startValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.\r\n\t\t\t\t\t\t\t\t\t\t\t Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value\r\n\t\t\t\t\t\t\t\t\t\t\t to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* px acts as our midpoint in the unit conversion process; do nothing. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= elementUnitConversionData[startValueUnitType + \"ToPx\"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/* Invert the px ratios to convert into to the target unit. */\r\n\t\t\t\t\t\t\t\t\tswitch (endValueUnitType) {\r\n\t\t\t\t\t\t\t\t\t\tcase \"%\":\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / (axis === \"x\" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tcase \"px\":\r\n\t\t\t\t\t\t\t\t\t\t\t/* startValue is already in px, do nothing; we're done. */\r\n\t\t\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\t\t\t\t\tstartValue *= 1 / elementUnitConversionData[endValueUnitType + \"ToPx\"];\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/*********************\r\n\t\t\t\t\t\t\t Relative Values\r\n\t\t\t\t\t\t\t *********************/\r\n\r\n\t\t\t\t\t\t\t/* Operator logic must be performed last since it requires unit-normalized start and end values. */\r\n\t\t\t\t\t\t\t/* Note: Relative *percent values* do not behave how most people think; while one would expect \"+=50%\"\r\n\t\t\t\t\t\t\t to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:\r\n\t\t\t\t\t\t\t 50 points is added on top of the current % value. */\r\n\t\t\t\t\t\t\tswitch (operator) {\r\n\t\t\t\t\t\t\t\tcase \"+\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue + endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"-\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue - endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"*\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue * endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\t\tcase \"/\":\r\n\t\t\t\t\t\t\t\t\tendValue = startValue / endValue;\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/**************************\r\n\t\t\t\t\t\t\t tweensContainer Push\r\n\t\t\t\t\t\t\t **************************/\r\n\r\n\t\t\t\t\t\t\t/* Construct the per-property tween object, and push it to the element's tweensContainer. */\r\n\t\t\t\t\t\t\ttweensContainer[property] = {\r\n\t\t\t\t\t\t\t\trootPropertyValue: rootPropertyValue,\r\n\t\t\t\t\t\t\t\tstartValue: startValue,\r\n\t\t\t\t\t\t\t\tcurrentValue: startValue,\r\n\t\t\t\t\t\t\t\tendValue: endValue,\r\n\t\t\t\t\t\t\t\tunitType: endValueUnitType,\r\n\t\t\t\t\t\t\t\teasing: easing\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t\tif (pattern) {\r\n\t\t\t\t\t\t\t\ttweensContainer[property].pattern = pattern;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tif (Velocity.debug) {\r\n\t\t\t\t\t\t\t\tconsole.log(\"tweensContainer (\" + property + \"): \" + JSON.stringify(tweensContainer[property]), element);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t/* Create a tween out of each property, and append its associated data to tweensContainer. */\r\n\t\t\t\t\t\tfor (var property in propertiesMap) {\r\n\r\n\t\t\t\t\t\t\tif (!propertiesMap.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t/* The original property name's format must be used for the parsePropertyValue() lookup,\r\n\t\t\t\t\t\t\t but we then use its camelCase styling to normalize it for manipulation. */\r\n\t\t\t\t\t\t\tvar propertyName = CSS.Names.camelCase(property),\r\n\t\t\t\t\t\t\t\t\tvalueData = parsePropertyValue(propertiesMap[property]);\r\n\r\n\t\t\t\t\t\t\t/* Find shorthand color properties that have been passed a hex string. */\r\n\t\t\t\t\t\t\t/* Would be quicker to use CSS.Lists.colors.includes() if possible */\r\n\t\t\t\t\t\t\tif (_inArray(CSS.Lists.colors, propertyName)) {\r\n\t\t\t\t\t\t\t\t/* Parse the value data for each shorthand. */\r\n\t\t\t\t\t\t\t\tvar endValue = valueData[0],\r\n\t\t\t\t\t\t\t\t\t\teasing = valueData[1],\r\n\t\t\t\t\t\t\t\t\t\tstartValue = valueData[2];\r\n\r\n\t\t\t\t\t\t\t\tif (CSS.RegEx.isHex.test(endValue)) {\r\n\t\t\t\t\t\t\t\t\t/* Convert the hex strings into their RGB component arrays. */\r\n\t\t\t\t\t\t\t\t\tvar colorComponents = [\"Red\", \"Green\", \"Blue\"],\r\n\t\t\t\t\t\t\t\t\t\t\tendValueRGB = CSS.Values.hexToRgb(endValue),\r\n\t\t\t\t\t\t\t\t\t\t\tstartValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;\r\n\r\n\t\t\t\t\t\t\t\t\t/* Inject the RGB component tweens into propertiesMap. */\r\n\t\t\t\t\t\t\t\t\tfor (var i = 0; i < colorComponents.length; i++) {\r\n\t\t\t\t\t\t\t\t\t\tvar dataArray = [endValueRGB[i]];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (easing) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(easing);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (startValueRGB !== undefined) {\r\n\t\t\t\t\t\t\t\t\t\t\tdataArray.push(startValueRGB[i]);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tfixPropertyValue(propertyName + colorComponents[i], dataArray);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t/* If we have replaced a shortcut color value then don't update the standard property name */\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\tfixPropertyValue(propertyName, valueData);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Along with its property data, store a reference to the element itself onto tweensContainer. */\r\n\t\t\t\t\t\ttweensContainer.element = element;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/*****************\r\n\t\t\t\t\t Call Push\r\n\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not\r\n\t\t\t\t\t being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */\r\n\t\t\t\t\tif (tweensContainer.element) {\r\n\t\t\t\t\t\t/* Apply the \"velocity-animating\" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.addClass(element, \"velocity-animating\");\r\n\r\n\t\t\t\t\t\t/* The call array houses the tweensContainers for each element being animated in the current call. */\r\n\t\t\t\t\t\tcall.push(tweensContainer);\r\n\r\n\t\t\t\t\t\tdata = Data(element);\r\n\r\n\t\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\t\t/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */\r\n\t\t\t\t\t\t\tif (opts.queue === \"\") {\r\n\r\n\t\t\t\t\t\t\t\tdata.tweensContainer = tweensContainer;\r\n\t\t\t\t\t\t\t\tdata.opts = opts;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Switch on the element's animating flag. */\r\n\t\t\t\t\t\t\tdata.isAnimating = true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Once the final element in this call's element set has been processed, push the call array onto\r\n\t\t\t\t\t\t Velocity.State.calls for the animation tick to immediately begin processing. */\r\n\t\t\t\t\t\tif (elementsIndex === elementsLength - 1) {\r\n\t\t\t\t\t\t\t/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.\r\n\t\t\t\t\t\t\t Anything on this call container is subjected to tick() processing. */\r\n\t\t\t\t\t\t\tVelocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);\r\n\r\n\t\t\t\t\t\t\t/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */\r\n\t\t\t\t\t\t\tif (Velocity.State.isTicking === false) {\r\n\t\t\t\t\t\t\t\tVelocity.State.isTicking = true;\r\n\r\n\t\t\t\t\t\t\t\t/* Start the tick loop. */\r\n\t\t\t\t\t\t\t\ttick();\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\telementsIndex++;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* When the queue option is set to false, the call skips the element's queue and fires immediately. */\r\n\t\t\t\tif (opts.queue === false) {\r\n\t\t\t\t\t/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),\r\n\t\t\t\t\t we manually inject the delay property here with an explicit setTimeout. */\r\n\t\t\t\t\tif (opts.delay) {\r\n\r\n\t\t\t\t\t\t/* Temporarily store delayed elements to facilitate access for global pause/resume */\r\n\t\t\t\t\t\tvar callIndex = Velocity.State.delayedElements.count++;\r\n\t\t\t\t\t\tVelocity.State.delayedElements[callIndex] = element;\r\n\r\n\t\t\t\t\t\tvar delayComplete = (function(index) {\r\n\t\t\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\t\t\t/* Clear the temporary element */\r\n\t\t\t\t\t\t\t\tVelocity.State.delayedElements[index] = false;\r\n\r\n\t\t\t\t\t\t\t\t/* Finally, issue the call */\r\n\t\t\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t})(callIndex);\r\n\r\n\t\t\t\t\t\tData(element).delayBegin = (new Date()).getTime();\r\n\t\t\t\t\t\tData(element).delay = parseFloat(opts.delay);\r\n\t\t\t\t\t\tData(element).delayTimer = {\r\n\t\t\t\t\t\t\tsetTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),\r\n\t\t\t\t\t\t\tnext: delayComplete\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tbuildQueue();\r\n\t\t\t\t\t}\r\n\t\t\t\t\t/* Otherwise, the call undergoes element queueing as normal. */\r\n\t\t\t\t\t/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$.queue(element, opts.queue, function(next, clearQueue) {\r\n\t\t\t\t\t\t/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,\r\n\t\t\t\t\t\t so it's fine if this is repeatedly triggered for each element in the associated call.) */\r\n\t\t\t\t\t\tif (clearQueue === true) {\r\n\t\t\t\t\t\t\tif (promiseData.promise) {\r\n\t\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t/* Do not continue with animation queueing. */\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.\r\n\t\t\t\t\t\t See completeCall() for further details. */\r\n\t\t\t\t\t\tVelocity.velocityQueueEntryFlag = true;\r\n\r\n\t\t\t\t\t\tbuildQueue(next);\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Auto-Dequeuing\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element\r\n\t\t\t\t must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking\r\n\t\t\t\t for the \"inprogress\" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's\r\n\t\t\t\t queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's\r\n\t\t\t\t first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */\r\n\t\t\t\t/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until\r\n\t\t\t\t each one of the elements in the set has reached the end of its individually pre-existing queue chain. */\r\n\t\t\t\t/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.\r\n\t\t\t\t Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */\r\n\t\t\t\tif ((opts.queue === \"\" || opts.queue === \"fx\") && $.queue(element)[0] !== \"inprogress\") {\r\n\t\t\t\t\t$.dequeue(element);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/**************************\r\n\t\t\t Element Set Iteration\r\n\t\t\t **************************/\r\n\r\n\t\t\t/* If the \"nodeType\" property exists on the elements variable, we're animating a single element.\r\n\t\t\t Place it in an array so that $.each() can iterate over it. */\r\n\t\t\t$.each(elements, function(i, element) {\r\n\t\t\t\t/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */\r\n\t\t\t\tif (Type.isNode(element)) {\r\n\t\t\t\t\tprocessElement(element, i);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\t/******************\r\n\t\t\t Option: Loop\r\n\t\t\t ******************/\r\n\r\n\t\t\t/* The loop option accepts an integer indicating how many times the element should loop between the values in the\r\n\t\t\t current call's properties map and the element's property values prior to this call. */\r\n\t\t\t/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs\r\n\t\t\t to undergo its queue insertion prior to the loop option generating its series of constituent \"reverse\" calls,\r\n\t\t\t which chain after the current call. Two reverse calls (two \"alternations\") constitute one loop. */\r\n\t\t\topts = $.extend({}, Velocity.defaults, options);\r\n\t\t\topts.loop = parseInt(opts.loop, 10);\r\n\t\t\tvar reverseCallsCount = (opts.loop * 2) - 1;\r\n\r\n\t\t\tif (opts.loop) {\r\n\t\t\t\t/* Double the loop count to convert it into its appropriate number of \"reverse\" calls.\r\n\t\t\t\t Subtract 1 from the resulting value since the current call is included in the total alternation count. */\r\n\t\t\t\tfor (var x = 0; x < reverseCallsCount; x++) {\r\n\t\t\t\t\t/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object\r\n\t\t\t\t\t isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse\r\n\t\t\t\t\t call so that the delay logic that occurs inside *Pre-Queueing* can process it. */\r\n\t\t\t\t\tvar reverseOptions = {\r\n\t\t\t\t\t\tdelay: opts.delay,\r\n\t\t\t\t\t\tprogress: opts.progress\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* If a complete callback was passed into this call, transfer it to the loop redirect's final \"reverse\" call\r\n\t\t\t\t\t so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */\r\n\t\t\t\t\tif (x === reverseCallsCount - 1) {\r\n\t\t\t\t\t\treverseOptions.display = opts.display;\r\n\t\t\t\t\t\treverseOptions.visibility = opts.visibility;\r\n\t\t\t\t\t\treverseOptions.complete = opts.complete;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tanimate(elements, \"reverse\", reverseOptions);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/***************\r\n\t\t\t Chaining\r\n\t\t\t ***************/\r\n\r\n\t\t\t/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */\r\n\t\t\treturn getChain();\r\n\t\t};\r\n\r\n\t\t/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */\r\n\t\tVelocity = $.extend(animate, Velocity);\r\n\t\t/* For legacy support, also expose the literal animate method. */\r\n\t\tVelocity.animate = animate;\r\n\r\n\t\t/**************\r\n\t\t Timing\r\n\t\t **************/\r\n\r\n\t\t/* Ticker function. */\r\n\t\tvar ticker = window.requestAnimationFrame || rAFShim;\r\n\r\n\t\t/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.\r\n\t\t To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile\r\n\t\t devices to avoid wasting battery power on inactive tabs. */\r\n\t\t/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */\r\n\t\tif (!Velocity.State.isMobile && document.hidden !== undefined) {\r\n\t\t\tvar updateTicker = function() {\r\n\t\t\t\t/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */\r\n\t\t\t\tif (document.hidden) {\r\n\t\t\t\t\tticker = function(callback) {\r\n\t\t\t\t\t\t/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */\r\n\t\t\t\t\t\treturn setTimeout(function() {\r\n\t\t\t\t\t\t\tcallback(true);\r\n\t\t\t\t\t\t}, 16);\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\t/* The rAF loop has been paused by the browser, so we manually restart the tick. */\r\n\t\t\t\t\ttick();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tticker = window.requestAnimationFrame || rAFShim;\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\t/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */\r\n\t\t\tupdateTicker();\r\n\r\n\t\t\t/* And then run check again every time visibility changes */\r\n\t\t\tdocument.addEventListener(\"visibilitychange\", updateTicker);\r\n\t\t}\r\n\r\n\t\t/************\r\n\t\t Tick\r\n\t\t ************/\r\n\r\n\t\t/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */\r\n\t\tfunction tick(timestamp) {\r\n\t\t\t/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.\r\n\t\t\t We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever\r\n\t\t\t the browser's next tick sync time occurs, which results in the first elements subjected to Velocity\r\n\t\t\t calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore\r\n\t\t\t the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated\r\n\t\t\t by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */\r\n\t\t\tif (timestamp) {\r\n\t\t\t\t/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is\r\n\t\t\t\t under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.\r\n\t\t\t\t We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */\r\n\t\t\t\tvar timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();\r\n\r\n\t\t\t\t/********************\r\n\t\t\t\t Call Iteration\r\n\t\t\t\t ********************/\r\n\r\n\t\t\t\tvar callsLength = Velocity.State.calls.length;\r\n\r\n\t\t\t\t/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)\r\n\t\t\t\t when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation\r\n\t\t\t\t has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */\r\n\t\t\t\tif (callsLength > 10000) {\r\n\t\t\t\t\tVelocity.State.calls = compactSparseArray(Velocity.State.calls);\r\n\t\t\t\t\tcallsLength = Velocity.State.calls.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* Iterate through each active call. */\r\n\t\t\t\tfor (var i = 0; i < callsLength; i++) {\r\n\t\t\t\t\t/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */\r\n\t\t\t\t\tif (!Velocity.State.calls[i]) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/************************\r\n\t\t\t\t\t Call-Wide Variables\r\n\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\tvar callContainer = Velocity.State.calls[i],\r\n\t\t\t\t\t\t\tcall = callContainer[0],\r\n\t\t\t\t\t\t\topts = callContainer[2],\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3],\r\n\t\t\t\t\t\t\tfirstTick = !timeStart,\r\n\t\t\t\t\t\t\ttweenDummyValue = null,\r\n\t\t\t\t\t\t\tpauseObject = callContainer[5],\r\n\t\t\t\t\t\t\tmillisecondsEllapsed = callContainer[6];\r\n\r\n\r\n\r\n\t\t\t\t\t/* If timeStart is undefined, then this is the first time that this call has been processed by tick().\r\n\t\t\t\t\t We assign timeStart now so that its value is as close to the real animation start time as possible.\r\n\t\t\t\t\t (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay\r\n\t\t\t\t\t between that time and now would cause the first few frames of the tween to be skipped since\r\n\t\t\t\t\t percentComplete is calculated relative to timeStart.) */\r\n\t\t\t\t\t/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the\r\n\t\t\t\t\t first tick iteration isn't wasted by animating at 0% tween completion, which would produce the\r\n\t\t\t\t\t same style value as the element's current value. */\r\n\t\t\t\t\tif (!timeStart) {\r\n\t\t\t\t\t\ttimeStart = Velocity.State.calls[i][3] = timeCurrent - 16;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If a pause object is present, skip processing unless it has been set to resume */\r\n\t\t\t\t\tif (pauseObject) {\r\n\t\t\t\t\t\tif (pauseObject.resume === true) {\r\n\t\t\t\t\t\t\t/* Update the time start to accomodate the paused completion amount */\r\n\t\t\t\t\t\t\ttimeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);\r\n\r\n\t\t\t\t\t\t\t/* Remove pause object after processing */\r\n\t\t\t\t\t\t\tcallContainer[5] = null;\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tmillisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;\r\n\r\n\t\t\t\t\t/* The tween's completion percentage is relative to the tween's start time, not the tween's start value\r\n\t\t\t\t\t (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).\r\n\t\t\t\t\t Accordingly, we ensure that percentComplete does not exceed 1. */\r\n\t\t\t\t\tvar percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);\r\n\r\n\t\t\t\t\t/**********************\r\n\t\t\t\t\t Element Iteration\r\n\t\t\t\t\t **********************/\r\n\r\n\t\t\t\t\t/* For every call, iterate through each of the elements in its set. */\r\n\t\t\t\t\tfor (var j = 0, callLength = call.length; j < callLength; j++) {\r\n\t\t\t\t\t\tvar tweensContainer = call[j],\r\n\t\t\t\t\t\t\t\telement = tweensContainer.element;\r\n\r\n\t\t\t\t\t\t/* Check to see if this element has been deleted midway through the animation by checking for the\r\n\t\t\t\t\t\t continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */\r\n\t\t\t\t\t\tif (!Data(element)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tvar transformPropertyExists = false;\r\n\r\n\t\t\t\t\t\t/**********************************\r\n\t\t\t\t\t\t Display & Visibility Toggling\r\n\t\t\t\t\t\t **********************************/\r\n\r\n\t\t\t\t\t\t/* If the display option is set to non-\"none\", set it upfront so that the element can become visible before tweening begins.\r\n\t\t\t\t\t\t (Otherwise, display's \"none\" value is set in completeCall() once the animation has completed.) */\r\n\t\t\t\t\t\tif (opts.display !== undefined && opts.display !== null && opts.display !== \"none\") {\r\n\t\t\t\t\t\t\tif (opts.display === \"flex\") {\r\n\t\t\t\t\t\t\t\tvar flexValues = [\"-webkit-box\", \"-moz-box\", \"-ms-flexbox\", \"-webkit-flex\"];\r\n\r\n\t\t\t\t\t\t\t\t$.each(flexValues, function(i, flexValue) {\r\n\t\t\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", flexValue);\r\n\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Same goes with the visibility option, but its \"none\" equivalent is \"hidden\". */\r\n\t\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\r\n\t\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/************************\r\n\t\t\t\t\t\t Property Iteration\r\n\t\t\t\t\t\t ************************/\r\n\r\n\t\t\t\t\t\t/* For every element, iterate through each property. */\r\n\t\t\t\t\t\tfor (var property in tweensContainer) {\r\n\t\t\t\t\t\t\t/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */\r\n\t\t\t\t\t\t\tif (tweensContainer.hasOwnProperty(property) && property !== \"element\") {\r\n\t\t\t\t\t\t\t\tvar tween = tweensContainer[property],\r\n\t\t\t\t\t\t\t\t\t\tcurrentValue,\r\n\t\t\t\t\t\t\t\t\t\t/* Easing can either be a pre-genereated function or a string that references a pre-registered easing\r\n\t\t\t\t\t\t\t\t\t\t on the Velocity.Easings object. In either case, return the appropriate easing *function*. */\r\n\t\t\t\t\t\t\t\t\t\teasing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;\r\n\r\n\t\t\t\t\t\t\t\t/******************************\r\n\t\t\t\t\t\t\t\t Current Value Calculation\r\n\t\t\t\t\t\t\t\t ******************************/\r\n\r\n\t\t\t\t\t\t\t\tif (Type.isString(tween.pattern)) {\r\n\t\t\t\t\t\t\t\t\tvar patternReplace = percentComplete === 1 ?\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar result = tween.endValue[index];\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t} :\r\n\t\t\t\t\t\t\t\t\t\t\tfunction($0, index, round) {\r\n\t\t\t\t\t\t\t\t\t\t\t\tvar startValue = tween.startValue[index],\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttweenDelta = tween.endValue[index] - startValue,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tresult = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\treturn round ? Math.round(result) : result;\r\n\t\t\t\t\t\t\t\t\t\t\t};\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.pattern.replace(/{(\\d+)(!)?}/g, patternReplace);\r\n\t\t\t\t\t\t\t\t} else if (percentComplete === 1) {\r\n\t\t\t\t\t\t\t\t\t/* If this is the last tick pass (if we've reached 100% completion for this tween),\r\n\t\t\t\t\t\t\t\t\t ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.endValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/* Otherwise, calculate currentValue based on the current delta from startValue. */\r\n\t\t\t\t\t\t\t\t\tvar tweenDelta = tween.endValue - tween.startValue;\r\n\r\n\t\t\t\t\t\t\t\t\tcurrentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));\r\n\t\t\t\t\t\t\t\t\t/* If no value change is occurring, don't proceed with DOM updating. */\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif (!firstTick && (currentValue === tween.currentValue)) {\r\n\t\t\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\ttween.currentValue = currentValue;\r\n\r\n\t\t\t\t\t\t\t\t/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that\r\n\t\t\t\t\t\t\t\t it can be passed into the progress callback. */\r\n\t\t\t\t\t\t\t\tif (property === \"tween\") {\r\n\t\t\t\t\t\t\t\t\ttweenDummyValue = currentValue;\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t/******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part I\r\n\t\t\t\t\t\t\t\t\t ******************/\r\n\t\t\t\t\t\t\t\t\tvar hookRoot;\r\n\r\n\t\t\t\t\t\t\t\t\t/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used\r\n\t\t\t\t\t\t\t\t\t for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated\r\n\t\t\t\t\t\t\t\t\t rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's\r\n\t\t\t\t\t\t\t\t\t updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that\r\n\t\t\t\t\t\t\t\t\t subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\thookRoot = CSS.Hooks.getRoot(property);\r\n\r\n\t\t\t\t\t\t\t\t\t\tvar rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];\r\n\r\n\t\t\t\t\t\t\t\t\t\tif (rootPropertyValueCache) {\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue = rootPropertyValueCache;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/*****************\r\n\t\t\t\t\t\t\t\t\t DOM Update\r\n\t\t\t\t\t\t\t\t\t *****************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */\r\n\t\t\t\t\t\t\t\t\t/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */\r\n\t\t\t\t\t\t\t\t\tvar adjustedSetData = CSS.setPropertyValue(element, /* SET */\r\n\t\t\t\t\t\t\t\t\t\t\tproperty,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? \"\" : tween.unitType),\r\n\t\t\t\t\t\t\t\t\t\t\ttween.rootPropertyValue,\r\n\t\t\t\t\t\t\t\t\t\t\ttween.scrollData);\r\n\r\n\t\t\t\t\t\t\t\t\t/*******************\r\n\t\t\t\t\t\t\t\t\t Hooks: Part II\r\n\t\t\t\t\t\t\t\t\t *******************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */\r\n\t\t\t\t\t\t\t\t\tif (CSS.Hooks.registered[property]) {\r\n\t\t\t\t\t\t\t\t\t\t/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */\r\n\t\t\t\t\t\t\t\t\t\tif (CSS.Normalizations.registered[hookRoot]) {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot](\"extract\", null, adjustedSetData[1]);\r\n\t\t\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\t\t\tData(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t/***************\r\n\t\t\t\t\t\t\t\t\t Transforms\r\n\t\t\t\t\t\t\t\t\t ***************/\r\n\r\n\t\t\t\t\t\t\t\t\t/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */\r\n\t\t\t\t\t\t\t\t\tif (adjustedSetData[0] === \"transform\") {\r\n\t\t\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/****************\r\n\t\t\t\t\t\t mobileHA\r\n\t\t\t\t\t\t ****************/\r\n\r\n\t\t\t\t\t\t/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.\r\n\t\t\t\t\t\t It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\t/* Don't set the null transform hack if we've already done so. */\r\n\t\t\t\t\t\t\tif (Data(element).transformCache.translate3d === undefined) {\r\n\t\t\t\t\t\t\t\t/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */\r\n\t\t\t\t\t\t\t\tData(element).transformCache.translate3d = \"(0px, 0px, 0px)\";\r\n\r\n\t\t\t\t\t\t\t\ttransformPropertyExists = true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (transformPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* The non-\"none\" display value is only applied to an element once -- when its associated call is first ticked through.\r\n\t\t\t\t\t Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */\r\n\t\t\t\t\tif (opts.display !== undefined && opts.display !== \"none\") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].display = false;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (opts.visibility !== undefined && opts.visibility !== \"hidden\") {\r\n\t\t\t\t\t\tVelocity.State.calls[i][2].visibility = false;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */\r\n\t\t\t\t\tif (opts.progress) {\r\n\t\t\t\t\t\topts.progress.call(callContainer[1],\r\n\t\t\t\t\t\t\t\tcallContainer[1],\r\n\t\t\t\t\t\t\t\tpercentComplete,\r\n\t\t\t\t\t\t\t\tMath.max(0, (timeStart + opts.duration) - timeCurrent),\r\n\t\t\t\t\t\t\t\ttimeStart,\r\n\t\t\t\t\t\t\t\ttweenDummyValue);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */\r\n\t\t\t\t\tif (percentComplete === 1) {\r\n\t\t\t\t\t\tcompleteCall(i);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */\r\n\t\t\tif (Velocity.State.isTicking) {\r\n\t\t\t\tticker(tick);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/**********************\r\n\t\t Call Completion\r\n\t\t **********************/\r\n\r\n\t\t/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */\r\n\t\tfunction completeCall(callIndex, isStopped) {\r\n\t\t\t/* Ensure the call exists. */\r\n\t\t\tif (!Velocity.State.calls[callIndex]) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\r\n\t\t\t/* Pull the metadata from the call. */\r\n\t\t\tvar call = Velocity.State.calls[callIndex][0],\r\n\t\t\t\t\telements = Velocity.State.calls[callIndex][1],\r\n\t\t\t\t\topts = Velocity.State.calls[callIndex][2],\r\n\t\t\t\t\tresolver = Velocity.State.calls[callIndex][4];\r\n\r\n\t\t\tvar remainingCallsExist = false;\r\n\r\n\t\t\t/*************************\r\n\t\t\t Element Finalization\r\n\t\t\t *************************/\r\n\r\n\t\t\tfor (var i = 0, callLength = call.length; i < callLength; i++) {\r\n\t\t\t\tvar element = call[i].element;\r\n\r\n\t\t\t\t/* If the user set display to \"none\" (intending to hide the element), set it now that the animation has completed. */\r\n\t\t\t\t/* Note: display:none isn't set when calls are manually stopped (via Velocity(\"stop\"). */\r\n\t\t\t\t/* Note: Display gets ignored with \"reverse\" calls and infinite loops, since this behavior would be undesirable. */\r\n\t\t\t\tif (!isStopped && !opts.loop) {\r\n\t\t\t\t\tif (opts.display === \"none\") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"display\", opts.display);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (opts.visibility === \"hidden\") {\r\n\t\t\t\t\t\tCSS.setPropertyValue(element, \"visibility\", opts.visibility);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If the element's queue is empty (if only the \"inprogress\" item is left at position 0) or if its queue is about to run\r\n\t\t\t\t a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter\r\n\t\t\t\t an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,\r\n\t\t\t\t we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag\r\n\t\t\t\t is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */\r\n\t\t\t\tvar data = Data(element);\r\n\r\n\t\t\t\tif (opts.loop !== true && ($.queue(element)[1] === undefined || !/\\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {\r\n\t\t\t\t\t/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */\r\n\t\t\t\t\tif (data) {\r\n\t\t\t\t\t\tdata.isAnimating = false;\r\n\t\t\t\t\t\t/* Clear the element's rootPropertyValueCache, which will become stale. */\r\n\t\t\t\t\t\tdata.rootPropertyValueCache = {};\r\n\r\n\t\t\t\t\t\tvar transformHAPropertyExists = false;\r\n\t\t\t\t\t\t/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */\r\n\t\t\t\t\t\t$.each(CSS.Lists.transforms3D, function(i, transformName) {\r\n\t\t\t\t\t\t\tvar defaultValue = /^scale/.test(transformName) ? 1 : 0,\r\n\t\t\t\t\t\t\t\t\tcurrentValue = data.transformCache[transformName];\r\n\r\n\t\t\t\t\t\t\tif (data.transformCache[transformName] !== undefined && new RegExp(\"^\\\\(\" + defaultValue + \"[^.]\").test(currentValue)) {\r\n\t\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\r\n\t\t\t\t\t\t\t\tdelete data.transformCache[transformName];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\r\n\t\t\t\t\t\t/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */\r\n\t\t\t\t\t\tif (opts.mobileHA) {\r\n\t\t\t\t\t\t\ttransformHAPropertyExists = true;\r\n\t\t\t\t\t\t\tdelete data.transformCache.translate3d;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Flush the subproperty removals to the DOM. */\r\n\t\t\t\t\t\tif (transformHAPropertyExists) {\r\n\t\t\t\t\t\t\tCSS.flushTransformCache(element);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t/* Remove the \"velocity-animating\" indicator class. */\r\n\t\t\t\t\t\tCSS.Values.removeClass(element, \"velocity-animating\");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*********************\r\n\t\t\t\t Option: Complete\r\n\t\t\t\t *********************/\r\n\r\n\t\t\t\t/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */\r\n\t\t\t\t/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity(\"stop\"). */\r\n\t\t\t\tif (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {\r\n\t\t\t\t\t/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\topts.complete.call(elements, elements);\r\n\t\t\t\t\t} catch (error) {\r\n\t\t\t\t\t\tsetTimeout(function() {\r\n\t\t\t\t\t\t\tthrow error;\r\n\t\t\t\t\t\t}, 1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/**********************\r\n\t\t\t\t Promise Resolving\r\n\t\t\t\t **********************/\r\n\r\n\t\t\t\t/* Note: Infinite loops don't return promises. */\r\n\t\t\t\tif (resolver && opts.loop !== true) {\r\n\t\t\t\t\tresolver(elements);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/****************************\r\n\t\t\t\t Option: Loop (Infinite)\r\n\t\t\t\t ****************************/\r\n\r\n\t\t\t\tif (data && opts.loop === true && !isStopped) {\r\n\t\t\t\t\t/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable\r\n\t\t\t\t\t continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */\r\n\t\t\t\t\t$.each(data.tweensContainer, function(propertyName, tweenContainer) {\r\n\t\t\t\t\t\tif (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {\r\n\t\t\t\t\t\t\tvar oldStartValue = tweenContainer.startValue;\r\n\r\n\t\t\t\t\t\t\ttweenContainer.startValue = tweenContainer.endValue;\r\n\t\t\t\t\t\t\ttweenContainer.endValue = oldStartValue;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tif (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === \"%\") {\r\n\t\t\t\t\t\t\ttweenContainer.endValue = 0;\r\n\t\t\t\t\t\t\ttweenContainer.startValue = 100;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\r\n\t\t\t\t\tVelocity(element, \"reverse\", {loop: true, delay: opts.delay});\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/***************\r\n\t\t\t\t Dequeueing\r\n\t\t\t\t ***************/\r\n\r\n\t\t\t\t/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),\r\n\t\t\t\t which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,\r\n\t\t\t\t $.dequeue() must still be called in order to completely clear jQuery's animation queue. */\r\n\t\t\t\tif (opts.queue !== false) {\r\n\t\t\t\t\t$.dequeue(element, opts.queue);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t/************************\r\n\t\t\t Calls Array Cleanup\r\n\t\t\t ************************/\r\n\r\n\t\t\t/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().\r\n\t\t\t (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */\r\n\t\t\tVelocity.State.calls[callIndex] = false;\r\n\r\n\t\t\t/* Iterate through the calls array to determine if this was the final in-progress animation.\r\n\t\t\t If so, set a flag to end ticking and clear the calls array. */\r\n\t\t\tfor (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {\r\n\t\t\t\tif (Velocity.State.calls[j] !== false) {\r\n\t\t\t\t\tremainingCallsExist = true;\r\n\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (remainingCallsExist === false) {\r\n\t\t\t\t/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */\r\n\t\t\t\tVelocity.State.isTicking = false;\r\n\r\n\t\t\t\t/* Clear the calls array so that its length is reset. */\r\n\t\t\t\tdelete Velocity.State.calls;\r\n\t\t\t\tVelocity.State.calls = [];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/******************\r\n\t\t Frameworks\r\n\t\t ******************/\r\n\r\n\t\t/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.\r\n\t\t If either framework is loaded, register a \"velocity\" extension pointing to Velocity's core animate() method.  Velocity\r\n\t\t also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are\r\n\t\t accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn\r\n\t\t (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */\r\n\t\tglobal.Velocity = Velocity;\r\n\r\n\t\tif (global !== window) {\r\n\t\t\t/* Assign the element function to Velocity's core animate() method. */\r\n\t\t\tglobal.fn.velocity = animate;\r\n\t\t\t/* Assign the object function's defaults to Velocity's global defaults object. */\r\n\t\t\tglobal.fn.velocity.defaults = Velocity.defaults;\r\n\t\t}\r\n\r\n\t\t/***********************\r\n\t\t Packaged Redirects\r\n\t\t ***********************/\r\n\r\n\t\t/* slideUp, slideDown */\r\n\t\t$.each([\"Down\", \"Up\"], function(i, direction) {\r\n\t\t\tVelocity.Redirects[\"slide\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tbegin = opts.begin,\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tinlineValues = {},\r\n\t\t\t\t\t\tcomputedValues = {height: \"\", marginTop: \"\", marginBottom: \"\", paddingTop: \"\", paddingBottom: \"\"};\r\n\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\t/* Show the element before slideDown begins and hide the element after slideUp completes. */\r\n\t\t\t\t\t/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */\r\n\t\t\t\t\topts.display = (direction === \"Down\" ? (Velocity.CSS.Values.getDisplayType(element) === \"inline\" ? \"inline-block\" : \"block\") : \"none\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\topts.begin = function() {\r\n\t\t\t\t\t/* If the user passed in a begin callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === 0 && begin) {\r\n\t\t\t\t\t\tbegin.call(elements, elements);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */\r\n\t\t\t\t\tfor (var property in computedValues) {\r\n\t\t\t\t\t\tif (!computedValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tinlineValues[property] = element.style[property];\r\n\r\n\t\t\t\t\t\t/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,\r\n\t\t\t\t\t\t use forcefeeding to start from computed values and animate down to 0. */\r\n\t\t\t\t\t\tvar propertyValue = CSS.getPropertyValue(element, property);\r\n\t\t\t\t\t\tcomputedValues[property] = (direction === \"Down\") ? [propertyValue, 0] : [0, propertyValue];\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* Force vertical overflow content to clip so that sliding works as expected. */\r\n\t\t\t\t\tinlineValues.overflow = element.style.overflow;\r\n\t\t\t\t\telement.style.overflow = \"hidden\";\r\n\t\t\t\t};\r\n\r\n\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t/* Reset element to its pre-slide inline values once its slide animation is complete. */\r\n\t\t\t\t\tfor (var property in inlineValues) {\r\n\t\t\t\t\t\tif (inlineValues.hasOwnProperty(property)) {\r\n\t\t\t\t\t\t\telement.style[property] = inlineValues[property];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/* If the user passed in a complete callback, fire it now. */\r\n\t\t\t\t\tif (elementsIndex === elementsSize - 1) {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\r\n\t\t\t\tVelocity(element, computedValues, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\t/* fadeIn, fadeOut */\r\n\t\t$.each([\"In\", \"Out\"], function(i, direction) {\r\n\t\t\tVelocity.Redirects[\"fade\" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {\r\n\t\t\t\tvar opts = $.extend({}, options),\r\n\t\t\t\t\t\tcomplete = opts.complete,\r\n\t\t\t\t\t\tpropertiesMap = {opacity: (direction === \"In\") ? 1 : 0};\r\n\r\n\t\t\t\t/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering\r\n\t\t\t\t callbacks by firing them only when the final element has been reached. */\r\n\t\t\t\tif (elementsIndex !== 0) {\r\n\t\t\t\t\topts.begin = null;\r\n\t\t\t\t}\r\n\t\t\t\tif (elementsIndex !== elementsSize - 1) {\r\n\t\t\t\t\topts.complete = null;\r\n\t\t\t\t} else {\r\n\t\t\t\t\topts.complete = function() {\r\n\t\t\t\t\t\tif (complete) {\r\n\t\t\t\t\t\t\tcomplete.call(elements, elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (promiseData) {\r\n\t\t\t\t\t\t\tpromiseData.resolver(elements);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/* If a display was passed in, use it. Otherwise, default to \"none\" for fadeOut or the element-specific default for fadeIn. */\r\n\t\t\t\t/* Note: We allow users to pass in \"null\" to skip display setting altogether. */\r\n\t\t\t\tif (opts.display === undefined) {\r\n\t\t\t\t\topts.display = (direction === \"In\" ? \"auto\" : \"none\");\r\n\t\t\t\t}\r\n\r\n\t\t\t\tVelocity(this, propertiesMap, opts);\r\n\t\t\t};\r\n\t\t});\r\n\r\n\t\treturn Velocity;\r\n\t}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));\r\n}));\r\n\r\n/******************\r\n Known Issues\r\n ******************/\r\n\r\n/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.\r\n Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties\r\n will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */\r\n\n\n//# sourceURL=webpack://HsNavScroller/./node_modules/velocity-animate/velocity.js?");

/***/ }),

/***/ "./src/js/hs-nav-scroller.js":
/*!***********************************!*\
  !*** ./src/js/hs-nav-scroller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HsNavScroller; });\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! velocity-animate */ \"./node_modules/velocity-animate/velocity.js\");\n/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSNavScroller Plugin\n* @version: 2.0.0 (Sat, 06 Jul 2021)\n* @requires: Velocity 1.5.2 or later\n* @author: HtmlStream\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\nvar dataAttributeName = 'data-hs-nav-scroller-options';\nvar defaults = {\n  type: 'horizontal',\n  target: '.active',\n  offset: 0,\n  delay: 20\n};\n\nvar HsNavScroller = /*#__PURE__*/function () {\n  function HsNavScroller(el, options, id) {\n    _classCallCheck(this, HsNavScroller);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HsNavScroller, [{\n    key: \"_init\",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        if (_options.type == 'vertical') {\n          velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_$el, 'scroll', {\n            container: _$el,\n            offset: _$el.querySelector(_options.target).offsetTop - _options.offset,\n            duration: _options.delay,\n            axis: 'y'\n          });\n        } else if (_options.type == 'horizontal') {\n          _options.nav = _$el.querySelector('.nav');\n          _options.prev = _$el.querySelector('.hs-nav-scroller-arrow-prev');\n          _options.next = _$el.querySelector('.hs-nav-scroller-arrow-next');\n          _options.activeElementLeftPosition = _options.nav.querySelector(_options.target).offsetLeft;\n          _options.scrollMaxLeft = parseInt((_options.nav.scrollWidth.toFixed() - _options.nav.clientWidth).toFixed());\n          _options.scrollPosition = _options.nav.scrollLeft;\n\n          if (_options.scrollPosition <= 0) {\n            _options.prev.style.display = 'none';\n          }\n\n          if (_options.scrollMaxLeft <= 0) {\n            _options.next.style.display = 'none';\n          }\n\n          that.onResize(_$el, _options);\n          window.addEventListener('resize', function () {\n            return that.onResize(_$el, _options);\n          });\n\n          var navRect = _options.nav.getBoundingClientRect(),\n              prevRect = _options.prev.getBoundingClientRect(),\n              nextRect = _options.next.getBoundingClientRect();\n\n          if (_options.activeElementLeftPosition > navRect.width / 2) {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.activeElementLeftPosition - _options.offset - prevRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          }\n\n          _options.next.addEventListener('click', function () {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.scrollPosition + _options.nav.clientWidth - nextRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          });\n\n          _options.prev.addEventListener('click', function () {\n            velocity_animate__WEBPACK_IMPORTED_MODULE_0___default()(_options.nav, 'scroll', {\n              container: _options.nav,\n              offset: _options.scrollPosition - _options.nav.clientWidth + prevRect.width,\n              duration: _options.delay,\n              axis: 'x'\n            });\n          });\n\n          _options.nav.addEventListener('scroll', function () {\n            var scrollMaxLeft = (parseInt(_options.nav.scrollWidth.toFixed()) - parseInt(_options.nav.clientWidth)).toFixed(),\n                scrollPosition = _options.nav.scrollLeft; // Hide or Show Back Arrow\n\n            if (scrollPosition <= 0) {\n              _options.prev.style.display = 'none';\n            } else {\n              _options.prev.style.display = 'flex';\n            } // Hide or Show Next Arrow\n\n\n            if (scrollPosition + 10 >= parseInt(scrollMaxLeft)) {\n              _options.next.style.display = 'none';\n            } else {\n              _options.next.style.display = 'flex';\n            }\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize($el, settings) {\n      var scrollMaxLeft = parseInt(settings.nav.scrollWidth.toFixed()) - parseInt(settings.nav.clientWidth.toFixed()),\n          scrollPosition = settings.nav.scrollLeft;\n\n      if (scrollPosition <= 0) {\n        settings.prev.style.display = 'none';\n      } else {\n        settings.prev.style.display = 'flex';\n      }\n\n      if (scrollMaxLeft <= 0) {\n        settings.next.style.display = 'none';\n      } else {\n        settings.next.style.display = 'flex';\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HsNavScroller;\n}();\n\n\n\n//# sourceURL=webpack://HsNavScroller/./src/js/hs-nav-scroller.js?");

/***/ })

/******/ })["default"];
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSFormSearch"] = factory();
	else
		root["HSFormSearch"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-form-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-form-search.js":
/*!**********************************!*\
  !*** ./src/js/hs-form-search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSFormSearch; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar dataAttributeName = 'data-hs-form-search-options';\nvar defaults = {\n  clearIcon: null,\n  defaultIcon: null,\n  delay: 300,\n  isLoading: false,\n  dropMenuOffset: 0,\n  dropMenuDuration: 300,\n  toggleIconOnFocus: false,\n  activeClass: null,\n  handlers: {}\n};\n\nvar HSFormSearch = /*#__PURE__*/function () {\n  function HSFormSearch(el, options, id) {\n    _classCallCheck(this, HSFormSearch);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSFormSearch, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.$loadingIcon = document.querySelector(_options.loadingIcon);\n        _options.$clearIcon = document.querySelector(_options.clearIcon);\n        _options.$defaultIcon = document.querySelector(_options.defaultIcon);\n        _options.$dropMenuElement = document.querySelector(_options.dropMenuElement);\n\n        _this.toggleIcon(_$el.value.length > 0, _options, _$el);\n\n        _options.$clearIcon.addEventListener('click', function () {\n          _$el.value = '';\n          that.toggleIcon(false, _options, _$el);\n\n          if (Object.prototype.hasOwnProperty.call(that.collection[i].$initializedEl.events, 'clear')) {\n            that.collection[i].$initializedEl.events.clear();\n          }\n        });\n\n        if (_options.toggleIconOnFocus) {\n          _$el.addEventListener('click', function (e) {\n            that.toggleIcon(true, _options, _$el);\n          });\n        } else {\n          _$el.addEventListener('input', function (e) {\n            that.toggleIcon(e.target.value.length > 0, _options, _$el);\n          });\n        }\n\n        if (_options.$dropMenuElement) {\n          _options.$dropMenuElement.classList.add('animated', 'hs-form-search-menu-hidden', 'hs-form-search-menu-initialized');\n\n          document.addEventListener('click', function (e) {\n            if (e.target.closest('input')) return;\n\n            if (_$el !== e.target && e.target.closest('a') || _$el !== e.target && window.getComputedStyle(_options.$dropMenuElement).display === 'block' && !e.target.closest(_options.dropMenuElement)) {\n              _options.$dropMenuElement.classList.remove('slideInUp');\n\n              _options.$dropMenuElement.classList.add('fadeOut');\n\n              if (Object.prototype.hasOwnProperty.call(that.collection[i].$initializedEl.events, 'close')) {\n                that.collection[i].$initializedEl.events.close(_options.$dropMenuElement);\n              }\n\n              if (_options.toggleIconOnFocus) {\n                that.toggleIcon(_$el.value.length > 0, _options, _$el);\n              }\n\n              setTimeout(function () {\n                _options.$dropMenuElement.classList.add('hs-form-search-menu-hidden');\n              }, _options.dropMenuDuration);\n            }\n          });\n\n          _$el.addEventListener('click', function () {\n            if (_options.$dropMenuElement.style.display !== 'block') {\n              setTimeout(function () {\n                _options.$dropMenuElement.style.top = 100 + _options.dropMenuOffset + '%';\n                _options.$dropMenuElement.style.width = '100%';\n                _options.$dropMenuElement.style.animationDuration = _options.dropMenuDuration + 'ms';\n\n                _options.$dropMenuElement.classList.remove('hs-form-search-menu-hidden', 'fadeOut');\n\n                _options.$dropMenuElement.classList.add('slideInUp');\n              }, 1);\n            }\n          });\n        }\n\n        that.collection[i].$initializedEl = _objectSpread(_objectSpread({}, that.collection[i]), {}, {\n          events: {},\n          loading: function loading() {\n            var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n            var input = _$el.value.length > 0;\n\n            if (isLoading) {\n              _options.isLoading = true;\n              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_options.$defaultIcon, 0);\n              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_options.$clearIcon, 0);\n              _options.$loadingIcon.style.display = 'block';\n            } else {\n              _options.isLoading = false;\n              that.toggleIcon(input, _options, _$el);\n            }\n          },\n          on: function on(event, callback) {\n            that.collection[i].$initializedEl.events[event] = callback;\n          }\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"toggleIcon\",\n    value: function toggleIcon(input, settings, $el) {\n      var that = this;\n\n      if (!settings.isLoading) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$loadingIcon, 0);\n\n        if (!settings.$defaultIcon) {\n          if (input) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$clearIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.add(settings.activeClass);\n          } else {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$clearIcon, 0);\n            $el.classList.remove(settings.activeClass);\n          }\n        } else {\n          if (input) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$defaultIcon, 0);\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$clearIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.add(settings.activeClass);\n          } else {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(settings.$clearIcon, 0);\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(settings.$defaultIcon, settings.$loadingIcon ? 10 : settings.delay);\n            $el.classList.remove(settings.activeClass);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"loading\",\n    value: function loading() {\n      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var input = this.$el.value.length > 0;\n\n      if (isLoading) {\n        this.settings.isLoading = true;\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(this.defaultIcon, 0);\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(this.clearIcon, 0);\n        this.loadingIcon.style.display = 'block';\n      } else {\n        this.settings.isLoading = false;\n        this.toggleIcon(input, this.settings);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSFormSearch;\n}();\n\n\n\n//# sourceURL=webpack://HSFormSearch/./src/js/hs-form-search.js?");

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: fadeIn, fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\nfunction fadeIn(el, time) {\n  if (!el || el.offsetParent !== null) return el;\n  el.style.opacity = 0;\n  el.style.display = 'block';\n  var last = +new Date();\n\n  var tick = function tick() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / time;\n    last = +new Date();\n\n    if (+el.style.opacity < 1) {\n      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}\nfunction fadeOut(el, time) {\n  if (!el || el.offsetParent === null) return el;\n\n  if (!time) {\n    return el.style.display = 'none';\n  }\n\n  var intervalID = setInterval(function () {\n    if (!el.style.opacity) {\n      el.style.opacity = 1;\n    }\n\n    if (el.style.opacity > 0) {\n      el.style.opacity -= 0.1;\n    } else {\n      clearInterval(intervalID);\n      el.style.display = 'none';\n    }\n  }, time / 10);\n}\n\n//# sourceURL=webpack://HSFormSearch/./src/js/utils/index.js?");

/***/ })

/******/ })["default"];
});
(function(){var t=this;(function(){(function(){var t=[].slice;this.LocalTime={config:{},run:function(){return this.getController().processElements()},process:function(){var e,n,r,a;for(n=1<=arguments.length?t.call(arguments,0):[],r=0,a=n.length;r<a;r++)e=n[r],this.getController().processElement(e);return n.length},getController:function(){return null!=this.controller?this.controller:this.controller=new e.Controller}}}).call(this)}).call(t);var e=t.LocalTime;(function(){(function(){e.config.i18n={en:{date:{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbrDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yesterday:"yesterday",today:"today",tomorrow:"tomorrow",on:"on {date}",formats:{"default":"%b %e, %Y",thisYear:"%b %e"}},time:{am:"am",pm:"pm",singular:"a {time}",singularAn:"an {time}",elapsed:"{time} ago",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",formats:{"default":"%l:%M%P"}},datetime:{at:"{date} at {time}",formats:{"default":"%B %e, %Y at %l:%M%P %Z"}}}}}).call(this),function(){e.config.locale="en",e.config.defaultLocale="en"}.call(this),function(){e.config.timerInterval=6e4}.call(this),function(){var t,n,r;r=!isNaN(Date.parse("2011-01-01T12:00:00-05:00")),e.parseDate=function(t){return t=t.toString(),r||(t=n(t)),new Date(Date.parse(t))},t=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,n=function(e){var n,r,a,i,o,s,u,c,l;if(a=e.match(t))return a[0],c=a[1],o=a[2],n=a[3],r=a[4],i=a[5],u=a[6],l=a[7],"Z"!==l&&(s=l.replace(":","")),c+"/"+o+"/"+n+" "+r+":"+i+":"+u+" GMT"+[s]}}.call(this),function(){e.elementMatchesSelector=function(){var t,e,n,r,a,i;return t=document.documentElement,e=null!=(n=null!=(r=null!=(a=null!=(i=t.matches)?i:t.matchesSelector)?a:t.webkitMatchesSelector)?r:t.mozMatchesSelector)?n:t.msMatchesSelector,function(t,n){if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE)return e.call(t,n)}}()}.call(this),function(){var t,n,r;t=e.config,r=t.i18n,e.getI18nValue=function(a,i){var o,s;return null==a&&(a=""),o=(null!=i?i:{locale:t.locale}).locale,s=n(r[o],a),null!=s?s:o!==t.defaultLocale?e.getI18nValue(a,{locale:t.defaultLocale}):void 0},e.translate=function(t,n,r){var a,i,o;null==n&&(n={}),o=e.getI18nValue(t,r);for(a in n)i=n[a],o=o.replace("{"+a+"}",i);return o},n=function(t,e){var n,r,a,i,o;for(o=t,i=e.split("."),n=0,a=i.length;n<a;n++){if(r=i[n],null==o[r])return null;o=o[r]}return o}}.call(this),function(){var t,n,r,a,i;t=e.getI18nValue,i=e.translate,e.strftime=a=function(e,o){var s,u,c,l,d,h,f;return u=e.getDay(),s=e.getDate(),d=e.getMonth(),f=e.getFullYear(),c=e.getHours(),l=e.getMinutes(),h=e.getSeconds(),o.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g,function(o,m,p){switch(p){case"%":return"%";case"a":return t("date.abbrDayNames")[u];case"A":return t("date.dayNames")[u];case"b":return t("date.abbrMonthNames")[d];case"B":return t("date.monthNames")[d];case"c":return e.toString();case"d":return n(s,m);case"e":return s;case"H":return n(c,m);case"I":return n(a(e,"%l"),m);case"l":return 0===c||12===c?12:(c+12)%12;case"m":return n(d+1,m);case"M":return n(l,m);case"p":return i("time."+(c>11?"pm":"am")).toUpperCase();case"P":return i("time."+(c>11?"pm":"am"));case"S":return n(h,m);case"w":return u;case"y":return n(f%100,m);case"Y":return f;case"Z":return r(e)}})},n=function(t,e){switch(e){case"-":return t;default:return("0"+t).slice(-2)}},r=function(t){var e,n,r,a,i;return i=t.toString(),(e=null!=(n=i.match(/\(([\w\s]+)\)$/))?n[1]:void 0)?/\s/.test(e)?e.match(/\b(\w)/g).join(""):e:(e=null!=(r=i.match(/(\w{3,4})\s\d{4}$/))?r[1]:void 0)?e:(e=null!=(a=i.match(/(UTC[\+\-]\d+)/))?a[1]:void 0)?e:""}}.call(this),function(){e.CalendarDate=function(){function t(t,e,n){this.date=new Date(Date.UTC(t,e-1)),this.date.setUTCDate(n),this.year=this.date.getUTCFullYear(),this.month=this.date.getUTCMonth()+1,this.day=this.date.getUTCDate(),this.value=this.date.getTime()}return t.fromDate=function(t){return new this(t.getFullYear(),t.getMonth()+1,t.getDate())},t.today=function(){return this.fromDate(new Date)},t.prototype.equals=function(t){return(null!=t?t.value:void 0)===this.value},t.prototype.is=function(t){return this.equals(t)},t.prototype.isToday=function(){return this.is(this.constructor.today())},t.prototype.occursOnSameYearAs=function(t){return this.year===(null!=t?t.year:void 0)},t.prototype.occursThisYear=function(){return this.occursOnSameYearAs(this.constructor.today())},t.prototype.daysSince=function(t){if(t)return(this.date-t.date)/864e5},t.prototype.daysPassed=function(){return this.constructor.today().daysSince(this)},t}()}.call(this),function(){var t,n,r;n=e.strftime,r=e.translate,t=e.getI18nValue,e.RelativeTime=function(){function a(t){this.date=t,this.calendarDate=e.CalendarDate.fromDate(this.date)}return a.prototype.toString=function(){var t,e;return(e=this.toTimeElapsedString())?r("time.elapsed",{time:e}):(t=this.toWeekdayString())?(e=this.toTimeString(),r("datetime.at",{date:t,time:e})):r("date.on",{date:this.toDateString()})},a.prototype.toTimeOrDateString=function(){return this.calendarDate.isToday()?this.toTimeString():this.toDateString()},a.prototype.toTimeElapsedString=function(){var t,e,n,a,i;return n=(new Date).getTime()-this.date.getTime(),a=Math.round(n/1e3),e=Math.round(a/60),t=Math.round(e/60),n<0?null:a<10?(i=r("time.second"),r("time.singular",{time:i})):a<45?a+" "+r("time.seconds"):a<90?(i=r("time.minute"),r("time.singular",{time:i})):e<45?e+" "+r("time.minutes"):e<90?(i=r("time.hour"),r("time.singularAn",{time:i})):t<24?t+" "+r("time.hours"):""},a.prototype.toWeekdayString=function(){switch(this.calendarDate.daysPassed()){case 0:return r("date.today");case 1:return r("date.yesterday");case-1:return r("date.tomorrow");case 2:case 3:case 4:case 5:case 6:return n(this.date,"%A");default:return""}},a.prototype.toDateString=function(){var e;return e=t(this.calendarDate.occursThisYear()?"date.formats.thisYear":"date.formats.default"),n(this.date,e)},a.prototype.toTimeString=function(){return n(this.date,t("time.formats.default"))},a}()}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}};t=e.elementMatchesSelector,e.PageObserver=function(){function e(t,e){this.selector=t,this.callback=e,this.processInsertion=n(this.processInsertion,this),this.processMutations=n(this.processMutations,this)}return e.prototype.start=function(){if(!this.started)return this.observeWithMutationObserver()||this.observeWithMutationEvent(),this.started=!0},e.prototype.observeWithMutationObserver=function(){var t;if("undefined"!=typeof MutationObserver&&null!==MutationObserver)return t=new MutationObserver(this.processMutations),t.observe(document.documentElement,{childList:!0,subtree:!0}),!0},e.prototype.observeWithMutationEvent=function(){return addEventListener("DOMNodeInserted",this.processInsertion,!1),!0},e.prototype.findSignificantElements=function(e){var n;return n=[],(null!=e?e.nodeType:void 0)===Node.ELEMENT_NODE&&(t(e,this.selector)&&n.push(e),n.push.apply(n,e.querySelectorAll(this.selector))),n},e.prototype.processMutations=function(t){var e,n,r,a,i,o,s,u;for(e=[],n=0,a=t.length;n<a;n++)switch(o=t[n],o.type){case"childList":for(u=o.addedNodes,r=0,i=u.length;r<i;r++)s=u[r],e.push.apply(e,this.findSignificantElements(s))}return this.notify(e)},e.prototype.processInsertion=function(t){var e;return e=this.findSignificantElements(t.target),this.notify(e)},e.prototype.notify=function(t){if(null!=t?t.length:void 0)return"function"==typeof this.callback?this.callback(t):void 0},e}()}.call(this),function(){var t,n,r,a,i=function(t,e){return function(){return t.apply(e,arguments)}};r=e.parseDate,a=e.strftime,n=e.getI18nValue,t=e.config,e.Controller=function(){function o(){this.processElements=i(this.processElements,this),this.pageObserver=new e.PageObserver(s,this.processElements)}var s,u,c;return s="time[data-local]:not([data-localized])",o.prototype.start=function(){if(!this.started)return this.processElements(),this.startTimer(),this.pageObserver.start(),this.started=!0},o.prototype.startTimer=function(){var e;if(e=t.timerInterval)return null!=this.timer?this.timer:this.timer=setInterval(this.processElements,e)},o.prototype.processElements=function(t){var e,n,r;for(null==t&&(t=document.querySelectorAll(s)),n=0,r=t.length;n<r;n++)e=t[n],this.processElement(e);return t.length},o.prototype.processElement=function(t){var e,i,o,s,l,d;if(i=t.getAttribute("datetime"),o=t.getAttribute("data-format"),s=t.getAttribute("data-local"),l=r(i),!isNaN(l))return t.hasAttribute("title")||(d=a(l,n("datetime.formats.default")),t.setAttribute("title",d)),t.textContent=e=function(){switch(s){case"time":return u(t),a(l,o);case"date":return u(t),c(l).toDateString();case"time-ago":return c(l).toString();case"time-or-date":return c(l).toTimeOrDateString();case"weekday":return c(l).toWeekdayString();case"weekday-or-date":return c(l).toWeekdayString()||c(l).toDateString()}}(),t.hasAttribute("aria-label")?void 0:t.setAttribute("aria-label",e)},u=function(t){return t.setAttribute("data-localized","")},c=function(t){return new e.RelativeTime(t)},o}()}.call(this),function(){var t,n,r,a;a=!1,t=function(){return document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState},n=function(t){var e;return null!=(e="function"==typeof requestAnimationFrame?requestAnimationFrame(t):void 0)?e:setTimeout(t,17)},r=function(){var t;return t=e.getController(),t.start()},e.start=function(){if(!a)return a=!0,"undefined"!=typeof MutationObserver&&null!==MutationObserver||t()?r():n(r)},window.LocalTime===e&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);










