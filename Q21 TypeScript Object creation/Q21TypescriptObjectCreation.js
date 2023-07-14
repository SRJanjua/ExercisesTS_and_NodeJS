//Q21.
// TypeScript -Object creation
var itemArray = [];
for (var i = 0; i < 4; i++) {
    var name_1 = prompt("Enter the name of the item: ");
    var category = prompt("Enter the category of the item: ");
    var priceString = prompt("Enter the price of the item: ");
    var price = parseFloat(priceString);
    var item = {
        name: name_1,
        category: category,
        price: price,
    };
    itemArray.push(item);
}
console.log(itemArray);
