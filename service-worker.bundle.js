!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=28)}({28:function(e,t){const n=self;n.addEventListener("install",e=>{console.log("Installing worker"),e.waitUntil(caches.open("v0.0.2-resume").then(e=>{e.addAll(["/resume.html","/main.bundle.js","/resume.png"])}))}),n.addEventListener("fetch",e=>{"GET"===e.request.method&&e.respondWith(caches.match(e.request).then(t=>r(t,e)).catch(o))});const r=(e,t)=>{const n=fetch(t.request).then(e=>{const n=e.clone();return caches.open("v0.0.2-pages").then(e=>{e.put(t.request,n),console.log(`Worker cached: ${t.request.url}`)}),e});return e||n},o=e=>new Response("<h1>Service Unavailable</h1>",{status:503,statusText:"Service Unavailable",headers:new Headers({"Content-Type":"text/html"})});n.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>!e.startsWith("v0.0.2")).map(e=>caches.delete(e)))))})}});
//# sourceMappingURL=service-worker.bundle.js.map