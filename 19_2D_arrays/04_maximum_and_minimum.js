

let arr =
[
    [43,5,2],
    [59,8,23],
    [3,23,5]
]


function getMax(arr)
{
    let max = -Infinity
    for(let i = 0 ; i < arr.length ; i++)
    {
        for(let j = 0 ; j < arr[i].length ; j++)
        {
            if(arr[i][j] > max)
            {
                max = arr[i][j]
            }
        }
    }
    return max
}

console.log(getMax(arr))
