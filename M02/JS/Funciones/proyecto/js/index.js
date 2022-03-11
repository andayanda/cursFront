//logica que funcionara con cualquier id de producto. 
function buy(id){
        productBuy=products.find(function(element){//element: es el elemento en el que esta iterando. El find hace un for
        if(element.id== id){
                return element;
        }
})
cart.push(productBuy)
console.table(cart);        
}
// function cleanCart(cart){
//         while(cart.length) {
//                 cart.pop();
//             }
//             console.table("No hay nada en el carrito"+cart); 
// } 
// function subtotal(porTipo){
//         for (let i = 0; i < cart.length; i++) {
//                 const element = cart[i];
                
//         }
//         switch (grocery) {
//                 case value:
                        
//                         break;
        
//                 default:
//                         break;
//         }

// } 
function sumaTipo(porTipo){
        for (let i = 0; i < cart.length; i++) {
               
        if (products.type=="grocery") {
                subtotal=products.price+=
              
                        else if(products.type=="beauty"){
                                products.price+=
                        }

               } else {
                       
               }
                
        }
}
