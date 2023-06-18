import{c as P,h as te,a as pt,Q as ue,u as Ke,b as wt,d as De,e as St,f as xt,R as Ct}from"./QBtn.f369d9fa.js";import{c as v,h as p,r as L,i as Xe,o as ee,a as U,n as $e,d as se,g as Y,l as qe,e as ze,f as R,w as q,j as de,T as kt,s as qt,k as Oe,v as Tt,m as Ge,p as G,q as Lt,t as ie,u as ge,x as Pe,y as be,z as Te,A as ye,B as Je,C as _t,D as le,E as $t,_ as zt,F as Ot,G as Bt,H as J,I as pe,J as I,K as Et,L as B,M as we,N as Se,O as Le,P as Qe,Q as Me,R as He}from"./index.5de611e1.js";import{u as It,a as Dt,b as Pt,c as Ze,d as et,e as tt,f as nt,g as Ve,h as at,Q as Re,i as ot,j as Ae,k as Z,l as Qt,m as Mt,n as Ht,o as re,p as Vt,q as Rt,r as At,s as Ft,t as xe,v as Nt,w as Fe}from"./docs-store.cd73809e.js";import{api as jt}from"./axios.75b998c2.js";var Wt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>p("div",{class:o.value},te(a.default))}}),Ut=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>p("div",{class:o.value,role:"toolbar"},te(a.default))}});function Yt(){const e=L(!Xe.value);return e.value===!1&&ee(()=>{e.value=!0}),e}const it=typeof ResizeObserver!="undefined",Ne=it===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let o=null,r,t={width:-1,height:-1};function n(d){d===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),r){const{offsetWidth:d,offsetHeight:u}=r;(d!==t.width||u!==t.height)&&(t={width:d,height:u},a("resize",t))}}const{proxy:c}=Y();if(it===!0){let d;const u=l=>{r=c.$el.parentNode,r?(d=new ResizeObserver(n),d.observe(r),s()):l!==!0&&se(()=>{u(!0)})};return ee(()=>{u()}),U(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():r&&d.unobserve(r))}),$e}else{let l=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",n,qe.passive),u=void 0)},w=function(){l(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",n,qe.passive),s())};const d=Yt();let u;return ee(()=>{se(()=>{r=c.$el,r&&w()})}),U(l),c.trigger=n,()=>{if(d.value===!0)return p("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:w})}}}}),Kt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:o}){const{proxy:{$q:r}}=Y(),t=ze(de,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const n=L(parseInt(e.heightHint,10)),s=L(!0),c=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return s.value===!0?n.value:0;const f=n.value-t.scroll.value.position;return f>0?f:0}),u=v(()=>e.modelValue!==!0||c.value===!0&&s.value!==!0),l=v(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=v(()=>{const f=t.rows.value.top,_={};return f[0]==="l"&&t.left.space===!0&&(_[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(_[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function m(f,_){t.update("header",f,_)}function b(f,_){f.value!==_&&(f.value=_)}function h({height:f}){b(n,f),m("size",f)}function k(f){l.value===!0&&b(s,!0),o("focusin",f)}q(()=>e.modelValue,f=>{m("space",f),b(s,!0),t.animate()}),q(d,f=>{m("offset",f)}),q(()=>e.reveal,f=>{f===!1&&b(s,e.modelValue)}),q(s,f=>{t.animate(),o("reveal",f)}),q(t.scroll,f=>{e.reveal===!0&&b(s,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",d.value),U(()=>{t.instances.header===y&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const f=pt(a.default,[]);return e.elevated===!0&&f.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(p(_e,{debounce:0,onResize:h})),p("header",{class:w.value,style:S.value,onFocusin:k},f)}}}),Xt=P({name:"QToggle",props:{...It,icon:String,iconColor:String},emits:Dt,setup(e){function a(o,r){const t=v(()=>(o.value===!0?e.checkedIcon:r.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),n=v(()=>o.value===!0?e.iconColor:null);return()=>[p("div",{class:"q-toggle__track"}),p("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[p(ue,{name:t.value,color:n.value})]:void 0)]}return Pt("toggle",a)}}),Gt=P({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:a,emit:o}){let r=!1,t,n,s=null,c=null,d,u;function l(){t&&t(),t=null,r=!1,s!==null&&(clearTimeout(s),s=null),c!==null&&(clearTimeout(c),c=null),n!==void 0&&n.removeEventListener("transitionend",d),d=null}function w(h,k,y){k!==void 0&&(h.style.height=`${k}px`),h.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,t=y}function S(h,k){h.style.overflowY=null,h.style.height=null,h.style.transition=null,l(),k!==u&&o(k)}function m(h,k){let y=0;n=h,r===!0?(l(),y=h.offsetHeight===h.scrollHeight?0:void 0):(u="hide",h.style.overflowY="hidden"),w(h,y,k),s=setTimeout(()=>{s=null,h.style.height=`${h.scrollHeight}px`,d=f=>{c=null,(Object(f)!==f||f.target===h)&&S(h,"show")},h.addEventListener("transitionend",d),c=setTimeout(d,e.duration*1.1)},100)}function b(h,k){let y;n=h,r===!0?l():(u="show",h.style.overflowY="hidden",y=h.scrollHeight),w(h,y,k),s=setTimeout(()=>{s=null,h.style.height=0,d=f=>{c=null,(Object(f)!==f||f.target===h)&&S(h,"hide")},h.addEventListener("transitionend",d),c=setTimeout(d,e.duration*1.1)},100)}return U(()=>{r===!0&&l()}),()=>p(kt,{css:!1,appear:e.appear,onEnter:m,onLeave:b},a.default)}});const W=qt({}),Jt=Object.keys(Ke);var Zt=P({name:"QExpansionItem",props:{...Ke,...Ze,...et,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...tt,"click","afterShow","afterHide"],setup(e,{slots:a,emit:o}){const{proxy:{$q:r}}=Y(),t=nt(e,r),n=L(e.modelValue!==null?e.modelValue:e.defaultOpened),s=L(null),c=Ve(),{show:d,hide:u,toggle:l}=at({showing:n});let w,S;const m=v(()=>`q-expansion-item q-item-type q-expansion-item--${n.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),b=v(()=>{if(e.contentInsetLevel===void 0)return null;const g=r.lang.rtl===!0?"Right":"Left";return{["padding"+g]:e.contentInsetLevel*56+"px"}}),h=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),k=v(()=>{const g={};return Jt.forEach(O=>{g[O]=e[O]}),g}),y=v(()=>h.value===!0||e.expandIconToggle!==!0),f=v(()=>e.expandedIcon!==void 0&&n.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),_=v(()=>e.disable!==!0&&(h.value===!0||e.expandIconToggle===!0)),x=v(()=>({expanded:n.value===!0,detailsId:e.targetUid,toggle:l,show:d,hide:u})),T=v(()=>{const g=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[n.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":n.value===!0?"true":"false","aria-controls":c,"aria-label":g}});q(()=>e.group,g=>{S!==void 0&&S(),g!==void 0&&V()});function $(g){h.value!==!0&&l(g),o("click",g)}function M(g){g.keyCode===13&&A(g,!0)}function A(g,O){O!==!0&&s.value!==null&&s.value.focus(),l(g),Ge(g)}function H(){o("afterShow")}function D(){o("afterHide")}function V(){w===void 0&&(w=Ve()),n.value===!0&&(W[e.group]=w);const g=q(n,Q=>{Q===!0?W[e.group]=w:W[e.group]===w&&delete W[e.group]}),O=q(()=>W[e.group],(Q,ce)=>{ce===w&&Q!==void 0&&Q!==w&&u()});S=()=>{g(),O(),W[e.group]===w&&delete W[e.group],S=void 0}}function ne(){const g={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},O=[p(ue,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&n.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:f.value})];return _.value===!0&&(Object.assign(g,{tabindex:0,...T.value,onClick:A,onKeyup:M}),O.unshift(p("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),p(Z,g,()=>O)}function F(){let g;return a.header!==void 0?g=[].concat(a.header(x.value)):(g=[p(Z,()=>[p(Ae,{lines:e.labelLines},()=>e.label||""),e.caption?p(Ae,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&g[e.switchToggleSide===!0?"push":"unshift"](p(Z,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>p(ue,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&g[e.switchToggleSide===!0?"unshift":"push"](ne()),g}function X(){const g={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return y.value===!0&&(g.clickable=!0,g.onClick=$,Object.assign(g,h.value===!0?k.value:T.value)),p(ot,g,F)}function ae(){return Oe(p("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:b.value,id:c},te(a.default)),[[Tt,n.value]])}function K(){const g=[X(),p(Gt,{duration:e.duration,onShow:H,onHide:D},ae)];return e.expandSeparator===!0&&g.push(p(Re,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),p(Re,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),g}return e.group!==void 0&&V(),U(()=>{S!==void 0&&S()}),()=>p("div",{class:m.value},[p("div",{class:"q-expansion-item__container relative-position"},K())])}});const Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},en=Object.keys(Be);Be.all=!0;function je(e){const a={};for(const o of en)e[o]===!0&&(a[o]=!0);return Object.keys(a).length===0?Be:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}function We(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function Ce(e,a,o){const r=Te(e);let t,n=r.left-a.event.x,s=r.top-a.event.y,c=Math.abs(n),d=Math.abs(s);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?t=n<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",c>d&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.down===!0&&s>0?(t="down",c>d&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.left===!0&&n<0?(t="left",c<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&n>0&&(t="right",c<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&o===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,l=!0,t==="left"||t==="right"?(r.left-=n,c=0,n=0):(r.top-=s,d=0,s=0)}return{synthetic:l,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:r,direction:t,isFirst:a.event.isFirst,isFinal:o===!0,duration:Date.now()-a.event.time,distance:{x:c,y:d},offset:{x:n,y:s},delta:{x:r.left-a.event.lastX,y:r.top-a.event.lastY}}}}let tn=0;var ke=wt({name:"touch-pan",beforeMount(e,{value:a,modifiers:o}){if(o.mouse!==!0&&G.has.touch!==!0)return;function r(n,s){o.mouse===!0&&s===!0?Ge(n):(o.stop===!0&&be(n),o.prevent===!0&&Pe(n))}const t={uid:"qvtp_"+tn++,handler:a,modifiers:o,direction:je(o),noop:$e,mouseStart(n){We(n,t)&&Lt(n)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(We(n,t)){const s=n.target;ie(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(G.is.firefox===!0&&ge(e,!0),t.lastEvt=n,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Pe(u),n.cancelBubble===!0&&be(u),Object.assign(u,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:u}}be(n)}const{left:c,top:d}=Te(n);t.event={x:c,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:d}},move(n){if(t.event===void 0)return;const s=Te(n),c=s.left-t.event.x,d=s.top-t.event.y;if(c===0&&d===0)return;t.lastEvt=n;const u=t.event.mouse===!0,l=()=>{r(n,u);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qt(),t.styleCleanup=b=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const h=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{h(),b()},50):h()}else b!==void 0&&b()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(n,t.event.mouse);const{payload:m,synthetic:b}=Ce(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=b===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(n);return}const w=Math.abs(c),S=Math.abs(d);w!==S&&(t.direction.horizontal===!0&&w>S||t.direction.vertical===!0&&w<S||t.direction.up===!0&&w<S&&d<0||t.direction.down===!0&&w<S&&d>0||t.direction.left===!0&&w>S&&c<0||t.direction.right===!0&&w>S&&c>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ye(t,"temp"),G.is.firefox===!0&&ge(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(n===void 0?t.lastEvt:n,t).payload);const{payload:c}=Ce(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const n=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ie(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}G.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const o=e.__qtouchpan;o!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&o.end(),o.handler=a.value),o.direction=je(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ye(a,"main"),ye(a,"temp"),G.is.firefox===!0&&ge(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const Ue=150;var nn=P({name:"QDrawer",inheritAttrs:!1,props:{...Ze,...et,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...tt,"onLayout","miniState"],setup(e,{slots:a,emit:o,attrs:r}){const t=Y(),{proxy:{$q:n}}=t,s=nt(e,n),{preventBodyScroll:c}=Vt(),{registerTimeout:d,removeTimeout:u}=Mt(),l=ze(de,R);if(l===R)return console.error("QDrawer needs to be child of QLayout"),R;let w,S=null,m;const b=L(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),h=v(()=>e.mini===!0&&b.value!==!0),k=v(()=>h.value===!0?e.miniWidth:e.width),y=L(e.showIfAbove===!0&&b.value===!1?!0:e.modelValue===!0),f=v(()=>e.persistent!==!0&&(b.value===!0||ce.value===!0));function _(i,C){if(M(),i!==!1&&l.animate(),E(0),b.value===!0){const z=l.instances[K.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),N(1),l.isContainer.value!==!0&&c(!0)}else N(0),i!==!1&&ve(!1);d(()=>{i!==!1&&ve(!0),C!==!0&&o("show",i)},Ue)}function x(i,C){A(),i!==!1&&l.animate(),N(0),E(V.value*k.value),he(),C!==!0?d(()=>{o("hide",i)},Ue):u()}const{show:T,hide:$}=at({showing:y,hideOnRouteChange:f,handleShow:_,handleHide:x}),{addToHistory:M,removeFromHistory:A}=Ht(y,$,f),H={belowBreakpoint:b,hide:$},D=v(()=>e.side==="right"),V=v(()=>(n.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),ne=L(0),F=L(!1),X=L(!1),ae=L(k.value*V.value),K=v(()=>D.value===!0?"left":"right"),g=v(()=>y.value===!0&&b.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),O=v(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(D.value?"R":"L")>-1||n.platform.is.ios===!0&&l.isContainer.value===!0),Q=v(()=>e.overlay===!1&&y.value===!0&&b.value===!1),ce=v(()=>e.overlay===!0&&y.value===!0&&b.value===!1),lt=v(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&F.value===!1?" hidden":"")),rt=v(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),Ee=v(()=>D.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),ut=v(()=>D.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),st=v(()=>{const i={};return l.header.space===!0&&Ee.value===!1&&(O.value===!0?i.top=`${l.header.offset}px`:l.header.space===!0&&(i.top=`${l.header.size}px`)),l.footer.space===!0&&ut.value===!1&&(O.value===!0?i.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(i.bottom=`${l.footer.size}px`)),i}),dt=v(()=>{const i={width:`${k.value}px`,transform:`translateX(${ae.value}px)`};return b.value===!0?i:Object.assign(i,st.value)}),ct=v(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),ft=v(()=>`q-drawer q-drawer--${e.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${h.value===!0?"mini":"standard"}`+(O.value===!0||Q.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ee.value===!0?" q-drawer--top-padding":""))),vt=v(()=>{const i=n.lang.rtl===!0?e.side:K.value;return[[ke,bt,void 0,{[i]:!0,mouse:!0}]]}),ht=v(()=>{const i=n.lang.rtl===!0?K.value:e.side;return[[ke,Ie,void 0,{[i]:!0,mouse:!0}]]}),mt=v(()=>{const i=n.lang.rtl===!0?K.value:e.side;return[[ke,Ie,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){yt(b,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}q(b,i=>{i===!0?(w=y.value,y.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(E(0),N(0),he()):T(!1))}),q(()=>e.side,(i,C)=>{l.instances[C]===H&&(l.instances[C]=void 0,l[C].space=!1,l[C].offset=0),l.instances[i]=H,l[i].size=k.value,l[i].space=Q.value,l[i].offset=g.value}),q(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),q(()=>e.behavior+e.breakpoint,fe),q(l.isContainer,i=>{y.value===!0&&c(i!==!0),i===!0&&fe()}),q(l.scrollbarWidth,()=>{E(y.value===!0?0:void 0)}),q(g,i=>{j("offset",i)}),q(Q,i=>{o("onLayout",i),j("space",i)}),q(D,()=>{E()}),q(k,i=>{E(),me(e.miniToOverlay,i)}),q(()=>e.miniToOverlay,i=>{me(i,k.value)}),q(()=>n.lang.rtl,()=>{E()}),q(()=>e.mini,()=>{e.modelValue===!0&&(gt(),l.animate())}),q(h,i=>{o("miniState",i)});function E(i){i===void 0?se(()=>{i=y.value===!0?0:k.value,E(V.value*i)}):(l.isContainer.value===!0&&D.value===!0&&(b.value===!0||Math.abs(i)===k.value)&&(i+=V.value*l.scrollbarWidth.value),ae.value=i)}function N(i){ne.value=i}function ve(i){const C=i===!0?"remove":l.isContainer.value!==!0?"add":"";C!==""&&document.body.classList[C]("q-body--drawer-toggle")}function gt(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,S=setTimeout(()=>{S=null,X.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function bt(i){if(y.value!==!1)return;const C=k.value,z=re(i.distance.x,0,C);if(i.isFinal===!0){z>=Math.min(75,C)===!0?T():(l.animate(),N(0),E(V.value*C)),F.value=!1;return}E((n.lang.rtl===!0?D.value!==!0:D.value)?Math.max(C-z,0):Math.min(0,z-C)),N(re(z/C,0,1)),i.isFirst===!0&&(F.value=!0)}function Ie(i){if(y.value!==!0)return;const C=k.value,z=i.direction===e.side,oe=(n.lang.rtl===!0?z!==!0:z)?re(i.distance.x,0,C):0;if(i.isFinal===!0){Math.abs(oe)<Math.min(75,C)===!0?(l.animate(),N(1),E(0)):$(),F.value=!1;return}E(V.value*oe),N(re(1-oe/C,0,1)),i.isFirst===!0&&(F.value=!0)}function he(){c(!1),ve(!0)}function j(i,C){l.update(e.side,i,C)}function yt(i,C){i.value!==C&&(i.value=C)}function me(i,C){j("size",i===!0?e.miniWidth:C)}return l.instances[e.side]=H,me(e.miniToOverlay,k.value),j("space",Q.value),j("offset",g.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),ee(()=>{o("onLayout",Q.value),o("miniState",h.value),w=e.showIfAbove===!0;const i=()=>{(y.value===!0?_:x)(!1,!0)};if(l.totalWidth.value!==0){se(i);return}m=q(l.totalWidth,()=>{m(),m=void 0,y.value===!1&&e.showIfAbove===!0&&b.value===!1?T(!1):i()})}),U(()=>{m!==void 0&&m(),S!==null&&(clearTimeout(S),S=null),y.value===!0&&he(),l.instances[e.side]===H&&(l.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const i=[];b.value===!0&&(e.noSwipeOpen===!1&&i.push(Oe(p("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),i.push(De("div",{ref:"backdrop",class:lt.value,style:rt.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>mt.value)));const C=h.value===!0&&a.mini!==void 0,z=[p("div",{...r,key:""+C,class:[ct.value,r.class]},C===!0?a.mini():te(a.default))];return e.elevated===!0&&y.value===!0&&z.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(De("aside",{ref:"content",class:ft.value,style:dt.value},z,"contentclose",e.noSwipeClose!==!0&&b.value===!0,()=>ht.value)),p("div",{class:"q-drawer-container"},i)}}}),an=P({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:o}}=Y(),r=ze(de,R);if(r===R)return console.error("QPageContainer needs to be child of QLayout"),R;Je(_t,!0);const t=v(()=>{const n={};return r.header.space===!0&&(n.paddingTop=`${r.header.size}px`),r.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(n.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),n});return()=>p("div",{class:"q-page-container",style:t.value},te(a.default))}});const{passive:Ye}=qe,on=["both","horizontal","vertical"];var ln=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>on.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,n;q(()=>e.scrollTarget,()=>{d(),c()});function s(){r!==null&&r();const w=Math.max(0,At(t)),S=Ft(t),m={top:w-o.position.top,left:S-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const b=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:S},o.directionChanged=o.direction!==b,o.delta=m,o.directionChanged===!0&&(o.direction=b,o.inflectionPoint=o.position),a("scroll",{...o})}function c(){t=Rt(n,e.scrollTarget),t.addEventListener("scroll",u,Ye),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,Ye),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[S,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{m(S),r=null}}}const{proxy:l}=Y();return q(()=>l.$q.lang.rtl,s),ee(()=>{n=l.$el.parentNode,c()}),U(()=>{r!==null&&r(),d()}),Object.assign(l,{trigger:u,getPosition:()=>o}),$e}}),rn=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:o}){const{proxy:{$q:r}}=Y(),t=L(null),n=L(r.screen.height),s=L(e.container===!0?0:r.screen.width),c=L({position:0,direction:"down",inflectionPoint:0}),d=L(0),u=L(Xe.value===!0?0:xe()),l=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),S=v(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=v(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function b(x){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:x.position.top,direction:x.direction,directionChanged:x.directionChanged,inflectionPoint:x.inflectionPoint.top,delta:x.delta.top};c.value=T,e.onScroll!==void 0&&o("scroll",T)}}function h(x){const{height:T,width:$}=x;let M=!1;n.value!==T&&(M=!0,n.value=T,e.onScrollHeight!==void 0&&o("scrollHeight",T),y()),s.value!==$&&(M=!0,s.value=$),M===!0&&e.onResize!==void 0&&o("resize",x)}function k({height:x}){d.value!==x&&(d.value=x,y())}function y(){if(e.container===!0){const x=n.value>d.value?xe():0;u.value!==x&&(u.value=x)}}let f=null;const _={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:u,totalWidth:v(()=>s.value+u.value),rows:v(()=>{const x=e.view.toLowerCase().split(" ");return{top:x[0].split(""),middle:x[1].split(""),bottom:x[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:c,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(x,T,$){_[x][T]=$}};if(Je(de,_),xe()>0){let $=function(){x=null,T.classList.remove("hide-scrollbar")},M=function(){if(x===null){if(T.scrollHeight>r.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(x);x=setTimeout($,300)},A=function(H){x!==null&&H==="remove"&&(clearTimeout(x),$()),window[`${H}EventListener`]("resize",M)},x=null;const T=document.body;q(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),$t(()=>{A("remove")})}return()=>{const x=St(a.default,[p(ln,{onScroll:b}),p(_e,{onResize:h})]),T=p("div",{class:l.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},x);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:t},[p(_e,{onResize:k}),p("div",{class:"absolute-full",style:S.value},[p("div",{class:"scroll",style:m.value},[T])])]):T}}});const un=Ot({name:"MainLayout",data(){return{darkMode:!0,documentation:{features:[]}}},watch:{darkMode(e){this.toggleDarkMode()}},computed:{...Bt(Nt)},methods:{setEndpoint(e){this.docsStore.setEnpoint(e)},toggleDarkMode(){this.$q.dark.set(this.darkMode)},parseActionName(e){let a=e.split("-");for(let o=0;o<a.length;o++)a[o]=a[o][0].toUpperCase()+a[o].slice(1);return a.join(" ")},getDocumentationData(){const e="https://api.thegotosource.net:6001/api-docs";jt.get(e).then(a=>{this.documentation=a.data})}},mounted(){this.getDocumentationData()},setup(){const e=L(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),sn={class:"q-mb-md text-center q-mt-sm d-flex"},dn=Le("strong",null,"Dark",-1);function cn(e,a,o,r,t,n){const s=Et("router-view");return J(),pe(rn,{view:"lHh Lpr lFf"},{default:I(()=>[B(Kt,{elevated:""},{default:I(()=>[B(Ut,{class:"bg-orange text-white"},{default:I(()=>[B(xt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(Wt,null,{default:I(()=>[we(Se(e.documentation.app_name),1)]),_:1}),Le("div",null,"v"+Se(e.documentation.app_version),1)]),_:1})]),_:1}),B(nn,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:I(()=>[B(Fe,{bordered:"",class:"rounded-borders"},{default:I(()=>[Le("div",sn,[dn,we(),B(Xt,{modelValue:e.darkMode,"onUpdate:modelValue":a[0]||(a[0]=c=>e.darkMode=c),color:"orange","keep-color":""},null,8,["modelValue"])]),(J(!0),Qe(He,null,Me(e.documentation.features,(c,d)=>(J(),pe(Zt,{"expand-separator":"",icon:"star",label:c.group_name,caption:`${c.endpoints.length} endpoints`,"content-inset-level":.5,key:d},{default:I(()=>[B(Fe,{bordered:""},{default:I(()=>[(J(!0),Qe(He,null,Me(c.endpoints,(u,l)=>Oe((J(),pe(ot,{key:l,clickable:"",onClick:w=>e.setEndpoint(u)},{default:I(()=>[B(Z,{avatar:""},{default:I(()=>[B(ue,{color:"orange",name:"check"})]),_:1}),B(Z,null,{default:I(()=>[we(Se(e.parseActionName(u.action)),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Ct]])),128))]),_:2},1024)]),_:2},1032,["label","caption","content-inset-level"]))),128))]),_:1})]),_:1},8,["modelValue"]),B(an,null,{default:I(()=>[B(s)]),_:1})]),_:1})}var bn=zt(un,[["render",cn]]);export{bn as default};
