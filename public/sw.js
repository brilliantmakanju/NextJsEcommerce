if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Animateds.scss",revision:"3341256a52cbe13c154ae4131287bf16"},{url:"/Global.css",revision:"9c2e90ed001b96dacda29c83505a4684"},{url:"/Style/header/Head.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/_next/static/9-er216WmefRSV9nZBFv8/_buildManifest.js",revision:"e42e51be7424e30c8e1ffb72af0b5a2c"},{url:"/_next/static/9-er216WmefRSV9nZBFv8/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/9-er216WmefRSV9nZBFv8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/189-f58bb2bac11369ea.js",revision:"f58bb2bac11369ea"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-19bcd85740d46831.js",revision:"19bcd85740d46831"},{url:"/_next/static/chunks/pages/_app-ff079599fcd7ad69.js",revision:"ff079599fcd7ad69"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/cart-d5adeddc5e89e44b.js",revision:"d5adeddc5e89e44b"},{url:"/_next/static/chunks/pages/index-2c456709842b8175.js",revision:"2c456709842b8175"},{url:"/_next/static/chunks/pages/user-0d66f27807e044f9.js",revision:"0d66f27807e044f9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/5674832e1468d24d.css",revision:"5674832e1468d24d"},{url:"/_next/static/css/db96826bc58283f7.css",revision:"db96826bc58283f7"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/assest/Carousel/shoe.png",revision:"8c5ebf901c3b6cf9963d5ec8e2eab961"},{url:"/assest/Carousel/shoe1.png",revision:"c714933a72fc3231b8ade024f252046e"},{url:"/assest/Carousel/shoe10.png",revision:"65dcaef39339e0dc21aa7c63f5523e53"},{url:"/assest/Carousel/shoe11.png",revision:"13bf31f072e9f60cdc849354db43e7de"},{url:"/assest/Carousel/shoe12.png",revision:"cd6822471a2909438d0224905e4cb4b4"},{url:"/assest/Carousel/shoe13.png",revision:"8b51cb42bbd3da7f56402e39d6e51232"},{url:"/assest/Carousel/shoe14.png",revision:"3c8f6a01627199731a190085e3776bf4"},{url:"/assest/Carousel/shoe2.png",revision:"9a29b907e564c47f1a248d182dda66f4"},{url:"/assest/Carousel/shoe3.png",revision:"8c056a5653c3fdd716363ed05369ffff"},{url:"/assest/Carousel/shoe4.png",revision:"d111642f4f2ecba695357bd0c32f0c02"},{url:"/assest/Carousel/shoe5.png",revision:"2b32a21b6f2566eb443efe9bff0fe166"},{url:"/assest/Carousel/shoe6.png",revision:"16e363499c668259e5614c26a1001675"},{url:"/assest/Carousel/shoe7.png",revision:"9c15d216bbbc562adbe67b9c66bbb9b8"},{url:"/assest/Carousel/shoe8.png",revision:"cd8e9df4c63714973eed6db558d26546"},{url:"/assest/Carousel/shoe9.png",revision:"f766dcb089149d0924e8e59822bfe5c8"},{url:"/assest/FormSidePic.jpeg",revision:"6e8aa0f6e4ce1a3a0b66a0f11ef4d7af"},{url:"/assest/LoginSidePic.jpeg",revision:"0c89ee1721b57c5d2384e75993f90e5c"},{url:"/assest/Product/p1.jpg",revision:"db0656a8c9134d018735fa57701f4546"},{url:"/assest/Product/p10.jpg",revision:"349fead29a2e4d838bda6896cbbca4e6"},{url:"/assest/Product/p2.jpg",revision:"891fb9469612f06704b9be7adf8ecdc7"},{url:"/assest/Product/p3.jpg",revision:"f3f50a3a6a041a51e9628c4f3edd616d"},{url:"/assest/Product/p4.jpg",revision:"87329e10c23ff7a52494d5b4eb40ea79"},{url:"/assest/Product/p5.jpg",revision:"39704b9c581843abc71cfe3a02e83ad4"},{url:"/assest/Product/p6.jpg",revision:"259f0585962315a85c9166af0dd05562"},{url:"/assest/Product/p7.jpg",revision:"1d1022ee7f93544afa155221fbbee65f"},{url:"/assest/Product/p8.jpg",revision:"f8af0176a4229c3b96f283fa2644b24b"},{url:"/assest/Product/p9.jpg",revision:"cb9c60dd65a280f798aa1982ab2d76ab"},{url:"/assest/about-img.jpg",revision:"c148de4ecc2cf3f3ccf7b06244d2fccb"},{url:"/assest/apply-img.png",revision:"7bf09dbf71e1cdea45c928010becf188"},{url:"/assest/client.jpg",revision:"f91eba233506536f6e7669c25f5ff3cc"},{url:"/assest/dope.jpeg",revision:"d5ff69aca6544160ad7486b6f6d2076b"},{url:"/assest/fevicon.png",revision:"cd4dccfe36eca874501bd43f7ef87be6"},{url:"/assest/hot.jpeg",revision:"39a57c6643d249ab49521a3849090309"},{url:"/assest/love.jpeg",revision:"5b2018ddee39ca320a143433427f55ed"},{url:"/assest/p1.png",revision:"a0d862aecf3d69bc98011c756887a51f"},{url:"/assest/p2.png",revision:"637d0cf132a20b9776f6d6b7013109a0"},{url:"/assest/p3.png",revision:"ec3c1d0c0884122b8eac8edfe55649ff"},{url:"/assest/p4.png",revision:"52a39b08a14fd08b52171fcf6cf285c1"},{url:"/assest/p5.png",revision:"566c586c8f50b7f8e9345371ef56e035"},{url:"/assest/p6.png",revision:"cca70ad9b6c763fde1b04b3df2bfe4ef"},{url:"/assest/p7.png",revision:"cd6d464b756bbd930f7132febf0017cd"},{url:"/assest/p8.png",revision:"54cbe644e5e14d7dd553bfe67bd35868"},{url:"/assest/p9.png",revision:"e8d54e377c9d40aa480bfb4b66f79862"},{url:"/assest/phonecate/apple.ico",revision:"0c0653846369ac9a826dbbd7874546e3"},{url:"/assest/phonecate/huwaei.ico",revision:"b6031ef5b4a6c72e3c103630a1f47a83"},{url:"/assest/phonecate/lenovo.ico",revision:"30e3b81fcd2e1a29f7537fc30a42d822"},{url:"/assest/phonecate/oppo.ico",revision:"2ec5903a7208036d68945d32680ac87e"},{url:"/assest/phonecate/redmi.ico",revision:"70198ffd1f495dd8e9194d3e66b3204d"},{url:"/assest/phonecate/samsung.ico",revision:"1db57d1297acfdd4197a62cc14ff4ac3"},{url:"/assest/w1.png",revision:"7304efeebec70756736f3abdcb312896"},{url:"/assest/w2.png",revision:"cd888b8b064372bbfe33fae0c084cb63"},{url:"/assest/w3.png",revision:"8043f196f07d94284057bfc90ddfea11"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/QwitcherGrypen-Bold.ttf",revision:"9e3192d6c33a6b113fe268c0e44b5416"},{url:"/fonts/QwitcherGrypen-Regular.ttf",revision:"96c897ba5f60f2b19d369e6801a20eed"},{url:"/icon-192x192.png",revision:"266d95efbe6d2ddedf26da57a2a09b02"},{url:"/icon-256x256.png",revision:"e60dccf799f49f5b50a65b5d1a642be9"},{url:"/icon-384x384.png",revision:"162202ebe17d9d037efc9ea22f94197c"},{url:"/icon-512x512.png",revision:"8c2c29d0d9cddcec8335998bec7d10cf"},{url:"/manifest.json",revision:"42a896ceb2f100268518aad9a01336a8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
