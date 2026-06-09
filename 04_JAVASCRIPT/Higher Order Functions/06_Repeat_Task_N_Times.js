function sayHello()
{
    console.log("Hello")
}


function repeat(n, task)
{
    for(let i = 0 ; i < n ; i++)
    {
        task(); 
    }
}

repeat(6, sayHello)


