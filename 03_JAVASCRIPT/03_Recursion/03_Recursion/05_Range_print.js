function print(x, y, str = "")
{
    if(y < x ) 
    {
        console.log(str)
        return
    }
    
    print(x, y - 1 , str = y +" " + str)
}

print(10, 20)