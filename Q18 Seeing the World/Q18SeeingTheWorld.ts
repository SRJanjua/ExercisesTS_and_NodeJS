 //Q18.
 //Seeing the World
 var cityToVisit: string [] = ["London","Vancouver","Sydney","Paris", "Rome"];
 console.log(cityToVisit);

 //sorting the elements in alphabetical order w/o effecting
// the original-order of an array

 var sorted_CityToVisit = [...cityToVisit].sort();
 console.log(sorted_CityToVisit);                                                            
 console.log(cityToVisit); // Original Array

 //reversing the sorted elements(alphabetical-order) without effecting original-    
// order of an array 

 var reverse_SortedCityToVisit = [...cityToVisit].sort().reverse();

 console.log(reverse_SortedCityToVisit);

 console.log(cityToVisit); // Original Array

 // Reversing the 'reverse_SortedCityToVisit' (at line 11) which would produce the same   //  order like in 'sorted_CityToVisit'(at line 6)  

 var reversingAgain_SortedCityToVisit = [...cityToVisit].sort().reverse().reverse();

 console.log(reversingAgain_SortedCityToVisit);

 console.log(cityToVisit); // Original Array

// Sorting for another time

 var sortSecondTime_SortedCityToVisit = [...cityToVisit].sort().reverse().reverse().sort();

 console.log(sortSecondTime_SortedCityToVisit); 
 
// Reversing for last time and print the result

var lastReverse_SortedCityToVisit = [...cityToVisit].sort().reverse().reverse().sort().reverse();
console.log(lastReverse_SortedCityToVisit);
