function range(x , y , str = "")
{
    if( x > y )
    {
        console.log(str)
        return 
    }

    if(isPrime(x))
    {
        str = str + x + " " ; 
    }


    range( x + 1, y , str)
}

function isPrime(num, divisor = 2)
{
    if(num < 2 ) return false; 

    if(divisor * divisor > num) return true ; 

    if(num % divisor === 0 ) return false ; 

    return isPrime(num, divisor + 1 )
}

range(10, 30)