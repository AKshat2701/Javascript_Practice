// Print numbers from 1 to N

// let i = 0
// let n = 20

// while (i <= n )
// {
//     console.log(i)
//     i = i + 1 ;
// }

// Print numbers from N to 1


// let n = 5
// while(n > 0)
// {
//     console.log(n)
//     n--
// }


// Print even numbers from 1 to N
// let i = 0
// let n = 32

// while(i < n)
// {
//     if(i % 2 == 0 )
//     {
//         console.log(i)
//     }
//     i++;
// }


// Print sum of first N natural numbers
// let sum = 0 
// let i = 1 
// let n = 10

// while(i < n)
// {
//     sum = sum + i
//     i++
// }
// console.log(sum)

// Print multiplication table of a number

// let i = 1 ;
// let n = 3

// while ( i < 11)
// {
//     console.log(`${n} x ${i} = ${n*i}`)
//     i ++
// }

// Count digits in a number
// Input: 4587
// Output: 4

let num = 134434343
let count = 0 

while(num > 0 )
{
    if(num == 0)
    {
        console.log(i)
        break
    }
    count++;
    num = Math.floor(num/10)
}
console.log(count)