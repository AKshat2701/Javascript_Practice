

const checkprime =(number) =>
{
    //primeNumber
    let isPrime = true

    if(number === 1 || number < 1)
    {
        return "number is not prime"
    }
    else 
    {
        for(let i = 2 ; i <= number/2 ; i++)
        {
            if(number % i === 0)
            {
                isPrime = false
                break
            }
           
        }
    }

            if(isPrime)
            {
                return "Number is prime"
            }else 
            {
                return "Number is not prime"
            }
    
}
console.log(checkprime(1))
console.log(checkprime(29))
console.log(checkprime(-1))
console.log(checkprime(2))