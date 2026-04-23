

let n = 9 ; 

const hollowSquare = (n) =>
{
    
    for(let i = 0 ; i < n ; i++)
    {
        let row = ""

        for(let j = 0 ; j < n ; j++)
        {
            if( i === 0 || i === n - 1 || j === 0 || j === n - 1)
            {
                row = row + "*"
            } else 
            {
                row = row + " " ; 
            }
        }
        console.log(row) ; 
    }
}

hollowSquare(n)

// *********
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// *********
