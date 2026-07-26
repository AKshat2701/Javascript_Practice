let arr = [1,3,4,2,4,5,7,8,9]


// function indices(arr, x , index = arr.length - 1 )
// {
//     if(index < 0 )
//     {
//         return -1 ; 
//     }

//     if(arr[index] === x )
//     {
//         return index ;
//     }

//     return indices(arr, x , index - 1)
// }

// console.log(indices(arr, 4))


function fromleft(arr,x, index = 0 )
{
    if(index == arr.length)
    {
        return -1 ;
    }

    let ans = fromleft(arr, x , index + 1 )

    if(ans !== -1)
    {
        return ans 
    }

    if(arr[index] === x )
    {
        return index ;
    }
    return -1 
}