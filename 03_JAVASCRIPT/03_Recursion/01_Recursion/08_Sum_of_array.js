function sumOfArray(arr, index)
{
    

    if(index == arr.length )
    {
        return 0 
    }

    return arr[index] + sumOfArray(arr, index+1)
}

let arr = [329,4,454,34,9,6]
console.log(sumOfArray(arr,0))