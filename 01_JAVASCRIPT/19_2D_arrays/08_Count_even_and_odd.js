
let arr = 
[
    [2,12,3,4],
    [84,3,29,9],
    [78,4,34,9],
    [89,4,87,8]
]

const countEvenOdd = (nums) =>
{
    let evenCount = 0 
    let oddCount = 0 
    for(let i = 0 ; i < arr.length ; i++)
    {
        for(let j = 0 ; j < arr.length ; j++)
        {
            if(arr[i][j] % 2 == 0 )
            {
                evenCount++ ;
            }
            else 
            {
                oddCount++ ; 
            }
        }
    }

    return [evenCount , oddCount];
}

console.log(countEvenOdd(arr))