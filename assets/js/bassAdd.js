function bassAdd(id){
    const cart = getCart();
    if (inCart(id)){
        let pos = cart.findIndex(item => item.id === id);
        cart[pos].cantidad += 1;
    } else{
        const bass = findBass(id);
        bass.cantidad = 1;
        cart.push(bass);
    }
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
}

function findBass(id){
    let bass = getBassLs();

    return bass.find((element)=>element.id === id);
}