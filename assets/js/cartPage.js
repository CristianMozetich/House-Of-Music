function cartPage(){
    let cart = getCart();
    let salida = "";


    if (totalProd() > 0){
        salida += `<table class="table">`;

        salida +=   `<tr>
                        <td>&nbsp</td>
                        <td>&nbsp</td>
                        <td>&nbsp</td>
                        <td>&nbsp</td>
                        <td><button class="btn btn-danger" onclick="removeAll()">Remove All</button></td>
                    </tr>`

    cart.forEach((cart) => {
            salida +=
                        `<tr>
                            <td><img src="${cart.img}" width="150" class="img-fluid" alt="${cart.name}"></td>
                            <td>${cart.name}</td>
                            <td>€${cart.price} x ${cart.cantidad}</td>
                            <td>${cart.cantidad * cart.price}</td>
                            <td><button class="btn btn-danger" onclick="removeProd(${cart.id})">Remove Prod</button></td>
                        </tr>`
    });
            salida +=   `<tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>€${totalCost()}</td>
                            <td><button class="btn btn-success" onclick="pay()">Pay</button></td>
                        </tr>`
} else{
    salida =    `<div class="alert alert-primary text-center" role="alert">
                 Your cart is empty
                </div>`
}

    document.getElementById("cartProd").innerHTML = salida;
}


cartPage();

function pay(){
    Swal.fire({
        icon: 'success',
        title: 'Your pay has been succes',
        text: 'Thanks for shopping!',
      })
    removeAll();
}
