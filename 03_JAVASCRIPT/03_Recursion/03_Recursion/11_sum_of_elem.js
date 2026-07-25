function sumOfArray(arr )
{
    if(arr.length == 1 )
    {
        return arr[0] ; 
    }

    let elem = arr.shift()
    return elem + sumOfArray(arr)
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(sumOfArray(arr))