

const evenSorting = (arr) =>
{
    for(let i = 0 ; i < arr.length - 1 ; i++)
    {
        for(let j = 0 ; j < arr.length - 1 - i ; j++)
        {
            if(arr[j] % 2 == 0 && arr[j + 1 ] % 2 === 0)
            {
                //normal bubble condition 
                if(arr[j] > arr[j+1])
                {
                    [arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        }
    }

    return arr; 
}

console.log(evenSorting([32,12,4,54,65,7,5,89,4,3,2]))
