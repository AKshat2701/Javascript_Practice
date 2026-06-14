function add(a , b)
{
    return a + b ; 
}

function square(val)
{
    return val * val ; 
}

function multiply(...args)
{
    return args[0] * args[1] ;
}

function composeTwoFunction(fn1 , fn2)
{
    return function(a , b )
    {
        return  fn2(fn1(a,b))
    }
}

function compose(...fns) 
{
    return function(...values)
    {
        fns.reduceRight((a , b ) => b(a), value)
    }
}



const c2f = (fn1 , fn2 ) => (a , b ) => fn2(fn1(a,b))

const task = composeTwoFunction(add , square)
const task2 = composeTwoFunction(multiply, square)

console.log(task(2,3))
console.log(task2(10,3))



