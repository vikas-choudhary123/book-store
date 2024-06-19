burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
nevigation = document.querySelector('.nevigation')


burger.addEventListener('click', ()=>{
  menu.classList.toggle('v-class');
  nevigation.classList.toggle('v-class');
  
})

let login = document.querySelector(".btnlogin-popup");
let login1 = document.querySelector(".login1");
let massage = document.querySelector(".popup");
let cross = document.querySelector("#cross");

login.addEventListener("click", () => {
  massage.classList.add("open-slide");
})

cross.addEventListener("click", () => {
  massage.classList.remove("open-slide");
})