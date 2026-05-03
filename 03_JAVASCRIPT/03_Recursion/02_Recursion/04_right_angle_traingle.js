function traingle(n, str = "")
{
    if(n == 0) return  ;

    str = str + "* "
    console.log(str)
    traingle(n-1, str)
}

traingle(5)
