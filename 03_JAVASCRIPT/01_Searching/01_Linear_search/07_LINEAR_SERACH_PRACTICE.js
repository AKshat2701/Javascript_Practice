function linearSearch(arr, target)
{
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] === target)
        {
            return i ; 
        }
    }

    return -1 ; 
}

console.log(linearSearch([32,1,3,42,94,4,5,84] , 84))