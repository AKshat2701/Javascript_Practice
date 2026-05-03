
function isprime(num)
{
    if(num < 2) return false ;

    for(let i = 2 ; i * i <= num ; i++)
    {
        if(num % i === 0 )
        {
            return false
        }
        return true ; 
    }
    for(let i = 1 ; i <= num ; i++)
    {
        if(isprime(i))
        {
            console.log(i)
        }
    }
}


console.log(isprime(15))