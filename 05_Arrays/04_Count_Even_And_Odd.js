const arr = [48,43,99,43,929,1,1,2,1,32,5804,54,99,2]

let even = 0 
let odd = 0 


for(let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] % 2 == 0)
    {
        even++
    }
    else 
    {
        odd++
    }
}

console.log(odd)
console.log(even)
