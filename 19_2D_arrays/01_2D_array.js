// const matrix = 
// [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// console.log(matrix.length)


//row wise
// for(let i = 0 ; i < matrix.length ; i++)
// {
//     for(let j = 0 ;j < matrix[i].length ; j++)
//     {
//         console.log(matrix[i][j])
//     }
// }


let arr = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9] 
]

//row wise 
// for(let i = 0 ; i < arr.length ; i++)
// {
//     for(let j = 0 ; j < arr[i].length ; j++)
//     {
//         process.stdout.write(arr[i][j] + " ")
//     }
//     console.log()
// }


// col wise
console.log("Printing column wise ") 
for(let i = 0 ; i< arr.length ; i++)
{
    for(let j = 0 ; j < arr[i].length ; j++)
    {
        process.stdout.write(arr[j][i] +  " ")
    }
    console.log()
}