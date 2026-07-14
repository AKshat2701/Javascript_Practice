
let arr = [ 1,2,3,4,5]
let k = 2 ;


function k_right(arr, k)
{
    let n = arr.length ; 
    
    for(let j = 0 ; j < k ; j++)
        {
        let copy = arr[arr.length - 1]
        for(let i = n - 1; i > 0 ; i--)
        {
            arr[i] = arr[i - 1 ]
        }
        arr[0] = copy ; 
    }

    return arr ; 
}

console.log(k_right(arr, k))
