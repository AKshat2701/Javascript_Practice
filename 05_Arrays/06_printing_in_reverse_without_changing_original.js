const arr = [1,2,3,4,5,6,7,8]

let reverse = []

for(let i = 0 ; i < arr.length ; i++)
{
    reverse.unshift(arr[i])
}
console.log(reverse)
