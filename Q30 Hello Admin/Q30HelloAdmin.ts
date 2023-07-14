//Q30.
 //Hello Admin


 var empNames: string [] = ["wajahat","shafqat","azmat","admin","abdul Ahad"];
 
 // Prompt() function is not executing in node.js 
//  but, after transpiling the.ts file, the .js file runs in a browser, its executing 
 var adminName: string = prompt("Enter your User ID: ");

 
 for(let i=0; i<empNames.length; i++)
    {
      var username = empNames[i];

      if(username === "admin")
        {
         console.log("Hello " + empNames[i] + ", would you like to see a status report?");
        }
         else{ 
              console.log("Hello " + empNames[i] + ", thank you for logging in again.");
             }  
    } 
