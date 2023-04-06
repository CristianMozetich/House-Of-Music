function drumsAdd(id){
    const cart = getCart();
    const drums = findDrums(id);
    cart.push(drums);
    localStorage.setItem ("cart", JSON.stringify(cart));
    renderCountCart();
    renderCart();
};

function findDrums (id){
    let drums = getDrumsLs();

    return drums.find((element) => element.id === id);
};


