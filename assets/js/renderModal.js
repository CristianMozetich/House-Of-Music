async function renderModal (){
    let respuesta = await fetch ("../assets/js/blogContent.json");
    let data = await respuesta.json();
    console.log(data);


    let salida = ""

    data.forEach((blog, index) => {
        let modalId = `exampleModal-${index}`;
            salida  +=  `<div class="card text-center m-4 col-10 col-sm-8 col-md-5">
                            <img src=" ${blog.img} " class="card-img-top" alt="drums">
                            <div class="card-body">
                                <h5 class="card-title"> ${blog.title} </h5>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                                    Read More
                                </button>
                                <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5 text-start" id="exampleModalLabel">${blog.title}</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body text-start"> ${blog.texto}
                                            </div>
                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> `
    });
    document.getElementById("blog").innerHTML = salida;
}

renderModal();