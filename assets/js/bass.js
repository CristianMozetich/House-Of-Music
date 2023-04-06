const bass = [
    {
        name: "Epiphone EB-3 Bass, Ebony",
        price: 550,
        id: 40, 
        img: "../assets/img/Epiphone EB-3 Bass, Ebony.jpeg",
    },
    {
        name: "Epiphone EB-3 BASS, Cherry",
        price: 500,
        id: 41,
        img: "../assets/img/Epiphone EB-3 BASS.jpeg",
    },
    {
        name: "Fender Kingman Acoustic Bass",
        price: 450,
        id: 42,
        img: "../assets/img/Fender Kingman Acoustic Bass.jpg"
    },
    {
        name: "Fender Player Jazz Bass, Orange",
        price: 860,
        id: 43,
        img: "../assets/img/Fender Player Jazz Bass, Orange.jpeg",
    },
    {
        name: "Fender Player Jazz Bass",
        price: 860,
        id: 44,
        img: "../assets/img/Fender Player Jazz Bass.jpeg",
    },
    {
        name: "Fender Player Plus Jazz Bass",
        price: 850,
        id: 45,
        img: "../assets/img/Fender Player Plus Jazz Bass.jpeg",
    },
    {
        name: "Fender Player Precision Bass",
        price: 900,
        id: 46,
        img: "../assets/img/Fender Player Precision Bass.jpg",
    },
    {
        name: "Fender Player Stratocaster",
        price: 800,
        id: 47,
        img: "../assets/img/Fender Player Stratocaster.jpeg",
    },
    {
        name: "Fender Vintera '60s Jazz Bass",
        price: 890,
        id: 48,
        img: "../assets/img/Fender Vintera '60s Jazz Bass.jpeg",
    },
    {
        name: "Taylor GS Mini-e Koa Bass",
        price: 400,
        id: 49,
        img: "../assets/img/Taylor GS Mini-e Koa Bass.jpeg",
    },
];

function setBassLs (){
    localStorage.setItem ("bass", JSON.stringify(bass));
};

function getBassLs(){
    return JSON.parse(localStorage.getItem("bass")) || [];
};

setBassLs();