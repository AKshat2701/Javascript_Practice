const selectionSort = (number) =>
{
    for(let currIdx  = 0 ; currIdx < number.length ; currIdx++)
    {
        let minIdx = currIdx ; 

        for(let scanIdx = currIdx + 1 ; scanIdx < number.length ; scanIdx++)
        {
            if(number[scanIdx] < number[currIdx])
            {
                minIdx = scanIdx ;
            }
        }
        if (minIdx !== currIdx) {
            const temp = number[currIdx];
            number[currIdx] = number[minIdx];
            number[minIdx] = temp;
        }
    }
    return number
}

console.log(selectionSort([56,4,493,95,57,85,29,4,5]))