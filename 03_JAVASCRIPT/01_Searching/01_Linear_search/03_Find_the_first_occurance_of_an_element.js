// find first occurance 

const firstOcc = (arr, target) =>
{
    for(let i = 0 ; i < arr.length ; i++ )
    {
        if(arr[i] === target)
        {
            return i ; 
        }
    }

    return -1 ; 
}


console.log(firstOcc([93,23,92,94,23,98,75], 23))




const secondOcc = (arr, target) =>
{
    let count = 0 ;
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] === target)
        {
            count++ ; 
        }

        if(count == 2 )
        {
            return i ; 
        }
    }
    return -1 ; 
}

console.log(secondOcc([93,23,92,94,23,98,75],23))