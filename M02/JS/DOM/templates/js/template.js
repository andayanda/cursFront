//printar las card desde data.js con Javascript y template
const cards= document.getElementById("cards")
const templateCard =document.getElementById("template-card").content
const fragment=document.createDocumentFragment()


 
function printarCards(){
    products.forEach(element => {
    templateCard=document.getElementById("card"+element.id)///falla la id. hay que hacerla dinamica   
   
     templateCard.querySelector("img").setAttribute("src",element.img)
     templateCard.querySelector(".h3").textContent=element.name
     templateCard.querySelector("p").textContent=element.price
   templateCard.querySelector(".card-body ul li i").textContent=element.type
   const clone= templateCard.cloneNode(true)
   //se guarda en memoria
   fragment.appendChild(clone)
})
cards.appendChild(fragment)
}
document.addEventListener("DOMContentLoaded",()=>{
    printarCards();
});
