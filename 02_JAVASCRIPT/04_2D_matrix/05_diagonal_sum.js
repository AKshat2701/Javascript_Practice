
let arr = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12,13]
]

// let sum = 0 
// for(let i = 0 ; i < arr.length ; i++)
// {

//     for(let j = 0 ; j < arr[i].length ; j++)
//     {
//         if( i === j )
//         {
//             sum = sum + arr[i][j]
//         }
//     }
    
// }

// console.log(sum)


//optimized 
let sum = 0 ;
for(let i = 0 ; i < arr.length ; i++)
{
    sum = sum + arr[i][i]
}
console.log(sum)
