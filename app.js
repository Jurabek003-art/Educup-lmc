import { store } from "./core/store.js";
import { dashboard } from "./pages/dashboard.js";
import { students } from "./pages/students.js";
import { generic } from "./pages/generic.js";

const menus=["Dashboard","Talabalar","Guruhlar","Davomat","To‘lovlar","O‘qituvchilar","Kurslar","Hisobotlar","Sozlamalar"];
const mobile=["Dashboard","Talabalar","Davomat","To‘lovlar"];
const app=document.querySelector("#app"), title=document.querySelector("#pageTitle");
document.documentElement.dataset.theme=store.theme;

function navHtml(items){return items.map((x,i)=>`<button class="nav-btn ${x==="Dashboard"?"active":""}" data-page="${x}">${icon(x)} ${x}</button>`).join("")}
document.querySelector("#desktopNav").innerHTML=navHtml(menus);
document.querySelector("#mobileNav").innerHTML=navHtml(mobile);

function icon(x){return ({Dashboard:"⌂",Talabalar:"♙",Guruhlar:"◫",Davomat:"✓",To‘lovlar:"₽",O‘qituvchilar:"♟",Kurslar:"▤",Hisobotlar:"▥",Sozlamalar:"⚙"})[x]||"•"}

function render(page="Dashboard"){
 title.textContent=page;
 document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 if(page==="Dashboard") app.innerHTML=dashboard();
 else if(page==="Talabalar") app.innerHTML=students();
 else app.innerHTML=generic(page);
 window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-page]"); if(b) render(b.dataset.page);
});
document.querySelector("#themeBtn").onclick=()=>{
 store.theme=store.theme==="dark"?"light":"dark"; localStorage.setItem("theme",store.theme); document.documentElement.dataset.theme=store.theme;
};

const dialog=document.querySelector("#searchDialog"), input=document.querySelector("#globalSearch"), results=document.querySelector("#searchResults");
document.querySelector("#searchBtn").onclick=()=>dialog.showModal();
input.oninput=()=>{
 const q=input.value.toLowerCase();
 const hits=store.students.filter(s=>(s.name+s.group).toLowerCase().includes(q));
 results.innerHTML=q?hits.map(s=>`<div class="list-item"><div><strong>${s.name}</strong><small>${s.group}</small></div><span class="status ok">${s.attendance}</span></div>`).join(""):"";
};

const tg=window.Telegram?.WebApp;
if(tg){tg.ready();tg.expand(); if(tg.colorScheme==="dark"){store.theme="dark";document.documentElement.dataset.theme="dark";}}
render();
