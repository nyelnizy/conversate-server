(()=>{try{self["workbox:core:6.5.3"]&&_()}catch{}var ae=(o,...e)=>{let t=o;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var ee=ae;var c=class extends Error{constructor(e,t){let r=ee(e,t);super(r),this.name=e,this.details=t}};var A=new Set;var d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},K=o=>[d.prefix,o,d.suffix].filter(e=>e&&e.length>0).join("-"),ie=o=>{for(let e of Object.keys(d))o(e)},h={updateDetails:o=>{ie(e=>{typeof o[e]=="string"&&(d[e]=o[e])})},getGoogleAnalyticsName:o=>o||K(d.googleAnalytics),getPrecacheName:o=>o||K(d.precache),getPrefix:()=>d.prefix,getRuntimeName:o=>o||K(d.runtime),getSuffix:()=>d.suffix};function te(o,e){let t=new URL(o);for(let r of e)t.searchParams.delete(r);return t.href}async function M(o,e,t,r){let s=te(e.url,t);if(e.url===s)return o.match(e,r);let n=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await o.keys(e,n);for(let i of a){let l=te(i.url,t);if(s===l)return o.match(i,r)}}var R;function I(){if(R===void 0){let o=new Response("");if("body"in o)try{new Response(o.body),R=!0}catch{R=!1}R=!1}return R}var b=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function H(){for(let o of A)await o()}var L=o=>new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),"");function x(o){return new Promise(e=>setTimeout(e,o))}function P(o,e){let t=e();return o.waitUntil(t),t}async function B(o,e){let t=null;if(o.url&&(t=new URL(o.url).origin),t!==self.location.origin)throw new c("cross-origin-copy-response",{origin:t});let r=o.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=e?e(s):s,a=I()?r.body:await r.blob();return new Response(a,n)}function G(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:6.5.3"]&&_()}catch{}var le="__WB_REVISION__";function re(o){if(!o)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(typeof o=="string"){let n=new URL(o,location.href);return{cacheKey:n.href,url:n.href}}let{revision:e,url:t}=o;if(!t)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(!e){let n=new URL(t,location.href);return{cacheKey:n.href,url:n.href}}let r=new URL(t,location.href),s=new URL(t,location.href);return r.searchParams.set(le,e),{cacheKey:r.href,url:s.href}}var q=class{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){let s=t.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}};var S=class{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:r})=>{let s=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this._precacheController=e}};try{self["workbox:strategies:6.5.3"]&&_()}catch{}function V(o){return typeof o=="string"?new Request(o):o}var C=class{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new b,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,r=V(e);if(r.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let a=await t.preloadResponse;if(a)return a}let s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(let a of this.iterateCallbacks("requestWillFetch"))r=await a({request:r.clone(),event:t})}catch(a){if(a instanceof Error)throw new c("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}let n=r.clone();try{let a;a=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))a=await i({event:t,request:n,response:a});return a}catch(a){throw s&&await this.runCallbacks("fetchDidFail",{error:a,event:t,originalRequest:s.clone(),request:n.clone()}),a}}async fetchAndCachePut(e){let t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){let t=V(e),r,{cacheName:s,matchOptions:n}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:s});r=await caches.match(a,i);for(let l of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await l({cacheName:s,matchOptions:n,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,t){let r=V(e);await x(0);let s=await this.getCacheKey(r,"write");if(!t)throw new c("cache-put-with-no-response",{url:L(s.url)});let n=await this._ensureResponseSafeToCache(t);if(!n)return!1;let{cacheName:a,matchOptions:i}=this._strategy,l=await self.caches.open(a),y=this.hasCallback("cacheDidUpdate"),w=y?await M(l,s.clone(),["__WB_REVISION__"],i):null;try{await l.put(s,y?n.clone():n)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await H(),f}for(let f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:a,oldResponse:w,newResponse:n.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let s=e;for(let n of this.iterateCallbacks("cacheKeyWillBeUsed"))s=V(await n({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let r=this._pluginStateMap.get(t);yield n=>{let a=Object.assign(Object.assign({},n),{state:r});return t[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&t.status!==200&&(t=void 0),t}};var m=class{constructor(e={}){this.cacheName=h.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,n=new C(this,{event:t,request:r,params:s}),a=this._getResponse(n,r,t),i=this._awaitComplete(a,n,r,t);return[a,i]}async _getResponse(e,t,r){await e.runCallbacks("handlerWillStart",{event:r,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new c("no-response",{url:t.url})}catch(n){if(n instanceof Error){for(let a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:n,event:r,request:t}),s)break}if(!s)throw n}for(let n of e.iterateCallbacks("handlerWillRespond"))s=await n({event:r,request:t,response:s});return s}async _awaitComplete(e,t,r,s){let n,a;try{n=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:n}),await t.doneWaiting()}catch(i){i instanceof Error&&(a=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:n,error:a}),t.destroy(),a)throw a}};var u=class extends m{constructor(e={}){e.cacheName=h.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let r=await t.cacheMatch(e);return r||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r,s=t.params||{};if(this._fallbackToNetwork){let n=s.integrity,a=e.integrity,i=!a||a===n;if(r=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?a||n:void 0})),n&&i&&e.mode!=="no-cors"){this._useDefaultCacheabilityPluginIfNeeded();let l=await t.cachePut(e,r.clone())}}else throw new c("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let r=await t.fetch(e);if(!await t.cachePut(e,r.clone()))throw new c("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[r,s]of this.plugins.entries())s!==u.copyRedirectedCacheableResponsesPlugin&&(s===u.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&t++);t===0?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}};u.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:o}){return!o||o.status>=400?null:o}};u.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:o}){return o.redirected?await B(o):o}};var v=class{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:h.getPrecacheName(e),plugins:[...t,new S({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let r of e){typeof r=="string"?t.push(r):r&&r.revision===void 0&&t.push(r.url);let{cacheKey:s,url:n}=re(r),a=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==s)throw new c("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new c("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(n,s),this._urlsToCacheModes.set(n,a),t.length>0){let i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return P(e,async()=>{let t=new q;this.strategy.plugins.push(t);for(let[n,a]of this._urlsToCacheKeys){let i=this._cacheKeysToIntegrities.get(a),l=this._urlsToCacheModes.get(n),y=new Request(n,{integrity:i,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:y,event:e}))}let{updatedURLs:r,notUpdatedURLs:s}=t;return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return P(e,async()=>{let t=await self.caches.open(this.strategy.cacheName),r=await t.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(let a of r)s.has(a.url)||(await t.delete(a),n.push(a.url));return{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new c("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}};var Q,g=()=>(Q||(Q=new v),Q);try{self["workbox:routing:6.5.3"]&&_()}catch{}var W="GET";var N=o=>o&&typeof o=="object"?o:{handle:o};var p=class{constructor(e,t,r=W){this.handler=N(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=N(e)}};var k=class extends p{constructor(e,t,r){let s=({url:n})=>{let a=e.exec(n.href);if(!!a&&!(n.origin!==location.origin&&a.index!==0))return a.slice(1)};super(s,t,r)}};var U=class{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let n=new Request(...s);return this.handleRequest({request:n,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;let s=r.origin===location.origin,{params:n,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r}),i=a&&a.handler,l=[],y=e.method;if(!i&&this._defaultHandlerMap.has(y)&&(i=this._defaultHandlerMap.get(y)),!i)return;let w;try{w=i.handle({url:r,request:e,event:t,params:n})}catch(E){w=Promise.reject(E)}let f=a&&a.catchHandler;return w instanceof Promise&&(this._catchHandler||f)&&(w=w.catch(async E=>{if(f)try{return await f.handle({url:r,request:e,event:t,params:n})}catch(Z){Z instanceof Error&&(E=Z)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw E})),w}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){let n=this._routes.get(r.method)||[];for(let a of n){let i,l=a.match({url:e,sameOrigin:t,request:r,event:s});if(l)return i=l,(Array.isArray(i)&&i.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(i=void 0),{route:a,params:i}}return{}}setDefaultHandler(e,t=W){this._defaultHandlerMap.set(t,N(e))}setCatchHandler(e){this._catchHandler=N(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new c("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new c("unregister-route-route-not-registered")}};var O,F=()=>(O||(O=new U,O.addFetchListener(),O.addCacheListener()),O);function $(o,e,t){let r;if(typeof o=="string"){let n=new URL(o,location.href),a=({url:i})=>i.href===n.href;r=new p(a,e,t)}else if(o instanceof RegExp)r=new k(o,e,t);else if(typeof o=="function")r=new p(o,e,t);else if(o instanceof p)r=o;else throw new c("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return F().registerRoute(r),r}function oe(o,e=[]){for(let t of[...o.searchParams.keys()])e.some(r=>r.test(t))&&o.searchParams.delete(t);return o}function*se(o,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:s}={}){let n=new URL(o,location.href);n.hash="",yield n.href;let a=oe(n,e);if(yield a.href,t&&a.pathname.endsWith("/")){let i=new URL(a.href);i.pathname+=t,yield i.href}if(r){let i=new URL(a.href);i.pathname+=".html",yield i.href}if(s){let i=s({url:n});for(let l of i)yield l.href}}var T=class extends p{constructor(e,t){let r=({request:s})=>{let n=e.getURLsToCacheKeys();for(let a of se(s.url,t)){let i=n.get(a);if(i){let l=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:l}}}};super(r,e.strategy)}};function Y(o){let e=g(),t=new T(e,o);$(t)}var ue="-precache-",ne=async(o,e=ue)=>{let r=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==o);return await Promise.all(r.map(s=>self.caches.delete(s))),r};function J(){self.addEventListener("activate",o=>{let e=h.getPrecacheName();o.waitUntil(ne(e).then(t=>{}))})}function z(o){g().precache(o)}function X(o,e){z(o),Y(e)}var D=class extends m{async _handle(e,t){let r=[],s=await t.cacheMatch(e),n;if(!s)try{s=await t.fetchAndCachePut(e)}catch(a){a instanceof Error&&(n=a)}if(!s)throw new c("no-response",{url:e.url,error:n});return s}};self.skipWaiting();G();X([{"revision":"958a4de9af4ce7ab9c561309d3c52e3f","url":"assets/axios.e9acc0d3.js"},{"revision":"ee47db6b00cb9562d42b2c76696183fe","url":"assets/docs-store.40b1d780.js"},{"revision":"d09b3da7c0b608d9e01ec54494cfe17f","url":"assets/ErrorNotFound.389b6d78.js"},{"revision":"40efabedb876d409f1732920a78f9ae0","url":"assets/fastclick.8a4a8267.js"},{"revision":"3e1afe59fa075c9e04c436606b77f640","url":"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff"},{"revision":"a4160421d2605545f69a4cd6cd642902","url":"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2"},{"revision":"cef2a0ad01d86530f8f1ecced05503d7","url":"assets/index.02927198.css"},{"revision":"9e58ac958494e5dcdaddbf174b46c917","url":"assets/index.d20ae33e.js"},{"revision":"47de0720b0d82695e21145631f5707a8","url":"assets/IndexPage.59f642ee.js"},{"revision":"4aa2e69855e3b83110a251c47fdd05fc","url":"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff"},{"revision":"40bcb2b8cc5ed94c4c21d06128e0e532","url":"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff"},{"revision":"ea60988be8d6faebb4bc2a55b1f76e22","url":"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff"},{"revision":"0774a8b7ca338dc1aba5a0ec8f2b9454","url":"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff"},{"revision":"bcb7c7e2499a055f0e2f93203bdb282b","url":"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff"},{"revision":"d3907d0ccd03b1134c24d3bcaf05b698","url":"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff"},{"revision":"d65122b35532a59a2cd5b3fad22fe853","url":"assets/Login.3dfbe521.js"},{"revision":"b124a85dead58ac46ddaf4f655a9ca9b","url":"assets/Login.ee19607d.css"},{"revision":"cfbdba38cc883cd3a1d6af670d2d3501","url":"assets/MainLayout.54e4023f.css"},{"revision":"e25f9ad73913fe4c0297c97466988cfd","url":"assets/MainLayout.bbba5f18.js"},{"revision":"ef1451f929f961b08290b55712621f02","url":"assets/QBtn.536ee9b9.js"},{"revision":"48a06c782de0338047a4eb1989716e8f","url":"assets/uid.028bcf2f.js"},{"revision":"8944e1c128c8eec06ca07f14d986dd6f","url":"assets/use-key-composition.6aa43461.js"},{"revision":"f4facfeaed834544d622544acfbb7722","url":"favicon.ico"},{"revision":"d082235f6e6d2109e84e397f66fa868d","url":"icons/apple-icon-120x120.png"},{"revision":"3c728ce3e709b7395be487becf76283a","url":"icons/apple-icon-152x152.png"},{"revision":"3fec89672a18e4b402ede58646917c2d","url":"icons/apple-icon-167x167.png"},{"revision":"aa47843bd47f34b7ca4b99f65dd25955","url":"icons/apple-icon-180x180.png"},{"revision":"ab92df0270f054ca388127c9703a4911","url":"icons/favicon-128x128.png"},{"revision":"e4b046d41e08e6fa06626d6410ab381d","url":"icons/favicon-16x16.png"},{"revision":"410858b01fa6d3d66b7bf21447c5f1fc","url":"icons/favicon-32x32.png"},{"revision":"db2bde7f824fb4057ffd1c42f6ed756e","url":"icons/favicon-96x96.png"},{"revision":"ab92df0270f054ca388127c9703a4911","url":"icons/icon-128x128.png"},{"revision":"7659f0d3e9602e71811f8b7cf2ce0e8e","url":"icons/icon-192x192.png"},{"revision":"cf5ad3498fb6fda43bdafd3c6ce9b824","url":"icons/icon-256x256.png"},{"revision":"fdfc1b3612b6833a27a7b260c9990247","url":"icons/icon-384x384.png"},{"revision":"2c2dc987945806196bd18cb6028d8bf4","url":"icons/icon-512x512.png"},{"revision":"8de1b0e67a62b881cd22d935f102a0e6","url":"icons/ms-icon-144x144.png"},{"revision":"3e4c3730b00c89591de9505efb73afd3","url":"icons/safari-pinned-tab.svg"},{"revision":"6fb214494298a25353be0a08ca413799","url":"index.html"},{"revision":"aee3ac385f9d5f7309d61e4e7329e726","url":"manifest.json"}]);J();$(({url:o})=>o.pathname.startsWith("/api-docs"),new D({cacheName:"api-cache"}));})();
