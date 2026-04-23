let n = 5 ; 


const Reverse_Traingle = (n) =>
{
    for(let i = 1 ; i <= n ; i++)
    {
        let row = ""

        for(let j = 1 ; j <= n - i ; j++)
        {
            row = row + j + " "
        }
        console.log(row)
    }
}

Reverse_Traingle(n)


// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
