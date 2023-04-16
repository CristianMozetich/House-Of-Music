function renderBass(){
    const bass = getBassLs();
    let salida = "";

    bass.forEach((bass) => {
        salida += `<div class="card text-center border-secondary m-3" style="width: 18rem;">
                        <img src="${bass.img}" class="card-img-top" alt="drums">
                        <div class="card-body">
                            <h5 class="card-title">${bass.name} </h5>
                            <p class="card-text text-success">€${bass.price}</p>
                            <a class="btn btn-primary" onclick="bassAdd(${bass.id})">Add to cart</a>
                        </div>
                    </div>`
    });

    document.getElementById("bass").innerHTML = salida;
}

renderBass();