let prompt = require("prompt-sync")()

let n = Number(prompt("Enter a number"))


for(let i = 0 ; i <= n ; i++)
{
    for(let j = 1 ; j <= i ; j++)
    {
        process.stdout.write("x ")
    }
    console.log()
}

// x
// x x
// x x x
// x x x x
// x x x x x
// x x x x x x