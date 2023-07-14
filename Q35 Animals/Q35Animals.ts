 //Q35
// Animals

var animals: string [] = ["goat","cow","sheep"];

for (let i = 0; i<animals.length; i++)
   {
     console.log("The halal animal is: " + animals[i]);
   }

// Modifying the Statements for each  animal

console.log("The " + animals[0] + " are more productive than the other two species of domestic animmals ");
console.log("The " + animals[1] + " produces more milk than the other two species of domestic animals");
console.log("The " + animals[2] + " has better metabolism than the other two species of domestic animals");
var domesticAnimals = animals.join(", ")
console.log("The livestock business of:  " + domesticAnimals + " is being considered lucarative all around the world." );




