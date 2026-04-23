

const DescendingBubbleSort = (arr) =>
{
    let sorted = false
    for(let i = 0 ; i < arr.length - 1  ; i++)
    {
        for(let j = 0 ; j < arr.length - 1 - i ; j++)
        {
            if(arr[j] < arr[j+1])
            {
                let temp = arr[j]
                arr[j] = arr[j + 1 ]
                arr[j + 1 ] = temp

                sorted = true;
            }
        }
        if(!sorted) break
    }
    return arr
}

console.log(DescendingBubbleSort([32,14,43,5,6,7,3,23]))
