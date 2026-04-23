let arr =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


function findKey(arr, key)
{
    //rows
    for(let i = 0 ; i < arr.length ; i++)
    {
        //col
        for(let j = 0 ; j < arr[i].length ; j++)
        {
            if(arr[i][j] == key)
            {
                return {row : i , col : j}
            }
        }
    }

    return null
}

console.log(findKey(arr, 3))
