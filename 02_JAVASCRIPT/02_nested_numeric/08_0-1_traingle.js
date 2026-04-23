let n = 5 ;

const zeroOneTraingle = (n) =>
{
    for(let i = 1 ; i <= n ; i++)
    {
        let row = ""

        // decide starting value
        let val = ( i % 2 === 1) ? 0 : 1 ; 

        for(let j = 1 ; j <= i ; j++)
        {
            row = row + val + " "

            // flip between 0 and 1
            val = (val === 1 ) ? 0 : 1 ;
        }
        console.log(row) ; 
    }
}

zeroOneTraingle(n)