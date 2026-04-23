let num = 84938459


let max = 0 

while( num > 0)
{
    let lastDig = num % 10
    if (lastDig > max)
    {
        max = lastDig
    }
    num = Math.floor(num/10)
}

console.log(max)

