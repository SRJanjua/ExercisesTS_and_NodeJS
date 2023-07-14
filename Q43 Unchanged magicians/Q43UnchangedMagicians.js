var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_Magicians(names_Of_Magicians) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log("Great " + names_Of_Magicians[i]);
    }
}
function make_Great() {
    return console.log(copy_magicianNames);
}
// Array of magician's names
var magicianNames = ["Shahbaz", "Nawaz", "Asif", "Fazal", "Asim"];
// Calling the makeGreat() function with a copy of the magicianNames array
var copy_magicianNames = make_Great(__spreadArray([], magicianNames, true));
show_Magicians(magicianNames);
show_Magicians(copyMagicianNames);
console.log("Original Magician Names:");
showMagicians(magicianNames);
console.log("\nModified Magician Names:");
showMagicians(copy_magicianNames);
