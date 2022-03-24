//printar las card desde data.js con Javascript
document.addEventListener("DOMContentLoaded",()=>{// no funciona
    printarCards();
})
 
function printarCards(){
    products.forEach(element => {
     const card=document.getElementById("card"+element.id)   
   
    card.querySelector("img").setAttribute("src",element.img)
    card.querySelector(".h3").textContent=element.name
    card.querySelector("p").textContent=element.price
  card.querySelector(".card-body ul li i").textContent=element.type
});
}
