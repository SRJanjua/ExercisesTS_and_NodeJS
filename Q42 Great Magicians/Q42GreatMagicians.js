var magicianNames = ["Shahbaz", "Nawaz", "Asif", "Fazal", "Asim"];
function show_Magicians(Great, names_Of_Magicians) {
    // The output producing all 5 names in a single line 5 times !!
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(Great + " " + names_Of_Magicians[i]);
    }
}
function make_Great() {
    return "Great";
}
show_Magicians(make_Great(), magicianNames);
