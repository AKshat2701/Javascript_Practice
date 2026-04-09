//adding check 


const BubbleSort = (arr) => 
{
    let swapped = false;  

    for(let i = 0 ; i < arr.length - 1  ; i++)
    {
        for(let j = 0 ;  j < arr.length - 1 - i ; j++)
        {
            if(arr[j] > arr[j + 1 ])
            {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                swapped = true ; 
            }
        }
        if(!swapped) break  
        //adding this check if not swapped - means array already sorted O(n) - linear time complexity , Best time complexity 

    }
    return arr
}

console.log(BubbleSort([43,6,4,5,76,8,34,25]))
