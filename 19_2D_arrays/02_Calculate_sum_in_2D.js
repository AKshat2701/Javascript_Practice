

let arr = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function printRowSum(arr)
{
    let sum = 0 
    for(let i = 0 ; i< arr.length ; i++)
    {
        for(let j = 0 ; j < arr[i].length ; j++)
        {
            sum = sum + arr[i][j]
        }
        console.log(sum)
    }
}


printRowSum(arr)

console.log("PRINTING COLUMN SUM ")
function printColSum(arr)
{
    let sum = 0 
    for(let i = 0 ; i < arr.length ; i++)
    {
        for(let j = 0 ; j < arr[i].length ; j++)
        {
            sum = sum + arr[j][i]
        }
        console.log(sum)
    }
}

printColSum(arr)