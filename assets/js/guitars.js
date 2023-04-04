const guitars = [
    {
        name: "Epiphone Casino",
        price: 370,
        id: 25,
        img: "../assets/img/Epiphone Casino.jpeg",
    },
    {
        name: "Epiphone Les Paul SG",
        price: 555,
        id: 26,
        img: "../assets/img/Epiphone 1961 Les Paul SG.jpeg",
    },
    {
        name: "Epiphone Sheraton-II Pro",
        price: 450,
        id: 27,
        img: "../assets/img/Epiphone Sheraton-II Pro.jpeg",
    },
    {
        name: "Fender Player Jaguar",
        price: 800,
        id: 28,
        img: "../assets/img/Fender Player Jaguar.jpeg",
    },
    {
        name: "Fender Player Stratocaster",
        price: 800,
        id: 29,
        img: "../assets/img/Fender Player Stratocaster.jpeg",
    },
    {
        name: "Gibson Flying V",
        price: 1500,
        id: 30,
        img: "../assets/img/Gibson Flying V.jpeg",
    },
    {
        name: "Gibson Les Paul Classic",
        price: 1200,
        id: 31,
        img: "../assets/img/Gibson Les Paul Classic.jpeg",
    },
    {
        name: "Gibson Les Paul Standard '50s",
        price: 1650,
        id: 32,
        img: "../assets/img/Gibson Les Paul Standard '50s.jpeg",
    },
    {
        name: "Gibson Les Paul Standard '60s",
        price: 2500,
        id: 33,
        img: "../assets/img/Gibson Les Paul Standard '60s.jpeg",
    },
    {
        name: "Gibson SG Standard '61",
        price: 1300,
        id: 34,
        img: "../assets/img/Gibson SG Standard '61.jpeg",
    },
    {
        name: "Sigma 000MC-15E",
        price: 500,
        id: 35,
        img: "../assets/img/Sigma 000MC-15E.jpeg",
    },
    {
        name: "Sigma DM-ST Acoustic Guitar",
        price: 200,
        id: 36,
        img: "../assets/img/Sigma DM-ST Acoustic Guitar.jpeg",
    },
    {
        name: "Squier Classic Vibe '70s Telecaster",
        price: 500,
        id: 37,
        img: "../assets/img/Squier Classic Vibe '70s Telecaster.jpeg",
    },
    {
        name: "Squier Classic Vibe '70s",
        price: 400,
        id: 38,
        img: "../assets/img/Squier Classic Vibe '70s.jpeg",
    },
    {
        name: "Taylor GS Mini Mahogany",
        price: 450,
        id: 39,
        img: "../assets/img/Taylor GS Mini Mahogany.jpeg",
    },
];

function setGuitarsLs(){
    localStorage.setItem("guitars", JSON.stringify(guitars));
};

function getGuitarsLs(){
    return JSON.parse(localStorage.getItem("guitars")) || [];
}

setGuitarsLs()
