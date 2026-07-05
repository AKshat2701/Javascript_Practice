

function selectionSort(arr)
{
    let n = arr.length ; 

    for(let i = 1 ; i < n ; i++)
    {
        let key = arr[i]

        let j = i - 1 ;

        while( j >= 0  && arr[j] > key)
        {
            arr[j + 1 ] = arr[j]
            j-- ; 
        }
        arr[j + 1] = key ; 
    }

    return arr ; 

}


let arr  = [85,34,8,54,99,23,8,54]
console.log(selectionSort(arr))
