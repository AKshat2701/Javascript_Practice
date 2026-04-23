const BubbleSort = (arr) =>
{
    for(let i = 0 ; i < arr.length - 1 ;  i++)
    {
        // - i 
        for(let j = 0 ; j < arr.length - 1 - i ; j++)
        {
            if(arr[j] > arr[j + 1 ])
            {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(BubbleSort([94,5,23,1,3,54,7,76,854,84]))
