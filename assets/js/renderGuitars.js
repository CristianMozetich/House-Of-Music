function renderGuitars(){
    const guitars = getGuitarsLs();
    let salida = "";

    guitars.forEach((guitars) => {
        salida += ` <div class="card text-center border-secondary m-3" style="width: 18rem;">
                        <img src="${guitars.img}" class="card-img-top" alt="guitars">
                        <div class="card-body">
                            <h5 class="card-title">${guitars.name}</h5>
                            <p class="card-text text-success">€ ${guitars.price}</p>
                            <a class="btn btn-primary" onclick="guitarAdd(${guitars.id})">Add to cart</a>
                        </div>
                    </div>`
    });

    document.getElementById("guitars").innerHTML = salida;
}


renderGuitars();
