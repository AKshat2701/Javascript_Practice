// Reverse a Number 

// let num = 35432
// let rev = 0 
// while(num > 0)
// {
//     let digit = num % 10
//     rev = rev * 10 + digit
//     num = Math.floor(num / 10)
// }
// console.log(rev)



// sum of Digit 

let num = 848485
let sum = 0 
while(num > 0 )
{
   let digit = num % 10
   sum = sum + digit;
   num = Math.floor(num/10)
}
console.log(sum)
