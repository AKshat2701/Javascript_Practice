function printNumber(n)
{
    //base case
    if(n == 0) return 
    console.log(n)

    //recursive relation 
    printNumber(n-1)
}
printNumber(10)



// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1