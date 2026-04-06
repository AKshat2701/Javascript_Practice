function frequencyCounter(arr)
{
    let freq = {}

    for(let i = 0 ; i< arr.length ; i++)
    {
        let elem = arr[i]

        if(freq[elem] === undefined)
        {
            freq[elem] = 1 
        } else
        {
            freq[elem] ++
        }
    }

    return freq
}


console.log(frequencyCounter([1,2,32,3,42,4,5,23,41,232,3,12,2,3,12,2,3,21]))