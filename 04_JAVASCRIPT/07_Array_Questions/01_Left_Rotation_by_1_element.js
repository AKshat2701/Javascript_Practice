function RotateByOne(arr)
{
    let n = arr.length ; 
    let copy = arr[0]

    for(let i = 0 ; i < n - 1 ; i++)
    {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = copy ; 
    return arr ; 
}

let arr = [ 1,2,3,4,5 ]
console.log(RotateByOne(arr))