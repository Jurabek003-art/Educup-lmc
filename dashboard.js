import { store } from "../core/store.js";

export function dashboard(){
  return `
  <div class="hero">
    <div><h2>Assalomu alaykum, Admin 👋</h2><p>Bugungi o‘quv markazi holati va asosiy ko‘rsatkichlar.</p></div>
    <div class="hero-badge">● Tizim faol</div>
  </div>
  <div class="stats">
    ${stat("Talabalar","1 284","+8.2% bu oy")}
    ${stat("Guruhlar","42","+3 yangi guruh")}
    ${stat("O‘qituvchilar","38","+2 bu oy")}
    ${stat("Davomat","92%","+4.1% o‘sish")}
  </div>
  <div class="grid-2">
    <article class="card">
      <div class="card-head"><h3>Oylik tushum</h3><span class="pill">2026</span></div>
      <div class="chart">${[42,55,48,68,62,78,72,88,81,93,86,96].map(v=>`<div class="bar" style="height:${v}%"></div>`).join("")}</div>
    </article>
    <article class="card">
      <div class="card-head"><h3>Bugungi darslar</h3><span class="pill">${store.lessons.length} ta</span></div>
      <div class="list">${store.lessons.map(x=>`<div class="list-item"><div><strong>${x.time} · ${x.title}</strong><small>${x.teacher} · ${x.room}</small></div><span class="status ok">Faol</span></div>`).join("")}</div>
    </article>
  </div>`;
}
function stat(label,value,trend){return `<article class="card"><div class="stat-label">${label}</div><div class="stat-value">${value}</div><div class="trend">↗ ${trend}</div></article>`}
