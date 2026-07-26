import { store } from "../core/store.js";
export function students(){
 return `<div class="section-title"><div><h2>Talabalar</h2><span class="pill">1 284 ta</span></div><button class="primary-btn" id="addStudent">+ Talaba</button></div>
 <article class="card table-wrap"><table class="table"><thead><tr><th>Talaba</th><th>Guruh</th><th>Davomat</th><th>Baho</th><th>To‘lov</th></tr></thead><tbody>
 ${store.students.map(s=>`<tr><td><strong>${s.name}</strong></td><td>${s.group}</td><td>${s.attendance}</td><td>${s.grade}</td><td><span class="status ${s.payment==="To‘langan"?"ok":"warn"}">${s.payment}</span></td></tr>`).join("")}
 </tbody></table></article>`;
}
