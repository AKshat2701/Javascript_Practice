function selectionSort(arr)
{
  for(let i = 0 ; i < arr.length - 1 ; i++)
  {
    let minIdx = i ; 
    
    for(let j = i + 1 ; j < arr.length ; j++)
    {
        if(arr[j] < arr[minIdx])
        {
            minIdx = j ; 
        }
    }
    if(minIdx !== i)
    {
        const temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp ; 
    }
  }
  return arr
}


console.log(selectionSort([32,5,854,85,349,29,39,58,59]))
console.log(selectionSort([17,20,99,4,31]))
