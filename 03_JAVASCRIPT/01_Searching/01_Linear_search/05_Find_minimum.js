let arr = [84,385,85,38,99,57,92,59,86,94]


const findMin = (arr) =>
{

    if(arr.length === 0 ) return null 
    
    let min = Infinity ;
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i]
        }
    }
    return min 
}

const output = findMin(arr)
console.log(output)
