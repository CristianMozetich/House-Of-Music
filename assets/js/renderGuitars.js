function renderGuitars(){
    const guitars = getGuitarsLs();
    let salida = "";

    guitars.forEach((guitars) => {
        salida += ` <div class="card text-center border-secondary m-3" style="width: 18rem;">
                        <img src="${guitars.img}" class="card-img-top" alt="guitars">
                        <div class="card-body">
                            <h5 class="card-title p-2">${guitars.name}</h5>
                            <h4 class="card-text text-success p-2">€ ${guitars.price}</h4>
                            <a class="btn btn-primary" onclick="guitarAdd(${guitars.id})">Add to cart</a>
                        </div>
                    </div>`
    });

    document.getElementById("guitars").innerHTML = salida;
}


renderGuitars();
