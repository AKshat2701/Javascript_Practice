let arr = [85,38,8,43,7,38,12]


function selectionSort(arr)
{
    let n = arr.length ;

    for(let i = 0 ;i < n ; i++)
    {
        let minIndex = i ;

        for(let j = i + 1 ; j < n ; j++)
        {
            if(arr[j] < arr[minIndex])
            {
                minIndex = j 
            }
        }
        if(minIndex !== i)
        {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr ; 
}
console.log(selectionSort(arr))
