const findMin = (nums) => {
    if(nums.length === 0 ) return null;

    let min = nums[0]
    for(let i = 1 ; i < nums.length ; i++)
    {
        if(nums[i] < min)
        {
            min = nums[i] ; 
        }
    }

    return min ; 
}

console.log(findMin([32,5,45,34,85,34,99,54,94]))
