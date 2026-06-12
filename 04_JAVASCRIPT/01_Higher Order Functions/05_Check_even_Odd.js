function checkEven(number)
{
    if(number % 2 === 0 )
    {
        return `${number} is even` ; 
    }
    return -1 ;
}

function checkOdd(number)
{
    if(number % 2 !== 0 )
    {
        return `${number} is odd` ; 
    }
    return -2 ;
}


//higher order function
function check(number, callback)
{
    return callback(number)
}


const ifOdd = check(43, checkOdd)
console.log(ifOdd)


const ifEven = check(89, checkEven)
console.log(ifEven)

const ifEveN = check(80, checkEven)
console.log(ifEveN)