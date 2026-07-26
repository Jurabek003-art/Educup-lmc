export const store = {
  role: localStorage.getItem("role") || "admin",
  theme: localStorage.getItem("theme") || "light",
  students: [
    {name:"Aziz Karimov",group:"German B1",attendance:"94%",grade:"4.8",payment:"To‘langan"},
    {name:"Malika Aliyeva",group:"IELTS 6.5",attendance:"89%",grade:"4.5",payment:"To‘langan"},
    {name:"Sardor Rasulov",group:"English B2",attendance:"76%",grade:"4.1",payment:"Kutilmoqda"},
    {name:"Madina Usmonova",group:"German A2",attendance:"97%",grade:"4.9",payment:"To‘langan"}
  ],
  lessons: [
    {time:"09:00",title:"German B1",room:"4-xona",teacher:"A. Müller"},
    {time:"11:00",title:"IELTS",room:"2-xona",teacher:"S. Karimova"},
    {time:"14:00",title:"English B2",room:"5-xona",teacher:"D. Smith"},
    {time:"18:00",title:"German A2",room:"3-xona",teacher:"N. Rahimov"}
  ]
};
