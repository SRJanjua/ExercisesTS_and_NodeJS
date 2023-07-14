var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q18.
//Seeing the World
var cityToVisit = ["London", "Vancouver", "Sydney", "Paris", "Rome"];
console.log(cityToVisit);
//sorting the elements in alphabetical order w/o effecting
// the original-order of an array
var sorted_CityToVisit = __spreadArray([], cityToVisit, true).sort();
console.log(sorted_CityToVisit);
console.log(cityToVisit); // Original Array
//reversing the sorted elements(alphabetical-order) without effecting original-    
// order of an array 
var reverse_SortedCityToVisit = __spreadArray([], cityToVisit, true).sort().reverse();
console.log(reverse_SortedCityToVisit);
console.log(cityToVisit); // Original Array
// Reversing the 'reverse_SortedCityToVisit' (at line 11) which would produce the same   //  order like in 'sorted_CityToVisit'(at line 6)  
var reversingAgain_SortedCityToVisit = __spreadArray([], cityToVisit, true).sort().reverse().reverse();
console.log(reversingAgain_SortedCityToVisit);
console.log(cityToVisit); // Original Array
// Sorting for another time
var sortSecondTime_SortedCityToVisit = __spreadArray([], cityToVisit, true).sort().reverse().reverse().sort();
console.log(sortSecondTime_SortedCityToVisit);
// Reversing for last time and print the result
var lastReverse_SortedCityToVisit = __spreadArray([], cityToVisit, true).sort().reverse().reverse().sort().reverse();
console.log(lastReverse_SortedCityToVisit);
