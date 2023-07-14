var magicianNames: string [] = ["Shahbaz","Nawaz","Asif","Fazal","Asim"];


function show_Magicians(Great: string , names_Of_Magicians:string []):void 
        {  
            
           for(let i=0; i<magicianNames.length; i++)
             { 
                console.log( Great + " " + names_Of_Magicians[i])
             }
        }

function make_Great() 
        {
            return "Great";
        }

        show_Magicians(make_Great(), magicianNames);
