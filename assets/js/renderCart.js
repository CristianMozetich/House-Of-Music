function renderCart(){
    salida = `  <a type="button" class="btn position-relative p-1" href="../pages/cart.html"><img src="../assets/img/cart.png" alt="cart" width="80">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProd()}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </a>`

    document.getElementById("cart").innerHTML = salida;
}
renderCart();

function getCart(){
    return JSON.parse (localStorage.getItem("cart")) || [];
}

function renderCountCart(){
    return getCart().length
}

function totalProd(){
    let products = getCart();

    return products.reduce((total, item)=> total += item.cantidad, 0)
}

function inCart(id){
    let cart = getCart();

    return cart.some((element)=> element.id === id);
}