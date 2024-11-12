import{c as f,o as F,a as P,b as I,t as $,u as G,i as l,d as T,s as N,e as R,f as W,g as A,h as o,m as O,S as B}from"./index-fbc45fc9.js";import{F as D,a as U,b as V,c as X,C as Y}from"./Changelog-773fe4d9.js";const Z=$('<canvas class="fixed top-0 left-0 w-full h-full z-0">'),q=()=>{const r="#ddd",[x,k]=f({width:window.innerWidth,height:window.innerHeight});let m=0,h;const c=[];let v;const u=()=>{k({width:window.innerWidth,height:window.innerHeight})},_=()=>{const i=h;if(!i)return;const a=i.getContext("2d");if(!a)return;i.width=x().width,i.height=x().height;const p=()=>{m++,c.push({x:Math.random()*i.width,y:Math.random()*i.height,maxSize:Math.random()*1+1,currentSize:0,increasing:!0,speedX:Math.random()*.1-.1/2,speedY:Math.random()*.1-.1/2})},S=()=>{a.clearRect(0,0,i.width,i.height);for(let d=0;d<c.length;d++){let t=c[d];a.beginPath(),a.arc(t.x,t.y,t.currentSize,0,Math.PI*2),a.fillStyle=r,a.fill(),t.x+=t.speedX,t.y+=t.speedY,t.increasing?(t.currentSize+=.01,t.currentSize>=t.maxSize&&(t.increasing=!1)):(t.currentSize-=.01,t.currentSize<=.2&&(c.splice(d,1),d--,m--))}m<120&&p(),v=requestAnimationFrame(S)};S(),P(()=>{cancelAnimationFrame(v)})};return F(()=>{window.addEventListener("resize",u),_()}),P(()=>{window.removeEventListener("resize",u),cancelAnimationFrame(v)}),I(()=>{_()}),(()=>{const i=Z(),a=h;return typeof a=="function"?G(a,i):h=i,i})()},J=$('<div class="blurbButtons group"><span class=blurbButtonLabel></span><a target=_blank rel=noopener>'),M=e=>(()=>{const n=J(),g=n.firstChild,w=g.nextSibling;return l(g,()=>e.text),l(w,()=>e.icon),T(()=>N(w,"href",e.href)),n})(),K=$(`<div class="absolute right-0 top-0 w-full p-5p pt-7vp flex flex-col animate-pop-in sm:w-2/3 sm:pl-10p sm:mb-0 sm:pb-7vp sm:pt-8vp"><div class="text-black bg-white bg-opacity-70 z-10 rounded-sm shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit flex flex-col justify-between"><div class=p-5p><p class="text-3xl font-extralight leading-normal">My name is&nbsp;&nbsp;<span class="text-teal-800 inline-block font-medium cursor-pointer transform duration-300 hover:scale-105"></span></p><div class="border-t-2 border-black w-full mt-5p mb-7p"></div><p> Hey there! I'm a <!> at Yale University studying computer science. Welcome to my website! </p><br><p>I'm a fullstack developer with a particular interest in system design/development. I love building things—useful applications, extremely useless applications, video games, physical devices, water jug art installations, and more.&nbsp;<a href=https://github.com/addisongoolsbee target=_blank class=link>Check out some of my projects</a>&nbsp;or take a look at my&nbsp;<a href=resumes/resume1.0.pdf class=link>resume</a>.</p><br><p>When I'm not busy wrestling with code or reveling in my five-gallon water jug collection, I like to indulge in the finer things in life—debating philosophy until 3 AM, juggling, foraging for wild mushrooms, and feeding my Alibaba shopping addiction.</p><br><p>Aside from coding, I am also the cofounder of a pineapple soap business on campus, president of the&nbsp;<a href=https://yalecomputersociety.org class=link target=_blank>Yale Computer Society</a>, in a&nbsp;<a href=https://campuspress.yale.edu/danceworks/ class=link target=_blank>dance group</a>, and involved in a number of various other clubs on campus.</p><br><p>I'm currently working on building my website using Solid.js and Tailwind CSS.&nbsp;<a href=https://github.com/addisongoolsbee/addisongoolsbee.com class=link>The code is public</a>.</p><br><p>Feeling nostalgic? See previous iterations of my website&nbsp;<a class=link>here</a>.</p><br></div><p class="italic bottom-0 text-gray-400 text-xs text-center p-1">This website has a few hidden secrets, try clicking "Addison Goolsbee"</p></div><div class="w-full bg-teal-800 bg-opacity-90 p-5 flex justify-center space-x-7p">`),Q=$("<br>"),ee=e=>{const[n,g]=f(window.innerWidth),w=()=>n()<500||n()<850&&n()>630;return I(()=>{const r=()=>g(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}),(()=>{const r=K(),x=r.firstChild,k=x.firstChild,m=k.firstChild,h=m.firstChild,c=h.nextSibling,v=m.nextSibling,u=v.nextSibling,_=u.firstChild,i=_.nextSibling;i.nextSibling;const a=u.nextSibling,p=a.nextSibling,S=p.nextSibling,d=S.nextSibling,t=d.nextSibling,s=t.nextSibling,b=s.nextSibling,C=b.nextSibling,y=C.nextSibling,E=y.nextSibling,j=E.firstChild,H=j.nextSibling,L=x.nextSibling;return l(m,(()=>{const z=W(()=>!!w());return()=>z()?Q():""})(),c),A(c,"click",e.sandwichMode,!0),l(c,()=>e.myName),l(u,(()=>{const z=W(()=>e.myName==="Addison Goolsbee");return()=>z()?"junior":e.myName.toLowerCase()})(),i),A(H,"click",e.toggleChangelog,!0),l(L,o(M,{href:"https://www.linkedin.com/in/addisongoolsbee",text:"LinkedIn",get icon(){return o(D,{})}}),null),l(L,o(M,{href:"https://github.com/addisongoolsbee",text:"GitHub",get icon(){return o(U,{})}}),null),l(L,o(M,{href:"mailto:addisongoolsbee@gmail.com",text:"Email",get icon(){return o(V,{})}}),null),l(L,o(M,{href:"resumes/resume1.0.pdf",text:"Resume",get icon(){return o(X,{})}}),null),T(()=>`${Math.ceil(e.imgTop)}px`!=null?r.style.setProperty("bottom",`${Math.ceil(e.imgTop)}px`):r.style.removeProperty("bottom")),r})()};R(["click"]);const te=$('<div class="absolute top-0 right-0 flex flex-row items-center space-x-4 animate-navBar pr-4 h-16"><button class=navbarButton>changelog'),ne=e=>(()=>{const n=te(),g=n.firstChild;return A(g,"click",e.toggleChangelog,!0),n})();R(["click"]);function ie(){const e=O();I(()=>{const n=document.getElementById("canonical-link");n&&(n.href=`https://addisongoolsbee.com${e.pathname}`)})}const se=$('<div class="absolute w-5/6 h-9/10 bottom-0 flex items-end left-1/2 transform -translate-x-1/2 sm:left-22p"><img alt=Addison class="w-full h-auto object-contain max-h-full animate-slide-up select-none"draggable=false>'),oe=$('<div class="h-screen overflow-hidden relative bg-gray-800"><img src=/images/whiteLogo.svg alt=logo class="absolute top-0 left-0 ml-4 mt-2 h-auto w-10 sm:w-12 cursor-pointer animate-logo select-none"draggable=false>'),re=()=>{ie();let e;const n="/images/profile.webp",g="/images/sandwich.webp",[w,r]=f(window.innerHeight),[x,k]=f(!1),[m,h]=f(!1),[c,v]=f(n),[u,_]=f("Addison Goolsbee"),[i,a]=f(!1);F(()=>{const s=new Image;s.onload=()=>a(!0),s.src=c(),setTimeout(()=>{const b=new Image;b.src=g},0),window.addEventListener("resize",p),p()}),P(()=>{window.removeEventListener("resize",p)});const p=()=>{if(e){const s=e.getBoundingClientRect();window.innerWidth>=640?r(0):r(s.height)}},S=()=>{p(),k(!0)},d=()=>{h(!m())},t=()=>{const s=c()===n?g:n;v(s);const b=u()==="Addison Goolsbee"?"Sandwich":"Addison Goolsbee";_(b)};return(()=>{const s=oe(),b=s.firstChild;return l(s,o(q,{}),b),b.$$click=()=>window.location.href="/",l(s,o(ne,{toggleChangelog:d}),null),l(s,o(B,{get when(){return i()},get children(){const C=se(),y=C.firstChild;y.addEventListener("load",S);const E=e;return typeof E=="function"?G(E,y):e=y,T(()=>N(y,"src",c())),C}}),null),l(s,o(B,{get when(){return x()},get children(){return o(ee,{get imgTop(){return w()},toggleChangelog:d,sandwichMode:t,get myName(){return u()}})}}),null),l(s,o(Y,{changelogVisible:m,setChangelogVisible:h,toggleChangelog:d}),null),s})()};R(["click"]);export{re as default};
