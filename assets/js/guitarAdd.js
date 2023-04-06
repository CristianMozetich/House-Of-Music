function guitarAdd(id){
    const cart = getCart();
    const guitars = findGuitar(id);
    cart.push(guitars);
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
};

function findGuitar(id){
    let guitars = getGuitarsLs();

    return guitars.find((element)=> element.id ===id)
};