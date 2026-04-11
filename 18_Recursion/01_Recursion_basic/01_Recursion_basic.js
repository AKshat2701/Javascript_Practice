 let prompt  = require("prompt-sync")()

 let n = Number(prompt("Enter a number "))

//  print hello n times 
//  hello(n) ; 
//  function hello(n)
//  {
//     if(n == 0) return ; 

//     console.log("hello world")
//     hello(--n)
//  }


// print from n to 1 
// print(n)
// function print(n)
// {
//     if(n == 0) return 
//     console.log(n)
//     print(--n);
// }



//print from 1 to n
// print(n)
// function print(n)
// {
//     if( n == 0 ) return 
//     print(--n)
//     console.log(n)
// }


//sum 
function sumofNum(n)
{
    if(n == 1) return n;
    return n + sumofNum(--n)
}
console.log(sumofNum(n))