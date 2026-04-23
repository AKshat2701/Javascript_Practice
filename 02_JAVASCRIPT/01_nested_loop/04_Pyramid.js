let n = 5 

for(let i = 0 ; i < n ; i++)
{
    let row = ""
    //spaces
    for(let j = 0 ; j < n - i ; j++)
    {
        row = row + " "
    }
    
    //stars
    for(let k = 0 ; k <= i  ; k++)
    {
        row = row + "* "
    }
    console.log(row)
}

//      * 
//     * * 
//    * * * 
//   * * * * 
//  * * * * * 