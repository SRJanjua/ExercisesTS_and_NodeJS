 //Q37
//Make Large Shirts using Function()


function makeShirt(size: string = "large", message: string = "I am TypeScript coder"): void {
    console.log("The size of the shirt is: " + size );
    console.log("Message printed on the shirt: " + message);
  }
  
  // Large shirt with default message
  makeShirt();
  
  // Medium shirt with default message
  makeShirt("medium");
  
  // Custom-sized shirt with a different message
  makeShirt("small", "I am JavaScript coder!");
  