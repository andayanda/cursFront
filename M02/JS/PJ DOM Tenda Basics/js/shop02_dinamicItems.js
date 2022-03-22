document.querySelectorAll(".cardAdd").forEach(element => {
    addEventListener("click",e =>{
       
        if(e.target.classList.contains("cardAdd")){
            var cardId=card1.getAttribute("data-id");
            alert("Añadimos al carrito: "+cardId)
            addToCart(cardId);
        }
       
          
    })})
  document.querySelectorAll(".cardRemove").forEach(element => {
               addEventListener("click",e =>{
                if(e.target.classList.contains("cardRemove")){
                    var cardId=card1.getAttribute("data-id");
                    alert("Eliminamos del carrito: "+cardId)
                    removeFromCart(cardId);
                }           
                   
        
          
          
        
    })})


//  card1.addEventListener("click",e =>{
//      if(e.target.classList.contains("cardAdd")){
//         alert("Añadimos al carrito: "+cardId)
//         addToCart(cardId);
//      }
//      if(e.target.classList.contains("cardRemove")){
//         alert("Eliminamos del carrito: "+cardId)
//         removeFromCart(cardId);
//      }
//  })  

 
function addToCart(id) {
    alert("add to cart")
 };
 
 
 function removeFromCart(id) {
     alert("remove to cart")
 };

