import{a as M,u as R,c as se,d as ue}from"./uid.7bfa873a.js";import{g as ce,e as de,h as A,i as fe,c as _,u as ve,j as me,a as ge,v as be,k as pe,l as K,m as he}from"./QBtn.f86a62ba.js";import{a as H,c as u,h as p,g as E,X as V,p as z,W as we,w as N,o as ye,e as X,d as te,Y,q as L,l as x,Z as qe,$ as ke,a0 as xe,a1 as Se}from"./index.afc233fa.js";function Te(e,l){const t=H(null),o=u(()=>e.disable===!0?null:p("span",{ref:t,class:"no-outline",tabindex:-1}));function n(c){const s=l.value;c!==void 0&&c.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():t.value!==null&&(c===void 0||s!==null&&s.contains(c.target)===!0)&&t.value.focus()}return{refocusTargetEl:o,refocusTarget:n}}var Ve={xs:30,sm:35,md:40,lg:50,xl:60};const Re={...R,...fe,...se,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ae=["update:modelValue"];function We(e,l){const{props:t,slots:o,emit:n,proxy:c}=E(),{$q:s}=c,v=M(t,s),d=H(null),{refocusTargetEl:h,refocusTarget:f}=Te(t,d),y=ce(t,Ve),b=u(()=>t.val!==void 0&&Array.isArray(t.modelValue)),g=u(()=>{const i=V(t.val);return b.value===!0?t.modelValue.findIndex(k=>V(k)===i):-1}),m=u(()=>b.value===!0?g.value>-1:V(t.modelValue)===V(t.trueValue)),w=u(()=>b.value===!0?g.value===-1:V(t.modelValue)===V(t.falseValue)),q=u(()=>m.value===!1&&w.value===!1),T=u(()=>t.disable===!0?-1:t.tabindex||0),a=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(v.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),r=u(()=>{const i=m.value===!0?"truthy":w.value===!0?"falsy":"indet",k=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?m.value===!0:w.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${i}${k}`}),B=u(()=>{const i={type:"checkbox"};return t.name!==void 0&&Object.assign(i,{".checked":m.value,"^checked":m.value===!0?"checked":void 0,name:t.name,value:b.value===!0?t.val:t.trueValue}),i}),le=ue(B),oe=u(()=>{const i={tabindex:T.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":q.value===!0?"mixed":m.value===!0?"true":"false"};return t.disable===!0&&(i["aria-disabled"]="true"),i});function W(i){i!==void 0&&(z(i),f(i)),t.disable!==!0&&n("update:modelValue",ne(),i)}function ne(){if(b.value===!0){if(m.value===!0){const i=t.modelValue.slice();return i.splice(g.value,1),i}return t.modelValue.concat([t.val])}if(m.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(w.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function ae(i){(i.keyCode===13||i.keyCode===32)&&z(i)}function ie(i){(i.keyCode===13||i.keyCode===32)&&W(i)}const re=l(m,q);return Object.assign(c,{toggle:W}),()=>{const i=re();t.disable!==!0&&le(i,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const k=[p("div",{class:r.value,style:y.value,"aria-hidden":"true"},i)];h.value!==null&&k.push(h.value);const F=t.label!==void 0?de(o.default,[t.label]):A(o.default);return F!==void 0&&k.push(p("div",{class:`q-${e}__label q-anchor--skip`},F)),p("div",{ref:d,class:a.value,...oe.value,onClick:W,onKeydown:ae,onKeyup:ie},k)}}var Oe=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const t=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:t.value},A(l.default))}}),Qe=_({name:"QItem",props:{...R,...ve,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:t}){const{proxy:{$q:o}}=E(),n=M(e,o),{hasLink:c,linkAttrs:s,linkClass:v,linkTag:d,navigateOnClick:h}=me(),f=H(null),y=H(null),b=u(()=>e.clickable===!0||c.value===!0||e.tag==="label"),g=u(()=>e.disable!==!0&&b.value===!0),m=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=u(()=>{if(e.insetLevel===void 0)return null;const r=o.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function q(r){g.value===!0&&(y.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===f.value?y.value.focus():document.activeElement===y.value&&f.value.focus()),h(r))}function T(r){if(g.value===!0&&we(r,13)===!0){z(r),r.qKeyEvent=!0;const B=new MouseEvent("click",r);B.qKeyEvent=!0,f.value.dispatchEvent(B)}t("keyup",r)}function a(){const r=ge(l.default,[]);return g.value===!0&&r.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:y})),r}return()=>{const r={ref:f,class:m.value,style:w.value,role:"listitem",onClick:q,onKeyup:T};return g.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):b.value===!0&&(r["aria-disabled"]="true"),p(d.value,r,a())}}}),je=_({name:"QList",props:{...R,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const t=E(),o=M(e,t.proxy.$q),n=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:n.value},A(l.default))}}),De=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const t=u(()=>parseInt(e.lines,10)),o=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),n=u(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>p("div",{style:n.value,class:o.value},A(l.default))}});const Le={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},O={xs:2,sm:4,md:8,lg:16,xl:24};var Fe=_({name:"QSeparator",props:{...R,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=E(),t=M(e,l.proxy.$q),o=u(()=>e.vertical===!0?"vertical":"horizontal"),n=u(()=>` q-separator--${o.value}`),c=u(()=>e.inset!==!1?`${n.value}-${Le[e.inset]}`:""),s=u(()=>`q-separator${n.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),v=u(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const h=e.spaced===!0?`${O.md}px`:e.spaced in O?`${O[e.spaced]}px`:e.spaced,f=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${f[0]}`]=d[`margin${f[1]}`]=h}return d});return()=>p("hr",{class:s.value,style:v.value,"aria-orientation":o.value})}});const Ke={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ne=["beforeShow","show","beforeHide","hide"];function Xe({showing:e,canShow:l,hideOnRouteChange:t,handleShow:o,handleHide:n,processOnMount:c}){const s=E(),{props:v,emit:d,proxy:h}=s;let f;function y(a){e.value===!0?m(a):b(a)}function b(a){if(v.disable===!0||a!==void 0&&a.qAnchorHandled===!0||l!==void 0&&l(a)!==!0)return;const r=v["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),f=a,X(()=>{f===a&&(f=void 0)})),(v.modelValue===null||r===!1)&&g(a)}function g(a){e.value!==!0&&(e.value=!0,d("beforeShow",a),o!==void 0?o(a):d("show",a))}function m(a){if(v.disable===!0)return;const r=v["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),f=a,X(()=>{f===a&&(f=void 0)})),(v.modelValue===null||r===!1)&&w(a)}function w(a){e.value!==!1&&(e.value=!1,d("beforeHide",a),n!==void 0?n(a):d("hide",a))}function q(a){v.disable===!0&&a===!0?v["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):a===!0!==e.value&&(a===!0?g:w)(f)}N(()=>v.modelValue,q),t!==void 0&&be(s)===!0&&N(()=>h.$route.fullPath,()=>{t.value===!0&&e.value===!0&&m()}),c===!0&&ye(()=>{q(v.modelValue)});const T={show:b,hide:m,toggle:y};return Object.assign(h,T),T}function Ye(e,l,t){let o;function n(){o!==void 0&&(Y.remove(o),o=void 0)}return te(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){o={condition:()=>t.value===!0,handler:l},Y.add(o)}}}const Ee=[null,document,document.body,document.scrollingElement,document.documentElement];function Ue(e,l){let t=pe(l);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ee.includes(t)?window:t}function Ce(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function $e(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let I;function Ze(){if(I!==void 0)return I;const e=document.createElement("p"),l=document.createElement("div");K(e,{width:"100%",height:"200px"}),K(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const t=e.offsetWidth;l.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=l.clientWidth),l.remove(),I=t-o,I}function _e(e,l=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:l?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let C=0,Q,j,$,D=!1,U,Z,G,S=null;function Be(e){Ie(e)&&z(e)}function Ie(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=qe(e),t=e.shiftKey&&!e.deltaX,o=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=t||o?e.deltaY:e.deltaX;for(let c=0;c<l.length;c++){const s=l[c];if(_e(s,o))return o?n<0&&s.scrollTop===0?!0:n>0&&s.scrollTop+s.clientHeight===s.scrollHeight:n<0&&s.scrollLeft===0?!0:n>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function J(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function P(e){D!==!0&&(D=!0,requestAnimationFrame(()=>{D=!1;const{height:l}=e.target,{clientHeight:t,scrollTop:o}=document.scrollingElement;($===void 0||l!==window.innerHeight)&&($=t-l,document.scrollingElement.scrollTop=o),o>$&&(document.scrollingElement.scrollTop-=Math.ceil((o-$)/8))}))}function ee(e){const l=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:n}=window.getComputedStyle(l);Q=$e(window),j=Ce(window),U=l.style.left,Z=l.style.top,G=window.location.href,l.style.left=`-${Q}px`,l.style.top=`-${j}px`,n!=="hidden"&&(n==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,L.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",P,x.passiveCapture),window.visualViewport.addEventListener("scroll",P,x.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",J,x.passiveCapture))}L.is.desktop===!0&&L.is.mac===!0&&window[`${e}EventListener`]("wheel",Be,x.notPassive),e==="remove"&&(L.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",P,x.passiveCapture),window.visualViewport.removeEventListener("scroll",P,x.passiveCapture)):window.removeEventListener("scroll",J,x.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=U,l.style.top=Z,window.location.href===G&&window.scrollTo(Q,j),$=void 0)}function Pe(e){let l="add";if(e===!0){if(C++,S!==null){clearTimeout(S),S=null;return}if(C>1)return}else{if(C===0||(C--,C>0))return;if(l="remove",L.is.ios===!0&&L.is.nativeMobile===!0){S!==null&&clearTimeout(S),S=setTimeout(()=>{ee(l),S=null},100);return}}ee(l)}function Ge(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,Pe(l))}}}function Je(){let e=null;const l=E();function t(){e!==null&&(clearTimeout(e),e=null)}return ke(t),te(t),{removeTimeout:t,registerTimeout(o,n){t(),he(l)===!1&&(e=setTimeout(o,n))}}}function et(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),xe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function tt(e,l,t){return t<=l?l:Math.min(t,Math.max(l,e))}function lt(e,l,t){if(t<=l)return l;const o=t-l+1;let n=l+(e-l)%o;return n<l&&(n=o+n),n===0?0:n}const ot=Se("docs",{state:()=>({endpoint:null}),getters:{enpoint:e=>e.endpoint},actions:{setEnpoint(e){this.endpoint=e}}});export{Fe as Q,Ae as a,We as b,Ke as c,Ne as d,Xe as e,Qe as f,De as g,Oe as h,et as i,Je as j,Ye as k,tt as l,Ge as m,Ue as n,Ce as o,$e as p,Ze as q,ot as r,je as s,lt as t,Re as u};
