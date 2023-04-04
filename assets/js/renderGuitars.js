function renderGuitars(){
    const guitars = getGuitarsLs();
    let salida = "";

    guitars.forEach((guitars) => {
        salida += ` <div class="card text-center m-3" style="width: 18rem;">
                        <img src="${guitars.img}" class="card-img-top" alt="guitars">
                        <div class="card-body">
                            <h5 class="card-title">${guitars.name}</h5>
                            <p class="card-text">€ ${guitars.price}</p>
                            <a href="#" class="btn btn-primary" >Add to cart</a>
                        </div>
                    </div>`
    });

    document.getElementById("guitars").innerHTML = salida;
}


renderGuitars();
