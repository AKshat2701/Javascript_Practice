// finding maximum Element 
// let arr = [94,5,49,39,20,8,58,8,8,85]


// const findMax = (arr) =>
// {
//     let max = -Infinity;

//     for(let num of arr)
//     {
//         if(num > max)
//         {
//             max = num ; 
//         }
//     }
//     return max; 
// }

// console.log(findMax(arr))

const maxi = (arr) =>
{
    let max = -Infinity ; 

    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] > max )
        {
            max = arr[i] ; 
        }
    }
    return max ; 
}

console.log(maxi([94,23,1,49,85,3,64,2])) ;
