(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{5891:function(e,s,a){Promise.resolve().then(a.t.bind(a,3994,23)),Promise.resolve().then(a.bind(a,1064)),Promise.resolve().then(a.bind(a,2539)),Promise.resolve().then(a.bind(a,2894)),Promise.resolve().then(a.bind(a,7895))},2894:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Common_ProgressScroll}});var t=a(7437),i=a(2265),Common_scrollToTop=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),a=s.getTotalLength(),updateProgress=()=>{let e=a-window.scrollY*a/(document.documentElement.scrollHeight-window.innerHeight);s.style.strokeDashoffset=e};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=a+" "+a,s.style.strokeDashoffset=a,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",updateProgress(),window.addEventListener("scroll",updateProgress),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},Common_ProgressScroll=()=>((0,i.useEffect)(()=>{Common_scrollToTop()},[]),(0,t.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,t.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,t.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},1064:function(e,s,a){"use strict";a.r(s);var t=a(7437),i=a(2265);function Cursor(){return(0,i.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),animateit=function(e){let s=this.querySelector(".hover-anim"),{offsetX:a,offsetY:t}=e,{offsetWidth:i,offsetHeight:r}=this;s.style.transform="translate(".concat(a/i*50-25,"px, ").concat(t/r*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",animateit)),e.forEach(e=>e.addEventListener("mouseleave",animateit)),window.addEventListener("mousemove",e=>{let{clientX:a,clientY:t}=e;s.style.left=a+"px",s.style.top=t+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,t.jsx)("div",{className:"cursor"})}s.default=Cursor},2539:function(e,s,a){"use strict";a.r(s);var t=a(7437),i=a(2265);function LoadingScreen(){return(0,i.useEffect)(()=>{let e=setInterval(()=>{if("undefined"!=typeof gsap){clearInterval(e);let s=document.getElementById("svg"),a=gsap.timeline();a.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),a.to(s,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(s,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),a.to(".loader-wrap",{y:-1500}),a.to(".loader-wrap",{zIndex:-1,display:"none"}),a.from("header",{y:200},"-=1.5"),a.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}},100)},[]),(0,t.jsxs)("div",{className:"loader-wrap",children:[(0,t.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,t.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,t.jsx)("div",{className:"loader-wrap-heading",children:(0,t.jsxs)("div",{className:"load-text",children:[(0,t.jsx)("span",{children:"L"}),(0,t.jsx)("span",{children:"o"}),(0,t.jsx)("span",{children:"a"}),(0,t.jsx)("span",{children:"d"}),(0,t.jsx)("span",{children:"i"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"g"})]})})]})}s.default=LoadingScreen},7895:function(e,s,a){"use strict";a.r(s);var t=a(7437);a(2265);var i=a(702),r=a(208);let n={modules:[r.W_],slidesPerView:1,spaceBetween:30,speed:1e3,navigation:{nextEl:".testimonials .swiper-button-next",prevEl:".testimonials .swiper-button-prev"}};function Testimonials(){return(0,t.jsxs)("div",{className:"sec-box testimonials section-padding",children:[(0,t.jsxs)("div",{className:"pad-left",children:[(0,t.jsx)("div",{className:"sec-head mb-80 wow fadeInUp",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-lg-7",children:[(0,t.jsx)("h6",{className:"sub-title opacity-7 mb-15",children:"Testimonials"}),(0,t.jsxs)("h3",{children:["Trusted by ",(0,t.jsx)("span",{className:"main-color",children:"Hundered Clients"})]})]})})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-9",children:(0,t.jsx)("div",{className:"testim-swiper wow fadeIn",children:(0,t.jsxs)(i.tq,{id:"content-carousel-container-unq-testim",className:"swiper-container",...n,children:[(0,t.jsx)(i.o5,{children:(0,t.jsxs)("div",{className:"item ",children:[(0,t.jsx)("div",{className:"icon-img-60 mr-60",children:(0,t.jsx)("img",{src:"/light/assets/imgs/svg-assets/quote.png",alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"cont mb-30",children:[(0,t.jsx)("div",{className:"d-flex align-items-center",children:(0,t.jsxs)("div",{className:"rate-stars fz-12",children:[(0,t.jsxs)("span",{className:"rate main-color",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"})]}),(0,t.jsx)("span",{className:"fz-12 opacity-7 ml-10",children:"(71 Reviews)"})]})}),(0,t.jsx)("p",{className:"fz-20 mt-15",children:"We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive."})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:"/light/assets/imgs/testim/1.jpg",alt:""})})}),(0,t.jsx)("div",{className:"ml-30",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("h6",{className:"main-color",children:"Leonard Heiser"}),(0,t.jsx)("span",{className:"fz-13 mt-10 opacity-8",children:"Envato customer"})]})})]})]})]})}),(0,t.jsx)(i.o5,{children:(0,t.jsxs)("div",{className:"item d-flex",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"icon-img-60 mr-60",children:(0,t.jsx)("img",{src:"/light/assets/imgs/svg-assets/quote.png",alt:""})})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"cont mb-30",children:[(0,t.jsx)("div",{className:"d-flex align-items-center",children:(0,t.jsxs)("div",{className:"rate-stars fz-12",children:[(0,t.jsxs)("span",{className:"rate main-color",children:[(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"}),(0,t.jsx)("i",{className:"fas fa-star"})]}),(0,t.jsx)("span",{className:"fz-12 opacity-7 ml-10",children:"(71 Reviews)"})]})}),(0,t.jsx)("p",{className:"fz-20 mt-15",children:"We have purchased well into the thousands of items, but this is without doubt one of the best we’ve have been lucky enough to work on, the attention to detail apparent throughout, and the delivery is impressively intuitive."})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"img",children:(0,t.jsx)("img",{src:"/light/assets/imgs/testim/1.jpg",alt:""})})}),(0,t.jsx)("div",{className:"ml-30",children:(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("h6",{className:"main-color",children:"Leonard Heiser"}),(0,t.jsx)("span",{className:"fz-13 mt-10 opacity-8",children:"Envato customer"})]})})]})]})]})})]})})}),(0,t.jsx)("div",{className:"col-lg-3 d-flex align-items-end justify-content-end",children:(0,t.jsxs)("div",{className:"swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto",children:[(0,t.jsx)("div",{className:"swiper-button-prev swiper-button-disabled",tabIndex:"0",role:"button","aria-label":"Previous slide","aria-disabled":"true",children:(0,t.jsx)("span",{className:"left",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})}),(0,t.jsx)("div",{className:"swiper-button-next ml-50",tabIndex:"0",role:"button","aria-label":"Next slide","aria-disabled":"false",children:(0,t.jsx)("span",{className:"right",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})})]})})]})]}),(0,t.jsx)("span",{className:"icon-qoute",children:(0,t.jsx)("i",{className:"fas fa-quote-left"})})]})}s.default=Testimonials}}]);