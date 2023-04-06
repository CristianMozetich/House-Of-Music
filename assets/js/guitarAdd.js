function guitarAdd(id){
    const cart = getCart();
    if(inCart(id)){
        let pos = cart.findIndex(item => item.id === id);
        cart[pos].cantidad += 1;
    } else{
        const guitars = findGuitar(id);
        guitars.cantidad = 1;
        cart.push(guitars);
    }
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
};

function findGuitar(id){
    let guitars = getGuitarsLs();

    return guitars.find((element)=> element.id ===id)
};