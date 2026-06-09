function sayHi(name)
{
    return `Hello ${name}, lets learn HOF` ; 
}

function sayBye(name)
{
    return `Bye ${name}, have a greet day`; 
}

function greet(name, calback)
{
    return calback(name)
}

const Hi = greet("Akshat", sayHi)
console.log(Hi)

const bye = greet("Akshat", sayBye)
console.log(bye)


