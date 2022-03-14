//añadir productos al carrito
function buy(id) {
  console.table(products[id - 1]);
  
    
    cart.push(products[id-1]);
  
  
}
// function buy(id) {

//     cartList.push(products.find((pepito) => pepito.id == id ))

// }

//mostrar el carrito
function ShowCart() {//no funciona
  console.table(cart);
}
//vaciar el carrito
function cleanCart(){
    cart.length = 0;

    cart = [];
}

