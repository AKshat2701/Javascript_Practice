// Write a function power(base, exp) that returns base raised to the power of exp


function power(base, exp)
{
    if( exp == 0 )
    {
        return 1 
    }

    return base * power(base, exp-1)
}

console.log(power(2, 6))