 //Q31.
 // No Users - Add an "if test" to Q28.to make sure the list of users is not empty. 


 // Array of usernames, created in Q28
    
   var usernames:string [] = ["wajahat","shafqat","azmat","admin","abdul ahad"];
  
      //console.log(usernames.length);  //for testing the size of array/empty 
 
   function greetUser(username)  // Function to greet users
    { 
      if (username === 'admin')
       {
         console.log('Hello admin, would you like to see a status report?');
       } 
    else
       {
         console.log('Hello ' + username + ', thank you for logging in again.');
       }
    }

   
  if (usernames.length !== 0) // This is the If condition, specifically add for Q31 
     {                                            
      
       // Prompt the user to enter a username
      // The first line of the program   
      
      var userInput: string = prompt('Enter your username:');  
      
     // Prompt() function is not executing in node.js 
    //  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
 
 // Check if the entered username exists in the array

   var found: boolean = false;
      for (let i = 0; i < usernames.length; i++) 
        {
         if (usernames[i] === userInput) 
           {
             greetUser(usernames[i]);
              found = true;
               break;
           }
        }

         // If no match is found, print a generic message

         if (!found)
           {
             console.log('Invalid username. Please try again.');
           }
   
 
     } //If block; will execute when the elements present in an array  
  
 else 
     {
          // this block executes if array is empty

            console.log('Array is empty');
     }