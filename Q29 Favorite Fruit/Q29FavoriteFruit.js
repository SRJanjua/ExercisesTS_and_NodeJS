//Q29.
//Favorite Fruit
//point#1.
var fruitBasket = ["grapes", "banana", "apple", "mango", "strawberries"];
// Prompt() function is not executing in node.js 
//  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
var myFavFruit = prompt("Enter your favourite fruit's name: ");
for (var i = 0; i < fruitBasket.length; i++) {
    if (myFavFruit === fruitBasket[i]) {
        console.log("Your favourite fruit have been found in the basket at index no. : " + [i]);
    }
    else {
        console.log("Your favourite fruit have not been found in the basket");
    }
}
//point#2.
var myFavFruits = [""];
for (var i = 0; i < 3; i++) {
    // Prompt() function is not executing in node.js 
    //  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
    var favFruitName = prompt("Enter your favourite fruits' names: ");
    myFavFruits.push(favFruitName);
}
var threeFavFruits = myFavFruits.join(", ");
console.log("My three favurite fruits' name are: " + threeFavFruits);
