 //Q29.
 //Favorite Fruit
 //point#1.

    var fruitBasket: string [] = ["grapes","banana","apple","mango","strawberries"];

    // Prompt() function is not executing in node.js 
   //  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
    var myFavFruit: string  = prompt("Enter your favourite fruit's name: ");


     for(let i=0; i<fruitBasket.length; i++)
        {
           if(myFavFruit === fruitBasket[i]){
             
             console.log("Your favourite fruit have been found in the basket at index no. : " + [i]);
             }
           else
              {
                console.log("Your favourite fruit have not been found in the basket");
              } 
        }

 //point#2.


   var myFavFruits: string [] = [""];
 
     
       for(let i=0; i<3; i++){ 

        // Prompt() function is not executing in node.js 
       //  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
           var favFruitName: string = prompt("Enter your favourite fruits' names: " );
           myFavFruits.push(favFruitName);
       }
         const  threeFavFruits = myFavFruits.join(", ");
 
         console.log("My three favurite fruits' name are: " + threeFavFruits); 
