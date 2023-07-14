
function show_Magicians(names_Of_Magicians:string []):void 
        {  
         
           for(let i=0; i<magicianNames.length; i++)
             { 
                console.log( "Great " +  names_Of_Magicians[i])
             }
        }

function make_Great(names_Of_Magicians:string []) 
        {   
            return console.log(copy_magicianNames);
             
        }

// Array of magician's names

var magicianNames: string [] = ["Shahbaz","Nawaz","Asif","Fazal","Asim"];

// Calling the makeGreat() function with a copy of the magicianNames array

var copy_magicianNames: string []  = make_Great( [...magicianNames]);

console.log("Original Magician Names:");
showMagicians(magicianNames);

console.log("\nModified Magician Names:");
showMagicians(copy_magicianNames);