function printing(arr, i , str = " ")
{
    
    if(i == arr.length - 1 )
    {
        return str ;
    }

    return printing(arr, i + 1, str + arr[i] + " ")
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(printing(arr, 0 ))
