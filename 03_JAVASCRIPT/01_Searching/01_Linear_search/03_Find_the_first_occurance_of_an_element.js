
let arr = [94,5,49,39,20,8,58,8,8,85]

const findFirstOcc = (arr, target) =>
{
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i] == target)
        {
            return `${target} is in ${i}`
        }
    }
    return -1
}

let output = findFirstOcc(arr, 85)
console.log(output)



const secondOccurance = (arr, target) =>
{
    
    let count = 0 ; 

    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] === target)
        {
            count++
        }

        if(count === 3 )
        {
            return i 
        }
    }
    return -1 
}


const getSecondIndex = secondOccurance(arr, 8)

console.log(getSecondIndex)
