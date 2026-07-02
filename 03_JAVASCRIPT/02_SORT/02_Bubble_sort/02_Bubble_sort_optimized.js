function bubbleSort(arr)
{
    let n = arr.length ; 

    for(let i = 0 ; i < n - 1 ; i++)
    {
        let swapped = true ; 

        for(let j = 0 ; j < n - i - 1 ; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp ; 

                swapped = true ; 
            }
        }
        if(!swapped)
        {
            break
        }
    }
    return arr ; 
}
let arr = [57,4,5,7,3,57,87,54,5,7]
console.log(bubbleSort(arr))
