function bassAdd(id){
    const cart = getCart();
    const bass = findBass(id);
    cart.push(bass);
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
}

function findBass(id){
    let bass = getBassLs();

    return bass.find((element)=>element.id === id);
}