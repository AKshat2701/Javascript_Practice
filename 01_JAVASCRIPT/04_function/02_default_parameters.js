function add(a = 0 , b = 10)
{
    return a + b
}
console.log(add(94, 6))



function simpleInterest( p , r = 5 , t = 2)
{
    return (p * r * t) / 100
}
console.log(simpleInterest(1009043, 9, 20))



function area(length , breath = length)
{
    return length * breath
}

console.log(area(5, 10))
console.log(area(5))


function test(value = 10)
{
    console.log(value)
}

test()
test(undefined)
test(null)
