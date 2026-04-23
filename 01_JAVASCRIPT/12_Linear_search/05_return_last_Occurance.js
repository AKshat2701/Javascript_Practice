const lastOccurance = (nums, target) =>
{
    for(let i = nums.length - 1; i >= 0  ; i--)
    {
        if(nums[i] == target)
        {
            return i 
        }
    }
    return -1
}


console.log(lastOccurance([32,1,2,3,3,2,3,4,3,23,4], 3))

// Time: O(n)
// Space: O(1)