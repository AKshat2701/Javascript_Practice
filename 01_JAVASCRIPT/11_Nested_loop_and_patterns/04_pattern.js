let prompt = require("prompt-sync")()

let n = Number(prompt("Enter the number"))

for(let i = 0 ; i <= n ; i++)
{
    for(let j = 0 ; j <= i ; j++)
    {
        process.stdout.write(j + " ")
    }
    console.log()
}

// 0 
// 0 1
// 0 1 2
// 0 1 2 3
// 0 1 2 3 4
// 0 1 2 3 4 5
// 0 1 2 3 4 5 6 