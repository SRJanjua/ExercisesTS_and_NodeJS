  //Q20.
 //creating the list of following Array, containing 4 countries

 var userInputCountries: string []  = [];
    
    for(let i=0; i<4; i++){
   // Prompt() function is not executing in node.js 
  //  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
     const nameCountry = prompt("Enter the names of surrounding countries: ");
         
         userInputCountries.push(nameCountry);

         console.log(userInputCountries + " at " + [i]);
    }