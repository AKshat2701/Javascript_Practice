// using recursion 

function star(n , str="")
{
    if(n == 0 ) return 
    

    str =  str + "* "
    console.log(str)
    star(n -1  , str)
}

star(5)