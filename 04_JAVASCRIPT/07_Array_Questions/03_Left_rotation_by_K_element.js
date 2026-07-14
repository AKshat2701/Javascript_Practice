let arr = [ 1,2 ,3, 4 ,5]
let k = 3;
k = k % arr.length ; 



function K_rotation(arr, k )
{   
    let n = arr.length ; 
    
    
    for(let j = 0 ; j < k ; j++)
        {
         
        let copy = arr[0]
        for(let i = 0 ; i < n - 1 ; i++)
        {
            arr[i] = arr[i + 1 ]
        }
        arr[arr.length - 1 ] = copy ; 
    }
    return arr ; 

}

console.log(K_rotation(arr, k ))
