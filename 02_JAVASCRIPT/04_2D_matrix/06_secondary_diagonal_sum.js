// top right to bottom left 

let arr =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// let sum = 0 ;

// for(let i = 0 ; i < arr.length ; i++)
// {
//     for(let j = 0 ; j < arr.length ; j++)
//     {
//         if(i + j === arr.length - 1 )
//         {
//             sum = sum + arr[i][j]
//         }
//     }
// }
// console.log(sum)



let sum = 0 ; 

for(let i = 0 ; i < arr.length ; i++)
{
    sum = sum + arr[i][arr.length - 1 - i ]
}
console.log(sum)
