function renderCart(){
    salida = `  <a type="button" class="btn position-relative p-1"><img src="../assets/img/cart.png" alt="cart" width="80">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${renderCountCart()}
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