//modificar la primera card desde Javascript
const card =document.getElementById("card1")
const firstCard= function firstCard(){
    card.querySelector("img").setAttribute("src","./assets/img/shop_01.jpg")
    card.querySelector(".h3").textContent="cafe"
    card.querySelector("p").textContent="1,50€"
  card.querySelector(".card-body ul li i").textContent="conservas"  
   
}
document.addEventListener("DOMContentLoaded",()=>{
    firstCard();
})