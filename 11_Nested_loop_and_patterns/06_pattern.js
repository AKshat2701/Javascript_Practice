let prompt = require("prompt-sync")()

let n = Number(prompt("Enter the number"))


let ch = 65

for(let i = 0 ; i <= n ; i++)
{
    for(let j = 0 ;  j <= i ; j++)
    {
        process.stdout.write(String.fromCharCode(ch))
        ch++
    }

    console.log()
}

// A
// BC
// DEF
// GHIJ
// KLMNO
// PQRSTU