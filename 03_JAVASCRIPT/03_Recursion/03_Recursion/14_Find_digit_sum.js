function sum(n)
{
    if(n == 0)
    {
        return 0 ;
    }

    return (n % 10) + sum(Math.floor(n/10))
}

let num = 2351

console.log(sum(num))
