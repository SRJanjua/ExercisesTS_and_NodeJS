var magicianNames: string [] = ["Shahbaz","Nawaz","Asif","Fazal","Asim"];
 
function show_Magicians(names_Of_Magicians:string []):void 
        {  
            for(let i=0; i<magicianNames.length; i++){ 
            console.log("Magician # " + [i] + " "+ names_Of_Magicians[i])
           }
        }

        show_Magicians(magicianNames);
