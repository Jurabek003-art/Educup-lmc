export function generic(title){
 const cards = {
  "Guruhlar":["German B1","IELTS 6.5","English B2","German A2"],
  "To‘lovlar":["Bugungi tushum: 8 450 000 so‘m","Kutilayotgan: 12 300 000 so‘m","Qarzdorlar: 36 ta"],
  "Davomat":["Bugungi davomat: 92%","QR sessiyalar: 18 ta","Kechikkanlar: 11 ta"],
  "Hisobotlar":["Davomat hisoboti","To‘lovlar hisoboti","O‘quv natijalari","Filiallar hisoboti"]
 };
 const items=cards[title]||["Modul tayyor","RBAC bilan himoyalanadi","Supabase bosqichida real ma’lumot ulanadi"];
 return `<div class="section-title"><h2>${title}</h2><button class="primary-btn">+ Yangi</button></div><div class="stats">${items.map((x,i)=>`<article class="card"><div class="stat-label">MODUL ${i+1}</div><div style="font-size:18px;font-weight:800;margin-top:10px">${x}</div><p style="color:var(--muted)">Demo interfeys faol.</p></article>`).join("")}</div>`;
}
