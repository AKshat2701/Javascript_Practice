const indexOfsecondLargest = (nums) =>
{
    if(nums.length < 2 ) return -1

    let max = -Infinity
    let maxIndex = -1

    let secondMax = -Infinity
    let secondmaxIndex = -1 ; 

    for (let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i] > max)
        {
            secondMax = max; 
            secondmaxIndex = maxIndex;

            max = nums[i]
            maxIndex  = i ; 
        } else if(nums[i] > secondMax && nums[i] !== max)
        {
            secondMax = nums[i]
            secondmaxIndex = i ; 
        }
    }
    return secondmaxIndex;
}


console.log(indexOfsecondLargest([32,3,4,54,96,54,3,4,54,6,654,54,86,34,5]))
