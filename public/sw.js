if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Dz9aREXCJgWecf2foVj5k/_buildManifest.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/Dz9aREXCJgWecf2foVj5k/_ssgManifest.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/171.6d96682ebf7258168b42.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/841-223cbd95eda51d882569.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/942-c90f4bc790b560c876c3.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/framework-717d42ae9e172961f2a5.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/main-120125acfa0c0c35c5e1.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/404-be42c76f955244724e18.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/_app-0d340d8c9184363bd8de.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/about-us-c6b9c2e29385e30dc3b9.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/blog-8b587ccf68146f3383ca.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/blog/%5B...post%5D-96e9a1865df5435c4c2d.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/contact-us-588014ccbe3c06860a54.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/pages/index-833e808b859f1e57899d.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/chunks/webpack-9ae529b9b52f0b66999d.js",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/_next/static/css/fdad337d4d094cc84546.css",revision:"Dz9aREXCJgWecf2foVj5k"},{url:"/contentstack-readme-logo.png",revision:"b876b33d59cbf5ce3ec7d9242745a7de"},{url:"/copy.svg",revision:"b6ed71ceabe5e24a1ae9d3b964c92404"},{url:"/devtools.gif",revision:"75ccb20f41b274187dab1b11152c07fe"},{url:"/favicon.ico",revision:"9a6e4aaa6e90b763a122b06b12417091"},{url:"/icon/icon-192x192.png",revision:"ca9d675a868e5e2ef3389bf8e9e41ef6"},{url:"/icon/icon-256x256.png",revision:"4f4eed8bd6c5ce7c92ab25bc0f6d6319"},{url:"/icon/icon-384x384.png",revision:"d20f17d829aa3f2a136a2e20c3cd566f"},{url:"/icon/icon-512x512.png",revision:"9e5e8e7e2f879b75d304f2214fd46ac1"},{url:"/json.svg",revision:"7b433b4965ec8546087482b1d0cc21c1"},{url:"/manifest.json",revision:"46cbd3b8d736e5caa98d8c92129b1d87"},{url:"/starter-app.png",revision:"62f77101c523dba1194a95219bc41e25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
