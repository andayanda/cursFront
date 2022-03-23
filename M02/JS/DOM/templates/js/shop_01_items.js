let card1= document.getElementById("card1");
 var cardId=card1.getAttribute("data-id");

 card1.addEventListener("click",e =>{
     if(e.target.classList.contains("cardAdd")){
        alert("Añadimos al carrito: "+cardId)
        addToCart(cardId);
     }
     if(e.target.classList.contains("cardRemove")){
        alert("Eliminamos del carrito: "+cardId)
        removeFromCart(cardId);
     }
 })  
   
     
 
 function addToCart(id) {
    alert("add to cart")
 }


function removeFromCart(id) {
     alert("remove to cart")
 }

