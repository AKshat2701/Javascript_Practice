function max(arr, i )
{

    if(i == arr.length - 1 )
    {
        return arr[i]
    }

    return Math.max(arr[i], max(arr, i + 1))

}

let arr = [ 10,2,54,23,86,4,12]

console.log(max(arr, 0))