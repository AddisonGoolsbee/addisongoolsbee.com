import{c as y,o as B,a as E,b as L,t as b,u as M,m as A,s as G,d as _,e as W,i as u,f as N,g as R,h as O,j as m,k as T,l as D,n as P,p as X,q as I,r as q,F as Y,S as U}from"./index-93851655.js";const K=b('<canvas class="fixed top-0 left-0 w-full h-full z-0">'),Z=()=>{const a="#ddd",[l,d]=y({width:window.innerWidth,height:window.innerHeight});let i=0,s;const c=[];let h;const v=()=>{d({width:window.innerWidth,height:window.innerHeight})},$=()=>{const g=s;if(!g)return;const r=g.getContext("2d");if(!r)return;g.width=l().width,g.height=l().height;const f=()=>{i++,c.push({x:Math.random()*g.width,y:Math.random()*g.height,maxSize:Math.random()*1+1,currentSize:0,increasing:!0,speedX:Math.random()*.1-.1/2,speedY:Math.random()*.1-.1/2})},w=()=>{r.clearRect(0,0,g.width,g.height);for(let x=0;x<c.length;x++){let p=c[x];r.beginPath(),r.arc(p.x,p.y,p.currentSize,0,Math.PI*2),r.fillStyle=a,r.fill(),p.x+=p.speedX,p.y+=p.speedY,p.increasing?(p.currentSize+=.01,p.currentSize>=p.maxSize&&(p.increasing=!1)):(p.currentSize-=.01,p.currentSize<=.2&&(c.splice(x,1),x--,i--))}i<120&&f(),h=requestAnimationFrame(w)};w(),E(()=>{cancelAnimationFrame(h)})};return B(()=>{window.addEventListener("resize",v),$()}),E(()=>{window.removeEventListener("resize",v),cancelAnimationFrame(h)}),L(()=>{$()}),(()=>{const g=K(),r=s;return typeof r=="function"?M(r,g):s=g,g})()},J=b("<svg stroke-width=0>");function k(e,n){const t=A(e.a,n),[o,a]=G(t,["src"]),[l,d]=y(""),i=_(()=>n.title?`${e.c}<title>${n.title}</title>`:e.c);return L(()=>d(i())),E(()=>{d("")}),(()=>{const s=J();return W(s,A({get stroke(){return e.a?.stroke},get color(){return n.color||"currentColor"},get fill(){return n.color||"currentColor"},get style(){return{...n.style,overflow:"visible"}}},a,{get height(){return n.size||"1em"},get width(){return n.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return l()}}),!0,!0),u(s,()=>N),s})()}function Q(e){return k({a:{viewBox:"0 0 496 512"},c:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},e)}function ee(e){return k({a:{viewBox:"0 0 448 512"},c:'<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>'},e)}function te(e){return k({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2 14 8 20 8"/><path d="M16 13 8 13"/><path d="M16 17 8 17"/><path d="M10 9 9 9 8 9"/>'},e)}function ne(e){return k({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6 12 13 2 6"/>'},e)}const ie=b('<div class="blurbButtons group"><span class=blurbButtonLabel></span><a target=_blank rel=noopener>'),C=e=>(()=>{const n=ie(),t=n.firstChild,o=t.nextSibling;return u(t,()=>e.text),u(o,()=>e.icon),R(()=>O(o,"href",e.href)),n})(),oe=b(`<div class="absolute right-0 top-0 w-full p-5p pt-7vp flex flex-col animate-pop-in sm:w-2/3 sm:pl-10p sm:mb-0 sm:pb-7vp"><div class="text-black bg-white bg-opacity-70 z-10 p-5p rounded-sm shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit"><p class="text-3xl font-extralight leading-normal">My name is<span class="text-teal-800 font-medium">Addison Goolsbee</span></p><div class="border-t-2 border-black w-full mt-5p mb-7p"></div><p> Hey there! I'm a junior at Yale University studying computer science. Welcome to my website! </p><br><p>I'm a fullstack developer with a particular interest in system design/development. I love building things—useful applications, extremely useless applications, video games, physical devices, water jug art installations, etc.&nbsp;<a href=https://github.com/addisongoolsbee target=_blank class=link>Check out some of my projects</a>,&nbsp;or take a look at my&nbsp;<a href=/images/resume.pdf class=link>resume</a></p><br><p>I'm currently working on building this website using Solid.js and Tailwind CSS.&nbsp;<a href=https://github.com/addisongoolsbee/addisongoolsbee.com class=link>The code is public</a>.&nbsp;You can look at my previous template-based (lame) website&nbsp;<a href=/v0_1 class=link>here</a></p></div><div class="w-full bg-teal-800 bg-opacity-90 p-5 flex justify-center space-x-7p">`),se=b("<br>"),re=e=>{const[n,t]=y(window.innerWidth),o=()=>n()<500||n()<850&&n()>630;return L(()=>{const a=()=>t(window.innerWidth);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),(()=>{const a=oe(),l=a.firstChild,d=l.firstChild,i=d.firstChild,s=i.nextSibling,c=l.nextSibling;return u(d,(()=>{const h=_(()=>!!o());return()=>h()?se():" "})(),s),u(c,m(C,{href:"https://www.linkedin.com/in/addisongoolsbee",text:"LinkedIn",get icon(){return m(ee,{})}}),null),u(c,m(C,{href:"https://github.com/addisongoolsbee",text:"GitHub",get icon(){return m(Q,{})}}),null),u(c,m(C,{href:"mailto:addisongoolsbee@gmail.com",text:"Email",get icon(){return m(ne,{})}}),null),u(c,m(C,{href:"images/resume.pdf",text:"Resume",get icon(){return m(te,{})}}),null),R(()=>`${Math.ceil(e.imgTop)}px`!=null?a.style.setProperty("bottom",`${Math.ceil(e.imgTop)}px`):a.style.removeProperty("bottom")),a})()};var ae=()=>{},H=(e,n)=>n();function le(e,n){const t=T(e),o=t?[t]:[],{onEnter:a=H,onExit:l=H}=n,[d,i]=y(n.appear?[]:o),[s]=X();let c,h=!1;function v(r,f){if(!r)return f&&f();h=!0,l(r,()=>{P(()=>{h=!1,i(w=>w.filter(x=>x!==r)),f&&f()})})}function $(r){const f=c;if(!f)return r&&r();c=void 0,i(w=>[f,...w]),a(f,r??ae)}const g=n.mode==="out-in"?r=>h||v(r,$):n.mode==="in-out"?r=>$(()=>v(r)):r=>{v(r),$()};return D(r=>{const f=e();return T(s)?(s(),r):(f!==r&&(c=f,P(()=>T(()=>g(r)))),f)},n.appear?void 0:t),d}var V=e=>e instanceof Element;function S(e,n){if(n(e))return e;if(typeof e=="function"&&!e.length)return S(e(),n);if(Array.isArray(e))for(const t of e){const o=S(t,n);if(o)return o}return null}function ce(e,n=V,t=V){const o=_(e);return _(()=>S(o(),n))}function de(e){return _(()=>{const n=e.name||"s";return{enterActive:(e.enterActiveClass||n+"-enter-active").split(" "),enter:(e.enterClass||n+"-enter").split(" "),enterTo:(e.enterToClass||n+"-enter-to").split(" "),exitActive:(e.exitActiveClass||n+"-exit-active").split(" "),exit:(e.exitClass||n+"-exit").split(" "),exitTo:(e.exitToClass||n+"-exit-to").split(" "),move:(e.moveClass||n+"-move").split(" ")}})}function j(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function ue(e,n,t,o){const{onBeforeEnter:a,onEnter:l,onAfterEnter:d}=n;a?.(t),t.classList.add(...e.enter),t.classList.add(...e.enterActive),queueMicrotask(()=>{if(!t.parentNode)return o?.();l?.(t,()=>i())}),j(()=>{t.classList.remove(...e.enter),t.classList.add(...e.enterTo),(!l||l.length<2)&&(t.addEventListener("transitionend",i),t.addEventListener("animationend",i))});function i(s){(!s||s.target===t)&&(o?.(),t.removeEventListener("transitionend",i),t.removeEventListener("animationend",i),t.classList.remove(...e.enterActive),t.classList.remove(...e.enterTo),d?.(t))}}function me(e,n,t,o){const{onBeforeExit:a,onExit:l,onAfterExit:d}=n;if(!t.parentNode)return o?.();a?.(t),t.classList.add(...e.exit),t.classList.add(...e.exitActive),l?.(t,()=>i()),j(()=>{t.classList.remove(...e.exit),t.classList.add(...e.exitTo),(!l||l.length<2)&&(t.addEventListener("transitionend",i),t.addEventListener("animationend",i))});function i(s){(!s||s.target===t)&&(o?.(),t.removeEventListener("transitionend",i),t.removeEventListener("animationend",i),t.classList.remove(...e.exitActive),t.classList.remove(...e.exitTo),d?.(t))}}var he={inout:"in-out",outin:"out-in"},F=e=>{const n=de(e);return le(ce(()=>e.children),{mode:he[e.mode],appear:e.appear,onEnter(t,o){ue(n(),e,t,o)},onExit(t,o){me(n(),e,t,o)}})};const ge=b('<div class="p-3 bg-white shadow-lg rounded-lg mb-10 cursor-pointer transition duration-300 ease-in-out transform hover:shadow-2xl active:scale-95 active:shadow-md"><p class="text-lg font-bold text-gray-800 mt-1">Version </p><p class="text-sm text-gray-600"></p><ul class="list-outside list-disc mt-2 text-sm pl-3">'),fe=b('<li class="text-gray-600 mb-1">'),pe=b("<div>"),be=b('<div class="fixed top-0 right-0 w-[330px] h-full bg-gray-50 p-2 z-30 overflow-y-auto overflow-x-hidden scrollbar-custom2 max-h-fit"><p class="text-center font-bold text-xl my-3">Changelog</p><p class="text-sm text-gray-700 mb-8 p-1">Below is a comprehensive list of the changes to my website over time. The full source code is available on&nbsp;<a class=link href=https://github.com/addisongoolsbee/addisongoolsbee.com target=_blank>Github</a><br><br>You can click on any version to pull up a demo of what the site used to look like'),ve=b('<div class="absolute w-full h-full top-0 left-0 bg-black z-20 opacity-30">'),z=e=>{const n=q(),t=()=>{n(e.url)};return(()=>{const o=ge(),a=o.firstChild;a.firstChild;const l=a.nextSibling,d=l.nextSibling;return o.$$click=t,u(a,()=>e.version,null),u(l,()=>e.description),u(d,m(Y,{get each(){return e.changes},children:i=>(()=>{const s=fe();return u(s,i),s})()})),o})()},we=e=>{const n=[{transform:"translateX(100%)"},{transform:"translateX(0%)"}],t={duration:600,easing:"ease-in-out"},o=[{opacity:"0"},{opacity:"0.3"}],a={duration:600,easing:"ease-in-out"};let l;return(()=>{const d=pe();return u(d,m(F,{onEnter:(i,s)=>{i.animate(n,t).finished.then(s)},onExit:(i,s)=>{i.animate(n,{...t,direction:"reverse"}).finished.then(s)},get children(){return _(()=>!!e.changelogVisible())()&&(()=>{const i=be();i.firstChild.nextSibling;const c=l;return typeof c=="function"?M(c,i):l=i,u(i,m(z,{version:"1.0",description:"Fully-funcitonal MVP layout built in Solid.js",changes:["Home page layout: cutout of myself on left side, blurb on right side","Glowing dots moving around in the background","Changelog","Site logo","Blurb footer link icons with animations","Responsive layout","Initial page load animations","New copy for the blurb","Mobile layout"],url:"/"}),null),u(i,m(z,{version:"0.2",description:"Host change, restarting from scratch",changes:["Hosting changed from Nixihost to GitHub Pages","Domain name forwards from Nixihost, through Cloudflare, to GitHub Pages","addisongoolsbee.com repository created","Solid.js/TailwindCSS/Vite base for the website with a small message","GitHub action for deploying site"],url:"/v0_2"}),null),u(i,m(z,{version:"0.1",description:"Template-based site created in 1 hour",changes:["Domain name and hosting purchased from Nixihost","cPanel template website","Enforce HTTPS","Google Analytics"],url:"/v0_1"}),null),i})()}}),null),u(d,m(F,{onEnter:(i,s)=>{i.animate(o,a).finished.then(s)},onExit:(i,s)=>{i.animate(o,{...a,direction:"reverse"}).finished.then(s)},get children(){return _(()=>!!e.changelogVisible())()&&(()=>{const i=ve();return i.$$click=()=>{e.toggleChangelog()},i})()}}),null),d})()};I(["click"]);const xe=b('<div class="h-screen overflow-hidden relative bg-gray-800"><div class="h-16 text-white flex flex-row justify-end z-10 px-4 space-x-4 select-none"><img src=/images/whiteLogo.svg alt=logo class="absolute top-0 left-0 ml-4 mt-2 h-auto w-10 sm:w-12 cursor-pointer animate-logo select-none"draggable=false><div class="flex flex-row items-center space-x-4"><button class="text-white cursor-pointer z-20 p-2">changelog</button></div></div><div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p"><img src=/images/profile.png alt=Addison class="w-full h-auto object-contain max-h-full animate-slide-up select-none"draggable=false>'),ye=()=>{let e;const[n,t]=y(window.innerHeight),[o,a]=y(!1),[l,d]=y(!1),i=()=>{if(e){const h=e.getBoundingClientRect();window.innerWidth>=640?t(0):t(h.height)}},s=()=>{i(),a(!0)};B(()=>{window.addEventListener("resize",i),i()}),E(()=>{window.removeEventListener("resize",i)});const c=()=>{d(!l())};return(()=>{const h=xe(),v=h.firstChild,$=v.firstChild,g=$.nextSibling,r=g.firstChild,f=v.nextSibling,w=f.firstChild;u(h,m(Z,{}),v),$.$$click=()=>window.location.href="/",r.$$click=c,w.addEventListener("load",s);const x=e;return typeof x=="function"?M(x,w):e=w,u(h,m(U,{get when(){return o()},get children(){return m(re,{get imgTop(){return n()}})}}),null),u(h,m(we,{changelogVisible:l,setChangelogVisible:d,toggleChangelog:c}),null),h})()};I(["click"]);export{ye as default};
