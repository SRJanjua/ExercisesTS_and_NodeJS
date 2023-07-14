//Q16.
//More Guests
 
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

console.log("As we now have been given a bigger dinning table. So, we have invited few more guests");
