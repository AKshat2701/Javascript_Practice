function printNumber(n)
{
    if(n == 0) return 
    printNumber(n-1)
    console.log(n)
}

printNumber(10)

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10