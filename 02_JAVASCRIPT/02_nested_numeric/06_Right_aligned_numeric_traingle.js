

let n = 5 ; 


const right_aligned_numberic_traingle = (n) =>
{
    for(let i = 1 ; i <= n ; i++)
    {
        let row = ""
        //space
        for(let j = 0 ; j <= n - i ; j++)
        {
            row = row + " "
        }

        //numeric 
        for(let k = 1 ; k <= i ; k++)
        {
            row = row + k
        }
        console.log(row)
    }
}

right_aligned_numberic_traingle(n)

//      1
//     12
//    123
//   1234
//  12345