

let arr = [1,2,3,4,5,5,6,7,9,23,49,79]


const firstOccurance = (arr, target) =>
{
    let start = 0 ; 
    let end = arr.length - 1 

    let ans = -1 

    while(start <= end)
    {
        let mid = start + Math.floor((end - start)/2)

        if(arr[mid] == target)
        {
            ans = mid;
            end = mid - 1 ; 
        }
        else if (target > arr[mid])
        {
            //right serach
            start = mid + 1 ; 
        }
        else if(target < arr[mid])
        {
            end = mid - 1 ; 
        }
        
    }
    return ans ;
}

console.log(firstOccurance(arr, 5))