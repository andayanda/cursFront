
function buy(id) {
    console.table(products[id - 1]);
    for (let i = 0; i <= products.length; i++) {
        cart.push(products[i]);
    }
    console.table(cart)
};
