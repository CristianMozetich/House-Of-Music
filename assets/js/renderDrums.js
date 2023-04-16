function renderDrums (){
    const drums = getDrumsLs ();
    let salida = "";

    drums.forEach((drums) => {
        salida +=  `<div class="card text-center border-secondary m-3" style="width: 18rem;">
                            <img src="${drums.img}" class="card-img-top" alt="drums">
                            <div class="card-body">
                            <h5 class="card-title">${drums.name} </h5>
                            <h4 class="card-text text-primary p-2">€${drums.price}</h4>
                            <a class="btn btn-primary" onclick="drumsAdd(${drums.id})">Add to cart</a>
                        </div>
                    </div>`
        
    });

    document.getElementById("drums").innerHTML = salida;
};



renderDrums();