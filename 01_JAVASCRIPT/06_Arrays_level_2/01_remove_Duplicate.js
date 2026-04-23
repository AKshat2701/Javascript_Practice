
const arr = [1,2,31,21,2,3,2,3,43,43,432,2,12,32,32]

const unique = []

for(let i = 0 ; i < arr.length ; i++)
{
    if(!unique.includes(arr[i]))
    {
        unique.push(arr[i])
    }
}

console.log(unique)

