// print number 1 to N
// function print(n, curr)
// {
//     if(curr > n)
//     {
//         console.log(curr)
//         return 
//     }
//     console.log(curr)
//     print(n , curr+1)
// }
// print(5,1 )


// print number N to 1 ; 
// function print(start , curr)
// {
//     if(curr == 0)
//     {
//         return 
//     }
//     console.log(curr)
    
//     print(start , curr-1)
// }

// print(10, 10)

//sum 1 to n

// function sumTon(total , curr, sum)
// {
//     if(curr == total)
//     {
//         console.log(sum+curr)
//         return ;
//     }

//     sumTon(total, curr + 1 , sum + curr)
// }
// sumTon(5,1,0)

//multiple of 1 to N
// function fact(n, result = 1)
// {
//     if( n == 0 ) return result ; 
//     return fact( n - 1 , result * n )
// }

// console.log(fact(5))

// count A to B 
// function count(curr, end)
// {
//     if(curr == end)
//     {
//         console.log(curr)
//         return 
//     }
//     console.log(curr)
//     count(curr+1, end)
// }

// count(1, 5)



//sum of even
// function Sum(n, curr = 2, sum = 0 )
// {
//     if(curr > n )
//     {
//         console.log(sum)
//         return 
//     }
    
//     Sum(n , curr+2, sum + curr)
// }

// Sum(10)

//odd sum
// function oddSum(n, curr = 1, sum = 0 )
// {
//     if(curr > n )
//     {
//         console.log(sum)
//         return
//     }

//     oddSum(n, curr + 2 , sum + curr)
// }
// oddSum(10)


// function table(n , curr, limit)
// {
//     if(curr > limit)
//     {
//         return 
//     }

//     console.log(`${n} X ${curr} = ${n * curr}`)
//     table(n , curr + 1, limit)

// }
// table(3, 1, 10)


function print(n, ans = "")
{
    if(n == 0)
    {
        console.log(ans)
        return  
    }
    print(n-1, ans + n + " ")
}


print(5)