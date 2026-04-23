
let n = 5 ;

const hollowRectangle = (n) =>
{
    for(let i = 0 ; i < n ; i++)
    {
        let row = ""

        for(let j = 0 ; j < n ; j++)
        {
            if(i == n - 1 || i == 0 || j == 0 || j == n - 1)
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

hollowRectangle(n)


// *****
// *   *
// *   *
// *   *
// *****