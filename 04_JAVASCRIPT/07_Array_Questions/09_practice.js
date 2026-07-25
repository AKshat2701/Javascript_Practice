// // merge sort practice 
// function merge(arr, first , mid , last)
// {
//     let temp = new Array(last - first + 1)

//     let i = first ; 
//     let j = mid + 1 ; 

//     let k = 0 ; 


//     while( i <= mid && j <= last)
//     {
//         if(arr[i] < arr[j])
//         {
//             temp[k] = arr[i]
//             k++ , i++ ; 
//         }
//         else 
//         {
//             temp[k] = arr[j]
//             k++ , j++ ; 
//         }
//     }

//     while( i <= mid )
//     {
//         temp[k] = arr[i]
//         k++ , i++ ; 
//     }

//     while( j <= last)
//     {
//         temp[k] = arr[j]
//         k++ , j++ ; 
//     }

//     //actual array me temp se copy karna
//     let p = 0 ; 
//     let t = first ; 

//     while( p < temp.length)
//     {
//         arr[t] = temp[p]
//         t++, p++ ;
//     }

// } 

// function divide(arr, first, last)
// {
//     if(first >= last ) return ; 
//     let mid = Math.floor((first + last)/ 2 ); 

//     divide(arr, first, mid )
//     divide(arr, mid + 1, last )

//     merge(arr, first, mid , last )
// }

// let arr = [8,2,1,9,5,12,4,20]

// divide(arr, 0 , arr.length - 1 )

// console.log(arr)


// function merge(arr, first, mid , last )
// {
//     let tempArr = new Array(last - first + 1)

//     let i = first ;
//     let j = mid + 1 ;

//     let k = 0 ; 

//     while( i <= mid && j <= last)
//     {
//         if(arr[i] < arr[j])
//         {
//             tempArr[k] = arr[i]
//             k++, i++ ; 
//         }
//         else 
//         {
//             tempArr[k] = arr[j]
//             k++, j++; 
//         }
//     }

//     while(i <= mid)
//     {
//         tempArr[k] = arr[i]
//         k++, i++; 
//     }

//     while(j <= last)
//     {
//         tempArr[k] = arr[j]
//         k++, j++; 
//     }

//     let p = 0 ; 
//     let t = first ; 

//     while( p < tempArr.length)
//     {
//         arr[t] = tempArr[p]
//         t++, p++ ; 
//     }
// }

// function divide(arr, first, last)
// {
//     if(first >= last ) return ; 

//     let mid = Math.floor((first + last ) / 2 )

//     divide(arr, first, mid )
//     divide(arr, mid + 1, last )

//     merge(arr, first, mid ,last )

// }

// let arr = [4,1,2,5,7,6,9,10]

// divide(arr, 0 , arr.length - 1 )

// console.log(arr)



//  function merge(arr, first, mid , last)
//  {
//     let tempArr = new Array(last - first + 1)

//     let i = first ; 
//     let j = mid + 1 ; 

//     let k = 0 ; 

//     while( i <= mid && j <= last)
//     {
//         if(arr[i] <= arr[j])
//         {
//             tempArr[k] = arr[i]
//             k++ , i++ ;
//         }
//         else 
//         {
//             tempArr[k] = arr[j]
//             k++, j++ ; 
//         }

//     }
//     while( i <= mid)
//     {
//         tempArr[k] = arr[i]
//         k++ , i++ ; 
//     }

//     while( j <= last)
//     {
//         tempArr[k] = arr[j]
//         k++ , j++ ; 
//     }

//     let p = 0 ;
//     let t = first ;

//     while( p < tempArr.length)
//     {
//         arr[t] = tempArr[p]
//         t++ , p++; 
//     }

//  }

//  function divide(arr, first, last)
//  {
//     if(first >= last) return ; 
//     let mid = Math.floor((first+ last)/2 )

//     divide(arr, first, mid )
//     divide(arr, mid + 1, last)

//     merge(arr, first, mid, last)


//  }

//  let arr = [9 ,2,3,5,1,8,6,7,10]
//  divide(arr, 0 , arr.length - 1 )

// console.log(arr)



function findPivot(arr, first, last)
{
    let pivot = arr[first]
    let i = first + 1, j = last ; 

    while( i <= j )
    {
        while( i <= last && arr[i] <= pivot) i++ ; 
        while( j >= first && arr[j] > pivot) j-- ; 


        if(i < j)
        {
            swap(arr, i ,j)
        }
    }

    swap(arr, j, first) ; 
    return j ; 

}

function swap(arr, i , j )
{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, first, last)
{
    if(first >= last) return ; 

    let pdx = findPivot(arr, first , last)

    quickSort(arr, first, pdx - 1 )
    quickSort(arr, pdx + 1 , last)
}

let arr = [ 9,10,12,4,3,1,6,5,9,8,15]

quickSort(arr, 0 , arr.length - 1 )

console.log(arr)



function quickSort(arr, first, last)
{
    if(first >= last) return 

    let pdx = findPivot(arr, first, last)
    quickSort(arr, first , mid )
    quickSort(arr, mid+1 , last)
}

function findPivot(arr, first, last)
{
    let pivot = arr[first]
    let i = first , j = last ;

    while( i <= j )
    {
        
    }
}

let arr = [9,1,10,8,5,2,4,5]

quickSort(arr, 0 , arr.length - 1 )

console.log(arr)
