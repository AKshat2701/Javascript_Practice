const arr = [21,12,12,21]


function palidrome(arr, start = arr[0], end = arr.length - 1 )
{
    if(start >= end)
    {
        return true ; 
    }

    if(arr[start ] != arr[end])
    {
        return false; 
    }

    return palidrome(arr, start + 1, end - 1 )
}

console.log(palidrome(arr))
console.log(palidrome("NAMASTE"))
