//Q15.
//Changing Guest List
var guestList = ["Dada g", "Dadi g", "Nana g", "Nani g", "Ammi", "Azmat"];
guestList.splice(2, 1, "Nazeera Khala"); //Replace "Nana g" with "Nazeera Khala"
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear, " + guestList[i] + " you are cordially invited on dinner at my home on 5 July 2023 at 8PM");
    console.log("We will be highly honoured with your presence");
    console.log("Regards");
}
console.log("Nana g, probably may not come as he is not feelinig well");
