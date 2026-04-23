let n = 5


const diamond = (n) =>
{
    for(let i = 0 ; i < n ; i++)
    {
        let row = ""
        //spaces 
        for(let j = 0 ; j < n - i ; j++)
        {
            row = row + " "
        }


        for(let k = 0 ; k < i ; k++)
        {
            row = row + "* "
        }
        console.log(row)
    }

    for(let m = 0 ; m < n ; m++)
    {
        let row = ""
        //spaces 
        for(let x = 0 ; x < m ; x++)
        {
            row = row + " "
        }

        //stars 
        for(let o = 0 ; o < n - m ; o++  )
        {
            row = row + "* "
        }


        console.log(row)
    }
}


console.log(diamond(n))

// O(n²) + O(n²) = O(2n²)
     
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     *