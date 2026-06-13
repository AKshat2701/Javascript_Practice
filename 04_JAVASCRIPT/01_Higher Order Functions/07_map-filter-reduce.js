




//Sum all number 
// const num = [3,2,1,4,3,5,619,3]

// const sum = num.reduce((acc, curr) =>
// {
//     return curr + acc 
// }, 0)

// console.log(sum)



//find maximum 
const num = [43,1,2,34,5,94]

const max = num.reduce((acc, curr) =>
{
    return curr > acc ? curr : acc ; 
}, num[0])

console.log(max)
