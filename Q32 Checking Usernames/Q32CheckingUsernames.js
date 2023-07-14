//Q32.
//Checking Usernames
var currentUsers = ["SHAFQAT", "WAJAHAT", "ahwaad", "abdul ahad", "nida", "shafaat"];
var newUsers = ["azmat", "NOOR", "AYESHA", "shafqat", "wajahat", "MUMTAZ"];
for (var i = 0; i < newUsers.length; i++) {
    var lowercaseCurrentUsers = currentUsers.map(function (user) { return user.toLowerCase(); });
    // map() -? , user => user.toLowerCase() ? THIS PARTICULAR LINE HAVE BEEN COPIED FROM CHAT GPT AI
    // 'const' keyword has been 'tried' after trial n error exercise.   
    var lowercaseNewUser = newUsers[i].toLowerCase();
    // The indexOf() function is used after trying includes() function which was not recognised        
    if (lowercaseCurrentUsers.indexOf(lowercaseNewUser) !== -1) { // Used this line before ; currentUsers === newUsers[i]
        // and in sewcond attempt, this line ; lowercaseNewUser === lowercaseCurrentUsers[i]
        console.log("Username " + newUsers[i] + " is not available. Please enter a new username.");
    }
    else {
        console.log("Username " + newUsers[i] + " is available.");
    }
}
