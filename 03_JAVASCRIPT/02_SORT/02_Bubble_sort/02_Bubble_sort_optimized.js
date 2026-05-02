let arr = [39,58,38,9,32,99,48,59,2]

function bubbleSort()
{
    let n = arr.length ; 

    for(let i = 0 ; i < n ; i++)
    {
        let swapped = false; 

        for(let j = 0 ; j < n - i - 1 ; j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr ;
}
console.log(bubbleSort(arr))
