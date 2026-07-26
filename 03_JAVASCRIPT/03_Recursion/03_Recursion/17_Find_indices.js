function indices(arr,x, i = 0 , str = "")
{

    if(i === arr.length - 1 )
    {
        return str ;
    }

    if(arr[i] == x )
    {
        str = str + i + ' '
    }

    return indices(arr, x , i + 1, str )
}

let arr = [1,2,3,4,3,5,6,7,8,9]

console.log(indices(arr , 3))