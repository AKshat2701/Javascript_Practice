//bubble sort
const arr = [4,1,7,0,2]


for(let i = 0 ; i < arr.length - 1 ; i++)
{
    for(let j = 0 ; j < arr.length - 1 ; j++)
    {
        if(arr[j] > arr[j+1])
        {
            const temp = arr[j] ; 
            arr[j] = arr[j+1] ; 
            arr[j+1] = temp ; 
        }
    }
}

console.log(arr)
