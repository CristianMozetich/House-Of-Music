const drums =[
    {
        name: `DW Collector's Series`,
        price: 3500,
        id: 1,
        img: `../assets/img/DW Collector's Series.jpg`

    },
    {
        name: `DW Performance Series`,
        price: 3900,
        id: 2,
        img:`../assets/img/dw-performance series.jpg`
    },
    {
        name: `Ludwig Classic Maple`,
        price: 4100,
        id: 3,
        img: `../assets/img/ludwig classic maple.webp`
    },
    {
        name: `Mapex Mars Fusion`,
        price: 1000,
        id: 4,
        img: `../assets/img/Mapex Mars Maple Fusion.webp`
    },
    {
        name: `Yamaha Stage Custom`,
        price: 825,
        id: 5,
        img: `../assets/img/yamaha stage custom.webp`
    },
    {
        name: `DW Snare Desing Series`,
        price: 350,
        id: 6,
        img: `../assets/img/dw-snare design series 14x6.webp`
    },
    {
        name: `Remo Ambassador 14`,
        price: 25,
        id: 7,
        img: `../assets/img/Remo Weather King Ambassador Coated Head 14.webp`
    },
    {
        name: `Remo Ambassador Set`,
        price: 100,
        id: 8,
        img: `../assets/img/Remo Coated Ambassador Standard Pro.webp`
    },
    {
        name: `DW 9000 Series Double Pedal`,
        price: 850,
        id: 9,
        img: `../assets/img/DW 9000 Series Double Bass Drum Pedal.webp`
    },
    {
        name: `Vic Firth Classic 5b`,
        price: 15,
        id: 10,
        img: `../assets/img/Vic Firth American Classic Hickory Drum Sticks Wood 8D.webp`
    },
    {
        name: `Istanbul Mehmet Nostalgia Hi-Hat 15`,
        price: 350,
        id: 11,
        img: `../assets/img/Istanbul Mehmet Nostalgia Hi-Hat 15.webp`
    },
    {
        name: `Istanbul Agop Signature Hi-Hat 15`,
        price: 400,
        id: 12,
        img: `../assets/img/Istanbul Agop Signature Hi-Hats 15.webp`
    },
    {
        name: `Zildjian K Mastersound Hi-Hat 14`,
        price: 320,
        id: 13,
        img: `../assets/img/Zildjian K Mastersound Hi-Hats 14.webp`
    },
    {
        name: `Zildjian K Sweet Ride 23`,
        price: 650,
        id: 14,
        img: `../assets/img/Zildjian K Sweet Ride Cymbal 23.webp`
    },
    {
        name: `Istanbul Agop Anniversary Ride 22`,
        price: 750,
        id: 15,
        img: `../assets/img/Istanbul Mehmet El Negro Light Ride 22.webp`
    },
    {
        name: `Istanbul Agop Signature Ride 20`,
        price: 500,
        id: 16,
        img: `../assets/img/Istanbul Agop Signature Ride Cymbal 20.webp`
    },
    {
        name: `Istanbul Mehmet El Negro Ride 22`,
        price: 600,
        id: 17,
        img: `../assets/img/Istanbul Mehmet El Negro Light Ride 22.webp`
    },
    {
        name: `Zildjian K Custom Dark Crash 17`,
        price: 560,
        id: 18,
        img: `../assets/img/zildjian k custom dark crash cymbal 17.webp`
    },
    {
        name: `Zildjian K Custom Dark Pack`,
        price: 1220,
        id: 19,
        img: `../assets/img/Zildjian K Custom Dark Cymbal Pack.webp`
    },
    {
        name: `Istanbul Mehmet Nostalgia Crash 18`,
        price: 620,
        id:20,
        img: `../assets/img/Istanbul Mehmet Nostalgia Crash 18.webp`
    },
    {
        name: `Roland SPD-SX Sampling Pad`,
        price: 850,
        id: 21,
        img: `../assets/img/SPD-SX-1.jpeg`
    },
    {
        name: `Yamaha Stage Custom`,
        price: 650,
        id: 22,
        img: `../assets/img/Yamaha Stage Custom Hip 4-Piece Shell Pack Matte Surf Green.webp`
    },
    {
        name: `MEINL Byzance Studio Cymbal Set`,
        price: 1500,
        id: 23,
        img: `../assets/img/MEINL Byzance Studio Select Cymbal Set.webp`,
    },
    {
        name: `DW Design Black Nickel Over Brass`,
        price: 500,
        id: 24,
        img: `../assets/img/DW Design Series Black Nickel Over Brass Snare Drum.jpg`,
    },
];

function setDrumsLs (){
    localStorage.setItem("drums", JSON.stringify(drums))
}

function getDrumsLs (){
    return JSON.parse (localStorage.getItem("drums")) || [];
}

setDrumsLs()
