(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579,133,554,261,203,714,882,971,734,106,746,42,120,965,380,21,967],{5061:function(e,t,s){Promise.resolve().then(s.t.bind(s,3994,23)),Promise.resolve().then(s.bind(s,1064)),Promise.resolve().then(s.bind(s,2539)),Promise.resolve().then(s.bind(s,2894))},2894:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Common_ProgressScroll}});var r=s(7437),o=s(2265),Common_scrollToTop=()=>{let e=document.querySelector(".progress-wrap"),t=document.querySelector(".progress-wrap path"),s=t.getTotalLength(),updateProgress=()=>{let e=s-window.scrollY*s/(document.documentElement.scrollHeight-window.innerHeight);t.style.strokeDashoffset=e};e&&(t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=s+" "+s,t.style.strokeDashoffset=s,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear",updateProgress(),window.addEventListener("scroll",updateProgress),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},Common_ProgressScroll=()=>((0,o.useEffect)(()=>{Common_scrollToTop()},[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},1064:function(e,t,s){"use strict";s.r(t);var r=s(7437),o=s(2265);function Cursor(){return(0,o.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),t=document.querySelector(".cursor"),animateit=function(e){let t=this.querySelector(".hover-anim"),{offsetX:s,offsetY:r}=e,{offsetWidth:o,offsetHeight:n}=this;t.style.transform="translate(".concat(s/o*50-25,"px, ").concat(r/n*50-25,"px)"),"mouseleave"===e.type&&(t.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",animateit)),e.forEach(e=>e.addEventListener("mouseleave",animateit)),window.addEventListener("mousemove",e=>{let{clientX:s,clientY:r}=e;t.style.left=s+"px",t.style.top=r+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{t.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{t.classList.remove("cursor-active")})})},[]),(0,r.jsx)("div",{className:"cursor"})}t.default=Cursor},2539:function(e,t,s){"use strict";s.r(t);var r=s(7437),o=s(2265);function LoadingScreen(){return(0,o.useEffect)(()=>{let e=setInterval(()=>{if("undefined"!=typeof gsap){clearInterval(e);let t=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(t,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(t,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}},100)},[]),(0,r.jsxs)("div",{className:"loader-wrap",children:[(0,r.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,r.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsxs)("div",{className:"load-text",children:[(0,r.jsx)("span",{children:"L"}),(0,r.jsx)("span",{children:"o"}),(0,r.jsx)("span",{children:"a"}),(0,r.jsx)("span",{children:"d"}),(0,r.jsx)("span",{children:"i"}),(0,r.jsx)("span",{children:"n"}),(0,r.jsx)("span",{children:"g"})]})})]})}t.default=LoadingScreen}},function(e){e.O(0,[364,478,472,744],function(){return e(e.s=5061)}),_N_E=e.O()}]);