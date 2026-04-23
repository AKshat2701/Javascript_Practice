let n = 5 ; 


const reverseNumber = (n) =>
{
    for(let i = 1 ; i <= n ; i++)
    {
        let row = ""
        for(let j = i ; j > 0 ; j --  )
        {
            row = row + j + " "
        }
        console.log(row)
    }
}

reverseNumber(n)

// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
// 5 4 3 2 1 