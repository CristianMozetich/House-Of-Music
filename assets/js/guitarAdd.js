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
    textAddGuitar();
};

function findGuitar(id){
    let guitars = getGuitarsLs();

    return guitars.find((element)=> element.id ===id)
};

function textAddGuitar(){
    Toastify({
        text: "Added Successfully",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}