//check if the element exists
// Return true/false instead of index

let nums = [94,5,49,39,20,8,58,8,85]



const checkElem = (arr, target) =>
{
    for(let num of arr)
    {
        if(num === target) return true; 
    }
    return false; 
}

console.log(checkElem(nums, 8))

