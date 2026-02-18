
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8,9]


let newArr = []

for (let i = 0 ; i < arr1.length ; i++)
{
    newArr.push(arr1[i])
}

for (let i = 0 ; i < arr2.length ; i++)
{
    newArr.push(arr2[i])
}

console.log(newArr)


//using concat 
function twoArray (arr1, arr2)
{
    return arr1.concat(arr2)
}

console.log(twoArray([1,2,3,4], [5,6,7,8]))
