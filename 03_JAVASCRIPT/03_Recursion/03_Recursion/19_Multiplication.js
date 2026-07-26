

function multiple(x,y)
{
    if(y == 0 )
    {
        return 0 ; 
    }
    return x + multiple(x , y - 1 )
}


console.log(multiple(19, 2))