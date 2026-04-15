let arr = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]



const transpose = (arr) =>
{
    let result = [] 
    const rowLength = arr.length ; 
    const colLength = arr[0].length ; 

    for(let i = 0 ; i < rowLength ; i++)
    {
        for(let j = 0 ;  j < colLength ; j++)
        {
            if(!result[j])
            {
                result[j] = []
            }
            result[j][i] = arr[i][j]
        }
    }
    return result; 

}

console.log(transpose(arr))
