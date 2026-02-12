let num = 5839

let maxDigit = 0 

while(num > 0)
{
    let ld = num % 10

    if (ld > maxDigit)
    {
        maxDigit = ld
    }

    num = Math.floor(num / 10 )
}

console.log("Largest digit = ", maxDigit)