const countOccurance = (nums, target) =>
{
    let count = 0 
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i] == target)
        {
            count++;
        }
    }
    return count; 
}


console.log(countOccurance([99,43,2,3,2,4,,2,34,4,2], 2))
