const BubbleSort = (nums) =>
{
    for(let i = 0 ; i < nums.length - 1 ; i++)
    {
        for(let j = 0 ;  j < nums.length - 1 ; j++)
        {
            if(nums[j] > nums[j+1])
            {
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }
    return nums
}

console.log(BubbleSort([4,1,0,5,2,59,43,2]))
