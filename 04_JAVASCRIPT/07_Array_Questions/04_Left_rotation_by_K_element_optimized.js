function left_K_rotation(arr, k )
{
    let temp = new Array(arr.length)

    for(let i = 0 ; i < arr.length ; i++)
    {
        temp[i] = arr[(i + k) % arr.length ]
    }

    return temp ; 
}

let arr = [1,2,3,4,5]

let k = 2 
k = k % arr.length 

console.log(left_K_rotation(arr, k ))

//Right Rotation 

function right_K_rotation(arr, k )
{
    let temp = new Array(arr.length)

    for(let i = 0 ; i < arr.length ; i++)
    {
        temp[( i + k) % arr.length ] = arr[i]

    }

    return temp ; 
}

console.log(right_K_rotation(arr, k ))
