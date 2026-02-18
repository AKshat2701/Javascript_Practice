

function secondLargest(arr)
{
  if (arr.length < 2 )
  {
    return "0"
  }

  let lagestDig = -Infinity
  let secondDig = -Infinity

  for(let i = 0 ; i < arr.length ; i++)
  {
    let num = arr[i]

    if( num > largest)
    {
        secondDig = largest
        largest = num 
    } else if ( num > secondDig && num !== largest)
    {
        secondDig = num 
    }
  }

  if( secondDig === Infinity)
  {
    return "NO second largest element"
  }
}

console.log(secondLargest([32,566,45,46,34,76,45,63,4,234923,,234,453,453,2,,6667,87,5]))
