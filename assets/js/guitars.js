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
    {
        name: "Boss CH1 Super Chorus",
        price: 110,
        id: 50,
        img: "../assets/img/Boss CH1 Super Chorus.jpeg",
    },
    {
        name: "Boss DM2W Analog Delay",
        price: 200,
        id: 51,
        img: "../assets/img/Boss DM2W Analog Delay.jpeg",
    },
    {
        name: "Boss OD3 Overdrive",
        price: 120,
        id: 52,
        img: "../assets/img/Boss OD3 Overdrive.jpeg",
    },
    {
        name: "Boss CS3 Compression Sustainer",
        price: 110,
        id: 53,
        img: "../assets/img/Boss CS3 Compression Sustainer.jpeg",
    },
    {
        name: "Gibson Hummingbird Studio Walnut Acoustic Guitar",
        price: 1900,
        id: 54,
        img: "../assets/img/Gibson Hummingbird Studio Walnut Acoustic Guitar.jpeg",
    },
    {
        name: "Taylor 324ce Builder's Edition",
        price: 2900,
        id: 55,
        img: "../assets/img/Taylor 324ce Builder's Edition.jpeg"
    },
    {
        name: "Taylor 724ce KOA GA Cutaway",
        price: 3100,
        id: 56,
        img: "../assets/img/Taylor 724ce KOA GA Cutaway.jpeg",
    },
    {
        name: "Taylor Builder's Edition 614ce WHB",
        price: 4000,
        id: 57,
        img: "../assets/img/Taylor Builder's Edition 614ce WHB.jpeg",
    },
    {
        name: "Gretsch G5422G-12 Electromatic Hollow Body Double Cut 12 String",
        price: 1000,
        id: 58,
        img: "../assets/img/Gretsch G5422G-12 Electromatic Hollow Body Double Cut 12 String.jpeg",
    },
];

function setGuitarsLs(){
    localStorage.setItem("guitars", JSON.stringify(guitars));
};

function getGuitarsLs(){
    return JSON.parse(localStorage.getItem("guitars")) || [];
}

setGuitarsLs()
