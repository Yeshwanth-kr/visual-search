if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const d=e=>n(e,f),t={module:{uri:f},exports:o,require:d};i[f]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3c7b343a.js",revision:null},{url:"assets/index.d731dab3.css",revision:null},{url:"assets/vendor.6e636713.js",revision:null},{url:"index.html",revision:"3164f845e4c048156b67451039dc9680"},{url:"favicon.ico",revision:"1f3ea34afef9d95c2218df3664d815f3"},{url:"apple-touch-icon.png",revision:"1f3ea34afef9d95c2218df3664d815f3"},{url:"pwa-192x192.png",revision:"1f3ea34afef9d95c2218df3664d815f3"},{url:"pwa-512x512.png",revision:"1f3ea34afef9d95c2218df3664d815f3"},{url:"manifest.webmanifest",revision:"5592f7f5b8eb3b5ed39fdbe492212899"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
