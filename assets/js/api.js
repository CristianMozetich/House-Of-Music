
async function noticias (){
	let respuesta = await fetch ('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f2c224ac0dad46f398c692b59ec6aedb');
	let data = await respuesta.json();
	console.log(data);
	let salida = "";
	const totalNews = 5;
	let i = 0;

		data.articles.forEach(item => {	
			if ( i < totalNews){
				salida += `	<div class="card text-center m-4 col-10 col-sm-8 col-md-5">
								<img src="${item.urlToImage} " class="card-img-top" alt="...">
								<div class="card-body">
				  					<h5 class="card-title">${item.title} </h5>
				  					<p class="card-text">${item.description}</p>
				  					<a href="${item.url}" target="_blank">${item.url}</a>
								</div>
			  				</div>`;
				i++;
	}
});

	document.getElementById("api").innerHTML = salida;
}

noticias();
	


