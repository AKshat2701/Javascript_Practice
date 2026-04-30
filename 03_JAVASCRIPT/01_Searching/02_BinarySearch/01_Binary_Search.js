//condition ye hai ki array mera , monotonic order me hona chayie 

// start = 0 , end = n - 1 




let arr = [1,2,3,4,5,7,9,19,31,53,95]


const BinarySerch = (arr, target) =>
{
    
    let start = 0 ;
    let end = arr.length - 1 ; 
    
    while(start <= end)
    {
        let mid = start + Math.floor((end - start)/2)
        let elem = arr[mid]

        if(elem == target)
        {
            return mid
        }
        else if(target < elem)
        {
            end = mid - 1; 
        }
        else 
        {
            start = mid + 1
        }
        
    }
    return - 1 
}

console.log(BinarySerch(arr, 95))