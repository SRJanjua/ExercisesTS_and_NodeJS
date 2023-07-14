//Q30.
//Hello Admin
var empNames = ["wajahat", "shafqat", "azmat", "admin", "abdul Ahad"];
var adminName = prompt("Enter your User ID: ");
for (var i = 0; i < empNames.length; i++) {
    var username = empNames[i];
    if (username === "admin") {
        console.log("Hello " + empNames[i] + ", would you like to see a status report?");
    }
    else {
        console.log("Hello " + empNames[i] + ", thank you for logging in again.");
    }
}
