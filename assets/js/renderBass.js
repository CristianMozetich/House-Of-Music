function renderBass(){
    const bass = getBassLs();
    let salida = "";

    bass.forEach((bass) => {
        salida += `<div class="card text-center border-secondary m-3" style="width: 18rem;">
                        <img src="${bass.img}" class="card-img-top" alt="drums">
                        <div class="card-body">
                            <h5 class="card-title">${bass.name} </h5>
                            <h4 class="card-text text-success p-2">€${bass.price}</h4>
                            <a class="btn btn-primary" onclick="bassAdd(${bass.id})">Add to cart</a>
                        </div>
                    </div>`
    });

    document.getElementById("bass").innerHTML = salida;
}

renderBass();