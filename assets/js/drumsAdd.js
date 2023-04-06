function drumsAdd(id){
    const cart = getCart();
    if (inCart(id)){
        let pos = cart.findIndex( item => item.id === id);
        cart[pos].cantidad += 1;
    } else{
        const drums = findDrums(id);
        drums.cantidad = 1;
        cart.push(drums)
    }
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
};

function findDrums (id){
    let drums = getDrumsLs();

    return drums.find((element) => element.id === id);
};


