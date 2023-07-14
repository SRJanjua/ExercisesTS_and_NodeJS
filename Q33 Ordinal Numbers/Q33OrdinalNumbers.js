//Q33. 
// Ordinal Numbers indicate their position in a array, such as 1st or 2nd. Most //  ordinal numbers end in th, except 1, 2, and 3.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
for (var i = 0; i < numbers.length; i++) {
    var ordinal;
    if (numbers[i] === 1 || numbers[i] === 21 || numbers[i] === 31) {
        ordinal = 'st';
    }
    else if (numbers[i] === 2 || numbers[i] === 22) {
        ordinal = 'nd';
    }
    else if (numbers[i] === 3 || numbers[i] === 23) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(numbers[i] + ordinal);
}
