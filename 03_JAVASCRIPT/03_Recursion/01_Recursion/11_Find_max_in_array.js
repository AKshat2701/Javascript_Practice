
let arr = [18,43,9,23,22,9]

function findmax(arr, idx)
{
    if(idx === arr.length - 1 ) return arr[idx]

    let restMax = findmax(arr, idx + 1 )

    if(arr[idx] > restMax) return arr[idx]
    else return restMax ;
}

console.log(findmax(arr, 0))