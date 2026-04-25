
let arr = 
[
    [3,25,3],
    [95,5,3],
    [95,3,23]
]

for(let i = 0 ; i < arr.length ; i++)
{
    let colSum = 0 ;

    for(let j = 0 ; j < arr[i].length ; j++)
    {
        colSum = colSum + arr[j][i]
    }
    console.log(colSum)
}