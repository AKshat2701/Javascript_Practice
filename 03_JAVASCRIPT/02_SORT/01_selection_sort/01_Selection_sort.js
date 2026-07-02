let arr = [ 5,3,7,9,1, 4]


function selectionSort(arr)
{
    let n = arr.length ; 

    for(let i = 0 ; i < n - 1 ; i++)
    {
        let minIndex = i ; 

        for(let j = i + 1 ; j < n ; j++)
        {
            if(arr[minIndex] > arr[j])
            {
                minIndex = j 
            }
        }
        if(minIndex != i)
        {
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp ; 
        }
    }
    return arr ; 
}


console.log(selectionSort(arr))
