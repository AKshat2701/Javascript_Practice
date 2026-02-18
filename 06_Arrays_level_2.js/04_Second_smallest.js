
function secondSmallest(arr)
{
    if(arr.length < 2)
    {
        return "no second smallest "
    }

    let smallest = Infinity
    let secSmallest = Infinity

    for (let i = 0 ; i <arr.length ; i++)
    {
        let num = arr[i]

        if( num < smallest )
        {
            secSmallest = smallest
            smallest = num 
        }
    }
}


console.log(secondSmallest(4,3,65,64,56,345,2,54345,764,3,45,34,4,7,878,45))

