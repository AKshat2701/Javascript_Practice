function RightRotation(arr)
{
    let n = arr.length ; 
    let copy = arr[arr.length - 1 ]

    for(let i = arr.length - 1 ; i > 0 ; i-- )
    {
        arr[i] = arr[i - 1]
    }

    arr[0 ] = copy ; 
    return arr ; 
}

let arr = [ 1,2, 3,4,5]

console.log(RightRotation(arr))

