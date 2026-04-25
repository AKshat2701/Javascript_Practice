
// let arr = 
// [
//     [1,2,3],
//     [4,5,6],
//     [8,9,10]
// ]

//row wise
// for(let i = 0 ; i < arr.length ; i++)
// {
//     for(let j = 0 ; j < arr[i].length ; j++)
//     {
//         console.log(arr[i][j])
//     }
// }


//col wise
// for(let i = 0 ; i < arr.length ; i++)
// {
//     for(let j = 0 ; j < arr[i].length ; j++)
//     {
//         console.log(arr[j][i])
//     }
// }




// Taking input for 2D array 
let n = 3 ; 
let m = 3 ; 

let arr = []

for(let i = 0 ; i < n ; i++)
{
    arr[i] = []
    for(let j = 0 ; j < m ; j++)
    {
        arr[i][j] = i + j 
    }
}
console.log(arr)
