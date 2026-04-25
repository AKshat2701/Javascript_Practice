let arr = 
[
    [1,2,3],
    [94,23,4],
    [94,3,2]
]



for(let i = 0 ; i < arr.length ; i++)
{
    let sum = 0 ;

    for(let j = 0 ; j < arr[i].length ; j++)
    {
        sum = sum + arr[i][j]
    }
    console.log(sum)
}