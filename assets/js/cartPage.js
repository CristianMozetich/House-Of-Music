function cartPage(){
    let cart = getCart();
    let salida = "";

    cart.forEach((cart) => {
        salida += `<div class="card text-center m-3" style="width: 18rem;">
                        <img src="${cart.img}" class="card-img-top" alt="drums">
                        <div class="card-body">
                            <h5 class="card-title">${cart.name}</h5>
                            <p class="card-text">€${cart.price}</p>
                            <button class="btn btn-primary" onclick="drumsAdd(${cart.id})">Add to cart</button>
                        </div>
                    </div>`
});

    document.getElementById("cart").innerHTML = salida;
}

cartPage();