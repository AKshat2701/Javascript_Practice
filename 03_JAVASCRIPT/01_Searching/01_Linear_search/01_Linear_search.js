// get the index of target in array 

const getTarget = (arr, target) =>
{
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] == target)
        {
            return `Found ${target} at index ${i}`
            
        }
        
    }
    return -1 ; 
}


console.log(getTarget([84,58,3,58,9,23,85,88], 88))
