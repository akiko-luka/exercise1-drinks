import rs from "readline-sync"

let userAge = rs.question("Your age:\n> ");
let products = ["Beer", "Wine", "Vodka"];
let isProductAvailable;
let isShopOpen = true;
let canBuy;


let productIndex = rs.keyInSelect(products, "Please choose a product: (insert the number)");
isProductAvailable = productIndex >= 0;


canBuy = userAge > 18 && isProductAvailable && isShopOpen ? "Here you go" : "Sorry, you can't buy";


console.log(canBuy);