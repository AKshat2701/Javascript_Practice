const checkElement = (nums, target) =>
{
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i] == target)
        {
            return true
        }
    }
    return false
}


console.log(checkElement([32,1,24,4,3,6,76], 9))
console.log(checkElement([32,1,24,4,3,6,76], 6))
