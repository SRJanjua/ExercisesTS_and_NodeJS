//Q24.
//More Conditional Tests
//1. Tests for equality and inequality with strings
// Using inequality test
var fruit = "Apple";
console.log("Is the fruit not Orange?");
console.log(fruit !== "Orange"); // true
console.log("Is the fruit not Apple?");
console.log(fruit !== "Apple"); // false
// Using inequality test
var fruitName = "Alice";
console.log("Is the name Alice?");
console.log(fruitName === "Alice"); // true
console.log("Is the name Bob?");
console.log(fruitName === "Bob"); // false
//2. Tests using the lower case function
var country = "PAKISTAN";
console.log("Is the country Pakistan (case-insensitive)?");
console.log(country.toLowerCase() === "pakistan"); // true
console.log("Is the country India (case-insensitive)?");
console.log(country.toLowerCase() === "india"); // false
var city = "New York";
console.log("Is the city not san francisco (case-insensitive)?");
console.log(city.toLowerCase() !== "san francisco"); // true
console.log("Is the city not New York (case-insensitive)?");
console.log(city.toLowerCase() !== "new york"); // false
//3. Numerical tests involving equality and inequality, greater than and less
//   than, greater than or equal to, and less than or equal to
// Equality Test
var number = 5;
console.log("Is the number equal to 5?");
console.log(number === 5); // true
console.log("Is the number equal to 10?");
console.log(number === 10); // false
// Inequality Test
var age = 20;
console.log("Is the age not equal to 18?");
console.log(age !== 18); // true
console.log("Is the age not equal to 20?");
console.log(age !== 20); // false
// Greater Than Test
var score = 85;
console.log("Is the score greater than 80?");
console.log(score > 80); // true
console.log("Is the score greater than 90?");
console.log(score > 90); // false
// Less Than Test
var temperature = 25;
console.log("Is the temperature less than 30?");
console.log(temperature < 30); // true
console.log("Is the temperature less than 20?");
console.log(temperature < 20); // false
// Greater Than or Equal to Test
var count = 10;
console.log("Is the count greater than or equal to 10?");
console.log(count >= 10); // true
console.log("Is the count greater than or equal to 20?");
console.log(count >= 20); // false
// Less Than or Equal to Test
var price = 15;
console.log("Is the price less than or equal to 20?");
console.log(price <= 20); // true
console.log("Is the price less than or equal to 10?");
console.log(price <= 10); // false
//4. Tests using "and" and "or" operators
// Using && Operators
var number = 10;
console.log("Is the number between 5 and 15?");
console.log(number > 5 && number < 15); // true
console.log("Is the number between 15 and 20?");
console.log(number > 15 && number < 20); // false
// Using || Operators
var age = 24;
console.log("Is the age less than 18 or greater than 30?");
console.log(age < 18 || age > 30); // false
console.log("Is the age less than 25 or greater than 30?");
console.log(age < 25 || age > 30); // true
//5. Test whether an item is in a array 
var fruits = ["apple", "banana", "orange"];
var item = "banana";
console.log("Is the item in the array?");
console.log(fruits.indexOf(item) !== -1); // true
//console.log(fruits.includes(item));           // true
//6. Test whether an item is not in a array 
var fruits = ["apple", "banana", "orange"];
var item = "grape";
console.log("Is the item not in the array?");
console.log(fruits.indexOf(item) !== -1); // true
// console.log(!fruits.includes(item));         // true
