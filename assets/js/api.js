fetch ("https://jsonplaceholder.typicode.com/albums")
.then((respuesta)=> respuesta.json())
.then((data)=>{
    console.log(data)
    let salida = "";

    data.forEach(x => {
        salida +=   `<p>${x.userId}</p>
                     <p>${x.id}</p>
                     <p>${x.title} </p>`
    });
    document.getElementById("respuesta").innerHTML = salida;
    });

