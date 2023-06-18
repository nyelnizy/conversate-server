import{c as D,h as oe,a as qt,Q as de,u as et,b as Tt,d as Me,e as Lt,f as _t,R as Et}from"./QBtn.b9cca8da.js";import{c as f,h as S,a as L,i as tt,o as ae,d as U,n as $e,e as fe,g as G,l as _e,f as ze,j as R,k as ve,w as q,T as It,s as Ot,m as Be,v as $t,p as nt,q as te,t as zt,u as ue,x as ye,y as He,z as we,A as Ee,B as Se,C as at,D as Bt,E as se,F as Pt,G as ot,H as Z,I as Ie,J as Y,K as Ce,L as M,M as Dt,N as Vt,O as Mt,P as Ht,_ as Qt,Q as Ft,R as Qe,S as xe,U as B,V as O,W as ke,X as Fe,Y as Re,Z as Ae}from"./index.50fbc607.js";import{u as Rt,a as At,b as Nt,c as lt,d as it,e as rt,Q as Ne,f as ut,g as We,h as ne,i as Wt,j as jt,k as Kt,l as ce,m as Ut,n as Yt,o as Xt,p as Gt,q as qe,r as Jt,s as je}from"./docs-store.4c2c0241.js";import{u as st,a as ct,b as Ke}from"./uid.14d759c2.js";import{api as Zt}from"./axios.d4b82603.js";var en=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:o.value},oe(n.default))}}),tn=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:o.value,role:"toolbar"},oe(n.default))}});function nn(){const e=L(!tt.value);return e.value===!1&&ae(()=>{e.value=!0}),e}const dt=typeof ResizeObserver!="undefined",Ue=dt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Oe=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:c,offsetHeight:s}=l;(c!==t.width||s!==t.height)&&(t={width:c,height:s},n("resize",t))}}const{proxy:h}=G();if(dt===!0){let c;const s=i=>{l=h.$el.parentNode,l?(c=new ResizeObserver(a),c.observe(l),u()):i!==!0&&fe(()=>{s(!0)})};return ae(()=>{s()}),U(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),$e}else{let i=function(){o!==null&&(clearTimeout(o),o=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,_e.passive),s=void 0)},y=function(){i(),l&&l.contentDocument&&(s=l.contentDocument.defaultView,s.addEventListener("resize",a,_e.passive),u())};const c=nn();let s;return ae(()=>{fe(()=>{l=h.$el,l&&y()})}),U(i),h.trigger=a,()=>{if(c.value===!0)return S("object",{style:Ue.style,tabindex:-1,type:"text/html",data:Ue.url,"aria-hidden":"true",onLoad:y})}}}}),an=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=G(),t=ze(ve,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const a=L(parseInt(e.heightHint,10)),u=L(!0),h=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),s=f(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),i=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const v=t.rows.value.top,_={};return v[0]==="l"&&t.left.space===!0&&(_[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(_[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function g(v,_){t.update("header",v,_)}function d(v,_){v.value!==_&&(v.value=_)}function m({height:v}){d(a,v),g("size",v)}function x(v){i.value===!0&&d(u,!0),o("focusin",v)}q(()=>e.modelValue,v=>{g("space",v),d(u,!0),t.animate()}),q(c,v=>{g("offset",v)}),q(()=>e.reveal,v=>{v===!1&&d(u,e.modelValue)}),q(u,v=>{t.animate(),o("reveal",v)}),q(t.scroll,v=>{e.reveal===!0&&d(u,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&g("size",a.value),g("space",e.modelValue),g("offset",c.value),U(()=>{t.instances.header===b&&(t.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const v=qt(n.default,[]);return e.elevated===!0&&v.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(S(Oe,{debounce:0,onResize:m})),S("header",{class:y.value,style:w.value,onFocusin:x},v)}}}),on=D({name:"QToggle",props:{...Rt,icon:String,iconColor:String},emits:At,setup(e){function n(o,l){const t=f(()=>(o.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),a=f(()=>o.value===!0?e.iconColor:null);return()=>[S("div",{class:"q-toggle__track"}),S("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[S(de,{name:t.value,color:a.value})]:void 0)]}return Nt("toggle",n)}}),ln=D({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:o}){let l=!1,t,a,u=null,h=null,c,s;function i(){t&&t(),t=null,l=!1,u!==null&&(clearTimeout(u),u=null),h!==null&&(clearTimeout(h),h=null),a!==void 0&&a.removeEventListener("transitionend",c),c=null}function y(m,x,b){x!==void 0&&(m.style.height=`${x}px`),m.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,t=b}function w(m,x){m.style.overflowY=null,m.style.height=null,m.style.transition=null,i(),x!==s&&o(x)}function g(m,x){let b=0;a=m,l===!0?(i(),b=m.offsetHeight===m.scrollHeight?0:void 0):(s="hide",m.style.overflowY="hidden"),y(m,b,x),u=setTimeout(()=>{u=null,m.style.height=`${m.scrollHeight}px`,c=v=>{h=null,(Object(v)!==v||v.target===m)&&w(m,"show")},m.addEventListener("transitionend",c),h=setTimeout(c,e.duration*1.1)},100)}function d(m,x){let b;a=m,l===!0?i():(s="show",m.style.overflowY="hidden",b=m.scrollHeight),y(m,b,x),u=setTimeout(()=>{u=null,m.style.height=0,c=v=>{h=null,(Object(v)!==v||v.target===m)&&w(m,"hide")},m.addEventListener("transitionend",c),h=setTimeout(c,e.duration*1.1)},100)}return U(()=>{l===!0&&i()}),()=>S(It,{css:!1,appear:e.appear,onEnter:g,onLeave:d},n.default)}});const X=Ot({}),rn=Object.keys(et);var un=D({name:"QExpansionItem",props:{...et,...lt,...st,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...it,"click","afterShow","afterHide"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=G(),t=ct(e,l),a=L(e.modelValue!==null?e.modelValue:e.defaultOpened),u=L(null),h=Ke(),{show:c,hide:s,toggle:i}=rt({showing:a});let y,w;const g=f(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),d=f(()=>{if(e.contentInsetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:e.contentInsetLevel*56+"px"}}),m=f(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),x=f(()=>{const p={};return rn.forEach($=>{p[$]=e[$]}),p}),b=f(()=>m.value===!0||e.expandIconToggle!==!0),v=f(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),_=f(()=>e.disable!==!0&&(m.value===!0||e.expandIconToggle===!0)),C=f(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:i,show:c,hide:s})),T=f(()=>{const p=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":h,"aria-label":p}});q(()=>e.group,p=>{w!==void 0&&w(),p!==void 0&&F()});function E(p){m.value!==!0&&i(p),o("click",p)}function H(p){p.keyCode===13&&A(p,!0)}function A(p,$){$!==!0&&u.value!==null&&u.value.focus(),i(p),nt(p)}function Q(){o("afterShow")}function P(){o("afterHide")}function F(){y===void 0&&(y=Ke()),a.value===!0&&(X[e.group]=y);const p=q(a,V=>{V===!0?X[e.group]=y:X[e.group]===y&&delete X[e.group]}),$=q(()=>X[e.group],(V,he)=>{he===y&&V!==void 0&&V!==y&&s()});w=()=>{p(),$(),X[e.group]===y&&delete X[e.group],w=void 0}}function le(){const p={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},$=[S(de,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:v.value})];return _.value===!0&&(Object.assign(p,{tabindex:0,...T.value,onClick:A,onKeyup:H}),$.unshift(S("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),S(ne,p,()=>$)}function N(){let p;return n.header!==void 0?p=[].concat(n.header(C.value)):(p=[S(ne,()=>[S(We,{lines:e.labelLines},()=>e.label||""),e.caption?S(We,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&p[e.switchToggleSide===!0?"push":"unshift"](S(ne,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>S(de,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&p[e.switchToggleSide===!0?"unshift":"push"](le()),p}function ee(){const p={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return b.value===!0&&(p.clickable=!0,p.onClick=E,Object.assign(p,m.value===!0?x.value:T.value)),S(ut,p,N)}function ie(){return Be(S("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:d.value,id:h},oe(n.default)),[[$t,a.value]])}function J(){const p=[ee(),S(ln,{duration:e.duration,onShow:Q,onHide:P},ie)];return e.expandSeparator===!0&&p.push(S(Ne,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),S(Ne,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),p}return e.group!==void 0&&F(),U(()=>{w!==void 0&&w()}),()=>S("div",{class:g.value},[S("div",{class:"q-expansion-item__container relative-position"},J())])}});const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},sn=Object.keys(Pe);Pe.all=!0;function Ye(e){const n={};for(const o of sn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Pe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function Xe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Te(e,n,o){const l=Ee(e);let t,a=l.left-n.event.x,u=l.top-n.event.y,h=Math.abs(a),c=Math.abs(u);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",h>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",h>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",h<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",h<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,i=!0,t==="left"||t==="right"?(l.left-=a,h=0,a=0):(l.top-=u,c=0,u=0)}return{synthetic:i,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:h,y:c},offset:{x:a,y:u},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let cn=0;var Le=Tt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&te.has.touch!==!0)return;function l(a,u){o.mouse===!0&&u===!0?nt(a):(o.stop===!0&&we(a),o.prevent===!0&&He(a))}const t={uid:"qvtp_"+cn++,handler:n,modifiers:o,direction:Ye(o),noop:$e,mouseStart(a){Xe(a,t)&&zt(a)&&(ue(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Xe(a,t)){const u=a.target;ue(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(te.is.firefox===!0&&ye(e,!0),t.lastEvt=a,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&He(s),a.cancelBubble===!0&&we(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}we(a)}const{left:h,top:c}=Ee(a);t.event={x:h,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:c}},move(a){if(t.event===void 0)return;const u=Ee(a),h=u.left-t.event.x,c=u.top-t.event.y;if(h===0&&c===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{l(a,s);let g;o.preserveCursor!==!0&&o.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Wt(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),s===!0){const m=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{m(),d()},50):m()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:g,synthetic:d}=Te(a,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=d===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const y=Math.abs(h),w=Math.abs(c);y!==w&&(t.direction.horizontal===!0&&y>w||t.direction.vertical===!0&&y<w||t.direction.up===!0&&y<w&&c<0||t.direction.down===!0&&y<w&&c>0||t.direction.left===!0&&y>w&&h<0||t.direction.right===!0&&y>w&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(Se(t,"temp"),te.is.firefox===!0&&ye(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=Te(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}te.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Ye(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),Se(n,"main"),Se(n,"temp"),te.is.firefox===!0&&ye(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Ge=150;var dn=D({name:"QDrawer",inheritAttrs:!1,props:{...lt,...st,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...it,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:l}){const t=G(),{proxy:{$q:a}}=t,u=ct(e,a),{preventBodyScroll:h}=Ut(),{registerTimeout:c,removeTimeout:s}=jt(),i=ze(ve,R);if(i===R)return console.error("QDrawer needs to be child of QLayout"),R;let y,w=null,g;const d=L(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),m=f(()=>e.mini===!0&&d.value!==!0),x=f(()=>m.value===!0?e.miniWidth:e.width),b=L(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),v=f(()=>e.persistent!==!0&&(d.value===!0||he.value===!0));function _(r,k){if(H(),r!==!1&&i.animate(),z(0),d.value===!0){const I=i.instances[J.value];I!==void 0&&I.belowBreakpoint===!0&&I.hide(!1),W(1),i.isContainer.value!==!0&&h(!0)}else W(0),r!==!1&&ge(!1);c(()=>{r!==!1&&ge(!0),k!==!0&&o("show",r)},Ge)}function C(r,k){A(),r!==!1&&i.animate(),W(0),z(F.value*x.value),be(),k!==!0?c(()=>{o("hide",r)},Ge):s()}const{show:T,hide:E}=rt({showing:b,hideOnRouteChange:v,handleShow:_,handleHide:C}),{addToHistory:H,removeFromHistory:A}=Kt(b,E,v),Q={belowBreakpoint:d,hide:E},P=f(()=>e.side==="right"),F=f(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),le=L(0),N=L(!1),ee=L(!1),ie=L(x.value*F.value),J=f(()=>P.value===!0?"left":"right"),p=f(()=>b.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),$=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),V=f(()=>e.overlay===!1&&b.value===!0&&d.value===!1),he=f(()=>e.overlay===!0&&b.value===!0&&d.value===!1),ft=f(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&N.value===!1?" hidden":"")),vt=f(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),De=f(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),ht=f(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),mt=f(()=>{const r={};return i.header.space===!0&&De.value===!1&&($.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&ht.value===!1&&($.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),gt=f(()=>{const r={width:`${x.value}px`,transform:`translateX(${ie.value}px)`};return d.value===!0?r:Object.assign(r,mt.value)}),bt=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),pt=f(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${m.value===!0?"mini":"standard"}`+($.value===!0||V.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),yt=f(()=>{const r=a.lang.rtl===!0?e.side:J.value;return[[Le,xt,void 0,{[r]:!0,mouse:!0}]]}),wt=f(()=>{const r=a.lang.rtl===!0?J.value:e.side;return[[Le,Ve,void 0,{[r]:!0,mouse:!0}]]}),St=f(()=>{const r=a.lang.rtl===!0?J.value:e.side;return[[Le,Ve,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){kt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(d,r=>{r===!0?(y=b.value,b.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(b.value===!0?(z(0),W(0),be()):T(!1))}),q(()=>e.side,(r,k)=>{i.instances[k]===Q&&(i.instances[k]=void 0,i[k].space=!1,i[k].offset=0),i.instances[r]=Q,i[r].size=x.value,i[r].space=V.value,i[r].offset=p.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),q(()=>e.behavior+e.breakpoint,me),q(i.isContainer,r=>{b.value===!0&&h(r!==!0),r===!0&&me()}),q(i.scrollbarWidth,()=>{z(b.value===!0?0:void 0)}),q(p,r=>{j("offset",r)}),q(V,r=>{o("onLayout",r),j("space",r)}),q(P,()=>{z()}),q(x,r=>{z(),pe(e.miniToOverlay,r)}),q(()=>e.miniToOverlay,r=>{pe(r,x.value)}),q(()=>a.lang.rtl,()=>{z()}),q(()=>e.mini,()=>{e.modelValue===!0&&(Ct(),i.animate())}),q(m,r=>{o("miniState",r)});function z(r){r===void 0?fe(()=>{r=b.value===!0?0:x.value,z(F.value*r)}):(i.isContainer.value===!0&&P.value===!0&&(d.value===!0||Math.abs(r)===x.value)&&(r+=F.value*i.scrollbarWidth.value),ie.value=r)}function W(r){le.value=r}function ge(r){const k=r===!0?"remove":i.isContainer.value!==!0?"add":"";k!==""&&document.body.classList[k]("q-body--drawer-toggle")}function Ct(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,w=setTimeout(()=>{w=null,ee.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function xt(r){if(b.value!==!1)return;const k=x.value,I=ce(r.distance.x,0,k);if(r.isFinal===!0){I>=Math.min(75,k)===!0?T():(i.animate(),W(0),z(F.value*k)),N.value=!1;return}z((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(k-I,0):Math.min(0,I-k)),W(ce(I/k,0,1)),r.isFirst===!0&&(N.value=!0)}function Ve(r){if(b.value!==!0)return;const k=x.value,I=r.direction===e.side,re=(a.lang.rtl===!0?I!==!0:I)?ce(r.distance.x,0,k):0;if(r.isFinal===!0){Math.abs(re)<Math.min(75,k)===!0?(i.animate(),W(1),z(0)):E(),N.value=!1;return}z(F.value*re),W(ce(1-re/k,0,1)),r.isFirst===!0&&(N.value=!0)}function be(){h(!1),ge(!0)}function j(r,k){i.update(e.side,r,k)}function kt(r,k){r.value!==k&&(r.value=k)}function pe(r,k){j("size",r===!0?e.miniWidth:k)}return i.instances[e.side]=Q,pe(e.miniToOverlay,x.value),j("space",V.value),j("offset",p.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),ae(()=>{o("onLayout",V.value),o("miniState",m.value),y=e.showIfAbove===!0;const r=()=>{(b.value===!0?_:C)(!1,!0)};if(i.totalWidth.value!==0){fe(r);return}g=q(i.totalWidth,()=>{g(),g=void 0,b.value===!1&&e.showIfAbove===!0&&d.value===!1?T(!1):r()})}),U(()=>{g!==void 0&&g(),w!==null&&(clearTimeout(w),w=null),b.value===!0&&be(),i.instances[e.side]===Q&&(i.instances[e.side]=void 0,j("size",0),j("offset",0),j("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Be(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),yt.value)),r.push(Me("div",{ref:"backdrop",class:ft.value,style:vt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>St.value)));const k=m.value===!0&&n.mini!==void 0,I=[S("div",{...l,key:""+k,class:[bt.value,l.class]},k===!0?n.mini():oe(n.default))];return e.elevated===!0&&b.value===!0&&I.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Me("aside",{ref:"content",class:pt.value,style:gt.value},I,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>wt.value)),S("div",{class:"q-drawer-container"},r)}}}),fn=D({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=G(),l=ze(ve,R);if(l===R)return console.error("QPageContainer needs to be child of QLayout"),R;at(Bt,!0);const t=f(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},oe(n.default))}});const{passive:Je}=_e,vn=["both","horizontal","vertical"];var hn=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>vn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;q(()=>e.scrollTarget,()=>{c(),h()});function u(){l!==null&&l();const y=Math.max(0,Xt(t)),w=Gt(t),g={top:y-o.position.top,left:w-o.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const d=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";o.position={top:y,left:w},o.directionChanged=o.direction!==d,o.delta=g,o.directionChanged===!0&&(o.direction=d,o.inflectionPoint=o.position),n("scroll",{...o})}function h(){t=Yt(a,e.scrollTarget),t.addEventListener("scroll",s,Je),s(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",s,Je),t=void 0)}function s(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[w,g]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{g(w),l=null}}}const{proxy:i}=G();return q(()=>i.$q.lang.rtl,u),ae(()=>{a=i.$el.parentNode,h()}),U(()=>{l!==null&&l(),c()}),Object.assign(i,{trigger:s,getPosition:()=>o}),$e}}),mn=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=G(),t=L(null),a=L(l.screen.height),u=L(e.container===!0?0:l.screen.width),h=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),s=L(tt.value===!0?0:qe()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),w=f(()=>s.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),g=f(()=>s.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function d(C){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:C.position.top,direction:C.direction,directionChanged:C.directionChanged,inflectionPoint:C.inflectionPoint.top,delta:C.delta.top};h.value=T,e.onScroll!==void 0&&o("scroll",T)}}function m(C){const{height:T,width:E}=C;let H=!1;a.value!==T&&(H=!0,a.value=T,e.onScrollHeight!==void 0&&o("scrollHeight",T),b()),u.value!==E&&(H=!0,u.value=E),H===!0&&e.onResize!==void 0&&o("resize",C)}function x({height:C}){c.value!==C&&(c.value=C,b())}function b(){if(e.container===!0){const C=a.value>c.value?qe():0;s.value!==C&&(s.value=C)}}let v=null;const _={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:s,totalWidth:f(()=>u.value+s.value),rows:f(()=>{const C=e.view.toLowerCase().split(" ");return{top:C[0].split(""),middle:C[1].split(""),bottom:C[2].split("")}}),header:se({size:0,offset:0,space:!1}),right:se({size:300,offset:0,space:!1}),footer:se({size:0,offset:0,space:!1}),left:se({size:300,offset:0,space:!1}),scroll:h,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(C,T,E){_[C][T]=E}};if(at(ve,_),qe()>0){let E=function(){C=null,T.classList.remove("hide-scrollbar")},H=function(){if(C===null){if(T.scrollHeight>l.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(C);C=setTimeout(E,300)},A=function(Q){C!==null&&Q==="remove"&&(clearTimeout(C),E()),window[`${Q}EventListener`]("resize",H)},C=null;const T=document.body;q(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),Pt(()=>{A("remove")})}return()=>{const C=Lt(n.default,[S(hn,{onScroll:d}),S(Oe,{onResize:m})]),T=S("div",{class:i.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},C);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Oe,{onResize:x}),S("div",{class:"absolute-full",style:w.value},[S("div",{class:"scroll",style:g.value},[T])])]):T}}});const gn=["search","text"],Ze=(e,n,o=!0)=>{const l={};return Object.keys(e).forEach(t=>{(o?n.indexOf(t)===-1:n.indexOf(t)>=0)&&(l[t]=e[t])}),l},K=(e=!0)=>({type:Boolean,default:e}),bn=ot({inheritAttrs:!1,props:{type:{type:String,default:"search",validator:e=>gn.includes(e)},modelValue:{type:String,default:""},wrapperClass:{type:String,default:"search-input-wrapper"},searchIcon:K(),shortcutIcon:K(),clearIcon:K(),hideShortcutIconOnBlur:K(),clearOnEsc:K(),blurOnEsc:K(),selectOnFocus:K(),shortcutListenerEnabled:K(),shortcutKey:{type:String,default:"/"}},emits:["update:modelValue"],setup(e,{emit:n,attrs:o}){const l=L(!1),t=L(null),a=f(()=>Ze(o,["class","style"])),u=f(()=>{const d=Ze(o,["class","style"],!1);return d.class||(d.class=e.wrapperClass),d}),h=f(()=>!!(e.clearIcon&&e.modelValue.length>0)),c=f(()=>!!(e.shortcutIcon&&!l.value&&!e.hideShortcutIconOnBlur||e.shortcutIcon&&!l.value&&e.modelValue.length===0)),s=()=>{n("update:modelValue","")},i=d=>{n("update:modelValue",d.target.value)},y=d=>{d.key==="Escape"&&(e.clearOnEsc&&s(),e.blurOnEsc&&t.value.blur())},w=d=>{if(d.key===e.shortcutKey&&d.target!==t.value&&window.document.activeElement!==t.value&&!(d.target instanceof HTMLInputElement)&&!(d.target instanceof HTMLSelectElement)&&!(d.target instanceof HTMLTextAreaElement)){d.preventDefault();const m=[].slice.call(document.querySelectorAll('[data-search-input="true"]:not([data-shortcut-enabled="false"])')).filter(b=>!!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)),x=m.length>1?m[0]:t.value;x==null||x.focus(),e.selectOnFocus&&(x==null||x.select())}},g=()=>window.document.removeEventListener("keydown",w);return q(()=>e.shortcutListenerEnabled,d=>{d?window.document.addEventListener("keydown",w):g()},{immediate:!0}),U(()=>{g()}),{inputRef:t,hasFocus:l,clear:s,onInput:i,onKeydown:y,attrsStyles:u,attrsWithoutStyles:a,showClearIcon:h,showShortcutIcon:c}}}),pn=(e,n)=>{const o=e.__vccOpts||e;for(const[l,t]of n)o[l]=t;return o},yn=M("i",{class:"search-icon search"},null,-1),wn=["data-shortcut-enabled","value"],Sn=M("i",{class:"search-icon shortcut",title:'Press "/" to search'},null,-1);function Cn(e,n,o,l,t,a){return Z(),Ie("div",Mt(Ht(e.attrsStyles)),[Y(e.$slots,"prepend"),e.searchIcon?Y(e.$slots,"search-icon",{key:0},()=>[yn]):Ce("",!0),Y(e.$slots,"prepend-inner"),M("input",Dt({ref:"inputRef",type:"search","data-search-input":"true","data-shortcut-enabled":e.shortcutListenerEnabled,value:e.modelValue},e.attrsWithoutStyles,{onInput:n[0]||(n[0]=(...u)=>e.onInput&&e.onInput(...u)),onFocus:n[1]||(n[1]=u=>e.hasFocus=!0),onBlur:n[2]||(n[2]=u=>e.hasFocus=!1),onKeydown:n[3]||(n[3]=(...u)=>e.onKeydown&&e.onKeydown(...u))}),null,16,wn),Y(e.$slots,"append"),e.showShortcutIcon?Y(e.$slots,"shortcut-icon",{key:1},()=>[Sn]):Ce("",!0),e.showClearIcon?Y(e.$slots,"clear-icon",{key:2,clear:e.clear},()=>[M("button",{class:"search-icon clear","aria-label":"Clear",onMousedown:n[4]||(n[4]=(...u)=>e.clear&&e.clear(...u)),onKeydown:n[5]||(n[5]=Vt((...u)=>e.clear&&e.clear(...u),["space","enter"]))},null,32)]):Ce("",!0),Y(e.$slots,"append-outer")],16)}const xn=pn(bn,[["render",Cn]]);const kn=ot({name:"MainLayout",components:{SearchInput:xn},data(){return{darkMode:!0,documentation:{features:[]},enpoints:[],search:""}},watch:{documentation(e){this.enpoints=[],e.features.forEach(n=>{this.enpoints=[...this.enpoints,n.endpoints]})},darkMode(e){this.toggleDarkMode()},search(e){let n=null;for(let o of this.enpoints)if(console.log(o),this.parseActionName(o.action).toLowerCase().startsWith(e.toLowerCase())||o.action.toLowerCase().startsWith(e.toLowerCase())){n=o;break}this.setEndpoint(n)}},computed:{...Ft(Jt),sortedFeatures(){return[...this.documentation.features].sort((n,o)=>n.group_name.localeCompare(o.group_name))}},methods:{getResultValue(e){return this.parseActionName(e.action)},getSortedEnpoints(e){return e.sort((n,o)=>n.action.localeCompare(o.action))},setEndpoint(e){this.docsStore.setEnpoint(e)},toggleDarkMode(){this.$q.dark.set(this.darkMode)},parseActionName(e){let n=e.split("-");for(let o=0;o<n.length;o++)n[o]=n[o][0].toUpperCase()+n[o].slice(1);return n.join(" ")},getDocumentationData(){Zt.get("/api-docs").then(e=>{this.documentation=e.data})}},mounted(){this.getDocumentationData()},setup(){const e=L(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),qn={style:{display:"flex"}},Tn={class:"title"},Ln={class:"q-ml-md searchbar"},_n={class:"q-mb-md text-center q-mt-sm d-flex"},En=M("strong",null,"Dark",-1);function In(e,n,o,l,t,a){const u=Qe("SearchInput"),h=Qe("router-view");return Z(),xe(mn,{view:"lHh Lpr lFf"},{default:B(()=>[O(an,{elevated:""},{default:B(()=>[O(tn,{class:"bg-orange text-white"},{default:B(()=>[O(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),O(en,null,{default:B(()=>[M("div",qn,[M("div",Tn,ke(e.documentation.app_name),1),M("div",Ln,[O(u,{modelValue:e.search,"onUpdate:modelValue":n[0]||(n[0]=c=>e.search=c)},null,8,["modelValue"])])])]),_:1}),M("div",null,"v"+ke(e.documentation.app_version),1)]),_:1})]),_:1}),O(dn,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[2]||(n[2]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:B(()=>[O(je,{bordered:"",class:"rounded-borders"},{default:B(()=>[M("div",_n,[En,Fe(),O(on,{modelValue:e.darkMode,"onUpdate:modelValue":n[1]||(n[1]=c=>e.darkMode=c),color:"orange","keep-color":""},null,8,["modelValue"])]),(Z(!0),Ie(Ae,null,Re(e.sortedFeatures,(c,s)=>(Z(),xe(un,{"expand-separator":"",icon:"star",label:c.group_name,caption:`${c.endpoints.length} endpoints`,"content-inset-level":.5,key:s},{default:B(()=>[O(je,{bordered:""},{default:B(()=>[(Z(!0),Ie(Ae,null,Re(e.getSortedEnpoints(c.endpoints),(i,y)=>Be((Z(),xe(ut,{key:y,clickable:"",onClick:w=>e.setEndpoint(i)},{default:B(()=>[O(ne,{avatar:""},{default:B(()=>[O(de,{color:"orange",name:"check"})]),_:1}),O(ne,null,{default:B(()=>[Fe(ke(e.parseActionName(i.action)),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Et]])),128))]),_:2},1024)]),_:2},1032,["label","caption"]))),128))]),_:1})]),_:1},8,["modelValue"]),O(fn,null,{default:B(()=>[O(h)]),_:1})]),_:1})}var Vn=Qt(kn,[["render",In]]);export{Vn as default};
