// function bubbleSort(arr)
// {
//     let n = arr.length ; 
    

//     for(let i = 0 ; i < n - 1 ; i++)
//     {
//         let swapped = false ;
//         for(let j = 0 ; j < n - 1 - i ; j++)
//         {
//             if(arr[j] > arr[j + 1])
//             {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp ; 

//                 swapped = true; 
//             }

//         }
//         if(!swapped) {
//             break 
//         }
//     }

//     return arr ;
// }

// function bubbleSort(arr)
// {
//     let n = arr.length ; 
//     for(let i = 0 ; i < n ; i++)
//     {
//         let swapped = false ; 
//         for(let j = 0 ; j < n - i - 1 ; j++)
//         {
//             if(arr[j] > arr[j + 1])
//             {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp ; 

//                 swapped = true ;
//             }
//         }
//         if(!swapped)
//         {
//             break ;
//         }

//     }
//     return arr ; 
// }

// let arr = [9,5,2,1,7,10,8]
// console.log(bubbleSort(arr))




//Selection Sort 
// function selectionSort(arr)
// {
//     let n = arr.length ; 

//     for(let i = 0 ; i < n ; i++)
//     {
//         let minIndex = i ; 

//         for(let j = i + 1; j < n ; j++)
//         {
//             if(arr[j] < arr[minIndex])
//             {
//                 minIndex = j ; 
//             }
//         }
//         if(minIndex != i)
//         {
//             let temp = arr[minIndex]
//             arr[minIndex] = arr[i]
//             arr[i] = temp ;
//         }
//     }
//     return arr ; 
// }

// let arr = [9,2,8,4,1,43,85]

// console.log(selectionSort(arr))


// function selectionSort(arr)
// {
//     let n = arr.length ; 

//     for(let i = 0 ; i < n ; i++)
//     {
//         let minIndex = i ; 

//         for(let j = i + 1; j < n ; j++)
//         {
//             if(arr[j] < arr[minIndex])
//             {
//                 minIndex = j ; 
//             }
//         }
//         if(minIndex != i)
//         {
//             let temp = arr[minIndex]
//             arr[minIndex] = arr[i]
//             arr[i] = temp ; 
//         }
//     }
//     return arr ;
// }
// let arr = [9,4,2,7,1,7,8,18]

// console.log(selectionSort(arr))














//Insertion Sort 
function insertionSort(arr)
{
   let n = arr.length ; 
   for(let i = 1 ; i < n ; i++) 
   {
    let key = arr[i]
    let j = i - 1 ;

    while( j >= 0 && arr[j] > key)
    {
        arr[ j + 1] = arr[j]
        j-- ; 
    }
    arr[j + 1] = key ; 
   }
   return arr ; 
}

let arr = [8,4,2,1,6,7,12,90]
console.log(insertionSort(arr))
