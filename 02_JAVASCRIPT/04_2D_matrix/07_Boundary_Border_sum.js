

let arr = 
[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

// let sum = 0 

// let n = arr.length ; 
// let m = arr[0].length ; 


// for(let i = 0 ; i < n ; i++)
// {
//     for(let j = 0 ; j < m ; j++)
//     {
//         if( i === 0 || i === n - 1 || j === 0 || j === m - 1)
//         {
//             sum = sum + arr[i][j]
//         }
//     }
// }

// console.log(sum)


//optimized approch 

let sum = 0 ;
let n = arr.length ; 
let m = arr[0].length ; 


//top row 
for(let i = 0 ; i < m ; i++)
{
    sum = sum + arr[0][i]
}

// bottom row
for(let i = 0 ; i < m ; i++)
{
    sum = sum + arr[n - 1 ][i]
}

//left column (skip corners)
for(let i = 1 ; i < n - 1 ; i++)
{
    sum = sum + arr[i][0]
}

//right corners 
for(let i = 1 ; i < n - 1 ; i++)
{
    sum = sum + arr[i][m-1]
}
console.log(sum)
