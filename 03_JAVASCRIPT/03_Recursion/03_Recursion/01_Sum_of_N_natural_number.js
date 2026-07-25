
//Recursion sum of n Natural numbers 

// function sum(n)
// {

//     if(n == 0 ) return 0 ;
    
//     return n + sum(n - 1 )

// }


// function sum(n, summ)
// {

//     if(n == 0 )
//     {
//         console.log(summ) ;
//         return ; 
//     }
//     sum(n - 1 , summ + n )
// }

// sum(5, 0 )


// function sum(n , curr, sumN)
// {

//     if(curr == n + 1)
//     {
//         console.log(sumN)
//         return ; 
//     }
//     sum(n , curr + 1, sumN + curr)
// }

// sum( 5 , 1, 0 )



//print till n 

function display(n, ans="")
{ 

    if(n == 0)
    {
        console.log(ans)
        return ; 
    }

    display(n - 1 , ans + n + " ")
    
}

display(10)