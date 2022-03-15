//añadir productos al carrito
//function buy(id){
        // productBuy=products.find(function(element){//element: es el elemento en el que esta iterando. El find hace un for
        //         if(element.id== id){
        //                 return element;
        //         }
        // })
        // cart.push(productBuy)
        // console.table(cart);        
        // }
function buy(id) {
  console.table(products[id - 1]);
  
    
    cart.push(products[id-1]);
  
  
}

//mostrar el carrito
function ShowCart() {//no funciona
  console.table(cart);
}
//vaciar el carrito
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
function cleanCart(){
    cart.length = 0;

    cart = [];
}

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

