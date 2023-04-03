
let getCart = JSON.parse (localStorage.getItem("cart")) || [];

function addToCart(id){
    let cart = getCart;
    let drums = findDrums(id);
    cart.push(drums);
    localStorage.setItem ("cart", JSON.stringify(drums));
}

function findDrums (id){
    let drums = getDrumsLs ();

    return drums.find((element) => element.id === id);
}