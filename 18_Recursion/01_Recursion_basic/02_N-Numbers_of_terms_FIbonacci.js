let prompt = require("prompt-sync")()
let n = Number(prompt("Enter a number"))


let first = 0 , second = 1 ;

for(let i = 1 ; i <= n - 2 ;  i++)
{
    let third = first+second
    process.stdout.write(third + " ")
    first = second
    second = third
}