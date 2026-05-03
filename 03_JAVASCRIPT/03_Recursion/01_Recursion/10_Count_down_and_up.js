// Write a function countDownUp(n) that counts down to 0, then counts back up.


// 3 2 1 0 1 2 3


function CountDownup(n)
{
    if(n == 0 )
    {
        console.log(0)
        return 
    }

    console.log(n)
    CountDownup(n-1)
    console.log(n)
}

CountDownup(5)