const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '536eba755cmsh848989060aa353ap10c106jsn9276b08ade11',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


async function spotify() {
    let respuesta = await fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options);
    let data = await respuesta.json();
    console.log(data);

}
spotify();



