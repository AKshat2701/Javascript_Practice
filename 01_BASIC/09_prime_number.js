let prompt = require("prompt-sync")()

let n = Number(prompt("Enter number"))
// let count = 0 

// for (let i = 1 ; i <= n ; i++)
// {
//     if(n % i == 0)
//     {
//         count++
//     }
// }

// if(count == 2 )
// {
//     console.log("Prime Number")
// } else 
// {
//     console.log("not a Prime number")
// }


// let count = 0 
// if(n <= 0 ) console.log("Not Prime")
// else {

//     for(let i = 2 ; i <= n / 2 ; i++)
// {
//     if(n% i == 0)
//     {
//         count++
//     }
// }

// if(count == 0 )
// {
//     console.log("prime Number")
// } else 
// {
//     console.log("Not prime number")
// }
// }


if(n <= 1 ) console.log("Not Prime")
else if (n == 2 ) console.log("Prime")
else if( n % 2 == 0) console.log("not prime")

else 
{
    let isPrime = true
    for(let i = 0 ; i <= Math.floor(Math.sqrt(n)) ;  i+=2)
    {
        if(n % i == 0)
        {
            isPrime =  false
            break
        }
    }
    console.log(isPrime ?"Prime" : "Not prime")
}