let arr = [3,95,84,234,95,93,8,83,29,2,9,2395,93]

const findsecondMin = (arr) =>
{
    let min = Infinity; 
    let secondMin = Infinity; 
    for(let i = 0 ; i < arr.length ; i++)
    {
        if (arr[i] < min)
        {
            secondMin = min ; 
            min = arr[i];
        }
        else if ( arr[i] > min && arr[i] < secondMin)
        {
            secondMin = arr[i]
        }
    }
    return secondMin
}

const output = findsecondMin(arr)
console.log(output)