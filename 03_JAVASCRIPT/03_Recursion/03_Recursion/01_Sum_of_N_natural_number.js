


function sumOfn(n)
{
    if(n === 0 ) return 0 ; 

    return n + sumOfn(n-1)
    
}

console.log(sumOfn(6))