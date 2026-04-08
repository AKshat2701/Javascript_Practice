const lineaSearch = (nums , target) =>
{
    
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(target == nums[i])
        {
            return i 
        }
    }

    return -1
}

console.log(lineaSearch([32,3,4,3,23,4,5885,4,3,5], 0))
console.log(lineaSearch([32,58,2,12,3,54,6], 6))
