
let arr =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const sumofMatrix = (n) =>
{
    let sum = 0 ; 
    for(let i = 0 ; i < n.length ; i++)
    {
        for(let j = 0 ; j < n[i].length ; j++)
        {
            sum = sum + arr[i][j]
        }
    }
    console.log(sum)
}
sumofMatrix(arr)

