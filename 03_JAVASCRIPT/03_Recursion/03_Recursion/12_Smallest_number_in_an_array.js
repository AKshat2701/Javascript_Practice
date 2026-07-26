

let arr = [9,23,15,65,8,34,2,18]

function smallest(arr, i , n )
{
    
    if( i == n - 1 )
    {
        return arr[n - 1 ]
    }

    return Math.min(arr[i] , smallest(arr, i + 1, n ))
   
}

console.log(smallest(arr, 0, arr.length ))
