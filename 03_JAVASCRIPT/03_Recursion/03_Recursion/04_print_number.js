function print(n, str = "")
{
    if(n == 0 ) 
    {
        console.log(str)
        return
    }

    print(n - 1 , n +" "+ str)
}

print(5)