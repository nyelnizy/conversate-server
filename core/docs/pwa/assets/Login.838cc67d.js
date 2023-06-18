import{u as ue,a as de,c as ce,b as fe,e as ge,f as J,g as me}from"./use-key-composition.b70a35f5.js";import{a as X,w as T,e as j,b$ as ve,c as V,d as he,o as ke,h as Z,bZ as we,g as re,z as ee,_ as xe,H as Me,I as ye,V as $,U as te,L as ie,be,bd as Ce}from"./index.8addfbc3.js";import{c as Se,e as Ve,u as Fe,a as _e}from"./uid.eeb1c44a.js";import{c as G,h as oe,f as Ee}from"./QBtn.40378ec1.js";const ae={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Q={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},se=Object.keys(Q);se.forEach(e=>{Q[e].regex=new RegExp(Q[e].pattern)});const Re=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+se.join("")+"])|(.)","g"),ne=/[.*+?^${}()|[\]\\]/g,k=String.fromCharCode(1),Ae={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function pe(e,v,F,M){let s,g,C,A,q,x;const y=X(null),c=X(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,z),T(()=>e.mask,l=>{if(l!==void 0)B(c.value,!0);else{const a=E(c.value);z(),e.modelValue!==a&&v("update:modelValue",a)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{y.value===!0&&B(c.value,!0)}),T(()=>e.unmaskedValue,()=>{y.value===!0&&B(c.value)});function _(){if(z(),y.value===!0){const l=D(E(e.modelValue));return e.fillMask!==!1?U(l):l}return e.modelValue}function P(l){if(l<s.length)return s.slice(-l);let a="",r=s;const n=r.indexOf(k);if(n>-1){for(let o=l-r.length;o>0;o--)a+=k;r=r.slice(0,n)+a+r.slice(n)}return r}function z(){if(y.value=e.mask!==void 0&&e.mask.length>0&&H(),y.value===!1){A=void 0,s="",g="";return}const l=ae[e.mask]===void 0?e.mask:ae[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=a.replace(ne,"\\$&"),n=[],o=[],i=[];let h=e.reverseFillMask===!0,u="",d="";l.replace(Re,(w,t,m,p,R)=>{if(p!==void 0){const b=Q[p];i.push(b),d=b.negate,h===!0&&(o.push("(?:"+d+"+)?("+b.pattern+"+)?(?:"+d+"+)?("+b.pattern+"+)?"),h=!1),o.push("(?:"+d+"+)?("+b.pattern+")?")}else if(m!==void 0)u="\\"+(m==="\\"?"":m),i.push(m),n.push("([^"+u+"]+)?"+u+"?");else{const b=t!==void 0?t:R;u=b==="\\"?"\\\\\\\\":b.replace(ne,"\\\\$&"),i.push(b),n.push("([^"+u+"]+)?"+u+"?")}});const O=new RegExp("^"+n.join("")+"("+(u===""?".":"[^"+u+"]")+"+)?"+(u===""?"":"["+u+"]*")+"$"),N=o.length-1,f=o.map((w,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+w):t===N?new RegExp("^"+w+"("+(d===""?".":d)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+w));C=i,A=w=>{const t=O.exec(e.reverseFillMask===!0?w:w.slice(0,i.length+1));t!==null&&(w=t.slice(1).join(""));const m=[],p=f.length;for(let R=0,b=w;R<p;R++){const L=f[R].exec(b);if(L===null)break;b=b.slice(L.shift().length),m.push(...L)}return m.length>0?m.join(""):w},s=i.map(w=>typeof w=="string"?w:k).join(""),g=s.split(k).join(a)}function B(l,a,r){const n=M.value,o=n.selectionEnd,i=n.value.length-o,h=E(l);a===!0&&z();const u=D(h),d=e.fillMask!==!1?U(u):u,O=c.value!==d;n.value!==d&&(n.value=d),O===!0&&(c.value=d),document.activeElement===n&&j(()=>{if(d===g){const f=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(f,f,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const f=n.selectionEnd;let w=o-1;for(let t=q;t<=w&&t<f;t++)s[t]!==k&&w++;S.right(n,w);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const f=e.reverseFillMask===!0?o===0?d.length>u.length?1:0:Math.max(0,d.length-(d===g?0:Math.min(u.length,i)+1))+1:o;n.setSelectionRange(f,f,"forward");return}if(e.reverseFillMask===!0)if(O===!0){const f=Math.max(0,d.length-(d===g?0:Math.min(u.length,i+1)));f===1&&o===1?n.setSelectionRange(f,f,"forward"):S.rightReverse(n,f)}else{const f=d.length-i;n.setSelectionRange(f,f,"backward")}else if(O===!0){const f=Math.max(0,s.indexOf(k),Math.min(u.length,o)-1);S.right(n,f)}else{const f=o-1;S.right(n,f)}});const N=e.unmaskedValue===!0?E(d):d;String(e.modelValue)!==N&&F(N,!0)}function Y(l,a,r){const n=D(E(l.value));a=Math.max(0,s.indexOf(k),Math.min(n.length,a)),q=a,l.setSelectionRange(a,r,"forward")}const S={left(l,a){const r=s.slice(a-1).indexOf(k)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(s[n]===k){a=n,r===!0&&a++;break}if(n<0&&s[a]!==void 0&&s[a]!==k)return S.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const r=l.value.length;let n=Math.min(r,a+1);for(;n<=r;n++)if(s[n]===k){a=n;break}else s[n-1]===k&&(a=n);if(n>r&&s[a-1]!==void 0&&s[a-1]!==k)return S.left(l,r);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const r=P(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(r[n-1]===k){a=n;break}else if(r[n]===k&&(a=n,n===0))break;if(n<0&&r[a]!==void 0&&r[a]!==k)return S.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const r=l.value.length,n=P(r),o=n.slice(0,a+1).indexOf(k)===-1;let i=Math.min(r,a+1);for(;i<=r;i++)if(n[i-1]===k){a=i,a>0&&o===!0&&a--;break}if(i>r&&n[a-1]!==void 0&&n[a-1]!==k)return S.leftReverse(l,r);l.setSelectionRange(a,a,"forward")}};function W(l){v("click",l),x=void 0}function K(l){if(v("keydown",l),ve(l)===!0)return;const a=M.value,r=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(x=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&x===void 0&&(x=a.selectionDirection==="forward"?r:n);const o=S[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),o(a,x===r?n:r),l.shiftKey){const i=a.selectionStart;a.setSelectionRange(Math.min(x,i),Math.max(x,i),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&r===n?(S.left(a,r),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&r===n&&(S.rightReverse(a,n),a.setSelectionRange(r,a.selectionEnd,"forward"))}function D(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return I(l);const a=C;let r=0,n="";for(let o=0;o<a.length;o++){const i=l[r],h=a[o];if(typeof h=="string")n+=h,i===h&&r++;else if(i!==void 0&&h.regex.test(i))n+=h.transform!==void 0?h.transform(i):i,r++;else return n}return n}function I(l){const a=C,r=s.indexOf(k);let n=l.length-1,o="";for(let i=a.length-1;i>=0&&n>-1;i--){const h=a[i];let u=l[n];if(typeof h=="string")o=h+o,u===h&&n--;else if(u!==void 0&&h.regex.test(u))do o=(h.transform!==void 0?h.transform(u):u)+o,n--,u=l[n];while(r===i&&u!==void 0&&h.regex.test(u));else return o}return o}function E(l){return typeof l!="string"||A===void 0?typeof l=="number"?A(""+l):l:A(l)}function U(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:c,hasMask:y,moveCursorForPaste:Y,updateMaskValue:B,onMaskedKeydown:K,onMaskedClick:W}}function Ie(e,v){function F(){const M=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(M)===M&&("length"in M?Array.from(M):[M]).forEach(g=>{s.items.add(g)}),{files:s.files}}catch{return{files:void 0}}}return v===!0?V(()=>{if(e.type==="file")return F()}):V(F)}var le=G({name:"QInput",inheritAttrs:!1,props:{...ue,...Ae,...Se,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...de,"paste","change","keydown","click","animationend"],setup(e,{emit:v,attrs:F}){const{proxy:M}=re(),{$q:s}=M,g={};let C=NaN,A,q,x=null,y;const c=X(null),H=Ve(e),{innerValue:_,hasMask:P,moveCursorForPaste:z,updateMaskValue:B,onMaskedKeydown:Y,onMaskedClick:S}=pe(e,v,u,c),W=Ie(e,!0),K=V(()=>J(_.value)),D=me(i),I=ce(),E=V(()=>e.type==="textarea"||e.autogrow===!0),U=V(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),l=V(()=>{const t={...I.splitAttrs.listeners.value,onInput:i,onPaste:o,onChange:O,onBlur:N,onFocus:ee};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=D,P.value===!0&&(t.onKeydown=Y,t.onClick=S),e.autogrow===!0&&(t.onAnimationend=h),t}),a=V(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});T(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),T(()=>e.modelValue,t=>{if(P.value===!0){if(q===!0&&(q=!1,String(t)===C))return;B(t)}else _.value!==t&&(_.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(A===!0?A=!1:delete g.value));e.autogrow===!0&&j(d)}),T(()=>e.autogrow,t=>{t===!0?j(d):c.value!==null&&F.rows>0&&(c.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&j(d)});function r(){ge(()=>{const t=document.activeElement;c.value!==null&&c.value!==t&&(t===null||t.id!==I.targetUid.value)&&c.value.focus({preventScroll:!0})})}function n(){c.value!==null&&c.value.select()}function o(t){if(P.value===!0&&e.reverseFillMask!==!0){const m=t.target;z(m,m.selectionStart,m.selectionEnd)}v("paste",t)}function i(t){if(!t||!t.target)return;if(e.type==="file"){v("update:modelValue",t.target.files);return}const m=t.target.value;if(t.target.qComposing===!0){g.value=m;return}if(P.value===!0)B(m,!1,t.inputType);else if(u(m),U.value===!0&&t.target===document.activeElement){const{selectionStart:p,selectionEnd:R}=t.target;p!==void 0&&R!==void 0&&j(()=>{t.target===document.activeElement&&m.indexOf(t.target.value)===0&&t.target.setSelectionRange(p,R)})}e.autogrow===!0&&d()}function h(t){v("animationend",t),d()}function u(t,m){y=()=>{x=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&C!==t&&(C=t,m===!0&&(q=!0),v("update:modelValue",t),j(()=>{C===t&&(C=NaN)})),y=void 0},e.type==="number"&&(A=!0,g.value=t),e.debounce!==void 0?(x!==null&&clearTimeout(x),g.value=t,x=setTimeout(y,e.debounce)):y()}function d(){requestAnimationFrame(()=>{const t=c.value;if(t!==null){const m=t.parentNode.style,{scrollTop:p}=t,{overflowY:R,maxHeight:b}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),L=R!==void 0&&R!=="scroll";L===!0&&(t.style.overflowY="hidden"),m.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",L===!0&&(t.style.overflowY=parseInt(b,10)<t.scrollHeight?"auto":"hidden"),m.marginBottom="",t.scrollTop=p}})}function O(t){D(t),x!==null&&(clearTimeout(x),x=null),y!==void 0&&y(),v("change",t.target.value)}function N(t){t!==void 0&&ee(t),x!==null&&(clearTimeout(x),x=null),y!==void 0&&y(),A=!1,q=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=_.value!==void 0?_.value:"")})}function f(){return g.hasOwnProperty("value")===!0?g.value:_.value!==void 0?_.value:""}he(()=>{N()}),ke(()=>{e.autogrow===!0&&d()}),Object.assign(I,{innerValue:_,fieldClass:V(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:V(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:c,emitValue:u,hasValue:K,floatingLabel:V(()=>K.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||J(e.displayValue)),getControl:()=>Z(E.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:f()}:W.value}),getShadowControl:()=>Z("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[Z("span",{class:"invisible"},f()),Z("span",e.shadowText)])});const w=fe(I);return Object.assign(M,{focus:r,select:n,getNativeElement:()=>c.value}),we(M,"nativeEl",()=>c.value),w}}),Te=G({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:v}){const F=V(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Z(e.tag,{class:F.value},oe(v.default))}}),qe=G({name:"QCard",props:{...Fe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:v}){const{proxy:{$q:F}}=re(),M=_e(e,F),s=V(()=>"q-card"+(M.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>Z(e.tag,{class:s.value},oe(v.default))}});const Pe={name:"LoginPage",data(){return{credentials:{email:"",password:""}}},methods:{login(){if(!this.credentials.email||!this.credentials.password)return alert("Invalid data");this.$api.post("/api-login",this.credentials).then(e=>{localStorage.setItem("token",e.data),setTimeout(()=>{this.$router.push("/")},100)}).catch(e=>{alert("Failed to login")})}}},Be=e=>(be("data-v-3cc59c36"),e=e(),Ce(),e),Oe={class:"login-page"},Ne=Be(()=>ie("p",{style:{"text-align":"center","font-weight":"bolder","font-size":"16px","margin-top":"10px","margin-bottom":"-5px"}}," Login to Access API Docs ",-1));function ze(e,v,F,M,s,g){return Me(),ye("div",Oe,[$(qe,{class:"login-card"},{default:te(()=>[Ne,$(Te,null,{default:te(()=>[ie("div",null,[$(le,{modelValue:s.credentials.email,"onUpdate:modelValue":v[0]||(v[0]=C=>s.credentials.email=C),label:"Email"},null,8,["modelValue"]),$(le,{modelValue:s.credentials.password,"onUpdate:modelValue":v[1]||(v[1]=C=>s.credentials.password=C),type:"password",label:"Password"},null,8,["modelValue"]),$(Ee,{color:"orange",label:"Login",class:"q-my-md float-right",onClick:g.login},null,8,["onClick"])])]),_:1})]),_:1})])}var $e=xe(Pe,[["render",ze],["__scopeId","data-v-3cc59c36"]]);export{$e as default};
