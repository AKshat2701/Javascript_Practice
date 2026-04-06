
let arr = [121,432,55,234,0,342,304,2303,230,0,0,3,0]


let nonZero = []
let countZero = 0 

for(let i = 0 ; i < arr.length ; i++)
{
    if ( arr[i] !== 0 )
    {
        nonZero.push(arr[i])
    }
    if (arr[i] == 0 )
    {
        countZero++
    }
}


console.log(nonZero)

for(let i = 0  ; i < countZero ; i++)
{
    nonZero.push(0)
}
console.log(nonZero)

