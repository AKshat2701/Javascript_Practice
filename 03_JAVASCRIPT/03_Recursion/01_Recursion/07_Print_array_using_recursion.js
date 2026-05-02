function printArray(arr, index)
{
    if(index == arr.length)
    {
        return 
    }
    console.log(arr[index])
    printArray(arr, index + 1 )
}


let arr = [21,2,4,9,3,58,39,90]
printArray(arr, 0)