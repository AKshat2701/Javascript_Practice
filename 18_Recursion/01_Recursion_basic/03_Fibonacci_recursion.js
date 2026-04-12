function fib(n)
{
    if( n == 0 ) return 0 
    if(n == 1 ) return 1 

    return fib(n - 1 ) + fib(n - 2 )
}

function printFib(n)
{
    for(let i = 1 ;  i <= n ; i++)
    {
        process.stdout.write( fib(i) + " ")
    }
}

printFib(8)