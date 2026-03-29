let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a number"))


for(let i = 0 ; i <= n ; i++)
{
    //space 
    for(let j = 0 ; j <= n - i ; j++)
    {
        process.stdout.write(" ")
    }
    
    

    //star
    for(let k = n - i; k <= n ; k++ )
    {
        process.stdout.write("*" )
    }

    console.log()
}

//       *
//      **
//     ***
//    ****
//   *****
//  ******