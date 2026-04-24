let n = 5 ;


const rightTraingle = (n) =>
{
    for(let i = 0 ; i < n ; i++)
    {
        let row = ""

        for(let j = 0 ; j <= i ; j++)
        {
            if(j === 0 || j === i || i === n - 1 )
            {
                row = row + "*"
            }
            else 
            {
                row = row + " "
            }
        }
        console.log(row)
    }
    
}

rightTraingle(n)

// *
// **
// * *
// *  *
// *****