const binarySearch = (arr , target) =>
{
    let start = 0 ; 
    let end = arr.length - 1 ; 


    while(start <= end)
    {
        let mid = Math.floor((start + end)/2 ) ; 

        if(arr[mid] === target)
        {
            return {
                value : arr[mid] ,
                index : mid 
            }; 
            
        }

        if(target > arr[mid])
        {
            start = mid + 1 ; 
        }
        else 
        {
            end = mid - 1 ; 
        }
    }
    return -1 ; 
}

let arr = [32,43,52,65,78,79,90,100]

console.log(binarySearch(arr, 79))