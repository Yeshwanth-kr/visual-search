if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>n(e,o),c={module:{uri:o},exports:d,require:t};i[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.3c7b343a.js",revision:null},{url:"assets/index.d731dab3.css",revision:null},{url:"assets/vendor.6e636713.js",revision:null},{url:"index.html",revision:"3164f845e4c048156b67451039dc9680"},{url:"favicon.ico",revision:"1eec5fb8b2c6321d4d125dcc525aa9c6"},{url:"apple-touch-icon.png",revision:"9d7870b04ddf66e5bf997c6247d3de59"},{url:"pwa-192x192.png",revision:"64cf2f8260ba7f7ecf4bf0b7a30c2440"},{url:"pwa-512x512.png",revision:"ffd248df310f259212f75c5a9b34ad50"},{url:"manifest.webmanifest",revision:"5592f7f5b8eb3b5ed39fdbe492212899"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));