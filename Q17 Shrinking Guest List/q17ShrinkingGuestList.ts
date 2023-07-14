
 //Q17.
//Shrinking Guest List

var guestList: string[] = ["Dada g","Dadi g","Nana g","Nani g", "Ammi", "Azmat"];
  
guestList.splice(2,1, "Nazeera Khala"); //Replace "Nana g" with "Nazeera Khala",                                             // inserted in Q14.
 
guestList.unshift("Abdul Ahad");  //adding this element at beginning
guestList.splice(4,0,"Ahwaad")   //adding this element in the middle of list
guestList.push("Abbu");         //adding this element at the end of the list    

for(let i = 0; i < guestList.length; i++)
{
console.log("Dear, " + guestList[i] + " you are cordially invited on dinner at my    home on 5 July 2023 at 8PM");
console.log("We will be highly honoured with your presence");
console.log("Regards");
}

//Q17. specific code starts from here

console.log("My Dear loved ones, I was not aware of the situation that right after inviting you all, I will be \"instructed by Web3.0 PIAIC Team\" to strike-out your names from invitation list. My appologies");

 var finalList = guestList.join(", "); //displaying names of Invitees in one line  
 console.log(finalList);

 while(guestList.length > 2)
 { 
 var poppedElement = guestList.pop();
   
 console.log("My dear " + poppedElement + " , I am regretfully informing you that I am being instructed by \"Web3.0 PIAIC Team\" to drop your name from 5th July's dinner-invitation List");
 
 console.log(guestList);
 } 

    console.log(guestList.length);
 
// displaying message for the remaining guests for dinner

 for(let i=0; i<guestList.length; i++)
  {
    console.log("Dear " + guestList[i] + "!, you are still on the invitation list for 5th July's dinner");
  } 

 console.log("Nah! have changed my mind, once again, beacuse of the \" Namaloom afraad of PIAICTeam \"");
 guestList.pop();
 guestList.pop();
 
 console.log("Helloooo, is anybody left! " + guestList);