//logica que solo funcionara cuando el indice coincida con el id de producto. si el Id de prod fueran letras, por ej, ya no funcionara
function buy(id) {
            cart.push(products[id-1]);
    }
   console.log(cart);