const firstOccurance = (nums, target) =>
{
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i] == target)
        {
            return i 
        }
    }
    return -1
}

console.log(firstOccurance([2,3,4,5,4,54,3,43,2], 54))
console.log(firstOccurance([2,3,4,5,4,54,3,43,2], 2))