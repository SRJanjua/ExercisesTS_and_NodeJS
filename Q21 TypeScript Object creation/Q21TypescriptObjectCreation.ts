 //Q21.
 // TypeScript -Object creation

 var itemArray: { name: string, category: string, price: number }[] = [];

 for (let i = 0; i < 4; i++) {

   // Prompt() function is not executing in node.js 
  //  but, after transpiling the.ts file, if .js file is run in a browser, its executing 
   const name: string = prompt("Enter the name of the item: ");
   const category: string = prompt("Enter the category of the item: ");
   const priceString: string = prompt("Enter the price of the item: ");
   const price: number = parseFloat(priceString);
 
   const item: { name: string, category: string, price: number } = {
     name: name,
     category: category,
     price: price,
   };
 
   itemArray.push(item);
 }
 
 console.log(itemArray);
 