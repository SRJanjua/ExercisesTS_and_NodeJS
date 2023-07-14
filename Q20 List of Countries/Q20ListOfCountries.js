//Q20.
//creating the list of following Array, containing 4 countries
var userInputCountries = [];
for (var i = 0; i < 4; i++) {
    // Prompt() function is not executing in node.js 
    // but, after transpiling the.ts file, if .js file run in browser, its executing 
    var nameCountry = prompt("Enter the names of surrounding countries: ");
    userInputCountries.push(nameCountry);
    console.log(userInputCountries + " at " + [i]);
}
