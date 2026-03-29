let prompt = require("prompt-sync")()
let n = Number(prompt("Enter the number"))
let ch = 65


for(let i = 0 ; i <= n ; i++)
{
    //spaces
    for(let j = 1 ; j <= n - i ; j++)
    {
        process.stdout.write(" ")
    }

    //characters
    for(let j = 1 ; j <= i ; j++)
    {
        process.stdout.write(String.fromCharCode(ch))
        ch++
    }
    console.log()

}

//      A
//     BC
//    DEF
//   GHIJ
//  KLMNO
// PQRSTU