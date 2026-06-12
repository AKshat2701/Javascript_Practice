function add(a, b)
{
    return a + b
}

function multiply(a , b)
{
    return a * b
}

function divide( a , b)
{
    return a / b 
}


function calculate(a, b , operation)
{
    return operation(a, b)
}


const addValues = calculate(43,23,add)
console.log(addValues)

const multiplyValue = calculate(29,2, multiply)
console.log(multiplyValue)

const divideValues = calculate(49,2, divide)
console.log(divideValues)
