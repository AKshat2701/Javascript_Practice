let arr = 
[
    [13,32,53],
    [40,-5,-6],
    [-7,80,91]
]

function getMin(arr)
{
    let min = Infinity

    for(let i = 0 ; i < arr.length ; i++)
    {
        for(let j = 0 ; j < arr[i].length ; j++)
        {
            if(arr[i][j] < min)
            {
                min = arr[i][j]
            }
        }
    }
    return min 
}

console.log(getMin(arr))
