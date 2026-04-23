const binarySerach =(nums, target) =>
{
    let start = 0 
    let end = nums.length - 1 


    let middle = Math.floor((start + end) / 2)

    while(start <= end)
    {
        let middle = Math.floor((start+end) / 2)

        if(nums[middle] === target)
        {
            return middle ;
        } else if(nums[middle] < target)
        {
            start = middle + 1 
        }
        else {
            end = middle - 1 ; 
        }
    }

    return -1 
}

console.log(binarySerach([-2,1,2,4,7,8,9,10], 10))
