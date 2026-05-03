function numberSum(n , sum)
{
    if(n == 0 ) 
    {
        console.log(sum)
        return 
    }

    numberSum(n - 1, sum + n ) ; 
}

numberSum(15,0)