function square(a)
{
    return a * a ;
}

function cube(a)
{
    return a * a * a ;
}


function calculate(a, callback)
{
    return callback(a) ;
}

const squareVal = calculate(4,square)
console.log(squareVal)

const cubeVal = calculate(5,cube)
console.log(cubeVal)


