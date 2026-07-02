// let arr = [ 84,34,85,8,38,23,93,4]

// function bubbleSort(arr)
// {   

//    let n = arr.length ; 

//    for(let i = 0 ; i < n - 1 ; i++)
//    {
//     for(let j = 0 ; j < n - i - 1 ; j++)
//     {
//         if(arr[j] > arr[j+1])
//         {
//             //
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp

//         }
//     }
//    }
//    return arr; 
    
// }

// console.log(bubbleSort(arr))



let arr = [ 32,85,3,99,44,9,82,90]


function bubbleSort(arr)
{
    let n = arr.length ; 

    for(let i = 0 ; i < n - 1 ; i++)
    {
        for(let j = 0 ; j < n - i - 1 ; j++)
        { 
            if(arr[j] > arr[j + 1 ])
            {
                let temp = arr[j]
                arr[j] = arr[j + 1 ]
                arr[j+1] = temp ; 
            }
        }
    }
    return arr ;
}

console.log(bubbleSort(arr))