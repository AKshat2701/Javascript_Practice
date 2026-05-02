function Countdown(n)
{
    if(n === 0)
    {
        console.log("Go")
        return 
    }
    
    console.log(n)
    Countdown(n-1)

}

Countdown(5)
