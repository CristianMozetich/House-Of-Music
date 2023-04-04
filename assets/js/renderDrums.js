function renderDrums (){
    const drums = getDrumsLs ();
    let salida = "";

    drums.forEach((drums) => {
        salida +=  `<div class="card text-center m-3" style="width: 18rem;">
                            <img src="${drums.img}" class="card-img-top" alt="drums">
                            <div class="card-body">
                            <h5 class="card-title">${drums.name} </h5>
                            <p class="card-text">€${drums.price} </p>
                            <button class="btn btn-primary" onclick="addToCart(${drums.id})">Add to cart(+)</button>
                        </div>
                    </div>`
        
    });

    document.getElementById("drums").innerHTML = salida;
};

function renderCart(){
    salida = `  <a type="button" class="btn position-relative p-1"><img src="../assets/img/cart.png" alt="cart" width="80">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${renderCountCart()}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </a>`

    document.getElementById("cart").innerHTML = salida;
}
renderCart();
renderDrums();