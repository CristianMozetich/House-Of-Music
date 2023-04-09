/*fetch ("https://jsonplaceholder.typicode.com/albums")
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
    });*/

function api(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '536eba755cmsh848989060aa353ap10c106jsn9276b08ade11',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
        
    fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
}

api()




