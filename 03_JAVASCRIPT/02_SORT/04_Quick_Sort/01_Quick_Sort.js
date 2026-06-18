function findPivot(arr, first, last)
{
    let pivot = arr[first]
    let i = first + 1 ;
    let j = last ; 


    while(i <= j )
    {
        while(i <= last && arr[i] <= pivot) i++ ; 
        while(j >= first && arr[j] > pivot) j-- ; 

        if(i < j )
        {
            swap(arr, i , j)
        }
    }

    swap(arr, j , first)
    return j ; 
}


function quickSort(arr, first , last)
{
    if(first >= last) return ; 

    let pidx = findPivot(arr, first, last ) ; 
    quickSort(arr, first, pidx - 1 ) ; 
    quickSort(arr, pidx + 1, last) ; 
        
}

function swap(arr, i , j)
{
    let temp = arr[i] ;
    arr[i] = arr[j]
    arr[j] = temp ; 
}


let arr = [32,12,98,53,98,54,90,23] ; 
quickSort(arr, 0 , arr.length - 1 ) 

console.log(arr)
