console.log(product(3))

function product(n)
{
    if(n < 1 ) return 1 ; 

    return n * product(n - 1 )
}
