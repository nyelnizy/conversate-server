import{c as i,h as d}from"./index.8a6e5612.js";const l={dark:{type:Boolean,default:null}};function m(t,r){return i(()=>t.dark===null?r.dark.isActive:t.dark)}const y={name:String};function p(t={}){return(r,e,o)=>{r[e](d("input",{class:"hidden"+(o||""),...t.value}))}}function w(t){return i(()=>t.name||t.for)}let a,s=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const c=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return r=>{const e=new Uint8Array(r);return t.getRandomValues(e),e}}return r=>{const e=[];for(let o=r;o>0;o--)e.push(Math.floor(Math.random()*256));return e}})(),u=4096;function x(){(a===void 0||s+16>u)&&(s=0,a=c(u));const t=Array.prototype.slice.call(a,s,s+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}export{m as a,x as b,y as c,p as d,w as e,l as u};
